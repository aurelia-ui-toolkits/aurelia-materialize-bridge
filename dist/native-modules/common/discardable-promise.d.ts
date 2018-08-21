export declare class DiscardablePromise<T> implements PromiseLike<T> {
    private promise;
    constructor(promise: Promise<T>);
    static discarded: symbol;
    isDiscarded: boolean;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2>;
    discard(): void;
}
/**
 * Sets the internal state of a promise to discarded
 * @param discardable A promise to discard
 */
export declare function discard<T>(discardable: DiscardablePromise<T> | null | undefined): void;
