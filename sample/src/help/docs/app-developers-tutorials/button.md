<br>

### 4. Button
<br>

##### View: k-button.html

```html
<template>
    <require from="./k-button.css"></require>
    <section>
        <br>
        <h3>Basic KendoUI Button API sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/button">See KendoUI Bridge button folder for more details</a>
        <br>
        <br>

        <button k-button="k-enable.bind: enabled; k-icon: ungroup" k-on-click.trigger="test()">Kendo UI Button</button>
        <br>
        <br>
        <button k-button click.delegate="disable()">Disable</button>
        &nbsp;&nbsp
        <button k-button click.delegate="enable()">Enable</button>

    </section>
</template>
```
<br>

Just like in the case of the Autocomplete control, the statement

<br>
&nbsp; &nbsp; &nbsp; &nbsp; `<button k-button="k-enable.bind: enabled; k-icon: ungroup" k-on-click.trigger="test()">Kendo UI Button</button>`

<br>


results with the instantiation of the button:
<br>
<br>

<p align=center>
  <img src="http://i.imgur.com/7JVqTSU.png"></img>
 <br><br>
 Image 1
</p>

<br>

**Observe** that the button control, just like the autocomplete control are HTML native elements and that KendoUI Aurelia bridge adds several custom attributes (`k-enable`, `k-icon` that are bound to [KendoUI button](http://docs.telerik.com/kendo-ui/api/javascript/ui/button))  "matching native properties" . Note also the definition of the event triggers that are activating the code in the view model:


<br>

##### View model:  k-button.js

```javascript
export class ButtonApi {
    enabled = true;

    disable() {
      this.enabled = false;
    }

    enable() {
      this.enabled = true;
    }

    test() {
      alert('You clicked me');
    }
}
```

<br>


##### File k-button.css

```
.demo-section {
    text-align: center;
}
.box .k-textbox {
    margin: 0;
    width: 80px;
}
```

<br>
* * *
<br>
#### More details: [Components catalog](#/samples/button)
#### Next page: &nbsp;&nbsp; [Chart component tutorial](#/help/docs/app_developers_tutorials/5._chart_component)

