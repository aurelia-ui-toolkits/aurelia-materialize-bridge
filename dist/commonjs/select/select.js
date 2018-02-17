"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_framework_1 = require("aurelia-framework");
const aurelia_binding_1 = require("aurelia-binding");
const aurelia_task_queue_1 = require("aurelia-task-queue");
const aurelia_logging_1 = require("aurelia-logging");
const events_1 = require("../common/events");
const attributes_1 = require("../common/attributes");
const aurelia_pal_1 = require("aurelia-pal");
let MdSelect = class MdSelect {
    constructor(element, bindingEngine, taskQueue) {
        this.bindingEngine = bindingEngine;
        this.taskQueue = taskQueue;
        this.disabled = false;
        this.readonly = false;
        this.enableOptionObserver = false;
        this.label = "";
        this.showErrortext = true;
        this.suspendUpdate = false;
        this.subscriptions = [];
        this.inputField = null;
        this.input = null;
        this.dropdownMutationObserver = null;
        this.optionsMutationObserver = null;
        //
        // Firefox sometimes fire blur several times in a row
        // observable at http://localhost:3000/#/samples/select/
        // when enable 'Disable Functionality', open that list and
        // then open 'Basic use' list.
        // Chrome - ok
        // IE 11 - ok
        // Edge ?
        //
        this.taskqueueRunning = false;
        this.mdUnrenderValidateResults = (results, renderer) => {
            if (!this.input) {
                return;
            }
            for (let result of results) {
                if (!result.valid) {
                    renderer.removeMessage(this.inputField, result);
                }
            }
            renderer.removeValidationClasses(this.input);
        };
        this.mdRenderValidateResults = (results, renderer) => {
            if (!this.input) {
                return;
            }
            for (let result of results) {
                if (!result.valid) {
                    result.target = this.input;
                    if (!(this.input.hasAttribute("data-show-errortext") && this.input.getAttribute("data-show-errortext") === "false")) {
                        renderer.addMessage(this.inputField, result);
                    }
                }
            }
            renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
        };
        this.element = element;
        this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
        this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.log = aurelia_logging_1.getLogger("md-select");
        this.handleFocus = this.handleFocus.bind(this);
    }
    readonlyChanged() {
        if (this.readonly) {
            this.makeReadonly($(this.element).siblings("input")[0]);
        }
        else {
            this.refresh();
        }
    }
    attached() {
        if (this.element.classList.contains("browser-default")) {
            return;
        }
        let div = $("<div class='input-field'></div>");
        let va = this.element.attributes.getNamedItem("validate");
        if (va) {
            div.attr(va.name, va.value);
        }
        $(this.element).wrap(div);
        if (this.label) {
            $(`<label class="md-select-label">${this.label}</label>`).insertAfter(this.element);
        }
        this.taskQueue.queueTask(() => {
            this.createMaterialSelect(false);
        });
        this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, "value").subscribe(this.handleChangeFromViewModel));
        this.inputField = this.element.closest(".input-field");
        $(this.element).on("change", this.handleChangeFromNativeSelect);
        this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        this.element.mdRenderValidateResults = this.mdRenderValidateResults;
    }
    detached() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        let $element = $(this.element);
        $element.off("change", this.handleChangeFromNativeSelect);
        this.observeVisibleDropdownContent(false);
        this.observeOptions(false);
        this.dropdownMutationObserver = null;
        $element.siblings(`ul#select-options-${$element.data("select-id")}`).remove();
        $element.material_select("destroy");
        $element.siblings("label").remove();
        $element.siblings(".md-input-validation").remove();
        $element.unwrap();
        this.subscriptions.forEach(sub => sub.dispose());
        this.element.mdUnrenderValidateResults = undefined;
        this.element.mdRenderValidateResults = undefined;
    }
    refresh() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        this.taskQueue.queueTask(() => {
            this.createMaterialSelect(true);
        });
    }
    labelChanged(newValue) {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        this.updateLabel();
    }
    updateLabel() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        if (this.label) {
            const $label = $(this.element).parent(".select-wrapper").siblings(".md-select-label");
            $label.text(this.label);
        }
    }
    disabledChanged(newValue) {
        this.toggleControl(newValue);
    }
    showErrortextChanged() {
        this.setErrorTextAttribute();
    }
    setErrorTextAttribute() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        let input = this.element.parentElement.querySelector("input.select-dropdown");
        if (!input) {
            return;
        }
        this.log.debug("showErrortextChanged: " + this.showErrortext);
        input.setAttribute("data-show-errortext", attributes_1.getBooleanFromAttributeValue(this.showErrortext).toString());
    }
    notifyBindingEngine() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        this.log.debug("selectedOptions changed", arguments);
    }
    handleChangeFromNativeSelect() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        if (!this.suspendUpdate) {
            this.log.debug("handleChangeFromNativeSelect", this.element.value, $(this.element).val());
            this.suspendUpdate = true;
            events_1.fireEvent(this.element, "change");
            this.suspendUpdate = false;
        }
    }
    handleChangeFromViewModel(newValue) {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        this.log.debug("handleChangeFromViewModel", newValue, $(this.element).val());
        if (!this.suspendUpdate) {
            this.createMaterialSelect(false);
        }
    }
    toggleControl(disable) {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        let $wrapper = $(this.element).parent(".select-wrapper");
        if ($wrapper.length > 0) {
            if (disable) {
                $(".caret", $wrapper).addClass("disabled");
                $("input.select-dropdown", $wrapper).attr("disabled", "disabled");
                $wrapper.attr("disabled", "disabled");
            }
            else {
                $(".caret", $wrapper).removeClass("disabled");
                $("input.select-dropdown", $wrapper).attr("disabled", null);
                $wrapper.attr("disabled", null);
            }
        }
    }
    createMaterialSelect(destroy) {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        this.observeVisibleDropdownContent(false);
        this.observeOptions(false);
        let input = $(this.element).siblings("input");
        let isValid = input.hasClass("valid");
        let isInvalid = input.hasClass("invalid");
        if (destroy) {
            $(this.element).material_select("destroy");
        }
        $(this.element).material_select();
        input = $(this.element).siblings("input");
        if (isValid) {
            input.addClass("valid");
        }
        if (isInvalid) {
            input.addClass("invalid");
        }
        this.input = input[0];
        this.toggleControl(this.disabled);
        this.observeVisibleDropdownContent(true);
        this.observeOptions(true);
        this.setErrorTextAttribute();
        if (this.readonly) {
            this.makeReadonly(input[0]);
        }
    }
    makeReadonly(input) {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        $(input).off("click");
        $(input).off("focus");
        $(input).off("keydown");
        $(input).off("open");
    }
    observeVisibleDropdownContent(attach) {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        if (attach) {
            if (!this.dropdownMutationObserver) {
                this.dropdownMutationObserver = aurelia_pal_1.DOM.createMutationObserver(mutations => {
                    let isHidden = false;
                    for (let mutation of mutations) {
                        if (window.getComputedStyle(mutation.target).getPropertyValue("display") === "none") {
                            isHidden = true;
                        }
                    }
                    if (isHidden) {
                        this.dropdownMutationObserver.takeRecords();
                        this.handleBlur();
                    }
                    else {
                        this.handleFocus();
                    }
                });
            }
            this.dropdownMutationObserver.observe(this.element.parentElement.querySelector(".dropdown-content"), {
                attributes: true,
                attributeFilter: ["style"]
            });
        }
        else {
            if (this.dropdownMutationObserver) {
                this.dropdownMutationObserver.disconnect();
                this.dropdownMutationObserver.takeRecords();
            }
        }
    }
    observeOptions(attach) {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        if (attributes_1.getBooleanFromAttributeValue(this.enableOptionObserver)) {
            if (attach) {
                if (!this.optionsMutationObserver) {
                    this.optionsMutationObserver = aurelia_pal_1.DOM.createMutationObserver(mutations => {
                        // this.log.debug('observeOptions', mutations);
                        this.refresh();
                    });
                }
                this.optionsMutationObserver.observe(this.element, {
                    // childList: true,
                    characterData: true,
                    subtree: true
                });
            }
            else {
                if (this.optionsMutationObserver) {
                    this.optionsMutationObserver.disconnect();
                    this.optionsMutationObserver.takeRecords();
                }
            }
        }
    }
    open() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        $(this.element).siblings("input.select-dropdown").trigger("focus");
    }
    handleBlur() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        if (this.taskqueueRunning) {
            return;
        }
        this.taskqueueRunning = true;
        this.taskQueue.queueTask(() => {
            this.log.debug("fire blur event");
            events_1.fireEvent(this.element, "blur");
            this.taskqueueRunning = false;
            if (this.label) {
                const $label = $(this.element).parent(".select-wrapper").siblings(".md-select-label");
                $label.removeClass("md-focused");
            }
        });
    }
    handleFocus() {
        if ((this.element).classList.contains("browser-default")) {
            return;
        }
        if (this.label) {
            const $label = $(this.element).parent(".select-wrapper").siblings(".md-select-label");
            $label.addClass("md-focused");
        }
    }
};
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdSelect.prototype, "disabled", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdSelect.prototype, "readonly", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdSelect.prototype, "enableOptionObserver", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", String)
], MdSelect.prototype, "label", void 0);
__decorate([
    aurelia_framework_1.bindable,
    __metadata("design:type", Object)
], MdSelect.prototype, "showErrortext", void 0);
MdSelect = __decorate([
    aurelia_framework_1.autoinject,
    aurelia_framework_1.customAttribute("md-select"),
    __metadata("design:paramtypes", [Element, aurelia_binding_1.BindingEngine, aurelia_task_queue_1.TaskQueue])
], MdSelect);
exports.MdSelect = MdSelect;
