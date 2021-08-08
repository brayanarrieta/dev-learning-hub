import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import Router from 'next/router';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { DASHBOARD_URL, SIGN_IN_URL } from '../../../constants/pageURLs';
import { APPLICATION_NAME } from '../../../constants/config';

interface NavbarProps {
  isLoggedIn: boolean
}

const Navbar = (props: NavbarProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { isLoggedIn } = props;

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            color={useColorModeValue('gray.800', 'white')}
          >
            {APPLICATION_NAME}
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNavbar />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="teal.400"
            onClick={() => Router.push(isLoggedIn ? DASHBOARD_URL : SIGN_IN_URL)}
            _hover={{
              bg: 'teal.500',
            }}
          >
            { isLoggedIn ? 'Go to Dashboard' : 'Sign In' }
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNavbar />
      </Collapse>
    </Box>
  );
};

export default Navbar;
