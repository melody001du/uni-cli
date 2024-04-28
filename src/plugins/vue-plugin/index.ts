export default function () {
  return {
    name: "eslint",
    transform(filepath: string, code: string) {
      console.log("filepath", filepath);
      return code;
    },
  };
}
