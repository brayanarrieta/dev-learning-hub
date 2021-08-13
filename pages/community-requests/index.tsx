import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Flex,
  Heading,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import Paginator from '../../components/Paginator';
import { GET_API_COMMUNITY_REQUESTS } from '../../constants/apiURLs';
import { GET_COMMUNITY_REQUESTS_WITH_PAGINATION_PAGE_SIZE, PAGINATION_DEFAULT_INITIAL_PAGE } from '../../constants/config';
import { COMMUNITY_REQUESTS_PAGE_URL } from '../../constants/pageURLs';
import CommunityRequestCard from '../../custom-components/CommunityRequests/CommunityRequestCard';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import { convertToNumber } from '../../helpers/convertTypes';
import { makeRequest } from '../../helpers/makeRequest';
import { CommunityRequest } from '../../types';

interface CommunityRequestsProps {

  currentPage: number;
  communityRequests: CommunityRequest[],
  communityRequestsCount: number,
}

const CommunityRequests = (props: CommunityRequestsProps) => {
  const { currentPage, communityRequests, communityRequestsCount } = props;
  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <Heading> Community Requests</Heading>

        <SimpleGrid columns={1} spacing={2}>
          {communityRequests.map((communityRequest: CommunityRequest) => (
            <CommunityRequestCard key={communityRequest._id} communityRequest={communityRequest} />
          ))}
        </SimpleGrid>

        <Flex justifyContent="flex-end">
          <Paginator
            currentPage={currentPage}
            pageSize={GET_COMMUNITY_REQUESTS_WITH_PAGINATION_PAGE_SIZE}
            basePageURL={COMMUNITY_REQUESTS_PAGE_URL}
            totalRows={communityRequestsCount}
          />
        </Flex>

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { page = PAGINATION_DEFAULT_INITIAL_PAGE } }) {
    const { data } = await makeRequest({
      url: GET_API_COMMUNITY_REQUESTS,
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
      params: { page },
    });

    const { communityRequests, communityRequestsCount } = data;
    return {
      props: {
        communityRequests,
        currentPage: convertToNumber(page),
        communityRequestsCount,
      },
    };
  },
});

export default CommunityRequests;
