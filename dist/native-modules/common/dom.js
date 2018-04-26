export function wrap(parent, child) {
    child.parentNode.insertBefore(parent, child);
    parent.appendChild(child);
}
export function unwrap(element) {
    var wrapper = element.parentElement;
    if (wrapper.parentElement) {
        wrapper.parentElement.insertBefore(element, wrapper);
        wrapper.remove();
    }
}
export function insertAfter(element, newChild) {
    element.parentNode.insertBefore(newChild, element.nextSibling);
}
//# sourceMappingURL=dom.js.map