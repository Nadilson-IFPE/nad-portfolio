import { NextPage } from 'next'

interface Props {
  title: string
  text: string
  additionalItems?: string
}

const DetailsSection: NextPage<Props> = ({
  title,
  text,
  additionalItems,
}): JSX.Element => {
  return (
    <>
      <details className="group mb-4 rounded-xl bg-[#ccd2e7] shadow-lg shadow-indigo-500/50 dark:shadow-indigo-500/50">
        <summary
          className="lg:prose-x1 prose relative flex cursor-pointer list-none flex-wrap items-center
                     rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300
                      group-open:z-[1] group-open:rounded-b-none"
        >
          <h1 className="lg:prose-x1 prose flex flex-1 select-none rounded-xl bg-[#ccd2e7] p-4">
            {title}
          </h1>
          <div className="flex-w-10 items-center justify-center">
            <div className="ml-2 origin-left border-8 border-transparent border-l-gray-600 transition-transform group-open:rotate-90" />
          </div>
        </summary>
        <p
          className="mb-4 rounded-b-xl bg-[#e7eaf7] p-4 text-justify"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </details>

      <br />

      <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />
    </>
  )
}

export default DetailsSection
