'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var MdCollectionItem = (function () {
  function MdCollectionItem() {
    _classCallCheck(this, _MdCollectionItem);
  }

  var _MdCollectionItem = MdCollectionItem;
  MdCollectionItem = _aureliaTemplating.customElement('md-collection-item')(MdCollectionItem) || MdCollectionItem;
  return MdCollectionItem;
})();

exports.MdCollectionItem = MdCollectionItem;