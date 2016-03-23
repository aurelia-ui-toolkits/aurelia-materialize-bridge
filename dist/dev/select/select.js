'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging', '../common/events'], function (_export, _context) {
  var customAttribute, ObserverLocator, inject, LogManager, fireEvent, _dec, _dec2, _class, MdSelect;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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
      _export('MdSelect', MdSelect = (_dec = inject(Element, LogManager, ObserverLocator), _dec2 = customAttribute('md-select'), _dec(_class = _dec2(_class = function () {
        function MdSelect(element, logManager, observerLocator) {
          _classCallCheck(this, MdSelect);

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

        return MdSelect;
      }()) || _class) || _class));

      _export('MdSelect', MdSelect);
    }
  };
});
//# sourceMappingURL=../dist/dev/select/select.js.map
