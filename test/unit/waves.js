import {TaskQueue} from 'aurelia-task-queue';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {MdWaves} from 'src/waves/waves';
import 'materialize';

describe('Waves', () => {
  let element, taskQueue, waves;
  // beforeAll(() => initialize());
  initialize();

  beforeEach(() => {
    element = document.createElement('a');
    element.setAttribute('md-waves', '');
    document.body.appendChild(element);

    taskQueue = new TaskQueue();
    waves = new MdWaves(element);
  });

  it('applies waves-effect class', () => {
    waves.attached();
    taskQueue.flushMicroTaskQueue();

    expect(element.classList).toContain('waves-effect');
  });
});
