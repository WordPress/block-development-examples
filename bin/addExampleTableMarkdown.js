const generateExamplesTableMarkdown = require("./createGutenbergExample/generateExamplesTableMarkdown.js");
// get slug from command line
const slug = process.argv[2];
// generate markdown table
generateExamplesTableMarkdown({slug});