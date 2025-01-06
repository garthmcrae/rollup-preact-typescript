import { makeHtmlAttributes } from "@rollup/plugin-html";

export const template = ({
  attributes,
  files,
  meta,
  publicPath,
  title,
  addScriptsToHead,
}) => {
  const scripts = (files.js || [])
    .map(({ fileName }) => {
      const attrs = makeHtmlAttributes(attributes.script);
      return `<script src="${publicPath}${fileName}"${attrs}></script>`;
    })
    .join("\n");

  // const links = (files.css || [])
  //   .map(({ fileName }) => {
  //     const attrs = makeHtmlAttributes(attributes.link);
  //     return `<link href="${publicPath}${fileName}" rel="stylesheet"${attrs}>`;
  //   })
  //   .join("\n");

  if (addScriptsToHead === true) {
    links += scripts;
    scripts = "";
  }

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join("\n");

  return `
<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
<head>
${metas}
<title>${title}</title>
<meta
  name="description"
  content="Exploring Rollup, Preact and Typescript." />
</head>
<style>
  body { background-color: blue; margin: 0; }
</style>
<body>
${scripts}
</body>
</html>`;
};
