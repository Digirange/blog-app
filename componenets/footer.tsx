import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <Box>
    <Box
      sx={{
        bottom: 0,
        position: 'fixed',
        width: '100%',
        height: '40px',
      }}
      bg={useColorModeValue('gray.100', 'gray.900')}
      paddingLeft="20px"
    >
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colStart={2} colEnd={3}>
          <Box padding="10px">
            <Link href="/aboutme">About Me</Link>
          </Box>
        </GridItem>
        <GridItem colStart={3}>
          <Box padding="10px">
            <Link href="/projects">Projects</Link>
          </Box>
        </GridItem>
        <GridItem colStart={4}>
          <Box padding="10px">
            <Link href="/blogs">Blogs</Link>
          </Box>
        </GridItem>
        <GridItem colStart={5}>
          <Box padding="10px">
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/marques-stewart-160485192/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://github.com/Digirange"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  </Box>
)

export default Footer
