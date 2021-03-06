import { Stack, Text } from '@chakra-ui/react';
import React, { memo } from 'react';
import MarkdownContent from '../../components/MarkdownContent';
import RadioCardGroup from '../../components/RadioCardGroup';
import { QuizQuestion, QuizQuestionAnswer } from '../../types';

interface QuizQuestionCardProps {
    quizQuestion: QuizQuestion;
    handleOnChangeAnswer: any;
    isAnswerNotSelected: boolean;
}

const SEPARATOR = '-';

const QuizQuestionCard = (props: QuizQuestionCardProps) => {
  const { quizQuestion, handleOnChangeAnswer, isAnswerNotSelected } = props;

  const answers = quizQuestion.answers.map((i: QuizQuestionAnswer, index: number) => ({
    label: i.answer,
    value: `${quizQuestion._id}${SEPARATOR}${index}`,
  }));

  const handleOnChangeQuestionAnswer = (selectedValue: any) => {
    const [, selectedIndex] = selectedValue.split(SEPARATOR);
    handleOnChangeAnswer(quizQuestion.answers[selectedIndex]);
  };

  return (
    <Stack
      spacing={8}
      alignItems="center"
    >
      <MarkdownContent content={quizQuestion.question} />

      <RadioCardGroup
        options={answers}
        name="questionAnswer"
        onChange={handleOnChangeQuestionAnswer}
      />

      {isAnswerNotSelected && (
      <Text
        fontSize="md"
        fontWeight="semibold"
        color="red.400"
      >
        Please select an answer before continue
      </Text>
      )}
    </Stack>

  );
};

export default memo(QuizQuestionCard);
