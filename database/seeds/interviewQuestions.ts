import { InterviewQuestion } from '../../types';

const INTERVIEW_QUESTIONS_REACT_SEEDS: InterviewQuestion[] = [
  {
    question: 'dummy',
    answer: 'dummy',
  },
];

const INTERVIEW_QUESTIONS_SEEDS: { [key: string]: InterviewQuestion[]} = {
  React: INTERVIEW_QUESTIONS_REACT_SEEDS,
};

export default INTERVIEW_QUESTIONS_SEEDS;
