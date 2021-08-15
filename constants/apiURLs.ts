export const GET_API_COURSES = '/api/courses';

export const GET_API_TECHNOLOGIES = '/api/technologies';

export const getAPITechnologyBySlugURL = (slug: any) => `/api/technologies/slug/${slug}`;

export const getAPIInterviewQuestionsByTechnologyId = (
  technologyId: any,
) => `/api/interview-questions/technology/${technologyId}`;

export const GET_API_CODE_SNIPPETS = '/api/code-snippets';

export const BASE_API_COMMUNITY_REQUESTS = '/api/community-requests';

export const getAPICommunityRequestById = (
  communityRequestId: any,
) => `${BASE_API_COMMUNITY_REQUESTS}/${communityRequestId}`;

export const postAPIApproveCommunityRequest = (
  communityRequestId: any,
) => `${BASE_API_COMMUNITY_REQUESTS}/${communityRequestId}/approve`;

export const postAPIMergeCommunityRequest = (
  communityRequestId: any,
) => `${BASE_API_COMMUNITY_REQUESTS}/${communityRequestId}/merge`;
