const { join } = require("path");
const fs = require("fs");

const rootPath = process.cwd();
const examplesJsonPath = join(rootPath, "_data/examples.json");
const tagsJsonPath = join(rootPath, "_data/tags.json");
const readmePath = join(rootPath, "README.md");

const examplesJson = JSON.parse(fs.readFileSync(examplesJsonPath, "utf8"));
const tagsJson = JSON.parse(fs.readFileSync(tagsJsonPath, "utf8"));

const examplesPerTag = tagsJson.reduce((acc, { slug }) => { 
    acc[slug] = examplesJson.filter(({ tags }) => tags.includes(slug));
    return acc;
}, {});

const markdownContent = fs.readFileSync(readmePath, "utf8");

for (const slugTag in examplesPerTag) {
    const heading = "##### `" + slugTag.replace(/-/g, " ").toUpperCase() + "`";
    //const RegExp = new RegExp(heading, "gm");
    // replace regex with heading and examples per slugTag  
    //
    // const markdownContentTable = markdownContent.match(RegExp)[0];
    // const startMarker = "<!-- @TABLE EXAMPLES BEGIN -->";
    console.log(heading);
  }

  

console.log(examplesPerTag);