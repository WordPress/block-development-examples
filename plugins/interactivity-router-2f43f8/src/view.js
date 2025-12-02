import {
	store,
	getServerState,
	getContext,
	getElement,
} from '@wordpress/interactivity';

const isValidLink = ( ref ) =>
	ref &&
	ref instanceof window.HTMLAnchorElement &&
	ref.href &&
	( ! ref.target || ref.target === '_self' ) &&
	ref.origin === window.location.origin;

// Shared prefetch logic
const prefetchLink = function* ( ref ) {
	if ( isValidLink( ref ) ) {
		const { actions } = yield import( '@wordpress/interactivity-router' );
		yield actions.prefetch( ref.href );
	}
};

const removeSlashes = ( str ) => str.replace( /^\/+|\/+$/g, '' );

// Helper function to properly build URLs
const buildUrl = ( base, path ) => {
	// Ensure base ends with / and path doesn't start with /
	const baseWithSlash = base.endsWith( '/' ) ? base : base + '/';
	const cleanPath = removeSlashes( path );
	return baseWithSlash + cleanPath;
};

const { state } = store( 'router-2f43f8', {
	state: {
		urlRegionDisplay: window.location.href,
		get areNavigationLinksVisible() {
			return ! state.prev && ! state.next;
		},
		get itemSlug() {
			const ctx = getContext();
			const slug = ctx.item.split( '|' )[ 0 ];
			return buildUrl( state.base_url, slug );
		},
		get itemName() {
			const ctx = getContext();
			return ctx.item.split( '|' )[ 1 ];
		},
		get isCurrentSlug() {
			return state.currentSlug === state.itemSlug;
		},
	},
	actions: {
		*navigate( e ) {
			e.preventDefault();
			const { actions } = yield import(
				'@wordpress/interactivity-router'
			);
			state.urlRegionDisplay = e.target.href;
			console.log( 'Navigating to: ', state.urlRegionDisplay );
			console.log( 'Base URL: ', state.base_url );
			yield actions.navigate( e.target.href );
		},
		*prefetch() {
			const { ref } = getElement();
			yield* prefetchLink( ref );
		},
	},
	callbacks: {
		newPage() {
			const serverState = getServerState();
			console.log( 'Server state: ', serverState );
			console.log( 'Client state: ', state );
			state.prev = serverState.prev;
			state.next = serverState.next;
			state.currentSlug = serverState.currentSlug;
		},
		*prefetch() {
			const { ref } = getElement();
			yield* prefetchLink( ref );
		},
	},
} );
