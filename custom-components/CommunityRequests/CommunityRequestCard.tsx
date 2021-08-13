import React from 'react';
import {
  Text,
  useColorModeValue,
  Box,
  HStack,
  Icon,
  Badge,
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

  const isCommunityRequestApproved = COMMUNITY_REQUEST_APPROVES_REQUIRED === approves.length;

  const getRemainingApprovesMessage = () => {
    if (!isCommunityRequestApproved) {
      return (
        <Text fontWeight="semibold">{`${COMMUNITY_REQUEST_APPROVES_REQUIRED - approves.length} left`}</Text>
      );
    }

    return <Text fontWeight="semibold" color="green.500">Approved</Text>;
  };

  return (
    <HStack
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
        <HStack mt={2} spacing={1}>

          { user?.name && (
          <>
            <Text fontSize="sm" color="gray.600">Created by</Text>
            <Text fontSize="sm" color="gray.600" fontWeight="semibold">{user.name}</Text>
          </>
          )}
          <Badge colorScheme="teal" variant="outline">{type}</Badge>
        </HStack>
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

    </HStack>
  );
};

export default CommunityRequestCard;
