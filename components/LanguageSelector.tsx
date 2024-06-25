/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import br_flag from '../public/images/br.svg'
import gb_flag from '../public/images/gb.svg'

export default function LanguageSelector() {
  const router = useRouter()
  const [cookie, setCookie] = useCookies(['NEXT_LOCALE'])
  const [userAcceptedCookieConsentCookie, setUserAcceptedCookieConsentCookie] =
    useCookies(['NEXT_COOKIE_CONSENT'])

  const { locale, asPath } = router

  const changeLocale = () => {
    const lang = router.locale === 'en' ? 'pt' : 'en'
    router.push(router.pathname, asPath, {
      locale: lang,
    })

    // Deixa configurar o cookie para idiomas apenas se
    // o usuário aceitou salvar cookies no banner exibido
    // pelo módulo react-cookie-consent
    if (userAcceptedCookieConsentCookie.NEXT_COOKIE_CONSENT) {
      setWebSiteLanguageCookie(lang)
    } else {
      //  console.log('Usuário não aceitou CookieConsent!')
    }
  }

  const setWebSiteLanguageCookie = (language: string | undefined) => {
    if (cookie.NEXT_LOCALE !== language) {
      // Cookie expira em um ano: 31536000 (1 hora = 3600; 1 ano = 3600 * 24 * 365)
      // Navegadores estão exigindo atributos sameSite e secure para cookies:
      // https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      setCookie('NEXT_LOCALE', language, {
        path: '/',
        maxAge: 31536000,
        sameSite: 'none',
        secure: true,
      })
    }
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
