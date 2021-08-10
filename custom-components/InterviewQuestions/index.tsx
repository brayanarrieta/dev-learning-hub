import React from 'react';
import {
  Accordion, Box, useColorModeValue,
} from '@chakra-ui/react';
import { InterviewQuestion } from '../../types';
import InterviewQuestionAccordionItem from './InterviewQuestionsAccordion/InterviewQuestionAccordionItem';

interface InterviewQuestionsAccordionProps {
    interviewQuestions: InterviewQuestion[],
}

const InterviewQuestionsAccordion = ({
  interviewQuestions,
}: InterviewQuestionsAccordionProps) => (

  <Box
    bg={useColorModeValue('white', 'gray.800')}
    borderRadius="lg"
  >
    <Accordion allowToggle>
      {interviewQuestions.map((interviewQuestion) => (
        <InterviewQuestionAccordionItem
          key={`interview-question-accordion-item-${interviewQuestion._id}`}
          interviewQuestion={interviewQuestion}
        />
      ))}
    </Accordion>
  </Box>
);

export default InterviewQuestionsAccordion;
