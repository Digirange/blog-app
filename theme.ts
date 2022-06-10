import { extendTheme, Theme, type ThemeConfig } from '@chakra-ui/react'

 const colors = {
    gray: {
      "50": "#F1F2F4",
      "100": "#D7DAE0",
      "200": "#BDC3CC",
      "300": "#A3ABB8",
      "400": "#8994A4",
      "500": "#707C8F",
      "550": "#23272d",
      "600": "#596373",
      "700": "#434B56",
      "800": "#2D3239",
      "900": "#16191D"
    },
    green: {
      "50": "#E5FFF0",
      "100": "#B8FFD6",
      "200": "#8AFFBC",
      "300": "#5CFFA1",
      "400": "#2EFF87",
      "500": "#00FF6D",
      "550": "#33ff8a",
      "600": "#00CC57",
      "700": "#009941",
      "800": "#00662B",
      "900": "#003316"
    }
  }

const fonts = {
  body: `'Roboto', sans-serif`,
  heading: `'Roboto', sans-serif`
  }


const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ colors, config, fonts })

export default theme
