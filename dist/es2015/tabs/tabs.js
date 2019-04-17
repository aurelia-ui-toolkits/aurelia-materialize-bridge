import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let MdTabs = class MdTabs {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.tabAttributeManagers = [];
        this.fixed = false;
        this.swipeable = false;
        this.transparent = false;
        this.fireTabSelectedEvent = (e) => {
            let href = e.target.getAttribute("href");
            au.fireMaterializeEvent(this.element, "selected", href);
        };
        this.attributeManager = new au.AttributeManager(this.element);
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
    attached() {
        this.attributeManager.addClasses("tabs");
        let children = this.element.querySelectorAll("li");
        if (!children.length) {
            return;
        }
        for (let child of Array.from(children)) {
            let setter = new au.AttributeManager(child);
            setter.addClasses(["tab", "primary-text"]);
            this.tabAttributeManagers.push(setter);
        }
        let options = {
            swipeable: this.swipeable,
            responsiveThreshold: this.responsiveThreshold,
            onShow: newContent => au.fireMaterializeEvent(this.element, "show", { newContent })
        };
        au.cleanOptions(options);
        this.instance = new M.Tabs(this.element, options);
        let childAnchors = this.element.querySelectorAll("li a");
        for (let a of Array.from(childAnchors)) {
            a.addEventListener("click", this.fireTabSelectedEvent);
        }
    }
    detached() {
        this.attributeManager.removeClasses("tabs");
        if (!this.instance) {
            return;
        }
        this.instance.destroy();
        this.tabAttributeManagers.forEach(setter => {
            setter.removeClasses("tab");
        });
        this.tabAttributeManagers = [];
        let childAnchors = this.element.querySelectorAll("li a");
        for (let a of Array.from(childAnchors)) {
            a.removeEventListener("click", this.fireTabSelectedEvent);
        }
    }
    refresh() {
        this.taskQueue.queueTask(() => {
            this.detached();
            this.attached();
        });
    }
    updateTabIndicator() {
        this.instance.updateTabIndicator();
    }
    select(id) {
        this.instance.select(id);
        au.fireMaterializeEvent(this.element, "selected", `#${id}`);
    }
    // FIXME: probably bad - binding this introduces dirty checking
    get selectedTab() {
        return this.instance.index;
    }
};
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
export { MdTabs };
//# sourceMappingURL=tabs.js.map