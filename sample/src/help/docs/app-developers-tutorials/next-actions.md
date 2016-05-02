<br>

### 7. What you need to know
<br>

#### JSPM "forks"
<br>

JSPM allows for multiple versions of installed dependencies. When two dependencies
import two different versions of the same library, JSPM may detect a conflict
which it calls a "fork". In this case it issues a warning like this:

```
Installed Forks

             github:systemjs/plugin-css 0.1.20 0.1.21
```

This example is taken from aurelia-skeleton-navigation 1.0.0-beta.1.2.2 (after installing the bridge)
which has a dependency on `font-awesome@^4.5.0` - itself depending on `plugin-css@0.1.20`.
Notice lack of the `^` indicator, meaning that JSPM will install **exactly this version**.

When installing the bridge you install an indirect dependency of `plugin-css@0.1.21`
which `Dogfalo/materialize` depends on.

As the version numbers in both cases are static (no `^` indicator), both versions
of `plugin-css` are installed, leading to a fork.

There are two options to resolve this:
* install with the `--lock` option
* use `jspm resolve`

##### Installing the bridge using `--lock`

The `--lock` option keeps existing dependencies locked during a JSPM installation.
So if you know the installation will introduce a fork and you want to keep
the installed version of a library, use `jspm install --lock aurelia-materialize-bridge`.

##### Using `jspm resolve`

JSPM has a builtin command to change every used version of a dependency to the
version you want.
In the case above you'd issue `jspm resolve --only github:systemjs/plugin-css@0.1.21`.
Please note that you *have to* give JSPM an exact package of the form `registry:pkg@version`.
