import {
  PLATFORM,
  DOM
} from 'aurelia-pal';
import {
  bindable,
  customAttribute,
  customElement,
  children
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
import {
  EventAggregator
} from 'aurelia-event-aggregator';
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
  useAutoComplete(): ConfigBuilder;
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
  useDropdownFix(): ConfigBuilder;
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
  useTapTarget(): ConfigBuilder;
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
export declare class MdAutoComplete {
  input: any;
  values: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  valuesChanged(newValue?: any): any;
}
export declare class MdBadge {
  isNew: any;
  caption: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  newChanged(newValue?: any): any;
  captionChanged(newValue?: any): any;
}
export declare class MdBox {
  caption: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

// taken from: https://github.com/heruan/aurelia-breadcrumbs
export declare class MdBreadcrumbs {
  router: any;
  constructor(element?: any, router?: any);
  bind(): any;
  routerChanged(): any;
  navigate(navigationInstruction?: any): any;
}
export declare class InstructionFilterValueConverter {
  toView(navigationInstructions?: any): any;
}
export declare class MdButton {
  disabled: any;
  flat: any;
  floating: any;
  large: any;
  pulse: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  disabledChanged(newValue?: any): any;
  flatChanged(newValue?: any): any;
  pulseChanged(newValue?: any): any;
}
export declare class MdCard {
  mdHorizontal: any;
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
  mdIndicators: any;
  mdSlider: any;
  items: any;
  constructor(element?: any, taskQueue?: any);
  attached(): any;
  itemsChanged(newValue?: any): any;
  refresh(): any;
}
export declare class MdCharCounter {
  length: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

// @customElement('md-checkbox')
export declare class MdCheckbox {
  static id: any;
  mdChecked: any;
  mdDisabled: any;
  mdReadonly: any;
  mdFilledIn: any;
  mdMatcher: any;
  mdModel: any;
  constructor(element?: any);
  attached(): any;
  
  // blur() {
  //   fireEvent(this.element, 'blur');
  // }
  detached(): any;
  
  // handleChange() {
  //   this.mdChecked = this.checkbox.checked;
  //   fireEvent(this.element, 'blur');
  // }
  // mdCheckedChanged(newValue) {
  //   // if (this.checkbox) {
  //   //   this.checkbox.checked = !!newValue;
  //   // }
  //   fireEvent(this.element, 'blur');
  // }
  mdDisabledChanged(newValue?: any): any;
}
export declare class MdChip {
  mdClose: any;
  constructor(element?: any);
  attached(): any;
  close(): any;
}
export declare class MdChips {
  autocompleteData: any;
  data: any;
  placeholder: any;
  secondaryPlaceholder: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  onChipAdd(e?: any, chip?: any): any;
  onChipDelete(e?: any, chip?: any): any;
  onChipSelect(e?: any, chip?: any): any;
}
export declare class MdCollapsible {
  constructor(element?: any, eventAggregator?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  accordionChanged(): any;
  buildCollapsibleOpenCloseCallbackHandler(handler?: any): any;
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
  clearSelection(): any;
  selectAll(): any;
}
export declare class MdlListSelector {
  item: any;
  mdDisabled: any;
  isSelected: any;
  constructor(element?: any);
  isSelectedChanged(newValue?: any): any;
  mdDisabledChanged(newValue?: any): any;
}

/* eslint-enable */
export declare class DarkenValueConverter {
  toView(value?: any, steps?: any): any;
}
export declare class LightenValueConverter {
  toView(value?: any, steps?: any): any;
}
export declare class MdColors {
  mdPrimaryColor: any;
  mdAccentColor: any;
  mdErrorColor: any;
  mdSuccessColor: any;
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

// https://github.com/jonathantneal/closest/blob/master/closest.js
export declare function polyfillElementClosest(): any;
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
export declare function applyMaterializeDropdownFix(): any;
export declare class MdDropdown {
  static elementId: any;
  activates: any;
  ref: any;
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
  handleActivateElement(): any;
}
export declare class DatePickerDefaultParser {
  canParse(value?: any): any;
  parse(value?: any): any;
}
export declare class MdDatePicker {
  container: any;
  translation: any;
  value: any;
  parsers: any;
  selectMonths: any;
  selectYears: any;
  options: any;
  showErrortext: any;
  calendarIcon: any;
  constructor(element?: any, taskQueue?: any, defaultParser?: any);
  bind(): any;
  parseDate(value?: any): any;
  detached(): any;
  openDatePicker(): any;
  closeDatePicker(): any;
  onClose(): any;
  onCalendarIconClick(event?: any): any;
  onSet(value?: any): any;
  valueChanged(newValue?: any): any;
  showErrortextChanged(): any;
  setErrorTextAttribute(): any;
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
  disabled: any;
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
  mdBlurOnEnter: any;
  mdDisabled: any;
  mdReadonly: any;
  mdPlaceholder: any;
  mdTextArea: any;
  mdType: any;
  mdStep: any;
  mdValidate: any;
  mdShowErrortext: any;
  mdValidateError: any;
  mdValidateSuccess: any;
  mdValue: any;
  constructor(element?: any, taskQueue?: any, updateService?: any);
  bind(): any;
  attached(): any;
  detached(): any;
  blur(): any;
  focus(): any;
  mdValueChanged(): any;
  attachEventHandlers(): any;
  detachEventHandlers(): any;
  blurOnEnter(e?: any): any;
}
export declare class MdModalTrigger {
  dismissible: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  onComplete(): any;
}
export declare class MdModal {
  dismissible: any;
  opacity: any;
  inDuration: any;
  outDuration: any;
  startingTop: any;
  endingTop: any;
  
  // Ending top style attribute
  constructor(element?: any);
  attached(): any;
  detached(): any;
  onComplete(): any;
  onReady(modal?: any, trigger?: any): any;
  open(): any;
  close(): any;
}
export declare class MdNavbar {
  mdFixed: any;
  mdAutoHeight: any;
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
  
  // local variables to stop Changed events when parsing to int
  numberOfLinks: any;
  pages: any;
  constructor(element?: any);
  bind(): any;
  setActivePage(page?: any): any;
  setFirstPage(): any;
  setLastPage(): any;
  setPreviousPage(): any;
  setNextPage(): any;
  mdPagesChanged(): any;
  mdVisiblePageLinksChanged(): any;
  generatePageLinks(): any;
}
export declare class MdParallax {
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdProgress {
  mdColor: any;
  mdPixelSize: any;
  mdSize: any;
  mdType: any;
  mdValue: any;
  constructor(element?: any);
  
  // mdValueChanged(newValue, oldValue) {
  //   console.log('mdValueChanged, newValue:', JSON.stringify(newValue), 'oldValue:', JSON.stringify(oldValue));
  // }
  bind(): any;
  attached(): any;
  mdSizeChanged(newValue?: any): any;
  mdPixelSizeChanged(newValue?: any): any;
}
export declare class MdPushpin {
  bottom: any;
  offset: any;
  top: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdRadio {
  static id: any;
  mdChecked: any;
  mdDisabled: any;
  mdReadonly: any;
  mdGap: any;
  mdModel: any;
  mdName: any;
  mdValue: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  
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
export declare class MdSelect {
  disabled: any;
  enableOptionObserver: any;
  label: any;
  showErrortext: any;
  subscriptions: any;
  input: any;
  dropdownMutationObserver: any;
  optionsMutationObserver: any;
  constructor(element?: any, bindingEngine?: any, taskQueue?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  labelChanged(newValue?: any): any;
  updateLabel(): any;
  disabledChanged(newValue?: any): any;
  showErrortextChanged(): any;
  setErrorTextAttribute(): any;
  notifyBindingEngine(): any;
  handleChangeFromNativeSelect(): any;
  handleChangeFromViewModel(newValue?: any): any;
  toggleControl(disable?: any): any;
  createMaterialSelect(destroy?: any): any;
  observeVisibleDropdownContent(attach?: any): any;
  observeOptions(attach?: any): any;
  handleBlur(): any;
}
export declare class MdSidenavCollapse {
  ref: any;
  constructor(element?: any, observerLocator?: any);
  attached(): any;
  detached(): any;
  show(): any;
  hide(): any;
}
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
export declare class MdSwitch {
  mdChecked: any;
  mdDisabled: any;
  mdReadonly: any;
  mdLabelOff: any;
  mdLabelOn: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  handleChange(): any;
  blur(): any;
  mdCheckedChanged(newValue?: any): any;
  mdDisabledChanged(newValue?: any): any;
}
export declare class MdTabs {
  fixed: any;
  onShow: any;
  responsiveThreshold: any;
  swipeable: any;
  transparent: any;
  constructor(element?: any, taskQueue?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  fixedChanged(newValue?: any): any;
  transparentChanged(newValue?: any): any;
  fireTabSelectedEvent(e?: any): any;
  selectTab(id?: any): any;
  
  // FIXME: probably bad - binding this introduces dirty checking
  selectedTab: any;
}
export declare class MdTapTarget {
  static controlId: any;
  mdRef: any;
  constructor(element?: any);
  bind(): any;
  open(): any;
  close(): any;
}
export declare class MdToastService {
  show(message?: any, displayLength?: any, className?: any): any;
}
export declare class MdTooltip {
  position: any;
  delay: any;
  html: any;
  text: any;
  constructor(element?: any);
  bind(): any;
  attached(): any;
  detached(): any;
  textChanged(): any;
  initTooltip(): any;
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
export declare class MaterializeFormValidationRenderer {
  className: any;
  classNameFirst: any;
  render(instruction?: any): any;
  underlineInput(element?: any): any;
  add(element?: any, result?: any): any;
  remove(element?: any, result?: any): any;
  addMessage(element?: any, result?: any): any;
  removeMessage(element?: any, result?: any): any;
}
export declare class MdWaves {
  block: any;
  circle: any;
  color: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}