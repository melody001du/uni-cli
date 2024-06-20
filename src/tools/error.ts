import chalk from "chalk";

function errorInvalidOption(options) {
  if (!options) {
    console.log(chalk.red("please input options"));
    return true;
  }
  if (!options.host) {
    console.log(chalk.red("please input options.host"));
    return true;
  }
  if (!options.prompts) {
    console.log(chalk.red("please input options.prompts"));
    return true;
  }

  return false;
}

export { errorInvalidOption };
