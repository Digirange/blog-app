import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Grid,
  GridItem,
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
      <Box>
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <Box>
              <Link href="/">
                <a>
                  <Image
                    alt="logo"
                    src="../../harden.jpg"
                    borderRadius="full"
                    boxSize="65px"
                    objectFit="cover"
                  />
                </a>
              </Link>
            </Box>
            <Box padding='15px'>
              <Link href="/aboutme">About Me</Link>
            </Box>
            <Box padding='15px'>
              <Link href="/projects">Projects</Link>
            </Box>
            <Box padding='15px'>
              <Link href="/blogs">Blogs</Link>
            </Box>
            <Box padding='15px'>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Nav
