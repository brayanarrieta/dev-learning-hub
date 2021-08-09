/* eslint-disable import/prefer-default-export */
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_INTERVIEW_QUESTIONS_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import { getInterviewQuestionsByTechnologyIdWithPaginationDal, getInterviewQuestionsCountByTechnologyIdDal } from '../dal/interviewQuestionRepository';
import { convertToNumber } from '../helpers/convertTypes';

export const getInterviewQuestionsWithPaginationByTechnologyId = async (
  technologyId: any, currentPage: any,
) => {
  const page = currentPage ? convertToNumber(currentPage) : PAGINATION_DEFAULT_INITIAL_PAGE;

  const interviewQuestions = await getInterviewQuestionsByTechnologyIdWithPaginationDal(
    technologyId, page, GET_INTERVIEW_QUESTIONS_WITH_PAGINATION_PAGE_SIZE,
  );

  const interviewQuestionsCount = await getInterviewQuestionsCountByTechnologyIdDal(technologyId);

  return {
    interviewQuestionsCount,
    interviewQuestions,
  };
};
