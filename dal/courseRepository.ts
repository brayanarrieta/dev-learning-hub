import dbConnect from '../database/dbConnect';
import Course from '../database/models/Course';

export const getCourses = async () => {
  await dbConnect();
  const courses = await Course.find({ isExpired: false });
  return courses;
};

export const bulkInsertCourses = async (courses: any) => Course.insertMany(courses);

export const truncateCourses = async () => Course.deleteMany();
