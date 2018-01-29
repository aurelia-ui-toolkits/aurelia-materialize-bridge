'use strict';

exports.__esModule = true;
exports.MdWaves = exports.MaterializeFormValidationRenderer = exports.MdTooltip = exports.MdStaggeredList = exports.MdFadeinImage = exports.MdToastService = exports.MdTimePicker = exports.MdTapTarget = exports.MdTabs = exports.MdSwitch = exports.MdSlider = exports.MdSidenav = exports.MdSidenavCollapse = exports.MdSelect = exports.MdScrollSpy = exports.MdRange = exports.MdRadio = exports.MdScrollfire = exports.MdScrollfireTarget = exports.ScrollfirePatch = exports.MdPushpin = exports.MdProgress = exports.MdParallax = exports.MdPagination = exports.MdNavbar = exports.MdInput = exports.MdInputUpdateService = exports.MdPrefix = exports.MdModal = exports.MdModalTrigger = exports.MdFooter = exports.MdFileInput = exports.MdFab = exports.MdDropdown = exports.MdDropdownElement = exports.MdDatePicker = exports.DatePickerDefaultParser = exports.constants = exports.AttributeManager = exports.MdCollapsible = exports.MdlListSelector = exports.MdCollection = exports.MdCollectionItem = exports.MdCollectionHeader = exports.MdChips = exports.MdChip = exports.MdColors = exports.LightenValueConverter = exports.DarkenValueConverter = exports.MdCarousel = exports.MdCarouselItem = exports.MdCharCounter = exports.MdCheckbox = exports.MdBox = exports.MdCard = exports.MdButton = exports.InstructionFilterValueConverter = exports.MdBreadcrumbs = exports.MdBadge = exports.MdAutoComplete = exports.ConfigBuilder = exports.ClickCounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class3, _desc, _value, _class4, _descriptor, _descriptor2, _descriptor3, _dec6, _dec7, _dec8, _dec9, _class6, _desc2, _value2, _class7, _descriptor4, _descriptor5, _dec10, _dec11, _dec12, _class9, _desc3, _value3, _class10, _descriptor6, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class12, _desc4, _value4, _class13, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class15, _desc5, _value5, _class16, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _dec30, _dec31, _dec32, _class18, _desc6, _value6, _class19, _descriptor20, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class21, _desc7, _value7, _class22, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _class23, _temp, _dec40, _dec41, _dec42, _class24, _desc8, _value8, _class25, _descriptor27, _dec43, _dec44, _dec45, _class27, _desc9, _value9, _class28, _descriptor28, _descriptor29, _dec46, _dec47, _dec48, _dec49, _dec50, _class30, _desc10, _value10, _class31, _descriptor30, _descriptor31, _descriptor32, _dec51, _dec52, _dec53, _dec54, _desc11, _value11, _class33, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _dec55, _dec56, _dec57, _class35, _desc12, _value12, _class36, _descriptor37, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _class38, _desc13, _value13, _class39, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _dec64, _dec65, _class41, _dec66, _class42, _dec67, _dec68, _class43, _dec69, _dec70, _dec71, _dec72, _dec73, _class44, _desc14, _value14, _class45, _descriptor42, _descriptor43, _descriptor44, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _class47, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _class49, _desc15, _value15, _class50, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _class52, _desc16, _value16, _class53, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _class54, _temp2, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _dec110, _dec111, _dec112, _dec113, _class55, _desc17, _value17, _class56, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _descriptor72, _class57, _temp3, _dec114, _dec115, _dec116, _dec117, _class58, _desc18, _value18, _class59, _descriptor73, _descriptor74, _dec118, _dec119, _dec120, _dec121, _dec122, _dec123, _dec124, _class61, _desc19, _value19, _class62, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _descriptor79, _dec125, _dec126, _class64, _dec127, _dec128, _dec129, _class65, _desc20, _value20, _class66, _descriptor80, _dec130, _dec131, _dec132, _dec133, _dec134, _dec135, _dec136, _dec137, _class68, _desc21, _value21, _class69, _descriptor81, _descriptor82, _descriptor83, _descriptor84, _descriptor85, _descriptor86, _dec138, _dec139, _class71, _dec140, _class72, _dec141, _dec142, _dec143, _dec144, _dec145, _dec146, _dec147, _dec148, _dec149, _dec150, _dec151, _dec152, _dec153, _dec154, _dec155, _dec156, _dec157, _dec158, _dec159, _dec160, _class74, _desc22, _value22, _class75, _descriptor87, _descriptor88, _descriptor89, _descriptor90, _descriptor91, _descriptor92, _descriptor93, _descriptor94, _descriptor95, _descriptor96, _descriptor97, _descriptor98, _descriptor99, _descriptor100, _descriptor101, _descriptor102, _descriptor103, _descriptor104, _class76, _temp4, _dec161, _dec162, _dec163, _dec164, _dec165, _class77, _desc23, _value23, _class78, _descriptor105, _descriptor106, _descriptor107, _dec166, _dec167, _dec168, _dec169, _dec170, _dec171, _dec172, _dec173, _dec174, _class80, _desc24, _value24, _class81, _descriptor108, _descriptor109, _descriptor110, _descriptor111, _descriptor112, _descriptor113, _descriptor114, _dec175, _dec176, _class83, _dec177, _dec178, _dec179, _dec180, _dec181, _dec182, _dec183, _class84, _desc25, _value25, _class85, _descriptor115, _descriptor116, _descriptor117, _descriptor118, _descriptor119, _dec184, _dec185, _dec186, _dec187, _dec188, _class87, _desc26, _value26, _class88, _descriptor120, _descriptor121, _descriptor122, _class90, _temp5, _dec189, _dec190, _dec191, _dec192, _class91, _desc27, _value27, _class92, _descriptor123, _descriptor124, _dec193, _dec194, _class94, _dec195, _dec196, _dec197, _dec198, _dec199, _dec200, _dec201, _dec202, _dec203, _class96, _desc28, _value28, _class97, _descriptor125, _descriptor126, _descriptor127, _descriptor128, _descriptor129, _descriptor130, _descriptor131, _class98, _temp6, _dec204, _dec205, _dec206, _dec207, _dec208, _dec209, _dec210, _class99, _desc29, _value29, _class100, _descriptor132, _descriptor133, _descriptor134, _descriptor135, _descriptor136, _dec211, _dec212, _dec213, _class102, _desc30, _value30, _class103, _descriptor137, _dec214, _dec215, _dec216, _dec217, _dec218, _dec219, _dec220, _class105, _desc31, _value31, _class106, _descriptor138, _descriptor139, _descriptor140, _descriptor141, _descriptor142, _dec221, _dec222, _dec223, _class108, _desc32, _value32, _class109, _descriptor143, _dec224, _dec225, _dec226, _dec227, _dec228, _dec229, _class111, _desc33, _value33, _class112, _descriptor144, _descriptor145, _descriptor146, _descriptor147, _class113, _temp7, _dec230, _dec231, _dec232, _dec233, _dec234, _dec235, _dec236, _class114, _desc34, _value34, _class115, _descriptor148, _descriptor149, _descriptor150, _descriptor151, _descriptor152, _dec237, _dec238, _dec239, _dec240, _dec241, _dec242, _dec243, _class117, _desc35, _value35, _class118, _descriptor153, _descriptor154, _descriptor155, _descriptor156, _descriptor157, _dec244, _dec245, _dec246, _dec247, _dec248, _dec249, _dec250, _class120, _desc36, _value36, _class121, _descriptor158, _descriptor159, _descriptor160, _descriptor161, _descriptor162, _dec251, _dec252, _dec253, _class123, _desc37, _value37, _class124, _descriptor163, _class125, _temp8, _dec254, _dec255, _dec256, _dec257, _class126, _desc38, _value38, _class127, _descriptor164, _descriptor165, _dec258, _dec259, _dec260, _class129, _desc39, _value39, _class130, _descriptor166, _dec261, _dec262, _dec263, _class132, _desc40, _value40, _class133, _descriptor167, _dec264, _dec265, _dec266, _dec267, _dec268, _dec269, _class135, _desc41, _value41, _class136, _descriptor168, _descriptor169, _descriptor170, _descriptor171, _dec270, _dec271, _dec272, _dec273, _dec274, _class139, _desc42, _value42, _class140, _descriptor172, _descriptor173, _descriptor174;

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;
exports.polyfillElementClosest = polyfillElementClosest;

var _aureliaPal = require('aurelia-pal');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaRouter = require('aurelia-router');

var _aureliaBinding = require('aurelia-binding');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaLogging = require('aurelia-logging');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickCounter = exports.ClickCounter = function () {
  function ClickCounter() {
    _classCallCheck(this, ClickCounter);

    this.count = 0;
  }

  ClickCounter.prototype.increment = function increment() {
    this.count++;
  };

  return ClickCounter;
}();

var ConfigBuilder = exports.ConfigBuilder = function () {
  function ConfigBuilder() {
    _classCallCheck(this, ConfigBuilder);

    this.globalResources = [];
    this.noWavesAttach = false;
    this.useGlobalResources = true;
    this.useScrollfirePatch = false;
  }

  ConfigBuilder.prototype.useAll = function useAll() {
    return this.useAutoComplete().useBadge().useBox().useBreadcrumbs().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox().useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar().usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useScrollSpy().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTapTarget().useTimePicker().useTooltip().useTransitions().useWaves().useWell();
  };

  ConfigBuilder.prototype.useAutoComplete = function useAutoComplete() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./autocomplete/autocomplete'));
    return this;
  };

  ConfigBuilder.prototype.useBadge = function useBadge() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./badge/badge'));
    return this;
  };

  ConfigBuilder.prototype.useBox = function useBox() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./box/box'));
    return this;
  };

  ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
    return this;
  };

  ConfigBuilder.prototype.useCarousel = function useCarousel() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./carousel/carousel'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./carousel/carousel-item'));
    return this;
  };

  ConfigBuilder.prototype.useCharacterCounter = function useCharacterCounter() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./char-counter/char-counter'));
    return this;
  };

  ConfigBuilder.prototype.useCard = function useCard() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./card/card'));
    return this;
  };

  ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./checkbox/checkbox'));
    return this;
  };

  ConfigBuilder.prototype.useChip = function useChip() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./chip/chip'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./chip/chips'));
    return this;
  };

  ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./click-counter'));
    return this;
  };

  ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collapsible/collapsible'));
    return this;
  };

  ConfigBuilder.prototype.useCollection = function useCollection() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/collection-header'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./collection/md-collection-selector'));
    return this;
  };

  ConfigBuilder.prototype.useColors = function useColors() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./colors/md-colors'));
    return this;
  };

  ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./datepicker/datepicker'));
    return this;
  };

  ConfigBuilder.prototype.useDropdown = function useDropdown() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dropdown/dropdown'));
    return this;
  };

  ConfigBuilder.prototype.useDropdownFix = function useDropdownFix() {
    console.warn('The method useDropdownFix has no effect in this version and will be removed in a future version.');

    return this;
  };

  ConfigBuilder.prototype.useFab = function useFab() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./fab/fab'));
    return this;
  };

  ConfigBuilder.prototype.useFile = function useFile() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./file/file'));
    return this;
  };

  ConfigBuilder.prototype.useFooter = function useFooter() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./footer/footer'));
    return this;
  };

  ConfigBuilder.prototype.useInput = function useInput() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input-prefix'));
    return this;
  };

  ConfigBuilder.prototype.useModal = function useModal() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./modal/modal'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./modal/modal-trigger'));
    return this;
  };

  ConfigBuilder.prototype.useNavbar = function useNavbar() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./navbar/navbar'));
    return this;
  };

  ConfigBuilder.prototype.usePagination = function usePagination() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./pagination/pagination'));
    return this;
  };

  ConfigBuilder.prototype.useParallax = function useParallax() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./parallax/parallax'));
    return this;
  };

  ConfigBuilder.prototype.useProgress = function useProgress() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./progress/progress'));
    return this;
  };

  ConfigBuilder.prototype.usePushpin = function usePushpin() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./pushpin/pushpin'));
    return this;
  };

  ConfigBuilder.prototype.useRadio = function useRadio() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./radio/radio'));
    return this;
  };

  ConfigBuilder.prototype.useRange = function useRange() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./range/range'));
    return this;
  };

  ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollfire/scrollfire'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollfire/scrollfire-target'));
    return this;
  };

  ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./scrollspy/scrollspy'));
    return this;
  };

  ConfigBuilder.prototype.useSelect = function useSelect() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./select/select'));
    return this;
  };

  ConfigBuilder.prototype.useSidenav = function useSidenav() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./sidenav/sidenav'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./sidenav/sidenav-collapse'));
    return this;
  };

  ConfigBuilder.prototype.useSlider = function useSlider() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./slider/slider'));

    return this;
  };

  ConfigBuilder.prototype.useSwitch = function useSwitch() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./switch/switch'));
    return this;
  };

  ConfigBuilder.prototype.useTabs = function useTabs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tabs/tabs'));
    return this;
  };

  ConfigBuilder.prototype.useTapTarget = function useTapTarget() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tap-target/tap-target'));
    return this;
  };

  ConfigBuilder.prototype.useTimePicker = function useTimePicker() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./timepicker/timepicker'));
    return this;
  };

  ConfigBuilder.prototype.useTooltip = function useTooltip() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tooltip/tooltip'));
    return this;
  };

  ConfigBuilder.prototype.useTransitions = function useTransitions() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./transitions/fadein-image'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./transitions/staggered-list'));
    return this;
  };

  ConfigBuilder.prototype.useWaves = function useWaves() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./waves/waves'));
    return this;
  };

  ConfigBuilder.prototype.useWell = function useWell() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./well/md-well.html'));
    return this;
  };

  ConfigBuilder.prototype.preventWavesAttach = function preventWavesAttach() {
    this.noWavesAttach = true;
    return this;
  };

  ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  ConfigBuilder.prototype.withScrollfirePatch = function withScrollfirePatch() {
    this.useScrollfirePatch = true;
    return this;
  };

  return ConfigBuilder;
}();

function applyPolyfills() {
  polyfillElementClosest();
}

function configure(aurelia, configCallback) {
  applyPolyfills();

  var builder = aurelia.container.get(ConfigBuilder);

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
  if (builder.useScrollfirePatch) {
    new ScrollfirePatch().patch();
  }
}

var MdAutoComplete = exports.MdAutoComplete = (_dec = (0, _aureliaTemplating.customAttribute)('md-autocomplete'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec(_class3 = _dec2(_class3 = (_class4 = function () {
  function MdAutoComplete(element) {
    _classCallCheck(this, MdAutoComplete);

    this.input = null;

    _initDefineProp(this, 'limit', _descriptor, this);

    _initDefineProp(this, 'minLength', _descriptor2, this);

    _initDefineProp(this, 'values', _descriptor3, this);

    this.element = element;
  }

  MdAutoComplete.prototype.attached = function attached() {
    if (this.element.tagName.toLowerCase() === 'input') {
      this.input = this.element;
    } else if (this.element.tagName.toLowerCase() === 'md-input') {
      this.input = this.element.au.controller.viewModel.input;
    } else {
      throw new Error('md-autocomplete must be attached to either an input or md-input element');
    }
    this.refresh();
  };

  MdAutoComplete.prototype.detached = function detached() {
    $(this.input).siblings('.autocomplete-content').off('click');
    $(this.input).siblings('.autocomplete-content').remove();
  };

  MdAutoComplete.prototype.refresh = function refresh() {
    var _this = this;

    this.detached();
    $(this.input).autocomplete({
      data: this.values,
      minLength: this.minLength,
      limit: this.limit
    });

    $(this.input).siblings('.autocomplete-content').on('click', function () {
      fireEvent(_this.input, 'change');
    });
  };

  MdAutoComplete.prototype.valuesChanged = function valuesChanged(newValue) {
    this.refresh();
  };

  return MdAutoComplete;
}(), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, 'limit', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, 'minLength', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, 'values', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
})), _class4)) || _class3) || _class3);
var MdBadge = exports.MdBadge = (_dec6 = (0, _aureliaTemplating.customAttribute)('md-badge'), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec6(_class6 = _dec7(_class6 = (_class7 = function () {
  function MdBadge(element) {
    _classCallCheck(this, MdBadge);

    _initDefineProp(this, 'isNew', _descriptor4, this);

    _initDefineProp(this, 'caption', _descriptor5, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBadge.prototype.attached = function attached() {
    var classes = ['badge'];

    if (getBooleanFromAttributeValue(this.isNew)) {
      classes.push('new');
    }

    if (this.caption !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': this.caption });
    }

    this.attributeManager.addClasses(classes);
  };

  MdBadge.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['badge', 'new']);
    this.attributeManager.removeAttributes(['data-badge-caption']);
  };

  MdBadge.prototype.newChanged = function newChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('new');
    } else {
      this.attributeManager.removeClasses('new');
    }
  };

  MdBadge.prototype.captionChanged = function captionChanged(newValue) {
    if (newValue !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': newValue });
    } else {
      this.attributeManager.removeAttributes(['data-badge-caption']);
    }
  };

  return MdBadge;
}(), (_descriptor4 = _applyDecoratedDescriptor(_class7.prototype, 'isNew', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class7.prototype, 'caption', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class7)) || _class6) || _class6);
var MdBreadcrumbs = exports.MdBreadcrumbs = (_dec10 = (0, _aureliaTemplating.customElement)('md-breadcrumbs'), _dec11 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaRouter.Router), _dec12 = (0, _aureliaTemplating.bindable)(), _dec10(_class9 = _dec11(_class9 = (_class10 = function () {
  function MdBreadcrumbs(element, router) {
    _classCallCheck(this, MdBreadcrumbs);

    _initDefineProp(this, 'router', _descriptor6, this);

    this.element = element;
    this.aureliaRouter = router;
  }

  MdBreadcrumbs.prototype.bind = function bind() {
    if (!this.router) {
      this.router = this.aureliaRouter;
    }
    var router = this.router;
    this._childRouter = router;
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  };

  MdBreadcrumbs.prototype.routerChanged = function routerChanged() {};

  MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
    this._childRouter.navigateToRoute(navigationInstruction.config.name);
  };

  return MdBreadcrumbs;
}(), (_descriptor6 = _applyDecoratedDescriptor(_class10.prototype, 'router', [_dec12], {
  enumerable: true,
  initializer: null
})), _class10)) || _class9) || _class9);

var InstructionFilterValueConverter = exports.InstructionFilterValueConverter = function () {
  function InstructionFilterValueConverter() {
    _classCallCheck(this, InstructionFilterValueConverter);
  }

  InstructionFilterValueConverter.prototype.toView = function toView(navigationInstructions) {
    return navigationInstructions.filter(function (i) {
      var result = false;
      if (i.config.title) {
        result = true;
      }
      return result;
    });
  };

  return InstructionFilterValueConverter;
}();

var MdButton = exports.MdButton = (_dec13 = (0, _aureliaTemplating.customAttribute)('md-button'), _dec14 = (0, _aureliaDependencyInjection.inject)(Element), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec13(_class12 = _dec14(_class12 = (_class13 = function () {
  function MdButton(element) {
    _classCallCheck(this, MdButton);

    _initDefineProp(this, 'disabled', _descriptor7, this);

    _initDefineProp(this, 'flat', _descriptor8, this);

    _initDefineProp(this, 'floating', _descriptor9, this);

    _initDefineProp(this, 'large', _descriptor10, this);

    _initDefineProp(this, 'pulse', _descriptor11, this);

    this.attributeManager = new AttributeManager(element);
  }

  MdButton.prototype.attached = function attached() {
    var classes = [];

    if (getBooleanFromAttributeValue(this.flat)) {
      classes.push('btn-flat');
    }
    if (getBooleanFromAttributeValue(this.floating)) {
      classes.push('btn-floating');
    }
    if (getBooleanFromAttributeValue(this.large)) {
      classes.push('btn-large');
    }

    if (classes.length === 0) {
      classes.push('btn');
    }

    if (getBooleanFromAttributeValue(this.disabled)) {
      classes.push('disabled');
    }

    if (!getBooleanFromAttributeValue(this.flat)) {
      classes.push('accent');
    }
    if (getBooleanFromAttributeValue(this.pulse)) {
      classes.push('pulse');
    }
    this.attributeManager.addClasses(classes);
  };

  MdButton.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled', 'pulse']);
  };

  MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('disabled');
    } else {
      this.attributeManager.removeClasses('disabled');
    }
  };

  MdButton.prototype.flatChanged = function flatChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.removeClasses(['btn', 'accent']);
      this.attributeManager.addClasses('btn-flat');
    } else {
      this.attributeManager.removeClasses('btn-flat');
      this.attributeManager.addClasses(['btn', 'accent']);
    }
  };

  MdButton.prototype.pulseChanged = function pulseChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('pulse');
    } else {
      this.attributeManager.removeClasses('pulse');
    }
  };

  return MdButton;
}(), (_descriptor7 = _applyDecoratedDescriptor(_class13.prototype, 'disabled', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class13.prototype, 'flat', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class13.prototype, 'floating', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class13.prototype, 'large', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class13.prototype, 'pulse', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class13)) || _class12) || _class12);
var MdCard = exports.MdCard = (_dec20 = (0, _aureliaTemplating.customElement)('md-card'), _dec21 = (0, _aureliaDependencyInjection.inject)(Element), _dec22 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec23 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec24 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec25 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec26 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec27 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec28 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec29 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec20(_class15 = _dec21(_class15 = (_class16 = function () {
  function MdCard(element) {
    _classCallCheck(this, MdCard);

    _initDefineProp(this, 'mdHorizontal', _descriptor12, this);

    _initDefineProp(this, 'mdImage', _descriptor13, this);

    _initDefineProp(this, 'mdReveal', _descriptor14, this);

    _initDefineProp(this, 'mdAction', _descriptor15, this);

    _initDefineProp(this, 'mdStickyAction', _descriptor16, this);

    _initDefineProp(this, 'mdSize', _descriptor17, this);

    _initDefineProp(this, 'mdTitle', _descriptor18, this);

    _initDefineProp(this, 'mdClass', _descriptor19, this);

    this.element = element;
  }

  MdCard.prototype.attached = function attached() {
    this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
    this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
    this.mdAction = getBooleanFromAttributeValue(this.mdAction);
    this.mdStickyAction = getBooleanFromAttributeValue(this.mdStickyAction);
  };

  return MdCard;
}(), (_descriptor12 = _applyDecoratedDescriptor(_class16.prototype, 'mdHorizontal', [_dec22], {
  enumerable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class16.prototype, 'mdImage', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class16.prototype, 'mdReveal', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class16.prototype, 'mdAction', [_dec25], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class16.prototype, 'mdStickyAction', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class16.prototype, 'mdSize', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class16.prototype, 'mdTitle', [_dec28], {
  enumerable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class16.prototype, 'mdClass', [_dec29], {
  enumerable: true,
  initializer: null
})), _class16)) || _class15) || _class15);
var MdBox = exports.MdBox = (_dec30 = (0, _aureliaTemplating.customAttribute)('md-box'), _dec31 = (0, _aureliaDependencyInjection.inject)(Element), _dec32 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec30(_class18 = _dec31(_class18 = (_class19 = function () {
  function MdBox(element) {
    _classCallCheck(this, MdBox);

    _initDefineProp(this, 'caption', _descriptor20, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBox.prototype.attached = function attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }

    $(this.element).materialbox();
  };

  MdBox.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  };

  return MdBox;
}(), (_descriptor20 = _applyDecoratedDescriptor(_class19.prototype, 'caption', [_dec32], {
  enumerable: true,
  initializer: null
})), _class19)) || _class18) || _class18);
var MdCheckbox = exports.MdCheckbox = (_dec33 = (0, _aureliaDependencyInjection.inject)(Element), _dec34 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)(), _dec38 = (0, _aureliaTemplating.bindable)(), _dec39 = (0, _aureliaTemplating.bindable)(), _dec33(_class21 = (_class22 = (_temp = _class23 = function () {
  MdCheckbox.prototype.mdReadonlyChanged = function mdReadonlyChanged() {
    if (!this.checkbox) {
      return;
    }

    if (this.mdReadonly) {
      this.checkbox.addEventListener('change', this.preventChange);
    } else {
      this.checkbox.removeEventListener('change', this.preventChange);
    }
  };

  function MdCheckbox(element) {
    _classCallCheck(this, MdCheckbox);

    _initDefineProp(this, 'mdChecked', _descriptor21, this);

    _initDefineProp(this, 'mdDisabled', _descriptor22, this);

    _initDefineProp(this, 'mdReadonly', _descriptor23, this);

    _initDefineProp(this, 'mdFilledIn', _descriptor24, this);

    _initDefineProp(this, 'mdMatcher', _descriptor25, this);

    _initDefineProp(this, 'mdModel', _descriptor26, this);

    this.element = element;
    this.controlId = 'md-checkbox-' + MdCheckbox.id++;
  }

  MdCheckbox.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.checkbox);
    if (getBooleanFromAttributeValue(this.mdFilledIn)) {
      this.attributeManager.addClasses('filled-in');
    }
    if (this.mdChecked === null) {
      this.checkbox.indeterminate = true;
    } else {
      this.checkbox.indeterminate = false;
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    this.mdReadonlyChanged();
  };

  MdCheckbox.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
  };

  MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  MdCheckbox.prototype.preventChange = function preventChange() {
    this.checked = !this.checked;
  };

  return MdCheckbox;
}(), _class23.id = 0, _temp), (_descriptor21 = _applyDecoratedDescriptor(_class22.prototype, 'mdChecked', [_dec34], {
  enumerable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class22.prototype, 'mdDisabled', [_dec35], {
  enumerable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class22.prototype, 'mdReadonly', [_dec36], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class22.prototype, 'mdFilledIn', [_dec37], {
  enumerable: true,
  initializer: null
}), _descriptor25 = _applyDecoratedDescriptor(_class22.prototype, 'mdMatcher', [_dec38], {
  enumerable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class22.prototype, 'mdModel', [_dec39], {
  enumerable: true,
  initializer: null
})), _class22)) || _class21);
var MdCharCounter = exports.MdCharCounter = (_dec40 = (0, _aureliaTemplating.customAttribute)('md-char-counter'), _dec41 = (0, _aureliaDependencyInjection.inject)(Element), _dec42 = (0, _aureliaTemplating.bindable)(), _dec40(_class24 = _dec41(_class24 = (_class25 = function () {
  function MdCharCounter(element) {
    _classCallCheck(this, MdCharCounter);

    _initDefineProp(this, 'length', _descriptor27, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCharCounter.prototype.attached = function attached() {
    var _this2 = this;

    this.length = parseInt(this.length, 10);

    var tagName = this.element.tagName.toUpperCase();
    if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
      this.attributeManager.addAttributes({ 'data-length': this.length });
      $(this.element).characterCounter();
    } else {
      var elem = $(this.element).find('input,textarea');
      elem.each(function (i, el) {
        $(el).attr('data-length', _this2.length);
      });
      elem.characterCounter();
    }
  };

  MdCharCounter.prototype.detached = function detached() {
    this.attributeManager.removeAttributes(['data-length']);
  };

  return MdCharCounter;
}(), (_descriptor27 = _applyDecoratedDescriptor(_class25.prototype, 'length', [_dec42], {
  enumerable: true,
  initializer: function initializer() {
    return 120;
  }
})), _class25)) || _class24) || _class24);
var MdCarouselItem = exports.MdCarouselItem = (_dec43 = (0, _aureliaDependencyInjection.inject)(Element), _dec44 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec45 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec43(_class27 = (_class28 = function () {
  function MdCarouselItem(element) {
    _classCallCheck(this, MdCarouselItem);

    _initDefineProp(this, 'mdHref', _descriptor28, this);

    _initDefineProp(this, 'mdImage', _descriptor29, this);

    this.element = element;
  }

  MdCarouselItem.prototype.attached = function attached() {};

  return MdCarouselItem;
}(), (_descriptor28 = _applyDecoratedDescriptor(_class28.prototype, 'mdHref', [_dec44], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class28.prototype, 'mdImage', [_dec45], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class28)) || _class27);
var MdCarousel = exports.MdCarousel = (_dec46 = (0, _aureliaTemplating.customElement)('md-carousel'), _dec47 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec48 = (0, _aureliaTemplating.bindable)(), _dec49 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec50 = (0, _aureliaTemplating.children)('md-carousel-item'), _dec46(_class30 = _dec47(_class30 = (_class31 = function () {
  function MdCarousel(element, taskQueue) {
    _classCallCheck(this, MdCarousel);

    _initDefineProp(this, 'mdIndicators', _descriptor30, this);

    _initDefineProp(this, 'mdSlider', _descriptor31, this);

    _initDefineProp(this, 'items', _descriptor32, this);

    this.element = element;
    this.taskQueue = taskQueue;
  }

  MdCarousel.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    this.refresh();
  };

  MdCarousel.prototype.detached = function detached() {
    $(this.element).carousel('destroy');
  };

  MdCarousel.prototype.itemsChanged = function itemsChanged(newValue) {
    this.refresh();
  };

  MdCarousel.prototype.refresh = function refresh() {
    var _this3 = this;

    if (this.items.length > 0) {
      var options = {
        full_width: getBooleanFromAttributeValue(this.mdSlider),
        fullWidth: getBooleanFromAttributeValue(this.mdSlider),
        indicators: this.mdIndicators
      };

      this.taskQueue.queueTask(function () {
        $(_this3.element).carousel(options);
      });
    }
  };

  return MdCarousel;
}(), (_descriptor30 = _applyDecoratedDescriptor(_class31.prototype, 'mdIndicators', [_dec48], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class31.prototype, 'mdSlider', [_dec49], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor32 = _applyDecoratedDescriptor(_class31.prototype, 'items', [_dec50], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class31)) || _class30) || _class30);

function shadeBlendConvert(p, from, to) {
  if (typeof p != "number" || p < -1 || p > 1 || typeof from != "string" || from[0] != 'r' && from[0] != '#' || typeof to != "string" && typeof to != "undefined") return null;
  var sbcRip = function sbcRip(d) {
    var l = d.length,
        RGB = new Object();
    if (l > 9) {
      d = d.split(",");
      if (d.length < 3 || d.length > 4) return null;
      RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
    } else {
      switch (l) {case 8:case 6:case 3:case 2:case 1:
          return null;}
      if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : "");
      d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r((d >> 24 & 255) / 255 * 10000) / 10000 : -1;
    }
    return RGB;
  };
  var i = parseInt,
      r = Math.round,
      h = from.length > 9,
      h = typeof to == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
      b = p < 0,
      p = b ? p * -1 : p,
      to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
      f = sbcRip(from),
      t = sbcRip(to);
  if (!f || !t) return null;
  if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
}

var DarkenValueConverter = exports.DarkenValueConverter = function () {
  function DarkenValueConverter() {
    _classCallCheck(this, DarkenValueConverter);
  }

  DarkenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(-0.3 * parseFloat(steps, 10), value);
  };

  return DarkenValueConverter;
}();

var LightenValueConverter = exports.LightenValueConverter = function () {
  function LightenValueConverter() {
    _classCallCheck(this, LightenValueConverter);
  }

  LightenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(0.3 * parseFloat(steps, 10), value);
  };

  return LightenValueConverter;
}();

var MdColors = exports.MdColors = (_dec51 = (0, _aureliaTemplating.bindable)(), _dec52 = (0, _aureliaTemplating.bindable)(), _dec53 = (0, _aureliaTemplating.bindable)(), _dec54 = (0, _aureliaTemplating.bindable)(), (_class33 = function MdColors() {
  _classCallCheck(this, MdColors);

  _initDefineProp(this, 'mdPrimaryColor', _descriptor33, this);

  _initDefineProp(this, 'mdAccentColor', _descriptor34, this);

  _initDefineProp(this, 'mdErrorColor', _descriptor35, this);

  _initDefineProp(this, 'mdSuccessColor', _descriptor36, this);
}, (_descriptor33 = _applyDecoratedDescriptor(_class33.prototype, 'mdPrimaryColor', [_dec51], {
  enumerable: true,
  initializer: null
}), _descriptor34 = _applyDecoratedDescriptor(_class33.prototype, 'mdAccentColor', [_dec52], {
  enumerable: true,
  initializer: null
}), _descriptor35 = _applyDecoratedDescriptor(_class33.prototype, 'mdErrorColor', [_dec53], {
  enumerable: true,
  initializer: function initializer() {
    return '#F44336';
  }
}), _descriptor36 = _applyDecoratedDescriptor(_class33.prototype, 'mdSuccessColor', [_dec54], {
  enumerable: true,
  initializer: function initializer() {
    return '#26a69a';
  }
})), _class33));
var MdChip = exports.MdChip = (_dec55 = (0, _aureliaTemplating.customElement)('md-chip'), _dec56 = (0, _aureliaDependencyInjection.inject)(Element), _dec57 = (0, _aureliaTemplating.bindable)(), _dec55(_class35 = _dec56(_class35 = (_class36 = function () {
  function MdChip(element) {
    _classCallCheck(this, MdChip);

    _initDefineProp(this, 'mdClose', _descriptor37, this);

    this.element = element;
  }

  MdChip.prototype.attached = function attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  };

  MdChip.prototype.close = function close() {
    this.element.parentElement.removeChild(this.element);
    fireEvent(this.element, 'close');
  };

  return MdChip;
}(), (_descriptor37 = _applyDecoratedDescriptor(_class36.prototype, 'mdClose', [_dec57], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class36)) || _class35) || _class35);
var MdChips = exports.MdChips = (_dec58 = (0, _aureliaTemplating.customAttribute)('md-chips'), _dec59 = (0, _aureliaDependencyInjection.inject)(Element), _dec60 = (0, _aureliaTemplating.bindable)(), _dec61 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec62 = (0, _aureliaTemplating.bindable)(), _dec63 = (0, _aureliaTemplating.bindable)(), _dec58(_class38 = _dec59(_class38 = (_class39 = function () {
  function MdChips(element) {
    _classCallCheck(this, MdChips);

    _initDefineProp(this, 'autocompleteOptions', _descriptor38, this);

    _initDefineProp(this, 'data', _descriptor39, this);

    _initDefineProp(this, 'placeholder', _descriptor40, this);

    _initDefineProp(this, 'secondaryPlaceholder', _descriptor41, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-chips');

    this.onChipAdd = this.onChipAdd.bind(this);
    this.onChipDelete = this.onChipDelete.bind(this);
    this.onChipSelect = this.onChipSelect.bind(this);
  }

  MdChips.prototype.attached = function attached() {
    this.refresh();
    $(this.element).on('chip.add', this.onChipAdd);
    $(this.element).on('chip.delete', this.onChipDelete);
    $(this.element).on('chip.select', this.onChipSelect);
  };

  MdChips.prototype.detached = function detached() {
    $(this.element).off('chip.add', this.onChipAdd);
    $(this.element).off('chip.delete', this.onChipDelete);
    $(this.element).off('chip.select', this.onChipSelect);
  };

  MdChips.prototype.dataChanged = function dataChanged(newValue, oldValue) {
    this.refresh();

    if (newValue.length > oldValue.length) {
      var chip = newValue.find(function (i) {
        return !oldValue.includes(i);
      });
      fireEvent(this.element, 'change', { source: 'dataChanged', operation: 'add', target: chip, data: newValue });
    }
    if (newValue.length < oldValue.length) {
      var _chip = oldValue.find(function (i) {
        return !newValue.includes(i);
      });
      fireEvent(this.element, 'change', { source: 'dataChanged', operation: 'delete', target: _chip, data: newValue });
    }
  };

  MdChips.prototype.refresh = function refresh() {
    var options = {
      autocompleteOptions: this.autocompleteOptions,
      data: this.data,
      placeholder: this.placeholder,
      secondaryPlaceholder: this.secondaryPlaceholder
    };
    $(this.element).material_chip(options);
  };

  MdChips.prototype.onChipAdd = function onChipAdd(e, chip) {
    this.data = $(this.element).material_chip('data');
  };

  MdChips.prototype.onChipDelete = function onChipDelete(e, chip) {
    this.data = $(this.element).material_chip('data');
  };

  MdChips.prototype.onChipSelect = function onChipSelect(e, chip) {
    fireEvent(this.element, 'selected', { target: chip });
  };

  return MdChips;
}(), (_descriptor38 = _applyDecoratedDescriptor(_class39.prototype, 'autocompleteOptions', [_dec60], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class39.prototype, 'data', [_dec61], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class39.prototype, 'placeholder', [_dec62], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor41 = _applyDecoratedDescriptor(_class39.prototype, 'secondaryPlaceholder', [_dec63], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class39)) || _class38) || _class38);
var MdCollectionHeader = exports.MdCollectionHeader = (_dec64 = (0, _aureliaTemplating.customElement)('md-collection-header'), _dec65 = (0, _aureliaDependencyInjection.inject)(Element), _dec64(_class41 = _dec65(_class41 = function MdCollectionHeader(element) {
  _classCallCheck(this, MdCollectionHeader);

  this.element = element;
}) || _class41) || _class41);
var MdCollectionItem = exports.MdCollectionItem = (_dec66 = (0, _aureliaTemplating.customElement)('md-collection-item'), _dec66(_class42 = function MdCollectionItem() {
  _classCallCheck(this, MdCollectionItem);
}) || _class42);
var MdCollection = exports.MdCollection = (_dec67 = (0, _aureliaTemplating.customElement)('md-collection'), _dec68 = (0, _aureliaDependencyInjection.inject)(Element), _dec67(_class43 = _dec68(_class43 = function () {
  function MdCollection(element) {
    _classCallCheck(this, MdCollection);

    this.element = element;
  }

  MdCollection.prototype.attached = function attached() {
    var header = this.element.querySelector('md-collection-header');
    if (header) {
      this.anchor.classList.add('with-header');
    }
  };

  MdCollection.prototype.getSelected = function getSelected() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    return items.filter(function (i) {
      return i.au['md-collection-selector'].viewModel.isSelected;
    }).map(function (i) {
      return i.au['md-collection-selector'].viewModel.item;
    });
  };

  MdCollection.prototype.clearSelection = function clearSelection() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(function (i) {
      return i.au['md-collection-selector'].viewModel.isSelected = false;
    });
  };

  MdCollection.prototype.selectAll = function selectAll() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(function (i) {
      var vm = i.au['md-collection-selector'].viewModel;
      vm.isSelected = !vm.mdDisabled;
    });
  };

  MdCollection.prototype.toggleIndex = function toggleIndex(index) {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    var vm = items[index].au['md-collection-selector'].viewModel;
    vm.isSelected = !vm.isSelected;
  };

  return MdCollection;
}()) || _class43) || _class43);
var MdlListSelector = exports.MdlListSelector = (_dec69 = (0, _aureliaTemplating.customElement)('md-collection-selector'), _dec70 = (0, _aureliaDependencyInjection.inject)(Element), _dec71 = (0, _aureliaTemplating.bindable)(), _dec72 = (0, _aureliaTemplating.bindable)(), _dec73 = (0, _aureliaBinding.observable)(), _dec69(_class44 = _dec70(_class44 = (_class45 = function () {
  function MdlListSelector(element) {
    _classCallCheck(this, MdlListSelector);

    _initDefineProp(this, 'item', _descriptor42, this);

    _initDefineProp(this, 'mdDisabled', _descriptor43, this);

    _initDefineProp(this, 'isSelected', _descriptor44, this);

    this.element = element;
  }

  MdlListSelector.prototype.isSelectedChanged = function isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  };

  MdlListSelector.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    this.mdDisabled = getBooleanFromAttributeValue(newValue);
  };

  return MdlListSelector;
}(), (_descriptor42 = _applyDecoratedDescriptor(_class45.prototype, 'item', [_dec71], {
  enumerable: true,
  initializer: null
}), _descriptor43 = _applyDecoratedDescriptor(_class45.prototype, 'mdDisabled', [_dec72], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class45.prototype, 'isSelected', [_dec73], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class45)) || _class44) || _class44);
var MdCollapsible = exports.MdCollapsible = (_dec74 = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec75 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec76 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec77 = (0, _aureliaTemplating.bindable)({ name: 'onOpen' }), _dec78 = (0, _aureliaTemplating.bindable)({ name: 'onClose' }), _dec79 = (0, _aureliaDependencyInjection.inject)(Element), _dec74(_class47 = _dec75(_class47 = _dec76(_class47 = _dec77(_class47 = _dec78(_class47 = _dec79(_class47 = function () {
  function MdCollapsible(element) {
    _classCallCheck(this, MdCollapsible);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCollapsible.prototype.attached = function attached() {
    this.attributeManager.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.attributeManager.addClasses('popout');
    }
    this.refresh();
  };

  MdCollapsible.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['collapsible', 'popout']);
    this.attributeManager.removeAttributes(['data-collapsible']);
    $(this.element).collapsible('destroy');
  };

  MdCollapsible.prototype.refresh = function refresh() {
    var accordion = getBooleanFromAttributeValue(this.accordion);
    var dataCollapsibleAttributeValue = accordion ? 'accordion' : 'expandable';

    this.attributeManager.addAttributes({ 'data-collapsible': dataCollapsibleAttributeValue });

    $(this.element).collapsible({
      accordion: accordion,
      onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
      onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
    });
  };

  MdCollapsible.prototype.accordionChanged = function accordionChanged() {
    this.refresh();
  };

  MdCollapsible.prototype.buildCollapsibleOpenCloseCallbackHandler = function buildCollapsibleOpenCloseCallbackHandler(handler) {
    return typeof handler === 'function' ? function (targetElementJquery) {
      var targetElement = targetElementJquery[0];

      handler(targetElement);
    } : null;
  };

  MdCollapsible.prototype.open = function open() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    $(this.element).collapsible('open', index);
  };

  MdCollapsible.prototype.close = function close() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    $(this.element).collapsible('close', index);
  };

  return MdCollapsible;
}()) || _class47) || _class47) || _class47) || _class47) || _class47) || _class47);

var AttributeManager = exports.AttributeManager = function () {
  function AttributeManager(element) {
    _classCallCheck(this, AttributeManager);

    this._colorClasses = ['accent', 'primary'];
    this.addedClasses = [];
    this.addedAttributes = {};

    this.element = element;
  }

  AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
    var _this4 = this;

    var keys = Object.keys(attrs);
    keys.forEach(function (k) {
      if (!_this4.element.getAttribute(k)) {
        _this4.addedAttributes[k] = attrs[k];
        _this4.element.setAttribute(k, attrs[k]);
      } else if (_this4.element.getAttribute(k) !== attrs[k]) {
        _this4.element.setAttribute(k, attrs[k]);
      }
    });
  };

  AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
    var _this5 = this;

    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(function (a) {
      if (_this5.element.getAttribute(a) && !!_this5.addedAttributes[a]) {
        _this5.element.removeAttribute(a);
        _this5.addedAttributes[a] = null;
        delete _this5.addedAttributes[a];
      }
    });
  };

  AttributeManager.prototype.addClasses = function addClasses(classes) {
    var _this6 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      var classListHasColor = _this6._colorClasses.filter(function (cc) {
        return _this6.element.classList.contains(cc);
      }).length > 0;
      if (_this6._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
        if (!_this6.element.classList.contains(c)) {
          _this6.addedClasses.push(c);
          _this6.element.classList.add(c);
        }
      }
    });
  };

  AttributeManager.prototype.removeClasses = function removeClasses(classes) {
    var _this7 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (_this7.element.classList.contains(c) && _this7.addedClasses.indexOf(c) > -1) {
        _this7.element.classList.remove(c);
        _this7.addedClasses.splice(_this7.addedClasses.indexOf(c), 1);
      }
    });
  };

  return AttributeManager;
}();

function getBooleanFromAttributeValue(value) {
  return value === true || value === 'true';
}

var constants = exports.constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

function fireEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

function fireMaterializeEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return fireEvent(element, '' + constants.eventPrefix + name, data);
}

function polyfillElementClosest() {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }
      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      var element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }
      return null;
    };
  }
}

var DatePickerDefaultParser = exports.DatePickerDefaultParser = function () {
  function DatePickerDefaultParser() {
    _classCallCheck(this, DatePickerDefaultParser);
  }

  DatePickerDefaultParser.prototype.canParse = function canParse(value) {
    if (value) {
      return true;
    }
    return false;
  };

  DatePickerDefaultParser.prototype.parse = function parse(value) {
    if (value) {
      var result = value.split('/').join('-');
      result = new Date(result);
      return isNaN(result) ? null : result;
    }
    return null;
  };

  return DatePickerDefaultParser;
}();

var MdDatePicker = exports.MdDatePicker = (_dec80 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, DatePickerDefaultParser), _dec81 = (0, _aureliaTemplating.customAttribute)('md-datepicker'), _dec82 = (0, _aureliaTemplating.bindable)(), _dec83 = (0, _aureliaTemplating.bindable)(), _dec84 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec85 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec86 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec87 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec88 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec89 = (0, _aureliaTemplating.bindable)(), _dec80(_class49 = _dec81(_class49 = (_class50 = function () {
  function MdDatePicker(element, taskQueue, defaultParser) {
    var _this8 = this;

    _classCallCheck(this, MdDatePicker);

    _initDefineProp(this, 'container', _descriptor45, this);

    _initDefineProp(this, 'translation', _descriptor46, this);

    _initDefineProp(this, 'value', _descriptor47, this);

    _initDefineProp(this, 'parsers', _descriptor48, this);

    _initDefineProp(this, 'selectMonths', _descriptor49, this);

    _initDefineProp(this, 'selectYears', _descriptor50, this);

    _initDefineProp(this, 'options', _descriptor51, this);

    _initDefineProp(this, 'showErrortext', _descriptor52, this);

    this.calendarIcon = null;

    this.mdUnrenderValidateResults = function (results, renderer) {
      for (var _iterator = results, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var result = _ref;

        if (!result.valid) {
          renderer.removeMessage(_this8.element.parentNode, result);
        }
      }
      renderer.removeValidationClasses(_this8.element);
    };

    this.mdRenderValidateResults = function (results, renderer) {
      if (!(_this8.element.hasAttribute('data-show-errortext') && _this8.element.getAttribute('data-show-errortext') === 'false')) {
        for (var _iterator2 = results, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var result = _ref2;

          if (!result.valid) {
            renderer.addMessage(_this8.element.parentNode, result);
          }
        }
      }
      renderer.addValidationClasses(_this8.element, !results.find(function (x) {
        return !x.valid;
      }));
    };

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-datepicker');
    this.taskQueue = taskQueue;
    this.parsers.push(defaultParser);
    this.onCalendarIconClick = this.onCalendarIconClick.bind(this);
  }

  MdDatePicker.prototype.attached = function attached() {
    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
  };

  MdDatePicker.prototype.bind = function bind() {
    var _this9 = this;

    this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
    this.selectYears = parseInt(this.selectYears, 10);
    this.element.classList.add('date-picker');

    var options = {
      selectMonths: this.selectMonths,
      selectYears: this.selectYears,
      onClose: function onClose() {
        $(document.activeElement).blur();
      }
    };
    var i18n = {};

    Object.assign(options, i18n);

    if (this.options) {
      Object.assign(options, this.options);

      if (this.options.onClose) {
        options.onClose = function () {
          _this9.options.onClose();
          $(document.activeElement).blur();
        };
      }
    }
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this)
    });

    if (this.value) {
      this.picker.set('select', this.value);
    }
    if (this.options && this.options.editable) {
      $(this.element).on('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 9) {
          if (_this9.parseDate($(_this9.element).val())) {
            _this9.updateValue();
            _this9.closeDatePicker();
          } else {
            _this9.openDatePicker();
          }
        } else {
          _this9.value = null;
        }
      });
    } else {
      $(this.element).on('focusin', function () {
        _this9.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      this.calendarIcon = document.createElement('i');
      this.calendarIcon.classList.add('right');
      this.calendarIcon.classList.add('material-icons');
      this.calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(this.calendarIcon, this.element.nextSibling);
      $(this.calendarIcon).on('click', this.onCalendarIconClick);

      options.iconClass = options.iconClass || 'std-icon-fixup';
      this.calendarIcon.classList.add(options.iconClass);
    }

    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.parseDate = function parseDate(value) {
    if (this.parsers && this.parsers.length && this.parsers.length > 0) {
      for (var _iterator3 = this.parsers, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var parser = _ref3;

        if (parser.canParse(value)) {
          var parsedDate = parser.parse(value);
          if (parsedDate !== null) {
            this.picker.set('select', parsedDate);
            return true;
          }
        }
      }
    }
    return false;
  };

  MdDatePicker.prototype.detached = function detached() {
    if (this.options.showIcon) {
      this.element.classList.remove('left');
      $(this.calendarIcon).off('click', this.onCalendarIconClick);
      $(this.calendarIcon).remove();
      this.calendarIcon = null;
    }
    if (this.picker) {
      this.picker.stop();
    }
    this.element.mdUnrenderValidateResults = undefined;
    this.element.mdRenderValidateResults = undefined;
  };

  MdDatePicker.prototype.openDatePicker = function openDatePicker() {
    $(this.element).pickadate('open');
  };

  MdDatePicker.prototype.closeDatePicker = function closeDatePicker() {
    $(this.element).pickadate('close');
  };

  MdDatePicker.prototype.updateValue = function updateValue() {
    var selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
  };

  MdDatePicker.prototype.onClose = function onClose() {
    this.updateValue();
    fireEvent(this.element, 'blur');
  };

  MdDatePicker.prototype.onCalendarIconClick = function onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  };

  MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
    if (this.options.max && newValue > this.options.max) {
      this.value = this.options.max;
    }
    this.log.debug('selectedChanged', this.value);

    this.picker.set('select', this.value);
  };

  MdDatePicker.prototype.showErrortextChanged = function showErrortextChanged() {
    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
    var element = this.element;
    if (!element) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    element.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  };

  return MdDatePicker;
}(), (_descriptor45 = _applyDecoratedDescriptor(_class50.prototype, 'container', [_dec82], {
  enumerable: true,
  initializer: null
}), _descriptor46 = _applyDecoratedDescriptor(_class50.prototype, 'translation', [_dec83], {
  enumerable: true,
  initializer: null
}), _descriptor47 = _applyDecoratedDescriptor(_class50.prototype, 'value', [_dec84], {
  enumerable: true,
  initializer: null
}), _descriptor48 = _applyDecoratedDescriptor(_class50.prototype, 'parsers', [_dec85], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor49 = _applyDecoratedDescriptor(_class50.prototype, 'selectMonths', [_dec86], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor50 = _applyDecoratedDescriptor(_class50.prototype, 'selectYears', [_dec87], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class50.prototype, 'options', [_dec88], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor52 = _applyDecoratedDescriptor(_class50.prototype, 'showErrortext', [_dec89], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class50)) || _class49) || _class49);
var MdDropdownElement = exports.MdDropdownElement = (_dec90 = (0, _aureliaTemplating.customElement)('md-dropdown'), _dec91 = (0, _aureliaDependencyInjection.inject)(Element), _dec92 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec93 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec94 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec95 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec96 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec97 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec98 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec99 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec100 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec90(_class52 = _dec91(_class52 = (_class53 = (_temp2 = _class54 = function () {
  function MdDropdownElement(element) {
    _classCallCheck(this, MdDropdownElement);

    _initDefineProp(this, 'alignment', _descriptor53, this);

    _initDefineProp(this, 'belowOrigin', _descriptor54, this);

    _initDefineProp(this, 'constrainWidth', _descriptor55, this);

    _initDefineProp(this, 'gutter', _descriptor56, this);

    _initDefineProp(this, 'hover', _descriptor57, this);

    _initDefineProp(this, 'mdTitle', _descriptor58, this);

    _initDefineProp(this, 'inDuration', _descriptor59, this);

    _initDefineProp(this, 'outDuration', _descriptor60, this);

    _initDefineProp(this, 'stopPropagation', _descriptor61, this);

    this.element = element;
    this.controlId = 'md-dropdown-' + MdDropdown.id++;
  }

  MdDropdownElement.prototype.attached = function attached() {
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10),
      stopPropagation: getBooleanFromAttributeValue(this.stopPropagation)
    });
  };

  return MdDropdownElement;
}(), _class54.id = 0, _temp2), (_descriptor53 = _applyDecoratedDescriptor(_class53.prototype, 'alignment', [_dec92], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor54 = _applyDecoratedDescriptor(_class53.prototype, 'belowOrigin', [_dec93], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor55 = _applyDecoratedDescriptor(_class53.prototype, 'constrainWidth', [_dec94], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor56 = _applyDecoratedDescriptor(_class53.prototype, 'gutter', [_dec95], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor57 = _applyDecoratedDescriptor(_class53.prototype, 'hover', [_dec96], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor58 = _applyDecoratedDescriptor(_class53.prototype, 'mdTitle', [_dec97], {
  enumerable: true,
  initializer: null
}), _descriptor59 = _applyDecoratedDescriptor(_class53.prototype, 'inDuration', [_dec98], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor60 = _applyDecoratedDescriptor(_class53.prototype, 'outDuration', [_dec99], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
}), _descriptor61 = _applyDecoratedDescriptor(_class53.prototype, 'stopPropagation', [_dec100], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class53)) || _class52) || _class52);
var MdDropdown = exports.MdDropdown = (_dec101 = (0, _aureliaTemplating.customAttribute)('md-dropdown'), _dec102 = (0, _aureliaDependencyInjection.inject)(Element), _dec103 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec104 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec105 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec106 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec107 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec108 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec109 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec110 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec111 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec112 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec113 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec101(_class55 = _dec102(_class55 = (_class56 = (_temp3 = _class57 = function () {
  function MdDropdown(element) {
    _classCallCheck(this, MdDropdown);

    _initDefineProp(this, 'activates', _descriptor62, this);

    _initDefineProp(this, 'ref', _descriptor63, this);

    _initDefineProp(this, 'alignment', _descriptor64, this);

    _initDefineProp(this, 'belowOrigin', _descriptor65, this);

    _initDefineProp(this, 'constrainWidth', _descriptor66, this);

    _initDefineProp(this, 'gutter', _descriptor67, this);

    _initDefineProp(this, 'hover', _descriptor68, this);

    _initDefineProp(this, 'mdTitle', _descriptor69, this);

    _initDefineProp(this, 'inDuration', _descriptor70, this);

    _initDefineProp(this, 'outDuration', _descriptor71, this);

    _initDefineProp(this, 'stopPropagation', _descriptor72, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdDropdown.prototype.attached = function attached() {
    this.handleActivateElement();
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');


    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      constrainWidth: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10),
      stopPropagation: getBooleanFromAttributeValue(this.stopPropagation)
    });
  };

  MdDropdown.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-activates');
    this.attributeManager.removeClasses('dropdown-button');
    this.contentAttributeManager.removeClasses('dropdown-content');
  };

  MdDropdown.prototype.open = function open() {
    $(this.element).dropdown('open');
  };

  MdDropdown.prototype.close = function close() {
    $(this.element).dropdown('close');
  };

  MdDropdown.prototype.handleActivateElement = function handleActivateElement() {
    if (this.ref) {
      var id = this.ref.getAttribute('id');
      if (!id) {
        id = 'md-dropdown-' + MdDropdown.elementId++;
        this.ref.setAttribute('id', id);
        this.activates = id;
      }
      this.id = MdDropdown.elementId++;
    }
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
  };

  return MdDropdown;
}(), _class57.elementId = 0, _temp3), (_descriptor62 = _applyDecoratedDescriptor(_class56.prototype, 'activates', [_dec103], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor63 = _applyDecoratedDescriptor(_class56.prototype, 'ref', [_dec104], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor64 = _applyDecoratedDescriptor(_class56.prototype, 'alignment', [_dec105], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor65 = _applyDecoratedDescriptor(_class56.prototype, 'belowOrigin', [_dec106], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor66 = _applyDecoratedDescriptor(_class56.prototype, 'constrainWidth', [_dec107], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor67 = _applyDecoratedDescriptor(_class56.prototype, 'gutter', [_dec108], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor68 = _applyDecoratedDescriptor(_class56.prototype, 'hover', [_dec109], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor69 = _applyDecoratedDescriptor(_class56.prototype, 'mdTitle', [_dec110], {
  enumerable: true,
  initializer: null
}), _descriptor70 = _applyDecoratedDescriptor(_class56.prototype, 'inDuration', [_dec111], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor71 = _applyDecoratedDescriptor(_class56.prototype, 'outDuration', [_dec112], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
}), _descriptor72 = _applyDecoratedDescriptor(_class56.prototype, 'stopPropagation', [_dec113], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class56)) || _class55) || _class55);
var MdFab = exports.MdFab = (_dec114 = (0, _aureliaTemplating.customElement)('md-fab'), _dec115 = (0, _aureliaDependencyInjection.inject)(Element), _dec116 = (0, _aureliaTemplating.bindable)(), _dec117 = (0, _aureliaTemplating.bindable)(), _dec114(_class58 = _dec115(_class58 = (_class59 = function () {
  function MdFab(element) {
    _classCallCheck(this, MdFab);

    _initDefineProp(this, 'mdFixed', _descriptor73, this);

    _initDefineProp(this, 'mdLarge', _descriptor74, this);

    this.element = element;
  }

  MdFab.prototype.attached = function attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  };

  return MdFab;
}(), (_descriptor73 = _applyDecoratedDescriptor(_class59.prototype, 'mdFixed', [_dec116], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor74 = _applyDecoratedDescriptor(_class59.prototype, 'mdLarge', [_dec117], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class59)) || _class58) || _class58);
var MdFileInput = exports.MdFileInput = (_dec118 = (0, _aureliaTemplating.customElement)('md-file'), _dec119 = (0, _aureliaDependencyInjection.inject)(Element), _dec120 = (0, _aureliaTemplating.bindable)(), _dec121 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec122 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec123 = (0, _aureliaTemplating.bindable)(), _dec124 = (0, _aureliaTemplating.bindable)(), _dec118(_class61 = _dec119(_class61 = (_class62 = function () {
  function MdFileInput(element) {
    _classCallCheck(this, MdFileInput);

    _initDefineProp(this, 'mdCaption', _descriptor75, this);

    _initDefineProp(this, 'mdMultiple', _descriptor76, this);

    _initDefineProp(this, 'mdLabelValue', _descriptor77, this);

    _initDefineProp(this, 'disabled', _descriptor78, this);

    _initDefineProp(this, 'mdReadonly', _descriptor79, this);

    this.files = [];
    this._suspendUpdate = false;

    this.element = element;
    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
  }

  MdFileInput.prototype.attached = function attached() {
    this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
    $(this.filePath).on('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.handleChangeFromNativeInput = function handleChangeFromNativeInput() {
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.filePath, 'change', { files: this.files });
      fireMaterializeEvent(this.filePath, 'change', { files: this.files });
      this._suspendUpdate = false;
    }
  };

  return MdFileInput;
}(), (_descriptor75 = _applyDecoratedDescriptor(_class62.prototype, 'mdCaption', [_dec120], {
  enumerable: true,
  initializer: function initializer() {
    return 'File';
  }
}), _descriptor76 = _applyDecoratedDescriptor(_class62.prototype, 'mdMultiple', [_dec121], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor77 = _applyDecoratedDescriptor(_class62.prototype, 'mdLabelValue', [_dec122], {
  enumerable: true,
  initializer: null
}), _descriptor78 = _applyDecoratedDescriptor(_class62.prototype, 'disabled', [_dec123], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor79 = _applyDecoratedDescriptor(_class62.prototype, 'mdReadonly', [_dec124], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class62)) || _class61) || _class61);
var MdFooter = exports.MdFooter = (_dec125 = (0, _aureliaTemplating.customAttribute)('md-footer'), _dec126 = (0, _aureliaDependencyInjection.inject)(Element), _dec125(_class64 = _dec126(_class64 = function () {
  function MdFooter(element) {
    _classCallCheck(this, MdFooter);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdFooter.prototype.bind = function bind() {
    this.attributeManager.addClasses('page-footer');
  };

  MdFooter.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('page-footer');
  };

  return MdFooter;
}()) || _class64) || _class64);
var MdModalTrigger = exports.MdModalTrigger = (_dec127 = (0, _aureliaTemplating.customAttribute)('md-modal-trigger'), _dec128 = (0, _aureliaDependencyInjection.inject)(Element), _dec129 = (0, _aureliaTemplating.bindable)(), _dec127(_class65 = _dec128(_class65 = (_class66 = function () {
  function MdModalTrigger(element) {
    _classCallCheck(this, MdModalTrigger);

    _initDefineProp(this, 'dismissible', _descriptor80, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
  }

  MdModalTrigger.prototype.attached = function attached() {
    this.attributeManager.addClasses('modal-trigger');
    $(this.element).leanModal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible)
    });
  };

  MdModalTrigger.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal-trigger');
  };

  MdModalTrigger.prototype.onComplete = function onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  };

  return MdModalTrigger;
}(), (_descriptor80 = _applyDecoratedDescriptor(_class66.prototype, 'dismissible', [_dec129], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class66)) || _class65) || _class65);
var MdModal = exports.MdModal = (_dec130 = (0, _aureliaTemplating.customAttribute)('md-modal'), _dec131 = (0, _aureliaDependencyInjection.inject)(Element), _dec132 = (0, _aureliaTemplating.bindable)(), _dec133 = (0, _aureliaTemplating.bindable)(), _dec134 = (0, _aureliaTemplating.bindable)(), _dec135 = (0, _aureliaTemplating.bindable)(), _dec136 = (0, _aureliaTemplating.bindable)(), _dec137 = (0, _aureliaTemplating.bindable)(), _dec130(_class68 = _dec131(_class68 = (_class69 = function () {
  function MdModal(element) {
    _classCallCheck(this, MdModal);

    _initDefineProp(this, 'dismissible', _descriptor81, this);

    _initDefineProp(this, 'opacity', _descriptor82, this);

    _initDefineProp(this, 'inDuration', _descriptor83, this);

    _initDefineProp(this, 'outDuration', _descriptor84, this);

    _initDefineProp(this, 'startingTop', _descriptor85, this);

    _initDefineProp(this, 'endingTop', _descriptor86, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-modal');
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  MdModal.prototype.attached = function attached() {
    var options = {
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible),
      endingTop: this.endingTop,
      inDuration: parseInt(this.inDuration, 10),
      opacity: parseFloat(this.opacity),
      outDuration: parseInt(this.outDuration, 10),
      ready: this.onReady,
      startingTop: this.startingTop
    };
    this.log.debug('modal options: ', options);
    this.attributeManager.addClasses('modal');
    $(this.element).modal(options);
  };

  MdModal.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal');
  };

  MdModal.prototype.onComplete = function onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  };

  MdModal.prototype.onReady = function onReady(modal, trigger) {
    fireMaterializeEvent(this.element, 'modal-ready', { modal: modal, trigger: trigger });
  };

  MdModal.prototype.open = function open() {
    $(this.element).modal('open');
  };

  MdModal.prototype.close = function close() {
    $(this.element).modal('close');
  };

  return MdModal;
}(), (_descriptor81 = _applyDecoratedDescriptor(_class69.prototype, 'dismissible', [_dec132], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor82 = _applyDecoratedDescriptor(_class69.prototype, 'opacity', [_dec133], {
  enumerable: true,
  initializer: function initializer() {
    return 0.5;
  }
}), _descriptor83 = _applyDecoratedDescriptor(_class69.prototype, 'inDuration', [_dec134], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor84 = _applyDecoratedDescriptor(_class69.prototype, 'outDuration', [_dec135], {
  enumerable: true,
  initializer: function initializer() {
    return 200;
  }
}), _descriptor85 = _applyDecoratedDescriptor(_class69.prototype, 'startingTop', [_dec136], {
  enumerable: true,
  initializer: function initializer() {
    return '4%';
  }
}), _descriptor86 = _applyDecoratedDescriptor(_class69.prototype, 'endingTop', [_dec137], {
  enumerable: true,
  initializer: function initializer() {
    return '10%';
  }
})), _class69)) || _class68) || _class68);
var MdPrefix = exports.MdPrefix = (_dec138 = (0, _aureliaTemplating.customAttribute)('md-prefix'), _dec139 = (0, _aureliaDependencyInjection.inject)(Element), _dec138(_class71 = _dec139(_class71 = function () {
  function MdPrefix(element) {
    _classCallCheck(this, MdPrefix);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdPrefix.prototype.bind = function bind() {
    this.attributeManager.addClasses('prefix');
  };

  MdPrefix.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('prefix');
  };

  return MdPrefix;
}()) || _class71) || _class71);
var MdInputUpdateService = exports.MdInputUpdateService = (_dec140 = (0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue), _dec140(_class72 = function () {
  function MdInputUpdateService(taskQueue) {
    _classCallCheck(this, MdInputUpdateService);

    this._updateCalled = false;

    this.log = (0, _aureliaLogging.getLogger)('MdInputUpdateService');
    this.taskQueue = taskQueue;
  }

  MdInputUpdateService.prototype.materializeUpdate = function materializeUpdate() {
    this.log.debug('executing Materialize.updateTextFields');
    Materialize.updateTextFields();
    this._updateCalled = false;
  };

  MdInputUpdateService.prototype.update = function update() {
    this.log.debug('update called');
    if (!this._updateCalled) {
      this._updateCalled = true;
      this.taskQueue.queueTask(this.materializeUpdate.bind(this));
    }
  };

  return MdInputUpdateService;
}()) || _class72);
var MdInput = exports.MdInput = (_dec141 = (0, _aureliaTemplating.customElement)('md-input'), _dec142 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, MdInputUpdateService), _dec143 = (0, _aureliaTemplating.bindable)(), _dec144 = (0, _aureliaTemplating.bindable)(), _dec145 = (0, _aureliaTemplating.bindable)(), _dec146 = (0, _aureliaTemplating.bindable)(), _dec147 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec148 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec149 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec150 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec151 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec152 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec153 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec154 = (0, _aureliaTemplating.bindable)(), _dec155 = (0, _aureliaTemplating.bindable)(), _dec156 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec157 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec158 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec159 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec160 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec141(_class74 = _dec142(_class74 = (_class75 = (_temp4 = _class76 = function () {
  function MdInput(element, taskQueue, updateService) {
    var _this10 = this;

    _classCallCheck(this, MdInput);

    _initDefineProp(this, 'mdLabel', _descriptor87, this);

    _initDefineProp(this, 'mdBlurOnEnter', _descriptor88, this);

    _initDefineProp(this, 'mdDisabled', _descriptor89, this);

    _initDefineProp(this, 'mdReadonly', _descriptor90, this);

    _initDefineProp(this, 'mdPlaceholder', _descriptor91, this);

    _initDefineProp(this, 'mdTextArea', _descriptor92, this);

    _initDefineProp(this, 'mdType', _descriptor93, this);

    _initDefineProp(this, 'mdStep', _descriptor94, this);

    _initDefineProp(this, 'mdValidate', _descriptor95, this);

    _initDefineProp(this, 'mdShowErrortext', _descriptor96, this);

    _initDefineProp(this, 'mdUpdateTrigger', _descriptor97, this);

    _initDefineProp(this, 'mdValidateError', _descriptor98, this);

    _initDefineProp(this, 'mdValidateSuccess', _descriptor99, this);

    _initDefineProp(this, 'mdValue', _descriptor100, this);

    _initDefineProp(this, 'mdMin', _descriptor101, this);

    _initDefineProp(this, 'mdMax', _descriptor102, this);

    _initDefineProp(this, 'mdName', _descriptor103, this);

    _initDefineProp(this, 'mdMaxlength', _descriptor104, this);

    this._suspendUpdate = false;

    this.mdUnrenderValidateResults = function (results, renderer) {
      for (var _iterator4 = results, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var result = _ref4;

        if (!result.valid) {
          renderer.removeMessage(_this10.element, result);
        }
      }
      renderer.removeValidationClasses(_this10.input);
    };

    this.mdRenderValidateResults = function (results, renderer) {
      if (_this10.label && results.find(function (x) {
        return !x.valid;
      })) {
        _this10.label.removeAttribute('data-error');
      }
      if (_this10.input) {
        for (var _iterator5 = results, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref5 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref5 = _i5.value;
          }

          var result = _ref5;

          if (!result.valid) {
            result.target = _this10.input;
            if (_this10.input.hasAttribute('data-show-errortext')) {
              renderer.addMessage(_this10.element, result);
            }
          }
        }
      }
      renderer.addValidationClasses(_this10.input, !results.find(function (x) {
        return !x.valid;
      }));
    };

    this.element = element;
    this.taskQueue = taskQueue;
    this.controlId = 'md-input-' + MdInput.id++;
    this.updateService = updateService;
    this.blurOnEnter = this.blurOnEnter.bind(this);
  }

  MdInput.prototype.bind = function bind() {
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
    this.mdTextArea = getBooleanFromAttributeValue(this.mdTextArea);
    this.mdShowErrortext = getBooleanFromAttributeValue(this.mdShowErrortext);
    this.mdBlurOnEnter = getBooleanFromAttributeValue(this.mdBlurOnEnter);
  };

  MdInput.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdValidate)) {
      this.input.classList.add('validate');
    }
    if (this.mdValidateError) {
      this.label.setAttribute('data-error', this.mdValidateError);
    }
    if (this.mdValidateSuccess) {
      this.label.setAttribute('data-success', this.mdValidateSuccess);
    }
    if (this.mdPlaceholder) {
      this.input.setAttribute('placeholder', this.mdPlaceholder);
    }
    if (this.mdShowErrortext) {
      this.input.setAttribute('data-show-errortext', this.mdShowErrortext);
    }
    this.updateService.update();

    if (this.mdType === 'time') {
      $(this.input).siblings('label').addClass('active');
    }
    this.attachEventHandlers();
    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
  };

  MdInput.prototype.detached = function detached() {
    this.detachEventHandlers();
    this.element.mdUnrenderValidateResults = undefined;
    this.element.mdRenderValidateResults = undefined;
  };

  MdInput.prototype.blur = function blur() {
    fireEvent(this.element, 'blur');
  };

  MdInput.prototype.focus = function focus() {
    this.input.focus();
    fireEvent(this.element, 'focus');
  };

  MdInput.prototype.mdValueChanged = function mdValueChanged() {
    if (!$(this.input).is(':focus')) {
      this.updateService.update();
    }
    if (this.mdTextArea) {
      $(this.input).trigger('autoresize');
    }
  };

  MdInput.prototype.attachEventHandlers = function attachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.addEventListener('keyup', this.blurOnEnter);
    }
  };

  MdInput.prototype.detachEventHandlers = function detachEventHandlers() {
    if (this.mdBlurOnEnter) {
      this.element.removeEventListener('keyup', this.blurOnEnter);
    }
  };

  MdInput.prototype.blurOnEnter = function blurOnEnter(e) {
    if (e.keyCode && e.keyCode === 13) {
      this.input.blur();
    }
  };

  return MdInput;
}(), _class76.id = 0, _temp4), (_descriptor87 = _applyDecoratedDescriptor(_class75.prototype, 'mdLabel', [_dec143], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor88 = _applyDecoratedDescriptor(_class75.prototype, 'mdBlurOnEnter', [_dec144], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor89 = _applyDecoratedDescriptor(_class75.prototype, 'mdDisabled', [_dec145], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor90 = _applyDecoratedDescriptor(_class75.prototype, 'mdReadonly', [_dec146], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor91 = _applyDecoratedDescriptor(_class75.prototype, 'mdPlaceholder', [_dec147], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor92 = _applyDecoratedDescriptor(_class75.prototype, 'mdTextArea', [_dec148], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor93 = _applyDecoratedDescriptor(_class75.prototype, 'mdType', [_dec149], {
  enumerable: true,
  initializer: function initializer() {
    return 'text';
  }
}), _descriptor94 = _applyDecoratedDescriptor(_class75.prototype, 'mdStep', [_dec150], {
  enumerable: true,
  initializer: function initializer() {
    return 'any';
  }
}), _descriptor95 = _applyDecoratedDescriptor(_class75.prototype, 'mdValidate', [_dec151], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor96 = _applyDecoratedDescriptor(_class75.prototype, 'mdShowErrortext', [_dec152], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor97 = _applyDecoratedDescriptor(_class75.prototype, 'mdUpdateTrigger', [_dec153], {
  enumerable: true,
  initializer: function initializer() {
    return ['input', 'change'];
  }
}), _descriptor98 = _applyDecoratedDescriptor(_class75.prototype, 'mdValidateError', [_dec154], {
  enumerable: true,
  initializer: null
}), _descriptor99 = _applyDecoratedDescriptor(_class75.prototype, 'mdValidateSuccess', [_dec155], {
  enumerable: true,
  initializer: null
}), _descriptor100 = _applyDecoratedDescriptor(_class75.prototype, 'mdValue', [_dec156], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor101 = _applyDecoratedDescriptor(_class75.prototype, 'mdMin', [_dec157], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor102 = _applyDecoratedDescriptor(_class75.prototype, 'mdMax', [_dec158], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor103 = _applyDecoratedDescriptor(_class75.prototype, 'mdName', [_dec159], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor104 = _applyDecoratedDescriptor(_class75.prototype, 'mdMaxlength', [_dec160], {
  enumerable: true,
  initializer: function initializer() {
    return 524288;
  }
})), _class75)) || _class74) || _class74);
var MdNavbar = exports.MdNavbar = (_dec161 = (0, _aureliaTemplating.customElement)('md-navbar'), _dec162 = (0, _aureliaDependencyInjection.inject)(Element), _dec163 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec164 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec165 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec161(_class77 = _dec162(_class77 = (_class78 = function () {
  function MdNavbar(element) {
    _classCallCheck(this, MdNavbar);

    _initDefineProp(this, 'mdExtended', _descriptor105, this);

    _initDefineProp(this, 'mdFixed', _descriptor106, this);

    _initDefineProp(this, 'mdAutoHeight', _descriptor107, this);

    this.element = element;
  }

  MdNavbar.prototype.attached = function attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    this.navAttributeManager = new AttributeManager(this.nav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.addClasses('md-auto-height');
    }
    if (getBooleanFromAttributeValue(this.mdExtended)) {
      this.navAttributeManager.addClasses('nav-extended');
    }
  };

  MdNavbar.prototype.detached = function detached() {
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.removeClasses('md-auto-height');
    }
    if (getBooleanFromAttributeValue(this.mdExtended)) {
      this.navAttributeManager.removeClasses('nav-extended');
    }
  };

  return MdNavbar;
}(), (_descriptor105 = _applyDecoratedDescriptor(_class78.prototype, 'mdExtended', [_dec163], {
  enumerable: true,
  initializer: null
}), _descriptor106 = _applyDecoratedDescriptor(_class78.prototype, 'mdFixed', [_dec164], {
  enumerable: true,
  initializer: null
}), _descriptor107 = _applyDecoratedDescriptor(_class78.prototype, 'mdAutoHeight', [_dec165], {
  enumerable: true,
  initializer: null
})), _class78)) || _class77) || _class77);
var MdPagination = exports.MdPagination = (_dec166 = (0, _aureliaTemplating.customElement)('md-pagination'), _dec167 = (0, _aureliaDependencyInjection.inject)(Element), _dec168 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec169 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec170 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec171 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec172 = (0, _aureliaTemplating.bindable)(), _dec173 = (0, _aureliaTemplating.bindable)(), _dec174 = (0, _aureliaTemplating.bindable)(), _dec166(_class80 = _dec167(_class80 = (_class81 = function () {
  function MdPagination(element) {
    _classCallCheck(this, MdPagination);

    _initDefineProp(this, 'mdActivePage', _descriptor108, this);

    _initDefineProp(this, 'mdPages', _descriptor109, this);

    _initDefineProp(this, 'mdVisiblePageLinks', _descriptor110, this);

    _initDefineProp(this, 'mdPageLinks', _descriptor111, this);

    _initDefineProp(this, 'mdShowFirstLast', _descriptor112, this);

    _initDefineProp(this, 'mdShowPrevNext', _descriptor113, this);

    _initDefineProp(this, 'mdShowPageLinks', _descriptor114, this);

    this.numberOfLinks = 15;
    this.pages = 5;

    this.element = element;
  }

  MdPagination.prototype.bind = function bind() {
    this.pages = parseInt(this.mdPages, 10);

    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.setActivePage = function setActivePage(page) {
    this.mdActivePage = parseInt(page, 10);
    this.mdPageLinks = this.generatePageLinks();
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  };

  MdPagination.prototype.setFirstPage = function setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  };

  MdPagination.prototype.setLastPage = function setLastPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.pages);
    }
  };

  MdPagination.prototype.setPreviousPage = function setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  };

  MdPagination.prototype.setNextPage = function setNextPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  };

  MdPagination.prototype.mdPagesChanged = function mdPagesChanged() {
    this.pages = parseInt(this.mdPages, 10);
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.setActivePage(1);
  };

  MdPagination.prototype.mdVisiblePageLinksChanged = function mdVisiblePageLinksChanged() {
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.generatePageLinks = function generatePageLinks() {
    var midPoint = parseInt(this.numberOfLinks / 2, 10);
    var start = Math.max(this.mdActivePage - midPoint, 0);

    if (start + midPoint * 2 > this.pages) start = this.pages - midPoint * 2;
    var end = Math.min(start + this.numberOfLinks, this.pages);

    var list = [];
    for (var i = start; i < end; i++) {
      list.push(i);
    }

    return list;
  };

  return MdPagination;
}(), (_descriptor108 = _applyDecoratedDescriptor(_class81.prototype, 'mdActivePage', [_dec168], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor109 = _applyDecoratedDescriptor(_class81.prototype, 'mdPages', [_dec169], {
  enumerable: true,
  initializer: function initializer() {
    return 5;
  }
}), _descriptor110 = _applyDecoratedDescriptor(_class81.prototype, 'mdVisiblePageLinks', [_dec170], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor111 = _applyDecoratedDescriptor(_class81.prototype, 'mdPageLinks', [_dec171], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor112 = _applyDecoratedDescriptor(_class81.prototype, 'mdShowFirstLast', [_dec172], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor113 = _applyDecoratedDescriptor(_class81.prototype, 'mdShowPrevNext', [_dec173], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor114 = _applyDecoratedDescriptor(_class81.prototype, 'mdShowPageLinks', [_dec174], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class81)) || _class80) || _class80);
var MdParallax = exports.MdParallax = (_dec175 = (0, _aureliaTemplating.customAttribute)('md-parallax'), _dec176 = (0, _aureliaDependencyInjection.inject)(Element), _dec175(_class83 = _dec176(_class83 = function () {
  function MdParallax(element) {
    _classCallCheck(this, MdParallax);

    this.element = element;
  }

  MdParallax.prototype.attached = function attached() {
    $(this.element).parallax();
  };

  MdParallax.prototype.detached = function detached() {};

  return MdParallax;
}()) || _class83) || _class83);
var MdProgress = exports.MdProgress = (_dec177 = (0, _aureliaTemplating.customElement)('md-progress'), _dec178 = (0, _aureliaDependencyInjection.inject)(Element), _dec179 = (0, _aureliaTemplating.bindable)(), _dec180 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec181 = (0, _aureliaTemplating.bindable)(), _dec182 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec183 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec177(_class84 = _dec178(_class84 = (_class85 = function () {
  function MdProgress(element) {
    _classCallCheck(this, MdProgress);

    _initDefineProp(this, 'mdColor', _descriptor115, this);

    _initDefineProp(this, 'mdPixelSize', _descriptor116, this);

    _initDefineProp(this, 'mdSize', _descriptor117, this);

    _initDefineProp(this, 'mdType', _descriptor118, this);

    _initDefineProp(this, 'mdValue', _descriptor119, this);

    this.element = element;
  }

  MdProgress.prototype.bind = function bind() {};

  MdProgress.prototype.attached = function attached() {
    this.mdPixelSizeChanged(this.mdPixelSize);
  };

  MdProgress.prototype.mdSizeChanged = function mdSizeChanged(newValue) {
    this.mdPixelSize = null;
  };

  MdProgress.prototype.mdPixelSizeChanged = function mdPixelSizeChanged(newValue) {
    if (this.wrapper) {
      newValue = newValue === null || newValue === '' || isNaN(newValue) ? '' : newValue + 'px';
      this.wrapper.style.height = newValue;
      this.wrapper.style.width = newValue;
    }
  };

  return MdProgress;
}(), (_descriptor115 = _applyDecoratedDescriptor(_class85.prototype, 'mdColor', [_dec179], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor116 = _applyDecoratedDescriptor(_class85.prototype, 'mdPixelSize', [_dec180], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor117 = _applyDecoratedDescriptor(_class85.prototype, 'mdSize', [_dec181], {
  enumerable: true,
  initializer: function initializer() {
    return 'big';
  }
}), _descriptor118 = _applyDecoratedDescriptor(_class85.prototype, 'mdType', [_dec182], {
  enumerable: true,
  initializer: function initializer() {
    return 'linear';
  }
}), _descriptor119 = _applyDecoratedDescriptor(_class85.prototype, 'mdValue', [_dec183], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class85)) || _class84) || _class84);
var MdPushpin = exports.MdPushpin = (_dec184 = (0, _aureliaTemplating.customAttribute)('md-pushpin'), _dec185 = (0, _aureliaDependencyInjection.inject)(Element), _dec186 = (0, _aureliaTemplating.bindable)(), _dec187 = (0, _aureliaTemplating.bindable)(), _dec188 = (0, _aureliaTemplating.bindable)(), _dec184(_class87 = _dec185(_class87 = (_class88 = function () {
  function MdPushpin(element) {
    _classCallCheck(this, MdPushpin);

    _initDefineProp(this, 'bottom', _descriptor120, this);

    _initDefineProp(this, 'offset', _descriptor121, this);

    _initDefineProp(this, 'top', _descriptor122, this);

    this.element = element;
  }

  MdPushpin.prototype.attached = function attached() {
    $(this.element).pushpin({
      bottom: this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10),
      offset: parseInt(this.offset, 10),
      top: parseInt(this.top, 10)
    });
  };

  MdPushpin.prototype.detached = function detached() {};

  return MdPushpin;
}(), (_descriptor120 = _applyDecoratedDescriptor(_class88.prototype, 'bottom', [_dec186], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor121 = _applyDecoratedDescriptor(_class88.prototype, 'offset', [_dec187], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor122 = _applyDecoratedDescriptor(_class88.prototype, 'top', [_dec188], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class88)) || _class87) || _class87);
var ScrollfirePatch = exports.ScrollfirePatch = (_temp5 = _class90 = function () {
  function ScrollfirePatch() {
    _classCallCheck(this, ScrollfirePatch);
  }

  ScrollfirePatch.prototype.patch = function patch() {
    if (!ScrollfirePatch.patched) {
      ScrollfirePatch.patched = true;

      window.Materialize.scrollFire = function (options) {
        var didScroll = false;
        window.addEventListener('scroll', function () {
          didScroll = true;
        });

        setInterval(function () {
          if (didScroll) {
            didScroll = false;

            var windowScroll = window.pageYOffset + window.innerHeight;
            for (var i = 0; i < options.length; i++) {
              var value = options[i];
              var selector = value.selector;
              var offset = value.offset;
              var callback = value.callback;

              var currentElement = document.querySelector(selector);
              if (currentElement !== null) {
                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                if (windowScroll > elementOffset + offset) {
                  if (value.done !== true) {
                    if (typeof callback === 'string') {
                      var callbackFunc = new Function(callback);
                      callbackFunc();
                    } else if (typeof callback === 'function') {
                      callback();
                    }
                    value.done = true;
                  }
                }
              }
            }
          }
        }, 100);
      };
    }
  };

  return ScrollfirePatch;
}(), _class90.patched = false, _temp5);
var MdScrollfireTarget = exports.MdScrollfireTarget = (_dec189 = (0, _aureliaTemplating.customAttribute)('md-scrollfire-target'), _dec190 = (0, _aureliaDependencyInjection.inject)(Element), _dec191 = (0, _aureliaTemplating.bindable)(), _dec192 = (0, _aureliaTemplating.bindable)(), _dec189(_class91 = _dec190(_class91 = (_class92 = function MdScrollfireTarget(element) {
  _classCallCheck(this, MdScrollfireTarget);

  _initDefineProp(this, 'callback', _descriptor123, this);

  _initDefineProp(this, 'offset', _descriptor124, this);

  this.element = element;
}, (_descriptor123 = _applyDecoratedDescriptor(_class92.prototype, 'callback', [_dec191], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor124 = _applyDecoratedDescriptor(_class92.prototype, 'offset', [_dec192], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class92)) || _class91) || _class91);
var MdScrollfire = exports.MdScrollfire = (_dec193 = (0, _aureliaTemplating.customAttribute)('md-scrollfire'), _dec194 = (0, _aureliaDependencyInjection.inject)(Element), _dec193(_class94 = _dec194(_class94 = function () {
  function MdScrollfire(element) {
    _classCallCheck(this, MdScrollfire);

    this.targetId = 0;

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-scrollfire');
  }

  MdScrollfire.prototype.attached = function attached() {
    var targets = $('[md-scrollfire-target]', this.element);
    if (targets.length > 0) {
      this.log.debug('targets', targets);
      var self = this;
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
        this.log.debug('configuring scrollFire with these options:', options);
        Materialize.scrollFire(options);
      }
    }
  };

  return MdScrollfire;
}()) || _class94) || _class94);
var MdRadio = exports.MdRadio = (_dec195 = (0, _aureliaTemplating.customElement)('md-radio'), _dec196 = (0, _aureliaDependencyInjection.inject)(Element), _dec197 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec198 = (0, _aureliaTemplating.bindable)(), _dec199 = (0, _aureliaTemplating.bindable)(), _dec200 = (0, _aureliaTemplating.bindable)(), _dec201 = (0, _aureliaTemplating.bindable)(), _dec202 = (0, _aureliaTemplating.bindable)(), _dec203 = (0, _aureliaTemplating.bindable)(), _dec195(_class96 = _dec196(_class96 = (_class97 = (_temp6 = _class98 = function () {
  function MdRadio(element) {
    _classCallCheck(this, MdRadio);

    _initDefineProp(this, 'mdChecked', _descriptor125, this);

    _initDefineProp(this, 'mdDisabled', _descriptor126, this);

    _initDefineProp(this, 'mdReadonly', _descriptor127, this);

    _initDefineProp(this, 'mdGap', _descriptor128, this);

    _initDefineProp(this, 'mdModel', _descriptor129, this);

    _initDefineProp(this, 'mdName', _descriptor130, this);

    _initDefineProp(this, 'mdValue', _descriptor131, this);

    this.element = element;
    this.controlId = 'md-radio-' + MdRadio.id++;
  }

  MdRadio.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.radio);
    if (getBooleanFromAttributeValue(this.mdGap)) {
      this.attributeManager.addClasses('with-gap');
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.radio.disabled = true;
    }
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
  };

  MdRadio.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['with-gap', 'disabled']);
  };

  MdRadio.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.radio) {
      this.radio.disabled = !!newValue;
    }
  };

  return MdRadio;
}(), _class98.id = 0, _temp6), (_descriptor125 = _applyDecoratedDescriptor(_class97.prototype, 'mdChecked', [_dec197], {
  enumerable: true,
  initializer: null
}), _descriptor126 = _applyDecoratedDescriptor(_class97.prototype, 'mdDisabled', [_dec198], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor127 = _applyDecoratedDescriptor(_class97.prototype, 'mdReadonly', [_dec199], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor128 = _applyDecoratedDescriptor(_class97.prototype, 'mdGap', [_dec200], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor129 = _applyDecoratedDescriptor(_class97.prototype, 'mdModel', [_dec201], {
  enumerable: true,
  initializer: null
}), _descriptor130 = _applyDecoratedDescriptor(_class97.prototype, 'mdName', [_dec202], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor131 = _applyDecoratedDescriptor(_class97.prototype, 'mdValue', [_dec203], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class97)) || _class96) || _class96);
var MdRange = exports.MdRange = (_dec204 = (0, _aureliaTemplating.customElement)('md-range'), _dec205 = (0, _aureliaDependencyInjection.inject)(Element), _dec206 = (0, _aureliaTemplating.bindable)(), _dec207 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec208 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec209 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec210 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec204(_class99 = _dec205(_class99 = (_class100 = function MdRange(element) {
  _classCallCheck(this, MdRange);

  _initDefineProp(this, 'mdReadonly', _descriptor132, this);

  _initDefineProp(this, 'mdMin', _descriptor133, this);

  _initDefineProp(this, 'mdMax', _descriptor134, this);

  _initDefineProp(this, 'mdStep', _descriptor135, this);

  _initDefineProp(this, 'mdValue', _descriptor136, this);

  this.element = element;
  this.log = (0, _aureliaLogging.getLogger)('md-range');
}, (_descriptor132 = _applyDecoratedDescriptor(_class100.prototype, 'mdReadonly', [_dec206], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor133 = _applyDecoratedDescriptor(_class100.prototype, 'mdMin', [_dec207], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor134 = _applyDecoratedDescriptor(_class100.prototype, 'mdMax', [_dec208], {
  enumerable: true,
  initializer: function initializer() {
    return 100;
  }
}), _descriptor135 = _applyDecoratedDescriptor(_class100.prototype, 'mdStep', [_dec209], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor136 = _applyDecoratedDescriptor(_class100.prototype, 'mdValue', [_dec210], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class100)) || _class99) || _class99);
var MdScrollSpy = exports.MdScrollSpy = (_dec211 = (0, _aureliaTemplating.customAttribute)('md-scrollspy'), _dec212 = (0, _aureliaDependencyInjection.inject)(Element), _dec213 = (0, _aureliaTemplating.bindable)(), _dec211(_class102 = _dec212(_class102 = (_class103 = function () {
  function MdScrollSpy(element) {
    _classCallCheck(this, MdScrollSpy);

    _initDefineProp(this, 'target', _descriptor137, this);

    this.element = element;
  }

  MdScrollSpy.prototype.attached = function attached() {
    $(this.target, this.element).scrollSpy();
  };

  MdScrollSpy.prototype.detached = function detached() {};

  return MdScrollSpy;
}(), (_descriptor137 = _applyDecoratedDescriptor(_class103.prototype, 'target', [_dec213], {
  enumerable: true,
  initializer: null
})), _class103)) || _class102) || _class102);
var MdSelect = exports.MdSelect = (_dec214 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.BindingEngine, _aureliaTaskQueue.TaskQueue), _dec215 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec216 = (0, _aureliaTemplating.bindable)(), _dec217 = (0, _aureliaTemplating.bindable)(), _dec218 = (0, _aureliaTemplating.bindable)(), _dec219 = (0, _aureliaTemplating.bindable)(), _dec220 = (0, _aureliaTemplating.bindable)(), _dec214(_class105 = _dec215(_class105 = (_class106 = function () {
  MdSelect.prototype.readonlyChanged = function readonlyChanged() {
    if (this.readonly) {
      this.makeReadonly($(this.element).siblings('input')[0]);
    } else {
      this.refresh();
    }
  };

  function MdSelect(element, bindingEngine, taskQueue) {
    var _this11 = this;

    _classCallCheck(this, MdSelect);

    _initDefineProp(this, 'disabled', _descriptor138, this);

    _initDefineProp(this, 'readonly', _descriptor139, this);

    _initDefineProp(this, 'enableOptionObserver', _descriptor140, this);

    _initDefineProp(this, 'label', _descriptor141, this);

    _initDefineProp(this, 'showErrortext', _descriptor142, this);

    this._suspendUpdate = false;
    this.subscriptions = [];
    this.inputField = null;
    this.input = null;
    this.dropdownMutationObserver = null;
    this.optionsMutationObserver = null;
    this._taskqueueRunning = false;

    this.mdUnrenderValidateResults = function (results, renderer) {
      for (var _iterator6 = results, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray6) {
          if (_i6 >= _iterator6.length) break;
          _ref6 = _iterator6[_i6++];
        } else {
          _i6 = _iterator6.next();
          if (_i6.done) break;
          _ref6 = _i6.value;
        }

        var result = _ref6;

        if (!result.valid) {
          renderer.removeMessage(_this11.inputField, result);
        }
      }
      renderer.removeValidationClasses(_this11.input);
    };

    this.mdRenderValidateResults = function (results, renderer) {
      for (var _iterator7 = results, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
        var _ref7;

        if (_isArray7) {
          if (_i7 >= _iterator7.length) break;
          _ref7 = _iterator7[_i7++];
        } else {
          _i7 = _iterator7.next();
          if (_i7.done) break;
          _ref7 = _i7.value;
        }

        var result = _ref7;

        if (!result.valid) {
          result.target = _this11.input;
          if (!(_this11.input.hasAttribute('data-show-errortext') && _this11.input.getAttribute('data-show-errortext') === 'false')) {
            renderer.addMessage(_this11.inputField, result);
          }
        }
      }
      renderer.addValidationClasses(_this11.input, !results.find(function (x) {
        return !x.valid;
      }));
    };

    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-select');
    this.bindingEngine = bindingEngine;

    this.handleFocus = this.handleFocus.bind(this);
  }

  MdSelect.prototype.attached = function attached() {
    var _this12 = this;

    if (this.element.classList.contains('browser-default')) {
      return;
    }
    var div = $('<div class="input-field"></div>');
    var va = this.element.attributes.getNamedItem('validate');
    if (va) {
      div.attr(va.name, va.label);
    }

    $(this.element).wrap(div);
    if (this.label) {
      $('<label class="md-select-label">' + this.label + '</label>').insertAfter(this.element);
    }

    this.taskQueue.queueTask(function () {
      _this12.createMaterialSelect(false);
    });
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));

    this.inputField = this.element.closest('.input-field');
    $(this.element).on('change', this.handleChangeFromNativeSelect);
    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
  };

  MdSelect.prototype.detached = function detached() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    var $element = $(this.element);
    $element.off('change', this.handleChangeFromNativeSelect);
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    this.dropdownMutationObserver = null;
    $element.siblings('ul#select-options-' + $element.data('select-id')).remove();
    $element.material_select('destroy');
    $element.siblings('label').remove();
    $element.siblings('.md-input-validation').remove();
    $element.unwrap();
    this.subscriptions.forEach(function (sub) {
      return sub.dispose();
    });
    this.element.mdUnrenderValidateResults = undefined;
    this.element.mdRenderValidateResults = undefined;
  };

  MdSelect.prototype.refresh = function refresh() {
    var _this13 = this;

    if (this.element.classList.contains('browser-default')) {
      return;
    }
    this.taskQueue.queueTask(function () {
      _this13.createMaterialSelect(true);
    });
  };

  MdSelect.prototype.labelChanged = function labelChanged(newValue) {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    this.updateLabel();
  };

  MdSelect.prototype.updateLabel = function updateLabel() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    if (this.label) {
      var $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
      $label.text(this.label);
    }
  };

  MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
    this.toggleControl(newValue);
  };

  MdSelect.prototype.showErrortextChanged = function showErrortextChanged() {
    this.setErrorTextAttribute();
  };

  MdSelect.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    var input = this.element.parentElement.querySelector('input.select-dropdown');
    if (!input) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    input.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  };

  MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    this.log.debug('selectedOptions changed', arguments);
  };

  MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this._suspendUpdate = false;
    }
  };

  MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      this.createMaterialSelect(false);
    }
  };

  MdSelect.prototype.toggleControl = function toggleControl(disable) {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    var $wrapper = $(this.element).parent('.select-wrapper');
    if ($wrapper.length > 0) {
      if (disable) {
        $('.caret', $wrapper).addClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
        $wrapper.attr('disabled', 'disabled');
      } else {
        $('.caret', $wrapper).removeClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', null);
        $wrapper.attr('disabled', null);
      }
    }
  };

  MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    var input = $(this.element).siblings('input');
    var isValid = input.hasClass('valid');
    var isInvalid = input.hasClass('invalid');
    if (destroy) {
      $(this.element).material_select('destroy');
    }
    $(this.element).material_select();
    input = $(this.element).siblings('input');
    if (isValid) {
      input.addClass('valid');
    }
    if (isInvalid) {
      input.addClass('invalid');
    }
    this.input = input[0];
    this.toggleControl(this.disabled);
    this.observeVisibleDropdownContent(true);
    this.observeOptions(true);
    this.setErrorTextAttribute();
    if (this.readonly) {
      this.makeReadonly(input[0]);
    }
  };

  MdSelect.prototype.makeReadonly = function makeReadonly(input) {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    $(input).off('click');
    $(input).off('focus');
    $(input).off('keydown');
    $(input).off('open');
  };

  MdSelect.prototype.observeVisibleDropdownContent = function observeVisibleDropdownContent(attach) {
    var _this14 = this;

    if (this.element.classList.contains('browser-default')) {
      return;
    }
    if (attach) {
      if (!this.dropdownMutationObserver) {
        this.dropdownMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
          var isHidden = false;
          for (var _iterator8 = mutations, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
            var _ref8;

            if (_isArray8) {
              if (_i8 >= _iterator8.length) break;
              _ref8 = _iterator8[_i8++];
            } else {
              _i8 = _iterator8.next();
              if (_i8.done) break;
              _ref8 = _i8.value;
            }

            var mutation = _ref8;

            if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
              isHidden = true;
            }
          }
          if (isHidden) {
            _this14.dropdownMutationObserver.takeRecords();
            _this14.handleBlur();
          } else {
            _this14.handleFocus();
          }
        });
      }
      this.dropdownMutationObserver.observe(this.element.parentElement.querySelector('.dropdown-content'), {
        attributes: true,
        attributeFilter: ['style']
      });
    } else {
      if (this.dropdownMutationObserver) {
        this.dropdownMutationObserver.disconnect();
        this.dropdownMutationObserver.takeRecords();
      }
    }
  };

  MdSelect.prototype.observeOptions = function observeOptions(attach) {
    var _this15 = this;

    if (this.element.classList.contains('browser-default')) {
      return;
    }
    if (getBooleanFromAttributeValue(this.enableOptionObserver)) {
      if (attach) {
        if (!this.optionsMutationObserver) {
          this.optionsMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
            _this15.refresh();
          });
        }
        this.optionsMutationObserver.observe(this.element, {
          characterData: true,
          subtree: true
        });
      } else {
        if (this.optionsMutationObserver) {
          this.optionsMutationObserver.disconnect();
          this.optionsMutationObserver.takeRecords();
        }
      }
    }
  };

  MdSelect.prototype.open = function open() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    $(this.element).siblings('input.select-dropdown').trigger('focus');
  };

  MdSelect.prototype.handleBlur = function handleBlur() {
    var _this16 = this;

    if (this.element.classList.contains('browser-default')) {
      return;
    }
    if (this._taskqueueRunning) return;
    this._taskqueueRunning = true;
    this.taskQueue.queueTask(function () {
      _this16.log.debug('fire blur event');
      fireEvent(_this16.element, 'blur');
      _this16._taskqueueRunning = false;

      if (_this16.label) {
        var $label = $(_this16.element).parent('.select-wrapper').siblings('.md-select-label');
        $label.removeClass('md-focused');
      }
    });
  };

  MdSelect.prototype.handleFocus = function handleFocus() {
    if (this.element.classList.contains('browser-default')) {
      return;
    }
    if (this.label) {
      var $label = $(this.element).parent('.select-wrapper').siblings('.md-select-label');
      $label.addClass('md-focused');
    }
  };

  return MdSelect;
}(), (_descriptor138 = _applyDecoratedDescriptor(_class106.prototype, 'disabled', [_dec216], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor139 = _applyDecoratedDescriptor(_class106.prototype, 'readonly', [_dec217], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor140 = _applyDecoratedDescriptor(_class106.prototype, 'enableOptionObserver', [_dec218], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor141 = _applyDecoratedDescriptor(_class106.prototype, 'label', [_dec219], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor142 = _applyDecoratedDescriptor(_class106.prototype, 'showErrortext', [_dec220], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class106)) || _class105) || _class105);
var MdSidenavCollapse = exports.MdSidenavCollapse = (_dec221 = (0, _aureliaTemplating.customAttribute)('md-sidenav-collapse'), _dec222 = (0, _aureliaDependencyInjection.inject)(Element), _dec223 = (0, _aureliaTemplating.bindable)(), _dec221(_class108 = _dec222(_class108 = (_class109 = function () {
  function MdSidenavCollapse(element) {
    _classCallCheck(this, MdSidenavCollapse);

    _initDefineProp(this, 'ref', _descriptor143, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav-collapse');
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    var _this17 = this;

    this.ref.whenAttached.then(function () {
      var closeOnClick = _this17.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(_this17.ref.mdCloseOnClick);

      _this17.onHide = _this17.onHide.bind(_this17);
      _this17.onShow = _this17.onShow.bind(_this17);

      _this17.element.setAttribute('data-activates', _this17.ref.controlId);
      var sideNavConfig = {
        edge: _this17.ref.mdEdge || 'left',
        closeOnClick: closeOnClick,
        menuWidth: parseInt(_this17.ref.mdWidth, 10),
        onClose: _this17.onHide,
        onOpen: _this17.onShow
      };
      $(_this17.element).sideNav(sideNavConfig);
    });
  };

  MdSidenavCollapse.prototype.detached = function detached() {};

  MdSidenavCollapse.prototype.show = function show() {
    $(this.element).sideNav('show');
  };

  MdSidenavCollapse.prototype.hide = function hide() {
    $(this.element).sideNav('hide');
  };

  MdSidenavCollapse.prototype.onShow = function onShow(el) {
    fireMaterializeEvent(this.ref.element, 'sidenav-show');
  };

  MdSidenavCollapse.prototype.onHide = function onHide(el) {
    fireMaterializeEvent(this.ref.element, 'sidenav-hide');
  };

  return MdSidenavCollapse;
}(), (_descriptor143 = _applyDecoratedDescriptor(_class109.prototype, 'ref', [_dec223], {
  enumerable: true,
  initializer: null
})), _class109)) || _class108) || _class108);
var MdSidenav = exports.MdSidenav = (_dec224 = (0, _aureliaTemplating.customElement)('md-sidenav'), _dec225 = (0, _aureliaDependencyInjection.inject)(Element), _dec226 = (0, _aureliaTemplating.bindable)(), _dec227 = (0, _aureliaTemplating.bindable)(), _dec228 = (0, _aureliaTemplating.bindable)(), _dec229 = (0, _aureliaTemplating.bindable)(), _dec224(_class111 = _dec225(_class111 = (_class112 = (_temp7 = _class113 = function () {
  function MdSidenav(element) {
    var _this18 = this;

    _classCallCheck(this, MdSidenav);

    _initDefineProp(this, 'mdCloseOnClick', _descriptor144, this);

    _initDefineProp(this, 'mdEdge', _descriptor145, this);

    _initDefineProp(this, 'mdFixed', _descriptor146, this);

    _initDefineProp(this, 'mdWidth', _descriptor147, this);

    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav');
    this.whenAttached = new Promise(function (resolve, reject) {
      _this18.attachedResolver = resolve;
    });
  }

  MdSidenav.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.attributeManager.addClasses('fixed');
      if (this.mdEdge === 'right') {
        this.attributeManager.addClasses('right-aligned');
      }
    }

    this.attachedResolver();
  };

  MdSidenav.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['fixed', 'right-aligned']);
  };

  MdSidenav.prototype.mdFixedChanged = function mdFixedChanged(newValue) {
    if (this.attributeManager) {
      if (getBooleanFromAttributeValue(newValue)) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  };

  return MdSidenav;
}(), _class113.id = 0, _temp7), (_descriptor144 = _applyDecoratedDescriptor(_class112.prototype, 'mdCloseOnClick', [_dec226], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor145 = _applyDecoratedDescriptor(_class112.prototype, 'mdEdge', [_dec227], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor146 = _applyDecoratedDescriptor(_class112.prototype, 'mdFixed', [_dec228], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor147 = _applyDecoratedDescriptor(_class112.prototype, 'mdWidth', [_dec229], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
})), _class112)) || _class111) || _class111);
var MdSlider = exports.MdSlider = (_dec230 = (0, _aureliaTemplating.customElement)('md-slider'), _dec231 = (0, _aureliaDependencyInjection.inject)(Element), _dec232 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec233 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec234 = (0, _aureliaTemplating.bindable)(), _dec235 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec236 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec230(_class114 = _dec231(_class114 = (_class115 = function () {
  function MdSlider(element) {
    _classCallCheck(this, MdSlider);

    _initDefineProp(this, 'mdFillContainer', _descriptor148, this);

    _initDefineProp(this, 'mdHeight', _descriptor149, this);

    _initDefineProp(this, 'mdIndicators', _descriptor150, this);

    _initDefineProp(this, 'mdInterval', _descriptor151, this);

    _initDefineProp(this, 'mdTransition', _descriptor152, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-slider');
  }

  MdSlider.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    this.refresh();
  };

  MdSlider.prototype.pause = function pause() {
    $(this.element).slider('pause');
  };

  MdSlider.prototype.start = function start() {
    $(this.element).slider('start');
  };

  MdSlider.prototype.next = function next() {
    $(this.element).slider('next');
  };

  MdSlider.prototype.prev = function prev() {
    $(this.element).slider('prev');
  };

  MdSlider.prototype.refresh = function refresh() {
    var options = {
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    };
    this.log.debug('refreshing slider, params:', options);
    $(this.element).slider(options);
  };

  MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
    this.refresh();
  };

  return MdSlider;
}(), (_descriptor148 = _applyDecoratedDescriptor(_class115.prototype, 'mdFillContainer', [_dec232], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor149 = _applyDecoratedDescriptor(_class115.prototype, 'mdHeight', [_dec233], {
  enumerable: true,
  initializer: function initializer() {
    return 400;
  }
}), _descriptor150 = _applyDecoratedDescriptor(_class115.prototype, 'mdIndicators', [_dec234], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor151 = _applyDecoratedDescriptor(_class115.prototype, 'mdInterval', [_dec235], {
  enumerable: true,
  initializer: function initializer() {
    return 6000;
  }
}), _descriptor152 = _applyDecoratedDescriptor(_class115.prototype, 'mdTransition', [_dec236], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class115)) || _class114) || _class114);
var MdSwitch = exports.MdSwitch = (_dec237 = (0, _aureliaTemplating.customElement)('md-switch'), _dec238 = (0, _aureliaDependencyInjection.inject)(Element), _dec239 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec240 = (0, _aureliaTemplating.bindable)(), _dec241 = (0, _aureliaTemplating.bindable)(), _dec242 = (0, _aureliaTemplating.bindable)(), _dec243 = (0, _aureliaTemplating.bindable)(), _dec237(_class117 = _dec238(_class117 = (_class118 = function () {
  function MdSwitch(element) {
    _classCallCheck(this, MdSwitch);

    _initDefineProp(this, 'mdChecked', _descriptor153, this);

    _initDefineProp(this, 'mdDisabled', _descriptor154, this);

    _initDefineProp(this, 'mdReadonly', _descriptor155, this);

    _initDefineProp(this, 'mdLabelOff', _descriptor156, this);

    _initDefineProp(this, 'mdLabelOn', _descriptor157, this);

    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  MdSwitch.prototype.attached = function attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.addEventListener('change', this.handleChange);
    this.mdReadonly = getBooleanFromAttributeValue(this.mdReadonly);
  };

  MdSwitch.prototype.detached = function detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.handleChange = function handleChange() {
    this.mdChecked = this.checkbox.checked;
    fireEvent(this.element, 'blur');
  };

  MdSwitch.prototype.blur = function blur() {
    fireEvent(this.element, 'blur');
  };

  MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  };

  MdSwitch.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  return MdSwitch;
}(), (_descriptor153 = _applyDecoratedDescriptor(_class118.prototype, 'mdChecked', [_dec239], {
  enumerable: true,
  initializer: null
}), _descriptor154 = _applyDecoratedDescriptor(_class118.prototype, 'mdDisabled', [_dec240], {
  enumerable: true,
  initializer: null
}), _descriptor155 = _applyDecoratedDescriptor(_class118.prototype, 'mdReadonly', [_dec241], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor156 = _applyDecoratedDescriptor(_class118.prototype, 'mdLabelOff', [_dec242], {
  enumerable: true,
  initializer: function initializer() {
    return 'Off';
  }
}), _descriptor157 = _applyDecoratedDescriptor(_class118.prototype, 'mdLabelOn', [_dec243], {
  enumerable: true,
  initializer: function initializer() {
    return 'On';
  }
})), _class118)) || _class117) || _class117);
var MdTabs = exports.MdTabs = (_dec244 = (0, _aureliaTemplating.customAttribute)('md-tabs'), _dec245 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec246 = (0, _aureliaTemplating.bindable)(), _dec247 = (0, _aureliaTemplating.bindable)(), _dec248 = (0, _aureliaTemplating.bindable)(), _dec249 = (0, _aureliaTemplating.bindable)(), _dec250 = (0, _aureliaTemplating.bindable)(), _dec244(_class120 = _dec245(_class120 = (_class121 = function () {
  function MdTabs(element, taskQueue) {
    _classCallCheck(this, MdTabs);

    _initDefineProp(this, 'fixed', _descriptor158, this);

    _initDefineProp(this, 'onShow', _descriptor159, this);

    _initDefineProp(this, 'responsiveThreshold', _descriptor160, this);

    _initDefineProp(this, 'swipeable', _descriptor161, this);

    _initDefineProp(this, 'transparent', _descriptor162, this);

    this.element = element;
    this.taskQueue = taskQueue;
    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this19 = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this19.tabAttributeManagers.push(setter);
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
      a.addEventListener('click', _this19.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this20 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this20.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.refresh = function refresh() {
    var _this21 = this;

    this.taskQueue.queueTask(function () {
      var hrefs = [];
      $('li a', _this21.element).each(function (i, tab) {
        $(tab).parent().addClass('tab');
        hrefs.push($(tab).attr('href'));
        tab.removeEventListener('click', _this21.fireTabSelectedEvent);
        tab.addEventListener('click', _this21.fireTabSelectedEvent);
      });
      $(hrefs).each(function (i, tab) {
        if (_this21.selectedTab.index !== i) {
          $(tab).hide();
        }
      });
      _this21.taskQueue.queueTask(function () {
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
}(), (_descriptor158 = _applyDecoratedDescriptor(_class121.prototype, 'fixed', [_dec246], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor159 = _applyDecoratedDescriptor(_class121.prototype, 'onShow', [_dec247], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor160 = _applyDecoratedDescriptor(_class121.prototype, 'responsiveThreshold', [_dec248], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor161 = _applyDecoratedDescriptor(_class121.prototype, 'swipeable', [_dec249], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor162 = _applyDecoratedDescriptor(_class121.prototype, 'transparent', [_dec250], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class121)) || _class120) || _class120);
var MdTapTarget = exports.MdTapTarget = (_dec251 = (0, _aureliaTemplating.customElement)('md-tap-target'), _dec252 = (0, _aureliaDependencyInjection.inject)(Element), _dec253 = (0, _aureliaTemplating.bindable)(), _dec251(_class123 = _dec252(_class123 = (_class124 = (_temp8 = _class125 = function () {
  function MdTapTarget(element) {
    _classCallCheck(this, MdTapTarget);

    _initDefineProp(this, 'mdRef', _descriptor163, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-tap-target');
  }

  MdTapTarget.prototype.bind = function bind() {
    if (!this.mdRef) {
      throw new Error('md-tap-target needs a referenced element');
    } else {
      var id = this.mdRef.getAttribute('id');
      if (!id) {
        id = 'md-tap-target-' + MdTapTarget.controlId++;
        this.mdRef.setAttribute('id', id);
      }
      this.element.setAttribute('data-activates', id);
    }
  };

  MdTapTarget.prototype.open = function open() {
    $(this.element).tapTarget('open');
  };

  MdTapTarget.prototype.close = function close() {
    $(this.element).tapTarget('close');
  };

  return MdTapTarget;
}(), _class125.controlId = 0, _temp8), (_descriptor163 = _applyDecoratedDescriptor(_class124.prototype, 'mdRef', [_dec253], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class124)) || _class123) || _class123);
var MdTimePicker = exports.MdTimePicker = (_dec254 = (0, _aureliaDependencyInjection.inject)(Element), _dec255 = (0, _aureliaTemplating.customAttribute)('md-timepicker'), _dec256 = (0, _aureliaTemplating.bindable)(), _dec257 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec254(_class126 = _dec255(_class126 = (_class127 = function () {
  function MdTimePicker(element) {
    _classCallCheck(this, MdTimePicker);

    _initDefineProp(this, 'twelveHour', _descriptor164, this);

    _initDefineProp(this, 'value', _descriptor165, this);

    this.element = element;
    this.updateFromElement = this.updateFromElement.bind(this);
  }

  MdTimePicker.prototype.bind = function bind() {
    this.twelveHour = getBooleanFromAttributeValue(this.twelveHour);
  };

  MdTimePicker.prototype.attached = function attached() {
    var options = {
      twelvehour: this.twelveHour
    };
    $(this.element).pickatime(options);
    this.element.value = this.value;
    $(this.element).on('change', this.updateFromElement);
  };

  MdTimePicker.prototype.detached = function detached() {
    $(this.element).off('change', this.updateFromElement);
    $(this.element).pickatime('remove');
  };

  MdTimePicker.prototype.updateFromElement = function updateFromElement() {
    this.value = this.element.value;
  };

  MdTimePicker.prototype.valueChanged = function valueChanged(newValue) {
    this.element.value = newValue;
  };

  return MdTimePicker;
}(), (_descriptor164 = _applyDecoratedDescriptor(_class127.prototype, 'twelveHour', [_dec256], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor165 = _applyDecoratedDescriptor(_class127.prototype, 'value', [_dec257], {
  enumerable: true,
  initializer: null
})), _class127)) || _class126) || _class126);

var MdToastService = exports.MdToastService = function () {
  function MdToastService() {
    _classCallCheck(this, MdToastService);
  }

  MdToastService.prototype.removeAll = function removeAll() {
    Materialize.Toast.removeAll();
  };

  MdToastService.prototype.show = function show(message, displayLength, className) {
    return new Promise(function (resolve, reject) {
      var toastInstance = Materialize.toast(message, displayLength, className, function () {
        resolve(toastInstance);
      });
    });
  };

  return MdToastService;
}();

var MdFadeinImage = exports.MdFadeinImage = (_dec258 = (0, _aureliaTemplating.customAttribute)('md-fadein-image'), _dec259 = (0, _aureliaDependencyInjection.inject)(Element), _dec260 = (0, _aureliaTemplating.bindable)(), _dec258(_class129 = _dec259(_class129 = (_class130 = function () {
  function MdFadeinImage(element) {
    _classCallCheck(this, MdFadeinImage);

    _initDefineProp(this, 'ref', _descriptor166, this);

    this.element = element;
    this.fadeInImage = this.fadeInImage.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-fadein-image');
  }

  MdFadeinImage.prototype.attached = function attached() {
    this.element.addEventListener('click', this.fadeInImage);
    this.ensureOpacity();
  };

  MdFadeinImage.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.fadeInImage);
  };

  MdFadeinImage.prototype.fadeInImage = function fadeInImage() {
    Materialize.fadeInImage($(this.ref));
  };

  MdFadeinImage.prototype.ensureOpacity = function ensureOpacity() {
    var opacity = window.getComputedStyle(this.ref).opacity;
    if (opacity !== 0) {
      this.ref.style.opacity = 0;
    }
  };

  return MdFadeinImage;
}(), (_descriptor166 = _applyDecoratedDescriptor(_class130.prototype, 'ref', [_dec260], {
  enumerable: true,
  initializer: null
})), _class130)) || _class129) || _class129);
var MdStaggeredList = exports.MdStaggeredList = (_dec261 = (0, _aureliaTemplating.customAttribute)('md-staggered-list'), _dec262 = (0, _aureliaDependencyInjection.inject)(Element), _dec263 = (0, _aureliaTemplating.bindable)(), _dec261(_class132 = _dec262(_class132 = (_class133 = function () {
  function MdStaggeredList(element) {
    _classCallCheck(this, MdStaggeredList);

    _initDefineProp(this, 'ref', _descriptor167, this);

    this.element = element;
    this.staggerList = this.staggerList.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-staggered-list');
  }

  MdStaggeredList.prototype.attached = function attached() {
    this.element.addEventListener('click', this.staggerList);
    this.ensureOpacity();
  };

  MdStaggeredList.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.staggerList);
  };

  MdStaggeredList.prototype.staggerList = function staggerList() {
    Materialize.showStaggeredList($(this.ref));
  };

  MdStaggeredList.prototype.ensureOpacity = function ensureOpacity() {
    var items = this.ref.querySelectorAll('li');
    [].forEach.call(items, function (item) {
      var opacity = window.getComputedStyle(item).opacity;
      if (opacity !== 0) {
        item.style.opacity = 0;
      }
    });
  };

  return MdStaggeredList;
}(), (_descriptor167 = _applyDecoratedDescriptor(_class133.prototype, 'ref', [_dec263], {
  enumerable: true,
  initializer: null
})), _class133)) || _class132) || _class132);
var MdTooltip = exports.MdTooltip = (_dec264 = (0, _aureliaTemplating.customAttribute)('md-tooltip'), _dec265 = (0, _aureliaDependencyInjection.inject)(Element), _dec266 = (0, _aureliaTemplating.bindable)(), _dec267 = (0, _aureliaTemplating.bindable)(), _dec268 = (0, _aureliaTemplating.bindable)(), _dec269 = (0, _aureliaTemplating.bindable)(), _dec264(_class135 = _dec265(_class135 = (_class136 = function () {
  function MdTooltip(element) {
    _classCallCheck(this, MdTooltip);

    _initDefineProp(this, 'position', _descriptor168, this);

    _initDefineProp(this, 'delay', _descriptor169, this);

    _initDefineProp(this, 'html', _descriptor170, this);

    _initDefineProp(this, 'text', _descriptor171, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdTooltip.prototype.bind = function bind() {
    this.html = getBooleanFromAttributeValue(this.html);
  };

  MdTooltip.prototype.attached = function attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    this.initTooltip();
  };

  MdTooltip.prototype.detached = function detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  };

  MdTooltip.prototype.textChanged = function textChanged() {
    this.attributeManager.addAttributes({ 'data-tooltip': this.text });
    this.initTooltip();
  };

  MdTooltip.prototype.initTooltip = function initTooltip() {
    $(this.element).tooltip('remove');
    $(this.element).tooltip({
      delay: parseInt(this.delay, 10),
      html: this.html
    });
  };

  return MdTooltip;
}(), (_descriptor168 = _applyDecoratedDescriptor(_class136.prototype, 'position', [_dec266], {
  enumerable: true,
  initializer: function initializer() {
    return 'bottom';
  }
}), _descriptor169 = _applyDecoratedDescriptor(_class136.prototype, 'delay', [_dec267], {
  enumerable: true,
  initializer: function initializer() {
    return 50;
  }
}), _descriptor170 = _applyDecoratedDescriptor(_class136.prototype, 'html', [_dec268], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor171 = _applyDecoratedDescriptor(_class136.prototype, 'text', [_dec269], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class136)) || _class135) || _class135);

var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
  function MaterializeFormValidationRenderer() {
    _classCallCheck(this, MaterializeFormValidationRenderer);

    this.className = 'md-input-validation';
    this.classNameFirst = 'md-input-validation-first';
  }

  MaterializeFormValidationRenderer.prototype.pushElementResult = function pushElementResult(elementResults, element, result) {
    if (elementResults.has(element)) {
      elementResults.get(element).push(result);
    } else {
      elementResults.set(element, [result]);
    }
  };

  MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
    var elementResultsToUnrender = new Map();

    for (var _iterator9 = instruction.unrender, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
      var _ref10;

      if (_isArray9) {
        if (_i9 >= _iterator9.length) break;
        _ref10 = _iterator9[_i9++];
      } else {
        _i9 = _iterator9.next();
        if (_i9.done) break;
        _ref10 = _i9.value;
      }

      var _ref15 = _ref10;
      var result = _ref15.result,
          elements = _ref15.elements;

      for (var _iterator13 = elements, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
        var _ref16;

        if (_isArray13) {
          if (_i13 >= _iterator13.length) break;
          _ref16 = _iterator13[_i13++];
        } else {
          _i13 = _iterator13.next();
          if (_i13.done) break;
          _ref16 = _i13.value;
        }

        var element = _ref16;

        this.pushElementResult(elementResultsToUnrender, element, result);
      }
    }
    for (var _iterator10 = elementResultsToUnrender, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
      var _ref11;

      if (_isArray10) {
        if (_i10 >= _iterator10.length) break;
        _ref11 = _iterator10[_i10++];
      } else {
        _i10 = _iterator10.next();
        if (_i10.done) break;
        _ref11 = _i10.value;
      }

      var _ref17 = _ref11,
          _element = _ref17[0],
          results = _ref17[1];

      if (_element.mdUnrenderValidateResults) {
        _element.mdUnrenderValidateResults(results, this);
      } else {
        this.defaultUnrenderValidateResults(_element, results);
      }
    }

    var elementResultsToRender = new Map();
    for (var _iterator11 = instruction.render, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
      var _ref13;

      if (_isArray11) {
        if (_i11 >= _iterator11.length) break;
        _ref13 = _iterator11[_i11++];
      } else {
        _i11 = _iterator11.next();
        if (_i11.done) break;
        _ref13 = _i11.value;
      }

      var _ref18 = _ref13;
      var result = _ref18.result,
          elements = _ref18.elements;

      for (var _iterator14 = elements, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
        var _ref19;

        if (_isArray14) {
          if (_i14 >= _iterator14.length) break;
          _ref19 = _iterator14[_i14++];
        } else {
          _i14 = _iterator14.next();
          if (_i14.done) break;
          _ref19 = _i14.value;
        }

        var _element2 = _ref19;

        this.pushElementResult(elementResultsToRender, _element2, result);
      }
    }
    for (var _iterator12 = elementResultsToRender, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
      var _ref14;

      if (_isArray12) {
        if (_i12 >= _iterator12.length) break;
        _ref14 = _iterator12[_i12++];
      } else {
        _i12 = _iterator12.next();
        if (_i12.done) break;
        _ref14 = _i12.value;
      }

      var _ref20 = _ref14,
          _element3 = _ref20[0],
          results = _ref20[1];

      if (_element3.mdUnrenderValidateResults) {
        _element3.mdRenderValidateResults(results, this);
      } else {
        this.defaultRenderValidateResults(_element3, results);
      }
    }
  };

  MaterializeFormValidationRenderer.prototype.defaultUnrenderValidateResults = function defaultUnrenderValidateResults(element, results) {
    if (element.tagName !== 'INPUT') {
      return;
    }
    this.removeValidationClasses(element);
  };

  MaterializeFormValidationRenderer.prototype.defaultRenderValidateResults = function defaultRenderValidateResults(element, results) {
    if (element.tagName !== 'INPUT') {
      return;
    }
    this.addValidationClasses(element, !results.find(function (x) {
      return !x.valid;
    }));
  };

  MaterializeFormValidationRenderer.prototype.addMessage = function addMessage(element, result) {
    var message = document.createElement('div');
    message.id = 'md-input-validation-' + result.id;
    message.textContent = result.message;
    message.className = this.className;
    if (element.querySelectorAll('.' + this.className).length === 0) {
      message.className += ' ' + this.classNameFirst;
    }
    message.style.opacity = 0;
    element.appendChild(message, element.nextSibling);
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  };

  MaterializeFormValidationRenderer.prototype.removeMessage = function removeMessage(element, result) {
    var message = element.querySelector('#md-input-validation-' + result.id);
    if (message) {
      element.removeChild(message);
    }
  };

  MaterializeFormValidationRenderer.prototype.removeValidationClasses = function removeValidationClasses(input) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  };

  MaterializeFormValidationRenderer.prototype.addValidationClasses = function addValidationClasses(input, isValid) {
    if (isValid) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  };

  return MaterializeFormValidationRenderer;
}();

var MdWaves = exports.MdWaves = (_dec270 = (0, _aureliaTemplating.customAttribute)('md-waves'), _dec271 = (0, _aureliaDependencyInjection.inject)(Element, ConfigBuilder), _dec272 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec273 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec274 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec270(_class139 = _dec271(_class139 = (_class140 = function () {
  function MdWaves(element, configBuilder) {
    _classCallCheck(this, MdWaves);

    _initDefineProp(this, 'block', _descriptor172, this);

    _initDefineProp(this, 'circle', _descriptor173, this);

    _initDefineProp(this, 'color', _descriptor174, this);

    this.element = element;
    this.configBuilder = configBuilder;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdWaves.prototype.attached = function attached() {
    var classes = ['waves-effect'];
    if (getBooleanFromAttributeValue(this.block)) {
      classes.push('waves-block');
    }
    if (getBooleanFromAttributeValue(this.circle)) {
      classes.push('waves-circle');
    }
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.addClasses(classes);
    if (!this.configBuilder.noWavesAttach) {
      Waves.attach(this.element);
    }
  };

  MdWaves.prototype.detached = function detached() {
    var classes = ['waves-effect', 'waves-block'];
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.removeClasses(classes);
  };

  return MdWaves;
}(), (_descriptor172 = _applyDecoratedDescriptor(_class140.prototype, 'block', [_dec272], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor173 = _applyDecoratedDescriptor(_class140.prototype, 'circle', [_dec273], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor174 = _applyDecoratedDescriptor(_class140.prototype, 'color', [_dec274], {
  enumerable: true,
  initializer: null
})), _class140)) || _class139) || _class139);