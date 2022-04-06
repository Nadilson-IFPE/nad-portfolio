import Link from 'next/link'
import React from 'react'
import ThemeSwitch from '../components/ThemeSwitch'
import Image from 'next/image'
import profile from '../public/profile.png'

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <Link href="/">
          <a
            className={
              'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
            }
          >
            <Image
              src={profile}
              alt="Nadilson José Rodrigues Teixeira"
              priority={true}
              className="rounded-full transition-colors hover:image-yellow-500"
              width={50}
              height={50}
              placeholder="blur"
            />
            <p className="transition-colors hover:text-yellow-500">Início</p>
          </a>
        </Link>

        <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="cv"
              className={'transition-colors hover:text-yellow-500'}
              rel="noreferrer"
            >
              CV
            </a>
            <a
              href="/projetos"
              className={'transition-colors hover:text-yellow-500'}
              rel="noreferrer"
            >
              Projetos
            </a>
            <a
              href="/contatos"
              className={'transition-colors hover:text-yellow-500'}
              rel="noreferrer"
            >
              Contatos
            </a>
            <a
              href="https://nadblog.vercel.app/"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Navigation
