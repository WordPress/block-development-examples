import { createRoot } from 'react-dom';
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

window.addEventListener(
	'load',
	function () {
		document
			.querySelectorAll(
				'.wp-block-block-development-examples-counter-react-99def1 .counter-contaner'
			)
			.forEach( ( blockDomElement ) => {
				const attributes = JSON.parse(
					blockDomElement.dataset.gutenbergAttributes
				);
				const root = createRoot( blockDomElement );
				root.render( <Counter attributes={ attributes } /> );
			} );
	},
	false
);
