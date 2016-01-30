import { customElement, inject, bindable } from 'aurelia-framework';

@customElement('md-dropdown')
@inject(Element)
export class MdDropdown {
  static id = 0;
  @bindable() constrainWidth = true;
  @bindable() mdTitle;
  constructor(element) {
    this.element = element;
    this.controlId = `md-dropdown-${MdDropdown.id++}`;
  }
  attached() {
    /*
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      //constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });
    */
    // console.log('this.constrainWidth', this.constrainWidth);
    $(this.element).dropdown({
      constrain_width: (this.constrainWidth === true || this.constrainWidth === 'true')
    });
  }
}
