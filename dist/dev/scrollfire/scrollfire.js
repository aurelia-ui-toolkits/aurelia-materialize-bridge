System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging', './scrollfire-patch'], function (_export) {
  'use strict';

  var customAttribute, inject, getLogger, ScrollfirePatch, MdScrollfire;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaLogging) {
      getLogger = _aureliaLogging.getLogger;
    }, function (_scrollfirePatch) {
      ScrollfirePatch = _scrollfirePatch.ScrollfirePatch;
    }],
    execute: function () {
      MdScrollfire = (function () {
        function MdScrollfire(element, scrollfirePatch) {
          _classCallCheck(this, _MdScrollfire);

          this.targetId = 0;

          scrollfirePatch.patch();
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

        var _MdScrollfire = MdScrollfire;
        MdScrollfire = inject(Element, ScrollfirePatch)(MdScrollfire) || MdScrollfire;
        MdScrollfire = customAttribute('md-scrollfire')(MdScrollfire) || MdScrollfire;
        return MdScrollfire;
      })();

      _export('MdScrollfire', MdScrollfire);
    }
  };
});
//# sourceMappingURL=../dist/dev/scrollfire/scrollfire.js.map
