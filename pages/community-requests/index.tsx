import {
  Heading,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';

interface CommunityRequestsProps {}

// eslint-disable-next-line no-unused-vars
const CommunityRequests = (props: CommunityRequestsProps) => (
  <SidebarWithHeader>

    <Stack spacing={4}>

      <Heading> Community Requests</Heading>

    </Stack>

  </SidebarWithHeader>
);

export default CommunityRequests;
