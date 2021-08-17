import { QuizQuestion } from '../database/models';

export const bulkInsertQuizQuestionsDal = async (
  quizQuestions: any,
) => QuizQuestion.insertMany(quizQuestions);

export const truncateQuizQuestionsDal = async () => QuizQuestion.deleteMany();
