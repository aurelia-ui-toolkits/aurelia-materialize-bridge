<br>

### 2. Setup
<br>

Most people like explanations that are done in the context of doing what is just being explained - so let's do something very simple as the first step in showing how to use Materialize bridge. We will add several interesting pages rendering Materialize controls to the well known **Aurelia Skeleton Navigation**, a starter kit for building a standard navigation-style app with Aurelia.
<br>

Get it from **[here](https://github.com/aurelia/skeleton-navigation)** and use the Download ZIP method so we do not have to deal with Git issues in this simple context. After downloading this application, extract the contents of the folder named **skeleton-es2016** into the folder conveniently named `skeleton-navigation-materialize` and use the instructions to build and run this app. Specifically, assuming that you already have the NodeJS, jspm and gulp installed, this application should be running after you execute
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
  <img src="http://i.imgur.com/kZ9dCzC.png" class="responsive-img"></img>
 <br><br>
 Image 1
</p>

Next, install aurelia-materialize-bridge as described in the [installation instructions](#/installation) (Image 3 below):
<br>

<p align=center>
  <img src="http://i.imgur.com/znag6xt.png" class="responsive-img"></img>
 <br><br>
 Image 3
</p>

Now, we want to add several (four) additional pages to this application that would show Materialize **select**, **button**, **slider** and **collapsible** components (the last one shown below rendered in its popout variant):

<p align=center>
  <img src="http://i.imgur.com/Kmi4Y3r.png" class="responsive-img"></img>
 <br><br>
 Image 2
</p>

* * *
Before we continue to the next step, we should remove Bootstrap from the app skeleton because we are going to use Materialize css. 
First we need to remove it from the packages with command:
```
jspm uninstall bootstrap
```
And then we remove bootstrap require on some files:

##### File `src/app.html` 
```html
<template>
  <require from="nav-bar.html"></require>
  <require from="bootstrap/css/bootstrap.css"></require> <!-- REMOVE THIS LINE -->

  <nav-bar router.bind="router"></nav-bar>

  <div class="page-host">
    <router-view></router-view>
  </div>
</template>
```
##### File `src/main.js`

```javascript
import 'bootstrap'; //REMOVE THIS LINE

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
```
##### File `build/bundles.js`

```javascript
...
"dist/aurelia": {
  "includes": [
    "aurelia-framework",
    "aurelia-bootstrapper",
    "aurelia-fetch-client",
    "aurelia-router",
    "aurelia-animator-css",
    "aurelia-templating-binding",
    "aurelia-polyfills",
    "aurelia-templating-resources",
    "aurelia-templating-router",
    "aurelia-loader-default",
    "aurelia-history-browser",
    "aurelia-logging-console",
    "bootstrap", //REMOVE THIS LINE
    "bootstrap/css/bootstrap.css!text", //REMOVE THIS LINE
    "fetch",
    "jquery"
  ],
...
```

##### File `build/export.js`
```javascript
...
'normalize': [
    [
      // include font-awesome.css and its fonts files
      'font-awesome', [
        '/css/font-awesome.min.css',
        '/fonts/*'
      ]
    ], [ // REMOVE THIS ARRAY
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ]
  ]
...
```
After removing Bootstrap, we are ready for the next step.

At this point verify that your  `main.js` class looks like this:
<br>
```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll());

  aurelia.start()
    .then(au => au.setRoot('app'));
}

```

<br>
<br>

as this will ensure that the application we are about to augment from its original form, loads the Aurelia Materialize bridge (named bridge in the above code).

<br>
<br>

The next screenshot depicts the final UI for the application we are about to create, with four additional menubar items

* Materialize select
* Materialize button
* Materialize slider
* Materialize collapsible

<br>

<p align=center>
  <img src="http://i.imgur.com/kcCLiy7.jpg" class="responsive-img"></img>
 <br><br>
 Image 4
</p>
<br>
In order to clearly separate the added code from the original Aurelia Navigation Skeleton, the original project structure is changed to this:

<br>

<p align=center>
  <img src="http://i.imgur.com/i4PJFWV.png" class="responsive-img"></img>
 <br><br>
 Image 5
</p>

<br>
In the following articles you will fill the blue box.

<br>

As the last actions in this **Setup** section of the tutorial, you need to make the following changes, that are indicated in the **Modified code** section of Image 5 above

<br>
##### File `app.html`
<br>
```html
<template>
  <require from="nav-bar.html"></require>

  <nav-bar router.bind="router"></nav-bar>

  <div class="page-host">
    <router-view></router-view>
  </div>
</template>

```

<br>
<br>

##### File `main.js`

<br>

```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll());

  aurelia.start()
    .then(au => au.setRoot('app'));
}

```
<br>
<br>

##### File `nav-bar.html`

<br>

```javascript
<template bindable="router">
  <md-navbar fixed="true">
    <a href="#" class="brand-logo left"><span class="flow-text">${router.title}</span></a>
    <ul class="right hide-on-med-and-down">
      <li md-waves repeat.for="row of router.navigation" class="${row.isActive ? 'active' : ''}">
        <a href.bind="row.href">${row.title}</a>
      </li>
    </ul>
  </md-navbar>
</template>
```

<br>
<br>

* * *
<br>
#### Next page: [Select component](#/help/docs/app_developers_tutorials/3._select_component)
