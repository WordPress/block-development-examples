import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => (
	<div
		{ ...useBlockProps.save() }
		x-data={ `{ count: ${ attributes.initial } }` }
	>
		<p>Alpine Counter</p>
		<button x-on:click={ `count += ${ attributes.increment }` }>+</button>
		<input width="5" type="number" x-bind:value="count" />
		<button x-on:click={ `count -= ${ attributes.increment }` }>-</button>
	</div>
);

export default Save;
