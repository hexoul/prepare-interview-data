import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  useColorModeValue as colorModeValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Question } from '../interfaces'

type Props = {
  q: Question,
}

export const QuestionAccordion = (props: Props) => {
  const [value, setValue] = useState('0')
  const [check, setCheck] = useState(false)
  const answerTextColor = colorModeValue('green.500', 'green.300')
  const correctRadioTextColor = colorModeValue('green', 'green.200')
  const wrongRadioTextColor = colorModeValue('red', 'red.300')
  const [radioTextColor, setRadioTextColor] = useState([])

  return (
    <AccordionItem pb={2} {...props}>
      <AccordionButton bg={colorModeValue('blackAlpha.200', 'whiteAlpha.300')}>
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
              <Radio key={idx} value={`${idx}`} isDisabled={check}>
                <Text textAlign='left' textColor={radioTextColor[idx]}>{c}</Text>
              </Radio>
            )}
          </Stack>
        </RadioGroup>
        {check ?
          <VStack alignItems='flex-start' spacing={1}>
            <Text fontSize='md' textAlign='left' textColor={answerTextColor} pb={2}>
              [정답] {props.q.answer}
            </Text>
            <Text fontSize='md' textAlign='left'>[설명]</Text>
            <Box w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
              {props.q.explanation.split('\n').map((e, idx) =>
                <Text key={`explain${idx}`} fontSize='md' textAlign='left'>{e}</Text>
              )}
            </Box>
            <Text fontSize='md' textAlign='left' pt={2}>[참고자료]</Text>
            {props.q.references.map((kv, idx) =>
              <Link
                key={`ref${idx}`}
                href={kv[Object.keys(kv)[0]]}
                fontSize='md'
                color='teal.400'
                isExternal
              >
                - {Object.keys(kv)[0]} <ExternalLinkIcon mx="2px" />
              </Link>
            )}
          </VStack>
          :
          <Button
            onClick={() => {
              setCheck(true)
              const selected: number = +value
              let newRadioTextColor = [...radioTextColor]
              newRadioTextColor[3] = correctRadioTextColor
              if (props.q.answer - 1 !== selected) {
                newRadioTextColor[selected] = wrongRadioTextColor
              }
              setRadioTextColor(newRadioTextColor)
            }}
          >
            정답 확인
          </Button>
        }
      </AccordionPanel>
    </AccordionItem>
  )
}
