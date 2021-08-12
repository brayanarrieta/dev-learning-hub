import { CloseIcon, CopyIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useClipboard,
  useBreakpointValue,
  Stack,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import MarkdownContent from '../../components/MarkdownContent';
import { CodeSnippetComposed } from './CodeSnippetCard';

interface CodeSnippetModalProps {
    isOpen: boolean,
    onClose: any,
    codeSnippet: CodeSnippetComposed,
}

const CodeSnippetModal = ({ isOpen, onClose, codeSnippet }: CodeSnippetModalProps) => {
  const { hasCopied, onCopy } = useClipboard(codeSnippet.content);
  const modalSize = useBreakpointValue({ base: 'full', md: 'xl' });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>

          <Stack
            as={Box}
            spacing={2}
          >
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold">
              {codeSnippet.title}
            </Text>
            <Text fontSize="md" fontWeight="semibold">
              Description:
            </Text>
            <Text mt={2} textAlign="justify" fontSize="md" color="teal.600">
              {codeSnippet.description}
            </Text>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="md" fontWeight="semibold">
            Content:
          </Text>
          <Flex
            p={2}
            borderRadius="lg"
            borderWidth={1}
            borderColor="teal.400"
          >

            <MarkdownContent content={codeSnippet.content} />
          </Flex>

        </ModalBody>
        <ModalFooter>
          <Button
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="teal.400"
            mr={3}
            onClick={onClose}
            _hover={{
              bg: 'teal.500',
            }}
            rightIcon={<CloseIcon />}
          >
            Close
          </Button>

          <Button
            variant="outline"
            fontSize="sm"
            fontWeight={600}
            onClick={onCopy}
            colorScheme="teal"
            rightIcon={<CopyIcon />}
          >
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CodeSnippetModal;
