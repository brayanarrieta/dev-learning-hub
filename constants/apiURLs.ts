export const GET_API_COURSES = '/api/courses';

export const GET_API_TECHNOLOGIES = '/api/technologies';

export const getAPITechnologyBySlugURL = (slug: any) => `/api/technologies/slug/${slug}`;

export const getAPIInterviewQuestionsByTechnologyId = (
  technologyId: any,
) => `/api/interview-questions/technology/${technologyId}`;
