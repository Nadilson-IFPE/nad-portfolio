import Head from 'next/head'
import type { NextPage } from 'next'
import About from '@/components/About'
import FavIcon from '@/components/FavIcon'
import { useLanguages } from '@/hooks/useLanguages'

const Home: NextPage = () => {
  const t = useLanguages()
  /* {
    console.log('IDIOMA: ' + locale)
  } */
  return (
    <>
      <Head>
        <title>{t.home_page_title}</title>
        <FavIcon />
      </Head>
      <div className="space-y-14 lg:space-y-24">
        <main className="mx-auto mt-2 flex min-h-screen max-w-4xl flex-col antialiased">
          <About />
        </main>
      </div>
    </>
  )
}

export default Home
