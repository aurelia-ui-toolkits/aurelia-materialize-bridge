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

// build-index-remove start
export * from './badge/badge';
export * from './box/box';
export * from './breadcrumbs/breadcrumbs';
export * from './breadcrumbs/instructionFilter';
export * from './button/button';
export * from './card/card';
export * from './carousel/carousel-item';
export * from './carousel/carousel';
export * from './char-counter/char-counter';
export * from './checkbox/checkbox';
export * from './chip/chip';
export * from './chip/chips';
export * from './collapsible/collapsible';
export * from './collection/collection-header';
export * from './collection/collection-item';
export * from './collection/collection';
export * from './collection/md-collection-selector';
export * from './colors/colorValueConverters';
export * from './common/attributeManager';
export * from './common/attributes';
export * from './common/constants';
export * from './common/events';
export * from './datepicker/datepicker.default-parser';
export * from './datepicker/datepicker';
export * from './dropdown/dropdown-element';
export * from './dropdown/dropdown';
export * from './fab/fab';
export * from './file/file';
export * from './footer/footer';
export * from './input/input-prefix';
export * from './input/input-update-service';
export * from './input/input';
export * from './modal/modal-trigger';
export * from './navbar/navbar';
export * from './pagination/pagination';
export * from './parallax/parallax';
export * from './progress/progress';
export * from './pushpin/pushpin';
export * from './radio/radio';
export * from './range/range';
export * from './scrollfire/scrollfire-patch';
export * from './scrollfire/scrollfire-target';
export * from './scrollfire/scrollfire';
export * from './scrollspy/scrollspy';
export * from './select/select';
export * from './sidenav/sidenav-collapse';
export * from './sidenav/sidenav';
export * from './slider/slider';
export * from './switch/switch';
export * from './tabs/tabs';
export * from './toast/toastService';
export * from './tooltip/tooltip';
export * from './transitions/fadein-image';
export * from './transitions/staggered-list';
export * from './validation/validationRenderer';
export * from './waves/waves';
// build-index-remove end
