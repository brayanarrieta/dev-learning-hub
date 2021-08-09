import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import { getAPIInterviewQuestionsByTechnologyId, getAPITechnologyBySlugURL } from '../../../constants/apiURLs';
import SidebarWithHeader from '../../../custom-components/Layout/SidebarWithHeader';
import TechnologyHeader from '../../../custom-components/TechnologyHeader';
import { makeRequest } from '../../../helpers/makeRequest';
import { InterviewQuestion, Technology } from '../../../types';

interface TechnologyQuestionsProps {
  technology: Technology;
  interviewQuestions: InterviewQuestion[];
  interviewQuestionsCount: number;
}
const TechnologyQuestions = (props: TechnologyQuestionsProps) => {
  // eslint-disable-next-line no-unused-vars
  const { technology, interviewQuestions, interviewQuestionsCount } = props;
  return (
    <SidebarWithHeader>
      <TechnologyHeader
        technologyName={technology.name}
        technologyDescription={technology.description}
      />

      {interviewQuestionsCount}
    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { slug, page } }) {
    const { data: { technology } } = await makeRequest({
      url: getAPITechnologyBySlugURL(slug),
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
    });

    const { data: { interviewQuestions, interviewQuestionsCount } } = await makeRequest({
      url: getAPIInterviewQuestionsByTechnologyId(technology._id),
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
      params: { page },
    });

    return { props: { technology, interviewQuestions, interviewQuestionsCount } };
  },
});

export default TechnologyQuestions;
