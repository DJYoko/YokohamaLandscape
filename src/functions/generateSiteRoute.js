import CONFIG from 'next.config';
const ROOT = CONFIG.assetPrefix === '' ? '/' : CONFIG.assetPrefix;

export default function generateSiteRoute(originalPath) {
  if (process.env.NODE_ENV === 'production') {
    return ROOT + originalPath.replace(/^\//g, '');
  }
  return originalPath;
}
