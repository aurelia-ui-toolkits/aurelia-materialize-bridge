System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, bindingMode, customElement, inject, inlineView, MdTabsElement;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
      inlineView = _aureliaFramework.inlineView;
    }],
    execute: function () {
      MdTabsElement = (function () {
        function MdTabsElement(element) {
          _classCallCheck(this, _MdTabsElement);

          this.element = element;
        }

        MdTabsElement.prototype.attached = function attached() {
          $(this.element).tabs();
        };

        MdTabsElement.prototype.detached = function detached() {};

        var _MdTabsElement = MdTabsElement;
        MdTabsElement = inlineView('\n  <template>\n    <ul class="tabs">\n      <content></content>\n    </ul>\n  </template>\n')(MdTabsElement) || MdTabsElement;
        MdTabsElement = inject(Element)(MdTabsElement) || MdTabsElement;
        MdTabsElement = customElement('md-tabs')(MdTabsElement) || MdTabsElement;
        MdTabsElement = bindable({
          name: 'tabs',
          defaultBindingMode: bindingMode.oneWay
        })(MdTabsElement) || MdTabsElement;
        return MdTabsElement;
      })();

      _export('MdTabsElement', MdTabsElement);
    }
  };
});