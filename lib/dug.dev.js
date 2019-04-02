/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dug.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dug.ts":
/*!********************!*\
  !*** ./src/dug.ts ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Dug = /** @class */ (function () {\n        function Dug(config, handleError) {\n            var _this = this;\n            this.get = function (url) {\n                var options = __assign({}, _this.config);\n                options.method = 'GET';\n                return fetch(url, options) // body data type must match \"Content-Type\" header\n                    .then(_this.errorHandler)\n                    .then(function (response) { return response.json(); }); // parses response to JSON\n            };\n            this.post = function (url, data) {\n                var options = __assign({}, _this.config);\n                options.method = 'POST';\n                options.body = JSON.stringify(data);\n                return fetch(url, options) // body data type must match \"Content-Type\" header\n                    .then(_this.errorHandler)\n                    .then(function (response) { return response.json(); }); // parses response to JSON\n            };\n            this.put = function (url, data) {\n                var options = __assign({}, _this.config);\n                options.method = 'PUT';\n                options.body = JSON.stringify(data);\n                return fetch(url, options) // body data type must match \"Content-Type\" header\n                    .then(_this.errorHandler)\n                    .then(function (response) { return response.json(); }); // parses response to JSON\n            };\n            this.delete = function (url) {\n                var options = __assign({}, _this.config);\n                options.method = 'DELETE';\n                return fetch(url, options) // body data type must match \"Content-Type\" header\n                    .then(_this.errorHandler)\n                    .then(function (response) { return response.json(); }); // parses response to JSON\n            };\n            this.config = config;\n            this.errorHandler = handleError;\n        }\n        return Dug;\n    }());\n    exports.Dug = Dug;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/dug.ts?");

/***/ })

/******/ });