const { join } = require("path");
const fs = require('fs');

const generateExamplesTableMarkdown = require("./copyGutenbergExample/generateExamplesTableMarkdown.js");
const slug = process.argv[2];
const rootPath = process.cwd();
let readmePath;

if (slug) {
    const pluginPath = join(rootPath, "plugins", slug);
    if (!fs.existsSync(pluginPath)) throw `plugin path doesn't exist: ${pluginPath}`;
    readmePath = join(pluginPath, "README.md");
    console.log({slug, readmePath})
}

generateExamplesTableMarkdown({slug, readmePath});
