const { join } = require("path");
const fs = require("fs");
const toMarkdownTable = require("markdown-table");
const { info, error } = require("./log");
const querystring = require('querystring');

const rootPath = process.cwd();
const readmePathRoot = join(rootPath, "README.md");
const examplesJsonPath = join(rootPath, "_data/examples.json");
const tagsJsonPath = join(rootPath, "_data/tags.json");

const {
  PLAYGROUND_URL_WITH_PLUGIN,
  PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG,
  SLUG_EXAMPLE_MARKER,
  URL_EXAMPLE_ZIP,
  URL_WIKI,
  WIKI_PAGE_WHY_ID,
  WIKI_PAGE_TAGS,
  URL_ASSETS,
  URL_REPO,
  URL_PLAYGROUND_BLUEPRINT
} = require("../constants");  

const startMarker = "<!-- @TABLE EXAMPLES BEGIN -->";
const endMarker = "<!-- @TABLE EXAMPLES END -->";

module.exports = ({ slug: slugReadme = '', readmePath = readmePathRoot } = {}) => {
  
  const examplesJson = JSON.parse(fs.readFileSync(examplesJsonPath, "utf8"));
  const tagsJson = JSON.parse(fs.readFileSync(tagsJsonPath, "utf8"));
  const markdownContent = fs.readFileSync(readmePath, "utf8");
    
  const regex = new RegExp(
    `${startMarker}\(\[\.\\n\\s\\S\]\*\)${endMarker}`,
    "gm"
  );

  const sortFeaturedFirst = ({ tags: tagsExampleA }, { tags: tagsExampleB } ) => {
    
    if (!tagsExampleA.includes("featured") && !tagsExampleB.includes("featured")) {
      return 0;
    } else if (!tagsExampleA.includes("featured")) {
      return 1;
    } else if (!tagsExampleB.includes("featured")) {
      return -1;
    }
  }

  const processedTags = tagsJson.reduce(
    (acc, { slug, name }) => ({ ...acc, [slug]: name }),
    {}
  );
  let processedExamplesJson;
  if (slugReadme) {
    processedExamplesJson = examplesJson.filter(({ slug }) => slug === slugReadme);
  } 
  else {
    processedExamplesJson = examplesJson.sort(sortFeaturedFirst);
  }  

  const urlAssetIconWp = `${URL_ASSETS}/icon-wp.svg`;
  const markdownTableRows = processedExamplesJson.map(({ slug, description, tags }) => {
    const id = slug.split("-").pop();
    let playgroundUrl = PLAYGROUND_URL_WITH_PLUGIN.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    if (tags.includes('gutenberg-plugin')) playgroundUrl = PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const urlZip = URL_EXAMPLE_ZIP.replaceAll(SLUG_EXAMPLE_MARKER,slug);
    const descLinkZip = `Install the plugin using this zip and activate it. Then use the ID of the block (${id}) to find it and add it to a post to see it in action`
    const descLinkPlayground = `Use the ID of the block (${id}) to find it and add it to a post to see it in action`
    const pathBlueprint = `${rootPath}/plugins/${slug}/_playground/blueprint.json`;

    if (fs.existsSync(pathBlueprint)) {
      let playgroundUrlBlueprint = URL_PLAYGROUND_BLUEPRINT.replaceAll(SLUG_EXAMPLE_MARKER,slug);
      playgroundUrl = `https://playground.wordpress.net/?blueprint-url=${playgroundUrlBlueprint}`;
    }

    return [
      `[📁](${URL_REPO}/plugins/${slug})`,
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
    info(`${readmePath.split('block-development-examples')[1]} was updated!`);
  } catch (err) {
    error(`An error has ocurred when saving the file ${readmePath}`);
    error(err);
  }
};
