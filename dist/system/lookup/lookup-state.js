System.register([], function (exports_1, context_1) {
    "use strict";
    var LookupState;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (LookupState) {
                LookupState[LookupState["optionsVisible"] = 0] = "optionsVisible";
                LookupState[LookupState["searching"] = 1] = "searching";
                LookupState[LookupState["noMatches"] = 2] = "noMatches";
                LookupState[LookupState["error"] = 3] = "error";
            })(LookupState || (LookupState = {}));
            exports_1("LookupState", LookupState);
        }
    };
});
//# sourceMappingURL=lookup-state.js.map