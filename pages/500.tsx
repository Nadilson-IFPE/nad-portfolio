/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import { NextPage } from 'next'
import Link from 'next/link'
import FavIcon from '../components/FavIcon'
import { useLanguages } from '../hooks/useLanguages'

const my500ErrorPage: NextPage = () => {
  const t = useLanguages()

  return (
    <>
      <Head>
        <title>{t.my_500_error_page_title}</title>
        <FavIcon />
      </Head>

      <div className="flex h-screen content-center items-center justify-center text-center antialiased">
        {/* <div className="rounded bg-[#e4e9fa] px-4 py-4 shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:text-black dark:shadow-indigo-500/50"> */}
        <div className="bg-[#e4e9fa] dark:bg-[#1c1b22]">
          <img
            alt="Where is my page?"
            className="content-center items-center justify-center"
            src="/images/bill_nye.gif"
            width={300}
            height={300}
          />
          <div className="mt-2 inline-block pr-4 font-bold text-red-600 dark:text-blue-300">
            {t.my_500_error_page_error_code}
          </div>
          <div className="mt-2 inline-block border-l-[1px] border-l-gray-500 pl-4 text-sm text-red-600 dark:text-blue-300">
            {t.my_500_error_page_error_description}
          </div>

          <div className="mx-auto pt-10">
            <Link href="/" passHref scroll={false}>
              <a
                className={
                  'text-sm font-bold tracking-wider transition-colors hover:text-blue-500 dark:text-white dark:hover:text-blue-400'
                }
              >
                <p>{t.my_500_error_page_go_back_link}</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default my500ErrorPage
