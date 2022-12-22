import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import FavIcon from '../components/FavIcon'
import ProjectCard from '../components/ProjectCard'
import { useLanguages } from '../hooks/useLanguages'

const Projetos: NextPage = () => {
  const t = useLanguages()
  return (
    <>
      <Head>
        <title>{t.projects_page_title}</title>
        <FavIcon />
      </Head>

      <div className="mx-auto flex justify-center space-y-14 px-4 pt-5 lg:space-y-24">
        <div className="item-center mx-auto flex flex-col-reverse lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
          <div className="shadow-indigo-500/50 lg:mt-12 lg:px-4">
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
              <h1 className="text-center text-2xl font-bold text-gray-900 underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-4xl">
                {t.projects_page_header}
              </h1>
              <br />
            </motion.div>

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
              <div className="mx-auto grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <ProjectCard
                  indicador={'01'}
                  image={'/images/projetos/projeto_portfolio.png'}
                  imageAlt={t.projects_page_card1_title}
                  title={t.projects_page_card1_title}
                  text={t.projects_page_card1_text}
                  btnLink={'https://github.com/Nadilson-IFPE/nad-portfolio'}
                  btnText={t.projects_page_card1_btn_text}
                />

                <ProjectCard
                  indicador={'02'}
                  image={'/images/projetos/socialis_app.png'}
                  imageAlt={t.projects_page_card2_title}
                  title={t.projects_page_card2_title}
                  text={t.projects_page_card2_text}
                  btnLink={
                    'https://play.google.com/store/apps/details?id=com.nadilson.socialis'
                  }
                  btnText={t.projects_page_card2_btn_text}
                />

                <ProjectCard
                  indicador={'03'}
                  image={'/images/projetos/sistema_de_pedidos.png'}
                  imageAlt={t.projects_page_card3_title}
                  title={t.projects_page_card3_title}
                  text={t.projects_page_card3_text}
                  btnLink={
                    'https://play.google.com/store/apps/details?id=com.nadilson.nadspringbootionic'
                  }
                  btnText={t.projects_page_card3_btn_text}
                />

                <ProjectCard
                  indicador={'04'}
                  image={'/images/projetos/projeto_dsdelivery.png'}
                  imageAlt={t.projects_page_card4_title}
                  title={t.projects_page_card4_title}
                  text={t.projects_page_card4_text}
                  btnLink={'https://github.com/Nadilson-IFPE/dsdeliver-sds2'}
                  btnText={t.projects_page_card4_btn_text}
                />

                <ProjectCard
                  indicador={'05'}
                  image={'/images/projetos/projeto_blog.png'}
                  imageAlt={t.projects_page_card5_title}
                  title={t.projects_page_card5_title}
                  text={t.projects_page_card5_text}
                  btnLink={'https://github.com/Nadilson-IFPE/nadblog'}
                  btnText={t.projects_page_card5_btn_text}
                />

                <ProjectCard
                  indicador={'06'}
                  image={'/images/projetos/projeto_outros.png'}
                  imageAlt={t.projects_page_card6_title}
                  title={t.projects_page_card6_title}
                  text={t.projects_page_card6_text}
                  btnLink={'https://github.com/Nadilson-IFPE?tab=repositories'}
                  btnText={t.projects_page_card6_btn_text}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projetos
