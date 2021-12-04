import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <main className="mb-[200px] pb-8 z-10 bg-white shadow">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}

export default MyApp
