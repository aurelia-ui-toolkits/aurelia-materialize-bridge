export function wrap(parent: HTMLElement, child: HTMLElement) {
	child.parentNode.insertBefore(parent, child);
	parent.appendChild(child);
}

export function unwrap(element: HTMLElement) {
	element.parentElement.parentElement.insertBefore(element, element.parentElement);
	element.parentElement.remove();
}

export function insertAfter(element: HTMLElement, newChild: HTMLElement){
	element.parentNode.insertBefore(newChild, element.nextSibling);
}
