import 'materialize';
import * as LogManager from 'aurelia-logging';
import {bindable,customAttribute,customElement,inlineView} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {bindingMode,observable,ObserverLocator} from 'aurelia-binding';
import {Router} from 'aurelia-router';
import {TaskQueue} from 'aurelia-task-queue';
import {getLogger} from 'aurelia-logging';

export class ClickCounter {
  count = 0;

  increment() {
    this.count++;
  }
}

/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  useScrollfirePatch: boolean = false;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .useBadge()
      .useBox()
      .useBreadcrumbs()
      .useButton()
      .useCard()
      .useCarousel()
      .useCharacterCounter()
      .useCheckbox()
      .useChip()
      .useCollapsible()
      .useCollection()
      .useColors()
      .useDatePicker()
      .useDropdown()
      .useFab()
      .useFile()
      .useFooter()
      .useInput()
      .useModal()
      .useNavbar()
      .usePagination()
      .useParallax()
      .useProgress()
      .usePushpin()
      .useRadio()
      .useRange()
      .useScrollfire()
      .useSelect()
      .useSidenav()
      .useSlider()
      .useSwitch()
      .useTabs()
      .useTooltip()
      .useTransitions()
      .useWaves()
      .useWell();
  }

  useBadge(): ConfigBuilder {
    this.globalResources.push('./badge/badge');
    return this;
  }

  useBox(): ConfigBuilder {
    this.globalResources.push('./box/box');
    return this;
  }

  useBreadcrumbs(): ConfigBuilder {
    this.globalResources.push('./breadcrumbs/breadcrumbs');
    return this;
  }

  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCarousel(): ConfigBuilder {
    this.globalResources.push('./carousel/carousel');
    this.globalResources.push('./carousel/carousel-item');
    return this;
  }

  useCharacterCounter(): ConfigBuilder {
    this.globalResources.push('./char-counter/char-counter');
    return this;
  }

  useCard(): ConfigBuilder {
    this.globalResources.push('./card/card');
    return this;
  }

  useCheckbox(): ConfigBuilder {
    this.globalResources.push('./checkbox/checkbox');
    return this;
  }

  useChip(): ConfigBuilder {
    this.globalResources.push('./chip/chip');
    return this;
  }

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useCollapsible(): ConfigBuilder {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  }

  useCollection() : ConfigBuilder {
    this.globalResources.push('./collection/collection');
    this.globalResources.push('./collection/collection-item');
    this.globalResources.push('./collection/collection-header');
    this.globalResources.push('./collection/md-collection-selector');
    return this;
  }

  useColors() : ConfigBuilder {
    this.globalResources.push('./colors/md-colors.html');
    return this;
  }

  useDatePicker() : ConfigBuilder {
    this.globalResources.push('./datepicker/datepicker');
    return this;
  }

  useDropdown() : ConfigBuilder {
    // this.globalResources.push('./dropdown/dropdown-element');
    this.globalResources.push('./dropdown/dropdown');
    return this;
  }

  useFab() : ConfigBuilder {
    this.globalResources.push('./fab/fab');
    return this;
  }

  useFile() : ConfigBuilder {
    this.globalResources.push('./file/file');
    return this;
  }

  useFooter() : ConfigBuilder {
    this.globalResources.push('./footer/footer');
    return this;
  }

  useInput() : ConfigBuilder {
    this.globalResources.push('./input/input');
    this.globalResources.push('./input/input-prefix');
    return this;
  }

  useModal(): ConfigBuilder {
    this.globalResources.push('./modal/modal-trigger');
    return this;
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    return this;
  }

  usePagination(): ConfigBuilder {
    this.globalResources.push('./pagination/pagination');
    return this;
  }

  useParallax(): ConfigBuilder {
    this.globalResources.push('./parallax/parallax');
    return this;
  }

  useProgress(): ConfigBuilder {
    this.globalResources.push('./progress/progress');
    return this;
  }

  usePushpin(): ConfigBuilder {
    this.globalResources.push('./pushpin/pushpin');
    return this;
  }

  useRadio(): ConfigBuilder {
    this.globalResources.push('./radio/radio');
    return this;
  }

  useRange(): ConfigBuilder {
    this.globalResources.push('./range/range');
    return this;
  }

  useScrollfire(): ConfigBuilder {
    this.globalResources.push('./scrollfire/scrollfire');
    this.globalResources.push('./scrollfire/scrollfire-target');
    return this;
  }

  useScrollSpy(): ConfigBuilder {
    this.globalResources.push('./scrollspy/scrollspy');
    return this;
  }

  useSelect(): ConfigBuilder {
    this.globalResources.push('./select/select');
    return this;
  }

  useSidenav(): ConfigBuilder {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  }

  useSlider(): ConfigBuilder {
    this.globalResources.push('./slider/slider');
    // this.globalResources.push('./slider/slide');
    return this;
  }

  useSwitch(): ConfigBuilder {
    this.globalResources.push('./switch/switch');
    return this;
  }

  /**
   * Use materialized tabs
   */
  useTabs(): ConfigBuilder {
    this.globalResources.push('./tabs/tabs');
    return this;
  }

  useTooltip(): ConfigBuilder {
    this.globalResources.push('./tooltip/tooltip');
    return this;
  }

  useTransitions(): ConfigBuilder {
    this.globalResources.push('./transitions/fadein-image');
    this.globalResources.push('./transitions/staggered-list');
    return this;
  }

  /**
   * Use ripple/waves effect
   */
  useWaves(): ConfigBuilder {
    this.globalResources.push('./waves/waves');
    return this;
  }

  useWell(): ConfigBuilder {
    this.globalResources.push('./well/md-well.html');
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  withScrollfirePatch(): ConfigBuilder {
    this.useScrollfirePatch = true;
    return this;
  }
}

export function configure(aurelia, configCallback) {
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
  if (builder.useScrollfirePatch) {
    new ScrollfirePatch().patch();
  }
}



@customAttribute('md-badge')
@inject(Element)
export class MdBadge {
  @bindable() isNew = false;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    let classes = [
      'badge'
    ];
    if (getBooleanFromAttributeValue(this.isNew)) {
      classes.push('new');
    }
    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['badge', 'new']);
  }
}

@customAttribute('md-box')
@inject(Element)
export class MdBox {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) caption;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }
    // FIXME:0 throws "Uncaught TypeError: Cannot read property 'css' of undefined", but so does the original
    $(this.element).materialbox();
  }

  detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  }
}

@customAttribute('md-button')
@inject(Element)
export class MdButton {
  @bindable() disabled = false;
  @bindable() flat = false;
  @bindable() floating = false;
  @bindable() large = false;

  constructor(element) {
    this.attributeManager = new AttributeManager(element);
  }

  attached() {
    let classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
    }
    if (getBooleanFromAttributeValue(this.floating)) {
      classes.push('btn-floating');
    }
    if (getBooleanFromAttributeValue(this.large)) {
      classes.push('btn-large');
    }

    if (classes.length === 0) {
      classes.push('btn');
    }

    if (getBooleanFromAttributeValue(this.disabled)) {
      classes.push('disabled');
    }

    if (!getBooleanFromAttributeValue(this.flat)) {
      classes.push('accent');
    }
    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
  }

  disabledChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('disabled');
    } else {
      this.attributeManager.removeClasses('disabled');
    }
  }

  flatChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.removeClasses(['btn', 'accent']);
      this.attributeManager.addClasses('btn-flat');
    } else {
      this.attributeManager.removeClasses('btn-flat');
      this.attributeManager.addClasses(['btn', 'accent']);
    }
  }
}

// taken from: https://github.com/heruan/aurelia-breadcrumbs

@customElement('md-breadcrumbs')
@inject(Element, Router)
export class MdBreadcrumbs {
  constructor(element, router) {
    this.element = element;
    this._childRouter = router;
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  navigate(navigationInstruction) {
    this._childRouter.navigateToRoute(navigationInstruction.config.name);
    // this.router.navigate(navigationInstruction.config.name);
  }
}

export class InstructionFilterValueConverter {
  toView(navigationInstructions) {
    return navigationInstructions.filter(i => {
      let result = false;
      if (i.config.title) {
        result = true;
      }
      return result;
    });
  }
}

@customElement('md-card')
@inject(Element)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdImage = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdReveal = false;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdSize = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
  }
}

// @customElement('md-carousel-item')
@inject(Element)
export class MdCarouselItem {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdHref = '';
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdImage = '';

  constructor(element) {
    this.element = element;
  }

  attached() { }
}

@customElement('md-carousel')
@inject(Element)
export class MdCarousel {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdSlider = false;

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    // workaround for: https://github.com/Dogfalo/materialize/issues/2741
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      $(this.element).carousel({full_width: true});
    } else {
      $(this.element).carousel();
    }
  }
}

@customAttribute('md-char-counter')
@inject(Element)
export class MdCharCounter {
  @bindable() length = 120;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.length = parseInt(this.length, 10);

    // attach to input element explicitly, so this counter can be used on
    // containers (or custom elements like md-input)
    if (this.element.tagName.toUpperCase() === 'INPUT') {
      this.attributeManager.addAttributes({ 'length': this.length });
      $(this.element).characterCounter();
    } else {
      $(this.element).find('input').each((i, el) => { $(el).attr('length', this.length); });
      $(this.element).find('input').characterCounter();
    }
  }

  detached() {
    this.attributeManager.removeAttributes(['length']);
  }
}

@customElement('md-checkbox')
@inject(Element)
export class MdCheckbox {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled;
  @bindable() mdFilledIn;

  constructor(element) {
    this.element = element;
    this.controlId = `md-checkbox-${MdCheckbox.id++}`;
    this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.attributeManager = new AttributeManager(this.checkbox);
    if (getBooleanFromAttributeValue(this.mdFilledIn)) {
      this.attributeManager.addClasses('filled-in');
    }
    if (this.mdChecked === null) {
      this.checkbox.indeterminate = true;
    } else {
      this.checkbox.indeterminate = false;
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    this.checkbox.addEventListener('change', this.handleChange);
  }

  detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
    this.checkbox.removeEventListener('change', this.handleChange);
  }

  handleChange() {
    this.mdChecked = this.checkbox.checked;
  }

  mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  }

  mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  }
}

@customElement('md-chip')
@inject(Element)
export class MdChip {
  @bindable() mdClose = false;

  attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  }
}

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@bindable({ name: 'popout', defaultValue: false })
@inject(Element)

export class MdCollapsible {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.attributeManager.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.attributeManager.addClasses('popout');
    }
    this.refresh();
  }

  detached() {
    this.attributeManager.removeClasses(['collapsible', 'popout']);
    this.attributeManager.removeAttributes(['data-collapsible']);
  }

  refresh() {
    let accordion = getBooleanFromAttributeValue(this.accordion);
    if (accordion) {
      this.attributeManager.addAttributes({ 'data-collapsible': 'accordion' });
    } else {
      this.attributeManager.addAttributes({ 'data-collapsible': 'expandable' });
    }

    $(this.element).collapsible({
      accordion
    });
  }

  accordionChanged() {
    this.refresh();
  }
}

@customElement('md-collection-header')
@inject(Element)
export class MdCollectionHeader {
  constructor(element) {
    this.element = element;
  }
}

@customElement('md-collection-item')
export class MdCollectionItem { }

@customElement('md-collection')
@inject(Element)
export class MdCollection {
  constructor(element) {
    this.element = element;
  }

  attached() {
    let header = this.element.querySelector('md-collection-header');
    if (header) {
      this.anchor.classList.add('with-header');
    }
  }

  getSelected() {
    let items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    return items.filter(i => i.au['md-collection-selector'].viewModel.isSelected)
      .map(i => i.au['md-collection-selector'].viewModel.item);
  }
}

@customElement('md-collection-selector')
@inject(Element)
export class MdlListSelector {
  @bindable() item;
  @observable() isSelected = false;

  constructor(element) {
    this.element = element;
  }

  isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  }
}

/* eslint-disable */
// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeBlendConvert(p, from, to) {
    if(typeof(p)!="number"||p<-1||p>1||typeof(from)!="string"||(from[0]!='r'&&from[0]!='#')||(typeof(to)!="string"&&typeof(to)!="undefined"))return null; //ErrorCheck
    // if(!this.sbcRip)this.sbcRip=function(d){
    let sbcRip=function(d){
        var l=d.length,RGB=new Object();
        if(l>9){
            d=d.split(",");
            if(d.length<3||d.length>4)return null;//ErrorCheck
            RGB[0]=i(d[0].slice(4)),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
        }else{
            switch(l){case 8:case 6:case 3:case 2:case 1:return null;} //ErrorCheck
            if(l<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(l>4?d[4]+""+d[4]:""); //3 digit
            d=i(d.slice(1),16),RGB[0]=d>>16&255,RGB[1]=d>>8&255,RGB[2]=d&255,RGB[3]=l==9||l==5?r(((d>>24&255)/255)*10000)/10000:-1;
        }
        return RGB;}
    var i=parseInt,r=Math.round,h=from.length>9,h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h,b=p<0,p=b?p*-1:p,to=to&&to!="c"?to:b?"#000000":"#FFFFFF",f=sbcRip(from),t=sbcRip(to);
    if(!f||!t)return null; //ErrorCheck
    if(h)return "rgb("+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
    else return "#"+(0x100000000+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)*0x1000000+r((t[0]-f[0])*p+f[0])*0x10000+r((t[1]-f[1])*p+f[1])*0x100+r((t[2]-f[2])*p+f[2])).toString(16).slice(f[3]>-1||t[3]>-1?1:3);
}
/* eslint-enable */

export class DarkenValueConverter {
  toView(value, steps) {
    return shadeBlendConvert(-0.3 * parseFloat(steps, 10), value);
  }
}

export class LightenValueConverter {
  toView(value, steps) {
    return shadeBlendConvert(0.3 * parseFloat(steps, 10), value);
  }
}

/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export class AttributeManager {
  _colorClasses = [
    'accent',
    'primary'
  ];
  addedClasses = [];
  addedAttributes = {};

  constructor(element) {
    this.element = element;
  }

  addAttributes(attrs) {
    let keys = Object.keys(attrs);
    keys.forEach(k => {
      if (!this.element.getAttribute(k)) {
        this.addedAttributes[k] = attrs[k];
        this.element.setAttribute(k, attrs[k]);
      } else if (this.element.getAttribute(k) !== attrs[k]) {
        this.element.setAttribute(k, attrs[k]);
      }
    });
  }

  removeAttributes(attrs) {
    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(a => {
      if (this.element.getAttribute(a) && !!this.addedAttributes[a]) {
        this.element.removeAttribute(a);
        this.addedAttributes[a] = null;
        delete this.addedAttributes[a];
      }
    });
  }

  addClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      let classListHasColor = this._colorClasses.filter(cc => this.element.classList.contains(cc)).length > 0;
      if (this._colorClasses.indexOf(c) > -1 && classListHasColor) {
        //
      } else {
        if (!this.element.classList.contains(c)) {
          this.addedClasses.push(c);
          this.element.classList.add(c);
        }
      }
    });
  }

  removeClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      if (this.element.classList.contains(c) && this.addedClasses.indexOf(c) > -1) {
        this.element.classList.remove(c);
        this.addedClasses.splice(this.addedClasses.indexOf(c), 1);
      }
    });
  }
}

export function getBooleanFromAttributeValue(value) {
  return (value === true || value === 'true');
}

export const constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data? = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

/**
* Fire DOM event on an element with the md-on prefix
* @param element The Element which the DOM event will be fired on
* @param name The Event's name, without md-on prefix
* @param data Addition data to attach to an event
*/
export function fireMaterializeEvent(element: Element, name: string, data? = {}) {
  return fireEvent(element, `${constants.eventPrefix}${name}`, data);
}

@inject(Element, TaskQueue)
@customAttribute('md-datepicker')
export class MdDatePicker {
  @bindable() container;
  @bindable() translation;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) selectMonths = true;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) selectYears = 15;
  constructor(element, taskQueue) {
    this.element = element;
    this.log = getLogger('md-datepicker');
    this.taskQueue = taskQueue;
  }
  bind() {
    this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
    this.selectYears = parseInt(this.selectYears, 10);
    this.element.classList.add('date-picker');
    let options = {
      selectMonths: this.selectMonths,
      selectYears: this.selectYears,
      onClose: function() {
        // see https://github.com/Dogfalo/materialize/issues/2067
        // and: https://github.com/amsul/pickadate.js/issues/160
        $(document.activeElement).blur();
        // $(this.element).blur();
      }
    };
    let i18n = {};
    // let i18n = {
    //   selectMonths: true, // Creates a dropdown to control month
    //   selectYears: 15, // Creates a dropdown of 15 years to control year
    //   monthsFull: [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ],
    //   monthsShort: [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
    //   weekdaysFull: [ 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag' ],
    //   weekdaysShort: [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
    //   today: 'Heute',
    //   clear: 'Löschen',
    //   close: 'Schließen',
    //   firstDay: 1,
    //   format: 'dddd, dd. mmmm yyyy',
    //   formatSubmit: 'yyyy/mm/dd'
    // };
    Object.assign(options, i18n);
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this),
      'set': this.onSet.bind(this)
    });
    $(this.element).on('focusin', () => { $(this.element).pickadate('open'); });
    if (this.value) {
      this.picker.set('select', this.value);
    }
  }

  detached() {
    if (this.picker) {
      this.picker.stop();
    }
  }

  onClose() {
    let selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
  }

  onSet(value) {
    // this.value = new Date(value.select);
  }

  valueChanged(newValue) {
    this.log.debug('selectedChanged', this.value);
    // this.taskQueue.queueTask(() => {
    this.picker.set('select', this.value);
    // });
  }
}

@customElement('md-dropdown')
@inject(Element)
export class MdDropdownElement {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) alignment = 'left';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) belowOrigin = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) constrainWidth = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) gutter = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) hover = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) inDuration = 300;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) outDuration = 225;

  constructor(element) {
    this.element = element;
    this.controlId = `md-dropdown-${MdDropdown.id++}`;
  }
  attached() {
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  }
}

@customAttribute('md-dropdown')
@inject(Element)
export class MdDropdown {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) activates = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) alignment = 'left';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) belowOrigin = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) constrainWidth = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) gutter = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) hover = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTitle;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) inDuration = 300;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) outDuration = 225;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  }

  detached() {
    this.attributeManager.removeAttributes('data-activates');
    this.attributeManager.removeClasses('dropdown-button');
    this.contentAttributeManager.removeClasses('dropdown-content');
  }
}

@customElement('md-fab')
@inject(Element)
export class MdFab {
  @bindable() mdFixed = false;
  @bindable() mdLarge = false;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  }
}

@customElement('md-file')
@inject(Element)
export class MdFileInput {
  @bindable() mdCaption = 'File';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMultiple = false;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdLabelValue;
  files = [];

  _suspendUpdate = false;

  constructor(element) {
    this.element = element;
    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
  }

  attached() {
    this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
    $(this.filePath).on('change', this.handleChangeFromNativeInput);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeInput);
  }

  handleChangeFromNativeInput() {
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.filePath, 'change', { files: this.files });
      fireMaterializeEvent(this.filePath, 'change', { files: this.files });
      this._suspendUpdate = false;
    }
  }
}

@customAttribute('md-footer')
@inject(Element)
export class MdFooter {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  bind() {
    this.attributeManager.addClasses('page-footer');
  }

  unbind() {
    this.attributeManager.removeClasses('page-footer');
  }
}

@customAttribute('md-prefix')
@inject(Element)
export class MdPrefix {
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  bind() {
    this.attributeManager.addClasses('prefix');
  }

  unbind() {
    this.attributeManager.removeClasses('prefix');
  }
}

@inject(TaskQueue)
export class MdInputUpdateService {
  _updateCalled = false;
  constructor(taskQueue) {
    this.log = getLogger('MdInputUpdateService');
    this.taskQueue = taskQueue;
  }

  materializeUpdate() {
    this.log.debug('executing Materialize.updateTextFields');
    Materialize.updateTextFields();
    this._updateCalled = false;
  }

  update() {
    this.log.debug('update called');
    if (!this._updateCalled) {
      this._updateCalled = true;
      this.taskQueue.queueTask(this.materializeUpdate.bind(this));
    }
  }
}

@customElement('md-input')
@inject(Element, TaskQueue, MdInputUpdateService)
export class MdInput {
  static id = 0;

  @bindable() mdLabel = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdPlaceholder = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdTextArea = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdType = 'text';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdValidate = false;
  @bindable() mdValidateError;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = '';

  constructor(element, taskQueue, updateService) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = `md-input-${MdInput.id++}`;
    this.updateService = updateService;
  }

  attached() {
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdValidateError)  {
      this.label.setAttribute('data-error', this.mdValidateError);
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
      this.update();
    }
  }

  mdValueChanged() {
    this.updateService.update();
    if (this.mdTextArea) {
      $(this.input).trigger('autoresize');
    }
  }
}

@customAttribute('md-modal-trigger')
@inject(Element)
export class MdModalTrigger {
  @bindable() dismissible = true;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
  }

  attached() {
    this.attributeManager.addClasses('modal-trigger');
    $(this.element).leanModal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible)
    });
  }

  detached() {
    this.attributeManager.removeClasses('modal-trigger');
  }

  onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  }
}

@customElement('md-navbar')
@inject(Element)
export class MdNavbar {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdFixed;
  fixedAttributeManager;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
  }

  detached() {
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
  }
}

@customElement('md-pagination')
@inject(Element)
export class MdPagination {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdActivePage = 1;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdPages = 5;
  @bindable() mdShowFirstLast = true;
  @bindable() mdShowPrevNext = true;

  constructor(element) {
    this.element = element;
  }

  bind() {
    // attached() throws unhandled exceptions
    this.mdPages = parseInt(this.mdPages, 10);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
  }

  setActivePage(page) {
    this.mdActivePage = page;
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  }

  setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  }

  setLastPage() {
    if (this.mdActivePage < this.mdPages) {
      this.setActivePage(this.mdPages);
    }
  }

  setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  }

  setNextPage() {
    if (this.mdActivePage < this.mdPages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  }
}

@customAttribute('md-parallax')
@inject(Element)
export class MdParallax {
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).parallax();
  }

  detached() {
    // destroy handler not available
  }
}

@customElement('md-progress')
@inject(Element)
export class MdProgress {
  @bindable() mdColor = null;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdType = 'linear';
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = null;

  constructor(element) {
    this.element = element;
  }

  // mdValueChanged(newValue, oldValue) {
  //   console.log('mdValueChanged, newValue:', JSON.stringify(newValue), 'oldValue:', JSON.stringify(oldValue));
  // }
}

@customAttribute('md-pushpin')
@inject(Element)
export class MdPushpin {
  @bindable() bottom = Infinity;
  @bindable() offset = 0;
  @bindable() top = 0;

  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.element).pushpin({
      bottom: (this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10)),
      offset: parseInt(this.offset, 10),
      top: parseInt(this.top, 10)
    });
  }

  detached() {
    // destroy handler not available
  }
}

@customElement('md-radio')
@inject(Element)
export class MdRadio {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled = false;
  @bindable() mdGap = false;
  @bindable() mdModel;
  @bindable() mdName = '';
  @bindable() mdValue = '';

  constructor(element) {
    this.element = element;
    this.controlId = `md-radio-${MdRadio.id++}`;
    // this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.attributeManager = new AttributeManager(this.radio);
    if (getBooleanFromAttributeValue(this.mdGap)) {
      this.attributeManager.addClasses('with-gap');
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.radio.disabled = true;
    }
    // this.radio.checked = getBooleanFromAttributeValue(this.mdChecked);
    // this.radio.addEventListener('change', this.handleChange);
  }

  detached() {
    this.attributeManager.removeClasses(['with-gap', 'disabled']);
    // this.radio.removeEventListener('change', this.handleChange);
  }

  // handleChange() {
  //   this.mdChecked = this.radio.checked;
  // }

  // mdCheckedChanged(newValue) {
  //   if (this.radio) {
  //     this.radio.checked = !!newValue;
  //   }
  // }

  mdDisabledChanged(newValue) {
    if (this.radio) {
      this.radio.disabled = !!newValue;
    }
  }
}

@customElement('md-range')
@inject(Element)
export class MdRange {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMin = 0;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMax = 100;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdStep = 1;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = 0;

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-range');
  }
}

/* eslint no-new-func:0 */
export class ScrollfirePatch {
  static patched = false;

  patch() {
    if (!ScrollfirePatch.patched) {
      ScrollfirePatch.patched = true;

      window.Materialize.scrollFire = function(options) {
        let didScroll = false;
        window.addEventListener('scroll', function() {
          didScroll = true;
        });

        // Rate limit to 100ms
        setInterval(function() {
          if (didScroll) {
            didScroll = false;

            let windowScroll = window.pageYOffset + window.innerHeight;
            for (let i = 0; i < options.length; i++) {
              // Get options from each line
              let value = options[i];
              let selector = value.selector;
              let offset = value.offset;
              let callback = value.callback;

              let currentElement = document.querySelector(selector);
              if ( currentElement !== null) {
                let elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                if (windowScroll > (elementOffset + offset)) {
                  if (value.done !== true) {
                    if (typeof(callback) === 'string') {
                      let callbackFunc = new Function(callback);
                      callbackFunc();
                    } else if (typeof(callback) === 'function') {
                      callback();
                    }
                    value.done = true;
                  }
                }
              }
            }
          }
        }, 100);
      };
    }
  }
}

@customAttribute('md-scrollfire-target')
@inject(Element)
export class MdScrollfireTarget {
  @bindable() callback = null;
  @bindable() offset = 0;
  constructor(element) {
    this.element = element;
  }
}

@customAttribute('md-scrollfire')
@inject(Element)
export class MdScrollfire {
  targetId = 0;
  constructor(element) {
    this.element = element;
    this.log = getLogger('md-scrollfire');
  }

  attached() {
    let targets = $('[md-scrollfire-target]', this.element);
    if (targets.length > 0) {
      this.log.debug('targets', targets);
      let self = this;
      let options = [];
      targets.each((i, el) => {
        let target = $(el);
        if (!target.attr('id')) {
          target.attr('id', `md-scrollfire-target-${self.targetId++}`);
        }
        options.push({
          selector: '#' + target.attr('id'),
          callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
          offset: parseInt(target.get(0).au['md-scrollfire-target'].viewModel.offset, 10)
        });
      });
      if (options.length > 0) {
        this.log.debug('configuring scrollFire with these options:', options);
        Materialize.scrollFire(options);
      }
    }
  }
}

@customAttribute('md-scrollspy')
@inject(Element)
export class MdScrollSpy {
  @bindable() target;
  constructor(element) {
    this.element = element;
  }

  attached() {
    $(this.target, this.element).scrollSpy();
  }

  detached() {
    // destroy handler not available
  }
}

@inject(Element, LogManager, ObserverLocator, TaskQueue)
@customAttribute('md-select')
export class MdSelect {
  _suspendUpdate = false;

  constructor(element, logManager, observerLocator, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.observerLocator = observerLocator;
    this.valueObserver = this.observerLocator.getObserver(this.element, 'value');
  }
  attached() {
    this.valueObserver.subscribe(this.handleChangeFromViewModel);
    // $(this.element).material_select(() => {
    //   this.log.warn('materialize callback', $(this.element).val());
    //   this.handleChangeFromNativeSelect();
    // });
    $(this.element).material_select();
    $(this.element).on('change', this.handleChangeFromNativeSelect);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    $(this.element).material_select('destroy');
    this.valueObserver.unsubscribe();
  }

  refresh() {
    this.taskQueue.queueTask(() => {
      $(this.element).material_select('destroy');
      $(this.element).material_select();
    });
  }

  handleChangeFromNativeSelect() {
    // Aurelia's select observer doesn't get noticed when something changes the
    // select value directly (this.element.value = "something"). So we trigger
    // the change here.
    // this.valueObserver.value = $(this.element).val();
    // this.valueObserver.synchronizeValue();
    // this.valueObserver.synchronizeOptions();
    // this._suspendUpdate = true;
    // this.valueObserver.notify();
    // this._suspendUpdate = false;

    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this.log.debug('this.valueObserver.value', this.valueObserver.value);
      // this.valueObserver.value = $(this.element).val();
      // this.valueObserver.notify();

      this._suspendUpdate = false;
    }
  }

  handleChangeFromViewModel(newValue) {
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      $(this.element).material_select();
    }
  }
}

@customAttribute('md-sidenav-collapse')
@inject(Element, ObserverLocator)
export class MdSidenavCollapse {
  @bindable() ref;
  constructor(element, observerLocator) {
    this.element = element;
    this.observerLocator = observerLocator;
    this.log = getLogger('md-sidenav-collapse');
  }

  attached() {
    this.ref.whenAttached.then(() => {
      // this.widthSubscription = this.observerLocator.getObserver(this.ref, 'mdWidth').subscribe(this.widthChanged.bind(this));
      // this.fixedSubscription = this.observerLocator.getObserver(this.ref, 'fixed').subscribe(this.fixedChanged.bind(this));

      this.element.setAttribute('data-activates', this.ref.controlId);
      let sideNavConfig = {
        edge: this.ref.mdEdge || 'left',
        closeOnClick: (this.ref.mdFixed ? false : getBooleanFromAttributeValue(this.ref.mdCloseOnClick)),
        menuWidth: parseInt(this.ref.mdWidth, 10)
      };
      // this.log.debug('sideNavConfig:', sideNavConfig);
      $(this.element).sideNav(sideNavConfig);
    });
  }

  detached() {
    // this.widthSubscription.unsubscribe();
  }

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
}

@customElement('md-sidenav')
@inject(Element)
export class MdSidenav {
  static id = 0;
  @bindable() mdCloseOnClick = false;
  @bindable() mdEdge = 'left';
  @bindable() mdFixed = false;
  @bindable() mdWidth = 250;

  attachedResolver;
  whenAttached;

  constructor(element) {
    this.element = element;
    this.controlId = `md-sidenav-${MdSidenav.id++}`;
    this.log = getLogger('md-sidenav');
    this.whenAttached = new Promise((resolve, reject) => {
      this.attachedResolver = resolve;
    });
  }

  attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.attributeManager.addClasses('fixed');
      if (this.mdEdge === 'right') {
        // see: https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/53
        this.attributeManager.addClasses('right-aligned');
      }
    }

    this.attachedResolver();
  }

  detached() {
    this.attributeManager.removeClasses(['fixed', 'right-aligned']);
  }

  mdFixedChanged(newValue) {
    if (this.attributeManager) {
      if (getBooleanFromAttributeValue(newValue)) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  }
}

@customElement('md-slider')
@inject(Element)
@inlineView(`
  <template class="slider">
  <require from="./slider.css"></require>
  <ul class="slides">
    <content select="li"></content>
  </ul>
  </template>
`)
export class MdSlider {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdFillContainer = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdHeight = 400;
  @bindable() mdIndicators = true;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdInterval = 6000;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdTransition = 500;

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-slider');
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    this.refresh();
  }

  pause() {
    $(this.element).slider('pause');
  }

  start() {
    $(this.element).slider('start');
  }

  next() {
    $(this.element).slider('next');
  }

  prev() {
    $(this.element).slider('prev');
  }

  refresh() {
    let options = {
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    };
    this.log.debug('refreshing slider, params:', options);
    $(this.element).slider(options);
  }

  mdIndicatorsChanged() {
    this.refresh();
  }

  // commented since that leads to strange effects
  // mdIntervalChanged() {
  //   this.refresh();
  // }
  //
  // mdTransitionChanged() {
  //   this.refresh();
  // }
}

@customElement('md-switch')
@inject(Element)
export class MdSwitch {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled;
  @bindable() mdLabelOff = 'Off';
  @bindable() mdLabelOn = 'On';

  constructor(element) {
    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.addEventListener('change', this.handleChange);
  }

  detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  }

  handleChange() {
    this.mdChecked = this.checkbox.checked;
  }

  mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  }
}

@customAttribute('md-tabs')
@inject(Element, TaskQueue)
export class MdTabs {
  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  attached() {
    this.attributeManager.addClasses('tabs');

    let children = this.element.querySelectorAll('li');
    [].forEach.call(children, child => {
      let setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      this.tabAttributeManagers.push(setter);
    });

    // this.taskQueue.queueTask(() => {
    $(this.element).tabs();
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.addEventListener('click', this.fireTabSelectedEvent);
    });
    // });
  }

  detached() {
    this.attributeManager.removeClasses('tabs');

    // no destroy handler in tabs

    this.tabAttributeManagers.forEach(setter => {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.removeEventListener('click', this.fireTabSelectedEvent);
    });
  }

  fireTabSelectedEvent(e) {
    // fix Materialize tab indicator (see: https://github.com/Dogfalo/materialize/pull/2809)
    // happens only when the indicator animation is finished
    // Waves animation duration: 300ms, delay: 90ms
    // window.setTimeout(() => {
    //   let indicatorRight = $('.indicator', this.element).css('right');
    //   if (indicatorRight.indexOf('-') === 0) {
    //     $('.indicator', this.element).css('right', 0);
    //   }
    // }, 310);
    let href = e.target.getAttribute('href');
    fireMaterializeEvent(this.element, 'selected', href);
  }

  selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: () => `#${id}` }
    });
  }

  // FIXME: probably bad
  get selectedTab() {
    let children = this.element.querySelectorAll('li.tab a');
    let index = -1;
    let href = null;
    [].forEach.call(children, (a, i) => {
      if (a.classList.contains('active')) {
        index = i;
        href = a.href;
        return;
      }
    });
    return { href, index };
  }
}

export class MdToastService {
  show(message, displayLength, className?) {
    return new Promise((resolve, reject) => {
      Materialize.toast(message, displayLength, className, () => {
        resolve();
      });
    });
  }
}

// @customAttribute('md-tooltip')
@inject(Element)
export class MdTooltip {
  @bindable() position = 'bottom';
  @bindable() delay = 50;
  @bindable() text = '';

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    $(this.element).tooltip({ delay: parseInt(this.delay, 10) });
  }

  detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  }
}

@customAttribute('md-fadein-image')
@inject(Element)
export class MdFadeinImage {
  @bindable() ref;

  constructor(element) {
    this.element = element;
    this.fadeInImage = this.fadeInImage.bind(this);
    this.log = getLogger('md-fadein-image');
  }

  attached() {
    this.element.addEventListener('click', this.fadeInImage);
    this.ensureOpacity();
  }

  detached() {
    this.element.removeEventListener('click', this.fadeInImage);
  }

  fadeInImage() {
    Materialize.fadeInImage(this.ref);
  }

  ensureOpacity() {
    let opacity = window.getComputedStyle(this.ref).opacity;
    if (opacity !== 0) {
      this.ref.style.opacity = 0;
    }
  }
}

@customAttribute('md-staggered-list')
@inject(Element)
export class MdStaggeredList {
  @bindable() ref;

  constructor(element) {
    this.element = element;
    this.staggerList = this.staggerList.bind(this);
    this.log = getLogger('md-staggered-list');
  }

  attached() {
    this.element.addEventListener('click', this.staggerList);
    this.ensureOpacity();
  }

  detached() {
    this.element.removeEventListener('click', this.staggerList);
  }

  staggerList() {
    Materialize.showStaggeredList(this.ref);
  }

  ensureOpacity() {
    let items = this.ref.querySelectorAll('li');
    [].forEach.call(items, item => {
      let opacity = window.getComputedStyle(item).opacity;
      if (opacity !== 0) {
        item.style.opacity = 0;
      }
    });
  }
}

@customAttribute('md-waves')
@inject(Element)
export class MdWaves {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) block = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) circle = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) color;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    let classes = ['waves-effect'];
    if (getBooleanFromAttributeValue(this.block)) {
      classes.push('waves-block');
    }
    if (getBooleanFromAttributeValue(this.circle)) {
      classes.push('waves-circle');
    }
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.attributeManager.addClasses(classes);
    Waves.attach(this.element);
  }

  detached() {
    let classes = ['waves-effect', 'waves-block'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.attributeManager.removeClasses(classes);
  }
}
