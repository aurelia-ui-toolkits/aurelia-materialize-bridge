export class BasicUse {
  textValue = '';
  values = {
    'Apple': null,
    'Microsoft': null,
    'Google': 'http://placehold.it/250x250'
  }

  setOtherValues() {
    this.values = {
      'Aurelia': 'http://placehold.it/250x250',
      'Angular': null,
      'Ember': null
    };
  }
}
