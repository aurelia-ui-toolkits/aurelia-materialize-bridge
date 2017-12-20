const Container = require('aurelia-dependency-injection').Container;
const logger = require('aurelia-logging').getLogger('materialize-bridge-importer');
const fs = require('fs');
const nodePath = require('path');
const { spawn } = require('child_process');
const npm = require('npm');

let Importer = class {
  static inject() { return [Container, 'package', 'project']; }

  constructor(container, pkg, prj) {
    this.container = container;
    this.package = pkg;
    this.project = prj;
  }

  applies() {
    return true;
  }

  async execute() {
    await new Promise(resolve => {
      npm.load(this.package.packageJSONPath, () => {
        resolve();
      });
    });
    logger.info('apply patch');
    this.project.applyPatch([
      {
        'op': 'replace',
        'path': '/build/loader/plugins/0/stub',
        'value': false
      }
    ]);

    logger.info('write bundle info');
    const bundleInfoFile = nodePath.join(__dirname, './materialize-bundle.json');
    const buffer = fs.readFileSync(bundleInfoFile);
    const bundleInfo = buffer.toString();
    const bundle = JSON.parse(bundleInfo);
    this.project.addBundle(bundle);

    logger.info('copy AMD scripts');
    const materializeFile = nodePath.join(__dirname, '../build/tools/materialize-css.js');
    const rBuildFile = nodePath.join(__dirname, '../build/tools/rbuild.js');
    const materialize = fs.readFileSync(materializeFile);
    fs.writeFileSync('./materialize-css.js', materialize.toString());
    const rBuild = fs.readFileSync(rBuildFile);
    fs.writeFileSync('./rbuild.js', rBuild.toString());

    logger.info('execute AMD scripts');
    await new Promise((resolve, reject) => {
      npm.commands.install(['materialize-css', 'jquery'], error => {
        if (error) reject(error);
        else resolve();
      });
    });
    let rjs = spawn('sh', ['./node_modules/.bin/r.js', '-o', 'rbuild.js']);
    rjs.stderr.on('data', (data) => { logger.error(data); });
    rjs.stdout.on('data', (data) => { logger.info(data); });

    this.project.writeAureliaJSON();
  }
};

module.exports = Importer;
