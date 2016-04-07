<br>

### 2. Setup
<br>
Let's do something very simple as the first step in showing how to use the **[Aurelia skeleton plugin](https://github.com/aurelia/skeleton-plugin)** to create the initial few "wrappers" for Materialize controls. Get it from **[here](https://github.com/aurelia/skeleton-plugin)** and use the Download ZIP method so we do not have to deal with Git issues in this simple context. After downloading this application, extract its content into the folder conveniently named `materialize-bridge-developers-tutorial` and use **[these instructions](https://github.com/aurelia/skeleton-plugin/blob/master/README.md)** to build this code.

<br>

#### 2.1 Plan of actions
In order to simplify this set of tutorials we will take a slight tack away from the "[embedded application approach](#/help/docs/about_this_application/1._introduction)"  In order to verify the correctness of our wrappers code, we will use the **[application](https://github.com/aurelia-ui-toolkits/https://github.com/aurelia-ui-toolkits/materialize-app-developers-tutorial)** developed in the **[App developers tutorials](#/help/docs/app_developers_tutorials/1._introduction)**, to act in the role of the "consumer" of our newly created wrappers. Here is how to we do this:
<br>


Having the standard Aurelia Skeleton Plugin installed (unzipped) and built, we need to do several changes to get everything ready for development of Materialize components.
<br>

<p align=center>
  <img src="http://i.imgur.com/NiT7L16.png" class="responsive-img"></img>
 <br><br>
 Image 1
</p>

#### Step 1

Replace the original content of the `src` folder with the folders and (empty) files shown on Image 2 below:
<br><br>

<p align=center>
  <img src="http://i.imgur.com/mk6QDQ7.png" class="responsive-img"></img>
 <br><br>
 Image 2
</p>

We will define the content for `select.js`, `button.js`, `slider.js` and `collapsible.js` files in subsequent tutorials pages, starting with [Autocomplete component](#/help/docs/bridge_developers_tutorials/3._select_component) first.
<br><br>

#### Step 2
Replace the complete content of the `package.json` file with the content of **[this](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/blob/master/package.json)** `package.json` file.

**Make sure** that you replace all references to [https://github.com/aurelia-ui-toolkits/skeleton-plugin-materialize](https://github.com/aurelia-ui-toolkits/skeleton-plugin-materialize) with the "path" to your own repository to be used in the course of these tutorials.
<br><br>

#### Step 3
Edit the "root level" `config.js` file and ensure that the lines 8 and 9 are as shown in the code section below.
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
    'npm:*': 'jspm_packages/npm/*'
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
import 'materialize';
import {Aurelia} from 'aurelia-framework';
import {ConfigBuilder} from './config-builder';

export function configure(aurelia: Aurelia, configCallback?: (builder: ConfigBuilder) => void) {
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
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
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .useButton()
      .useCollapsible()
      .useNavbar()
      .useSelect();
  }

  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCollapsible(): ConfigBuilder {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    return this;
  }

  useSelect(): ConfigBuilder {
    this.globalResources.push('./select/select');
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
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
