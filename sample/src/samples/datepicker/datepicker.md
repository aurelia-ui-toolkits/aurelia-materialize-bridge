##### DatePicker does not open on click

Sometimes the DatePicker does not open on click. It is yet unclear why it doesn't, since it works in this catalog application.
The workaround mentioned below is now implemented in this custom attribute.

<br />

Overriding the ```focusin``` event on the input element is a workaround.

View:

```html
<input ref="datepicker" md-datepicker="container: body;" type="date" placeholder="pick a date" />
```

View model:

```javascript
$(this.datepicker).on('focusin', () => { $(this.datepicker).pickadate('open'); });
```
