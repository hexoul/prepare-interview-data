import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'
import { Subject } from './components/Subject'

function App () {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Grid minH='100vh' p={3}>
          <ColorModeSwitcher justifySelf='flex-end' />
          <VStack spacing={8}>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' render={() => <Logo h='40vmin' pointerEvents='none' />} />
                <Route exact path='/:id' component={Subject} />
              </Switch>
            </BrowserRouter>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}

export default App
