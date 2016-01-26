# extracting color palettes to JSON from Materialize site (es5)

Construct an array from the contents of [the color page](http://materializecss.com/color.html):
1. copy the palette table and paste into an editor
2. replace \r with an empty string
3. replace \n with ','
4. add [' at the beginning of the string
5. add '] at the end of the string

```javascript
var source = [copy_from_above];
var palettes = {};
source.forEach(function (item) {
  var tokens = item.split(' ');
  var hex = tokens[0];
  var palette = tokens[1];
  var variant = tokens[2] || 'base';

  if (!palettes[palette]) palettes[palette] = {};
  palettes[palette][variant] = hex;
});
```

The resulting variable ```palettes``` should be a JavaScript object with which you can fill material-colors.json
