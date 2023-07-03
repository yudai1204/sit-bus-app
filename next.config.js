/** @type {import('next').NextConfig} */


module.exports = {
    output: 'export',
    basePath: process.env.GITHUB_ACTIONS ? "/sit-bus-app.yudai04.dev" : "",
    trailingSlash: true,
    assetPrefix: '/',
};