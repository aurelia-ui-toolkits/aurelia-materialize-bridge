declare global  {
    interface Element {
        mozMatchesSelector(selectors: string): boolean;
    }
}
export declare function polyfillElementClosest(): void;
