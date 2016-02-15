define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging', './scrollfire-patch'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaLogging, _scrollfirePatch) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MdScrollfire = (function () {
    function MdScrollfire(element, scrollfirePatch) {
      _classCallCheck(this, _MdScrollfire);

      this.targetId = 0;

      scrollfirePatch.patch();
      this.element = element;
      this.log = _aureliaLogging.getLogger('md-scrollfire');
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
    MdScrollfire = _aureliaDependencyInjection.inject(Element, _scrollfirePatch.ScrollfirePatch)(MdScrollfire) || MdScrollfire;
    MdScrollfire = _aureliaTemplating.customAttribute('md-scrollfire')(MdScrollfire) || MdScrollfire;
    return MdScrollfire;
  })();

  exports.MdScrollfire = MdScrollfire;
});