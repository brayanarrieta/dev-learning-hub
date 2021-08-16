import {
  Box,
  SimpleGrid, Stack, useColorModeValue, Text,
} from '@chakra-ui/react';
import React, { memo } from 'react';
import FieldView from '../../../../components/FieldView';
import MarkdownContent from '../../../../components/MarkdownContent';

interface InterviewQuestionViewProps {
    descriptionData: any;
}

const InterviewQuestionView = (props: InterviewQuestionViewProps) => {
  const { descriptionData } = props;

  const {
    question, answer, technology,
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

        <FieldView label="Interview Question" content={question} />

        <FieldView label="Technology" content={technology.name} />

      </SimpleGrid>

      <Box>
        <Text
          fontSize="md"
          fontWeight="semibold"
          mb={2}
        >
          Interview Question Answer
        </Text>

        <MarkdownContent content={answer} />
      </Box>
    </Stack>
  );
};

export default memo(InterviewQuestionView);
