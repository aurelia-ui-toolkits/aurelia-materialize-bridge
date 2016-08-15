import { inject } from 'aurelia-framework';
import { ValidationController, validateTrigger } from 'aurelia-validation';
import { ValidationRules } from 'aurelia-validatejs';

@inject(ValidationController)
export class AureliaValidation {
  firstName = '';
  lastName = 'Doe';
  myErrors = [];

  rules = ValidationRules
    .ensure('firstName').required()
    .ensure('lastName').required();

  constructor(controller: ValidationController) {
    this.controller = controller;
    this.controller.validateTrigger = validateTrigger.manual;
  }

  validateModel() {
    this.myErrors = this.controller.validate();
  }
}
