This file, `examples/editor-bindings/src/index.js`, demonstrates how to register a custom ["block bindings source"](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-bindings/) in the WordPress block editor ([Gutenberg](https://developer.wordpress.org/block-editor/)) using the [`@wordpress/blocks`](https://www.npmjs.com/package/@wordpress/blocks) package. Here's a breakdown of what's happening:

---

### 1. Imports

```js
import { registerBlockBindingsSource } from '@wordpress/blocks';
```

-   This imports the function needed to register a new source for block bindings. See the [@wordpress/blocks documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-blocks/).

---

### 2. Attribute Definitions

```js
const readOnlyAttributes = [ 'permalink' ];
const editableAttributes = [ 'title', 'excerpt' ];
```

-   `readOnlyAttributes`: Attributes that can be read but not edited (e.g., the post permalink).
-   `editableAttributes`: Attributes that can be both read and edited (e.g., the post title and excerpt).

---

### 3. Registering the Block Bindings Source

```js
registerBlockBindingsSource({
  name: 'wpviplearn/post-data',
  usesContext: [ 'postType' ],
  ...
});
```

-   Registers a new source called `wpviplearn/post-data`.
-   It declares that it uses the `postType` context (e.g., 'post', 'page').
-   Learn more about [block bindings sources](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-bindings/).

---

### 4. getValues

```js
getValues({ select, bindings }) { ... }
```

-   This function is called to retrieve the current values for the bound attributes.
-   It loops through all bindings, and for each one:
    -   If the attribute is in `editableAttributes` or `readOnlyAttributes`, it fetches the value from the editor's state using [`select('core/editor')`](https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/) and [`getEditedPostAttribute`](https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/src/store/selectors.js#L110).
-   Returns an object mapping attribute names to their current values.

---

### 5. setValues

```js
setValues({ dispatch, bindings }) { ... }
```

-   This function is called to update the values of the bound attributes.
-   It loops through all bindings and collects the new values.
-   If there are any values to update, it dispatches an action to update the post in the editor: [`dispatch('core/editor').editPost(values)`](https://developer.wordpress.org/block-editor/reference-guides/data/data-core-editor/#editpost).

---

### 6. canUserEditValue

```js
canUserEditValue({ context, args }) { ... }
```

-   Determines if the current user can edit a given attribute.
-   Returns `true` only if:
    -   The post type is `'post'`.
    -   The attribute is in `editableAttributes`.

---

## Summary

This example shows how to create a custom block bindings source that allows blocks to bind to post data (title, excerpt, permalink). It defines which attributes are editable, how to get and set their values, and when editing is allowed.

**Use case:**  
This is useful for blocks that want to display or edit post-level data (like the post title or excerpt) directly from within the block editor, using the new block bindings API.

For more information, see the [Gutenberg Handbook](https://developer.wordpress.org/block-editor/).

If you want a deeper dive into any part of this file or how to use it in a block, let me know!
