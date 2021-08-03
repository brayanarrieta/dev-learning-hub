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
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { SIGN_IN_URL } from '../../config';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

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
            Dev Learning Hub
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
            bg="pink.400"
            as="a"
            href={SIGN_IN_URL}
            _hover={{
              bg: 'pink.300',
            }}
          >
            Sign In
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
