import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Text,
} from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';
import { QUIZ_INTERVIEW_PAGE_URL } from '../../constants/pageURLs';

interface QuizDialogResultProps {
    isOpen: boolean;
    onClose: any;
    score: number;
}

const QuizDialogResult = (props:QuizDialogResultProps) => {
  const {
    isOpen, onClose, score,
  } = props;

  const cancelRef = React.useRef<any>();

  return (
    <AlertDialog
      closeOnEsc={false}
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
      size="lg"
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Quiz Result
          </AlertDialogHeader>

          <AlertDialogBody>

            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" textAlign="center">
              {`The final score is ${score}`}
            </Text>

          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="teal" onClick={() => Router.push(QUIZ_INTERVIEW_PAGE_URL)} ml={3}>
              Go to the Quiz Interview Page
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default QuizDialogResult;
