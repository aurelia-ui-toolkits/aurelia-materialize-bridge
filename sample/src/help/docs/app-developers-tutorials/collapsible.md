<br>

### 6. Collapsible
<br>

##### View: md-collapsible.html

```html
<template>
  <h4>Materialize Collapsible demo</h4>
  <div class="row">
    <div class="col s8">
      <ul md-collapsible="accordion: true; popout: true;">
        <li>
          <div class="collapsible-header"><i class="mdi-image-filter-drama"></i>First</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div class="collapsible-header active"><i class="mdi-maps-place"></i>Second</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
        <li>
          <div class="collapsible-header"><i class="mdi-maps-place"></i>Third</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
        </li>
      </ul>
    </div>
  </div>
</template>

```
<br>

Here is this view rendered by the application associated with this tutorial.
<br><br>


<p align=center>
  <img src="http://i.imgur.com/kcCLiy7.png" class="responsive-img"></img>
 <br><br>
Image 1
</p>

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
      { route: 'md-select',  name: 'md-select', moduleId: 'material/select/md-select', nav: true, title: 'Select' },
      { route: 'md-button',  name: 'md-button', moduleId: 'material/button/md-button', nav: true, title: 'Button' },
      { route: 'md-slider',  name: 'md-slider', moduleId: 'material/slider/md-slider', nav: true, title: 'Slider' },
      { route: 'md-collapsible',  name: 'md-collapsible', moduleId: 'material/collapsible/md-collapsible', nav: true, title: 'Collapsible' }
    ]);

    this.router = router;
  }
}


```

* * *
<br>
#### More details: [Components catalog](#/samples/grid)
#### Next page: &nbsp;&nbsp; [Next actions](#/help/docs/app_developers_tutorials/7._next_actions)
