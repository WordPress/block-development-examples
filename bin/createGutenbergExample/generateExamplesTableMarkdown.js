const { join } = require("path");
const fs = require("fs");
const toMarkdownTable = require("markdown-table");
const { info, error } = require("../log");

const rootPath = process.cwd();
const readmePathRoot = join(rootPath, "README.md");
const examplesJsonPath = join(rootPath, "data/examples.json");
const tagsJsonPath = join(rootPath, "data/tags.json");

const {
  PLAYGROUND_URL_WITH_PLUGIN,
  PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG,
  SLUG_EXAMPLE_MARKER,
  URL_EXAMPLE_ZIP,
  URL_WIKI,
  WIKI_PAGE_WHY_ID,
  WIKI_PAGE_TAGS,
  URL_ASSETS
} = require("./constants");  

const startMarker = "<!-- @TABLE EXAMPLES BEGIN -->";
const endMarker = "<!-- @TABLE EXAMPLES END -->";

module.exports = ({ slug: slugReadme, readmePath = readmePathRoot }) => {
  
  const examplesJson = JSON.parse(fs.readFileSync(examplesJsonPath, "utf8"));
  const tagsJson = JSON.parse(fs.readFileSync(tagsJsonPath, "utf8"));
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
  let processedExamplesJson = examplesJson;
  if (slugReadme) {
    processedExamplesJson = examplesJson.filter(({ slug }) => slug === slugReadme);
  } 

  const urlAssetIconWp = `https://raw.githubusercontent.com/wordpress-juanmaguitar/wp-block-development-examples/trunk/assets/icon-wp.svg`;
  const urlRepo = `https://github.com/wordpress-juanmaguitar/wp-block-development-examples/tree/trunk`
  const markdownTableRows = processedExamplesJson.map(({ slug, description, tags }) => {
    const id = slug.split("-").pop();
    let playgroundUrl = PLAYGROUND_URL_WITH_PLUGIN.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    if (tags.includes('gutenberg-plugin')) playgroundUrl = PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const urlZip = URL_EXAMPLE_ZIP.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const descLinkZip = `Install the plugin using this zip and activate it. Then use the ID of the block (${id}) to find it and add it to a post to see it in action`
    const descLinkPlayground = `Use the ID of the block (${id}) to find it and add it to a post to see it in action`
    return [
      `[📁](${urlRepo}/plugins/${slug})`,
      description,
      tags
        .map((tagSlug) => `<small><code><a href="${URL_WIKI}/${WIKI_PAGE_TAGS}#${tagSlug}">${processedTags[tagSlug]}</a></code></small>`)
        .join(", "),
      "`" + id + "`",
      `[📦](${urlZip} "${!tags.includes('no-block') ? descLinkZip : '' }")`,
      `[![](${urlAssetIconWp})](${playgroundUrl} "${!tags.includes('no-block') ? descLinkPlayground : ''}")`,
    ];
  });
  const markdownTable = toMarkdownTable([
    ["Folder", `<span style="display: inline-block; width:250px">Short description</span>`, "Tags", `ID ([❓](${URL_WIKI}/${WIKI_PAGE_WHY_ID} "Why an ID for every example?"))`, "Download .zip", "Live Demo"],
    ...markdownTableRows,
  ]);

  const markdownContentWithUpdatedTable = markdownContent.replace(
    regex,
    `${startMarker}\n${markdownTable}\n${endMarker}`
  );

  try {
    fs.writeFileSync(readmePath, markdownContentWithUpdatedTable);
    info(`README.md was updated!`);
  } catch (err) {
    error(`An error has ocurred when saving the file ${readmePath}`);
    error(err);
  }
};
