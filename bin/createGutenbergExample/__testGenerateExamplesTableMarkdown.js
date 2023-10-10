const generateExamplesTableMarkdown = require('./generateExamplesTableMarkdown')
const readmePath = './README.md';
const examplesJsonPath = './data/examples.json';
const tagsJsonPath = './data/tags.json';
const slug = 'block-static-rendering-b16608';

generateExamplesTableMarkdown({readmePath, examplesJsonPath, tagsJsonPath, slug})