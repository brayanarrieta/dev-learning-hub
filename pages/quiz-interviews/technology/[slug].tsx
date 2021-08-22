import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button, Flex, Icon, Progress, Stack, useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcEmptyFilter } from 'react-icons/fc';
import Banner from '../../../components/Banner';
import { getAPIQuizInterviewQuestionsById, getAPITechnologyBySlugURL } from '../../../constants/apiURLs';
import { QUIZ_QUESTIONS_COUNT } from '../../../constants/config';
import SidebarWithHeader from '../../../custom-components/Layout/SidebarWithHeader';
import QuizDialogResult from '../../../custom-components/QuizInterview/QuizDialogResult';
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
  const [isDialogResultOpen, setIsDialogResultOpen] = useState(false);

  const handleNextQuestionAction = () => {
    setIsAnswerNotSelected(!quizAnswers[currentQuestionIndex]);
    if (!quizAnswers[currentQuestionIndex]) return;

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS_COUNT - 1;

  const currentQuestion = questions[currentQuestionIndex];

  const handleOnChangeAnswer = (answer: QuizQuestionAnswer) => {
    setQuizAnswers({ ...quizAnswers, [currentQuestionIndex]: answer });
  };

  const handleResultAction = () => {
    setIsAnswerNotSelected(!quizAnswers[currentQuestionIndex]);
    if (!quizAnswers[currentQuestionIndex]) return;

    setIsDialogResultOpen(true);
  };

  const getDialogResultModal = () => {
    const correctAnswersCount = Object.values(
      quizAnswers,
    ).filter((i: QuizQuestionAnswer) => i.isCorrect).length;

    return (
      <QuizDialogResult
        isOpen={isDialogResultOpen}
        onClose={() => setIsDialogResultOpen(false)}
        correctAnswersCount={correctAnswersCount}
        totalAnswersCount={QUIZ_QUESTIONS_COUNT}
      />
    );
  };

  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <SidebarWithHeader>

      {isDialogResultOpen && getDialogResultModal()}

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

        {questions.length ? (
          <Stack
            p={6}
            bg={bgColor}
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
                  onClick={handleNextQuestionAction}
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
                  onClick={handleResultAction}
                >
                  Result
                </Button>
              )}
            </Flex>
          </Stack>
        ) : (
          <Banner
            icon={<Icon as={FcEmptyFilter} w={10} h={10} />}
            text={`There are not questions for ${technologyName} Quiz right now registered in the system.`}
          />
        )}

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
