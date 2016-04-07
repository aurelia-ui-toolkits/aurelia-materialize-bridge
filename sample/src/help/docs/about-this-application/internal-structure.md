<br>

### 4. Application's internal structure

<a name="anch1"></a>This article presents the overview of the internal organization of the **[Aurelia-Materialize-Bridge](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge)** project developed by the team of Aurelia UI Toolkits organization, dedicated to help  Aurelia's wide spread adoption .

The internal organization of this bridge is slightly different than Aurelia's **[standard plugin](https://github.com/aurelia/skeleton-plugin)**. We believe that it is more convenient. Image 1 below, shows the overall structure.
<br>

<p align=center>
  <img src="http://i.imgur.com/nGEFWlE.png" class="responsive-img"></img>
 <br><br>
 Image 1
</p>

The following three sections describe the details of the plugin structure and building process


* * *

#### 3.1 Plugin code

<p align=center>
  <img src="http://i.imgur.com/13uYCPm.png" class="responsive-img"></img>
<br>
Image 2
</p>
<br>

The plugin's **`src`** folder contains the **`common`**  subfolder with utilities used by more than one Materialize component "wrapped" by this plugin. In addition to the just described utility of the **`common`** folder, the **`src`** folder contains a subfolder for each of the Materialize components that is wrapped by this plugin.
<br>

**Note:** At the time of writing this, not all components have been implemented. There are more available than this screenshot shows.
<br><br>

The code in the plugin (which is the JavaScript equivalent of the more general concept of **[dynamic linker](https://en.wikipedia.org/wiki/Dynamic_linker))** defines its content via the `config-builder.js` file
<br>

##### File `config-builder.js`

```javascript
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .useBox()
      .useButton()
      .useCard()
      .useCarousel()
      .useCheckbox()
      .useCollapsible()
      .useColors()
      .useDropdown()
      .useNavbar()
      .useSelect()
      .useSidenav()
      .useSlider()
      .useSwitch()
      .useTabs()
      .useTooltip()
      .useTransitions()
      .useWaves()
      .useWell();
  }

  useBox(): ConfigBuilder {
    this.globalResources.push('./box/box');
    return this;
  }

  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCarousel(): ConfigBuilder {
    this.globalResources.push('./carousel/carousel');
    this.globalResources.push('./carousel/carousel-item');
    return this;
  }

  useCard(): ConfigBuilder {
    this.globalResources.push('./card/card');
    return this;
  }

  useCheckbox(): ConfigBuilder {
    this.globalResources.push('./checkbox/checkbox');
    return this;
  }

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useCollapsible(): ConfigBuilder {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  }

  useColors() : ConfigBuilder {
    this.globalResources.push('./colors/md-colors.html');
    return this;
  }

  useDropdown() : ConfigBuilder {
    // this.globalResources.push('./dropdown/dropdown-element');
    this.globalResources.push('./dropdown/dropdown');
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

  useSidenav(): ConfigBuilder {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  }

  useSlider(): ConfigBuilder {
    this.globalResources.push('./slider/slider');
    this.globalResources.push('./slider/slide');
    return this;
  }

  useSwitch(): ConfigBuilder {
    this.globalResources.push('./switch/switch');
    return this;
  }

  /**
   * Use materialized tabs
   */
  useTabs(): ConfigBuilder {
    this.globalResources.push('./tabs/tabs');
    return this;
  }

  useTooltip(): ConfigBuilder {
    this.globalResources.push('./tooltip/tooltip');
    return this;
  }

  useTransitions(): ConfigBuilder {
    this.globalResources.push('./transitions/fadein-image');
    this.globalResources.push('./transitions/staggered-list');
    return this;
  }

  /**
   * Use ripple/waves effect
   */
  useWaves(): ConfigBuilder {
    this.globalResources.push('./waves/waves');
    return this;
  }

  useWell(): ConfigBuilder {
    this.globalResources.push('./well/md-well.html');
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
<br>

**Note** that this file defines the controls that are available to Aurelia developers at the time of writing this article.

<br><br>

Let's also show the actual Aurelia plugin implementation of one of the simplest Materialize controls - `switch`
<br><br>
##### File `switch.js`

```javascript
import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-switch')
@inject(Element)
export class MdSwitch {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdLabelOff = 'Off';
  @bindable() mdLabelOn = 'On';

  constructor(element) {
    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    this.checkbox.addEventListener('change', this.handleChange);
  }

  detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  }

  handleChange() {
    this.mdChecked = this.checkbox.checked;
  }

  mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  }
}

```

* * *
<br>

#### 3.2 Sample Application that acts as the Plugin consumer

<br>

As [mentioned before](#anch1) Aurelia-Materialize-Bridge has a special structure, with the plugin consumer application being a part of the same project (see the content of the blue rectangle on the image 3 below)

<p align=center>
  <img src="http://i.imgur.com/zTDFKsM.png" class="responsive-img"></img>
  <br><br>
  Image 3
</p>
<br>

#### Color codes:

* **orange**: Materialize controls hosted by this sample app (these controls are the consumers of the Aurelia-Materialize-Bridge)

* **bluish**: Standard Aurelia application files collection

<br>

#### Sample application showing the Materialize Button control:

<br>
<p align=center>
  <img src="http://i.imgur.com/x2CG2CD.png" class="responsive-img"></img>
  <br>
  <br>
  Image 4
</p>
