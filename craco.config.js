const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
const sassResourcesLoader = require('craco-sass-resources-loader');
module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@store': pathResolve('src/store')
    }
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/assets/scss/public.scss',
        ],
      },
    },
  ],
}
