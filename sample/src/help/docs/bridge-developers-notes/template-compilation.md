<br>

### 6. Template compilation
<br>


#### Introduction
Many Kendo controls allow developers to use templates. Take the Autocomplete control as an example:

<p align=center>
  <img src="http://i.imgur.com/Bem5W2W.png"></img>
 <br><br>
Image 1
</p>

<br>

The list items of this autocomplete control are customized via the `template` property of the control.
<br>

```javascript
    $("#customers").kendoAutoComplete({
        template: '<span class="k-state-default" style="background-image: url(\'../content/web/Customers/#:data.CustomerID#.jpg\')"></span>' +
                  '<span class="k-state-default"><h3>#: data.ContactName #</h3><p>#: data.CompanyName #</p></span>'
    });
```

<br>

More about Kendo's templating system can be found **[here](http://docs.telerik.com/kendo-ui/framework/templates/overview)**.
<br><br>

#### Aurelia's templating system
Aurelia also has a templating system, with a different syntax than Kendo's. We wanted to allow developers to be able to use Aurelia's templating syntax and all the features that come with Aurelia's system. This integration between Kendo controls and the Aurelia framework has become one of the nicest features of this Aurelia KendoUI bridge.
<br>

So we wanted to be able to do something like this:
<br>
```html
    $("#customers").kendoAutoComplete({
        template: '${data.ContactName} <button k-button>Call</button>'
    });
```
<br>

Note that we used the `${data.ContactName}` interpolation expression **and** the `k-button` custom attribute.
<br><br>

#### The hook
As an example of a good design (and existing AngularJS interface) KendoUI implements a hook for Angular to compile views. Once we contacted Telerik they graciously provided more information about this hook.
<br>

Kendo controls which support template customization invoke "Angular interface" to compile and cleanup views. The function responsible for invoking this interface looks like this:
<br>

```javascript
        _angularItems: function(cmd) {
            var that = this;
            that.angular(cmd, function(){
                return {
                    elements: that.items(),
                    data: $.map(that.dataItems(), function(dataItem){
                        return { dataItem: dataItem };
                    })
                };
            });
        }
```
<br>

The Angular function is called with two parameters: the command and an object with additional data such as a collection of HTML elements and a collection of dataItems. We'll explain more about how it is called in the next chapter.
<br>

We made a class that is responsible for patching this Angular function, and handle any function call made by a Kendo control. This is our **[Template Compiler](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/163e89fd042a1382a44c746d4494e38026379b24/src/common/template-compiler.js)** being discussed in this note.
<br>

This **[code section](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/163e89fd042a1382a44c746d4494e38026379b24/src/common/template-compiler.js#L33-L38)**, replicated below for reader's convenience, shows how the Angular function is patched.
<br>

```javascript
    ...
    kendo.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    ...
```
<br>

Note that we are not using a [fat arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) because the caller is the Kendo control, and we want to keep that "context", as we need pull data of of it, in a different part of the TemplateCompiler.
<br><br>

#### How is the Angular hook called?

As we have shown before, the code calling the Angular hook looks like this:
<br>

```javascript
        _angularItems: function(cmd) {
            var that = this;
            that.angular(cmd, function(){
                return {
                    elements: that.items(),
                    data: $.map(that.dataItems(), function(dataItem){
                        return { dataItem: dataItem };
                    })
                };
            });
        }
```
<br>

This means that our `TemplateCompiler` (which patched the `angular` function) is called with 2 parameters: the command (`cmd`) and an object (we'll call this the `arguments`). The command is a string such "init", "compile" or "cleanup".
<br>

![Imgur](http://i.imgur.com/PO4IlPS.png)

Our `TemplateCompiler` only cares about the "compile" and "cleanup" calls. As you can see in the image above, the compile and cleanup functions are called with arguments containing `elements` and `data`.
<br>

For example, when Kendo wants to have the `<th>` elements compiled of a Kendo Grid, the `angular` function is called with these arguments:

![Imgur](http://i.imgur.com/4vNXu6s.png)
<br><br>

As you can see, the `elements` is an array of HTML elements Kendo wants to have compiled. The `data` are the dataItems that should be used when compiling. For example, the first item of the `data` array belongs to the first item of the `elements` array.
<br>

As another sign of a good design, this is all that Aurelia needs to compile a view.
<br>
<br>

#### Enhance

___To be written ...___

