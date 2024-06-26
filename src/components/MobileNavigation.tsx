import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import UseOnClickOutside from '../hooks/useOnClickOutside'
import nav_icon from '/public/images/nav_icon.png'
import { useLanguages } from '../hooks/useLanguages'
import home from '/public/images/home.svg'
import cv from '/public/images/cv.svg'
import projects from '/public/images/projects.svg'
import contactme from '/public/images/contact-me.svg'
import blog from '/public/images/blog.svg'

const MobileNavigation = () => {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false)

  const myRef = useRef() as React.MutableRefObject<HTMLDivElement>
  UseOnClickOutside(myRef, () => setShowSidebarMenu(false))

  const t = useLanguages()

  const handleClickOnLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
    myDiv: string,
    page: string
  ) => {
    let targetDiv = document.getElementById(myDiv) as HTMLElement;
    let targetParagraph = document.getElementById('paragraph') as HTMLElement;

    if (path === window.location.href) {
      e.preventDefault()
      window.scroll(0, 0)
      targetParagraph.innerHTML =
        `${t.nav_dynamic_error_message}` + '<strong>' + page + '</strong>!'
      targetDiv.setAttribute(
        'class',
        '.1s block w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out md:-translate-x-0'
      )
      setTimeout(function () {
        targetDiv.setAttribute(
          'class',
          '-translate-x-full w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out'
        )
      }, 2500)
    } else {
      window.scroll(0, 0)
      targetDiv.setAttribute(
        'class',
        '-translate-x-full w-full content-center items-center bg-red-800 py-2 px-2 text-center text-white transition-transform duration-300 ease-in-out'
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
      <div className="top-0 left-0 flex flex-col space-y-2 rounded p-4 shadow dark:bg-slate-900 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <button name='mobile_button' aria-label='mobile_button' className="block" onClick={handleClick}>
          <svg name='mobile_button'
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
        className={`fixed top-0 left-0 bottom-0 z-50 flex w-4/6 max-w-sm transform flex-col content-start overflow-y-auto border-r bg-[#b9c1e0] px-6 py-6 text-center transition duration-500 ease-in-out dark:bg-[#1c1b22] dark:text-white sm:text-left sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden ${
          // showSidebarMenu ? 'block' : 'hidden'
          // Suavização na abertura do menu mobile
          showSidebarMenu
            ? '.1s block transition-transform ease-in-out md:-translate-x-0'
            : '-translate-x-full'
        }`}
      >
        <div className="right-0 top-0">
          <button name='mobile_menu_button' aria-label='mobile_menu_button' className="float-right py-0">
            <svg name='mobile_menu_button'
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
            src={nav_icon}
            alt="Nadilson José Rodrigues Teixeira"
            priority={true}
            className="float-center rounded-full"
            width={150}
            height={150}
            placeholder="blur"
          />
        </div>

        <p className="mb-10 text-sm font-semibold uppercase">
          {t.main_page_title}
        </p>

        <div className="m-auto content-start items-start justify-start">
          <ul>
            <li className="flex items-center gap-x-2 p-5">
              <Image
                className="h-7 w-7 object-cover dark:invert"
                src={home}
                height="30"
                width="30"
                objectFit="contain"
                alt='Home'
              />
              <Link href="/" passHref scroll={false}>
                <a
                  className="font-medium uppercase tracking-wider transition-colors duration-200 hover:text-[#ffb800]"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_home}`
                    )
                  }
                >
                  <strong>{t.nav_home}</strong>
                </a>
              </Link>
            </li>

            <li className="flex items-center gap-x-2 p-5">
              <Image
                className="h-7 w-7 object-cover dark:invert"
                src={cv}
                height="30"
                width="30"
                objectFit="contain"
                alt='Curriculum Vitæ'
              />
              <Link href="/cv" passHref>
                <a
                  className="transition-colors tracking-wider duration-200 hover:text-[#ffb800]"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_cv}`
                    )
                  }
                >
                  <strong>{t.nav_cv}</strong>
                </a>
              </Link>
            </li>

            <li className="flex items-center gap-x-2 p-5">
              <Image
                className="h-7 w-7 object-cover dark:invert"
                src={projects}
                height="30"
                width="30"
                objectFit="contain"
                alt='Projects'
              />
              <Link href="/projetos" passHref>
                <a
                  className="transition-colors tracking-wider duration-200 hover:text-[#ffb800]"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_projects}`
                    )
                  }
                >
                  <strong>{t.nav_projects}</strong>
                </a>
              </Link>
            </li>

            <li className="flex items-center gap-x-2 p-5">
              <Image
                className="h-7 w-7 object-cover dark:invert"
                src={contactme}
                height="30"
                width="30"
                objectFit="contain"
                alt='Contact me'
              />
              <Link href="/contatos" passHref>
                <a
                  className="transition-colors tracking-wider duration-200 hover:text-[#ffb800]"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_contact}`
                    )
                  }
                >
                  <strong>{t.nav_contact}</strong>
                </a>
              </Link>
            </li>

            <li className="flex items-center gap-x-2 p-5">
              <Image
                className="h-7 w-7 object-cover dark:invert"
                src={blog}
                height="30"
                width="30"
                objectFit="contain"
                alt="Nadilson's blog"
              />
              <Link href="/blog" passHref>
                <a
                  className="transition-colors tracking-wider duration-200 hover:text-[#ffb800]"
                  rel="noreferrer"
                  onClick={(e) =>
                    handleClickOnLink(
                      e,
                      e.currentTarget.href,
                      'toast-div',
                      `${t.nav_blog}`
                    )
                  }
                >
                  <strong>{t.nav_blog}</strong>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-auto text-xs text-gray-400 text-center">
          <span>
            &copy; 2022-{new Date().getFullYear()} - Nadilson J. R. Teixeira
          </span>
        </p>
      </div>
    </>
  )
}

export default MobileNavigation
