import {PLATFORM,DOM} from 'aurelia-pal';
import {bindable,customAttribute,customElement,children} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {bindingMode,observable,BindingEngine,ObserverLocator} from 'aurelia-binding';
import {Router} from 'aurelia-router';
import {TaskQueue} from 'aurelia-task-queue';
import {getLogger} from 'aurelia-logging';
import {EventAggregator} from 'aurelia-event-aggregator';

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
      .useAutoComplete()
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
      .useScrollSpy()
      .useSelect()
      .useSidenav()
      .useSlider()
      .useSwitch()
      .useTabs()
      .useTapTarget()
      .useTooltip()
      .useTransitions()
      .useWaves()
      .useWell();
  }

  useAutoComplete(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  }

  useBadge(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./badge/badge'));
    return this;
  }

  useBox(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./box/box'));
    return this;
  }

  useBreadcrumbs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
    return this;
  }

  useButton(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }

  useCarousel(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./carousel/carousel'));
    this.globalResources.push(PLATFORM.moduleName('./carousel/carousel-item'));
    return this;
  }

  useCharacterCounter(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./char-counter/char-counter'));
    return this;
  }

  useCard(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./card/card'));
    return this;
  }

  useCheckbox(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./checkbox/checkbox'));
    return this;
  }

  useChip(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./chip/chip'));
    this.globalResources.push(PLATFORM.moduleName('./chip/chips'));
    return this;
  }

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./click-counter'));
    return this;
  }

  useCollapsible(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./collapsible/collapsible'));
    return this;
  }

  useCollection() : ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./collection/collection'));
    this.globalResources.push(PLATFORM.moduleName('./collection/collection-item'));
    this.globalResources.push(PLATFORM.moduleName('./collection/collection-header'));
    this.globalResources.push(PLATFORM.moduleName('./collection/md-collection-selector'));
    return this;
  }

  useColors() : ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./colors/md-colors'));
    return this;
  }

  useDatePicker() : ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  }

  useDropdown() : ConfigBuilder {
    // this.globalResources.push('./dropdown/dropdown-element');
    this.globalResources.push(PLATFORM.moduleName('./dropdown/dropdown'));
    return this;
  }

  useDropdownFix() : ConfigBuilder {
    applyMaterializeDropdownFix();
    return this;
  }

  useFab() : ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./fab/fab'));
    return this;
  }

  useFile() : ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./file/file'));
    return this;
  }

  useFooter() : ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./footer/footer'));
    return this;
  }

  useInput() : ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./input/input'));
    this.globalResources.push(PLATFORM.moduleName('./input/input-prefix'));
    return this;
  }

  useModal(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./modal/modal'));
    this.globalResources.push(PLATFORM.moduleName('./modal/modal-trigger'));
    return this;
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./navbar/navbar'));
    return this;
  }

  usePagination(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./pagination/pagination'));
    return this;
  }

  useParallax(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./parallax/parallax'));
    return this;
  }

  useProgress(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./progress/progress'));
    return this;
  }

  usePushpin(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./pushpin/pushpin'));
    return this;
  }

  useRadio(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./radio/radio'));
    return this;
  }

  useRange(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./range/range'));
    return this;
  }

  useScrollfire(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./scrollfire/scrollfire'));
    this.globalResources.push(PLATFORM.moduleName('./scrollfire/scrollfire-target'));
    return this;
  }

  useScrollSpy(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./scrollspy/scrollspy'));
    return this;
  }

  useSelect(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./select/select'));
    return this;
  }

  useSidenav(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./sidenav/sidenav'));
    this.globalResources.push(PLATFORM.moduleName('./sidenav/sidenav-collapse'));
    return this;
  }

  useSlider(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./slider/slider'));
    // this.globalResources.push('./slider/slide');
    return this;
  }

  useSwitch(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./switch/switch'));
    return this;
  }

  /**
   * Use materialized tabs
   */
  useTabs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tabs/tabs'));
    return this;
  }

  useTapTarget(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tap-target/tap-target'));
    return this;
  }

  useTooltip(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  }

  useTransitions(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./transitions/fadein-image'));
    this.globalResources.push(PLATFORM.moduleName('./transitions/staggered-list'));
    return this;
  }

  /**
   * Use ripple/waves effect
   */
  useWaves(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./waves/waves'));
    return this;
  }

  useWell(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./well/md-well.html'));
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



function applyPolyfills() {
  polyfillElementClosest();
}

export function configure(aurelia, configCallback) {
  applyPolyfills();
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



@customAttribute('md-autocomplete')
@inject(Element)
export class MdAutoComplete {
  input = null;
  @bindable() values = {};

  constructor(element) {
    this.element = element;
  }

  attached() {
    if (this.element.tagName.toLowerCase() === 'input') {
      this.input = this.element;
    } else if (this.element.tagName.toLowerCase() === 'md-input') {
      this.input = this.element.au.controller.viewModel.input;
    } else {
      throw new Error('md-autocomplete must be attached to either an input or md-input element');
    }
    this.refresh();
  }

  detached() {
    // remove .autocomplete-content children
    $(this.input).siblings('.autocomplete-content').off('click');
    $(this.input).siblings('.autocomplete-content').remove();
  }

  refresh() {
    this.detached();
    $(this.input).autocomplete({
      data: this.values
    });
    // $('.autocomplete-content', this.element).on('click', () => {
    //   fireEvent(this.input, 'change');
    // });
    $(this.input).siblings('.autocomplete-content').on('click', () => {
      fireEvent(this.input, 'change');
    });
  }

  valuesChanged(newValue) {
    this.refresh();
  }
}

@customAttribute('md-badge')
@inject(Element)
export class MdBadge {
  @bindable() isNew = false;
  @bindable() caption = null;

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

    if (this.caption !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': this.caption });
    }

    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['badge', 'new']);
    this.attributeManager.removeAttributes(['data-badge-caption']);
  }

  newChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('new');
    } else {
      this.attributeManager.removeClasses('new');
    }
  }

  captionChanged(newValue) {
    if (newValue !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': newValue });
    } else {
      this.attributeManager.removeAttributes(['data-badge-caption']);
    }
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

// taken from: https://github.com/heruan/aurelia-breadcrumbs

@customElement('md-breadcrumbs')
@inject(Element, Router)
export class MdBreadcrumbs {
  @bindable() router;

  constructor(element, router) {
    this.element = element;
    this.aureliaRouter = router;
    // this._childRouter = router;
    // while (router.parent) {
    //   router = router.parent;
    // }
    // this.router = router;
  }

  bind() {
    if (!this.router) {
      this.router = this.aureliaRouter;
    }
    let router = this.router;
    this._childRouter = router;
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  }

  routerChanged() {
    // console.log('[breadcrumbs]', this.router);
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

@customAttribute('md-button')
@inject(Element)
export class MdButton {
  @bindable() disabled = false;
  @bindable() flat = false;
  @bindable() floating = false;
  @bindable() large = false;
  @bindable() pulse = false;

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
    if (getBooleanFromAttributeValue(this.pulse)) {
      classes.push('pulse');
    }
    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled', 'pulse']);
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

  pulseChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('pulse');
    } else {
      this.attributeManager.removeClasses('pulse');
    }
  }
}

@customElement('md-card')
@inject(Element)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdHorizontal;
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
    this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
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
@inject(Element, TaskQueue)
export class MdCarousel {
  @bindable() mdIndicators = true;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdSlider = false;
  @children('md-carousel-item') items = [];

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    // workaround for: https://github.com/Dogfalo/materialize/issues/2741
    // if (getBooleanFromAttributeValue(this.mdSlider)) {
    //   $(this.element).carousel({full_width: true});
    // } else {
    //   $(this.element).carousel();
    // }
    this.refresh();
  }

  itemsChanged(newValue) {
    this.refresh();
  }

  refresh() {
    if (this.items.length > 0) {
      let options = {
        full_width: getBooleanFromAttributeValue(this.mdSlider),
        fullWidth: getBooleanFromAttributeValue(this.mdSlider),
        indicators: this.mdIndicators
      };

      this.taskQueue.queueTask(() => {
        $(this.element).carousel(options);
      });
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
      this.attributeManager.addAttributes({ 'data-length': this.length });
      $(this.element).characterCounter();
    } else {
      $(this.element).find('input').each((i, el) => { $(el).attr('data-length', this.length); });
      $(this.element).find('input').characterCounter();
    }
  }

  detached() {
    this.attributeManager.removeAttributes(['data-length']);
  }
}

// @customElement('md-checkbox')
@inject(Element)
export class MdCheckbox {
  static id = 0;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled;
  @bindable() mdReadonly = false;
  @bindable() mdFilledIn;
  @bindable() mdMatcher;
  @bindable() mdModel;

  constructor(element) {
    this.element = element;
    this.controlId = `md-checkbox-${MdCheckbox.id++}`;
    // this.handleChange = this.handleChange.bind(this);
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
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    // this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    // this.checkbox.addEventListener('change', this.handleChange);
  }

  // blur() {
  //   fireEvent(this.element, 'blur');
  // }

  detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
    // this.checkbox.removeEventListener('change', this.handleChange);
  }

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

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  }

  close() {
    this.element.parentElement.removeChild(this.element);
    fireEvent(this.element, 'close');
  }
}

@customAttribute('md-chips')
@inject(Element)
export class MdChips {
  @bindable() autocompleteData = {};
  @bindable({ defaultBindingMode: bindingMode.twoWay }) data = [];
  @bindable() placeholder = '';
  @bindable() secondaryPlaceholder = '';

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-chips');

    this.onChipAdd = this.onChipAdd.bind(this);
    this.onChipDelete = this.onChipDelete.bind(this);
    this.onChipSelect = this.onChipSelect.bind(this);
  }

  attached() {
    let options = {
      autocompleteData: this.autocompleteData,
      data: this.data,
      placeholder: this.placeholder,
      secondaryPlaceholder: this.secondaryPlaceholder
    };
    $(this.element).material_chip(options);
    $(this.element).on('chip.add', this.onChipAdd);
    $(this.element).on('chip.delete', this.onChipDelete);
    $(this.element).on('chip.select', this.onChipSelect);
  }

  detached() {
    //
  }

  onChipAdd(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'add', target: chip, data: this.data });
  }
  onChipDelete(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'delete', target: chip, data: this.data });
  }
  onChipSelect(e, chip) {
    fireEvent(this.element, 'selected', { target: chip });
  }
}

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@bindable({ name: 'popout', defaultValue: false })
@bindable({ name: 'onOpen' })
@bindable({ name: 'onClose' })
@inject(Element, EventAggregator)
export class MdCollapsible {
  constructor(element, eventAggregator) {
    this.element = element;
    this.eventAggregator = eventAggregator;
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
    let dataCollapsibleAttributeValue = accordion ? 'accordion' : 'expandable';

    this.attributeManager.addAttributes({ 'data-collapsible': dataCollapsibleAttributeValue });

    $(this.element).collapsible({
      accordion,
      onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
      onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
    });
  }

  accordionChanged() {
    this.refresh();
  }

  buildCollapsibleOpenCloseCallbackHandler(handler) {
    return typeof(handler) === 'function' ?
     (targetElementJquery) => {
       let targetElement = targetElementJquery[0];

       handler(targetElement);
     } : null;
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

  clearSelection() {
    let items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(i => i.au['md-collection-selector'].viewModel.isSelected = false);
  }

  selectAll() {
    let items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(i => {
      let vm = i.au['md-collection-selector'].viewModel;
      vm.isSelected = !vm.mdDisabled;
    });
  }
}

@customElement('md-collection-selector')
@inject(Element)
export class MdlListSelector {
  @bindable() item;
  @bindable() mdDisabled = false;
  @observable() isSelected = false;

  constructor(element) {
    this.element = element;
  }

  isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  }

  mdDisabledChanged(newValue) {
    this.mdDisabled = getBooleanFromAttributeValue(newValue);
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

export class MdColors {
  @bindable() mdPrimaryColor;
  @bindable() mdAccentColor;
  @bindable() mdErrorColor = '#F44336';
  @bindable() mdSuccessColor;
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

// https://github.com/jonathantneal/closest/blob/master/closest.js
export function polyfillElementClosest() {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      let element = this;
      let elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      let index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }
      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      let element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }
      return null;
    };
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

export function applyMaterializeDropdownFix() {
  $.fn.dropdown = function(options) {
    let defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === 'open') {
      this.each(function() {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === 'close') {
      this.each(function() {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function() {
      let origin = $(this);
      let currentOptions = $.extend({}, defaults, options);
      let isFocused = false;

      // Dropdown menu
      let activates = $('#' + origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined) {
          currentOptions.inDuration = origin.data('induration');
        }
        if (origin.data('outduration') !== undefined) {
          currentOptions.outDuration = origin.data('outduration');
        }
        if (origin.data('constrainwidth') !== undefined) {
          currentOptions.constrain_width = origin.data('constrainwidth');
        }
        if (origin.data('hover') !== undefined) {
          currentOptions.hover = origin.data('hover');
        }
        if (origin.data('gutter') !== undefined) {
          currentOptions.gutter = origin.data('gutter');
        }
        if (origin.data('beloworigin') !== undefined) {
          currentOptions.belowOrigin = origin.data('beloworigin');
        }
        if (origin.data('alignment') !== undefined) {
          currentOptions.alignment = origin.data('alignment');
        }
        if (origin.data('stoppropagation') !== undefined) {
          currentOptions.stopPropagation = origin.data('stoppropagation');
        }
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        // Constrain width
        if (currentOptions.constrain_width === true) {
          activates.css('width', origin.outerWidth());
        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        let windowHeight = window.innerHeight;
        let originHeight = origin.innerHeight();
        let offsetLeft = origin.offset().left;
        let offsetTop = origin.offset().top - $(window).scrollTop();
        let currAlignment = currentOptions.alignment;
        let gutterSpacing = 0;
        let leftPosition = 0;

        // Below Origin
        let verticalOffset = 0;
        if (currentOptions.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        let scrollYOffset = 0;
        let scrollXOffset = 0;
        let wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }


        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            let adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = currentOptions.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        } else if (currAlignment === 'right') {
          let offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
          gutterSpacing = -currentOptions.gutter;
          leftPosition =  offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });


        // Show dropdown
        activates.stop(true, true).css('opacity', 0)
          .slideDown({
            queue: false,
            duration: currentOptions.inDuration,
            easing: 'easeOutCubic',
            complete: function() {
              $(this).css('height', '');
            }
          })
          .animate( {opacity: 1}, {queue: false, duration: currentOptions.inDuration, easing: 'easeOutSine'});
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(currentOptions.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        setTimeout(function() { activates.css('max-height', ''); }, currentOptions.outDuration);
      }

      // Hover
      if (currentOptions.hover) {
        let open = false;
        origin.unbind('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function(e) { // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function(e) {
          // If hover on origin then to something other than dropdown content, then close
          let toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if(!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function(e) { // Mouse out
          let toEl = e.toElement || e.relatedTarget;
          if(!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.unbind('click.' + origin.attr('id'));
        origin.bind('click.' + origin.attr('id'), function(e) {
          if (!isFocused) {
            if ( origin[0] === e.currentTarget &&
                 !origin.hasClass('active') &&
                 ($(e.target).closest('.dropdown-content').length === 0)) {
              e.preventDefault(); // Prevents button click from moving window
              if (currentOptions.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            } else if (origin.hasClass('active')) {
              // If origin is clicked and menu is open, close menu
              hideDropdown();
              $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
            }
            // If menu open, add click close handler to document
            if (activates.hasClass('active')) {
              $(document).bind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'), function(e2) {
                if (!activates.is(e2.target) && !origin.is(e2.target) && (!origin.find(e2.target).length) ) {
                  hideDropdown();
                  $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
                }
              });
            }
          }
        });
      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function(e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);
    });
  }; // End dropdown plugin

  $(document).ready(function() {
    $('.dropdown-button').dropdown();
  });
}

@customAttribute('md-dropdown')
@inject(Element)
export class MdDropdown {
  static elementId = 0;

  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) activates = '';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) ref = null;
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
    this.handleActivateElement();
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');
    // this.attributeManager.addAttributes({ 'data-activates': this.activates });

    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      constrainWidth: getBooleanFromAttributeValue(this.constrainWidth),
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

  handleActivateElement() {
    if (this.ref) {
      let id = this.ref.getAttribute('id');
      if (!id) {
        id = `md-dropdown-${MdDropdown.elementId++}`;
        this.ref.setAttribute('id', id);
        this.activates = id;
      }
      this.id = MdDropdown.elementId++;
    }
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
  }
}

export class DatePickerDefaultParser {
  canParse(value) {
    if (value) {
      return true;
    }
    return false;
  }

  parse(value) {
    if (value) {
      let result = value.split('/').join('-');
      result = new Date(result);
      return isNaN(result) ? null : result;
    }
    return null;
  }
}

@inject(Element, TaskQueue, DatePickerDefaultParser)
@customAttribute('md-datepicker')
export class MdDatePicker {
  @bindable() container;
  @bindable() translation;
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;
  @bindable({defaultBindingMode: bindingMode.twoWay}) parsers = [];
  @bindable({defaultBindingMode: bindingMode.oneTime}) selectMonths = true;
  @bindable({defaultBindingMode: bindingMode.oneTime}) selectYears = 15;
  @bindable({defaultBindingMode: bindingMode.oneTime}) options = {};
  @bindable() showErrortext = true;
  calendarIcon = null;

  constructor(element, taskQueue, defaultParser) {
    this.element = element;
    this.log = getLogger('md-datepicker');
    this.taskQueue = taskQueue;
    this.parsers.push(defaultParser);
    this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
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

    if (this.options) {
      Object.assign(options, this.options);
      //merge callback methods if there is a hook in the advanced options
      if (this.options.onClose) {
        options.onClose = function() {
          this.options.onClose();
          $(document.activeElement).blur();
        };
      }
    }
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this),
      'set': this.onSet.bind(this)
    });

    if (this.value) {
      this.picker.set('select', this.value);
    }
    if (this.options && this.options.editable) {
      $(this.element).on('keydown', (e)=> {
        if (e.keyCode === 13 || e.keyCode === 9) {
          if (this.parseDate($(this.element).val())) {
            this.closeDatePicker();
          } else {
            this.openDatePicker();
          }
        } else {
          this.value = null;
        }
      });
    } else {
      $(this.element).on('focusin', () => {
        this.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      this.calendarIcon = document.createElement('i');
      this.calendarIcon.classList.add('right');
      this.calendarIcon.classList.add('material-icons');
      this.calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(this.calendarIcon, this.element.nextSibling);
      $(this.calendarIcon).on('click', this.onCalendarIconClick);

      options.iconClass = options.iconClass || 'std-icon-fixup';
      this.calendarIcon.classList.add(options.iconClass);
    }

    this.setErrorTextAttribute();
  }

  parseDate(value) {
    if (this.parsers && this.parsers.length && this.parsers.length > 0) {
      for (const parser of this.parsers) {
        if (parser.canParse(value)) {
          const parsedDate = parser.parse(value);
          if (parsedDate !== null) {
            this.picker.set('select', parsedDate);
            return true;
          }
        }
      }
    }
    return false;
  }

  detached() {
    if (this.options.showIcon) {
      this.element.classList.remove('left');
      $(this.calendarIcon).off('click', this.onCalendarIconClick);
      $(this.calendarIcon).remove();
      this.calendarIcon = null;
    }
    if (this.picker) {
      this.picker.stop();
    }
  }

  openDatePicker() {
    $(this.element).pickadate('open');
  }

  closeDatePicker() {
    $(this.element).pickadate('close');
  }

  onClose() {
    let selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
    fireEvent(this.element, 'blur');
  }

  onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  }

  onSet(value) {
    //handle this ourselves since Dogfalo removed this functionality from the original plugin
    if (this.options && this.options.closeOnSelect && value.select) {
      this.value = value.select;
      this.picker.close();
    }
    // this.value = new Date(value.select);
  }

  valueChanged(newValue) {
    if (this.options.max && newValue > this.options.max) {
      this.value = this.options.max;
    }
    this.log.debug('selectedChanged', this.value);
    // this.taskQueue.queueTask(() => {
    this.picker.set('select', this.value);
    // });
  }

  showErrortextChanged() {
    this.setErrorTextAttribute();
  }

  setErrorTextAttribute() {
    const element = this.element;
    if (!element) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    element.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
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
  @bindable() disabled = false;
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
  @bindable() mdBlurOnEnter = false;
  @bindable() mdDisabled = false;
  @bindable() mdReadonly = false;
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
  }) mdStep = 'any';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdValidate = false;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdShowErrortext = true;
  @bindable() mdValidateError;
  @bindable() mdValidateSuccess;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue = '';

  _suspendUpdate = false;

  constructor(element, taskQueue, updateService) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = `md-input-${MdInput.id++}`;
    this.updateService = updateService;
    this.blurOnEnter = this.blurOnEnter.bind(this);
  }

  bind() {
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
    this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
    this.mdBlurOnEnter = getBooleanFromAttributeValue(this.mdBlurOnEnter);
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdValidateError)  {
      this.label.setAttribute('data-error', this.mdValidateError);
    }
    if (this.mdValidateSuccess)  {
      this.label.setAttribute('data-success', this.mdValidateSuccess);
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
    }
    if (this.mdShowErrortext) {
      this.input.setAttribute('data-show-errortext', this.mdShowErrortext);
    }
    this.updateService.update();

    // special case: time inputs are not covered by Materialize
    if (this.mdType === 'time') {
      $(this.input).siblings('label').addClass('active');
    }
    this.attachEventHandlers();
  }

  detached() {
    this.detachEventHandlers();
  }

  blur() {
    fireEvent(this.element, 'blur');
  }

  focus() {
    fireEvent(this.element, 'focus');
  }

  mdValueChanged() {
    if (!$(this.input).is(':focus')) {
      this.updateService.update();
    }
    if (this.mdTextArea) {
      $(this.input).trigger('autoresize');
    }
  }

  attachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.addEventListener('keyup', this.blurOnEnter);
    }
  }

  detachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.removeEventListener('keyup', this.blurOnEnter);
    }
  }

  blurOnEnter(e) {
    if (e.keyCode && e.keyCode === 13) {
      this.input.blur();
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

@customAttribute('md-modal')
@inject(Element)
export class MdModal {
  @bindable() dismissible = true;
  @bindable() opacity = 0.5; // Opacity of modal background
  @bindable() inDuration = 300; // Transition in duration
  @bindable() outDuration = 200; // Transition out duration
  @bindable() startingTop = '4%'; // Starting top style attribute
  @bindable() endingTop = '10%'; // Ending top style attribute

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-modal');
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  attached() {
    const options = {
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible),
      endingTop: this.endingTop,
      inDuration: parseInt(this.inDuration, 10),
      opacity: parseFloat(this.opacity),
      outDuration: parseInt(this.outDuration, 10),
      ready: this.onReady,
      startingTop: this.startingTop
    };
    this.log.debug('modal options: ', options);
    this.attributeManager.addClasses('modal');
    $(this.element).modal(options);
  }

  detached() {
    this.attributeManager.removeClasses('modal');
  }

  onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  }

  onReady(modal, trigger) {
    fireMaterializeEvent(this.element, 'modal-ready', { modal, trigger });
  }

  open() {
    $(this.element).modal('open');
  }

  close() {
    $(this.element).modal('close');
  }
}

@customElement('md-navbar')
@inject(Element)
export class MdNavbar {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdFixed;
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdAutoHeight;
  fixedAttributeManager;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    this.navAttributeManager = new AttributeManager(this.nav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.addClasses('md-auto-height');
    }
  }

  detached() {
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.addClasses('md-auto-height');
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
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdVisiblePageLinks = 15;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) mdPageLinks = [];
  @bindable() mdShowFirstLast = true;
  @bindable() mdShowPrevNext = true;
  @bindable() mdShowPageLinks = true;

  // local variables to stop Changed events when parsing to int
  numberOfLinks = 15;
  pages = 5;

  constructor(element) {
    this.element = element;
  }

  bind() {
    // attached() throws unhandled exceptions
    this.pages = parseInt(this.mdPages, 10);
    // We don't want mdVisiblePageLinks to be greater than mdPages
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
    this.mdPageLinks = this.generatePageLinks();
  }

  setActivePage(page) {
    this.mdActivePage = parseInt(page, 10);
    this.mdPageLinks = this.generatePageLinks();
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  }

  setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  }

  setLastPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.pages);
    }
  }

  setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  }

  setNextPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  }

  mdPagesChanged() {
    this.pages = parseInt(this.mdPages, 10);
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.setActivePage(1);
  }

  mdVisiblePageLinksChanged() {
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdPageLinks = this.generatePageLinks();
  }

  generatePageLinks() {
    let midPoint = parseInt((this.numberOfLinks / 2), 10);
    let start = Math.max(this.mdActivePage - midPoint, 0);
    // respect visible links
    if (start + midPoint * 2 > this.pages) start = this.pages - midPoint * 2;
    let end = Math.min(start + this.numberOfLinks, this.pages);

    let list = [];
    for (let i = start; i < end; i++) {
      list.push(i);
    }

    return list;
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
    defaultBindingMode: bindingMode.twoWay
  }) mdPixelSize = null;
  @bindable() mdSize = 'big';
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

  bind() {
    // This disables property changed callbacks for any bindable properties during initialization
    // Prevents mdPixelSize getting cleared by the mdSizeChanged event during binding
  }

  attached() {
    this.mdPixelSizeChanged(this.mdPixelSize);
  }

  mdSizeChanged(newValue) {
    this.mdPixelSize = null;
  }

  mdPixelSizeChanged(newValue) {
    if (this.wrapper) {
      newValue = (newValue === null || newValue === '' || isNaN(newValue)) ? '' : `${newValue}px`;
      this.wrapper.style.height = newValue;
      this.wrapper.style.width = newValue;
    }
  }
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
  @bindable() mdReadonly = false;
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
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
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

@inject(Element, BindingEngine, TaskQueue)
@customAttribute('md-select')
export class MdSelect {
  @bindable() disabled = false;
  @bindable() enableOptionObserver = false;
  @bindable() label = '';
  @bindable() showErrortext = true;
  _suspendUpdate = false;
  subscriptions = [];
  input = null;
  dropdownMutationObserver = null;
  optionsMutationObserver = null;

  constructor(element, bindingEngine, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.log = getLogger('md-select');
    this.bindingEngine = bindingEngine;
  }

  attached() {
    this.taskQueue.queueTask(() => {
      this.createMaterialSelect(false);

      if (this.label) {
        let wrapper = $(this.element).parent('.select-wrapper');
        let div = $('<div class="input-field"></div>');
        let va = this.element.attributes.getNamedItem('validate');
        if (va) {
          div.attr(va.name, va.label);
        }
        wrapper.wrap(div);
        $(`<label class="md-select-label">${this.label}</label>`).insertAfter(wrapper);
      }
    });
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

    $(this.element).on('change', this.handleChangeFromNativeSelect);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    this.dropdownMutationObserver = null;
    $(this.element).material_select('destroy');
    this.subscriptions.forEach(sub => sub.dispose());
  }

  refresh() {
    this.taskQueue.queueTask(() => {
      this.createMaterialSelect(true);
    });
  }

  labelChanged(newValue) {
    this.updateLabel();
  }

  updateLabel() {
    if (this.label) {
      const $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
      $label.text(this.label);
    }
  }

  disabledChanged(newValue) {
    this.toggleControl(newValue);
  }

  showErrortextChanged() {
    this.setErrorTextAttribute();
  }

  setErrorTextAttribute() {
    let input = this.element.parentElement.querySelector('input.select-dropdown');
    if (!input) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    input.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  }

  notifyBindingEngine() {
    this.log.debug('selectedOptions changed', arguments);
  }

  handleChangeFromNativeSelect() {
    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this._suspendUpdate = false;
    }
  }

  handleChangeFromViewModel(newValue) {
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      this.createMaterialSelect(false);
    }
  }

  toggleControl(disable) {
    let $wrapper = $(this.element).parent('.select-wrapper');
    if ($wrapper.length > 0) {
      if (disable) {
        $('.caret', $wrapper).addClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
        $wrapper.attr('disabled', 'disabled');
      } else {
        $('.caret', $wrapper).removeClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', null);
        $wrapper.attr('disabled', null);
        $('.select-dropdown', $wrapper).dropdown({'hover': false, 'closeOnClick': false});
      }
    }
  }

  createMaterialSelect(destroy) {
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    if (destroy) {
      $(this.element).material_select('destroy');
    }
    $(this.element).material_select();
    this.toggleControl(this.disabled);
    this.observeVisibleDropdownContent(true);
    this.observeOptions(true);
    this.setErrorTextAttribute();
  }

  observeVisibleDropdownContent(attach) {
    if (attach) {
      if (!this.dropdownMutationObserver) {
        this.dropdownMutationObserver = DOM.createMutationObserver(mutations => {
          let isHidden = false;
          for (let mutation of mutations) {
            if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
              isHidden = true;
            }
          }
          if (isHidden) {
            this.dropdownMutationObserver.takeRecords();
            this.handleBlur();
          }
        });
      }
      this.dropdownMutationObserver.observe(this.element.parentElement.querySelector('.dropdown-content'), {
        attributes: true,
        attributeFilter: ['style']
      });
    } else {
      if (this.dropdownMutationObserver) {
        this.dropdownMutationObserver.disconnect();
        this.dropdownMutationObserver.takeRecords();
      }
    }
  }

  observeOptions(attach) {
    if (getBooleanFromAttributeValue(this.enableOptionObserver)) {
      if (attach) {
        if (!this.optionsMutationObserver) {
          this.optionsMutationObserver = DOM.createMutationObserver(mutations => {
            // this.log.debug('observeOptions', mutations);
            this.refresh();
          });
        }
        this.optionsMutationObserver.observe(this.element, {
          // childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        if (this.optionsMutationObserver) {
          this.optionsMutationObserver.disconnect();
          this.optionsMutationObserver.takeRecords();
        }
      }
    }
  }

  //
  // Firefox sometimes fire blur several times in a row
  // observable at http://localhost:3000/#/samples/select/
  // when enable 'Disable Functionality', open that list and
  // then open 'Basic use' list.
  // Chrome - ok
  // IE 11 - ok
  // Edge ?
  //
  _taskqueueRunning = false;

  handleBlur() {
    if (this._taskqueueRunning) return;
    this._taskqueueRunning = true;
    this.taskQueue.queueTask(() => {
      this.log.debug('fire blur event');
      fireEvent(this.element, 'blur');
      this._taskqueueRunning = false;
    });
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

      const closeOnClick = this.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(this.ref.mdCloseOnClick);

      this.element.setAttribute('data-activates', this.ref.controlId);
      let sideNavConfig = {
        edge: this.ref.mdEdge || 'left',
        // closeOnClick: (this.ref.mdFixed ? false : getBooleanFromAttributeValue(this.ref.mdCloseOnClick)),
        closeOnClick,
        menuWidth: parseInt(this.ref.mdWidth, 10)
      };
      // this.log.debug('sideNavConfig:', sideNavConfig);
      $(this.element).sideNav(sideNavConfig);
    });
  }

  detached() {
    // this.widthSubscription.unsubscribe();
  }

  show() {
    $(this.element).sideNav('show');
  }

  hide() {
    $(this.element).sideNav('hide');
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
  @bindable() mdWidth = 300;

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
  @bindable() mdReadonly = false;
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
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
  }

  detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  }

  handleChange() {
    this.mdChecked = this.checkbox.checked;
    fireEvent(this.element, 'blur');
  }

  blur() {
    fireEvent(this.element, 'blur');
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

@customAttribute('md-tabs')
@inject(Element, TaskQueue)
export class MdTabs {
  @bindable() fixed = false;
  @bindable() onShow = null;
  @bindable() responsiveThreshold = Infinity;
  @bindable() swipeable = false;
  @bindable() transparent = false;

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

    const self = this;
    $(this.element).tabs({
      onShow: function(jQueryElement) {
        if (self.onShow) {
          self.onShow({ element: jQueryElement});
        }
      },
      swipeable: getBooleanFromAttributeValue(this.swipeable),
      responsiveThreshold: this.responsiveThreshold
    });
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.addEventListener('click', this.fireTabSelectedEvent);
    });
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

  refresh() {
    this.taskQueue.queueTask(() => {
      let hrefs = [];
      $('li a', this.element).each(function(i, tab) {
        $(tab).parent().addClass('tab');
        hrefs.push($(tab).attr('href'));
      });
      $(hrefs).each((i, tab) => {
        if (this.selectedTab.index != i) {
          $(tab).hide();
        }
      });
      this.taskQueue.queueTask(() => {
        // window resize adjusts Materialize tab indicator
        $(window).trigger('resize');
      });
    });
  }

  fixedChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-fixed-width');
    } else {
      this.attributeManager.removeClasses('tabs-fixed-width');
    }
  }

  transparentChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-transparent');
    } else {
      this.attributeManager.removeClasses('tabs-transparent');
    }
  }

  fireTabSelectedEvent(e) {
    let href = e.target.getAttribute('href');
    fireMaterializeEvent(this.element, 'selected', href);
  }

  selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: () => `#${id}` }
    });
  }

  // FIXME: probably bad - binding this introduces dirty checking
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

@customElement('md-tap-target')
@inject(Element)
export class MdTapTarget {
  static controlId = 0;
  @bindable() mdRef = null;

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-tap-target');
  }

  bind() {
    if (!this.mdRef) {
      throw new Error('md-tap-target needs a referenced element');
    } else {
      let id = this.mdRef.getAttribute('id');
      if (!id) {
        id = `md-tap-target-${MdTapTarget.controlId++}`;
        this.mdRef.setAttribute('id', id);
      }
      this.element.setAttribute('data-activates', id);
    }
  }

  open() {
    $(this.element).tapTarget('open');
  }

  close() {
    $(this.element).tapTarget('close');
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

@customAttribute('md-tooltip')
@inject(Element)
export class MdTooltip {
  @bindable() position = 'bottom';
  @bindable() delay = 50;
  @bindable() html = false;
  @bindable() text = '';

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  bind() {
    this.html = getBooleanFromAttributeValue(this.html);
  }

  attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    this.initTooltip();
  }

  detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  }

  textChanged() {
    this.attributeManager.addAttributes({ 'data-tooltip': this.text });
    this.initTooltip();
  }

  initTooltip() {
    $(this.element).tooltip('remove');
    $(this.element).tooltip({
      delay: parseInt(this.delay, 10),
      html: this.html
    });
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
    Materialize.fadeInImage($(this.ref));
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
    Materialize.showStaggeredList($(this.ref));
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

export class MaterializeFormValidationRenderer {

  className = 'md-input-validation';
  classNameFirst = 'md-input-validation-first';

  render(instruction) {
    let allElements = new Array();
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    allElements.forEach(e => this.underlineInput(e));
  }

  underlineInput(element) {
    let input;
    switch (element.tagName) {
      case 'MD-INPUT': {
        input = element.querySelector('input') || element.querySelector('textarea');
        break;
      }
      case 'SELECT': {
        const selectWrapper = element.closest('.select-wrapper');
        if (selectWrapper) {
          input = selectWrapper.querySelector('input');
        }
        break;
      }
      case 'INPUT': {
        input = element;
        break;
      }
      default: break;
    }
    if (input) {
      if (element.querySelectorAll('.' + this.className).length === 0) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      }
      else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    }
  }

  add(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
    case 'MD-INPUT': {
      let label = element.querySelector('label');
      let input = element.querySelector('input') || element.querySelector('textarea');
      if (label) {
        label.removeAttribute('data-error');
      }
      if (input) {
        result.target = input;
        if (input.hasAttribute('data-show-errortext')) {
          this.addMessage(element, result);
        }
      }
      break;
    }
    case 'SELECT': {
      const selectWrapper = element.closest('.select-wrapper');
      if (!selectWrapper) {
        return;
      }
      let input = selectWrapper.querySelector('input');
      if (input) {
        result.target = input;
        if (!(input.hasAttribute('data-show-errortext') &&
            input.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(selectWrapper, result);
        }
      }
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        if (!(element.hasAttribute('data-show-errortext') &&
            element.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(element.parentNode, result);
        }
      }
      break;
    }
    default: break;
    }
  }

  remove(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
    case 'MD-INPUT': {
      this.removeMessage(element, result);
      break;
    }
    case 'SELECT': {
      const selectWrapper = element.closest('.select-wrapper');
      if (!selectWrapper) {
        return;
      }

      if ($(selectWrapper.parentElement).children().hasClass('md-input-validation') ) {
        this.removeMessage(selectWrapper.parentElement, result);
      } else {
        this.removeMessage(selectWrapper, result);
      }
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        this.removeMessage(element.parentNode, result);
      }
      break;
    }
    default: break;
    }
  }

  addMessage(element, result) {
    let message = document.createElement('div');
    message.id = `md-input-validation-${result.id}`;
    message.textContent = result.message;
    message.className = this.className;
    if (element.querySelectorAll('.' + this.className).length === 0) {
      message.className += ' ' + this.classNameFirst;
    }
    message.style.opacity = 0;
    element.appendChild(message, element.nextSibling);
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  }

  removeMessage(element, result) {
    let message = element.querySelector(`#md-input-validation-${result.id}`);
    if (message) {
      element.removeChild(message);
    }
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
