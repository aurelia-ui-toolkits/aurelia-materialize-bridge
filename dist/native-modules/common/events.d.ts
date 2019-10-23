/**
 * Fire DOM event on an element
 * @param element The Element which the DOM event will be fired on
 * @param name The Event's name
 * @param data Addition data to attach to an event
 */
export declare function fireEvent(element: Element, name: string, data?: {}): CustomEvent<{}>;
/**
 * Fire DOM event on an element with the md-on prefix
 * @param element The Element which the DOM event will be fired on
 * @param name The Event's name, without md-on prefix
 * @param data Addition data to attach to an event
 */
export declare function fireMaterializeEvent(element: Element, name: string, data?: {}): CustomEvent<{}>;
