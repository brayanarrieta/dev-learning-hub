import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Flex, Heading, SimpleGrid, Stack,
} from '@chakra-ui/react';
import React from 'react';
import Paginator from '../../components/Paginator';
import { GET_API_CODE_SNIPPETS } from '../../constants/apiURLs';
import { GET_CODE_SNIPPETS_WITH_PAGINATION_PAGE_SIZE, PAGINATION_DEFAULT_INITIAL_PAGE } from '../../constants/config';
import { CODE_SNIPPETS_PAGE_URL } from '../../constants/pageURLs';
import CodeSnippetCard from '../../custom-components/CodeSnippetCard';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import { convertToNumber } from '../../helpers/convertTypes';
import { makeRequest } from '../../helpers/makeRequest';
import { CodeSnippet } from '../../types';

interface CodeSnippetsProps {
  codeSnippets: CodeSnippet[],
  codeSnippetsCount: number,
  currentPage: number
}

const CodeSnippets = (props: CodeSnippetsProps) => {
  const { codeSnippets, codeSnippetsCount, currentPage } = props;

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>
        <Heading>Code Snippets</Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
          {codeSnippets.map((codeSnippet: CodeSnippet) => (
            <CodeSnippetCard
              key={codeSnippet._id}
              codeSnippet={codeSnippet}
            />
          ))}
        </SimpleGrid>

        <Flex justifyContent="flex-end">
          <Paginator
            currentPage={currentPage}
            pageSize={GET_CODE_SNIPPETS_WITH_PAGINATION_PAGE_SIZE}
            basePageURL={CODE_SNIPPETS_PAGE_URL}
            totalRows={codeSnippetsCount}
          />
        </Flex>

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { page = PAGINATION_DEFAULT_INITIAL_PAGE } }) {
    const { data } = await makeRequest({
      url: GET_API_CODE_SNIPPETS,
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
      params: { page },
    });

    const { codeSnippets, codeSnippetsCount } = data;
    return { props: { codeSnippets, currentPage: convertToNumber(page), codeSnippetsCount } };
  },
});

export default CodeSnippets;
