const { join } = require("path");
const fs = require("fs");
const toMarkdownTable = require("markdown-table");
const { info, error } = require("../log");

const rootPath = process.cwd();
const readmePath = join(rootPath, "README.md");
const examplesJsonPath = join(rootPath, "data/examples.json");
const tagsJsonPath = join(rootPath, "data/tags.json");

const {
  PLAYGROUND_URL_WITH_PLUGIN,
  PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG,
  SLUG_EXAMPLE_MARKER,
  URL_EXAMPLE_ZIP
} = require("./constants");  

const startMarker = "<!-- @TABLE EXAMPLES BEGIN -->";
const endMarker = "<!-- @TABLE EXAMPLES END -->";

module.exports = ({ slug: slugLastAdded }) => {
  
  const examplesJson = JSON.parse(fs.readFileSync(examplesJsonPath, "utf8"));
  const tagsJson = JSON.parse(fs.readFileSync(tagsJsonPath, "utf8"));

  const readmePathDisplay = readmePath.split("/gutenberg-examples-2023/")[1];
  let messageUpdate = `Updating ${readmePathDisplay}`
  if (slugLastAdded) messageUpdate += ` with example ${slugLastAdded}`
  info(messageUpdate)

  const markdownContent = fs.readFileSync(readmePath, "utf8");
    
  const regex = new RegExp(
    `${startMarker}\(\[\.\\n\\s\\S\]\*\)${endMarker}`,
    "gm"
  );
  // const markdownContentTable = markdownContent
  //   .match(regex)[0]
  //   .replace(startMarker, "")
  //   .replace(endMarker, "");

  const processedTags = tagsJson.reduce(
    (acc, { slug, name }) => ({ ...acc, [slug]: name }),
    {}
  );

  const markdownTableRows = examplesJson.map(({ slug, description, tags }) => {
    const id = slug.split("-").pop();
    let playgroundUrl = PLAYGROUND_URL_WITH_PLUGIN.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    if (tags.includes('gutenberg-plugin')) playgroundUrl = PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const urlZip = URL_EXAMPLE_ZIP.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    
    return [
      `![](https://placehold.co/15x15/${id}/${id})`,
      `[${id}](./plugins/${slug})`,
      description,
      tags
        .map((tagSlug) => `[\`${processedTags[tagSlug]}\`](#${tagSlug})`)
        .join(", "),
      `<a href="${urlZip}" target="_blank">📦</a>`,
      `<a href="${playgroundUrl}" target="_blank"><img src="./assets/icon-wp.svg"></a>`
    ];
  });
  const markdownTable = toMarkdownTable([
    ["", "ID", "Short description", "Tags", "Download .zip", "Live Demo"],
    ...markdownTableRows,
  ]);

  const markdownContentWithUpdatedTable = markdownContent.replace(
    regex,
    `${startMarker}\n${markdownTable}\n${endMarker}`
  );

  try {
    fs.writeFileSync(readmePath, markdownContentWithUpdatedTable);
    info(`${readmePathDisplay} was updated!`);
  } catch (err) {
    error(`An error has ocurred when saving the file ${readmePath}`);
    error(err);
  }
};
