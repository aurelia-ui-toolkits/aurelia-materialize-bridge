import { transient } from 'aurelia-framework';

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
