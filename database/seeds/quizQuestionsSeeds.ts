import { QuizQuestion } from '../../types';

const MOCK_REACT_SEED = {
  question: 'What is React?',
  answers: [
    {
      answer: 'Correct 1',
      isCorrect: true,
    },
    {
      answer: 'Correct 2',
      isCorrect: true,
    },
    {
      answer: 'Incorrect 1',
      isCorrect: false,
    },
    {
      answer: 'Incorrect 2',
      isCorrect: false,
    },
    {
      answer: 'Incorrect 3',
      isCorrect: false,
    },
  ],
};

const QUIZ_QUESTIONS_REACT_SEEDS: QuizQuestion[] = [
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
  MOCK_REACT_SEED,
];

const QUIZ_QUESTIONS_SEEDS: { [key: string]: QuizQuestion[]} = {
  React: QUIZ_QUESTIONS_REACT_SEEDS,
};

export default QUIZ_QUESTIONS_SEEDS;
