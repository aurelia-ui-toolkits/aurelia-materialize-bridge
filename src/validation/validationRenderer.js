import { inject } from 'aurelia-dependency-injection';
import { validationRenderer } from 'aurelia-validation';

@validationRenderer
@inject(Element)
export class MaterializeFormValidationRenderer {

  constructor(boundaryElement) {
    this.boundaryElement = boundaryElement;
  }

  render(error, target) {
    if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
      return;
    }

    let errorMessage = error.message || 'error';

    switch (target.tagName) {
    case 'MD-INPUT': {
      let input = target.querySelector('input');
      if (input) {
        input.classList.remove('valid');
        input.classList.add('invalid');

        // focus target
        error.target = input;

        let label:any = target.querySelector('label');
        if (label) {
          label.classList.add('active');

          // get error message from label
          let msg = label.getAttribute('data-error');
          if(!msg) {
            // error message not set? add
            label.setAttribute('data-error', errorMessage);
          } else {
            // set label message into error object
            error.message = msg;
          }
        }
      }
      break;
    }
    default: break;
    }

    // tag the element so we know we rendered into it.
    target.errors = (target.errors || new Map());
    target.errors.set(error);
  }

  unrender(error, target) {
    if (!target || !target.errors || !target.errors.has(error)) {
      return;
    }
    target.errors.delete(error);

    switch (target.tagName) {
    case 'MD-INPUT': {
      let input = target.querySelector('input');
      if (input) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      }
      break;
    }
    default: break;
    }
  }

}
