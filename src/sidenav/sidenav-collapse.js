import { bindable, customAttribute } from 'aurelia-templating';
import { getLogger } from 'aurelia-logging';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { fireMaterializeEvent } from '../common/events';

@customAttribute('md-sidenav-collapse')
@inject(Element)
export class MdSidenavCollapse {
  @bindable() ref;
  constructor(element) {
    this.element = element;
    this.log = getLogger('md-sidenav-collapse');
  }

  attached() {
    this.ref.whenAttached.then(() => {
      const closeOnClick = this.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(this.ref.mdCloseOnClick);

      this.onHide = this.onHide.bind(this);
      this.onShow = this.onShow.bind(this);

      this.element.setAttribute('data-activates', this.ref.controlId);
      let sideNavConfig = {
        edge: this.ref.mdEdge || 'left',
        closeOnClick,
        menuWidth: parseInt(this.ref.mdWidth, 10),
        onClose: this.onHide,
        onOpen: this.onShow
      };
      $(this.element).sideNav(sideNavConfig);
    });
  }

  detached() { }

  show() {
    $(this.element).sideNav('show');
  }

  hide() {
    $(this.element).sideNav('hide');
  }

  onShow(el) {
    fireMaterializeEvent(this.ref.element, 'sidenav-show');
  }

  onHide(el) {
    fireMaterializeEvent(this.ref.element, 'sidenav-hide');
  }
}
