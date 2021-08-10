import React from 'react';
import {
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import { InterviewQuestion } from '../../../types';

interface InterviewQuestionAccordionItemProps {
    interviewQuestion: InterviewQuestion,
}

const InterviewQuestionAccordionItem = ({
  interviewQuestion,
}: InterviewQuestionAccordionItemProps) => (
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'teal.400', color: 'white' }}>
        <Box flex="1" textAlign="left">
          {interviewQuestion.question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {interviewQuestion.answer}
    </AccordionPanel>
  </AccordionItem>

);

export default InterviewQuestionAccordionItem;
