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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n"],"sourceRoot":""}]);
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

const createMovieCard = (movieData) => {
  const card = $.createElement('div');
  card.classList.add('movie-card');

  const title = $.createElement('h2');
  title.innerText = movieData.name;

  const image = $.createElement('img');
  image.src = movieData.image;

  const comment = $.createElement('button');
  comment.innerHTML = 'Comment';

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
    const movieCard = createMovieCard(movieData);
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

  (0,_loadSaveComment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieData);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showComments);


/***/ }),

/***/ "./src/modules/loadSaveComment.js":
/*!****************************************!*\
  !*** ./src/modules/loadSaveComment.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/comments?item_id=${movieData.id}`;
  const commentSection = document.querySelector('.commentSection');

  try {
    const response = await fetch(API);
    const data = await response.json();

    // Process the retrieved data
    data.forEach((element) => {
      const toAdd = document.createElement('p');
      toAdd.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentSection.appendChild(toAdd);
    });
  } catch (error) {
    commentSection.innerHTML = 'No comments yet';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCLEVBQUUsaUJBQWlCLElBQUksZ0JBQWdCO0FBQ3pGO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDbkJ4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWUseUJBQXlCLGtCQUFrQix3QkFBd0IsaUJBQWlCO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL21vZHVsZXMvbG9hZFNhdmVDb21tZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9tb2R1bGVzL3Jlc2VydmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWhlYWRlci1ibHVlOiAjMDAyOTZiO1xcclxcbiAgLS1ib2R5LWJsdWU6ICMwMDUwOWQ7XFxyXFxuICAtLWJ1dHRvbi1ibHVlOiAjOGVjYWU2O1xcclxcbiAgLS1tYWluLW9yYW5nZTogI2ZiODUwMDtcXHJcXG4gIC0tYnV0dG9uLXllbGxvdzogI2ZmZDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJsdWUpO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJaaWxsYSBTbGFiXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1ibHVlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJsdWUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMnZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHRGb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvcHlyaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxuICBwYWRkaW5nOiAxdmg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbW92aWUtY2FyZHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY2FyZCB7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMjElO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY2FyZCBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ibHVlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi15ZWxsb3cpO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY2FyZCBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQ6aG92ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMjQlO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wQ2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50U2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbiB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi15ZWxsb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmVzZXJ2ZUNhcmQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTc0LCAxNzQsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbENvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDN2aDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcFIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcEltZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzdmggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ1Jlc2VydmUge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lckluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ibHVlKTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAydmggNXZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItYmx1ZTogIzAwMjk2YjtcXHJcXG4gIC0tYm9keS1ibHVlOiAjMDA1MDlkO1xcclxcbiAgLS1idXR0b24tYmx1ZTogIzhlY2FlNjtcXHJcXG4gIC0tbWFpbi1vcmFuZ2U6ICNmYjg1MDA7XFxyXFxuICAtLWJ1dHRvbi15ZWxsb3c6ICNmZmQ1MDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWmlsbGEgU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1ibHVlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0Rm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbiNjb3B5cmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLWNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQge1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDIxJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkOmhvdmVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDI0JTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcENhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRJbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudFNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmVDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NCwgMTc0LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBSIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3BJbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3ZoIDA7XFxyXFxufVxcclxcblxcclxcbi5pbWdSZXNlcnZlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJJbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMnZoIDV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvbml0cm8tbG9nby5wbmcnO1xyXG5pbXBvcnQgc2hvd0NvbW1lbnRzIGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcclxuaW1wb3J0IHJlc2VydmUgZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmUuanMnO1xyXG5cclxuY29uc3QgJCA9IGRvY3VtZW50O1xyXG5cclxuLy8gRmluZCB0aGUgbG9nbyBpbWFnZSBlbGVtZW50IGFuZCBzZXQgaXRzIHNyYyBhdHRyaWJ1dGVcclxuY29uc3QgbG9nb0ltYWdlID0gJC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5sb2dvSW1hZ2Uuc3JjID0gSWNvbjtcclxuXHJcbmNvbnN0IGFwaVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcclxuY29uc3QgbW92aWVDYXJkc0NvbnRhaW5lciA9ICQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllLWNhcmRzJyk7XHJcblxyXG5jb25zdCBmZXRjaE1vdmllRGF0YSA9IGFzeW5jIChzaG93SWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vJHtzaG93SWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgaW1hZ2U6IGRhdGEuaW1hZ2UubWVkaXVtLFxyXG4gICAgc3VtbWFyeTogZGF0YS5zdW1tYXJ5LFxyXG4gICAgZ2VucmVzOiBkYXRhLmdlbnJlcyxcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgc2hvd1N0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICBwcmVtaWVyZWQ6IGRhdGEucHJlbWllcmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNb3ZpZUNhcmQgPSAobW92aWVEYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtb3ZpZS1jYXJkJyk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gJC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IG1vdmllRGF0YS5uYW1lO1xyXG5cclxuICBjb25zdCBpbWFnZSA9ICQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2Uuc3JjID0gbW92aWVEYXRhLmltYWdlO1xyXG5cclxuICBjb25zdCBjb21tZW50ID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb21tZW50LmlubmVySFRNTCA9ICdDb21tZW50JztcclxuXHJcbiAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGV2ZXJ5IGNvbW1lbnQgYnV0dG9uXHJcbiAgY29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNob3dDb21tZW50cyhtb3ZpZURhdGEpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZXNlcnYgPSAkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlc2Vydi5pbm5lckhUTUwgPSAncmVzZXJ2JztcclxuICByZXNlcnYuY2xhc3NMaXN0LmFkZCgncmVzZXJ2QnRuJyk7XHJcblxyXG4gIHJlc2Vydi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2VydmUobW92aWVEYXRhKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2VucmVzID0gJC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZ2VucmVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkdlbnJlczo8L3N0cm9uZz4gJHttb3ZpZURhdGEuZ2VucmVzLmpvaW4oJywgJyl9YDtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChnZW5yZXMpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQoY29tbWVudCk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChyZXNlcnYpO1xyXG4gIHJldHVybiBjYXJkO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTW92aWVDYXJkcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH1gKTtcclxuICBjb25zdCBzaG93RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBjb25zdCBzaG93cyA9IHNob3dEYXRhLnNsaWNlKDAsIDIwKTtcclxuXHJcbiAgLy8gQ3JlYXRlIG1vdmllIGNhcmRzIGZvciBlYWNoIFRWIHNob3dcclxuICBzaG93cy5mb3JFYWNoKGFzeW5jIChzaG93KSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZURhdGEgPSBhd2FpdCBmZXRjaE1vdmllRGF0YShzaG93LmlkKTtcclxuICAgIGNvbnN0IG1vdmllQ2FyZCA9IGNyZWF0ZU1vdmllQ2FyZChtb3ZpZURhdGEpO1xyXG4gICAgbW92aWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUNhcmQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY3JlYXRlTW92aWVDYXJkcygpOyIsImltcG9ydCBmZXRjaERhdGEgZnJvbSAnLi9sb2FkU2F2ZUNvbW1lbnQuanMnO1xyXG5cclxuY29uc3Qgc2hvd0NvbW1lbnRzID0gKG1vdmllRGF0YSkgPT4ge1xyXG4gIGNvbnN0ICQgPSBkb2N1bWVudDtcclxuICBjb25zdCBtb3ZpZUNhcmRzQ29udGFpbmVyID0gJC5nZXRFbGVtZW50QnlJZCgnbW92aWUtY2FyZHMnKTtcclxuXHJcbiAgY29uc3QgcG9wVXAgPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XHJcblxyXG4gIGNvbnN0IHBvcENhcmQgPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcENhcmQuY2xhc3NMaXN0LmFkZCgncG9wQ2FyZCcpO1xyXG5cclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9ICQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdXR0b24nKTtcclxuICBjbG9zZUJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb3ZpZUNhcmRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBvcFVwKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmV3SW1hZ2UgPSAkLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRJbWFnZScpO1xyXG4gIG5ld0ltYWdlLnNyYyA9IG1vdmllRGF0YS5pbWFnZTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSAkLmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29tbWVudFRpdGxlJyk7XHJcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbW92aWVEYXRhLm5hbWU7XHJcblxyXG4gIGNvbnN0IHN0YXR1cyA9ICQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHN0YXR1cy5pbm5lckhUTUwgPSBgc3RhdHVzOiAke21vdmllRGF0YS5zaG93U3RhdHVzfWA7XHJcblxyXG4gIGNvbnN0IHByZW1pZXJlZCA9ICQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByZW1pZXJlZC5pbm5lckhUTUwgPSBgcHJlbWllcmVkOiAke21vdmllRGF0YS5wcmVtaWVyZWR9YDtcclxuXHJcbiAgY29uc3QgY29tbWVudFRpdGxlID0gJC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbW1lbnRUaXRsZS5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xyXG5cclxuICBjb25zdCBjb21tZW50U2VjdGlvbiA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29tbWVudFNlY3Rpb24nKTtcclxuXHJcbiAgY29uc3QgY29tbWVudEFkZFRpdGxlID0gJC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbW1lbnRBZGRUaXRsZS5pbm5lckhUTUwgPSAnQWRkIGEgY29tbWVudCc7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dCA9ICQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIE5hbWUnKTtcclxuXHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gJC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHlvdXIgY29tbWVudC9tZXNzYWdlJyk7XHJcblxyXG4gIGNvbnN0IHNlbmRCdXR0b24gPSAkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHNlbmRCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbmQnO1xyXG5cclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKHN0YXR1cyk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChwcmVtaWVyZWQpO1xyXG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQoY29tbWVudFRpdGxlKTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uKTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKGNvbW1lbnRBZGRUaXRsZSk7XHJcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcclxuICBwb3BDYXJkLmFwcGVuZENoaWxkKHNlbmRCdXR0b24pO1xyXG5cclxuICBwb3BVcC5hcHBlbmRDaGlsZChwb3BDYXJkKTtcclxuICBtb3ZpZUNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcFVwKTtcclxuXHJcbiAgZmV0Y2hEYXRhKG1vdmllRGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG93Q29tbWVudHM7XHJcbiIsImNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChtb3ZpZURhdGEpID0+IHtcclxuICBjb25zdCBBUEkgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWDVWeDNUT1d4eWFrMVNnSElBQW8vY29tbWVudHM/aXRlbV9pZD0ke21vdmllRGF0YS5pZH1gO1xyXG4gIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRTZWN0aW9uJyk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8vIFByb2Nlc3MgdGhlIHJldHJpZXZlZCBkYXRhXHJcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgdG9BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHRvQWRkLmlubmVySFRNTCA9IGAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9YDtcclxuICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kQ2hpbGQodG9BZGQpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbW1lbnRTZWN0aW9uLmlubmVySFRNTCA9ICdObyBjb21tZW50cyB5ZXQnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTsiLCJjb25zdCByZXNlcnZlID0gKG1vdmllRGF0YSkgPT4ge1xyXG4gIGNvbnN0ICQgPSBkb2N1bWVudDtcclxuICBjb25zdCByZXNlcnZlQ2FyZCA9ICQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmVDYXJkJyk7XHJcbiAgcmVzZXJ2ZUNhcmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsQ29udGVudCcpO1xyXG5cclxuICBjb25zdCBzcGFuID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnV0dG9uJyk7XHJcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdYJztcclxuICBzcGFuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICByZXNlcnZlQ2FyZC5yZW1vdmVDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gICAgcmVzZXJ2ZUNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9O1xyXG5cclxuICBjb25zdCBwb3BJbWcgPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcEltZy5jbGFzc0xpc3QuYWRkKCdwb3BJbWcnKTtcclxuICBjb25zdCBpbWcgPSAkLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZy5jbGFzc0xpc3QuYWRkKCdpbWdSZXNlcnZlJyk7XHJcbiAgaW1nLnNyYyA9IG1vdmllRGF0YS5pbWFnZTtcclxuICBwb3BJbWcuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVySW5mbyA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVySW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJJbmZvJyk7XHJcbiAgY29udGFpbmVySW5mby5pbm5lckhUTUwgPSBgXHJcbiAgICA8cD48Yj5UaXRsZTo8L2I+ICR7bW92aWVEYXRhLm5hbWV9PC9wPjxwPjxiPlN1bW1hcnk6PC9iPiAke21vdmllRGF0YS5zdW1tYXJ5fTwvcD48cD48Yj5HZW5yZXM6PC9iPiAke21vdmllRGF0YS5nZW5yZXN9PC9wPlxyXG4gIGA7XHJcblxyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocG9wSW1nKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVySW5mbyk7XHJcblxyXG4gIHJlc2VydmVDYXJkLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNlcnZlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==