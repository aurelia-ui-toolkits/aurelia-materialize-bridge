<br>

### 2. Bundling the Materialize bridge
<br>
<br>
The general process of bundling an Aurelia app is explained in [the Aurelia documentation](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.2.2/doc/article/bundling-your-app-for-deploy).
It may seem like for a complete bundle configuration it would be sufficient to just add the bridge to a bundle:
```json
"dist/aurelia-bundle": {
  "includes": [
    "aurelia-framework",
    ...
    "aurelia-materialize-bridge"
  ]
}
```

A problem with this approach is that the bridge does not export its components directly and thus these components
are not directly visible to Aurelia bundler.

Instead, the bridge's `index.js` file uses `config-builder` to fill Aurelia's
`globalResources` (just like [Aurelia features are configured](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.2.2/doc/article/app-configuration-and-startup/6)).

A sufficient bundle configuration needs to include the sub-directories of the
bridge as well as its html and css files. Such a configuration would look like this:

```json
"dist/aurelia-bundle": {
  "includes": [
    "aurelia-framework",
    ...
    "aurelia-materialize-bridge",
    "aurelia-materialize-bridge/**/*.js",
    "aurelia-materialize-bridge/**/*.html!text",
    "aurelia-materialize-bridge/**/*.css!text"
  ]
}
```

An even better solution is to only include the bridge (without its own dependencies)
in a seperate bundle. The following example is taken from the catalog app you're
currently looking at:

```json
var pluginsBundle = [
  "[aurelia-materialize-bridge]",
  "[aurelia-materialize-bridge/**/*]",
  "aurelia-materialize-bridge/**/*.css!text",
  "aurelia-materialize-bridge/**/*.html!text",
  "showdown",
  "prism",
  "jquery",
  "nprogress",
  "css",
  "text",
  "json"
];
```

[Have a look here](https://github.com/aurelia-ui-toolkits/demo-materialize/blob/master/build/bundles.js)
for a complete bundle using three bundles for this catalog app, the Aurelia framework
and used plugins (including Materialize bridge).
