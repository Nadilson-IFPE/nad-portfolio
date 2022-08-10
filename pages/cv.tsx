import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import badge01 from '../public/images/badge01.png'
import badge02 from '../public/images/badge02.png'
import badge03 from '../public/images/badge03.png'
import badge04 from '../public/images/badge04.png'
import badge05 from '../public/images/badge05.png'
import badge06 from '../public/images/badge06.png'
import badge07 from '../public/images/badge07.png'
import badge08 from '../public/images/badge08.png'
import badge09 from '../public/images/badge09.png'
import badge10 from '../public/images/badge10.png'
import badge11 from '../public/images/badge11.png'
import badge12 from '../public/images/badge12.png'
import badge13 from '../public/images/badge13.png'
import certiprof from '../public/images/certiprof.png'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect'
import { NextPage } from 'next'
import FavIcon from '../components/FavIcon'

const url = process.env.NEXT_PUBLIC_PDF_URL!

async function downloadCV() {
  const meuCV = await fetch(url)
  const meuCVBlob = await meuCV.blob()
  const meuCVBlobURL = URL.createObjectURL(meuCVBlob)

  var anchor = document.createElement('a')
  anchor.style.display = 'none'
  anchor.href = meuCVBlobURL
  anchor.rel = 'noopener, noreferrer'
  anchor.target = '_blank'
  anchor.download = 'Nadilson_José_Rodrigues_Teixeira_-_CV.pdf'

  document.body.appendChild(anchor)
  anchor.click()

  // Firefox precisa destas linhas:
  if (navigator.userAgent.indexOf('Firefox') != -1) {
    setTimeout(() => {
      URL.revokeObjectURL(meuCVBlobURL)
      if (anchor.parentNode != null) {
        anchor.parentNode.removeChild(anchor)
      }
    }, 0)
  }

  document.body.removeChild(anchor)

  URL.revokeObjectURL(meuCVBlobURL)
}

const CV: NextPage = () => {
  /* const handleClickOnCVFIleLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault()
    if (path === 'download') {
      if (isMobile) {
        window.location.href = url
      } else {
        window.open(url, '_blank')
      }
    }
  } */

  return (
    <div className="mx-auto flex flex-1 justify-center space-y-14 px-4 pt-5 lg:space-y-24">
      <Head>
        <title>Site pessoal de Nadilson J. R. Teixeira - Curriculum</title>
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
              Curriculum Vitæ
            </h1>

            <br />

            <div className="bg-[#eeebeb] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
              <h3 className="prose p-4 text-justify dark:text-black">
                Você pode fazer o download do meu CV clicando{' '}
                <a
                  className={
                    'font-medium tracking-wider text-red-800 underline decoration-sky-300 decoration-wavy underline-offset-4 transition-colors'
                  }
                  /* onClick={(e) => downloadCV(e, 'download')} */
                  onClick={() => downloadCV()}
                >
                  <strong className="cursor-pointer text-red-600 hover:text-blue-600">
                    aqui
                  </strong>
                </a>
                . Você também pode visualizar as informações atuais abrindo as
                guias abaixo.
              </h3>
            </div>
          </motion.div>

          <br />

          <div className="text-gray-800">
            <article className="lg:prose-x1 accordion-section prose dark:text-black">
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
                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      OBJETIVO
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <p className="mb-4 rounded-b-xl bg-[#e7eaf7] p-4 text-justify">
                    Trabalhar em empresas ou organizações atuantes na área de
                    Informática e/ou tecnologia, isto é, principalmente – mas,
                    não exclusivo – em empresas atuantes na área de
                    desenvolvimento de softwares ou vendas de equipamentos,
                    estando, de qualquer modo, à disposição para outras funções
                    ou cargos oferecidos, bem como determinado em ser competente
                    com os deveres que me forem atribuídos.
                  </p>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />

                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      HABILIDADES
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <p className="mb-4 rounded-b-xl bg-[#e7eaf7] p-4">
                    • Programação em linguagem Java;
                    <br />
                    • Desenvolvimento de softwares para SO Android;
                    <br />
                    • Java Server Pages (JSP), Java Server Faces (JSF);
                    <br />
                    • HTML, CSS e JavaScript;
                    <br />
                    • Typescript, React, Angular, Node, Ionic, NextJS, NestJS e
                    Flutter (básico; cursando os níveis intermediário e
                    avançado);
                    <br />
                    • Spring Boot, JWT, Hibernate, Rest, MySQL, MongoDB;
                    <br />
                    • Drupal e Magento;
                    <br />
                    • Microsserviços (básico; cursando os níveis intermediário e
                    avançado);
                    <br />
                    • Docker e Kubernetes (básico);
                    <br />
                    • Salesforce (básico);
                    <br />
                    • Cloud (básico de AWS; app Spring/Ionic com bucket de
                    imagens hospedado e com exemplo publicado na Play Store;
                    certificado de 15 horas de treinamento em nível mais
                    avançado);
                    <br />
                    • Programação em ambiente de desenvolvimento de software
                    Borland Delphi, incluindo Delphi Mobile;
                    <br />
                    • UNIX: Solaris (Sun Microsystems - Interface GNOME Desktop,
                    CDE e Java Desktop System - Instalação e administração desde
                    plataformas Ultra SPARC II a Intel/AMD x86 e x64);
                    <br />
                    • Linux;
                    <br />
                    • Microsoft Windows: remoção de vírus e trojans;
                    <br />
                    • Redes de computadores;
                    <br />
                    • Adobe Photoshop, Adobe Premiere, Adobe After Effects,
                    Vegas Pro, Sound Forge;
                    <br />• Instalação de Sistemas Operacionais e manutenção de
                    computadores.
                  </p>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />

                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      FORMAÇÃO ESCOLAR
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <p className="mb-4 rounded-b-xl bg-[#e7eaf7] p-4">
                    <strong>LICENCIATURA PLENA EM HISTÓRIA (COMPLETO)</strong>
                    <br />
                    Universidade Federal Rural de Pernambuco - UFRPE
                    <br />
                    <br />
                    <strong>
                      ANÁLISE E DESENVOLVIMENTO DE SISTEMAS (TCC PENDENTE)
                    </strong>
                    <br />
                    Instituto Federal de Educação, Ciência e Tecnologia de
                    Pernambuco - IFPE
                  </p>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />

                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      EXPERIÊNCIA PROFISSIONAL
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <p className="mb-4 rounded-b-xl bg-[#e7eaf7] p-4">
                    <strong>ACCENTURE DO BRASIL </strong>
                    <br />
                    <strong>Função:</strong> Analista Pleno;
                    <br />
                    <strong>Período:</strong> 02/01/2019 a 10/11/2020.
                    <br />
                    <br />
                    <strong>QUALIHOUSE AUTOMAÇÃO</strong>
                    <br />
                    <strong>Função:</strong> Pesquisa e Desenvolvimento;
                    <br />
                    <strong>Período:</strong> 01/03/2014 a 30/11/2014.
                    <br />
                    <br />
                    <strong>
                      DGTI – Departamento de Gestão de Tecnologia da Informação
                      - IFPE
                    </strong>
                    <br />
                    <strong>Função:</strong> Estagiário (Redes de computadores);
                    <br />
                    <strong>Período:</strong> 01/17/2011 a 01/07/2013.
                    <br />
                    <br />
                    <strong>NETBOX Informática</strong>
                    <br />
                    <strong>Função:</strong> Técnico em Informática;
                    <br />
                    <strong>Período:</strong> 01/12/2007 a 02/09/2009.
                    <br />
                    <br />
                    <strong>
                      CDI-PE (Comitê para a Democratização da Informática –
                      Pernambuco - ITEP)
                    </strong>
                    <br />
                    <strong>Função:</strong> Suporte Técnico (contrato
                    temporário);
                    <br />
                    <strong>Período:</strong> 08/2006 a 12/2006.
                    <br />
                    <br />
                    <strong>
                      PROGRAMA ENTER JOVEM – CDI (Comitê para a Democratização
                      da Informática – Pernambuco - ITEP)
                    </strong>
                    <br />
                    <strong>Função:</strong> Voluntário e Educador (com cursos
                    de capacitação) da Escola de Informática e Cidadania (EIC)
                    Cultura Digital, voltada para inclusão digital de jovens e
                    adultos de comunidades carentes;
                    <br />
                    <strong>Período:</strong> 05/2005 a 07/2007.
                  </p>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />

                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      CERTIFICAÇÕES
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <p className="mb-4 rounded-b-xl bg-[#e7eaf7] p-4">
                    <b>SCRUM FOUNDATION PROFESSIONAL CERTIFICATE (SFPC)</b>
                    <br />
                    CertiProf ID: 11565972566844
                    <Image
                      src={certiprof}
                      alt="Scrum Foundation Professional Certificate (SFPC)"
                      priority={true}
                      width={600}
                      height={424}
                      placeholder="blur"
                    />
                  </p>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />

                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      BADGES
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <div className="rounded-b-xl bg-[#e7eaf7]">
                    <p className="mb-4 bg-[#e7eaf7] p-4 text-justify">
                      Estou sempre estudando, seja através de cursos, livros e
                      treinamentos online. Alguns badges a seguir são minhas
                      conquistas mais recentes:
                    </p>
                    <div className="mb-4 grid grid-cols-3 place-items-center gap-3 rounded-b-xl bg-[#e7eaf7] p-4">
                      <Link
                        href="https://api.badgr.io/public/assertions/v41PgtguSlC57_0CPuXChA"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge01}
                            alt="Containers e Docker"
                            priority={true}
                            width={200}
                            height={200}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/6lo8JyZRSnSAbJO_rkvJbw"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge02}
                            alt="Deploy no Kubernetes"
                            priority={true}
                            width={200}
                            height={200}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/Cc0WsvzzSX2C_g0TrZcKAg"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge03}
                            alt="Pipelines CI/CD"
                            priority={true}
                            width={200}
                            height={200}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/PPvlPo7vQQyysdT_Z2nFHg"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge04}
                            alt="Explorador - Containers e Docker"
                            priority={true}
                            width={200}
                            height={200}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/dnjH7Kr2Qw2Tp97oneSXsg"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge05}
                            alt="Desbravador - Deploy no Kubernetes"
                            priority={true}
                            width={200}
                            height={200}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/L7ZYNG9wTaKmxZ4mbtbi4w"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge06}
                            alt="Reactive Spring"
                            priority={true}
                            width={200}
                            height={200}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/KYfMApz3TFy2oeg8ErxRGA"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge07}
                            alt="Scrum Foundation Professional Certificate - SFPC"
                            priority={true}
                            width={150}
                            height={150}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/q_mtqixUTYiDPnIwgtUk3g"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge08}
                            alt="Certiprof - Lifelong Learning"
                            priority={true}
                            width={150}
                            height={150}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/zEjvYeCZQRu3mfsn29F8zQ"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge09}
                            alt="Iniciativa DevOps - Docker"
                            priority={true}
                            width={450}
                            height={450}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/LR_Z4c1YQS6CWh66fNRVkA"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge10}
                            alt="Iniciativa DevOps - Kubernetes"
                            priority={true}
                            width={450}
                            height={450}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/4AaoXeo8QbOm_XXZwWmxJg"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge11}
                            alt="Iniciativa DevOps - Terrafom"
                            priority={true}
                            width={450}
                            height={450}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/hNpWmgL6Roqt3wKGIgH03g"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge12}
                            alt="Iniciativa DevOps - CI/CD"
                            priority={true}
                            width={450}
                            height={450}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>

                      <Link
                        href="https://api.badgr.io/public/assertions/NqhXCgplQ0ebva0ljFu5wA"
                        passHref
                      >
                        <a
                          className={
                            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={badge13}
                            alt="Iniciativa DevOps - Prometheus e Grafana"
                            priority={true}
                            width={450}
                            height={450}
                            placeholder="blur"
                          />

                          <div className="flex justify-center">
                            <button
                              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
                              onClick={() => {}}
                            >
                              Saiba mais
                            </button>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />
              </motion.div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
