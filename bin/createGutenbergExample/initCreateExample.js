const fs = require("fs-extra");
const execa = require("execa");
const replace = require("replace-in-file");
const { join } = require("path");
const rimraf = require("rimraf");
const { info, error, success, highlightTextPrimary } = require("../log");
const customizeBlockJson = require("./customizeBlockJson");
const customizePackageJson = require("./customizePackageJson");
const addExamplesJson = require("./addExamplesJson");
const generateExamplesTableMarkdown = require("./generateExamplesTableMarkdown");

module.exports = async (promptObject) => {
  const { name, id, slug, keywords, description, source } = promptObject;
  const rootPath = process.cwd();
  const pluginsFolderPath = join(rootPath, "plugins");
  const sourceFolderPath = join(pluginsFolderPath, source);
  const exampleFolderPath = join(pluginsFolderPath, slug);
  const packageJsonPath = join(exampleFolderPath, "package.json");
  const packageLockJsonPath = join(sourceFolderPath, "package-lock.json");
  const nodeModulesFolderPath = join(sourceFolderPath, "node_modules");
  const blockJsonPath = join(exampleFolderPath, "src/block.json");

  info("\n" + "-".repeat(process.stdout.columns) + "\n");
  info(
    `Generating ${highlightTextPrimary(
      slug
    )} example based on ${source} . It might take a couple of minutes...`
  );

  if (fs.pathExistsSync(packageLockJsonPath)) {
    //error(`${packageLockJsonPath} exists`);
    rimraf.sync(packageLockJsonPath);
  }

  //  info(`running from ${exampleFolderPath}`)
  //info({nodeModulesFolderPath})
  if (fs.pathExistsSync(nodeModulesFolderPath)) {
    //error(`${nodeModulesFolderPath} exists`);
    rimraf.sync(nodeModulesFolderPath);
  }

  //info(`copying ${sourceFolderPath} into  ${exampleFolderPath}`)
  fs.copySync(sourceFolderPath, exampleFolderPath);

  if (fs.pathExistsSync(blockJsonPath)) {
    customizeBlockJson({ blockJsonPath, ...promptObject });
  }

  if (fs.pathExistsSync(packageJsonPath)) {
    customizePackageJson({ packageJsonPath, ...promptObject });
  }

  const regexSourceSlug = new RegExp(`${source}`, "g");
  const pathFilesReplacement = `${exampleFolderPath}/src/**`;

  info(
    `Replacing "${source}" with "${slug}" in ${pathFilesReplacement
      .split("/plugins/")
      .pop()}...`
  );
  const resultsReplacement = replace
    .sync({
      files: `${exampleFolderPath}/src/**`,
      from: regexSourceSlug,
      to: slug,
      countMatches: true,
    })
    .filter((result) => result.hasChanged)
    .reduce(
      (acc, result) => {
        acc.filesReplacement = [
          ...acc.filesReplacement,
          result.file.split("/plugins/").pop(),
        ];
        acc.totalNumReplacements += result.numReplacements;
        return acc;
      },
      { filesReplacement: [], totalNumReplacements: 0 }
    );

  info(resultsReplacement);

  const regexPluginName = new RegExp(`^.*Plugin Name.*$`, "gm");
  const pluginName = ` * Plugin Name:       Gutenberg Examples - ${name} ${id}`;

  replace.sync({
    files: `${exampleFolderPath}/*.php`,
    from: regexPluginName,
    to: pluginName,
    countMatches: true,
  });
  // .filter(result => result.hasChanged)
  // .map(result => result.numReplacements)
  // .forEach(numReplacements => totalNumReplacements += numReplacements );

  const regexPluginDescription = new RegExp(`^.*Description.*$`, "gm");
  const pluginDescription = ` * Description:       ${description}`;

  replace.sync({
    files: `${exampleFolderPath}/*.php`,
    from: regexPluginDescription,
    to: pluginDescription,
    countMatches: true,
  });
  // .filter((result) => result.hasChanged)
  // .map((result) => result.file)
  // .forEach((element) => info(element));

  const exampleObject = { slug, tags: keywords.slice(1), description };
  addExamplesJson({ exampleObject });
  generateExamplesTableMarkdown({ slug,});

  info(`Installing dependencies...`);
  execa.sync("pnpm i", { shell: true, all: true, cwd: rootPath });

  info("Formatting JavaScript files...");
  execa.sync("npm run format", {
    shell: true,
    all: false,
    cwd: exampleFolderPath,
  });

  info("Compiling block...");
  execa.sync("npm run build", {
    shell: true,
    all: false,
    cwd: exampleFolderPath,
  });

  success(`Example ${slug} folder created at /plugins ✅`);
};
