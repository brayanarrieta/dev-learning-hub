import React from 'react';
import {
  Box, SimpleGrid, Icon,
} from '@chakra-ui/react';
import {
  FcCollaboration, FcFlashOn, FcQuestions, FcReading,
} from 'react-icons/fc';
import Feature from './Feature';

const FeaturesGrid = () => (
  <Box py={4} px={{ base: 4, md: 24 }}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Feature
        icon={<Icon as={FcQuestions} w={10} h={10} />}
        title="Interview Questions Collection"
        text="A collection of common interview questions based on the community feedback."
      />
      <Feature
        icon={<Icon as={FcCollaboration} w={10} h={10} />}
        title="Interview Quiz Practice"
        text="A simulator to improve your skills and prepare before your interviews with some common questions based on the community feedback."
      />
      <Feature
        icon={<Icon as={FcFlashOn} w={10} h={10} />}
        title="CheatSheets Collection"
        text="A collection of developers cheatsheets of different technologies."
      />
      <Feature
        icon={<Icon as={FcReading} w={10} h={10} />}
        title="Free Online Courses"
        text="A curated list of free courses from the different platforms created based on the community feedback."
      />
    </SimpleGrid>
  </Box>
);

export default FeaturesGrid;
