import { CommunityRequest } from '../database/models';

export const bulkInsertCommunityRequestDal = async (
  communityRequests: any,
) => CommunityRequest.insertMany(communityRequests);

export const truncateCommunityRequestDal = async () => CommunityRequest.deleteMany();
