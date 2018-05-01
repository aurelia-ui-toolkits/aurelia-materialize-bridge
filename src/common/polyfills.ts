declare global {
	// tslint:disable-next-line:interface-name
	interface Element {
		mozMatchesSelector(selectors: string): boolean;
	}
}

// MB: as far as I understand, this is to support IE11 which does not have closest
// https://github.com/jonathantneal/closest/blob/master/closest.js
export function polyfillElementClosest() {
	if (typeof Element.prototype.matches !== "function") {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(this: Element, selector) {
			let element = this;
			let elements = ((element as any).document || element.ownerDocument).querySelectorAll(selector);
			let index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}
			return Boolean(elements[index]);
		};
	}

	if (typeof Element.prototype.closest !== "function") {
		Element.prototype.closest = function closest(selector) {
			let element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode as Element;
			}
			return null;
		};
	}
}
