const {program} = require('commander');
const randomHexCode = require('./randomHexCode');
const { info } = require( './log' );
const initCreateBlock = require( './initCreateBlock' );

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-s, --slug  <value>', 'Detects if the flag is present.',  'Default')
  .option('-b, --block', 'Boolean value block' )
  .option('-p, --plugin', 'Boolean value plugin')
  .option('-k, --keywords <value>', 'keywords', 'Default' )
  .option('-d, --description <value>', 'description', 'Default' )
  .parse(process.argv);

const options = program.opts();
const exampleID = randomHexCode();
const sluWithId = `${options.slug}-${exampleID}`;

info(`ID assigned to the example is: ${exampleID}`);
info(`slug assigned to the example is: ${sluWithId}`);
info(`keywords are: ${options.keywords}`);
info(`short description is: ${options.description}`);

initCreateBlock({
    ...options,
    keywords: [exampleID, ...options.keywords.split(',').map(k => k.trim())],
    slug: sluWithId,
    description: options.description
})




//const flag = (options.flag ? 'Flag is present.' : 'Flag is not present.');

// console.log('Flag:', `${flag}`);
// console.log('Custom:', `${options.custom}`);