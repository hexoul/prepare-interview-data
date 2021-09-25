import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Box, VStack } from '@chakra-ui/react'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'

type Props = {
  contents: Content[]
}

const IndexPage = ({ contents }: Props) => (
  <Box textAlign='center' fontSize='xl'>
    <VStack spacing={8}>
      {contents.filter(i => i.link).map(i => (
        <Link
          key={i.content}
          href={`/${i.link.split('/')[1]}`}
        >
          {i.content}
        </Link>
      ))}
    </VStack>
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getContents()
  return { props: { contents } }
}

export default IndexPage
