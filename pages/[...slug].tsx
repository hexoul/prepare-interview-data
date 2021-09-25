import { GetStaticProps, GetStaticPaths } from 'next'
import { Box, VStack } from '@chakra-ui/react'
import { Questions } from '../interfaces'
import { getContents, getQuestions } from '../utils/fetch'

type Props = {
  q: Questions
}

const QuestionPage = ({ q }: Props) => (
  <Box textAlign='center' fontSize='xl'>
    <VStack spacing={8}>
      {q.questions.filter(i => !i?.visible).map((i, idx) => (
        <h1 key={idx}>{i.question}</h1>
      ))}
    </VStack>
  </Box>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const contents = await getContents()
  const paths = []
  for (const content of contents.filter(i => i.link)) {
    const id = content.link.split('/')[1]
    const subjects = await getContents(`/${id}`)
    subjects.forEach((_, idx) => {
      paths.push({ params: { slug: [id, idx.toString()] }})
    })
  }
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [id, idx] = params.slug as string[]
  const subjects = await getContents(`/${id}`)
  const q = await getQuestions(subjects[+idx].link)
  return { props: { q } }
}

export default QuestionPage
