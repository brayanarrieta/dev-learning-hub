import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';
import { FcEmptyFilter } from 'react-icons/fc';
import Banner from '../../components/Banner';
import Paginator from '../../components/Paginator';
import { BASE_API_COMMUNITY_REQUESTS } from '../../constants/apiURLs';
import { GET_COMMUNITY_REQUESTS_WITH_PAGINATION_PAGE_SIZE, PAGINATION_DEFAULT_INITIAL_PAGE } from '../../constants/config';
import { COMMUNITY_REQUESTS_PAGE_URL, CREATE_COMMUNITY_REQUESTS_PAGE_URL } from '../../constants/pageURLs';
import CommunityRequestCard, { CommunityRequestComposed } from '../../custom-components/CommunityRequests/CommunityRequestCard';
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

        <Stack direction={['column', 'row']} justifyContent="space-between">
          <Heading> Community Requests</Heading>

          <Button
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="teal.400"
            onClick={() => Router.push(CREATE_COMMUNITY_REQUESTS_PAGE_URL)}
            _hover={{
              bg: 'teal.500',
            }}
          >
            New community request
          </Button>
        </Stack>

        {communityRequests.length ? (
          <SimpleGrid columns={1} spacing={2}>
            {communityRequests.map((communityRequest: CommunityRequest) => (
              <CommunityRequestCard
                key={communityRequest._id}
                communityRequest={communityRequest as CommunityRequestComposed}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Banner
            icon={<Icon as={FcEmptyFilter} w={10} h={10} />}
            text="There are no community request right now registered in the system. Please return later to check."
          />
        )}

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
      url: BASE_API_COMMUNITY_REQUESTS,
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
