import Head from 'next/head'
import SEO from '../next-seo.config'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import FavIcon from './../components/FavIcon'
import Script from 'next/script'
import { useLanguages } from './../hooks/useLanguages'
import { CookiesProvider } from 'react-cookie'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
  const t = useLanguages()

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>{t.main_page_title}</title>
        <FavIcon />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="true" />
        <meta charSet="utf-8" />
      </Head>

      <div className="bg-[#e4e9fa] dark:bg-[#1c1b22]">
        <ThemeProvider attribute="class" enableSystem={false}>
          <DefaultSeo {...SEO} />
          <Navigation />
          <CookiesProvider>
            <AnimatePresence
              exitBeforeEnter
              //initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <motion.div initial="initial" animate="animate" exit="exit">
                <Component {...pageProps} />
              </motion.div>
              <Analytics />
            </AnimatePresence>
          </CookiesProvider>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  )
}

export default MyApp
