import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Divider,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
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
  type: CommunityRequestType;
  descriptionData: any;
}

const CommunityRequestsAdd = () => {
  const {
    control, handleSubmit, watch, unregister,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // eslint-disable-next-line no-unused-vars
    const { success } = await makeRequest({
      method: HTTP_METHODS.POST,
      url: POST_API_COMMUNITY_REQUESTS,
      data,
    });
  };

  const communityRequestType = watch('type');
  const watchAll = watch();

  console.log(watchAll);

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
