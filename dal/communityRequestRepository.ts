import { CommunityRequestState } from '../constants/enums';
import { CommunityRequest } from '../database/models';

export const bulkInsertCommunityRequestDal = async (
  communityRequests: any,
) => CommunityRequest.insertMany(communityRequests);

export const truncateCommunityRequestDal = async () => CommunityRequest.deleteMany();

export const getCommunityRequestsCountDal = async () => {
  const count = await CommunityRequest.find().countDocuments();
  return count;
};

export const getCommunityRequestsWithPaginationDal = async (
  currentPage: number, pageSize: number,
) => {
  const offset = (currentPage - 1) * pageSize;
  const communityRequests = await CommunityRequest.find({
    state: CommunityRequestState.WAITING_REVIEW,
  }).skip(offset)
    .limit(pageSize);
  return communityRequests;
};

export const createCommunityRequestDal = async (
  communityRequest: any,
) => CommunityRequest.create(communityRequest);

export const getCommunityRequestByIdDal = async (
  communityRequestId: string,
) => CommunityRequest.findById(communityRequestId);

export const approveCommunityRequestDal = async (
  communityRequestId: any,
  userEmail: string,
) => CommunityRequest.findOneAndUpdate(
  { _id: communityRequestId },
  { $addToSet: { approves: userEmail } },
  { returnOriginal: false },
);
