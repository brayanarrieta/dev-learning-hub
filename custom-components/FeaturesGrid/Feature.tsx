import { ReactElement } from 'react';
import {
  Box,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => (
  <HStack align="top">
    <Box px={2}>
      {icon}
    </Box>
    <VStack align="start">
      <Text fontWeight={600}>{title}</Text>
      <Text color="gray.600">{text}</Text>
    </VStack>
  </HStack>
);

export default Feature;
