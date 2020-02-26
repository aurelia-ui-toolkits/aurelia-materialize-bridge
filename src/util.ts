export function wrap(parent: HTMLElement, child: HTMLElement) {
	child.parentNode?.insertBefore(parent, child);
	parent.appendChild(child);
}

export function unwrap(element: HTMLElement) {
	const wrapper = element.parentElement;
	if (wrapper === null) {
		return;
	}
	if (wrapper.parentElement !== null) {
		wrapper.parentElement.insertBefore(element, wrapper);
		wrapper.remove();
	}
}

export function insertAfter(element: HTMLElement, newChild: HTMLElement) {
	element.parentNode?.insertBefore(newChild, element.nextSibling);
}

/**
 * Remove undefined fields from an object
 *
 * @param options An object to clean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanOptions(options: any): void {
	Object.keys(options).filter(key => options[key] === undefined).forEach(key => delete options[key]);
}

export function updateLabel(input: HTMLInputElement, label: HTMLLabelElement) {
	// the following is copied from the updateTextFields method
	// it is more efficient than updating all the inputs
	if (!label) {
		// already invalid reference to label
		return;
	}
	if (input?.value && input.value.length > 0 || input.matches(':focus') || input.autofocus || input.hasAttribute('placeholder')) {
		label.classList.add('active');
	}
	else if (input?.validity) {
		label.classList.toggle('active', input.validity.badInput === true);
	}
	else {
		label.classList.remove('active');
	}
}
