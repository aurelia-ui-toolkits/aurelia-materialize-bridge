export class DatePickerDefaultParser {
  canParse(value) {
    if (value) {
      return true;
    }
    return false;
  }

  parse(value) {
    if (value) {
      let result = value.split('/').join('-');
      result = new Date(result);
      return isNaN(result) ? null : result;
    }
    return null;
  }
}
