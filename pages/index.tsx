import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'

type Props = {
  contents: Content[]
}

const IndexPage = ({ contents }: Props) => (
  <Box textAlign='center' fontSize='xl' px='10'>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      {contents.filter(i => i.link).map(i => (
        <Box
          _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }}
          key={i.content} 
          bg='gray.600'
          color='white'
          p='4'
          rounded='16'
          shadow='xl'
        >
          <Link href={`/${i.link.split('/')[1]}`} passHref>
            <Text>{i.content}</Text>
          </Link>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getContents()
  return { props: { contents } }
}

export default IndexPage
