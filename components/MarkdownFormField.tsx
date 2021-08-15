import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  useColorModeValue,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Controller } from 'react-hook-form';
import { FcEmptyFilter } from 'react-icons/fc';
import { FiEdit2, FiEye } from 'react-icons/fi';
import MarkdownContent from './MarkdownContent';

export interface MarkdownFormFieldProps {
    formControl: any;
    fieldName: string;
    defaultValue?: any;
    fieldLabel: string;
    validationRules?: {
        isRequired?: boolean;
        minLength?: number;
    }
}

const PreviewNotAvailable = () => (
  <HStack
    as={Flex}
    align="top"
    bg={useColorModeValue('white', 'gray.800')}
    borderRadius="lg"
    alignItems="center"
    justifyContent="center"
  >
    <Box px={2}>
      <Icon as={FcEmptyFilter} w={6} h={6} />
    </Box>

    <VStack align="start">
      <Text
        fontSize="md"
        fontWeight="semibold"
      >
        Preview not available
      </Text>
    </VStack>
  </HStack>
);

const MarkdownFormField = (props: MarkdownFormFieldProps) => {
  const {
    formControl, fieldName, defaultValue, fieldLabel, validationRules,
  } = props;

  const { isRequired, minLength } = validationRules || {};

  const rules = {
    required: isRequired ? `${fieldLabel} field is required` : false,
    ...(minLength ? {
      minLength: {
        value: minLength,
        message: `${fieldLabel} must have a min length of ${minLength} characters`,
      },
    } : {}),
  };

  return (
    <Controller
      name={fieldName}
      control={formControl}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl isInvalid={!!error} mb={2}>
          <FormLabel>{fieldLabel}</FormLabel>
          <Tabs isFitted variant="enclosed" size="sm">
            <TabList>
              <Tab
                _selected={{ bg: 'teal.500' }}
                color="white"
                bg="teal.400"
                borderTopRightRadius="none"
                fontWeight="semibold"
              >
                <Icon
                  mr={2}
                  as={FiEdit2}
                />
                Write
              </Tab>
              <Tab
                _selected={{ bg: 'teal.500' }}
                color="white"
                bg="teal.400"
                borderTopLeftRadius="none"
                fontWeight="semibold"
              >
                <Icon
                  mr={2}
                  as={FiEye}
                />
                Preview
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <Textarea onChange={onChange} value={value} />
              </TabPanel>
              <TabPanel p={0}>
                <Box
                  px={4}
                  py={2}
                  borderWidth={1}
                  borderColor="teal.400"
                  borderBottomRadius="lg"
                >
                  {!value ? (
                    <PreviewNotAvailable />
                  ) : <MarkdownContent content={value} />}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>

          {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
      )}
    />
  );
};

MarkdownFormField.defaultProps = {
  defaultValue: '',
  validationRules: {},
};

export default MarkdownFormField;
