import {
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Course } from '../types';
import SidebarWithHeader from '../custom-components/Layout/SidebarWithHeader';
import CourseCard from '../custom-components/CourseCard';
import { makeRequest } from '../helpers/makeRequest';
import { GET_API_COURSES } from '../constants/apiURLs';
import { convertToNumber } from '../helpers/convertTypes';
import Paginator from '../components/Paginator';
import { COURSES_PAGE_URL } from '../constants/pageURLs';
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_COURSES_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';

interface CoursesProps {
    courses: Course[],
    currentPage: number,
    coursesCount: number,
}

// TODO: Add code in the case that there aren't courses

const Courses = (props: CoursesProps) => {
  const { courses, currentPage, coursesCount } = props;

  return (
    <SidebarWithHeader>
      <Stack spacing={4}>
        <Heading>Free Online Courses</Heading>

        <Stack
          spacing={2}
        >
          {courses.map((course) => <CourseCard key={course._id} course={course} />)}
        </Stack>

        <Flex justifyContent="flex-end">
          <Paginator
            currentPage={currentPage}
            pageSize={GET_COURSES_WITH_PAGINATION_PAGE_SIZE}
            basePageURL={COURSES_PAGE_URL}
            totalRows={coursesCount}
          />
        </Flex>

      </Stack>
    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { page = PAGINATION_DEFAULT_INITIAL_PAGE } }) {
    const { data } = await makeRequest({
      url: GET_API_COURSES,
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
      params: { page },
    });

    const { courses, coursesCount } = data;
    return { props: { courses, currentPage: convertToNumber(page), coursesCount } };
  },
});

export default Courses;
