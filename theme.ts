import { extendTheme, Theme, type ThemeConfig } from '@chakra-ui/react'

const colors = {
  whiteGray: '#DEE2E6',
  Gray: '#6C757C',
  darkGray: '#212529',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ colors, config })

export default theme
