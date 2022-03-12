import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client';

import { client } from "../apollo/client";
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
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
