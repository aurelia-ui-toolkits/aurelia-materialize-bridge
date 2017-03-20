'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var customElement, inject, _dec, _dec2, _class, MdCollection;

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
      _export('MdCollection', MdCollection = (_dec = customElement('md-collection'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function MdCollection(element) {
          _classCallCheck(this, MdCollection);

          this.element = element;
        }

        MdCollection.prototype.attached = function attached() {
          var header = this.element.querySelector('md-collection-header');
          if (header) {
            this.anchor.classList.add('with-header');
          }
        };

        MdCollection.prototype.getSelected = function getSelected() {
          var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
          return items.filter(function (i) {
            return i.au['md-collection-selector'].viewModel.isSelected;
          }).map(function (i) {
            return i.au['md-collection-selector'].viewModel.item;
          });
        };

        MdCollection.prototype.clearSelection = function clearSelection() {
          var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
          items.forEach(function (i) {
            return i.au['md-collection-selector'].viewModel.isSelected = false;
          });
        };

        MdCollection.prototype.selectAll = function selectAll() {
          var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
          items.forEach(function (i) {
            var vm = i.au['md-collection-selector'].viewModel;
            vm.isSelected = !vm.mdDisabled;
          });
        };

        return MdCollection;
      }()) || _class) || _class));

      _export('MdCollection', MdCollection);
    }
  };
});