import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  SimpleGrid, Stack, useColorModeValue, Text, Link,
} from '@chakra-ui/react';
import React from 'react';
import FieldView from '../../../../components/FieldView';

interface CourseViewProps {
    descriptionData: any;
}

const CourseView = (props: CourseViewProps) => {
  const { descriptionData } = props;

  const {
    title, platform, link, description,
  } = descriptionData;

  return (
    <Stack
      as={Box}
      spacing={4}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      shadow="lg"
      p={4}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>

        <FieldView label="Course title" content={title} />

        <FieldView label="Platform" content={platform} />

      </SimpleGrid>

      <Box>
        <Text
          fontSize="md"
          fontWeight="semibold"
          mb={2}
        >
          Course Link
        </Text>

        <Link color="gray.600" href={link} target="_blank" isExternal>
          {link}
          <ExternalLinkIcon ml={2} />
        </Link>
      </Box>

      <FieldView label="Course Description" content={description} />
    </Stack>
  );
};

export default CourseView;
