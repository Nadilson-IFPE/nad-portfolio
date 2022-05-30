import Head from 'next/head'
import type { NextPage } from 'next'
import About from '../components/About'
import FavIcon from '../components/FavIcon'

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Site pessoal de Nadilson J. R. Teixeira - Início</title>
        <FavIcon />
      </Head>

      <main className="mx-auto mt-16 flex min-h-screen max-w-4xl flex-col antialiased">
        <About />
      </main>
    </div>
  )
}

export default Home
