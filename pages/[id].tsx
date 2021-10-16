import { GetStaticProps, GetStaticPaths } from 'next'
import { Box } from '@chakra-ui/react'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'
import { ContentList } from '../components/ContentList'

type Props = {
  id: string,
  subject: Content,
  contents: Content[]
}

const ContentPage = ({ id, subject, contents }: Props) => (
  <Box textAlign='center' fontSize='xl'>
    <ContentList
      subjectId={id}
      subject={subject}
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
  let subject: Content;
  for (const s of subjects) {
    if (s.link.startsWith(`/${params.id}`)) {
      subject = s
      break
    }
  }
  const rawContents = await getContents(`/${params.id}`)
  const contents = rawContents.filter(i => i.link)
  return { props: { id: params.id, subject, contents } }
}

export default ContentPage
