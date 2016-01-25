import {initialize} from 'aurelia-pal-browser';
import {CssClassSetter} from 'src/common/cssClassSetter';
import 'materialize';

describe('CssClassSetter', () => {
  let element;
  let cssClassSetter;
  // beforeAll(() => initialize());
  // initialize();

  beforeEach(() => {
    initialize();
    element = document.createElement('a');
    element.classList.add('preserved-class');
    element.setAttribute('preserved-attribute', 'value');
    document.body.appendChild(element);

    cssClassSetter = new CssClassSetter(element);
  });

  it('applies waves-effect class', () => {
    cssClassSetter.addClasses('waves-effect');

    expect(element.classList.contains('waves-effect')).toBe(true);
  });

  it('removes waves-effect class', () => {
    cssClassSetter.addClasses('waves-effect');
    cssClassSetter.removeClasses('waves-effect');

    expect(element.classList.contains('waves-effect')).toBe(false);
  });

  it('does not remove preserved-class class on removeClasses()', () => {
    cssClassSetter.addClasses(['waves-effect', 'preserved-class']);
    cssClassSetter.removeClasses(['waves-effect', 'preserved-class']);

    expect(element.classList.contains('waves-effect')).toBe(false);
    expect(element.classList.contains('preserved-class')).toBe(true);
  });

  it('applies data-handle attribute', () => {
    cssClassSetter.addAttributes({ 'data-handle': 'test-handle' });
    expect(element.getAttribute('data-handle')).toBeDefined();
    expect(element.getAttribute('data-handle')).not.toBeNull();
  });

  it('removes data-handle attribute', () => {
    cssClassSetter.addAttributes({ 'data-handle': 'test-handle' });
    cssClassSetter.removeAttributes([ 'data-handle' ]);
    // expect(element.getAttribute('data-handle')).not.toBeDefined();
    expect(element.getAttribute('data-handle')).toBeNull();
  });

  it('does not remove preserved-attribute on removeAttributes()', () => {
    cssClassSetter.addAttributes({ 'data-handle': 'test-handle', 'preserved-attribute': 'newValue' });
    cssClassSetter.removeAttributes([ 'data-handle', 'preserved-attribute' ]);
    expect(element.getAttribute('data-handle')).toBeNull();
    expect(element.getAttribute('preserved-attribute')).not.toBeNull();
  });

  it('can still assign a new value to an existing attribute', () => {
    cssClassSetter.addAttributes({ 'data-handle': 'test-handle', 'preserved-attribute': 'newValue' });
    expect(element.getAttribute('preserved-attribute')).toBe('newValue');
  });
});
