/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'jsx', 'js', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
      config.resolve.alias['@helpers'] = path.resolve(__dirname, 'src/helpers');
      config.resolve.alias['@hooks'] = path.resolve(__dirname, 'src/hooks');
      config.resolve.alias['@models'] = path.resolve(__dirname, 'src/models');
      config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages');
      config.resolve.alias['@posts'] = path.resolve(__dirname, 'src/posts');
      config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/styles');
    }
    return config
  },
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
