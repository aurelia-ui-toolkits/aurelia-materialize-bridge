System.register(['aurelia-templating'], function (_export) {
  'use strict';

  var customElement, MdCollectionItem;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      MdCollectionItem = (function () {
        function MdCollectionItem() {
          _classCallCheck(this, _MdCollectionItem);
        }

        var _MdCollectionItem = MdCollectionItem;
        MdCollectionItem = customElement('md-collection-item')(MdCollectionItem) || MdCollectionItem;
        return MdCollectionItem;
      })();

      _export('MdCollectionItem', MdCollectionItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/collection/collection-item.js.map
