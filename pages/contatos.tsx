import React from 'react'
import profile from '../public/images/profile.png'
import Image from 'next/image'
import linkedin from '../public/images/linkedin.png'
import github from '../public/images/github.png'
import playstore from '../public/images/playstore.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import loadTransitions from '../ANIM/loadTransitions'

function Contatos() {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 50,
  }

  return (
    <div className="container mx-auto flex flex-1 justify-center px-4 pt-5">
      <motion.h1
        transition={config}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="item-center flex flex-col-reverse lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
          <div className="lg:mt-12 lg:px-4">
            <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
              Contatos
            </h1>
            {/* <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              TO-DO
              <br /> <br />
              Posso ser contactado através do telefone: <br />{' '}
              <a
                href="tel:+5581986723962"
                className="font-medium tracking-wider transition-colors hover:text-yellow-500 dark:text-white"
              >
                +55 81 9 8672-3962.
              </a>
            </p>
          </div> */}

            <br />

            <div className="rounded-lg bg-white p-10 shadow-xl dark:text-white">
              <Image
                src={profile}
                alt="Nadilson José Rodrigues Teixeira"
                priority={true}
                className={'mx-auto h-40 rounded-full p-4'}
                width={200}
                height={200}
                placeholder="blur"
              />
              <header className="py-4 px-4 text-center text-2xl font-extrabold dark:text-black">
                Nadilson
              </header>
              <div>
                <ul className="text-center font-semibold text-gray-500">
                  <li>Historiador</li>
                  <li>Desenvolvedor</li>
                  <li>Analista</li>
                </ul>

                <br />

                <p className="mb-4 text-center font-semibold text-gray-500">
                  Telefone: <br />{' '}
                  <a
                    href="tel:+5581986723962"
                    className="text-center font-semibold text-gray-500 hover:text-yellow-500"
                  >
                    +55 81 9 8672-3962
                  </a>
                </p>

                <p className="mb-4 text-center font-semibold text-gray-500">
                  E-mail: <br />{' '}
                  <a
                    href="mailto:nadilson@protonmail.com"
                    className="text-center font-semibold text-gray-500 hover:text-yellow-500"
                  >
                    nadilson@protonmail.com
                  </a>
                </p>

                <br />

                <div className="grid grid-cols-3 place-items-center gap-3">
                  <Link
                    href="https://www.linkedin.com/in/nadilson-teixeira/"
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
                        className={'hover:image-yellow-500 transition-colors'}
                        width={30}
                        height={30}
                        placeholder="blur"
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
                        alt="Github de Nadilson José Rodrigues Teixeira"
                        priority={true}
                        className={'hover:image-yellow-500 transition-colors'}
                        width={30}
                        height={30}
                        placeholder="blur"
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
                        alt="Conta na Play Store de Nadilson José Rodrigues Teixeira"
                        priority={true}
                        className={'hover:image-yellow-500 transition-colors'}
                        width={30}
                        height={30}
                        placeholder="blur"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.h1>
    </div>
  )
}

export default loadTransitions(Contatos)
