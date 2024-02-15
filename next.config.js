/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    scrollRestoration: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            titleProp: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {removeViewBox: false}
                  },
                  // Enable figma's wrong mask-type attribute work
                  removeRasterImages: false,
                  removeStyleElement: false,
                  removeUnknownsAndDefaults: false,
                  // Enable svgr's svg to fill the size
                  removeViewBox: false
                }
              ]
            }
          }
        }
      ]
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "studiod.nu",
        port: ""
      },
      {
        protocol: "https",
        hostname: "devhyun.com",
        port: ""
      }
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
