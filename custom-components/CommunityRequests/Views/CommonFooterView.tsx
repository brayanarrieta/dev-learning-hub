import { useUser } from '@auth0/nextjs-auth0';
import {
  Box,
  Button, Stack, useColorModeValue, Text, HStack, Icon,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlus, FiUserCheck } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';
import { BiGitMerge } from 'react-icons/bi';
import { COMMUNITY_REQUEST_APPROVES_REQUIRED } from '../../../constants/config';

interface CommonFooterViewProps {
    user: {
        name: string;
        email: string;
    };
    approves: any;
}

const CommonFooterView = (props: CommonFooterViewProps) => {
  const { user, approves } = props;

  const { user: currentUser } = useUser();

  const isCommunityRequestApproved = COMMUNITY_REQUEST_APPROVES_REQUIRED === approves?.length;

  const isTheRequestOwner = user.email === currentUser?.email;

  const isEnableToApprove = !approves.includes(user.email) && !isTheRequestOwner;

  const getRemainingApprovesMessage = () => {
    if (!isCommunityRequestApproved) {
      return (
        <Text fontWeight="semibold">{`${COMMUNITY_REQUEST_APPROVES_REQUIRED - approves?.length} left`}</Text>
      );
    }

    return <Text fontWeight="semibold" color="green.500">Approved</Text>;
  };

  return (
    <Stack
      as={Box}
      spacing={4}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="lg"
      p={4}
      direction={['column', 'row', 'row']}
      justifyContent="flex-end"
    >

      <HStack spacing={2}>
        <Icon
          w={4}
          h={4}
          as={FiUserCheck}
          color={isCommunityRequestApproved ? 'green.500' : 'black'}
        />
        {getRemainingApprovesMessage()}
      </HStack>

      {
        isTheRequestOwner ? (

          <Button
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="teal.400"
            _hover={{
              bg: 'teal.500',
            }}
            rightIcon={isCommunityRequestApproved ? <BiGitMerge /> : <IoMdPeople />}
            disabled={!isCommunityRequestApproved}
          >
            {isCommunityRequestApproved ? 'Merge' : 'Waiting review'}
          </Button>
        ) : (
          <Button
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="teal.400"
            _hover={{
              bg: 'teal.500',
            }}
            rightIcon={<FiPlus />}
            disabled={!isEnableToApprove}
          >
            Approve the Community Request
          </Button>
        )
      }
    </Stack>
  );
};

export default CommonFooterView;
