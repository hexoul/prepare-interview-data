import { GetStaticProps } from 'next'
import Link from 'next/link'
import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue as colorModeValue
} from '@chakra-ui/react'
import * as randomColor from 'randomcolor'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'
import { ContentList } from '../components/ContentList'

type Props = {
  subjects: Content[],
  contents: Record<string, Content[]>,
}

const brightColors = randomColor({ count: 10, luminosity: 'dark', hue: '#00FFFF', format: 'rgb' })
const darkColors = randomColor({ count: 10, luminosity: 'dark', hue: 'red', format: 'rgb' })

const IndexPage = ({ subjects, contents }: Props) => {
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
              _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }}
              bg={colorModeValue(brightColors[idx], darkColors[idx])}
              color='white'
              p='4'
              rounded='16'
              boxShadow='xl'
            >
              <Text as='b' color='white' textShadow='1px 2px black'>{i.content}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
      {Object.entries(contents).map(([k, v]) => (
        <ContentList key={k} subject={k} contents={v} />
      ))}
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const rawSubjects = await getContents()
  const subjects = rawSubjects.filter(i => i.link)
  const contents = {}
  for (const subject of subjects) {
    const path = `/${subject.link.split('/')[1]}`
    contents[subject.content] = await getContents(path)
  }
  return { props: { subjects, contents } }
}

export default IndexPage
