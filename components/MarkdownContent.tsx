import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
    content: string
}

const MarkdownContent = (props: MarkdownContentProps) => {
  const { content } = props;
  return (
    // eslint-disable-next-line react/no-children-prop
    <ReactMarkdown children={content} />);
};

export default MarkdownContent;
