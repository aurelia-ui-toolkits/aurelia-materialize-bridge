var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { getLogger } from "aurelia-logging";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { fireMaterializeEvent } from "../common/events";
import { MdSidenav } from "./sidenav";
let MdSidenavCollapse = class MdSidenavCollapse {
    constructor(element) {
        this.element = element;
        this.element = element;
        this.log = getLogger("md-sidenav-collapse");
    }
    attached() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ref.whenAttached;
            const closeOnClick = this.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(this.ref.mdCloseOnClick);
            this.onHide = this.onHide.bind(this);
            this.onShow = this.onShow.bind(this);
            this.element.setAttribute("data-activates", this.ref.controlId);
            let sideNavConfig = {
                edge: this.ref.mdEdge || "left",
                closeOnClick,
                menuWidth: parseInt(this.ref.mdWidth.toString(), 10),
                onClose: this.onHide,
                onOpen: this.onShow
            };
            $(this.element).sideNav(sideNavConfig);
        });
    }
    detached() {
        // destroy handler not available
    }
    show() {
        $(this.element).sideNav("show");
    }
    hide() {
        $(this.element).sideNav("hide");
    }
    onShow(el) {
        fireMaterializeEvent(this.ref.element, "sidenav-show");
    }
    onHide(el) {
        fireMaterializeEvent(this.ref.element, "sidenav-hide");
    }
};
__decorate([
    bindable,
    __metadata("design:type", MdSidenav)
], MdSidenavCollapse.prototype, "ref", void 0);
MdSidenavCollapse = __decorate([
    customAttribute("md-sidenav-collapse"),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdSidenavCollapse);
export { MdSidenavCollapse };
