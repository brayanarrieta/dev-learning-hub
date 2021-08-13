// Auth0 URLs
export const SIGN_IN_URL = '/api/auth/login';
export const LOGOUT_URL = '/api/auth/logout';
export const PROFILE_URL = '/api/auth/me';

export const DASHBOARD_URL = '/dashboard';
export const COURSES_PAGE_URL = '/courses';
export const INTERVIEW_QUESTIONS_PAGE_URL = '/interview-questions';
export const CODE_SNIPPETS_PAGE_URL = '/code-snippets';
export const COMMUNITY_REQUESTS_PAGE_URL = '/community-requests';
export const CREATE_COMMUNITY_REQUESTS_PAGE_URL = `${COMMUNITY_REQUESTS_PAGE_URL}/create`;

export const getTechnologyInterviewQuestionsURL = (slug: string) => `${INTERVIEW_QUESTIONS_PAGE_URL}/technology/${slug}`;

export const getCodeSnippetURLById = (id: any) => `${CODE_SNIPPETS_PAGE_URL}/${id}`;
