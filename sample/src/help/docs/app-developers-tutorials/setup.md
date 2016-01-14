<br>

### 2. Setup
<br>

Most people like explanations that are done in the context of doing what is just being explained - so let's do something very simple as the first step in showing how to use KendoUI bridge to add several interesting pages rendering KendoUI controls to the well known application: **Aurelia Skeleton Navigation**, a starter kit for building a standard navigation-style app with Aurelia.
<br>

Get it from **[here](https://github.com/aurelia/skeleton-navigation)** and use the Download ZIP method so we do not have to deal with Git issues in this simple context. After downloading this application, extract its content into the folder conveniently named `skeleton-navigation-kendo` and use the instructions to build and run this app. Specifically, assuming that you already have the NodeJS, jspm and gulp installed, this application should be running after you execute
<br>

```
npm install
jspm install
gulp watch
```
<br>
and subsequently browse to http://localhost:9000, resulting with the following:
<br>
<br>

<p align=center>
  <img src="http://i.imgur.com/kZ9dCzC.png"></img>
 <br><br>
 Image 1
</p>

Now, we want to add several (four) additional pages to this application that would show KendoUI **autocomplete**, **button** and **grid** components ( the last one shown below rendered in Material black theme:)


<p align=center>
  <img src="http://i.imgur.com/kaDmsH5.png"></img>
 <br><br>
 Image 2
</p>

* * *

At this point, while following the series of steps described next, it is assumed that you have the KendoUI package already installed on your computer as described in the HAVING KENDOUI ALREADY: VENDORS type of installation (Image 3 below):
<br>
<br>

<p align=center>
  <img src="http://i.imgur.com/GAWgTsM.png"></img>
 <br><br>
 Image 3
</p>

<br>

and that you executed all 8 steps (partially) shown on image 3 above. While all of them are equally important, at this point verify that your  `main.js` class looks like this:
<br>
<br>
```javascript
import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

  aurelia.start().then(a => a.setRoot());
}

```

<br>
<br>

as this will ensure that the application we are about to augment from its original form, loads the Aurelia KendoUI bridge (named plugin in the above code).

<br>

The next screenshot depicts the final UI for the application we are about to create, with four additional menubar items

    - KendoUI autocomplete
    - KendoUI button
    - KendoUI chart
    - KendoUI grid

<br>

<p align=center>
  <img src="http://i.imgur.com/SwhrDwY.png"></img>
 <br><br>
 Image 4
</p>
<br>
In order to clearly separate the added code from the original Aurelia Navigation Skeleton, the original project structure is changed to this:

<br>

<p align=center>
  <img src="http://i.imgur.com/CRnYzV0.png"></img>
 <br><br>
 Image 5
</p>

<br>

As the last actions in this **Setup** section of the tutorial, you need to make the following changes, that are indicated in the **Modified code** section of Image 5 above

<br>
##### File `app.html`
<br>
```html
<template>
  <require from="nav-bar.html"></require>
  <require from="bootstrap/css/bootstrap.css"></require>
  <require from="kendo-ui/styles/kendo.common.min.css"></require>
  <require from="kendo-ui/styles/kendo.bootstrap.min.css"></require>

  <nav-bar router.bind="router"></nav-bar>

  <div class="page-host">
    <router-view></router-view>
  </div>
</template>

```

<br>
<br>

##### File `app.js`

<br>

```javascript
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'],   name: 'welcome',      moduleId: 'welcome',                              nav: true, title: 'Welcome' },
      { route: 'users',           name: 'users',        moduleId: 'users',                                nav: true, title: 'Github Users' },
      { route: 'k-autocomplete',  name: 'k-button',     moduleId: 'kendoui/autocomplete/k-autocomplete',  nav: true, title: 'KendoUI autocomplete' },
      { route: 'k-button',        name: 'k-button',     moduleId: 'kendoui/button/k-button',              nav: true, title: 'KendoUI button' },
      { route: 'k-chart',         name: 'k-chart',      moduleId: 'kendoui/chart/k-chart',                nav: true, title: 'KendoUI chart' },
      { route: 'k-grid',          name: 'k-grid',       moduleId: 'kendoui/grid/k-grid',                  nav: true, title: 'KendoUI grid' },
      { route: 'child-router',    name: 'child-router', moduleId: 'child-router',                         nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}

```

<br>
<br>

##### File `main.js`

<br>

```
import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-plugin', (kendo) => kendo.pro());

  aurelia.start().then(a => a.setRoot());
}
```
<br>
<br>

* * *
<br>
#### Next page: [Autocomplete component](#/help/docs/app_developers_tutorials/3._autocomplete_component)

