import Head from 'next/head'
import React from 'react'
import profile from '../public/images/profile.png'
import Image from 'next/image'
import linkedin from '../public/images/linkedin.png'
import github from '../public/images/github.png'
import playstore from '../public/images/playstore.png'
import instagram from '../public/images/instagram.png'
import twitter from '../public/images/twitter.png'
import whatsapp from '../public/images/whatsapp.png'
import Link from 'next/link'
import { NextPage } from 'next'
import FavIcon from '../components/FavIcon'
import { useLanguages } from '../hooks/useLanguages'
import {
  BottomToTopAnimation,
  FadeInAnimationAnimation,
  LeftToRightAnimation,
  RightToLeftAnimation,
  TopToBottomAnimation,
  ZoomAnimationAnimation,
} from '../components/Animations'

const Contatos: NextPage = () => {
  const t = useLanguages()
  return (
    <div className="mx-auto flex justify-center space-y-14 px-4 pt-5 lg:space-y-24">
      <Head>
        <title>{t.contact_page_title}</title>
        <FavIcon />
      </Head>

      <div className="item-center flex min-h-screen flex-col lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="shadow-indigo-500/50 lg:mt-12 lg:px-4">
          <TopToBottomAnimation>
            <h1 className="text-center text-2xl font-bold text-gray-900 underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-4xl">
              {t.contact_page_header}
            </h1>
            <br />
          </TopToBottomAnimation>

          <ZoomAnimationAnimation>
            <div className="flex justify-center">
              <div
                id="ContactCard"
                className="flex flex-col rounded-lg border border-gray-200 bg-[#edeff5] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50 md:max-w-xl md:flex-row"
              >
                <Image
                  src={profile}
                  alt="Nadilson José Rodrigues Teixeira"
                  priority={true}
                  className={
                    'mx-auto h-40 rounded object-cover p-4 md:h-auto md:w-48'
                  }
                  width={400}
                  height={400}
                  placeholder="blur"
                />

                {/* Este DIV a seguir serve para impedir download de imagens e vídeos ao clicar com o botão direito do mouse. */}
                {/* <div className="absolute left-0 top-0 bottom-0 right-0"></div> */}
                <div className="flex flex-col justify-start p-2">
                  <FadeInAnimationAnimation>
                    <header className="py-2 px-2 text-center text-2xl font-extrabold dark:text-white">
                      Nadilson J. R. Teixeira
                    </header>
                  </FadeInAnimationAnimation>
                  <div className="mb-4 text-base text-gray-700">
                    <BottomToTopAnimation>
                      <ul className="text-center font-semibold text-gray-400">
                        <li>{t.contact_page_desc1}</li>
                        <li>{t.contact_page_desc2}</li>
                        <li>{t.contact_page_desc3}</li>
                      </ul>
                    </BottomToTopAnimation>
                  </div>

                  <div className="mb-4 text-center font-semibold dark:text-white">
                    <LeftToRightAnimation>
                      {t.contact_page_phone}
                      <br />
                      <a
                        href="tel:+5581986723962"
                        className="text-center font-semibold text-gray-400 hover:text-blue-500"
                      >
                        +55 81 9 8672-3962
                      </a>
                    </LeftToRightAnimation>

                    <br />
                    <RightToLeftAnimation>
                      <p className="mb-4 text-center font-semibold dark:text-white">
                        {t.contact_page_email}
                        <br />
                        <a
                          href="mailto:nadilson@protonmail.com"
                          className="text-center font-semibold text-gray-400 hover:text-blue-500"
                        >
                          nadilson@protonmail.com
                        </a>
                      </p>
                      <p className="text-center text-xs dark:text-white">
                        {t.contact_page_findme}
                      </p>
                    </RightToLeftAnimation>
                  </div>

                  <div className="grid grid-cols-3 place-items-center">
                    <BottomToTopAnimation>
                      <Link
                        href="https://br.linkedin.com/in/nadilson-teixeira"
                        passHref
                      >
                        <a
                          className={
                            'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={linkedin}
                            alt="LinkedIn de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className={
                              'transform transition duration-500 hover:scale-105'
                            }
                            width={30}
                            height={30}
                          />
                        </a>
                      </Link>
                    </BottomToTopAnimation>

                    <TopToBottomAnimation>
                      <Link href="https://github.com/Nadilson-IFPE" passHref>
                        <a
                          className={
                            'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={github}
                            alt="Github de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className={
                              'transform transition duration-500 hover:scale-105'
                            }
                            width={30}
                            height={30}
                          />
                        </a>
                      </Link>
                    </TopToBottomAnimation>

                    <BottomToTopAnimation>
                      <Link
                        href="https://play.google.com/store/apps/developer?id=Nadilson+J.+R.+Teixeira"
                        passHref
                      >
                        <a
                          className={
                            'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={playstore}
                            alt="Conta na Play Store de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className={
                              'transform transition duration-500 hover:scale-105'
                            }
                            width={30}
                            height={30}
                          />
                        </a>
                      </Link>
                    </BottomToTopAnimation>

                    <TopToBottomAnimation>
                      <Link
                        href="https://www.instagram.com/nadilsondev/"
                        passHref
                      >
                        <a
                          className={
                            'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={instagram}
                            alt="Instagram de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className={
                              'transform transition duration-500 hover:scale-105'
                            }
                            width={30}
                            height={30}
                          />
                        </a>
                      </Link>
                    </TopToBottomAnimation>

                    <BottomToTopAnimation>
                      <Link href="https://www.twitter.com/NadilsonDev" passHref>
                        <a
                          className={
                            'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={twitter}
                            alt="Twitter de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className={
                              'transform transition duration-500 hover:scale-105'
                            }
                            width={30}
                            height={30}
                          />
                        </a>
                      </Link>
                    </BottomToTopAnimation>

                    <TopToBottomAnimation>
                      <Link href="https://wa.me/+5581986723962" passHref>
                        <a
                          className={
                            'font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={whatsapp}
                            alt="WhatsApp de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className={
                              'transform transition duration-500 hover:scale-105'
                            }
                            width={35}
                            height={35}
                          />
                        </a>
                      </Link>
                    </TopToBottomAnimation>
                  </div>
                </div>
              </div>
            </div>
          </ZoomAnimationAnimation>
        </div>
      </div>
    </div>
  )
}

export default Contatos
