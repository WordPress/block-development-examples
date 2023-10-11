import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	return (
		<div { ...useBlockProps.save() }>
			<p>jQuery Counter</p>
			<pre>
				{ JSON.stringify(attributes, null, 2)}
			</pre>
			<button className="wp-block-gutenberg-examples-counter-jquery-99def1__decrement">
				-
			</button>
			<input width="5" step={ attributes.increment } type="number" className="wp-block-gutenberg-examples-counter-jquery-99def1__value" value={ attributes.initial } />
			<button className="wp-block-gutenberg-examples-counter-jquery-99def1__increment">
				+
			</button>
			
		</div>
	);
}

export default Save;
