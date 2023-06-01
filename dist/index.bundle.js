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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: none;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: none;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n"],"sourceRoot":""}]);
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
  commentTitle.innerHTML = 'Comments';

  const commentSection = $.createElement('div');
  commentSection.classList.add('commentSection');

  const commentAddTitle = $.createElement('h3');
  commentAddTitle.innerHTML = 'Add a comment';

  const nameInput = $.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Your Name');

  const messageInput = $.createElement('textarea');
  messageInput.setAttribute('placeholder', 'Enter your comment/message');

  const sendButton = $.createElement('button');
  sendButton.innerText = 'Send';

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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);


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
const reserve = (movieData) => {
  const $ = document;
  const reserveCard = $.getElementById('reserveCard');
  reserveCard.style.display = 'block';

  const modalContent = $.createElement('div');
  modalContent.classList.add('modalContent');

  const span = $.createElement('button');
  span.classList.add('closeButton');
  span.textContent = 'X';
  span.onclick = () => {
    reserveCard.removeChild(modalContent);
    reserveCard.style.display = 'none';
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

  modalContent.appendChild(span);
  modalContent.appendChild(popImg);
  modalContent.appendChild(containerInfo);

  reserveCard.appendChild(modalContent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUI7QUFDckQ7QUFDQTtBQUNBLHNDQUFzQyxvQkFBb0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZSx5QkFBeUIsa0JBQWtCLHdCQUF3QixpQkFBaUI7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvbW9kdWxlcy9yZXNlcnZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItYmx1ZTogIzAwMjk2YjtcXHJcXG4gIC0tYm9keS1ibHVlOiAjMDA1MDlkO1xcclxcbiAgLS1idXR0b24tYmx1ZTogIzhlY2FlNjtcXHJcXG4gIC0tbWFpbi1vcmFuZ2U6ICNmYjg1MDA7XFxyXFxuICAtLWJ1dHRvbi15ZWxsb3c6ICNmZmQ1MDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWmlsbGEgU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1ibHVlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0Rm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbiNjb3B5cmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLWNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQge1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDIxJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkOmhvdmVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDI0JTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wb3BDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJsdWUpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRTZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ibHVlKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmVDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NCwgMTc0LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBSIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3BJbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3ZoIDA7XFxyXFxufVxcclxcblxcclxcbi5pbWdSZXNlcnZlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJJbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMnZoIDV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0taGVhZGVyLWJsdWU6ICMwMDI5NmI7XFxyXFxuICAtLWJvZHktYmx1ZTogIzAwNTA5ZDtcXHJcXG4gIC0tYnV0dG9uLWJsdWU6ICM4ZWNhZTY7XFxyXFxuICAtLW1haW4tb3JhbmdlOiAjZmI4NTAwO1xcclxcbiAgLS1idXR0b24teWVsbG93OiAjZmZkNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlppbGxhIFNsYWJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJsdWUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAydmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dEZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxuICBwYWRkaW5nOiAxdmg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29weXJpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZS1jYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIHtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAyMSU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY2FyZCBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXllbGxvdyk7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY2FyZDpob3ZlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAyNCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wQ2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50U2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXllbGxvdyk7XFxyXFxufVxcclxcblxcclxcbiNyZXNlcnZlQ2FyZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNzQsIDE3NCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJsdWUpO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogM3ZoO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwUiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wSW1nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDN2aCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nUmVzZXJ2ZSB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVySW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDJ2aCA1dmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL25pdHJvLWxvZ28ucG5nJztcclxuaW1wb3J0IHNob3dDb21tZW50cyBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XHJcbmltcG9ydCByZXNlcnZlIGZyb20gJy4vbW9kdWxlcy9yZXNlcnZlLmpzJztcclxuXHJcbmNvbnN0ICQgPSBkb2N1bWVudDtcclxuXHJcbi8vIEZpbmQgdGhlIGxvZ28gaW1hZ2UgZWxlbWVudCBhbmQgc2V0IGl0cyBzcmMgYXR0cmlidXRlXHJcbmNvbnN0IGxvZ29JbWFnZSA9ICQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcclxubG9nb0ltYWdlLnNyYyA9IEljb247XHJcblxyXG5jb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XHJcbmNvbnN0IGxpa2VzQXBpVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0VnZ1NHQkxhY2J4eUd1bVpySzNlL2xpa2VzLyc7XHJcbmNvbnN0IG1vdmllQ2FyZHNDb250YWluZXIgPSAkLmdldEVsZW1lbnRCeUlkKCdtb3ZpZS1jYXJkcycpO1xyXG5cclxuY29uc3QgZmV0Y2hNb3ZpZURhdGEgPSBhc3luYyAoc2hvd0lkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9LyR7c2hvd0lkfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgIGltYWdlOiBkYXRhLmltYWdlLm1lZGl1bSxcclxuICAgIGdlbnJlczogZGF0YS5nZW5yZXMsXHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIHNob3dTdGF0dXM6IGRhdGEuc3RhdHVzLFxyXG4gICAgcHJlbWllcmVkOiBkYXRhLnByZW1pZXJlZCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hMaWtlc0RhdGEgPSBhc3luYyAoc2hvd0lkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtsaWtlc0FwaVVybH0/aXRlbV9pZD0ke3Nob3dJZH1gKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuICBjb25zdCByZXMgPSBkYXRhLmZpbmQoKHsgaXRlbV9pZCB9KSA9PiBpdGVtX2lkID09PSBzaG93SWQpO1xyXG4gIHJldHVybiByZXMgPyByZXMubGlrZXMgOiAwO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlTGlrZXNEYXRhID0gYXN5bmMgKHNob3dJZCwgbGlrZXMpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2xpa2VzQXBpVXJsfWAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBzaG93SWQsIGxpa2VzIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTW92aWVDYXJkID0gYXN5bmMgKG1vdmllRGF0YSwgc2hvd0lkKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtb3ZpZS1jYXJkJyk7XHJcbiAgIGNhcmQuaWQgPSBgbW92aWUtJHtzaG93SWR9YDtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSAkLmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbW92aWVEYXRhLm5hbWU7XHJcblxyXG4gIGNvbnN0IGltYWdlID0gJC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWFnZS5zcmMgPSBtb3ZpZURhdGEuaW1hZ2U7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnQgPSAkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNvbW1lbnQuaW5uZXJIVE1MID0gJ0NvbW1lbnQnO1xyXG5cclxuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2xpa2VzJyk7XHJcbiAgbGlrZUJ0bi5pbm5lckhUTUwgPSAnTGlrZSc7XHJcblxyXG4gIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGxpa2VzLmlubmVySFRNTCA9ICdMaWtlczogMCc7XHJcblxyXG4gIGNvbnN0IG1vdmllTGlrZXMgPSBhd2FpdCBmZXRjaExpa2VzRGF0YShzaG93SWQpO1xyXG4gIGxpa2VzLmlubmVySFRNTCA9IGBMaWtlczogJHttb3ZpZUxpa2VzfWA7XHJcblxyXG4gIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50TGlrZXMgPSBwYXJzZUludChsaWtlcy5pbm5lckhUTUwuc3BsaXQoJyAnKVsxXSwgMTApO1xyXG4gICAgY29uc3QgbmV3TGlrZXMgPSBjdXJyZW50TGlrZXMgKyAxO1xyXG4gICAgbGlrZXMuaW5uZXJIVE1MID0gYExpa2VzOiAke25ld0xpa2VzfWA7XHJcbiAgICBhd2FpdCB1cGRhdGVMaWtlc0RhdGEoc2hvd0lkLCBuZXdMaWtlcyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGV2ZW50IGxpc3RlbmVyIGZvciBldmVyeSBjb21tZW50IGJ1dHRvblxyXG4gIGNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzaG93Q29tbWVudHMobW92aWVEYXRhKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzZXJ2ID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICByZXNlcnYuaW5uZXJIVE1MID0gJ3Jlc2Vydic7XHJcbiAgcmVzZXJ2LmNsYXNzTGlzdC5hZGQoJ3Jlc2VydkJ0bicpO1xyXG5cclxuICByZXNlcnYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZXNlcnZlKG1vdmllRGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdlbnJlcyA9ICQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGdlbnJlcy5pbm5lckhUTUwgPSBgPHN0cm9uZz5HZW5yZXM6PC9zdHJvbmc+ICR7bW92aWVEYXRhLmdlbnJlcy5qb2luKCcsICcpfWA7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoZ2VucmVzKTtcclxuICBjYXJkLmFwcGVuZENoaWxkKGxpa2VCdG4pO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlrZXMpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoY29tbWVudCk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChyZXNlcnYpO1xyXG4gIHJldHVybiBjYXJkO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTW92aWVDYXJkcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH1gKTtcclxuICBjb25zdCBzaG93RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBzaG93cyA9IHNob3dEYXRhLnNsaWNlKDAsIDIwKTtcclxuXHJcbiAgLy8gQ3JlYXRlIG1vdmllIGNhcmRzIGZvciBlYWNoIFRWIHNob3dcclxuICBzaG93cy5mb3JFYWNoKGFzeW5jIChzaG93KSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZURhdGEgPSBhd2FpdCBmZXRjaE1vdmllRGF0YShzaG93LmlkKTtcclxuICAgIGNvbnN0IG1vdmllQ2FyZCA9IGF3YWl0IGNyZWF0ZU1vdmllQ2FyZChtb3ZpZURhdGEsIHNob3cuaWQpO1xyXG4gICAgbW92aWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUNhcmQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY3JlYXRlTW92aWVDYXJkcygpOyIsImNvbnN0IHNob3dDb21tZW50cyA9IChtb3ZpZURhdGEpID0+IHtcclxuICBjb25zdCAkID0gZG9jdW1lbnQ7XHJcbiAgY29uc3QgbW92aWVDYXJkc0NvbnRhaW5lciA9ICQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllLWNhcmRzJyk7XHJcblxyXG4gIGNvbnN0IHBvcFVwID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG5cclxuICBjb25zdCBwb3BDYXJkID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwb3BDYXJkLmNsYXNzTGlzdC5hZGQoJ3BvcENhcmQnKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSAkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnV0dG9uJyk7XHJcbiAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbW92aWVDYXJkc0NvbnRhaW5lci5yZW1vdmVDaGlsZChwb3BVcCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5ld0ltYWdlID0gJC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50SW1hZ2UnKTtcclxuICBuZXdJbWFnZS5zcmMgPSBtb3ZpZURhdGEuaW1hZ2U7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gJC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRUaXRsZScpO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IG1vdmllRGF0YS5uYW1lO1xyXG5cclxuICBjb25zdCBzdGF0dXMgPSAkLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBzdGF0dXMuaW5uZXJIVE1MID0gYHN0YXR1czogJHttb3ZpZURhdGEuc2hvd1N0YXR1c31gO1xyXG5cclxuICBjb25zdCBwcmVtaWVyZWQgPSAkLmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcmVtaWVyZWQuaW5uZXJIVE1MID0gYHByZW1pZXJlZDogJHttb3ZpZURhdGEucHJlbWllcmVkfWA7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9ICQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb21tZW50VGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcclxuXHJcbiAgY29uc3QgY29tbWVudFNlY3Rpb24gPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbW1lbnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRTZWN0aW9uJyk7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRBZGRUaXRsZSA9ICQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb21tZW50QWRkVGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBhIGNvbW1lbnQnO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXQgPSAkLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBOYW1lJyk7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9ICQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciB5b3VyIGNvbW1lbnQvbWVzc2FnZScpO1xyXG5cclxuICBjb25zdCBzZW5kQnV0dG9uID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzZW5kQnV0dG9uLmlubmVyVGV4dCA9ICdTZW5kJztcclxuXHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChzdGF0dXMpO1xyXG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQocHJlbWllcmVkKTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKGNvbW1lbnRUaXRsZSk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjb21tZW50U2VjdGlvbik7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjb21tZW50QWRkVGl0bGUpO1xyXG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChzZW5kQnV0dG9uKTtcclxuXHJcbiAgcG9wVXAuYXBwZW5kQ2hpbGQocG9wQ2FyZCk7XHJcbiAgbW92aWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BVcCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93Q29tbWVudHM7XHJcbiIsImNvbnN0IHJlc2VydmUgPSAobW92aWVEYXRhKSA9PiB7XHJcbiAgY29uc3QgJCA9IGRvY3VtZW50O1xyXG4gIGNvbnN0IHJlc2VydmVDYXJkID0gJC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2ZUNhcmQnKTtcclxuICByZXNlcnZlQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxDb250ZW50Jyk7XHJcblxyXG4gIGNvbnN0IHNwYW4gPSAkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHNwYW4uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdXR0b24nKTtcclxuICBzcGFuLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gIHNwYW4ub25jbGljayA9ICgpID0+IHtcclxuICAgIHJlc2VydmVDYXJkLnJlbW92ZUNoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgICByZXNlcnZlQ2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBvcEltZyA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wSW1nLmNsYXNzTGlzdC5hZGQoJ3BvcEltZycpO1xyXG4gIGNvbnN0IGltZyA9ICQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2ltZ1Jlc2VydmUnKTtcclxuICBpbWcuc3JjID0gbW92aWVEYXRhLmltYWdlO1xyXG4gIHBvcEltZy5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICBjb25zdCBjb250YWluZXJJbmZvID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250YWluZXJJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lckluZm8nKTtcclxuICBjb250YWluZXJJbmZvLmlubmVySFRNTCA9IGBcclxuICAgIDxwPjxiPlRpdGxlOjwvYj4gJHttb3ZpZURhdGEubmFtZX08L3A+PHA+PGI+U3VtbWFyeTo8L2I+ICR7bW92aWVEYXRhLnN1bW1hcnl9PC9wPjxwPjxiPkdlbnJlczo8L2I+ICR7bW92aWVEYXRhLmdlbnJlc308L3A+XHJcbiAgYDtcclxuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwb3BJbWcpO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJJbmZvKTtcclxuXHJcbiAgcmVzZXJ2ZUNhcmQuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2VydmU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9