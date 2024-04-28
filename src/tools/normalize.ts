import path from "node:path";

function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}

function normalizeRelativePathToAbsolutePath(transformPath: string) {
  return path.resolve(transformPath);
}

function addTrailingSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export default {
  normalizePath,
  normalizeRelativePathToAbsolutePath,
  addTrailingSlash,
};
