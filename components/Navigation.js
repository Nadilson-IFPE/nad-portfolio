import Link from 'next/link'
import React from 'react'
import ThemeSwitch from '../components/ThemeSwitch'
import Image from 'next/image'
import profile from '../public/images/profile.png'

const Navigation = () => {
  return (
    /* <div className="sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6 mr-auto bg-[#ccd2e7] bg-gradient-to-r from-sky-100 to-blue-200"> */
    <div className="sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6 mr-auto bg-[#ccd2e7]">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <Link href="/" passHref>
          <a
            className={
              'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
            }
          >
            <Image
              src={profile}
              alt="Nadilson José Rodrigues Teixeira"
              priority={true}
              className="hover:image-yellow-500 rounded-full transition-colors"
              width={50}
              height={50}
              placeholder="blur"
            />
            <p className="transition-colors hover:text-yellow-500"><strong>Início</strong></p>
          </a>
        </Link>

        <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8 ml-auto"></div>
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <Link href="/cv" passHref>
              <a
                className={'transition-colors hover:text-yellow-500'}
                rel="noreferrer"
              >
                <strong>CV</strong>
              </a>
            </Link>

            <Link href="/projetos" passHref>
              <a
                className={'transition-colors hover:text-yellow-500'}
                rel="noreferrer"
              >
                <strong>Projetos</strong>
              </a>
            </Link>

            <Link href="/contatos" passHref>
              <a
                className={'transition-colors hover:text-yellow-500'}
                rel="noreferrer"
              >
                <strong>Contatos</strong>
              </a>
            </Link>

            <Link href="/blog" passHref>
              <a
                className={'transition-colors hover:text-yellow-500'}
                rel="noreferrer"
              >
                <strong>Blog</strong>
              </a>
            </Link>
          </div>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Navigation
