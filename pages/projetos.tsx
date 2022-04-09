import React from 'react'
import { motion } from 'framer-motion'
import loadTransitions from '../ANIM/loadTransitions'

function Projetos() {
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
              Projetos
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">TO-DO</p>
            </div>
          </div>
        </div>
      </motion.h1>
    </div>
  )
}

export default loadTransitions(Projetos)
