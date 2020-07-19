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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: performAction, validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/client/js/app.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return _js_app__WEBPACK_IMPORTED_MODULE_0__[\"performAction\"]; });\n\n/* harmony import */ var _js_formChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formChecker */ \"./src/client/js/formChecker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validateForm\", function() { return _js_formChecker__WEBPACK_IMPORTED_MODULE_1__[\"validateForm\"]; });\n\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/base.scss */ \"./src/client/styles/base.scss\");\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/footer.scss */ \"./src/client/styles/footer.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/form.scss */ \"./src/client/styles/form.scss\");\n/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_form_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/header.scss */ \"./src/client/styles/header.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/resets.scss */ \"./src/client/styles/resets.scss\");\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_resets_scss__WEBPACK_IMPORTED_MODULE_6__);\n // importing func performAction from js/app\n\n\n // import scss\n//import \"./styles/style.scss\";\n\n\n\n\n\n\nconsole.log(_js_formChecker__WEBPACK_IMPORTED_MODULE_1__[\"validateForm\"]);\nalert(\"I exist!\");\nalert(\"I am here!\");\nalert(\"I Exist 2\"); // Call init on DOMContentLoaded event\n\nwindow.addEventListener('DOMContentLoaded', _js_app__WEBPACK_IMPORTED_MODULE_0__[\"init\"]);\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/app.js":
/*!******************************!*\
  !*** ./src/client/js/app.js ***!
  \******************************/
/*! exports provided: performAction, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"performAction\", function() { return performAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _formChecker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formChecker.js */ \"./src/client/js/formChecker.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // import validateForm from form Checker\n\n/* Global Variables */\n//=========== 2. set up the parts of the app ==================\n//Personal API Key from OpenWeatherMap API\n// create a base url\n\nvar baseURL = 'https://api.openweathermap.org/data/2.5/weather?'; // decalare a variable to handle dynamic zip code from user\n\nvar zipCode = document.getElementById('zip');\nvar units = 'metric';\nvar apiKey = '4d5b7b38c3135d07c13a6307ddc892f4'; //'Your API KEY HERE';\n\nvar url = \"\".concat(baseURL, \"zip=\").concat(zipCode, \"&units=\").concat(units, \"&appid=\").concat(apiKey); // may use url too\n// get the DOM elements\n\nvar status = document.getElementById('feelings').value;\nvar currentDate = document.getElementById('date'); // Create a new date instance dynamically with JS\n\nvar d = new Date();\nvar newDate = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear(); //month index starts at 0, add +1 to even up\n//currentDate.textContent = \"Posted on: \" + newDate;\n//add listener and a callback function to the button\n\ndocument.getElementById('generate').addEventListener('click', performAction);\n\nfunction performAction(e) {\n  //getNowWeather(url);\n  e.preventDefault(); //towards form validation\n\n  var zipCode = document.getElementById('zip').value;\n  var feelings = document.getElementById('feelings').value;\n  var message = \"Check Your Zip Code and try Again!\"; // Form validation\n\n  if (zipCode.length == 0) {\n    alert(\"Please enter zip code\");\n    return;\n  }\n\n  if (feelings.length == 0) {\n    alert(\"Please enter feelings\");\n    return;\n  } //getWeatherData the projectData\n\n\n  getNowWeather(baseURL, zipCode, apiKey).then(function (projectData) {\n    postData('addWeather', {\n      // as recommended by Mentor\n      temperature: projectData.main.temp,\n      date: newDate,\n      userFeeling: feelings,\n      // weather summary for city, country\n      weatherNow: projectData.weather[0].description,\n      cityName: projectData.name,\n      country: projectData.sys.country\n    });\n    updateUI();\n  })[\"catch\"](function (error) {\n    //console.log(error, message);\n    console.log(\"Error:\", message);\n  });\n}\n\nvar getNowWeather = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var zip, weather_url, errMessage, response, data;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            zip = zipCode.value;\n            errMessage = \"City Not Found\"; //build the url\n\n            weather_url = \"\".concat(baseURL, \"zip=\").concat(zip, \"&units=\").concat(units, \"&appid=\").concat(apiKey);\n            _context.next = 5;\n            return fetch(weather_url);\n\n          case 5:\n            response = _context.sent;\n            _context.prev = 6;\n            _context.next = 9;\n            return response.json();\n\n          case 9:\n            data = _context.sent;\n            console.log(data);\n            return _context.abrupt(\"return\", data);\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](6);\n            console.log(errMessage);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[6, 14]]);\n  }));\n\n  return function getNowWeather() {\n    return _ref.apply(this, arguments);\n  };\n}(); //=========== 1. set up post data async fun ==================\n\n\nvar postData = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var url,\n        data,\n        response,\n        newData,\n        _args2 = arguments;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';\n            data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};\n            console.log(data);\n            _context2.next = 5;\n            return fetch(url, {\n              method: 'POST',\n              // the method we want, can be POST, GET, PUT, DELETE etc\n              credentials: 'same-origin',\n              headers: {\n                'Content-Type': 'application/json' // we use json, tell app to use json data, Make sure to use same type of data in the body\n\n              },\n              // Body data type must match \"Content-Type\" header\n              body: JSON.stringify(data) // tell browser to handle json as string\n\n            });\n\n          case 5:\n            response = _context2.sent;\n            _context2.prev = 6;\n            _context2.next = 9;\n            return response.json();\n\n          case 9:\n            newData = _context2.sent;\n            console.log(newData);\n            return _context2.abrupt(\"return\", newData);\n\n          case 14:\n            _context2.prev = 14;\n            _context2.t0 = _context2[\"catch\"](6);\n            console.log(\"error\", _context2.t0);\n\n          case 17:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[6, 14]]);\n  }));\n\n  return function postData() {\n    return _ref2.apply(this, arguments);\n  };\n}(); // Update The UI\n\n\nvar updateUI = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var request, allData, index;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return fetch('/all');\n\n          case 2:\n            request = _context3.sent;\n            console.log('UPDATE UI');\n            _context3.prev = 4;\n            _context3.next = 7;\n            return request.json();\n\n          case 7:\n            allData = _context3.sent;\n            console.log('allData: ' + allData);\n            index = allData.length - 1; // get the last entry in the array and update the ui with it as below\n            // update the HTML elements\n\n            document.getElementById('date').innerHTML = \"Posted on: \" + newDate;\n            document.getElementById('temp').innerHTML = \"The temperature is: \" + allData[index].temp + \" &#176;\" + \"C\"; //weather\n\n            document.getElementById('content').innerHTML = \"And you're feeling: \" + allData[index].userFeeling; //My Additions\n\n            document.getElementById('description').innerHTML = allData[index].description;\n            document.getElementById('city').innerHTML = allData[index].name;\n            document.getElementById('country').innerHTML = allData[index].country;\n            _context3.next = 21;\n            break;\n\n          case 18:\n            _context3.prev = 18;\n            _context3.t0 = _context3[\"catch\"](4);\n            console.log(\"error\", _context3.t0);\n\n          case 21:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[4, 18]]);\n  }));\n\n  return function updateUI() {\n    return _ref3.apply(this, arguments);\n  };\n}(); // initialize the app (this func will hold all the codes). performAction(e) can also be used for this purpose\n\n\nfunction init(event) {//Todo\n} // then export the func here and go to import in index.js\n\n\n\n\n//# sourceURL=webpack:///./src/client/js/app.js?");

/***/ }),

/***/ "./src/client/js/formChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/formChecker.js ***!
  \**************************************/
/*! exports provided: validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForm\", function() { return validateForm; });\nfunction validateForm(input) {\n  console.log(\"::: Running Validate :::\", input);\n}\n\n\n\n//# sourceURL=webpack:///./src/client/js/formChecker.js?");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/styles/base.scss?");

/***/ }),

/***/ "./src/client/styles/footer.scss":
/*!***************************************!*\
  !*** ./src/client/styles/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/styles/footer.scss?");

/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/styles/form.scss?");

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/styles/header.scss?");

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/styles/resets.scss?");

/***/ })

/******/ });