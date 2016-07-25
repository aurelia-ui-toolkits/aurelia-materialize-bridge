import {DatePickerDefaultParser} from '../../../../src/aurelia-materialize-bridge/datepicker/datepicker.default-parser';
import {inject} from 'aurelia-framework';

@inject(DatePickerDefaultParser)
export class AdvancedOptions {
  selectedDate = null;
  advancedOptions = {
    closeOnSelect: true,
    closeOnClear: true,
    max: new Date(),
    selectYears: 50,
    editable: true,
    showIcon: true
  };

  parsers = [];

  constructor(datePickerDefaultParser) {
    this.parsers = [datePickerDefaultParser];
  }

  setDate() {
    let date = new Date();
    this.selectedDate = date;
  }

  addOtherParser() {
    let newParser = new KeywordParser();
    this.parsers.push(newParser);
  }
}

class KeywordParser {
  canParse(value) {
    if (value && typeof value === 'string' && value.toLowerCase() === 'yesterday') {
      return true;
    }
  }

  parse(value) {
    if (value.toLowerCase() === 'yesterday') {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      return currentDate;
    }
  }
}
