import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  whiteGray: '#DEE2E6',
  Gray: '#6C757C',
  darkGray: '#212529',
}

const theme = extendTheme({ colors })

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
