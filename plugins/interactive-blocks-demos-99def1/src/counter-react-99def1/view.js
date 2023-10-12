import { hydrate } from 'react-dom';
import { useState } from '@wordpress/element';

const Counter = ( { attributes } ) => {
	const [ counter, setCounter ] = useState( attributes.initial );
	const increment = () => setCounter( counter + attributes.increment );
	const decrement = () => setCounter( counter - attributes.increment );
	return (
		<>
			<button onClick={ increment }>+</button>
			<input width="5" type="number" readOnly value={ counter } />
			<button onClick={ decrement }>-</button>
		</>
	);
};

window.addEventListener( 'load', () => {
	document
		.querySelectorAll( '.wp-block-gutenberg-examples-counter-react-99def1' )
		.forEach( ( block ) => {
			const attributes = JSON.parse( block.dataset.gutenbergAttributes );
			hydrate( <Counter attributes={ attributes } />, block );
		} );
} );
