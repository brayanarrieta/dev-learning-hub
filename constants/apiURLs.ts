export const GET_API_COURSES = '/api/courses';

export const GET_API_TECHNOLOGIES = '/api/technologies';

export const getAPITechnologyBySlugURL = (slug: any) => `/api/technologies/slug/${slug}`;

export const getAPIInterviewQuestionsByTechnologyId = (
  technologyId: any,
) => `/api/interview-questions/technology/${technologyId}`;

export const GET_API_CODE_SNIPPETS = '/api/code-snippets';

export const GET_API_COMMUNITY_REQUESTS = '/api/community-requests';

export const POST_API_COMMUNITY_REQUESTS = GET_API_COMMUNITY_REQUESTS;

export const getAPICommunityRequestById = (
  communityRequestId: any,
) => `${GET_API_COMMUNITY_REQUESTS}/${communityRequestId}`;
