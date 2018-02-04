webpackJsonp([0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(84);
__webpack_require__(87);
module.exports = __webpack_require__(48);


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type.\n(Source code omitted for this binary file)");

/***/ }),

/***/ "about/about":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
var About = /** @class */ (function () {
    function About() {
        this.actors = [
            {
                name: "Bryan Cranston",
                episodes: 62,
                description: "Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.",
                image: "bryan-cranston.jpg"
            },
            {
                name: "Aaron Paul",
                episodes: 62,
                description: "Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the \"Need For Speed\" Movie.",
                image: "aaron-paul.jpg"
            },
            {
                name: "Bob Odenkirk",
                episodes: 62,
                description: "Bob Odenkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called \"Better Call Saul\".",
                image: "bob-odenkirk.jpg"
            }
        ];
    }
    About.prototype.attached = function () {
        // let bridge = System.get(System.normalizeSync('aurelia-materialize-bridge'));
        // this.version = bridge.version;
        this.version = "0.32.0";
    };
    About.prototype.onSelectionChanged = function (e) {
        var selected = this.list.getSelected();
        var names = selected.map(function (i) { return i.name; });
        this.logger.log("selection changed: " + names.join(", "));
        // this.logger.log(`selection changed ${e.detail.item.name}`);
    };
    return About;
}());



/***/ }),

/***/ "about/about.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <section class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul md-tabs=\"fixed: true;\">\n          <li><a class=\"active\" href=\"#about\">What is Aurelia Materialize bridge?</a></li>\n          <li><a href=\"#example\">List - example of an Aurelia component</a></li>\n        </ul>\n      </div>\n    </div>\n    <section id=\"about\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <div style=\"margin:auto;text-align:center\">\n            <h1 class=\"text-lg\">Aurelia Materialize <i>Bridge</i></h1>\n            <h3>Material design HTML5 widgets - enhanced by Aurelia</h3>\n            <span>Version ${version}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m4\">\n          <a href=\"http://aurelia.io\" target=\"_blank\"><img src=\"" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../images/aurelia-logo-04.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "\" /></a>\n        </div>\n        <div class=\"col s12 m4\">\n          <img src=\"" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./images/bridge-image-08-low.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "\" >\n        </div>\n        <div class=\"col s12 m4 center\">\n          <a href=\"http://www.materializecss.com\" target=\"_blank\"><img src=\"" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../images/materialize-logo.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "\" /></a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 center\" style=\"padding-top: 20px; padding-bottom:20px\">\n          <ul class=\"features\">\n            <li><h4>We've done the hard work for you</h4></li>\n            <li>Use Materialize components in your Aurelia application <i style=\"text-decoration:underline\">without writing any wrapper code</i></li>\n            <li>Powerful binding expressions <i>directly in your markup</i></li>\n            <li><a href=\"#/project-status\">See the catalog</a> or check out the example in the second tab</li>\n          </ul>\n        </div>\n      </div>\n    </section>\n    <section id=\"example\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <div>\n            <h5>Hover over the avatar images to select an actor</h5>\n            <md-collection view-model.ref=\"list\">\n              <md-collection-item repeat.for=\"actor of actors\" class=\"avatar ${ selector.isSelected ? 'selected' : '' }\">\n                <md-collection-selector view-model.ref=\"selector\" item.bind=\"actor\" md-on-selection-changed.delegate=\"onSelectionChanged($event)\">\n                  <img src=\"" + __webpack_require__(51) + "\" alt=\"\" class=\"circle md-collection-selector__hover\">\n                </md-collection-selector>\n                <span class=\"accent-text title\">${actor.name}</span>\n                <p style=\"max-width: 80%;\">${actor.description}</p>\n                <div class=\"secondary-content\">\n                  <i class=\"material-icons\">send</i>\n                </div>\n              </md-collection-item>\n            </md-collection>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col s12\">\n        <md-card md-title=\"Console log\">\n          <logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\n        </md-card>\n      </div>\n    </div>\n    </section>\n  </section>\n</template>\n";

/***/ }),

/***/ "app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("settings");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var App = /** @class */ (function () {
    function App(settings) {
        this.primaryColor = settings.primaryColor;
        this.accentColor = settings.accentColor;
        this.errorColor = settings.errorColor;
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = "Aurelia Materialize Components";
        config.map([
            { name: "about", route: ["", "about"], moduleId: "about/about", title: "About" },
            { name: "installation", route: "installation", moduleId: "installation/installation", title: "Installation" },
            { name: "project-status", route: "project-status", moduleId: "project-status/controls", title: "Components" },
            { name: "help", route: "help", moduleId: "help/help", title: "Help" },
            // { name: 'docs',             route: 'help/docs/:category/:file',  moduleId: 'help/help',                   title: 'Help' },
            { name: "support", route: "help/support", moduleId: "help/support", title: "Support" },
            { name: "samples", route: ["samples"], moduleId: "samples/index", title: "Samples" }
        ]);
        this.router = router;
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings__["Settings"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "app-colors.html":
/***/ (function(module, exports) {

module.exports = "<template bindable=\"primaryColor, accentColor\">\n  <style>\n    #nprogress .bar {\n      background: ${accentColor};\n    }\n    #nprogress .peg {\n      box-shadow: 0 0 10px ${accentColor}, 0 0 5px ${accentColor};\n    }\n    #nprogress .spinner-icon {\n      border-top-color: ${accentColor};\n      border-left-color: ${accentColor};\n    }\n  </style>\n</template>\n";

/***/ }),

/***/ "app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./loading-indicator\"></require>\n  <require from='./nav-bar'></require>\n  <require from=\"./color-switcher.html\"></require>\n  <require from=\"./app-colors.html\"></require>\n  <md-colors md-primary-color.bind=\"primaryColor\" md-accent-color.bind=\"accentColor\" md-error-color.bind=\"errorColor\"></md-colors>\n  <app-colors primary-color.bind=\"primaryColor\" accent-color.bind=\"accentColor\"></app-colors>\n  <loading-indicator></loading-indicator>\n  <header>\n    <nav-bar router.bind=\"router\"></nav-bar>\n  </header>\n    <main>\n\n      <div class=\"row\">\n        <div class=\"col s12 m3\">\n          <color-switcher primary-color.two-way=\"primaryColor\" accent-color.two-way=\"accentColor\" error-color.two-way=\"errorColor\"></color-switcher>\n        </div>\n      </div>\n\n      <div class=\"page-host\">\n        <router-view></router-view>\n      </div>\n    </main>\n    <footer>\n      <!-- placeholder footer -->\n    </footer>\n</template>\n";

/***/ }),

/***/ "aurelia.d":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Typescript emitted no output for C:\\Dev\\aurelia-materialize-bridge\\sample\\src\\aurelia.d.ts.\n    at successLoader (C:\\Dev\\aurelia-materialize-bridge\\sample\\node_modules\\ts-loader\\dist\\index.js:47:15)\n    at Object.loader (C:\\Dev\\aurelia-materialize-bridge\\sample\\node_modules\\ts-loader\\dist\\index.js:29:12)");

/***/ }),

/***/ "color-switcher.html":
/***/ (function(module, exports) {

module.exports = "<template bindable=\"primaryColor, accentColor, errorColor\">\n  <ul md-collapsible>\n    <li>\n      <div class=\"collapsible-header\">\n        <i class=\"material-icons left\">arrow_drop_down</i>Color switcher\n      </div>\n      <div class=\"collapsible-body\" style=\"padding: 10px;\">\n        primary color:\n        <select md-select value.two-way=\"primaryColor\">\n          <option value=\"#ee6e73\">[Materialize] red</option>\n          <option value=\"#3f51b5\">[Paper] indigo</option>\n          <option value=\"#00bcd4\">[Material-UI] light blue</option>\n          <option value=\"#78909C\">[MuiCss] blue grey</option>\n          <option value=\"#4caf50\">green</option>\n          <option value=\"#ff9800\">orange</option>\n        </select>\n\n        accent color:\n        <select md-select value.two-way=\"accentColor\">\n          <option value=\"#009688\">[Materialize] teal</option>\n          <option value=\"#e91e63\">[Paper] pink</option>\n          <option value=\"#ff4081\">[Material-UI] pink</option>\n          <option value=\"#FF80AB\">[MuiCss] another pink</option>\n          <option value=\"#4caf50\">green</option>\n          <option value=\"#ff9800\">orange</option>\n        </select>\n\n        error color:\n        <select md-select value.two-way=\"errorColor\">\n          <option value=\"#f44336\">[default] red</option>\n          <option value=\"#D50000\">[Paper] red</option>\n          <option value=\"#4caf50\">[confusing] green</option>\n          <option value=\"#ff9800\">orange</option>\n        </select>\n      </div>\n    </li>\n  </ul>\n</template>\n";

/***/ }),

/***/ "help/doc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doc", function() { return Doc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry_json__ = __webpack_require__("help/registry.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__registry_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Doc = /** @class */ (function () {
    function Doc(router, ea) {
        var _this = this;
        this.router = router;
        this.ea = ea;
        this.subscriptions = [];
        this.registry = __WEBPACK_IMPORTED_MODULE_3__registry_json___default.a;
        this.categories = [];
        this.subscriptions.push(ea.subscribe("router:navigation:complete", function (e) { return _this.routeChanged(e); }));
        // go through all the categories in the json
        // and convert it into an array that allows for easier looping
        for (var _i = 0, _a = Object.keys(this.registry); _i < _a.length; _i++) {
            var categoryKey = _a[_i];
            var category = {
                name: categoryKey,
                files: this.registry[categoryKey]
            };
            // if (category.name.includes('_') || category.files.some(i => i.name.includes('_'))) {
            if (category.name.indexOf("_") > -1 || category.files.some(function (i) { return i.name.indexOf("_") > -1; })) {
                throw new Error("Documentation categories or file names can\t contain underscore (_)");
            }
            this.categories.push(category);
        }
    }
    // - adds the page to route params
    // - sets the file path as activeDoc
    // - selects the item in panelbar
    Doc.prototype.switchPage = function (fileName, categoryName) {
        var file = this.getFileByName(fileName, categoryName);
        if (file) {
            this.activeDoc = file.path;
            this.selectInPanelBar(fileName, categoryName);
        }
    };
    Doc.prototype.routeChanged = function (e) {
        this.params = Object.assign({}, e.instruction.params, e.instruction.queryParams);
        // retrieve categoryname and filename from route params
        var file = this.params.file;
        var cat = this.params.category;
        // if a file and category name is in the route, switch to that page
        if (file && cat) {
            this.switchPage(file, cat);
        }
    };
    Doc.prototype.routeToPage = function (fileName, categoryName) {
        this.router.navigateToRoute("docs", {
            category: this.encode(categoryName),
            file: this.encode(fileName)
        });
    };
    Doc.prototype.getFileByName = function (fileName, categoryName) {
        var _this = this;
        var cat = this.categories.find(function (i) { return _this.encode(i.name) === categoryName.toLowerCase(); });
        if (cat) {
            var file = cat.files.find(function (i) { return _this.encode(i.name) === fileName.toLowerCase(); });
            if (file) {
                return file;
            }
        }
    };
    // loop through all category items in the panelbar
    // and their file items
    // and expand the category by name and select the file by name
    Doc.prototype.selectInPanelBar = function (fileName, categoryName) {
        var _this = this;
        var categoryLis = $(this.panelBarDiv).children("li");
        $(categoryLis).each(function (index, element) {
            var $categoryCandidate = $("div.collapsible-header", element);
            var categoryText = $("span", $categoryCandidate).text().trim().toLowerCase();
            if (_this.encode(categoryText) === categoryName) {
                // this.panelBar.expand($(element));
                $categoryCandidate.addClass("active");
                // DOING:0 reinitialize collapsible since md-collapsible is already
                //        initialized and Materialize has no method to just expand
                // $categoryCandidate.parents('[md-collapsible]').collapsible();
                _this.panelBarViewModel.refresh();
                var fileLis = $(element).find("ul").children("li");
                $(fileLis).each(function (i, elem) {
                    var fileText = $(elem).children("span").text().trim().toLowerCase();
                    if (_this.encode(fileText) === fileName) {
                        // this.panelBar.select($(elem));
                        $("li", _this.panelBarDiv).removeClass("primary");
                        $(elem).addClass("primary");
                    }
                });
            }
        });
    };
    // scroll to top after a doc has been loaded
    // if a anchor is in the route params, scroll to that instead
    Doc.prototype.scrollToTarget = function () {
        var _this = this;
        if (this.params.anchor) {
            setTimeout(function () {
                var container = __WEBPACK_IMPORTED_MODULE_4_jquery__(_this.markdownCol);
                var scrollTo = __WEBPACK_IMPORTED_MODULE_4_jquery__("#" + _this.params.anchor, _this.markdownCol);
                container.animate({
                    scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
                });
            }, 200);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(this.markdownCol).animate({ scrollTop: 0 });
        }
    };
    Doc.prototype.encode = function (s) {
        return s.replace(/'|!|@|#|$|%|\^|&|\*|\(|\)|\+|:|"|\?|>|</g, "").replace(/\s/g, "_").toLowerCase();
    };
    Doc.prototype.detached = function () {
        this.subscriptions.forEach(function (i) { return i.dispose(); });
    };
    Doc = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__["a" /* EventAggregator */]])
    ], Doc);
    return Doc;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ "help/doc.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "doc .collapsible-header {\n  line-height: 44px;\n  height: 44px;\n}\n\ndoc .collapsible-body li {\n  line-height: 44px;\n  height: 44px;\n  cursor: pointer;\n  padding: 0 10px;\n  display: block;\n}\n\ndoc .panel-bar {\n  /*margin-top: 20px;*/\n}\n\n.left-panel {\n  /*float: left;*/\n  height: 100%;\n  overflow: auto;\n}\n\n.right-panel {\n  /*float: right;*/\n  height: 100%;\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "help/doc.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./doc.css\"></require>\n\n  <div class=\"row\">\n    <div class=\"left-panel col s12 m3\">\n      <ul class=\"panel-bar z-depth-1\" ref=\"panelBarDiv\" class=\"help-docs collapsible\" md-collapsible=\"accordion: true;\" md-collapsible.ref=\"panelBarViewModel\">\n        <li repeat.for=\"category of categories\">\n          <div md-waves=\"color: primary;\" class=\"collapsible-header\">\n            <span>${category.name}</span>\n            <i class=\"material-icons right\">arrow_drop_down</i>\n          </div>\n          <div class=\"collapsible-body\">\n            <ul>\n              <li md-waves repeat.for=\"file of category.files\" click.delegate=\"routeToPage(file.name, category.name)\">\n                <span>${file.name}</span>\n              </li>\n            </ul>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"right-panel col s12 m9 z-depth-1\" ref=\"markdownCol>\n      <au-markdown url.bind=\"activeDoc\" loaded.delegate=\"scrollToTarget()\">\n      </au-markdown>\n    </div>\n\n  </div>\n</template>\n";

/***/ }),

/***/ "help/docs/about-aurelia/features.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| ### 1. Key features\n| <br>");

/***/ }),

/***/ "help/docs/about-materialize/integrated-with-aurelia.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 1. Integrated with Aurelia");

/***/ }),

/***/ "help/docs/about-materialize/why-choose-materialize.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 2. Why Choose Materialize");

/***/ }),

/***/ "help/docs/about-this-application/color-switcher.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| ### 7. Color switcher\n| <br>");

/***/ }),

/***/ "help/docs/about-this-application/components-catalog.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| ### 3. Catalog of Materialize controls as Aurelia components.\n| <br>");

/***/ }),

/***/ "help/docs/about-this-application/installation.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| ### 5. Installation\n| <br>");

/***/ }),

/***/ "help/docs/about-this-application/internal-structure.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 4. Application's internal structure");

/***/ }),

/***/ "help/docs/about-this-application/introduction.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 1. Introduction");

/***/ }),

/***/ "help/docs/about-this-application/navigation.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 2. Navigation guide");

/***/ }),

/***/ "help/docs/about-this-application/project-status.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| ### 6. Project status\n| <br>");

/***/ }),

/***/ "help/docs/app-developers-tutorials/button.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 4. Button and Toasts");

/***/ }),

/***/ "help/docs/app-developers-tutorials/collapsible.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 6. Collapsible");

/***/ }),

/***/ "help/docs/app-developers-tutorials/introduction.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 1. Introduction");

/***/ }),

/***/ "help/docs/app-developers-tutorials/next-actions.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 7. What you need to know");

/***/ }),

/***/ "help/docs/app-developers-tutorials/select.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 3. Select component");

/***/ }),

/***/ "help/docs/app-developers-tutorials/setup.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 2. Setup");

/***/ }),

/***/ "help/docs/app-developers-tutorials/slider.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 5. Slider");

/***/ }),

/***/ "help/docs/bridge-developers-notes/babel-dts-generator.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 3. babel-dts-generator");

/***/ }),

/***/ "help/docs/bridge-developers-notes/bindables.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 1. Auto generation of bindable properties");

/***/ }),

/***/ "help/docs/bridge-developers-notes/bridge-utilities.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| <a name=\"top\"></a>");

/***/ }),

/***/ "help/docs/bridge-developers-notes/bundling.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 2. Bundling the Materialize bridge");

/***/ }),

/***/ "help/docs/bridge-developers-notes/html-api-of-kendo-grid.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 5. KendoUI Grid component HTML API");

/***/ }),

/***/ "help/docs/bridge-developers-notes/introduction.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 1. Introduction");

/***/ }),

/***/ "help/docs/bridge-developers-notes/template-compilation.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 6. Template compilation");

/***/ }),

/***/ "help/docs/bridge-developers-tutorials/button.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 4. Button");

/***/ }),

/***/ "help/docs/bridge-developers-tutorials/collapsible.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 6. Collapsible");

/***/ }),

/***/ "help/docs/bridge-developers-tutorials/introduction.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (2:0)\nYou may need an appropriate loader to handle this file type.\n| \n| ### 1. Introduction\n| <br>\n| ");

/***/ }),

/***/ "help/docs/bridge-developers-tutorials/next-actions.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 7. Next actions");

/***/ }),

/***/ "help/docs/bridge-developers-tutorials/select.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 3. Select");

/***/ }),

/***/ "help/docs/bridge-developers-tutorials/setup.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 2. Setup");

/***/ }),

/***/ "help/docs/bridge-developers-tutorials/slider.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <br>\n| \n| ### 5. Slider");

/***/ }),

/***/ "help/docs/lorem.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| ## Lorem\n| \n| Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi augue, sodales eget felis quis, fringilla luctus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in quam a velit ultricies suscipit eu sed arcu. Duis dapibus sodales est, a semper augue laoreet et. Quisque tristique molestie odio in pulvinar. Aliquam eget enim vitae felis varius varius at ut nisl. Nunc quis lectus elementum, venenatis est eget, blandit dui. Vivamus fermentum nulla interdum massa blandit rhoncus. Ut dui libero, sollicitudin et gravida id, ultricies eu nunc. Nunc nisi sem, facilisis sed mauris et, pharetra tincidunt orci. Cras molestie, arcu ac venenatis fringilla, nulla dui laoreet magna, sit amet blandit diam tellus et nisl. Nunc a augue aliquam, tristique justo vel, efficitur metus. Nullam faucibus blandit tincidunt.");

/***/ }),

/***/ "help/help":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Help", function() { return Help; });
// import { computedFrom } from 'aurelia-binding';
var Help = /** @class */ (function () {
    function Help() {
    }
    Help.prototype.scrollToTop = function () {
        // window.scrollTo(0, 0);
        $("html, body").animate({ scrollTop: 0 });
    };
    // @computedFrom('document.body.scrollTop')
    Help.prototype.showScrollFAB = function () {
        // return document.body.scrollTop > 200;
        return true;
    };
    return Help;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ "help/help.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Unknown word (6:3)\n\n  4 | \n  5 | .help-viewer-container {\n> 6 |   padding 0 5px;\n    |   ^\n  7 | }\n  8 | \n  9 | #doc {\n");

/***/ }),

/***/ "help/help.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./help.css\"></require>\n  <require from=\"./doc\"></require>\n\n  <section>\n    <iframe src=\"https://www.gitbook.com/read/book/aurelia-ui-toolkits/materialize-bridge-docs\" width=\"96%\" height=\"780px\"></iframe>\n    <!-- <h4>Aurelia-Materialize Components Catalog Help</h4>\n    <div class=\"row\">\n      <div class=\"col s12\">\n\n        <div class=\"help-viewer-container\">\n          <ul md-tabs class=\"tabs z-depth-1\" ref=\"tabs\">\n              <li md-waves=\"color: primary;\" class=\"tab\"><a class=\"active\" href=\"#doc\">Components Docs</a></li>\n              <li md-waves=\"color: primary;\" class=\"tab\"><a href=\"#support\">Support</a></li>\n          </ul>\n\n          <div id=\"doc\" class=\"z-depth-1\">\n            <doc></doc>\n          </div>\n          <div id=\"support\" class=\"z-depth-1\">\n            <h4>Gitter</h4>\n            <p>Do you need some help? We can help you out in our Gitter room.</p>\n            <a href=\"https://gitter.im/aurelia-ui-toolkits/aurelia-materialize-bridge?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge\" target=\"_blank\">\n              <img src=\"https://camo.githubusercontent.com/da2edb525cde1455a622c58c0effc3a90b9a181c/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667\" alt=\"Join the chat\" data-canonical-src=\"https://badges.gitter.im/Join%20Chat.svg\" style=\"max-width:100%;\">\n            </a>\n\n            <h4>Github</h4>\n            We also monitor <a href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues\" target=\"_blank\">issues</a> on Github.\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"fixed-action-btn\" show.bind=\"showScrollFAB()\" style=\"bottom: 45px; right: 24px;\">\n      <a class=\"btn-floating btn-large accent\" click.delegate=\"scrollToTop()\"><i class=\"material-icons\">keyboard_arrow_up</i></a>\n    </div> -->\n  </section>\n</template>\n";

/***/ }),

/***/ "help/registry.json":
/***/ (function(module, exports) {

module.exports = {"About this application":[{"name":"1. Introduction","path":"help/docs/about-this-application/introduction.md"},{"name":"2. Navigation guide","path":"help/docs/about-this-application/navigation.md"},{"name":"3. Components catalog","path":"help/docs/about-this-application/components-catalog.md"},{"name":"4. Internal structure","path":"help/docs/about-this-application/internal-structure.md"},{"name":"5. Installation","path":"help/docs/about-this-application/installation.md"},{"name":"6. Project status","path":"help/docs/about-this-application/project-status.md"},{"name":"7. Color switcher","path":"help/docs/about-this-application/color-switcher.md"}],"About Aurelia":[{"name":"1. Key features","path":"help/docs/about-aurelia/features.md"}],"About Materialize":[{"name":"1. Integrated with Aurelia","path":"help/docs/about-materialize/integrated-with-aurelia.md"},{"name":"2. Why Choose Materialize","path":"help/docs/about-materialize/why-choose-materialize.md"}],"App developers tutorials":[{"name":"1. Introduction","path":"help/docs/app-developers-tutorials/introduction.md"},{"name":"2. Setup","path":"help/docs/app-developers-tutorials/setup.md"},{"name":"3. Select component","path":"help/docs/app-developers-tutorials/select.md"},{"name":"4. Button component","path":"help/docs/app-developers-tutorials/button.md"},{"name":"5. Slider component","path":"help/docs/app-developers-tutorials/slider.md"},{"name":"6. Collapsible component","path":"help/docs/app-developers-tutorials/collapsible.md"},{"name":"7. What you need to know","path":"help/docs/app-developers-tutorials/next-actions.md"}],"App developers notes":[{"name":"1. Introduction","path":"help/docs/bridge-developers-notes/introduction.md"},{"name":"2. On bundling","path":"help/docs/bridge-developers-notes/bundling.md"}]}

/***/ }),

/***/ "help/support":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Support", function() { return Support; });
var Support = /** @class */ (function () {
    function Support() {
    }
    return Support;
}());



/***/ }),

/***/ "help/support.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".doc-support h4 {\n  margin-top: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "help/support.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./support.css\"></require>\n  <div class=\"container doc-support\">\n    <h4>Gitter</h4>\n    <p>Do you need some help? We can help you out in our Gitter room.</p>\n    <a href=\"https://gitter.im/aurelia-ui-toolkits/aurelia-materialize-bridge?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge\" target=\"_blank\">\n      <img src=\"https://camo.githubusercontent.com/da2edb525cde1455a622c58c0effc3a90b9a181c/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667\" alt=\"Join the chat\" data-canonical-src=\"https://badges.gitter.im/Join%20Chat.svg\" style=\"max-width:100%;\">\n    </a>\n\n    <h4>Github</h4>\n    We also monitor <a href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues\" target=\"_blank\">issues</a> on Github.\n  </div>\n</template>\n";

/***/ }),

/***/ "installation/installation":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Installation", function() { return Installation; });
var Installation = /** @class */ (function () {
    function Installation() {
    }
    return Installation;
}());



/***/ }),

/***/ "installation/installation-jspm.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| #### Getting the plugin\n| \n| **<span style=\"color: red;\">Important</span>**: Make sure you run jspm version 0.16.15.");

/***/ }),

/***/ "installation/installation-requirejs.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| #### Scaffolding the app\n| \n| ```");

/***/ }),

/***/ "installation/installation-webpack.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| #### Getting the plugin\n| \n| In your project install the plugin via npm with the following command:");

/***/ }),

/***/ "installation/installation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".installation au-markdown {\n  display: block;\n  padding: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "installation/installation.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n\t<require from=\"./installation.css\"></require>\n  <div class=\"container\">\n    <h5>Installation instructions have moved <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/installation.html\" target=\"_blank\">here</a>.</h5>\n  </div>\n\t<!--<section class=\"installation\">\n\t\t<h4>Aurelia-Materialize bridge installation</h4>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12 m8\">\n\t\t\t\t<ul md-tabs class=\"z-depth-1\">\n\t\t\t\t\t<li md-waves=\"color: primary;\"><a class=\"active\" href=\"#requirejs\">Aurelia CLI</a></li>\n\t\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#jspm\">JSPM</a></li>\n\t\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#webpack\">Webpack</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<div id=\"requirejs\" class=\"z-depth-1\">\n\t\t\t\t\t<au-markdown url=\"installation/installation-requirejs.md\"></au-markdown>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"jspm\" class=\"z-depth-1\">\n\t\t\t\t\t<au-markdown url=\"installation/installation-jspm.md\"></au-markdown>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"webpack\" class=\"z-depth-1\">\n\t\t\t\t\t<au-markdown url=\"installation/installation-webpack.md\"></au-markdown>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</section>-->\n</template>\n";

/***/ }),

/***/ "loading-indicator":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nprogress__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadingIndicator = /** @class */ (function () {
    function LoadingIndicator(eventAggregator) {
        this.eventAggregator = eventAggregator;
        eventAggregator.subscribe("router:navigation:processing", this.start);
        eventAggregator.subscribe("router:navigation:complete", this.done);
    }
    LoadingIndicator.prototype.start = function () {
        __WEBPACK_IMPORTED_MODULE_3_nprogress__["start"]();
        __WEBPACK_IMPORTED_MODULE_3_nprogress__["inc"]();
    };
    LoadingIndicator.prototype.done = function () {
        __WEBPACK_IMPORTED_MODULE_3_nprogress__["done"]();
    };
    LoadingIndicator = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["t" /* noView */],
        __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__["a" /* EventAggregator */]])
    ], LoadingIndicator);
    return LoadingIndicator;
}());



/***/ }),

/***/ "main":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["configure"] = configure;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_materialize_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_bootstrapper__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_framework__ = __webpack_require__("aurelia-framework");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




function configure(aurelia) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    aurelia.use
                        .standardConfiguration()
                        .developmentLogging()
                        .plugin('aurelia-materialize-bridge', function (plugin) {
                        plugin.useClickCounter().useAutoComplete().useBadge().useBreadcrumbs().useBox().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox()
                            .useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar()
                            .usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useScrollSpy().useSelect().useSidenav().useSlider()
                            .useSwitch().useTabs().useTapTarget().useTimePicker().useTooltip().useTransitions().useWaves().useWell();
                    })
                        .plugin('aurelia-validation');
                    aurelia.use.globalResources('./shared/collapse-panel');
                    aurelia.use.globalResources('./shared/markdown');
                    aurelia.use.globalResources('./shared/logger');
                    aurelia.use.globalResources('./shared/au-code');
                    aurelia.use.globalResources('./shared/sampleValueConverters');
                    return [4 /*yield*/, aurelia.start()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, new Promise(function (resolve) { return $(document).ready(function () { return resolve(); }); })];
                case 2:
                    _a.sent();
                    aurelia.setRoot('app');
                    return [2 /*return*/];
            }
        });
    });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ "materialize.d":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Typescript emitted no output for C:\\Dev\\aurelia-materialize-bridge\\sample\\src\\materialize.d.ts.\n    at successLoader (C:\\Dev\\aurelia-materialize-bridge\\sample\\node_modules\\ts-loader\\dist\\index.js:47:15)\n    at Object.loader (C:\\Dev\\aurelia-materialize-bridge\\sample\\node_modules\\ts-loader\\dist\\index.js:29:12)");

/***/ }),

/***/ "nav-bar":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBar = /** @class */ (function () {
    function NavBar() {
        this.router = null;
    }
    NavBar.prototype.attached = function () {
        $(".button-collapse").sideNav();
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */])
    ], NavBar.prototype, "router", void 0);
    return NavBar;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ "nav-bar.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./route-highlight\"></require>\n\n  <md-navbar md-fixed=\"true\">\n    <a md-sidenav-collapse=\"ref.bind: sideNav;\" class=\"left hide-on-large-only\" style=\"cursor: pointer; padding: 0 10px;\"><i class=\"material-icons\">menu</i></a>\n    <a href=\"#/samples/navbar\" class=\"brand-logo right\"><span class=\"flow-text\">${router.title}</span></a>\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n      <li md-waves route-highlight=\"routes: about\">\n        <a route-href=\"route: about\">About</a>\n      </li>\n\n      <!-- <li md-waves route-highlight=\"routes: installation\">\n        <a route-href=\"route: installation\">Installation</a>\n      </li> -->\n\n      <li md-waves route-highlight=\"routes: project-status\">\n        <a route-href=\"route: project-status\">Components</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/installation.html\" target=\"_blank\">Installation</a>\n      </li>\n\n<!--   <li route-highlight=\"routes: theme\">\n        <a route-href=\"route: theme\">Theme</a>\n      </li> -->\n\n      <!-- <li md-waves route-highlight=\"routes: help\">\n        <a route-href=\"route: help;\">Docs</a>\n      </li> -->\n\n      <li md-waves>\n        <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/\" target=\"_blank\">Docs</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: support\">\n        <a route-href=\"route: support;\">Support</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge\" target=\"_blank\">GitHub</a>\n      </li>\n    </ul>\n  </md-navbar>\n  <md-sidenav md-close-on-click=\"true\" view-model.ref=\"sideNav\">\n    <ul>\n      <li md-waves route-highlight=\"routes: about\">\n        <a route-href=\"route: about\">About</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: installation\">\n        <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/installation.html\" target=\"_blank\">Installation</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: project-status\">\n        <a route-href=\"route: project-status\">Components</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: help\">\n        <a route-href=\"route: help;\">Docs</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: support\">\n        <a route-href=\"route: support;\">Support</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge\" target=\"_blank\">GitHub</a>\n      </li>\n    </ul>\n  </md-sidenav>\n</template>\n";

/***/ }),

/***/ "project-status/controls":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_component_service__ = __webpack_require__("shared/component-service");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Controls = /** @class */ (function () {
    function Controls(componentService) {
        this.categories = componentService.getIterableComponents();
    }
    Controls = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_component_service__["ComponentService"]])
    ], Controls);
    return Controls;
}());



/***/ }),

/***/ "project-status/controls.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(83);
exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".control-info.wip {\n  background: url(" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../images/orange.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + ") left center no-repeat;\n}\n\n.control-info.done {\n  background: url(" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../images/blue.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + ") left center no-repeat;\n}\n\n.control-info {\n  padding-left: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "project-status/controls.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./controls.css\"></require>\n  <section>\n  <div class=\"row\">\n   <div class=\"col s12\">\n     <h4>Component catalog</h4>\n        <div>\n           <!-- page title - single column -->\n           <div class=\"row\">\n             <div class=\"col s6 m4 l2\" style=\"font-size:18px\">\n               <img src=\"" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../images/blue.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "\">\n                 implemented controls\n               </div>\n               <div class=\"col s6 m4 l2\" style=\"font-size:18px\">\n                 <img src=\"" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../images/orange.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "\">\n                 controls in development\n             </div>\n           </div>\n       <div class=\"row\">\n\n         <div class=\"col s12 m3 l2\" repeat.for=\"category of categories\">\n           <md-card md-title=\"${category.title}\">\n             <div repeat.for=\"ctrl of category.controls\" class=\"control-info ${ ctrl.status }\">\n               <a if.bind=\"ctrl.link\" href=\"${ ctrl.link }\">${ ctrl.title }</a>\n               <span if.bind=\"!ctrl.link\">${ ctrl.title }</span>\n             </div>\n           </md-card>\n         </div>\n\n       </div>\n </div>\n </div>\n </div>\n </section>\n</template>\n";

/***/ }),

/***/ "route-highlight":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHighlight", function() { return RouteHighlight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteHighlight = /** @class */ (function () {
    function RouteHighlight(element, router, eventAggregator) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.eventAggregator = eventAggregator;
        this.element = element;
        this.router = router;
        this.subscription = this.eventAggregator.subscribe("router:navigation:complete", function () { return _this.refresh(); });
    }
    RouteHighlight.prototype.routesChanged = function () {
        this.refresh();
    };
    RouteHighlight.prototype.refresh = function () {
        var instruction = this.router.currentInstruction;
        var isActive = false;
        if (instruction) {
            var activeRoute = instruction.config.name;
            if (Array.isArray(this.routes)) {
                isActive = this.routes.includes(activeRoute);
            }
            else {
                isActive = this.routes === activeRoute;
            }
        }
        if (isActive) {
            this.highlight();
        }
        else {
            this.unhighlight();
        }
    };
    RouteHighlight.prototype.highlight = function () {
        // jQuery(this.element).addClass('active');
        this.element.classList.add("active");
    };
    RouteHighlight.prototype.unhighlight = function () {
        // jQuery(this.element).removeClass('active');
        this.element.classList.remove("active");
    };
    RouteHighlight.prototype.detached = function () {
        if (this.subscription) {
            this.subscription.dispose();
        }
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", Object)
    ], RouteHighlight.prototype, "routes", void 0);
    RouteHighlight = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* autoinject */],
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["h" /* customAttribute */])("route-highlight"),
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__["a" /* EventAggregator */]])
    ], RouteHighlight);
    return RouteHighlight;
}());



/***/ }),

/***/ "samples/breadcrumbs/basic-use":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class BasicUse { }
/* harmony export (immutable) */ __webpack_exports__["BasicUse"] = BasicUse;



/***/ }),

/***/ "samples/breadcrumbs/basic-use.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <div>\n    <md-breadcrumbs></md-breadcrumbs>\n  </div>\n  <div>\n    If you'd like to see breadcrumbs navigation, click on the \"second-target\"\n    and click on \"Breadcrumbs\" there to return here.\n  </div>\n</template>\n";

/***/ }),

/***/ "samples/breadcrumbs/basic-use.md":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| ##### Usage explanation\n| \n| The &lt;md-breadcrumbs&gt; custom element reads the top level router and displays a breadcrumb for each route fragment.");

/***/ }),

/***/ "samples/breadcrumbs/index":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '@' (4:0)\nYou may need an appropriate loader to handle this file type.\n| import { Registry } from 'shared/registry';\n| \n| @inject(Registry)\n| @useView('shared/showcase.html')\n| export class Index {");

/***/ }),

/***/ "samples/breadcrumbs/registry.json":
/***/ (function(module, exports) {

module.exports = {"title":"Breadcrumbs","samples":{"basic-use":{"route":["","basic-use"],"files":["html","md"]},"second-target":{"route":"second-target","files":["html"]}}}

/***/ }),

/***/ "samples/breadcrumbs/second-target":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class BasicUse { }
/* harmony export (immutable) */ __webpack_exports__["BasicUse"] = BasicUse;



/***/ }),

/***/ "samples/breadcrumbs/second-target.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <div>\n    <md-breadcrumbs></md-breadcrumbs>\n  </div>\n  <div>\n    If you'd like to see breadcrumbs navigation, click on \"Breadcrumbs\" to\n    return to \"basic-use\".\n  </div>\n</template>\n";

/***/ }),

/***/ "samples/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_component_service__ = __webpack_require__("shared/component-service");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Index = /** @class */ (function () {
    function Index(componentService) {
        this.componentService = componentService;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = this.componentService.getRouterConfig();
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_component_service__["ComponentService"]])
    ], Index);
    return Index;
}());



/***/ }),

/***/ "samples/index.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./menu\"></require>\n  <menu></menu>\n  <router-view></router-view>\n</template>\n";

/***/ }),

/***/ "samples/menu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_component_service__ = __webpack_require__("shared/component-service");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_logging__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_framework__ = __webpack_require__("aurelia-framework");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Menu = /** @class */ (function () {
    function Menu(element, componentService, eventAggregator, taskQueue) {
        var _this = this;
        this.element = element;
        this.taskQueue = taskQueue;
        this.subscriptions = [];
        this.categories = componentService.getIterableComponents(true);
        this.subscriptions.push(eventAggregator.subscribe("router:navigation:complete", function (e) { return _this.routeChanged(e); }));
        this.log = Object(__WEBPACK_IMPORTED_MODULE_4_aurelia_logging__["getLogger"])("menu");
    }
    Menu.prototype.activeItemChanged = function (newValue, oldValue) {
        var _this = this;
        this.taskQueue.queueTask(function () {
            _this.log.debug("activeItemChanged", newValue, oldValue);
            // find parent header and expand it
            var header = $("li.active", _this.element).parents(".collapsible-body").siblings(".collapsible-header");
            if (header.length > 0) {
                header.addClass("active");
                header.parents("[md-collapsible]").get(0).au["md-collapsible"].viewModel.refresh();
            }
            else {
                _this.log.warn("activeItemChanged", "header not found");
            }
        });
    };
    Menu.prototype.setActive = function (ctrl) {
        this.activeItem = ctrl.link;
        return true;
    };
    Menu.prototype.routeChanged = function (e) {
        this.log.debug("routeChanged", e);
        this.log.debug("routeChanged activeItem before", this.activeItem);
        var link = "#" + e.instruction.fragment;
        // this.activeItem = link.split('/').splice(0, 3).join('/');
        var tokens = link.split("/");
        var lastFragment = tokens.splice(2)[0].split("-")[0];
        tokens.push(lastFragment);
        this.activeItem = tokens.join("/");
        this.log.debug("routeChanged activeItem after", this.activeItem);
    };
    Menu.prototype.detached = function () {
        this.subscriptions.forEach(function (i) { return i.dispose(); });
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["o" /* bindable */],
        __metadata("design:type", Object)
    ], Menu.prototype, "activeItem", void 0);
    Menu = __decorate([
        __WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_3__shared_component_service__["ComponentService"], __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_5_aurelia_framework__["c" /* TaskQueue */]])
    ], Menu);
    return Menu;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ "samples/menu.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "menu md-sidenav .side-nav.fixed {\n  overflow: hidden;\n}\n\nmenu md-sidenav .side-nav.fixed:hover {\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "samples/menu.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./menu.css\"></require>\n  <style>\n    @media all and (min-width: 992px) {\n      header, main, footer {\n        padding-left: 300px;\n      }\n      md-navbar[md-fixed=\"true\"] nav {\n        padding-right: 300px;\n      }\n    }\n\n    @media all and (max-width: 992px) {\n        header, main, footer {\n            padding-left: 0;\n        }\n        md-navbar[md-fixed=\"true\"] nav {\n          padding-right: 0;\n        }\n    }\n\n    md-sidenav div.collapsible-body {\n      padding: 0;\n    }\n  </style>\n  <md-sidenav view-model.ref=\"sideNav\" md-fixed=\"true\" md-edge=\"left\">\n    <ul md-collapsible=\"accordion: true;\">\n      <li repeat.for=\"cat of categories\">\n        <div md-waves class=\"collapsible-header\">\n          <span>${ cat.title }</span>\n          <i class=\"material-icons right\">arrow_drop_down</i>\n        </div>\n        <div class=\"collapsible-body\">\n          <ul>\n            <template repeat.for=\"ctrl of cat.controls\">\n              <li md-waves=\"color: primary;\" if.bind=\"!!ctrl.link\" class=\"${ activeItem === ctrl.link ? 'active' : '' }\">\n                <a href.bind=\"ctrl.link\" click.delegate=\"setActive(ctrl)\">${ ctrl.title }<span show.bind=\"ctrl.status == 'wip'\" md-badge>WIP</span></a>\n              </li>\n            </template>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  </md-sidenav>\n</template>\n";

/***/ }),

/***/ "samples/sample-runner":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleRunner", function() { return SampleRunner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_http_client__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_task_queue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_templating__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_logging__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("settings");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SampleRunner = /** @class */ (function () {
    function SampleRunner(settings, templatingEngine, viewResources, taskQueue, http) {
        this.settings = settings;
        this.templatingEngine = templatingEngine;
        this.viewResources = viewResources;
        this.taskQueue = taskQueue;
        this.http = http;
        this.fakeRouter = { navigation: [] };
        this.loading = true;
        this.tabs = [];
        this.log = __WEBPACK_IMPORTED_MODULE_5_aurelia_logging__["getLogger"]("sample-runner");
    }
    SampleRunner.prototype.activate = function (params, route) {
        var sample = route.navModel.config.sample;
        var category = route.navModel.config.category;
        var baseModuleId = route.baseModuleId;
        this.router = route.navModel.router;
        this.routes = this.router.routes.filter(function (r) { return r.category === category && r.baseModuleId === baseModuleId; });
        this.fakeRouter.navigation = this.routes.map(function (r) { return r.navModel; });
        this.log.debug("activate sample", sample);
        this.log.debug("activate router", this.router);
        this.log.debug("activate route", route);
        this.log.debug("activate routes", this.routes);
        var cacheBust = Math.floor((Math.random() * 100000) + 1);
        sample.path = this.settings.gistProxy + "file-cache-bust/" + cacheBust + "/" + sample.gist + "/app";
        this.sample = sample;
        this.category = category;
        this.title = route.baseModuleTitle;
    };
    SampleRunner.prototype.attached = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = false;
                        return [4 /*yield*/, this.http.get(this.settings.gistProxy + "files/" + this.sample.gist)];
                    case 1:
                        response = _a.sent();
                        files = response.content;
                        this.sample.files = files;
                        this.updateTabs(files);
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SampleRunner.prototype.detached = function () {
        this.sample = undefined;
    };
    SampleRunner.prototype.determineActivationStrategy = function () {
        return __WEBPACK_IMPORTED_MODULE_2_aurelia_router__["d" /* activationStrategy */].replace;
    };
    SampleRunner.prototype.updateTabs = function (files) {
        var keys = Object.keys(files);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var fileName = keys_1[_i];
            var language = void 0;
            // look up extension, and what language to pass to PrismJS
            // for syntax highlighting
            var split = fileName.split(".");
            var ext = split[split.length - 1];
            switch (ext) {
                default:
                case "html":
                    language = "html";
                    break;
                case "js":
                    language = "javascript";
                    break;
                case "css":
                    language = "css";
                    break;
                case "md":
                    language = "markdown";
                    break;
            }
            this.tabs.push({ title: fileName, language: language, filename: fileName });
        }
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_4_aurelia_templating__["o" /* bindable */],
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_aurelia_router__["c" /* Router */])
    ], SampleRunner.prototype, "router", void 0);
    SampleRunner = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__settings__["Settings"], __WEBPACK_IMPORTED_MODULE_4_aurelia_templating__["j" /* TemplatingEngine */], __WEBPACK_IMPORTED_MODULE_4_aurelia_templating__["m" /* ViewResources */], __WEBPACK_IMPORTED_MODULE_3_aurelia_task_queue__["a" /* TaskQueue */],
            __WEBPACK_IMPORTED_MODULE_1_aurelia_http_client__["a" /* HttpClient */]])
    ], SampleRunner);
    return SampleRunner;
}());



/***/ }),

/***/ "samples/sample-runner.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".sample-runner md-card {\n  position: relative;\n}\n\n.sample-runner md-card .md-catalog__play-button {\n  position: absolute;\n  display: inline-block;\n  right: 24px;\n  top: 10px;\n}\n\n.sample-runner md-card .md-catalog__play-button i {\n  color: black;\n}\n", ""]);

// exports


/***/ }),

/***/ "samples/sample-runner.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./sample-runner.css\"></require>\n  <section>\n    <h4>${ title }</h4>\n  <div class=\"row sample-runner\">\n    <div class=\"col s12 m4 l2\">\n      <md-well router.bind=\"fakeRouter\"></md-well>\n    </div>\n    <div class=\"col s12 m8 l8\">\n      <md-card md-title.bind=\"sample.title\">\n        <a class=\"md-catalog__play-button\" md-button=\"flat: true;\" md-waves href=\"https://gist.run/?id=${sample.gist}\" show.bind=\"sample.gist\" target=\"_blank\">\n          <i class=\"left material-icons\">play_arrow</i>play\n        </a>\n        <md-progress md-type=\"circular\" md-size=\"small\" md-color=\"flashing\" show.bind=\"loading\"></md-progress>\n        <!--<div ref=\"sampleTarget\" show.bind=\"!loading\"></div>-->\n        <div ref=\"sampleTarget\" if.bind=\"!loading\">\n          <compose view-model.bind=\"sample.path\" compose.ref=\"composeVM\"></compose>\n        </div>\n      </md-card>\n      <ul if.bind=\"tabs.length > 0\" md-tabs class=\"z-depth-1\">\n        <li repeat.for=\"tab of tabs\"><a href.bind=\"'#tab' + $index\">${tab.title}</a></li>\n      </ul>\n      <div repeat.for=\"tab of tabs\" class=\"z-depth-1\" id.bind=\"'tab' + $index\">\n        <au-code if.bind=\"tab.language != 'markdown'\" language.bind=\"tab.language\" text.bind=\"getSampleFile(tab.filename)\"></au-code>\n        <au-markdown if.bind=\"tab.language == 'markdown'\" text.bind=\"getSampleFile(tab.filename)\"></au-markdown>\n      </div>\n    </div>\n  </div>\n  </section>\n</template>\n";

/***/ }),

/***/ "settings":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings() {
        this.primaryColor = "#ee6e73";
        this.accentColor = "#2bbbad";
        this.errorColor = "#f44336";
        this.gistProxy = "https://gist-serve.jeroenvinke.nl/";
    }
    return Settings;
}());



/***/ }),

/***/ "shared/au-code":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuCode", function() { return AuCode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
throw new Error("Cannot find module \"prism/themes/prism.css!\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_loader__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuCode = /** @class */ (function () {
    function AuCode(element, targetInstruction, loader) {
        this.element = element;
        this.targetInstruction = targetInstruction;
        this.loader = loader;
        this.html = targetInstruction.behaviorInstructions[0].html;
    }
    AuCode.prototype.urlChanged = function () {
        var _this = this;
        if (this.url) {
            this.loader.loadText(this.url)
                .then(function (text) {
                _this.html = text;
                _this.render();
            });
        }
        else {
            this.html = "";
            this.render();
        }
    };
    AuCode.prototype.textChanged = function () {
        if (this.text) {
            this.html = this.text;
            this.render();
        }
    };
    AuCode.prototype.attached = function () {
        this.render();
    };
    AuCode.prototype.render = function () {
        jQuery("pre", this.element).remove();
        var pre = document.createElement("pre");
        this.element.appendChild(pre);
        pre.innerHTML = __WEBPACK_IMPORTED_MODULE_1_prismjs__["highlight"](this.html, __WEBPACK_IMPORTED_MODULE_1_prismjs__["languages"][this.language]);
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], AuCode.prototype, "language", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], AuCode.prototype, "url", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], AuCode.prototype, "text", void 0);
    AuCode = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["l" /* processContent */])(function (compiler, resources, element, instruction) {
            parseCode(element, resources, instruction);
            return true;
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["i" /* customElement */])("au-code"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["j" /* noView */],
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* autoinject */],
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["b" /* TargetInstruction */], __WEBPACK_IMPORTED_MODULE_3_aurelia_loader__["a" /* Loader */]])
    ], AuCode);
    return AuCode;
}());

function parseCode(element, resources, instruction) {
    instruction.html = dedent(decodeHtml(element.innerHTML));
}
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function dedent(str) {
    var match = str.match(/^[ \t]*(?=\S)/gm);
    if (!match) {
        return str;
    }
    var indent = Math.min.apply(Math, match.map(function (el) {
        return el.length;
    }));
    var re = new RegExp("^[ \\t]{" + indent + "}", "gm");
    return indent > 0 ? str.replace(re, "") : str;
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ "shared/collapse-panel":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsePanel", function() { return CollapsePanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapsePanel = /** @class */ (function () {
    function CollapsePanel() {
        this.allowCollapse = false;
        this.collapsed = false;
        this.panelClass = "default";
    }
    CollapsePanel.prototype.toggle = function () {
        if (this.allowCollapse) {
            this.collapsed = !this.collapsed;
        }
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], CollapsePanel.prototype, "title", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], CollapsePanel.prototype, "footer", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", Boolean)
    ], CollapsePanel.prototype, "allowCollapse", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", Boolean)
    ], CollapsePanel.prototype, "collapsed", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], CollapsePanel.prototype, "panelClass", void 0);
    return CollapsePanel;
}());



/***/ }),

/***/ "shared/collapse-panel.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <div>\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</template>\n";

/***/ }),

/***/ "shared/component-service":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentService", function() { return ComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_json__ = __webpack_require__("shared/components.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_json__);


var ComponentService = /** @class */ (function () {
    function ComponentService() {
        this.components = __WEBPACK_IMPORTED_MODULE_1__components_json__;
        this.log = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]("ComponentService");
    }
    ComponentService.prototype.transformToMap = function (obj) {
        var map = new Map();
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                if (typeof value === "object") {
                    map.set(key, this.transformToMap(value));
                }
                else {
                    map.set(key, value);
                }
            }
        }
        return map;
    };
    ComponentService.prototype.getIterableComponents = function (hideEmptyCategories) {
        var _this = this;
        if (hideEmptyCategories === void 0) { hideEmptyCategories = false; }
        var categories = [];
        Object.keys(this.components).forEach(function (categoryTitle) {
            if (categoryTitle !== "default") {
                var category_1 = { title: categoryTitle, controls: [] };
                var jsonCategory_1 = _this.components[categoryTitle];
                Object.keys(jsonCategory_1).forEach(function (moduleTitle) {
                    var mdl = jsonCategory_1[moduleTitle];
                    var control = { title: moduleTitle, status: mdl.status, link: "" };
                    if (mdl.status && mdl.nav !== false) {
                        control.link = "#/samples/" + (mdl.moduleId || moduleTitle.toLowerCase());
                    }
                    category_1.controls.push(control);
                });
                if (!hideEmptyCategories || category_1.controls.some(function (c) { return !!c.link; })) {
                    categories.push(category_1);
                }
            }
        });
        return categories;
    };
    ComponentService.prototype.getRouterConfig = function () {
        var _this = this;
        var routes = [];
        Object.keys(this.components).forEach(function (categoryTitle) {
            var category = _this.components[categoryTitle];
            Object.keys(category).forEach(function (moduleTitle) {
                var mdl = category[moduleTitle];
                if (mdl.status && mdl.nav !== false) {
                    var shortModuleId_1 = mdl.moduleId || moduleTitle.toLowerCase();
                    var moduleId = "samples/" + shortModuleId_1 + "/index";
                    if (mdl.samples) {
                        var keys = Object.keys(mdl.samples);
                        keys.forEach(function (sampleName) {
                            var sample = mdl.samples[sampleName];
                            sample = _this.normalizeSample(sampleName, sample);
                            var route = {
                                name: shortModuleId_1 + "-" + sampleName,
                                route: shortModuleId_1 + "-" + sampleName,
                                moduleId: "./sample-runner",
                                title: sample.title,
                                sample: sample,
                                categoryTitle: categoryTitle,
                                baseModuleId: "" + shortModuleId_1,
                                baseModuleTitle: moduleTitle,
                                nav: true
                            };
                            _this.log.debug("added route", route);
                            routes.push(route);
                            if (sample.default) {
                                route = {
                                    name: shortModuleId_1,
                                    route: shortModuleId_1,
                                    redirect: route.route
                                };
                                _this.log.debug("added default route", route);
                                routes.push(route);
                            }
                        });
                    }
                    else {
                        _this.log.warn("DEPRECATED: component route has no gist:", moduleTitle, mdl);
                        routes.push({ name: shortModuleId_1, route: shortModuleId_1, moduleId: moduleId, moduleTitle: moduleTitle });
                    }
                }
            });
        });
        return routes;
    };
    ComponentService.prototype.normalizeSample = function (name, sample) {
        if (typeof sample !== "object") {
            sample = {
                gist: sample
            };
        }
        if (!sample.title) {
            sample.title = name.replace(/-/g, " ");
            sample.title = sample.title.charAt(0).toUpperCase() + sample.title.slice(1);
        }
        return sample;
    };
    return ComponentService;
}());



/***/ }),

/***/ "shared/components.json":
/***/ (function(module, exports) {

module.exports = {"Css":{"Color":{"status":"done","samples":{"basic-use":{"default":true,"gist":"7f03e2f74e1a96831b700da7b6a050e8"}}}},"Components":{"Badges":{"moduleId":"badge","status":"done","samples":{"basic-use":{"default":true,"gist":"1de36c8c3739a233656def9fb66b3ab0"},"badges-in-dropdown":"3199e3e3cf436ccadca30fcc4f0b45a2","badge-with-custom-caption":"7d087a011cf7a0c3341eae48eb1f4ed6"}},"Button":{"status":"done","samples":{"basic-use":{"default":true,"gist":"09534739133e8f53bbf5ad3fff6fa75a"},"fab":"8c5bcfc325dcced715e2ea5d70ff1b44","fab-fixed":"94c6cf6fd564e68dc2cac0952261b320","fab-fixed-toolbar":"1dd0131d47642edadf583e946e256f0b"}},"Breadcrumbs":{"status":"done"},"Cards":{"moduleId":"card","status":"done","samples":{"basic-use":{"default":true,"gist":"5e35028c92724d78aa477adbfe34f3e3"},"horizontal":"1ed99af2e41ecef67d4f4c9d33611267","image":"2fe5734dde84fe24de685003ab67a084","reveal":"960f62fcbf7c19ad4c0c59fac0925feb","sizes":"9b5e3552819324c043eddebef2dcb992","actions":"8ce0d3ac7ca2029f932c3dde1937fc6f"}},"Chips":{"moduleId":"chip","status":"done","samples":{"basic-use":{"default":true,"gist":"7f8c36b1151d5d43cad0d93ce4389e2f"},"editor":"88627b078c726f0918fd43571185d52e","events":"3e32f3ffbb10755250790636f569619e","autocomplete":"01dc072eba5c62144284eb14c9ff2265"}},"Collections":{"status":"done","samples":{"basic-use":{"default":true,"gist":"29f690ca24b736eb67b5f06345e607be"},"header":"a47ddce2fe222d86ae7c8f412037c3fa","secondary-content":"dc5c8a12f5748cb7fd030d3250d71872","avatar":"3379c238f3b37e075babbcc2fca528a9","selection":"7ba94af3f523959514751758bf66a333"}},"Footer":{"status":"done","samples":{"basic-use":{"default":true,"gist":"de26fe253ae9e20ed163222323900f8d"}}},"Navbar":{"status":"done","samples":{"basic-use":{"default":true,"gist":"7abdaa002d4052830cb6236e1d87b325"},"left-aligned-links":"780903e504bbc803999fcc3782dec4d9","centered-logo":"b9c58785b3a19f154ffb393c597da8e5","active-items":"fbc7a9807cb4123f6d5ec6114ff71cf7","dropdown-menu":"7243799e9e3a6a5d4a289ca601bb1b95","search-bar":"c6c775ff29ffb34ed6a873b034310713","tabs-in-navbar":"2ced7e8f51d41099e8a06bc371de7c53"}},"Pagination":{"status":"done","samples":{"basic-use":{"default":true,"gist":"06a4f271d48585ff49a82b37f7aee8e9"},"options":"1910179160e9270b57f2d255ffcdd31d","events":"2d5095a485d95ad283a96a3a3fd1e140"}},"Preloader":{"moduleId":"progress","status":"done","samples":{"basic-use":{"default":true,"gist":"a263209c99bd951d1e0e2c7a43f68944"},"circular":"5ab744b646350722f308fafc6dc74204"}}},"Javascript":{"Collapsible":{"status":"done","samples":{"basic-use":{"default":true,"gist":"11ad8a83b750f39bd0e9c6159d6861b4"},"accordion":"6fd3210550aef8ef490242e45c01e669","popout":"8ca123a0299c7bb7be32fb181d6d1644","open-close-callbacks":"24b0ae0562e766878eabbf3ced10d0df"}},"Dialogs (toast/tooltip)":{"moduleId":"dialogs","status":"done","samples":{"toast":{"default":true,"gist":"3551f49bbeccc4b6b4a2bd4b45e1ce91"},"tooltip":"9836bb6ec893e5a6dd34d36188cd900d","tooltip-html":"34ad6d0d91f227b9173680af1bc0308d"}},"Dropdown":{"status":"done","samples":{"basic-use":{"default":true,"gist":"445d76931fd5229a2520f17929d67e8f"},"options":"35cc55360682d5d740d6bf4f3aa0286e","repeat":"b46c02e4e301e6ba5eab731b2650953c"}},"Media (Box/Slider/Carousel)":{"moduleId":"media","status":"done","samples":{"box-basic":{"default":true,"title":"Material Box (basic)","gist":"8c2ec4a3f6f4ed266a27cb37fe3ec088"},"box-caption":{"title":"Material Box (caption)","gist":"acdacc6b6b30e0f10e1c5db677efc17b"},"slider-basic":{"title":"Slider (basic)","gist":"cb49940b2f840bf853346047f7ff6fe3"},"slider-fullscreen":{"title":"Slider (fullscreen)","gist":"20c53c5a53ad07eb55bd87e8912cb826"},"slider-api":{"title":"Slider (API)","gist":"1eeb9d5c09c45daccb7e08856c3ca6f0"},"slider-options":{"title":"Slider (options)","gist":"ccb2439c67c7aef7ae16985e4e938eb9"},"carousel-basic":{"title":"Carousel (basic)","gist":"8d3ddf3455390b673844cfd798af8892"},"carousel-slider":{"title":"Carousel (slider)","gist":"b8441d5a82e3988da406800cedda93a1"},"carousel-special":{"title":"Carousel (special)","gist":"059ade54a997afe7ac0f870f69ee58f7"}}},"Modals":{"status":"done","samples":{"basic-use":{"default":true,"gist":"e24f28f2d7bb9452f6cb494d087a2ecf"},"events":"780456926eb9b4eb0d9db2be3a1d123c","options":"ba05e0c18f6df96efc33cc59c544f6a0","manual-close":"7c9701cfc15d1020d418d55dd0620fca"}},"Parallax":{"status":"done","samples":{"basic-use":{"default":true,"gist":"586589a99303020b983a5d33b5bf9084"}}},"Pushpin":{"status":"done","samples":{"basic-use":{"default":true,"gist":"81cdeb5cd3c9da27418bd30e103e811e"}}},"Scrollfire":{"status":"done","samples":{"basic-use":{"default":true,"gist":"0f1efef050a770259a3dea53453e5842"}}},"Scrollspy":{"status":"done","samples":{"basic-use":{"default":true,"gist":"372e83ef3a44946b7b26896985091200"}}},"SideNav":{"status":"done","samples":{"basic-use":{"default":true,"gist":"ada7906badc1842d0141e7e16d01d58f"},"options":"d394011184cbd5d1df1edbfb3a1fa009","fixed-sidenav":"38098f4618ca84d3cc2710648afc7053","controller":"cfed100e08d04de0f4e480cee98bfac0","events":"c9cc3a3cbd22e47ab9ab9add89888fb6"}},"Tabs":{"status":"done","samples":{"basic-use":{"default":true,"gist":"33cf3252acea3c4363585170a9ed8482"},"events":"932f9f95c0c198f91bf91c45a0561a0f","api":"6a238e618806289a3800dd4560cf1959","tabs-in-navbar":"e0038b59a779f57f9079058c5910ce77","dynamic":"d0e8387e57ddd52e203bfe37a2bf03dd","swipeable":"28e13d1424552d4b5787c0c70141f9fc"}},"TapTarget":{"status":"done","samples":{"basic-use":{"default":true,"gist":"1f1e634267bcd81c07c6a617464c2191"}}},"Transitions":{"status":"done","samples":{"staggered-list":{"default":true,"gist":"c7da54fd63fabdc94384908e5fced05a"},"fadein-image":"ba296720c805e847aa82c7d5a933bfb6"}},"Waves":{"status":"done","samples":{"basic-use":{"default":true,"gist":"ccba8775351a611d31a72e0d8ddcaf53"},"colors":"0febae142f5c7950720ca8d2965ed094"}}},"Forms":{"Input fields":{"moduleId":"input","status":"done","samples":{"basic-use":{"default":true,"gist":"7f43a76e56cebd918067110634d730da"},"textarea":"9a3c06adf7e9587207d63b1148bad5ef","input-types":"d520ffe2c7ad795273f093a1dd19fa64","html5-validation":"47a37bcb9981da746361c2dc6c869a84","aurelia-validation":"59525172dc31afb0de610d0b174676a0","character-counter":"008631e09037fe0edf804368b75326e6","icon-prefixes":"e8dc60e7c50f7a10f9c4b6e261886906","placeholder":"0ea8becbd1ba5639b27637012fff76ef"}},"Select":{"status":"done","samples":{"basic-use":{"default":true,"gist":"1ac1e348fa4e362183d5706aaa01fcf7"},"multiple":"96f557b67eb2476825cd252fec9dc8c0","binding-to-objects":"ab6f81744f4b0fa8a93e509ad95604ff","refresh":"ac63c711d88089b5e98aa0dee6ed2c62","validation":"f3fe5a7dd8042ff110473ab8e3d4594e","filtered-repeat":"767feb33eeee670625180aaeac414c98","open-trigger":"84aa19b62f83ad66132e2eb84baecc10"}},"Radio buttons":{"moduleId":"radio","status":"done","samples":{"basic-use":{"default":true,"gist":"230dcede5b578b01d89d3d2664c05cc3"},"binding-to-objects":"a66a6be4d5710315db5d159c6acf78c9"}},"Checkbox/Switch":{"moduleId":"checkbox","status":"done","samples":{"basic-use":{"default":true,"gist":"88760ad04830c41fadfea9d3d1884790"},"filled-in":"ded51bc5f5c1212c15c3f68478809c71","switch":"b83ea7d57ff7b24e7414187714f9ebee","binding-to-objects":"c43a57beceefc217340710e80650ddf2","binding-with-matcher":"65a451de2e2d4a37602057c1af840ae8"}},"File input button":{"moduleId":"file","status":"done","samples":{"basic-use":{"default":true,"gist":"51595a0e932444adf5005f75827e0a48"},"multiple":"56b900abe758396c583d6698bcbced4c","events":"13a28317af7ec78e24367639fd25f054","disabled":"093a5617a5eb01a38f73c452cb9984fb"}},"Range":{"status":"done","samples":{"basic-use":{"default":true,"gist":"23a9e3edf0e4b47342949a845ae045bd"},"steps":"9dfb15ca72056748e8084192874e60b8","min-and-max":"74b1e19d51f7c386e300b7401c108ce0","events":"963f04789e322a393a81223902a4f463","range-with-input":"e86d166b4ba80cd90c28ebacc7cf90d5"}},"DatePicker":{"status":"done","samples":{"basic-use":{"default":true,"gist":"147373f37db88a8318fda1debf334e32"},"options":"e72cf616090742d644df7c64454d6907","advanced-options":"fbeec4d10efb7a20d19ff953850a35a9","validation":"43dc539ffe5d302b922a2abc14600b48","in-modal":"734d9dde3e55b3b8961d3371754e036c"}},"AutoComplete":{"status":"wip","samples":{"basic-use":{"default":true,"gist":"f0d0d2059b5c5f01970cd494260099fc"}}},"TimePicker":{"status":"wip","samples":{"basic-use":{"default":true,"gist":"dbc68795d93a7b32e90c898a068a1b67"}}}},"Contributions":{"Recipes":{"status":"wip","samples":{"autofocus":{"default":true,"gist":"84902f36468f914041ef1b2244ed6804"},"wait-cursor":"94945f3ead604a6b86ac2c318b51c4e9","datepicker-label":"975bb3889aaf8ba0622f5cd5affd61c6","prevent-collapsible-event":"dae9e6f50033374381b9d991f921b42c"}}}}

/***/ }),

/***/ "shared/i-category":
/***/ (function(module, exports) {



/***/ }),

/***/ "shared/i-components":
/***/ (function(module, exports) {



/***/ }),

/***/ "shared/i-module":
/***/ (function(module, exports) {



/***/ }),

/***/ "shared/i-sample":
/***/ (function(module, exports) {



/***/ }),

/***/ "shared/logger":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.attached = function () {
        this.overrideStyles();
    };
    Logger.prototype.log = function (message, isError, container) {
        var lastContainer = $(".console div:first", container);
        var counter = lastContainer.find(".count").detach();
        var lastMessage = lastContainer.text();
        var count = 1 * (parseInt(counter.text(), 10) || 1);
        lastContainer.append(counter);
        if (!lastContainer.length || message !== lastMessage) {
            $("<div" + (isError ? " class='error'" : "") + "/>")
                .css({
                marginTop: -24,
                backgroundColor: isError ? "#ffbbbb" : "#b2ebf2"
            })
                .html(message)
                .prependTo($(".console", container))
                .animate({ marginTop: 0 }, 300)
                .animate({ backgroundColor: isError ? "#ffdddd" : "#ffffff" }, 800);
        }
        else {
            count++;
            if (counter.length) {
                counter.html(count.toString());
            }
            else {
                lastContainer.html(lastMessage)
                    .append("<span class='count'>" + count + "</span>");
            }
        }
    };
    Logger.prototype.error = function (message) {
        this.log(message, true);
    };
    Logger.prototype.overrideStyles = function () {
        jQuery.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (i, attr) {
            jQuery.fx.step[attr] = function (fx) {
                if (!fx.state || typeof fx.end === typeof "") {
                    fx.start = getColor(fx.elem, attr);
                    fx.end = getRGB(fx.end);
                }
                fx.elem.style[attr] = ["rgb(", [
                        Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0),
                        Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0),
                        Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0)
                    ].join(","), ")"].join("");
            };
        });
    };
    return Logger;
}());

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/
// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
    var result;
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
    var color;
    do {
        color = jQuery.css(elem, attr);
        // Keep going until we find an element that has color, or we hit the body
        if (color && color !== "transparent" || jQuery.nodeName(elem, "body")) {
            break;
        }
        attr = "backgroundColor";
        elem = elem.parentNode;
    } while (elem);
    return getRGB(color);
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(0)))

/***/ }),

/***/ "shared/logger.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <div class=\"console\">\n  </div>\n</template>\n";

/***/ }),

/***/ "shared/markdown":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuMarkdown", function() { return AuMarkdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_showdown__);
throw new Error("Cannot find module \"google/code-prettify/run_prettify\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_showdown_prettify__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_showdown_prettify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_showdown_prettify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuMarkdown = /** @class */ (function () {
    function AuMarkdown(element, loader) {
        this.element = element;
        this.loader = loader;
        this.converter = new __WEBPACK_IMPORTED_MODULE_1_showdown__["Converter"]({ extensions: ["prettify"] });
    }
    AuMarkdown.prototype.urlChanged = function () {
        var _this = this;
        if (this.url) {
            this.loader.loadText(this.url)
                .then(function (text) {
                _this.element.innerHTML = _this.converter.makeHtml(text);
                PR.prettyPrint();
            }).then(function () {
                var event = new CustomEvent("loaded", {
                    bubbles: true
                });
                _this.element.dispatchEvent(event);
            });
        }
        else {
            this.element.innerHTML = "";
        }
    };
    AuMarkdown.prototype.textChanged = function (newValue) {
        if (newValue) {
            this.element.innerHTML = this.converter.makeHtml(newValue);
            PR.prettyPrint();
        }
        else {
            this.element.innerHTML = "";
        }
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], AuMarkdown.prototype, "url", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindable */],
        __metadata("design:type", String)
    ], AuMarkdown.prototype, "text", void 0);
    AuMarkdown = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["i" /* customElement */])("au-markdown"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["j" /* noView */],
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* autoinject */],
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__["a" /* Loader */]])
    ], AuMarkdown);
    return AuMarkdown;
}());



/***/ }),

/***/ "shared/sample-runner":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleRunner", function() { return SampleRunner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_framework__ = __webpack_require__("aurelia-framework");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SampleRunner = /** @class */ (function () {
    function SampleRunner(ea, taskQueue) {
        this.ea = ea;
        this.taskQueue = taskQueue;
    }
    SampleRunner.prototype.activate = function (params, route) {
        var sample = route.navModel.config.sample;
        if (!sample) {
            throw new Error("Route does not contain a 'sample' property");
        }
        this.sample = sample;
    };
    SampleRunner.prototype.restart = function () {
        var _this = this;
        var old = this.sample;
        this.sample = undefined;
        this.taskQueue.queueTask(function () {
            _this.sample = old;
        });
    };
    SampleRunner.prototype.determineActivationStrategy = function () {
        return __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["d" /* activationStrategy */].replace;
    };
    SampleRunner = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_3_aurelia_framework__["c" /* TaskQueue */]])
    ], SampleRunner);
    return SampleRunner;
}());



/***/ }),

/***/ "shared/sample-runner.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <section>\n    <div class=\"row\">\n      <div class=\"col s12 m10\">\n        <collapse-panel>\n          <md-card md-title.bind=\"sample.title\">\n            <compose view-model.bind=\"sample.path\"></compose>\n          </md-card>\n        </collapse-panel>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s12 m10\">\n        <md-card md-title=\"Code Preview\">\n          <div class=\"row\">\n            <ul md-tabs class=\"z-depth-1\">\n              <li show.bind=\"sample.html\" md-waves=\"color: primary;\"><a class=\"active\" href=\"#html\">Html</a></li>\n              <li show.bind=\"sample.js\" md-waves=\"color: primary;\"><a href=\"#js\">Javascript</a></li>\n              <li show.bind=\"sample.css\" md-waves=\"color: primary;\"><a href=\"#css\">Css</a></li>\n              <li show.bind=\"sample.json\" md-waves=\"color: primary;\"><a href=\"#json\">Json</a></li>\n              <li show.bind=\"sample.md\" md-waves=\"color: primary;\"><a href=\"#md\">Docs</a></li>\n            </ul>\n            <div id=\"html\" class=\"z-depth-1\">\n              <au-code language=\"markup\" url.bind=\"sample.html\"></au-code>\n            </div>\n            <div id=\"js\" class=\"z-depth-1\">\n              <au-code language=\"javascript\" url.bind=\"sample.js\"></au-code>\n            </div>\n            <div id=\"css\" class=\"z-depth-1\">\n              <au-code language=\"css\" url.bind=\"sample.css\"></au-code>\n            </div>\n            <div id=\"json\" class=\"z-depth-1\">\n              <au-code language=\"javascript\" url.bind=\"sample.json\"></au-code>\n            </div>\n            <div id=\"md\" class=\"z-depth-1\">\n              <au-markdown url.bind=\"sample.md\"></au-markdown>\n            </div>\n          </div>\n        </md-card>\n      </div>\n    </div>\n  </section>\n</template>\n";

/***/ }),

/***/ "shared/sampleValueConverters":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringifyValueConverter", function() { return StringifyValueConverter; });
var StringifyValueConverter = /** @class */ (function () {
    function StringifyValueConverter() {
    }
    StringifyValueConverter.prototype.toView = function (value) {
        return JSON.stringify(value);
    };
    return StringifyValueConverter;
}());



/***/ }),

/***/ "shared/showcase.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <!-- Page is shared by all widgets and sets up the sub-navigation pane -->\n  <section class=\"view-showcase\">\n      <h4>${ router.title }</h4>\n      <div class=\"row\">\n          <div class=\"col s12 m2\">\n              <md-well router.bind=\"router\"></md-well>\n          </div>\n          <div class=\"col s10\">\n              <router-view></router-view>\n          </div>\n      </div>\n  </section>\n</template>\n";

/***/ }),

/***/ "theme-selector/theme-selector":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSelector", function() { return ThemeSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("settings");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSelector = /** @class */ (function () {
    function ThemeSelector(settings) {
        this.settings = settings;
        this.themes = [
            // { value: 'black', name: 'Black', colors: [ '#0167cc', '#4698e9', '#272727' ]  },
            // { value: 'blueopal', name: 'Blue Opal', colors: [ '#076186', '#7ed3f6', '#94c0d2' ]  },
            // { value: 'bootstrap', name: 'Bootstrap', colors: [ '#3276b1', '#67afe9', '#fff' ]  },
            // { value: 'default', name: 'Default', colors: [ '#ef6f1c', '#e24b17', '#5a4b43' ]  },
            // { value: 'fiori', name: 'Fiori', colors: ['#007cc0', '#e6f2f9', '#f0f0f0'] },
            // { value: 'flat', name: 'Flat', colors: [ '#363940', '#2eb3a6', '#fff' ]  },
            // { value: 'highcontrast', name: 'High Contrast', colors: [ '#b11e9c', '#880275', '#1b141a' ]  },
            { value: "material", name: "Material", colors: ["#3f51b5", "#283593", "#fff"] }
            // { value: 'materialblack', name: 'Material Black', colors: ['#3f51b5', '#1c1c1c', '#4d4d4d'] },
            // { value: 'metro', name: 'Metro', colors: [ '#8ebc00', '#787878', '#fff' ]  },
            // { value: 'metroblack', name: 'Metro Black', colors: [ '#00aba9', '#0e0e0e', '#565656' ]  },
            // { value: 'moonlight', name: 'Moonlight', colors: [ '#ee9f05', '#40444f', '#212a33' ]  },
            // { value: 'nova', name: 'Nova', colors: ['#ff4350', '#00acc1', '#303553'] },
            // { value: 'office365', name: 'Office 365', colors: ['#0072c6', '#cde6f7', '#fff'] },
            // { value: 'silver', name: 'Silver', colors: [ '#298bc8', '#515967', '#eaeaec' ]  },
            // { value: 'uniform', name: 'Uniform', colors: [ '#666', '#ccc', '#fff' ]  }
        ];
    }
    ThemeSelector.prototype.selectTheme = function (theme) {
        var _this = this;
        jQuery("body").fadeOut(400, function () {
            _this.settings.activeTheme = theme.value;
            // this.themeManager.loadTheme(theme.value)
            // 	.then(() => jQuery("body").fadeIn());
        });
    };
    ThemeSelector = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings__["Settings"]])
    ], ThemeSelector);
    return ThemeSelector;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),

/***/ "theme-selector/theme-selector.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <div class=\"tc-theme-list\">\n      <div class=\"tc-column\">\n        <div repeat.for=\"theme of themes\" click.delegate=\"selectTheme(theme)\" class=\"tc-item ${settings.activeTheme == theme.value ? 'tc-item-selected' : ''}\">\n          <span repeat.for=\"color of theme.colors\" class=\"tc-color\" css=\"background-color: ${color}\"></span>\n          <span class=\"tc-name\">${theme.name}</span>\n        </div>\n      </div>\n  </div>\n</template>\n";

/***/ })

},[49]);
//# sourceMappingURL=app.js.map