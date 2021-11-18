import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import {
  Box,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  useColorModeValue as colorModeValue
} from '@chakra-ui/react'
import * as randomColor from 'randomcolor'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'
import { currentScreen } from '../utils/firebase'
import { ContentList } from '../components/ContentList'

type Props = {
  subjects: Content[],
  contents: Record<string, Record<string, Content | Content[]>>,
}

const brightColors = randomColor({ count: 10, luminosity: 'dark', hue: '#00FFFF', format: 'rgb' })
const darkColors = randomColor({ count: 10, luminosity: 'dark', hue: 'red', format: 'rgb' })

const IndexPage = ({ subjects, contents }: Props) => {
  useEffect(() => {
    currentScreen('WebMain')
  }, [])

  return (
    <Box textAlign='center' fontSize='xl' px='10'>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} pb={12}>
        {subjects.map((i, idx) => (
          <Link
            key={i.content}
            href={`/${i.link.split('/')[1]}`}
            passHref
          >
            <Box
              _focus={{ boxShadow: 'none' }}
              _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }}
              as={ChakraLink}
              bg={colorModeValue(brightColors[idx], darkColors[idx])}
              color='white'
              p='4'
              rounded='16'
              boxShadow='xl'
            >
              <Text as='b' color='white' textShadow='1px 2px black' isTruncated>
                {i.content}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
      {Object.entries(contents).map(([k, v]) => (
        <ContentList
          key={k}
          subjectId={k}
          subject={v.subject as Content}
          contents={v.contents as Content[]}
        />
      ))}
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const rawSubjects = await getContents()
  const subjects = rawSubjects.filter(i => i.link)
  const contents = {}
  for (const subject of subjects) {
    const subjectId = subject.link.split('/')[1] 
    const path = `/${subjectId}`
    contents[subjectId] = {
      subject: subject,
      contents: await getContents(path),
    }
  }
  return { props: { subjects, contents } }
}

export default IndexPage
