module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/YokohamaLandscape/' : '',
  exportPathMap: async function (
    defaultPathMap, {
      dev,
      dir,
      outDir,
      distDir,
      buildId
    }
  ) {
    return {
      '/': {
        page: '/'
      },
      '/about/index': {
        page: '/about'
      },
      '/detail/index': {
        page: '/detail'
      },
    }
  },
  webpack: (config, {
    defaultLoaders
  }) => {
    config.module.rules.push({
      test: /\.scss$|\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "scoped"
          }
        },
        "sass-loader"
      ]
    });

    return config;
  }
}