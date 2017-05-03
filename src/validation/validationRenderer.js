export class MaterializeFormValidationRenderer {

  className = 'md-input-validation';
  classNameFirst = 'md-input-validation-first';

  render(instruction) {
    let allElements = new Array();
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    allElements.forEach(e => this.underlineInput(e));
  }

  underlineInput(element) {
    let input;
 	  let validationContainer;
    switch (element.tagName) {
      case 'MD-INPUT': {
        input = element.querySelector('input') || element.querySelector('textarea');
        validationContainer = element;
        break;
      }
      case 'SELECT': {
        const inputField = element.closest('.input-field');
        if (inputField) {
          input = inputField.querySelector('input');
          validationContainer = inputField;
        }
        break;
      }
      case 'INPUT': {
        input = element;
        validationContainer = element.parentElement;
        break;
      }
      default: break;
    }
    if (input) {
      if (validationContainer.querySelectorAll('.' + this.className).length === 0) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      }
      else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    }
  }

  add(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
    case 'MD-INPUT': {
      let label = element.querySelector('label');
      let input = element.querySelector('input') || element.querySelector('textarea');
      if (label) {
        label.removeAttribute('data-error');
      }
      if (input) {
        result.target = input;
        if (input.hasAttribute('data-show-errortext')) {
          this.addMessage(element, result);
        }
      }
      break;
    }
    case 'SELECT': {
      const inputField = element.closest('.input-field');
      if (!inputField) {
        return;
      }
      let input = inputField.querySelector('input');
      if (input) {
        result.target = input;
        if (!(input.hasAttribute('data-show-errortext') &&
              input.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(inputField, result);
        }
      }
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        if (!(element.hasAttribute('data-show-errortext') &&
            element.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(element.parentNode, result);
        }
      }
      break;
    }
    default: break;
    }
  }

  remove(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
    case 'MD-INPUT': {
      this.removeMessage(element, result);
      break;
    }
    case 'SELECT': {
      const inputField = element.closest('.input-field');
      if (!inputField) {
        return;
      }
      
      this.removeMessage(inputField, result);
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        this.removeMessage(element.parentNode, result);
      }
      break;
    }
    default: break;
    }
  }

  addMessage(element, result) {
    let message = document.createElement('div');
    message.id = `md-input-validation-${result.id}`;
    message.textContent = result.message;
    message.className = this.className;
    if (element.querySelectorAll('.' + this.className).length === 0) {
      message.className += ' ' + this.classNameFirst;
    }
    message.style.opacity = 0;
    element.appendChild(message, element.nextSibling);
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  }

  removeMessage(element, result) {
    let message = element.querySelector(`#md-input-validation-${result.id}`);
    if (message) {
      element.removeChild(message);
    }
  }

}
