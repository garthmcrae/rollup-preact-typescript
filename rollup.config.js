import html, { makeHtmlAttributes } from "@rollup/plugin-html";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

import { template } from "./template.js";

const publicPath = process.env.PUBLIC_PATH;

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    entryFileNames: "[name]-[hash].js",
  },
  plugins: [
    html({
      meta: [
        { charset: "utf-8" },
        {
          content: "width=device-width, initial-scale=1",
          name: "viewport",
        },
      ],
      publicPath,
      template,
      title: "Rollup Preact Typescript",
    }),
    resolve(),
    terser(),
    typescript(),
  ],
};
