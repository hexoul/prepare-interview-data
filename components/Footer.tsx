import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { GoMarkGithub, GoCommentDiscussion } from 'react-icons/go'

export const Footer = () => (
  <Box w='100vw' bg={useColorModeValue('gray.100', 'gray.600')}>
    <Container>
      <Flex p={2} alignItems='center'>
        <Text fontSize='md' mr='4' isTruncated>© Seunggon Kim</Text>
        <Spacer />
        <HStack spacing='4'>
          <Link href={process.env.termsUrl} isExternal>Terms</Link>
          <Link href={process.env.privacyUrl} isExternal>Privacy</Link>
          <Link href={process.env.githubUrl} isExternal>
            <IconButton
              aria-label='Open the Github'
              variant='ghost'
              size='md'
              icon={<GoMarkGithub />}
            />
          </Link>
          <Link href={process.env.openKakaoUrl} isExternal>
            <IconButton
              aria-label='Open the Kakao Openchat'
              variant='ghost'
              size='md'
              icon={<GoCommentDiscussion />}
            />
          </Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
)
