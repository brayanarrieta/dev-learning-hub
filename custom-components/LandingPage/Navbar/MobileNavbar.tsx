import {
  Flex,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import NAV_ITEMS from '../../../constants';
import { NavItem } from '../../../types';

const MobileNavbar = () => (
  <Stack
    bg={useColorModeValue('white', 'gray.800')}
    p={4}
    display={{ md: 'none' }}
  >
    {NAV_ITEMS.map((navItem: NavItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
);

const MobileNavItem = ({ label, href }: NavItem) => (
  <Flex
    py={2}
    as={Link}
    href={href ?? '#'}
    justify="space-between"
    align="center"
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Text
      fontWeight={600}
      color={useColorModeValue('gray.600', 'gray.200')}
    >
      {label}
    </Text>

  </Flex>
);

export default MobileNavbar;
