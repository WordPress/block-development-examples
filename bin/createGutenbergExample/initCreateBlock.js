const { command } = require( 'execa' );
const { join } = require( 'path' );
const { info, success } = require( './log' );
const customizeBlockJson = require( './customizeBlockJson' );
const customizePackageJson = require( './customizePackageJson' );
const addExamplesJson = require( './addExamplesJson' );
const generateExamplesTableMarkdown = require('./generateExamplesTableMarkdown')

module.exports = async ( { slug, keywords, description } ) => {
	const rootPath = process.cwd();
	const pluginsFolderPath = join( rootPath, 'plugins' );
	const exampleFolderPath = join( pluginsFolderPath, `${slug}` );
	const packageJsonPath = join( exampleFolderPath, 'package.json' );
	const blockJsonPath = join( exampleFolderPath, 'src/block.json' );
	const readmePath = join( rootPath, 'README.md' );
	const examplesJsonPath = join( rootPath, 'data/examples.json' );
	const tagsJsonPath = join( rootPath, 'data/tags.json' );
	const stdio = "inherit"

	info( '' );
	info(`Scaffolding ${slug} example. It might take a couple of minutes...`);
	await command( `npx @wordpress/create-block@latest ${slug} --namespace gutenberg-examples --wp-scripts --template ../templates/create-gutenberg-example --variant basic`, 
		{ cwd: pluginsFolderPath },
		{ stdio }
	);
	
	info(`Installing dependencies...`);
	await command( `rimraf package-lock.json && rimraf node_modules`, 
		{ cwd: exampleFolderPath },
		{ stdio }
		);

	customizeBlockJson({ blockJsonPath, keywords })
	customizePackageJson({ packageJsonPath })
	const exampleObject = { slug, tags: keywords.slice(1), description }
	addExamplesJson( { examplesJsonPath, exampleObject } )
	generateExamplesTableMarkdown({readmePath, examplesJsonPath, tagsJsonPath, slug})

	await command( `pnpm i`, 
		{ cwd: rootPath },
		{ stdio }
	);
	
	
	// //info(`Running  node ./bin/createGutenbergExample/customizeBlockJson ${blockJsonPath} "${keywords.join(',')}"...`);
	// await command( `node ./bin/createGutenbergExample/customizeBlockJson ${blockJsonPath} "${keywords.join(',')}"`, 
	// 	{ cwd: rootPath },
	// 	{ stdio }
	// );

	info( '' );
	info( 'Formatting JavaScript files...' );
	await command( 'npm run format', 
		{ cwd: exampleFolderPath },
		{ stdio }
	);

	info( '' );
	info( 'Compiling block...' );
	await command( 'npm run build', 
		{ cwd: exampleFolderPath },
		{ stdio }
	);

	success(`Example ${slug} folder created at /plugins ✅`);

};
