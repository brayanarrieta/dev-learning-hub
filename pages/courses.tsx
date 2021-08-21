import {
  Flex,
  Heading,
  Icon,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FcEmptyFilter } from 'react-icons/fc';
import { Course } from '../types';
import SidebarWithHeader from '../custom-components/Layout/SidebarWithHeader';
import CourseCard from '../custom-components/CourseCard';
import { makeRequest } from '../helpers/makeRequest';
import { GET_API_COURSES } from '../constants/apiURLs';
import { convertToNumber } from '../helpers/convertTypes';
import Paginator from '../components/Paginator';
import { COURSES_PAGE_URL } from '../constants/pageURLs';
import { PAGINATION_DEFAULT_INITIAL_PAGE, GET_COURSES_WITH_PAGINATION_PAGE_SIZE } from '../constants/config';
import Banner from '../components/Banner';

interface CoursesProps {
    courses: Course[],
    currentPage: number,
    coursesCount: number,
}

const Courses = (props: CoursesProps) => {
  const { courses, currentPage, coursesCount } = props;

  return (
    <SidebarWithHeader>
      <Stack spacing={4}>
        <Heading>Free Online Courses</Heading>

        {
          courses.length ? (
            <Stack
              spacing={2}
            >
              {courses.map((course) => <CourseCard key={course._id} course={course} />)}
            </Stack>
          ) : (
            <Banner
              icon={<Icon as={FcEmptyFilter} w={10} h={10} />}
              text="There are no courses right now registered in the system."
            />
          )
        }

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
