const fs = require('fs');
const { info, error } = require( './log' );

module.exports = async ( { blockJsonPath, keywords } ) => {

    const blockJsonPathDisplay = blockJsonPath.split('/gutenberg-examples-2023/')[1]
    info(`Customizing ${blockJsonPathDisplay} ...`);
    const blockJsonObject = JSON.parse(fs.readFileSync(blockJsonPath, 'utf8'));

    const processedBlockJson = {
        ...blockJsonObject,
        keywords,
        title: `⭐️ ${blockJsonObject.title}`
    }

    try {
        fs.writeFileSync(blockJsonPath, JSON.stringify(processedBlockJson, null, 2), 'utf8');
    }
    catch(err) {
        error(`An error has ocurred when saving the file ${blockJsonPath}`);
        error(err);
    }

};