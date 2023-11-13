import { withSelect, withDispatch } from '@wordpress/data';

import { v4 as uuid } from 'uuid';

import Counter from './Counter';

const CounterList = ( { addCounter, counterIds } ) => (
	<div>
		{ counterIds.map( ( id ) => (
			<Counter key={ id } counterId={ id } />
		) ) }
		<button onClick={ addCounter }>Add Counter</button>
	</div>
);

const withCounterIds = withSelect( ( select ) => {
	const { getCounterIds } = select( 'react-example/counters' );
	return {
		counterIds: getCounterIds(),
	};
} );

const withCounterAdder = withDispatch( ( dispatch ) => {
	const { addCounter } = dispatch( 'react-example/counters' );
	return {
		addCounter: () => addCounter( uuid() ),
	};
} );

export default withCounterAdder( withCounterIds( CounterList ) );
