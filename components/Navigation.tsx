import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import profile from '../public/images/profile.png'
import MobileNavigation from './MobileNavigation'

// const getLastItem = (myPage: string) =>
//   myPage.substring(myPage.lastIndexOf('/') + 1)

const Navigation = () => {
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
        'Você já está na página <strong>' + page + '</strong>!'
      targetDiv!.setAttribute(
        'class',
        'w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white'
      )
      setTimeout(function () {
        targetDiv!.setAttribute(
          'class',
          'hidden w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white'
        )
      }, 2000)
    } else {
      window.scroll(0, 0)
      targetDiv!.setAttribute(
        'class',
        'hidden w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white'
      )
    }
  }

  return (
    <>
      <div className="sticky top-0 z-50 mr-auto content-center items-center justify-between bg-[#b9c1e0] p-2 text-center dark:bg-black">
        <div className="sticky flex content-center items-center justify-between px-4 text-center">
          {/* Menu para dispositivos móveis */}
          <MobileNavigation />

          {/* Menu  para PCs e dispositivos com tela grande*/}
          <Link href="/" passHref scroll={false}>
            <a
              className="invisible font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 md:visible lg:visible xl:visible 2xl:visible"
              onClick={(e) =>
                handleClickOnLink(
                  e,
                  e.currentTarget.href,
                  'toast-div',
                  'INÍCIO'
                )
              }
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
                <strong>Início</strong>
              </p>
            </a>
          </Link>

          <div className="dark:border-white-300 mb-2 ml-auto border-t-2 border-gray-300 pb-8"></div>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="hidden flex-wrap space-x-2 pt-2 font-medium sm:flex md:visible lg:visible lg:pt-0 xl:visible 2xl:visible">
              <Link href="/cv" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      'CV'
                    )
                  }
                >
                  <strong>CV</strong>
                </a>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="current-fill h-6 w-6 text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>

              <Link href="/projetos" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      'Projetos'
                    )
                  }
                >
                  <strong>Projetos</strong>
                </a>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="current-fill h-6 w-6 text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>

              <Link href="/contatos" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      'Contatos'
                    )
                  }
                >
                  <strong>Contatos</strong>
                </a>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="current-fill h-6 w-6 text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>

              <Link href="/blog" passHref>
                <a
                  className="transition-colors hover:text-yellow-500"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      'Blog'
                    )
                  }
                >
                  <strong>Blog</strong>
                </a>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="current-fill h-6 w-6 text-gray-400"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
          </div>
          <ThemeSwitch />
        </div>
      </div>

      {/* Mensagem acima do título da página: */}
      <div
        id="toast-div"
        className="hidden w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white"
        role="alert"
      >
        <p id="paragraph" className="text-center">
          Você já está na página nesta página!
        </p>
      </div>
    </>
  )
}

export default Navigation
