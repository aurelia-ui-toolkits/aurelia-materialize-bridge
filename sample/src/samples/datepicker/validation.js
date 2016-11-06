import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge';

@inject(NewInstance.of(ValidationController))
export class Validation {
  date = null;
  date2 = null;
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
    this.date = null;
    this.controller.reset({ object: this, propertyName: 'date' });
  }

  reset2() {
    this.date2 = null;
    this.controller.reset({ object: this, propertyName: 'date2' });
  }

  validateModel() {
    return this.controller.validate({ object: this, propertyName: 'date' });
  }

  validateModel2() {
    return this.controller.validate({ object: this, propertyName: 'date2' });
  }

  openErrorTarget(error, $event) {
    this[`${error.propertyName}Picker`].openDatePicker();
    $event.preventDefault();
  }
}
