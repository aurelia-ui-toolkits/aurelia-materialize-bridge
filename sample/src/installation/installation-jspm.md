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

  For Material Design icons include this in your `index.html` head section:
  ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```

2. Update  `main.js` in your `src` folder with following content:

  ```javascript
  export function configure(aurelia) {
    // These variables are only here to be able to distinguish between the two
    // installation options presented above.
    // Of course you can use the correct name directly in the import below.

    let materialize = 'materialize'; // ONLY when using the "github" option above
    let materialize = 'materialize-css'; // ONLY when using the "npm" option above

    return System.import(materialize).then(() => {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        // Install and configure the plugin
        .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

      return aurelia.start().then(a => a.setRoot());
    }
  }
  ```

  Please make sure that you use **only one** of the imports shown above.

  **Note:** You could just `import 'materialize'` into your app but since
  Materialize is not a direct dependency of this bridge anymore, it may get loaded
  asynchronously. This may lead to Materialize being initialized *after* components
  are `attached()` which essentally applies Materialize twice.

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

**Now you might want to do our <a href="https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/app_developers_tutorial/introduction.html" target="_blank">app developers tutorial</a>, based on Aurelia Skeleton navigation.**
<br>
Before doing this, make sure you <a href="http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/setup-jspm" target="_blank">set up your environment appropriately</a>.

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
