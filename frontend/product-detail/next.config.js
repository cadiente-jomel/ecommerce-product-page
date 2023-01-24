/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@shared/components"],
  images: {
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "res.cloudinary.com", 
        port:""
      }
    ],
  },
}

module.exports = nextConfig
