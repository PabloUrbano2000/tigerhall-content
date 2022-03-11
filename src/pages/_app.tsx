import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import theme from '../theme'
import Fonts from '../theme/Fonts'
import AppSeo from '../components/AppSeo'

function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <>
      <AppSeo />
      <ChakraProvider resetCSS theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
