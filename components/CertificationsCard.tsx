import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StringLiteral } from 'typescript'
import { useLanguages } from '../hooks/useLanguages'

interface CertificationsCardProps {
  title: string
  subtitle: string
  img: string
  imgAlt: string
}

const CertificationsCard = ({
  title,
  subtitle,
  img,
  imgAlt,
}: CertificationsCardProps) => {
  const t = useLanguages()

  return (
    <>
      <b>{title}</b>
      <br />
      {subtitle}
      <Image
        src={img}
        alt={imgAlt}
        priority={true}
        width={600}
        height={424}
        placeholder="blur"
        blurDataURL='"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="'
      />
    </>
  )
}

export default CertificationsCard
