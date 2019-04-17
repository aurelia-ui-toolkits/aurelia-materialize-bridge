System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdTabs;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            MdTabs = /** @class */ (function () {
                function MdTabs(element, taskQueue) {
                    var _this = this;
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.tabAttributeManagers = [];
                    this.fixed = false;
                    this.swipeable = false;
                    this.transparent = false;
                    this.fireTabSelectedEvent = function (e) {
                        var href = e.target.getAttribute("href");
                        au.fireMaterializeEvent(_this.element, "selected", href);
                    };
                    this.attributeManager = new au.AttributeManager(this.element);
                }
                MdTabs.prototype.fixedChanged = function (newValue) {
                    if (newValue) {
                        this.attributeManager.addClasses("tabs-fixed-width");
                    }
                    else {
                        this.attributeManager.removeClasses("tabs-fixed-width");
                    }
                };
                MdTabs.prototype.transparentChanged = function (newValue) {
                    if (newValue) {
                        this.attributeManager.addClasses("tabs-transparent");
                    }
                    else {
                        this.attributeManager.removeClasses("tabs-transparent");
                    }
                };
                MdTabs.prototype.attached = function () {
                    var _this = this;
                    var e_1, _a, e_2, _b;
                    this.attributeManager.addClasses("tabs");
                    var children = this.element.querySelectorAll("li");
                    if (!children.length) {
                        return;
                    }
                    try {
                        for (var _c = tslib_1.__values(Array.from(children)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var child = _d.value;
                            var setter = new au.AttributeManager(child);
                            setter.addClasses(["tab", "primary-text"]);
                            this.tabAttributeManagers.push(setter);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    var options = {
                        swipeable: this.swipeable,
                        responsiveThreshold: this.responsiveThreshold,
                        onShow: function (newContent) { return au.fireMaterializeEvent(_this.element, "show", { newContent: newContent }); }
                    };
                    au.cleanOptions(options);
                    this.instance = new M.Tabs(this.element, options);
                    var childAnchors = this.element.querySelectorAll("li a");
                    try {
                        for (var _e = tslib_1.__values(Array.from(childAnchors)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var a = _f.value;
                            a.addEventListener("click", this.fireTabSelectedEvent);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                };
                MdTabs.prototype.detached = function () {
                    var e_3, _a;
                    this.attributeManager.removeClasses("tabs");
                    if (!this.instance) {
                        return;
                    }
                    this.instance.destroy();
                    this.tabAttributeManagers.forEach(function (setter) {
                        setter.removeClasses("tab");
                    });
                    this.tabAttributeManagers = [];
                    var childAnchors = this.element.querySelectorAll("li a");
                    try {
                        for (var _b = tslib_1.__values(Array.from(childAnchors)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var a = _c.value;
                            a.removeEventListener("click", this.fireTabSelectedEvent);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                };
                MdTabs.prototype.refresh = function () {
                    var _this = this;
                    this.taskQueue.queueTask(function () {
                        _this.detached();
                        _this.attached();
                    });
                };
                MdTabs.prototype.updateTabIndicator = function () {
                    this.instance.updateTabIndicator();
                };
                MdTabs.prototype.select = function (id) {
                    this.instance.select(id);
                    au.fireMaterializeEvent(this.element, "selected", "#" + id);
                };
                Object.defineProperty(MdTabs.prototype, "selectedTab", {
                    // FIXME: probably bad - binding this introduces dirty checking
                    get: function () {
                        return this.instance.index;
                    },
                    enumerable: true,
                    configurable: true
                });
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdTabs.prototype, "fixed", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd,
                    tslib_1.__metadata("design:type", Number)
                ], MdTabs.prototype, "responsiveThreshold", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdTabs.prototype, "swipeable", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], MdTabs.prototype, "transparent", void 0);
                MdTabs = tslib_1.__decorate([
                    au.customAttribute("md-tabs"),
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element, au.TaskQueue])
                ], MdTabs);
                return MdTabs;
            }());
            exports_1("MdTabs", MdTabs);
        }
    };
});
//# sourceMappingURL=tabs.js.map