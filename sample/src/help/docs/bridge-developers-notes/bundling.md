<br>

### 4. Bundling KendoUI
<br>

The Aurelia-KendoUI-plugin is designed to offer you - as end-user - flexibility. The wrappers include only the Kendo files they need for that particular control to work. These files exist (in minified state) in the `js` folder of KendoUI distribution.
<br>

If you're reading this, then you may be wondering how to bundle these files. There are currently three options for you to consider, so let's explain a few things first.


There are two kinds of scripts in the `js` folder : ___individual___ and ___combined___ scripts. An individual script is a file such as `kendo.button.min.js`, containing only one "feature" (button in this case). Combined scripts contain multiple "individual" scripts.
<br>

Combined scripts are:
<br>

 &nbsp; &nbsp; &nbsp; - kendo.ui.core.min.js (only in the CORE version of KendoUI)

 &nbsp; &nbsp; &nbsp; - kendo.all.min.js

 &nbsp; &nbsp; &nbsp; - kendo.web.min.js

 &nbsp; &nbsp; &nbsp; - kendo.dataviz.min.js

 &nbsp; &nbsp; &nbsp; - kendo.mobile.min.js
<br>

The Aurelia-KendoUI plugin does not use the __combined__ scripts declared above, only the __individual__ files such as `kendo.button.min.js`. Thay way, if you only use the button, you would only have to load `kendo.button.min.js` instead of the 2MB `kendo.all.min.js`.
<br>

__How bundling works__
The way bundling works by JSPM, is that it automatically detects any dependencies between your files. A more concrete example is that our plugin imports files in the `js` folder of Kendo. The bundler sees this as a dependency and includes these files in the bundle. However, this is not always what you want. There is a way to tell the bundler not to bundle these dependencies automatically, and that is by putting brackets (`[ ]`) around the import.
<br>

If your app bundle configuration looks like this:
<br>

```
    "src/app-build": {
      "includes": [
        "*",
        "aurelia-kendoui-plugin",
        "aurelia-kendoui-plugin/**/*",
        "aurelia-kendoui-plugin/**/*.html!text",
      ]
    },
```
<br>

then you can change it to this:
<br>

```
    "src/app-build": {
      "includes": [
        "[*]",
        "[aurelia-kendoui-plugin]",
        "[aurelia-kendoui-plugin/**/*]",
        "aurelia-kendoui-plugin/**/*.html!text",
      ]
    },
```
<br>


If you bundle now, you will notice that Kendo is not included in your app's bundle, and you can create a seperate bundle just for the Kendo controls.

Now that you know this, you can choose one of the following options.
<br>

#### No bundling at all
This is definitely the easiest option. Instead of bundling the files together, you deploy the entire `js` folder. Only the controls you configure in the `main.js` file of your application will be loaded, in multiple requests.
<br>

To prevent the JSPM bundler from bundling any Kendo files, you can change your includes of your bundle configuration to use brackets, telling JSPM not to bundle dependencies automatically.
<br>

```
    "src/app-build": {
      "includes": [
        "[*]",
        "[aurelia-kendoui-plugin]",
        "[aurelia-kendoui-plugin/**/*]",
        "aurelia-kendoui-plugin/**/*.html!text",
      ]
    },
```
<br>


#### Bundling via JSPM
If you want to bundle Kendo, we recommend you to create a seperate bundle. You will want to bundle the minified files in the `js` folder.
<br>

##### Bundling Core via JSPM

    "dist/kendo-bundle": {
      "includes": [
        "kendo-ui",
        "kendo-ui/**/*.js"
      ],
      "excludes": [
        "kendo-ui/js/angular.min.js",
        "kendo-ui/js/jquery.min.js",
        "kendo-ui/js/kendo.angular.min.js",
        "kendo-ui/js/kendo.angular2.min.js",
        "kendo-ui/js/kendo.ui.core.min.js"
      ]
    }
<br>

__Note:__ We have excluded some files from the bundle, because it's unlikely that these files will be used. We also exclude the __combined__ file `kendo.ui.core.min.js`, because we are creating our own bundle from all the individual files.
<br>

##### Bundling PRO via JSPM
Kendo PRO is quite difficult to get bundled. For example, the bundler chokes when you try to bundle (and minify) all files, without any exclusions, because it chokes on bundling `kendo.spreadsheet.min.js`. It works fine without minification, but without minification you'll end up with a file of ~7MB, which is not acceptable.
<br>

A working configuration looks like this:
<br>

```
    "src/kendo-build": {
      "includes": ["kendo-ui/js/*.min.js"],
      "excludes": [
        "kendo-ui/js/angular.min.js",
        "kendo-ui/js/jquery.min.js",
        "kendo-ui/js/kendo.angular.min.js",
        "kendo-ui/js/kendo.angular2.min.js",
        "kendo-ui/js/kendo.spreadsheet.min.js",
        "kendo-ui/js/kendo.all.min.js",
        "kendo-ui/js/kendo.web.min.js",
        "kendo-ui/js/kendo.dataviz.min.js",
        "kendo-ui/js/kendo.dataviz.mobile.min.js",
        "kendo-ui/js/kendo.mobile.min.js"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    }
```
<br>

__Note:__ we exclude a couple of files. Some are __combined__ files, some are unnecessary, and we also exclude the spreadsheet because it gets the bundler stuck.
<br>

### Mapping to kendo.all.min.js
##### Note, this is not recommended and has not been tested fully

In your config.js, you can map Kendo files to `kendo.all.min.js`. If you do this, then you can just deploy `kendo.all.min.js` to your server, instead of bundling all individual files first.
<br>

```
    "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.6",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
      "kendo-ui/js/kendo.button.min.js": "kendo-ui/js/kendo.all.min.js",
      "jquery": "github:components/jquery@2.1.4"
    },
```
<br>

__Note:__ The important part here is `"kendo-ui/js/kendo.button.min.js": "kendo-ui/js/kendo.all.min.js",`

You will need to map every file in the Kendo `js` directory to the `kendo.all.min.js` file. We have seen that this is possible, but do not recommend you use this, as it is very verbose. If you know a better way to do this mapping, please contact us and we will update the documentation, so that others can use this information.
<br>

* * *
