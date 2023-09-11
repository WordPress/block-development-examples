const fs = require('fs');
const { info, error } = require( './log' );

module.exports = async ( { examplesJsonPath, exampleObject } ) => {
    const examplesJsonPathDisplay = examplesJsonPath.split('/gutenberg-examples-2023/')[1]
    info(`Adding ${exampleObject.slug} example to ${examplesJsonPathDisplay} ...`);
    const examplesJsonArray = JSON.parse(fs.readFileSync(examplesJsonPath, 'utf8'));

    const processedExamplesJson = [
        ...examplesJsonArray,
        exampleObject
    ]

    try {
        fs.writeFileSync(examplesJsonPath, JSON.stringify(processedExamplesJson, null, 2), 'utf8');
        //info(`${packageJsonDisplay} was customized`);
    }
    catch(err) {
        error(`An error has ocurred when saving the file ${examplesJsonPath}`);
        error(err);
    }

};