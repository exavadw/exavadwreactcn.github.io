/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/exavadwreactcn.github.io',
  assetPrefix: '/exavadwreactcn.github.io',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
}

module.exports = nextConfig 