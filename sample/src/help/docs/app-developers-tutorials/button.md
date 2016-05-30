<br>

### 4. Button and Toasts
<br>

##### View: md-button.html

```html
<template>
  <h4>Materialize button demo</h4>
  <div class="row">
    <div class="col s4">
      <button md-button="disabled.bind: disabled;" click.trigger="showToast()">Materialize Button</button>
    </div>
  </div>
</template>

```
<br>

Just like in the case of the Select control, the statement `<button md-button="disabled.bind: disabled;" click.trigger="showToast()">Materialize Button</button>`

<br>


results with the instantiation of the button:
<br>
<br>

<p align=center>
  <img src="http://i.imgur.com/lf0CQmM.png" class="responsive-img"></img>
 <br><br>
 Image 1
</p>

<br>

**Observe** that the button control, just like the select control are HTML native elements and that Materialize Aurelia bridge adds custom attributes (`md-button`) that are bound to [Materialize button](http://materializecss.com/buttons.html))  "matching native properties" . Note also the definition of the event triggers that are activating the code in the view model:


<br>

##### View model:  md-button.js

```javascript
import { inject } from 'aurelia-dependency-injection';
import { MdToastService } from 'aurelia-materialize-bridge/toast/toastService';

@inject(MdToastService)
export class MdButtonDemo {
  disabled = false;

  constructor(toast) {
    this.toast = toast;
  }

  showToast() {
    this.toast.show('You clicked me!', 2000);
  }
}
```
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
      { route: 'md-button',  name: 'md-button', moduleId: 'material/button/md-button', nav: true, title: 'Button' }
    ]);

    this.router = router;
  }
}


```

<br>
* * *
<br>
#### More details: [Components catalog](#/samples/button)
#### Next page: &nbsp;&nbsp; [Slider component tutorial](#/help/docs/app_developers_tutorials/5._slider_component)
