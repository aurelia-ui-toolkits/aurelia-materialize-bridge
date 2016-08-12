'use strict';

System.register(['./config-builder', './scrollfire/scrollfire-patch', './badge/badge', './box/box', './breadcrumbs/breadcrumbs', './breadcrumbs/instructionFilter', './button/button', './card/card', './carousel/carousel-item', './carousel/carousel', './char-counter/char-counter', './checkbox/checkbox', './chip/chip', './chip/chips', './collapsible/collapsible', './collection/collection-header', './collection/collection-item', './collection/collection', './collection/md-collection-selector', './colors/colorValueConverters', './common/attributeManager', './common/attributes', './common/constants', './common/events', './datepicker/datepicker.default-parser', './datepicker/datepicker', './dropdown/dropdown-element', './dropdown/dropdown', './fab/fab', './file/file', './footer/footer', './input/input-prefix', './input/input-update-service', './input/input', './modal/modal-trigger', './navbar/navbar', './pagination/pagination', './parallax/parallax', './progress/progress', './pushpin/pushpin', './radio/radio', './range/range', './scrollfire/scrollfire-target', './scrollfire/scrollfire', './scrollspy/scrollspy', './select/select', './sidenav/sidenav-collapse', './sidenav/sidenav', './slider/slider', './switch/switch', './tabs/tabs', './toast/toastService', './tooltip/tooltip', './transitions/fadein-image', './transitions/staggered-list', './waves/waves'], function (_export, _context) {
  var ConfigBuilder, ScrollfirePatch;
  return {
    setters: [function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }, function (_scrollfireScrollfirePatch) {
      ScrollfirePatch = _scrollfireScrollfirePatch.ScrollfirePatch;
      var _exportObj = {};

      for (var _key in _scrollfireScrollfirePatch) {
        if (_key !== "default") _exportObj[_key] = _scrollfireScrollfirePatch[_key];
      }

      _export(_exportObj);
    }, function (_badgeBadge) {
      var _exportObj2 = {};

      for (var _key2 in _badgeBadge) {
        if (_key2 !== "default") _exportObj2[_key2] = _badgeBadge[_key2];
      }

      _export(_exportObj2);
    }, function (_boxBox) {
      var _exportObj3 = {};

      for (var _key3 in _boxBox) {
        if (_key3 !== "default") _exportObj3[_key3] = _boxBox[_key3];
      }

      _export(_exportObj3);
    }, function (_breadcrumbsBreadcrumbs) {
      var _exportObj4 = {};

      for (var _key4 in _breadcrumbsBreadcrumbs) {
        if (_key4 !== "default") _exportObj4[_key4] = _breadcrumbsBreadcrumbs[_key4];
      }

      _export(_exportObj4);
    }, function (_breadcrumbsInstructionFilter) {
      var _exportObj5 = {};

      for (var _key5 in _breadcrumbsInstructionFilter) {
        if (_key5 !== "default") _exportObj5[_key5] = _breadcrumbsInstructionFilter[_key5];
      }

      _export(_exportObj5);
    }, function (_buttonButton) {
      var _exportObj6 = {};

      for (var _key6 in _buttonButton) {
        if (_key6 !== "default") _exportObj6[_key6] = _buttonButton[_key6];
      }

      _export(_exportObj6);
    }, function (_cardCard) {
      var _exportObj7 = {};

      for (var _key7 in _cardCard) {
        if (_key7 !== "default") _exportObj7[_key7] = _cardCard[_key7];
      }

      _export(_exportObj7);
    }, function (_carouselCarouselItem) {
      var _exportObj8 = {};

      for (var _key8 in _carouselCarouselItem) {
        if (_key8 !== "default") _exportObj8[_key8] = _carouselCarouselItem[_key8];
      }

      _export(_exportObj8);
    }, function (_carouselCarousel) {
      var _exportObj9 = {};

      for (var _key9 in _carouselCarousel) {
        if (_key9 !== "default") _exportObj9[_key9] = _carouselCarousel[_key9];
      }

      _export(_exportObj9);
    }, function (_charCounterCharCounter) {
      var _exportObj10 = {};

      for (var _key10 in _charCounterCharCounter) {
        if (_key10 !== "default") _exportObj10[_key10] = _charCounterCharCounter[_key10];
      }

      _export(_exportObj10);
    }, function (_checkboxCheckbox) {
      var _exportObj11 = {};

      for (var _key11 in _checkboxCheckbox) {
        if (_key11 !== "default") _exportObj11[_key11] = _checkboxCheckbox[_key11];
      }

      _export(_exportObj11);
    }, function (_chipChip) {
      var _exportObj12 = {};

      for (var _key12 in _chipChip) {
        if (_key12 !== "default") _exportObj12[_key12] = _chipChip[_key12];
      }

      _export(_exportObj12);
    }, function (_chipChips) {
      var _exportObj13 = {};

      for (var _key13 in _chipChips) {
        if (_key13 !== "default") _exportObj13[_key13] = _chipChips[_key13];
      }

      _export(_exportObj13);
    }, function (_collapsibleCollapsible) {
      var _exportObj14 = {};

      for (var _key14 in _collapsibleCollapsible) {
        if (_key14 !== "default") _exportObj14[_key14] = _collapsibleCollapsible[_key14];
      }

      _export(_exportObj14);
    }, function (_collectionCollectionHeader) {
      var _exportObj15 = {};

      for (var _key15 in _collectionCollectionHeader) {
        if (_key15 !== "default") _exportObj15[_key15] = _collectionCollectionHeader[_key15];
      }

      _export(_exportObj15);
    }, function (_collectionCollectionItem) {
      var _exportObj16 = {};

      for (var _key16 in _collectionCollectionItem) {
        if (_key16 !== "default") _exportObj16[_key16] = _collectionCollectionItem[_key16];
      }

      _export(_exportObj16);
    }, function (_collectionCollection) {
      var _exportObj17 = {};

      for (var _key17 in _collectionCollection) {
        if (_key17 !== "default") _exportObj17[_key17] = _collectionCollection[_key17];
      }

      _export(_exportObj17);
    }, function (_collectionMdCollectionSelector) {
      var _exportObj18 = {};

      for (var _key18 in _collectionMdCollectionSelector) {
        if (_key18 !== "default") _exportObj18[_key18] = _collectionMdCollectionSelector[_key18];
      }

      _export(_exportObj18);
    }, function (_colorsColorValueConverters) {
      var _exportObj19 = {};

      for (var _key19 in _colorsColorValueConverters) {
        if (_key19 !== "default") _exportObj19[_key19] = _colorsColorValueConverters[_key19];
      }

      _export(_exportObj19);
    }, function (_commonAttributeManager) {
      var _exportObj20 = {};

      for (var _key20 in _commonAttributeManager) {
        if (_key20 !== "default") _exportObj20[_key20] = _commonAttributeManager[_key20];
      }

      _export(_exportObj20);
    }, function (_commonAttributes) {
      var _exportObj21 = {};

      for (var _key21 in _commonAttributes) {
        if (_key21 !== "default") _exportObj21[_key21] = _commonAttributes[_key21];
      }

      _export(_exportObj21);
    }, function (_commonConstants) {
      var _exportObj22 = {};

      for (var _key22 in _commonConstants) {
        if (_key22 !== "default") _exportObj22[_key22] = _commonConstants[_key22];
      }

      _export(_exportObj22);
    }, function (_commonEvents) {
      var _exportObj23 = {};

      for (var _key23 in _commonEvents) {
        if (_key23 !== "default") _exportObj23[_key23] = _commonEvents[_key23];
      }

      _export(_exportObj23);
    }, function (_datepickerDatepickerDefaultParser) {
      var _exportObj24 = {};

      for (var _key24 in _datepickerDatepickerDefaultParser) {
        if (_key24 !== "default") _exportObj24[_key24] = _datepickerDatepickerDefaultParser[_key24];
      }

      _export(_exportObj24);
    }, function (_datepickerDatepicker) {
      var _exportObj25 = {};

      for (var _key25 in _datepickerDatepicker) {
        if (_key25 !== "default") _exportObj25[_key25] = _datepickerDatepicker[_key25];
      }

      _export(_exportObj25);
    }, function (_dropdownDropdownElement) {
      var _exportObj26 = {};

      for (var _key26 in _dropdownDropdownElement) {
        if (_key26 !== "default") _exportObj26[_key26] = _dropdownDropdownElement[_key26];
      }

      _export(_exportObj26);
    }, function (_dropdownDropdown) {
      var _exportObj27 = {};

      for (var _key27 in _dropdownDropdown) {
        if (_key27 !== "default") _exportObj27[_key27] = _dropdownDropdown[_key27];
      }

      _export(_exportObj27);
    }, function (_fabFab) {
      var _exportObj28 = {};

      for (var _key28 in _fabFab) {
        if (_key28 !== "default") _exportObj28[_key28] = _fabFab[_key28];
      }

      _export(_exportObj28);
    }, function (_fileFile) {
      var _exportObj29 = {};

      for (var _key29 in _fileFile) {
        if (_key29 !== "default") _exportObj29[_key29] = _fileFile[_key29];
      }

      _export(_exportObj29);
    }, function (_footerFooter) {
      var _exportObj30 = {};

      for (var _key30 in _footerFooter) {
        if (_key30 !== "default") _exportObj30[_key30] = _footerFooter[_key30];
      }

      _export(_exportObj30);
    }, function (_inputInputPrefix) {
      var _exportObj31 = {};

      for (var _key31 in _inputInputPrefix) {
        if (_key31 !== "default") _exportObj31[_key31] = _inputInputPrefix[_key31];
      }

      _export(_exportObj31);
    }, function (_inputInputUpdateService) {
      var _exportObj32 = {};

      for (var _key32 in _inputInputUpdateService) {
        if (_key32 !== "default") _exportObj32[_key32] = _inputInputUpdateService[_key32];
      }

      _export(_exportObj32);
    }, function (_inputInput) {
      var _exportObj33 = {};

      for (var _key33 in _inputInput) {
        if (_key33 !== "default") _exportObj33[_key33] = _inputInput[_key33];
      }

      _export(_exportObj33);
    }, function (_modalModalTrigger) {
      var _exportObj34 = {};

      for (var _key34 in _modalModalTrigger) {
        if (_key34 !== "default") _exportObj34[_key34] = _modalModalTrigger[_key34];
      }

      _export(_exportObj34);
    }, function (_navbarNavbar) {
      var _exportObj35 = {};

      for (var _key35 in _navbarNavbar) {
        if (_key35 !== "default") _exportObj35[_key35] = _navbarNavbar[_key35];
      }

      _export(_exportObj35);
    }, function (_paginationPagination) {
      var _exportObj36 = {};

      for (var _key36 in _paginationPagination) {
        if (_key36 !== "default") _exportObj36[_key36] = _paginationPagination[_key36];
      }

      _export(_exportObj36);
    }, function (_parallaxParallax) {
      var _exportObj37 = {};

      for (var _key37 in _parallaxParallax) {
        if (_key37 !== "default") _exportObj37[_key37] = _parallaxParallax[_key37];
      }

      _export(_exportObj37);
    }, function (_progressProgress) {
      var _exportObj38 = {};

      for (var _key38 in _progressProgress) {
        if (_key38 !== "default") _exportObj38[_key38] = _progressProgress[_key38];
      }

      _export(_exportObj38);
    }, function (_pushpinPushpin) {
      var _exportObj39 = {};

      for (var _key39 in _pushpinPushpin) {
        if (_key39 !== "default") _exportObj39[_key39] = _pushpinPushpin[_key39];
      }

      _export(_exportObj39);
    }, function (_radioRadio) {
      var _exportObj40 = {};

      for (var _key40 in _radioRadio) {
        if (_key40 !== "default") _exportObj40[_key40] = _radioRadio[_key40];
      }

      _export(_exportObj40);
    }, function (_rangeRange) {
      var _exportObj41 = {};

      for (var _key41 in _rangeRange) {
        if (_key41 !== "default") _exportObj41[_key41] = _rangeRange[_key41];
      }

      _export(_exportObj41);
    }, function (_scrollfireScrollfireTarget) {
      var _exportObj42 = {};

      for (var _key42 in _scrollfireScrollfireTarget) {
        if (_key42 !== "default") _exportObj42[_key42] = _scrollfireScrollfireTarget[_key42];
      }

      _export(_exportObj42);
    }, function (_scrollfireScrollfire) {
      var _exportObj43 = {};

      for (var _key43 in _scrollfireScrollfire) {
        if (_key43 !== "default") _exportObj43[_key43] = _scrollfireScrollfire[_key43];
      }

      _export(_exportObj43);
    }, function (_scrollspyScrollspy) {
      var _exportObj44 = {};

      for (var _key44 in _scrollspyScrollspy) {
        if (_key44 !== "default") _exportObj44[_key44] = _scrollspyScrollspy[_key44];
      }

      _export(_exportObj44);
    }, function (_selectSelect) {
      var _exportObj45 = {};

      for (var _key45 in _selectSelect) {
        if (_key45 !== "default") _exportObj45[_key45] = _selectSelect[_key45];
      }

      _export(_exportObj45);
    }, function (_sidenavSidenavCollapse) {
      var _exportObj46 = {};

      for (var _key46 in _sidenavSidenavCollapse) {
        if (_key46 !== "default") _exportObj46[_key46] = _sidenavSidenavCollapse[_key46];
      }

      _export(_exportObj46);
    }, function (_sidenavSidenav) {
      var _exportObj47 = {};

      for (var _key47 in _sidenavSidenav) {
        if (_key47 !== "default") _exportObj47[_key47] = _sidenavSidenav[_key47];
      }

      _export(_exportObj47);
    }, function (_sliderSlider) {
      var _exportObj48 = {};

      for (var _key48 in _sliderSlider) {
        if (_key48 !== "default") _exportObj48[_key48] = _sliderSlider[_key48];
      }

      _export(_exportObj48);
    }, function (_switchSwitch) {
      var _exportObj49 = {};

      for (var _key49 in _switchSwitch) {
        if (_key49 !== "default") _exportObj49[_key49] = _switchSwitch[_key49];
      }

      _export(_exportObj49);
    }, function (_tabsTabs) {
      var _exportObj50 = {};

      for (var _key50 in _tabsTabs) {
        if (_key50 !== "default") _exportObj50[_key50] = _tabsTabs[_key50];
      }

      _export(_exportObj50);
    }, function (_toastToastService) {
      var _exportObj51 = {};

      for (var _key51 in _toastToastService) {
        if (_key51 !== "default") _exportObj51[_key51] = _toastToastService[_key51];
      }

      _export(_exportObj51);
    }, function (_tooltipTooltip) {
      var _exportObj52 = {};

      for (var _key52 in _tooltipTooltip) {
        if (_key52 !== "default") _exportObj52[_key52] = _tooltipTooltip[_key52];
      }

      _export(_exportObj52);
    }, function (_transitionsFadeinImage) {
      var _exportObj53 = {};

      for (var _key53 in _transitionsFadeinImage) {
        if (_key53 !== "default") _exportObj53[_key53] = _transitionsFadeinImage[_key53];
      }

      _export(_exportObj53);
    }, function (_transitionsStaggeredList) {
      var _exportObj54 = {};

      for (var _key54 in _transitionsStaggeredList) {
        if (_key54 !== "default") _exportObj54[_key54] = _transitionsStaggeredList[_key54];
      }

      _export(_exportObj54);
    }, function (_wavesWaves) {
      var _exportObj55 = {};

      for (var _key55 in _wavesWaves) {
        if (_key55 !== "default") _exportObj55[_key55] = _wavesWaves[_key55];
      }

      _export(_exportObj55);
    }],
    execute: function () {
      function configure(aurelia, configCallback) {
        var builder = new ConfigBuilder();

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

      _export('configure', configure);
    }
  };
});