import path from "node:path";
interface Plugin {
  name?: string;
  key?: string;
  filter?: string;
  path?: string;
  before?: (
    fileId?: string,
    builder?: { [key in string]: any }
  ) => void | boolean | null | undefined;
  enter?: (
    file?: { [key in string]: any },
    builder?: { [key in string]: any }
  ) => { code: string } | undefined | null | void;
  exit?: (
    file?: { [key in string]: any },
    builder?: { [key in string]: any }
    // generateDirectory
    // generateFile
    // tempRender
  ) => any;
}

function storePlugin(): Plugin {
  return {
    name: "pinia",
    path: __dirname,
    key: "pinia-template",
    filter: path.join(__dirname, "../../packages/vue-template/src/views/**/*"),
    before: (fileId, builder) => {
      builder.generate("index.ts");
      return false;
    },
    enter: (fileId, builder) => {},
    exit: (fileId, builder) => {},
  };
}

export default storePlugin;
