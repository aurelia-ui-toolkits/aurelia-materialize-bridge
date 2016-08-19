#### How to do this

* Install `aurelia-validation` and a validator, f.i. `aurelia-validatejs`.

* Put this into your `main.js`/`main.ts`:

```javascript
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge/validation/validationRenderer';

export function configure(aurelia) {
  ...
  aurelia.use
    .plugin('aurelia-validatejs')
    .plugin('aurelia-validation');

  aurelia.container.registerHandler('materialize-form', container => container.get(MaterializeFormValidationRenderer));
}
```
