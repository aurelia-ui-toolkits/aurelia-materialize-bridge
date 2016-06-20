// import './setup';
import 'aurelia-polyfills';
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

  it('removes set classes on detached', () => {
    button.flat = true;
    button.attached();
    expect(element.classList.contains('btn-flat')).toBe(true);
    button.detached();
    expect(element.classList.contains('btn-flat')).toBe(false);
  });

  it('removes btn-flat if flat is changed from true to false', () => {
    button.flat = true;
    button.attached();
    expect(element.classList.contains('btn-flat')).toBe(true);
    button.flat = false;
    button.flatChanged(false, true);
    expect(element.classList.contains('btn-flat')).toBe(false);
  });

  it('restores btn-flat if flat is changed from true to false and back', () => {
    button.flat = true;
    button.attached();
    expect(element.classList.contains('btn-flat')).toBe(true);
    button.flat = false;
    button.flatChanged(false, true);
    expect(element.classList.contains('btn-flat')).toBe(false);
    button.flat = true;
    button.flatChanged(true, false);
    expect(element.classList.contains('btn-flat')).toBe(true);
  });

  it('removed disabled if disabled is changed from true to false', () => {
    button.disabled = true;
    button.attached();
    expect(element.classList.contains('disabled')).toBe(true);
    button.disabled = false;
    button.disabledChanged(false, true);
    expect(element.classList.contains('disabled')).toBe(false);
  });

  it('restores disabled if disabled is changed from true to false and back', () => {
    button.disabled = true;
    button.attached();
    expect(element.classList.contains('disabled')).toBe(true);
    button.disabled = false;
    button.disabledChanged(false, true);
    expect(element.classList.contains('disabled')).toBe(false);
    button.disabled = true;
    button.disabledChanged(true, false);
    expect(element.classList.contains('disabled')).toBe(true);
  });
});
