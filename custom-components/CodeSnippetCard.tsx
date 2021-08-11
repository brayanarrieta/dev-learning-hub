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

interface CodeSnippetCardProps {
    technology: Technology,
    buttonLink: string;
    buttonText: string;
}

const CodeSnippetCard = ({
  technology, buttonLink, buttonText,
}: CodeSnippetCardProps) => (
  <Flex
    py={6}
    bg={useColorModeValue('white', 'gray.800')}
    borderRadius="lg"
    shadow="lg"
    w="full"
    borderWidth={1}
    borderColor="teal.400"
    flexDirection="column"
    alignItems="center"
  >
    <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="semibold">{technology.name}</Text>

    <Button
      mt={4}
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
);

export default CodeSnippetCard;
