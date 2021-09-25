import {
  chakra,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Header = () => (
  <Box position='fixed' w='100vw' bg={useColorModeValue('white', 'gray.800')} alignItems='center'>
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
          <Link href={process.env.basePath} _focus={{ boxShadow: 'none' }}>
            <Image minW='60px' boxSize='60px' src={process.env.logoImg} alt='' />
          </Link>
          <Spacer />
          <HStack pl={2}>
            <chakra.a href={process.env.appstoreUrl} target='_blank' rel='noreferrer'>
              <Image maxW='110px' src={process.env.appstoreImg} alt='' />
            </chakra.a>
            <chakra.a href={process.env.playstoreUrl} target='_blank' rel='noreferrer'>
              <Image maxW='135px' src={process.env.playstoreImg} alt='' />
            </chakra.a>
          </HStack>
        </Flex>
      </Container>
    </Box>
  </Box>
)
