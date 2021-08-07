import React from 'react';
import {
  Flex,
  Text,
  useColorModeValue,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Course } from '../types';

interface CourseCardProps {
    course: Course,
}

const CourseCard = ({
  course,
}: CourseCardProps) => {
  const shouldTruncateCourseTitle = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      p={4}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="lg"
      w="full"
      borderWidth={1}
      borderColor="teal.400"
    >
      <Flex justifyContent="space-between" flexDirection={{ base: 'column', md: 'row' }}>
        <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" isTruncated={shouldTruncateCourseTitle}>{course.title}</Text>
        <Text
          fontSize="sm"
          fontWeight={500}
          bg={{ base: 'white', md: 'yellow.100' }}
          p={{ base: 0, md: 2 }}
          rounded="lg"
          color={{ base: 'teal.500', md: 'black' }}
        >
          {course.platform}
        </Text>
      </Flex>

      <Text mt={2} textAlign="justify" noOfLines={3}>{course.description}</Text>

      <Flex mt={2} justifyContent="flex-end">
        <Button
          fontSize="sm"
          fontWeight={600}
          color="white"
          bg="teal.400"
          as="a"
          href={course.link}
          target="_blank"
          _hover={{
            bg: 'teal.500',
          }}
          rightIcon={<ArrowForwardIcon />}
        >
          Go to the course
        </Button>
      </Flex>
    </Box>
  );
};

export default CourseCard;
