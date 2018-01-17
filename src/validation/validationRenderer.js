export class MaterializeFormValidationRenderer {

  className = 'md-input-validation';
  classNameFirst = 'md-input-validation-first';

  pushElementResult(elementResults, element, result) {
    if(elementResults.has(element)) {
      elementResults.get(element).push(result);
    } else {
      elementResults.set(element, [result]);
    }
  }

  render(instruction) {
    let elementResultsToUnrender = new Map();
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        if (element.mdUnrenderValidateResults) {
          this.pushElementResult(elementResultsToUnrender, element, result);
        } else {
          this.remove(element, result);
          this.underlineInput(element, false);
        }
      }
    }
    for(let [element, results] of elementResultsToUnrender) {
      element.mdUnrenderValidateResults(results, this);
    }

    let elementResultsToRender = new Map();
    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        if (element.mdRenderValidateResults) {
          this.pushElementResult(elementResultsToRender, element, result);
        } else {
          this.add(element, result);
          this.underlineInput(element, true);
        }
      }
    }
    for(let [element, results] of elementResultsToRender) {
      element.mdRenderValidateResults(results, this);
    }
  }

  underlineInput(element, render) {
    let input;
    let validationContainer;
    switch (element.tagName) {
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
      if (render) {
        this.addValidationClasses(input, validationContainer);
      } else {
        this.removeValidationClasses(input);
      }
    }
  }

  add(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
      case 'SELECT': {
        const inputField = element.closest('.input-field');
        if (!inputField) {
          return;
        }
        let input = inputField.querySelector('input');
        if (input) {
          result.target = input;
          if (!(input.hasAttribute('data-show-errortext') && input.getAttribute('data-show-errortext') === 'false')) {
            this.addMessage(inputField, result);
          }
          break;
        }
      }
      default: break;
    }
  }

  remove(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
      case 'SELECT': {
        const inputField = element.closest('.input-field');
        if (!inputField) {
          return;
        }

        this.removeMessage(inputField, result);
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

  removeValidationClasses(input) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  }

  // addValidationClasses(input, validationContainer) {
  //   if (validationContainer.querySelectorAll('.' + this.className).length === 0) {
  //     input.classList.remove('invalid');
  //     input.classList.add('valid');
  //   } else {
  //     input.classList.remove('valid');
  //     input.classList.add('invalid');
  //   }
  // }

  addValidationClasses(input, isValid) {
    if (isValid) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  }

}
