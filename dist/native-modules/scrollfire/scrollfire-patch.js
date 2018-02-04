/* eslint no-new-func:0 */
export class ScrollfirePatch {
    patch() {
        if (!ScrollfirePatch.patched) {
            ScrollfirePatch.patched = true;
            Materialize.scrollFire = function (options) {
                let didScroll = false;
                window.addEventListener("scroll", function () {
                    didScroll = true;
                });
                // Rate limit to 100ms
                setInterval(function () {
                    if (didScroll) {
                        didScroll = false;
                        let windowScroll = window.pageYOffset + window.innerHeight;
                        for (let value of options) {
                            // Get options from each line
                            let selector = value.selector;
                            let offset = value.offset;
                            let callback = value.callback;
                            let currentElement = document.querySelector(selector);
                            if (currentElement !== null) {
                                let elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;
                                if (windowScroll > (elementOffset + offset)) {
                                    if (value.done !== true) {
                                        if (typeof (callback) === "string") {
                                            let callbackFunc = new Function(callback);
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
                }, 100);
            };
        }
    }
}
ScrollfirePatch.patched = false;
