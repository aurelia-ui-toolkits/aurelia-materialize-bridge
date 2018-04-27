export function wrap(parent: HTMLElement, child: HTMLElement) {
	child.parentNode.insertBefore(parent, child);
	parent.appendChild(child);
}

export function unwrap(element: HTMLElement) {
	let wrapper = element.parentElement;
	if (wrapper.parentElement) {
		wrapper.parentElement.insertBefore(element, wrapper);
		wrapper.remove();
	}
}

export function insertAfter(element: HTMLElement, newChild: HTMLElement) {
	element.parentNode.insertBefore(newChild, element.nextSibling);
}

/**
 * Remove undefined fields from an object
 *
 * @param options An object to clean
 */
export function cleanOptions(options: any): void {
	Object.keys(options).filter(key => options[key] === undefined).forEach(key => delete options[key]);
}
