define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MdToastService = exports.MdToastService = function () {
    function MdToastService() {
      _classCallCheck(this, MdToastService);
    }

    MdToastService.prototype.show = function show(message, displayLength, className) {
      return new Promise(function (resolve, reject) {
        Materialize.toast(message, displayLength, className, function () {
          resolve();
        });
      });
    };

    return MdToastService;
  }();
});