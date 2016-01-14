System.register([], function (_export) {
  "use strict";

  var ClickCounter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      ClickCounter = (function () {
        function ClickCounter() {
          _classCallCheck(this, ClickCounter);

          this.count = 0;
        }

        ClickCounter.prototype.increment = function increment() {
          this.count++;
        };

        return ClickCounter;
      })();

      _export("ClickCounter", ClickCounter);
    }
  };
});