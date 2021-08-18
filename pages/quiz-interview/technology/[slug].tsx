import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button, Flex, Progress, Stack, useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { getAPIQuizInterviewQuestionsById, getAPITechnologyBySlugURL } from '../../../constants/apiURLs';
import { QUIZ_QUESTIONS_COUNT } from '../../../constants/config';
import SidebarWithHeader from '../../../custom-components/Layout/SidebarWithHeader';
import QuizInterviewHeader from '../../../custom-components/QuizInterview/QuizInterviewHeader';
import QuizQuestionCard from '../../../custom-components/QuizInterview/QuizQuestionCard';
import { makeRequest } from '../../../helpers/makeRequest';
import { QuizQuestion, QuizQuestionAnswer } from '../../../types';

interface TechnologyQuestionsProps {
  technologyName: string;
  questions: QuizQuestion[];
}

const TechnologyQuestions = (props: TechnologyQuestionsProps) => {
  const {
    technologyName,
    questions,
  } = props;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: any}>({});
  const [isAnswerNotSelected, setIsAnswerNotSelected] = useState(false);

  const handleNextQuestion = () => {
    setIsAnswerNotSelected(!quizAnswers[currentQuestionIndex]);
    if (!quizAnswers[currentQuestionIndex]) return;

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS_COUNT - 1;

  const currentQuestion = questions[currentQuestionIndex];

  const handleOnChangeAnswer = (answer: QuizQuestionAnswer) => {
    setQuizAnswers({ ...quizAnswers, [currentQuestionIndex]: answer });
  };

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <QuizInterviewHeader
          technologyName={technologyName}
        />

        <Progress
          colorScheme="teal"
          hasStripe
          size="lg"
          value={currentQuestionIndex}
          min={0}
          max={QUIZ_QUESTIONS_COUNT - 1}
          borderRadius="md"
        />

        <Stack
          p={4}
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius="lg"
          shadow="lg"
          w="full"
          borderWidth={1}
          borderColor="teal.400"
          spacing={4}
        >
          <QuizQuestionCard
            handleOnChangeAnswer={handleOnChangeAnswer}
            quizQuestion={currentQuestion}
            isAnswerNotSelected={isAnswerNotSelected}
          />

          <Flex justifyContent="flex-end">
            {!isLastQuestion ? (
              <Button
                fontSize="sm"
                fontWeight={600}
                color="white"
                bg="teal.400"
                _hover={{
                  bg: 'teal.500',
                }}
                rightIcon={<ArrowForwardIcon />}
                onClick={handleNextQuestion}
              >
                Next Question
              </Button>
            ) : (
              <Button
                fontSize="sm"
                fontWeight={600}
                color="white"
                bg="teal.400"
                _hover={{
                  bg: 'teal.500',
                }}
                rightIcon={<ArrowForwardIcon />}
              >
                Result
              </Button>
            )}
          </Flex>
        </Stack>

      </Stack>

    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({
    req, query: {
      slug,
    },
  }) {
    const { data: { technology } } = await makeRequest({
      url: getAPITechnologyBySlugURL(slug),
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
    });

    const { data: { questions } } = await makeRequest({
      url: getAPIQuizInterviewQuestionsById(technology._id),
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
    });

    return {
      props: {
        technologyName: technology.name,
        questions,
      },
    };
  },
});

export default TechnologyQuestions;
