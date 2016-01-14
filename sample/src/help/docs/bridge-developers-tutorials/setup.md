<br>

### 2. Setup
<br>
Similarly to the **[Setup page](#/help/docs/app_developers_tutorials/2._setup)** of the Application developers tutorial section, let's do something very simple as the first step in showing how to use the **[Aurelia skeleton plugin](https://github.com/aurelia/skeleton-plugin)** to create the initial few "wrappers" for KendoUI controls. Get it from **[here](https://github.com/aurelia/skeleton-plugin)** and use the Download ZIP method so we do not have to deal with Git issues in this simple context. After downloading this application, extract its content into the folder conveniently named `skeleton-plugin-kendo` and use **[these instructions](https://github.com/aurelia/skeleton-plugin/blob/master/README.md)** to build this code.
<br>
<br>
#### 2.1 Plan of actions (stated as "steps" below)
In order to simplify this set of tutorials we will take a slight tack away from the "embedded application" approach described in **[introduction section](#/help/docs/about_this_application/1._introduction)** of the About this application help page. In order to verify the correctness of our wrappers code, we will use the **[application](https://github.com/aurelia-ui-toolkits/skeleton-navigation-kendo)** developed in the **[App developers tutorials](#/help/docs/app_developers_tutorials/1._introduction)**, to act in the role of the "consumer" of our newly created wrappers. Here is how to we do this:
<br>


Having the standard Aurelia Skeleton Plugin installed (unzipped) and built, we need to do several changes to get everything ready for development of KendoUI components
<br>

<p align=center>
  <img src="http://i.imgur.com/XW61hnA.png"></img>
 <br><br>
 Image 1
</p>

#### Step 1

Replace the original content of the `src` folder with the folders and (empty) files shown on Image 2 below:
<br><br>

<p align=center>
  <img src="http://i.imgur.com/PlW1GbD.png"></img>
 <br><br>
 Image 2
</p>

We will define the content for `autocomplete.js`, `button.js`, `chart.js` and `grid.js` files in subsequent tutorials pages, starting with [Autocomplete component](#/help/docs/bridge_developers_tutorials/3._autocomplete_component) first.
<br><br>

#### Step 2
Replace the complete content of the `package.json` file with the content of **[this](https://github.com/aurelia-ui-toolkits/skeleton-plugin-kendo/blob/master/package.json)** `package.json` file. **Make sure** that you replace all references to [https://github.com/aurelia-ui-toolkits/skeleton-plugin-kendo](https://github.com/aurelia-ui-toolkits/skeleton-plugin-kendo) with the "path" to your own repository to be used in the course of these tutorials.
<br><br>

#### Step 3
Edit the "root level" `config.js` file and ensure that the lines 8, 9 and 15 are as shown in the code section below (in particular is is the line 15 -  `'kendo-ui/*': 'vendors/*'` that sets this project to use the settings defined in the "HAVING KENDOUI ALREADY: VENDORS" tab on the [Installation](#/installation) page)
<br>
```javascript
System.config({
  defaultJSExtensions: true,
  transpiler: 'babel',
  babelOptions: {
    'optional': [
      'runtime',
      'optimisation.modules.system',
      'es7.decorators',
      'es7.classProperties'
    ]
  },
  paths: {
    'github:*': 'jspm_packages/github/*',
    'npm:*': 'jspm_packages/npm/*',
    'kendo-ui/*': 'vendors/*'
  },

  map: {
    'aurelia-binding': 'npm:aurelia-binding@1.0.0-beta.1.0.3',
    'aurelia-bootstrapper': 'npm:aurelia-bootstrapper@1.0.0-beta.1',
    ...
```
<br><br>

#### Step 3
Add the the following code to define the (so far empty) file `index.js` - this is the plugin's interface to the consumer application, used for plugin initialization.
<br>
```javascript
import {Aurelia} from 'aurelia-framework';
import * as LogManager from 'aurelia-logging';
let logger = LogManager.getLogger('aurelia-kendoui-plugin');
import {KendoConfigBuilder} from './config-builder';
import 'jquery';

export function configure(aurelia: Aurelia, configCallback?: (builder: KendoConfigBuilder) => void) {
  let builder = new KendoConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

    // Provide core if nothing was specified
  if (builder.resources.length === 0) {
    logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
    builder.core();
  }

    // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}
```
<br><br>
#### Step 4
Add the the following code to define the (so far empty) file `config-builder.js` - this is the tool that creates the final content of the `index.js` - interface to the consumer application, used for plugin initialization.
<br>
```javascript
/**
* Configure the Aurelia-KendoUI-plugin
*/
export class KendoConfigBuilder {

    resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all Kendo Core wrappers
  */
  core(): KendoConfigBuilder {
    this.kendoButton()
      .kendoTabStrip()
      .kendoProgressBar()
      .kendoSlider()
      .kendoColorPicker()
      .kendoDropDownList();
    return this;
  }

  /**
  * Globally register all Kendo Core and Kendo Pro wrappers
  */
  pro(): KendoConfigBuilder {
    this.core()
      .kendoGrid()
            .kendoAutoComplete()
      .kendoChart();
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): KendoConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  kendoAutoComplete(): KendoConfigBuilder {
    this.resources.push('autocomplete/autocomplete');
    return this;
  }

  kendoButton(): KendoConfigBuilder {
    this.resources.push('button/button');
    return this;
  }

  kendoGrid(): KendoConfigBuilder {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  }

  kendoChart(): KendoConfigBuilder {
    this.resources.push('chart/chart');
    return this;
  }
}

```
<br><br>
#### Step 5
This is not an action step - it is rather a reminder that the document **[Bridge utilities](#/help/docs/bridge_developers_notes/2._bridge_utilities)** has the explanations and the code for all functionality that Aurelia UI Toolkits team created to simplify the process of building this bridge.
<br>
* * *
<br>
#### Next page: [Autocomplete component](#/help/docs/bridge_developers_tutorials/3._autocomplete_component)

