import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import UseOnClickOutside from '../hooks/useOnClickOutside'
import profile from '../public/images/profile.png'

const MobileNavigation = () => {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)

  const myRef = useRef() as React.MutableRefObject<HTMLDivElement>
  UseOnClickOutside(myRef, () => setShowSidebarMenu(false))

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

    setShowSidebarMenu(false)
  }

  function handleClick() {
    setShowSidebarMenu(!showSidebarMenu)
  }

  return (
    <>
      {/* Botão hamburguer para o menu para dispositivos móveis */}
      <div className="top-0 left-0 flex flex-col space-y-2 rounded p-4 shadow dark:bg-slate-900 md:hidden lg:hidden xl:hidden 2xl:hidden">
        <button className="mobile-menu-button block" onClick={handleClick}>
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {showSidebarMenu && (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
            {!showSidebarMenu && (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu para dispositivos móveis */}
      <div
        ref={myRef}
        className={`mobile-menu fixed top-0 left-0 bottom-0 z-50 flex w-4/6 max-w-sm transform flex-col content-start overflow-y-auto border-r bg-[#b9c1e0] px-6 py-6 text-center transition duration-500 ease-in-out dark:bg-[#1c1b22] dark:text-white sm:text-left md:hidden lg:hidden xl:hidden 2xl:hidden ${
          showSidebarMenu ? 'block' : 'hidden'
        }`}
      >
        <div className="right-0 top-0">
          <button className="float-right py-0">
            <svg
              className="h-8 w-8 cursor-pointer text-[#39393a] hover:text-[#7d8ac0] dark:text-[#7d8ac0] dark:hover:text-[#6c6c6e]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setShowSidebarMenu(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="content-center">
          <Image
            src={profile}
            alt="Nadilson José Rodrigues Teixeira"
            priority={true}
            className="float-center rounded-full"
            width={150}
            height={150}
            placeholder="blur"
          />
        </div>

        <p className="mb-10 text-sm font-semibold uppercase">
          Site pessoal de Nadilson
        </p>

        <div className="content-start items-start justify-start">
          <ul>
            <li className="p-5">
              <Link href="/" passHref scroll={false}>
                <a
                  className="font-medium uppercase tracking-wider transition-colors hover:text-blue-400"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      'INÍCIO'
                    )
                  }
                >
                  <strong>Início</strong>
                </a>
              </Link>
            </li>

            <li className="p-5">
              <Link href="/cv" passHref>
                <a
                  className="transition-colors hover:text-blue-400"
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
            </li>

            <li className="p-5">
              <Link href="/projetos" passHref>
                <a
                  className="transition-colors hover:text-blue-400"
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
            </li>

            <li className="p-5">
              <Link href="/contatos" passHref>
                <a
                  className="transition-colors hover:text-blue-400"
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
            </li>

            <li className="p-5">
              <Link href="/blog" passHref>
                <a
                  className="transition-colors hover:text-blue-400"
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
            </li>
          </ul>
        </div>

        <p className="mt-auto text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} - Nadilson</span>
        </p>
      </div>
    </>
  )
}

export default MobileNavigation
