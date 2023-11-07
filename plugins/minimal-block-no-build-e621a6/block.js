(function (blocks, element) {
  var el = element.createElement;

  blocks.registerBlockType("block-development-examples/minimal-block-no-build-e621a6", {
    edit: function () {
      return el("p", {} , "Hello World - Block Editor");
    },
    save: function () {
      return el("p", {} , "Hello World - Frontend");
    },
  });
})(window.wp.blocks, window.wp.element);
