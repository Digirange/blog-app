import { Box, Grid, GridItem, Link, Text } from '@chakra-ui/layout'
import { EmailIcon, LinkIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Image,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import Nav from '../components/navbar'
import path from 'path'
import glob from 'glob'
import fs from 'fs'
import matter from 'gray-matter'
import _ from 'lodash'
import IndexPost from '../components/IndexPost'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Home = ({ posts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const greenColor = useColorModeValue('green.700', 'green.400')

  return (
    <Box minHeight="100vh" position="relative">
      <Nav />
      <Box padding="50px">
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colStart={3} colEnd={4}>
            <Box>
              <Text align="center" fontSize="5xl" fontWeight="bold">
                Home
              </Text>
            </Box>
          </GridItem>
          <GridItem rowStart={2} colStart={3} colEnd={4}>
            <Box>
              <Text align="center" fontSize="3xl" fontWeight="bold">
                Marques Stewart
              </Text>
              <Box>
                <Text align="center" fontSize="large">
                  Hello and welcome to my website! This is a great place to
                  learn all about me. From development projects I have worked
                  on, to blog posts about generally anything of my interest.
                  Want to learn more about me? Go ahead and click the AboutMe
                  button below! Need to get in contact with me? Go ahead and
                  click the contact button!
                </Text>
              </Box>
              <Box padding="30px">
                <ButtonGroup spacing={20}>
                  <Button
                    as="a"
                    href="/aboutme"
                    rightIcon={<LinkIcon />}
                    color="gray.550"
                    bg={greenColor}
                  >
                    <Text color="gray.550">Learn More About Me</Text>
                  </Button>
                  <Button
                    onClick={onOpen}
                    rightIcon={<EmailIcon />}
                    bg={greenColor}
                    color="gray.550"
                  >
                    Contact Me
                  </Button>
                  <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Need to get in contact with me?</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Box paddingTop="20px">
                          <Text fontWeight="bold">
                            Email - MStewWebDev@Gmail.com
                          </Text>
                        </Box>
                        <Box display="flex" paddingTop="60px">
                          <Box
                            _hover={{
                              cursor: 'pointer',
                            }}
                          >
                            <Box paddingTop="5px">
                              <Link href="https://github.com/digirange">
                                <Text fontWeight="bold">GitHub -</Text>
                              </Link>
                            </Box>
                          </Box>
                          <Box paddingLeft="8px">
                            <IconButton
                              color={greenColor}
                              as="a"
                              href="https://github.com/Digirange"
                              aria-label="GitHub"
                              icon={<FaGithub fontSize="1.25rem" />}
                            />
                          </Box>
                        </Box>
                        <Box display="flex" paddingTop="60px">
                          <Box
                            _hover={{
                              cursor: 'pointer',
                            }}
                          >
                            <Box paddingTop="8px">
                              <Link href="https://www.linkedin.com/in/marques-stewart-160485192/">
                                <Text fontWeight="bold">Linkedin -</Text>
                              </Link>
                            </Box>
                          </Box>
                          <Box paddingLeft="8px">
                            <IconButton
                              as="a"
                              color={greenColor}
                              href="https://www.linkedin.com/in/marques-stewart-160485192/"
                              aria-label="LinkedIn"
                              icon={<FaLinkedin fontSize="1.25rem" />}
                            />
                          </Box>
                        </Box>
                      </ModalBody>
                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </ButtonGroup>
                <Box
                  width="8%"
                  ml="auto"
                  mr="auto"
                  display="flex"
                  paddingTop="15px"
                  height="5px"
                >
                  <ButtonGroup variant="ghost" spacing="6">
                    <IconButton
                      color={greenColor}
                      as="a"
                      href="https://www.linkedin.com/in/marques-stewart-160485192/"
                      aria-label="LinkedIn"
                      icon={<FaLinkedin fontSize="2rem" />}
                    />
                    <IconButton
                      color={greenColor}
                      as="a"
                      href="https://github.com/Digirange"
                      aria-label="GitHub"
                      icon={<FaGithub fontSize="2rem" />}
                    />
                  </ButtonGroup>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem rowStart={2} colStart={4}>
            <Image
              alt="selfplaceholder"
              src="selfie1.png"
              boxSize="250px"
              borderRadius="full"
              objectFit="fill"
            ></Image>
          </GridItem>
          <GridItem rowStart={5} colStart={2} colEnd={5}>
            <Divider border="1px" borderColor="black" />
          </GridItem>
          <GridItem rowStart={6} colStart={3} colEnd={4}>
            <Text align="center" fontWeight="bold" fontSize="3xl">
              Recent Blogs
            </Text>
            {posts.map((post) => (
              <IndexPost key={post.link} data={post} />
            ))}
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}

export function getStaticProps() {
  const postPaths = path.join(process.cwd(), 'posts')
  const globPosts = glob.sync('**/*.mdx', { cwd: postPaths })
  const posts = _.chain(globPosts)
    .map((paths) => fs.readFileSync(path.join(postPaths, paths), 'utf-8'))
    .map((x) => matter(x).data)
    .sortBy((x) => new Date(x.date))
    .reverse()
    .slice(0, 3)
    .value()

  return { props: { posts } }
}

export default Home
