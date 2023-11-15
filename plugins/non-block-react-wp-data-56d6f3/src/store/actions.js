export function addCounter( counterId ) {
	return {
		type: 'ADD_COUNTER',
		counterId,
	};
}

export function removeCounter( counterId ) {
	return {
		type: 'REMOVE_COUNTER',
		counterId,
	};
}

export function setCounterValue( counterId, value ) {
	return {
		type: 'SET_COUNTER_VALUE',
		counterId,
		value,
	};
}
