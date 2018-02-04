System.register(["aurelia-framework", "../common/events", "../common/attributeManager", "../common/attributes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, events_1, attributeManager_1, attributes_1, MdTabs;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (attributeManager_1_1) {
                attributeManager_1 = attributeManager_1_1;
            },
            function (attributes_1_1) {
                attributes_1 = attributes_1_1;
            }
        ],
        execute: function () {
            MdTabs = class MdTabs {
                constructor(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.tabAttributeManagers = [];
                    this.fixed = false;
                    this.onShow = null;
                    this.responsiveThreshold = Infinity;
                    this.swipeable = false;
                    this.transparent = false;
                    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
                    this.attributeManager = new attributeManager_1.AttributeManager(this.element);
                }
                attached() {
                    this.attributeManager.addClasses("tabs");
                    let children = this.element.querySelectorAll("li");
                    [].forEach.call(children, child => {
                        let setter = new attributeManager_1.AttributeManager(child);
                        setter.addClasses(["tab", "primary-text"]);
                        this.tabAttributeManagers.push(setter);
                    });
                    const self = this;
                    $(this.element).tabs({
                        onShow(jQueryElement) {
                            if (self.onShow) {
                                self.onShow({ element: jQueryElement });
                            }
                        },
                        swipeable: attributes_1.getBooleanFromAttributeValue(this.swipeable),
                        responsiveThreshold: this.responsiveThreshold
                    });
                    let childAnchors = this.element.querySelectorAll("li a");
                    [].forEach.call(childAnchors, a => {
                        a.addEventListener("click", this.fireTabSelectedEvent);
                    });
                }
                detached() {
                    this.attributeManager.removeClasses("tabs");
                    // no destroy handler in tabs
                    this.tabAttributeManagers.forEach(setter => {
                        setter.removeClasses("tab");
                    });
                    this.tabAttributeManagers = [];
                    let childAnchors = this.element.querySelectorAll("li a");
                    [].forEach.call(childAnchors, a => {
                        a.removeEventListener("click", this.fireTabSelectedEvent);
                    });
                }
                refresh() {
                    this.taskQueue.queueTask(() => {
                        let hrefs = [];
                        $("li a", this.element).each((i, tab) => {
                            $(tab).parent().addClass("tab");
                            hrefs.push($(tab).attr("href"));
                            tab.removeEventListener("click", this.fireTabSelectedEvent);
                            tab.addEventListener("click", this.fireTabSelectedEvent);
                        });
                        $(hrefs).each((i, tab) => {
                            if (this.selectedTab.index !== i) {
                                $(tab).hide();
                            }
                        });
                        this.taskQueue.queueTask(() => {
                            // window resize adjusts Materialize tab indicator
                            $(window).trigger("resize");
                        });
                    });
                }
                fixedChanged(newValue) {
                    if (newValue) {
                        this.attributeManager.addClasses("tabs-fixed-width");
                    }
                    else {
                        this.attributeManager.removeClasses("tabs-fixed-width");
                    }
                }
                transparentChanged(newValue) {
                    if (newValue) {
                        this.attributeManager.addClasses("tabs-transparent");
                    }
                    else {
                        this.attributeManager.removeClasses("tabs-transparent");
                    }
                }
                fireTabSelectedEvent(e) {
                    let href = e.target.getAttribute("href");
                    events_1.fireMaterializeEvent(this.element, "selected", href);
                }
                selectTab(id) {
                    $(this.element).tabs("select_tab", id);
                    this.fireTabSelectedEvent({
                        target: { getAttribute: () => `#${id}` }
                    });
                }
                // FIXME: probably bad - binding this introduces dirty checking
                get selectedTab() {
                    let children = this.element.querySelectorAll("li.tab a");
                    let index = -1;
                    let href = null;
                    [].forEach.call(children, (a, i) => {
                        if (a.classList.contains("active")) {
                            index = i;
                            href = a.href;
                            return;
                        }
                    });
                    return { href, index };
                }
            };
            __decorate([
                aurelia_framework_1.bindable
            ], MdTabs.prototype, "fixed", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdTabs.prototype, "onShow", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdTabs.prototype, "responsiveThreshold", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdTabs.prototype, "swipeable", void 0);
            __decorate([
                aurelia_framework_1.bindable
            ], MdTabs.prototype, "transparent", void 0);
            MdTabs = __decorate([
                aurelia_framework_1.customAttribute("md-tabs"),
                aurelia_framework_1.autoinject
            ], MdTabs);
            exports_1("MdTabs", MdTabs);
        }
    };
});
