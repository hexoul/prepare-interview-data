import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { Box, VStack } from '@chakra-ui/react'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'
import { ContentList } from '../components/ContentList'

type Props = {
  id: string,
  subjectName: string,
  contents: Content[]
}

const ContentPage = ({ id, subjectName, contents }: Props) => (
  <Box textAlign='center' fontSize='xl'>
    <ContentList
      subjectId={id}
      subject={subjectName}
      contents={contents}
    />
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
  const subjects = await getContents()
  let subjectName: string;
  for (const subject of subjects) {
    if (subject.link.startsWith(`/${params.id}`)) {
      subjectName = subject.content
      break
    }
  }
  const rawContents = await getContents(`/${params.id}`)
  const contents = rawContents.filter(i => i.link)
  return { props: { id: params.id, subjectName, contents } }
}

export default ContentPage
