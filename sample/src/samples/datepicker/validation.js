import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge';

@inject(NewInstance.of(ValidationController))
export class Validation {
  date = '';
  date2 = '';
  showErrortext = false;

  controller = null;

  rules = ValidationRules
    .ensure('date')
      .displayName('Date')
      .required()
    .ensure('date2')
      .displayName('Show or hide error text date')
      .required()
    .on(this)
    .rules;

  constructor(controller: ValidationController) {
    this.controller = controller;
    this.controller.addRenderer(new MaterializeFormValidationRenderer());
  }

  reset() {
    this.selectedValue = '';
    this.controller.reset({ object: this, propertyName: 'date' });
  }

  reset2() {
    this.selectedValue2 = '';
    this.controller.reset({ object: this, propertyName: 'date2' });
  }

  validateModel() {
    return this.controller.validate({ object: this, propertyName: 'date' });
  }

  validateModel2() {
    return this.controller.validate({ object: this, propertyName: 'date2' });
  }
}
