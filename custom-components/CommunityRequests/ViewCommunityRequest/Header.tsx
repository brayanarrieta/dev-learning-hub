import {
  Stack, Heading, HStack, Badge, Text,
} from '@chakra-ui/react';
import React, { memo } from 'react';
import { CommunityRequestState } from '../../../constants/enums';

interface HeaderProps {
    userName: string;
    type: string;
    title: string;
    state: any;
}

const BADGE_COLORS: {[key: string]: string} = {
  [CommunityRequestState.MERGED]: 'green',
  [CommunityRequestState.REJECTED]: 'red',
  [CommunityRequestState.CLOSED]: 'red',
  [CommunityRequestState.WAITING_REVIEW]: 'blue',
};

const Header = (props: HeaderProps) => {
  const {
    userName, type, title, state,
  } = props;

  return (
    <Stack spacing={2}>
      <Heading>{title}</Heading>

      <HStack spacing={1}>
        <Badge colorScheme={BADGE_COLORS[state]} variant="solid">{state}</Badge>
        <Text fontSize="md" fontWeight="semibold">
          {userName}
        </Text>
        <Text fontSize="md">
          wants to integrate a new
        </Text>
        <Text fontSize="md" fontWeight="semibold">
          {type}
        </Text>
      </HStack>
    </Stack>
  );
};

export default memo(Header);
