import React from 'react';
import {
  Text,
  useColorModeValue,
  Box,
  HStack,
  Icon,
  Badge,
  Stack,
} from '@chakra-ui/react';
import { FiUserCheck } from 'react-icons/fi';
import { CommunityRequest } from '../../types';
import { COMMUNITY_REQUEST_APPROVES_REQUIRED } from '../../constants/config';

interface CommunityRequestCardProps {
    communityRequest: CommunityRequest,
}

const CommunityRequestCard = ({
  communityRequest,
}: CommunityRequestCardProps) => {
  const {
    title, type, user, approves,
  } = communityRequest;

  const isCommunityRequestApproved = COMMUNITY_REQUEST_APPROVES_REQUIRED === approves?.length;

  const getRemainingApprovesMessage = () => {
    if (!isCommunityRequestApproved && approves) {
      return (
        <Text fontWeight="semibold">{`${COMMUNITY_REQUEST_APPROVES_REQUIRED - approves?.length} left`}</Text>
      );
    }

    return <Text fontWeight="semibold" color="green.500">Approved</Text>;
  };

  return (
    <Stack
      direction={['column', 'row', 'row']}
      p={4}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="lg"
      w="full"
      borderWidth={1}
      borderColor="teal.400"
      justifyContent="space-between"
    >
      <Box>
        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">{title}</Text>
        <Stack direction={['column', 'column', 'row']} mt={2} spacing={2}>

          { user?.name && (
          <HStack spacing={1}>
            <Text fontSize="sm" color="gray.600">Created by</Text>
            <Text fontSize="sm" color="gray.600" fontWeight="semibold">{user.name}</Text>
          </HStack>
          )}
          <Box><Badge colorScheme="teal" variant="outline">{type}</Badge></Box>

        </Stack>
      </Box>

      <HStack spacing={2}>

        <Icon
          w={6}
          h={6}
          as={FiUserCheck}
          color={isCommunityRequestApproved ? 'green.500' : 'black'}
        />

        {getRemainingApprovesMessage()}

      </HStack>

    </Stack>
  );
};

export default CommunityRequestCard;
