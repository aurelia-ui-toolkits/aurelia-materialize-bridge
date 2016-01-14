<br>

### 3. babel-dts-generator
<br>

Aurelia uses a babel plugin called [`babel-dts-generator`](https://github.com/YoloDev/babel-dts-generator) to extract typescript definitions from ES6 source. The babel transpiler doesn't care that there are typescript definitions in the ES6 source, it simply ignores and doesn't output them. The `babel-dts-generator` plugin extracts these definitions, and outputs them to a typescript definition file. As typescript definitions also need `import` statements, it extracts these from the source as well.

So what does this look like?
<br><br>

Consider this source, the `index.js` file (note the `js` extension, not the `ts` extension):
<br>

```
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
<br>

In the `configure` function, we declare that the `aurelia` paramater is of type `Aurelia`.  This is not ES6 syntax. It is a typescript type declaration, in a javascript file.
<br>

Now, when you run Babel on this file - with the `babel-dts-generator` enabled - it generates something close to this:
<br>

```
// index.d.ts
import { Aurelia }  from 'aurelia-framework';

export function configure(aurelia: Aurelia, configCallback?: ((builder: KendoConfigBuilder) => void)): any;
```
<br>

The `babel-dts-generator` also adds `any` as the return type of this function, as it is required in order to be valid typescript. Since we didn't declare a return value of this function, the `babel-dts-generator` defaults to outputting `any`. This is also the case for parameters without specified types. For example:
<br>

`export function configure(aurelia, configCallback) {`
<br>

_Note the missing typescript declarations of the params_.
<br>

This will result in:
<br>

```
export function configure(aurelia: any, configCallback: any): any;
```
<br><br>

#### Concatenation

The one thing the `babel-dts-generator` is having trouble with is extracting typescript definitions from a set of files. So, the solution is to concatenate all these files into a single output file, and then extract the typescript definitions from it.
<br>

The concatenation process happens in the [build-index function](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/f24e34411b60376d7bf12367f1b2ab247d821d38/build/tasks/build.js#L17-L31). A sub-step of this process is to fix import statements. This means two things: Removing local imports (relative paths), and removing duplicate import statements.

Consider the following:

```
// a.js
import {B} from './folder/b';
export class A {}

// folder/b.js
import {Aurelia} from 'aurelia-framework';
export class B {}

// folder/c.js
import {Aurelia} from 'aurelia-framework';
export class C {}
```
<br>

If you would not normalize import statements, then the output would look like this:
<br>

```
// output.js
import {B} from './folder/b';
export class A {}

import {Aurelia} from 'aurelia-framework';
export class B {}

import {Aurelia} from 'aurelia-framework';
export class C {}
```
<br>

Now, there are three issues with this code that the `build-index` gulp task fixes.
1. Duplicate `Aurelia` import statements (solution: remove all but one)
2. The folder `folder` does not exist, the classes B and C are in the sample file as A (solution: the import can be removed)
3. The import statements are all over the place (solution: hoist import statements)
<br>

The `build-index` gulp task leverages a few functions from the `aurelia-tools` repository ([this file](https://github.com/aurelia/tools/blob/f4801e460af98013e0d66aaec188891e8d0d0516/src/build.js#L9-L95)). These functions, called by the `build-index` task, results in this output:
<br>

```
// output.js
import {Aurelia} from 'aurelia-framework';

export class A {}
export class B {}
export class C {}
```
<br><br>

#### Calling of `babel-dts-generator`

Like mentioned above, the `babel-dts-generator` is a babel plugin. So whenever a file is processed by Babel, the `babel-dts-generator` plugin is called. For example, this happens [here](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/f24e34411b60376d7bf12367f1b2ab247d821d38/build/tasks/build.js#L36). The `babel-dts-generator` is configured in the [build.js file](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/f24e34411b60376d7bf12367f1b2ab247d821d38/build/babel-options.js#L23-L34). By default, the `babel-dts-generator` outputs the `d.ts` file next to the Javascript file from which it extracted the definitions.
<br><br>

#### Typescript definitions without distributing a concatenated output file

What if you want to generate typescript definitions using the `babel-dts-generator`, but don't want to distribute a concatenated file?
<br>

Well you can use a gulp task to concatenate all the files you want to distribute into a temp folder and then extract typescript definitions from it. The generated typescript definition can be copied to any output directory (amd, common etc), so it is downloaded (and kept in `jspm_packages`) when someone `jspm install`'s the plugin.
<br><br>


_Note: Even though the temp folder is created, and it contains a concatenated file, it is never used._
