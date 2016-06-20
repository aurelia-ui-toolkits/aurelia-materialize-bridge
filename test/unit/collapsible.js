// import './setup';
import 'aurelia-polyfills';
// import {TaskQueue} from 'aurelia-task-queue';
import {initialize} from 'aurelia-pal-browser';
import {MdCollapsible} from 'src/collapsible/collapsible';

describe('Collapsible', () => {
  let element;
  // let taskQueue;
  let collapsible;

  beforeEach(() => {
    initialize();

    element = document.createElement('a');
    document.body.appendChild(element);

    // taskQueue = new TaskQueue();
    collapsible = new MdCollapsible(element);
  });

  it('sets collapsible class', () => {
    collapsible.attached();
    expect(element.classList.contains('collapsible')).toBe(true);
  });

  it('sets popout class if popout is specified', () => {
    collapsible.popout = true;
    collapsible.attached();
    expect(element.classList.contains('popout')).toBe(true);
  });

  it('sets data-collapsible attribute to "accordion" if accordion is specified', () => {
    collapsible.accordion = true;
    collapsible.attached();
    expect(element.getAttribute('data-collapsible')).not.toBeNull();
    expect(element.getAttribute('data-collapsible')).toBe('accordion');
  });

  it('sets data-collapsible attribute to "expandable" if accordion is not specified', () => {
    collapsible.attached();
    expect(element.getAttribute('data-collapsible')).not.toBeNull();
    expect(element.getAttribute('data-collapsible')).toBe('expandable');
  });

  it('removes classes and attributes on detached()', () => {
    collapsible.attached();
    expect(element.classList.contains('collapsible')).toBe(true);
    expect(element.getAttribute('data-collapsible')).toBe('expandable');

    collapsible.detached();
    expect(element.classList.contains('collapsible')).toBe(false);
    expect(element.getAttribute('data-collapsible')).toBeNull();
  });

  it('can change accordion state at runtime', () => {
    collapsible.attached();
    expect(element.getAttribute('data-collapsible')).toBe('expandable');
    collapsible.accordion = true;
    collapsible.accordionChanged(true, false);
    expect(element.getAttribute('data-collapsible')).toBe('accordion');
  });
});
