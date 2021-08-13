/* eslint-disable import/prefer-default-export */
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_COMMUNITY_REQUESTS_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import { getCommunityRequestsCountDal, getCommunityRequestsWithPaginationDal } from '../dal/communityRequestRepository';
import { convertToNumber } from '../helpers/convertTypes';

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
