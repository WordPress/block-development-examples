import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	return (
		<div { ...useBlockProps.save() }>
			<p>jQuery Counter</p>
			<details>
				<summary>Attributes</summary>
				<pre>
					<small>{ JSON.stringify( attributes, null, 2 ) }</small>
				</pre>
			</details>
			<br />
			<button className="wp-block-block-development-examples-counter-jquery-99def1__decrement">
				-
			</button>
			<input
				width="5"
				step={ attributes.increment }
				type="number"
				className="wp-block-block-development-examples-counter-jquery-99def1__value"
				value={ attributes.initial }
			/>
			<button className="wp-block-block-development-examples-counter-jquery-99def1__increment">
				+
			</button>
		</div>
	);
};

export default Save;
