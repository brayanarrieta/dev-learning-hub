import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface FieldViewProps {
    label: string;
    content: string;
}

const FieldView = (props: FieldViewProps) => {
  const { label, content } = props;

  return (
    <Box>
      <Text
        fontSize="md"
        fontWeight="semibold"
        mb={2}
      >
        {label}
      </Text>

      <Text
        fontSize="md"
        color="gray.600"
        textAlign="justify"
      >
        {content}
      </Text>
    </Box>
  );
};

export default FieldView;
