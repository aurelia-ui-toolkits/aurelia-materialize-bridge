export class MaterializeFormValidationRenderer {

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
      let errorMessage = error.message || 'error';
      let input = element.querySelector('input');
      if (input) {
        input.classList.remove('valid');
        input.classList.add('invalid');

        // focus target
        error.target = input;

        let label = element.querySelector('label');
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
  }

  remove(element, error) {
    switch (element.tagName) {
    case 'MD-INPUT': {
      let input = element.querySelector('input');
      if (input) {
        input.classList.remove('invalid');
        input.classList.add('valid');

        let label = element.querySelector('label');
        if (label) {
          label.removeAttribute('data-error');
        }
      }
      break;
    }
    default: break;
    }
  }

}
