<br>

### 1. Introduction
<br>
<br>
Describing this application in a few words is not a simple task due to its "multiple personalities". It started as an advanced exercise in writing Aurelia Plugin, a basic building block of the whole Aurelia Framework, with the intent to create Aurelia Components from KendoUI controls. This "personality" is encapsulated in **[this Github repository](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)**
<br><br>

In order to accelerate the development of this plugin, we decided to use somewhat unusual architecture, where we embedded the application acting as a consumer of the plugin's service into the plugin project itself. This way, each newly added "wrapper" to **[this folder](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/src)** can immediately be tested in this **[embedded application](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src)**.
<br><br>

Having this embedded application in place, it became instantly obvious that it would be very useful if it could be also hosted on Github as an independent application, so we could use the references to the sections of the app and the plugin in the context of the application's on-line help documents. As a result we have this "embeded" application **[here](http://aurelia-ui-toolkits.github.io/demo-kendo)**, with the great feature - it automatically reflects the state of the whole project.
<br><br>

As we started to improve this application's user interface (by using the KendoUI controls that are already available as Aurelia components), it became apparent that calling this application **Aurelia-KendoUI components catalog** is the best name for the whole project, which can now be seen as the **[Catalog](#/samples)** with the __embedded__ **[plugin](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/src)**.
<br><br>

The help category named **"About this application"** (the article you are reading now is the first item in that collection) refers to the **[standalone instance](http://aurelia-ui-toolkits.github.io/demo-kendo)** of the **[embedded sample application](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample)** in the **[Aurelia-KendoUI bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)** project.
<br>
<br>

This explanation will make more sense after checking the information in the category **[Bridge developers tutorials](#/help/docs/bridge_developers_tutorials/1._introduction)**, which explains the overall structure of the Aurelia plugin project which **implements** the KendoUI bridge. Note that we are using the term **bridge** to point out the specific **purpose** of the Aurelia KendoUI plugin project - to implement the Aurelia friendly interface / bridge to KendoUI controls set.
<br>
<br>
<br>
#### We suggest to read the [Navigation page](#/help/docs/about_this_application/2._navigation_guide) next.
