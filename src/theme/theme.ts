import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  fonts: {
    heading: "'Lato', sans-serif",
    body: "'Lato', sans-serif"
  },
  styles: {
    global: {
      'html, body': {
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        fontFamily: "'Lato', sans-serif",
        color: 'gray.800',
        lineHeight: 'tall'
      },
      '#root': {
        maxWidth: '100%',
        height: '100%',
        width: '100%'
      }
    }
  },
  colors: {
    brand: {
      50: '#e5fcf1',
      100: '#27ef96',
      200: '#10de82',
      300: '#0ebc6f',
      400: '#0ca25f',
      500: '#0a8e4f',
      600: '#0a7642',
      700: '#095c35',
      800: '#07462a',
      900: '#042414'
    }
  },
  textStyles: {
    h1: {
      fontSize: ['24px', '36px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-0.05em'
    },
    h2: {
      fontSize: ['20px', '30px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-0.05em'
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px'
        }
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600'
          }
        }
      }
    }
  }
})

export default customTheme
