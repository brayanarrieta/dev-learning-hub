import React from 'react';
import {
  IconButton,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  FlexProps,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiBell,
} from 'react-icons/fi';

import { APPLICATION_NAME } from '../../constants/config';
import { LOGOUT_URL } from '../../constants/pageURLs';
import MenuLinkItem from '../../components/MenuLinkItem';
import UserStack from './UserStack';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNavigation = ({ onOpen, ...rest }: MobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    bg={useColorModeValue('white', 'gray.900')}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    {...rest}
  >
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />

    <Text
      display={{ base: 'flex', md: 'none' }}
      fontSize="lg"
      fontWeight={600}
      color="green.400"
    >
      {APPLICATION_NAME}
    </Text>

    <HStack spacing={{ base: '0', md: '6' }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<FiBell />}
      />
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}
          >
            <UserStack />
          </MenuButton>
          <MenuList
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <MenuLinkItem text="Sign out" link={LOGOUT_URL} />
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  </Flex>
);

export default MobileNavigation;
