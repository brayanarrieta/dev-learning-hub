import React from 'react';
import {
  Avatar,
  Box,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';
import {
  FiChevronDown,
} from 'react-icons/fi';

import { useUser } from '@auth0/nextjs-auth0';

// const DEFAULT_USER_NAME = 'User';

const UserStack = () => {
  const { user, isLoading } = useUser();

  if (isLoading || !user) {
    return (
      <HStack>
        <Avatar
          size="sm"
        />
        <VStack
          display={{ base: 'none', md: 'flex' }}
          alignItems="flex-start"
          spacing="1px"
          ml="2"
        >
          <Text fontSize="sm">Loading...</Text>
        </VStack>
        <Box display={{ base: 'none', md: 'flex' }}>
          <FiChevronDown />
        </Box>
      </HStack>
    );
  }

  return (
    <HStack>
      <Avatar
        size="sm"
        src={user.picture || ''}
      />
      <VStack
        display={{ base: 'none', md: 'flex' }}
        alignItems="flex-start"
        spacing="1px"
        ml="2"
      >
        <Text fontSize="sm">{user.name}</Text>

      </VStack>
      <Box display={{ base: 'none', md: 'flex' }}>
        <FiChevronDown />
      </Box>
    </HStack>
  );
};

export default UserStack;
