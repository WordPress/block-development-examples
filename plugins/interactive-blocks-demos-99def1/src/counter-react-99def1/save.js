import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	return (
		<div
			{ ...useBlockProps.save() }
			data-gutenberg-attributes={ JSON.stringify( attributes ) }
		>
			<p>React Counter</p>
			<details>
				<summary>Attributes</summary>
				<pre>
					<small>{ JSON.stringify( attributes, null, 2 ) }</small>
				</pre>
			</details>
			<br />
			<div className="counter-container">
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
