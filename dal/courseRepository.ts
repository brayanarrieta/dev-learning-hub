import dbConnect from '../database/dbConnect';
import Course from '../database/models/Course';

export const getExpiredCoursesCount = async () => {
  await dbConnect();
  const count = await Course.find({ isExpired: false }).count();
  return count;
};

export const getCoursesWithPaginationDal = async (currentPage: number, pageSize: number) => {
  await dbConnect();
  const offset = (currentPage - 1) * pageSize;
  const courses = await Course.find({ isExpired: false }).skip(offset)
    .limit(pageSize);
  return courses;
};

export const bulkInsertCourses = async (courses: any) => Course.insertMany(courses);

export const truncateCourses = async () => Course.deleteMany();
