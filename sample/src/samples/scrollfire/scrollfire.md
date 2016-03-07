##### Changes to Materialize Scrollfire

The original Scrollfire implementation [uses the ```Function``` constructor](https://github.com/Dogfalo/materialize/blob/master/js/scrollFire.js#L33) which only supports strings as the function body.
Therefore it's only really usable with functions accessible through the global scope.

<br />

We've patched our version of Scrollfire to work with function references. Of course, we've [issued a pull request](https://github.com/Dogfalo/materialize/pull/2790) and hope it will be merged.

<br />

The patched Scrollfire is backwards-compatible and overrides the original global function and thus is accessible by all users of this bridge.
