import React from 'react'
import { motion } from 'framer-motion'
import loadTransitions from '../ANIM/loadTransitions'

function Blog() {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 50,
  }

  return (
    <div className="container mx-auto flex flex-1 justify-center px-4 pt-5">
      <motion.h1
        transition={config}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
      >
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
      </motion.h1>
    </div>
  )
}

export default loadTransitions(Blog)
