import {
  Box,
  SimpleGrid, Stack, useColorModeValue, Text,
} from '@chakra-ui/react';
import React, { memo } from 'react';
import FieldView from '../../../../components/FieldView';
import MarkdownContent from '../../../../components/MarkdownContent';

  interface CodeSnippetViewProps {
      descriptionData: any;
  }

const CodeSnippetView = (props: CodeSnippetViewProps) => {
  const { descriptionData } = props;

  const {
    title, technology, description, content,
  } = descriptionData;

  return (
    <Stack
      as={Box}
      spacing={4}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="lg"
      p={4}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>

        <FieldView label="Code Snippet Title" content={title} />

        <FieldView label="Technology" content={technology.name} />

      </SimpleGrid>

      <FieldView label="Description" content={description} />

      <Box>
        <Text
          fontSize="md"
          fontWeight="semibold"
          mb={2}
        >
          Code Snippet Content
        </Text>

        <MarkdownContent content={content} />
      </Box>
    </Stack>
  );
};

export default memo(CodeSnippetView);
