import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BottomToTopAnimation,
  LeftToRightAnimation,
  RightToLeftAnimation,
  TopToBottomAnimation,
} from '@/components/Animations'
import { useLanguages } from '@/hooks/useLanguages'
import under_construction from '/public/images/under-construction.svg'

const UnderConstruction: NextPage = () => {
  const t = useLanguages()
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex max-w-2xl flex-col items-center justify-center">
        <div>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-40 w-40 text-yellow-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg> */}
          <TopToBottomAnimation>
            <Image src={under_construction} height={150} width={150} alt='' />
          </TopToBottomAnimation>
        </div>
        <RightToLeftAnimation>
          <h1 className="mb-2 mt-4 text-center text-4xl font-bold text-purple-100">
            {t.blog_page_update_caption}
          </h1>
        </RightToLeftAnimation>
        <LeftToRightAnimation>
          <p
            className="break-words p-[30px] text-center text-gray-100"
            dangerouslySetInnerHTML={{ __html: t.blog_page_update_info }}
          />
        </LeftToRightAnimation>

        <BottomToTopAnimation>
          <div className="mx-auto bg-black pt-4">
            <Link href="/">
              <a
                className={
                  'text-sm font-bold tracking-wider text-white transition-colors hover:text-yellow-500 dark:text-white dark:hover:text-yellow-500'
                }
              >
                <p>{t.my_404_error_page_go_back_link}</p>
              </a>
            </Link>
          </div>
        </BottomToTopAnimation>
      </div>
    </div>
  )
}

export default UnderConstruction
