/** @type {import('next').NextConfig} */
const withPlugins = require(`next-compose-plugins`)

const nextConfig = {
  reactStrictMode: true,
  experimental: {esmExternals: false},
  images: {
    domains: ['images.unsplash.com'],
  },
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  webpack(config, {isServer, defaultLoaders}) {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            /* jsxImportSource: …, otherOptions… */
          },
        },
      ],
    })
    return config
  },
}

module.exports = withPlugins([], nextConfig)
