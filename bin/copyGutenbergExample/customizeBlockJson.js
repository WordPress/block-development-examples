const fs = require('fs');
const { info, error } = require( '../log' );

module.exports = ( { blockJsonPath, keywords, slug, name, description } ) => {

    const blockJsonPathDisplay = blockJsonPath.split('/block-development-examples/')[1]
    const blockJsonObject = JSON.parse(fs.readFileSync(blockJsonPath, 'utf8'));
    
    const processedBlockJson = {
        ...blockJsonObject,
        keywords,
        name: `block-development-examples/${slug}`,
	    title: `⭐️ ${name}`,
        description
    }
    
    try {
        info(`Customizing ${blockJsonPathDisplay} ...`);
        fs.writeFileSync(blockJsonPath, JSON.stringify(processedBlockJson, null, 2), 'utf8');
    }
    catch(err) {
        error(`An error has ocurred when saving the file ${blockJsonPath}`);
        error(err);
    }

};