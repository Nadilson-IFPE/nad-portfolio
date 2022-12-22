import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import br_flag from '../public/images/br.svg'
import gb_flag from '../public/images/gb.svg'

export default function LanguageSelector() {
  const router = useRouter()

  const { locale, asPath } = router

  const changeLocale = () => {
    router.push(router.pathname, asPath, {
      locale: locale ? (locale === 'en' ? 'pt' : 'en') : 'en',
    })
  }

  return (
    <button
      type="button"
      className="h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() => {
        changeLocale()
      }}
    >
      <Image
        src={locale === 'en' ? br_flag : gb_flag}
        alt={
          locale === 'en'
            ? "Click to change site's language"
            : 'Clique para mudar o idioma do site'
        }
        height={40}
        width={40}
      />
    </button>
  )
}
