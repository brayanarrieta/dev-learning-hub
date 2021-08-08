import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import LINK_ITEMS from './linkItems';
import NavItem from './NavItem';
import { APPLICATION_NAME, BASE_URL } from '../../constants/config';

interface SidebarProps extends BoxProps {
    onClose: () => void;
  }

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    transition="3s ease"
    bg={useColorModeValue('white', 'gray.900')}
    borderRight="1px"
    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="xl" fontWeight={600} color="green.400">
        {APPLICATION_NAME}
      </Text>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
    {LINK_ITEMS.map((linkItem) => (
      <NavItem key={linkItem.name} icon={linkItem.icon} link={`${BASE_URL}${linkItem.link}`}>
        {linkItem.name}
      </NavItem>
    ))}
  </Box>
);
export default SidebarContent;
