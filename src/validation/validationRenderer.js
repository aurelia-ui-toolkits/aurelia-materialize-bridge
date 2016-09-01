export class MaterializeFormValidationRenderer {

  className = 'md-input-validation';
  classNameFirst = 'md-input-validation-first';

  render(instruction) {
    for (let { error, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, error);
      }
    }
    for (let { error, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, error);
      }
    }
  }

  add(element, error) {
    switch (element.tagName) {
    case 'MD-INPUT': {
      let input = element.querySelector('input');
      let label = element.querySelector('label');
      if (input) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        error.target = input;
      }
      if (label) {
        label.removeAttribute('data-error');
      }

      let message = document.createElement('div');
      message.id = `md-input-validation-${error.id}`;
      message.textContent = error.message;
      message.className = this.className;
      if (!element.querySelector('.' + this.className)) {
        message.className += ' ' + this.classNameFirst;
      }
      message.style.opacity = 0;
      element.appendChild(message, element.nextSibling);
      window.getComputedStyle(message).opacity;
      message.style.opacity = 1;
      break;
    }
    default: break;
    }
  }

  remove(element, error) {
    switch (element.tagName) {
    case 'MD-INPUT': {
      let message = element.querySelector(`#md-input-validation-${error.id}`);
      if (message) {
        element.removeChild(message);
      }

      let input = element.querySelector('input');
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
