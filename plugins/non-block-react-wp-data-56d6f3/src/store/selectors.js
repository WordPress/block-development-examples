import { map, find } from 'lodash';

export function getCounterIds( state ) {
	return map( state, 'id' );
}

export function getCounterValue( state, counterId ) {
	const counter = find( state, { id: counterId } ) || {};
	return counter.value;
}
