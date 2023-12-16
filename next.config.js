/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Resuelve los alias
    config.resolve.alias['@'] = path.join(__dirname, 'src');

    return config;
  },
};