export class Registry {
  load(config, control) {
    return System.import(`samples/${control}/registry.json!json`)
    .then(registry => {
      config.title = registry.title;

      let map = [];

    //   for (let _sample of Object.keys(registry.samples)) {
      Object.keys(registry.samples).forEach(_sample => {
        let sample = registry.samples[_sample];

        sample.path = `samples/${control}/${_sample}`;
        sample.route = sample.route || _sample;
        sample.title = sample.title || this.getTitleFromRoute(_sample);
        sample.moduleId = sample.moduleId || 'shared/sample-runner';
        sample.nav = sample.nav || true;
        sample.files = sample.files || ['html', 'js'];
        sample.files.forEach(extension => {
          sample[extension] = `${sample.path}.${extension}`;
        });

        if (sample.default === true) {
          map.push({
            title: sample.title,
            redirect: sample.route,
            route: '',
            sample: sample
          });
        }

        map.push({
          title: sample.title,
          nav: sample.nav,
          moduleId: sample.moduleId,
          route: sample.route,
          sample: sample
        });
      });

      config.map(map);
    });
  }

  getTitleFromRoute(route) {
    route = route.replace(/-/g, ' ');
    route = route.charAt(0).toUpperCase() + route.slice(1);
    return route;
  }
}
