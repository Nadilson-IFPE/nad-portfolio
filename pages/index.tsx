import type { NextPage } from 'next'
import Head from 'next/head'
import About from "../components/About";
import Carousel from "../components/Carousel";

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>

      {/* <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Carousel />
      </main> */}
    </div>
  )
}

export default Home
