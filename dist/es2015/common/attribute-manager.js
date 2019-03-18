/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export class AttributeManager {
    constructor(element) {
        this.element = element;
        this.colorClasses = ["accent", "primary"];
        this.addedClasses = [];
        this.addedAttributes = {};
    }
    addAttributes(attrs) {
        let keys = Object.keys(attrs);
        keys.forEach(k => {
            if (!this.element.getAttribute(k)) {
                this.addedAttributes[k] = attrs[k];
                this.element.setAttribute(k, attrs[k]);
            }
            else if (this.element.getAttribute(k) !== attrs[k]) {
                this.element.setAttribute(k, attrs[k]);
            }
        });
    }
    removeAttributes(attrs) {
        if (typeof attrs === "string") {
            attrs = [attrs];
        }
        attrs.forEach(a => {
            if (this.element.getAttribute(a) && !!this.addedAttributes[a]) {
                this.element.removeAttribute(a);
                this.addedAttributes[a] = null;
                delete this.addedAttributes[a];
            }
        });
    }
    addClasses(classes) {
        if (typeof classes === "string") {
            classes = [classes];
        }
        classes.forEach(c => {
            let classListHasColor = this.colorClasses.filter(cc => this.element.classList.contains(cc)).length > 0;
            if (this.colorClasses.indexOf(c) > -1 && classListHasColor) {
                //
            }
            else {
                if (!this.element.classList.contains(c)) {
                    this.addedClasses.push(c);
                    this.element.classList.add(c);
                }
            }
        });
    }
    removeClasses(classes) {
        if (typeof classes === "string") {
            classes = [classes];
        }
        classes.forEach(c => {
            if (this.element.classList.contains(c) && this.addedClasses.indexOf(c) > -1) {
                this.element.classList.remove(c);
                this.addedClasses.splice(this.addedClasses.indexOf(c), 1);
            }
        });
    }
}
//# sourceMappingURL=attribute-manager.js.map