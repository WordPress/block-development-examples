import { store, getServerState, getContext } from '@wordpress/interactivity';

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
			state.urlRegionDisplay = e.target.href;
			yield actions.navigate( e.target.href );
		},
	},
	callbacks: {
		newPage() {
			const serverState = getServerState();
			state.prev = serverState.prev;
			state.next = serverState.next;
			state.currentSlug = serverState.currentSlug;
		},
	},
} );
