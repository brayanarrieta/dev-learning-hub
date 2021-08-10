import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Flex, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import { FcEmptyFilter } from 'react-icons/fc';
import Banner from '../../../components/Banner';
import Paginator from '../../../components/Paginator';
import { getAPIInterviewQuestionsByTechnologyId, getAPITechnologyBySlugURL } from '../../../constants/apiURLs';
import { GET_INTERVIEW_QUESTIONS_WITH_PAGINATION_PAGE_SIZE, PAGINATION_DEFAULT_INITIAL_PAGE } from '../../../constants/config';
import { getTechnologyInterviewQuestionsURL } from '../../../constants/pageURLs';
import InterviewQuestionsAccordion from '../../../custom-components/InterviewQuestions';
import SidebarWithHeader from '../../../custom-components/Layout/SidebarWithHeader';
import TechnologyHeader from '../../../custom-components/TechnologyHeader';
import { convertToNumber } from '../../../helpers/convertTypes';
import { makeRequest } from '../../../helpers/makeRequest';
import { InterviewQuestion, Technology } from '../../../types';

interface TechnologyQuestionsProps {
  currentPage: number;
  technology: Technology;
  interviewQuestions: InterviewQuestion[];
  interviewQuestionsCount: number;
}
const TechnologyQuestions = (props: TechnologyQuestionsProps) => {
  const {
    technology, interviewQuestions, interviewQuestionsCount, currentPage,
  } = props;

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <TechnologyHeader
          technologyName={technology.name}
          technologyDescription={technology.description}
        />

        {interviewQuestionsCount
          ? <InterviewQuestionsAccordion interviewQuestions={interviewQuestions} />
          : (
            <Banner
              icon={<Icon as={FcEmptyFilter} w={10} h={10} />}
              text={`There are not interview questions for ${technology.name} right now registered in the system.`}
            />
          )}

        <Flex justifyContent="flex-end">
          <Paginator
            currentPage={currentPage}
            pageSize={GET_INTERVIEW_QUESTIONS_WITH_PAGINATION_PAGE_SIZE}
            basePageURL={getTechnologyInterviewQuestionsURL(technology.slug)}
            totalRows={interviewQuestionsCount}
          />
        </Flex>

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { slug, page = PAGINATION_DEFAULT_INITIAL_PAGE } }) {
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

    return {
      props: {
        technology,
        interviewQuestions,
        interviewQuestionsCount,
        currentPage: convertToNumber(page),

      },
    };
  },
});

export default TechnologyQuestions;
