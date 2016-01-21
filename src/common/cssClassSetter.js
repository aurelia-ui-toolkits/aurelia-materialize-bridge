import { transient } from 'aurelia-framework';

/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
// @transient()
export class CssClassSetter {
  addedClasses = [];

  constructor(element) {
    this.element = element;
  }

  addClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      if (!this.element.classList.contains(c)) {
        this.addedClasses.push(c);
        this.element.classList.add(c);
      }
    });
  }
  
  removeClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      if (this.element.classList.contains(c) && this.addedClasses.indexOf(c) > -1) {
        this.element.classList.remove(c);
        this.addedClasses.splice(this.addedClasses.indexOf(c), 1)
      }
    });
  }
}
