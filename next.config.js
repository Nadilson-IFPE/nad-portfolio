/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    PDF_URL: process.env.NEXT_PUBLIC_PDF_URL,
  },
}
