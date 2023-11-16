const URL_WIKI = "https://github.com/WordPress/block-development-examples/wiki"
const URL_ASSETS = `https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/assets`
const URL_REPO = `https://github.com/WordPress/block-development-examples/tree/trunk`
const WIKI_PAGE_WHY_ID = "04-Why-an-ID-for-every-example%3F"
const WIKI_PAGE_TAGS = "03-Tags"
const REPO_ORIGIN = "WordPress/block-development-examples";
const SLUG_EXAMPLE_MARKER = "<%SLUG_EXAMPLE_MARKER%>";
const URL_EXAMPLE_ZIP = `https://raw.githubusercontent.com/${REPO_ORIGIN}/deploy/zips/${SLUG_EXAMPLE_MARKER}.zip`;
const PLAYGROUND_URL_WITH_PLUGIN = `https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22${URL_EXAMPLE_ZIP}%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D`

const PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG = `https://playground.wordpress.net/#{%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22url%22,%22url%22:%22${URL_EXAMPLE_ZIP}%22}},{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22wordpress.org/plugins%22,%22slug%22:%22gutenberg%22}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]}`

module.exports = {
    REPO_ORIGIN,
    PLAYGROUND_URL_WITH_PLUGIN,
    PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG,
    SLUG_EXAMPLE_MARKER,
    URL_EXAMPLE_ZIP,
    URL_WIKI,
    WIKI_PAGE_WHY_ID,
    WIKI_PAGE_TAGS,
    URL_ASSETS,
    URL_REPO
}