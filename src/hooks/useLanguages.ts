import { useRouter } from 'next/router'

import en from '../../public/locales/en'
import pt from '../../public/locales/pt'

export function useLanguages() {
  const { locale } = useRouter()
  const translateStringsByLocale = locale === 'en' ? en : pt

  return translateStringsByLocale
}
