import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ChildrenProps {
  children: ReactNode
}

export function ShowTextAnimation({ children }: ChildrenProps): JSX.Element {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RotateZAnimation({ children }: ChildrenProps) {
  return (
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
      {children}
    </motion.div>
  )
}

export function SlideUpAnimation({ children }: ChildrenProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
          top: '100vh',
          scale: 0.4,
        },
        animate: {
          opacity: 1,
          top: '0vh',
          scale: 1,
        },
        exit: {
          opacity: 0,
          top: '100vh',
          scale: 0.4,
        },
      }}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  )
}

export function SlideRightAnimation({ children }: ChildrenProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
          left: '-100%',
          scale: 0.6,
        },
        animate: {
          opacity: 1,
          left: 0,
          scale: 1,
        },
        exit: {
          opacity: 0,
          left: '100%',
          scale: 0.6,
        },
      }}
      transition={{
        duration: 0.7,
      }}
    >
      {children}
    </motion.div>
  )
}

export function ShowPageAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      variants={{
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
      }}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
      className=""
    >
      {children}
    </motion.main>
  )
}

export function LeftToRightAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          x: '300px',
          opacity: 0,
        },
        visible: {
          x: '0',
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.main>
  )
}

export function RightToLeftAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          x: '-300px',
          opacity: 0,
        },
        visible: {
          x: '0',
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.main>
  )
}

export function BottomToTopAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          y: '300px',
          opacity: 0,
        },
        visible: {
          y: '0px',
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 1,
            duration: 1.5,
          },
        },
      }}
    >
      {children}
    </motion.main>
  )
}

export function TopToBottomAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          y: '-300px',
          opacity: 0,
        },
        visible: {
          y: '0px',
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 1,
            duration: 1.5,
          },
        },
      }}
    >
      {children}
    </motion.main>
  )
}

export function FlipAnimationAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      initial={{ rotateY: 180 }}
      animate={{ rotateY: 170 }}
      transition={{ duration: 3 }}
      exit={{ rotateY: 170, transition: { duration: 3 } }}
    >
      {children}
    </motion.main>
  )
}

export function FadeInAnimationAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 1,
          },
        },
      }}
    >
      {children}
    </motion.main>
  )
}

export function ZoomAnimationAnimation({ children }: ChildrenProps) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.5,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.8,
          },
        },
      }}
    >
      {children}
    </motion.main>
  )
}
