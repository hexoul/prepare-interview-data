import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Box, VStack, Grid } from '@chakra-ui/react'
import { Content } from '../interfaces'
import { getContents } from '../utils/fetch'
import { ColorModeSwitcher } from '../components/ColorModeSwitcher'

type Props = {
  contents: Content[]
}

const IndexPage = ({ contents }: Props) => (
  <Box textAlign='center' fontSize='xl'>
    <Grid minH='100vh' p={3}>
      <ColorModeSwitcher justifySelf='flex-end' />
      <VStack spacing={8}>
        {contents.filter(i => i.link).map(i => (
          <Link href={i.link.split('/')[1]}>{i.content}</Link>
        ))}
      </VStack>
    </Grid>
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getContents()
  return { props: { contents } }
}

export default IndexPage
