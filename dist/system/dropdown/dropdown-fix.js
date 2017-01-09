'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function applyMaterializeDropdownFix() {
    $.fn.dropdown = function (options) {
      var defaults = {
        inDuration: 300,
        outDuration: 225,
        constrain_width: true,
        hover: false,
        gutter: 0,
        belowOrigin: false,
        alignment: 'left',
        stopPropagation: false
      };

      if (options === 'open') {
        this.each(function () {
          $(this).trigger('open');
        });
        return false;
      }

      if (options === 'close') {
        this.each(function () {
          $(this).trigger('close');
        });
        return false;
      }

      this.each(function () {
        var origin = $(this);
        var currentOptions = $.extend({}, defaults, options);
        var isFocused = false;

        var activates = $('#' + origin.attr('data-activates'));

        function updateOptions() {
          if (origin.data('induration') !== undefined) {
            currentOptions.inDuration = origin.data('induration');
          }
          if (origin.data('outduration') !== undefined) {
            currentOptions.outDuration = origin.data('outduration');
          }
          if (origin.data('constrainwidth') !== undefined) {
            currentOptions.constrain_width = origin.data('constrainwidth');
          }
          if (origin.data('hover') !== undefined) {
            currentOptions.hover = origin.data('hover');
          }
          if (origin.data('gutter') !== undefined) {
            currentOptions.gutter = origin.data('gutter');
          }
          if (origin.data('beloworigin') !== undefined) {
            currentOptions.belowOrigin = origin.data('beloworigin');
          }
          if (origin.data('alignment') !== undefined) {
            currentOptions.alignment = origin.data('alignment');
          }
          if (origin.data('stoppropagation') !== undefined) {
            currentOptions.stopPropagation = origin.data('stoppropagation');
          }
        }

        updateOptions();

        origin.after(activates);

        function placeDropdown(eventType) {
          if (eventType === 'focus') {
            isFocused = true;
          }

          updateOptions();

          activates.addClass('active');
          origin.addClass('active');

          if (currentOptions.constrain_width === true) {
            activates.css('width', origin.outerWidth());
          } else {
            activates.css('white-space', 'nowrap');
          }

          var windowHeight = window.innerHeight;
          var originHeight = origin.innerHeight();
          var offsetLeft = origin.offset().left;
          var offsetTop = origin.offset().top - $(window).scrollTop();
          var currAlignment = currentOptions.alignment;
          var gutterSpacing = 0;
          var leftPosition = 0;

          var verticalOffset = 0;
          if (currentOptions.belowOrigin === true) {
            verticalOffset = originHeight;
          }

          var scrollYOffset = 0;
          var scrollXOffset = 0;
          var wrapper = origin.parent();
          if (!wrapper.is('body')) {
            if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
              scrollYOffset = wrapper[0].scrollTop;
            }
            if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
              scrollXOffset = wrapper[0].scrollLeft;
            }
          }

          if (offsetLeft + activates.innerWidth() > $(window).width()) {
            currAlignment = 'right';
          } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
            currAlignment = 'left';
          }

          if (offsetTop + activates.innerHeight() > windowHeight) {
            if (offsetTop + originHeight - activates.innerHeight() < 0) {
              var adjustedHeight = windowHeight - offsetTop - verticalOffset;
              activates.css('max-height', adjustedHeight);
            } else {
              if (!verticalOffset) {
                verticalOffset += originHeight;
              }
              verticalOffset -= activates.innerHeight();
            }
          }

          if (currAlignment === 'left') {
            gutterSpacing = currentOptions.gutter;
            leftPosition = origin.position().left + gutterSpacing;
          } else if (currAlignment === 'right') {
            var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
            gutterSpacing = -currentOptions.gutter;
            leftPosition = offsetRight + gutterSpacing;
          }

          activates.css({
            position: 'absolute',
            top: origin.position().top + verticalOffset + scrollYOffset,
            left: leftPosition + scrollXOffset
          });

          activates.stop(true, true).css('opacity', 0).slideDown({
            queue: false,
            duration: currentOptions.inDuration,
            easing: 'easeOutCubic',
            complete: function complete() {
              $(this).css('height', '');
            }
          }).animate({ opacity: 1 }, { queue: false, duration: currentOptions.inDuration, easing: 'easeOutSine' });
        }

        function hideDropdown() {
          isFocused = false;
          activates.fadeOut(currentOptions.outDuration);
          activates.removeClass('active');
          origin.removeClass('active');
          setTimeout(function () {
            activates.css('max-height', '');
          }, currentOptions.outDuration);
        }

        if (currentOptions.hover) {
          (function () {
            var open = false;
            origin.unbind('click.' + origin.attr('id'));

            origin.on('mouseenter', function (e) {
              if (open === false) {
                placeDropdown();
                open = true;
              }
            });
            origin.on('mouseleave', function (e) {
              var toEl = e.toElement || e.relatedTarget;
              if (!$(toEl).closest('.dropdown-content').is(activates)) {
                activates.stop(true, true);
                hideDropdown();
                open = false;
              }
            });

            activates.on('mouseleave', function (e) {
              var toEl = e.toElement || e.relatedTarget;
              if (!$(toEl).closest('.dropdown-button').is(origin)) {
                activates.stop(true, true);
                hideDropdown();
                open = false;
              }
            });
          })();
        } else {
          origin.unbind('click.' + origin.attr('id'));
          origin.bind('click.' + origin.attr('id'), function (e) {
            if (!isFocused) {
              if (origin[0] === e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
                e.preventDefault();
                if (currentOptions.stopPropagation) {
                  e.stopPropagation();
                }
                placeDropdown('click');
              } else if (origin.hasClass('active')) {
                hideDropdown();
                $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
              }

              if (activates.hasClass('active')) {
                $(document).bind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e2) {
                  if (!activates.is(e2.target) && !origin.is(e2.target) && !origin.find(e2.target).length) {
                    hideDropdown();
                    $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
                  }
                });
              }
            }
          });
        }
        origin.on('open', function (e, eventType) {
          placeDropdown(eventType);
        });
        origin.on('close', hideDropdown);
      });
    };

    $(document).ready(function () {
      $('.dropdown-button').dropdown();
    });
  }

  _export('applyMaterializeDropdownFix', applyMaterializeDropdownFix);

  return {
    setters: [],
    execute: function () {}
  };
});