import {
  Button, Flex, SimpleGrid, Stack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import FormField from '../../../components/FormField';
import MarkdownFormField from '../../../components/MarkdownFormField';
import SelectFormField from '../../../components/SelectFormField';
import { CoursePlatform } from '../../../constants/enums';

interface CourseFormProps {
  formControl: any;
  unregisterFields: any;
}

const DESCRIPTION_DATA = 'descriptionData';

const CourseForm = (props: CourseFormProps) => {
  const { formControl, unregisterFields } = props;

  useEffect(() => () => {
    unregisterFields(DESCRIPTION_DATA);
  }, [unregisterFields]);

  return (
    <Stack spacing={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <FormField
          formControl={formControl}
          fieldName={`${DESCRIPTION_DATA}.title`}
          fieldLabel="Course Title"
          validationRules={{
            isRequired: true,
            minLength: 10,
          }}
        />

        <SelectFormField
          formControl={formControl}
          fieldName={`${DESCRIPTION_DATA}.platform`}
          fieldLabel="Platform"
          validationRules={{
            isRequired: true,
          }}
          options={[
            {
              value: CoursePlatform.UDEMY,
              label: CoursePlatform.UDEMY,
            },
            {
              value: CoursePlatform.COURSERA,
              label: CoursePlatform.COURSERA,
            },
            {
              value: CoursePlatform.YOUTUBE,
              label: CoursePlatform.YOUTUBE,
            },
            {
              value: CoursePlatform.PLURALSIGHT,
              label: CoursePlatform.PLURALSIGHT,
            },
          ]}
        />
      </SimpleGrid>

      <FormField
        formControl={formControl}
        fieldName={`${DESCRIPTION_DATA}.link`}
        fieldLabel="Course Link"
        validationRules={{
          isRequired: true,
          minLength: 10,
        }}
      />

      <MarkdownFormField
        formControl={formControl}
        fieldName={`${DESCRIPTION_DATA}.description`}
        fieldLabel="Course Description"
        validationRules={{
          isRequired: true,
          minLength: 10,
        }}
      />

      <Flex justifyContent="flex-end">
        <Button
          fontSize="sm"
          fontWeight={600}
          color="white"
          bg="teal.400"
          _hover={{
            bg: 'teal.500',
          }}
          rightIcon={<FiPlus />}
          type="submit"
        >
          Create Community Request Course
        </Button>
      </Flex>

    </Stack>
  );
};

export default CourseForm;
