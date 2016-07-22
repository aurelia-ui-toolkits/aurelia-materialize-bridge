'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var customAttribute, inject, getLogger, _dec, _dec2, _class, MdScrollfire;

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
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }],
    execute: function () {
      _export('MdScrollfire', MdScrollfire = (_dec = customAttribute('md-scrollfire'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function MdScrollfire(element) {
          _classCallCheck(this, MdScrollfire);

          this.targetId = 0;

          this.element = element;
          this.log = getLogger('md-scrollfire');
        }

        MdScrollfire.prototype.attached = function attached() {
          var _this = this;

          var targets = $('[md-scrollfire-target]', this.element);
          if (targets.length > 0) {
            (function () {
              _this.log.debug('targets', targets);
              var self = _this;
              var options = [];
              targets.each(function (i, el) {
                var target = $(el);
                if (!target.attr('id')) {
                  target.attr('id', 'md-scrollfire-target-' + self.targetId++);
                }
                options.push({
                  selector: '#' + target.attr('id'),
                  callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
                  offset: parseInt(target.get(0).au['md-scrollfire-target'].viewModel.offset, 10)
                });
              });
              if (options.length > 0) {
                _this.log.debug('configuring scrollFire with these options:', options);
                Materialize.scrollFire(options);
              }
            })();
          }
        };

        return MdScrollfire;
      }()) || _class) || _class));

      _export('MdScrollfire', MdScrollfire);
    }
  };
});
//# sourceMappingURL=../dist/dev/scrollfire/scrollfire.js.map
