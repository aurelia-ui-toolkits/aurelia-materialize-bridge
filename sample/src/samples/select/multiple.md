##### Multiple select bugs

There is still [a bug](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/86)
with multiple selection.

<br/>

If you select some options in a multiple select, the bound view model variable is not updated.
Aurelia's ```SelectValueObserver``` does not notify its subscribers. As far as I can see, it is not necessary since the ```ModifyCollectionObserver``` would handle this.

<br/>

The underlying array is modified correctly but the ```ModifyCollectionObserver``` does not notify its subscribers or
does not recognize the array has changed. Setting up a value observer which observes the select's ```value``` property
and setting its observed value manually can solve this.

<br/>

It works using this hack in a change handler observing the jQuery ```change``` event:
```javascript
this.valueObserver.value = $(this.element).val();
this.valueObserver.synchronizeValue();
this.valueObserver.synchronizeOptions();
this._suspendUpdate = true;
this.valueObserver.notify();
this._suspendUpdate = false;
```

[full context](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/blob/43ccb0c8d17bec9f7adff8e1af4edaf6b5744f83/src/select/select.js#L36-L41)

<br/>

But that feels abusive and I guess it should be possible without.
Until now, we don't have a good solution.
