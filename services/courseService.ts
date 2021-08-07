/* eslint-disable import/prefer-default-export */
import { getCoursesWithPaginationDal, getExpiredCoursesCount } from '../dal/courseRepository';
import { convertToNumber } from '../helpers/convertTypes';

const DEFAULT_INITIAL_PAGE = 1;
const GET_COURSES_WITH_PAGINATION_PAGE_SIZE = 2;

export const getCoursesWithPagination = async (currentPage: any) => {
  const page = currentPage ? convertToNumber(currentPage) : DEFAULT_INITIAL_PAGE;

  const courses = await getCoursesWithPaginationDal(page, GET_COURSES_WITH_PAGINATION_PAGE_SIZE);
  const coursesCount = await getExpiredCoursesCount();

  return {
    courses,
    coursesCount,
  };
};
