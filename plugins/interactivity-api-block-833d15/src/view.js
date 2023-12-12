/**
 * WordPress dependencies
 */
// eslint-disable-next-line import/named
import { store, getContext } from '@wordpress/interactivity';

store( 'interactivity-api-block-833d15__store', {
	actions: {
		toggle: () => {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
