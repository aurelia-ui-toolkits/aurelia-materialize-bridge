#### Getting the plugin

In your project install the plugin via jspm with following command:

  ```
    $ jspm install aurelia-materialize-bridge=github:aurelia-ui-toolkits/aurelia-materialize-bridge
  ```

#### Configure your app

1. Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app:

  ```html
  <body aurelia-app="main">
  ...
```

2. Update  `main.js` in your `src` folder with following content:

  ```javascript
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      // Install and configure the plugin
      .plugin('aurelia-materialize-bridge', bridge => {
        bridge
          .useButton()
          .useCard()
          .useCollapsible()
          .useNavbar()
          .useTabs()
          .useWaves()
          .useWell();
      });

    aurelia.start().then(a => a.setRoot());
  }
  ```

  **Note:** The list above shows all available controls. If you choose to not use some of them, simply leave them out.

  If you'd like to use all controls at once, simply specify:
  ```javascript
  .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );
  ```

#### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.

**We recommend that you read [these instructions](#/help/docs/app_developers_tutorials/7._next_actions) in order to get started**
