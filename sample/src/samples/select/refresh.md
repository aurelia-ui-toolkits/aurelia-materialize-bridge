#### What's happening?

When dynamically changing the underlying array of a select element, Materialize
doesn't update the select wrapper. For this to work, the select needs a refresh.

<br/>

Since Materialize doesn't provide a native refresh functionality, this is done
by destroying and recreating the select wrapper.

<br/>

This is useful for example when using asynchronous operations (like getting data from web services)
so you can initialize the select on view load but populate it when data arrives.
