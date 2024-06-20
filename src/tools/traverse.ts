import micromatch from "micromatch";
import path from "node:path";

function getSortedPlugins(plugins) {
  console.log(plugins);
}

function getInvolvedPlugins(
  response: { [key in string]: any } = {},
  plugins: any[]
) {
  if (response && plugins?.length) {
    const responseValue = Object.values(response);
    return plugins.filter((plg) => {
      return responseValue.includes(plg?.name);
    });
  }
  return [];
}

function applyPluginsMatcher(plugins: any[]) {
  for (const plg of plugins) {
    if (!plg.filter) {
      plg.matcher = () => false;
      continue;
    }
    plg.matcher = function (filterPath) {
      console.log("@path", filterPath, plg.filter, plg.path);
      // const execPath=path.join(plg.)
      // return micromatch.isMatch(path, plg.filter);
    };
  }
  return plugins;
}

export { getSortedPlugins, getInvolvedPlugins, applyPluginsMatcher };
