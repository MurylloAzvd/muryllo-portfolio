/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextTranslate(nextConfig);
