export class Options {
  selectedDate = null;

  setDate() {
    let date = new Date();
    this.selectedDate = date;
  }
}
