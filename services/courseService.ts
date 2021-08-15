import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_COURSES_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import { createCourseDal, getCoursesWithPaginationDal, getExpiredCoursesCount } from '../dal/courseRepository';
import { convertToNumber } from '../helpers/convertTypes';

export const getCoursesWithPagination = async (currentPage: any) => {
  const page = currentPage ? convertToNumber(currentPage) : PAGINATION_DEFAULT_INITIAL_PAGE;

  const courses = await getCoursesWithPaginationDal(page, GET_COURSES_WITH_PAGINATION_PAGE_SIZE);
  const coursesCount = await getExpiredCoursesCount();

  return {
    courses,
    coursesCount,
  };
};

export const createCourse = async (course: any) => createCourseDal(course);
