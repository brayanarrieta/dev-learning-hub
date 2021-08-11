import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_METHODS } from '../../../constants/enums';
import dbConnect from '../../../database/dbConnect';
import { getCodeSnippetsWithPagination } from '../../../services/codeSnippetsService';

const handler = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case HTTP_METHODS.GET:
      try {
        const { page } = req.query;
        const { codeSnippets, codeSnippetsCount } = await getCodeSnippetsWithPagination(page);
        res.status(200).json({ success: true, codeSnippets, codeSnippetsCount });
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
