// bare package imports, perform node resolve
function nodeResolve(path) {
    const pre = "node_modules";
    console.log(path, pre);
}
export default {
    nodeResolve,
};
//# sourceMappingURL=resolve.js.map