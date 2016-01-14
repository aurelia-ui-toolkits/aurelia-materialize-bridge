<br>

### 1. Introduction
<br>

The collection of articles contained in the **App developers tutorials** help category, _which begins with this article you are reading now_,  presents several short tutorials on using the **[KendoUI components](http://aurelia-ui-toolkits.github.io/demo-kendo/#/help/docs/about_this_application/2._components_catalog)** from **[Aurelia-KendoUI bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)** Aurelia plugin.
<br>

You need to have KendoUI bits on your machine in order to be able to follow the App developers tutorials
section. Specifically that means how you will develop the app which "hosts" the few selected controls (`autocomplete`, `button`, `chart` and `grid`). This same application that you will build from the scratch, also exists in its finished form **[here](https://github.com/aurelia-ui-toolkits/skeleton-plugin-kendo)**, provided as a courtesy to allow you to "peek" into some details that might have escaped you.
<br>

#### Important note
The whole section named **Bridge developers tutorials** is intended solely to new bridge projects contributors - a lot narrower class than people interested **App developers tutorials** dedicated to all Aurelia application developers that want to use KendoUI components provided by the Aurelia-KendoUI bridge.


* * *

Starting with one of the most simple components -  Autocomplete, we will show how can this component be added to the well known **[Aurelia Skeleton Navigation](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-es2016)** app and then add several additional components (Button, Chart and Grid). By the end of the tutorial we will have completed the **[Skeleton Navigation KendoUI](https://github.com/aurelia-ui-toolkits/skeleton-navigation-kendo)** shown below:
<br>
<br>
<p align=center>
  <img src="http://i.imgur.com/DFLEi5K.png"></img>
 <br><br>
</p>

<br>

KendoUI SDK supports the [declarative programming model](http://docs.telerik.com/kendo-ui/intro/installation/markup) - feature that makes if a perfect partner for Aurelia's rich [adaptive binding](http://eisenbergeffect.bluespire.com/aurelias-adaptive-binding/).

<br>

**Note**: Declarative programming is a programming paradigm consisting of description **what the program needs to accomplish** (in terms of the problem domain) instead of describing **how to accomplish that** as a sequence of programming language primitive and API (**[wikipedia](https://en.wikipedia.org/wiki/Declarative_programming)**).
<br>
<br>

#### Important note

All subsequent tutorials assume that you used the **HAVING KENDOUI ALREADY: VENDORS** approach described  on the **[Help on Installation](#/help/docs/about_this_application/5._installation)** page.

* * *
<br>
#### Next page: [Setup](#/help/docs/app_developers_tutorials/2._setup)
