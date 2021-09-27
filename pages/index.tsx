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

type Props = {
  contents: Content[]
}

const brightColors = randomColor({ count: 10, luminosity: 'dark', hue: '#00FFFF', format: 'rgb' })
const darkColors = randomColor({ count: 10, luminosity: 'dark', hue: 'red', format: 'rgb' })

const IndexPage = ({ contents }: Props) => {
  return (
    <Box textAlign='center' fontSize='xl' px='10'>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {contents.filter(i => i.link).map((i, idx) => (
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
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getContents()
  return { props: { contents } }
}

export default IndexPage
