<a name="0.2.3"></a>
## [0.2.3](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.2.2...v0.2.3) (2016-03-29)


### Bug Fixes

* **config-builder:** remove explicit text plugin with html-only components, fixes #145 ([604e907](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/604e907)), closes [#145](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/145)
* **md-datepicker:** fixed valueChanged log output, set pickadate to the input value if value changed ([fee6170](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/fee6170)), closes [#148](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/148)
* **md-datepicker:** set datepicker value if bound variable is set before binding occured, fixes #148 ([9d65023](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/9d65023)), closes [#148](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/148)



<a name="0.2.2"></a>
## [0.2.2](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.2.1...v0.2.2) (2016-03-23)


### Bug Fixes

* **config-builder:** add text plugin explicitly to html-only components ([8729993](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8729993))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.2.0...v0.2.1) (2016-03-23)




<a name="0.2.0"></a>
# [0.2.0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/compare/0.1.3...v0.2.0) (2016-03-21)


### Bug Fixes

* **md-breadcrumbs:** fixed navigation, closes #93 ([0de1115](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0de1115)), closes [#93](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/93)

### Features

* **md-collection:** added basic collections ([197e6fc](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/197e6fc))
* **md-footer:** added footer, closes #113 ([499b91c](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/499b91c)), closes [#113](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/113)



### 0.1.3 (2016-03-18)

#### Features

* **md-colors:**
  * added page-footer to colors ([70663436](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/706634364ee5b5388e8335b4cf9d7795e2e04c85))

### 0.1.2 (2016-03-16)

#### Features

* **md-input:** added html5 validation messages as an input property

### 0.1.1 (2016-03-15)


#### Bug Fixes

* **MdToastService/TypeScript build:** added remove tags in build for definition file

## 0.1.0 (2016-03-14)


#### Bug Fixes

* **MdBadge:** misspelled class name ([4a0d618d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4a0d618d1c9247e332e0bdf8533632e5e6211190))
* **MdInputUpdateService:** use queueTask to fix progress sample ([79d8aa6d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/79d8aa6dfa9893a4a73b5128890434d029ea8bc9))
* **MdToastService:** export service directly, make className optional #136 ([797d3b1d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/797d3b1d26aca26879c0a3beed4f9828b6bdec5e))
* **build:** seems some tasks don't like comments in import statements ([722cd28e](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/722cd28ee9c5b8500e50d0988b3002bb70dd970a))
* **card:** removed <card> element from template ([b71f186c](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b71f186ca6666bcf9ad94a214939f977aee25825))
* **carousel:** workaround for https://github.com/Dogfalo/materialize/issues/2741 ([872fcb13](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/872fcb136d9764c868c867efc28a714e824d8f95))
* **checkbox:**
  * react to viewmodel change ([8fb9c011](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8fb9c01120027cd4f07b6437bc9afc26b87fd600))
  * fixed value on attached() ([73d5aa6d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/73d5aa6d1e7c677f15825c6e265d51d8c858a382))
* **doc:** fixed link to aurelia docs ([b62502a5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b62502a5ec045ea28833888d6f8109cf9a9c9cf1))
* **help:** fixed tab event handler ([58414b13](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/58414b13ea5107e223e97dc143e617ce78abf2c5))
* **md-box:** fixed typo ([e5a11818](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e5a11818c5e07e89bb0502ad0823479e10503ad8))
* **md-colors:** fixed focus style on flat buttons ([c4fb04c9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c4fb04c9c6626c78a0447bfcb8c7a00c035370bf))
* **md-datepicker:**
  * use focusin event to fix datepicker opening issues, ([ba0e1c1f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ba0e1c1fd94d9465f997238f0b2520df54b17a0b), closes [#102](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/102))
  * fixed value set on "clear" button ([8c238deb](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8c238debb74bfcfbbc86a1db31c1d875e0fffd2c))
* **md-dropdown:** rename one of the MdDropdown classes, ([230f6630](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/230f6630973eb6c3f27be6b8227665373387d120), closes [#71](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/71))
* **md-modal-trigger:** put inject import to it's rightful place ([38112ef4](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/38112ef492a5e3032dde8343bbebf6a6c89bb5a0))
* **md-scrollfire:** convert offset to a number ([485dc424](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/485dc424ff0906bc40c8745861243f11da9e283f))
* **md-select:**
  * fixed multiple selection ([aa273408](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/aa273408e7f2241c159f0318434c915c7a3f1394))
  * changed bound variable to native value to allow for object selection ([76008ea5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/76008ea5be16cd995c17f2dbe54449cf259be05d))
  * selectedChanged only triggers refresh when value changed, ([9953f6be](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/9953f6bee3697ce6ba7b79e46f01b894a091bcdb), closes [#57](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/57))
  * handle multiple selection, ([cb7602c9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/cb7602c9a58fbb010cdc88afa396a3934d5579b9), closes [#54](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/54))
* **md-sidenav:**
  * md-close-on-click will now be applied correctly, ([da684a95](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/da684a955d2c8c13cc1eb17eec173819032dfba8), closes [#131](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/131))
  * prevent closeOnClick when sidenav is fixed ([90fc2ff0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/90fc2ff09ccb48768c4595dfd8a0704748ac1b1c))
* **md-slider:** fixed wrong import ([ffed8796](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ffed879683bbb671e869f1944dc6b49efb0cc502))
* **navbar:** fixed variable mismatch ([8d24d536](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8d24d53629b6474ca24ced1d15cc0b1f48fc177b))
* **project-status:**
  * fixed links to non-existing controls ([4ae47826](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4ae478262c87d3263d280b5df9a020bc3dce83f0))
  * fixed link to waves sample ([e38d24a1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e38d24a1748bf67e828415207bb5b450befa4f09))
* **syntax:** fixes problems with build-index task () ([775aabfd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/775aabfdb3a1a48264ca87388078793f77fa084c), closes [#18](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/18))
* **tabs:**
  * fixed class setter usage ([c8abaa45](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c8abaa45df3c77fc0ee47df13602c790a89c4188))
  * style adjustments ([e2459d11](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e2459d11d53f103699a7c29353eaa8f7eb1286c8))
  * fixed event handling ([752e2fec](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/752e2fecd5b514e82949aff3ca163cd86b127e29))
* **temp-style:** remove text-decoration for nav-bar links ([3bb2a968](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/3bb2a968652b87f7c6904e44f55721bae2d94519))
* **test-collapsible:** fixed collapsible test ([13bc3ed9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/13bc3ed91a5feb9a3fcec5b9e438dc1bf994cec3))


#### Features

* **MaterialBox:** add md-box ([049c3e58](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/049c3e585027ce78b1fbe02792cb3b93564d5ef8))
* **attributeManager:** preserve known color classes ([864d5aaf](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/864d5aaf30ae2e1b862500bbdea18f186abf3723))
* **attributes:** helper functino to retrieve boolean values from bound attributes ([3b02a65e](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/3b02a65e9e9821cd735504de66055303b9e11ff1))
* **build:** added gitignored dev output to build step `build-release` now builds to dist ([c9ff6c0b](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c9ff6c0bd4719bfd3d19b16bf241d83d2d7d5227))
* **button:**
  * made disabled property changeable ([e314cac6](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e314cac6c82df05b1b94a971399ea732beaaedb7))
  * add md-button attribute ([12ae662f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/12ae662f8c081585213afef1ecd26a3bf457def8))
* **card:** added md-card, changed "useButtons" to "useButton" ([ab90bc9f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ab90bc9fdf2b08318e38f184366e6dcdf6a7d978))
* **carousel:** add md-carousel ([0d65adb1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0d65adb14c56d7c5f91a7224905c56fdd639a5dc))
* **checkbox:**
  * added disabled and filledIn property, added the ability to assign "null" and dis ([0a994cd8](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0a994cd8740fc02bfcb1176d391a735892ab87a4))
  * added md-checkbox ([3c114192](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/3c1141926b5751690beb24594371c1fa4070f00c))
* **collapsible:**
  * added popout ([23c99efd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/23c99efd3b96a1b74afeefa52d87128df3c634df))
  * add data-collapsible attribute according to accordion setting ([e79fb7bd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e79fb7bd80a51ba74a0a40fee12ab4a84befea46))
  * added refresh method ([955d8c5b](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/955d8c5b16d394fbb7919e2da1995696224884cc))
* **colors:**
  * add slider indicator color ([5c237f0d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/5c237f0dbda7609b5a9228d0b0cc588be35754ee))
  * more colors and adjustments ([ebe17608](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ebe17608d5f7e3a96ca29bc3fbf746a691c195fe))
  * first take on color-management ([2f43879a](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/2f43879a0f2f92687d8fa48509fc7400cf84dac6))
  * add (pseudo) primary and accent colors ([1e0383d4](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/1e0383d457e80b967e53c391089faf0b2d526f3f))
* **common:** add common constants and events from kendo-ui-bridge ([0a21d083](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0a21d08321b4074cf15d323d46f723e0f1354b96))
* **config-builder:** added useAll() ([aa1fb5eb](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/aa1fb5eb87007cecd3e77ac5e08edfeea5b0aae1))
* **cssClassSetter:**
  * enhanced with attributes ([7430dd95](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/7430dd95383038714deb250e8ac70efd18b9eca0))
  * add a simple CssClassSetter class ([060e5e78](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/060e5e78bb7076e1c385fef644c70b460c83a346))
* **doc:** use md-well in sample pages ([d96ab42d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/d96ab42da546b7ab464db6cf0cb630ec2a7402af))
* **dropdown:**
  * add  all dropdown options ([678695a5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/678695a57aaa5f34522ca8af25920d0a8d0cfba6))
  * add md-dropdown ([4446383c](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4446383c1aceea232eeb21e69a12fc55b8248b10))
* **help:**
  * prettier tabs ([08a9affb](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/08a9affb4f0317137ad5a9e1b3a7c9167836cece))
  * help page now using tabSelected event ([c4ef2ce5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c4ef2ce520c41637342c94012b9261b856c25ab1))
  * doc viewer prototype ([e8c73b0f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e8c73b0f9e910dbd385863a808c17bc432e35cf4))
* **md-badge:** added badge ([2567a529](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/2567a529def8a128e9603d9ab7fa9f5bffbf75ae))
* **md-breadcrumbs:** added basic breadcrumbs ([d6d3be3a](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/d6d3be3aa56a2db73653f7cc7b592b37c518b899))
* **md-button:**
  * added floating option ([9669b72d](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/9669b72dfaa248cab5c7543c1e3e3995f9eebb00))
  * respond to change on "flat" property ([4b6fe4a4](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4b6fe4a4b98cc11d8ed540e008ce1abba80e2630))
* **md-card:**
  * implemented predefined card sizes ([499a89be](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/499a89beea11b7fe7a51aac3a91418b9ef511710))
  * added reveal card ([f8c978ee](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/f8c978ee58adaaf147a73abfeccbc0693a3c556b))
  * add image cards ([4247cd61](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4247cd6174f41c090913baab446fc18d39a745bb))
* **md-char-counter:** add character counter ([389b12b7](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/389b12b70bc0990542042c4aaf1bdd1ccbe848f9))
* **md-chip:** added basic chips component, ([2a80b1ce](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/2a80b1ce4e3a92b95244756d78eea171b2189bfa), closes [#105](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/105))
* **md-color:** added textarea coloring ([49f0f402](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/49f0f4029f15a24a8078157e2f143add5a24cc50))
* **md-colors:**
  * colorized md-progress ([fb8f739f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/fb8f739f4d19fb4e21ace182e47ff28248c5ae4a))
  * added pagination color ([504172be](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/504172be0ff4d8967b64874aa86a9f4139b5f2e1))
  * colorize password and email inputs ([e230bc25](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/e230bc2514121583c244703dcbf55173445e04bd))
  * added radio coloring ([5610468c](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/5610468c536313160bf6acf4472b8af919b3a9f4))
  * added input coloring ([c807eb65](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c807eb65a5162836c1bc714f83ee1e28c97122cc))
  * added datepicker colors ([38e66299](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/38e662999204a2d103d1c103fa75d1df3893e333))
  * added fab hover color ([bf87f3fd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/bf87f3fd8cee313846a4494758a3e406bdf2323e))
* **md-datepicker:**
  * added months and years selection as default ([bf920af5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/bf920af5e9b0d2b1eb792a2e99e0aed40c159cd2))
  * added a bound variable to retrieve date values ([899df868](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/899df8686cbaca45329a89328d708ffa1cca7107))
  * added datepicker ([2aed4642](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/2aed4642e6973eed9f66fef90ae0d1cc123bf16b))
* **md-fab:** naive fab implementation ([58eafbdd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/58eafbdd52c466c0d417ac4884d2a474d0ca5a28))
* **md-file:**
  * added md-multiple property, changed button class to account for color themes ([b96bd0b1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b96bd0b12d0864b4546f1303ff34046cce9ed8ee))
  * added file input ([54f9e8f9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/54f9e8f91598c21fe0854ce473e04be96aea6e44))
* **md-input:**
  * implemented input-update-service to minimize calls to Materialize.updatetextFiel ([c96ca7ef](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c96ca7ef6d39e1b0564ec4c78b6d1183baf58f5d))
  * implemented text area ([570234a5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/570234a5860fe3cb0baf87b3d580c2dbfbefd38e))
  * implemented input field ([26141188](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/26141188c942c2f379db785a2474a026e986bdc6))
* **md-pagination:**
  * added mdShowFirstLast property ([f6258c19](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/f6258c192adccf63841180db2c1e6172ddd4242a))
  * added mdShowPrevNext property ([ed67a3c9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ed67a3c9a163abb6a9b0ca36a8ab0d1d35a7a58d))
  * added bindable activePage variable and setActivePage event ([df5531ad](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/df5531ade99c493d6e94b00c8b52b57b44974063))
  * added pagination (incomplete), ref #101 ([bf49a308](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/bf49a308efff35e9a24a47d88a1f6598d32b3dd0))
* **md-parallax:** added parallax ([aa64ab33](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/aa64ab336ea4f7a3a2f1ffb13b6eee148ca4f788))
* **md-progress:** added progress/preloader ([3e25f455](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/3e25f4559f7805cf5ae0e1c1f1b3e925fbabdd04))
* **md-pushpin:** added pushpin, ([0c4aa70f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0c4aa70f0bb7a9c2242063effdc19057c616e53c), closes [#66](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/66))
* **md-radio:**
  * enabled binding to objects ([bb3b9aaa](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/bb3b9aaa5045ffc6d27e708cbf88e52c6639feb1))
  * added radio buttons ([02661248](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/02661248c6324b38a4c3f77b1be05ce70c4ca5e3))
* **md-range:** added range input ([35755fed](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/35755feda540fb09564775b2e78e81e56e2814d7))
* **md-scollfire:** add patched Materialize.scrollFire ([a1388a19](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/a1388a1947e78f57f9975a5385b6ed9ba3e6c290))
* **md-scrollspy:** add scrollspy, ([ac4d9297](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ac4d92978f12e71d99b2fcf2eaedaa367af2e099), closes [#68](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/68))
* **md-slider:** react to indicator and interval changes ([fc7db7bd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/fc7db7bd5d52d1d804c440ca2b6cf026f7e41aa6))
* **md-switch:** add disabled option ([300ed2f0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/300ed2f017304d1b00adbf9c9e4ef65b68771c9d))
* **md-tabs:**
  * add selectedTab getter, fire selected event on api select ([1fa21d7f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/1fa21d7f90e3b070ff513298bb2d3fc5a723e2dc))
  * add selectTab method ([b70f623f](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b70f623fdf006225a419b7a2ccfe4eca068aa5b2))
* **md-waves:** added circle option ([f6b6b310](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/f6b6b310c290c5b93402e3b5b4b7e217af603d39))
* **modal:** added working modal-trigger ([c7020ebe](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c7020ebe79c2777ee2bae0db7db5cb22498355b5))
* **navbar:**
  * use navbar in app ([fd86b6fe](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/fd86b6fe214c1877e3d7be5a26ff458498a4c724))
  * implement md-navbar ([232e1419](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/232e14197a8fed0fe5e9f04861cf9c9eb73e30f7))
* **project-status:**
  * removed most popular category, added "bonus" category ([7999222b](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/7999222b56475134b99078d30a47701b114bb760))
  * made the design look more "Material", controls being read from a js tree ([523a88e3](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/523a88e3f39864108e679fcf196d1fac8f364755))
* **select:** added md-select ([f20112f9](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/f20112f980373fdfde0b14a609c57dc1afbcfe03))
* **side-nav:** first take on side-nav ([b4cf90be](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/b4cf90beb656ad50494f7b658a8eaa2243eec29a))
* **sidenav:**
  * add width property ([5b570ff1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/5b570ff17c020fa660e7bb373969c451c12d3fab))
  * added sidenav edge and closeOnClick properties ([4fadcf14](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/4fadcf1401a2f5c6c80939ddaa55da647bc17947))
* **slider:**
  * add api methods ([9704280c](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/9704280c180de5aa6b636f2cdab85035c885e351))
  * add fullscreen/fillContainer option ([24aa5b67](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/24aa5b673da8545a57f5e3dd7ac8fcacd6af6170))
  * add md-slider #63 ([0e2250e1](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/0e2250e1d3fa115470f37b5401d725370f8df963))
* **source-maps:** enable sourcemaps during dev ([d86efa3c](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/d86efa3c54b505a88dc1eb2b523e9f1bd3436f9d))
* **switch:** add md-switch, ([ecb7db04](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/ecb7db0471533754a7f195538fb77e6cce3ea515), closes [#49](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/49))
* **tabs:**
  * (maybe) improved event syntax ([703a7338](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/703a7338c2730ad832c0685f737597d4ee557683))
  * tried to implement tabSelected event ([583ead6a](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/583ead6aaff4abf5d6822646911704ba5078e679))
* **toast:** added naive toastService ([8fd8a9bd](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/8fd8a9bdf5f6f8a6e8e7dcd4257c9dd0cf6787e5))
* **tooltip:** add md-tooltip ([6c2da2f8](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/6c2da2f852ae759c5df068c5c059116cae06ad9f))
* **transitions:**
  * set opacity of controlled elements to 0 if not set ([c8a46cbc](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/c8a46cbcea0826f2e29929b57b8334659a7292b3))
  * add fadein-image and staggered-list, ([9d428da0](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/9d428da001f55b3a3a1220f201da58eecd1be777), closes [#69](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/69))
* **waves:** add block property to activate waves-block (display: block) ([2d264318](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/2d2643189b8c109c4547d6cc3c3866a752346e1e))
* **well:**
  * added md-waves ([cfd6690a](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/cfd6690a3fc98b6b9a4cc0803ff980c4937b3fc2))
  * added md-well ([38222cc5](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/commit/38222cc5f8fdb145e56a8df05dc78c286ae8c0a8))
