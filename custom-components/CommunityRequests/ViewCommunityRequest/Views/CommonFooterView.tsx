import {
  Box,
  Button, Stack, useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoMdPeople } from 'react-icons/io';
import { BiGitMerge } from 'react-icons/bi';
import { COMMUNITY_REQUEST_APPROVES_REQUIRED } from '../../../../constants/config';
import { CommunityRequestState } from '../../../../constants/enums';
import CommunityRequestStateSection from '../CommunityRequestStateSection';

interface CommonFooterViewProps {
    user: {
        name: string;
        email: string;
    };
    approves: any;
    handleApprove: any;
    currentUser: any;
    handleMerge: any;
    state: any;
    isMergingTheCommunityRequest: boolean;
}

const CommonFooterView = (props: CommonFooterViewProps) => {
  const {
    user, approves, handleApprove, currentUser, handleMerge, state, isMergingTheCommunityRequest,
  } = props;

  const isCommunityRequestApproved = approves.length >= COMMUNITY_REQUEST_APPROVES_REQUIRED;

  const isTheRequestOwner = user.email === currentUser?.email;

  const isEnableToApprove = !approves.includes(user.email) && !isTheRequestOwner;

  const renderActions = () => (
    <>
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
          disabled={!isCommunityRequestApproved || isMergingTheCommunityRequest}
          onClick={handleMerge}
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
          onClick={handleApprove}
        >
          Approve the Community Request
        </Button>
      )
    }
    </>
  );

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

      <CommunityRequestStateSection state={state} approves={approves} />

      {state === CommunityRequestState.WAITING_REVIEW && renderActions()}
    </Stack>
  );
};

export default CommonFooterView;
