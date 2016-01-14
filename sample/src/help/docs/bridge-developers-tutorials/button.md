<br>

### 4. Button
<br>

This wrapper encapsulates the KendoUI module `kendo.button.min.js`, ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/help/docs/app_developers_tutorials/4._button_component)** and **[here](#/samples/button)**.
<br>

File `button.js`
<br>
```javascript
import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import 'kendo-ui/js/kendo.button.min';

@customAttribute('k-button')
@generateBindables('kendoButton')
@inject(Element)
export class Button extends WidgetBase {

  @bindable options = {};

  constructor(element) {
    super('kendoButton', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(enable) {
    if (this.widget) {
      this.widget.enable(enable);
    }
  }
}
```

<br>
* * *
#### Next page: &nbsp;&nbsp; [Chart component](#/help/docs/bridge_developers_tutorials/5._chart_component)

