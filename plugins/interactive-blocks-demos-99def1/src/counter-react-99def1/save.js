import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	return (
		<div { ...useBlockProps.save() }>
			<p>React Counter</p>
			<details>
				<summary>Attributes</summary>
				<pre>
					<small>{ JSON.stringify( attributes, null, 2 ) }</small>
				</pre>
			</details>
			<br />
			<div
				className="counter-contaner"
				data-gutenberg-attributes={ JSON.stringify( attributes ) }
			>
				<button>-</button>
				<input
					width="5"
					type="number"
					readOnly
					value={ attributes.initial }
				/>
				<button>+</button>
			</div>
		</div>
	);
};

export default Save;
