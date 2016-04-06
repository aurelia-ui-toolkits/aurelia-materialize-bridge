##### Users of Materialize 0.97.5

The original Scrollfire implementation in version 0.97.5 uses the ```Function```
constructor which only supports strings as the function body.
Therefore it's only really usable with functions accessible through the global scope.

<br />

We've patched our version of Scrollfire to work with function references.
Materialize supports function references since 0.97.6

<br />

To activate the workaround, set the following in the bridge's configuration:
```javascript
.withScrollfirePatch()
```
