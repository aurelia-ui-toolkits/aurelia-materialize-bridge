webpackJsonp([0],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "144e0ffcace17d2018881f95e7b89f97.jpg";

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "90030b133d3ea9e16d5dd081b3d81a63.jpg";

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9206b4a6d4f3401326e0e6297dfdf8af.jpg";

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9206b4a6d4f3401326e0e6297dfdf8af.jpg";

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d6d3d12dbdce9b232ff5d5b8fdb07bdf.jpg";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "63cd0bb2e81a1af1da46094aaada7f53.jpg";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "63f9d1233779f949c9fe540ac14d291d.jpg";

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "63f9d1233779f949c9fe540ac14d291d.jpg";

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66df37501c7fe8bfa8ac2219419c74ca.png";

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6ad1a6d8cd0242b24be43bdbe0433097.png";

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(107);
__webpack_require__(110);
module.exports = __webpack_require__(45);


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9fa2a66e01b3905db99f31c229eebde2.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "651a2a51814386ec19b8a5d516164718.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7ee9f9de5b416702a2b493c8c9cde3c0.png";

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

module.exports = "<template>\n  <section class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <ul md-tabs=\"fixed: true;\">\n          <li><a class=\"active\" href=\"#about\">What is Aurelia Materialize bridge?</a></li>\n          <li><a href=\"#example\">List - example of an Aurelia component</a></li>\n        </ul>\n      </div>\n    </div>\n    <section id=\"about\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <div style=\"margin:auto;text-align:center\">\n            <h1 class=\"text-lg\">Aurelia Materialize <i>Bridge</i></h1>\n            <h3>Material design HTML5 widgets - enhanced by Aurelia</h3>\n            <span>Version ${version}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 m4\">\n          <a href=\"http://aurelia.io\" target=\"_blank\"><img src=\"" + __webpack_require__(63) + "\" /></a>\n        </div>\n        <div class=\"col s12 m4\">\n          <img src=\"" + __webpack_require__(64) + "\" >\n        </div>\n        <div class=\"col s12 m4 center\">\n          <a href=\"http://www.materializecss.com\" target=\"_blank\"><img src=\"" + __webpack_require__(65) + "\" /></a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s12 center\" style=\"padding-top: 20px; padding-bottom:20px\">\n          <ul class=\"features\">\n            <li><h4>We've done the hard work for you</h4></li>\n            <li>Use Materialize components in your Aurelia application <i style=\"text-decoration:underline\">without writing any wrapper code</i></li>\n            <li>Powerful binding expressions <i>directly in your markup</i></li>\n            <li><a href=\"#/project-status\">See the catalog</a> or check out the example in the second tab</li>\n          </ul>\n        </div>\n      </div>\n    </section>\n    <section id=\"example\">\n      <div class=\"row\">\n        <div class=\"col s12\">\n          <div>\n            <h5>Hover over the avatar images to select an actor</h5>\n            <md-collection view-model.ref=\"list\">\n              <md-collection-item repeat.for=\"actor of actors\" class=\"avatar ${ selector.isSelected ? 'selected' : '' }\">\n                <md-collection-selector view-model.ref=\"selector\" item.bind=\"actor\" md-on-selection-changed.delegate=\"onSelectionChanged($event)\">\n                  <img src=\"" + __webpack_require__(31) + "\" alt=\"\" class=\"circle md-collection-selector__hover\">\n                </md-collection-selector>\n                <span class=\"accent-text title\">${actor.name}</span>\n                <p style=\"max-width: 80%;\">${actor.description}</p>\n                <div class=\"secondary-content\">\n                  <i class=\"material-icons\">send</i>\n                </div>\n              </md-collection-item>\n            </md-collection>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col s12\">\n        <md-card md-title=\"Console log\">\n          <logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\n        </md-card>\n      </div>\n    </div>\n    </section>\n  </section>\n</template>\n";

/***/ }),

/***/ "app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
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
            { name: "project-status", route: "project-status", title: "Components", redirect: "samples/catalog" },
            { name: "support", route: "help/support", moduleId: "help/support", title: "Support" },
            { name: "samples", route: "samples", moduleId: "./samples/index", title: "Samples" }
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

module.exports = "<template>\n\t<require from=\"materialize-css/dist/css/materialize.css\"></require>\n\t<require from=\"prismjs/themes/prism.css\"></require>\n  <require from=\"./loading-indicator\"></require>\n  <require from='./nav-bar'></require>\n  <require from=\"./color-switcher.html\"></require>\n  <require from=\"./app-colors.html\"></require>\n  <md-colors md-primary-color.bind=\"primaryColor\" md-accent-color.bind=\"accentColor\" md-error-color.bind=\"errorColor\"></md-colors>\n  <app-colors primary-color.bind=\"primaryColor\" accent-color.bind=\"accentColor\"></app-colors>\n  <loading-indicator></loading-indicator>\n  <header>\n    <nav-bar router.bind=\"router\"></nav-bar>\n  </header>\n    <main>\n\n      <div class=\"row\">\n        <div class=\"col s12 m3\">\n          <color-switcher primary-color.two-way=\"primaryColor\" accent-color.two-way=\"accentColor\" error-color.two-way=\"errorColor\"></color-switcher>\n        </div>\n      </div>\n\n      <div class=\"page-host\">\n        <router-view></router-view>\n      </div>\n    </main>\n    <footer>\n      <!-- placeholder footer -->\n    </footer>\n</template>\n";

/***/ }),

/***/ "color-switcher.html":
/***/ (function(module, exports) {

module.exports = "<template bindable=\"primaryColor, accentColor, errorColor\">\n  <ul md-collapsible>\n    <li>\n      <div class=\"collapsible-header\">\n        <i class=\"material-icons left\">arrow_drop_down</i>Color switcher\n      </div>\n      <div class=\"collapsible-body\" style=\"padding: 10px;\">\n        primary color:\n        <select md-select value.two-way=\"primaryColor\">\n          <option value=\"#ee6e73\">[Materialize] red</option>\n          <option value=\"#3f51b5\">[Paper] indigo</option>\n          <option value=\"#00bcd4\">[Material-UI] light blue</option>\n          <option value=\"#78909C\">[MuiCss] blue grey</option>\n          <option value=\"#4caf50\">green</option>\n          <option value=\"#ff9800\">orange</option>\n        </select>\n\n        accent color:\n        <select md-select value.two-way=\"accentColor\">\n          <option value=\"#009688\">[Materialize] teal</option>\n          <option value=\"#e91e63\">[Paper] pink</option>\n          <option value=\"#ff4081\">[Material-UI] pink</option>\n          <option value=\"#FF80AB\">[MuiCss] another pink</option>\n          <option value=\"#4caf50\">green</option>\n          <option value=\"#ff9800\">orange</option>\n        </select>\n\n        error color:\n        <select md-select value.two-way=\"errorColor\">\n          <option value=\"#f44336\">[default] red</option>\n          <option value=\"#D50000\">[Paper] red</option>\n          <option value=\"#4caf50\">[confusing] green</option>\n          <option value=\"#ff9800\">orange</option>\n        </select>\n      </div>\n    </li>\n  </ul>\n</template>\n";

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

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".doc-support h4 {\n  margin-top: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "help/support.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./support.css\"></require>\n  <div class=\"container doc-support\">\n    <h4>Gitter</h4>\n    <p>Do you need some help? We can help you out in our Gitter room.</p>\n    <a href=\"https://gitter.im/aurelia-ui-toolkits/aurelia-materialize-bridge?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge\" target=\"_blank\">\n      <img src=\"https://camo.githubusercontent.com/da2edb525cde1455a622c58c0effc3a90b9a181c/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667\" alt=\"Join the chat\" data-canonical-src=\"https://badges.gitter.im/Join%20Chat.svg\" style=\"max-width:100%;\">\n    </a>\n\n    <h4>Github</h4>\n    We also monitor <a href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues\" target=\"_blank\">issues</a> on Github.\n  </div>\n</template>\n";

/***/ }),

/***/ "loading-indicator":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nprogress__ = __webpack_require__(78);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_materialize_css__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_materialize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_bootstrapper__ = __webpack_require__(45);
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
                    aurelia.use.globalResources("shared/collapse-panel");
                    aurelia.use.globalResources("shared/au-markdown");
                    aurelia.use.globalResources("shared/logger");
                    aurelia.use.globalResources("shared/au-code");
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ "nav-bar":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(12);
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
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */])
    ], NavBar.prototype, "router", void 0);
    return NavBar;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ "nav-bar.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./route-highlight\"></require>\n\n  <md-navbar md-fixed=\"true\">\n    <a md-sidenav-collapse=\"ref.bind: sideNav;\" class=\"left hide-on-large-only\" style=\"cursor: pointer; padding: 0 10px;\"><i class=\"material-icons\">menu</i></a>\n    <a href=\"#/samples/navbar\" class=\"brand-logo right\"><span class=\"flow-text\">${router.title}</span></a>\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n      <li md-waves route-highlight=\"routes: about\">\n        <a route-href=\"route: about\">About</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: project-status\">\n        <a route-href=\"route: project-status\">Components</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/installation.html\" target=\"_blank\">Installation</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/\" target=\"_blank\">Docs</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: support\">\n        <a route-href=\"route: support;\">Support</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge\" target=\"_blank\">GitHub</a>\n      </li>\n    </ul>\n  </md-navbar>\n  <md-sidenav md-close-on-click=\"true\" view-model.ref=\"sideNav\">\n    <ul>\n      <li md-waves route-highlight=\"routes: about\">\n        <a route-href=\"route: about\">About</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: project-status\">\n        <a route-href=\"route: project-status\">Components</a>\n      </li>\n\t\t\t\n      <li md-waves route-highlight=\"routes: installation\">\n        <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/installation.html\" target=\"_blank\">Installation</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://aurelia-ui-toolkits.gitbooks.io/materialize-bridge-docs/content/\" target=\"_blank\">Docs</a>\n      </li>\n\n      <li md-waves route-highlight=\"routes: support\">\n        <a route-href=\"route: support;\">Support</a>\n      </li>\n\n      <li md-waves>\n        <a href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge\" target=\"_blank\">GitHub</a>\n      </li>\n    </ul>\n  </md-sidenav>\n</template>\n";

/***/ }),

/***/ "route-highlight":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHighlight", function() { return RouteHighlight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(12);
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
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", Object)
    ], RouteHighlight.prototype, "routes", void 0);
    RouteHighlight = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["j" /* customAttribute */])("route-highlight"),
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__["a" /* EventAggregator */]])
    ], RouteHighlight);
    return RouteHighlight;
}());



/***/ }),

/***/ "samples/badge/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/badge/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<ul class=\"collection\">\r\n\t\t\t<li class=\"collection-item\">Sent</li>\r\n\t\t\t<li class=\"collection-item\">Inbox<span md-badge=\"is-new: true;\">3</span></li>\r\n\t\t\t<li class=\"collection-item\">Spam</li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/badge/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<ul class=\"collection\">\r\n\t\t\t<li class=\"collection-item\">Sent</li>\r\n\t\t\t<li class=\"collection-item\">Inbox<span md-badge=\"is-new: true;\">3</span></li>\r\n\t\t\t<li class=\"collection-item\">Spam</li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/badge/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/badge/in-dropdown/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
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
    function App(toast) {
        this.toast = toast;
        this.toast = toast;
    }
    App.prototype.showToast = function (e) {
        this.toast.show("You clicked " + e.target.innerText, 4000);
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "samples/badge/in-dropdown/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".badge-dropdown-sample {\r\n  min-height: 150px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "samples/badge/in-dropdown/app.css.raw":
/***/ (function(module, exports) {

module.exports = ".badge-dropdown-sample {\r\n  min-height: 150px;\r\n}\r\n"

/***/ }),

/***/ "samples/badge/in-dropdown/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"badge-dropdown-sample\">\r\n\t\t<md-dropdown md-title=\"drop me\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1;\">drop me!</a>\r\n\t\t\t<ul id=\"dropdown1\">\r\n\t\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t\t<li><a click.trigger=\"showToast($event)\">two<span md-badge=\"is-new: true;\">3</span></a></li>\r\n\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t\t</ul>\r\n\t\t</md-dropdown>\r\n</template>\r\n";

/***/ }),

/***/ "samples/badge/in-dropdown/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"badge-dropdown-sample\">\r\n\t\t<md-dropdown md-title=\"drop me\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1;\">drop me!</a>\r\n\t\t\t<ul id=\"dropdown1\">\r\n\t\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t\t<li><a click.trigger=\"showToast($event)\">two<span md-badge=\"is-new: true;\">3</span></a></li>\r\n\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t\t</ul>\r\n\t\t</md-dropdown>\r\n</template>\r\n"

/***/ }),

/***/ "samples/badge/in-dropdown/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class App {\r\n\tconstructor(private toast: MdToastService) {\r\n\t\tthis.toast = toast;\r\n\t}\r\n\r\n\tshowToast(e) {\r\n\t\tthis.toast.show(`You clicked ${e.target.innerText}`, 4000);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/badge/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "in-dropdown"),
            _super.prototype.getRouteConfig.call(this, "with-custom-caption"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/badge/with-custom-caption/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
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

var App = /** @class */ (function () {
    function App() {
        this.spamCount = 131;
    }
    App.prototype.addSomeSpam = function () {
        this.spamCount += this.getRandomSpamAmount();
    };
    App.prototype.cleanSomeSpam = function () {
        this.spamCount -= this.getRandomSpamAmount();
        if (this.spamCount < 0) {
            this.spamCount = 0;
        }
    };
    Object.defineProperty(App.prototype, "spamCaption", {
        get: function () {
            var caption = null;
            if (this.spamCount > 100) {
                caption = "Spam overload!!!";
            }
            else if (this.spamCount > 80) {
                caption = "Spam level: critical.";
            }
            else if (this.spamCount > 30) {
                caption = "Spam level: concerning";
            }
            return caption;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.getRandomSpamAmount = function () {
        return Math.floor(Math.random() * 25) + 1;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", Number)
    ], App.prototype, "spamCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["i" /* computedFrom */])("spamCount"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], App.prototype, "spamCaption", null);
    return App;
}());



/***/ }),

/***/ "samples/badge/with-custom-caption/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<ul class=\"collection\">\r\n\t\t\t<li class=\"collection-item\">Sent</li>\r\n\t\t\t<li class=\"collection-item\">Inbox<span md-badge=\"is-new: true;\">3</span></li>\r\n\t\t\t<li class=\"collection-item\">Spam<span show.bind=\"spamCount > 0\" class=\"yellow black-text\" md-badge=\"is-new: true; caption.bind: spamCaption\">${spamCount}</span></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"actions\">\r\n\t\t<hr /> Add/Remove some emails to/from the Spam folder:\r\n\t\t<button md-button=\"flat: true;\" md-waves click.delegate=\"cleanSomeSpam()\">\r\n\t\t\t<i class=\"material-icons\">remove</i>\r\n\t\t</button>\r\n\t\t<button md-button=\"flat: true;\" md-waves click.delegate=\"addSomeSpam()\">\r\n\t\t\t<i class=\"material-icons\">add</i>\r\n\t\t</button>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/badge/with-custom-caption/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<ul class=\"collection\">\r\n\t\t\t<li class=\"collection-item\">Sent</li>\r\n\t\t\t<li class=\"collection-item\">Inbox<span md-badge=\"is-new: true;\">3</span></li>\r\n\t\t\t<li class=\"collection-item\">Spam<span show.bind=\"spamCount > 0\" class=\"yellow black-text\" md-badge=\"is-new: true; caption.bind: spamCaption\">${spamCount}</span></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class=\"actions\">\r\n\t\t<hr /> Add/Remove some emails to/from the Spam folder:\r\n\t\t<button md-button=\"flat: true;\" md-waves click.delegate=\"cleanSomeSpam()\">\r\n\t\t\t<i class=\"material-icons\">remove</i>\r\n\t\t</button>\r\n\t\t<button md-button=\"flat: true;\" md-waves click.delegate=\"addSomeSpam()\">\r\n\t\t\t<i class=\"material-icons\">add</i>\r\n\t\t</button>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/badge/with-custom-caption/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { bindable, computedFrom } from \"aurelia-framework\";\r\n\r\nexport class App {\r\n\t@bindable\r\n\tspamCount: number = 131;\r\n\r\n\taddSomeSpam() {\r\n\t\tthis.spamCount += this.getRandomSpamAmount();\r\n\t}\r\n\r\n\tcleanSomeSpam() {\r\n\t\tthis.spamCount -= this.getRandomSpamAmount();\r\n\r\n\t\tif (this.spamCount < 0) {\r\n\t\t\tthis.spamCount = 0;\r\n\t\t}\r\n\t}\r\n\r\n\t@computedFrom(\"spamCount\")\r\n\tget spamCaption() {\r\n\t\tlet caption = null;\r\n\r\n\t\tif (this.spamCount > 100) {\r\n\t\t\tcaption = \"Spam overload!!!\";\r\n\t\t} else if (this.spamCount > 80) {\r\n\t\t\tcaption = \"Spam level: critical.\";\r\n\t\t} else if (this.spamCount > 30) {\r\n\t\t\tcaption = \"Spam level: concerning\";\r\n\t\t}\r\n\r\n\t\treturn caption;\r\n\t}\r\n\r\n\tgetRandomSpamAmount(): number {\r\n\t\treturn Math.floor(Math.random() * 25) + 1;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/breadcrumbs/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/breadcrumbs/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-breadcrumbs></md-breadcrumbs>\r\n\t</div>\r\n\t<div>\r\n\t\tIf you'd like to see breadcrumbs navigation, click on the \"second-target\" and click on \"Breadcrumbs\" there to return here.\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/breadcrumbs/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-breadcrumbs></md-breadcrumbs>\r\n\t</div>\r\n\t<div>\r\n\t\tIf you'd like to see breadcrumbs navigation, click on the \"second-target\" and click on \"Breadcrumbs\" there to return here.\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/breadcrumbs/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/breadcrumbs/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "second-target"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/breadcrumbs/second-target/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/breadcrumbs/second-target/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-breadcrumbs></md-breadcrumbs>\r\n\t</div>\r\n\t<div>\r\n\t\tIf you'd like to see breadcrumbs navigation, click on \"Breadcrumbs\" to return to \"basic-use\".\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/breadcrumbs/second-target/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-breadcrumbs></md-breadcrumbs>\r\n\t</div>\r\n\t<div>\r\n\t\tIf you'd like to see breadcrumbs navigation, click on \"Breadcrumbs\" to return to \"basic-use\".\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/breadcrumbs/second-target/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/button/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.firstButtonEnabled = true;
        this.firstButtonRaised = true;
    }
    return App;
}());



/***/ }),

/***/ "samples/button/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<style>\r\n\t\tdiv.button-row {\r\n\t\t\tpadding: 5px 0;\r\n\t\t}\r\n\t</style>\r\n\t<div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"disabled.bind: !firstButtonEnabled; flat.bind: !firstButtonRaised\">\r\n\t\t\t\t<i class=\"left material-icons\">mode_edit</i>I'm a basic button</button>\r\n\t\t\t<button md-button=\"flat: true;\">I'm a flat button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"large: true;\">I'm a large button</button>\r\n\t\t\t<button md-button=\"flat: true; large: true;\">I'm a large flat button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"disabled: true;\">I'm a basic disabled button</button>\r\n\t\t\t<button md-button=\"disabled: true; flat: true;\">I'm a flat disabled button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button class=\"primary\">I'm a primary colored button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"flat: true;\" class=\"primary-text\">I'm a flat primary colored button</button>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<hr /> First button:\r\n\t\t\t<md-switch md-label-on=\"enabled\" md-label-off=\"disabled\" md-checked.bind=\"firstButtonEnabled\"></md-switch>\r\n\t\t\t<md-switch md-label-on=\"raised\" md-label-off=\"flat\" md-checked.bind=\"firstButtonRaised\"></md-switch>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/button/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<style>\r\n\t\tdiv.button-row {\r\n\t\t\tpadding: 5px 0;\r\n\t\t}\r\n\t</style>\r\n\t<div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"disabled.bind: !firstButtonEnabled; flat.bind: !firstButtonRaised\">\r\n\t\t\t\t<i class=\"left material-icons\">mode_edit</i>I'm a basic button</button>\r\n\t\t\t<button md-button=\"flat: true;\">I'm a flat button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"large: true;\">I'm a large button</button>\r\n\t\t\t<button md-button=\"flat: true; large: true;\">I'm a large flat button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"disabled: true;\">I'm a basic disabled button</button>\r\n\t\t\t<button md-button=\"disabled: true; flat: true;\">I'm a flat disabled button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button class=\"primary\">I'm a primary colored button</button>\r\n\t\t</div>\r\n\t\t<div class=\"button-row\">\r\n\t\t\t<button md-button=\"flat: true;\" class=\"primary-text\">I'm a flat primary colored button</button>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<hr /> First button:\r\n\t\t\t<md-switch md-label-on=\"enabled\" md-label-off=\"disabled\" md-checked.bind=\"firstButtonEnabled\"></md-switch>\r\n\t\t\t<md-switch md-label-on=\"raised\" md-label-off=\"flat\" md-checked.bind=\"firstButtonRaised\"></md-switch>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/button/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tfirstButtonEnabled = true;\r\n\tfirstButtonRaised = true;\r\n}\r\n"

/***/ }),

/***/ "samples/button/fab-fixed-toolbar/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/button/fab-fixed-toolbar/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div style=\"position: relative;\">\r\n\t\t\t<p>\r\n\t\t\t\tThe button on the right of this card is a FAB with absolute positioning.\r\n\t\t\t\t<br /> It has a child list of smaller buttons.\r\n\t\t\t\t<br /> These buttons transform into a toolbar when you click on the button, attaching to the bottom of its container (this\r\n\t\t\t\tcard).\r\n\t\t\t\t<div style=\"height: 100px;\">\r\n\t\t\t\t\t<!-- making some room for the toolbar -->\r\n\t\t\t\t</div>\r\n\t\t\t</p>\r\n\r\n\t\t\t<div class=\"fixed-action-btn toolbar\" style=\"position: absolute;\">\r\n\t\t\t\t<a md-button=\"floating: true; large: true;\" md-tooltip=\"position: bottom; text: edit;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: charts;\" md-waves=\"color: light;\" class=\"red\"><i class=\"material-icons\">insert_chart</i></a></li>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: quote;\" md-waves=\"color: light;\" class=\"yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: publish;\" md-waves=\"color: light;\" class=\"green\"><i class=\"material-icons\">publish</i></a></li>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: attach file;\" md-waves=\"color: light;\" class=\"blue\"><i class=\"material-icons\">attach_file</i></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/button/fab-fixed-toolbar/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div style=\"position: relative;\">\r\n\t\t\t<p>\r\n\t\t\t\tThe button on the right of this card is a FAB with absolute positioning.\r\n\t\t\t\t<br /> It has a child list of smaller buttons.\r\n\t\t\t\t<br /> These buttons transform into a toolbar when you click on the button, attaching to the bottom of its container (this\r\n\t\t\t\tcard).\r\n\t\t\t\t<div style=\"height: 100px;\">\r\n\t\t\t\t\t<!-- making some room for the toolbar -->\r\n\t\t\t\t</div>\r\n\t\t\t</p>\r\n\r\n\t\t\t<div class=\"fixed-action-btn toolbar\" style=\"position: absolute;\">\r\n\t\t\t\t<a md-button=\"floating: true; large: true;\" md-tooltip=\"position: bottom; text: edit;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: charts;\" md-waves=\"color: light;\" class=\"red\"><i class=\"material-icons\">insert_chart</i></a></li>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: quote;\" md-waves=\"color: light;\" class=\"yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: publish;\" md-waves=\"color: light;\" class=\"green\"><i class=\"material-icons\">publish</i></a></li>\r\n\t\t\t\t\t<li><a md-tooltip=\"position: top; text: attach file;\" md-waves=\"color: light;\" class=\"blue\"><i class=\"material-icons\">attach_file</i></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/button/fab-fixed-toolbar/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/button/fab-fixed/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/button/fab-fixed/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div style=\"position: relative;\">\r\n\t\t\t<p>\r\n\t\t\t\tThe button on the right of this card is a FAB with absolute positioning.\r\n\t\t\t\t<br /> It has a child list of smaller buttons.\r\n\t\t\t\t<br /> These buttons appear when you hover over the FAB.\r\n\t\t\t</p>\r\n\t\t\t<p style=\"margin-top: 15px;\">\r\n\t\t\t\tHave a look at the lower right edge of the window.\r\n\t\t\t\t<br /> The button has a fixed positioning and a child list of smaller buttons.\r\n\t\t\t\t<br /> These buttons appear when you hover over the FAB.\r\n\t\t\t</p>\r\n\r\n\t\t\t<div class=\"fixed-action-btn horizontal\" style=\"position: absolute; display: inline-block; right: 24px; top: 10px;\">\r\n\t\t\t\t<a md-button=\"floating: true; large: true;\" md-tooltip=\"position: bottom; text: edit;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: charts;\" md-waves=\"color: light; circle: true;\" class=\"red\"><i class=\"material-icons\">insert_chart</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: quote;\" md-waves=\"color: light; circle: true;\" class=\"yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: publish;\" md-waves=\"color: light; circle: true;\" class=\"green\"><i class=\"material-icons\">publish</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: attach file;\" md-waves=\"color: light; circle: true;\" class=\"blue\"><i class=\"material-icons\">attach_file</i></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\r\n\t\t\t\t<a md-button=\"floating: true; large: true;\" md-tooltip=\"position: left; text: edit;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: charts;\" md-waves=\"color: light; circle: true;\" class=\"red\"><i class=\"material-icons\">insert_chart</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: quote;\" md-waves=\"color: light; circle: true;\" class=\"yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: publish;\" md-waves=\"color: light; circle: true;\" class=\"green\"><i class=\"material-icons\">publish</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: attach file;\" md-waves=\"color: light; circle: true;\" class=\"blue\"><i class=\"material-icons\">attach_file</i></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/button/fab-fixed/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div style=\"position: relative;\">\r\n\t\t\t<p>\r\n\t\t\t\tThe button on the right of this card is a FAB with absolute positioning.\r\n\t\t\t\t<br /> It has a child list of smaller buttons.\r\n\t\t\t\t<br /> These buttons appear when you hover over the FAB.\r\n\t\t\t</p>\r\n\t\t\t<p style=\"margin-top: 15px;\">\r\n\t\t\t\tHave a look at the lower right edge of the window.\r\n\t\t\t\t<br /> The button has a fixed positioning and a child list of smaller buttons.\r\n\t\t\t\t<br /> These buttons appear when you hover over the FAB.\r\n\t\t\t</p>\r\n\r\n\t\t\t<div class=\"fixed-action-btn horizontal\" style=\"position: absolute; display: inline-block; right: 24px; top: 10px;\">\r\n\t\t\t\t<a md-button=\"floating: true; large: true;\" md-tooltip=\"position: bottom; text: edit;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: charts;\" md-waves=\"color: light; circle: true;\" class=\"red\"><i class=\"material-icons\">insert_chart</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: quote;\" md-waves=\"color: light; circle: true;\" class=\"yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: publish;\" md-waves=\"color: light; circle: true;\" class=\"green\"><i class=\"material-icons\">publish</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: bottom; text: attach file;\" md-waves=\"color: light; circle: true;\" class=\"blue\"><i class=\"material-icons\">attach_file</i></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\r\n\t\t\t\t<a md-button=\"floating: true; large: true;\" md-tooltip=\"position: left; text: edit;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: charts;\" md-waves=\"color: light; circle: true;\" class=\"red\"><i class=\"material-icons\">insert_chart</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: quote;\" md-waves=\"color: light; circle: true;\" class=\"yellow darken-1\"><i class=\"material-icons\">format_quote</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: publish;\" md-waves=\"color: light; circle: true;\" class=\"green\"><i class=\"material-icons\">publish</i></a></li>\r\n\t\t\t\t\t<li><a md-button=\"floating: true;\" md-tooltip=\"position: left; text: attach file;\" md-waves=\"color: light; circle: true;\" class=\"blue\"><i class=\"material-icons\">attach_file</i></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/button/fab-fixed/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/button/fab/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.pulse = false;
    }
    return App;
}());



/***/ }),

/***/ "samples/button/fab/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<!--<require from=\"materialize/dist/css/materialize.css\"></require>-->\r\n\t<div>\r\n\t\t<a md-button=\"floating: true; large: true; pulse.bind: pulse;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t</a>\r\n\t\t<a md-button=\"floating: true; pulse.bind: pulse;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t<i class=\"material-icons\">thumb_up</i>\r\n\t\t</a>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\t<md-checkbox md-checked.bind=\"pulse\">add pulse</md-checkbox>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/button/fab/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<!--<require from=\"materialize/dist/css/materialize.css\"></require>-->\r\n\t<div>\r\n\t\t<a md-button=\"floating: true; large: true; pulse.bind: pulse;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t<i class=\"large material-icons\">mode_edit</i>\r\n\t\t</a>\r\n\t\t<a md-button=\"floating: true; pulse.bind: pulse;\" md-waves=\"color: light; circle: true;\">\r\n\t\t\t<i class=\"material-icons\">thumb_up</i>\r\n\t\t</a>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\t<md-checkbox md-checked.bind=\"pulse\">add pulse</md-checkbox>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/button/fab/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tpulse = false;\r\n}\r\n"

/***/ }),

/***/ "samples/button/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "fab"),
            _super.prototype.getRouteConfig.call(this, "fab-fixed"),
            _super.prototype.getRouteConfig.call(this, "fab-fixed-toolbar"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/card/actions/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/card/actions/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<md-card class=\"col s4\" md-title=\"Card title\" md-action=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has some actions.\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"action\">\r\n\t\t\t\t<a href=\"#\">This is a link 1</a>\r\n\t\t\t\t<a href=\"#\">This is a link 2</a>\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s4\" md-title=\"Card title\" md-reveal=\"true\" md-action=\"true\" md-sticky-action=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and the actions are always visible (sticky).\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"action\">\r\n\t\t\t\t<a href=\"#\">This is a link 1</a>\r\n\t\t\t\t<a href=\"#\">This is a link 2</a>\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s4\" md-title=\"Card title\" md-reveal=\"true\" md-action=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and the actions are visible only when the card isn't revealed.\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"action\">\r\n\t\t\t\t<a href=\"#\">This is a link 1</a>\r\n\t\t\t\t<a href=\"#\">This is a link 2</a>\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/card/actions/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<md-card class=\"col s4\" md-title=\"Card title\" md-action=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has some actions.\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"action\">\r\n\t\t\t\t<a href=\"#\">This is a link 1</a>\r\n\t\t\t\t<a href=\"#\">This is a link 2</a>\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s4\" md-title=\"Card title\" md-reveal=\"true\" md-action=\"true\" md-sticky-action=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and the actions are always visible (sticky).\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"action\">\r\n\t\t\t\t<a href=\"#\">This is a link 1</a>\r\n\t\t\t\t<a href=\"#\">This is a link 2</a>\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s4\" md-title=\"Card title\" md-reveal=\"true\" md-action=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and the actions are visible only when the card isn't revealed.\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"action\">\r\n\t\t\t\t<a href=\"#\">This is a link 1</a>\r\n\t\t\t\t<a href=\"#\">This is a link 2</a>\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/card/actions/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/card/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/card/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-card md-title=\"Card title\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n";

/***/ }),

/***/ "samples/card/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-card md-title=\"Card title\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n"

/***/ }),

/***/ "samples/card/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/card/horizontal/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/card/horizontal/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<md-card md-horizontal=\"true\" md-image=\"" + __webpack_require__(20) + "\" md-title=\"Card title\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n";

/***/ }),

/***/ "samples/card/horizontal/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-card md-horizontal=\"true\" md-image=\"../../../../images/card-sample-1.jpg\" md-title=\"Card title\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n"

/***/ }),

/***/ "samples/card/horizontal/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/card/image/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/card/image/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<md-card md-image=\"" + __webpack_require__(20) + "\" md-title=\"Card title\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n";

/***/ }),

/***/ "samples/card/image/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-card md-image=\"../../../../images/card-sample-1.jpg\" md-title=\"Card title\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n"

/***/ }),

/***/ "samples/card/image/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/card/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "actions"),
            _super.prototype.getRouteConfig.call(this, "horizontal"),
            _super.prototype.getRouteConfig.call(this, "image"),
            _super.prototype.getRouteConfig.call(this, "reveal"),
            _super.prototype.getRouteConfig.call(this, "sizes"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/card/reveal/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/card/reveal/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\" md-reveal=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and no image\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\" md-reveal=\"true\" md-image=\"" + __webpack_require__(20) + "\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and image\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\" md-image=\"" + __webpack_require__(20) + "\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal false and image.\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\">\r\n\t\t\t<div>\r\n\t\t\t\tThis is simple card\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/card/reveal/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\" md-reveal=\"true\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and no image\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\" md-reveal=\"true\" md-image=\"../../../../images/card-sample-1.jpg\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal true and image\r\n\t\t\t</div>\r\n\t\t\t<div slot=\"reveal-text\">\r\n\t\t\t\tReveal Text\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\" md-image=\"../../../../images/card-sample-1.jpg\">\r\n\t\t\t<div>\r\n\t\t\t\tThis card has reveal false and image.\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t\t<md-card class=\"col s3\" md-title=\"Card title\" md-size.bind=\"size\">\r\n\t\t\t<div>\r\n\t\t\t\tThis is simple card\r\n\t\t\t</div>\r\n\t\t</md-card>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/card/reveal/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/card/sizes/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.size = "";
    }
    return App;
}());



/***/ }),

/***/ "samples/card/sizes/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<span class=\"accent-text\">Select size:</span>\r\n\t\t<select md-select value.two-way=\"size\">\r\n\t\t\t<option value=\"\">no size</option>\r\n\t\t\t<option value=\"small\">small</option>\r\n\t\t\t<option value=\"medium\">medium</option>\r\n\t\t\t<option value=\"large\">large</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<md-card md-image=\"" + __webpack_require__(20) + "\" md-title=\"Card title\" md-size.bind=\"size\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n";

/***/ }),

/***/ "samples/card/sizes/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<span class=\"accent-text\">Select size:</span>\r\n\t\t<select md-select value.two-way=\"size\">\r\n\t\t\t<option value=\"\">no size</option>\r\n\t\t\t<option value=\"small\">small</option>\r\n\t\t\t<option value=\"medium\">medium</option>\r\n\t\t\t<option value=\"large\">large</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<md-card md-image=\"../../../../images/card-sample-1.jpg\" md-title=\"Card title\" md-size.bind=\"size\">\r\n\t\t<div>\r\n\t\t\tI am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup\r\n\t\t\tto use effectively.\r\n\t\t</div>\r\n\t</md-card>\r\n</template>\r\n"

/***/ }),

/***/ "samples/card/sizes/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tsize: string = \"\";\r\n}\r\n"

/***/ }),

/***/ "samples/catalog/catalog":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(12);
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
    function Controls(router) {
        this.router = router;
        this.categories = [];
    }
    Controls.prototype.attached = function () {
        var _this = this;
        this.router.routes.forEach(function (r) {
            if (!r.category) {
                return;
            }
            var category = _this.categories.find(function (x) { return x.title === r.category; });
            if (!category) {
                category = { title: r.category, routes: [] };
                _this.categories.push(category);
            }
            category.routes.push(r);
        });
    };
    Controls = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */]])
    ], Controls);
    return Controls;
}());



/***/ }),

/***/ "samples/catalog/catalog.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(32);
exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".control-info.wip {\n  background: url(" + escape(__webpack_require__(59)) + ") left center no-repeat;\n}\n\n.control-info.done {\n  background: url(" + escape(__webpack_require__(60)) + ") left center no-repeat;\n}\n\n.control-info {\n  padding-left: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ "samples/catalog/catalog.css.raw":
/***/ (function(module, exports) {

module.exports = ".control-info.wip {\n  background: url('../../../images/orange.png') left center no-repeat;\n}\n\n.control-info.done {\n  background: url('../../../images/blue.png') left center no-repeat;\n}\n\n.control-info {\n  padding-left: 15px;\n}\n"

/***/ }),

/***/ "samples/catalog/catalog.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n\t<require from=\"./catalog.css\"></require>\n\t<section>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12\">\n\t\t\t\t<h4>Component catalog</h4>\n\t\t\t\t<div>\n\t\t\t\t\t<!-- page title - single column -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col s6 m4 l2\" style=\"font-size:18px\">\n\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(60) + "\"> implemented controls\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col s6 m4 l2\" style=\"font-size:18px\">\n\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(59) + "\"> controls in development\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col s12 m3 l2\" repeat.for=\"category of categories\">\n\t\t\t\t\t\t\t<md-card md-title=\"${category.title}\">\n\t\t\t\t\t\t\t\t<div repeat.for=\"r of category.routes\" class=\"control-info ${r.status}\">\n\t\t\t\t\t\t\t\t\t<a route-href=\"route.bind: r.route\">${r.title}</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</md-card>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</template>\n";

/***/ }),

/***/ "samples/catalog/catalog.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\n\t<require from=\"./catalog.css\"></require>\n\t<section>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12\">\n\t\t\t\t<h4>Component catalog</h4>\n\t\t\t\t<div>\n\t\t\t\t\t<!-- page title - single column -->\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col s6 m4 l2\" style=\"font-size:18px\">\n\t\t\t\t\t\t\t<img src=\"../../../images/blue.png\"> implemented controls\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col s6 m4 l2\" style=\"font-size:18px\">\n\t\t\t\t\t\t\t<img src=\"../../../images/orange.png\"> controls in development\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col s12 m3 l2\" repeat.for=\"category of categories\">\n\t\t\t\t\t\t\t<md-card md-title=\"${category.title}\">\n\t\t\t\t\t\t\t\t<div repeat.for=\"r of category.routes\" class=\"control-info ${r.status}\">\n\t\t\t\t\t\t\t\t\t<a route-href=\"route.bind: r.route\">${r.title}</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</md-card>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</template>\n"

/***/ }),

/***/ "samples/catalog/catalog.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-dependency-injection\";\nimport { Router, RouteConfig } from \"aurelia-router\";\n\n@autoinject\nexport class Controls {\n\tconstructor(private router: Router) { }\n\n\tcategories: Array<{ title: string, routes: RouteConfig[] }> = [];\n\n\tattached() {\n\t\tthis.router.routes.forEach(r => {\n\t\t\tif (!r.category) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tlet category = this.categories.find(x => x.title === r.category);\n\t\t\tif (!category) {\n\t\t\t\tcategory = { title: r.category, routes: [] };\n\t\t\t\tthis.categories.push(category);\n\t\t\t}\n\t\t\tcategory.routes.push(r);\n\t\t});\n\t}\n}\n"

/***/ }),

/***/ "samples/chip/autocomplete/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.chips = [{ tag: "Apple" }, { tag: "Microsoft" }, { tag: "Google" }];
        this.autocompleteData = {
            Apple: null,
            Google: null,
            Microsoft: null
        };
    }
    return App;
}());



/***/ }),

/***/ "samples/chip/autocomplete/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div md-chips=\"data.bind: chips; autocomplete-data.bind: autocompleteData;\"></div>\r\n\t<div>\r\n\t\t<!-- chip data: ${chips|stringify} -->\r\n\t\tchip data:\r\n\t\t<ul>\r\n\t\t\t<li repeat.for=\"chip of chips\">\r\n        ${chip.tag}\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/chip/autocomplete/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div md-chips=\"data.bind: chips; autocomplete-data.bind: autocompleteData;\"></div>\r\n\t<div>\r\n\t\t<!-- chip data: ${chips|stringify} -->\r\n\t\tchip data:\r\n\t\t<ul>\r\n\t\t\t<li repeat.for=\"chip of chips\">\r\n        ${chip.tag}\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/chip/autocomplete/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tchips = [{ tag: \"Apple\" }, { tag: \"Microsoft\" }, { tag: \"Google\" }];\r\n\r\n\tautocompleteData = {\r\n\t\tApple: null,\r\n\t\tGoogle: null,\r\n\t\tMicrosoft: null\r\n\t};\r\n}\r\n"

/***/ }),

/***/ "samples/chip/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.logClose = function () {
        this.logger.log("chip closed");
    };
    return App;
}());



/***/ }),

/***/ "samples/chip/basic-use/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-chip md-close=\"false\">\r\n\t\t\t<img src=\"" + __webpack_require__(58) + "\" alt=\"Contact Person\"> Jane Doe\r\n\t\t</md-chip>\r\n\t\t<md-chip md-close=\"true\" close.trigger=\"logClose()\">\r\n\t\t\t<img src=\"" + __webpack_require__(58) + "\" alt=\"Contact Person\"> Jane Doe\r\n\t\t</md-chip>\r\n\t</div>\r\n\t<div>\r\n\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/chip/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-chip md-close=\"false\">\r\n\t\t\t<img src=\"../../../../images/chips-sample-1.jpg\" alt=\"Contact Person\"> Jane Doe\r\n\t\t</md-chip>\r\n\t\t<md-chip md-close=\"true\" close.trigger=\"logClose()\">\r\n\t\t\t<img src=\"../../../../images/chips-sample-1.jpg\" alt=\"Contact Person\"> Jane Doe\r\n\t\t</md-chip>\r\n\t</div>\r\n\t<div>\r\n\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/chip/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { Logger } from \"../../../shared/logger\";\r\n\r\nexport class App {\r\n\tlogger: Logger;\r\n\r\n\tlogClose() {\r\n\t\tthis.logger.log(\"chip closed\");\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/chip/editor/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.chips = [{ tag: "one" }, { tag: "two" }, { tag: "three" }];
    }
    App.prototype.addChip = function () {
        this.chips = this.chips.concat({ tag: "new chip" });
    };
    App.prototype.removeChip = function () {
        this.chips = this.chips.slice(0, this.chips.length - 1);
    };
    return App;
}());



/***/ }),

/***/ "samples/chip/editor/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<label>chips</label>\r\n\t<div md-chips=\"data.two-way: chips\"></div>\r\n\t<div repeat.for=\"chip of chips\">\r\n\t\t<p>${chip.tag}</p>\r\n\t</div>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"addChip()\">Add a chip</button>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"removeChip()\">Remove last chip</button>\r\n</template>\r\n";

/***/ }),

/***/ "samples/chip/editor/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<label>chips</label>\r\n\t<div md-chips=\"data.two-way: chips\"></div>\r\n\t<div repeat.for=\"chip of chips\">\r\n\t\t<p>${chip.tag}</p>\r\n\t</div>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"addChip()\">Add a chip</button>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"removeChip()\">Remove last chip</button>\r\n</template>\r\n"

/***/ }),

/***/ "samples/chip/editor/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\r\n\taddChip() {\r\n\t\tthis.chips = this.chips.concat({ tag: \"new chip\" });\r\n\t}\r\n\tremoveChip() {\r\n\t\tthis.chips = this.chips.slice(0, this.chips.length - 1);\r\n\t}\r\n\r\n\tchips = [{ tag: \"one\" }, { tag: \"two\" }, { tag: \"three\" }];\r\n}\r\n"

/***/ }),

/***/ "samples/chip/events/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.chips = [{ tag: "Apple" }, { tag: "Microsoft" }, { tag: "Google" }];
    }
    App.prototype.addChip = function () {
        this.chips = this.chips.concat({ tag: "new chip" });
    };
    App.prototype.removeChip = function () {
        this.chips = this.chips.slice(0, this.chips.length - 1);
    };
    App.prototype.logChange = function (detail) {
        this.logger.log("chips changed: " + JSON.stringify(detail));
    };
    App.prototype.logSelect = function (detail) {
        this.logger.log("chip selected: " + JSON.stringify(detail));
    };
    return App;
}());



/***/ }),

/***/ "samples/chip/events/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div md-chips=\"data.bind: chips; placeholder:+tag;\" change.delegate=\"logChange($event.detail)\" selected.delegate=\"logSelect($event.detail)\"></div>\r\n\t<div>\r\n\t\t<!-- chip data: ${chips|stringify} -->\r\n\t\tchip data:\r\n\t\t<ul>\r\n\t\t\t<li repeat.for=\"chip of chips\">\r\n        ${chip.tag}\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"addChip()\">Add a chip</button>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"removeChip()\">Remove last chip</button>\r\n\t<div>\r\n\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/chip/events/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div md-chips=\"data.bind: chips; placeholder:+tag;\" change.delegate=\"logChange($event.detail)\" selected.delegate=\"logSelect($event.detail)\"></div>\r\n\t<div>\r\n\t\t<!-- chip data: ${chips|stringify} -->\r\n\t\tchip data:\r\n\t\t<ul>\r\n\t\t\t<li repeat.for=\"chip of chips\">\r\n        ${chip.tag}\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"addChip()\">Add a chip</button>\r\n\t<button md-button md-waves=\"color: light;\" click.delegate=\"removeChip()\">Remove last chip</button>\r\n\t<div>\r\n\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/chip/events/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { Logger } from \"../../../shared/logger\";\r\n\r\nexport class App {\r\n\tlogger: Logger;\r\n\r\n\tchips = [{ tag: \"Apple\" }, { tag: \"Microsoft\" }, { tag: \"Google\" }];\r\n\r\n\taddChip() {\r\n\t\tthis.chips = this.chips.concat({ tag: \"new chip\" });\r\n\t}\r\n\tremoveChip() {\r\n\t\tthis.chips = this.chips.slice(0, this.chips.length - 1);\r\n\t}\r\n\r\n\tlogChange(detail) {\r\n\t\tthis.logger.log(`chips changed: ${JSON.stringify(detail)}`);\r\n\t}\r\n\r\n\tlogSelect(detail) {\r\n\t\tthis.logger.log(`chip selected: ${JSON.stringify(detail)}`);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/chip/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "autocomplete"),
            _super.prototype.getRouteConfig.call(this, "editor"),
            _super.prototype.getRouteConfig.call(this, "events"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/collapsible/accordion/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/collapsible/accordion/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"collapsible-accordion\">\r\n\t\t<ul md-collapsible=\"accordion: true;\">\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Second</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collapsible/accordion/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"collapsible-accordion\">\r\n\t\t<ul md-collapsible=\"accordion: true;\">\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Second</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collapsible/accordion/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/collapsible/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.openFirst = function () {
        this.collapsible.open();
    };
    return App;
}());



/***/ }),

/***/ "samples/collapsible/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"collapsible-basic-use\">\r\n\t\t<ul md-collapsible md-collapsible.ref=\"collapsible\">\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Second</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collapsible/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"collapsible-basic-use\">\r\n\t\t<ul md-collapsible md-collapsible.ref=\"collapsible\">\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t\t<li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Second</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collapsible/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { MdCollapsible } from \"aurelia-materialize-bridge\";\r\n\r\nexport class App {\r\n\tcollapsible: MdCollapsible;\r\n\r\n\topenFirst() {\r\n\t\tthis.collapsible.open();\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/collapsible/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "accordion"),
            _super.prototype.getRouteConfig.call(this, "popout"),
            _super.prototype.getRouteConfig.call(this, "open-close-callbacks"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/collapsible/open-close-callbacks/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
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
    function App(toastService) {
        this.toastService = toastService;
        this.toastService = toastService;
    }
    App.prototype.collapsibleOpen = function (targetElement) {
        targetElement.openCount = (targetElement.openCount || 0) + 1;
        this.toastService.show("Open Callback Received!", 1000);
    };
    App.prototype.collapsibleClose = function (targetElement) {
        targetElement.closeCount = (targetElement.closeCount || 0) + 1;
        this.toastService.show("Close Callback Received!", 1000);
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "samples/collapsible/open-close-callbacks/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"collapsible-open-close-events\">\r\n\t\t<ul md-collapsible=\"on-open.call: collapsibleOpen($event); on-close.call: collapsibleClose($event)\">\r\n\t\t\t<li ref=\"firstSection\">\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First<span md-badge data-badge-caption=\"opens\">${firstSection.openCount || 0}</span><span md-badge data-badge-caption=\"closes\">${firstSection.closeCount || 0}</span></div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t\t<li ref=\"secondSection\">\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Second<span md-badge data-badge-caption=\"opens\">${secondSection.openCount || 0}</span><span md-badge data-badge-caption=\"closes\">${secondSection.closeCount || 0}</span></div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collapsible/open-close-callbacks/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"collapsible-open-close-events\">\r\n\t\t<ul md-collapsible=\"on-open.call: collapsibleOpen($event); on-close.call: collapsibleClose($event)\">\r\n\t\t\t<li ref=\"firstSection\">\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First<span md-badge data-badge-caption=\"opens\">${firstSection.openCount || 0}</span><span md-badge data-badge-caption=\"closes\">${firstSection.closeCount || 0}</span></div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t\t<li ref=\"secondSection\">\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Second<span md-badge data-badge-caption=\"opens\">${secondSection.openCount || 0}</span><span md-badge data-badge-caption=\"closes\">${secondSection.closeCount || 0}</span></div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collapsible/open-close-callbacks/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject, bindable } from \"aurelia-framework\";\r\nimport { MdToastService } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class App {\r\n\tconstructor(private toastService: MdToastService) {\r\n\t\tthis.toastService = toastService;\r\n\t}\r\n\r\n\tcollapsibleOpen(targetElement) {\r\n\t\ttargetElement.openCount = (targetElement.openCount || 0) + 1;\r\n\r\n\t\tthis.toastService.show(\"Open Callback Received!\", 1000);\r\n\t}\r\n\r\n\tcollapsibleClose(targetElement) {\r\n\t\ttargetElement.closeCount = (targetElement.closeCount || 0) + 1;\r\n\r\n\t\tthis.toastService.show(\"Close Callback Received!\", 1000);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/collapsible/popout/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.accordion = false;
    }
    return App;
}());



/***/ }),

/***/ "samples/collapsible/popout/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n  <div class=\"collapsible-popout\">\r\n    <ul md-collapsible=\"accordion.bind: accordion; popout: true;\">\r\n      <li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n      <li>\r\n        <div class=\"collapsible-header active\"><i class=\"mdi-maps-place\"></i>Second</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n      <li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Third</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n    </ul>\r\n    <p>\r\n      <md-checkbox md-checked.bind=\"accordion\">use accordion</md-checkbox>\r\n    </p>\r\n  </div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collapsible/popout/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n  <div class=\"collapsible-popout\">\r\n    <ul md-collapsible=\"accordion.bind: accordion; popout: true;\">\r\n      <li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n      <li>\r\n        <div class=\"collapsible-header active\"><i class=\"mdi-maps-place\"></i>Second</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n      <li>\r\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Third</div>\r\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\r\n      </li>\r\n    </ul>\r\n    <p>\r\n      <md-checkbox md-checked.bind=\"accordion\">use accordion</md-checkbox>\r\n    </p>\r\n  </div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collapsible/popout/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\taccordion = false;\r\n}\r\n"

/***/ }),

/***/ "samples/collections/avatar/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/collections/avatar/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/collections-sample-1.jpg\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar active\">\r\n\t\t\t\t<img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/collections-sample-1.jpg\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/collections-sample-1.jpg\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<i class=\"circle material-icons primary\">person</i>\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<i class=\"circle material-icons primary-text\" style=\"font-size:36px;\">person</i>\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collections/avatar/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/collections-sample-1.jpg\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar active\">\r\n\t\t\t\t<img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/collections-sample-1.jpg\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/collections-sample-1.jpg\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<i class=\"circle material-icons primary\">person</i>\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text avatar\">\r\n\t\t\t\t<i class=\"circle material-icons primary-text\" style=\"font-size:36px;\">person</i>\r\n\t\t\t\t<span class=\"title\">Title</span>\r\n\t\t\t\t<p>First Line\r\n\t\t\t\t\t<br> Second Line\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collections/avatar/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/collections/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/collections/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text active\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t</md-collection>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collections/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text active\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t</md-collection>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collections/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/collections/header/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/collections/header/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-header>\r\n\t\t\t\t<h4>First names</h4>\r\n\t\t\t</md-collection-header>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text active\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t</md-collection>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collections/header/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-header>\r\n\t\t\t\t<h4>First names</h4>\r\n\t\t\t</md-collection-header>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text active\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">Alvin</md-collection-item>\r\n\t\t</md-collection>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collections/header/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/collections/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "header"),
            _super.prototype.getRouteConfig.call(this, "secondary-content"),
            _super.prototype.getRouteConfig.call(this, "avatar"),
            _super.prototype.getRouteConfig.call(this, "selection"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/collections/secondary-content/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/collections/secondary-content/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-item class=\"accent-text\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text active\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t</md-collection>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collections/secondary-content/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-collection>\r\n\t\t\t<md-collection-item class=\"accent-text\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text active\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t\t<md-collection-item class=\"accent-text\">\r\n\t\t\t\tAlvin\r\n\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t</div>\r\n\t\t\t</md-collection-item>\r\n\t\t</md-collection>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collections/secondary-content/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/collections/selection/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.actors = [
            {
                name: "Bryan Cranston",
                episodes: 62,
                description: "Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle."
            }, {
                name: "Aaron Paul",
                episodes: 62,
                description: "Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the \"Need For Speed\" Movie."
            }, {
                name: "Bob Odenkirk",
                episodes: 62,
                description: "Bob Odenkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called \"Better Call Saul\"."
            }
        ];
    }
    App.prototype.onSelectionChanged = function (e) {
        var selected = this.list.getSelected();
        var names = selected.map(function (i) { return i.name; });
        this.logger.log("selection changed: " + names.join(", "));
    };
    return App;
}());



/***/ }),

/***/ "samples/collections/selection/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "md-collection-item.collection-item.selected {\r\n  background-color: #ccc;\r\n}\r\n\r\nmd-collection-item.collection-item.disabled {\r\n  background-color: #eee;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "samples/collections/selection/app.css.raw":
/***/ (function(module, exports) {

module.exports = "md-collection-item.collection-item.selected {\r\n  background-color: #ccc;\r\n}\r\n\r\nmd-collection-item.collection-item.disabled {\r\n  background-color: #eee;\r\n}\r\n"

/***/ }),

/***/ "samples/collections/selection/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div>\r\n\t\t\t\t<md-collection view-model.ref=\"list\">\r\n\t\t\t\t\t<md-collection-item repeat.for=\"actor of actors\" class=\"avatar ${ selector.isSelected ? 'selected' : '' } ${ selector.mdDisabled ? 'disabled' : '' }\">\r\n\t\t\t\t\t\t<md-collection-selector view-model.ref=\"selector\" item.bind=\"actor\" md-on-selection-changed.delegate=\"onSelectionChanged($event)\"\r\n\t\t\t\t\t\t md-disabled=\"${$index === 2}\">\r\n\t\t\t\t\t\t\t<img if.bind=\"$index !== 2\" src=\"" + __webpack_require__(31) + "\" alt=\"\"\r\n\t\t\t\t\t\t\t class=\"circle md-collection-selector__hover\">\r\n\t\t\t\t\t\t</md-collection-selector>\r\n\t\t\t\t\t\t<span class=\"accent-text title\">${actor.name}</span>\r\n\t\t\t\t\t\t<p>${actor.description}</p>\r\n\t\t\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</md-collection-item>\r\n\t\t\t\t</md-collection>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div>\r\n\t\t\t\t<button md-button click.delegate=\"list.selectAll()\">select all</button>\r\n\t\t\t\t<!--<button md-button click.delegate=\"list.toggleIndex(1)\">toggle second</button>-->\r\n\t\t\t\t<button md-button click.delegate=\"list.clearSelection()\">clear</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<md-card md-title=\"Console log\">\r\n\t\t\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t\t\t</md-card>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/collections/selection/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div>\r\n\t\t\t\t<md-collection view-model.ref=\"list\">\r\n\t\t\t\t\t<md-collection-item repeat.for=\"actor of actors\" class=\"avatar ${ selector.isSelected ? 'selected' : '' } ${ selector.mdDisabled ? 'disabled' : '' }\">\r\n\t\t\t\t\t\t<md-collection-selector view-model.ref=\"selector\" item.bind=\"actor\" md-on-selection-changed.delegate=\"onSelectionChanged($event)\"\r\n\t\t\t\t\t\t md-disabled=\"${$index === 2}\">\r\n\t\t\t\t\t\t\t<img if.bind=\"$index !== 2\" src=\"../../../../images/collections-sample-1.jpg\" alt=\"\"\r\n\t\t\t\t\t\t\t class=\"circle md-collection-selector__hover\">\r\n\t\t\t\t\t\t</md-collection-selector>\r\n\t\t\t\t\t\t<span class=\"accent-text title\">${actor.name}</span>\r\n\t\t\t\t\t\t<p>${actor.description}</p>\r\n\t\t\t\t\t\t<div class=\"secondary-content\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">send</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</md-collection-item>\r\n\t\t\t\t</md-collection>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div>\r\n\t\t\t\t<button md-button click.delegate=\"list.selectAll()\">select all</button>\r\n\t\t\t\t<!--<button md-button click.delegate=\"list.toggleIndex(1)\">toggle second</button>-->\r\n\t\t\t\t<button md-button click.delegate=\"list.clearSelection()\">clear</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<md-card md-title=\"Console log\">\r\n\t\t\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t\t\t</md-card>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/collections/selection/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { MdCollection } from \"aurelia-materialize-bridge\";\r\nimport { Logger } from \"../../../shared/logger\";\r\n\r\nexport class App {\r\n\tlist: MdCollection;\r\n\tlogger: Logger;\r\n\r\n\tactors = [\r\n\t\t{\r\n\t\t\tname: \"Bryan Cranston\",\r\n\t\t\tepisodes: 62,\r\n\t\t\tdescription: \"Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.\"\r\n\t\t}, {\r\n\t\t\tname: \"Aaron Paul\",\r\n\t\t\tepisodes: 62,\r\n\t\t\tdescription: \"Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the \\\"Need For Speed\\\" Movie.\"\r\n\t\t}, {\r\n\t\t\tname: \"Bob Odenkirk\",\r\n\t\t\tepisodes: 62,\r\n\t\t\tdescription: \"Bob Odenkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called \\\"Better Call Saul\\\".\"\r\n\t\t}\r\n\t];\r\n\r\n\tonSelectionChanged(e) {\r\n\t\tlet selected = this.list.getSelected();\r\n\t\tlet names = selected.map(i => i.name);\r\n\t\tthis.logger.log(\"selection changed: \" + names.join(\", \"));\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/color/basic-use/_usage.md":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "samples/color/basic-use/_usage.md.raw":
/***/ (function(module, exports) {

module.exports = "##### Using `md-colors`\r\n\r\nSince the catalog app needs to be the primary source for theme changes (to not be overwritten by this sample),\r\nwe cannot display the relevant code in `app.html`.\r\n\r\n`md-colors` is used like this:\r\n\r\n```html\r\n<md-colors md-primary-color=\"#ee6e73\" md-accent-color=\"#009688\" md-error-color=\"#FF0000\"></md-colors>\r\n```\r\n\r\nOf course the three color attributes can be bound to a view-model variable and thus can be changed dynamically\r\nby your application.\r\n\r\nView:\r\n\r\n```html\r\n<md-colors md-primary-color.bind=\"primaryColor\" md-accent-color.bind=\"accentColor\" md-error-color=\"errorColor\"></md-colors>\r\n```\r\n\r\nView model:\r\n\r\n```javascript\r\nexport class MyApp() {\r\n  primaryColor = '#ee6e73';\r\n  accentColor = '#009688';\r\n  errorColor = '#FF0000';\r\n}\r\n```\r\n\r\nHex values are definitely supported while rgb(a) values should be possible, too.\r\nBut named colors aren't since we darken/lighten some colors using their values.\r\n"

/***/ }),

/***/ "samples/color/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/color/basic-use/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".color-box div {\r\n  display: inline-block;\r\n  margin: 10px;\r\n  width: 120px;\r\n  height: 100px;\r\n  border: dashed 1px black;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}\r\n\r\nul.native-list {\r\n  padding: 0 30px;\r\n}\r\n\r\nul.native-list li {\r\n  list-style-type: initial;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "samples/color/basic-use/app.css.raw":
/***/ (function(module, exports) {

module.exports = ".color-box div {\r\n  display: inline-block;\r\n  margin: 10px;\r\n  width: 120px;\r\n  height: 100px;\r\n  border: dashed 1px black;\r\n  text-align: center;\r\n  line-height: 100px;\r\n}\r\n\r\nul.native-list {\r\n  padding: 0 30px;\r\n}\r\n\r\nul.native-list li {\r\n  list-style-type: initial;\r\n}\r\n"

/***/ }),

/***/ "samples/color/basic-use/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<!--\r\n    use this to initialize colors in your app\r\n  \r\n    <md-colors md-primary-color=\"#ee6e73\" md-accent-color=\"#009688\"></md-colors>\r\n  -->\r\n\r\n\t<!-- css classes -->\r\n\t<div class=\"color-box\">\r\n\t\t<div class=\"primary\">primary</div>\r\n\t\t<div class=\"accent\">accent</div>\r\n\t\t<div class=\"primary-text\">primary-text</div>\r\n\t\t<div class=\"accent-text\">accent-text</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/color/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<!--\r\n    use this to initialize colors in your app\r\n  \r\n    <md-colors md-primary-color=\"#ee6e73\" md-accent-color=\"#009688\"></md-colors>\r\n  -->\r\n\r\n\t<!-- css classes -->\r\n\t<div class=\"color-box\">\r\n\t\t<div class=\"primary\">primary</div>\r\n\t\t<div class=\"accent\">accent</div>\r\n\t\t<div class=\"primary-text\">primary-text</div>\r\n\t\t<div class=\"accent-text\">accent-text</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/color/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/color/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/dialogs/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "toast" },
            _super.prototype.getRouteConfig.call(this, "toast"),
            _super.prototype.getRouteConfig.call(this, "tooltip"),
            _super.prototype.getRouteConfig.call(this, "tooltip-html"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/dialogs/toast/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
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
    function App(toast) {
        this.toast = toast;
        this.toast = toast;
    }
    App.prototype.showDefaultToast = function () {
        this.toast.show("I am a toast!", 4000);
    };
    App.prototype.showStyledToast = function () {
        this.toast.show("I've got style!", 4000, "rounded blue");
    };
    App.prototype.showToastWithPromise = function () {
        var _this = this;
        this.toast.show("When finished, I trigger another toast.", 2000).then(function () {
            _this.toast.show("I am a toast called by a callback of another toast!", 2000);
        });
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "samples/dialogs/toast/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<p><a md-button click.trigger=\"showDefaultToast()\">default toast</a></p>\r\n\t\t<p style=\"margin-top: 5px;\"><a md-button click.trigger=\"showToastWithPromise()\">toast with callback</a></p>\r\n\t\t<p style=\"margin-top: 5px;\"><a md-button click.trigger=\"showStyledToast()\">toast with style</a></p>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/dialogs/toast/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<p><a md-button click.trigger=\"showDefaultToast()\">default toast</a></p>\r\n\t\t<p style=\"margin-top: 5px;\"><a md-button click.trigger=\"showToastWithPromise()\">toast with callback</a></p>\r\n\t\t<p style=\"margin-top: 5px;\"><a md-button click.trigger=\"showStyledToast()\">toast with style</a></p>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/dialogs/toast/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class App {\r\n\tconstructor(private toast: MdToastService) {\r\n\t\tthis.toast = toast;\r\n\t}\r\n\r\n\tshowDefaultToast() {\r\n\t\tthis.toast.show(\"I am a toast!\", 4000);\r\n\t}\r\n\r\n\tshowStyledToast() {\r\n\t\tthis.toast.show(\"I've got style!\", 4000, \"rounded blue\");\r\n\t}\r\n\r\n\tshowToastWithPromise() {\r\n\t\tthis.toast.show(\"When finished, I trigger another toast.\", 2000).then(() => {\r\n\t\t\tthis.toast.show(\"I am a toast called by a callback of another toast!\", 2000);\r\n\t\t});\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/dialogs/tooltip-html/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.htmlTooltip = "\n\t<table>\n\t  <tr>\n\t\t<td><img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/chips-sample-1.jpg\" /></td>\n\t\t<td>\n\t\t  custom html with crappy table layout<br />\n\t\t  but shows that it's working (I mean tables)\n\t\t</td>\n\t  </tr>\n\t</table>\n\t";
    }
    return App;
}());



/***/ }),

/***/ "samples/dialogs/tooltip-html/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<a md-button md-tooltip=\"html: true; position: bottom; text.bind: htmlTooltip;\">custom html</a>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/dialogs/tooltip-html/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<a md-button md-tooltip=\"html: true; position: bottom; text.bind: htmlTooltip;\">custom html</a>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/dialogs/tooltip-html/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\thtmlTooltip = `\r\n\t<table>\r\n\t  <tr>\r\n\t\t<td><img src=\"http://aurelia-ui-toolkits.github.io/demo-materialize/images/chips-sample-1.jpg\" /></td>\r\n\t\t<td>\r\n\t\t  custom html with crappy table layout<br />\r\n\t\t  but shows that it's working (I mean tables)\r\n\t\t</td>\r\n\t  </tr>\r\n\t</table>\r\n\t`;\r\n}\r\n"

/***/ }),

/***/ "samples/dialogs/tooltip/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/dialogs/tooltip/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<a md-button md-tooltip=\"position: left; text: A am a tooltip;\">on the left</a>\r\n\t\t<a md-button md-tooltip=\"position: top; text: A am a tooltip;\">on the top</a>\r\n\t\t<a md-button md-tooltip=\"position: bottom; text: A am a tooltip;\">on the bottom</a>\r\n\t\t<a md-button md-tooltip=\"position: right; text: A am a tooltip;\">on the right</a>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/dialogs/tooltip/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<a md-button md-tooltip=\"position: left; text: A am a tooltip;\">on the left</a>\r\n\t\t<a md-button md-tooltip=\"position: top; text: A am a tooltip;\">on the top</a>\r\n\t\t<a md-button md-tooltip=\"position: bottom; text: A am a tooltip;\">on the bottom</a>\r\n\t\t<a md-button md-tooltip=\"position: right; text: A am a tooltip;\">on the right</a>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/dialogs/tooltip/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/dropdown/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
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
    function App(toast) {
        this.toast = toast;
        this.toast = toast;
    }
    App.prototype.showToast = function (e) {
        this.toast.show("You clicked " + e.target.innerText, 4000);
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "samples/dropdown/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<h5>By id</h5>\r\n\t<div class=\"dropdown-sample\">\r\n\t\t<a md-button md-dropdown=\"activates: dropdown1;\">drop me!</a>\r\n\t\t<ul id=\"dropdown1\">\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t<li class=\"divider\"></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<h5>By reference</h5>\r\n\t<div class=\"dropdown-sample\">\r\n\t\t<a md-button md-dropdown=\"ref.bind: dropdown2;\">drop me!</a>\r\n\t\t<ul ref=\"dropdown2\">\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t<li class=\"divider\"></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/dropdown/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<h5>By id</h5>\r\n\t<div class=\"dropdown-sample\">\r\n\t\t<a md-button md-dropdown=\"activates: dropdown1;\">drop me!</a>\r\n\t\t<ul id=\"dropdown1\">\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t<li class=\"divider\"></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<h5>By reference</h5>\r\n\t<div class=\"dropdown-sample\">\r\n\t\t<a md-button md-dropdown=\"ref.bind: dropdown2;\">drop me!</a>\r\n\t\t<ul ref=\"dropdown2\">\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t<li class=\"divider\"></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/dropdown/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class App {\r\n\tconstructor(private toast: MdToastService) {\r\n\t\tthis.toast = toast;\r\n\t}\r\n\r\n\tshowToast(e) {\r\n\t\tthis.toast.show(`You clicked ${e.target.innerText}`, 4000);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/dropdown/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "options"),
            _super.prototype.getRouteConfig.call(this, "repeat"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/dropdown/options/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
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
    function App(toast) {
        this.toast = toast;
        this.toast = toast;
    }
    App.prototype.showToast = function (e) {
        this.toast.show("You clicked " + e.target.innerText, 4000);
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "samples/dropdown/options/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<style>\r\n\t\tdiv.actions {\r\n\t\t\tmargin-top: 10px;\r\n\t\t}\r\n\t</style>\r\n\t<div class=\"dropdown-options-sample\">\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; below-origin: true;\">below origin</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; hover: true;\">open on hover</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; constrain-width: false;\">no constrainWidth</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; gutter: 20;\">gutter 20</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; alignment: right; constrain-width: false;\">alignment right</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; in-duration: 1000; out-duration: 1000;\">custom durations (both at 1000)</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; stop-propagation: true;\">stop propagation</a>\r\n\t\t</div>\r\n\t\t<ul id=\"dropdown1\">\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t<li class=\"divider\"></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/dropdown/options/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<style>\r\n\t\tdiv.actions {\r\n\t\t\tmargin-top: 10px;\r\n\t\t}\r\n\t</style>\r\n\t<div class=\"dropdown-options-sample\">\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; below-origin: true;\">below origin</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; hover: true;\">open on hover</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; constrain-width: false;\">no constrainWidth</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; gutter: 20;\">gutter 20</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; alignment: right; constrain-width: false;\">alignment right</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; in-duration: 1000; out-duration: 1000;\">custom durations (both at 1000)</a>\r\n\t\t</div>\r\n\t\t<div class=\"actions\">\r\n\t\t\t<a md-button md-dropdown=\"activates: dropdown1; stop-propagation: true;\">stop propagation</a>\r\n\t\t</div>\r\n\t\t<ul id=\"dropdown1\">\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t<li class=\"divider\"></li>\r\n\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/dropdown/options/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class App {\r\n\tconstructor(private toast: MdToastService) {\r\n\t\tthis.toast = toast;\r\n\t}\r\n\r\n\tshowToast(e) {\r\n\t\tthis.toast.show(`You clicked ${e.target.innerText}`, 4000);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/dropdown/repeat/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
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
    function App(toast) {
        this.toast = toast;
        this.toast = toast;
    }
    App.prototype.showToast = function (e) {
        this.toast.show("You clicked " + e.target.innerText, 4000);
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "samples/dropdown/repeat/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"dropdown-sample\">\r\n\t\t<table>\r\n\t\t\t<tr repeat.for=\"n of 5\">\r\n\t\t\t\t<td>line ${n+1}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<a md-button md-dropdown=\"ref.bind: dropdown;\">drop me!</a>\r\n\t\t\t\t\t<ul ref=\"dropdown\">\r\n\t\t\t\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/dropdown/repeat/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"dropdown-sample\">\r\n\t\t<table>\r\n\t\t\t<tr repeat.for=\"n of 5\">\r\n\t\t\t\t<td>line ${n+1}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<a md-button md-dropdown=\"ref.bind: dropdown;\">drop me!</a>\r\n\t\t\t\t\t<ul ref=\"dropdown\">\r\n\t\t\t\t\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t\t\t\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/dropdown/repeat/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class App {\r\n\tconstructor(private toast: MdToastService) {\r\n\t\tthis.toast = toast;\r\n\t}\r\n\r\n\tshowToast(e) {\r\n\t\tthis.toast.show(`You clicked ${e.target.innerText}`, 4000);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/footer/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/footer/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<footer md-footer style=\"padding-left: 0;\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col l6 s12\">\r\n\t\t\t\t\t\t<h5 class=\"white-text\">Footer Content</h5>\r\n\t\t\t\t\t\t<p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col l4 offset-l2 s12\">\r\n\t\t\t\t\t\t<h5 class=\"white-text\">Links</h5>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-copyright\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t© 2016 Copyright Text\r\n\t\t\t\t\t<a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</footer>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/footer/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<footer md-footer style=\"padding-left: 0;\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col l6 s12\">\r\n\t\t\t\t\t\t<h5 class=\"white-text\">Footer Content</h5>\r\n\t\t\t\t\t\t<p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col l4 offset-l2 s12\">\r\n\t\t\t\t\t\t<h5 class=\"white-text\">Links</h5>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\r\n\t\t\t\t\t\t\t<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-copyright\">\r\n\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t© 2016 Copyright Text\r\n\t\t\t\t\t<a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</footer>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/footer/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/footer/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Index = /** @class */ (function () {
    function Index() {
    }
    Index.prototype.configureRouter = function (config, router) {
        var css = "Css";
        var components = "Components";
        var js = "Javascript";
        var forms = "Forms";
        var contrib = "Contributions";
        var routes = [
            { route: "catalog", name: "catalog", moduleId: "./catalog/catalog", title: "Catalog" },
            this.getRouteConfig("color", css),
            this.getRouteConfig("badge", components),
            this.getRouteConfig("button", components),
            this.getRouteConfig("breadcrumbs", components),
            this.getRouteConfig("card", components),
            this.getRouteConfig("chip", components),
            this.getRouteConfig("collections", components),
            this.getRouteConfig("footer", components),
            this.getRouteConfig("navbar", components),
            this.getRouteConfig("pagination", components),
            this.getRouteConfig("progress", components),
            this.getRouteConfig("collapsible", js),
            this.getRouteConfig("dialogs", js),
            this.getRouteConfig("dropdown", js),
            this.getRouteConfig("media", js),
            this.getRouteConfig("modals", js),
            this.getRouteConfig("parallax", js),
            this.getRouteConfig("pushpin", js),
            this.getRouteConfig("scrollfire", js),
            this.getRouteConfig("scrollspy", js),
            this.getRouteConfig("sidenav", js),
        ];
        config.map(routes);
        this.router = router;
    };
    Index.prototype.getRouteConfig = function (name, category, wip) {
        var title = name.replace(/-/g, " ");
        return { route: name, name: name, moduleId: "./" + name + "/index", nav: true, title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase(), category: category, status: wip ? "wip" : "done" };
    };
    Index.prototype.attached = function () {
        console.log(this.router);
    };
    Index = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */]
    ], Index);
    return Index;
}());



/***/ }),

/***/ "samples/index.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./menu\"></require>\n  <menu if.bind=\"router.currentInstruction.fragment !== 'catalog'\"></menu>\n  <router-view></router-view>\n</template>\n";

/***/ }),

/***/ "samples/media/box-basic/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/box-basic/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<img md-box src=\"" + __webpack_require__(106) + "\" width=\"650\" />\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/box-basic/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<img md-box src=\"../../../../images/box-sample-1.jpg\" width=\"650\" />\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/box-basic/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/box-caption/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/box-caption/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<img md-box=\"caption: A picture of some deer and tons of trees;\" src=\"" + __webpack_require__(105) + "\"\r\n\t width=\"250\" />\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/box-caption/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<img md-box=\"caption: A picture of some deer and tons of trees;\" src=\"../../../../images/box-sample-2.jpg\"\r\n\t width=\"250\" />\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/box-caption/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/carousel-basic/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/carousel-basic/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-carousel>\r\n\t\t<md-carousel-item md-href=\"#one!\" md-image=\"http://lorempixel.com/250/250/nature/1\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#two!\" md-image=\"http://lorempixel.com/250/250/nature/2\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#three!\" md-image=\"http://lorempixel.com/250/250/nature/3\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#four!\" md-image=\"http://lorempixel.com/250/250/nature/4\"></md-carousel-item>\r\n\t</md-carousel>\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/carousel-basic/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-carousel>\r\n\t\t<md-carousel-item md-href=\"#one!\" md-image=\"http://lorempixel.com/250/250/nature/1\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#two!\" md-image=\"http://lorempixel.com/250/250/nature/2\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#three!\" md-image=\"http://lorempixel.com/250/250/nature/3\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#four!\" md-image=\"http://lorempixel.com/250/250/nature/4\"></md-carousel-item>\r\n\t</md-carousel>\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/carousel-basic/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/carousel-slider/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/carousel-slider/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-carousel md-slider=\"true\" style=\"height: 400px;\">\r\n\t\t<md-carousel-item md-href=\"#one!\" md-image=\"http://lorempixel.com/250/250/nature/1\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#two!\" md-image=\"http://lorempixel.com/250/250/nature/2\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#three!\" md-image=\"http://lorempixel.com/250/250/nature/3\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#four!\" md-image=\"http://lorempixel.com/250/250/nature/4\"></md-carousel-item>\r\n\t</md-carousel>\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/carousel-slider/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-carousel md-slider=\"true\" style=\"height: 400px;\">\r\n\t\t<md-carousel-item md-href=\"#one!\" md-image=\"http://lorempixel.com/250/250/nature/1\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#two!\" md-image=\"http://lorempixel.com/250/250/nature/2\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#three!\" md-image=\"http://lorempixel.com/250/250/nature/3\"></md-carousel-item>\r\n\t\t<md-carousel-item md-href=\"#four!\" md-image=\"http://lorempixel.com/250/250/nature/4\"></md-carousel-item>\r\n\t</md-carousel>\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/carousel-slider/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/carousel-special/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/carousel-special/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-carousel md-indicators=\"true\" md-slider=\"true\" class=\"center\" style=\"height: 400px;\">\r\n\t\t<div class=\"carousel-fixed-item center\">\r\n\t\t\t<a md-button md-waves class=\"white grey-text darken-text-2\">button</a>\r\n\t\t</div>\r\n\t\t<md-carousel-item class=\"red white-text\">\r\n\t\t\t<h2>First Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your first panel</p>\r\n\t\t</md-carousel-item>\r\n\t\t<md-carousel-item class=\"amber white-text\">\r\n\t\t\t<h2>Second Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your second panel</p>\r\n\t\t</md-carousel-item>\r\n\t\t<md-carousel-item class=\"green white-text\">\r\n\t\t\t<h2>Third Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your thirs panel</p>\r\n\t\t</md-carousel-item>\r\n\t\t<md-carousel-item class=\"blue white-text\">\r\n\t\t\t<h2>Forth Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your forth panel</p>\r\n\t\t</md-carousel-item>\r\n\t</md-carousel>\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/carousel-special/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-carousel md-indicators=\"true\" md-slider=\"true\" class=\"center\" style=\"height: 400px;\">\r\n\t\t<div class=\"carousel-fixed-item center\">\r\n\t\t\t<a md-button md-waves class=\"white grey-text darken-text-2\">button</a>\r\n\t\t</div>\r\n\t\t<md-carousel-item class=\"red white-text\">\r\n\t\t\t<h2>First Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your first panel</p>\r\n\t\t</md-carousel-item>\r\n\t\t<md-carousel-item class=\"amber white-text\">\r\n\t\t\t<h2>Second Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your second panel</p>\r\n\t\t</md-carousel-item>\r\n\t\t<md-carousel-item class=\"green white-text\">\r\n\t\t\t<h2>Third Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your thirs panel</p>\r\n\t\t</md-carousel-item>\r\n\t\t<md-carousel-item class=\"blue white-text\">\r\n\t\t\t<h2>Forth Panel</h2>\r\n\t\t\t<p class=\"white-text\">This is your forth panel</p>\r\n\t\t</md-carousel-item>\r\n\t</md-carousel>\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/carousel-special/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "box-basic" },
            _super.prototype.getRouteConfig.call(this, "box-basic"),
            _super.prototype.getRouteConfig.call(this, "box-caption"),
            _super.prototype.getRouteConfig.call(this, "slider-basic"),
            _super.prototype.getRouteConfig.call(this, "slider-fullscreen"),
            _super.prototype.getRouteConfig.call(this, "slider-api"),
            _super.prototype.getRouteConfig.call(this, "slider-options"),
            _super.prototype.getRouteConfig.call(this, "carousel-basic"),
            _super.prototype.getRouteConfig.call(this, "carousel-slider"),
            _super.prototype.getRouteConfig.call(this, "carousel-special"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/media/slider-api/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/slider-api/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div style=\"margin-bottom: 10px;\">\r\n\t\t<a md-button click.delegate=\"slider.pause()\">pause</a>\r\n\t\t<a md-button click.delegate=\"slider.start()\">start</a>\r\n\t\t<a md-button click.delegate=\"slider.prev()\">prev</a>\r\n\t\t<a md-button click.delegate=\"slider.next()\">next</a>\r\n\t</div>\r\n\t<md-slider view-model.ref=\"slider\">\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t</md-slider>\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/slider-api/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div style=\"margin-bottom: 10px;\">\r\n\t\t<a md-button click.delegate=\"slider.pause()\">pause</a>\r\n\t\t<a md-button click.delegate=\"slider.start()\">start</a>\r\n\t\t<a md-button click.delegate=\"slider.prev()\">prev</a>\r\n\t\t<a md-button click.delegate=\"slider.next()\">next</a>\r\n\t</div>\r\n\t<md-slider view-model.ref=\"slider\">\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t</md-slider>\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/slider-api/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/slider-basic/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/slider-basic/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-slider>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t</md-slider>\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/slider-basic/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-slider>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t</md-slider>\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/slider-basic/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/slider-fullscreen/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/media/slider-fullscreen/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div style=\"height: 50px\">\r\n\t\tThe fullscreen option actually fills the parent by using absolute positioning.\r\n\t\t<br /> The large div below demonstrates this.\r\n\t</div>\r\n\t<div style=\"position: relative; height: 800px;\">\r\n\t\t<md-slider md-fill-container=\"true\">\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t</md-slider>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/slider-fullscreen/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div style=\"height: 50px\">\r\n\t\tThe fullscreen option actually fills the parent by using absolute positioning.\r\n\t\t<br /> The large div below demonstrates this.\r\n\t</div>\r\n\t<div style=\"position: relative; height: 800px;\">\r\n\t\t<md-slider md-fill-container=\"true\">\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t</md-slider>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/slider-fullscreen/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/media/slider-options/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.indicatorsVisible = true;
    }
    return App;
}());



/***/ }),

/***/ "samples/media/slider-options/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-slider view-model.ref=\"slider\" md-indicators.bind=\"indicatorsVisible\" md-interval=\"6000\" md-transition=\"600\">\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t</md-slider>\r\n\t<p>\r\n\t\tIndicators:\r\n\t</p>\r\n\t<md-switch md-label-on=\"enabled\" md-label-off=\"disabled\" md-checked.bind=\"indicatorsVisible\"></md-switch>\r\n</template>\r\n";

/***/ }),

/***/ "samples/media/slider-options/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-slider view-model.ref=\"slider\" md-indicators.bind=\"indicatorsVisible\" md-interval=\"6000\" md-transition=\"600\">\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/1\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/2\" />\r\n\t\t\t\t<div class=\"caption left-align\">\r\n\t\t\t\t\t<h3>Left Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/3\" />\r\n\t\t\t\t<div class=\"caption right-align\">\r\n\t\t\t\t\t<h3>Right Aligned Caption</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t\t<li>\r\n\t\t\t\t<img src=\"http://lorempixel.com/580/250/nature/4\" />\r\n\t\t\t\t<div class=\"caption center-align\">\r\n\t\t\t\t\t<h3>This is our big Tagline!</h3>\r\n\t\t\t\t\t<h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</li>\r\n\t</md-slider>\r\n\t<p>\r\n\t\tIndicators:\r\n\t</p>\r\n\t<md-switch md-label-on=\"enabled\" md-label-off=\"disabled\" md-checked.bind=\"indicatorsVisible\"></md-switch>\r\n</template>\r\n"

/***/ }),

/***/ "samples/media/slider-options/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tindicatorsVisible = true;\r\n}\r\n"

/***/ }),

/***/ "samples/menu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(12);
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
    function Menu(element, router) {
        this.element = element;
        this.router = router;
        this.categories = [];
    }
    Menu.prototype.attached = function () {
        var _this = this;
        this.categories = [];
        this.router.routes.forEach(function (r) {
            if (!r.category) {
                return;
            }
            var category = _this.categories.find(function (x) { return x.title === r.category; });
            if (!category) {
                category = { title: r.category, routes: [] };
                _this.categories.push(category);
            }
            category.routes.push(r);
        });
    };
    Menu = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */]])
    ], Menu);
    return Menu;
}());



/***/ }),

/***/ "samples/menu.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "menu md-sidenav .side-nav.fixed {\n  overflow: hidden;\n}\n\nmenu md-sidenav .side-nav.fixed:hover {\n  overflow: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "samples/menu.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\n  <require from=\"./menu.css\"></require>\n  <style>\n    @media all and (min-width: 992px) {\n      header, main, footer {\n        padding-left: 300px;\n      }\n      md-navbar[md-fixed=\"true\"] nav {\n        padding-right: 300px;\n      }\n    }\n\n    @media all and (max-width: 992px) {\n        header, main, footer {\n            padding-left: 0;\n        }\n        md-navbar[md-fixed=\"true\"] nav {\n          padding-right: 0;\n        }\n    }\n\n    md-sidenav div.collapsible-body {\n      padding: 0;\n    }\n  </style>\n  <md-sidenav view-model.ref=\"sideNav\" md-fixed=\"true\" md-edge=\"left\">\n    <ul md-collapsible=\"accordion: true;\">\n      <li repeat.for=\"cat of categories\">\n        <div md-waves class=\"collapsible-header\">\n          <span>${cat.title}</span>\n          <i class=\"material-icons right\">arrow_drop_down</i>\n        </div>\n        <div class=\"collapsible-body\">\n          <ul>\n            <template repeat.for=\"r of cat.routes\">\n              <li if.bind=\"r.nav\" md-waves=\"color: primary;\" class=\"${ r.navModel.isActive ? 'active' : '' }\">\n                <a route-href=\"route.bind: r.route\">${ r.title }<span show.bind=\"r.status === 'wip'\" md-badge>WIP</span></a>\n              </li>\n            </template>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  </md-sidenav>\n</template>\n";

/***/ }),

/***/ "samples/modals/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicUse", function() { return BasicUse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicUse = /** @class */ (function () {
    function BasicUse(toast) {
        this.toast = toast;
    }
    BasicUse.prototype.agree = function (e) {
        this.toast.show("You agreed!", 4000);
    };
    BasicUse.prototype.disagree = function (e) {
        this.toast.show("You disagreed!", 4000);
    };
    BasicUse.prototype.openModal = function () {
        this.modal.open();
    };
    BasicUse = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], BasicUse);
    return BasicUse;
}());



/***/ }),

/***/ "samples/modals/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<p><a md-button class=\"modal-trigger\" href=\"#modal1\">show modal (href with ID)</a></p>\r\n\t\t\t<p style=\"margin-top: 15px;\">\r\n\t\t\t\t<button md-button click.delegate=\"openModal()\">show modal (button without ID)</button>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"modal1\" md-modal md-modal.ref=\"modal\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Agree</a>\r\n\t\t\t\t<a click.delegate=\"disagree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Disagree</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/modals/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<p><a md-button class=\"modal-trigger\" href=\"#modal1\">show modal (href with ID)</a></p>\r\n\t\t\t<p style=\"margin-top: 15px;\">\r\n\t\t\t\t<button md-button click.delegate=\"openModal()\">show modal (button without ID)</button>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"modal1\" md-modal md-modal.ref=\"modal\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Agree</a>\r\n\t\t\t\t<a click.delegate=\"disagree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Disagree</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/modals/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService, MdModal } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class BasicUse {\r\n\tconstructor(private toast: MdToastService) { }\r\n\r\n\tmodal: MdModal;\r\n\r\n\tagree(e) {\r\n\t\tthis.toast.show(\"You agreed!\", 4000);\r\n\t}\r\n\r\n\tdisagree(e) {\r\n\t\tthis.toast.show(\"You disagreed!\", 4000);\r\n\t}\r\n\r\n\topenModal() {\r\n\t\tthis.modal.open();\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/modals/events/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Events = /** @class */ (function () {
    function Events(toast) {
        this.toast = toast;
    }
    Events.prototype.agree = function (e) {
        this.toast.show("You agreed!", 4000);
    };
    Events.prototype.disagree = function (e) {
        this.toast.show("You disagreed!", 4000);
    };
    Events.prototype.onComplete = function (e) {
        this.logger.log("modal complete");
    };
    Events.prototype.onReady = function (e) {
        this.logger.log("modal ready");
    };
    Events.prototype.openModal = function () {
        this.modal.open();
    };
    Events = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], Events);
    return Events;
}());



/***/ }),

/***/ "samples/modals/events/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<button md-button click.delegate=\"openModal()\">show modal</button>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"modal1\" md-modal md-modal.ref=\"modal\" md-on-modal-complete.delegate=\"onComplete($event)\" md-on-modal-ready.delegate=\"onReady($event)\">\r\n\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Agree</a>\r\n\t\t\t\t\t<a click.delegate=\"disagree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Disagree</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<md-card md-title=\"Console log\">\r\n\t\t\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t\t\t</md-card>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/modals/events/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<button md-button click.delegate=\"openModal()\">show modal</button>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"modal1\" md-modal md-modal.ref=\"modal\" md-on-modal-complete.delegate=\"onComplete($event)\" md-on-modal-ready.delegate=\"onReady($event)\">\r\n\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Agree</a>\r\n\t\t\t\t\t<a click.delegate=\"disagree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Disagree</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<md-card md-title=\"Console log\">\r\n\t\t\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t\t\t</md-card>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/modals/events/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService, MdModal } from \"aurelia-materialize-bridge\";\r\nimport { Logger } from \"../../../shared/logger\";\r\n\r\n@autoinject\r\nexport class Events {\r\n\tconstructor(private toast: MdToastService) { }\r\n\r\n\tlogger: Logger;\r\n\tmodal: MdModal;\r\n\r\n\tagree(e) {\r\n\t\tthis.toast.show(\"You agreed!\", 4000);\r\n\t}\r\n\r\n\tdisagree(e) {\r\n\t\tthis.toast.show(\"You disagreed!\", 4000);\r\n\t}\r\n\r\n\tonComplete(e) {\r\n\t\tthis.logger.log(\"modal complete\");\r\n\t}\r\n\r\n\tonReady(e) {\r\n\t\tthis.logger.log(\"modal ready\");\r\n\t}\r\n\r\n\topenModal() {\r\n\t\tthis.modal.open();\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/modals/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "events"),
            _super.prototype.getRouteConfig.call(this, "options"),
            _super.prototype.getRouteConfig.call(this, "manual-close"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/modals/manual-close/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualClose", function() { return ManualClose; });
var ManualClose = /** @class */ (function () {
    function ManualClose() {
        this.closeDialog = false;
    }
    ManualClose.prototype.agree = function (e) {
        if (this.closeDialog) {
            this.myDialog.close();
        }
    };
    return ManualClose;
}());



/***/ }),

/***/ "samples/modals/manual-close/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<p><a md-button href=\"#modal1\" class=\"modal-trigger\">show modal</a></p>\r\n\t\t</div>\r\n\t\t<div id=\"modal1\" md-modal=\"dismissible: false;\" md-modal.ref=\"myDialog\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<md-checkbox md-checked.bind=\"closeDialog\">close dialog on \"agree\"</md-checkbox>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action\">Agree</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/modals/manual-close/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<p><a md-button href=\"#modal1\" class=\"modal-trigger\">show modal</a></p>\r\n\t\t</div>\r\n\t\t<div id=\"modal1\" md-modal=\"dismissible: false;\" md-modal.ref=\"myDialog\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<md-checkbox md-checked.bind=\"closeDialog\">close dialog on \"agree\"</md-checkbox>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action\">Agree</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/modals/manual-close/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { MdModal } from \"aurelia-materialize-bridge\";\r\n\r\nexport class ManualClose {\r\n\tcloseDialog = false;\r\n\tmyDialog: MdModal;\r\n\r\n\tagree(e) {\r\n\t\tif (this.closeDialog) {\r\n\t\t\tthis.myDialog.close();\r\n\t\t}\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/modals/options/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Options = /** @class */ (function () {
    function Options(toast) {
        this.toast = toast;
    }
    Options.prototype.agree = function (e) {
        this.toast.show("You agreed!", 4000);
    };
    Options.prototype.disagree = function (e) {
        this.toast.show("You disagreed!", 4000);
    };
    Options = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], Options);
    return Options;
}());



/***/ }),

/***/ "samples/modals/options/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<p>This demonstrates a modal which is not closable by clicking the overlay, with some ridiculously long transition durations,\r\n\t\t\t\tchanged opacity and positioning.</p>\r\n\t\t\t<p>The following options are used:</p>\r\n\t\t\t<code>\r\n          <pre>\r\n            {\r\n              dismissible: false,\r\n              in-duration: 1000,\r\n              out-duration: 1000,\r\n              starting-top: '10%',\r\n              ending-top: '20%',\r\n              opacity: 0.7\r\n            }\r\n          </pre>\r\n        </code>\r\n\t\t\t<p><a class=\"modal-trigger\" md-button href=\"#modal1\">show modal</a></p>\r\n\t\t</div>\r\n\t\t<div id=\"modal1\" md-modal=\"\r\n        dismissible: false;\r\n        in-duration: 1000;\r\n        out-duration: 1000;\r\n        starting-top: 10%;\r\n        ending-top: 20%;\r\n        opacity: 0.7;\r\n      \">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Agree</a>\r\n\t\t\t\t<a click.delegate=\"disagree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Disagree</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/modals/options/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<div>\r\n\t\t\t<p>This demonstrates a modal which is not closable by clicking the overlay, with some ridiculously long transition durations,\r\n\t\t\t\tchanged opacity and positioning.</p>\r\n\t\t\t<p>The following options are used:</p>\r\n\t\t\t<code>\r\n          <pre>\r\n            {\r\n              dismissible: false,\r\n              in-duration: 1000,\r\n              out-duration: 1000,\r\n              starting-top: '10%',\r\n              ending-top: '20%',\r\n              opacity: 0.7\r\n            }\r\n          </pre>\r\n        </code>\r\n\t\t\t<p><a class=\"modal-trigger\" md-button href=\"#modal1\">show modal</a></p>\r\n\t\t</div>\r\n\t\t<div id=\"modal1\" md-modal=\"\r\n        dismissible: false;\r\n        in-duration: 1000;\r\n        out-duration: 1000;\r\n        starting-top: 10%;\r\n        ending-top: 20%;\r\n        opacity: 0.7;\r\n      \">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<h4>Modal Header</h4>\r\n\t\t\t\t<p>A bunch of text</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<a click.delegate=\"agree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Agree</a>\r\n\t\t\t\t<a click.delegate=\"disagree()\" md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Disagree</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/modals/options/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService, MdModal } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class Options {\r\n\tconstructor(private toast: MdToastService) { }\r\n\r\n\tagree(e) {\r\n\t\tthis.toast.show(\"You agreed!\", 4000);\r\n\t}\r\n\r\n\tdisagree(e) {\r\n\t\tthis.toast.show(\"You disagreed!\", 4000);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/navbar/active-items/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/navbar/active-items/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves class=\"active\"><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n";

/***/ }),

/***/ "samples/navbar/active-items/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves class=\"active\"><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n"

/***/ }),

/***/ "samples/navbar/active-items/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/navbar/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/navbar/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n";

/***/ }),

/***/ "samples/navbar/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n"

/***/ }),

/***/ "samples/navbar/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/navbar/centered-logo/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/navbar/centered-logo/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo center\">\r\n\t\t\t<span>Logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n";

/***/ }),

/***/ "samples/navbar/centered-logo/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo center\">\r\n\t\t\t<span>Logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n"

/***/ }),

/***/ "samples/navbar/centered-logo/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/navbar/dropdown-menu/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__ = __webpack_require__("aurelia-materialize-bridge");
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
    function App(toast) {
        this.toast = toast;
        this.toast = toast;
    }
    App.prototype.showToast = function (e) {
        this.toast.show("You clicked " + e.target.innerText, 4000);
    };
    App = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_materialize_bridge__["MdToastService"]])
    ], App);
    return App;
}());



/***/ }),

/***/ "samples/navbar/dropdown-menu/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<!-- Dropdown Trigger -->\r\n\t\t\t<li><a md-dropdown=\"activates: dropdown1\">Dropdown<i class=\"material-icons right\">arrow_drop_down</i></a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n\t<ul id=\"dropdown1\" class=\"dropdown-content\">\r\n\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t<li class=\"divider\"></li>\r\n\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t</ul>\r\n</template>\r\n";

/***/ }),

/***/ "samples/navbar/dropdown-menu/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<!-- Dropdown Trigger -->\r\n\t\t\t<li><a md-dropdown=\"activates: dropdown1\">Dropdown<i class=\"material-icons right\">arrow_drop_down</i></a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n\t<ul id=\"dropdown1\" class=\"dropdown-content\">\r\n\t\t<li><a click.trigger=\"showToast($event)\">one</a></li>\r\n\t\t<li><a click.trigger=\"showToast($event)\">two</a></li>\r\n\t\t<li class=\"divider\"></li>\r\n\t\t<li><a click.trigger=\"showToast($event)\">three</a></li>\r\n\t</ul>\r\n</template>\r\n"

/***/ }),

/***/ "samples/navbar/dropdown-menu/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { autoinject } from \"aurelia-framework\";\r\nimport { MdToastService } from \"aurelia-materialize-bridge\";\r\n\r\n@autoinject\r\nexport class App {\r\n\tconstructor(private toast: MdToastService) {\r\n\t\tthis.toast = toast;\r\n\t}\r\n\r\n\tshowToast(e) {\r\n\t\tthis.toast.show(`You clicked ${e.target.innerText}`, 4000);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/navbar/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "left-aligned-links"),
            _super.prototype.getRouteConfig.call(this, "centered-logo"),
            _super.prototype.getRouteConfig.call(this, "active-items"),
            _super.prototype.getRouteConfig.call(this, "dropdown-menu"),
            _super.prototype.getRouteConfig.call(this, "search-bar"),
            _super.prototype.getRouteConfig.call(this, "tabs-in-navbar"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/navbar/left-aligned-links/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/navbar/left-aligned-links/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo right\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down left\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n";

/***/ }),

/***/ "samples/navbar/left-aligned-links/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<a href=\"#/samples/navbar\" class=\"brand-logo right\">\r\n\t\t\t<span>Brand logo</span>\r\n\t\t</a>\r\n\t\t<ul class=\"hide-on-med-and-down left\">\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t</ul>\r\n\t</md-navbar>\r\n</template>\r\n"

/***/ }),

/***/ "samples/navbar/left-aligned-links/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/navbar/search-bar/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/navbar/search-bar/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<form>\r\n\t\t\t<div class=\"input-field\">\r\n\t\t\t\t<input id=\"search\" type=\"search\" required>\r\n\t\t\t\t<label for=\"search\">\r\n\t\t\t\t\t<i class=\"material-icons\">search</i>\r\n\t\t\t\t</label>\r\n\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</md-navbar>\r\n</template>\r\n";

/***/ }),

/***/ "samples/navbar/search-bar/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<md-navbar>\r\n\t\t<form>\r\n\t\t\t<div class=\"input-field\">\r\n\t\t\t\t<input id=\"search\" type=\"search\" required>\r\n\t\t\t\t<label for=\"search\">\r\n\t\t\t\t\t<i class=\"material-icons\">search</i>\r\n\t\t\t\t</label>\r\n\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</md-navbar>\r\n</template>\r\n"

/***/ }),

/***/ "samples/navbar/search-bar/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/navbar/tabs-in-navbar/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/navbar/tabs-in-navbar/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".tabs-in-navbar .tab-content {\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "samples/navbar/tabs-in-navbar/app.css.raw":
/***/ (function(module, exports) {

module.exports = ".tabs-in-navbar .tab-content {\r\n  padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "samples/navbar/tabs-in-navbar/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"tabs-in-navbar\">\r\n\t\t<md-navbar md-auto-height=\"true\">\r\n\t\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t\t<span>Brand logo</span>\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t</ul>\r\n\t\t\t<ul md-tabs=\"transparent: true;\" class=\"z-depth-1\">\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a class=\"active\" href=\"#tab1\">Tab 1</a></li>\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#tab2\">Tab 2</a></li>\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#tab3\">Tab 3</a></li>\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#tab4\">Tab 4</a></li>\r\n\t\t\t</ul>\r\n\t\t</md-navbar>\r\n\t\t<div id=\"tab1\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 1\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi augue, sodales eget felis quis, fringilla luctus ex. Pellentesque\r\n\t\t\t\thabitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in quam a velit ultricies suscipit\r\n\t\t\t\teu sed arcu. Duis dapibus sodales est, a semper augue laoreet et. Quisque tristique molestie odio in pulvinar. Aliquam\r\n\t\t\t\teget enim vitae felis varius varius at ut nisl.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"tab2\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 2\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tNunc quis lectus elementum, venenatis est eget, blandit dui. Vivamus fermentum nulla interdum massa blandit rhoncus. Ut dui\r\n\t\t\t\tlibero, sollicitudin et gravida id, ultricies eu nunc. Nunc nisi sem, facilisis sed mauris et, pharetra tincidunt orci.\r\n\t\t\t\tCras molestie, arcu ac venenatis fringilla, nulla dui laoreet magna, sit amet blandit diam tellus et nisl. Nunc a augue\r\n\t\t\t\taliquam, tristique justo vel, efficitur metus. Nullam faucibus blandit tincidunt.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"tab3\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 3\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tPraesent ullamcorper tortor ante, sed tempor dui aliquet id. Donec vehicula fringilla vestibulum. Proin suscipit ex vitae\r\n\t\t\t\tmassa ultricies tempus. Nulla id finibus metus. Phasellus sollicitudin mi ac rhoncus rutrum. Nullam vulputate semper\r\n\t\t\t\tturpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"tab4\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 4\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tIn tincidunt, massa sed mollis ornare, erat turpis aliquam orci, sed elementum nulla dui non nibh. Quisque et quam non ante\r\n\t\t\t\tultrices pellentesque. Proin tempus ante justo, id placerat augue luctus at. Nullam tincidunt, lacus vitae dignissim\r\n\t\t\t\taliquam, turpis tortor aliquam nisi, sit amet rhoncus urna odio in leo.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/navbar/tabs-in-navbar/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"tabs-in-navbar\">\r\n\t\t<md-navbar md-auto-height=\"true\">\r\n\t\t\t<a href=\"#/samples/navbar\" class=\"brand-logo\">\r\n\t\t\t\t<span>Brand logo</span>\r\n\t\t\t</a>\r\n\t\t\t<ul class=\"hide-on-med-and-down right\">\r\n\t\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t</ul>\r\n\t\t\t<ul md-tabs=\"transparent: true;\" class=\"z-depth-1\">\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a class=\"active\" href=\"#tab1\">Tab 1</a></li>\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#tab2\">Tab 2</a></li>\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#tab3\">Tab 3</a></li>\r\n\t\t\t\t<li md-waves=\"color: primary;\"><a href=\"#tab4\">Tab 4</a></li>\r\n\t\t\t</ul>\r\n\t\t</md-navbar>\r\n\t\t<div id=\"tab1\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 1\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi augue, sodales eget felis quis, fringilla luctus ex. Pellentesque\r\n\t\t\t\thabitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in quam a velit ultricies suscipit\r\n\t\t\t\teu sed arcu. Duis dapibus sodales est, a semper augue laoreet et. Quisque tristique molestie odio in pulvinar. Aliquam\r\n\t\t\t\teget enim vitae felis varius varius at ut nisl.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"tab2\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 2\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tNunc quis lectus elementum, venenatis est eget, blandit dui. Vivamus fermentum nulla interdum massa blandit rhoncus. Ut dui\r\n\t\t\t\tlibero, sollicitudin et gravida id, ultricies eu nunc. Nunc nisi sem, facilisis sed mauris et, pharetra tincidunt orci.\r\n\t\t\t\tCras molestie, arcu ac venenatis fringilla, nulla dui laoreet magna, sit amet blandit diam tellus et nisl. Nunc a augue\r\n\t\t\t\taliquam, tristique justo vel, efficitur metus. Nullam faucibus blandit tincidunt.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"tab3\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 3\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tPraesent ullamcorper tortor ante, sed tempor dui aliquet id. Donec vehicula fringilla vestibulum. Proin suscipit ex vitae\r\n\t\t\t\tmassa ultricies tempus. Nulla id finibus metus. Phasellus sollicitudin mi ac rhoncus rutrum. Nullam vulputate semper\r\n\t\t\t\tturpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div id=\"tab4\" class=\"tab-content z-depth-1\">\r\n\t\t\t<p>\r\n\t\t\t\tThis is tab 4\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tIn tincidunt, massa sed mollis ornare, erat turpis aliquam orci, sed elementum nulla dui non nibh. Quisque et quam non ante\r\n\t\t\t\tultrices pellentesque. Proin tempus ante justo, id placerat augue luctus at. Nullam tincidunt, lacus vitae dignissim\r\n\t\t\t\taliquam, turpis tortor aliquam nisi, sit amet rhoncus urna odio in leo.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/navbar/tabs-in-navbar/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/pagination/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.activePage = 1;
    }
    return App;
}());



/***/ }),

/***/ "samples/pagination/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-pagination md-pages=\"6\" md-active-page.bind=\"activePage\"></md-pagination>\r\n\t</div>\r\n\t<div>\r\n\t\tactive page: ${activePage}\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/pagination/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-pagination md-pages=\"6\" md-active-page.bind=\"activePage\"></md-pagination>\r\n\t</div>\r\n\t<div>\r\n\t\tactive page: ${activePage}\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/pagination/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tactivePage = 1;\r\n}\r\n"

/***/ }),

/***/ "samples/pagination/events/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.activePage = 1;
    }
    App.prototype.onPageChanged = function (e) {
        this.logger.log("page changed " + e.detail);
    };
    return App;
}());



/***/ }),

/***/ "samples/pagination/events/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 m8\">\r\n\t\t\t<div>\r\n\t\t\t\t<md-pagination md-on-page-changed.delegate=\"onPageChanged($event)\" md-pages=\"4\" md-active-page.bind=\"activePage\"></md-pagination>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\tactive page: ${activePage}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 m8\">\r\n\t\t\t<md-card md-title=\"Console log\">\r\n\t\t\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t\t\t</md-card>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/pagination/events/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 m8\">\r\n\t\t\t<div>\r\n\t\t\t\t<md-pagination md-on-page-changed.delegate=\"onPageChanged($event)\" md-pages=\"4\" md-active-page.bind=\"activePage\"></md-pagination>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\tactive page: ${activePage}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 m8\">\r\n\t\t\t<md-card md-title=\"Console log\">\r\n\t\t\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t\t\t</md-card>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/pagination/events/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { Logger } from \"../../../shared/logger\";\r\n\r\nexport class App {\r\n\tlogger: Logger;\r\n\tactivePage = 1;\r\n\r\n\tonPageChanged(e) {\r\n\t\tthis.logger.log(`page changed ${e.detail}`);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/pagination/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "options"),
            _super.prototype.getRouteConfig.call(this, "events"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/pagination/options/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.activePage = 1;
        this.overallPageLinks = 200;
        this.showFirstLast = true;
        this.showPrevNext = true;
        this.showPageLinks = true;
        this.visiblePageLinks = "16";
    }
    return App;
}());



/***/ }),

/***/ "samples/pagination/options/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-pagination md-show-first-last.two-way=\"showFirstLast\" md-show-prev-next.two-way=\"showPrevNext\" md-show-page-links.two-way=\"showPageLinks\"\r\n\t\t md-pages.bind=\"overallPageLinks\" md-visible-page-links.two-way=\"visiblePageLinks\" md-active-page.bind=\"activePage\"></md-pagination>\r\n\t</div>\r\n\t<div>\r\n\t\tactive page: ${activePage}\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tShow first/last page:\r\n\t\t<md-switch md-checked.bind=\"showFirstLast\"></md-switch>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tShow previous/next page:\r\n\t\t<md-switch md-checked.bind=\"showPrevNext\"></md-switch>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tShow page links:\r\n\t\t<md-switch md-checked.bind=\"showPageLinks\"></md-switch>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tNumber of pages:\r\n\t\t<md-input md-value.bind=\"overallPageLinks\"></md-input>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tNumber of visible links:\r\n\t\t<md-input md-value.bind=\"visiblePageLinks\"></md-input>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/pagination/options/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-pagination md-show-first-last.two-way=\"showFirstLast\" md-show-prev-next.two-way=\"showPrevNext\" md-show-page-links.two-way=\"showPageLinks\"\r\n\t\t md-pages.bind=\"overallPageLinks\" md-visible-page-links.two-way=\"visiblePageLinks\" md-active-page.bind=\"activePage\"></md-pagination>\r\n\t</div>\r\n\t<div>\r\n\t\tactive page: ${activePage}\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tShow first/last page:\r\n\t\t<md-switch md-checked.bind=\"showFirstLast\"></md-switch>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tShow previous/next page:\r\n\t\t<md-switch md-checked.bind=\"showPrevNext\"></md-switch>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tShow page links:\r\n\t\t<md-switch md-checked.bind=\"showPageLinks\"></md-switch>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tNumber of pages:\r\n\t\t<md-input md-value.bind=\"overallPageLinks\"></md-input>\r\n\t</div>\r\n\t<div style=\"margin-top: 15px;\">\r\n\t\tNumber of visible links:\r\n\t\t<md-input md-value.bind=\"visiblePageLinks\"></md-input>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/pagination/options/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tactivePage = 1;\r\n\toverallPageLinks = 200;\r\n\tshowFirstLast = true;\r\n\tshowPrevNext = true;\r\n\tshowPageLinks = true;\r\n\tvisiblePageLinks = \"16\";\r\n}\r\n"

/***/ }),

/***/ "samples/parallax/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/parallax/basic-use/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".md-parallax-demo .parallax {\r\n  z-index: 0;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "samples/parallax/basic-use/app.css.raw":
/***/ (function(module, exports) {

module.exports = ".md-parallax-demo .parallax {\r\n  z-index: 0;\r\n}\r\n"

/***/ }),

/***/ "samples/parallax/basic-use/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"md-parallax-demo\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"Parallax\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tscroll down\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"parallax-container\">\r\n\t\t\t<div md-parallax>\r\n\t\t\t\t<img src=\"" + __webpack_require__(104) + "\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"More content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tsome more scrolling content\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"parallax-container\">\r\n\t\t\t<div md-parallax>\r\n\t\t\t\t<img src=\"" + __webpack_require__(30) + "\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"More content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\teven more scrolling content\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/parallax/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<require from=\"./app.css\"></require>\r\n\t<div class=\"md-parallax-demo\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"Parallax\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tscroll down\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"parallax-container\">\r\n\t\t\t<div md-parallax>\r\n\t\t\t\t<img src=\"../../../../images/parallax-1.jpg\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"More content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\tsome more scrolling content\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"parallax-container\">\r\n\t\t\t<div md-parallax>\r\n\t\t\t\t<img src=\"../../../../images/parallax-2.jpg\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"More content\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\teven more scrolling content\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/parallax/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/parallax/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/progress/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.value = 15;
    }
    App.prototype.setNull = function () {
        this.inputValue.mdValue = null;
    };
    return App;
}());



/***/ }),

/***/ "samples/progress/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-progress md-value.bind=\"value\"></md-progress>\r\n\t</div>\r\n\t<div>\r\n\t\t<md-input md-label=\"value\" md-value.bind=\"value\" view-model.ref=\"inputValue\"></md-input>\r\n\t</div>\r\n\t<div>\r\n\t\t<button md-button=\"flat: true;\" md-waves class=\"accent-text\" click.delegate=\"setNull()\">set value = null (indeterminate)</button>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/progress/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-progress md-value.bind=\"value\"></md-progress>\r\n\t</div>\r\n\t<div>\r\n\t\t<md-input md-label=\"value\" md-value.bind=\"value\" view-model.ref=\"inputValue\"></md-input>\r\n\t</div>\r\n\t<div>\r\n\t\t<button md-button=\"flat: true;\" md-waves class=\"accent-text\" click.delegate=\"setNull()\">set value = null (indeterminate)</button>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/progress/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { MdInput } from \"aurelia-materialize-bridge\";\r\n\r\nexport class App {\r\n\tinputValue: MdInput;\r\n\r\n\tvalue = 15;\r\n\r\n\tsetNull() {\r\n\t\tthis.inputValue.mdValue = null;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/progress/circular/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.color = "blue";
        this.size = "";
    }
    return App;
}());



/***/ }),

/***/ "samples/progress/circular/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-progress md-type=\"circular\" md-pixel-size.bind=\"pixelSize\" md-size.bind=\"size\" md-color.bind=\"color\"></md-progress>\r\n\t</div>\r\n\t<div>\r\n\t\t<select md-select=\"label: color;\" value.two-way=\"color\">\r\n\t\t\t<option value=\"blue\">blue</option>\r\n\t\t\t<option value=\"red\">red</option>\r\n\t\t\t<option value=\"green\">green</option>\r\n\t\t\t<option value=\"flashing\">flashing</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<div>\r\n\t\t<select md-select=\"label: size;\" value.two-way=\"size\">\r\n\t\t\t<option value=\"big\">big</option>\r\n\t\t\t<option value=\"\">default</option>\r\n\t\t\t<option value=\"small\">small</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<div>\r\n\t\t<md-input md-label=\"custom size in pixels\" md-value.bind=\"pixelSize\"></md-input>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/progress/circular/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<md-progress md-type=\"circular\" md-pixel-size.bind=\"pixelSize\" md-size.bind=\"size\" md-color.bind=\"color\"></md-progress>\r\n\t</div>\r\n\t<div>\r\n\t\t<select md-select=\"label: color;\" value.two-way=\"color\">\r\n\t\t\t<option value=\"blue\">blue</option>\r\n\t\t\t<option value=\"red\">red</option>\r\n\t\t\t<option value=\"green\">green</option>\r\n\t\t\t<option value=\"flashing\">flashing</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<div>\r\n\t\t<select md-select=\"label: size;\" value.two-way=\"size\">\r\n\t\t\t<option value=\"big\">big</option>\r\n\t\t\t<option value=\"\">default</option>\r\n\t\t\t<option value=\"small\">small</option>\r\n\t\t</select>\r\n\t</div>\r\n\t<div>\r\n\t\t<md-input md-label=\"custom size in pixels\" md-value.bind=\"pixelSize\"></md-input>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/progress/circular/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tcolor = \"blue\";\r\n\tsize = \"\";\r\n}\r\n"

/***/ }),

/***/ "samples/progress/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "circular"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/pushpin/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/pushpin/basic-use/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<style>\r\n\t\t.card .card-content p.more-space {\r\n\t\t\tmargin: 20px 0;\r\n\t\t}\r\n\t</style>\r\n\t<div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"Basic use\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tLook at the right edge.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tFor demonstration purposes, this page has to be much longer.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tOr else the pushpin wouldn't make any sense.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tSo we put an image here.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(29) + "\" style=\"width: 500px;\" />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tAnd another one to make it really interesting...\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\t<img src=\"" + __webpack_require__(30) + "\" style=\"width: 500px;\" />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<div md-pushpin=\"top: 320; offset: 150;\">\r\n\t\t\t\t\t<md-card md-title=\"Look!\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\tI'm a pushpin!\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</md-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/pushpin/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<style>\r\n\t\t.card .card-content p.more-space {\r\n\t\t\tmargin: 20px 0;\r\n\t\t}\r\n\t</style>\r\n\t<div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<md-card md-title=\"Basic use\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tLook at the right edge.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tFor demonstration purposes, this page has to be much longer.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tOr else the pushpin wouldn't make any sense.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tSo we put an image here.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\t<img src=\"../../../../images/transition-sample-1.jpg\" style=\"width: 500px;\" />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\tAnd another one to make it really interesting...\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"more-space\">\r\n\t\t\t\t\t\t\t<img src=\"../../../../images/parallax-2.jpg\" style=\"width: 500px;\" />\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-card>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<div md-pushpin=\"top: 320; offset: 150;\">\r\n\t\t\t\t\t<md-card md-title=\"Look!\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\tI'm a pushpin!\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</md-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/pushpin/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/pushpin/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/sample-index-base":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleIndexBase", function() { return SampleIndexBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_fetch_client__ = __webpack_require__(7);
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




var SampleIndexBase = /** @class */ (function () {
    function SampleIndexBase(eventAggregator, loader, taskQueue, http) {
        this.eventAggregator = eventAggregator;
        this.loader = loader;
        this.taskQueue = taskQueue;
        this.http = http;
        this.tabs = [];
    }
    SampleIndexBase.prototype.attached = function () {
        var _this = this;
        this.subscription = this.eventAggregator.subscribe("router:navigation:complete", function (e) { return _this.navigationComplete(e); });
    };
    SampleIndexBase.prototype.navigationComplete = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var fragment, fragmentParts, modules, _i, modules_1, m, pathParts, fileName, fileNameParts, language, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        fragment = e.instruction.router.currentInstruction.fragment;
                        fragmentParts = fragment.split("/");
                        this.title = fragmentParts[fragmentParts.length - 2].replace("-", " ");
                        this.tabs = [];
                        modules = Object.keys(__webpack_require__.m).filter(function (x) { return x.startsWith(fragment.substring(1)) && x.endsWith(".raw"); });
                        _i = 0, modules_1 = modules;
                        _d.label = 1;
                    case 1:
                        if (!(_i < modules_1.length)) return [3 /*break*/, 4];
                        m = modules_1[_i];
                        pathParts = m.split("/");
                        fileName = pathParts[pathParts.length - 1].replace(".raw", "");
                        fileNameParts = fileName.split(".");
                        language = void 0;
                        switch (fileNameParts[1]) {
                            default:
                            case "html":
                                language = "html";
                                break;
                            case "js":
                                language = "javascript";
                                break;
                            case "ts":
                                language = "typescript";
                                break;
                            case "css":
                                language = "css";
                                break;
                            case "md":
                                language = "markdown";
                                break;
                        }
                        _b = (_a = this.tabs).push;
                        _c = { title: fileName, language: language, filename: fileName };
                        return [4 /*yield*/, this.loader.loadText(m)];
                    case 2:
                        _b.apply(_a, [(_c.content = _d.sent(), _c)]);
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.taskQueue.queueTask(function () {
                            _this.mdTabs.detached();
                            _this.mdTabs.attached();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SampleIndexBase.prototype.detached = function () {
        if (this.subscription) {
            this.subscription.dispose();
            this.subscription = null;
        }
    };
    SampleIndexBase.prototype.getRouteConfig = function (name) {
        var title = name.replace(/-/g, " ");
        return { route: name, name: name, moduleId: "./" + name + "/app", nav: true, title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase() };
    };
    SampleIndexBase.prototype.runGist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gist, response, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gist = {
                            public: true,
                            files: {}
                        };
                        this.tabs.forEach(function (x) {
                            gist.files[x.title] = { content: x.content };
                        });
                        return [4 /*yield*/, this.http.fetch("https://api.github.com/gists", { method: "post", body: JSON.stringify(gist), headers: { "Content-Type": "application/json" } })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        j = _a.sent();
                        window.open("https://gist.run/?id=" + j.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    SampleIndexBase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_3_aurelia_fetch_client__["a" /* HttpClient */]])
    ], SampleIndexBase);
    return SampleIndexBase;
}());



/***/ }),

/***/ "samples/sample-template.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".sample-template md-card {\n  position: relative;\n}\n\n.sample-template md-card .md-catalog__play-button {\n  position: absolute;\n  display: inline-block;\n  right: 24px;\n  top: 10px;\n}\n\n.sample-template md-card .md-catalog__play-button i {\n  color: black;\n}\n", ""]);

// exports


/***/ }),

/***/ "samples/sample-template.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<require from=\"./sample-template.css\"></require>\r\n\t<section>\r\n\t\t<h4>${title}</h4>\r\n\t\t<div class=\"row sample-template\">\r\n\t\t\t<div class=\"col s12 m4 l2\">\r\n\t\t\t\t<md-well router.bind=\"router\"></md-well>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m8 l8\">\r\n\t\t\t\t<md-card>\r\n\t\t\t\t\t<!-- TODO: figure out how to make TS work on gist.run -->\r\n\t\t\t\t\t<!-- <a class=\"md-catalog__play-button\" md-button=\"flat: true;\" md-waves click.delegate=\"runGist()\" href=\"#\">\r\n\t\t\t\t\t\t<i class=\"left material-icons\">play_arrow</i>play\r\n\t\t\t\t\t</a> -->\r\n\t\t\t\t\t<div ref=\"sampleTarget\">\r\n\t\t\t\t\t\t<router-view></router-view>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</md-card>\r\n\t\t\t\t<ul show.bind=\"tabs.length\" md-tabs class=\"z-depth-1\" md-tabs.ref=\"mdTabs\">\r\n\t\t\t\t\t<li repeat.for=\"tab of tabs\">\r\n\t\t\t\t\t\t<a href.bind=\"'#tab' + $index\">${tab.title}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div repeat.for=\"tab of tabs\" class=\"z-depth-1\" id.bind=\"'tab' + $index\">\r\n\t\t\t\t\t<au-code show.bind=\"tab.language != 'markdown'\" language.bind=\"tab.language\" text.bind=\"tab.content\"></au-code>\r\n\t\t\t\t\t<au-markdown show.bind=\"tab.language == 'markdown'\" text.bind=\"tab.content\"></au-markdown>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</template>\r\n";

/***/ }),

/***/ "samples/scrollfire/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.firstTarget = function () {
        Materialize.showStaggeredList($(this.list));
    };
    App.prototype.secondTarget = function () {
        Materialize.fadeInImage($(this.image));
    };
    return App;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ "samples/scrollfire/basic-use/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<div md-scrollfire>\r\n\t\t<div md-scrollfire-target=\"callback.call: firstTarget(); offset: 400;\">Target #1</div>\r\n\t\t<div>\r\n\t\t\t<p>\r\n\t\t\t\tScroll down to see Scrollfire in action.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<ul ref=\"list\">\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div md-scrollfire-target=\"callback.call: secondTarget(); offset: 500;\">Target #2</div>\r\n\t\t<div>\r\n\t\t\t<img ref=\"image\" src=\"" + __webpack_require__(29) + "\" class=\"responsive-img\"\r\n\t\t\t style=\"width: 500px; opacity: 0;\" />\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/scrollfire/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div md-scrollfire>\r\n\t\t<div md-scrollfire-target=\"callback.call: firstTarget(); offset: 400;\">Target #1</div>\r\n\t\t<div>\r\n\t\t\t<p>\r\n\t\t\t\tScroll down to see Scrollfire in action.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<ul ref=\"list\">\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t\t<li style=\"opacity: 0;\">\r\n          <h4><a>List Item</a></h4>\r\n          <p>This is a description</p>\r\n        </li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div md-scrollfire-target=\"callback.call: secondTarget(); offset: 500;\">Target #2</div>\r\n\t\t<div>\r\n\t\t\t<img ref=\"image\" src=\"../../../../images/transition-sample-1.jpg\" class=\"responsive-img\"\r\n\t\t\t style=\"width: 500px; opacity: 0;\" />\r\n\t\t</div>\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/scrollfire/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tlist: HTMLUListElement;\r\n\timage: HTMLImageElement;\r\n\r\n\tfirstTarget() {\r\n\t\tMaterialize.showStaggeredList($(this.list));\r\n\t}\r\n\tsecondTarget() {\r\n\t\tMaterialize.fadeInImage($(this.image));\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/scrollfire/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/scrollspy/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/scrollspy/basic-use/app.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n\t<style>\r\n\t\t.card .card-content p.more-space {\r\n\t\t\tmargin: 20px 0;\r\n\t\t}\r\n\r\n\t\t[md-pushpin] a {\r\n\t\t\tpadding-left: 20px;\r\n\t\t}\r\n\r\n\t\t[md-pushpin] a.active {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tpadding-left: 18px;\r\n\t\t\tborder-left: 2px solid #ea4a4f;\r\n\t\t}\r\n\t</style>\r\n\t<div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<div md-scrollspy=\"target: .scrollspy\">\r\n\t\t\t\t\t<p id=\"spy1\" class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tLook at the right edge.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tFor demonstration purposes, this page has to be much longer.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tOr else the scrollspy wouldn't make any sense.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tSo we put an image here.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p id=\"spy2\" class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\t<img src=\"" + __webpack_require__(29) + "\" class=\"responsive-img\" style=\"width: 500px;\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tAnd another one to make it really interesting...\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p id=\"spy3\" class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\t<img src=\"" + __webpack_require__(30) + "\" class=\"responsive-img\" style=\"width: 500px;\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<div md-pushpin=\"top: 320; offset: 150;\">\r\n\t\t\t\t\t<md-card md-title=\"Look!\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<ul class=\"section\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#spy1\">I'm a pushpin!</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#spy2\">And a scrollSpy!</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#spy3\">Even a card!</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</md-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</template>\r\n";

/***/ }),

/***/ "samples/scrollspy/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<style>\r\n\t\t.card .card-content p.more-space {\r\n\t\t\tmargin: 20px 0;\r\n\t\t}\r\n\r\n\t\t[md-pushpin] a {\r\n\t\t\tpadding-left: 20px;\r\n\t\t}\r\n\r\n\t\t[md-pushpin] a.active {\r\n\t\t\tfont-weight: 500;\r\n\t\t\tpadding-left: 18px;\r\n\t\t\tborder-left: 2px solid #ea4a4f;\r\n\t\t}\r\n\t</style>\r\n\t<div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m8\">\r\n\t\t\t\t<div md-scrollspy=\"target: .scrollspy\">\r\n\t\t\t\t\t<p id=\"spy1\" class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tLook at the right edge.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tFor demonstration purposes, this page has to be much longer.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tOr else the scrollspy wouldn't make any sense.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tSo we put an image here.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p id=\"spy2\" class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\t<img src=\"../../../../images/transition-sample-1.jpg\" class=\"responsive-img\" style=\"width: 500px;\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\tAnd another one to make it really interesting...\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p id=\"spy3\" class=\"more-space section scrollspy\">\r\n\t\t\t\t\t\t<img src=\"../../../../images/parallax-2.jpg\" class=\"responsive-img\" style=\"width: 500px;\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col m4\">\r\n\t\t\t\t<div md-pushpin=\"top: 320; offset: 150;\">\r\n\t\t\t\t\t<md-card md-title=\"Look!\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<ul class=\"section\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#spy1\">I'm a pushpin!</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#spy2\">And a scrollSpy!</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#spy3\">Even a card!</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</md-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</template>\r\n"

/***/ }),

/***/ "samples/scrollspy/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/scrollspy/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/sidenav/basic-use/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/sidenav/basic-use/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<a md-sidenav-collapse=\"ref.bind: sideNav;\" md-button md-waves>Toggle SideNav</a>\r\n\t<md-sidenav view-model.ref=\"sideNav\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a href=\"#\">About</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Installation</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Project Status</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n";

/***/ }),

/***/ "samples/sidenav/basic-use/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<a md-sidenav-collapse=\"ref.bind: sideNav;\" md-button md-waves>Toggle SideNav</a>\r\n\t<md-sidenav view-model.ref=\"sideNav\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a href=\"#\">About</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Installation</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Project Status</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n"

/***/ }),

/***/ "samples/sidenav/basic-use/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

/***/ }),

/***/ "samples/sidenav/controller/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.openSideNav = function () {
        this.sidenavController.show();
    };
    return App;
}());



/***/ }),

/***/ "samples/sidenav/controller/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<a disabled md-sidenav-collapse=\"ref.bind: sideNav;\" md-sidenav-collapse.ref=\"sidenavController\" md-button=\"flat: true;\" md-waves>\r\n    Standard SideNav Toggle\r\n  </a>\r\n\t<div>\r\n\t\t<button md-button click.delegate=\"openSideNav()\">open sidenav</button>\r\n\t</div>\r\n\t<md-sidenav view-model.ref=\"sideNav\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a href=\"#\">About</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Installation</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Project Status</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n";

/***/ }),

/***/ "samples/sidenav/controller/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<a disabled md-sidenav-collapse=\"ref.bind: sideNav;\" md-sidenav-collapse.ref=\"sidenavController\" md-button=\"flat: true;\" md-waves>\r\n    Standard SideNav Toggle\r\n  </a>\r\n\t<div>\r\n\t\t<button md-button click.delegate=\"openSideNav()\">open sidenav</button>\r\n\t</div>\r\n\t<md-sidenav view-model.ref=\"sideNav\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a href=\"#\">About</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Installation</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Project Status</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n"

/***/ }),

/***/ "samples/sidenav/controller/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { MdSidenavCollapse } from \"aurelia-materialize-bridge\";\r\n\r\nexport class App {\r\n\tsidenavController: MdSidenavCollapse;\r\n\r\n\topenSideNav() {\r\n\t\tthis.sidenavController.show();\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/sidenav/events/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.onShow = function (e) {
        this.logger.log("sidenav opened; " + JSON.stringify(e));
    };
    App.prototype.onHide = function (e) {
        this.logger.log("sidenav closed; " + JSON.stringify(e));
    };
    return App;
}());



/***/ }),

/***/ "samples/sidenav/events/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<a md-sidenav-collapse=\"ref.bind: sideNav;\" md-button md-waves>Toggle SideNav</a>\r\n\t<div>\r\n\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t</div>\r\n\r\n\t<md-sidenav md-on-sidenav-show.delegate=\"onShow($event)\" md-on-sidenav-hide.delegate=\"onHide($event)\" view-model.ref=\"sideNav\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a href=\"#\">About</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Installation</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Project Status</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n";

/***/ }),

/***/ "samples/sidenav/events/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<a md-sidenav-collapse=\"ref.bind: sideNav;\" md-button md-waves>Toggle SideNav</a>\r\n\t<div>\r\n\t\t<logger class=\"z-depth-1\" view-model.ref=\"logger\"></logger>\r\n\t</div>\r\n\r\n\t<md-sidenav md-on-sidenav-show.delegate=\"onShow($event)\" md-on-sidenav-hide.delegate=\"onHide($event)\" view-model.ref=\"sideNav\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a href=\"#\">About</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Installation</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Project Status</a></li>\r\n\t\t\t<li md-waves><a href=\"#\">Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n"

/***/ }),

/***/ "samples/sidenav/events/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "import { Logger } from \"../../../shared/logger\";\r\n\r\nexport class App {\r\n\tlogger: Logger;\r\n\r\n\tonShow(e) {\r\n\t\tthis.logger.log(`sidenav opened; ${JSON.stringify(e)}`);\r\n\t}\r\n\r\n\tonHide(e) {\r\n\t\tthis.logger.log(`sidenav closed; ${JSON.stringify(e)}`);\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/sidenav/fixed-sidenav/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
        this.show = true;
    }
    App.prototype.toggleSideNav = function () {
        this.show = !this.show;
    };
    return App;
}());



/***/ }),

/***/ "samples/sidenav/fixed-sidenav/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\tIt's on the right edge. Make sure, your viewport is big enough.\r\n\t</div>\r\n\t<div>\r\n\t\t<button md-button=\"flat: true;\" md-waves=\"color: primary;\" click.delegate=\"toggleSideNav()\">toggle</button>\r\n\t</div>\r\n\r\n\t<md-sidenav view-model.ref=\"sideNav\" md-fixed.bind=\"show\" md-edge=\"right\">\r\n\t\t<!-- md-edge=\"right\" -->\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n";

/***/ }),

/***/ "samples/sidenav/fixed-sidenav/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\tIt's on the right edge. Make sure, your viewport is big enough.\r\n\t</div>\r\n\t<div>\r\n\t\t<button md-button=\"flat: true;\" md-waves=\"color: primary;\" click.delegate=\"toggleSideNav()\">toggle</button>\r\n\t</div>\r\n\r\n\t<md-sidenav view-model.ref=\"sideNav\" md-fixed.bind=\"show\" md-edge=\"right\">\r\n\t\t<!-- md-edge=\"right\" -->\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n"

/***/ }),

/***/ "samples/sidenav/fixed-sidenav/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App {\r\n\tshow = true;\r\n\r\n\ttoggleSideNav() {\r\n\t\tthis.show = !this.show;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "samples/sidenav/index":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_index_base__ = __webpack_require__("samples/sample-index-base");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__ = __webpack_require__(7);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(eventAggregator, loader, taskQueue, http) {
        return _super.call(this, eventAggregator, loader, taskQueue, http) || this;
    }
    Index.prototype.configureRouter = function (config, router) {
        var routes = [
            { route: "", redirect: "basic-use" },
            _super.prototype.getRouteConfig.call(this, "basic-use"),
            _super.prototype.getRouteConfig.call(this, "options"),
            _super.prototype.getRouteConfig.call(this, "fixed-sidenav"),
            _super.prototype.getRouteConfig.call(this, "controller"),
            _super.prototype.getRouteConfig.call(this, "events"),
        ];
        config.map(routes);
        this.router = router;
    };
    Index = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["o" /* useView */])("../sample-template.html"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["b" /* Loader */], __WEBPACK_IMPORTED_MODULE_2_aurelia_framework__["d" /* TaskQueue */], __WEBPACK_IMPORTED_MODULE_4_aurelia_fetch_client__["a" /* HttpClient */]])
    ], Index);
    return Index;
}(__WEBPACK_IMPORTED_MODULE_3__sample_index_base__["SampleIndexBase"]));



/***/ }),

/***/ "samples/sidenav/options/app":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "samples/sidenav/options/app.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavLeft;\" md-button md-waves>Left SideNav</a>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavRight;\" md-button md-waves>Right SideNav</a>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavLarge;\" md-button md-waves>Larger right SideNav</a>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavCloseOnClick;\" md-button md-waves>Close on click</a>\r\n\t</div>\r\n\r\n\t<!-- left sidenav -->\r\n\t<md-sidenav view-model.ref=\"sideNavLeft\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n\r\n\t<!-- right sidenav -->\r\n\t<md-sidenav view-model.ref=\"sideNavRight\" md-edge=\"right\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n\r\n\t<!-- right sidenav with custom width -->\r\n\t<md-sidenav md-width=\"350\" view-model.ref=\"sideNavLarge\" md-edge=\"right\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n\r\n\t<!-- right sidenav with closeOnCLick set -->\r\n\t<md-sidenav view-model.ref=\"sideNavCloseOnClick\" md-edge=\"right\" md-close-on-click=\"true\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n";

/***/ }),

/***/ "samples/sidenav/options/app.html.raw":
/***/ (function(module, exports) {

module.exports = "<template>\r\n\t<div>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavLeft;\" md-button md-waves>Left SideNav</a>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavRight;\" md-button md-waves>Right SideNav</a>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavLarge;\" md-button md-waves>Larger right SideNav</a>\r\n\t\t<a md-sidenav-collapse=\"ref.bind: sideNavCloseOnClick;\" md-button md-waves>Close on click</a>\r\n\t</div>\r\n\r\n\t<!-- left sidenav -->\r\n\t<md-sidenav view-model.ref=\"sideNavLeft\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n\r\n\t<!-- right sidenav -->\r\n\t<md-sidenav view-model.ref=\"sideNavRight\" md-edge=\"right\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n\r\n\t<!-- right sidenav with custom width -->\r\n\t<md-sidenav md-width=\"350\" view-model.ref=\"sideNavLarge\" md-edge=\"right\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n\r\n\t<!-- right sidenav with closeOnCLick set -->\r\n\t<md-sidenav view-model.ref=\"sideNavCloseOnClick\" md-edge=\"right\" md-close-on-click=\"true\">\r\n\t\t<ul>\r\n\t\t\t<li md-waves><a>About</a></li>\r\n\t\t\t<li md-waves><a>Installation</a></li>\r\n\t\t\t<li md-waves><a>Project Status</a></li>\r\n\t\t\t<li md-waves><a>Help/Docs</a></li>\r\n\t\t</ul>\r\n\t</md-sidenav>\r\n</template>\r\n"

/***/ }),

/***/ "samples/sidenav/options/app.ts.raw":
/***/ (function(module, exports) {

module.exports = "export class App { }\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_themes_prism_css__ = __webpack_require__("prismjs/themes/prism.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_themes_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_themes_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_plugins_normalize_whitespace_prism_normalize_whitespace_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_loader__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







__WEBPACK_IMPORTED_MODULE_1_prismjs__["plugins"].NormalizeWhitespace.setDefaults({ "tabs-to-spaces": 2 });
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
        this.html = __WEBPACK_IMPORTED_MODULE_1_prismjs__["plugins"].NormalizeWhitespace.normalize(this.html);
        pre.innerHTML = __WEBPACK_IMPORTED_MODULE_1_prismjs__["highlight"](this.html, __WEBPACK_IMPORTED_MODULE_1_prismjs__["languages"][this.language]);
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], AuCode.prototype, "language", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], AuCode.prototype, "url", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], AuCode.prototype, "text", void 0);
    AuCode = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["n" /* processContent */])(function (compiler, resources, element, instruction) {
            parseCode(element, resources, instruction);
            return true;
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["k" /* customElement */])("au-code"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["l" /* noView */],
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["c" /* TargetInstruction */], __WEBPACK_IMPORTED_MODULE_6_aurelia_loader__["a" /* Loader */]])
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ "shared/au-markdown":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuMarkdown", function() { return AuMarkdown; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_showdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_showdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_code_prettify_run_prettify__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_code_prettify_run_prettify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_code_prettify_run_prettify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_showdown_prettify__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_showdown_prettify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_showdown_prettify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__ = __webpack_require__(15);
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
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], AuMarkdown.prototype, "url", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], AuMarkdown.prototype, "text", void 0);
    AuMarkdown = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["k" /* customElement */])("au-markdown"),
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["l" /* noView */],
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* autoinject */],
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__["a" /* Loader */]])
    ], AuMarkdown);
    return AuMarkdown;
}());



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
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], CollapsePanel.prototype, "title", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], CollapsePanel.prototype, "footer", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", Boolean)
    ], CollapsePanel.prototype, "allowCollapse", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", Boolean)
    ], CollapsePanel.prototype, "collapsed", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* bindable */],
        __metadata("design:type", String)
    ], CollapsePanel.prototype, "panelClass", void 0);
    return CollapsePanel;
}());



/***/ }),

/***/ "shared/collapse-panel.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <div>\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</template>\n";

/***/ }),

/***/ "shared/logger":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["k" /* customElement */])("logger")
    ], Logger);
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(1)))

/***/ }),

/***/ "shared/logger.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <div class=\"console\">\n  </div>\n</template>\n";

/***/ }),

/***/ "shared/showcase.html":
/***/ (function(module, exports) {

module.exports = "<template>\n  <!-- Page is shared by all widgets and sets up the sub-navigation pane -->\n  <section class=\"view-showcase\">\n      <h4>${ router.title }</h4>\n      <div class=\"row\">\n          <div class=\"col s12 m2\">\n              <md-well router.bind=\"router\"></md-well>\n          </div>\n          <div class=\"col s10\">\n              <router-view></router-view>\n          </div>\n      </div>\n  </section>\n</template>\n";

/***/ })

},[61]);
//# sourceMappingURL=app.js.map