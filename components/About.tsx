import React from 'react'
import Image from 'next/image'
import profile from '../public/images/profile.png'
import linkedin from '../public/images/linkedin.png'
import github from '../public/images/github.png'
import playstore from '../public/images/playstore.png'
import instagram from '../public/images/instagram.png'
import twitter from '../public/images/twitter.png'
import whatsapp from '../public/images/whatsapp.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="mx-auto px-4">
      <div className="flex flex-col-reverse items-center text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4">
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
            <h1 className="text-4xl font-bold text-gray-900 underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-5xl">
              Olá.
            </h1>

            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4 text-justify">
                Meu nome é <strong>Nadilson</strong>. Sou desenvolvedor e
                historiador e no momento, além de estar procurando emprego novo,
                tenho investido meu tempo livre para &quot;brincar&quot; com
                várias tecnologias e <em>frameworks</em>, mas sem deixar de ler
                meus livros e artigos relacionados às duas áreas a que pertenço.
                Também sou chegado em tocar guitarra. Tanto que tenho três, cada
                uma com uma afinação diferente para tocar Metal Extremo (
                <em>Drop C, Drop D</em> e <em>Drop C#</em>).
              </p>
              <p className="mb-4 text-justify">
                Este site não é meu primeiro trabalho sério com{' '}
                <strong className="italic">Next.js</strong>, mas é o primeiro a
                utilizar o <em>framework</em>{' '}
                <strong className="italic">Tailwind CSS</strong> e, portanto,
                será parte do meu contínuo aprendizado sobre essas tecnologias.
                Então, o site, que está agora em construção, estará sempre sendo
                modificado e melhorado conforme mais experiência seja adquirida.
              </p>
              <p className="mb-4 text-justify">
                Muito obrigado por visitar este meu trabalho, cujo código-fonte
                pode ser obtido através do meu repositório no <em>Github</em>, e
                não deixe de visitar o meu espaço no <em>LinkedIn</em> e na{' '}
                <em>Play Store</em>. Precisando de amigo, pode contar comigo.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex-shrink-0 lg:mt-12 lg:px-4">
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
                  href="https://br.linkedin.com/in/nadilson-teixeira/"
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
                      className={
                        'transform transition duration-500 hover:scale-105'
                      }
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
                      className={
                        'transform transition duration-500 hover:scale-105'
                      }
                      width={40}
                      height={40}
                      placeholder="blur"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="mb-10 flex-shrink-0 lg:mt-2 lg:px-2">
              <div className="mt-1 flex justify-center">
                <div className="flex space-x-4 font-medium text-gray-800 dark:text-white sm:block md:flex lg:flex">
                  <Link href="https://www.instagram.com/nadilson-dev/" passHref>
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
                        width={40}
                        height={40}
                        placeholder="blur"
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
                        alt="Twitter de Nadilson José Rodrigues Teixeira"
                        priority={true}
                        className={
                          'transform transition duration-500 hover:scale-105'
                        }
                        width={40}
                        height={40}
                        placeholder="blur"
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
                        alt="WhatsApp de Nadilson José Rodrigues Teixeira"
                        priority={true}
                        className={
                          'transform transition duration-500 hover:scale-105'
                        }
                        width={40}
                        height={40}
                        placeholder="blur"
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
  )
}

export default About
