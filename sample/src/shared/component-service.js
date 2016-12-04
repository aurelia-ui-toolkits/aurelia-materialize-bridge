import * as LogManager from 'aurelia-logging';
import * as components from './components.json!json';

export class ComponentService {
  constructor() {
    this.components = components;
    this.log = LogManager.getLogger('ComponentService');
  }

  transformToMap(obj) {
    let map = new Map();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        if (typeof value === 'object') {
          map.set(key, this.transformToMap(value));
        } else {
          map.set(key, value);
        }
      }
    }
    return map;
  }

  getIterableComponents(hideEmptyCategories = false) {
    let categories = [];
    Object.keys(this.components).forEach(cat => {
      if (cat !== 'default') {
        let category = {
          title: cat,
          controls: []
        };
        let cfg = this.components[cat];
        Object.keys(cfg).forEach(title => {
          let ctrl = {
            title,
            status: cfg[title].status
          };
          if (cfg[title].status && cfg[title].nav !== false) {
            ctrl.link = `#/samples/${cfg[title].moduleId || title.toLowerCase()}`;
          }
          category.controls.push(ctrl);
        });
        if (!hideEmptyCategories || category.controls.some(c => !!c.link)) {
          categories.push(category);
        }
      }
    });
    return categories;
  }

  getRouterConfig() {
    let routes = [];
    Object.keys(this.components).forEach(category => {
      let cfg = this.components[category];
      Object.keys(cfg).forEach(title => {
        let component = cfg[title];
        if (component.status && component.nav !== false) {
          let shortModuleId = component.moduleId || title.toLowerCase();
          let moduleId = `samples/${shortModuleId}/index`;

          if (component.samples) {
            let keys = Object.keys(component.samples);
            keys.forEach(key => {
              let sample = component.samples[key];
              sample = this.normalizeSample(key, sample);
              let route = {
                name: `${shortModuleId}-${key}`,
                route: `${shortModuleId}-${key}`,
                moduleId: './sample-runner',
                title: sample.title,
                sample,
                category,
                baseModuleId: `${shortModuleId}`,
                baseModuleTitle: title,
                nav: true
              };
              this.log.debug('added route', route);
              routes.push(route);

              if (sample.default) {
                route = {
                  name: shortModuleId,
                  route: shortModuleId,
                  redirect: route.route
                };
                this.log.debug('added default route', route);
                routes.push(route);
              }
            });
          } else {
            this.log.warn('DEPRECATED: component route has no gist:', title, component);
            routes.push({ name: shortModuleId, route: shortModuleId, moduleId, title });
          }
        }
      });
    });
    return routes;
  }

  normalizeSample(name, sample) {
    if (typeof sample !== 'object') {
      sample = {
        gist: sample
      };
    }
    if (!sample.title) {
      sample.title = name.replace(/-/g, ' ');
      sample.title = sample.title.charAt(0).toUpperCase() + sample.title.slice(1);
    }
    return sample;
  }
}
