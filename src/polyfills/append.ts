// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function(arr) {
	arr.forEach(function(item) {
		if (item.hasOwnProperty("append")) {
			return;
		}
		Object.defineProperty(item, "append", {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function append() {
				let argArr = Array.prototype.slice.call(arguments);
				let docFrag = document.createDocumentFragment();

				argArr.forEach(function(argItem) {
					let isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.appendChild(docFrag);
			}
		});
	});
})(typeof Document !== "undefined" ? [Element.prototype, Document.prototype, DocumentFragment.prototype] : []);
