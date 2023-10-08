(function (blocks, element, blockEditor) {
  var el = element.createElement;
  var useBlockProps = blockEditor.useBlockProps;

  blocks.registerBlockType("gutenberg-examples/minimal-block-e621a6", {
    title: 'minimal-block-e621a6',
    icon: 'smiley', // Icon used for the block from Dashicons
    category: 'common', // The category this block will be listed under
    edit: function () {
      return el("p", useBlockProps() , "Hello World - Block Editor");
    },
    save: function () {
      return el("p", useBlockProps() , "Hello World - Frontend");
    },
  });
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);
