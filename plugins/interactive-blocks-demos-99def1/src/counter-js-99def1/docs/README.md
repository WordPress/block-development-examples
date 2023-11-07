## To take into account

- When the code block is updated the Block Editor needs to be updated (refresh page) to get the new code functionality
- When the code block is updated there's no need to remove and add again the block in the Block Editor: click accepts to  "Attempt block recovery"
- Update the page to get new code in the client as well


## `block.json`

It defines, among other things, the location of each file required for the block's behaviour (in both the editor and the client)

```js
"editorScript": "file:./index.js",
"editorStyle": "file:./index.css",
"style": "file:./style-index.css",
"viewScript": "file:./view.js"
```


## `.css` files

### `index.css`

CSS Styles that are applied on the Block Editor when the block is used 

### `style.css`

CSS Styles that are applied on the client to the final HTML generated from the block code


## `.js` files

### `index.js`

Starting point of the block and the place where the block is registered in REDUX

```
import './index.css';
import './style.css';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType( 'block-development-examples/counter-js', {
	edit: Edit,
	save: Save,
} );
```

### `edit.js`

The React component that is used to display the block in the Block Editor

### `save.js`

The React component that is used to generate the static HTML that is stored in the DB and returned to the cliente as the HTML of this block

```html
<div class="wp-block-block-development-examples-counter-js-99def1">
    <button class="wp-block-block-development-examples-counter-js-99def1__increment">+</button>
    <input/>
    <button class="wp-block-block-development-examples-counter-js-99def1__decrement">-</button>
    </div>
```

### `view.js`

The Javascript file that is served along with this block HTML. It contains the "interactivity" code
