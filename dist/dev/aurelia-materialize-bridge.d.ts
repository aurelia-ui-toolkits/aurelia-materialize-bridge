declare module 'aurelia-materialize-bridge' {
  import 'materialize';
  import { Aurelia, bindable, customAttribute, inject, bindingMode, customElement, containerless, inlineView }  from 'aurelia-framework';
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
    useButton(): ConfigBuilder;
    useCard(): ConfigBuilder;
    
    /**
      * Use my control
      */
    useClickCounter(): ConfigBuilder;
    useCollapsible(): ConfigBuilder;
    useColors(): ConfigBuilder;
    useNavbar(): ConfigBuilder;
    useSidenav(): ConfigBuilder;
    
    /**
       * Use materialized tabs
       */
    useTabs(): ConfigBuilder;
    
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
  export class MdButton {
    disabled: any;
    flat: any;
    large: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    disabledChanged(newValue: any): any;
  }
  export class MdCard {
    title: any;
    constructor(element: any);
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
  export class MdNavbar {
    fixed: any;
    fixedClassSetter: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  export class MdSidenavCollapse {
    ref: any;
    constructor(element: any);
    attached(): any;
    
    //  this.element.addEventListener('click', this.toggleSidenav);
    detached(): any;
  }
  
  //  this.element.removeEventListener('click', this.toggleSidenav);
  //  toggleSidenav() {
  //    $(this.element).sideNav('show');
  //  }
  export class MdSidenav {
    static id: any;
    edge: any;
    closeOnClick: any;
    constructor(element: any);
    attached(): any;
  }
  
  //  this.controlId = 'md-sidenav-' + id++;
  /*
    implementation example
  
    <div class="row">
        <div class="col s12 m8">
          <div class="card">
            <div class="card-content">
              <span class="card-title">Code Preview</span>
              <div class="row">
                <md-tabs tabs.bind="tabs">
                  <md-tab title="Html" for-element="#html"></md-tab>
                  <md-tab title="Css (custom color)" for-element="#css"></md-tab>
                </md-tabs>
  
                <div id="html" class="z-depth-1">
                  <au-code language="markup" url="samples/waves/colors-sample.html"></au-code>
                </div>
                <div id="css" class="z-depth-1">
                  <au-code language="css" url="samples/waves/colors-sample.css"></au-code>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  */
  //  @bindable({
  //    name: 'title',
  //    defaultBindingMode: bindingMode.oneWay
  //  })
  
  //  @inlineView won't work, throwing "title is not defined"
  //  @inlineView(`
  //    <template>
  //      <li md-waves class="tab">${title}</li>
  //    </template>
  //  `)
  export class MdTab {
    forElement: any;
    tab: any;
    title: any;
    constructor(element: any);
    attached(): any;
    
    //  console.log('[MdTab] attached', 'forElement', this.forElement, this.tab)
    detached(): any;
    forElementChanged(newValue: any): any;
  }
  
  //  console.log('[MdTab] forElementChanged', 'newValue', newValue)
  export class MdTabsElement {
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
  
  //  no destroy handler in tabs :-(
  export class MdTabs {
    constructor(element: any);
    attached(): any;
    detached(): any;
    fireTabSelectedEvent(e: any): any;
  }
  export class MdWaves {
    constructor(element: any);
    attached(): any;
    detached(): any;
  }
}