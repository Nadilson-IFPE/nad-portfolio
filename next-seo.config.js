export default {
  // https://www.npmjs.com/package/next-seo#title-template
  title: 'Site pessoal e portfólio',
  titleTemplate: '%s | Nadilson J. R. Teixeira',
  // https://www.npmjs.com/package/next-seo#open-graph
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://nadportfolio.vercel.app',
    description:
      'Site pessoal de Nadilson J. R. Teixeira, Desenvolvedor, Analista e Historiador.',
    site_name: 'Nadilson - nadportfolio.vercel.app',
    images: [
      {
        url: '/images/profile.png',
        width: 300,
        height: 300,
        alt: 'Nadilson J. R. Teixeira | Desenvolvedor, Analista e Historiador',
      },
    ],
  },
  // Base de página por página para consolidar URLs duplicados
  canonical: 'https://nadportfolio.vercel.app',
  // Para evitar um bug no Twitter, vide informações no link: https://www.npmjs.com/package/next-seo
  twitter: {
    handle: '@NadilsonDev',
    site: '@NadilsonDev',
    cardType: 'summary_large_image',
  },
}
