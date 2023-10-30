const SLUG_EXAMPLE_MARKER = "<%SLUG_EXAMPLE_MARKER%>";
const URL_EXAMPLE_ZIP = `https://raw.githubusercontent.com/wordpress-juanmaguitar/wp-block-development-examples/deploy/zips/${SLUG_EXAMPLE_MARKER}.zip`;
const PLAYGROUND_URL_WITH_PLUGIN = `https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22${URL_EXAMPLE_ZIP}%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D`

const PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG = `https://playground.wordpress.net/#{%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22url%22,%22url%22:%22${URL_EXAMPLE_ZIP}%22}},{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22wordpress.org/plugins%22,%22slug%22:%22gutenberg%22}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]}`

module.exports = {
    PLAYGROUND_URL_WITH_PLUGIN,
    PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG,
    SLUG_EXAMPLE_MARKER,
    URL_EXAMPLE_ZIP
}