/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    deviceSizes: [
      360, 400, 480, 600, 640, 720, 750, 768, 800, 828, 1080, 1200, 1920, 2048,
      3840,
    ],
    path: '/',
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_PUBLIC_CV_PDF_URL: process.env.NEXT_PUBLIC_CV_PDF_URL,
    NEXT_PUBLIC_CV_ENGLISH_PDF_URL: process.env.NEXT_PUBLIC_CV_ENGLISH_PDF_URL,
  },
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    localeDetection: false,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}
