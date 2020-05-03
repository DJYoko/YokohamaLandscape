module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/YokohamaLandscape/' : '',
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/about/index': { page: '/about' },
          '/detail/index': { page: '/detail' },
        }
      },
}