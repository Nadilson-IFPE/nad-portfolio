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
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import FavIcon from '../components/FavIcon'

const Contatos: NextPage = () => {
  return (
    <div className="mx-auto flex justify-center space-y-14 px-4 pt-5 lg:space-y-24">
      <Head>
        <title>Site pessoal de Nadilson J. R. Teixeira - Contatos</title>
        <FavIcon />
      </Head>

      <div className="item-center flex min-h-screen flex-col lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="shadow-indigo-500/50 lg:mt-12 lg:px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <h1 className="text-center text-2xl font-bold text-gray-900 underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-4xl">
              Contatos
            </h1>
            <br />
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.7,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  rotateZ: 360,
                },
                visible: {
                  opacity: 1,
                  rotateZ: 0,
                },
                exit: {
                  opacity: 0,
                  rotateZ: 360,
                },
              }}
            >
              <div className="flex flex-col rounded-lg border border-gray-200 bg-[#edeff5] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50 md:max-w-xl md:flex-row">
                <Image
                  src={profile}
                  alt="Nadilson Jos?? Rodrigues Teixeira"
                  priority={true}
                  className={
                    'mx-auto h-40 rounded object-cover p-4 md:h-auto md:w-48'
                  }
                  width={400}
                  height={400}
                  placeholder="blur"
                />
                {/* Este DIV a seguir serve para impedir download de imagens e v??deos ao clicar com o bot??o direito do mouse. */}
                {/* <div className="absolute left-0 top-0 bottom-0 right-0"></div> */}
                <div className="flex flex-col justify-start p-2">
                  <header className="py-2 px-2 text-center text-2xl font-extrabold dark:text-white">
                    Nadilson J. R. Teixeira
                  </header>
                  <div className="mb-4 text-base text-gray-700">
                    <ul className="text-center font-semibold text-gray-400">
                      <li>Historiador</li>
                      <li>Desenvolvedor</li>
                      <li>Analista</li>
                    </ul>
                  </div>

                  <br />

                  <div className="mb-4 text-center font-semibold dark:text-white">
                    Telefone: <br />
                    <a
                      href="tel:+5581986723962"
                      className="text-center font-semibold text-gray-400 hover:text-blue-500"
                    >
                      +55 81 9 8672-3962
                    </a>
                    <br /> <br />
                    <p className="mb-4 text-center font-semibold dark:text-white">
                      E-mail: <br />
                      <a
                        href="mailto:nadilson@protonmail.com"
                        className="text-center font-semibold text-gray-400 hover:text-blue-500"
                      >
                        nadilson@protonmail.com
                      </a>
                    </p>
                    <p className="text-center text-xs dark:text-white">
                      Encontre-me em:
                    </p>
                  </div>

                  <div className="grid grid-cols-3 place-items-center">
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
                          alt="LinkedIn de Nadilson Jos?? Rodrigues Teixeira"
                          priority={true}
                          className={
                            'transform transition duration-500 hover:scale-105'
                          }
                          width={30}
                          height={30}
                        />
                      </a>
                    </Link>

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
                          alt="Github de Nadilson Jos?? Rodrigues Teixeira"
                          priority={true}
                          className={
                            'transform transition duration-500 hover:scale-105'
                          }
                          width={30}
                          height={30}
                        />
                      </a>
                    </Link>

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
                          alt="Conta na Play Store de Nadilson Jos?? Rodrigues Teixeira"
                          priority={true}
                          className={
                            'transform transition duration-500 hover:scale-105'
                          }
                          width={30}
                          height={30}
                        />
                      </a>
                    </Link>

                    <Link
                      href="https://www.instagram.com/nadilson-dev/"
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
                          alt="Instagram de Nadilson Jos?? Rodrigues Teixeira"
                          priority={true}
                          className={
                            'transform transition duration-500 hover:scale-105'
                          }
                          width={30}
                          height={30}
                        />
                      </a>
                    </Link>

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
                          alt="Twitter de Nadilson Jos?? Rodrigues Teixeira"
                          priority={true}
                          className={
                            'transform transition duration-500 hover:scale-105'
                          }
                          width={30}
                          height={30}
                        />
                      </a>
                    </Link>

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
                          alt="WhatsApp de Nadilson Jos?? Rodrigues Teixeira"
                          priority={true}
                          className={
                            'transform transition duration-500 hover:scale-105'
                          }
                          width={35}
                          height={35}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contatos
