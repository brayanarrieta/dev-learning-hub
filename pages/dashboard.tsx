import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  Stack, Box, Heading, Text,
} from '@chakra-ui/react';
import React from 'react';
import { APPLICATION_NAME } from '../constants/config';
import SidebarWithHeader from '../custom-components/Layout/SidebarWithHeader';

const Dashboard = () => (
  <SidebarWithHeader>
    <Stack
      as={Box}
      textAlign="center"
      spacing={{ base: 8, md: 14 }}
      paddingTop={20}
      paddingBottom={10}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight="110%"
        color="green.400"
      >
        {APPLICATION_NAME}
      </Heading>
      <Text color="gray.500">
        Dev Learning Hub a place to share your knowledge with other developers
      </Text>

    </Stack>
  </SidebarWithHeader>
);

export const getServerSideProps = withPageAuthRequired();

export default Dashboard;
