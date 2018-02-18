##### Datepicker icon fixup.

To prevent the datepicker icon from appearing below the datepicker, add the `std-icon-fixup` class to the datepicker `input` element.

You can provide an alternative css class by setting the `iconClass` option. Here's the style used in `std-icon-fixup` to fix the icon:

```css
[md-datepicker] + i.material-icons.std-icon-fixup {
  margin-left: -24px;
  line-height: 1;
  margin-top: 12px;
  cursor: pointer;
}
```
