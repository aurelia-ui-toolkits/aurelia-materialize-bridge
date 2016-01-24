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

  it('does not remove waves-effect class on detached() if specified beforehand', () => {
    let element2 = document.createElement('a');
    element2.setAttribute('md-waves', '');
    element2.classList.add('waves-effect');
    document.body.appendChild(element2);

    expect(element2.classList.contains('waves-effect')).toBe(true);

    let waves2 = new MdWaves(element2);
    waves2.attached();
    // taskQueue.flushMicroTaskQueue();

    expect(element2.classList.contains('waves-effect')).toBe(true);

    waves2.detached();
    // taskQueue.flushMicroTaskQueue();

    expect(element2.classList.contains('waves-effect')).toBe(true);
  });

  it('applies a color class', () => {
    element.setAttribute('md-waves', 'color: green;');
    waves.color = 'green';
    waves.attached();
    taskQueue.flushMicroTaskQueue();

    expect(element.classList.contains('waves-effect')).toBe(true);
    expect(element.classList.contains('waves-green')).toBe(true);
  });
});
