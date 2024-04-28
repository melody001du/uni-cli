export default function () {
    return {
        name: "eslint",
        transform(filepath, code) {
            console.log("filepath", filepath);
            return code;
        },
    };
}
//# sourceMappingURL=index.js.map