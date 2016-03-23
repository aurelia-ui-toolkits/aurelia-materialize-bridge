'use strict';

System.register(['aurelia-templating'], function (_export, _context) {
  var customElement, _dec, _class, MdCollection;

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
      _export('MdCollection', MdCollection = (_dec = customElement('md-collection'), _dec(_class = function MdCollection() {
        _classCallCheck(this, MdCollection);
      }) || _class));

      _export('MdCollection', MdCollection);
    }
  };
});