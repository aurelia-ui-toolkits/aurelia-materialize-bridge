/**
 * Fire DOM event on an element
 * @param element The Element which the DOM event will be fired on
 * @param name The Event's name
 * @param data Addition data to attach to an event
 */
export function fireEvent(element: Element, name: string, data?: unknown) {
	const event = new CustomEvent(name, {
		detail: data,
		bubbles: true
	});
	element.dispatchEvent(event);

	return event;
}

/**
 * Fire DOM event on an element with the md-on prefix
 * @param element The Element which the DOM event will be fired on
 * @param name The Event's name, without md-on prefix
 * @param data Addition data to attach to an event
 */
export function fireMaterializeEvent(element: Element, name: string, data?: unknown) {
	return fireEvent(element, `md-on-${name}`, data);
}
