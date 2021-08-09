import React from 'react';
import {
  Flex,
  Text,
  useColorModeValue,
  Box,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Router from 'next/router';
import { Technology } from '../types';
import { getTechnologyInterviewQuestionsURL } from '../constants/pageURLs';

interface TechnologyCardProps {
    technology: Technology,
}

const TechnologyCard = ({
  technology,
}: TechnologyCardProps) => (
  <Box
    p={4}
    bg={useColorModeValue('white', 'gray.800')}
    borderRadius="lg"
    shadow="lg"
    w="full"
    borderWidth={1}
    borderColor="teal.400"
  >
    <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">{technology.name}</Text>

    <Text mt={2} textAlign="justify" noOfLines={3} fontSize="md">{technology.description}</Text>

    <Flex mt={4} justifyContent="flex-end">
      <Button
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="teal.400"
        as="a"
        onClick={() => Router.push(getTechnologyInterviewQuestionsURL(technology.slug))}
        _hover={{
          bg: 'teal.500',
        }}
        rightIcon={<ArrowForwardIcon />}
      >
        {`Go to the ${technology.name} questions`}
      </Button>
    </Flex>
  </Box>
);

export default TechnologyCard;
