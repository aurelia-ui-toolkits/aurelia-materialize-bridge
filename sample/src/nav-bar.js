import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;

  attached() {
    $('.button-collapse').sideNav();
  }
}
