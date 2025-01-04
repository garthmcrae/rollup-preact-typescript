import html from "@rollup/plugin-html";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

const publicPath = process.env.PUBLIC_PATH;

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
  },
  plugins: [
    html({ publicPath, title: "Rollup Preact Typescript" }),
    resolve(),
    terser(),
    typescript(),
  ],
};
