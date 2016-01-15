// is this how we/users import materialize?
import 'materialize';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('plugin-builder', plugin => plugin.useClickCounter().useWaves());

  aurelia.use.globalResources('shared/collapse-panel');
  aurelia.use.globalResources('shared/markdown');
  aurelia.use.globalResources('shared/logger');
  aurelia.use.globalResources('shared/au-code');

  aurelia.start()
    .then(au => au.setRoot('app'));
}
