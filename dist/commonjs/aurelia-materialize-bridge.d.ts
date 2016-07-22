import * as LogManager from 'aurelia-logging';
import {
  bindable,
  customAttribute,
  customElement,
  inlineView
} from 'aurelia-templating';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  bindingMode,
  observable,
  BindingEngine,
  ObserverLocator
} from 'aurelia-binding';
import {
  Router
} from 'aurelia-router';
import {
  TaskQueue
} from 'aurelia-task-queue';
import {
  getLogger
} from 'aurelia-logging';
export declare class ClickCounter {
  count: any;
  increment(): any;
}

/**
* Plugin configuration builder
*/
export declare class ConfigBuilder {
  useGlobalResources: boolean;
  useScrollfirePatch: boolean;
  globalResources: any;
  useAll(): ConfigBuilder;
  useBadge(): ConfigBuilder;
  useBox(): ConfigBuilder;
  useBreadcrumbs(): ConfigBuilder;
  useButton(): ConfigBuilder;
  useCarousel(): ConfigBuilder;
  useCharacterCounter(): ConfigBuilder;
  useCard(): ConfigBuilder;
  useCheckbox(): ConfigBuilder;
  useChip(): ConfigBuilder;
  
  /**
    * Use my control
    */
  useClickCounter(): ConfigBuilder;
  useCollapsible(): ConfigBuilder;
  useCollection(): ConfigBuilder;
  useColors(): ConfigBuilder;
  useDatePicker(): ConfigBuilder;
  useDropdown(): ConfigBuilder;
  useFab(): ConfigBuilder;
  useFile(): ConfigBuilder;
  useFooter(): ConfigBuilder;
  useInput(): ConfigBuilder;
  useModal(): ConfigBuilder;
  useNavbar(): ConfigBuilder;
  usePagination(): ConfigBuilder;
  useParallax(): ConfigBuilder;
  useProgress(): ConfigBuilder;
  usePushpin(): ConfigBuilder;
  useRadio(): ConfigBuilder;
  useRange(): ConfigBuilder;
  useScrollfire(): ConfigBuilder;
  useScrollSpy(): ConfigBuilder;
  useSelect(): ConfigBuilder;
  useSidenav(): ConfigBuilder;
  useSlider(): ConfigBuilder;
  useSwitch(): ConfigBuilder;
  
  /**
     * Use materialized tabs
     */
  useTabs(): ConfigBuilder;
  useTooltip(): ConfigBuilder;
  useTransitions(): ConfigBuilder;
  
  /**
     * Use ripple/waves effect
     */
  useWaves(): ConfigBuilder;
  useWell(): ConfigBuilder;
  
  /**
    * Don't globalize any resources
    * Allows you to import yourself via <require></require>
    */
  withoutGlobalResources(): ConfigBuilder;
  withScrollfirePatch(): ConfigBuilder;
}
export declare function configure(aurelia?: any, configCallback?: any): any;
export declare const version: any;
export declare class MdBadge {
  isNew: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdBox {
  caption: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

// taken from: https://github.com/heruan/aurelia-breadcrumbs
export declare class MdBreadcrumbs {
  constructor(element?: any, router?: any);
  navigate(navigationInstruction?: any): any;
}

// this.router.navigate(navigationInstruction.config.name);
export declare class InstructionFilterValueConverter {
  toView(navigationInstructions?: any): any;
}
export declare class MdButton {
  disabled: any;
  flat: any;
  floating: any;
  large: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  disabledChanged(newValue?: any): any;
  flatChanged(newValue?: any): any;
}
export declare class MdCard {
  mdImage: any;
  mdReveal: any;
  mdSize: any;
  mdTitle: any;
  constructor(element?: any);
  attached(): any;
}

// @customElement('md-carousel-item')
export declare class MdCarouselItem {
  mdHref: any;
  mdImage: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdCarousel {
  mdSlider: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdCheckbox {
  static id: any;
  mdChecked: any;
  mdDisabled: any;
  mdFilledIn: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  handleChange(): any;
  mdCheckedChanged(newValue?: any): any;
  mdDisabledChanged(newValue?: any): any;
}
export declare class MdCharCounter {
  length: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdChip {
  mdClose: any;
  attached(): any;
}
export declare class MdCollapsible {
  constructor(element?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  accordionChanged(): any;
}
export declare class MdCollectionHeader {
  constructor(element?: any);
}
export declare class MdCollectionItem {

}
export declare class MdCollection {
  constructor(element?: any);
  attached(): any;
  getSelected(): any;
}
export declare class MdlListSelector {
  item: any;
  isSelected: any;
  constructor(element?: any);
  isSelectedChanged(newValue?: any): any;
}

/* eslint-enable */
export declare class DarkenValueConverter {
  toView(value?: any, steps?: any): any;
}
export declare class LightenValueConverter {
  toView(value?: any, steps?: any): any;
}

/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export declare class AttributeManager {
  addedClasses: any;
  addedAttributes: any;
  constructor(element?: any);
  addAttributes(attrs?: any): any;
  removeAttributes(attrs?: any): any;
  addClasses(classes?: any): any;
  removeClasses(classes?: any): any;
}
export declare function getBooleanFromAttributeValue(value?: any): any;
export declare const constants: any;

/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export declare function fireEvent(element: Element, name: string, data?: any): any;

/**
* Fire DOM event on an element with the md-on prefix
* @param element The Element which the DOM event will be fired on
* @param name The Event's name, without md-on prefix
* @param data Addition data to attach to an event
*/
export declare function fireMaterializeEvent(element: Element, name: string, data?: any): any;
export declare class MdDatePicker {
  container: any;
  translation: any;
  value: any;
  selectMonths: any;
  selectYears: any;
  options: any;
  constructor(element?: any, taskQueue?: any);
  bind(): any;
  movePickerCloserToSrc(): any;
  detached(): any;
  openDatePicker(): any;
  closeDatePicker(): any;
  onClose(): any;
  onCalendarIconClick(event?: any): any;
  onSet(value?: any): any;
  
  // this.value = new Date(value.select);
  valueChanged(newValue?: any): any;
}

// });
export declare class MdDropdownElement {
  static id: any;
  alignment: any;
  belowOrigin: any;
  constrainWidth: any;
  gutter: any;
  hover: any;
  mdTitle: any;
  inDuration: any;
  outDuration: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdDropdown {
  activates: any;
  alignment: any;
  belowOrigin: any;
  constrainWidth: any;
  gutter: any;
  hover: any;
  mdTitle: any;
  inDuration: any;
  outDuration: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdFab {
  mdFixed: any;
  mdLarge: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdFileInput {
  mdCaption: any;
  mdMultiple: any;
  mdLabelValue: any;
  files: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  handleChangeFromNativeInput(): any;
}
export declare class MdFooter {
  constructor(element?: any);
  bind(): any;
  unbind(): any;
}
export declare class MdPrefix {
  constructor(element?: any);
  bind(): any;
  unbind(): any;
}
export declare class MdInputUpdateService {
  constructor(taskQueue?: any);
  materializeUpdate(): any;
  update(): any;
}
export declare class MdInput {
  static id: any;
  mdLabel: any;
  mdDisabled: any;
  mdPlaceholder: any;
  mdTextArea: any;
  mdType: any;
  mdValidate: any;
  mdValidateError: any;
  mdValue: any;
  constructor(element?: any, taskQueue?: any, updateService?: any);
  bind(): any;
  attached(): any;
  mdValueChanged(): any;
}
export declare class MdModalTrigger {
  dismissible: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  onComplete(): any;
}
export declare class MdNavbar {
  mdFixed: any;
  fixedAttributeManager: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdPagination {
  mdActivePage: any;
  mdPages: any;
  mdVisiblePageLinks: any;
  mdPageLinks: any;
  mdShowFirstLast: any;
  mdShowPrevNext: any;
  mdShowPageLinks: any;
  constructor(element?: any);
  bind(): any;
  setActivePage(page?: any): any;
  setFirstPage(): any;
  setLastPage(): any;
  setPreviousPage(): any;
  setNextPage(): any;
  mdVisiblePageLinksChanged(): any;
  generatePageLinks(): any;
}
export declare class MdParallax {
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

// destroy handler not available
export declare class MdProgress {
  mdColor: any;
  mdType: any;
  mdValue: any;
  constructor(element?: any);
}

// mdValueChanged(newValue, oldValue) {
//   console.log('mdValueChanged, newValue:', JSON.stringify(newValue), 'oldValue:', JSON.stringify(oldValue));
// }
export declare class MdPushpin {
  bottom: any;
  offset: any;
  top: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

// destroy handler not available
export declare class MdRadio {
  static id: any;
  mdChecked: any;
  mdDisabled: any;
  mdGap: any;
  mdModel: any;
  mdName: any;
  mdValue: any;
  constructor(element?: any);
  
  // this.handleChange = this.handleChange.bind(this);
  attached(): any;
  
  // this.radio.checked = getBooleanFromAttributeValue(this.mdChecked);
  // this.radio.addEventListener('change', this.handleChange);
  detached(): any;
  
  // this.radio.removeEventListener('change', this.handleChange);
  // handleChange() {
  //   this.mdChecked = this.radio.checked;
  // }
  // mdCheckedChanged(newValue) {
  //   if (this.radio) {
  //     this.radio.checked = !!newValue;
  //   }
  // }
  mdDisabledChanged(newValue?: any): any;
}
export declare class MdRange {
  mdMin: any;
  mdMax: any;
  mdStep: any;
  mdValue: any;
  constructor(element?: any);
}

/* eslint no-new-func:0 */
export declare class ScrollfirePatch {
  static patched: any;
  patch(): any;
}
export declare class MdScrollfireTarget {
  callback: any;
  offset: any;
  constructor(element?: any);
}
export declare class MdScrollfire {
  targetId: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdScrollSpy {
  target: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

// destroy handler not available
export declare class MdSelect {
  disabled: any;
  subscriptions: any;
  constructor(element?: any, logManager?: any, bindingEngine?: any, taskQueue?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  disabledChanged(newValue?: any): any;
  notifyBindingEngine(): any;
  handleChangeFromNativeSelect(): any;
  handleChangeFromViewModel(newValue?: any): any;
}
export declare class MdSidenavCollapse {
  ref: any;
  constructor(element?: any, observerLocator?: any);
  attached(): any;
  detached(): any;
}

// this.widthSubscription.unsubscribe();
// fixedChanged() {
//   this.log.debug('fixedChanged');
//   $(this.element).sideNav({
//     edge: this.ref.edge || 'left',
//     closeOnClick: this.ref.closeOnClick,
//     menuWidth: parseInt(this.ref.mdWidth, 10)
//   });
// }
//
// widthChanged() {
//   this.log.debug('widthChanged');
//   $(this.element).sideNav({
//     edge: this.ref.edge || 'left',
//     closeOnClick: this.ref.closeOnClick,
//     menuWidth: parseInt(this.ref.mdWidth, 10)
//   });
// }
export declare class MdSidenav {
  static id: any;
  mdCloseOnClick: any;
  mdEdge: any;
  mdFixed: any;
  mdWidth: any;
  attachedResolver: any;
  whenAttached: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  mdFixedChanged(newValue?: any): any;
}
export declare class MdSlider {
  mdFillContainer: any;
  mdHeight: any;
  mdIndicators: any;
  mdInterval: any;
  mdTransition: any;
  constructor(element?: any);
  attached(): any;
  pause(): any;
  start(): any;
  next(): any;
  prev(): any;
  refresh(): any;
  mdIndicatorsChanged(): any;
}

// commented since that leads to strange effects
// mdIntervalChanged() {
//   this.refresh();
// }
//
// mdTransitionChanged() {
//   this.refresh();
// }
export declare class MdSwitch {
  mdChecked: any;
  mdDisabled: any;
  mdLabelOff: any;
  mdLabelOn: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  handleChange(): any;
  mdCheckedChanged(newValue?: any): any;
}
export declare class MdTabs {
  constructor(element?: any, taskQueue?: any);
  attached(): any;
  
  // });
  detached(): any;
  fireTabSelectedEvent(e?: any): any;
  selectTab(id?: any): any;
  
  // FIXME: probably bad
  selectedTab: any;
}
export declare class MdToastService {
  show(message?: any, displayLength?: any, className?: any): any;
}

// @customAttribute('md-tooltip')
export declare class MdTooltip {
  position: any;
  delay: any;
  text: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdFadeinImage {
  ref: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  fadeInImage(): any;
  ensureOpacity(): any;
}
export declare class MdStaggeredList {
  ref: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  staggerList(): any;
  ensureOpacity(): any;
}
export declare class MdWaves {
  block: any;
  circle: any;
  color: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}