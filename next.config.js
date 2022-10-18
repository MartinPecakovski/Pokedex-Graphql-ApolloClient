/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["assets.pokemon.com", "i.pinimg.com", 'upload.wikimedia.org', "wallpaperaccess.com"],
  }
}

module.exports = nextConfig
