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
    PDF_URL: process.env.NEXT_PUBLIC_PDF_URL,
  },
}
