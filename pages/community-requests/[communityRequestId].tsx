import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Badge,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { getAPICommunityRequestById } from '../../constants/apiURLs';
import { CommunityRequestType, HTTP_METHODS } from '../../constants/enums';
import CommonFooterView from '../../custom-components/CommunityRequests/Views/CommonFooterView';
import CourseView from '../../custom-components/CommunityRequests/Views/CourseView';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import { makeRequest } from '../../helpers/makeRequest';
import { CommunityRequest } from '../../types';

interface CommunityRequestProps {
  communityRequest: CommunityRequest;
}

const CommunityRequestDetails = (props: CommunityRequestProps) => {
  // eslint-disable-next-line no-unused-vars
  const { communityRequest } = props;

  const {
    title, type, descriptionData, state, user, approves,

  } = communityRequest;

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
              {user.name}
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

        <CommonFooterView user={user} approves={approves} />

      </Stack>

    </SidebarWithHeader>
  );
};

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
        communityRequest,
      },
    };
  },
});

export default CommunityRequestDetails;
