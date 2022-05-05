import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  navy: '#09208B',
  blue: '#002EFF',
  skyBlue: '#00FFF3',
  }

const theme = extendTheme({ colors })

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component { ...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp
