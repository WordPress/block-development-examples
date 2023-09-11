const fs = require('fs');
const { info, error } = require( './log' );

module.exports = async ( { packageJsonPath } ) => {

    const packageJsonDisplay = packageJsonPath.split('/gutenberg-examples-2023/')[1]
    info(`Customizing ${packageJsonDisplay} ...`);
    const packageJsonObject = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    const processedPackageJson = {
        ...packageJsonObject,
        files: ['*'],
        name: `@gutenberg-examples/${packageJsonObject.name}`
    }

    try {
        fs.writeFileSync(packageJsonPath, JSON.stringify(processedPackageJson, null, 2), 'utf8');
        //info(`${packageJsonDisplay} was customized`);
    }
    catch(err) {
        error(`An error has ocurred when saving the file ${packageJsonPath}`);
        error(err);
    }

};