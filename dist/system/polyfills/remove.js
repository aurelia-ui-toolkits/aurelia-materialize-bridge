"use strict";
function remove() {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
}
// polyfill remove for IE11
(function () {
    if (!Element.prototype.remove) {
        Element.prototype.remove = remove;
    }
    if (typeof Text !== "undefined" && Text && !Text.prototype.remove) {
        Text.prototype.remove = remove;
    }
})();
//# sourceMappingURL=remove.js.map