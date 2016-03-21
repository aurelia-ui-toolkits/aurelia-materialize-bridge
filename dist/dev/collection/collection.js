System.register(['aurelia-templating'], function (_export) {
  'use strict';

  var customElement, MdCollection;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      MdCollection = (function () {
        function MdCollection() {
          _classCallCheck(this, _MdCollection);
        }

        var _MdCollection = MdCollection;
        MdCollection = customElement('md-collection')(MdCollection) || MdCollection;
        return MdCollection;
      })();

      _export('MdCollection', MdCollection);
    }
  };
});
//# sourceMappingURL=../dist/dev/collection/collection.js.map
