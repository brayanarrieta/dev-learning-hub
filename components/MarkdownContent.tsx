import React from 'react';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

interface MarkdownContentProps {
    content: string
}

const MarkdownContent = (props: MarkdownContentProps) => {
  const { content } = props;
  return (
    <ReactMarkdown
      components={ChakraUIRenderer()}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
