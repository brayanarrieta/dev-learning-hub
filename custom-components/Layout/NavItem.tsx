import React, { ReactText } from 'react';
import {
  Flex,
  Icon,
  FlexProps,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import Router from 'next/router';

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    link: string;
  }

const NavItem = ({
  icon, children, link, ...rest
}: NavItemProps) => (
  <Flex
    align="center"
    p="4"
    mx="4"
    borderRadius="lg"
    role="group"
    cursor="pointer"
    _hover={{
      bg: 'teal.400',
      color: 'white',
    }}
    {...rest}
    onClick={() => Router.push(link)}
  >
    {icon && (
    <Icon
      mr="4"
      fontSize="16"
      _groupHover={{
        color: 'white',
      }}
      as={icon}
    />
    )}
    {children}
  </Flex>
);

export default NavItem;
