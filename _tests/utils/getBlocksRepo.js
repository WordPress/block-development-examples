const fs = require( 'fs' );
const path = require( 'path' );

// Generated output and dependencies contain copies of block.json files which
// would register the same block names twice.
const IGNORED_DIRECTORIES = [ 'build', 'node_modules', 'vendor' ];

function findBlockJsonFiles( directory ) {
	return fs
		.readdirSync( directory, { withFileTypes: true } )
		.flatMap( ( entry ) => {
			if ( entry.isDirectory() ) {
				if (
					entry.name.startsWith( '.' ) ||
					IGNORED_DIRECTORIES.includes( entry.name )
				) {
					return [];
				}
				return findBlockJsonFiles( path.join( directory, entry.name ) );
			}

			return entry.name === 'block.json'
				? [ path.join( directory, entry.name ) ]
				: [];
		} );
}

/**
 * Collects every block declared in a directory tree.
 *
 * @param {string} pluginsPath Directory to search for block.json files.
 * @return {Array<{name: string, parent: string|undefined}>} Blocks, sorted by
 * name. `parent` is set for blocks that can only exist inside another block.
 */
function getBlocksRepo( pluginsPath ) {
	const blocks = findBlockJsonFiles( pluginsPath )
		.map( ( filePath ) =>
			JSON.parse( fs.readFileSync( filePath, 'utf8' ) )
		)
		.filter( ( metadata ) => metadata.name )
		.map( ( { name, parent } ) => ( { name, parent: parent?.[ 0 ] } ) );

	return [ ...new Map( blocks.map( ( b ) => [ b.name, b ] ) ).values() ].sort(
		( a, b ) => a.name.localeCompare( b.name )
	);
}

module.exports = getBlocksRepo;
