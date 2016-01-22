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
    expect(waves.element).toBeDefined();
  });

  it('applies waves-effect class', () => {
    waves.attached();
    taskQueue.flushMicroTaskQueue();

    expect(element.classList.contains('waves-effect')).toBe(true);
  });

  it('removes waves-effect class on detached()', () => {
    waves.attached();
    taskQueue.flushMicroTaskQueue();

    waves.detached();
    taskQueue.flushMicroTaskQueue();

    expect(element.classList.contains('waves-effect')).toBe(false);
  });
});
