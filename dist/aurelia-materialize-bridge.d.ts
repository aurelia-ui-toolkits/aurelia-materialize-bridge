declare module 'aurelia-materialize-bridge' {
  import 'materialize';
  import * as LogManager from 'aurelia-logging';
  import { Aurelia }  from 'aurelia-framework';
  import { bindable, customAttribute, customElement, containerless, inlineView }  from 'aurelia-templating';
  import { bindingMode, ObserverLocator }  from 'aurelia-binding';
  import { inject }  from 'aurelia-dependency-injection';
  export class ClickCounter {
    count: any;
    increment(): any;
  }
  
  /**
  * Plugin configuration builder
  */
  export class ConfigBuilder {
    useGlobalResources: boolean;
    globalResources: any;
    useAll(): ConfigBuilder;
    useBox(): ConfigBuilder;
    useButton(): ConfigBuilder;
    useCard(): ConfigBuilder;
    useCheckbox(): ConfigBuilder;
    
    /**
      * Use my control
      */
    useClickCounter(): ConfigBuilder;
    useCollapsible(): ConfigBuilder;
    useColors(): ConfigBuilder;
    useDropdown(): ConfigBuilder;
    useNavbar(): ConfigBuilder;
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
  }
  export function configure(aurelia: Aurelia, configCallback?: ((builder: ConfigBuilder) => void)): any;
  export class MdBox {
    caption: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdButton {
    disabled: any;
    flat: any;
    large: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    disabledChanged(newValue: any): any;
    flatChanged(newValue: any): any;
  }
  export class MdCard {
    mdTitle: any;
    constructor(element: any);
  }
  export class MdCheckbox {
    static id: any;
    mdChecked: any;
    mdDisabled: any;
    mdFilledIn: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    handleChange(): any;
    mdCheckedChanged(newValue: any): any;
    mdDisabledChanged(newValue: any): any;
  }
  export class MdCollapsible {
    constructor(element: any);
    attached(): any;
    detached(): any;
    refresh(): any;
    accordionChanged(): any;
  }
  
  /* eslint-enable */
  export class DarkenValueConverter {
    toView(value: any, steps: any): any;
  }
  export class LightenValueConverter {
    toView(value: any, steps: any): any;
  }
  
  /**
   * Adds css classes to a given element only if these classes are not already
   * present. Keeps a record of css classes which actually have been added.
   * This way, they can also be removed in a way which keeps the original classes
   * set by the user.
   * Most useful in attached() and detached() handlers.
   */
  export class AttributeManager {
    addedClasses: any;
    addedAttributes: any;
    constructor(element: any);
    addAttributes(attrs: any): any;
    removeAttributes(attrs: any): any;
    addClasses(classes: any): any;
    removeClasses(classes: any): any;
  }
  export function getBooleanFromAttributeValue(value: any): any;
  export const constants: any;
  
  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  export function fireEvent(element: Element, name: string, data?: any): any;
  
  /**
  * Fire DOM event on an element with the md-on prefix
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name, without md-on prefix
  * @param data Addition data to attach to an event
  */
  export function fireMaterializeEvent(element: Element, name: string, data?: any): any;
  export class MdDropdownElement {
    static id: any;
    alignment: any;
    belowOrigin: any;
    constrainWidth: any;
    gutter: any;
    hover: any;
    mdTitle: any;
    inDuration: any;
    outDuration: any;
    constructor(element: any);
    attached(): any;
  }
  export class MdDropdown {
    activates: any;
    alignment: any;
    belowOrigin: any;
    constrainWidth: any;
    gutter: any;
    hover: any;
    mdTitle: any;
    inDuration: any;
    outDuration: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdNavbar {
    fixed: any;
    fixedAttributeManager: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdSelect {
    selected: any;
    constructor(element: any, logManager: any);
    
    //  this.log = getLogger('md-select');
    attached(): any;
    detached(): any;
    
    /*
       * This handler is called when the native <select> changes.
       */
    handleChangeFromNativeSelect(): any;
    selectedChanged(): any;
  }
  export class MdSidenavCollapse {
    ref: any;
    constructor(element: any, observerLocator: any);
    attached(): any;
    detached(): any;
    
    //  this.widthSubscription.unsubscribe();
    widthChanged(): any;
  }
  export class MdSidenav {
    static id: any;
    closeOnClick: any;
    edge: any;
    fixed: any;
    mdWidth: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    fixedChanged(newValue: any): any;
  }
  export class MdSlide {
    captionAlign: any;
    img: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdSlider {
    mdFillContainer: any;
    mdHeight: any;
    mdIndicators: any;
    mdInterval: any;
    mdTransition: any;
    constructor(element: any);
    attached(): any;
  }
  export class MdSwitch {
    mdChecked: any;
    mdLabelOff: any;
    mdLabelOn: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    handleChange(): any;
    mdCheckedChanged(newValue: any): any;
  }
  export class MdTabs {
    constructor(element: any);
    attached(): any;
    detached(): any;
    fireTabSelectedEvent(e: any): any;
  }
  export class MdToastService {
    show(message: any, displayLength: any, className: any): any;
  }
  
  //  @customAttribute('md-tooltip')
  export class MdTooltip {
    position: any;
    delay: any;
    text: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdFadeinImage {
    ref: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    fadeInImage(): any;
  }
  export class MdStaggeredList {
    ref: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    staggerList(): any;
  }
  export class MdWaves {
    color: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
}