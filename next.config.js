const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true
});

module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/YokohamaLandscape/' : '',
}