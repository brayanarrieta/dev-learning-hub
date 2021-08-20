import React from 'react';
import {
  Text,
  useColorModeValue,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Router from 'next/router';
import { Technology } from '../../types';

interface QuizTechnologyCardProps {
    technology: Technology,
    buttonLink: string;
    buttonText: string;
}

const QuizTechnologyCard = ({
  technology, buttonLink, buttonText,
}: QuizTechnologyCardProps) => (
  <Stack
    direction={['column', 'row', 'row']}
    p={4}
    bg={useColorModeValue('white', 'gray.800')}
    borderRadius="lg"
    shadow="lg"
    w="full"
    borderWidth={1}
    borderColor="teal.400"
    justifyContent="space-between"
    alignItems="center"
  >
    <Text fontSize="xl" fontWeight="semibold">{technology.name}</Text>

    <Button
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg="teal.400"
      as="a"
      onClick={() => Router.push(buttonLink)}
      _hover={{
        bg: 'teal.500',
      }}
      rightIcon={<ArrowForwardIcon />}
    >
      {buttonText}
    </Button>

  </Stack>
);

export default QuizTechnologyCard;
