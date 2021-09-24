import { Box, Flex, Grid, HStack, Link, Spacer } from '@chakra-ui/react'
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
        <Link href='/prepare-interview-data' _focus={{ boxShadow: "none" }}>
          <img
            width={60}
            src='https://raw.githubusercontent.com/hexoul/prepare-interview-data/master/logo.png'
            alt=''
          />
        </Link>
        <Spacer />
        <HStack>
          <img
            width={110}
            src='https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg'
            alt=''
          />
          <img
            width={140}
            src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
            alt=''
          />
        </HStack>
      </Flex>
    </Box>
  </Box>
)
