#### Scaffolding the app

```
  $ au new
```

Choose Aurelia options as you see fit.
In the last step, choose to install all dependencies.

#### Getting the plugin

In your project install the following via npm:

```
  $ npm install requirejs materialize-css --save-dev
```

Add the following files to your project root directory:
<a target="_blank" href="https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/blob/master/build/tools/rbuild.js">rbuild.js</a>
and <a target="_blank" href="https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/blob/master/build/tools/materialize-css.js">materialize-css.js</a>

Run the following command to create an amd compatible version of Materialize.
**Note**: run this in a bash-compatible shell like "gitbash" which comes with Git for Windows.

```
  $ ./node_modules/.bin/r.js -o rbuild.js
```

If this fails on Windows or if you don't want to use a bash-compatible shell, try this:

```
  $ ./node_modules/.bin/r.js.cmd -o rbuild.js
```


Install the bridge:

```
  $ npm install aurelia-materialize-bridge --save
```

If you need validation:

```
  $ npm install aurelia-validation --save
```

#### Configure Aurelia CLI

Apply the following changes to `aurelia_project/aurelia.json`:

* set build loader plugins stub to false

  ```json
  "loader": {
    "type": "require",
    "configTarget": "vendor-bundle.js",
    "includeBundleMetadataInConfig": "auto",
    "plugins": [
      {
        "name": "text",
        "extensions": [
          ".html",
          ".css"
        ],
        "stub": false
      }
    ]
  },
  ```

* add this bundle to your `aurelia_project/aurelia.json`:

  ```json
  {
    "name": "materialize-bundle.js",
    "dependencies": [
      "jquery",
      {
        "name": "materialize-css",
        "path": "../node_modules/materialize-css/dist",
        "main": "js/materialize.amd",
        "deps": [
          "jquery"
        ],
        "resources": [
          "css/materialize.css"
        ],
        "exports": "Materialize"
      },
      {
        "name": "aurelia-materialize-bridge",
        "path": "../node_modules/aurelia-materialize-bridge/dist/amd",
        "main": "index",
        "deps": [
          "jquery"
        ],
        "resources": [
          "**/*.{css,html}"
        ]
      }
    ]
  },
  ```

* for validation add this to your vendor-bundle in `aurelia_project/aurelia.json`:

  ```json
  {
    "name": "aurelia-validation",
    "path": "../node_modules/aurelia-validation/dist/amd",
    "main": "aurelia-validation"
  },
  ```

#### Configure your app

1. For Material Design icons include this in your `index.html` head section:
  ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```

2. Add this to  `main.js` in your `src` folder:

  ```javascript
  aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());
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

3. Add this to `app.html` in your `src` folder:

  ```html
  <require from="materialize-css/css/materialize.css"></require>
  ```

#### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**Now you might want to do our <a href="https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/app_developers_tutorial/introduction.html" target="_blank">app developers tutorial</a>, based on Aurelia Skeleton navigation.**
<br>

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
