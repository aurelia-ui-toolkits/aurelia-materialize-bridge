System.register(['aurelia-framework', '../common/events', '../common/cssClassSetter'], function (_export) {
  'use strict';

  var customAttribute, inject, fireMaterializeEvent, CssClassSetter, MdTabs;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }, function (_commonCssClassSetter) {
      CssClassSetter = _commonCssClassSetter.CssClassSetter;
    }],
    execute: function () {
      MdTabs = (function () {
        function MdTabs(element) {
          _classCallCheck(this, _MdTabs);

          this.element = element;
          this.classSetter = new CssClassSetter(this.element);
          this.tabClassSetters = [];
        }

        MdTabs.prototype.attached = function attached() {
          var _this = this;

          this.classSetter.addClasses('tabs');

          var children = this.element.querySelectorAll('li');
          [].forEach.call(children, function (child) {
            var setter = new CssClassSetter(child);
            setter.addClasses('tab');
            _this.tabClassSetters.push(setter);
          });

          $(this.element).tabs();

          var childAnchors = this.element.querySelectorAll('li a');
          [].forEach.call(childAnchors, function (a) {
            a.addEventListener('click', _this.fireTabSelectedEvent.bind(_this));
          });
        };

        MdTabs.prototype.detached = function detached() {
          var _this2 = this;

          this.classSetter.removeClasses('tabs');

          this.tabClassSetters.forEach(function (setter) {
            setter.removeClasses('tab');
          });
          this.tabClassSetters = [];
          var childAnchors = this.element.querySelectorAll('li a');
          [].forEach.call(childAnchors, function (a) {
            a.removeEventListener('click', _this2.fireTabSelectedEvent.bind(_this2));
          });
        };

        MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
          var href = $(e.target).attr('href');
          fireMaterializeEvent(this.element, 'selected', href);
        };

        var _MdTabs = MdTabs;
        MdTabs = inject(Element)(MdTabs) || MdTabs;
        MdTabs = customAttribute('md-tabs')(MdTabs) || MdTabs;
        return MdTabs;
      })();

      _export('MdTabs', MdTabs);
    }
  };
});
//# sourceMappingURL=../dist/dev/tabs/tabs.js.map
