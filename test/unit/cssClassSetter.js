import {TaskQueue} from 'aurelia-task-queue';
import {initialize} from 'aurelia-pal-browser';
import {CssClassSetter} from 'src/common/cssClassSetter';
import 'materialize';

describe('CssClassSetter', () => {
  let element;
  let taskQueue;
  let cssClassSetter;
  // beforeAll(() => initialize());
  // initialize();

  beforeEach(() => {
    initialize();
    element = document.createElement('a');
    element.classList.add('preserved-class');
    document.body.appendChild(element);

    taskQueue = new TaskQueue();
    cssClassSetter = new CssClassSetter(element);
  });

  it('applies waves-effect class', () => {
    cssClassSetter.addClasses('waves-effect');
    taskQueue.flushMicroTaskQueue();

    expect(element.classList.contains('waves-effect')).toBe(true);
  });

  it('removes waves-effect class', () => {
    cssClassSetter.addClasses('waves-effect');
    cssClassSetter.removeClasses('waves-effect');

    expect(element.classList.contains('waves-effect')).toBe(false);
  });

  it('does not remove preserved-class class on detached()', () => {
    cssClassSetter.addClasses(['waves-effect', 'preserved-class']);
    cssClassSetter.removeClasses(['waves-effect', 'preserved-class']);

    expect(element.classList.contains('waves-effect')).toBe(false);
    expect(element.classList.contains('preserved-class')).toBe(true);
  });
});
