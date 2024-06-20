import fs from "node:fs";
import PluginDriver from "../pluginDriver";
import File from "../file";
import chalk from "chalk";
import glob from "fast-glob";
import { errorInvalidOption } from "../tools/error";
import { getNameFromId } from "../tools/normalize";
import path from "node:path";

class ModuleDriver {
  // public id: string;
  // public fileName: string;
  public options: { [key in string]: any } = {};
  public pluginDriver: PluginDriver;
  public entries: string[];
  public graph: { [key in string]: File } = {};

  constructor(options: { [key in string]: any }) {
    if (errorInvalidOption(options)) return;
    this.options = options;
  }

  async run() {
    if (errorInvalidOption(this.options)) return;

    this.pluginDriver = new PluginDriver(this.options, this);
    await this.pluginDriver.inputCommand(this.options.prompts);

    const entries = glob.globSync(this.options.host, {
      dot: true,
      onlyFiles: false,
      absolute: true,
    });
    if (!entries.length) {
      console.log(chalk.yellow("No host folders match!"));
    }

    this.entries = entries || [];
    this.tranverse();
  }

  tranverse() {
    for (const id of this.entries) {
      const file = new File({ id, fileName: getNameFromId(id) });
      this.graph[id] = file;
    }

    for (const [id, file] of Object.entries(this.graph)) {
      this.read(id, file);
    }
  }
  read(id: string, file: File) {
    const stats = fs.statSync(id);
    const isDirectory = stats.isDirectory();
    file.isDirectory = isDirectory;
    let meta = this.pluginDriver.hook(file, "before") as any;
    // if (!isDirectory) {
    //   const code = fs.readFileSync(id, "utf8");
    //   file.originCode = code;
    //   if (meta !== false) {
    //     const newFile = this.pluginDriver.hook(file, meta, "enter") as any;
    //     meta = newFile?.mata || meta;
    //     file.update(newFile);
    //     this.pluginDriver.hook(file, meta, "exit");
    //   }
    // }
  }
}

export default ModuleDriver;
