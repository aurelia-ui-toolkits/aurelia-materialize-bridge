System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging', '../common/events'], function (_export) {
  'use strict';

  var customAttribute, ObserverLocator, inject, LogManager, fireEvent, MdSelect;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_commonEvents) {
      fireEvent = _commonEvents.fireEvent;
    }],
    execute: function () {
      MdSelect = (function () {
        function MdSelect(element, logManager, observerLocator) {
          _classCallCheck(this, _MdSelect);

          this._suspendUpdate = false;

          this.element = element;
          this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
          this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
          this.log = LogManager.getLogger('md-select');
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
            fireEvent(this.element, 'change');
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
        MdSelect = customAttribute('md-select')(MdSelect) || MdSelect;
        MdSelect = inject(Element, LogManager, ObserverLocator)(MdSelect) || MdSelect;
        return MdSelect;
      })();

      _export('MdSelect', MdSelect);
    }
  };
});
//# sourceMappingURL=../dist/dev/select/select.js.map
