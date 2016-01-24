import {TaskQueue} from 'aurelia-task-queue';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {CssClassSetter} from 'src/common/cssClassSetter';
import 'materialize';

describe('CssClassSetter', () => {
  let element, taskQueue, cssClassSetter;
  // beforeAll(() => initialize());
  initialize();

  beforeEach(() => {
    element = document.createElement('a');
    element.classList.add('preserved-class');
    document.body.appendChild(element);

    taskQueue = new TaskQueue();
    cssClassSetter = new CssClassSetter(element);
    expect(cssClassSetter.element).toBeDefined();
  });

  it('applies waves-effect class', () => {
    cssClassSetter.addClasses('waves-effect');
    taskQueue.flushMicroTaskQueue();

    expect(element.classList.contains('waves-effect')).toBe(true);
  });

  it('removes waves-effect class on detached()', () => {
    cssClassSetter.addClasses('waves-effect');
    taskQueue.flushMicroTaskQueue();

    cssClassSetter.removeClasses('waves-effect');
    taskQueue.flushMicroTaskQueue();

    expect(element.classList.contains('waves-effect')).toBe(false);
  });

  it('does not remove preserved-class class on detached()', () => {
    cssClassSetter.addClasses(['waves-effect', 'preserved-class']);
    taskQueue.flushMicroTaskQueue();

    cssClassSetter.removeClasses(['waves-effect', 'preserved-class']);
    taskQueue.flushMicroTaskQueue();

    expect(element.classList.contains('waves-effect')).toBe(false);
    expect(element.classList.contains('preserved-class')).toBe(true);
  });
});
