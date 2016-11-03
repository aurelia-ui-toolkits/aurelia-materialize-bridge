import {DatePickerDefaultParser} from 'aurelia-materialize-bridge/datepicker/datepicker-default-parser';
import {inject} from 'aurelia-framework';

@inject(DatePickerDefaultParser)
export class AdvancedOptions {
  selectedDate = null;

  advancedOptions = {};
  parsers = [];

  constructor(datePickerDefaultParser) {
    let today = new Date();
    let nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 8);

    this.advancedOptions = {
      closeOnSelect: true,
      closeOnClear: true,
      max: nextWeek,
      selectYears: 50,
      editable: true,
      showIcon: true
    };

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
  keywords = [
    'yesterday',
    'today',
    'tomorrow',
    'next week'
  ];

  canParse(value) {
    if (value && typeof value === 'string') {
      let val = value.toLowerCase();
      return this.keywords.indexOf(val) > -1;
    }
  }

  parse(value) {
    let currentDate = new Date();
    let val = value.toLowerCase();

    switch (val) {
    case 'yesterday':
      currentDate.setDate(currentDate.getDate() - 1);
      break;
    case 'tomorrow':
      currentDate.setDate(currentDate.getDate() + 1);
      break;
    case 'next week':
      currentDate.setDate(currentDate.getDate() + 7);
      break;
    case 'today':
    default:
      break;
    }

    return currentDate;
  }
}
