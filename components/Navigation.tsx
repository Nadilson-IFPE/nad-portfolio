import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import profile from '../public/images/profile.png'

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
      <div className="sticky top-0 z-20 mr-auto content-center items-center bg-[#b9c1e0] p-2 text-center dark:bg-black">
        <div className="dark:bg-slate-20 sticky flex content-center items-center justify-between px-4 text-center">
          <Link href="/" passHref scroll={false}>
            <a
              className={
                'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500'
              }
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
            <div className="flex flex-wrap space-x-2 pt-2 font-medium lg:pt-0">
              <Link href="/cv" passHref>
                <a
                  className={'transition-colors hover:text-yellow-500'}
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

              <Link href="/projetos" passHref>
                <a
                  className={'transition-colors hover:text-yellow-500'}
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

              <Link href="/contatos" passHref>
                <a
                  className={'transition-colors hover:text-yellow-500'}
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

              <Link href="/blog" passHref>
                <a
                  className={'transition-colors hover:text-yellow-500'}
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
