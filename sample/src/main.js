export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('plugin-builder', plugin => plugin.useClickCounter());

  aurelia.start()
  .then(au => au.setRoot('app'));
}
