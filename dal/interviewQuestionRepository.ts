import InterviewQuestion from '../database/models/InterviewQuestion';

export const bulkInterviewQuestions = async (
  interviewQuestions: any,
) => InterviewQuestion.insertMany(interviewQuestions);

export const getInterviewQuestionsByTechnologyIdWithPaginationDal = async (
  technologyId: string, currentPage: number, pageSize: number,
) => {
  const offset = (currentPage - 1) * pageSize;
  const interviewQuestions = await InterviewQuestion.find({ technologyId }).skip(offset)
    .limit(pageSize);
  return interviewQuestions;
};

export const truncateInterviewQuestions = async () => InterviewQuestion.deleteMany();

export const getInterviewQuestionsCountByTechnologyIdDal = async (technologyId: string) => {
  const count = await InterviewQuestion.find({ technologyId }).countDocuments();
  return count;
};
