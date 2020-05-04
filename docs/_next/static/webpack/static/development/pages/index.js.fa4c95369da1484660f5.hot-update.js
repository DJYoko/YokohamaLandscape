webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/AreaLinks/index.js":
/*!*******************************************!*\
  !*** ./src/components/AreaLinks/index.js ***!
  \*******************************************/
/*! exports provided: AreaLinks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaLinks", function() { return AreaLinks; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_Areas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/Areas */ "./src/data/Areas.js");
/* harmony import */ var _AreaLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AreaLink */ "./src/components/AreaLinks/AreaLink.js");





var _jsxFileName = "C:\\Users\\yokoc\\Desktop\\files\\dev\\YokohamaLandscape\\server\\YokohamaLandscape\\src\\components\\AreaLinks\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AreaLinks = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AreaLinks, _React$Component);

  var _super = _createSuper(AreaLinks);

  function AreaLinks() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AreaLinks);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AreaLinks, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }
      }, _data_Areas__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (area, index) {
        return __jsx("div", {
          className: "col-xs-12 col-sm-4 col-md-3",
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 21
          }
        }, __jsx(_AreaLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: area.title,
          path: area.path,
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }
        }));
      }));
    }
  }]);

  return AreaLinks;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (AreaLinks);

/***/ })

})
//# sourceMappingURL=index.js.fa4c95369da1484660f5.hot-update.js.map