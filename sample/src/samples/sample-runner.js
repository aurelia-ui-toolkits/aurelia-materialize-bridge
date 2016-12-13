import {inject} from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-http-client';
import {activationStrategy} from 'aurelia-router';
import {TaskQueue} from 'aurelia-task-queue';
import {bindable, TemplatingEngine, ViewResources} from 'aurelia-templating';
import * as LogManager from 'aurelia-logging';
import {Settings} from '../settings';

@inject(Settings, TemplatingEngine, ViewResources, TaskQueue, HttpClient)
export class SampleRunner {
  @bindable() router;
  fakeRouter = {
    navigation: []
  };
  loading = true;
  tabs = [];

  constructor(settings, templatingEngine, viewResources, taskQueue, http) {
    this.log = LogManager.getLogger('sample-runner');
    this.settings = settings;
    this.templatingEngine = templatingEngine;
    this.viewResources = viewResources;
    this.taskQueue = taskQueue;
    this.http = http;
  }

  activate(params, route) {
    let sample = route.navModel.config.sample;
    let category = route.navModel.config.category;
    let baseModuleId = route.baseModuleId;
    this.router = route.navModel.router;
    this.routes = this.router.routes.filter(r => r.category === category && r.baseModuleId === baseModuleId);
    this.fakeRouter.navigation = this.routes.map(r => r.navModel);

    this.log.debug('activate sample', sample);
    this.log.debug('activate router', this.router);
    this.log.debug('activate route', route);
    this.log.debug('activate routes', this.routes);

    let cacheBust = Math.floor((Math.random() * 100000) + 1);
    sample.path = `${this.settings.gistProxy}file-cache-bust/${cacheBust}/${sample.gist}/app`;
    this.sample = sample;
    this.category = category;
    this.title = route.baseModuleTitle;
  }

  attached() {
    this.http.get(`${this.settings.gistProxy}files/${this.sample.gist}`)
    .then(response => {
      let files = response.content;
      this.sample.files = files;
      this.updateTabs(files);
    });
    return new Promise(resolve => {
      // this.sampleTarget.innerHTML = '<compose view-model.bind="sample.path" compose.ref="composeVM"></compose>';
      // this.instruction = this.templatingEngine.enhance({element: this.sampleTarget, bindingContext: this, overrideContext: this, resources: this.viewResources});
      // this.instruction.attached();
      // if (this.instruction.configureRouter) {
      //   this.instruction.configureRouter(config, this.router);
      // }
      resolve();
      // window.setTimeout(() => this.loading = false, 1500);
    })
    .delay(800).then(() => this.loading = false);
  }

  detached() {
    // this.instruction.unbind();
    // this.instruction.detached();
    this.sample = undefined;
  }

  determineActivationStrategy() {
    return activationStrategy.replace;
  }

  updateTabs(files) {
    let keys = Object.keys(files);

    for (let i = 0; i < keys.length; i++) {
      let fileName = keys[i];
      let language;

      // look up extension, and what language to pass to PrismJS
      // for syntax highlighting
      let split = fileName.split('.');
      let ext = split[split.length - 1];
      switch (ext) {
      default:
      case 'html':
        language = 'html';
        break;
      case 'js':
        language = 'javascript';
        break;
      case 'css':
        language = 'css';
        break;
      case 'md':
        language = 'markdown';
        break;
      }

      this.tabs.push({
        title: keys[i],
        language,
        filename: keys[i]
      });
    }
  }

  getSampleFile(filename) {
    return this.sample.files[filename].content;
  }
}
