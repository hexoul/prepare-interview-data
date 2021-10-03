import Link from 'next/link'
import {
  Divider,
  Heading,
  HStack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue as colorModeValue,
} from '@chakra-ui/react'
import { FaBook } from 'react-icons/fa'
import { Content } from '../interfaces'

type Props = {
  subjectId: string,
  subject: string,
  contents: Content[],
}

export const ContentList = (props: Props) => {
  return (
    <VStack alignItems='flex-start' pb={16}>
      <HStack>
        <FaBook />
        <Heading size='md' isTruncated> {props.subject}</Heading>
      </HStack>
      <Divider />
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={1}
        pl={4}
      >
        {props.contents.map((content, idx) => (
          <Link
            key={content.content}
            href={`/${props.subjectId}/${idx}`}
            passHref
          >
            <Text
              w='100%'
              textAlign='left'
              alignSelf='flex-start'
              _hover={{
                textDecoration: 'none',
                color: colorModeValue('blue.600', 'blue.100'),
                transform: 'translateX(10px)',
              }}
              isTruncated
            >
              {content.content}
            </Text>
          </Link>
        ))}
      </VStack>
    </VStack>
  )
}
