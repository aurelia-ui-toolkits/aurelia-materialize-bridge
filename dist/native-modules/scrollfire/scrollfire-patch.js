import * as tslib_1 from "tslib";
/* eslint no-new-func:0 */
var ScrollfirePatch = /** @class */ (function () {
    function ScrollfirePatch() {
    }
    ScrollfirePatch.prototype.patch = function () {
        if (!ScrollfirePatch.patched) {
            ScrollfirePatch.patched = true;
            Materialize.scrollFire = function (options) {
                var didScroll = false;
                window.addEventListener("scroll", function () {
                    didScroll = true;
                });
                // Rate limit to 100ms
                setInterval(function () {
                    if (didScroll) {
                        didScroll = false;
                        var windowScroll = window.pageYOffset + window.innerHeight;
                        try {
                            for (var options_1 = tslib_1.__values(options), options_1_1 = options_1.next(); !options_1_1.done; options_1_1 = options_1.next()) {
                                var value = options_1_1.value;
                                // Get options from each line
                                var selector = value.selector;
                                var offset = value.offset;
                                var callback = value.callback;
                                var currentElement = document.querySelector(selector);
                                if (currentElement !== null) {
                                    var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;
                                    if (windowScroll > (elementOffset + offset)) {
                                        if (value.done !== true) {
                                            if (typeof (callback) === "string") {
                                                var callbackFunc = new Function(callback);
                                                callbackFunc();
                                            }
                                            else if (typeof (callback) === "function") {
                                                callback();
                                            }
                                            value.done = true;
                                        }
                                    }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (options_1_1 && !options_1_1.done && (_a = options_1.return)) _a.call(options_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    }
                    var e_1, _a;
                }, 100);
            };
        }
    };
    ScrollfirePatch.patched = false;
    return ScrollfirePatch;
}());
export { ScrollfirePatch };
