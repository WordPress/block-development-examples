import { SearchControl } from '@wordpress/components';
import { useState, createRoot } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

import { Notifications, CreatePageButton, PagesList } from './components/';

import './style.scss';

function MyFirstApp() {
	const [ searchTerm, setSearchTerm ] = useState( '' );
	const { pages, hasResolved } = useSelect(
		( select ) => {
			const query = {};
			if ( searchTerm ) {
				query.search = searchTerm;
			}
			const selectorArgs = [ 'postType', 'page', query ];
			return {
				pages: select( coreDataStore ).getEntityRecords(
					...selectorArgs
				),
				hasResolved: select( coreDataStore ).hasFinishedResolution(
					'getEntityRecords',
					selectorArgs
				),
			};
		},
		[ searchTerm ]
	);

	return (
		<div>
			<div className="list-controls">
				<SearchControl
					onChange={ setSearchTerm }
					value={ searchTerm }
				/>
				<CreatePageButton />
			</div>
			<PagesList hasResolved={ hasResolved } pages={ pages } />
			<Notifications />
		</div>
	);
}

window.addEventListener(
	'load',
	function () {
		const rootDomElement = document.getElementById(
			'my-custom-gutenberg-app'
		);
		const root = createRoot( rootDomElement );
		root.render( <MyFirstApp /> );
	},
	false
);
