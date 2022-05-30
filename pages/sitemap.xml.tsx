import * as fs from 'fs'

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }: any) => {
  const BASE_URL = {
    development: 'http://localhost:3000',
    production: 'https://nadportfolio.vercel.app',
    test: 'http://localhost:3000',
  }[process.env.NODE_ENV]

  const staticPages = fs
    .readdirSync(
      {
        development: 'pages',
        // A linha a seguir é para funcionar com deploy na Vercel:
        production: './',
        test: 'pages',
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      // No sitemap.xml, não quero que sejam listados os seguintes arquivos e pastas:
      return ![
        '_app.tsx',
        '.env.local',
        '.eslintrc.json',
        '.git',
        '.gitignore',
        '.next',
        'components',
        'models',
        'next-env.d.ts',
        'next-seo.config.js',
        'next.config.js',
        'node_modules',
        'out',
        'package-lock.json',
        'package.json',
        'postcss.config.js',
        'prettier.config.js',
        'public',
        'README.md',
        'styles',
        'tailwind.config.js',
        'tsconfig.json',
        'yarn.lock',
        '_document.tsx',
        '_error.tsx',
        'api',
        'blog',
        'files',
        'images',
        'hello.ts',
        '404.tsx',
        '500.tsx',
        'frontmatter.ts',
        'post.ts',
        'sitemap.xml.tsx',
        '[slug].tsx',
        'index.tsx',
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`
    })

  const dynamicPages = fs
    .readdirSync(
      {
        development: 'posts',
        production: './posts',
        test: 'posts',
      }[process.env.NODE_ENV]
    )
    .map((staticPostsPath) => {
      return `${BASE_URL}/blog/${staticPostsPath.replace('.md', '')}`
    })

  const allPaths = [...staticPages, ...dynamicPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `
          })
          .join('')}
      </urlset>
    `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
