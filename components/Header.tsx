import Link from 'next/link'
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Header = () => (
  <Box
    position='fixed'
    w='100vw'
    bg={useColorModeValue('white', 'gray.800')}
    alignItems='center'
    zIndex={99}
  >
    <Container>
      <Flex p={2}>
        <Heading size='md'>오늘부터 전공면접 IT</Heading>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
    </Container>
    <Box minH='40px' bg='teal.400' alignItems='center'>
      <Container>
        <Flex px={2}>
          <Link href='/' passHref>
            <ChakraLink _focus={{ boxShadow: 'none' }}>
              <Image minW='60px' boxSize='60px' src={process.env.logoImg} alt='logo' />
            </ChakraLink>
          </Link>
          <Spacer />
          <HStack pl={2}>
            <ChakraLink href={process.env.appstoreUrl} _focus={{ boxShadow: 'none' }} isExternal>
              <Image maxW='110px' src={process.env.appstoreImg} alt='appstore' />
            </ChakraLink>
            <ChakraLink href={process.env.playstoreUrl} _focus={{ boxShadow: 'none' }} isExternal>
              <Image maxW='135px' src={process.env.playstoreImg} alt='playstore' />
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  </Box>
)