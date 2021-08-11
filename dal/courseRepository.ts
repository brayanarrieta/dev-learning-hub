import { Course } from '../database/models';

export const getExpiredCoursesCount = async () => {
  const count = await Course.find({ isExpired: false }).countDocuments();
  return count;
};

export const getCoursesWithPaginationDal = async (currentPage: number, pageSize: number) => {
  const offset = (currentPage - 1) * pageSize;
  const courses = await Course.find({ isExpired: false }).skip(offset)
    .limit(pageSize);
  return courses;
};

export const bulkInsertCourses = async (courses: any) => Course.insertMany(courses);

export const truncateCourses = async () => Course.deleteMany();
