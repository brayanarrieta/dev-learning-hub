import {
  createCodeSnippet, createCourse, createInterviewQuestion, getTechnologyById,
} from '.';
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_COMMUNITY_REQUESTS_WITH_PAGINATION_PAGE_SIZE, COMMUNITY_REQUEST_APPROVES_REQUIRED } from '../constants/config';
import { CommunityRequestType } from '../constants/enums';
import {
  approveCommunityRequestDal,
  createCommunityRequestDal,
  getCommunityRequestByIdDal,
  getCommunityRequestsCountDal,
  getCommunityRequestsWithPaginationDal,
  mergeCommunityRequestDal,
} from '../dal/communityRequestRepository';
import { convertToNumber } from '../helpers/convertTypes';
import { CommunityRequest } from '../types';

export const getCommunityRequestsWithPagination = async (currentPage: any) => {
  const page = currentPage ? convertToNumber(currentPage) : PAGINATION_DEFAULT_INITIAL_PAGE;

  const communityRequests = await getCommunityRequestsWithPaginationDal(
    page, GET_COMMUNITY_REQUESTS_WITH_PAGINATION_PAGE_SIZE,
  );
  const communityRequestsCount = await getCommunityRequestsCountDal();

  return {
    communityRequests,
    communityRequestsCount,
  };
};

export const createCommunityRequest = async (
  communityRequest: CommunityRequest,
) => createCommunityRequestDal(communityRequest);

export const getCommunityRequestById = async (communityRequestId: any) => {
  const communityRequestData = await getCommunityRequestByIdDal(communityRequestId);

  // TODO: Handle error in the case that there is no community request available

  // Populate Technology information
  const { descriptionData: { technology: technologyId }, type } = communityRequestData;

  if ([
    CommunityRequestType.CODE_SNIPPET,
    CommunityRequestType.INTERVIEW_QUESTION,
  ].includes(type)) {
    const technology = await getTechnologyById(
      technologyId,
    );
    communityRequestData.descriptionData.technology = technology;
  }

  return communityRequestData;
};

export const approveCommunityRequest = async (
  communityRequestId: any, userEmail: string,
) => approveCommunityRequestDal(communityRequestId, userEmail);

const checkRequirementsToMergeCommunityRequest = (
  communityRequest: any, currentUserEmail: string,
) => {
  // TODO: Handle error in the case that there is no community request available

  const { approves, user } = communityRequest;

  if (approves.length < COMMUNITY_REQUEST_APPROVES_REQUIRED || user.email !== currentUserEmail) {
    throw new Error('The community request cannot be merged');
  }
};

export const mergeCommunityRequest = async (communityRequestId: any, userEmail: string) => {
  const communityRequest = await getCommunityRequestByIdDal(communityRequestId);
  checkRequirementsToMergeCommunityRequest(communityRequest, userEmail);

  const { descriptionData, type } = communityRequest;

  if (type === CommunityRequestType.COURSE) {
    await createCourse(descriptionData);
  }

  if (type === CommunityRequestType.CODE_SNIPPET) {
    await createCodeSnippet(descriptionData);
  }

  if (type === CommunityRequestType.INTERVIEW_QUESTION) {
    await createInterviewQuestion(descriptionData);
  }

  return mergeCommunityRequestDal(communityRequestId);
};
