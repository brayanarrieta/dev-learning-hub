import { getRandomQuizQuestionsByTechnologyIdDal } from '../dal/quizQuestionRepository';
import { QuizQuestionAnswer } from '../types';

const cleanQuizQuestionAnswers = (quizQuestion: any) => {
  const { answers } = quizQuestion;

  const correctAnswer = answers.find((answer: QuizQuestionAnswer) => answer.isCorrect);

  const incorrectAnswers = answers.filter((answer: QuizQuestionAnswer) => !answer.isCorrect);

  const newAnswers = [
    correctAnswer,
    ...incorrectAnswers.slice(0, 3),
  ].sort(() => Math.random() - 0.5);

  // eslint-disable-next-line no-param-reassign
  quizQuestion.answers = newAnswers;

  return quizQuestion;
};

export const getQuizQuestionsByTechnologyId = async (technologyId: any) => {
  const questions = await getRandomQuizQuestionsByTechnologyIdDal(technologyId);
  const quizQuestionsCleaned = questions.map(cleanQuizQuestionAnswers);
  return quizQuestionsCleaned;
};
