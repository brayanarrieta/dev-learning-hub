import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_TECHNOLOGIES_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import {
  getTechnologiesCountDal,
  getTechnologiesDal,
  getTechnologiesWithPaginationDal,
  getTechnologyByIdDal,
  getTechnologyBySlugDal,
} from '../dal/technologyRepository';
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

export const getTechnologies = async () => getTechnologiesDal();

export const getTechnologyBySlug = async (slug: any) => getTechnologyBySlugDal(slug);

export const getTechnologyById = async (id: any) => getTechnologyByIdDal(id);
