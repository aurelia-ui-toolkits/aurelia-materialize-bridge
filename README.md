This package is a bridge that allows easy integration of [MaterializeCSS 1.0](https://github.com/Dogfalo/materialize) with the JavaScript framework [Aurelia](https://aurelia.io/).

For use with [Materialize 2 and later](https://github.com/materializecss/materialize), refer to [this issue](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/579). With some dirty hacks, you can utilize features like Google Material Design 3's color management.

# Demo

- [Component catalog (demos)](http://aurelia-ui-toolkits.github.io/demo-materialize/)
- [Gist.run playground](https://gist.run/?id=e8eed34e8bba17f5213535bcdd004a9e)

# History and status

1. @Thanood originally developed this package to use [MaterializeCSS](https://github.com/Dogfalo/materialize) (which follows Google Material Design 1) with Aurelia, and @MaximBalaganskiy took over its maintenance.
2. Development of [MaterializeCSS](https://github.com/Dogfalo/materialize) was discontinued, leading to this package being frozen at release 1.6.4 and archived in 2020.
3. A forked version, [Materialize 2 and later](https://github.com/materializecss/materialize) of [MaterializeCSS](https://github.com/Dogfalo/materialize), was created, with ongoing improvements toward compliance with Google Material Design 3.
4. In 2024, [This issue](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/579) confirmed that it is possible to use this package with [Materialize 2](https://github.com/materializecss/materialize).

Currently, the archived status has been lifted and @HIRANO-Satoshi has become the maintainer, but it remains based on [MaterializeCSS](https://github.com/materializecss/materialize).

# Before you send issues or pull requests

Sorry, but the maintainer does not process new issues and has no concrete plans for improvements. If anyone is interested in taking over active development, please create an issue to discuss it.

Nevertheless, pull requests for Materialize 2 and later, as well as Aurelia 2, are welcome.

Please make two separate pull requests for each, so that we can have different releases for the users of Materialize 2 and the users of Aurelia 2.

Please check [contributing.md](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/blob/master/CONTRIBUTING.md) - and if these instructions look "too terse" here is a **[great set of lessons](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)**


# Alternative

[Aurelia Material Design Components](https://github.com/aurelia-ui-toolkits/aurelia-mdc-web). Note: Since Google's Material Design Components have been discontinued, the development of the package was also halted.

## Installing the plugin
[![Installation](http://dabuttonfactory.com/button.png?t=Installation+instructions&f=Calibri-Bold&ts=18&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763)](https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/installation.html)

## Running tests
1. `npm install`
2. `jspm install`
3. `gulp test`
