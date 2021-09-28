import React from 'react'
import {
  Divider,
  Heading,
  HStack,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react'
import { FaBook } from 'react-icons/fa'
import { Content } from '../interfaces'

type Props = {
  subject: string,
  contents: Content[],
}

export const ContentList = (props: Props) => {
  return (
    <VStack alignItems='flex-start' pb={16}>
      <HStack>
        <FaBook />
        <Heading size='md'> {props.subject}</Heading>
      </HStack>
      <Divider />
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={1}
        pl={4}
      >
        {props.contents.map((content) => (
          <Text key={content.content} alignSelf='flex-start'>
            {content.content}
          </Text>
        ))}
      </VStack>
    </VStack>
  )
}
