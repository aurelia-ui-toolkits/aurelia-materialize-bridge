import {inject} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ThemeManager {

  commons = [
      { name: 'standard', value: 'common' },
      { name: 'bootstrap', value: 'common-bootstrap', relativity: 'larger' },
      { name: 'material', value: 'common-material', relativity: 'bold' },
      { name: 'nova', value: 'common-nova', relativity: 'bold' },
      { name: 'fiori', value: 'common-fiori', relativity: 'larger' },
      { name: 'office365', value: 'common-office365', relativity: 'bold' }
  ];

  constructor(ea) {
    this.ea = ea;
  }

  loadTheme(theme) {
    this.removeOldThemes();

    return Promise.all([this.common(theme), this.theme(theme)])
    .then(() => this.ea.publish('kendo:skinChange', theme));
  }

  theme(theme) {
    let themePath = this.getNormalizedThemePath(theme);
    this.deleteFromSystemJS(themePath);

    return System.import(themePath)
    .then(() => {
      let themable = ['Chart', 'TreeMap', 'Diagram', 'StockChart', 'Sparkline', 'RadialGauge', 'LinearGauge'];

      if (kendo.dataviz && theme) {
        for (let i = 0; i < themable.length; i++) {
          let widget = kendo.dataviz.ui[themable[i]];

          if (widget) {
            widget.fn.options.theme = theme;
          }
        }
      }
    });
  }

  common(theme) {
    let common = (this.commons.find(i => i.name === theme) || this.commons.find(i => i.name === 'standard')).value;
    let commonPath = this.getNormalizedThemePath(common);
    this.deleteFromSystemJS(commonPath);

    return System.import(commonPath);
  }

  deleteFromSystemJS(normalizedPath) {
    if (System.has(normalizedPath)) {
      System.delete(normalizedPath);
    }
  }

  getNormalizedThemePath(theme) {
    return System.normalizeSync(`kendo-ui/styles/kendo.${theme}.min.css!`);
  }

  removeOldThemes() {
    jQuery('head > link').each(function() {
      if (this.href.includes('styles/kendo.')) {
        DOM.removeNode(this);
      }
    });
  }
}
