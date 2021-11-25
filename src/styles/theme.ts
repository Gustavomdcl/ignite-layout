import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    highlight: {
      "100": "#FFBA08",
      "50": "#FFBA0880",
    },
    dark: {
      "black": "#000000",
      "headingsText": "#47585B",
      "info100": "#999999",
      "info50": "#99999980",
    },
    light: {
      "white": "#FFFFFF",
      "headingsText": "#F5F8FA",
      "info": "#DADADA",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'light.headingsText',
        color: 'dark.headingsText'
      }
    }
  }
})