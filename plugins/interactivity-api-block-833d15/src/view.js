/**
 * WordPress dependencies
 */
import { store } from '@wordpress/interactivity';

store( {
	actions: {
		'create-block': {
			toggle: ( { context } ) => {
				context[ 'create-block' ].isOpen = ! context[ 'create-block' ]
					.isOpen;
			},
		},
	},
	effects: {
		'create-block': {
			logIsOpen: ( { context } ) => {
				// Log the value of `isOpen` each time it changes.
				console.log( `Is open: ${ context[ 'create-block' ].isOpen }` );
			},
		},
	},
} );
