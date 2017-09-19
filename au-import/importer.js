const Container = require('aurelia-dependency-injection').Container;
const logger = require('aurelia-logging').getLogger('materialize-bridge-importer');
const fs = require('fs');
const nodePath = require('path');

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

  execute() {
    // logger.debug doesn't do anything
    console.log('--- ex importer');
    // console.log(this.project);
    console.log('--- apply patch');
    this.project.applyPatch([
      {
        'op': 'replace',
        'path': '/build/loader/plugins/0/stub',
        'value': false
      }
    ]);

    console.log('--- write bundle info');
    const bundleInfoFile = nodePath.join(__dirname, './materialize-bundle.json');
    const buffer = fs.readFileSync(bundleInfoFile);
    const bundleInfo = buffer.toString();
    const bundle = JSON.parse(bundleInfo);
    this.project.addBundle(bundle);

    this.project.writeAureliaJSON();
  }
};

module.exports = Importer;
