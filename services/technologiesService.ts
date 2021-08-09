/* eslint-disable import/prefer-default-export */
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_TECHNOLOGIES_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import { getTechnologiesCountDal, getTechnologiesWithPaginationDal } from '../dal/technologyRepository';
import { convertToNumber } from '../helpers/convertTypes';

export const getTechnologiesWithPagination = async (currentPage: any) => {
  const page = currentPage ? convertToNumber(currentPage) : PAGINATION_DEFAULT_INITIAL_PAGE;

  const technologies = await getTechnologiesWithPaginationDal(
    page, GET_TECHNOLOGIES_WITH_PAGINATION_PAGE_SIZE,
  );
  const technologiesCount = await getTechnologiesCountDal();

  return {
    technologiesCount,
    technologies,
  };
};
