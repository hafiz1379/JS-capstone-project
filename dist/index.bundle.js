"use strict";
(self["webpackChunkjs_capstone_project_2"] = self["webpackChunkjs_capstone_project_2"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n\r\n.reserveSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2vh 0;\r\n  align-items: center;\r\n  gap: 2vh;\r\n}\r\n\r\n.listReserve {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  padding: 2vh 3vh;\r\n  align-items: center;\r\n  gap: 1vh;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n\r\n.reserveSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2vh 0;\r\n  align-items: center;\r\n  gap: 2vh;\r\n}\r\n\r\n.listReserve {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  padding: 2vh 3vh;\r\n  align-items: center;\r\n  gap: 1vh;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_nitro_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/nitro-logo.png */ "./src/images/nitro-logo.png");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _modules_reserve_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reserve.js */ "./src/modules/reserve.js");
/* harmony import */ var _modules_movieCount_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/movieCount.js */ "./src/modules/movieCount.js");






const $ = document;

// Find the logo image element and set its src attribute
const logoImage = $.querySelector('.logo');
logoImage.src = _images_nitro_logo_png__WEBPACK_IMPORTED_MODULE_1__;

const apiUrl = 'https://api.tvmaze.com/shows';
const likesApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EggSGBLacbxyGumZrK3e/likes/';
const movieCardsContainer = $.getElementById('movie-cards');

const fetchMovieData = async (showId) => {
  const response = await fetch(`${apiUrl}/${showId}`);
  const data = await response.json();
  return {
    name: data.name,
    image: data.image.medium,
    summary: data.summary,
    genres: data.genres,
    id: data.id,
    showStatus: data.status,
    premiered: data.premiered,
  };
};

const fetchLikesData = async (showId) => {
  const response = await fetch(`${likesApiUrl}?item_id=${showId}`);
  const data = await response.json();
  // eslint-disable-next-line camelcase
  const res = data.find(({ item_id }) => item_id === showId);
  return res ? res.likes : 0;
};

const updateLikesData = async (showId, likes) => {
  const response = await fetch(`${likesApiUrl}`, {
    method: 'POST',
    body: JSON.stringify({ item_id: showId, likes }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.text();
  return data;
};

const createMovieCard = async (movieData, showId) => {
  const card = $.createElement('div');
  card.classList.add('movie-card');
  card.id = `movie-${showId}`;

  const title = $.createElement('h2');
  title.innerText = movieData.name;

  const image = $.createElement('img');
  image.src = movieData.image;

  const comment = $.createElement('button');
  comment.innerHTML = 'Comment';

  const likeBtn = document.createElement('button');
  likeBtn.classList.add('likes');
  likeBtn.innerHTML = 'Like';

  const likes = document.createElement('p');
  likes.innerHTML = 'Likes: 0';

  const movieLikes = await fetchLikesData(showId);
  likes.innerHTML = `Likes: ${movieLikes}`;

  likeBtn.addEventListener('click', async () => {
    const currentLikes = parseInt(likes.innerHTML.split(' ')[1], 10);
    const newLikes = currentLikes + 1;
    likes.innerHTML = `Likes: ${newLikes}`;
    await updateLikesData(showId, newLikes);
  });

  // event listener for every comment button
  comment.addEventListener('click', () => {
    (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movieData);
  });

  const reserv = $.createElement('button');
  reserv.innerHTML = 'reserv';
  reserv.classList.add('reservBtn');

  reserv.addEventListener('click', () => {
    (0,_modules_reserve_js__WEBPACK_IMPORTED_MODULE_3__["default"])(movieData);
  });

  const genres = $.createElement('p');
  genres.innerHTML = `<strong>Genres:</strong> ${movieData.genres.join(', ')}`;

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(genres);
  card.appendChild(likeBtn);
  card.appendChild(likes);
  card.appendChild(comment);
  card.appendChild(reserv);
  return card;
};

const createMovieCards = async () => {
  const response = await fetch(`${apiUrl}`);
  const showData = await response.json();
  const shows = showData.slice(0, 20);
  const count = shows.length;
  (0,_modules_movieCount_js__WEBPACK_IMPORTED_MODULE_4__["default"])(count);

  // Create movie cards for each TV show
  shows.forEach(async (show) => {
    const movieData = await fetchMovieData(show.id);
    const movieCard = await createMovieCard(movieData, show.id);
    movieCardsContainer.appendChild(movieCard);
  });
};

createMovieCards();

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadSaveComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadSaveComment.js */ "./src/modules/loadSaveComment.js");


const showComments = (movieData) => {
  const $ = document;
  const movieCardsContainer = $.getElementById('movie-cards');

  const popUp = $.createElement('div');
  popUp.classList.add('popUp');

  const popCard = $.createElement('div');
  popCard.classList.add('popCard');

  const closeButton = $.createElement('button');
  closeButton.classList.add('closeButton');
  closeButton.innerText = 'X';
  closeButton.addEventListener('click', () => {
    movieCardsContainer.removeChild(popUp);
  });

  const newImage = $.createElement('img');
  newImage.classList.add('commentImage');
  newImage.src = movieData.image;

  const title = $.createElement('h2');
  title.classList.add('commentTitle');
  title.innerText = movieData.name;

  const status = $.createElement('p');
  status.innerHTML = `status: ${movieData.showStatus}`;

  const premiered = $.createElement('p');
  premiered.innerHTML = `premiered: ${movieData.premiered}`;

  const commentTitle = $.createElement('h3');
  commentTitle.classList.add('commentNumber');
  commentTitle.innerHTML = 'Comments';

  const commentSection = $.createElement('div');
  commentSection.classList.add('commentSection');

  const commentAddTitle = $.createElement('h3');
  commentAddTitle.innerHTML = 'Add a comment';

  const nameInput = $.createElement('input');
  nameInput.classList.add('commentName');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Your Name');
  nameInput.required = true;

  const messageInput = $.createElement('textarea');
  messageInput.classList.add('commentMessage');
  messageInput.setAttribute('placeholder', 'Enter your comment/message');
  messageInput.required = true;

  const sendButton = $.createElement('button');
  sendButton.innerText = 'Send';
  sendButton.addEventListener('click', async (event) => {
    event.preventDefault();
    await (0,_loadSaveComment_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(movieData);
    await (0,_loadSaveComment_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(movieData);
  });

  popCard.appendChild(closeButton);
  popCard.appendChild(newImage);
  popCard.appendChild(title);
  popCard.appendChild(status);
  popCard.appendChild(premiered);
  popCard.appendChild(commentTitle);
  popCard.appendChild(commentSection);
  popCard.appendChild(commentAddTitle);
  popCard.appendChild(nameInput);
  popCard.appendChild(messageInput);
  popCard.appendChild(sendButton);

  popUp.appendChild(popCard);
  movieCardsContainer.appendChild(popUp);

  (0,_loadSaveComment_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(movieData);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (data) => {
  const commentTitle = document.querySelector('.commentNumber');
  commentTitle.innerHTML = `Comments (${data.length})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/loadSaveComment.js":
/*!****************************************!*\
  !*** ./src/modules/loadSaveComment.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");


const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments?item_id=${movieData.id}`;
  const commentSection = document.querySelector('.commentSection');
  commentSection.innerHTML = '';

  try {
    const response = await fetch(API);
    const data = await response.json();

    if (data.length > 0) {
      data.forEach((element) => {
        const toAdd = document.createElement('p');
        toAdd.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
        commentSection.appendChild(toAdd);
        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
      });
    } else {
      commentSection.innerHTML = 'No comments yet';
      (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
    }
    // Process the retrieved data
  } catch (error) {
    commentSection.innerHTML = 'An error has occured while loading the comments';
  }
};

const saveData = async (movieData) => {
  const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments';
  const username = document.querySelector('.commentName');
  const comment = document.querySelector('.commentMessage');

  const usernameValue = username.value.trim();
  const commentValue = comment.value.trim();

  if (usernameValue === '' || commentValue === '') {
    username.setAttribute('placeholder', 'Please enter your name');
    comment.setAttribute('placeholder', 'Please enter your comment');
    return;
  }

  const commentObject = {
    item_id: movieData.id,
    username: username.value,
    comment: comment.value,
  };
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentObject),
  });

  username.value = '';
  comment.value = '';
};



/***/ }),

/***/ "./src/modules/loadSaveReserve.js":
/*!****************************************!*\
  !*** ./src/modules/loadSaveReserve.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/reservations?item_id=item${movieData.id}`;
  const reserveSection = document.querySelector('.reserveSection');
  const toAddReserve = document.createElement('div');
  toAddReserve.classList.add('listReserve');

  try {
    const response = await fetch(API);
    const data = await response.json();

    // Process the retrieved data
    data.forEach((element) => {
      toAddReserve.innerHTML += `
      <p>${element.date_start} - ${element.date_end} by ${element.username}</p>
      `;
      reserveSection.appendChild(toAddReserve);
    });
  } catch (error) {
    toAddReserve.innerHTML = '<h3><b>No reserve yet</b></h3>';
    reserveSection.appendChild(toAddReserve);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

/***/ }),

/***/ "./src/modules/movieCount.js":
/*!***********************************!*\
  !*** ./src/modules/movieCount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateMovieCardCount = (count) => {
  const movieCardCount = document.getElementById('span');
  movieCardCount.textContent = count;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateMovieCardCount);

/***/ }),

/***/ "./src/modules/reserve.js":
/*!********************************!*\
  !*** ./src/modules/reserve.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadSaveReserve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadSaveReserve.js */ "./src/modules/loadSaveReserve.js");


const reserve = (movieData) => {
  const $ = document;
  const reserveCard = $.getElementById('reserveCard');
  const bodyOverflow = $.getElementById('body');
  reserveCard.style.display = 'block';
  bodyOverflow.style.overflow = 'hidden';

  const modalContent = $.createElement('div');
  modalContent.classList.add('modalContent');

  const span = $.createElement('button');
  span.classList.add('closeButton');
  span.textContent = 'X';
  span.onclick = () => {
    reserveCard.removeChild(modalContent);
    reserveCard.style.display = 'none';
    bodyOverflow.style.overflow = 'auto';
  };
  window.onclick = (e) => {
    if (e.target === reserveCard) {
      reserveCard.removeChild(modalContent);
      reserveCard.style.display = 'none';
      bodyOverflow.style.overflow = 'auto';
    }
  };

  const popImg = $.createElement('div');
  popImg.classList.add('popImg');
  const img = $.createElement('img');
  img.classList.add('imgReserve');
  img.src = movieData.image;
  popImg.appendChild(img);

  const containerInfo = $.createElement('div');
  containerInfo.classList.add('containerInfo');
  containerInfo.innerHTML = `
    <p><b>Title:</b> ${movieData.name}</p><p><b>Summary:</b> ${movieData.summary}</p><p><b>Genres:</b> ${movieData.genres}</p>
  `;

  const reserveSection = $.createElement('div');
  reserveSection.classList.add('reserveSection');
  const titleSection = $.createElement('h2');
  titleSection.textContent = 'Reservations';
  reserveSection.appendChild(titleSection);

  modalContent.appendChild(span);
  modalContent.appendChild(popImg);
  modalContent.appendChild(containerInfo);
  modalContent.appendChild(reserveSection);

  reserveCard.appendChild(modalContent);
  (0,_loadSaveReserve_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieData);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reserve);

/***/ }),

/***/ "./src/images/nitro-logo.png":
/*!***********************************!*\
  !*** ./src/images/nitro-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38f90e44fe46ec28dc20.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFB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QUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9tb2R1bGVzL2xvYWRTYXZlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvbW9kdWxlcy9sb2FkU2F2ZVJlc2VydmUuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL21vZHVsZXMvbW92aWVDb3VudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvbW9kdWxlcy9yZXNlcnZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItYmx1ZTogIzAwMjk2YjtcXHJcXG4gIC0tYm9keS1ibHVlOiAjMDA1MDlkO1xcclxcbiAgLS1idXR0b24tYmx1ZTogIzhlY2FlNjtcXHJcXG4gIC0tbWFpbi1vcmFuZ2U6ICNmYjg1MDA7XFxyXFxuICAtLWJ1dHRvbi15ZWxsb3c6ICNmZmQ1MDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWmlsbGEgU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1ibHVlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0Rm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbiNjb3B5cmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLWNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQge1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDIxJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkOmhvdmVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDI0JTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcENhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRJbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudFNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmVDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NCwgMTc0LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBSIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3BJbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3ZoIDA7XFxyXFxufVxcclxcblxcclxcbi5pbWdSZXNlcnZlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJJbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMnZoIDV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlU2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDJ2aCAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdFJlc2VydmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDJ2aCAzdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxdmg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNF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Q2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItYmx1ZTogIzAwMjk2YjtcXHJcXG4gIC0tYm9keS1ibHVlOiAjMDA1MDlkO1xcclxcbiAgLS1idXR0b24tYmx1ZTogIzhlY2FlNjtcXHJcXG4gIC0tbWFpbi1vcmFuZ2U6ICNmYjg1MDA7XFxyXFxuICAtLWJ1dHRvbi15ZWxsb3c6ICNmZmQ1MDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWmlsbGEgU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1ibHVlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0Rm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbiNjb3B5cmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLWNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQge1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDIxJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkOmhvdmVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDI0JTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcENhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRJbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudFNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmVDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NCwgMTc0LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBSIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3BJbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3ZoIDA7XFxyXFxufVxcclxcblxcclxcbi5pbWdSZXNlcnZlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJJbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMnZoIDV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlU2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDJ2aCAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdFJlc2VydmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDJ2aCAzdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxdmg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvbml0cm8tbG9nby5wbmcnO1xyXG5pbXBvcnQgc2hvd0NvbW1lbnRzIGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcclxuaW1wb3J0IHJlc2VydmUgZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmUuanMnO1xyXG5pbXBvcnQgdXBkYXRlTW92aWVDYXJkQ291bnQgZnJvbSAnLi9tb2R1bGVzL21vdmllQ291bnQuanMnO1xyXG5cclxuY29uc3QgJCA9IGRvY3VtZW50O1xyXG5cclxuLy8gRmluZCB0aGUgbG9nbyBpbWFnZSBlbGVtZW50IGFuZCBzZXQgaXRzIHNyYyBhdHRyaWJ1dGVcclxuY29uc3QgbG9nb0ltYWdlID0gJC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5sb2dvSW1hZ2Uuc3JjID0gSWNvbjtcclxuXHJcbmNvbnN0IGFwaVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcclxuY29uc3QgbGlrZXNBcGlVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRWdnU0dCTGFjYnh5R3VtWnJLM2UvbGlrZXMvJztcclxuY29uc3QgbW92aWVDYXJkc0NvbnRhaW5lciA9ICQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllLWNhcmRzJyk7XHJcblxyXG5jb25zdCBmZXRjaE1vdmllRGF0YSA9IGFzeW5jIChzaG93SWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vJHtzaG93SWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgaW1hZ2U6IGRhdGEuaW1hZ2UubWVkaXVtLFxyXG4gICAgc3VtbWFyeTogZGF0YS5zdW1tYXJ5LFxyXG4gICAgZ2VucmVzOiBkYXRhLmdlbnJlcyxcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgc2hvd1N0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICBwcmVtaWVyZWQ6IGRhdGEucHJlbWllcmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaExpa2VzRGF0YSA9IGFzeW5jIChzaG93SWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2xpa2VzQXBpVXJsfT9pdGVtX2lkPSR7c2hvd0lkfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG4gIGNvbnN0IHJlcyA9IGRhdGEuZmluZCgoeyBpdGVtX2lkIH0pID0+IGl0ZW1faWQgPT09IHNob3dJZCk7XHJcbiAgcmV0dXJuIHJlcyA/IHJlcy5saWtlcyA6IDA7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVMaWtlc0RhdGEgPSBhc3luYyAoc2hvd0lkLCBsaWtlcykgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bGlrZXNBcGlVcmx9YCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IHNob3dJZCwgbGlrZXMgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNb3ZpZUNhcmQgPSBhc3luYyAobW92aWVEYXRhLCBzaG93SWQpID0+IHtcclxuICBjb25zdCBjYXJkID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmllLWNhcmQnKTtcclxuICBjYXJkLmlkID0gYG1vdmllLSR7c2hvd0lkfWA7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gJC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IG1vdmllRGF0YS5uYW1lO1xyXG5cclxuICBjb25zdCBpbWFnZSA9ICQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2Uuc3JjID0gbW92aWVEYXRhLmltYWdlO1xyXG5cclxuICBjb25zdCBjb21tZW50ID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb21tZW50LmlubmVySFRNTCA9ICdDb21tZW50JztcclxuXHJcbiAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnbGlrZXMnKTtcclxuICBsaWtlQnRuLmlubmVySFRNTCA9ICdMaWtlJztcclxuXHJcbiAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbGlrZXMuaW5uZXJIVE1MID0gJ0xpa2VzOiAwJztcclxuXHJcbiAgY29uc3QgbW92aWVMaWtlcyA9IGF3YWl0IGZldGNoTGlrZXNEYXRhKHNob3dJZCk7XHJcbiAgbGlrZXMuaW5uZXJIVE1MID0gYExpa2VzOiAke21vdmllTGlrZXN9YDtcclxuXHJcbiAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRMaWtlcyA9IHBhcnNlSW50KGxpa2VzLmlubmVySFRNTC5zcGxpdCgnICcpWzFdLCAxMCk7XHJcbiAgICBjb25zdCBuZXdMaWtlcyA9IGN1cnJlbnRMaWtlcyArIDE7XHJcbiAgICBsaWtlcy5pbm5lckhUTUwgPSBgTGlrZXM6ICR7bmV3TGlrZXN9YDtcclxuICAgIGF3YWl0IHVwZGF0ZUxpa2VzRGF0YShzaG93SWQsIG5ld0xpa2VzKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGV2ZXJ5IGNvbW1lbnQgYnV0dG9uXHJcbiAgY29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNob3dDb21tZW50cyhtb3ZpZURhdGEpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZXNlcnYgPSAkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlc2Vydi5pbm5lckhUTUwgPSAncmVzZXJ2JztcclxuICByZXNlcnYuY2xhc3NMaXN0LmFkZCgncmVzZXJ2QnRuJyk7XHJcblxyXG4gIHJlc2Vydi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2VydmUobW92aWVEYXRhKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2VucmVzID0gJC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZ2VucmVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkdlbnJlczo8L3N0cm9uZz4gJHttb3ZpZURhdGEuZ2VucmVzLmpvaW4oJywgJyl9YDtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChnZW5yZXMpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlrZUJ0bik7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChsaWtlcyk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChjb21tZW50KTtcclxuICBjYXJkLmFwcGVuZENoaWxkKHJlc2Vydik7XHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNb3ZpZUNhcmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfWApO1xyXG4gIGNvbnN0IHNob3dEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IHNob3dzID0gc2hvd0RhdGEuc2xpY2UoMCwgMjApO1xyXG4gIGNvbnN0IGNvdW50ID0gc2hvd3MubGVuZ3RoO1xyXG4gIHVwZGF0ZU1vdmllQ2FyZENvdW50KGNvdW50KTtcclxuXHJcbiAgLy8gQ3JlYXRlIG1vdmllIGNhcmRzIGZvciBlYWNoIFRWIHNob3dcclxuICBzaG93cy5mb3JFYWNoKGFzeW5jIChzaG93KSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZURhdGEgPSBhd2FpdCBmZXRjaE1vdmllRGF0YShzaG93LmlkKTtcclxuICAgIGNvbnN0IG1vdmllQ2FyZCA9IGF3YWl0IGNyZWF0ZU1vdmllQ2FyZChtb3ZpZURhdGEsIHNob3cuaWQpO1xyXG4gICAgbW92aWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUNhcmQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY3JlYXRlTW92aWVDYXJkcygpOyIsImltcG9ydCB7IGZldGNoRGF0YSwgc2F2ZURhdGEgfSBmcm9tICcuL2xvYWRTYXZlQ29tbWVudC5qcyc7XHJcblxyXG5jb25zdCBzaG93Q29tbWVudHMgPSAobW92aWVEYXRhKSA9PiB7XHJcbiAgY29uc3QgJCA9IGRvY3VtZW50O1xyXG4gIGNvbnN0IG1vdmllQ2FyZHNDb250YWluZXIgPSAkLmdldEVsZW1lbnRCeUlkKCdtb3ZpZS1jYXJkcycpO1xyXG5cclxuICBjb25zdCBwb3BVcCA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcclxuXHJcbiAgY29uc3QgcG9wQ2FyZCA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wQ2FyZC5jbGFzc0xpc3QuYWRkKCdwb3BDYXJkJyk7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ1dHRvbicpO1xyXG4gIGNsb3NlQnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIG1vdmllQ2FyZHNDb250YWluZXIucmVtb3ZlQ2hpbGQocG9wVXApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBuZXdJbWFnZSA9ICQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbmV3SW1hZ2UuY2xhc3NMaXN0LmFkZCgnY29tbWVudEltYWdlJyk7XHJcbiAgbmV3SW1hZ2Uuc3JjID0gbW92aWVEYXRhLmltYWdlO1xyXG5cclxuICBjb25zdCB0aXRsZSA9ICQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50VGl0bGUnKTtcclxuICB0aXRsZS5pbm5lclRleHQgPSBtb3ZpZURhdGEubmFtZTtcclxuXHJcbiAgY29uc3Qgc3RhdHVzID0gJC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgc3RhdHVzLmlubmVySFRNTCA9IGBzdGF0dXM6ICR7bW92aWVEYXRhLnNob3dTdGF0dXN9YDtcclxuXHJcbiAgY29uc3QgcHJlbWllcmVkID0gJC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJlbWllcmVkLmlubmVySFRNTCA9IGBwcmVtaWVyZWQ6ICR7bW92aWVEYXRhLnByZW1pZXJlZH1gO1xyXG5cclxuICBjb25zdCBjb21tZW50VGl0bGUgPSAkLmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29tbWVudFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnROdW1iZXInKTtcclxuICBjb21tZW50VGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcclxuXHJcbiAgY29uc3QgY29tbWVudFNlY3Rpb24gPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRTZWN0aW9uJyk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRBZGRUaXRsZSA9ICQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb21tZW50QWRkVGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBhIGNvbW1lbnQnO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXQgPSAkLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnROYW1lJyk7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBOYW1lJyk7XHJcbiAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gJC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIG1lc3NhZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdjb21tZW50TWVzc2FnZScpO1xyXG4gIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHlvdXIgY29tbWVudC9tZXNzYWdlJyk7XHJcbiAgbWVzc2FnZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgY29uc3Qgc2VuZEJ1dHRvbiA9ICQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc2VuZEJ1dHRvbi5pbm5lclRleHQgPSAnU2VuZCc7XHJcbiAgc2VuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF3YWl0IHNhdmVEYXRhKG1vdmllRGF0YSk7XHJcbiAgICBhd2FpdCBmZXRjaERhdGEobW92aWVEYXRhKTtcclxuICB9KTtcclxuXHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChzdGF0dXMpO1xyXG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQocHJlbWllcmVkKTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKGNvbW1lbnRUaXRsZSk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjb21tZW50U2VjdGlvbik7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjb21tZW50QWRkVGl0bGUpO1xyXG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChzZW5kQnV0dG9uKTtcclxuXHJcbiAgcG9wVXAuYXBwZW5kQ2hpbGQocG9wQ2FyZCk7XHJcbiAgbW92aWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BVcCk7XHJcblxyXG4gIGZldGNoRGF0YShtb3ZpZURhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbW1lbnRzO1xyXG4iLCJjb25zdCBjb21tZW50Q291bnRlciA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY29tbWVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnROdW1iZXInKTtcclxuICBjb21tZW50VGl0bGUuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2RhdGEubGVuZ3RofSlgO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7IiwiaW1wb3J0IGNvbW1lbnRDb3VudGVyIGZyb20gJy4vY29tbWVudENvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKG1vdmllRGF0YSkgPT4ge1xyXG4gIGNvbnN0IEFQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9YNVZ4M1RPV3h5YWsxU2dISUFBby9jb21tZW50cz9pdGVtX2lkPSR7bW92aWVEYXRhLmlkfWA7XHJcbiAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudFNlY3Rpb24nKTtcclxuICBjb21tZW50U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0b0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0b0FkZC5pbm5lckhUTUwgPSBgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICR7ZWxlbWVudC51c2VybmFtZX06ICR7ZWxlbWVudC5jb21tZW50fWA7XHJcbiAgICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQodG9BZGQpO1xyXG4gICAgICAgIGNvbW1lbnRDb3VudGVyKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbW1lbnRTZWN0aW9uLmlubmVySFRNTCA9ICdObyBjb21tZW50cyB5ZXQnO1xyXG4gICAgICBjb21tZW50Q291bnRlcihbXSk7XHJcbiAgICB9XHJcbiAgICAvLyBQcm9jZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb21tZW50U2VjdGlvbi5pbm5lckhUTUwgPSAnQW4gZXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgbG9hZGluZyB0aGUgY29tbWVudHMnO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNhdmVEYXRhID0gYXN5bmMgKG1vdmllRGF0YSkgPT4ge1xyXG4gIGNvbnN0IEFQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9YNVZ4M1RPV3h5YWsxU2dISUFBby9jb21tZW50cyc7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudE5hbWUnKTtcclxuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRNZXNzYWdlJyk7XHJcblxyXG4gIGNvbnN0IHVzZXJuYW1lVmFsdWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XHJcbiAgY29uc3QgY29tbWVudFZhbHVlID0gY29tbWVudC52YWx1ZS50cmltKCk7XHJcblxyXG4gIGlmICh1c2VybmFtZVZhbHVlID09PSAnJyB8fCBjb21tZW50VmFsdWUgPT09ICcnKSB7XHJcbiAgICB1c2VybmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1BsZWFzZSBlbnRlciB5b3VyIG5hbWUnKTtcclxuICAgIGNvbW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQbGVhc2UgZW50ZXIgeW91ciBjb21tZW50Jyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21tZW50T2JqZWN0ID0ge1xyXG4gICAgaXRlbV9pZDogbW92aWVEYXRhLmlkLFxyXG4gICAgdXNlcm5hbWU6IHVzZXJuYW1lLnZhbHVlLFxyXG4gICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcclxuICB9O1xyXG4gIGF3YWl0IGZldGNoKEFQSSwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudE9iamVjdCksXHJcbiAgfSk7XHJcblxyXG4gIHVzZXJuYW1lLnZhbHVlID0gJyc7XHJcbiAgY29tbWVudC52YWx1ZSA9ICcnO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZmV0Y2hEYXRhLCBzYXZlRGF0YSB9OyIsImNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChtb3ZpZURhdGEpID0+IHtcbiAgY29uc3QgQVBJID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1g1VngzVE9XeHlhazFTZ0hJQUFvL3Jlc2VydmF0aW9ucz9pdGVtX2lkPWl0ZW0ke21vdmllRGF0YS5pZH1gO1xuICBjb25zdCByZXNlcnZlU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZlU2VjdGlvbicpO1xuICBjb25zdCB0b0FkZFJlc2VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9BZGRSZXNlcnZlLmNsYXNzTGlzdC5hZGQoJ2xpc3RSZXNlcnZlJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIHJldHJpZXZlZCBkYXRhXG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0b0FkZFJlc2VydmUuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxwPiR7ZWxlbWVudC5kYXRlX3N0YXJ0fSAtICR7ZWxlbWVudC5kYXRlX2VuZH0gYnkgJHtlbGVtZW50LnVzZXJuYW1lfTwvcD5cbiAgICAgIGA7XG4gICAgICByZXNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZCh0b0FkZFJlc2VydmUpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvQWRkUmVzZXJ2ZS5pbm5lckhUTUwgPSAnPGgzPjxiPk5vIHJlc2VydmUgeWV0PC9iPjwvaDM+JztcbiAgICByZXNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZCh0b0FkZFJlc2VydmUpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7IiwiY29uc3QgdXBkYXRlTW92aWVDYXJkQ291bnQgPSAoY291bnQpID0+IHtcclxuICBjb25zdCBtb3ZpZUNhcmRDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFuJyk7XHJcbiAgbW92aWVDYXJkQ291bnQudGV4dENvbnRlbnQgPSBjb3VudDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTW92aWVDYXJkQ291bnQ7IiwiaW1wb3J0IGZldGNoRGF0YSBmcm9tICcuL2xvYWRTYXZlUmVzZXJ2ZS5qcyc7XG5cbmNvbnN0IHJlc2VydmUgPSAobW92aWVEYXRhKSA9PiB7XG4gIGNvbnN0ICQgPSBkb2N1bWVudDtcbiAgY29uc3QgcmVzZXJ2ZUNhcmQgPSAkLmdldEVsZW1lbnRCeUlkKCdyZXNlcnZlQ2FyZCcpO1xuICBjb25zdCBib2R5T3ZlcmZsb3cgPSAkLmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XG4gIHJlc2VydmVDYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBib2R5T3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBjb25zdCBtb2RhbENvbnRlbnQgPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxDb250ZW50Jyk7XG5cbiAgY29uc3Qgc3BhbiA9ICQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdXR0b24nKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdYJztcbiAgc3Bhbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHJlc2VydmVDYXJkLnJlbW92ZUNoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgcmVzZXJ2ZUNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBib2R5T3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gIH07XG4gIHdpbmRvdy5vbmNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHJlc2VydmVDYXJkKSB7XG4gICAgICByZXNlcnZlQ2FyZC5yZW1vdmVDaGlsZChtb2RhbENvbnRlbnQpO1xuICAgICAgcmVzZXJ2ZUNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGJvZHlPdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9wSW1nID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wSW1nLmNsYXNzTGlzdC5hZGQoJ3BvcEltZycpO1xuICBjb25zdCBpbWcgPSAkLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nUmVzZXJ2ZScpO1xuICBpbWcuc3JjID0gbW92aWVEYXRhLmltYWdlO1xuICBwb3BJbWcuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCBjb250YWluZXJJbmZvID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVySW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJJbmZvJyk7XG4gIGNvbnRhaW5lckluZm8uaW5uZXJIVE1MID0gYFxuICAgIDxwPjxiPlRpdGxlOjwvYj4gJHttb3ZpZURhdGEubmFtZX08L3A+PHA+PGI+U3VtbWFyeTo8L2I+ICR7bW92aWVEYXRhLnN1bW1hcnl9PC9wPjxwPjxiPkdlbnJlczo8L2I+ICR7bW92aWVEYXRhLmdlbnJlc308L3A+XG4gIGA7XG5cbiAgY29uc3QgcmVzZXJ2ZVNlY3Rpb24gPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXNlcnZlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZlU2VjdGlvbicpO1xuICBjb25zdCB0aXRsZVNlY3Rpb24gPSAkLmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlU2VjdGlvbi50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbnMnO1xuICByZXNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xuXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHBvcEltZyk7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJJbmZvKTtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHJlc2VydmVTZWN0aW9uKTtcblxuICByZXNlcnZlQ2FyZC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICBmZXRjaERhdGEobW92aWVEYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2VydmU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9