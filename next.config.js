/** @type {import('next').NextConfig} */

const branchName = process.env.GITHUB_ACTIONS ? "/sit-bus-app.yudai04.dev" : "",

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true,
    assetPrefix: '/',
    basePath: branchName,
};

module.exports = nextConfig;