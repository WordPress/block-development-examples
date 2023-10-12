import { useBlockProps } from '@wordpress/block-editor';

const blockClassPrefix = 'wp-block-gutenberg-examples-counter-js-99def1'
const Save = ( { attributes } ) => {
	return (
		<div { ...useBlockProps.save() }>
			<p>Javascript Counter</p>
			<pre>
				{ JSON.stringify(attributes, null, 2)}
			</pre>
			<button className={blockClassPrefix + "__decrement"}>  
				-
			</button>
			<input width="5" step={ attributes.increment } type="number" className={blockClassPrefix + "__value"} value={ attributes.initial } />
			<button className={blockClassPrefix + "__increment"}>
				+
			</button>
			
		</div>
	);
}

export default Save;
