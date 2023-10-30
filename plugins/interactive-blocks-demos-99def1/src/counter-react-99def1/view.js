import { hydrateRoot } from 'react-dom/client';
import { useState } from '@wordpress/element';

const Counter = ( { attributes } ) => {
	const [ counter, setCounter ] = useState( attributes.initial );
	const increment = () => setCounter( counter + attributes.increment );
	const decrement = () => setCounter( counter - attributes.increment );
	return (
		<>
			<button onClick={ decrement }>-</button>
			<input width="5" type="number" readOnly value={ counter } />
			<button onClick={ increment }>+</button>
		</>
	);
};

window.addEventListener( 'load', () => {
	document
		.querySelectorAll( '.wp-block-wp-block-development-examples-counter-react-99def1 .counter-contaner' )
		.forEach( ( block ) => {
			const attributes = JSON.parse( block.dataset.gutenbergAttributes );
			hydrateRoot( block, <Counter attributes={ attributes } />);
		} );
} );
