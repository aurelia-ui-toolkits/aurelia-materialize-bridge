<a name="0.15.0"></a>
# [0.15.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.14.0...v0.15.0) (2016-09-07)


### Bug Fixes

* **md-input:** set left: 0 for MS Edge (only has an effect when using md-colors), fix #244 ([02122e2](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/02122e2)), closes [#244](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/244)
* **md-waves:** don't attach when building for amd, ref #238 ([5e084ec](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/5e084ec))
* **validation:** allow input to show many errors ([6af81db](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/6af81db))

### Features

* **md-checkbox:** forward blur event ([c5c451e](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c5c451e))
* **md-colors:** add error and (placeholder) success colors, close #247 ([cbc82cc](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/cbc82cc)), closes [#247](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/247)
* **md-input:** add md-show-errortext attribute ([a5da686](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/a5da686))
* **md-select:** add floating label, ref #243 ([6aaa610](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/6aaa610))
* **md-select:** forward blur events ([f219752](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/f219752))
* **md-switch:** forward blur event ([0eb63b5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0eb63b5))
* **validation:** add error list to md-select ([4ccb4a9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4ccb4a9))



<a name="0.14.0"></a>
# [0.14.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.13.0...v0.14.0) (2016-08-29)


### Bug Fixes

* **autocomplete:** add export, ref #234 ([cb284ce](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/cb284ce))
* **md-input:** run updateService only.. ([e2d7b18](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e2d7b18))
* **md-pagination:** respect visible links ([e218e79](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e218e79))
* **md-pagination:** visible links update ([1e06d0f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/1e06d0f))
* **scrollspy:** add useScrollspy ([0b402ec](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0b402ec))
* **validationRenderer:** remove unused classes ([b597856](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b597856))

### Features

* **md-input:** add md-validate-success attribute ([1bb0a8e](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/1bb0a8e))
* **md-input:** publish DOM blur event ([547ddb3](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/547ddb3))
* **validationRenderer:** export renderer ([5643a4e](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/5643a4e))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.12.0...v0.13.0) (2016-08-15)


### Bug Fixes

* **validationRenderer:** correctly assign boundaryElement, set label active to avoid strange layout error ([b9f768d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b9f768d))

### Features

* **md-input:** add md-step option for number input types( allows decimals and preset increments ([19a6892](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/19a6892))
* **validation:** add validationRenderer from @ullfis ([5a73161](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/5a73161))



<a name="0.12.0"></a>
# [0.12.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.11.0...v0.12.0) (2016-08-10)


### Features

* **md-tooltip:** add html option, closes #228 ([ca965f3](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ca965f3)), closes [#228](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/228)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.10.4...v0.11.0) (2016-08-03)


### Bug Fixes

* **md-datepicker:** Date not being parsed when using tab on control ([8c869b5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8c869b5))
* **md-datepicker:** respect max date ([e54d610](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e54d610))
* **md-input:** fix floating label styles (revert older fix) ([8039847](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8039847))

### Features

* **md-autocomplete:** add autocomplete, closes #209 ([05e4260](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/05e4260)), closes [#209](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/209)
* **md-carousel:** new "special" carousell from Materialize 0.97.7 ([0bd99cd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0bd99cd))
* **md-chips:** add first attempt on chip editor ([5af48a5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/5af48a5))



<a name="0.10.4"></a>
## [0.10.4](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.10.3...v0.10.4) (2016-07-25)


### Bug Fixes

* **md-pagination:** fix page links display with an odd amount of visible links, number of pages opti ([b79f92a](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b79f92a))



<a name="0.10.3"></a>
## [0.10.3](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.10.2...v0.10.3) (2016-07-22)


### Bug Fixes

* **md-pagination:** fix last ... indicator ([0bfd109](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0bfd109))



<a name="0.10.2"></a>
## [0.10.2](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.10.1...v0.10.2) (2016-07-22)

### Features

* **md-pagination:** add ... indicator to page links when start/end are not visible (also hijacked @g ([b142fe8](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b142fe8))



<a name="0.10.1"></a>
## [0.10.1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.10.0...v0.10.1) (2016-07-13)


### Bug Fixes

* **md-datepicker:** Erase via backspace would not update value or clear it ([8e748ce](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8e748ce))



<a name="0.10.0"></a>
# [0.10.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.9.0...v0.10.0) (2016-07-06)


### Bug Fixes

* **md-datepicker:** fix value property not being set after pickadate parses it internally ([b21ef11](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b21ef11))
* **package.json:** remove trailing comma ([fcffd23](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/fcffd23))
* **webpack:** add components to import via webpack ([b153ea9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b153ea9))



<a name="0.9.0"></a>
# [0.9.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.8.1...v0.9.0) (2016-06-29)


### Bug Fixes

* **md-datepicker:** fix closeOnSelect closing on month/year switching ([ed2664d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ed2664d))
* **md-datepicker:** fix tab index of datepicker ([36b4ee4](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/36b4ee4))

### Features

* **md-datepicker:** add advanced options and editable ([9bc8e9b](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/9bc8e9b))
* **md-datepicker:** add showIcon option and expose simple open/close functions ([9608fab](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/9608fab))



<a name="0.8.1"></a>
## [0.8.1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.8.0...v0.8.1) (2016-06-22)


### Bug Fixes

* **all:** load css resources explicitly with !text ([4f4e7a3](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4f4e7a3))
* **all:** revert loading css resources explicitly with !text ([89d949b](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/89d949b))



<a name="0.8.0"></a>
# [0.8.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.7.1...v0.8.0) (2016-06-15)

### Features
* **all:** implement ShadowDOM v1 changes

### Bug Fixes

* **md-card:** fix an error with reveal cards caused by ShadowDOM changes ([1bc8ac4](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/1bc8ac4))
* **md-input:** always run update on attached, solves a problem with values initialized before t ([fef2962](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/fef2962))



<a name="0.7.1"></a>
## [0.7.1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.7.0...v0.7.1) (2016-06-08)


### Bug Fixes

* **md-input:** fix placeholder in textareas, fixes #192 ([d63aff6](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/d63aff6)), closes [#192](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/192)



<a name="0.7.0"></a>
# [0.7.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.6.2...v0.7.0) (2016-06-06)


### Features

* **md-select:** add disabled property and functionality, closes #190 ([3bfc9c8](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/3bfc9c8)), closes [#190](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/190)



<a name="0.6.2"></a>
## [0.6.2](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.6.1...v0.6.2) (2016-05-27)


### Bug Fixes

* **md-input:** remove update error for md-placholder ([ba1e408](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ba1e408))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.6.0...v0.6.1) (2016-05-16)


### Bug Fixes

* **md-range:** set theme color on thumb ([2c15816](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/2c15816)), closes [#176](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/176)



<a name="0.6.0"></a>
# [0.6.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.5.1...v0.6.0) (2016-05-11)


### Features

* **md-color:** add range coloring ([402348f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/402348f))
* **md-input:** add md-disabled attribute


<a name="0.5.1"></a>
## [0.5.1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.5.0...v0.5.1) (2016-04-26)


### Features

* **tools:** add AttributeManager, attributes and events to TypeScript definition ([cb141d1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/cb141d1))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.4.0...v0.5.0) (2016-04-18)


### Features

* **md-collection:** add headers ([e180ce5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e180ce5))
* **md-colors:** add collection secondary content coloring ([110c68b](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/110c68b))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.3.0...v0.4.0) (2016-04-12)


### Bug Fixes

* **md-card:** set display: block on cards by default so they have a height, fixes some issues ([75d2c4d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/75d2c4d))

### Features

* **md-collection:** add element for secondary-content ([86c06a1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/86c06a1))
* **md-collection-selector:** add list-selection functionality ([994f01d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/994f01d))
* **md-modal:** implement dismissible option, closes #162 ([8722d8f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8722d8f)), closes [#162](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/162)
* **md-scrollfire:** remove scrollfire patch, provide it optionally, closes #161 ([d0e68b2](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/d0e68b2)), closes [#161](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/161)
