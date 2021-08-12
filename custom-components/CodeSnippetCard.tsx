import React from 'react';
import {
  Flex,
  Text,
  useColorModeValue,
  Button,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Router from 'next/router';
import { CodeSnippet, Technology } from '../types';
import { getCodeSnippetURLById } from '../constants/pageURLs';

export interface CodeSnippetComposed extends Omit<CodeSnippet, 'technology'> {
  technology: Technology
}

interface CodeSnippetCardProps {
    codeSnippet: CodeSnippetComposed,
}

const CodeSnippetCard = ({
  codeSnippet,
}: CodeSnippetCardProps) => {
  const shouldTruncateCourseTitle = useBreakpointValue({ base: false, md: true });

  const { technology } = codeSnippet;
  return (
    <Box
      p={4}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="lg"
      w="full"
      borderWidth={1}
      borderColor="teal.400"
    >
      <Flex justifyContent="space-between" flexDirection={{ base: 'column', md: 'row' }}>
        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" isTruncated={shouldTruncateCourseTitle}>{codeSnippet.title}</Text>
        <Text
          fontSize="sm"
          fontWeight={500}
          bg={{ base: 'white', md: 'green.100' }}
          p={{ base: 0, md: 2 }}
          rounded="lg"
          color={{ base: 'teal.500', md: 'black' }}
        >
          {technology.name}
        </Text>
      </Flex>

      <Text mt={2} textAlign="justify" noOfLines={3}>{codeSnippet.description}</Text>

      <Flex mt={2} justifyContent="flex-end">
        <Button
          fontSize="sm"
          fontWeight={600}
          color="white"
          bg="teal.400"
          as="a"
          onClick={() => Router.push(getCodeSnippetURLById(codeSnippet._id))}
          _hover={{
            bg: 'teal.500',
          }}
          rightIcon={<ArrowForwardIcon />}
        >
          More Details
        </Button>
      </Flex>
    </Box>

  );
};

export default CodeSnippetCard;
