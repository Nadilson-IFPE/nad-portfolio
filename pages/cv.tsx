import Head from 'next/head'
import React from 'react'
import badge01 from '../public/images/badges/badge01.png'
import badge02 from '../public/images/badges/badge02.png'
import badge03 from '../public/images/badges/badge03.png'
import badge04 from '../public/images/badges/badge04.png'
import badge05 from '../public/images/badges/badge05.png'
import badge06 from '../public/images/badges/badge06.png'
import badge07 from '../public/images/badges/badge07.png'
import badge08 from '../public/images/badges/badge08.png'
import badge09 from '../public/images/badges/badge09.png'
import badge10 from '../public/images/badges/badge10.png'
import badge11 from '../public/images/badges/badge11.png'
import badge12 from '../public/images/badges/badge12.png'
import badge13 from '../public/images/badges/badge13.png'
import badge14 from '../public/images/badges/badge14.png'
import badge15 from '../public/images/badges/badge15.png'
import badge16 from '../public/images/badges/badge16.png'
import badge17 from '../public/images/badges/badge17.png'
import badge18 from '../public/images/badges/badge18.png'
import certiprof from '../public/images/certiprof.png'
import certiprof_new from '../public/images/certiprof_new.png'
import { NextPage } from 'next'
import FavIcon from '../components/FavIcon'
import { useLanguages } from '../hooks/useLanguages'
import BadgesCard from '../components/BadgesCard'
import DetailsSection from '../components/DetailsSection'
import CertificationsCard from '../components/CertificationsCard'
import {
  RightToLeftAnimation,
  BottomToTopAnimation,
  RotateZAnimation,
} from '../components/Animations'

const cv_url = process.env.NEXT_PUBLIC_CV_PDF_URL!
const english_cv_url = process.env.NEXT_PUBLIC_CV_ENGLISH_PDF_URL!

async function downloadCV() {
  const meuCV = await fetch(cv_url)
  const meuCVBlob = await meuCV.blob()
  const meuCVBlobURL = URL.createObjectURL(meuCVBlob)

  var anchor = document.createElement('a')
  anchor.style.display = 'none'
  anchor.href = meuCVBlobURL
  anchor.rel = 'noopener, noreferrer'
  anchor.target = '_blank'
  anchor.download = 'Nadilson_José_Rodrigues_Teixeira_-_CV_-_2023.pdf'

  document.body.appendChild(anchor)
  anchor.click()

  // Firefox precisa destas linhas:
  if (navigator.userAgent.indexOf('Firefox') != -1) {
    setTimeout(() => {
      URL.revokeObjectURL(meuCVBlobURL)
      if (anchor.parentNode != null) {
        anchor.parentNode.removeChild(anchor)
      }
    }, 0)
  }

  document.body.removeChild(anchor)

  URL.revokeObjectURL(meuCVBlobURL)
}

async function downloadCVInEnglish() {
  const meuCV = await fetch(english_cv_url)
  const meuCVBlob = await meuCV.blob()
  const meuCVBlobURL = URL.createObjectURL(meuCVBlob)

  var anchor = document.createElement('a')
  anchor.style.display = 'none'
  anchor.href = meuCVBlobURL
  anchor.rel = 'noopener, noreferrer'
  anchor.target = '_blank'
  anchor.download = 'Nadilson_José_Rodrigues_Teixeira_-_CV_-_2023_-_English.pdf'

  document.body.appendChild(anchor)
  anchor.click()

  // Firefox precisa destas linhas:
  if (navigator.userAgent.indexOf('Firefox') != -1) {
    setTimeout(() => {
      URL.revokeObjectURL(meuCVBlobURL)
      if (anchor.parentNode != null) {
        anchor.parentNode.removeChild(anchor)
      }
    }, 0)
  }

  document.body.removeChild(anchor)

  URL.revokeObjectURL(meuCVBlobURL)
}

const CV: NextPage = () => {
  /* const handleClickOnCVFIleLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault()
    if (path === 'download') {
      if (isMobile) {
        window.location.href = url
      } else {
        window.open(url, '_blank')
      }
    }
  } */

  const t = useLanguages()
  //  console.info(`Idioma atual é: ${router.locale}`)
  //  console.info(`Idiomas disponíveis no site são: ${router.locales}`)

  return (
    <div className="mx-auto flex flex-1 justify-center space-y-14 px-4 pt-5 lg:space-y-24">
      <Head>
        <title>{t.cv_page_title}</title>
        <FavIcon />
      </Head>

      <div className="item-center flex min-h-screen flex-col lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="shadow-indigo-500/50 lg:mt-12 lg:px-4">
          <RightToLeftAnimation>
            <h1 className="text-center text-2xl font-bold text-gray-900 underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-4xl">
              {t.cv_page_header}
            </h1>
          </RightToLeftAnimation>
          <br />
          <BottomToTopAnimation>
            <div className="bg-[#eeebeb] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
              <h3 className="prose p-4 text-justify dark:text-black">
                {t.cv_page_info1}
                <a
                  className={
                    'font-medium tracking-wider text-red-800 underline decoration-sky-300 decoration-wavy underline-offset-4 transition-colors'
                  }
                  /* onClick={(e) => downloadCV(e, 'download')} */
                  onClick={() => downloadCV()}
                >
                  <strong className="cursor-pointer text-red-600 hover:text-blue-600">
                    {t.cv_page_info2}
                  </strong>
                </a>
                {t.cv_page_info3}
                <a
                  className={
                    'font-medium tracking-wider text-red-800 underline decoration-sky-300 decoration-wavy underline-offset-4 transition-colors'
                  }
                  /* onClick={(e) => downloadCV(e, 'download')} */
                  onClick={() => downloadCVInEnglish()}
                >
                  <strong className="cursor-pointer text-red-600 hover:text-blue-600">
                    {t.cv_page_info4}
                  </strong>
                </a>
                {t.cv_page_info5}
              </h3>
            </div>
          </BottomToTopAnimation>

          <br />

          <div className="text-gray-800">
            <article className="lg:prose-x1 accordion-section prose dark:text-black">
              <RotateZAnimation>
                <DetailsSection
                  title={t.cv_page_objective_header}
                  text={t.cv_page_objective_description}
                />

                <DetailsSection
                  title={t.cv_page_skills_header}
                  text={t.cv_page_skills_description}
                />

                <DetailsSection
                  title={t.cv_page_education_header}
                  text={t.cv_page_education_description}
                />

                <DetailsSection
                  title={t.cv_page_work_history_header}
                  text={t.cv_page_work_history_description}
                />

                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      {t.cv_page_certifications_header}
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <p className="mb-4 rounded-b-xl bg-[#e7eaf7] p-4">
                    <CertificationsCard
                      title={t.cv_page_certifications_title1}
                      subtitle={t.cv_page_certifications_subtitle1}
                      img={certiprof.src}
                      imgAlt={
                        'Scrum Foundation Professional Certificate (SFPC)'
                      }
                    />

                    <CertificationsCard
                      title={t.cv_page_certifications_title2}
                      subtitle={t.cv_page_certifications_subtitle2}
                      img={certiprof_new.src}
                      imgAlt={
                        'Scrum Foundation Professional Certificate (SFPC)'
                      }
                    />
                  </p>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />

                <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
                  <summary
                    className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
                  >
                    <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
                      {t.cv_page_badges_header}
                    </h1>
                    <div className="flex-w-10 items-center justify-center">
                      <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
                    </div>
                  </summary>
                  <div className="rounded-b-xl bg-[#e7eaf7]">
                    <p className="mb-4 bg-[#e7eaf7] p-4 text-justify">
                      {t.cv_page_badges_description}
                    </p>

                    <div className="mb-4 grid grid-cols-3 place-items-center gap-3 rounded-b-xl bg-[#e7eaf7] p-4">
                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/v41PgtguSlC57_0CPuXChA'
                        }
                        imgSrc={badge01.src}
                        imgAlt="Containers e Docker"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/6lo8JyZRSnSAbJO_rkvJbw'
                        }
                        imgSrc={badge02.src}
                        imgAlt="Deploy no Kubernetes"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/Cc0WsvzzSX2C_g0TrZcKAg'
                        }
                        imgSrc={badge03.src}
                        imgAlt="Pipelines CI/CD"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/PPvlPo7vQQyysdT_Z2nFHg'
                        }
                        imgSrc={badge04.src}
                        imgAlt="Explorador - Containers e Docker"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/dnjH7Kr2Qw2Tp97oneSXsg'
                        }
                        imgSrc={badge05.src}
                        imgAlt="Desbravador - Deploy no Kubernetes"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/L7ZYNG9wTaKmxZ4mbtbi4w'
                        }
                        imgSrc={badge06.src}
                        imgAlt="Reactive Spring"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/KYfMApz3TFy2oeg8ErxRGA'
                        }
                        imgSrc={badge07.src}
                        imgAlt="Scrum Foundation Professional Certificate - SFPC"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/q_mtqixUTYiDPnIwgtUk3g'
                        }
                        imgSrc={badge08.src}
                        imgAlt="Certiprof - Lifelong Learning"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/zEjvYeCZQRu3mfsn29F8zQ'
                        }
                        imgSrc={badge09.src}
                        imgAlt="Iniciativa DevOps - Docker"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/LR_Z4c1YQS6CWh66fNRVkA'
                        }
                        imgSrc={badge10.src}
                        imgAlt="Iniciativa DevOps - Kubernetes"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/4AaoXeo8QbOm_XXZwWmxJg'
                        }
                        imgSrc={badge11.src}
                        imgAlt="Iniciativa DevOps - Terrafom"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/hNpWmgL6Roqt3wKGIgH03g'
                        }
                        imgSrc={badge12.src}
                        imgAlt="Iniciativa DevOps - CI/CD"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/NqhXCgplQ0ebva0ljFu5wA'
                        }
                        imgSrc={badge13.src}
                        imgAlt="Iniciativa DevOps - Prometheus e Grafana"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/hE95nEFgQrCLYpvGZrL0hA'
                        }
                        imgSrc={badge14.src}
                        imgAlt="Jornada DevOps de Elite - Docker"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/E1Ie3wjBTkmjNSX2FpiL8w'
                        }
                        imgSrc={badge15.src}
                        imgAlt="Jornada DevOps de Elite - Kubernetes"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/fkfqiGc2SlGqMj-akeQwkw'
                        }
                        imgSrc={badge16.src}
                        imgAlt="Jornada DevOps de Elite - Terraform"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/-0a9sePyQkOpX5yiH3rWeQ'
                        }
                        imgSrc={badge17.src}
                        imgAlt="Jornada DevOps de Elite - Jenkins - CI/CD"
                      />

                      <BadgesCard
                        cardLink={
                          'https://api.badgr.io/public/assertions/XiaMWOdLTbmV_iIFOJeZag'
                        }
                        imgSrc={badge18.src}
                        imgAlt="Jornada DevOps de Elite - Prometheus + Grafana"
                      />
                    </div>
                  </div>
                </details>

                <br />

                <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />
              </RotateZAnimation>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
