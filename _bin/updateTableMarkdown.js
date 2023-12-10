const { join } = require("path");
const fs = require('fs');

const generateExamplesTableMarkdown = require("./utils/generateExamplesTableMarkdown.js");
const examplesJson = require("../_data/examples.json");
const slug = process.argv[2];
const rootPath = process.cwd();
let readmePath;

if (slug == 'all') {
    const pluginsFolderNames = examplesJson.map(({slug}) => slug)
    pluginsFolderNames.forEach(plugin => {
        const pluginPath = join(rootPath, "plugins", plugin);
        if (!fs.existsSync(pluginPath)) throw `plugin path doesn't exist: ${pluginPath}`;
        readmePath = join(pluginPath, "README.md");
        generateExamplesTableMarkdown({slug: plugin, readmePath});
    });
    generateExamplesTableMarkdown({readmePath: join(rootPath, "README.md")});
    return;
}   
else if (slug && slug !== 'all') {
    const pluginPath = join(rootPath, "plugins", slug);
    if (!fs.existsSync(pluginPath)) throw `plugin path doesn't exist: ${pluginPath}`;
    readmePath = join(pluginPath, "README.md");
    generateExamplesTableMarkdown({slug, readmePath});
    return;
}

generateExamplesTableMarkdown({readmePath: join(rootPath, "README.md")});