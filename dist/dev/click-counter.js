"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ClickCounter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("ClickCounter", ClickCounter = function () {
        function ClickCounter() {
          _classCallCheck(this, ClickCounter);

          this.count = 0;
        }

        ClickCounter.prototype.increment = function increment() {
          this.count++;
        };

        return ClickCounter;
      }());

      _export("ClickCounter", ClickCounter);
    }
  };
});
//# sourceMappingURL=dist/dev/click-counter.js.map
