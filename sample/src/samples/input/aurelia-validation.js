import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge';

@inject(NewInstance.of(ValidationController))
export class AureliaValidation {
  message = '';
  firstName = '';
  lastName = 'Doe';
  email = '';
  noErrorText = '';
  textareaValue = '';

  controller = null;

  rules = ValidationRules
    .ensure('firstName')
      .required()
    .ensure('lastName')
      .minLength(4)
    .ensure('email')
      .required()
        .withMessage('We need your email')
      .email()
    .ensure('noErrorText')
      .required()
    .ensure('textareaValue').displayName('Some text')
      .required()
    .rules;

  constructor(controller: ValidationController) {
    this.controller = controller;
    this.controller.addRenderer(new MaterializeFormValidationRenderer());
  }

  validateModel() {
    this.controller.validate().then(v => {
      if (v.length === 0) {
        this.message = 'All is good!';
      } else {
        this.message = 'You have errors!';
      }
    });
  }
}
