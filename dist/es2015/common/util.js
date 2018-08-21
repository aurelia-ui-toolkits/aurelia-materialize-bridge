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
/**
 * Remove undefined fields from an object
 *
 * @param options An object to clean
 */
export function cleanOptions(options) {
    Object.keys(options).filter(function (key) { return options[key] === undefined; }).forEach(function (key) { return delete options[key]; });
}
export function updateLabel(input, label) {
    // the following is copied from the updateTextFields method
    // it is more efficient than updating all the inputs
    if (input.value && input.value.length > 0 || input.autofocus || input.hasAttribute("placeholder")) {
        label.classList.add("active");
    }
    else if (input.validity) {
        label.classList.toggle("active", input.validity.badInput === true);
    }
    else {
        label.classList.remove("active");
    }
}
//# sourceMappingURL=util.js.map