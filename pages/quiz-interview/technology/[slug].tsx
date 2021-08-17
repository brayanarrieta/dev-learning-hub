import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { getAPITechnologyBySlugURL } from '../../../constants/apiURLs';
import SidebarWithHeader from '../../../custom-components/Layout/SidebarWithHeader';
import QuizInterviewHeader from '../../../custom-components/QuizInterview/QuizInterviewHeader';
import { makeRequest } from '../../../helpers/makeRequest';

interface TechnologyQuestionsProps {
  technologyName: string;
}

const TechnologyQuestions = (props: TechnologyQuestionsProps) => {
  const {
    technologyName,
  } = props;

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <QuizInterviewHeader
          technologyName={technologyName}
        />

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({
    req, query: {
      slug,
    },
  }) {
    const { data: { technology } } = await makeRequest({
      url: getAPITechnologyBySlugURL(slug),
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
    });

    return {
      props: {
        technologyName: technology.name,
      },
    };
  },
});

export default TechnologyQuestions;
