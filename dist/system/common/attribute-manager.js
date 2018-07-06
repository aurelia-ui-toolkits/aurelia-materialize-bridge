System.register([], function (exports_1, context_1) {
    "use strict";
    var AttributeManager;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Adds css classes to a given element only if these classes are not already
             * present. Keeps a record of css classes which actually have been added.
             * This way, they can also be removed in a way which keeps the original classes
             * set by the user.
             * Most useful in attached() and detached() handlers.
             */
            AttributeManager = /** @class */ (function () {
                function AttributeManager(element) {
                    this.element = element;
                    this.colorClasses = ["accent", "primary"];
                    this.addedClasses = [];
                    this.addedAttributes = {};
                }
                AttributeManager.prototype.addAttributes = function (attrs) {
                    var _this = this;
                    var keys = Object.keys(attrs);
                    keys.forEach(function (k) {
                        if (!_this.element.getAttribute(k)) {
                            _this.addedAttributes[k] = attrs[k];
                            _this.element.setAttribute(k, attrs[k]);
                        }
                        else if (_this.element.getAttribute(k) !== attrs[k]) {
                            _this.element.setAttribute(k, attrs[k]);
                        }
                    });
                };
                AttributeManager.prototype.removeAttributes = function (attrs) {
                    var _this = this;
                    if (typeof attrs === "string") {
                        attrs = [attrs];
                    }
                    attrs.forEach(function (a) {
                        if (_this.element.getAttribute(a) && !!_this.addedAttributes[a]) {
                            _this.element.removeAttribute(a);
                            _this.addedAttributes[a] = null;
                            delete _this.addedAttributes[a];
                        }
                    });
                };
                AttributeManager.prototype.addClasses = function (classes) {
                    var _this = this;
                    if (typeof classes === "string") {
                        classes = [classes];
                    }
                    classes.forEach(function (c) {
                        var classListHasColor = _this.colorClasses.filter(function (cc) { return _this.element.classList.contains(cc); }).length > 0;
                        if (_this.colorClasses.indexOf(c) > -1 && classListHasColor) {
                            //
                        }
                        else {
                            if (!_this.element.classList.contains(c)) {
                                _this.addedClasses.push(c);
                                _this.element.classList.add(c);
                            }
                        }
                    });
                };
                AttributeManager.prototype.removeClasses = function (classes) {
                    var _this = this;
                    if (typeof classes === "string") {
                        classes = [classes];
                    }
                    classes.forEach(function (c) {
                        if (_this.element.classList.contains(c) && _this.addedClasses.indexOf(c) > -1) {
                            _this.element.classList.remove(c);
                            _this.addedClasses.splice(_this.addedClasses.indexOf(c), 1);
                        }
                    });
                };
                return AttributeManager;
            }());
            exports_1("AttributeManager", AttributeManager);
        }
    };
});
//# sourceMappingURL=attribute-manager.js.map