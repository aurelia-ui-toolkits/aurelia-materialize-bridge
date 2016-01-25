import 'materialize';
import {Aurelia,bindable,customAttribute,inject,bindingMode,customElement,containerless,inlineView} from 'aurelia-framework';

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
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .useButton()
      .useCard()
      .useCollapsible()
      .useNavbar()
      .useSidenav()
      .useTabs()
      .useWaves()
      .useWell();
  }

  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCard(): ConfigBuilder {
    this.globalResources.push('./card/card');
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

  useNavbar(): ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    return this;
  }

  useSidenav(): ConfigBuilder {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  }

  /**
   * Use materialized tabs
   */
  useTabs(): ConfigBuilder {
    this.globalResources.push('./tabs/tabs');
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
}

export function configure(aurelia: Aurelia, configCallback?: (builder: ConfigBuilder) => void) {
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}

@customAttribute('md-button')
@inject(Element)
export class MdButton {
  @bindable() disabled = false;
  @bindable() flat = false;
  @bindable() large = false;

  constructor(element) {
    this.classSetter = new CssClassSetter(element);
  }
  attached() {
    let classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
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

    this.classSetter.addClasses(classes);
  }
  detached() {
    this.classSetter.removeClasses(['btn', 'btn-flat', 'btn-large', 'disabled']);
  }
}

@customElement('md-card')
@inject(Element)
// @inlineView(`
//   <template>
//   <div class="card">
//     <div class="card-content">
//       <span class="card-title">${title}</span>
//       <div>
//       <content></content>
//       </div>
//     </div>
//   </div>
//   </template>
// `)
export class MdCard {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) title;

  constructor(element) {

  }
}

@customAttribute('md-collapsible')
@bindable({ name: 'accordion', defaultValue: false })
@bindable({ name: 'popout', defaultValue: false })
@inject(Element)

export class MdCollapsible {
  constructor(element) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
  }

  attached() {
    this.classSetter.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.classSetter.addClasses('popout');
    }
    this.refresh();
  }

  detached() {
    this.classSetter.removeClasses(['collapsible', 'popout']);
  }

  refresh() {
    let accordion = getBooleanFromAttributeValue(this.accordion);
    if (accordion) {
      this.element.setAttribute('data-collapsible', 'accordion');
    } else {
      this.element.setAttribute('data-collapsible', 'expandable');
    }

    $(this.element).collapsible({
      accordion
    });
  }

  accordionChanged() {
    this.refresh();
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
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export class CssClassSetter {
  addedClasses = [];

  constructor(element) {
    this.element = element;
  }

  addClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      if (!this.element.classList.contains(c)) {
        this.addedClasses.push(c);
        this.element.classList.add(c);
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

@customElement('md-navbar')
@inject(Element)
export class MdNavbar {
  @bindable() fixed;
  fixedClassSetter;

  constructor(element) {
    this.element = element;
  }

  attached() {
    this.fixedClassSetter = new CssClassSetter(this.fixedAnchor);
    if (getBooleanFromAttributeValue(this.fixed)) {
      // this.fixedAnchor.classList.add('navbar-fixed');
      this.fixedClassSetter.addClasses('navbar-fixed');
    }
  }

  detached() {
    if (getBooleanFromAttributeValue(this.fixed)) {
      // this.fixedAnchor.classList.remove('navbar-fixed');
      this.fixedClassSetter.removeClasses('navbar-fixed');
    }
  }
}

@customAttribute('md-sidenav-collapse')
@inject(Element)
export class MdSidenavCollapse {
  @bindable() ref;
  constructor(element) {
    this.element = element;
  }

  attached() {
    this.element.setAttribute('data-activates', this.ref.controlId);
    $(this.element).sideNav();
    // this.element.addEventListener('click', this.toggleSidenav);
  }

  detached() {
    // this.element.removeEventListener('click', this.toggleSidenav);
  }

  toggleSidenav() {
    $(this.element).sideNav('show');
  }
}

@customElement('md-sidenav')
@inject(Element)
export class MdSidenav {
  static id = 0;

  constructor(element) {
    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
  }

  attached() {
    // this.controlId = 'md-sidenav-' + id++;
  }
}

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

// @bindable({
//   name: 'title',
//   defaultBindingMode: bindingMode.oneWay
// })
@customElement('md-tab')
@containerless()
@inject(Element)
// @inlineView won't work, throwing "title is not defined"
// @inlineView(`
//   <template>
//     <li md-waves class="tab">${title}</li>
//   </template>
// `)
export class MdTab {
  @bindable({
    attribute: 'for-element',
    defaultBindingMode: bindingMode.oneWay
  }) forElement;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) tab;
  @bindable({
    defaultBindingMode: bindingMode.oneWay
  }) title = '';
  constructor(element) {
    this.element = element;
  }
  attached() {
    // console.log('[MdTab] attached', 'forElement', this.forElement, this.tab)
  }
  detached() { }
  forElementChanged(newValue) {
    // console.log('[MdTab] forElementChanged', 'newValue', newValue)
  }
}

@bindable({
  name: 'tabs',
  defaultBindingMode: bindingMode.oneWay
})
@customElement('md-tabs')
@inject(Element)
@inlineView(`
  <template>
    <ul class="tabs">
      <content></content>
    </ul>
  </template>
`)
export class MdTabsElement {
  constructor(element) {
    this.element = element;
  }
  attached() {
    // console.log('[MdTabs]', 'attached', this.tabs)
    $(this.element).tabs();
  }
  detached() {
    // no destroy handler in tabs :-(
  }
}

@customAttribute('md-tabs')
@inject(Element)
export class MdTabs {
  constructor(element) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
    this.tabClassSetters = [];
  }
  attached() {
    this.classSetter.addClasses('tabs');

    let children = this.element.querySelectorAll('li');
    [].forEach.call(children, child => {
      let setter = new CssClassSetter(child);
      setter.addClasses('tab');
      this.tabClassSetters.push(setter);
    });

    $(this.element).tabs();

    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.addEventListener('click', this.fireTabSelectedEvent.bind(this));
    });
  }
  detached() {
    this.classSetter.removeClasses('tabs');

    // no destroy handler in tabs

    this.tabClassSetters.forEach(setter => {
      setter.removeClasses('tab');
    });
    this.tabClassSetters = [];
    let childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, a => {
      a.removeEventListener('click', this.fireTabSelectedEvent.bind(this));
    });
  }
  fireTabSelectedEvent(e) {
    let href = $(e.target).attr('href');
    fireMaterializeEvent(this.element, 'selected', href);
  }
}

@customAttribute('md-waves')
@bindable({
  name: 'color',
  defaultBindingMode: bindingMode.oneTime
})
@inject(Element)
export class MdWaves {
  constructor(element) {
    this.element = element;
    this.classSetter = new CssClassSetter(this.element);
  }

  attached() {
    let classes = ['waves-effect'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.classSetter.addClasses(classes);
    Waves.attach(this.element);
  }

  detached() {
    let classes = ['waves-effect'];
    if (this.color) {
      classes.push(`waves-${this.color}`);
    }

    this.classSetter.removeClasses(classes);
  }
}
