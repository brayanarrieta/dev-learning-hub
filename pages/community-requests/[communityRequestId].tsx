import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Badge,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { getAPICommunityRequestById, postAPIApproveCommunityRequest } from '../../constants/apiURLs';
import { CommunityRequestType, HTTP_METHODS } from '../../constants/enums';
import CommonFooterView from '../../custom-components/CommunityRequests/Views/CommonFooterView';
import CourseView from '../../custom-components/CommunityRequests/Views/CourseView';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import { makeRequest } from '../../helpers/makeRequest';
import { CommunityRequest } from '../../types';

interface CommunityRequestProps {
  communityRequestInitialData: CommunityRequest;
  user: any;
}

const CommunityRequestDetails = (props: CommunityRequestProps) => {
  const { communityRequestInitialData, user: currentUser } = props;

  const [communityRequest, setCommunityRequest] = useState(communityRequestInitialData);

  const {
    title, type, descriptionData, state,
  } = communityRequest;

  const toast = useToast();

  const handleCommunityRequestApprove = async () => {
    const { data } = await makeRequest({
      method: HTTP_METHODS.POST,
      url: postAPIApproveCommunityRequest(communityRequest._id),
      data: { userEmail: currentUser.email },
    });

    const { success } = data;

    if (success) {
      const { communityRequestApproves } = data;
      setCommunityRequest({ ...communityRequestInitialData, approves: communityRequestApproves });
    }

    toast({
      title: success ? 'The community request was approved successfully' : 'Something when wrong processing the community request approve',
      status: success ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  const getCommunityRequestSubView = () => {
    if (type === CommunityRequestType.COURSE) {
      return <CourseView descriptionData={descriptionData} />;
    }
    // if (type === CommunityRequestType.INTERVIEW_QUESTION) {

    // }

    // if (type === CommunityRequestType.CODE_SNIPPET) {

    // }

    return null;
  };

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <Stack spacing={2}>
          <Heading>{title}</Heading>

          <HStack spacing={1}>
            <Badge colorScheme="green" variant="solid">{state}</Badge>
            <Text fontSize="md" fontWeight="semibold">
              {communityRequest.user.name}
            </Text>
            <Text fontSize="md">
              wants to integrate a new
            </Text>
            <Text fontSize="md" fontWeight="semibold">
              {type}
            </Text>
          </HStack>
        </Stack>

        {getCommunityRequestSubView()}

        <CommonFooterView
          user={communityRequest.user}
          approves={communityRequest.approves}
          currentUser={currentUser}
          handleApprove={handleCommunityRequestApprove}
        />

      </Stack>

    </SidebarWithHeader>
  );
};

// TODO: Verify probably the performance can be improved with getInitialProps

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { communityRequestId } }) {
    const { data } = await makeRequest({
      url: getAPICommunityRequestById(communityRequestId),
      method: HTTP_METHODS.GET,
      headers: { Cookie: req.headers.cookie },
    });

    const { communityRequest } = data;

    return {
      props: {
        communityRequestInitialData: communityRequest,
      },
    };
  },
});

export default CommunityRequestDetails;
