import React from 'react';
import {
  Box, SimpleGrid, Icon,
} from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Feature from './Feature';

const FeaturesGrid = () => (
  <Box py={4} px={{ base: 4, md: 24 }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Feature
        icon={<Icon as={FcAssistant} w={10} h={10} />}
        title="Interview Questions Collection"
        text="A collection of common interview questions based on the community feedback"
      />
      <Feature
        icon={<Icon as={FcDonate} w={10} h={10} />}
        title="Interview Practice"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
      />
      <Feature
        icon={<Icon as={FcInTransit} w={10} h={10} />}
        title="CheatSheets"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
      />
    </SimpleGrid>
  </Box>
);

export default FeaturesGrid;
