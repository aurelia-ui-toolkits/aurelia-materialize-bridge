var DiscardablePromise = /** @class */ (function () {
    function DiscardablePromise(promise) {
        this.promise = promise;
    }
    DiscardablePromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return this.promise.then(function (x) {
            if (_this.isDiscarded) {
                return Promise.reject(DiscardablePromise.discarded);
            }
            else {
                return Promise.resolve(x);
            }
        }).then(onfulfilled, onrejected);
    };
    DiscardablePromise.prototype.discard = function () {
        this.isDiscarded = true;
    };
    DiscardablePromise.discarded = Symbol("discarded");
    return DiscardablePromise;
}());
export { DiscardablePromise };
/**
 * Sets the internal state of a promise to discarded
 * @param discardable A promise to discard
 */
export function discard(discardable) {
    if (discardable) {
        discardable.discard();
    }
}
//# sourceMappingURL=discardable-promise.js.map