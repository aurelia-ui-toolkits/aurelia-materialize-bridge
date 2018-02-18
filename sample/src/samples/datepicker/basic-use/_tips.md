#### tab targetting

To enable the datepicker to become a valid tab target (as in: responds to the correct tab order),
set the container to be the parent of the datepicker input. Like this:

```js
  <div ref="dpWrapper">
    <input md-datepicker="container.bind: dpWrapper; value.two-way: selectedDate;" type="date" placeholder="pick a date" />
  </div>

```

