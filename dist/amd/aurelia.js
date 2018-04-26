define(["require", "exports", "tslib", "aurelia-framework", "aurelia-logging", "./common/events", "aurelia-validation", "./validation/validationRenderer", "aurelia-typed-observable-plugin", "./common/dom", "./common/attributeManager"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_logging_1, events_1, aurelia_validation_1, validationRenderer_1, aurelia_typed_observable_plugin_1, dom_1, attributeManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customElement = aurelia_framework_1.customElement;
    exports.customAttribute = aurelia_framework_1.customAttribute;
    exports.autoinject = aurelia_framework_1.autoinject;
    exports.bindingMode = aurelia_framework_1.bindingMode;
    exports.BindingEngine = aurelia_framework_1.BindingEngine;
    exports.TaskQueue = aurelia_framework_1.TaskQueue;
    exports.DOM = aurelia_framework_1.DOM;
    exports.getLogger = aurelia_logging_1.getLogger;
    exports.Logger = aurelia_logging_1.Logger;
    exports.fireEvent = events_1.fireEvent;
    exports.fireMaterializeEvent = events_1.fireMaterializeEvent;
    exports.ValidateResult = aurelia_validation_1.ValidateResult;
    exports.MaterializeFormValidationRenderer = validationRenderer_1.MaterializeFormValidationRenderer;
    exports.bindable = aurelia_typed_observable_plugin_1.bindable;
    tslib_1.__exportStar(dom_1, exports);
    exports.AttributeManager = attributeManager_1.AttributeManager;
});
//# sourceMappingURL=aurelia.js.map