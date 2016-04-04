##### Textareas don't autoresize

The reason for that is there's a "hiddendiv" created on ```document.ready()``` to determine the height of the resized textarea.
That hidden div doesn't exist anymore when the sample app creates real textareas ([see here](https://github.com/Dogfalo/materialize/blob/master/js/forms.js#L111)).
After Aurelia takes control, it replaces the content of its container (meaning ```aurelia-app="main"```).

<br/>

The reference to ```hiddenDiv``` (a variable) is essentially broken once Aurelia kicks in. I'm not sure if there is any good workaround apart from creating such a div manually and outside of Aurelia scope.

<br/>

We've added such a div in this catalog app:

```html
<body>
  <div class="hiddendiv"></div>
  <div aurelia-app="main">
  </div>
</body>
```
