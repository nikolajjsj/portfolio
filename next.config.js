// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  target: "serverless",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn-images-1.medium.com'],
  },
}
