import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_METHODS } from '../../../../constants/enums';
import dbConnect from '../../../../database/dbConnect';
import { mergeCommunityRequest } from '../../../../services/communityRequestsService';

const handler = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case HTTP_METHODS.POST:
      try {
        const {
          userEmail,
        } = req.body;

        const {
          communityRequestId,
        } = req.query;

        const communityRequest = await mergeCommunityRequest(communityRequestId, userEmail);

        res.status(200).json({ success: true, communityRequest });
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
