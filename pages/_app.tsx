import { Box, ChakraProvider, Container, extendTheme } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const customTheme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.md',
      },
    }
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Box as='main' pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Box>
      <Footer />
    </ChakraProvider>
  )
}
