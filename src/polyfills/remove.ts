function remove(this: Element) {
	if (this.parentNode) {
		this.parentNode.removeChild(this);
	}
}

// polyfill remove for IE11
(function() {
	if (!Element.prototype.remove) {
		Element.prototype.remove = remove;
	}
	if (Text && !Text.prototype.remove) {
		Text.prototype.remove = remove;
	}
})();
