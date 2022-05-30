import React from 'react'

const Footer = () => {
  return (
    <div className="lg:mt-18 bottom-0 mt-12 py-6 sm:py-12 sm:pb-36">
      <div className="mx-auto max-w-4xl px-4 text-gray-800 dark:text-white">
        <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-1 flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0" />
          <p className="text-right">
            &copy; {new Date().getFullYear()} - Portfólio construído com{' '}
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
            e{' '}
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
            , com <em>Deploy</em> em{' '}
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
