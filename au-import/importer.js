const Container = require('aurelia-dependency-injection').Container;

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
    console.log('--- ex importer');
    // console.log(this.project);
    console.log('--- apply patch');
    this.project.applyPatch([
      {
        "op": "replace",
        "path": "/build/loader/plugins/0/stub",
        "value": false
      }
    ]);
    this.project.writeAureliaJSON();
  }
};

module.exports = Importer;
