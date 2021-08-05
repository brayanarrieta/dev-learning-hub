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
    link: string;
  }

const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => (
  <Link href={link} style={{ textDecoration: 'none' }}>
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
