/* eslint-disable import/prefer-default-export */
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_COMMUNITY_REQUESTS_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import { CommunityRequestType } from '../constants/enums';
import {
  createCommunityRequestDal, getCommunityRequestByIdDal, getCommunityRequestsCountDal, getCommunityRequestsWithPaginationDal,
} from '../dal/communityRequestRepository';
import { convertToNumber } from '../helpers/convertTypes';
import { CommunityRequest } from '../types';
import { getTechnologyById } from './technologiesService';

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
