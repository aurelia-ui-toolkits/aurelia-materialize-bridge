define(["require", "exports", "tslib", "aurelia-router", "aurelia-framework", "aurelia-logging", "./common/events", "aurelia-validation", "./validation/validationRenderer", "aurelia-typed-observable-plugin", "./common/util", "./common/attribute-manager", "./common/colors-service"], function (require, exports, tslib_1, aurelia_router_1, aurelia_framework_1, aurelia_logging_1, events_1, aurelia_validation_1, validationRenderer_1, ato, util_1, attribute_manager_1, colors_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Router = aurelia_router_1.Router;
    exports.NavigationInstruction = aurelia_router_1.NavigationInstruction;
    exports.customElement = aurelia_framework_1.customElement;
    exports.customAttribute = aurelia_framework_1.customAttribute;
    exports.autoinject = aurelia_framework_1.autoinject;
    exports.bindingMode = aurelia_framework_1.bindingMode;
    exports.BindingEngine = aurelia_framework_1.BindingEngine;
    exports.TaskQueue = aurelia_framework_1.TaskQueue;
    exports.DOM = aurelia_framework_1.DOM;
    exports.children = aurelia_framework_1.children;
    exports.bindable = aurelia_framework_1.bindable;
    exports.observable = aurelia_framework_1.observable;
    exports.TemplatingEngine = aurelia_framework_1.TemplatingEngine;
    exports.deprecated = aurelia_framework_1.deprecated;
    exports.getLogger = aurelia_logging_1.getLogger;
    exports.Logger = aurelia_logging_1.Logger;
    exports.fireEvent = events_1.fireEvent;
    exports.fireMaterializeEvent = events_1.fireMaterializeEvent;
    exports.ValidateResult = aurelia_validation_1.ValidateResult;
    exports.MaterializeFormValidationRenderer = validationRenderer_1.MaterializeFormValidationRenderer;
    exports.ato = ato;
    tslib_1.__exportStar(util_1, exports);
    exports.AttributeManager = attribute_manager_1.AttributeManager;
    exports.MdColorsService = colors_service_1.MdColorsService;
});
//# sourceMappingURL=aurelia.js.map