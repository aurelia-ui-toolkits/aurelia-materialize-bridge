import * as components from './components.json!json';

export class ComponentService {
  constructor() {
    this.components = components;
    // this.componentsMap = this.transformToMap(components);
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
    Object.keys(this.components).forEach(cat => {
      let cfg = this.components[cat];
      Object.keys(cfg).forEach(title => {
        if (cfg[title].status && cfg[title].nav !== false) {
          let shortModuleId = cfg[title].moduleId || title.toLowerCase();
          let moduleId = `samples/${shortModuleId}/index`;
          routes.push({ name: shortModuleId, route: shortModuleId, moduleId, title });
        }
      });
    });
    return routes;
  }

  // getProjectStatusFromMap() {
  //   let categories = [];
  //   for (let [cat, cfg] of this.componentsMap) {
  //     if (cat === 'default') {
  //       continue;
  //     }
  //     let category = {
  //       title: cat,
  //       controls: []
  //     };
  //     for (let [title, comp] of cfg) {
  //       let ctrl = {
  //         title,
  //         status: comp.get('status')
  //       };
  //       if (comp.get('status') && comp.get('nav') !== false) {
  //         ctrl.link = `#/samples/${comp.get('moduleId') || title.toLowerCase()}`;
  //       }
  //       category.controls.push(ctrl);
  //     }
  //     categories.push(category);
  //   }
  //   return categories;
  // }
}
