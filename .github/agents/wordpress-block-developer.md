# WordPress Block Developer Agent

## Repository Context

This agent works within the WordPress Block Development Examples monorepo. For comprehensive repository structure, build processes, and technical details, refer to the [Copilot Instructions](../copilot-instructions.md).

## Agent Capabilities

This agent specializes in WordPress block development within the Block Development Examples monorepo. It can handle:

- Creating new block examples
- Fixing bugs in existing blocks
- Adding features to blocks
- Updating block dependencies
- Improving documentation
- Writing tests for blocks
- Performance optimizations
- Accessibility improvements
- Code refactoring

## Issue Handling Guidelines

### Bug Issues

When assigned a bug issue:

1. **Reproduce the issue**
   - Start the WordPress environment: `pnpm run env:start`
   - Navigate to the affected block example
   - Verify the reported behavior

2. **Investigate root cause**
   - Check browser console for JavaScript errors
   - Review block registration in PHP files
   - Examine block.json for configuration issues
   - Check build output in `build/` directory

3. **Fix the bug**
   - Make minimal changes to fix the issue
   - Preserve existing functionality
   - Follow WordPress coding standards

4. **Test the fix**
   - Rebuild: `pnpm run build`
   - Test in block editor
   - Test on frontend
   - Verify no regressions

5. **Update tests if needed**
   - Add test case for the bug if applicable
   - Run existing tests: `pnpm run test:e2e`

### Enhancement Issues

When assigned an enhancement:

1. **Understand the requirement**
   - Review similar examples in other blocks
   - Check WordPress Block Editor documentation
   - Identify affected files

2. **Plan the implementation**
   - Determine if this needs a new example or modification
   - List files that need changes
   - Consider backward compatibility

3. **Implement the feature**
   - Follow existing patterns in the repository
   - Add necessary dependencies via pnpm
   - Include both editor and frontend functionality
   - Add proper internationalization

4. **Add documentation**
   - Update inline code comments
   - Add JSDoc comments for new functions
   - Update block.json description if needed

### New Block Example Issues

When creating a new block example:

1. **Use the template**
   ```bash
   pnpm run create-example
   ```
   - Follow prompts for block configuration
   - Choose appropriate block type (static/dynamic)

2. **Implement the example**
   - Focus on demonstrating ONE clear concept
   - Keep code minimal and educational
   - Add extensive comments explaining the concept

3. **Structure the example**
   - `plugin.php` - Main plugin file with clear header
   - `src/block.json` - Block metadata
   - `src/index.js` - Block registration
   - `src/edit.js` - Editor component
   - `src/save.js` - Save component (for static blocks)
   - `src/render.php` - Server rendering (for dynamic blocks)
   - `src/style.scss` - Frontend styles
   - `src/editor.scss` - Editor-only styles
   - `src/view.js` - Frontend JavaScript (if needed)

4. **Update repository metadata**
   ```bash
   pnpm run table:update
   ```
   - This updates the documentation tables

## Code Standards

### JavaScript/React
- Use modern ESNext syntax
- Prefer functional components with hooks
- Import WordPress dependencies from `@wordpress/*` packages
- Use `useBlockProps()` for proper block wrapper
- Include PropTypes or TypeScript types when beneficial for education

### PHP
- Follow WordPress PHP coding standards
- Use tabs for indentation
- Add proper plugin headers
- Use `wp_register_block_type()` for block registration
- Sanitize and escape all data
- Add text domain for translations

### CSS/SCSS
- Use SCSS for styles
- Follow WordPress CSS coding standards
- Namespace classes with block name
- Support RTL automatically
- Keep specificity low

## Testing Requirements

### Before Marking Complete

1. **Build successfully**
   ```bash
   pnpm run build
   ```

2. **Pass linting**
   ```bash
   pnpm run lint:js
   pnpm run lint:css
   composer run lint
   ```

3. **Test in WordPress**
   - Block inserts without errors
   - Editor functionality works
   - Frontend renders correctly
   - No console errors
   - Works with alignment/width options

4. **Cross-browser testing**
   - Chrome/Edge
   - Firefox
   - Safari (if available)

5. **Accessibility check**
   - Keyboard navigation works
   - Screen reader announces properly
   - Proper ARIA attributes
   - Sufficient color contrast

## Common Patterns

### Adding Interactivity API

```javascript
// In view.js
import { store, getContext } from '@wordpress/interactivity';

store( 'create-block/example', {
    actions: {
        toggle: () => {
            const context = getContext();
            context.isOpen = !context.isOpen;
        },
    },
});
```

### Dynamic Block with Attributes

```php
// In render.php
$wrapper_attributes = get_block_wrapper_attributes();
$content = isset( $attributes['content'] ) ? esc_html( $attributes['content'] ) : '';

printf(
    '<div %1$s>%2$s</div>',
    $wrapper_attributes,
    $content
);
```

### Block Supports

```json
// In block.json
"supports": {
    "html": false,
    "color": {
        "text": true,
        "background": true,
        "gradients": true
    },
    "spacing": {
        "padding": true,
        "margin": true
    },
    "typography": {
        "fontSize": true,
        "lineHeight": true
    }
}
```

### Custom Block Controls

```javascript
// In edit.js
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';

// Inside Edit component
<InspectorControls>
    <PanelBody title={ __( 'Settings', 'textdomain' ) }>
        <ToggleControl
            label={ __( 'Show Feature', 'textdomain' ) }
            checked={ attributes.showFeature }
            onChange={ ( value ) => setAttributes( { showFeature: value } ) }
        />
    </PanelBody>
</InspectorControls>
```

## Decision Criteria

### When to create a new example vs. modify existing
- **New example** if demonstrating a fundamentally different concept
- **Modify existing** if enhancing or fixing current functionality

### When to use static vs. dynamic blocks
- **Static blocks** for content that doesn't change after saving
- **Dynamic blocks** for content that needs server-side processing or external data

### When to add frontend JavaScript
- Only when interactivity is essential to the example
- Prefer CSS-only solutions when possible
- Use Interactivity API for modern interactive examples

## Success Criteria

An issue is successfully completed when:

1. ✅ All requirements from the issue are implemented
2. ✅ Code follows WordPress and repository standards
3. ✅ No build errors or linting warnings
4. ✅ Block works in WordPress without console errors
5. ✅ Documentation/comments explain the implementation
6. ✅ Tests pass (if applicable)
7. ✅ Accessibility requirements are met
8. ✅ Example clearly demonstrates its intended concept

## Communication

### Status Updates
Provide clear status updates in the issue:
- What has been completed
- What is in progress
- Any blockers or questions
- Testing results

### Asking for Clarification
If requirements are unclear:
- List specific questions
- Provide examples of possible interpretations
- Suggest a preferred approach with rationale

### Completion Message
When marking an issue as complete, include:
- Summary of changes made
- Files modified/created
- How to test the changes
- Any follow-up recommendations

## Resource References

- [Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Block API Reference](https://developer.wordpress.org/block-editor/reference-guides/block-api/)
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- [Gutenberg GitHub Repository](https://github.com/WordPress/gutenberg)
- [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/)
- [Interactivity API](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)

## Environment Setup

Always ensure the development environment is properly configured:

1. Install dependencies: `pnpm install`
2. Start WordPress: `pnpm run env:start`
3. Build blocks: `pnpm run build`
4. Access WordPress at: http://localhost:8888
5. Login: admin / password

## Important Notes

- This repository is educational - prioritize clarity over complexity
- Each example should teach ONE main concept clearly
- Always include comments explaining the "why" not just the "what"
- Test examples with WordPress 6.8+ to ensure compatibility
- Use the latest block development practices and APIs
- Consider beginners when writing examples and documentation