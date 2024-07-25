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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      },

    ]
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
