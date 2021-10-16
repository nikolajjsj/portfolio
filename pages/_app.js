import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/layouts/main'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
