import React from 'react'
import { useLanguages } from '../hooks/useLanguages'

const Footer = () => {
  const t = useLanguages()

  return (
    <div className="lg:mt-18 bottom-0 mt-2 py-6 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 text-gray-800 dark:text-white">
        <div className="dark:border-white-300 border-t-2 border-gray-300 pb-6" />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* <div className="flex flex-1 flex-wrap space-x-2 pt-2 text-center font-medium sm:space-x-4 lg:pt-0" /> */}
          <p className="mt-auto text-xs text-center mx-auto">
            &copy; 2022-{new Date().getFullYear()} - {t.footer_text1}
            <a
              href="https://nextjs.org/"
              className={
                'font-medium tracking-wider transition-colors hover:text-yellow-500'
              }
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <strong className="italic">Next.js</strong>
            </a>{' '}
            {t.footer_text2}
            <a
              href="https://tailwindcss.com/"
              className={
                'font-medium tracking-wider transition-colors hover:text-yellow-500'
              }
              target="_blank"
              rel="noreferrer"
            >
              <strong className="italic">Tailwind CSS</strong>
            </a>
            {t.footer_text3}
            <em>Deploy</em>
            {t.footer_text4}
            <a
              href="https://vercel.com/"
              className={
                'font-medium tracking-wider transition-colors hover:text-yellow-500'
              }
              target="_blank"
              rel="noreferrer"
            >
              <strong className="italic">Vercel</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
