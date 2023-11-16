const fs = require('fs');

module.exports = function(sourceFolderPath, destinationFolderPath) {

  function copyFolder(source, destination) {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
  
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      const sourcePath = `${source}/${file}`;
      const destinationPath = `${destination}/${file}`;
  
      if (fs.lstatSync(sourcePath).isDirectory()) {
        copyFolder(sourcePath, destinationPath);
      } else {
        fs.copyFileSync(sourcePath, destinationPath);
      }
    });
  }

  copyFolder(sourceFolderPath, destinationFolderPath);

}