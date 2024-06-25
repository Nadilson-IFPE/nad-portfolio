import React from 'react'
import Image from 'next/image'
import linkedin from '../public/images/linkedin.png'
import github from '../public/images/github.png'
import playstore from '../public/images/playstore.png'
import instagram from '../public/images/instagram.png'
import twitter from '../public/images/twitter.png'
import whatsapp from '../public/images/whatsapp.png'
import Link from 'next/link'
import { useLanguages } from '../hooks/useLanguages'
import { RotateZAnimation, ShowTextAnimation } from './Animations'

const About = () => {
  const t = useLanguages()

  return (
    <div className="mx-auto px-4">
      <div className="flex flex-col-reverse items-center text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4">
          <ShowTextAnimation>
            <h1 className="text-4xl font-bold text-gray-900 underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-5xl">
              {t.about_page_greeting}
            </h1>

            <div className="mt-6 text-gray-800 dark:text-white">
              <p
                className="mb-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: t.about_page_description_p1,
                }}
              />
              <p
                className="mb-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: t.about_page_description_p2,
                }}
              />
              <p
                className="mb-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: t.about_page_description_p3,
                }}
              />
            </div>
          </ShowTextAnimation>
        </div>

        <RotateZAnimation>

        <div className="flex-shrink-0 lg:mt-12 lg:px-4">

          <div className='image-content' />

            {/* <Image
              src={profile}
              alt="Nadilson José Rodrigues Teixeira"
              priority={true}
              width={200}
              height={200}
              placeholder="blur"
            /> */}

            <div className="mt-3 flex justify-center">
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
                  <Link href="https://www.instagram.com/nadilsondev/" passHref>
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
        </div>
        </RotateZAnimation>
      </div>
    </div>
  )
}

export default About
