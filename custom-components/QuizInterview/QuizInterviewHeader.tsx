import React from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';

interface QuizInterviewHeaderProps {
    technologyName: string,
}

const QuizInterviewHeader = ({
  technologyName,
}: QuizInterviewHeaderProps) => (
  <Box
    textAlign="center"
    alignItems="center"
  >
    <Heading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
      lineHeight="110%"
      color="green.400"
    >
      {`${technologyName} Quiz Interview`}
    </Heading>
  </Box>
);

export default QuizInterviewHeader;
