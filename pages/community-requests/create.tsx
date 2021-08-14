import {
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormField from '../../components/FormField';
import SelectFormField from '../../components/SelectFormField';
import { CommunityRequestType } from '../../constants/enums';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';

interface IFormInput {
  title: string;
  type: CommunityRequestType;
}

const CommunityRequestsAdd = () => {
  const { control, handleSubmit, watch } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const watchAllFields = watch('type');

  console.log(watchAllFields);

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <Heading>Create Community Request</Heading>

        <Stack
          spacing={2}
          as={Flex}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          borderRadius="lg"
        >

          <form onSubmit={handleSubmit(onSubmit)}>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>

              <FormField
                controlField={control}
                fieldName="title"
                fieldLabel="Title"
                validationRules={{
                  isRequired: true,
                  minLength: 10,
                }}
              />

              <SelectFormField
                controlField={control}
                fieldName="type"
                fieldLabel="Type"
                validationRules={{
                  isRequired: true,
                }}
                options={[
                  {
                    value: CommunityRequestType.COURSE,
                    label: CommunityRequestType.COURSE,
                  },
                  {
                    value: CommunityRequestType.CODE_SNIPPET,
                    label: CommunityRequestType.CODE_SNIPPET,
                  },
                  {
                    value: CommunityRequestType.INTERVIEW_QUESTION,
                    label: CommunityRequestType.INTERVIEW_QUESTION,
                  },
                ]}
              />

            </SimpleGrid>

            <input type="submit" />
          </form>

        </Stack>

      </Stack>

    </SidebarWithHeader>
  );
};

export default CommunityRequestsAdd;
