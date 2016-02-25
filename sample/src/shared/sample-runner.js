import {inject} from 'aurelia-dependency-injection';
import {activationStrategy} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TaskQueue} from 'aurelia-framework';

@inject(EventAggregator, TaskQueue)
export class SampleRunner {

  constructor(ea, taskQueue) {
    this.taskQueue = taskQueue;
    this.ea = ea;
  }

  activate(params, route) {
    let sample = route.navModel.config.sample;

    if (!sample) throw new Error('Route does not contain a \'sample\' property');

    this.sample = sample;
  }

  restart() {
    let old = this.sample;
    this.sample = undefined;
    this.taskQueue.queueTask(() => {
      this.sample = old;
    });
  }

  determineActivationStrategy() {
    return activationStrategy.replace;
  }
}
