import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

interface TechnologyHeaderProps {
    technologyName: string,
    technologyDescription: string,
}

const TechnologyHeader = ({
  technologyName, technologyDescription,
}: TechnologyHeaderProps) => (
  <Stack
    as={Box}
    textAlign="center"
    spacing={{ base: 8, md: 8 }}
    alignItems="center"
  >
    <Heading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
      lineHeight="110%"
      color="green.400"
    >
      {technologyName}
    </Heading>
    <Text color="gray.700" textAlign="justify">
      {technologyDescription}
    </Text>

  </Stack>
);

export default TechnologyHeader;
