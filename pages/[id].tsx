import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { Box, VStack } from '@chakra-ui/react'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'
import { Header } from '../components/Header'

type Props = {
  id: string,
  contents: Content[]
}

const ContentPage = ({ id, contents }: Props) => (
  <Box textAlign='center' fontSize='xl'>
    <Header />
    <VStack spacing={8}>
      {contents.filter(i => i.link).map((i, idx) => (
        <Link
          key={i.content}
          href={`/${id}/${idx}`}
        >
          {i.content}
        </Link>
      ))}
    </VStack>
  </Box>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const contents = await getContents()
  const paths = contents.filter(i => i.link).map((content) => ({
    params: { id: content.link.split('/')[1] },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const contents = await getContents(`/${params.id}`)
  return { props: { id: params.id, contents } }
}

export default ContentPage
