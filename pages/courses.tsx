import {
  Button,
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import Router from 'next/router';
import { Course } from '../types';
import SidebarWithHeader from '../custom-components/Layout/SidebarWithHeader';
import CourseCard from '../custom-components/CourseCard';
import { makeRequest } from '../helpers/makeRequest';
import { GET_API_COURSES } from '../constants/apiURLs';
import { convertToNumber } from '../helpers/convertTypes';

interface CoursesProps {
    courses: Course[],
    currentPage: number,
}

const Courses = (props: CoursesProps) => {
  const { courses, currentPage } = props;

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

          <Button
            size="sm"
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="gray.500"
            _hover={{
              bg: 'gray.600',
            }}
            rightIcon={<ArrowLeftIcon />}
            onClick={() => Router.push(`/courses?page=${currentPage - 1}`)}
            disabled={currentPage <= 1}
          >
            Previous
          </Button>

          <Button
            size="sm"
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="gray.500"
            _hover={{
              bg: 'gray.600',
            }}
            rightIcon={<ArrowRightIcon />}
            ml={2}
            onClick={() => Router.push(`/courses?page=${currentPage + 1}`)}
          >
            Next
          </Button>

        </Flex>

      </Stack>
    </SidebarWithHeader>
  );
};

const DEFAULT_INITIAL_PAGE = 1;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, query: { page = DEFAULT_INITIAL_PAGE } }) {
    const { data } = await makeRequest({
      url: GET_API_COURSES,
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
      params: { page },
    });

    const { courses } = data;
    return { props: { courses, currentPage: convertToNumber(page) } };
  },
});

export default Courses;
