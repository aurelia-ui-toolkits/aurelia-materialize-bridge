System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customElement, inject, MdSidenav;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      MdSidenav = (function () {
        _createClass(MdSidenav, null, [{
          key: 'id',
          value: 0,
          enumerable: true
        }]);

        function MdSidenav(element) {
          _classCallCheck(this, _MdSidenav);

          this.element = element;
          this.controlId = 'md-sidenav-' + MdSidenav.id++;
        }

        MdSidenav.prototype.attached = function attached() {};

        var _MdSidenav = MdSidenav;
        MdSidenav = inject(Element)(MdSidenav) || MdSidenav;
        MdSidenav = customElement('md-sidenav')(MdSidenav) || MdSidenav;
        return MdSidenav;
      })();

      _export('MdSidenav', MdSidenav);
    }
  };
});