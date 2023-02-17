import { NextPage } from 'next'

interface ProjectCardProps {
  indicador: string
  image: string
  imageAlt: string
  title: string
  text: string
  btnLink: string
  btnText: string
}

const ProjectCard = ({
  indicador,
  image,
  imageAlt,
  title,
  text,
  btnLink,
  btnText,
}: ProjectCardProps) => {
  return (
    <div
      id={`${'ProjectCard_'}${indicador}`}
      className="shadow-[0 4px 8px 0 rgba(140, 181, 243, 0.2)] max-w-sm rounded-2xl rounded-t-2xl border border-gray-200 bg-white p-[5px] shadow-lg shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800 dark:shadow-indigo-500/50"
    >
      <div className="max-w-sm overflow-hidden rounded-2xl shadow-indigo-500/50 dark:border-gray-700 dark:bg-gray-800">
        <div className="relative content-center items-center overflow-hidden rounded-t-xl bg-blue-400 text-center">
          <img
            className="aspect-auto h-auto w-full max-w-full transform cursor-pointer transition duration-500 ease-in-out hover:scale-150"
            src={image}
            alt={imageAlt}
          />
          <h1 className="absolute top-0 left-0 content-center items-center bg-red-900 px-2 py-1 text-center text-xl font-bold text-white shadow shadow-black">
            {indicador}
          </h1>
        </div>

        <div className="px-4 py-2 lg:h-44">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="mb-2 break-words text-justify text-sm font-semibold text-gray-700 dark:text-gray-400">
            {text}
          </p>
        </div>

        <div className="mb-4 px-4 pt-4">
          <a
            href={btnLink}
            className="inline-block cursor-pointer rounded-lg bg-[#ccd2e7] px-4 py-2 text-sm font-semibold tracking-tight text-white no-underline hover:bg-blue-700"
            target="_blank"
            rel="noreferrer"
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
