<br>

### 3. Autocomplete component
<br>

Citation from **[Aurelia Documentation](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.0.7/doc/article/creating-components)**

> In Aurelia, user interface components are composed of view and view-model pairs. The view is written with HTML and is rendered into the DOM. The view-model is written with ES 2016 and provides data and behavior to the view. The Templating Engine along with Dependency Injection are responsible for creating these pairs and enforcing a predictable lifecycle for the component. Once instantiated, Aurelia's powerful databinding links the two pieces together allowing changes in your view-model to be reflected in the view and changes in your view to reflected in your view-model. This Separation of Concerns is great for developer/designer collaboration, maintainability, architectural flexibility, and even source control.
To create a UI component, you need only create two files, one for each of the component parts.

##### View:  k-autocomplete.html


```html
<template>
  <section>
        <br>
        <h3>Basic KendoUI Autocomplete sample</h3>

        <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/autocomplete">See KendoUI Bridge autocomplete folder for more details</a>
        <br>
        <br>

        <p><strong>People:</strong></p>
        <input k-autocomplete="k-data-source.bind: items;" style="width: 300px;">
        <br>
        <br>
        <br>
        <p class="demo-hint" style="word-break: break-all">Type a name, available values in the list are: ${ items } </p>
  </section>
</template>
```
<br>
<br>

where the single statement  `<input k-autocomplete="k-data-source.bind: items;" style="width: 300px;">`

<br>

is responsible for the instantiation of the autocomplete control (highlighted in the blue rectangle on the Image 1 below):

<br>

<p align=center>
  <img src="http://i.imgur.com/dG1awSb.png"></img>
 <br><br>
 Image 1
</p>

<br>
<br>


**Observe** that the custom atttribute defined on this single statement (`k-datasource`) coupled with the use of Aurelia `.bind` feature maps the value of the `k-datasource` attribute with the array `items` defined in the matching view model (shown below)
<br>
<br>

##### View model k-autocomplete.js

```javascript
export class BasicUse {
  items = [
    'Charles',
    'Jedd',
    'Nikolaj',
    'Jeroen',
    'David',
    'Rob',
    'Matt',
    'Patrick',
    'Jason',
    'Martin',
    'Fredrick',
    'Alex'
  ]
}
```

<br>


* * *
<br>
#### More details: [Components catalog](#/samples/autocomplete)
#### Next page: &nbsp;&nbsp; [Button component tutorial](#/help/docs/app_developers_tutorials/4._button_component)

