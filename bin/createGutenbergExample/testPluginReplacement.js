const replace = require("replace-in-file");
const { info, error, success, highlightTextPrimary } = require("./log");
const { join } = require("path");

const regexPluginName = new RegExp(`^.*Plugin Name.*$`, 'gm');

const basePath = `/Users/juanmanuelgarrido/PROJECTS/2023/WORDPRESS/GUTENBERG/wp-block-development-examples/plugins/`
const exampleFolderPath = join(basePath, "sdfds-fs-d031b6")
const name = "aaaa aaaa aaaaaaaaaa 232323"
const pluginName = ` * Plugin Name:       WP Block Development Examples - ${name}`
replace
    .sync({
      files: `${exampleFolderPath}/*.php`,
      from: regexPluginName,
      to: pluginName,
    })
    .filter((result) => result.hasChanged)
    .map((result) => result.file)
    .forEach((element) => info(element));
