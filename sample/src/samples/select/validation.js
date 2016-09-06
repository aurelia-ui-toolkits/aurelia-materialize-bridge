import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge';

@inject(NewInstance.of(ValidationController))
export class Validation {
  selectedValue = '';

  controller = null;

  rules = ValidationRules
    .ensure('selectedValue')
      .required()
      .on(this)
      .rules;


  constructor(controller: ValidationController) {
    this.controller = controller;
    this.controller.addRenderer(new MaterializeFormValidationRenderer());
  }

  reset() {
    this.selectedValue = '';
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
