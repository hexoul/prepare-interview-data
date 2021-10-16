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
  subject: Content,
  contents: Content[],
}

export const ContentList = (props: Props) => {
  return (
    <VStack alignItems='flex-start' pb={16}>
      <HStack>
        <FaBook />
        <Heading size='md' isTruncated>{props.subject.content}</Heading>
        <Text fontSize='lg'>{props.subject.num}문제</Text>
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
              transition='200ms'
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
