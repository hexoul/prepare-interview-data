import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Question } from '../interfaces'

type Props = {
  q: Question,
}

export const QuestionAccordion = (props: Props) => {
  const [value, setValue] = useState('0')

  return (
    <AccordionItem pb={2} {...props}>
      <AccordionButton bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}>
        <Box flex='1' textAlign='left' pr={4}>{props.q.question}</Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <RadioGroup
          name={props.q.question}
          value={value}
          onChange={setValue}
          pb={4}
        >
          <Stack direction='column'>
            {props.q.choices.map((c, idx) =>
              <Radio key={idx} value={`${idx}`}>{c}</Radio>
            )}
          </Stack>
        </RadioGroup>
        <VStack alignItems='flex-start' spacing={1}>
          <Text fontSize='md' textAlign='left'>[정답] {props.q.answer}</Text>
          <Text fontSize='md' textAlign='left'>[설명] {props.q.explanation}</Text>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  )
}