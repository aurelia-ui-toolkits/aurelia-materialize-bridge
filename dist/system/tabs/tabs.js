'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/events', '../common/attributeManager'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, TaskQueue, fireMaterializeEvent, AttributeManager, _createClass, _dec, _dec2, _class, MdTabs;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
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

      _export('MdTabs', MdTabs = (_dec = customAttribute('md-tabs'), _dec2 = inject(Element, TaskQueue), _dec(_class = _dec2(_class = function () {
        function MdTabs(element, taskQueue) {
          _classCallCheck(this, MdTabs);

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

          $(this.element).tabs();
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
      }()) || _class) || _class));

      _export('MdTabs', MdTabs);
    }
  };
});