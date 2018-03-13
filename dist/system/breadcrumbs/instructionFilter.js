System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InstructionFilterValueConverter;
    return {
        setters: [],
        execute: function () {
            InstructionFilterValueConverter = class InstructionFilterValueConverter {
                toView(navigationInstructions) {
                    return navigationInstructions.filter(i => !!i.config.title);
                }
            };
            exports_1("InstructionFilterValueConverter", InstructionFilterValueConverter);
        }
    };
});
