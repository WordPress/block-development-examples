const fs = require("fs");
const toMarkdownTable = require("markdown-table");
const { info, error } = require("./log");

const {
  PLAYGROUND_URL_WITH_PLUGIN,
  PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG,
  SLUG_EXAMPLE_MARKER,
} = require("./constants");

const startMarker = "<!-- @TABLE EXAMPLES BEGIN -->";
const endMarker = "<!-- @TABLE EXAMPLES END -->";

console.log({SLUG_EXAMPLE_MARKER, endMarker})
module.exports = ({ readmePath, examplesJsonPath, tagsJsonPath, slug }) => {
  console.log({readmePath, examplesJsonPath, tagsJsonPath, slug})
  const examplesJson = JSON.parse(fs.readFileSync(examplesJsonPath, "utf8"));
  const tagsJson = JSON.parse(fs.readFileSync(tagsJsonPath, "utf8"));

  const readmePathDisplay = readmePath.split("/gutenberg-examples-2023/")[1];
  info(`Updating ${readmePathDisplay} with example ${slug}...`);

  const markdownContent = fs.readFileSync(readmePath, "utf8");
  const regex = new RegExp(
    `${startMarker}\(\[\.\\n\\s\\S\]\*\)${endMarker}`,
    "gm"
  );
  const markdownContentTable = markdownContent
    .match(regex)[0]
    .replace(startMarker, "")
    .replace(endMarker, "");

  const processedTags = tagsJson.reduce(
    (acc, { slug, name }) => ({ ...acc, [slug]: name }),
    {}
  );

  const markdownTableRows = examplesJson.map(({ slug, description, tags }) => {
    const id = slug.split("-").pop();
    return [
      `![](https://placehold.co/15x15/${id}/${id})`,
      `[${id}](./plugins/${slug})`,
      description,
      tags
        .map((tagSlug) => `[\`${processedTags[tagSlug]}\`](#${tagSlug})`)
        .join(", "),
      `<a href="${!tags.includes('gutenberg-plugin') ? PLAYGROUND_URL_WITH_PLUGIN.replaceAll(SLUG_EXAMPLE_MARKER,slug) : PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG.replaceAll(SLUG_EXAMPLE_MARKER,slug)}" target="_blank">🖥️</a>`
    ];
  });
  const markdownTable = toMarkdownTable([
    ["&nbsp", "ID", "Short description", "tags", "See online"],
    ...markdownTableRows,
  ]);

  const markdownContentWithUpdatedTable = markdownContent.replace(
    regex,
    `${startMarker}\n${markdownTable}\n${endMarker}`
  );

  try {
    fs.writeFileSync(readmePath, markdownContentWithUpdatedTable);
    //info(`${readmePathDisplay} was updated!`);
  } catch (err) {
    error(`An error has ocurred when saving the file ${readmePath}`);
    error(err);
  }
};
