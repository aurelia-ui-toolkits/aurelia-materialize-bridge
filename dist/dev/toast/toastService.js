System.register([], function (_export, _context) {
  "use strict";

  var MdToastService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("MdToastService", MdToastService = function () {
        function MdToastService() {
          _classCallCheck(this, MdToastService);
        }

        MdToastService.prototype.removeAll = function removeAll() {
          Materialize.Toast.removeAll();
        };

        MdToastService.prototype.show = function show(message, displayLength, className) {
          return new Promise(function (resolve, reject) {
            var toastInstance = Materialize.toast(message, displayLength, className, function () {
              resolve(toastInstance);
            });
          });
        };

        return MdToastService;
      }());

      _export("MdToastService", MdToastService);
    }
  };
});
//# sourceMappingURL=../devbuild/dev/toast/toastService.js.map
