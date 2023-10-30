const { join } = require("path");
const fs = require('fs');
const { info, error } = require( '../log' );

const rootPath = process.cwd();
const examplesJsonPath = join(rootPath, "data/examples.json");

module.exports = async ( { exampleObject } ) => {
    const examplesJsonPathDisplay = examplesJsonPath.split('/wp-block-development-examples/')[1]
    const examplesJsonArray = JSON.parse(fs.readFileSync(examplesJsonPath, 'utf8'));
    
    const processedExamplesJson = [
        ...examplesJsonArray,
        exampleObject
    ]
    
    try {
        info(`Adding ${exampleObject.slug} example to ${examplesJsonPathDisplay} ...`);
        fs.writeFileSync(examplesJsonPath, JSON.stringify(processedExamplesJson, null, 2), 'utf8');
        //info(`${packageJsonDisplay} was customized`);
    }
    catch(err) {
        error(`An error has ocurred when saving the file ${examplesJsonPath}`);
        error(err);
    }

};