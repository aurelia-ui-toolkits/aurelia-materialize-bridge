<br>

### 3. Select component
<br>

Citation from **[Aurelia Documentation](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.0.7/doc/article/creating-components)**

> In Aurelia, user interface components are composed of view and view-model pairs. The view is written with HTML and is rendered into the DOM. The view-model is written with ES 2016 and provides data and behavior to the view. The Templating Engine along with Dependency Injection are responsible for creating these pairs and enforcing a predictable lifecycle for the component. Once instantiated, Aurelia's powerful databinding links the two pieces together allowing changes in your view-model to be reflected in the view and changes in your view to reflected in your view-model. This Separation of Concerns is great for developer/designer collaboration, maintainability, architectural flexibility, and even source control.

To create a UI component, you need only create two files, one for each of the component parts.

##### View:  md-select.html


```html
<template>
  <h4>Materialize select demo</h4>
  <div class="row">
    <div class="col s4">
      <select md-select="selected.two-way: selectedMeal;">
        <option>Select your meal</option>
        <option repeat.for="meal of food" model.bind="meal">
          ${meal.name}
        </option>
      </select>
    </div>
    <div show.bind="selectedMeal" class="col s4">
      You selected: ${ selectedMeal }!
    </div>
  </div>
</template>
```
<br>
<br>

where the single statement  `<select md-select="selected.two-way: selectedMeal;">`

is responsible for the instantiation of the select control:

<br>

<p align=center>
  <img src="http://i.imgur.com/LEGsSjU.png" class="responsive-img"></img>
 <br><br>
 Image 1
</p>

<br>
<br>


**Observe** that the custom atttribute defined on this single statement (`selected`) coupled with the use of Aurelia `.bind` feature maps the value of the `selected` attribute with the variable`selectedMeal` defined in the matching view model (shown below)
<br>
<br>

##### View model md-select.js

```javascript
export class Food {
  food = [
    { id: 0, name: 'Pizza' },
    { id: 1, name: 'Cake' },
    { id: 2, name: 'Steak' },
    { id: 3, name: 'Pasta' },
    { id: 4, name: 'Fries' }
  ];
  selectedMeal = null;
}

```

<br>

Finally, add the new component to your router-configuration:

#### File `app.js`

```javascript
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'md-select',  name: 'md-select', moduleId: 'material/select/md-select', nav: true, title: 'Select' }
    ]);

    this.router = router;
  }
}

```

* * *
<br>
#### More details: [Components catalog](#/samples/autocomplete)
#### Next page: &nbsp;&nbsp; [Button component tutorial](#/help/docs/app_developers_tutorials/4._button_component)
