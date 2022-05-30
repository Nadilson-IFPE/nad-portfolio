import Head from 'next/head'
import SEO from '../next-seo.config'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import FavIcon from './../components/FavIcon'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Site pessoal de Nadilson J. R. Teixeira</title>
        <FavIcon />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="HandheldFriendly" content="true" />
        <meta charSet="utf-8" />
      </Head>

      <div className="bg-[#e4e9fa] dark:bg-[#1c1b22]">
        <ThemeProvider attribute="class" enableSystem={false}>
          <DefaultSeo {...SEO} />
          <Navigation />
          <AnimatePresence
            exitBeforeEnter
            //initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  )
}

export default MyApp
