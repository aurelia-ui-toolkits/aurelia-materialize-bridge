var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { fireMaterializeEvent } from "../common/events";
import { AttributeManager } from "../common/attributeManager";
import { getBooleanFromAttributeValue } from "../common/attributes";
let MdTabs = class MdTabs {
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
        this.attributeManager = new AttributeManager(this.element);
    }
    attached() {
        this.attributeManager.addClasses("tabs");
        let children = this.element.querySelectorAll("li");
        [].forEach.call(children, child => {
            let setter = new AttributeManager(child);
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
            swipeable: getBooleanFromAttributeValue(this.swipeable),
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
        fireMaterializeEvent(this.element, "selected", href);
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
    bindable
], MdTabs.prototype, "fixed", void 0);
__decorate([
    bindable
], MdTabs.prototype, "onShow", void 0);
__decorate([
    bindable
], MdTabs.prototype, "responsiveThreshold", void 0);
__decorate([
    bindable
], MdTabs.prototype, "swipeable", void 0);
__decorate([
    bindable
], MdTabs.prototype, "transparent", void 0);
MdTabs = __decorate([
    customAttribute("md-tabs"),
    autoinject
], MdTabs);
export { MdTabs };
