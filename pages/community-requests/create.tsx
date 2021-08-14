import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { CommunityRequestType } from '../../constants/enums';
import SidebarWithHeader from '../../custom-components/Layout/SidebarWithHeader';

const CommunityRequestsAdd = () => {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState<string | null>(null);

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
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input />
            </FormControl>

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

        </Stack>

      </Stack>

    </SidebarWithHeader>
  );
};

export default CommunityRequestsAdd;
