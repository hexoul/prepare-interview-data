import Link from 'next/link'
import {
  chakra,
  Box,
  Container,
  Flex,
  Spacer,
  Text,
} from '@chakra-ui/react'

export const Footer = () => (
  <Box w='100vw' bg='gray.400'>
    <Container>
      <Flex p={2}>
        <Text fontSize='md'>© Seunggon Kim</Text>
        <Spacer />
        <Link href={`${process.env.basePath}/terms`} passHref>
          <chakra.a>Terms</chakra.a>
        </Link>
        <Spacer />
        <Link href={`${process.env.basePath}/privacy`} passHref>
          <chakra.a>Privacy</chakra.a>
        </Link>
        <Spacer />
        <Text>Github icon</Text>
        <Spacer />
        <Text>Kakao icon</Text>
      </Flex>
    </Container>
  </Box>
)
