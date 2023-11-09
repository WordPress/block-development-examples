const { join } = require("path");
const fs = require('fs');

const generateExamplesTableMarkdown = require("./copyGutenbergExample/generateExamplesTableMarkdown.js");
const examplesJson = require("../data/examples.json");
const slug = process.argv[2];
const rootPath = process.cwd();
let readmePath;
console.log({slug});
if (slug == 'all') {
    const pluginsFolderNames = examplesJson.map(({slug}) => slug)
    pluginsFolderNames.forEach(plugin => {
        const pluginPath = join(rootPath, "plugins", plugin);
        if (!fs.existsSync(pluginPath)) throw `plugin path doesn't exist: ${pluginPath}`;
        readmePath = join(pluginPath, "README.md");
        if (!fs.existsSync(readmePath)) throw `readme path doesn't exist: ${readmePath}`;
        generateExamplesTableMarkdown({slug: plugin, readmePath});
    });
    generateExamplesTableMarkdown({readmePath: join(rootPath, "README.md")});
    return;
}   
else if (slug && slug !== 'all') {
    const pluginPath = join(rootPath, "plugins", slug);
    if (!fs.existsSync(pluginPath)) throw `plugin path doesn't exist: ${pluginPath}`;
    readmePath = join(pluginPath, "README.md");
    if (!fs.existsSync(readmePath)) throw `readme path doesn't exist: ${readmePath}`;
    generateExamplesTableMarkdown({slug, readmePath});
    return;
}

generateExamplesTableMarkdown({readmePath: join(rootPath, "README.md")});