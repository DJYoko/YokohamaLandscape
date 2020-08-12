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
          lineNumber: 11,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, this.props.title), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }
      }, this.props.description, __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }
      }), this.props.annotation), __jsx("hr", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, "Text Source", __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }), this.props.authText), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, "Photo Source", __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }), this.props.authImg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles));
    }
  }]);

  return DescriptionBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
var styles = new String(".u-descriptionBox.jsx-184106991{padding:24px 24px 14px;background:rgba(0,0,0,0.75);max-width:480px;word-break:break-all;}.u-descriptionBox.jsx-184106991 h1.jsx-184106991{margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9rb2NcXERlc2t0b3BcXGZpbGVzXFxkZXZcXFlva29oYW1hTGFuZHNjYXBlXFxzZXJ2ZXJcXFlva29oYW1hTGFuZHNjYXBlXFxzcmNcXGNvbXBvbmVudHNcXERlc2NyaXB0aW9uQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFFMEIsQUFLUixhQUFDLFVBSmUsNEJBQ2YsZ0JBQ0sscUJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFx5b2tvY1xcRGVza3RvcFxcZmlsZXNcXGRldlxcWW9rb2hhbWFMYW5kc2NhcGVcXHNlcnZlclxcWW9rb2hhbWFMYW5kc2NhcGVcXHNyY1xcY29tcG9uZW50c1xcRGVzY3JpcHRpb25Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSBcInN0eWxlZC1qc3gvc3R5bGVcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbkJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidS1kZXNjcmlwdGlvbkJveFwiPlxyXG4gICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYW5ub3RhdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUZXh0IFNvdXJjZVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hdXRoVGV4dH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFBob3RvIFNvdXJjZVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hdXRoSW1nfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgICAudS1kZXNjcmlwdGlvbkJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMjRweCAyNHB4IDE0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25Cb3g7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\yokoc\\\\Desktop\\\\files\\\\dev\\\\YokohamaLandscape\\\\server\\\\YokohamaLandscape\\\\src\\\\components\\\\DescriptionBox.js */");
styles.__hash = "184106991";
/* harmony default export */ __webpack_exports__["default"] = (DescriptionBox);

/***/ })

})
//# sourceMappingURL=detail.js.df98d697e03c92416d30.hot-update.js.map