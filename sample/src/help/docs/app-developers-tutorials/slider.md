<br>

### 5. Slider
<br>
Unlike the previous two controls, Slider is represented (by Aurelia Materialize bridge) as an Aurelia custom element (component) - since slider is not a native HTML element.

<br>

##### View: md-slider.html

```html
<template>
  <h4>Materialize slider demo</h4>
  <div class="container">
    <div class="row">
      <div class="col s8">
        <md-slider>
          <li repeat.for="slide of slides">
            <img src.bind="slide.img" />
            <div class="caption ${slide.align + '-align'}">
              <h3>${slide.heading}</h3>
              <h5 class="light grey-text text-lighten-3">${slide.subheading}</h5>
            </div>
          </li>
        </md-slider>
      </div>
    </div>
  </div>
</template>
```
<br>
<br>
Here is this view rendered by the application associated with this tutorial.
<br><br>

<p align=center>
  <img src="http://i.imgur.com/uH0kQCn.png" class="responsive-img"></img>
 <br><br>
Image 1
</p>

<br>
The HTML code in the view is a good demonstration of Aurelia's support for declarative programming - all attributes of the slider are declared there and bound to view model shown next.

<br>

##### View model: md-slider.js

```javascript
export class MdSliderDemo {
  slides = [
    { img: 'http://lorempixel.com/580/250/nature/1', align: 'center', heading: 'This is our big Tagline!', subheading: 'Here is our small slogan.' },
    { img: 'http://lorempixel.com/580/250/nature/2', align: 'left', heading: 'Left Aligned Caption', subheading: 'Here is our small slogan.' },
    { img: 'http://lorempixel.com/580/250/nature/3', align: 'right', heading: 'Right Aligned Caption', subheading: 'Here is our small slogan.' },
    { img: 'http://lorempixel.com/580/250/nature/4', align: 'center', heading: 'This is another big Tagline!', subheading: 'Here is our small slogan.' }
  ];
}

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
      { route: 'md-slider',  name: 'md-slider', moduleId: 'material/slider/md-slider', nav: true, title: 'Slider' }
    ]);

    this.router = router;
  }
}


```

```
<br>
* * *
<br>
#### More details: [Components catalog](#/samples/chart)
#### Next page: &nbsp;&nbsp; [Collapsible component tutorial](#/help/docs/app_developers_tutorials/6._collapsible_component)
