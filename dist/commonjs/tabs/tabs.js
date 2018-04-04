"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_task_queue_1 = require("aurelia-task-queue");
var events_1 = require("../common/events");
var attributeManager_1 = require("../common/attributeManager");
var attributes_1 = require("../common/attributes");
var MdTabs = /** @class */ (function () {
    function MdTabs(element, taskQueue) {
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
    MdTabs.prototype.attached = function () {
        var _this = this;
        this.attributeManager.addClasses("tabs");
        var children = this.element.querySelectorAll("li");
        [].forEach.call(children, function (child) {
            var setter = new attributeManager_1.AttributeManager(child);
            setter.addClasses(["tab", "primary-text"]);
            _this.tabAttributeManagers.push(setter);
        });
        var self = this;
        $(this.element).tabs({
            onShow: function (jQueryElement) {
                if (self.onShow) {
                    self.onShow({ element: jQueryElement });
                }
            },
            swipeable: attributes_1.getBooleanFromAttributeValue(this.swipeable),
            responsiveThreshold: this.responsiveThreshold
        });
        var childAnchors = this.element.querySelectorAll("li a");
        [].forEach.call(childAnchors, function (a) {
            a.addEventListener("click", _this.fireTabSelectedEvent);
        });
    };
    MdTabs.prototype.detached = function () {
        var _this = this;
        this.attributeManager.removeClasses("tabs");
        // no destroy handler in tabs
        this.tabAttributeManagers.forEach(function (setter) {
            setter.removeClasses("tab");
        });
        this.tabAttributeManagers = [];
        var childAnchors = this.element.querySelectorAll("li a");
        [].forEach.call(childAnchors, function (a) {
            a.removeEventListener("click", _this.fireTabSelectedEvent);
        });
    };
    MdTabs.prototype.refresh = function () {
        var _this = this;
        this.taskQueue.queueTask(function () {
            var hrefs = [];
            $("li a", _this.element).each(function (i, tab) {
                $(tab).parent().addClass("tab");
                hrefs.push($(tab).attr("href"));
                tab.removeEventListener("click", _this.fireTabSelectedEvent);
                tab.addEventListener("click", _this.fireTabSelectedEvent);
            });
            $(hrefs).each(function (i, tab) {
                if (_this.selectedTab.index !== i) {
                    $(tab).hide();
                }
            });
            _this.taskQueue.queueTask(function () {
                // window resize adjusts Materialize tab indicator
                $(window).trigger("resize");
            });
        });
    };
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
    MdTabs.prototype.fireTabSelectedEvent = function (e) {
        var href = e.target.getAttribute("href");
        events_1.fireMaterializeEvent(this.element, "selected", href);
    };
    MdTabs.prototype.selectTab = function (id) {
        $(this.element).tabs("select_tab", id);
        this.fireTabSelectedEvent({
            target: { getAttribute: function () { return "#" + id; } }
        });
    };
    Object.defineProperty(MdTabs.prototype, "selectedTab", {
        // FIXME: probably bad - binding this introduces dirty checking
        get: function () {
            var children = this.element.querySelectorAll("li.tab a");
            var index = -1;
            var href = null;
            [].forEach.call(children, function (a, i) {
                if (a.classList.contains("active")) {
                    index = i;
                    href = a.href;
                    return;
                }
            });
            return { href: href, index: index };
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdTabs.prototype, "fixed", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Function)
    ], MdTabs.prototype, "onShow", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdTabs.prototype, "responsiveThreshold", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdTabs.prototype, "swipeable", void 0);
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdTabs.prototype, "transparent", void 0);
    MdTabs = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-tabs"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, aurelia_task_queue_1.TaskQueue])
    ], MdTabs);
    return MdTabs;
}());
exports.MdTabs = MdTabs;
