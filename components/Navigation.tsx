import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import profile from '../public/images/profile.png'
import MobileNavigation from './MobileNavigation'
import LanguageSelector from './LanguageSelector'
import ThreeDotsDivider from './ThreeDotsDivider'
import { useLanguages } from '../hooks/useLanguages'

// const getLastItem = (myPage: string) =>
//   myPage.substring(myPage.lastIndexOf('/') + 1)

const Navigation = () => {
  // const [navText, setNavText] = useState('')
  const t = useLanguages()

  const handleClickOnLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
    myDiv: string,
    page: string
  ) => {
    let targetDiv = document.getElementById(myDiv)
    let targetParagraph = document.getElementById('paragraph')

    if (path === window.location.href) {
      e.preventDefault()
      window.scroll(0, 0)
      targetParagraph!.innerHTML =
        `${t.nav_dynamic_error_message}` + '<strong>' + page + '</strong>!'
      targetDiv!.setAttribute(
        'class',
        '.1s block w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out md:-translate-x-0'
      )
      setTimeout(function () {
        targetDiv!.setAttribute(
          'class',
          '-translate-x-full w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out'
        )
      }, 2500)
    } else {
      window.scroll(0, 0)
      targetDiv!.setAttribute(
        'class',
        '-translate-x-full w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out'
      )
    }
  }

  return (
    <>
      <div className="sticky top-0 z-50 mr-auto content-center items-center justify-between overflow-hidden bg-[#b9c1e0] p-2 text-center dark:bg-black">
        <div className="sticky flex content-center items-center justify-between px-4 text-center">
          {/* Menu para dispositivos móveis */}
          <MobileNavigation />

          {/* Menu  para PCs e dispositivos com tela grande*/}
          <Link href="/" passHref scroll={false}>
            <a
              className="invisible font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 md:visible lg:visible xl:visible 2xl:visible"
              onClick={(e) => {
                //  setNavText(t.nav_home)
                handleClickOnLink(
                  e,
                  e.currentTarget.href,
                  'toast-div',
                  `${t.nav_home}`
                )
              }}
            >
              <Image
                src={profile}
                alt="Nadilson José Rodrigues Teixeira"
                priority={true}
                className="rounded-full transition-colors"
                width={50}
                height={50}
                placeholder="blur"
              />
              <p className="transition-colors">
                <strong>{t.nav_home}</strong>
              </p>
            </a>
          </Link>

          <div className="dark:border-white-300 mb-2 ml-auto border-t-2 border-gray-300 pb-8"></div>
          {/* <div className="w-[70%]">
            <div className="text-primary bg-transparent p-3 text-sm font-medium sm:p-0 sm:hover:bg-transparent">
              <strong className="bg-transparent text-lg uppercase text-[#e4e9fa] dark:text-yellow-500">
                {navText}
              </strong>
            </div>
          </div> */}
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="hidden flex-wrap space-x-2 pt-2 font-medium sm:flex md:visible lg:visible lg:pt-0 xl:visible 2xl:visible">
              <Link href="/cv" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) => {
                    //   setNavText(t.nav_cv)
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_cv}`
                    )
                  }}
                >
                  <strong>{t.nav_cv}</strong>
                </a>
              </Link>

              <ThreeDotsDivider />

              <Link href="/projetos" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) => {
                    //  setNavText(t.nav_projects)
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_projects}`
                    )
                  }}
                >
                  <strong>{t.nav_projects}</strong>
                </a>
              </Link>

              <ThreeDotsDivider />

              <Link href="/contatos" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) => {
                    //  setNavText(t.nav_contact)
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_contact}`
                    )
                  }}
                >
                  <strong>{t.nav_contact}</strong>
                </a>
              </Link>

              <ThreeDotsDivider />

              <Link href="/blog" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) => {
                    //  setNavText(t.nav_blog)
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_blog}`
                    )
                  }}
                >
                  <strong>{t.nav_blog}</strong>
                </a>
              </Link>

              <ThreeDotsDivider />
            </div>
          </div>

          <ThemeSwitch />

          <LanguageSelector />
        </div>
      </div>

      {/* Mensagem acima do título da página: */}
      <div
        id="toast-div"
        className="-translate-x-full w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out"
        role="alert"
      >
        <p id="paragraph" className="text-center">
          {t.nav_error_message}
        </p>
      </div>
    </>
  )
}

export default Navigation
