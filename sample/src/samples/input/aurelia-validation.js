import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, validateTrigger, ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge/validation/validationRenderer';

@inject(NewInstance.of(ValidationController))
export class AureliaValidation {
  firstName = '';
  lastName = 'Doe';
  myErrors = [];

  controller = null;

  rules = ValidationRules
    .ensure('firstName').required()
    .ensure('lastName').length({ minimum: 4 }).required()
    .rules;

  constructor(controller: ValidationController) {
    this.controller = controller;
    this.controller.addRenderer(new MaterializeFormValidationRenderer());
    this.controller.validateTrigger = validateTrigger.change;
  }

  validateModel() {
    this.myErrors = this.controller.validate();
  }
}
