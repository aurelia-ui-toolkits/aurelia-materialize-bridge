    #### Indicator issue when using tabs with waves

Waves make the container `position: relative;` and because of that the position of the child (a in the tab li) cannot be calculated correctly, it's always at `left: 0`.

To work around this, set this in a css file (like in `app.css` here):

```css
[md-tabs] .waves-effect {
  position: static;
}
```
