import 'materialize';
import {Aurelia} from 'aurelia-framework';
import {ConfigBuilder} from './config-builder';

export function configure(aurelia: Aurelia, configCallback?: (builder: ConfigBuilder) => void) {
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}

export * from 'aurelia-materialize-bridge/toast/toastService';
