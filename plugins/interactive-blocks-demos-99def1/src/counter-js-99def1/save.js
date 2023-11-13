import { useBlockProps } from '@wordpress/block-editor';

const blockClassPrefix =
	'wp-block-block-development-examples-counter-js-99def1';
const Save = ( { attributes } ) => {
	return (
		<div { ...useBlockProps.save() }>
			<p>Javascript Counter</p>
			<details>
				<summary>Attributes</summary>
				<pre>
					<small>{ JSON.stringify( attributes, null, 2 ) }</small>
				</pre>
			</details>
			<br />
			<button className={ blockClassPrefix + '__decrement' }>-</button>
			<input
				width="5"
				step={ attributes.increment }
				type="number"
				className={ blockClassPrefix + '__value' }
				value={ attributes.initial }
			/>
			<button className={ blockClassPrefix + '__increment' }>+</button>
		</div>
	);
};

export default Save;
