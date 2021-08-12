/* eslint-disable import/prefer-default-export */
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_CODE_SNIPPETS_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import { getCodeSnippetsCountDal, getCodeSnippetsWithPaginationDal } from '../dal/codeSnippetRepository';
import { convertToNumber } from '../helpers/convertTypes';

export const getCodeSnippetsWithPagination = async (currentPage: any) => {
  const page = currentPage ? convertToNumber(currentPage) : PAGINATION_DEFAULT_INITIAL_PAGE;

  const codeSnippets = await getCodeSnippetsWithPaginationDal(
    page, GET_CODE_SNIPPETS_WITH_PAGINATION_PAGE_SIZE,
  );
  const codeSnippetsCount = await getCodeSnippetsCountDal();

  return {
    codeSnippets,
    codeSnippetsCount,
  };
};
