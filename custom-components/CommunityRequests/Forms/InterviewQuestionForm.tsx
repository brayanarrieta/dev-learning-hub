import {
  Button, Flex, SimpleGrid, Stack, useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import FormField from '../../../components/FormField';
import MarkdownFormField from '../../../components/MarkdownFormField';
import SelectFormField from '../../../components/SelectFormField';
import { GET_API_TECHNOLOGIES } from '../../../constants/apiURLs';
import { HTTP_METHODS } from '../../../constants/enums';
import { makeRequest } from '../../../helpers/makeRequest';
import { Technology } from '../../../types';

  interface InterviewQuestionFormProps {
    formControl: any;
    unregisterFields: any;
  }

const DESCRIPTION_DATA = 'descriptionData';

const InterviewQuestionForm = (props: InterviewQuestionFormProps) => {
  const { formControl, unregisterFields } = props;
  const [technologies, setTechnologies] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const loadTechnologies = async () => {
      const { data } = await makeRequest({
        method: HTTP_METHODS.GET,
        url: GET_API_TECHNOLOGIES,
      });

      const { success, technologies: technologiesData } = data;

      if (!success) {
        toast({
          title: 'Something when wrong loading the technologies',
          description: 'Error loading the technologies, please try again later',
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
        return;
      }

      setTechnologies(technologiesData);
    };

    loadTechnologies();
    return () => {
      unregisterFields(DESCRIPTION_DATA);
    };
  }, [unregisterFields, toast]);

  return (
    <Stack spacing={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <FormField
          formControl={formControl}
          fieldName={`${DESCRIPTION_DATA}.question`}
          fieldLabel="Interview Question"
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

      <MarkdownFormField
        formControl={formControl}
        fieldName={`${DESCRIPTION_DATA}.answer`}
        fieldLabel="Interview Question Answer"
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
          Create Community Request Interview Question
        </Button>
      </Flex>

    </Stack>
  );
};

export default InterviewQuestionForm;
