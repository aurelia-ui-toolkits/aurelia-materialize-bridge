#### Getting the plugin

**<span style="color: red;">Important</span>**: Make sure you run jspm version 0.16.15.

In your project install the plugin via jspm with the following command:

```
  $ jspm install aurelia-materialize-bridge materialize
```

Make sure you also install Materialize. There are several options available. Not concerning forks, these are available:

<span style="color: red;">github</span>

```
$ jspm install materialize=github:Dogfalo/materialize
```

<span style="color: red;">npm</span>

```
$ jspm install materialize-css
```

#### Configure your app

1. Make sure you use [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/4). In order to do so open your `index.html` and locate the element with the attribute aurelia-app:

  ```html
    <body aurelia-app="main">
    ...
  ```

2. Update  `main.js` in your `src` folder with following content:

  ```javascript
  import 'materialize'; // ONLY when using the "github" option above
  import 'materialize-css'; // ONLY when using the "npm" option above

  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install and configure the plugin
      .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

  aurelia.start().then(a => a.setRoot());
  }
  ```

  Please make sure that you use **only one** of the imports shown above.

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

#### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**Now you might want to do our <a href="https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/app_developers_tutorial/introduction.html" target="_blank">app developers tutorial</a>.**

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
