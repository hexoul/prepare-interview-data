import Link from 'next/link'
import {
  chakra,
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { GoMarkGithub, GoCommentDiscussion } from 'react-icons/go'

export const Footer = () => (
  <Box w='100vw' bg={useColorModeValue('gray.100', 'gray.400')}>
    <Container>
      <Flex p={2} alignItems='center'>
        <Text fontSize='md'>© Seunggon Kim</Text>
        <Spacer />
        <HStack spacing='4'>
          <Link href={`${process.env.basePath}/terms`} passHref>
            <chakra.a>Terms</chakra.a>
          </Link>
          <Link href={`${process.env.basePath}/privacy`} passHref>
            <chakra.a>Privacy</chakra.a>
          </Link>
          <chakra.a
            href='https://github.com/hexoul/prepare-interview-data'
            target='_blank'
            rel='noreferrer'
          >
            <IconButton
              aria-label='Open the Github'
              variant='ghost'
              size='md'
              icon={<GoMarkGithub />}
            />
          </chakra.a>
          <chakra.a
            href='https://open.kakao.com/me/prepare_interview'
            target='_blank'
            rel='noreferrer'
          >
            <IconButton
              aria-label='Open the Kakao Openchat'
              variant='ghost'
              size='md'
              icon={<GoCommentDiscussion />}
            />
          </chakra.a>
        </HStack>
      </Flex>
    </Container>
  </Box>
)
