import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Flex, Heading, SimpleGrid, Stack,
} from '@chakra-ui/react';
import React from 'react';
import Paginator from '../../components/Paginator';
import { GET_API_TECHNOLOGIES } from '../../constants/apiURLs';
import { GET_TECHNOLOGIES_WITH_PAGINATION_PAGE_SIZE, PAGINATION_DEFAULT_INITIAL_PAGE } from '../../constants/config';
import { INTERVIEW_QUESTIONS_PAGE_URL } from '../../constants/pageURLs';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import TechnologyCard from '../../custom-components/TechnologyCard';
import { convertToNumber } from '../../helpers/convertTypes';
import { makeRequest } from '../../helpers/makeRequest';
import { Technology } from '../../types';

interface InterviewQuestionsProps {
  technologies: Technology[],
  technologiesCount: number,
  currentPage: number
}

const InterviewQuestions = (props: InterviewQuestionsProps) => {
  const { technologies, technologiesCount, currentPage } = props;

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>
        <Heading>Interview Questions Technologies</Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
          {technologies.map((technology: Technology) => (
            <TechnologyCard
              key={technology._id}
              technology={technology}
            />
          ))}
        </SimpleGrid>

        <Flex justifyContent="flex-end">
          <Paginator
            currentPage={currentPage}
            pageSize={GET_TECHNOLOGIES_WITH_PAGINATION_PAGE_SIZE}
            basePageURL={INTERVIEW_QUESTIONS_PAGE_URL}
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

export default InterviewQuestions;
