// const dotenv = require('dotenv');

// dotenv.config()

/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com"],
    formats: ["image/webp"],
    loader: 'akamai',
    path: '',
},
}
