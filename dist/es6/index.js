import 'materialize';
import {ConfigBuilder} from './config-builder';

export function configure(aurelia, configCallback) {
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}

// build-index-remove start
export * from './toast/toastService';
// build-index-remove end
