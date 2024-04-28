import tsPlugin from "@rollup/plugin-typescript";

export default {
  input: "./index.ts",
  output: {
    file: "dist/driver.js",
    format: "cjs",
    banner: "#!/usr/bin/env node",
  },
  plugins: [tsPlugin()],
};
