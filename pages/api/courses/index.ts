import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { HTTP_METHODS } from '../../../constants/enums';
import { getCourses } from '../../../dal/courseRepository';
import dbConnect from '../../../database/dbConnect';

const handler = withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case HTTP_METHODS.GET:
      try {
        const courses = await getCourses();
        res.status(200).json({ success: true, courses });
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
