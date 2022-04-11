import React from 'react'
import Image from 'next/image'
import profile from '../public/images/profile.png'
import linkedin from '../public/images/linkedin.png'
import github from '../public/images/github.png'
import playstore from '../public/images/playstore.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import loadTransitions from '../ANIM/loadTransitions'

const About = () => {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 50,
  }

  return (
    <div className="container mx-auto px-4">
      <motion.h1
        transition={config}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
      >
        <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
          <div className="lg:mt-12 lg:px-4">
            <h1 className="text-2xl font-bold text-gray-900 underline decoration-sky-400 decoration-wavy underline-offset-8 dark:text-white lg:text-5xl">
              Olá.
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4 text-justify">
                Meu nome é <strong>Nadilson</strong>. Sou desenvolvedor e
                historiador e no momento, além de estar procurando emprego novo,
                tenho investido meu tempo livre para "brincar" com várias
                tecnologias e frameworks, mas sem deixar de ler meus livros e
                artigos relacionados às duas áreas a que pertenço. Também sou
                chegado em tocar guitarra. Tanto que tenho três, cada uma com
                uma afinação diferente para tocar Metal Extremo (Drop C, Drop D
                e Drop C#).
              </p>
              <p className="mb-4 text-justify">
                Este site não é meu primeiro trabalho sério com Next.js, mas é o
                primeiro a utilizar o framework Tailwind CSS e, portanto, será
                meu contínuo aprendizado sobre essas tecnologias. Então, o site,
                que está agora em construção, estará sempre sendo modificado e
                melhorado conforme mais experiência seja adquirida.
              </p>
              <p className="mb-4 text-justify">
                Muito obrigado por visitar este meu trabalho, cujo código-fonte
                pode ser obtido através do meu repositório no Github, e não
                deixe de visitar o meu espaço no LinkedIn e na Play Store.
                Precisando de amigo, pode contar comigo.
              </p>
            </div>
          </div>
          <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
            <Image
              src={profile}
              alt="Nadilson José Rodrigues Teixeira"
              priority={true}
              width={250}
              height={250}
              placeholder="blur"
            />
            <div className="mt-1 flex justify-center">
              <div className="flex space-x-4 font-medium text-gray-800 dark:text-white sm:block md:flex lg:flex">
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
                      width={40}
                      height={40}
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
                      width={40}
                      height={40}
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
                      width={40}
                      height={40}
                      placeholder="blur"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.h1>
    </div>
  )
}

export default loadTransitions(About)
