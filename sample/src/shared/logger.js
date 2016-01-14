export class Logger {
  attached() {
    this.overrideStyles();
  }


  log(message, isError, container) {
    let lastContainer = $('.console div:first', container);
    let counter = lastContainer.find('.count').detach();
    let lastMessage = lastContainer.text();
    let count = 1 * (counter.text() || 1);

    lastContainer.append(counter);

    if (!lastContainer.length || message !== lastMessage) {
      $('<div' + (isError ? ' class=\'error\'' : '') + '/>')
      .css({
        marginTop: -24,
        backgroundColor: isError ? '#ffbbbb' : '#b2ebf2'
      })
      .html(message)
      .prependTo($('.console', container))
      .animate({ marginTop: 0 }, 300)
      .animate({ backgroundColor: isError ? '#ffdddd' : '#ffffff' }, 800);
    } else {
      count++;

      if (counter.length) {
        counter.html(count);
      } else {
        lastContainer.html(lastMessage)
        .append('<span class=\'count\'>' + count + '</span>');
      }
    }
  }

  error(message) {
    this.log(message, true);
  }

  overrideStyles() {
    jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i, attr) {
      jQuery.fx.step[attr] = function(fx) {
        if (!fx.state || typeof fx.end === typeof '') {
          fx.start = getColor(fx.elem, attr);
          fx.end = getRGB(fx.end);
        }

        fx.elem.style[attr] = ['rgb(', [
          Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0),
          Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0),
          Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0)
        ].join(','), ')'].join('');
      };
    });
  }
}


// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
  let result;

  // Check if we're already dealing with an array of colors
  if (color && color.constructor === Array && color.length === 3) {
    return color;
  }

  // Look for rgb(num,num,num)
  result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color);
  if (result) {
    return [parseInt(result[1], 10), parseInt(result[2], 10), parseInt(result[3], 10)];
  }

  // Look for #a0b1c2
  result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color);
  if (result) {
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
  }

  // Otherwise, we're most likely dealing with a named color
  return jQuery.trim(color).toLowerCase();
}

function getColor(elem, attr) {
  let color;

  do {
    color = jQuery.css(elem, attr);

    // Keep going until we find an element that has color, or we hit the body
    if (color && color !== 'transparent' || jQuery.nodeName(elem, 'body')) {
      break;
    }

    attr = 'backgroundColor';

    elem = elem.parentNode;
  } while (elem);

  return getRGB(color);
}
