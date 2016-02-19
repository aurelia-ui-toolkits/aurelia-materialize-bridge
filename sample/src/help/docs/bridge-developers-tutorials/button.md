<br>

### 4. Button
<br>

This wrapper encapsulates the Materialize [button control](http://materializecss.com/buttons.html), ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/samples/button)**.
<br>

File `button.js`
<br>
```javascript
import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customAttribute('md-button')
@inject(Element)
export class MdButton {
  @bindable() disabled = false;
  @bindable() flat = false;
  @bindable() large = false;

  constructor(element) {
    this.attributeManager = new AttributeManager(element);
  }

  attached() {
    let classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
    }
    if (getBooleanFromAttributeValue(this.large)) {
      classes.push('btn-large');
    }

    if (classes.length === 0) {
      classes.push('btn');
    }

    if (getBooleanFromAttributeValue(this.disabled)) {
      classes.push('disabled');
    }

    if (!getBooleanFromAttributeValue(this.flat)) {
      classes.push('accent');
    }
    this.attributeManager.addClasses(classes);
  }

  detached() {
    this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
  }

  disabledChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('disabled');
    } else {
      this.attributeManager.removeClasses('disabled');
    }
  }

  flatChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.removeClasses(['btn', 'accent']);
      this.attributeManager.addClasses('btn-flat');
    } else {
      this.attributeManager.removeClasses('btn-flat');
      this.attributeManager.addClasses(['btn', 'accent']);
    }
  }
}

```

<br>
* * *
#### Next page: &nbsp;&nbsp; [Slider component](#/help/docs/bridge_developers_tutorials/5._slider_component)
