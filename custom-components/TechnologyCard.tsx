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

interface TechnologyCardProps {
    technology: Technology,
    buttonLink: string;
    buttonText: string;
}

const TechnologyCard = ({
  technology, buttonLink, buttonText
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
        onClick={() => Router.push(buttonLink)}
        _hover={{
          bg: 'teal.500',
        }}
        rightIcon={<ArrowForwardIcon />}
      >
        {buttonText}
      </Button>
    </Flex>
  </Box>
);

export default TechnologyCard;
