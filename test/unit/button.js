// import {TaskQueue} from 'aurelia-task-queue';
import {initialize} from 'aurelia-pal-browser';
import {MdButton} from 'src/button/button';

describe('Button', () => {
  let element;
  // let taskQueue;
  let button;

  beforeEach(() => {
    initialize();

    element = document.createElement('a');
    document.body.appendChild(element);

    // taskQueue = new TaskQueue();
    button = new MdButton(element);
  });

  it('sets btn class', () => {
    button.attached();
    expect(element.classList.contains('btn')).toBe(true);
  });

  it('sets accent class', () => {
    button.attached();
    expect(element.classList.contains('accent')).toBe(true);
  });

  it('sets flat class if flat is specified', () => {
    button.flat = true;
    button.attached();
    expect(element.classList.contains('btn-flat')).toBe(true);
  });

  it('does not set accent class if flat is specified', () => {
    button.flat = true;
    button.attached();
    expect(element.classList.contains('btn-flat')).toBe(true);
    expect(element.classList.contains('accent')).toBe(false);
  });

  it('sets large class if large is specified', () => {
    button.large = true;
    button.attached();
    expect(element.classList.contains('btn-large')).toBe(true);
  });

  it('sets disabled class if disabled is specified', () => {
    button.disabled = true;
    button.attached();
    expect(element.classList.contains('disabled')).toBe(true);
  });
});
