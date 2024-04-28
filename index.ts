import PluginDriver from "./src/pluginDriver";

function pluginA() {
  return {
    name: "",
    key: "",
    before: () => {},
    enter: () => {},
    exit: () => {},
  };
}

const options = {
  prompts: {
    type: "number",
    name: "value",
    message: "How old are you?",
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
  },
  plugins: [pluginA()],
};

const pluginDriver = new PluginDriver(options);

// pluginDriver.parseCommand("");

pluginDriver.parseCommand("");
