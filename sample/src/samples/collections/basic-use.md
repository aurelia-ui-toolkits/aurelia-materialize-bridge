##### Usage explanation

The &lt;md-breadcrumbs&gt; custom element reads the top level router and displays a breadcrumb for each route fragment.
Credits due to [heruan's solution](https://github.com/heruan/aurelia-breadcrumbs). This Materialize implementation
is basically a copy of his work, adjusted to Materialize.

<br />

For simple manually-controlled breadcrumbs, use the classes provided by Materialize:
```html
<nav>
  <div class="nav-wrapper">
    <div class="col s12">
      <a href="#!" class="breadcrumb">First</a>
      <a href="#!" class="breadcrumb">Second</a>
      <a href="#!" class="breadcrumb">Third</a>
    </div>
  </div>
</nav>
```

You can add the ```primary``` class to ```<nav>``` to match your chosen primary color.
