import { useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	return (
		<div { ...useBlockProps.save() }>
			<p>Web Components Counter</p>
			<details>
				<summary>Attributes</summary>
				<pre>
					<small>{ JSON.stringify( attributes, null, 2 ) }</small>
				</pre>
			</details>
			<br />
			<gutenberg-counter
				value={ attributes.initial }
				increment={ attributes.increment }
			></gutenberg-counter>
		</div>
	);
};

export default Save;
