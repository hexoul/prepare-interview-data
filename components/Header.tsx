import { Box, Flex, Grid, HStack, Image, Link, Spacer } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

export const Header = () => (
  <Box>
    <Grid p={3}>
      <ColorModeSwitcher justifySelf='flex-end' />
    </Grid>
    <Box
      minH='40px'
      bg='teal.400'
      marginBottom='16px'
      alignItems='center'
    >
      <Flex>
        <Link href={process.env.basePath} _focus={{ boxShadow: "none" }}>
          <Image minW='60px' boxSize='60px' src={process.env.logoImg} alt='' />
        </Link>
        <Spacer />
        <HStack>
          <a href={process.env.appstoreUrl} target='_blank' rel='noreferrer'>
            <Image maxW='110px' src={process.env.appstoreImg} alt='' />
          </a>
          <a href={process.env.playstoreUrl} target='_blank' rel='noreferrer'>
            <Image maxW='140px' src={process.env.playstoreImg} alt='' />
          </a>
        </HStack>
      </Flex>
    </Box>
  </Box>
)
