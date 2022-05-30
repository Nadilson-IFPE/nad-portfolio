import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import FavIcon from '../components/FavIcon'

const Projetos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Site pessoal de Nadilson J. R. Teixeira - Projetos</title>
        <FavIcon />
      </Head>

      <div className="mx-auto flex justify-center space-y-14 px-4 pt-5 lg:space-y-24">
        <div className="item-center mx-auto flex flex-col-reverse lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
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
                Alguns projetos
              </h1>
              <br />
            </motion.div>

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
              <div className="mx-auto grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <article className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50">
                  <div className="shadow-indigo-500/50dark:border-gray-700 max-w-sm overflow-hidden rounded-2xl dark:bg-gray-800">
                    <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
                      <img
                        className="aspect-auto h-auto w-full max-w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
                        src="/images/projetos/projeto_portfolio.png"
                        alt="Portfólio"
                      />
                      <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
                        01
                      </h1>
                    </div>

                    {/* <div className="rounded-b-2xl px-4 py-2 lg:h-44">
                      <div className="title-font mb-2 font-bold">Portfólio</div>

                      <p className="text-justify text-sm font-semibold">
                        Criado para aprendizado em Next.js e Tailwind CSS e para
                        divulgação de minhas atividades.
                      </p>
                    </div> */}

                    <div className="px-4 py-2 lg:h-44">
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Portfólio
                      </h1>
                      <p className="mb-2 break-words text-justify text-sm font-semibold text-gray-700 dark:text-gray-400">
                        Criado para aprendizado em Next.js e Tailwind CSS e para
                        divulgação de minhas atividades.
                      </p>
                    </div>

                    <div className="mb-4 px-4 pt-4">
                      <a
                        href="https://github.com/Nadilson-IFPE/nad-portfolio"
                        className="inline-block cursor-pointer rounded-lg bg-[#ccd2e7] px-4 py-2 text-sm font-semibold tracking-tight text-white no-underline hover:bg-blue-700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Acessar código-fonte
                      </a>
                    </div>
                  </div>
                </article>

                <article className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50">
                  <div className="shadow-indigo-500/50dark:border-gray-700 max-w-sm overflow-hidden rounded-2xl dark:bg-gray-800">
                    <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
                      <img
                        className="w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
                        src="/images/projetos/socialis_app.png"
                        alt="Socialis"
                      />
                      <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
                        02
                      </h1>
                    </div>

                    {/* <div className="rounded-b-2xl px-4 py-2 lg:h-44">
                      <div className="title-font mb-2 font-bold">Socialis</div>

                      <p className="text-justify text-sm font-semibold">
                        Socialis é um navegador de redes sociais. Com ele, é
                        possível salvar e compartilhar alguns vídeos e imagens.
                        Possui uma biblioteca em C++ responsável pelo acesso ao
                        app e suporte a 6 idiomas. Infelizmente, a versão
                        gratuita foi derrubada. O código-fonte por enquanto não
                        está disponível.
                      </p>
                    </div> */}

                    <div className="px-4 py-2 lg:h-44">
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Socialis
                      </h1>
                      <p className="mb-2 break-words text-justify text-sm font-semibold text-gray-700 dark:text-gray-400">
                        Socialis é um navegador de redes sociais. Com ele, é
                        possível salvar e compartilhar alguns vídeos e imagens.
                        Possui uma biblioteca em C++ responsável pelo acesso ao
                        app e suporte a 6 idiomas. Infelizmente, a versão
                        gratuita foi derrubada. O código-fonte por enquanto não
                        está disponível.
                      </p>
                    </div>

                    <div className="mb-4 px-4 pt-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nadilson.socialis"
                        className="mr-2 mb-3 inline-block cursor-pointer rounded-lg bg-[#ccd2e7] px-4 py-2 text-sm font-semibold tracking-tight text-white no-underline hover:bg-blue-700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Acessar app na Play Store
                      </a>
                    </div>
                  </div>
                </article>

                <article className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50">
                  <div className="shadow-indigo-500/50dark:border-gray-700 max-w-sm overflow-hidden rounded-2xl dark:bg-gray-800">
                    <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
                      <img
                        className="w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
                        src="/images/projetos/sistema_de_pedidos.png"
                        alt="Sistema de Pedidos"
                      />
                      <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
                        03
                      </h1>
                    </div>

                    {/* <div className="rounded-b-2xl px-4 py-2 lg:h-44">
                      <div className="title-font mb-2 font-bold">
                        Sistema de Pedidos
                      </div>

                      <p className="text-justify text-sm font-semibold">
                        App criado durante o curso "Spring Boot, Hibernate,
                        REST, Ionic, JWT, S3, MySQL, MongoDB", do Profº Drº
                        Nelio Alves, na Udemy. Trata-se de um app de e-commerce
                        que simula a transação com cartão ou boleto e envia
                        e-mail confirmando a compra fictícia. Código-fonte no
                        meu Github.
                      </p>
                    </div> */}

                    <div className="px-4 py-2 lg:h-44">
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sistema de Pedidos
                      </h1>
                      <p className="mb-2 break-words text-justify text-sm font-semibold text-gray-700 dark:text-gray-400">
                        App criado durante o curso "Spring Boot, Hibernate,
                        REST, Ionic, JWT, S3, MySQL, MongoDB", do Profº Drº
                        Nelio Alves, na Udemy. Trata-se de um app de e-commerce
                        que simula a transação com cartão ou boleto e envia
                        e-mail confirmando a compra fictícia. Código-fonte no
                        meu Github.
                      </p>
                    </div>

                    <div className="mb-4 px-4 pt-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.nadilson.nadspringbootionic"
                        className="mr-2 mb-3 inline-block cursor-pointer rounded-lg bg-[#ccd2e7] px-4 py-2 text-sm font-semibold tracking-tight text-white no-underline hover:bg-blue-700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Acessar app na Play Store
                      </a>
                    </div>
                  </div>
                </article>

                <article className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50">
                  <div className="shadow-indigo-500/50dark:border-gray-700 max-w-sm overflow-hidden rounded-2xl dark:bg-gray-800">
                    <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
                      <img
                        className="aspect-auto h-auto max-w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
                        src="/images/projetos/projeto_dsdelivery.png"
                        alt="DS Delivery"
                      />
                      <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
                        04
                      </h1>
                    </div>

                    {/* <div className="rounded-b-2xl px-4 py-2 lg:h-44">
                      <div className="title-font mb-2 font-bold">
                        DS Delivery
                      </div>

                      <p className="text-justify text-sm font-semibold">
                        Criado na Semana DevSuperior SD-2. O projeto consiste em
                        um sistema de registro e entrega de pedidos. Utilizamos
                        Java com Spring Boot, React, TypeScript e implantação na
                        Heroku (plataforma PaaS que suporta várias linguagens de
                        programação) e na Netlify. Link para live demo está no
                        repositório.
                      </p>
                    </div> */}

                    <div className="px-4 py-2 lg:h-44">
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        DS Delivery
                      </h1>
                      <p className="mb-2 break-words text-justify text-sm font-semibold text-gray-700 dark:text-gray-400">
                        Criado na Semana DevSuperior SD-2. O projeto consiste em
                        um sistema de registro e entrega de pedidos. Utilizamos
                        Java com Spring Boot, React, TypeScript e implantação na
                        Heroku (plataforma PaaS que suporta várias linguagens de
                        programação) e na Netlify. Link para live demo está no
                        repositório.
                      </p>
                    </div>

                    <div className="mb-4 px-4 pt-4">
                      <a
                        href="https://github.com/Nadilson-IFPE/dsdeliver-sds2"
                        className="mr-2 mb-3 inline-block cursor-pointer rounded-lg bg-[#ccd2e7] px-4 py-2 text-sm font-semibold tracking-tight text-white no-underline hover:bg-blue-700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Acessar código-fonte
                      </a>
                    </div>
                  </div>
                </article>

                <article className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50">
                  <div className="shadow-indigo-500/50dark:border-gray-700 rounded-2xldark:bg-gray-800 max-w-sm overflow-hidden">
                    <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
                      <img
                        className="w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
                        src="/images/projetos/projeto_blog.png"
                        alt="Blog"
                      />
                      <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
                        05
                      </h1>
                    </div>

                    {/* <div className="rounded-b-2xl px-4 py-2 lg:h-44">
                      <div className="title-font mb-2 font-bold">Blog</div>

                      <p className="text-justify text-sm font-semibold">
                        Criado para aprendizado em Next.js e Tailwind CSS
                        (protótipo construído via tutorial da Traversy Media).
                      </p>
                    </div> */}

                    <div className="px-4 py-2 lg:h-44">
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Blog
                      </h1>
                      <p className="mb-2 break-words text-justify text-sm font-semibold text-gray-700 dark:text-gray-400">
                        Criado para aprendizado em Next.js e Tailwind CSS
                        (protótipo construído via tutorial da Traversy Media).
                      </p>
                    </div>

                    <div className="mb-4 px-4 pt-4">
                      <a
                        href="https://github.com/Nadilson-IFPE/nadblog"
                        className="mr-2 mb-3 inline-block cursor-pointer rounded-lg bg-[#ccd2e7] px-4 py-2 text-sm font-semibold tracking-tight text-white no-underline hover:bg-blue-700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Acessar código-fonte
                      </a>
                    </div>
                  </div>
                </article>

                <article className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50">
                  <div className="shadow-indigo-500/50dark:border-gray-700 max-w-sm overflow-hidden rounded-2xl dark:bg-gray-800">
                    <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
                      <img
                        className="w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
                        src="/images/projetos/projeto_outros.png"
                        alt="Outros"
                      />
                      <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
                        06
                      </h1>
                    </div>

                    {/* <div className="rounded-b-2xl px-4 py-2 lg:h-44">
                      <div className="title-font mb-2 font-bold">Outros</div>

                      <p className="text-justify text-sm font-semibold">
                        Você pode ver outros projetos acessando meus
                        repositórios no Github. Alguns repositórios contêm
                        códigos ainda incompletos.
                      </p>
                    </div> */}

                    <div className="px-4 py-2 lg:h-44">
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Outros
                      </h1>
                      <p className="mb-2 break-words text-justify text-sm font-semibold text-gray-700 dark:text-gray-400">
                        Você pode ver outros projetos acessando meus
                        repositórios no Github. Alguns repositórios contêm
                        códigos ainda incompletos e vários ainda estão em modo
                        privado.
                      </p>
                    </div>

                    <div className="mb-4 px-4 pt-4">
                      <a
                        href="https://github.com/Nadilson-IFPE?tab=repositories"
                        className="mr-2 mb-3 inline-block cursor-pointer rounded-lg bg-[#ccd2e7] px-4 py-2 text-sm font-semibold tracking-tight text-white no-underline hover:bg-blue-700"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Acessar Github
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projetos
