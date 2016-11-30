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
      let label = element.querySelector('label');
      let input = element.querySelector('input') || element.querySelector('textarea');
      if (label) {
        label.removeAttribute('data-error');
      }
      if (input) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        error.target = input;
        if (input.hasAttribute('data-show-errortext')) {
          this.addMessage(element, error);
        }
      }
      break;
    }
    case 'SELECT': {
      const selectWrapper = element.closest('.select-wrapper');
      if (!selectWrapper) {
        return;
      }
      let input = selectWrapper.querySelector('input');
      if (input) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        error.target = input;
        if (!(input.hasAttribute('data-show-errortext') &&
            input.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(selectWrapper, error);
        }
      }
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        element.classList.remove('valid');
        element.classList.add('invalid');
        if (!(element.hasAttribute('data-show-errortext') &&
            element.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(element.parentNode, error);
        }
      }
      break;
    }
    default: break;
    }
  }

  remove(element, error) {
    switch (element.tagName) {
    case 'MD-INPUT': {
      this.removeMessage(element, error);

      let input = element.querySelector('input') || element.querySelector('textarea');
      if (input && element.querySelectorAll('.' + this.className).length === 0) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      }
      break;
    }
    case 'SELECT': {
      const selectWrapper = element.closest('.select-wrapper');
      if (!selectWrapper) {
        return;
      }
      this.removeMessage(selectWrapper, error);

      let input = selectWrapper.querySelector('input');
      if (input && selectWrapper.querySelectorAll('.' + this.className).length === 0) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      }
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        this.removeMessage(element.parentNode, error);
        if (element && element.parentNode.querySelectorAll('.' + this.className).length === 0) {
          element.classList.remove('invalid');
          element.classList.add('valid');
        }
      }
      break;
    }
    default: break;
    }
  }

  addMessage(element, error) {
    let message = document.createElement('div');
    message.id = `md-input-validation-${error.id}`;
    message.textContent = error.message;
    message.className = this.className;
    if (element.querySelectorAll('.' + this.className).length === 0) {
      message.className += ' ' + this.classNameFirst;
    }
    message.style.opacity = 0;
    element.appendChild(message, element.nextSibling);
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  }

  removeMessage(element, error) {
    let message = element.querySelector(`#md-input-validation-${error.id}`);
    if (message) {
      element.removeChild(message);
    }
  }

}
