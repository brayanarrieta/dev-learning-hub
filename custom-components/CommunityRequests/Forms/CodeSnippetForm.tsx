import {
  Button, Flex, SimpleGrid, Stack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import useSWR from 'swr';
import FormField from '../../../components/FormField';
import MarkdownFormField from '../../../components/MarkdownFormField';
import SelectFormField from '../../../components/SelectFormField';
import TextAreaFormField from '../../../components/TextAreaFormField';
import { SWR_GET_API_TECHNOLOGIES } from '../../../constants/apiURLs';
import { fetcher } from '../../../helpers/requestHelpers';
import { Technology } from '../../../types';

interface CodeSnippetFormProps {
    formControl: any;
    unregisterFields: any;
}

const DESCRIPTION_DATA = 'descriptionData';

const CodeSnippetForm = (props: CodeSnippetFormProps) => {
  const { formControl, unregisterFields } = props;

  useEffect(() => () => {
    unregisterFields(DESCRIPTION_DATA);
  }, [unregisterFields]);

  // TODO: Add error handler
  // eslint-disable-next-line no-unused-vars
  const { data, error: getTechnologiesError } = useSWR(
    SWR_GET_API_TECHNOLOGIES,
    fetcher,
  );

  const { technologies = [] } = data || {};

  return (
    <Stack spacing={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <FormField
          formControl={formControl}
          fieldName={`${DESCRIPTION_DATA}.title`}
          fieldLabel="Code Snippet Title"
          validationRules={{
            isRequired: true,
            minLength: 10,
          }}
        />

        <SelectFormField
          formControl={formControl}
          fieldName={`${DESCRIPTION_DATA}.technology`}
          fieldLabel="Technology"
          validationRules={{
            isRequired: true,
          }}
          options={technologies.map(
            (technology: Technology) => ({ label: technology.name, value: technology._id }),
          )}
        />
      </SimpleGrid>

      <TextAreaFormField
        formControl={formControl}
        fieldName={`${DESCRIPTION_DATA}.description`}
        fieldLabel="Code Snippet Description"
      />

      <MarkdownFormField
        formControl={formControl}
        fieldName={`${DESCRIPTION_DATA}.content`}
        fieldLabel="Code Snippet Content"
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
          Create Community Request Code Snippet
        </Button>
      </Flex>

    </Stack>
  );
};

export default CodeSnippetForm;
