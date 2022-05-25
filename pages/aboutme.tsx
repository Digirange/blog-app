import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import  Footer  from '../componenets/footer'
import Nav from '../componenets/navbar'

const AboutMe = () => {
  return (
    <Box minHeight='100vh' position='relative'>
      <Nav />
      <Box
        sx={{
          height: `calc(100vh - 120px)`,
          maxWidth: ['80%', '50%'],
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Box>
          <Heading fontSize="5xl" fontWeight="bold">
            About Marques Stewart
          </Heading>
        </Box>
        <Flex>
          <Box width="100vh">
            <Text fontSize="md" padding="10px">
              Father, gamer, and sports. Those three things would probably be
              the best way to describe myself in three words. Hello and welcome!
            </Text>
            <Text fontSize="md" padding="10px">
              My name is Marques Stewart. Born in the Philadelphia area but grew
              up in the state of New Jersey in the United States. I have been an
              IT professional for the last six years, but looking to make a
              switch into the world of development. Graduated from Mercer County
              Community College with an associates degree in Information
              Technology in 2016, where I also obtained my first ever
              certification which was the CompTIA A+. This allowed me to begin
              my professional career in the world of Information Technology as I
              landed my first job shortly after graduation. I enjoyed my time in
              this position as it opened my eyes to the many avenues in the
              technology field. Especially the world of coding.
            </Text>
            <Text fontSize="md" padding="10px">
              My first introduction to the coding world was with the scripting
              language Powershell. I self taught myself everything I know about
              the language. Was able to create many usable scripts that I was
              able to use in my everyday work life. It gave me a real sense of
              accomplishment and sparked something in me. I became very obsessed
              with creating scripts, even for the smallest of problems. At the
              time of me leaving the company, I had automated about 85% of my
              job with powershell scripts that I had created myself. Now, I am
              looking to fully dive into the world of coding and become a web
              developer. I’ve been spending the majority of my time improving my
              skills with Front-End Masters. If you’re not familiar with FEM
              (Front-End Masters), it is a subscription based learning platform
              for web development, where they teach and guide you on how to use
              and understand modern development technologies. These courses are
              taught by professionals who have worked for some of the biggest
              names out there from Facebook, Netflix, etc.
            </Text>
            <Text fontSize="md" padding="10px">
              You can expect blog posts featuring projects I worked on, personal
              and professional goals, or just inner personal thoughts and
              opinions on a wide variety of subjects. I am glad you’re here and
              welcome you to stay and explore! test here
            </Text>
          </Box>
          <Box paddingLeft="50px">
            <Image
              src="selfie1.png"
              alt="marquespictureholder"
              borderRadius="full"
              boxSize="250px"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Box>
  )
}

export default AboutMe
