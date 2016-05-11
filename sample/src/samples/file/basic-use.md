##### Getting the selected files

The view model of the `<md-file>` element (referenced here by `view-model.ref="fileInput"`)
contains the native `files` property value of the wrapped file input control.

Therefore `fileInput.files` contains an array type `FileList` which can be read
like the `value` of any native file input control.

It can even be bound to a getter, enhanced with `@computedFrom` to avoid
dirty-checking as shown in this example.
