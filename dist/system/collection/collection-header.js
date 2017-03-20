'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var customElement, inject, _dec, _dec2, _class, MdCollectionHeader;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      _export('MdCollectionHeader', MdCollectionHeader = (_dec = customElement('md-collection-header'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function MdCollectionHeader(element) {
        _classCallCheck(this, MdCollectionHeader);

        this.element = element;
      }) || _class) || _class));

      _export('MdCollectionHeader', MdCollectionHeader);
    }
  };
});