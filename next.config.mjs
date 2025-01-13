/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  experimental: {
    appDir: true,
    scrollRestoration: true,
    serverActions: true
  },
  transpilePackages: ["next-mdx-remote"],
  webpack: (config) => {
    return config
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

export default nextConfig
