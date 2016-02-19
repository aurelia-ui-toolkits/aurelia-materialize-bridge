define(['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging', '../common/events'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaLogging, _commonEvents) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdSelect = (function () {
    function MdSelect(element, logManager, observerLocator) {
      _classCallCheck(this, _MdSelect);

      this._suspendUpdate = false;

      this.element = element;
      this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
      this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
      this.log = _aureliaLogging.getLogger('md-select');
      this.observerLocator = observerLocator;
      this.valueObserver = this.observerLocator.getObserver(this.element, 'value');
    }

    MdSelect.prototype.attached = function attached() {
      this.valueObserver.subscribe(this.handleChangeFromViewModel);

      $(this.element).material_select();
      $(this.element).on('change', this.handleChangeFromNativeSelect);
    };

    MdSelect.prototype.detached = function detached() {
      $(this.element).off('change', this.handleChangeFromNativeSelect);
      $(this.element).material_select('destroy');
      this.valueObserver.unsubscribe();
    };

    MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {

      if (!this._suspendUpdate) {
        this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
        this._suspendUpdate = true;
        _commonEvents.fireEvent(this.element, 'change');
        this.log.debug('this.valueObserver.value', this.valueObserver.value);

        this._suspendUpdate = false;
      }
    };

    MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
      this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
      if (!this._suspendUpdate) {
        $(this.element).material_select();
      }
    };

    var _MdSelect = MdSelect;
    MdSelect = _aureliaTemplating.customAttribute('md-select')(MdSelect) || MdSelect;
    MdSelect = _aureliaDependencyInjection.inject(Element, _aureliaLogging, _aureliaBinding.ObserverLocator)(MdSelect) || MdSelect;
    return MdSelect;
  })();

  exports.MdSelect = MdSelect;
});