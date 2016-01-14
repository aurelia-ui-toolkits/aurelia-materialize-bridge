<br>

### 6. Grid
<br>

##### View: k-grid.html

```html
<template>
    <require from="./basic-grid.css"></require>
        <section>
            <br>
            <h3>Basic KendoUI Grid sample</h3>

            <a href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/tree/master/sample/src/samples/grid">See KendoUI Bridge grid folder for more details</a>
            <br>
            <br>
            <k-grid k-data-source.bind="datasource" k-pageable.bind="pageable" k-sortable.bind="true">
                <au-col title="Contact Name" field="ContactName">
                    <div class='customer-photo' style="background-image: url(http://demos.telerik.com/kendo-ui/content/web/Customers/${CustomerID}.jpg);"></div>
                    <div class='customer-name'>${ContactName}</div>
                </au-col>
                <au-col title="Contact Name" field="ContactName"></au-col>
                <au-col title="Contact Title" field="ContactTitle"></au-col>
                <au-col title="Company Name" field="CompanyName"></au-col>
                <au-col field="Country"></au-col>
            </k-grid>
        </section>
</template>
```
<br>

Here is this view rendered by the **[application associated with this tutorial](https://github.com/aurelia-ui-toolkits/skeleton-navigation-kendo)**.
<br><br>


<p align=center>
  <img src="http://i.imgur.com/lZunvna.png"></img>
 <br><br>
Image 1
</p>

<br>

**Note**: This sample grid requires some additional css in order to render the images of the contact people framed in circles.

<br>


**Note**: This view model defines the grid data to be fetched from Telerik's server where they are stored in odata format:


&nbsp; &nbsp; &nbsp; &nbsp; `//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers`


and that the grid should show 10 rows per page.
<br>
<br>

##### View model:  k-grid.js

```javascript
export class BasicUse {

  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };

  constructor() {
    this.datasource = {
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
      },
      pageSize: 5
    };
  }
}

```
<br>

##### View model: basic-grid.css

```
.customer-photo {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-size: 32px 35px;
    background-position: center center;
    vertical-align: middle;
    line-height: 32px;
    box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0,0,0,.2);
    margin-left: 5px;
}

.customer-name {
    display: inline-block;
    vertical-align: middle;
    line-height: 32px;
    padding-left: 3px;
}
```
<br>
<br>


* * *
<br>
#### More details: [Components catalog](#/samples/grid)
#### Next page: &nbsp;&nbsp; [Next actions](#/help/docs/app_developers_tutorials/7._next_actions)

