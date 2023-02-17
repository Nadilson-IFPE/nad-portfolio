import Link from 'next/link'
import { useLanguages } from '../hooks/useLanguages'

interface BlogCardProps {
  key: number
  cardIndex: number
  cardNumber: string
  cardImage: string
  cardImageAlt?: string
  postDate: string
  author?: string
  authorImage?: string
  authorEmail?: string
  title: string
  description: string
  btnLink: string
  btnText: string
}

const BlogCard = ({
  cardIndex,
  cardNumber,
  cardImage,
  cardImageAlt,
  postDate,
  author,
  authorImage,
  authorEmail,
  title,
  description,
  btnLink,
  btnText,
}: BlogCardProps) => {
  const t = useLanguages()

  return (
    <Link key={cardIndex} href={btnLink} passHref>
      <article
        id={`${'BlogCard_'}${cardNumber}`}
        key={Math.random()}
        className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50"
      >
        <div className="shadow-indigo-500/50dark:border-gray-700 max-w-sm overflow-hidden rounded-2xl dark:bg-gray-800">
          <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
            <img
              className="aspect-auto h-auto max-w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
              src={cardImage}
              alt={cardImageAlt}
            />

            <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
              {cardNumber}
            </h1>
          </div>
          <div className="bg-[#f4f4f4] p-2 dark:bg-slate-200 dark:text-black">
            <strong>{t.blogcard_post_date} </strong>
            {postDate}
          </div>
          <div className="bg-[#f4f4f4] p-2 dark:bg-slate-200 dark:text-black">
            <div className="flex items-center gap-x-2">
              <div>
                <strong>{t.blogcard_author_name} </strong>
              </div>
              <img
                className="h-7 w-7 rounded-full object-cover"
                src={authorImage}
                height="30"
                width="30"
                alt={author}
              />
              <div>
                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                  {author}
                </h2>
                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                  {authorEmail}
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 lg:h-44">
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="mb-2 break-words text-sm font-semibold text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div className="mb-4 px-4 pt-4">
            <Link href={btnLink} passHref>
              <a className="inline-flex items-center rounded-lg bg-[#ccd2e7] py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                {btnText}
              </a>
            </Link>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
