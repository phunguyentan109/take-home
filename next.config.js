/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'api.ts'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx$/,
      use: ['@compiled/webpack-loader'],
    })

    return config
  },
}

module.exports = nextConfig
