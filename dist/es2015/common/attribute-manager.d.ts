/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export declare class AttributeManager {
    private element;
    constructor(element: Element);
    colorClasses: string[];
    addedClasses: string[];
    addedAttributes: any;
    addAttributes(attrs: any): void;
    removeAttributes(attrs: any): void;
    addClasses(classes: any): void;
    removeClasses(classes: any): void;
}
