import { ReactNode } from 'react'
import {
  Box,
  Grid,
  GridItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import Link from 'next/link'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons'

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box>
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <GridItem colStart={2}>
              <Box padding="15px">
                <Link href="/aboutme">About Me</Link>
              </Box>
            </GridItem>
            <GridItem colStart={3}>
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
            </GridItem>
            <GridItem colStart={4}>
              <Box padding="15px">
                <Menu isOpen={isOpen}>
                  <MenuButton
                    variant="ghost"
                    mx={1}
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
                    aria-label="Courses"
                    fontWeight="normal"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                    as="a"
                    href="/blogs"
                  >
                    Blogs {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <MenuItem>
                      <Link href="/blogs/developer">Developer</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/blogs/life">Life</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/blogs/sports">Sports</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </GridItem>
            <GridItem colStart={5}>
              <Box padding="15px">
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Nav
