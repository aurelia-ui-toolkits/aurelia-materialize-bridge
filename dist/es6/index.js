import {ConfigBuilder} from './config-builder';
import {ScrollfirePatch} from './scrollfire/scrollfire-patch';

export function configure(aurelia, configCallback) {
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
  if (builder.useScrollfirePatch) {
    new ScrollfirePatch().patch();
  }
}

export const version = '0.5.1';

// build-index-remove start
export * from './toast/toastService';
export * from './common/attributeManager';
export * from './common/attributes';
export * from './common/events';
// build-index-remove end
