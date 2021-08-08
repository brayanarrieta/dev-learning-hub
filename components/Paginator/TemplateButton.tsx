import {
  Button,
} from '@chakra-ui/react';
import Router from 'next/router';
import React from 'react';

interface TemplateButtonProps {
    leftIcon?: any,
    rightIcon?: any,
    link: string,
    isDisabled?: boolean,
    content: string | number,
    isFixedButton?: boolean,
    isActive?: boolean,
}

const TemplateButton = (props:TemplateButtonProps) => {
  const {
    link, isDisabled, content, isFixedButton, isActive, ...rest
  } = props;

  return (
    <Button
      size="sm"
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg={isActive ? 'gray.600' : 'gray.500'}
      _hover={{
        bg: isActive ? 'gray.700' : 'gray.600',
      }}
      {...rest}
      onClick={() => Router.push(link)}
      disabled={isDisabled}
      {...isFixedButton ? {} : { display: { base: 'none', md: 'flex' } }}
    >
      {content}
    </Button>
  );
};

TemplateButton.defaultProps = {
  isDisabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
  isFixedButton: false,
  isActive: false,
};

export default TemplateButton;
