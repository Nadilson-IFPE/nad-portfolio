import React from 'react'

export default function Blog() {
  return (
    <div className="container mx-auto px-4 flex-1 flex justify-center pt-5">
      <div className="item-center flex flex-col-reverse lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Blog
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              TO-DO
              <br /> <br />
              <p className="mb-4">
                (Clique no link a seguir para ver o protótipo:{' '}
                <a
                  href="https://nadblog.vercel.app/"
                  className={
                    'font-medium tracking-wider transition-colors hover:text-yellow-500 dark:text-white'
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  https://nadblog.vercel.app/
                </a>
                )
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
