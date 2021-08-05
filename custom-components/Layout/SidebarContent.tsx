import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from '@chakra-ui/react';
import LinkItems from './linkItems';
import NavItem from './NavItem';
import { APPLICATION_NAME } from '../../constants/config';

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
    {LinkItems.map((linkItem) => (
      <NavItem key={linkItem.name} icon={linkItem.icon} link={linkItem.link}>
        {linkItem.name}
      </NavItem>
    ))}
  </Box>
);
export default SidebarContent;
