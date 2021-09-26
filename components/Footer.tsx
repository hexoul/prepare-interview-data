import Link from 'next/link'
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { GoMarkGithub, GoCommentDiscussion } from 'react-icons/go'

export const Footer = () => (
  <Box w='100vw' bg={useColorModeValue('gray.100', 'gray.600')}>
    <Container>
      <Flex p={2} alignItems='center'>
        <Text fontSize='md' mr='4'>© Seunggon Kim</Text>
        <Spacer />
        <HStack spacing='4'>
          <Link href='/terms' passHref>
            <ChakraLink>Terms</ChakraLink>
          </Link>
          <Link href='/privacy' passHref>
            <ChakraLink>Privacy</ChakraLink>
          </Link>
          <ChakraLink href='https://github.com/hexoul/prepare-interview-data' isExternal>
            <IconButton
              aria-label='Open the Github'
              variant='ghost'
              size='md'
              icon={<GoMarkGithub />}
            />
          </ChakraLink>
          <ChakraLink href='https://open.kakao.com/me/prepare_interview' isExternal>
            <IconButton
              aria-label='Open the Kakao Openchat'
              variant='ghost'
              size='md'
              icon={<GoCommentDiscussion />}
            />
          </ChakraLink>
        </HStack>
      </Flex>
    </Container>
  </Box>
)
