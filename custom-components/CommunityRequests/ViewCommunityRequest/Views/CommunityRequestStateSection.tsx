import { HStack, Icon, Text } from '@chakra-ui/react';
import React, { memo } from 'react';
import { FiUserCheck, FiUserX } from 'react-icons/fi';
import { COMMUNITY_REQUEST_APPROVES_REQUIRED } from '../../../../constants/config';
import { CommunityRequestState } from '../../../../constants/enums';

interface CommunityRequestStateSectionProps {
    state: any;
    approves: any;
}

const CommunityRequestStateSection = (props: CommunityRequestStateSectionProps) => {
  const { state, approves } = props;

  const isCommunityRequestApproved = approves.length >= COMMUNITY_REQUEST_APPROVES_REQUIRED;

  const getRemainingApprovesMessage = () => {
    if (!isCommunityRequestApproved) {
      return (
        <Text fontWeight="semibold">{`${COMMUNITY_REQUEST_APPROVES_REQUIRED - approves?.length} left`}</Text>
      );
    }

    return <Text fontWeight="semibold" color="green.500">Approved</Text>;
  };

  if ([
    CommunityRequestState.CLOSED,
    CommunityRequestState.MERGED,
    CommunityRequestState.REJECTED,
  ].includes(state)) {
    const color = state === CommunityRequestState.MERGED ? 'green.500' : 'red.500';
    return (
      <HStack spacing={2}>
        <Icon
          w={4}
          h={4}
          as={state === CommunityRequestState.MERGED ? FiUserCheck : FiUserX}
          color={color}
        />
        <Text
          fontWeight="semibold"
          color={color}
        >
          {state}
        </Text>
      </HStack>
    );
  }

  return (
    <HStack spacing={2}>
      <Icon
        w={4}
        h={4}
        as={FiUserCheck}
        color={isCommunityRequestApproved ? 'green.500' : 'black'}
      />
      {getRemainingApprovesMessage()}
    </HStack>
  );
};

export default memo(CommunityRequestStateSection);
