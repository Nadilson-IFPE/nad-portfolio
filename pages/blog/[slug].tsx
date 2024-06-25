import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Post from '../../models/post'
import Link from 'next/link'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { useLanguages } from '../../hooks/useLanguages'
import { useRouter } from 'next/router'

type GetStaticPathsContext = {
  locale?: string
  locales?: string[]
  defaultLocale?: string
}

const PostPage: NextPage<Post> = ({
  frontmatter: {
    post_author,
    post_author_img,
    post_author_email,
    post_cover,
    post_thumbnail,
    post_date,
    post_title,
    post_title_english,
    post_sumary,
    post_sumary_english,
    post_video,
  },
  slug,
  content,
}: Post) => {
  const t = useLanguages()
  const { locale } = useRouter()


  return post_title !== '' ? (
    <>
      <div className="mx-auto justify-center space-y-14 px-4 pt-5 lg:space-y-24">
        <Head>
          <title>
            {t.blog_article_page_title}
            {post_title}
          </title>
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
                  {t.blog_btn_goback}
                </a>
              </Link>
            </div>

            <h1 className="p-4 pt-6 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {post_title}
            </h1>
            <div className="flex aspect-auto items-center justify-center">
              <img
                className="mt-2 mb-2 aspect-auto h-auto max-w-full object-cover lg:mb-2"
                src={post_cover}
                alt={post_title}
              />
            </div>
            <div className="bg-[#f4f4f4] px-4 dark:bg-slate-200 dark:text-black">
              <div>
                <strong>{t.blogcard_post_date}</strong>
                {post_date}
              </div>
              <div>
                <strong>{t.blogcard_author_name}</strong>
                {post_author}
              </div>
            </div>

            <div className="h-auto max-w-full rounded-xl p-4 text-justify dark:bg-[#e7eaf7]">
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
          </article>
        </motion.div>
      </div>
    </>
  ) : (
    <>
      <h1>Sorry!</h1>
      {locale === 'en' && (
        <p>Sorry, this entry is not available yet in English.</p>
      )}
    </>
  )
}

export default PostPage

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const files = fs.readdirSync(path.join('posts'))

  /* const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  } */
  const pathsArray: { params: { slug: string }; locale: string }[] = []
  files.map((dirname) => {
    locales?.map((language: string) => {
      pathsArray.push({ params: { slug: dirname }, locale: language })
    })
  })

  return {
    paths: pathsArray,
    fallback: false,
  }
}

export async function getStaticProps({
  locale,
  params: { slug },
}: {
  locale: string
  params: { slug: string }
}) {
  const markeddownWithMeta = fs.readFileSync(
    path.join('posts/' + slug + `/${locale}.md`),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markeddownWithMeta)

  return {
    props: {
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
      slug,
      content,
    },
  }
}
