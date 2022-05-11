import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link href="/">
              <Image
                alt="logo"
                src="../harden.jpg"
                borderRadius="full"
                boxSize="65px"
                objectFit="cover"
              />
            </Link>
          </Box>
          <Box>
            <Link href="/aboutme">About Me</Link>
          </Box>
          <Box>
            <Link href="/projects">Projects</Link>
          </Box>
          <Box>
            <Link href="/blogs">Blogs</Link>
          </Box>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default Nav
