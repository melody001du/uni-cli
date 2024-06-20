import prompts from "prompts";
// import chalk from "chalk";
import { getInvolvedPlugins, applyPluginsMatcher } from "../tools/traverse";
import { errorInvalidOption } from "../tools/error";
import path from "node:path";
import glob from "fast-glob";
import Module from "../module/index";

class PluginDriver {
  public options: { [key in string]: any } = {};
  public settledOptions: { [key in string]: any } = {};
  public promptsResponse: { [key in string]: any } = {};
  public sortedPlugins = new Map();
  public module: Module;

  constructor(options: { [key in string]: any }, module) {
    if (errorInvalidOption(options)) return;
    this.options = options;
    this.module = module;
  }
  async inputCommand(inputPrompts: { [key in string]: any }) {
    const response = await prompts(inputPrompts, {
      onCancel: (prompt) => {
        return this.quit(prompt);
      },
    });
    this.parseCommand(response);
  }
  parseCommand(response) {
    this.settledOptions.response = response;
    this.settledOptions.plugins = applyPluginsMatcher(
      getInvolvedPlugins(response, this.options.plugins)
    );
  }

  excutedCommand() {}

  quit(_inputPrompts: { [key in string]: any }) {
    this.clear();
  }

  clear() {
    this.settledOptions = {};
  }

  write() {}

  render() {}

  watch() {}

  hook(file, name, mata?: any) {
    for (const plg of this.settledOptions.plugins) {
      plg[name] && plg.matcher(file.id);

      // &&
      // plg[name].call(
      //   this,
      //   file,
      //   {
      //     generate: this.generate.bind(this, plg.key),
      //     read: this.read.bind(this, plg.key),
      //   },
      //   mata
      // );
    }
  }

  generate(id, specifyPath, callback) {
    const pattern = path.join(id, specifyPath);
    const matchedFiles = glob.globSync(pattern);
    console.log("@generate", matchedFiles);
    // for (const matchId of matchedFiles) {
    //   this.module.graph[matchId]=
    // }
    // callback && callback(matchedFiles);
  }

  read(id, specifyPath, callback) {
    const pattern = path.join(id, specifyPath);
    // const matchedFiles = glob.globSync(pattern);
  }
}

export default PluginDriver;
