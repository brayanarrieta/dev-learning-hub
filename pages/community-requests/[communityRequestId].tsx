import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Heading,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { getAPICommunityRequestById } from '../../constants/apiURLs';
import { HTTP_METHODS } from '../../constants/enums';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';
import { makeRequest } from '../../helpers/makeRequest';
import { CommunityRequest } from '../../types';

interface CommunityRequestProps {
  communityRequest: CommunityRequest
}

const CommunityRequestDetails = (props: CommunityRequestProps) => {
  // eslint-disable-next-line no-unused-vars
  const { communityRequest } = props;
  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <Heading> Community Requests</Heading>

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { communityRequestId } }) {
    const { data } = await makeRequest({
      url: getAPICommunityRequestById(communityRequestId),
      method: HTTP_METHODS.GET,
      headers: { Cookie: req.headers.cookie },
    });

    const { communityRequest } = data;

    return {
      props: {
        communityRequest,
      },
    };
  },
});

export default CommunityRequestDetails;
