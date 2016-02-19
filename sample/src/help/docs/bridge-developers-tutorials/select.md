<br>

### 3. Select
<br>

This wrapper encapsulates the Materialize [select control](http://materializecss.com/forms.html#select), ensuring that it behaves as a standard Aurelia component. See how the Aurelia application uses this component **[here](#/samples/select)**.
<br>

File `select.js`
<br>
```javascript
import { customAttribute } from 'aurelia-templating';
import { ObserverLocator } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import * as LogManager from 'aurelia-logging';
import { fireEvent } from '../common/events';

@inject(Element, LogManager, ObserverLocator)
@customAttribute('md-select')
export class MdSelect {
  _suspendUpdate = false;

  constructor(element, logManager, observerLocator) {
    this.element = element;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.log = LogManager.getLogger('md-select');
    this.observerLocator = observerLocator;
    this.valueObserver = this.observerLocator.getObserver(this.element, 'value');
  }
  attached() {
    this.valueObserver.subscribe(this.handleChangeFromViewModel);
    $(this.element).material_select();
    $(this.element).on('change', this.handleChangeFromNativeSelect);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    $(this.element).material_select('destroy');
    this.valueObserver.unsubscribe();
  }

  handleChangeFromNativeSelect() { this.element.value, $(this.element).val());
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this._suspendUpdate = false;
    }
  }

  handleChangeFromViewModel(newValue) {
    if (!this._suspendUpdate) {
      $(this.element).material_select();
    }
  }
}

```




* * *
<br>
#### Next page: &nbsp;&nbsp; [Button component](#/help/docs/bridge_developers_tutorials/4._button_component)
