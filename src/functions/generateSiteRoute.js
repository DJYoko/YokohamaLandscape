export default function generateSiteRoute(originalPath) {
    if (process.env.NODE_ENV === "production") {
        return "/YokohamaLandscape/" + originalPath.replace(/^\//g, "");
    }
    return originalPath;
}
