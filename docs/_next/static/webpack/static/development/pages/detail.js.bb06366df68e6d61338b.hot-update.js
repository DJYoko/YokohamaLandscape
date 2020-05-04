webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./src/components/DescriptionBox.js":
/*!******************************************!*\
  !*** ./src/components/DescriptionBox.js ***!
  \******************************************/
/*! exports provided: DescriptionBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionBox", function() { return DescriptionBox; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\yokoc\\Desktop\\files\\dev\\YokohamaLandscape\\server\\YokohamaLandscape\\src\\components\\DescriptionBox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var DescriptionBox = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DescriptionBox, _React$Component);

  var _super = _createSuper(DescriptionBox);

  function DescriptionBox(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DescriptionBox);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DescriptionBox, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-".concat(styles.__hash) + " " + "u-descriptionBox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 18
        }
      }, __jsx("h1", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, " ", this.props.title, " "), " ", __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 22
        }
      }, " ", this.props.description, " ", __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }
      }), " ", this.props.annotation, " "), " ", __jsx("hr", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, "Text Source ", __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }
      }), " ", this.props.authText, " "), " ", __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, "Photo Source ", __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 26
        }
      }), " ", this.props.authImg, " "), " ", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles), " ");
    }
  }]);

  return DescriptionBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
var styles = new String(".u-descriptionBox.jsx-184106991{padding:24px 24px 14px;background:rgba(0,0,0,0.75);max-width:480px;word-break:break-all;}.u-descriptionBox.jsx-184106991 h1.jsx-184106991{margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9rb2NcXERlc2t0b3BcXGZpbGVzXFxkZXZcXFlva29oYW1hTGFuZHNjYXBlXFxzZXJ2ZXJcXFlva29oYW1hTGFuZHNjYXBlXFxzcmNcXGNvbXBvbmVudHNcXERlc2NyaXB0aW9uQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDbUIsQUFFMEIsQUFLUixhQUFDLFVBSmUsNEJBQ2YsZ0JBQ0sscUJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFx5b2tvY1xcRGVza3RvcFxcZmlsZXNcXGRldlxcWW9rb2hhbWFMYW5kc2NhcGVcXHNlcnZlclxcWW9rb2hhbWFMYW5kc2NhcGVcXHNyY1xcY29tcG9uZW50c1xcRGVzY3JpcHRpb25Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSBcInN0eWxlZC1qc3gvc3R5bGVcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCA8XHJcbiAgICAgICAgICAgIGRpdiBjbGFzc05hbWUgPSBcInUtZGVzY3JpcHRpb25Cb3hcIiA+XHJcbiAgICAgICAgICAgIDxcclxuICAgICAgICAgICAgaDEgPiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlXHJcbiAgICAgICAgICAgIH0gPCAvaDE+IDxcclxuICAgICAgICAgICAgcCA+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfSA8XHJcbiAgICAgICAgICAgIGJyIC8gPiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFubm90YXRpb25cclxuICAgICAgICAgICAgfSA8XHJcbiAgICAgICAgICAgIC9wPiA8XHJcbiAgICAgICAgICAgIGhyIC8gPlxyXG4gICAgICAgICAgICA8XHJcbiAgICAgICAgICAgIHAgPlxyXG4gICAgICAgICAgICBUZXh0IFNvdXJjZSA8XHJcbiAgICAgICAgICAgIGJyIC8gPiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGhUZXh0XHJcbiAgICAgICAgICAgIH0gPFxyXG4gICAgICAgICAgICAvcD4gPFxyXG4gICAgICAgICAgICBwID5cclxuICAgICAgICAgICAgUGhvdG8gU291cmNlIDxcclxuICAgICAgICAgICAgYnIgLyA+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aEltZ1xyXG4gICAgICAgICAgICB9IDxcclxuICAgICAgICAgICAgL3A+IDxcclxuICAgICAgICAgICAgc3R5bGUganN4ID4ge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzXHJcbiAgICAgICAgICAgIH0gPCAvc3R5bGU+IDxcclxuICAgICAgICAgICAgL2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3MgYFxyXG4gICAgLnUtZGVzY3JpcHRpb25Cb3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHggMjRweCAxNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uQm94OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\yokoc\\\\Desktop\\\\files\\\\dev\\\\YokohamaLandscape\\\\server\\\\YokohamaLandscape\\\\src\\\\components\\\\DescriptionBox.js */");
styles.__hash = "184106991";
/* harmony default export */ __webpack_exports__["default"] = (DescriptionBox);

/***/ })

})
//# sourceMappingURL=detail.js.bb06366df68e6d61338b.hot-update.js.map