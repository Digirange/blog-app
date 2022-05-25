import {
  Box,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// const Footer = () => (
//   <Center bg={useColorModeValue('gray.100', 'gray.900')} sx={{
//         position: 'fixed',
//         left: 0,
//         bottom: 0,
//         right: 0
//       }}>
//     <Box px={4} width="50%">
//       <Flex
//         justifyContent="space-evenly"
//         paddingBottom="10px"
//         alignItems="center"
//         h={16}
//       >
// <Box>
//   <Link href="/aboutme">About Me</Link>
// </Box>
// <Box>
//   <Link href="/projects">Projects</Link>
// </Box>
// <Box>
//   <Link href="/blogs">Blogs</Link>
// </Box>
// <Box>
//   <ButtonGroup variant="ghost">
//     <IconButton
//       as="a"
//       href="https://www.linkedin.com/in/marques-stewart-160485192/"
//       aria-label="LinkedIn"
//       icon={<FaLinkedin fontSize="1.25rem" />}
//     />
//     <IconButton
//       as="a"
//       href="https://github.com/Digirange"
//       aria-label="GitHub"
//       icon={<FaGithub fontSize="1.25rem" />}
//     />
//   </ButtonGroup>
// </Box>
//       </Flex>
//     </Box>
//   </Center>
// )
const Footer = () => (
  <Box>
    <Box
      sx={{
        bottom: 0,
        position: 'absolute',
        width: '100%',
      }}
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
        <Box>
          <Link href="/aboutme">About Me</Link>
        </Box>
        <Box>
          <Link href="/projects">Projects</Link>
        </Box>
        <Box>
          <Link href="/blogs">Blogs</Link>
        </Box>
        <Box>
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
      </Flex>
    </Box>
  </Box>
)

export default Footer
