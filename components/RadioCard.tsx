import { Box, useRadio } from '@chakra-ui/react';
import React from 'react';

const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { children } = props;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" w="full">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        borderColor="teal.600"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  );
};

export default RadioCard;
