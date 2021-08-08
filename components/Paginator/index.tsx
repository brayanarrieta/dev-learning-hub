import {
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

import TemplateButton from './TemplateButton';
import { ceilNumber } from '../../helpers/mathHelpers';

interface PaginatorProps {
    currentPage: number,
    pageSize: number,
    totalRows: number,
    basePageURL: string,
}

interface Page {
    content: string | number,
    pageNumber: number,
    isActive?: boolean,
}

const Paginator = (props: PaginatorProps) => {
  const {
    currentPage, pageSize, totalRows, basePageURL,
  } = props;
  const minPageNumberLimit = 1;
  const maxPageNumberLimit = ceilNumber(totalRows / pageSize);

  const getPages = () => {
    let pagesArray: Page[] = [];

    // previous page
    if (currentPage > minPageNumberLimit) {
      pagesArray = [{
        content: currentPage - 1,
        pageNumber: currentPage - 1,
      }, ...pagesArray];
    }

    // current page
    const page = {
      content: currentPage,
      pageNumber: currentPage,
      isActive: true,
    };

    if (pagesArray.length) {
      pagesArray = [...pagesArray, page];
    } else {
      pagesArray = [page];
    }

    // next page
    if (currentPage < maxPageNumberLimit) {
      pagesArray = [...pagesArray, {
        content: currentPage + 1,
        pageNumber: currentPage + 1,
      }];
    }

    return pagesArray;
  };

  const pages: Page[] = getPages();

  const generatePageLink = (pageNumber: number) => `${basePageURL}?page=${pageNumber}`;

  return (
    <HStack spacing={2}>
      <TemplateButton
        link={generatePageLink(currentPage - 1)}
        content="Previous"
        leftIcon={<ArrowLeftIcon />}
        isDisabled={currentPage <= minPageNumberLimit}
        isFixedButton
      />

      {pages.map((page: Page) => (
        <TemplateButton
          key={`paginator-page-${page.content}`}
          link={generatePageLink(page.pageNumber)}
          content={page.content}
          isActive={page.isActive}
        />
      ))}

      <TemplateButton
        link={generatePageLink(currentPage + 1)}
        content="Next"
        rightIcon={(<ArrowRightIcon />)}
        isDisabled={currentPage === maxPageNumberLimit}
        isFixedButton
      />
    </HStack>
  );
};

export default Paginator;
