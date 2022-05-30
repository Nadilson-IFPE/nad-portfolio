import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Post from '../../models/post'
import Link from 'next/link'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import FavIcon from './../../components/FavIcon'

const PostPage: NextPage<Post> = ({
  frontmatter: { titulo, resumo, data, capa, autor, autor_img },
  slug,
  content,
}: Post) => {
  return (
    <>
      <div className="mx-auto justify-center space-y-14 px-4 pt-5 lg:space-y-24">
        <Head>
          <title>
            Site pessoal de Nadilson J. R. Teixeira - Blog: {titulo}
          </title>
          <FavIcon />
        </Head>

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
          <article className="shadow-[0 4px 8px 0 rgba(161, 193, 240, 0.2)] prose mx-auto mt-8 rounded-xl border border-gray-200 bg-white shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-[#e7eaf7] dark:shadow-indigo-500/50 md:prose-lg lg:prose-xl">
            <div className="shadow-indigo-500/50">
              <Link href="/blog">
                <a className="bg-[#ccd2e7] py-1 px-3 text-center font-medium text-white no-underline hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-800">
                  Voltar
                </a>
              </Link>
            </div>

            <h1 className="p-4 pt-6 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {titulo}
            </h1>
            <div className="flex aspect-auto items-center justify-center">
              <img
                className="mt-2 mb-2 aspect-auto h-auto max-w-full object-cover lg:mb-2"
                src={capa}
                alt={titulo}
              />
            </div>
            <div className="bg-[#f4f4f4] px-4 dark:bg-slate-200 dark:text-black">
              <div>
                <strong>Postado em: </strong>
                {data}
              </div>
              <div>
                <strong>Autor: </strong>
                {autor}
              </div>
            </div>

            <div className="blog_post-body h-auto max-w-full rounded-xl p-4 text-justify dark:bg-[#e7eaf7]">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </article>
        </motion.div>
      </div>
    </>
  )
}

export default PostPage

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const markeddownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markeddownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
