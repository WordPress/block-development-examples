const { input, checkbox, select } = require("@inquirer/prompts");
const { info, highlightTextPrimary, highlightTextSecondary } = require("../utils/log");
const initCreateExample = require("./initCreateExample");
const randomHexCode = require("../utils/randomHexCode");
const examples = require("../../_data/examples.json");
const tags = require("../../_data/tags.json");
const {REPO_ORIGIN} = require("../constants");

const DESC_MAX_LENTH = 50;
process.stdout.write('\033c');

const initHighlightColor = "\x1b[33m";
const backtoBlack = "\x1b[0m";
const highlightText = text => `${initHighlightColor}${text}${backtoBlack}`

async function promptUser() {

  let preChosenKeywords = [];

  const extraInfoExamples = `\x1b[0mhttps://github.com/${REPO_ORIGIN}/tree/trunk#list-of-examples\x1b[0m\n\n`
  info(`Block Development Examples CREATION ASSISTANT\n`)
  info(`Answer the following 4 questions to generate a new gutenberg example based on an existing one\n`)
  
  const source = await select({
    message: `[1/4] Choose an existing ${highlightTextPrimary("gutenberg example you'd like to base your new example from")}:` ,
    choices: examples.map(({slug, description, tags}) => {
      return {
        name: slug,
        value: slug,
        description: `\nslug: ${slug}\nDescription: ${highlightTextSecondary(description)}\nTags: ${highlightTextSecondary(tags.join(', '))}\n\n${extraInfoExamples}`
      }
    })
  });
  //info({source})

  const exampleID = randomHexCode();
  
  const name = await input({
    message: `[2/4] Enter a ${highlightText("name for your gutenberg example")} (it will be used to generate the example slug): `
  });
  const slug = `${name.toLowerCase().split(" ").join("-")}-${exampleID}`;
  
  info(`The slug ${highlightTextSecondary(slug)} has been generated for your new example`)

  const description = await input({
    message: `[3/4] Enter a ${highlightText("brief description for your gutenberg example")} : `,
    validate: (value = "") =>
    value.length <= DESC_MAX_LENTH || "Pass a valid hex value",
  });
  // info({description})

  const extraInfoTags = `\x1b[0msee full explanation of each tag at https://github.com/${REPO_ORIGIN}/tree/trunk#tags\x1b[0m\n\n`
  
  const keywords = await checkbox({
    message: `[4/4] Select some ${highlightText("tags for your gutenberg example")}: ` + `\n${extraInfoTags}`,
    choices: tags
      .sort(({slug: slugA}, {slug: slugB}) => (slugA < slugB) ? -1 : (slugA > slugB) ? 1 : 0 )
      .map(({ slug, name }) => {
      let choiceObject = { value: slug, name }
      if (preChosenKeywords.some(keyword => keyword === slug)) {
        choiceObject = {
          ...choiceObject,
          checked: true
        }
      }
      return choiceObject;
    })
  });
  
  return {
    keywords: [exampleID, ...keywords],
    name,
    description,
    slug,
    source,
    id: exampleID
  };
}

promptUser().then(initCreateExample);

