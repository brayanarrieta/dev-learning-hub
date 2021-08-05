import React, { ReactText } from 'react';
import {
  Flex,
  Icon,
  Link,
  FlexProps,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
  }

const NavItem = ({ icon, children, ...rest }: NavItemProps) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link href="#" style={{ textDecoration: 'none' }}>
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      {...rest}
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
  </Link>
);

export default NavItem;
