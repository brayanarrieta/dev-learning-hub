import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { CommunityRequestType } from '../../constants/enums';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';

interface IFormInput {
  title: string;
}

const CommunityRequestsAdd = () => {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <SidebarWithHeader>

      <Stack spacing={4}>

        <Heading> Create Community Request</Heading>

        <Stack
          spacing={2}
          as={Flex}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          borderRadius="lg"
        >

          <form onSubmit={handleSubmit(onSubmit)}>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>

              <Controller
                name="title"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Title field is required',
                  minLength: {
                    value: 10,
                    message: 'Title must have a min length of 10 characters',
                  },
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <FormControl isInvalid={!!error}>
                    <FormLabel>Title</FormLabel>
                    <Input onChange={onChange} value={value} />
                    {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
                  </FormControl>
                )}
              />

              <FormControl>
                <FormLabel>Type</FormLabel>
                <Select placeholder="Select the type" onChange={(e) => setType(e.target.value)}>
                  <option value={CommunityRequestType.INTERVIEW_QUESTION}>
                    {CommunityRequestType.INTERVIEW_QUESTION}
                  </option>
                  <option value={CommunityRequestType.CODE_SNIPPET}>
                    {CommunityRequestType.CODE_SNIPPET}
                  </option>
                  <option value={CommunityRequestType.COURSE}>
                    {CommunityRequestType.COURSE}
                  </option>
                </Select>
              </FormControl>

            </SimpleGrid>

            <input type="submit" />
          </form>

        </Stack>

      </Stack>

    </SidebarWithHeader>
  );
};

export default CommunityRequestsAdd;
