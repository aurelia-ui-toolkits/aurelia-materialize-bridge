#### Getting the plugin

In your project install the plugin via npm with the following command:

```
  $ npm install --save aurelia-materialize-bridge materialize-css
```

#### Configure your app

1. Make sure you use [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/4). In order to do so open your `index.html` and locate the element with the attribute aurelia-app:

  ```html
  <body aurelia-app="main">
  ...
  ```

  For Material Design icons include this in your `index.html` head section:
  ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```

2. Update  `main.js` in your `src` folder with following content:

  ```javascript
  import 'materialize-css';

  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install and configure the plugin
      .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

  aurelia.start().then(a => a.setRoot());
  }
  ```

  **Note:** The above shows how to use all available controls at once. If you choose to pick which you'd like to use, you can ```use``` single components like this:

  ```javascript
  .plugin('aurelia-materialize-bridge', bridge => {
    bridge
      .useButton()
      .useCollapsible()
      .useModal()
      .useTabs();
  });
  ```

  At the end of this page is a full list of currently available options.

3. Import css:

  ```html
  <require from="materialize-css/bin/materialize.css"></require>
  ```

**<span style="color: red;">Important</span> (uglify-js users)**:

When using aurelia-materialize-bridge (and thus materialize) via webpack with the UglifyJS-plugin (standard in aurelia webpack skeleton production build) you have to make sure to except the materialize module (via exclude: ['materialize'] if your module is named materialize) from the UglifyJS plugin. Otherwise the names will be mangled and the materialize module won't load correctly (missing dropdown). Another option would be to disable mangle as a global setting on the UglifyJS settings object.

- Thanks to @JoschaMetze for mentioning this  

#### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**Now you might want to do our <a href="https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/app_developers_tutorial/introduction.html" target="_blank">app developers tutorial</a>, based on Aurelia Skeleton navigation.**


  As described above, here is a full list of currently available options:

```javascript
aurelia.use.plugin('aurelia-materialize-bridge', bridge => {
  bridge
    .useAutoComplete()
    .useBadge()
    .useBreadcrumbs()
    .useBox()
    .useButton()
    .useCard()
    .useCarousel()
    .useCharacterCounter()
    .useCheckbox()
    .useChip()
    .useCollapsible()
    .useCollection()
    .useColors()
    .useDatePicker()
    .useDropdown()
    .useFab()
    .useFile()
    .useFooter()
    .useInput()
    .useModal()
    .useNavbar()
    .usePagination()
    .useParallax()
    .useProgress()
    .usePushpin()
    .useRadio()
    .useRange()
    .useScrollfire()
    .useScrollSpy()
    .useSelect()
    .useSidenav()
    .useSlider()
    .useSwitch()
    .useTabs()
    .useTooltip()
    .useTransitions()
    .useWaves()
    .useWell();
});
```
