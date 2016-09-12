import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge';

@inject(NewInstance.of(ValidationController))
export class Validation {
  selectedValue = '';
  selectedValue2 = '';
  showErrortext = false;

  controller = null;

  rules = ValidationRules
    .ensure('selectedValue')
      .displayName('Basic')
      .required()
    .ensure('selectedValue2')
      .displayName('Show or hide error text')
      .required()
    .on(this)
    .rules;

  constructor(controller: ValidationController) {
    this.controller = controller;
    this.controller.addRenderer(new MaterializeFormValidationRenderer());
  }

  reset() {
    this.selectedValue = '';
    this.controller.reset({ object: this, propertyName: 'selectedValue' });
  }

  reset2() {
    this.selectedValue2 = '';
    this.controller.reset({ object: this, propertyName: 'selectedValue2' });
  }

  validateModel() {
    return this.controller.validate({ object: this, propertyName: 'selectedValue' });
  }

  validateModel2() {
    return this.controller.validate({ object: this, propertyName: 'selectedValue2' });
  }
}
