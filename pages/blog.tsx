import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../models/post'
import { NextPage } from 'next'
import Link from 'next/link'
import FavIcon from '../components/FavIcon'

type BlogProps = {
  posts: Array<Post>
}

const sortByDate = (
  a: { frontmatter: { data: string | number | Date } },
  b: { frontmatter: { data: string | number | Date } }
) => {
  var data1 = new Date(a.frontmatter.data).toLocaleDateString('pt-BR')
  var data2 = new Date(b.frontmatter.data).toLocaleDateString('pt-BR')
  if (data1 < data2) {
    return 1
  } else if (data1 > data2) {
    return -1
  } else {
    return 0
  }
}

function precedaComZero(numero: number) {
  return (numero < 10 ? '0' : '') + numero
}

const Blog: NextPage<BlogProps> = ({ posts }: BlogProps) => {
  return (
    <>
      <Head>
        <title>Site pessoal de Nadilson J. R. Teixeira - Blog</title>
        <FavIcon />
      </Head>

      <div className="mx-auto flex justify-center space-y-14 px-4 pt-5 lg:space-y-24">
        <div className="item-center mx-auto flex flex-col-reverse lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
          <div className="shadow-indigo-500/50 lg:mt-6 lg:px-4">
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
                Blog
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
                {posts.map((post, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                    >
                      <article
                        key={idx}
                        className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50"
                      >
                        <div className="shadow-indigo-500/50dark:border-gray-700 max-w-sm overflow-hidden rounded-2xl dark:bg-gray-800">
                          <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
                            <img
                              className="aspect-auto h-auto max-w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
                              src={post.frontmatter.capa_posts_list}
                              alt={post.frontmatter.titulo}
                            />

                            <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
                              {precedaComZero(idx + 1)}
                            </h1>
                          </div>
                          <div className="bg-[#f4f4f4] p-2 dark:bg-slate-200 dark:text-black">
                            <strong>Postado em: </strong>
                            {post.frontmatter.data}
                          </div>
                          <div className="bg-[#f4f4f4] p-2 dark:bg-slate-200 dark:text-black">
                            <div className="flex-cols-2 flex md:flex-row">
                              <div>
                                <strong>Autor: </strong>
                                {post.frontmatter.autor}
                              </div>
                              <img
                                className="ml-2 rounded-full"
                                src={post.frontmatter.autor_img}
                                height="30"
                                width="30"
                                alt={post.frontmatter.autor}
                              />
                            </div>
                          </div>

                          {/* <div className="rounded-b-2xl px-4 py-2 lg:h-44">
                          <div className="mb-2 font-bold tracking-tight">
                            {post.frontmatter.titulo}
                          </div>

                          <p className="break-words font-semibold">
                            {post.frontmatter.resumo}
                          </p>
                        </div> */}

                          <div className="px-4 py-2 lg:h-44">
                            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {post.frontmatter.titulo}
                            </h1>
                            <p className="mb-2 break-words text-sm font-semibold text-gray-700 dark:text-gray-400">
                              {post.frontmatter.resumo}
                            </p>
                          </div>
                          <div className="mb-4 px-4 pt-4">
                            <Link
                              href={`/blog/${encodeURIComponent(post.slug)}`}
                            >
                              <a className="inline-flex items-center rounded-lg bg-[#ccd2e7] py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                                Leia mais
                              </a>
                            </Link>
                          </div>
                        </div>
                      </article>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Obtém os arquivos do diretório "posts"
  const files = fs.readdirSync(path.join('posts'))

  // Obtém o slug e o frontmatter do diretório "posts"
  const posts = files.map((fileName) => {
    // Cria o slug (título/nome do arquivo ".md" sem a extensão)
    const slug = fileName.replace('.md', '')

    // Obtém o frontmatter (assunto ou conteúdo dos arquivos ".md" para transformar em
    // em texto humanamente legível no formato HTML)
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', fileName),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    // Retorna o título/nome do arquivo (sem a extensão) e o conteúdo formatado para HTML.
    // Nesta página, retonará o título, que virará o URL a ser acessado. O conteúdo aqui
    // será apenas as informações que constam nos arquivos ".md", como, por exemplo, as
    // que estão antes do conteúdo:

    // ---
    // titulo: 'MEU_TÍTULO'
    // data: 'MINHA_DATA'
    // resumo: 'MEU_RESUMO_DA_POSTAGEM'
    // capa: 'LINK_PARA_A_IMAGEM_DE_CAPA'
    // capa_posts_list: 'LINK_PARA_A_IMAGEM_DE_CAPA_EXIBIDA_NA_LISTA_DE_POSTAGENS'
    // video: 'LINK_PARA_O_VÍDEO_(SE_HOUVER!)'
    // autor: 'NOME_DO_AUTOR_DA_POSTAGEM'
    // autor_img: 'LINK_PARA_IMAGEM_DO_AUTOR'
    // ---
    //
    //
    // No arquivo "[slug].tsx" haverá o item "content", que retornará algumas informações
    // sobre a postagem e o conteúdo da postagem, isto é, o texto principal da publicação.
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort((post1, post2) =>
        new Date(post1.frontmatter.data).toLocaleDateString('pt-BR') >
        new Date(post2.frontmatter.data).toLocaleDateString('pt-BR')
          ? -1
          : 1
      ),
    },
  }
}

export default Blog
