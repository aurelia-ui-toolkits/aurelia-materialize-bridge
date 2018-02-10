##### Using `md-colors`

Since the catalog app needs to be the primary source for theme changes (to not be overwritten by this sample),
we cannot display the relevant code in `app.html`.

`md-colors` is used like this:

```html
<md-colors md-primary-color="#ee6e73" md-accent-color="#009688" md-error-color="#FF0000"></md-colors>
```

Of course the three color attributes can be bound to a view-model variable and thus can be changed dynamically
by your application.

View:

```html
<md-colors md-primary-color.bind="primaryColor" md-accent-color.bind="accentColor" md-error-color="errorColor"></md-colors>
```

View model:

```javascript
export class MyApp() {
  primaryColor = '#ee6e73';
  accentColor = '#009688';
  errorColor = '#FF0000';
}
```

Hex values are definitely supported while rgb(a) values should be possible, too.
But named colors aren't since we darken/lighten some colors using their values.
