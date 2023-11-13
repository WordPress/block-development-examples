import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';

const Counter = ( { value, onDelete, onIncrease, onDecrease } ) => (
	<div>
		<div>
			Counter: <strong>{ value }</strong>
		</div>
		<button onClick={ onIncrease }>+</button>
		<button onClick={ onDecrease }>-</button>
		<button onClick={ onDelete }>Delete</button>
	</div>
);

const withValue = withSelect( ( select, { counterId } ) => {
	const { getCounterValue } = select( 'react-example/counters' );
	return {
		value: getCounterValue( counterId ),
	};
} );

const withActions = withDispatch( ( dispatch, { counterId, value } ) => {
	const { setCounterValue, removeCounter } = dispatch(
		'react-example/counters'
	);

	return {
		onIncrease: () => setCounterValue( counterId, value + 1 ),
		onDecrease: () => setCounterValue( counterId, value - 1 ),
		onDelete: () => removeCounter( counterId ),
	};
} );

export default compose( withValue, withActions )( Counter );
