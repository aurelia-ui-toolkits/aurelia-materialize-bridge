import {bindable} from 'aurelia-templating';

export class MdColors {
  @bindable() mdPrimaryColor;
  @bindable() mdAccentColor;
  @bindable() mdErrorColor = '#F44336';
  @bindable() mdSuccessColor;
}
