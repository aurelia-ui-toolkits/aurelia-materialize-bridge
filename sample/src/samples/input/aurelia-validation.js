import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, validateTrigger, ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge/validation/validationRenderer';

@inject(NewInstance.of(ValidationController))
export class AureliaValidation {
  message = '';
  firstName = '';
  lastName = 'Doe';

  controller = null;

  rules = ValidationRules
    .ensure('firstName').required()
    .ensure('lastName').minLength(4)
    .rules;

  constructor(controller: ValidationController) {
    this.controller = controller;
    this.controller.addRenderer(new MaterializeFormValidationRenderer());
    this.controller.validateTrigger = validateTrigger.change;
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
