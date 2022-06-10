import {
  Box,
  Grid,
  GridItem,
  Button,
  Menu,
  Text,
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
  const greenColor = useColorModeValue('green.700', 'green.400')
  return (
    <>
      <Box>
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <GridItem colStart={2}>
              <Box padding="15px">
                <Link href="/aboutme">
                  <Text
                    fontWeight='bold'
                    _hover={{
                      cursor: 'pointer',
                      color: greenColor
                    }}
                  >
                    About Me
                  </Text>
                </Link>
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
                    aria-label="Courses"
                    fontWeight="bold"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                    as="a"
                    href="/blogs"
                  >
                    <b>Blogs</b>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                    <MenuItem>
                      <Link href="/blogs/developer">
                        <Text fontWeight='bold'>
                          Developer
                        </Text>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/blogs/life">
                        <Text fontWeight='bold'>
                          Life
                        </Text>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/blogs/sports">
                        <Text fontWeight='bold'>
                          Sports
                        </Text>
                      </Link>
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
