<br>

### 3. Autocomplete
<br>

This wrapper encapsulates the KendoUI module `kendo.autocomplete.min.js`, ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/help/docs/app_developers_tutorials/3._autocomplete_component)** and **[here](#/samples/autocomplete)**.
<br>

File `autocomplete.js`
<br>
```javascript
import {customAttribute, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {fireEvent} from '../common/events';
import 'kendo-ui/js/kendo.autocomplete.min';
import 'kendo-ui/js/kendo.virtuallist.min';

@customAttribute('k-autocomplete')
@inject(Element)
@generateBindables('kendoAutoComplete')
export class AutoComplete extends WidgetBase {

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoAutoComplete', element);
  }

  bind(ctx) {
    super.bind(ctx);

    this._initialize();
  }

  _initialize() {
    super._initialize();

    // without these change and select handlers, when you select an options
    // the value binding is not updated
    this.widget.bind('change', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });

    this.widget.bind('select', (event) => {
      this.kValue = event.sender.value();

      // Update the kendo binding
      fireEvent(this.element, 'input');
    });
  }

  kEnableChanged() {
    if (this.widget) {
      this.widget.enable(this.kEnable);
    }
  }

  enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
    }
  }

  value(newValue) {
    if (this.widget) {
      if (newValue) {
        this.widget.value(newValue);
        this.widget.trigger('change');
      } else {
        return this.widget.value();
      }
    }
  }

  search(value) {
    if (this.widget) {
      this.widget.search(value);
    }
  }

  close(value) {
    if (this.widget) {
      return this.widget.close(value);
    }
  }

  dataItem(value) {
    if (this.widget) {
      return this.widget.dataItem(value);
    }
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  focus() {
    if (this.widget) {
      return this.widget.focus();
    }
  }

  readonly(value) {
    if (this.widget) {
      return this.widget.readonly(value);
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }

  select(value) {
    if (this.widget) {
      return this.widget.select(value);
    }
  }

  setDataSource(value) {
    if (this.widget) {
      return this.widget.setDataSource(value);
    }
  }

  suggest(value) {
    if (this.widget) {
      return this.widget.suggest(value);
    }
  }
}
```




* * *
<br>
#### Next page: &nbsp;&nbsp; [Button component](#/help/docs/bridge_developers_tutorials/4._button_component)


