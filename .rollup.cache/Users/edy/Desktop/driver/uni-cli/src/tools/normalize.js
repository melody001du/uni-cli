import path from "node:path";
function normalizePath(path) {
    return path.replace(/\\/g, "/");
}
function normalizeRelativePathToAbsolutePath(transformPath) {
    return path.resolve(transformPath);
}
function addTrailingSlash(path) {
    return path.endsWith("/") ? path : `${path}/`;
}
export default {
    normalizePath,
    normalizeRelativePathToAbsolutePath,
    addTrailingSlash,
};
//# sourceMappingURL=normalize.js.map