const { readdir } = require('fs');
const { plugins } = require("../.wp-env.json");

const getDirectories = (source, callback) =>
  readdir(source, { withFileTypes: true }, (err, files) => {
    if (err) {
      callback(err)
    } else {
      callback(
        files
          .filter(dirent => dirent.isDirectory())
          .map(dirent => './plugins/' + dirent.name)
      )
    }
  })

console.log(plugins);



