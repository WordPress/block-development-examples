const { join } = require("path");
const fs = require('fs');
const { info, error } = require( '../utils/log' );

module.exports = ( { packageJsonPath, slug, description } ) => {

    const packageJsonDisplay = packageJsonPath.split('/block-development-examples/')[1]
    const packageJsonObject = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const processedPackageJson = {
        ...packageJsonObject,
        name: `@block-development-examples/${slug}`,
        description
    }
    
    try {
        info(`Customizing ${packageJsonDisplay} ...`);
        fs.writeFileSync(packageJsonPath, JSON.stringify(processedPackageJson, null, 2), 'utf8');
        //info(`${packageJsonDisplay} was customized`);
    }
    catch(err) {
        error(`An error has ocurred when saving the file ${packageJsonPath}`);
        error(err);
    }

};