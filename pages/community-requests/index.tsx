import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Heading,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { GET_API_COMMUNITY_REQUESTS } from '../../constants/apiURLs';
import { PAGINATION_DEFAULT_INITIAL_PAGE } from '../../constants/config';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import { convertToNumber } from '../../helpers/convertTypes';
import { makeRequest } from '../../helpers/makeRequest';

interface CommunityRequestsProps {}

// eslint-disable-next-line no-unused-vars
const CommunityRequests = (props: CommunityRequestsProps) => (
  <SidebarWithHeader>

    <Stack spacing={4}>

      <Heading> Community Requests</Heading>

    </Stack>

  </SidebarWithHeader>
);

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
