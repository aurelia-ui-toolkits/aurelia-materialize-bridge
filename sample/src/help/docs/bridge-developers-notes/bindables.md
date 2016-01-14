<br>

### 1. Auto generation of bindable properties
<br>

Before discovering the optimization described in this note, Aurelia-KendoUI control wrappers had this "classic" form shown below (using KendoUI button control as the model). The pattern consists of enumerating all control attributes that we want to expose to the view, decorate them with the @bindable decorator and made them available to the view via `return Object.assign({}, this.options, options);` statement

<br>

```
import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton {

  @bindable enable = true;
  @bindable icon;
  @bindable imageUrl;
  @bindable spriteCssClass;

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  getOptions() {
    let options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass,
      click: (e) => fireKendoEvent(this.element, 'click', e)
    });

    return Object.assign({}, this.options, options);
  }
}
```
<br> <br>

After we had made a couple of these wrappers, some patterns started to emerge. We noticed that almost all bindable properties had to be passed to the Kendo's (native) control. We also wanted to see if these bindable properties could be generated somehow, because looking them up in Telerik's docs, and setting the correct default value was a hassle and took a lot of time, and resulted in a couple of avoidable errors.
<br>

We looked at how the **[Angular-Kendo implementation](http://docs.telerik.com/kendo-ui/AngularJS/introduction)** did this, and found that each Kendo control has an `options` object, containing all supported properties and their default values. For example, when you run `kendo.ui.Button.prototype.options` in your Chrome's console, this is the result:
<br>

![Imgur](http://i.imgur.com/FtCMiyc.png)

Every Kendo control (class) has this options object defined within. We can iterate over the properties of this object, and create a bindable property for each one. But before we dive into that part, let's take a look at other ways to get to this object. In our wrappers, we initialized the kendo control via `$(div).kendoButton()` or `$(div).kendoGrid()`. So, we wanted to get the properties of a Kendo control via `kendoGrid` or `kendoButton`.
<br>

Luckily this was possible with this syntax: `jQuery.fn[controlName].widget.prototype.options` where controlName is 'kendoGrid' or 'kendoButton' or any other Kendo control. The result is the same, it is an object with properties that we can iterate over.
<br>

Now, instead of using the `@bindable` property decorator, we needed to generate bindable properties from code. The old syntax was this: `@bindable kEnable = true;`. This is a [class field](https://github.com/jeffmo/es-class-fields-and-static-properties#es-class-fields--static-properties) named `kEnable`, with a default value of `true`, and made bindable by the `@bindable` decorator.
<br>

Because we wanted to do this dynamically, we had to look at the implementation of the bindable decorator, and possibly create our own. We found the decorator in the `decorators.js` file of the `aurelia-templating` repository. It looks like this:
<br>

```javascript
export function bindable(nameOrConfigOrTarget?: string | Object, key?, descriptor?): any {
  let deco = function(target, key2, descriptor2) {
    let actualTarget = key2 ? target.constructor : target; //is it on a property or a class?
    let r = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, actualTarget);
    let prop;

    if (key2) { //is it on a property or a class?
      nameOrConfigOrTarget = nameOrConfigOrTarget || {};
      nameOrConfigOrTarget.name = key2;
    }

    prop = new BindableProperty(nameOrConfigOrTarget);
    return prop.registerWith(actualTarget, r, descriptor2);
  };

  if (!nameOrConfigOrTarget) { //placed on property initializer with parens
    return deco;
  }

  if (key) { //placed on a property initializer without parens
    let target = nameOrConfigOrTarget;
    nameOrConfigOrTarget = null;
    return deco(target, key, descriptor);
  }

  return deco; //placed on a class
}
```
<br>

Now, we extracted the most important parts of this decorator implementation, and it turned out to be quite simple to create a bindable property from any decorator:
<br>

```
let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
let nameOrConfigOrTarget = { name: 'myBindablePropertyName' };
prop = new BindableProperty(nameOrConfigOrTarget);
return prop.registerWith(target, behaviorResource, descriptor2);
```
<br>

That's all you need to create a bindable property. Now that we knew this was possible, we started on our own decorator that would generate all bindables for us. We needed to pass along 'kendoGrid' or 'kendoButton' so that the decorator could look up the properties it needs to generate. We called it `generateBindables` and could use it like this:
<br>

```
@customAttribute('au-kendo-button')
@generateBindables('kendoButton')
@inject(Element)
export class AuKendoButton {

  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  }

  getOptions() {
    let options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass,
      click: (e) => fireKendoEvent(this.element, 'click', e)
    });

    return Object.assign({}, this.options, options);
  }
}
```
<br>

Note, the `@bindable` property declarations are gone, and the `@generateBindables()` decorator is used instead. Our full implementation of this decorator can be found [here](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/master/src/common/decorators.js).
<br>

We came to the conclusion that it was not possible to set the default value of a bindable property from the `generateBindables` decorator, because the instance of the actual wrapper was not available. We decided to set these default values from the constructor of each wrapper. Because that would lead to duplicate code, we extracted this into a base class, the `WidgetBase`. The `WidgetBase`'s implementation of this process looks like this:
<br>

```
  setDefaultBindableValues() {
    let props = jQuery.fn[this.controlName].widget.prototype.options;

    for (let prop of Object.keys(props)) {
      this[getBindablePropertyName(prop)] = props[prop];
    }
  }
```
<br>
We retrieve the `options` from the Kendo control, which we talked about earlier, and iterate over this object (just like we did in the `generateBindable` decorator), and set the default value for each property.
<br>

* * *
