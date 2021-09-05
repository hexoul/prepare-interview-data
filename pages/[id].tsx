import { GetStaticProps, GetStaticPaths } from 'next'
import { getContents } from '../utils/fetch'

const ContentPage = () => {
  return 'ok'
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contents = await getContents()
  const paths = contents.filter(i => i.link).map((content) => ({
    params: { id: content.link.split('/')[1] },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: {} }
}

export default ContentPage
