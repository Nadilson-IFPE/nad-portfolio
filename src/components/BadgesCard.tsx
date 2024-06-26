import Image from 'next/image'
import Link from 'next/link'
import { useLanguages } from '../hooks/useLanguages'

interface BadgesCardProps {
  cardLink: string
  imgSrc: string
  imgAlt: string
}

const BadgesCard = ({ cardLink, imgSrc, imgAlt }: BadgesCardProps) => {
  const t = useLanguages()

  return (
    <div>
      <Link key={Math.random()} href={cardLink} passHref>
        <a
          className={
            'font-medium tracking-wider no-underline transition-colors hover:text-yellow-500'
          }
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            priority={true}
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL='"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="'
          />

          <div className="flex justify-center">
            <button name={t.cv_page_badges_button_caption} aria-label={t.cv_page_badges_button_caption}
              className="rounded-full bg-blue-500 p-2 text-white no-underline shadow-lg hover:bg-blue-700 hover:shadow-lg"
              onClick={() => {
                // window.open(cardLink, '_blank', 'noopener,noreferrer')
              }}
            >
              {t.cv_page_badges_button_caption}
            </button>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BadgesCard
