import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Divider,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { POST_API_COMMUNITY_REQUESTS } from '../../constants/apiURLs';
import { CommunityRequestType, HTTP_METHODS } from '../../constants/enums';
import CodeSnippetForm from '../../custom-components/CommunityRequests/Forms/CodeSnippetForm';
import CommonForm from '../../custom-components/CommunityRequests/Forms/CommonForm';
import CourseForm from '../../custom-components/CommunityRequests/Forms/CourseForm';
import InterviewQuestionForm from '../../custom-components/CommunityRequests/Forms/InterviewQuestionForm';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import { makeRequest } from '../../helpers/makeRequest';

interface IFormInput {
  title: string;
  type: string;
  descriptionData: any;
}

interface CommunityRequestsAddProps {
  user: any
}

const CommunityRequestsAdd = ({ user }: CommunityRequestsAddProps) => {
  const {
    control, handleSubmit, watch, unregister, reset,
  } = useForm<IFormInput>();

  const toast = useToast();

  const onSubmit: SubmitHandler<IFormInput> = async (communityRequestData) => {
    const { name, email } = user;
    const communityRequest = { ...communityRequestData, user: { name, email } };

    const { data } = await makeRequest({
      method: HTTP_METHODS.POST,
      url: POST_API_COMMUNITY_REQUESTS,
      data: communityRequest,
    });

    const { success } = data;

    toast({
      title: success ? 'The community request was created successfully' : 'Something when wrong processing the community request',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

    reset({ title: '', type: '' });
  };

  const communityRequestType = watch('type');

  const getCommunityRequestSubForm = () => {
    if (communityRequestType === CommunityRequestType.COURSE) {
      return <CourseForm formControl={control} unregisterFields={unregister} />;
    }
    if (communityRequestType === CommunityRequestType.INTERVIEW_QUESTION) {
      return <InterviewQuestionForm formControl={control} unregisterFields={unregister} />;
    }

    if (communityRequestType === CommunityRequestType.CODE_SNIPPET) {
      return <CodeSnippetForm formControl={control} unregisterFields={unregister} />;
    }

    return null;
  };

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <Heading>Create Community Request</Heading>

        <Stack
          spacing={2}
          as={Flex}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          borderRadius="lg"
        >

          <form onSubmit={handleSubmit(onSubmit)}>

            <CommonForm formControl={control} />

            <Divider my={4} />

            {getCommunityRequestSubForm()}
          </form>

        </Stack>

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default CommunityRequestsAdd;
