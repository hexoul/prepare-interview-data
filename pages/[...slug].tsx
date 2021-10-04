import { GetStaticProps, GetStaticPaths } from 'next'
import { Accordion, Box, Container } from '@chakra-ui/react'
import { Question } from '../interfaces'
import { getContents, getQuestions } from '../utils/fetch'
import { QuestionAccordion } from '../components/QuestionAccordion'

type Props = {
  q: Question[]
}

const QuestionPage = ({ q }: Props) => {
  const defaultIndex: number[] = Array.from(Array(q.length).keys())

  return (
    <Box textAlign='center' fontSize='xl'>
      <Container>
        <Accordion allowMultiple defaultIndex={defaultIndex}>
          {q.map((i, idx) => <QuestionAccordion key={idx} q={i} />)}
        </Accordion>
      </Container>
    </Box>
  )
}

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
  const rawQ = await getQuestions(subjects[+idx].link)
  const q = rawQ.questions.filter(i => !(i.hasOwnProperty('visible') && !i.visible))
  return { props: { q } }
}

export default QuestionPage
