// import './setup';
import 'aurelia-polyfills';
import {initialize} from 'aurelia-pal-browser';
import {AttributeManager} from 'src/common/attributeManager';
import 'materialize';

describe('AttributeManager', () => {
  let element;
  let attributeManager;
  // beforeAll(() => initialize());
  // initialize();

  beforeEach(() => {
    initialize();
    element = document.createElement('a');
    element.classList.add('preserved-class');
    element.setAttribute('preserved-attribute', 'value');
    document.body.appendChild(element);

    attributeManager = new AttributeManager(element);
  });

  it('applies waves-effect class', () => {
    attributeManager.addClasses('waves-effect');

    expect(element.classList.contains('waves-effect')).toBe(true);
  });

  it('removes waves-effect class', () => {
    attributeManager.addClasses('waves-effect');
    attributeManager.removeClasses('waves-effect');

    expect(element.classList.contains('waves-effect')).toBe(false);
  });

  it('does not remove preserved-class class on removeClasses()', () => {
    attributeManager.addClasses(['waves-effect', 'preserved-class']);
    attributeManager.removeClasses(['waves-effect', 'preserved-class']);

    expect(element.classList.contains('waves-effect')).toBe(false);
    expect(element.classList.contains('preserved-class')).toBe(true);
  });

  it('applies data-handle attribute', () => {
    attributeManager.addAttributes({ 'data-handle': 'test-handle' });
    expect(element.getAttribute('data-handle')).toBeDefined();
    expect(element.getAttribute('data-handle')).not.toBeNull();
  });

  it('removes data-handle attribute when provided as an array', () => {
    attributeManager.addAttributes({ 'data-handle': 'test-handle' });
    attributeManager.removeAttributes([ 'data-handle' ]);
    // expect(element.getAttribute('data-handle')).not.toBeDefined();
    expect(element.getAttribute('data-handle')).toBeNull();
  });

  it('removes data-handle attribute when provided as a string', () => {
    attributeManager.addAttributes({ 'data-handle': 'test-handle' });
    attributeManager.removeAttributes('data-handle');
    // expect(element.getAttribute('data-handle')).not.toBeDefined();
    expect(element.getAttribute('data-handle')).toBeNull();
  });

  it('does not remove preserved-attribute on removeAttributes()', () => {
    attributeManager.addAttributes({ 'data-handle': 'test-handle', 'preserved-attribute': 'newValue' });
    attributeManager.removeAttributes([ 'data-handle', 'preserved-attribute' ]);
    expect(element.getAttribute('data-handle')).toBeNull();
    expect(element.getAttribute('preserved-attribute')).not.toBeNull();
  });

  it('can still assign a new value to an existing attribute', () => {
    attributeManager.addAttributes({ 'data-handle': 'test-handle', 'preserved-attribute': 'newValue' });
    expect(element.getAttribute('preserved-attribute')).toBe('newValue');

    attributeManager.removeAttributes([ 'data-handle', 'preserved-attribute' ]);
    expect(element.getAttribute('data-handle')).toBeNull();
    expect(element.getAttribute('preserved-attribute')).toBe('newValue');
  });
});
