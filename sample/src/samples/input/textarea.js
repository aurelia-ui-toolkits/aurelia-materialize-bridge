export class TextArea {
  textValue = '';
  disabledValue = false;
  setText() {
    this.textValue = 'something';
  }
  setDisabled() {
    this.disabledValue = !this.disabledValue;
  }
}
