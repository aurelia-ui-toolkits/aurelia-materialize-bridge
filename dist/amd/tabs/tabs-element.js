define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdTabsElement = (function () {
    function MdTabsElement(element) {
      _classCallCheck(this, _MdTabsElement);

      this.element = element;
    }

    MdTabsElement.prototype.attached = function attached() {
      $(this.element).tabs();
    };

    MdTabsElement.prototype.detached = function detached() {};

    var _MdTabsElement = MdTabsElement;
    MdTabsElement = _aureliaFramework.inlineView('\n  <template>\n    <ul class="tabs">\n      <content></content>\n    </ul>\n  </template>\n')(MdTabsElement) || MdTabsElement;
    MdTabsElement = _aureliaFramework.inject(Element)(MdTabsElement) || MdTabsElement;
    MdTabsElement = _aureliaFramework.customElement('md-tabs')(MdTabsElement) || MdTabsElement;
    MdTabsElement = _aureliaFramework.bindable({
      name: 'tabs',
      defaultBindingMode: _aureliaFramework.bindingMode.oneWay
    })(MdTabsElement) || MdTabsElement;
    return MdTabsElement;
  })();

  exports.MdTabsElement = MdTabsElement;
});