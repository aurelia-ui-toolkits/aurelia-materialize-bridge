##### A bug in Materialize

Currently there is [an issue](https://github.com/Dogfalo/materialize/issues/3417#issuecomment-235537425) in Materialize which leads to the dropdown component ignoring any options.

To fix this, we have copied the fix from Materialize's `Master` branch and put it
into a function.

To use this fix, add the following to bridge initialization in your `main.js`:

```javascript
  .useDropdownFix()
```
