import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_METHODS } from '../../../constants/enums';
import dbConnect from '../../../database/dbConnect';
import { getCommunityRequestsWithPagination } from '../../../services/communityRequestsService';

const handler = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case HTTP_METHODS.GET:
      try {
        const { page } = req.query;
        const {
          communityRequests,
          communityRequestsCount,
        } = await getCommunityRequestsWithPagination(page);
        res.status(200).json({ success: true, communityRequests, communityRequestsCount });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
});

export default handler;
