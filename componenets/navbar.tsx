import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
          <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                  <Box>Logo Here</Box>
                  <Box>About Me</Box>
                  <Box>Projects</Box>
                  <Box>Blogs</Box>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
        </Flex>
      </Box>
    </>
  );
}