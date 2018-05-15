define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdWaitCursorCustomAttribute = /** @class */ (function () {
        function MdWaitCursorCustomAttribute(element, templatingEngine) {
            this.element = element;
            this.templatingEngine = templatingEngine;
        }
        MdWaitCursorCustomAttribute.prototype.valueChanged = function (newVal) {
            if (newVal && this.trResizeDelegate) {
                this.trResizeDelegate();
            }
        };
        MdWaitCursorCustomAttribute.prototype.attached = function () {
            switch (this.element.tagName) {
                case "MD-INPUT":
                    this.attachedMdInput();
                    break;
                case "BUTTON":
                    this.attachedButton();
                    break;
                case "LI":
                    this.attachedLi();
                    break;
                case "TR":
                    this.attachedTr();
                    break;
            }
        };
        MdWaitCursorCustomAttribute.prototype.attachedMdInput = function () {
            var inputField = this.element.querySelector("input-field");
            if (!inputField) {
                return;
            }
            var progress = document.createElement("div");
            progress.innerHTML = "<md-progress type='circular' size='small' show.bind='value' style='position: absolute; left: 100%; transform: translateX(-100%);'></md-progress>";
            progress = progress.firstElementChild;
            inputField.insertAdjacentElement("afterbegin", progress);
            var view = this.templatingEngine.enhance(progress);
            view.bind(this);
            view.attached();
        };
        MdWaitCursorCustomAttribute.prototype.attachedButton = function () {
            var progress = document.createElement("div");
            progress.innerHTML =
                "<div show.bind='value' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.7; background: white; z-index: 98;'></div>" +
                    "<md-progress type='circular' size='small' show.bind='value' style='position: absolute; left: 50%; top: 50%; height: 36px; transform: translateX(-50%) translateY(-50%); z-index: 99;'></md-progress>";
            progress.style.position = "relative";
            progress.style.display = "inline-block";
            progress.classList.add("button-wait-cursor-wrapper");
            this.element.insertAdjacentElement("beforebegin", progress);
            var view = this.templatingEngine.enhance(progress);
            view.bind(this);
            view.attached();
            progress.appendChild(this.element);
        };
        MdWaitCursorCustomAttribute.prototype.attachedLi = function () {
            var progress = document.createElement("div");
            progress.innerHTML =
                "<div show.bind='value' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.7; background: white; z-index: 98; overflow: hidden;'>" +
                    "<md-progress type='circular' size='small' show.bind='value' style='position: absolute; left: 50%; top: 50%; height: 36px; transform: translateX(-50%) translateY(-50%); z-index: 99;'></md-progress>" +
                    "</div>";
            progress = progress.firstElementChild;
            var view = this.templatingEngine.enhance(progress);
            view.bind(this);
            view.attached();
            this.element.appendChild(progress);
        };
        MdWaitCursorCustomAttribute.prototype.attachedTr = function () {
            var _this = this;
            var tr = this.element;
            var firstTd = this.element.firstElementChild;
            var progress = document.createElement("div");
            progress.innerHTML =
                "<div show.bind='value'>" +
                    "<div style='opacity: 0.7; background: white; width: 100%; height: 100%;'></div>" +
                    "<md-progress md-type='circular' md-size='small' style='position: absolute; left: 50%; top: 50%; height: 36px; transform: translateX(-50%) translateY(-50%);'></md-progress>" +
                    "</div>";
            progress = progress.firstChild;
            this.trResizeDelegate = function () {
                if (!_this.value) {
                    return;
                }
                progress.style.position = "absolute";
                progress.style.top = tr.offsetTop + "px";
                progress.style.left = tr.offsetLeft + tr.parentElement.scrollLeft + "px";
                progress.style.width = tr.offsetWidth + "px";
                progress.style.height = tr.offsetHeight + "px";
            };
            var view = this.templatingEngine.enhance(progress);
            view.bind(this);
            view.attached();
            this.trResizeDelegate();
            window.addEventListener("resize", this.trResizeDelegate);
            progress.onclick = function (ev) { ev.cancelBubble = true; };
            firstTd.appendChild(progress);
        };
        MdWaitCursorCustomAttribute.prototype.detached = function () {
            if (this.trResizeDelegate) {
                window.removeEventListener("resize", this.trResizeDelegate);
                this.trResizeDelegate = null;
            }
        };
        MdWaitCursorCustomAttribute = tslib_1.__decorate([
            au.customAttribute("md-wait-cursor"),
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element, au.TemplatingEngine])
        ], MdWaitCursorCustomAttribute);
        return MdWaitCursorCustomAttribute;
    }());
    exports.MdWaitCursorCustomAttribute = MdWaitCursorCustomAttribute;
});
//# sourceMappingURL=wait-cursor.js.map