import Head from 'next/head'
import type { NextPage } from 'next'
import About from '../components/About'
import FavIcon from '../components/FavIcon'
import { useLanguages } from './../hooks/useLanguages'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const t = useLanguages()
  const { locale } = useRouter()
  /* {
    console.log('IDIOMA: ' + locale)
  } */
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>{t.home_page_title}</title>
        <FavIcon />
      </Head>

      <main className="mx-auto mt-16 flex min-h-screen max-w-4xl flex-col antialiased">
        <About />
      </main>
    </div>
  )
}

export default Home
