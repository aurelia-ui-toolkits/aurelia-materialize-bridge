'use strict';

System.register(['aurelia-templating'], function (_export, _context) {
  "use strict";

  var customElement, _dec, _class, MdCollectionItem;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      _export('MdCollectionItem', MdCollectionItem = (_dec = customElement('md-collection-item'), _dec(_class = function MdCollectionItem() {
        _classCallCheck(this, MdCollectionItem);
      }) || _class));

      _export('MdCollectionItem', MdCollectionItem);
    }
  };
});