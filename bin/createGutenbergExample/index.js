const fs = require('fs-extra')
const { program } = require("commander");
const randomHexCode = require("./randomHexCode");
const { info } = require("./log");
const initCreateBlock = require("./initCreateBlock");
const { input, checkbox, select } = require("@inquirer/prompts");
const examples = require("../../data/examples.json");
const tags = require("../../data/tags.json");
const { join } = require( 'path' );

const DESC_MAX_LENTH = 50;
process.stdout.write('\033c');

const initHighlightColor = "\x1b[33m";
const backtoBlack = "\x1b[0m";
const highlightText = text => `${initHighlightColor}${text}${backtoBlack}`

async function promptUser() {

  let preChosenKeywords = [];
  let variant = "";

  const extraInfoExamples = `\x1b[0mhttps://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#list-of-examples\x1b[0m\n\n`
  console.log(`CREATE GUTENBERG EXAMPLE ASSISTANT\n`)
  
  const source = await select({
    message: "Choose an existing gutenberg example you'd like to base your new example from:" ,
    choices: examples.map(({slug, description, tags}) => {
      return {
        name: slug,
        value: slug,
        description: `\n${description} (${tags.join(', ')}) \n${extraInfoExamples}`
      }
    })
    // choices: [
    //   {
    //     name: "[A] Block",
    //     value: "plugin-block",
    //     description: `\n[A] Block → Scaffold the structure for ${highlightText("a plugin that registers a block")}`,
    //   },
    //   {
    //     name: "[B] Plugin",
    //     value: "plugin-no-block",
    //     description: `\n[B] Plugin → Scaffold the structure for ${highlightText("just a plugin without registering any block")}`,
    //   },
    //   {
    //     name: "[C] Several Blocks",
    //     value: "plugin-several-blocks",
    //     description: `\n[C] Several Blocks → Scaffold the structure for ${highlightText("a plugin that registers several blocks")}`,
    //   },
    // ]
  });


  // console.log({type})
  // if (type === 'plugin-no-block') {
  //   preChosenKeywords = [...preChosenKeywords, 'no-block']
  //   variant = "plugin";
  // }

  
  // const extraInfoStaticDynamicBlocks = `(see https://developer.wordpress.org/news/2023/02/static-vs-dynamic-blocks-whats-the-difference/)`
  // if (type === "plugin-block") {
  //   variant = await select({
  //     message: "Select a variant for your block",
  //     choices: [
  //       {
  //         name: "[A] Dynamic",
  //         value: "dynamic-block",
  //         description: `\n[A] Dynamic → Scaffold the structure for ${highlightText("a plugin registering a dynamic block (edit.js, render.php)")}` + `\n${extraInfoStaticDynamicBlocks}`,
  //       },
  //       {
  //         name: "[B] Static",
  //         value: "static-block",
  //         description: `\n[B] Static → Scaffold the structure for ${highlightText("a plugin registering a static block (edit.js, save.js)")}` + `\n${extraInfoStaticDynamicBlocks}`,
  //       },
  //     ],
  //   });
  // }

  if (variant) {
    console.log({variant});
    preChosenKeywords = [...preChosenKeywords, variant]
  }
  const exampleID = randomHexCode();
  
  const name = await input({
    message: `Enter a ${highlightText("name for your gutenberg example")} (it will be used to generate the example slug): `
  });
  const slug = `${name.toLowerCase().split(" ").join("-")}-${exampleID}`;
  
  console.log({name, slug})
  const description = await input({
    message: `Enter a ${highlightText("brief description for your gutenberg example")} : `,
    validate: (value = "") =>
    value.length <= DESC_MAX_LENTH || "Pass a valid hex value",
  });
  console.log({description})

  const extraInfoTags = `\x1b[0msee full explanation of each tag at https://github.com/wordpress-juanmaguitar/gutenberg-examples-2023/tree/trunk#tags\x1b[0m\n\n`
  
  const keywords = await checkbox({
    message: `Select some ${highlightText("tags for your gutenberg example")}: ` + `\n${extraInfoTags}`,
    choices: tags.map(({ slug, name }) => {
      let choiceObject = { value: slug, name }
      if (preChosenKeywords.some(keyword => keyword === slug)) {
        choiceObject = {
          ...choiceObject,
          checked: true
        }
      }
      //console.log(choiceObject)
      return choiceObject;
    })
  });
  //console.log({keywords})
  
  return {
    keywords: [exampleID, ...keywords],
    name,
    description,
    slug,
    //type = 'block',
    variant,
    source
  };
}

promptUser().then(({ source: sourceFolder, slug: destinationFolder }) => {
  const rootPath = process.cwd();
  return {
    sourcePath: join(rootPath, `plugins`, sourceFolder ),
    destinationPath: join(rootPath, `plugins`, destinationFolder )
  }
}).then(({sourcePath, destinationPath }) => fs.copy(sourcePath, destinationPath )).then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

//       // With Promises:
//     fs.copy('/tmp/myfile', '/tmp/mynewfile')
//     .then(() => {
//       console.log('success!')
//     })
//     .catch(err => {
//       console.error(err)
//     })


//   console.log({sourceFolder, destinationFolder})
//   console.log({sourcePath, destinationPath})
//   duplicateExampleNewName(sourcePath, destinationPath)
// });
//promptUser().then(initCreateBlock);
//promptUser().then(console.log);

// program
//   .version('1.0.0', '-v, --version')
//   .usage('[OPTIONS]...')
//   .option('-s, --slug  <value>', 'Detects if the flag is present.',  'Default')
//   .option('-b, --block', 'Boolean value block' )
//   .option('-p, --plugin', 'Boolean value plugin')
//   .option('-k, --keywords <value>', 'keywords', 'Default' )
//   .option('-d, --description <value>', 'description', 'Default' )
//   .option('-v, --variant <value>', 'variant', 'static' )
//   .parse(process.argv);

// const options = program.opts();
// const exampleID = randomHexCode();
// const sluWithId = `${options.slug}-${exampleID}`;

// info(`ID assigned to the example is: ${exampleID}`);
// info(`slug assigned to the example is: ${sluWithId}`);
// info(`keywords are: ${options.keywords}`);
// info(`short description is: ${options.description}`);
// info(`variant is: ${options.variant}`);

// initCreateBlock({
//     ...options,
//     keywords: [exampleID, ...options.keywords.split(',').map(k => k.trim())],
//     slug: sluWithId,
//     description: options.description,
//     variant: options.variant
// })
