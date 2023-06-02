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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n\r\n.reserveSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2vh 0;\r\n  align-items: center;\r\n  gap: 2vh;\r\n}\r\n\r\n.listReserve {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  padding: 2vh 3vh;\r\n  align-items: center;\r\n  gap: 1vh;\r\n}\r\n\r\n.reserveForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2vh;\r\n  gap: 2vh;\r\n}\r\n\r\n.reserveForm input {\r\n  width: 40vh;\r\n  padding: 0.5vh;\r\n}\r\n\r\n.submitBtn {\r\n  background: var(--main-orange);\r\n  border: 3px solid var(--header-blue);\r\n  padding: 1vh 2vh;\r\n  border-radius: 5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,sBAAsB;EACtB,sBAAsB;EACtB,wBAAwB;AAC1B;;AAEA;EACE,kCAAkC;EAClC,qCAAqC;AACvC;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,WAAW;AACb;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,WAAW;EACX,oCAAoC;EACpC,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,sBAAsB;EACtB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,UAAU;EACV,oCAAoC;EACpC,aAAa;EACb,kBAAkB;EAClB,kCAAkC;EAClC,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;EACpC,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,6BAA6B;EAC7B,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,kCAAkC;EAClC,YAAY;EACZ,eAAe;EACf,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oCAAoC;EACpC,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --header-blue: #00296b;\r\n  --body-blue: #00509d;\r\n  --button-blue: #8ecae6;\r\n  --main-orange: #fb8500;\r\n  --button-yellow: #ffd500;\r\n}\r\n\r\nbody {\r\n  background-color: var(--body-blue);\r\n  font-family: \"Zilla Slab\", sans-serif;\r\n}\r\n\r\nnav {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  font-size: 20px;\r\n  height: 20vh;\r\n  align-items: center;\r\n}\r\n\r\n.logo {\r\n  height: 15vh;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 100px;\r\n}\r\n\r\nli {\r\n  width: 120px;\r\n  background-color: var(--main-orange);\r\n  padding: 5px;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footer {\r\n  background-color: var(--header-blue);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: auto;\r\n  padding: 2vh;\r\n  align-items: center;\r\n}\r\n\r\n#textFooter {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  font-size: 25px;\r\n  font-weight: 300;\r\n}\r\n\r\n#copyright {\r\n  background-color: var(--main-orange);\r\n  padding: 1vh;\r\n  border-radius: 20px;\r\n  border: 2px solid black;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n}\r\n\r\n#movie-cards {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n}\r\n\r\n.movie-card {\r\n  margin: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 21%;\r\n}\r\n\r\n.movie-card p {\r\n  display: flex;\r\n  width: 100%;\r\n  background-color: var(--button-blue);\r\n  border: 1px solid #d1d1d1;\r\n  color: #000;\r\n}\r\n\r\n.movie-card button {\r\n  background-color: var(--button-yellow);\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border: 1px solid black;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.movie-card img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.movie-card:hover {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 24%;\r\n  transition: 0.4s;\r\n}\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popUp {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 9999;\r\n  width: 100%;\r\n  height: 100%;\r\n  backdrop-filter: blur(10px);\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.popCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  width: 50%;\r\n  border: 3px solid var(--main-orange);\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: var(--body-blue);\r\n  color: #fff;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.commentImage {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.commentSection {\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  height: 20vh;\r\n  overflow-y: scroll;\r\n  text-align: left;\r\n  color: #000;\r\n  font-weight: 700;\r\n}\r\n\r\n.closeButton {\r\n  width: fit-content;\r\n  font-size: xx-large;\r\n  background-color: transparent;\r\n  border-width: 0;\r\n  align-self: flex-end;\r\n}\r\n\r\n.closeButton:hover {\r\n  cursor: pointer;\r\n  background-color: var(--button-yellow);\r\n}\r\n\r\n#reserveCard {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 99;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(177, 174, 174, 0.8);\r\n}\r\n\r\n.modalContent {\r\n  display: flex;\r\n  width: 60%;\r\n  flex-direction: column;\r\n  background-color: var(--body-blue);\r\n  margin: auto;\r\n  margin-top: 3vh;\r\n  padding: 20px;\r\n  border: 5px solid var(--main-orange);\r\n}\r\n\r\n.popUpR {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: auto;\r\n}\r\n\r\n.popImg {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 3vh 0;\r\n}\r\n\r\n.imgReserve {\r\n  width: 25%;\r\n}\r\n\r\n.containerInfo {\r\n  display: flex;\r\n  background-color: var(--button-blue);\r\n  flex-direction: column;\r\n  padding: 2vh 5vh;\r\n  width: 100%;\r\n  gap: 2vh;\r\n}\r\n\r\n.reserveSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 2vh 0;\r\n  align-items: center;\r\n  gap: 2vh;\r\n}\r\n\r\n.listReserve {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--button-blue);\r\n  width: 100%;\r\n  padding: 2vh 3vh;\r\n  align-items: center;\r\n  gap: 1vh;\r\n}\r\n\r\n.reserveForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2vh;\r\n  gap: 2vh;\r\n}\r\n\r\n.reserveForm input {\r\n  width: 40vh;\r\n  padding: 0.5vh;\r\n}\r\n\r\n.submitBtn {\r\n  background: var(--main-orange);\r\n  border: 3px solid var(--header-blue);\r\n  padding: 1vh 2vh;\r\n  border-radius: 5px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_Mocks_movieCount_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/__Mocks__/movieCount.js */ "./src/modules/__Mocks__/movieCount.js");






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
  (0,_modules_Mocks_movieCount_js__WEBPACK_IMPORTED_MODULE_4__["default"])(count);

  // Create movie cards for each TV show
  shows.forEach(async (show) => {
    const movieData = await fetchMovieData(show.id);
    const movieCard = await createMovieCard(movieData, show.id);
    movieCardsContainer.appendChild(movieCard);
  });
};

createMovieCards();

/***/ }),

/***/ "./src/modules/__Mocks__/movieCount.js":
/*!*********************************************!*\
  !*** ./src/modules/__Mocks__/movieCount.js ***!
  \*********************************************/
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

/***/ "./src/modules/counterReserve.js":
/*!***************************************!*\
  !*** ./src/modules/counterReserve.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counterReserve = (data) => data.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterReserve);

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
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   saveDataReserve: () => (/* binding */ saveDataReserve)
/* harmony export */ });
/* harmony import */ var _counterReserve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterReserve.js */ "./src/modules/counterReserve.js");


const fetchData = async (movieData) => {
  const API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/reservations?item_id=item${movieData.id}`;
  const reserveSection = document.querySelector('.reserveSection');
  const titleSection = document.createElement('h2');
  const toAddReserve = document.createElement('div');
  toAddReserve.classList.add('listReserve');
  try {
    const response = await fetch(API);
    const data = await response.json();
    // Process the retrieved data
    titleSection.textContent = `Reservations (${(0,_counterReserve_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data)})`;
    data.forEach((element) => {
      reserveSection.appendChild(titleSection);
      toAddReserve.innerHTML += `
      <p>${element.date_start} - ${element.date_end} by ${element.username}</p>
      `;
      reserveSection.appendChild(toAddReserve);
    });
  } catch (error) {
    titleSection.textContent = 'Reservations (0)';
    reserveSection.appendChild(titleSection);
    toAddReserve.innerHTML = `
    <h3><b>No reserve yet</b></h3>`;
    reserveSection.appendChild(toAddReserve);
  }
};

const saveDataReserve = async (movieData) => {
  const API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X5Vx3TOWxyak1SgHIAAo/reservations';
  const name = document.getElementById('nameReserve');
  const start = document.getElementById('startDate');
  const end = document.getElementById('endDate');

  const nameValue = name.value.trim();
  const startValue = start.value.trim();
  const endValue = end.value.trim();

  const reserveObject = {
    item_id: `item${movieData.id}`,
    username: nameValue,
    date_start: startValue,
    date_end: endValue,
  };

  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reserveObject),
  });

  name.value = '';
  start.value = '';
  end.value = '';
};



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

  const reserveForm = $.createElement('form');
  reserveForm.classList.add('reserveForm');
  reserveForm.innerHTML = `
    <input type="text" id="nameReserve" name="nameReserve" placeholder="Add your name" required>
    <input type="date" id="startDate" name="startDate" required>
    <input type="date" id="endDate" name="endDate" required>
  `;
  const submitBtn = $.createElement('button');
  submitBtn.classList.add('submitBtn');
  submitBtn.textContent = 'Reserve';
  reserveForm.appendChild(submitBtn);
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await (0,_loadSaveReserve_js__WEBPACK_IMPORTED_MODULE_0__.saveDataReserve)(movieData);
    reserveSection.innerHTML = '';
    await (0,_loadSaveReserve_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(movieData);
  });

  modalContent.appendChild(span);
  modalContent.appendChild(popImg);
  modalContent.appendChild(containerInfo);
  modalContent.appendChild(reserveSection);
  modalContent.appendChild(reserveForm);

  reserveCard.appendChild(modalContent);
  (0,_loadSaveReserve_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(movieData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGVBQWUsNkJBQTZCLDJCQUEyQiw2QkFBNkIsNkJBQTZCLCtCQUErQixLQUFLLGNBQWMseUNBQXlDLDhDQUE4QyxLQUFLLGFBQWEsMkNBQTJDLG9CQUFvQixvQ0FBb0Msc0JBQXNCLG1CQUFtQiwwQkFBMEIsS0FBSyxlQUFlLG1CQUFtQixLQUFLLFlBQVksb0JBQW9CLHVCQUF1QixpQkFBaUIsS0FBSyxZQUFZLG1CQUFtQiwyQ0FBMkMsbUJBQW1CLDBCQUEwQiw4QkFBOEIsS0FBSyxXQUFXLDRCQUE0QixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxnQkFBZ0IsdUJBQXVCLEtBQUssaUJBQWlCLDJDQUEyQyxvQkFBb0Isb0NBQW9DLG1CQUFtQixtQkFBbUIsMEJBQTBCLEtBQUsscUJBQXFCLDJDQUEyQyxtQkFBbUIsMEJBQTBCLDhCQUE4QixzQkFBc0IsdUJBQXVCLEtBQUssb0JBQW9CLDJDQUEyQyxtQkFBbUIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsc0JBQXNCLHVCQUF1QixLQUFLLHNCQUFzQixvQkFBb0IscUNBQXFDLHNCQUFzQixrQkFBa0IsS0FBSyxxQkFBcUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsaUJBQWlCLEtBQUssdUJBQXVCLG9CQUFvQixrQkFBa0IsMkNBQTJDLGdDQUFnQyxrQkFBa0IsS0FBSyw0QkFBNEIsNkNBQTZDLG1CQUFtQix5QkFBeUIsOEJBQThCLHVCQUF1QixzQkFBc0IsS0FBSyx5QkFBeUIsbUJBQW1CLHNCQUFzQixtQ0FBbUMsS0FBSywyQkFBMkIsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsaUJBQWlCLHVCQUF1QixLQUFLLFlBQVksa0JBQWtCLEtBQUssZ0JBQWdCLG9CQUFvQiw4QkFBOEIsS0FBSyxnQkFBZ0Isc0JBQXNCLGFBQWEsZ0JBQWdCLGNBQWMsZUFBZSxvQkFBb0Isa0JBQWtCLG1CQUFtQixrQ0FBa0MsNkJBQTZCLDhCQUE4Qix1QkFBdUIsS0FBSyxrQkFBa0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsaUJBQWlCLDJDQUEyQyxvQkFBb0IseUJBQXlCLHlDQUF5QyxrQkFBa0IseUJBQXlCLEtBQUssdUJBQXVCLHFCQUFxQix3QkFBd0IseUJBQXlCLEtBQUsseUJBQXlCLDJDQUEyQyxrQkFBa0IsbUJBQW1CLHlCQUF5Qix1QkFBdUIsa0JBQWtCLHVCQUF1QixLQUFLLHNCQUFzQix5QkFBeUIsMEJBQTBCLG9DQUFvQyxzQkFBc0IsMkJBQTJCLEtBQUssNEJBQTRCLHNCQUFzQiw2Q0FBNkMsS0FBSyxzQkFBc0Isb0JBQW9CLHNCQUFzQixrQkFBa0IsY0FBYyxhQUFhLGtCQUFrQixtQkFBbUIscUJBQXFCLGlEQUFpRCxLQUFLLHVCQUF1QixvQkFBb0IsaUJBQWlCLDZCQUE2Qix5Q0FBeUMsbUJBQW1CLHNCQUFzQixvQkFBb0IsMkNBQTJDLEtBQUssaUJBQWlCLG9CQUFvQixnQ0FBZ0Msa0JBQWtCLEtBQUssaUJBQWlCLG9CQUFvQiw4QkFBOEIscUJBQXFCLEtBQUsscUJBQXFCLGlCQUFpQixLQUFLLHdCQUF3QixvQkFBb0IsMkNBQTJDLDZCQUE2Qix1QkFBdUIsa0JBQWtCLGVBQWUsS0FBSyx5QkFBeUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsMEJBQTBCLGVBQWUsS0FBSyxzQkFBc0Isb0JBQW9CLDZCQUE2QiwyQ0FBMkMsa0JBQWtCLHVCQUF1QiwwQkFBMEIsZUFBZSxLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQixtQkFBbUIsZUFBZSxLQUFLLDRCQUE0QixrQkFBa0IscUJBQXFCLEtBQUssb0JBQW9CLHFDQUFxQywyQ0FBMkMsdUJBQXVCLHlCQUF5QixLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlB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QUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRGtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWUseUJBQXlCLGtCQUFrQix3QkFBd0IsaUJBQWlCO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0VBQWU7QUFDekI7QUFDQSxVQUFVLDhEQUFTO0FBQ25CLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBUztBQUNYO0FBQ0E7QUFDQSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvbW9kdWxlcy9fX01vY2tzX18vbW92aWVDb3VudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9tb2R1bGVzL2NvdW50ZXJSZXNlcnZlLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLXByb2plY3QtMi8uL3NyYy9tb2R1bGVzL2xvYWRTYXZlQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS1wcm9qZWN0LTIvLi9zcmMvbW9kdWxlcy9sb2FkU2F2ZVJlc2VydmUuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUtcHJvamVjdC0yLy4vc3JjL21vZHVsZXMvcmVzZXJ2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0taGVhZGVyLWJsdWU6ICMwMDI5NmI7XFxyXFxuICAtLWJvZHktYmx1ZTogIzAwNTA5ZDtcXHJcXG4gIC0tYnV0dG9uLWJsdWU6ICM4ZWNhZTY7XFxyXFxuICAtLW1haW4tb3JhbmdlOiAjZmI4NTAwO1xcclxcbiAgLS1idXR0b24teWVsbG93OiAjZmZkNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlppbGxhIFNsYWJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJsdWUpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAydmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dEZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XFxyXFxuICBwYWRkaW5nOiAxdmg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29weXJpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZS1jYXJkcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIHtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAyMSU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIHAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDFkMTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY2FyZCBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXllbGxvdyk7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY2FyZDpob3ZlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAyNCU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wb3BDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJsdWUpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50SW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRTZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ibHVlKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci13aWR0aDogMDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXllbGxvdyk7XFxyXFxufVxcclxcblxcclxcbiNyZXNlcnZlQ2FyZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNzQsIDE3NCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJsdWUpO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogM3ZoO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwUiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wSW1nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDN2aCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nUmVzZXJ2ZSB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVySW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDJ2aCA1dmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZVNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAydmggMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RSZXNlcnZlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAydmggM3ZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZUZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnZoO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlRm9ybSBpbnB1dCB7XFxyXFxuICB3aWR0aDogNDB2aDtcXHJcXG4gIHBhZGRpbmc6IDAuNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnRuIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWhlYWRlci1ibHVlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aCAydmg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXItYmx1ZTogIzAwMjk2YjtcXHJcXG4gIC0tYm9keS1ibHVlOiAjMDA1MDlkO1xcclxcbiAgLS1idXR0b24tYmx1ZTogIzhlY2FlNjtcXHJcXG4gIC0tbWFpbi1vcmFuZ2U6ICNmYjg1MDA7XFxyXFxuICAtLWJ1dHRvbi15ZWxsb3c6ICNmZmQ1MDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1ibHVlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWmlsbGEgU2xhYlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBoZWlnaHQ6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1ibHVlKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDJ2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0Rm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcXHJcXG4gIHBhZGRpbmc6IDF2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbiNjb3B5cmlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLWNhcmRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQge1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDIxJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNhcmQgaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jYXJkOmhvdmVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDI0JTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcENhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRJbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudFNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJsdWUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDIwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24teWVsbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Jlc2VydmVDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE3NCwgMTc0LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmx1ZSk7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBSIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3BJbWcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3ZoIDA7XFxyXFxufVxcclxcblxcclxcbi5pbWdSZXNlcnZlIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJJbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMnZoIDV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlU2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDJ2aCAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdFJlc2VydmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmx1ZSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDJ2aCAzdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxdmg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZlRm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAydmg7XFxyXFxuICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmVGb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA0MHZoO1xcclxcbiAgcGFkZGluZzogMC41dmg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdG4ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1vcmFuZ2UpO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taGVhZGVyLWJsdWUpO1xcclxcbiAgcGFkZGluZzogMXZoIDJ2aDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlcy9uaXRyby1sb2dvLnBuZyc7XHJcbmltcG9ydCBzaG93Q29tbWVudHMgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xyXG5pbXBvcnQgcmVzZXJ2ZSBmcm9tICcuL21vZHVsZXMvcmVzZXJ2ZS5qcyc7XHJcbmltcG9ydCB1cGRhdGVNb3ZpZUNhcmRDb3VudCBmcm9tICcuL21vZHVsZXMvX19Nb2Nrc19fL21vdmllQ291bnQuanMnO1xyXG5cclxuY29uc3QgJCA9IGRvY3VtZW50O1xyXG5cclxuLy8gRmluZCB0aGUgbG9nbyBpbWFnZSBlbGVtZW50IGFuZCBzZXQgaXRzIHNyYyBhdHRyaWJ1dGVcclxuY29uc3QgbG9nb0ltYWdlID0gJC5xdWVyeVNlbGVjdG9yKCcubG9nbycpO1xyXG5sb2dvSW1hZ2Uuc3JjID0gSWNvbjtcclxuXHJcbmNvbnN0IGFwaVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcclxuY29uc3QgbGlrZXNBcGlVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRWdnU0dCTGFjYnh5R3VtWnJLM2UvbGlrZXMvJztcclxuY29uc3QgbW92aWVDYXJkc0NvbnRhaW5lciA9ICQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllLWNhcmRzJyk7XHJcblxyXG5jb25zdCBmZXRjaE1vdmllRGF0YSA9IGFzeW5jIChzaG93SWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vJHtzaG93SWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgaW1hZ2U6IGRhdGEuaW1hZ2UubWVkaXVtLFxyXG4gICAgc3VtbWFyeTogZGF0YS5zdW1tYXJ5LFxyXG4gICAgZ2VucmVzOiBkYXRhLmdlbnJlcyxcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgc2hvd1N0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICBwcmVtaWVyZWQ6IGRhdGEucHJlbWllcmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaExpa2VzRGF0YSA9IGFzeW5jIChzaG93SWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2xpa2VzQXBpVXJsfT9pdGVtX2lkPSR7c2hvd0lkfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG4gIGNvbnN0IHJlcyA9IGRhdGEuZmluZCgoeyBpdGVtX2lkIH0pID0+IGl0ZW1faWQgPT09IHNob3dJZCk7XHJcbiAgcmV0dXJuIHJlcyA/IHJlcy5saWtlcyA6IDA7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVMaWtlc0RhdGEgPSBhc3luYyAoc2hvd0lkLCBsaWtlcykgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bGlrZXNBcGlVcmx9YCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IHNob3dJZCwgbGlrZXMgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNb3ZpZUNhcmQgPSBhc3luYyAobW92aWVEYXRhLCBzaG93SWQpID0+IHtcclxuICBjb25zdCBjYXJkID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21vdmllLWNhcmQnKTtcclxuICBjYXJkLmlkID0gYG1vdmllLSR7c2hvd0lkfWA7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gJC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IG1vdmllRGF0YS5uYW1lO1xyXG5cclxuICBjb25zdCBpbWFnZSA9ICQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2Uuc3JjID0gbW92aWVEYXRhLmltYWdlO1xyXG5cclxuICBjb25zdCBjb21tZW50ID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb21tZW50LmlubmVySFRNTCA9ICdDb21tZW50JztcclxuXHJcbiAgY29uc3QgbGlrZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGxpa2VCdG4uY2xhc3NMaXN0LmFkZCgnbGlrZXMnKTtcclxuICBsaWtlQnRuLmlubmVySFRNTCA9ICdMaWtlJztcclxuXHJcbiAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgbGlrZXMuaW5uZXJIVE1MID0gJ0xpa2VzOiAwJztcclxuXHJcbiAgY29uc3QgbW92aWVMaWtlcyA9IGF3YWl0IGZldGNoTGlrZXNEYXRhKHNob3dJZCk7XHJcbiAgbGlrZXMuaW5uZXJIVE1MID0gYExpa2VzOiAke21vdmllTGlrZXN9YDtcclxuXHJcbiAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRMaWtlcyA9IHBhcnNlSW50KGxpa2VzLmlubmVySFRNTC5zcGxpdCgnICcpWzFdLCAxMCk7XHJcbiAgICBjb25zdCBuZXdMaWtlcyA9IGN1cnJlbnRMaWtlcyArIDE7XHJcbiAgICBsaWtlcy5pbm5lckhUTUwgPSBgTGlrZXM6ICR7bmV3TGlrZXN9YDtcclxuICAgIGF3YWl0IHVwZGF0ZUxpa2VzRGF0YShzaG93SWQsIG5ld0xpa2VzKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGV2ZXJ5IGNvbW1lbnQgYnV0dG9uXHJcbiAgY29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNob3dDb21tZW50cyhtb3ZpZURhdGEpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZXNlcnYgPSAkLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHJlc2Vydi5pbm5lckhUTUwgPSAncmVzZXJ2JztcclxuICByZXNlcnYuY2xhc3NMaXN0LmFkZCgncmVzZXJ2QnRuJyk7XHJcblxyXG4gIHJlc2Vydi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2VydmUobW92aWVEYXRhKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2VucmVzID0gJC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZ2VucmVzLmlubmVySFRNTCA9IGA8c3Ryb25nPkdlbnJlczo8L3N0cm9uZz4gJHttb3ZpZURhdGEuZ2VucmVzLmpvaW4oJywgJyl9YDtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChnZW5yZXMpO1xyXG4gIGNhcmQuYXBwZW5kQ2hpbGQobGlrZUJ0bik7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChsaWtlcyk7XHJcbiAgY2FyZC5hcHBlbmRDaGlsZChjb21tZW50KTtcclxuICBjYXJkLmFwcGVuZENoaWxkKHJlc2Vydik7XHJcbiAgcmV0dXJuIGNhcmQ7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVNb3ZpZUNhcmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfWApO1xyXG4gIGNvbnN0IHNob3dEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnN0IHNob3dzID0gc2hvd0RhdGEuc2xpY2UoMCwgMjApO1xyXG4gIGNvbnN0IGNvdW50ID0gc2hvd3MubGVuZ3RoO1xyXG4gIHVwZGF0ZU1vdmllQ2FyZENvdW50KGNvdW50KTtcclxuXHJcbiAgLy8gQ3JlYXRlIG1vdmllIGNhcmRzIGZvciBlYWNoIFRWIHNob3dcclxuICBzaG93cy5mb3JFYWNoKGFzeW5jIChzaG93KSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZURhdGEgPSBhd2FpdCBmZXRjaE1vdmllRGF0YShzaG93LmlkKTtcclxuICAgIGNvbnN0IG1vdmllQ2FyZCA9IGF3YWl0IGNyZWF0ZU1vdmllQ2FyZChtb3ZpZURhdGEsIHNob3cuaWQpO1xyXG4gICAgbW92aWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUNhcmQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY3JlYXRlTW92aWVDYXJkcygpOyIsImNvbnN0IHVwZGF0ZU1vdmllQ2FyZENvdW50ID0gKGNvdW50KSA9PiB7XHJcbiAgY29uc3QgbW92aWVDYXJkQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhbicpO1xyXG4gIG1vdmllQ2FyZENvdW50LnRleHRDb250ZW50ID0gY291bnQ7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZU1vdmllQ2FyZENvdW50OyIsImltcG9ydCB7IGZldGNoRGF0YSwgc2F2ZURhdGEgfSBmcm9tICcuL2xvYWRTYXZlQ29tbWVudC5qcyc7XG5cbmNvbnN0IHNob3dDb21tZW50cyA9IChtb3ZpZURhdGEpID0+IHtcbiAgY29uc3QgJCA9IGRvY3VtZW50O1xuICBjb25zdCBtb3ZpZUNhcmRzQ29udGFpbmVyID0gJC5nZXRFbGVtZW50QnlJZCgnbW92aWUtY2FyZHMnKTtcblxuICBjb25zdCBwb3BVcCA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XG5cbiAgY29uc3QgcG9wQ2FyZCA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcENhcmQuY2xhc3NMaXN0LmFkZCgncG9wQ2FyZCcpO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdXR0b24nKTtcbiAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb3ZpZUNhcmRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBvcFVwKTtcbiAgfSk7XG5cbiAgY29uc3QgbmV3SW1hZ2UgPSAkLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50SW1hZ2UnKTtcbiAgbmV3SW1hZ2Uuc3JjID0gbW92aWVEYXRhLmltYWdlO1xuXG4gIGNvbnN0IHRpdGxlID0gJC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50VGl0bGUnKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gbW92aWVEYXRhLm5hbWU7XG5cbiAgY29uc3Qgc3RhdHVzID0gJC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHN0YXR1cy5pbm5lckhUTUwgPSBgc3RhdHVzOiAke21vdmllRGF0YS5zaG93U3RhdHVzfWA7XG5cbiAgY29uc3QgcHJlbWllcmVkID0gJC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByZW1pZXJlZC5pbm5lckhUTUwgPSBgcHJlbWllcmVkOiAke21vdmllRGF0YS5wcmVtaWVyZWR9YDtcblxuICBjb25zdCBjb21tZW50VGl0bGUgPSAkLmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbW1lbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb21tZW50TnVtYmVyJyk7XG4gIGNvbW1lbnRUaXRsZS5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuXG4gIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY29tbWVudFNlY3Rpb24nKTtcblxuICBjb25zdCBjb21tZW50QWRkVGl0bGUgPSAkLmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbW1lbnRBZGRUaXRsZS5pbm5lckhUTUwgPSAnQWRkIGEgY29tbWVudCc7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gJC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnY29tbWVudE5hbWUnKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgTmFtZScpO1xuICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9ICQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbWVzc2FnZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRNZXNzYWdlJyk7XG4gIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHlvdXIgY29tbWVudC9tZXNzYWdlJyk7XG4gIG1lc3NhZ2VJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgY29uc3Qgc2VuZEJ1dHRvbiA9ICQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNlbmRCdXR0b24uaW5uZXJUZXh0ID0gJ1NlbmQnO1xuICBzZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhd2FpdCBzYXZlRGF0YShtb3ZpZURhdGEpO1xuICAgIGF3YWl0IGZldGNoRGF0YShtb3ZpZURhdGEpO1xuICB9KTtcblxuICBwb3BDYXJkLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBwb3BDYXJkLmFwcGVuZENoaWxkKHN0YXR1cyk7XG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQocHJlbWllcmVkKTtcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjb21tZW50VGl0bGUpO1xuICBwb3BDYXJkLmFwcGVuZENoaWxkKGNvbW1lbnRTZWN0aW9uKTtcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChjb21tZW50QWRkVGl0bGUpO1xuICBwb3BDYXJkLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gIHBvcENhcmQuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcbiAgcG9wQ2FyZC5hcHBlbmRDaGlsZChzZW5kQnV0dG9uKTtcblxuICBwb3BVcC5hcHBlbmRDaGlsZChwb3BDYXJkKTtcbiAgbW92aWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BVcCk7XG5cbiAgZmV0Y2hEYXRhKG1vdmllRGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93Q29tbWVudHM7XG4iLCJjb25zdCBjb21tZW50Q291bnRlciA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50TnVtYmVyJyk7XG4gIGNvbW1lbnRUaXRsZS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7ZGF0YS5sZW5ndGh9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Q291bnRlcjsiLCJjb25zdCBjb3VudGVyUmVzZXJ2ZSA9IChkYXRhKSA9PiBkYXRhLmxlbmd0aDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJSZXNlcnZlOyIsImltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRDb3VudGVyLmpzJztcblxuY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKG1vdmllRGF0YSkgPT4ge1xuICBjb25zdCBBUEkgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWDVWeDNUT1d4eWFrMVNnSElBQW8vY29tbWVudHM/aXRlbV9pZD0ke21vdmllRGF0YS5pZH1gO1xuICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50U2VjdGlvbicpO1xuICBjb21tZW50U2VjdGlvbi5pbm5lckhUTUwgPSAnJztcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRvQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0FkZC5pbm5lckhUTUwgPSBgJHtlbGVtZW50LmNyZWF0aW9uX2RhdGV9ICR7ZWxlbWVudC51c2VybmFtZX06ICR7ZWxlbWVudC5jb21tZW50fWA7XG4gICAgICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKHRvQWRkKTtcbiAgICAgICAgY29tbWVudENvdW50ZXIoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudFNlY3Rpb24uaW5uZXJIVE1MID0gJ05vIGNvbW1lbnRzIHlldCc7XG4gICAgICBjb21tZW50Q291bnRlcihbXSk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgdGhlIHJldHJpZXZlZCBkYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29tbWVudFNlY3Rpb24uaW5uZXJIVE1MID0gJ0FuIGVycm9yIGhhcyBvY2N1cmVkIHdoaWxlIGxvYWRpbmcgdGhlIGNvbW1lbnRzJztcbiAgfVxufTtcblxuY29uc3Qgc2F2ZURhdGEgPSBhc3luYyAobW92aWVEYXRhKSA9PiB7XG4gIGNvbnN0IEFQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9YNVZ4M1RPV3h5YWsxU2dISUFBby9jb21tZW50cyc7XG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnROYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudE1lc3NhZ2UnKTtcblxuICBjb25zdCB1c2VybmFtZVZhbHVlID0gdXNlcm5hbWUudmFsdWUudHJpbSgpO1xuICBjb25zdCBjb21tZW50VmFsdWUgPSBjb21tZW50LnZhbHVlLnRyaW0oKTtcblxuICBpZiAodXNlcm5hbWVWYWx1ZSA9PT0gJycgfHwgY29tbWVudFZhbHVlID09PSAnJykge1xuICAgIHVzZXJuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZScpO1xuICAgIGNvbW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQbGVhc2UgZW50ZXIgeW91ciBjb21tZW50Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29tbWVudE9iamVjdCA9IHtcbiAgICBpdGVtX2lkOiBtb3ZpZURhdGEuaWQsXG4gICAgdXNlcm5hbWU6IHVzZXJuYW1lLnZhbHVlLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gIH07XG4gIGF3YWl0IGZldGNoKEFQSSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21tZW50T2JqZWN0KSxcbiAgfSk7XG5cbiAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgY29tbWVudC52YWx1ZSA9ICcnO1xufTtcblxuZXhwb3J0IHsgZmV0Y2hEYXRhLCBzYXZlRGF0YSB9OyIsImltcG9ydCBjb3VudGVyUmVzZXJ2ZSBmcm9tICcuL2NvdW50ZXJSZXNlcnZlLmpzJztcclxuXHJcbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChtb3ZpZURhdGEpID0+IHtcclxuICBjb25zdCBBUEkgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWDVWeDNUT1d4eWFrMVNnSElBQW8vcmVzZXJ2YXRpb25zP2l0ZW1faWQ9aXRlbSR7bW92aWVEYXRhLmlkfWA7XHJcbiAgY29uc3QgcmVzZXJ2ZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2ZVNlY3Rpb24nKTtcclxuICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0IHRvQWRkUmVzZXJ2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRvQWRkUmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKCdsaXN0UmVzZXJ2ZScpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gUHJvY2VzcyB0aGUgcmV0cmlldmVkIGRhdGFcclxuICAgIHRpdGxlU2VjdGlvbi50ZXh0Q29udGVudCA9IGBSZXNlcnZhdGlvbnMgKCR7Y291bnRlclJlc2VydmUoZGF0YSl9KWA7XHJcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgcmVzZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcclxuICAgICAgdG9BZGRSZXNlcnZlLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxwPiR7ZWxlbWVudC5kYXRlX3N0YXJ0fSAtICR7ZWxlbWVudC5kYXRlX2VuZH0gYnkgJHtlbGVtZW50LnVzZXJuYW1lfTwvcD5cclxuICAgICAgYDtcclxuICAgICAgcmVzZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQodG9BZGRSZXNlcnZlKTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aXRsZVNlY3Rpb24udGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb25zICgwKSc7XHJcbiAgICByZXNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xyXG4gICAgdG9BZGRSZXNlcnZlLmlubmVySFRNTCA9IGBcclxuICAgIDxoMz48Yj5ObyByZXNlcnZlIHlldDwvYj48L2gzPmA7XHJcbiAgICByZXNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZCh0b0FkZFJlc2VydmUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNhdmVEYXRhUmVzZXJ2ZSA9IGFzeW5jIChtb3ZpZURhdGEpID0+IHtcclxuICBjb25zdCBBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWDVWeDNUT1d4eWFrMVNnSElBQW8vcmVzZXJ2YXRpb25zJztcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVSZXNlcnZlJyk7XHJcbiAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnREYXRlJyk7XHJcbiAgY29uc3QgZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZERhdGUnKTtcclxuXHJcbiAgY29uc3QgbmFtZVZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XHJcbiAgY29uc3Qgc3RhcnRWYWx1ZSA9IHN0YXJ0LnZhbHVlLnRyaW0oKTtcclxuICBjb25zdCBlbmRWYWx1ZSA9IGVuZC52YWx1ZS50cmltKCk7XHJcblxyXG4gIGNvbnN0IHJlc2VydmVPYmplY3QgPSB7XHJcbiAgICBpdGVtX2lkOiBgaXRlbSR7bW92aWVEYXRhLmlkfWAsXHJcbiAgICB1c2VybmFtZTogbmFtZVZhbHVlLFxyXG4gICAgZGF0ZV9zdGFydDogc3RhcnRWYWx1ZSxcclxuICAgIGRhdGVfZW5kOiBlbmRWYWx1ZSxcclxuICB9O1xyXG5cclxuICBhd2FpdCBmZXRjaChBUEksIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc2VydmVPYmplY3QpLFxyXG4gIH0pO1xyXG5cclxuICBuYW1lLnZhbHVlID0gJyc7XHJcbiAgc3RhcnQudmFsdWUgPSAnJztcclxuICBlbmQudmFsdWUgPSAnJztcclxufTtcclxuXHJcbmV4cG9ydCB7IGZldGNoRGF0YSwgc2F2ZURhdGFSZXNlcnZlIH07IiwiaW1wb3J0IHsgZmV0Y2hEYXRhLCBzYXZlRGF0YVJlc2VydmUgfSBmcm9tICcuL2xvYWRTYXZlUmVzZXJ2ZS5qcyc7XHJcblxyXG5jb25zdCByZXNlcnZlID0gKG1vdmllRGF0YSkgPT4ge1xyXG4gIGNvbnN0ICQgPSBkb2N1bWVudDtcclxuICBjb25zdCByZXNlcnZlQ2FyZCA9ICQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmVDYXJkJyk7XHJcbiAgY29uc3QgYm9keU92ZXJmbG93ID0gJC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xyXG4gIHJlc2VydmVDYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGJvZHlPdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICBjb25zdCBtb2RhbENvbnRlbnQgPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbENvbnRlbnQnKTtcclxuXHJcbiAgY29uc3Qgc3BhbiA9ICQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ1dHRvbicpO1xyXG4gIHNwYW4udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgc3Bhbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgcmVzZXJ2ZUNhcmQucmVtb3ZlQ2hpbGQobW9kYWxDb250ZW50KTtcclxuICAgIHJlc2VydmVDYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBib2R5T3ZlcmZsb3cuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgfTtcclxuICB3aW5kb3cub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IHJlc2VydmVDYXJkKSB7XHJcbiAgICAgIHJlc2VydmVDYXJkLnJlbW92ZUNoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgICAgIHJlc2VydmVDYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGJvZHlPdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwb3BJbWcgPSAkLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHBvcEltZy5jbGFzc0xpc3QuYWRkKCdwb3BJbWcnKTtcclxuICBjb25zdCBpbWcgPSAkLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltZy5jbGFzc0xpc3QuYWRkKCdpbWdSZXNlcnZlJyk7XHJcbiAgaW1nLnNyYyA9IG1vdmllRGF0YS5pbWFnZTtcclxuICBwb3BJbWcuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVySW5mbyA9ICQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVySW5mby5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJJbmZvJyk7XHJcbiAgY29udGFpbmVySW5mby5pbm5lckhUTUwgPSBgXHJcbiAgICA8cD48Yj5UaXRsZTo8L2I+ICR7bW92aWVEYXRhLm5hbWV9PC9wPjxwPjxiPlN1bW1hcnk6PC9iPiAke21vdmllRGF0YS5zdW1tYXJ5fTwvcD48cD48Yj5HZW5yZXM6PC9iPiAke21vdmllRGF0YS5nZW5yZXN9PC9wPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHJlc2VydmVTZWN0aW9uID0gJC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByZXNlcnZlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZlU2VjdGlvbicpO1xyXG5cclxuICBjb25zdCByZXNlcnZlRm9ybSA9ICQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIHJlc2VydmVGb3JtLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmVGb3JtJyk7XHJcbiAgcmVzZXJ2ZUZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lUmVzZXJ2ZVwiIG5hbWU9XCJuYW1lUmVzZXJ2ZVwiIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgbmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJzdGFydERhdGVcIiBuYW1lPVwic3RhcnREYXRlXCIgcmVxdWlyZWQ+XHJcbiAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImVuZERhdGVcIiBuYW1lPVwiZW5kRGF0ZVwiIHJlcXVpcmVkPlxyXG4gIGA7XHJcbiAgY29uc3Qgc3VibWl0QnRuID0gJC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnRuJyk7XHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1Jlc2VydmUnO1xyXG4gIHJlc2VydmVGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGF3YWl0IHNhdmVEYXRhUmVzZXJ2ZShtb3ZpZURhdGEpO1xyXG4gICAgcmVzZXJ2ZVNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBhd2FpdCBmZXRjaERhdGEobW92aWVEYXRhKTtcclxuICB9KTtcclxuXHJcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChwb3BJbWcpO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXJJbmZvKTtcclxuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQocmVzZXJ2ZVNlY3Rpb24pO1xyXG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZlRm9ybSk7XHJcblxyXG4gIHJlc2VydmVDYXJkLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgZmV0Y2hEYXRhKG1vdmllRGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNlcnZlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==