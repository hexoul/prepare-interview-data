import { useEffect } from 'react'
import { Box, ChakraProvider, Container, extendTheme } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { analytics } from '../utils/firebase'
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
  useEffect(() => {
    analytics()
  }, [])

  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <DefaultSeo {...SEO} />
      <Box as='main' pt={{ base: 32, md: 32 }} pb={{ base: 16, md: 16 }}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Box>
      <Footer />
    </ChakraProvider>
  )
}
