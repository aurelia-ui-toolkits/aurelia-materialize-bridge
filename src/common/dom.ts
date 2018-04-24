export function wrap(parent: HTMLElement, child: HTMLElement) {
	child.parentNode.insertBefore(parent, child);
	parent.appendChild(child);
}

export function insertAfter(element: HTMLElement, newChild: HTMLElement){
	element.parentNode.insertBefore(newChild, element.nextSibling);
}
