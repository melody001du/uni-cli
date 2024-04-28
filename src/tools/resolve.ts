// bare package imports, perform node resolve
function nodeResolve(path: string) {
  const pre = "node_modules";
  console.log(path, pre);
}

export default {
  nodeResolve,
};
