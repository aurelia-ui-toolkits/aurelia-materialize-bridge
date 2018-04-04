var ClickCounter = /** @class */ (function () {
    function ClickCounter() {
        this.count = 0;
    }
    ClickCounter.prototype.increment = function () {
        this.count++;
    };
    return ClickCounter;
}());
export { ClickCounter };
