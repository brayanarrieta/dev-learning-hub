import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Flex, Heading, SimpleGrid, Stack,
} from '@chakra-ui/react';
import React from 'react';
import Paginator from '../../components/Paginator';
import { GET_API_TECHNOLOGIES } from '../../constants/apiURLs';
import { GET_TECHNOLOGIES_WITH_PAGINATION_PAGE_SIZE, PAGINATION_DEFAULT_INITIAL_PAGE } from '../../constants/config';
import { getQuizInterviewQuestionsBySlugURL, QUIZ_INTERVIEW_PAGE_URL } from '../../constants/pageURLs';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import QuizTechnologyCard from '../../custom-components/QuizInterview/QuizTechnologyCard';
import { convertToNumber } from '../../helpers/convertTypes';
import { makeRequest } from '../../helpers/makeRequest';
import { Technology } from '../../types';

interface QuizInterviewProps {
  technologies: Technology[],
  technologiesCount: number,
  currentPage: number
}

const QuizInterview = (props: QuizInterviewProps) => {
  const { technologies, technologiesCount, currentPage } = props;

  // TODO: Change Technology Card remove description

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>
        <Heading>Quiz Interview Technologies</Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {technologies.map((technology: Technology) => (
            <QuizTechnologyCard
              key={technology._id}
              technology={technology}
              buttonText={`Go to the ${technology.name} quiz`}
              buttonLink={getQuizInterviewQuestionsBySlugURL(technology.slug)}
            />
          ))}
        </SimpleGrid>

        <Flex justifyContent="flex-end">
          <Paginator
            currentPage={currentPage}
            pageSize={GET_TECHNOLOGIES_WITH_PAGINATION_PAGE_SIZE}
            basePageURL={QUIZ_INTERVIEW_PAGE_URL}
            totalRows={technologiesCount}
          />
        </Flex>

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { page = PAGINATION_DEFAULT_INITIAL_PAGE } }) {
    const { data } = await makeRequest({
      url: GET_API_TECHNOLOGIES,
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
      params: { page },
    });

    const { technologies, technologiesCount } = data;
    return { props: { technologies, currentPage: convertToNumber(page), technologiesCount } };
  },
});

export default QuizInterview;
