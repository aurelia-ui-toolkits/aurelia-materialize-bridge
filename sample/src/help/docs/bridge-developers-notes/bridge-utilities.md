<br>

<a name="top"></a>
### 2. Bridge utilities

<br>

This document describes the use of several utilities added by Aurelia UI Toolkits team to make the task of creating an Aurelia plugin simpler.
<br><br>

[[`constants.js`](#constants)]
In order to make the plugin a bit more maintainable, we use the [`constants.js`](#constants) file throughout the entire plugin. Currently, this file contains the conventions we use for the plugin. More specifically, the `k-on-` events and `k-` property conventions.
<br><br>

[[`decorators.js`](#decorators)]
The [`decorators.js`](#decorators) file contains decorators used within multiple wrappers. Currently, this file contains the `generateBindables` decorator, used to create `@bindable` properties for a particular Kendo control.
<br><br>

[[`events.js`](#decorators)]
In several parts of the `aurelia-kendoui-plugin` codebase, events are dispatched. In order to keep the logic of dispatching events in one place, we have put these functions in the [`events.js`](#decorators) file.
<br><br>

[[`options.js`](#options)]
Kendo can act up when `options` objects are used with properties that are `undefined`. We use the `pruneOptions` function in [`options.js`](#options) to prevent these issues.
<br><br>

[[`template-compiler.js`](#template-compiler)]
The `TemplateCompiler` (found in the [`template-compiler.js`](#template-compiler) file) is responsible for compiling and cleaning up views requested by Kendo. It uses the `enhance` capability of Aurelia and hooks into Kendo with the `angular` callback.
<br><br>

[[`util.js`](#utils)]
The [`util.js`](#utils) file contains useful functions that are used in various parts of the codebase. For example, it contains functions to hyphenate and unhyphenate strings.
<br><br>

[[`widget-base.js`](#widget-base)]
The `WidgetBase` is the base class from which all wrappers inherit. The purpose of the `WidgetBase` is to extract common logic from  the wrappers.
<br><br>

* * *

<br><br>
<a name="constants"></a>
File `constants.js`
<br>
```javacript
export const constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-'
};
```
<br>
[Go to top](#top)
* * *
<br>

<a name="decorators"></a>
File `decorators.js`
<br>
```javacript
import {BindableProperty, HtmlBehaviorResource} from 'aurelia-templating';
import {metadata} from 'aurelia-metadata';
import {getBindablePropertyName} from './util';

/**
* Creates a BindableProperty for every option defined in a Kendo control
* in the option property of a Kendo control
* @param controlName The Kendo control of which the options should be converted into bindable properties
*/
export function generateBindables(controlName: string) {
  return function(target, key, descriptor) {
    // get all options defined in the Kendo control
    let options = jQuery.fn[controlName].widget.prototype.options;

    // get or create the HtmlBehaviorResource
    // on which we're going to create the BindableProperty's
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let optionKeys = Object.keys(options);
    optionKeys.push('dataSource');

    for (let option of optionKeys) {
      // set the name of the bindable property to the option
      let nameOrConfigOrTarget = {
        name: getBindablePropertyName(option)
      };

      let prop = new BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}
```
<br>
[Go to top](#top)
* * *
<br>

<a name="events"></a>
File `events.js`
<br>
```javacript
import {constants} from './constants';

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
* Fire DOM event on an element with the k-on prefix
* @param element The Element which the DOM event will be fired on
* @param name The Event's name, without k-on prefix
* @param data Addition data to attach to an event
*/
export function fireKendoEvent(element: Element, name: string, data? = {}) {
  return fireEvent(element, `${constants.eventPrefix}${name}`, data);
}
```
<br>
[Go to top](#top)
* * *
<br>

<a name="options"></a>
File `options.js`
<br>
```javacript
/**
* Implicitly setting options to "undefined" for a kendo control can break things.
* this function prunes the supplied options object and removes values that
* aren't set to something explicit (i.e. not null)
* @param options the options object to prune the properties of
*/
export function pruneOptions(options: any) {
  let returnOptions = {};

  for (let prop in options) {
    if (options.hasOwnProperty(prop) && options[prop] !== null) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}
```
<br>
[Go to top](#top)
* * *
<br>

<a name="template-compiler"></a>
File `template-compiler.js`
<br>
```javacript
import {inject} from 'aurelia-framework';
import {TemplatingEngine} from 'aurelia-templating';

/**
* An adaptor which uses Aurelia's enhance capability to
* compile any template Kendo wants to have compiled
*/
@inject(TemplatingEngine)
export class TemplateCompiler {

  /**
  * We don't need to initialize the TemplateCompiler every time a Kendo controls
  * is initialized
  */
  isInitialized = false;

  constructor(templatingEngine) {
    this.templatingEngine = templatingEngine;
  }

  /**
  * Initialize the template compiler and
  * patch the angular property to retrieve compilation requests
  * from Kendo controls
  * @param $parent The overrideContext to use when a template gets compiled
  */
  initialize() {
    if (this.isInitialized) return;

    // all controls derive from kendo.ui.Widget
    // override the angular property on these objects, and point it towards handleTemplateEvents
    let _this = this;
    kendo.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };

    this.isInitialized = true;
  }

  /**
  * Gets called by Kendo, and filters out compile and cleanup events,
  * then calls the compile or cleanup function with the needed arguments
  * @param _event Events like 'compile' or 'cleanup'
  * @param _args optional array of dataitems
  */
  handleTemplateEvents(widget, _event: string, _args?) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    let $parent = widget._$parent;

    if (!$parent) return;

    let args = _args();
    let elements = args.elements; // extract elements from the args
    let data = args.data; // extract the dataitems from the args

    switch (_event) {
    case 'compile':
      // we need to pass elements and data to compile
      // so that Aurelia can enhance this elements with the correct
      // binding context
      this.compile($parent, elements, data);
      break;

    case 'cleanup':
      // we don't care about dataitems when we do the cleanup
      // so we just pass in the DOM elements
      this.cleanup(elements);
      break;

    default:
      break;
    }
  }

  /**
  * loops through each element, and find the matching dataitem
  * and calls enhanceView(element, dataItem) for each element there is
  * @param elements an array of Elements or a jQuery selector
  * @param data optionally an array of dataitems
  */
  compile($parent, elements, data) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let ctx;

      if (data && data[i]) {
        let _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each((index, elem) => this.enhanceView($parent, elem, ctx));
      } else {
        this.enhanceView($parent, element, ctx);
      }
    }
  }

  /**
  * uses the enhance function of Aurelia's TemplatingEngine
  * to "compile" existing DOM elements
  * @param element The Element to compile
  * @param ctx The dataitem (context) to compile the Element with
  */
  enhanceView($parent, element, ctx) {
    let view = this.templatingEngine.enhance(element);

    view.bind(ctx, $parent); // call the bind() function on the view with the dataItem we got from Kendo
    view.attached(); // attach it to the DOM

    // when we do cleanup, we need to get the view instance
    // so we can call detached/unbind
    // so we store this view instance in the DOM element using JQuery.data
    $(element).data('viewInstance', view);
  }

  /**
  * loops through each element kendo asks us to clean up
  * calls cleanupView() for each element
  * @param element An array of elements
  */
  cleanup(elements) {
    if (!elements) return;

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      this.cleanupView(element);
    }
  }

  /**
  * cleans up the view kendo has asked us to clean up
  */
  cleanupView(element) {
    // extract Aurelia's View instance from the element
    // we stored this in the enhanceView function
    let view = $(element).data('viewInstance');
    if (!view) return;

    // unbind and detach the view
    view.detached();
    view.unbind();
  }
}
```
<br>
[Go to top](#top)
* * *
<br>

<a name="utils"></a>
File `utils.js`
<br>
```javacript
const capitalMatcher = /([A-Z])/g;
import {constants} from './constants';

/**
* prepends hyphen and lowercases the input char
* @param char the char to add an hyphen in front for
*/
export function addHyphenAndLower(char: string): string {
  return '-' + char.toLowerCase();
}

/**
* hyphenates a string
* kTest -> k-test
* @param name the string to hyphenate
*/
export function _hyphenate(name: string): string {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

/**
* unhyphenate's a string
* k-test -> kTest
*/
export function _unhyphenate(name: string): string {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
* prepends prefix and unhyphenates the resulting string
* test -> kTest
*/
export function getBindablePropertyName(propertyName: string): string {
  let name = `${constants.bindablePrefix}${propertyName}`;

  return _unhyphenate(name);
}

/**
* converts all attributes found on an element to matching Kendo events
* returns a list of these Kendo events
*/
export function getEventsFromAttributes(element: Element): string[] {
  let attributes = Array.prototype.slice.call(element.attributes);
  let events: string[] = [];

  for (let attribute of attributes) {
    let attributeName = attribute.name;
    if (!attributeName.startsWith(constants.eventPrefix)) continue;

    // kendo-my-event.trigger -> my-event.trigger
    let hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

    // my-event.trigger -> my-event
    let withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

    // my-event -> myEvent
    let camelCased = _unhyphenate(withoutTriggerDelegate);

    events.push(camelCased);
  }

  return events;
}
```
<br>
[Go to top](#top)
* * *
<br>

<a name="widget-base"></a>
File `widget-base.js`
<br>
```javacript
import {pruneOptions} from './options';
import {fireKendoEvent} from './events';
import {getEventsFromAttributes, _hyphenate, getBindablePropertyName} from './util';
import {TemplateCompiler} from './template-compiler';
import {TaskQueue} from 'aurelia-framework';
import {Container} from 'aurelia-dependency-injection';

/**
* Abstraction of commonly used code across wrappers
*/
export class WidgetBase {

  /**
  * the Kendo widget after initialization
  */
  widget: any;

  /**
  * The element of the custom element, or the element on which a custom attribute
  * is placed. DOM events will be raised on this element
  */
  element: Element;

  /**
  * Used to prevent race conditions when events are raised before
  * all bindings have been updated.
  */
  taskQueue: TaskQueue;

  /**
  * The element on which a Kendo widget is initialized
  * This is the "element" by default
  */
  target: Element;

  /**
  * The Kendo control's name, such as kendoGrid or kendoButton
  */
  controlName: string;

  /**
  * The parent context (used for template compilation)
  */
  $parent: any;

  /**
  * The templating compiler adaptor
  */
  templateCompiler: TemplateCompiler;

  constructor(controlName: string, element: Element) {
    // access root container
    let container = Container.instance;
    this.taskQueue = container.get(TaskQueue);
    this.templateCompiler = container.get(TemplateCompiler);
    this.templateCompiler.initialize();

    this.element = element;

    this.target = this.element;

    this.controlName = controlName;

    // the BindableProperty's are created by the generateBindables decorator
    // but the values of the bindables can only be set now the class has been
    // instantiated
    this.setDefaultBindableValues();
  }


  bind(ctx) {
    this.$parent = ctx;
  }

  /**
  * collects all options objects
  * calls all hooks
  * then initialized the Kendo control as "widget"
  */
  _initialize() {
    if (!this.$parent) {
      throw new Error('$parent is not set. Did you call bind(ctx) on the widget base?');
    }

    // get the jQuery selector of the target element
    let target = jQuery(this.target);

    // get the constructor of the Kendo control
    // equivalent to jQuery("<div>").kendoChart
    let ctor = target[this.controlName];

    // generate all options, including event handlers
    let options = this._getOptions(ctor);

    // before initialization callback
    // allows you to modify/add/remove options before the control gets initialized
    this._beforeInitialize(options);

    // instantiate the Kendo control, pass in the target and the options
    this.widget = ctor.call(target, options).data(this.controlName);

    this.widget._$parent = this.$parent;

    this._initialized();
  }

  /**
  * hook that allows a wrapper to modify options before
  * the Kendo control is initialized
  * @param options the options object that a wrapper can modify
  */
  _beforeInitialize(options) {

  }

  /**
  * hook that allows a wrapper to take actions after the widget is initialized
  */
  _initialized() {

  }

  /**
  * Re-initializes the control
  */
  recreate() {
    this._initialize();
  }

  /**
  * combines all options objects and properties into a single options object
  */
  _getOptions(ctor) {
    let options = this.getOptionsFromBindables();
    let eventOptions = this.getEventOptions(ctor);

    // merge all option objects together
    // - options property on the wrapper
    // - options compiled from all the bindable properties
    // - event handler options
    return Object.assign({}, this.options, pruneOptions(options), eventOptions);
  }

  /**
  * loops through all bindable properties generated by the @generateBindables decorator
  * and puts all these values in a single options object
  */
  getOptionsFromBindables() {
    let props = jQuery.fn[this.controlName].widget.prototype.options;
    let options = {};

    for (let prop of Object.keys(props)) {
      options[prop] = this[getBindablePropertyName(prop)];
    }

    if (this.kDataSource) {
      options.dataSource = this.kDataSource;
    }

    return options;
  }

  /**
  * sets the default value of all bindable properties
  *  gets the value from the options object in the Kendo control itself
  */
  setDefaultBindableValues() {
    let props = jQuery.fn[this.controlName].widget.prototype.options;

    for (let prop of Object.keys(props)) {
      this[getBindablePropertyName(prop)] = props[prop];
    }
  }

  /**
  * convert attributes into a list of events a user wants to subscribe to.
  * These events are then subscribed to, which when called
  * calls the fireKendoEvent function to raise a DOM event
  */
  getEventOptions(ctor) {
    let options = {};
    let allowedEvents = ctor.widget.prototype.events;

    // iterate all attributes on the custom elements
    // and only return the normalized kendo event's (dataBound etc)
    let events = getEventsFromAttributes(this.element);

    events.forEach(event => {
      // throw error if this event is not defined on the Kendo control
      if (!allowedEvents.includes(event)) {
        throw new Error(`${event} is not an event on the ${this.controlName} control`);
      }

      // add an event handler 'proxy' to the options object
      options[event] = e => {
        this.taskQueue.queueMicroTask(() => {
          fireKendoEvent(this.target, _hyphenate(event), e);
        });
      };
    });

    return options;
  }

  /**
  * destroys the widget when the view gets detached
  */
  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}

```
<br>
[Go to top](#top)
