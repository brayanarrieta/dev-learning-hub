import {
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

interface CoursesProps {
    courses: Course[]
}

const Courses = (props: CoursesProps) => {
  const { courses } = props;

  return (
    <SidebarWithHeader>
      <Stack spacing={4}>
        <Heading>Free Online Courses</Heading>

        <Stack
          spacing={2}
        >
          {courses.map((course) => <CourseCard key={course._id} course={course} />)}
        </Stack>
      </Stack>
    </SidebarWithHeader>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req }) {
    const { data } = await makeRequest({
      url: GET_API_COURSES,
      method: 'GET',
      headers: { Cookie: req.headers.cookie },
    });

    const { courses } = data;
    return { props: { courses } };
  },
});

export default Courses;