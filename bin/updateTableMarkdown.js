const generateExamplesTableMarkdown = require("./createGutenbergExample/generateExamplesTableMarkdown.js");
const slug = process.argv[2];
generateExamplesTableMarkdown({slug});
