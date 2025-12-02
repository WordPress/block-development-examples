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

const { state } = store( 'router-2f43f8', {
	state: {
		urlRegionDisplay: window.location.href,
		get areNavigationLinksVisible() {
			return ! state.prev && ! state.next;
		},
		get itemSlug() {
			const ctx = getContext();
			return ctx.item.split( '|' )[ 0 ];
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

			state.urlRegionDisplay = state.base_url + '/' + e.target.href;
			console.log( 'mavigating to ', state.urlRegionDisplay );
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
