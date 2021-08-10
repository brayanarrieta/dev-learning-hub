import {
  Box, useColorModeValue, Text, HStack, VStack, Flex,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface BannerProps {
    text: string;
    icon?: ReactElement;
}

const Banner = (props: BannerProps) => {
  const { text, icon } = props;

  return (
    <HStack
      as={Flex}
      align="top"
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      p={4}
      alignItems="center"
    >
      {icon && (
      <Box px={2}>
        {icon}
      </Box>
      )}
      <VStack align="start">
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="semibold"
        >
          {text}
        </Text>
      </VStack>
    </HStack>
  );
};

Banner.defaultProps = {
  icon: null,
};

export default Banner;
