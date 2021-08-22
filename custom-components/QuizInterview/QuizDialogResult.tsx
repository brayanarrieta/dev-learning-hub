import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Text,
  Icon,
  Stack,
} from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';
import { FcFlashOn } from 'react-icons/fc';
import { QUIZ_INTERVIEW_PAGE_URL } from '../../constants/pageURLs';

interface QuizDialogResultProps {
    isOpen: boolean;
    onClose: any;
    totalAnswersCount: number;
    correctAnswersCount: number;
}

const QuizDialogResult = (props:QuizDialogResultProps) => {
  const {
    isOpen, onClose, correctAnswersCount, totalAnswersCount,
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
          <AlertDialogHeader>
            <Text fontSize="md" fontWeight="semibold" textAlign="center" color="gray.500">
              Congratulations
            </Text>

            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              The Quiz was Completed!
            </Text>
          </AlertDialogHeader>

          <AlertDialogBody>
            <Stack alignItems="center" spacing={2}>
              <Icon as={FcFlashOn} w={20} h={20} />

              <Text fontSize="md" fontWeight="semibold" color="gray.500">
                You scored
              </Text>

              <Text fontSize="xl" fontWeight="bold" textAlign="center" color="green.500">
                {`${correctAnswersCount}/${totalAnswersCount}`}
              </Text>
            </Stack>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="teal" onClick={() => Router.push(QUIZ_INTERVIEW_PAGE_URL)} w="full">
              Go to the Quiz Interview Page
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default QuizDialogResult;
