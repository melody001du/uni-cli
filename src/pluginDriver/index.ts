import prompts from "prompts";
import chalk from "chalk";

class PluginDriver {
  public options: { [key in string]: any } = {};
  public sortedPlugins = new Map();

  constructor(options: { [key in string]: any }) {
    if (!options) {
      console.log(chalk.red("please input options"));
      return;
    }
    this.options = options;
    this.inputCommand(this.options.prompts);
  }
  async inputCommand(inputPrompts: { [key in string]: any }) {
    const command = await prompts(inputPrompts);
    this.parseCommand(command);
    // this.options = {};
  }
  parseCommand(command) {
    console.log(command);
  }

  excutedCommand() {}

  read() {}

  write() {}

  render() {}

  watch() {}

  lifeCycle() {}
}

export default PluginDriver;
