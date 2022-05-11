import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link href="/">
              <a>
                <Image
                  alt="logo"
                  src="../harden.jpg"
                  borderRadius="full"
                  boxSize="65px"
                  objectFit="cover"
                />
              </a>
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
