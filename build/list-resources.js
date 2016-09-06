const fs = require('fs');
const path = require('path');

function walk(dir, bridgeConfig) {
  let results = [];
  let list = fs.readdirSync(dir);
  for (let file of list) {

    file = path.join(dir, file);
    let lstat = fs.lstatSync(file);

    if (lstat && lstat.isDirectory()) {
      results = results.concat(walk(file, bridgeConfig));
    } else {
      if (bridgeConfig.extension.includes(path.extname(file))) {
        file = file.replace(bridgeConfig.replacePath, '').replace(/\\/g, '/');
        if(!bridgeConfig.exclude.includes(file)) {
          results.push(file);
        }
      }
    }
  }
  return results;
}

let bridgePath = path.resolve('dist', 'commonjs');
let bridgeConfig = {
  replacePath: bridgePath + path.sep,
  extension: [
    '.html',
    '.css'
  ],
  exclude: [
    'aurelia-materialize-bridge/dist/commonjs/validation/validationRenderer.js'
  ]
}

console.log(walk(bridgePath, bridgeConfig));
