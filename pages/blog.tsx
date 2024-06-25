import Head from 'next/head'
import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../models/post'
import { GetStaticPropsContext, NextPage } from 'next'
import FavIcon from '../components/FavIcon'
import BlogCard from '../components/BlogCard'
import { useLanguages } from '../hooks/useLanguages'
import {
  BottomToTopAnimation,
  TopToBottomAnimation,
} from '../components/Animations'
import { useRouter } from 'next/router'
import timeToReadText from '../helpers/timeToReadText'

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

function estimatedReadingTime(text: string, locale: string | undefined) {
  const resultado = timeToReadText(text);

  if (locale === 'pt') {
    return resultado === '1' ? resultado + ' minuto de leitura' : resultado + ' minutos de leitura';
  } else {
    return resultado === '1' ? resultado + ' minute of reading' : resultado + ' minutes of reading';
  }
}

const Blog: NextPage<BlogProps> = ({ posts }: BlogProps) => {
  const t = useLanguages()
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <title>{t.blog_page_title}</title>
        <FavIcon />
      </Head>

      <div className="mx-auto flex justify-center space-y-14 px-4 pt-5 lg:space-y-24">
        <div className="item-center mx-auto flex flex-col-reverse lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
          <div className="shadow-indigo-500/50 lg:mt-2 lg:px-4">
            <BottomToTopAnimation>
              <h1 className="text-center text-2xl font-bold text-gray-900 underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-4xl">
                {t.blog_page_header}
              </h1>

              <br />
            </BottomToTopAnimation>

            <TopToBottomAnimation>
              <div className="mx-auto grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {posts.map((post, idx) => {
                  return (
                    <BlogCard
                      key={idx}
                      cardIndex={idx}
                      cardNumber={precedaComZero(posts.length - idx)}
                      cardImage={`${post.frontmatter.post_thumbnail}`}
                      cardImageAlt={post.frontmatter.post_title}
                      postDate={post.frontmatter.post_date}
                      author={post.frontmatter.post_author}
                      authorImage={post.frontmatter.post_author_img}
                      authorEmail={post.frontmatter.post_author_email}
                      title={post.frontmatter.post_title}
                      description={post.frontmatter.post_summary}
                      btnLink={`/blog/${encodeURIComponent(post.slug)}`}
                      btnText={t.blogcard_button_caption}
                      postReadingTime={estimatedReadingTime(post.content, locale)}
                    />
                  )
                })}
              </div>
            </TopToBottomAnimation>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  // Obtém os arquivos do diretório "posts"
  const files = fs.readdirSync(path.join('posts'))

  // Obtém o slug e o frontmatter do diretório "posts"
  const postsData = files.map((fileName) => {
    // Cria o slug (título/nome do arquivo ".md" sem a extensão)
    // const slug = fileName.replace('.md', '')

    // Obtém o frontmatter (assunto ou conteúdo dos arquivos ".md" para transformar em
    // em texto humanamente legível no formato HTML)
    const markdownWithMeta = fs.readFileSync(
      path.join('posts/' + fileName + `/${locale}.md`),
      'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
      slug: fileName,
      frontmatter,
      content,
    }
  })

  const posts = JSON.parse(JSON.stringify(postsData))

  return {
    props: {
      posts: posts.sort(
        (
          post1: { frontmatter: { data: string | number | Date } },
          post2: { frontmatter: { data: string | number | Date } }
        ) =>
          new Date(post1.frontmatter.data).toLocaleDateString('pt-BR') <
            new Date(post2.frontmatter.data).toLocaleDateString('pt-BR')
            ? 1
            : -1
      ),
    },
  }
}

export default Blog
