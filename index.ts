import ModuleDriver from "./src/module";
import storePlugin from "./src/plugins/store-plugin";
import path from "node:path";

/**
 * router
 * store
 * test
 * 默认 eslint
 * 默认 prettier
 * 构建工具
 * other
 *
 */

const options = {
  // host: path.join(__dirname, "src/packages/vue-template/**/*"),
  host: "src/packages/vue-template/**/*",
  prompts: [
    {
      type: "date",
      name: "date",
      message: "Pick a good day",
      validate: (date) => (date > Date.now() ? "Not in the future" : true),
    },
    {
      type: "select",
      name: "framework",
      message: "Pick a framework",
      choices: [
        {
          title: "Vue3",
          description: "vue3 stable release",
          value: "vue3",
        },
        { title: "Vue2", description: "vue2.5+ stable release", value: "vue2" },
        { title: "React", description: "React stable release", value: "react" },
      ],
      initial: 0,
    },
    {
      type: "toggle",
      name: "useRouter",
      message: "Whether to use Router?",
      initial: true,
      active: "yes",
      inactive: "no",
      format: (value, pre) => {
        const router =
          pre.framework === "react" ? "react-router" : "vue-router";
        return value ? router : false;
      },
    },
    {
      type: "toggle",
      name: "useStore",
      message: "Whether to use global state management store?",
      initial: true,
      active: "yes",
      inactive: "no",
    },
    {
      type: (prev, { framework }) =>
        prev && framework === "react" ? "select" : null,
      name: "store",
      message: "Pick a store",
      choices: [
        {
          title: "Zustand",
          description:
            "A small, fast and scalable bearbones state-management solution using simplified flux principles.",
          value: "zustand",
        },
        {
          title: "Rematch",
          description: "Redux Pro",
          value: "rematch",
        },
      ],
      initial: 0,
    },
    {
      type: (prev, { framework }) =>
        prev && framework?.indexOf?.("vue") !== -1 ? "select" : null,
      name: "store",
      message: "Pick a store",
      choices: [
        {
          title: "Pinia",
          description: "Pinia The intuitive store for Vue.js.",
          value: "pinia",
        },
      ],
      initial: 0,
    },
    {
      type: "toggle",
      name: "useEslint",
      message: "Whether to use eslint?",
      initial: true,
      active: "yes",
      inactive: "no",
      format: (value) => {
        return value ? "eslint" : false;
      },
    },
    {
      type: "toggle",
      name: "usePrettier",
      message: "Whether to use prettier?",
      initial: true,
      active: "yes",
      inactive: "no",
      format: (value) => {
        return value ? "prettier" : false;
      },
    },
    {
      type: "select",
      name: "build",
      message: "Pick a build tool, webpack or vite",
      choices: [
        {
          title: "Webpack",
          description: "The dark forces of the old days",
          value: "webpack",
        },
        {
          title: "Vite",
          description: "⚡️⚡️⚡️ Fast and NoBoundle",
          value: "vite",
        },
      ],
      initial: 0,
    },
  ],
  plugins: [storePlugin()],
};

const moduleDriver = new ModuleDriver(options);
moduleDriver.run();
