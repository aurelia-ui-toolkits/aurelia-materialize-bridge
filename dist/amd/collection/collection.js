define(['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCollection = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdCollection = exports.MdCollection = (_dec = (0, _aureliaTemplating.customElement)('md-collection'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
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

    MdCollection.prototype.toggleIndex = function toggleIndex(index) {
      var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
      var vm = items[index].au['md-collection-selector'].viewModel;
      vm.isSelected = !vm.isSelected;
    };

    return MdCollection;
  }()) || _class) || _class);
});