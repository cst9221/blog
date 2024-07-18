/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    scrollRestoration: true
  },
  webpack: (config) => {
    return config
  },
  images: {
    remotePatterns: []
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
