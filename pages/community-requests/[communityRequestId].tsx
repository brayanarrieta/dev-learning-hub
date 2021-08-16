import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Stack,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { getAPICommunityRequestById, postAPIApproveCommunityRequest, postAPIMergeCommunityRequest } from '../../constants/apiURLs';
import { CommunityRequestType, HTTP_METHODS } from '../../constants/enums';
import Header from '../../custom-components/CommunityRequests/ViewCommunityRequest/Header';
import CodeSnippetView from '../../custom-components/CommunityRequests/ViewCommunityRequest/Views/CodeSnippetView';
import CommonFooterView from '../../custom-components/CommunityRequests/ViewCommunityRequest/Views/CommonFooterView';
import CourseView from '../../custom-components/CommunityRequests/ViewCommunityRequest/Views/CourseView';
import InterviewQuestionView from '../../custom-components/CommunityRequests/ViewCommunityRequest/Views/InterviewQuestionView';
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

  const [isMergingTheCommunityRequest, setIsMergingTheCommunityRequest] = useState(false);

  const {
    type, descriptionData, state,
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

  const handleCommunityRequestMerge = async () => {
    setIsMergingTheCommunityRequest(true);
    const { data } = await makeRequest({
      method: HTTP_METHODS.POST,
      url: postAPIMergeCommunityRequest(communityRequest._id),
      data: { userEmail: currentUser.email },
    });

    const { success } = data;

    if (success) {
      setCommunityRequest({ ...communityRequestInitialData, ...data.communityRequest });
    }

    setIsMergingTheCommunityRequest(false);

    toast({
      title: success ? 'The community request was merged successfully' : 'Something when wrong processing the community request merge',
      status: success ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
    });
  };

  const getCommunityRequestSubView = () => {
    if (type === CommunityRequestType.COURSE) {
      return <CourseView descriptionData={descriptionData} />;
    }
    if (type === CommunityRequestType.INTERVIEW_QUESTION) {
      return <InterviewQuestionView descriptionData={descriptionData} />;
    }
    if (type === CommunityRequestType.CODE_SNIPPET) {
      return <CodeSnippetView descriptionData={descriptionData} />;
    }

    return null;
  };

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <Header
          type={type}
          title={communityRequest.title}
          state={state}
          userName={communityRequest.user.name}
        />

        {getCommunityRequestSubView()}

        <CommonFooterView
          user={communityRequest.user}
          approves={communityRequest.approves}
          currentUser={currentUser}
          handleApprove={handleCommunityRequestApprove}
          handleMerge={handleCommunityRequestMerge}
          state={state}
          isMergingTheCommunityRequest={isMergingTheCommunityRequest}
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
