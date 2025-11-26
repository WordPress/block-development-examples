import { registerBlockBindingsSource } from '@wordpress/blocks';

const readOnlyAttributes = [ 'permalink' ];

const editableAttributes = [ 'title', 'excerpt' ];

registerBlockBindingsSource( {
	name: 'block-dev-ex/post-data',
	usesContext: [ 'postType' ],
	getValues( { select, bindings } ) {
		const values = {};
		console.log( { select, bindings } );
		for ( const [ attributeName, source ] of Object.entries( bindings ) ) {
			if (
				editableAttributes.includes( source.args.key ) ||
				readOnlyAttributes.includes( source.args.key )
			) {
				if ( 'permalink' === source.args.key ) {
					values[ attributeName ] =
						select( 'core/editor' ).getPermalink();
				} else {
					values[ attributeName ] = select(
						'core/editor'
					).getEditedPostAttribute( source.args.key );
				}
			}
		}
		return values;
	},
	setValues( { dispatch, bindings } ) {
		const values = {};

		for ( const [ , source ] of Object.entries( bindings ) ) {
			values[ source.args.key ] = source.newValue;
		}

		if ( Object.keys( values ).length > 0 ) {
			dispatch( 'core/editor' ).editPost( values );
		}
	},
	canUserEditValue( { context, args } ) {
		return (
			'post' === context.postType &&
			editableAttributes.includes( args.key )
		);
	},
	getFieldsList() {
		return [
			{
				label: 'Title',
				type: 'string',
				args: {
					key: 'title',
				},
			},
			{
				label: 'Excerpt',
				type: 'string',
				args: {
					key: 'excerpt',
				},
			},
			{
				label: 'Permalink',
				type: 'string',
				args: {
					key: 'permalink',
				},
			},
		];
	},
} );
