import { map, find, without } from 'lodash';

export default function reducer( state = [], action ) {
	switch ( action.type ) {
		case 'ADD_COUNTER':
			return [ ...state, { id: action.counterId, value: 0 } ];

		case 'REMOVE_COUNTER':
			return without( state, find( state, { id: action.counterId } ) );

		case 'SET_COUNTER_VALUE':
			return map( state, ( counter ) =>
				counter.id === action.counterId
					? { ...counter, value: action.value }
					: counter
			);
	}

	return state;
}
