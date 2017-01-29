'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/events', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, inject, TaskQueue, fireMaterializeEvent, AttributeManager, getBooleanFromAttributeValue, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, MdTabs;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('MdTabs', MdTabs = (_dec = customAttribute('md-tabs'), _dec2 = inject(Element, TaskQueue), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdTabs(element, taskQueue) {
          _classCallCheck(this, MdTabs);

          _initDefineProp(this, 'fixed', _descriptor, this);

          _initDefineProp(this, 'onShow', _descriptor2, this);

          _initDefineProp(this, 'responsiveThreshold', _descriptor3, this);

          _initDefineProp(this, 'swipeable', _descriptor4, this);

          _initDefineProp(this, 'transparent', _descriptor5, this);

          this.element = element;
          this.taskQueue = taskQueue;
          this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
          this.attributeManager = new AttributeManager(this.element);
          this.tabAttributeManagers = [];
        }

        MdTabs.prototype.attached = function attached() {
          var _this = this;

          this.attributeManager.addClasses('tabs');

          var children = this.element.querySelectorAll('li');
          [].forEach.call(children, function (child) {
            var setter = new AttributeManager(child);
            setter.addClasses(['tab', 'primary-text']);
            _this.tabAttributeManagers.push(setter);
          });

          var self = this;
          $(this.element).tabs({
            onShow: function onShow(jQueryElement) {
              if (self.onShow) {
                self.onShow({ element: jQueryElement });
              }
            },
            swipeable: getBooleanFromAttributeValue(this.swipeable),
            responsiveThreshold: this.responsiveThreshold
          });
          var childAnchors = this.element.querySelectorAll('li a');
          [].forEach.call(childAnchors, function (a) {
            a.addEventListener('click', _this.fireTabSelectedEvent);
          });
        };

        MdTabs.prototype.detached = function detached() {
          var _this2 = this;

          this.attributeManager.removeClasses('tabs');

          this.tabAttributeManagers.forEach(function (setter) {
            setter.removeClasses('tab');
          });
          this.tabAttributeManagers = [];
          var childAnchors = this.element.querySelectorAll('li a');
          [].forEach.call(childAnchors, function (a) {
            a.removeEventListener('click', _this2.fireTabSelectedEvent);
          });
        };

        MdTabs.prototype.refresh = function refresh() {
          var _this3 = this;

          this.taskQueue.queueTask(function () {
            var hrefs = [];
            $('li a', _this3.element).each(function (i, tab) {
              $(tab).parent().addClass('tab');
              hrefs.push($(tab).attr('href'));
            });
            $(hrefs).each(function (i, tab) {
              if (_this3.selectedTab.index != i) {
                $(tab).hide();
              }
            });
            _this3.taskQueue.queueTask(function () {
              $(window).trigger('resize');
            });
          });
        };

        MdTabs.prototype.fixedChanged = function fixedChanged(newValue) {
          if (newValue) {
            this.attributeManager.addClasses('tabs-fixed-width');
          } else {
            this.attributeManager.removeClasses('tabs-fixed-width');
          }
        };

        MdTabs.prototype.transparentChanged = function transparentChanged(newValue) {
          if (newValue) {
            this.attributeManager.addClasses('tabs-transparent');
          } else {
            this.attributeManager.removeClasses('tabs-transparent');
          }
        };

        MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
          var href = e.target.getAttribute('href');
          fireMaterializeEvent(this.element, 'selected', href);
        };

        MdTabs.prototype.selectTab = function selectTab(id) {
          $(this.element).tabs('select_tab', id);
          this.fireTabSelectedEvent({
            target: { getAttribute: function getAttribute() {
                return '#' + id;
              } }
          });
        };

        _createClass(MdTabs, [{
          key: 'selectedTab',
          get: function get() {
            var children = this.element.querySelectorAll('li.tab a');
            var index = -1;
            var href = null;
            [].forEach.call(children, function (a, i) {
              if (a.classList.contains('active')) {
                index = i;
                href = a.href;
                return;
              }
            });
            return { href: href, index: index };
          }
        }]);

        return MdTabs;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'fixed', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'onShow', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'responsiveThreshold', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return Infinity;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'swipeable', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'transparent', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('MdTabs', MdTabs);
    }
  };
});