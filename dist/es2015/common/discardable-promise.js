export class DiscardablePromise {
    constructor(promise) {
        this.promise = promise;
    }
    then(onfulfilled, onrejected) {
        return this.promise.then(x => {
            if (this.isDiscarded) {
                return Promise.reject(DiscardablePromise.discarded);
            }
            else {
                return Promise.resolve(x);
            }
        }).then(onfulfilled, onrejected);
    }
    discard() {
        this.isDiscarded = true;
    }
}
DiscardablePromise.discarded = Symbol("discarded");
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