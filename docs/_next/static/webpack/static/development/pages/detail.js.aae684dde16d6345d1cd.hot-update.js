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
        className: "jsx-".concat(styles.__hash) + " " + "description-box",
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
          columnNumber: 17
        }
      }, this.props.title), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, this.props.description, __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 44
        }
      }), this.props.annotation), __jsx("hr", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }
      }), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }
      }, "Text Source", __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 31
        }
      }), this.props.authText), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }
      }, "Photo Source", __jsx("br", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 32
        }
      }), this.props.authImg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles));
    }
  }]);

  return DescriptionBox;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
var styles = new String(".description-box.jsx-3614976462{padding:24px 24px 14px;background:rgba(0,0,0,0.9);max-width:480px;border-radius:4px;word-break:break-all;}h1.jsx-3614976462{margin-top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9rb2NcXERlc2t0b3BcXGZpbGVzXFxkZXZcXFlva29oYW1hTGFuZHNjYXBlXFxzZXJ2ZXJcXFlva29oYW1hTGFuZHNjYXBlXFxzcmNcXGNvbXBvbmVudHNcXERlc2NyaXB0aW9uQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHMEIsQUFPVixhQUNmLFVBUGdDLDJCQUNkLGdCQUNFLGtCQUNHLHFCQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXHlva29jXFxEZXNrdG9wXFxmaWxlc1xcZGV2XFxZb2tvaGFtYUxhbmRzY2FwZVxcc2VydmVyXFxZb2tvaGFtYUxhbmRzY2FwZVxcc3JjXFxjb21wb25lbnRzXFxEZXNjcmlwdGlvbkJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSAnc3R5bGVkLWpzeC9zdHlsZSc7XHJcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufTxiciAvPnt0aGlzLnByb3BzLmFubm90YXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8cD5UZXh0IFNvdXJjZTxiciAvPnt0aGlzLnByb3BzLmF1dGhUZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlBob3RvIFNvdXJjZTxiciAvPnt0aGlzLnByb3BzLmF1dGhJbWd9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuLmRlc2NyaXB0aW9uLWJveCB7XHJcbiAgcGFkZGluZzogMjRweCAyNHB4IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25Cb3g7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\yokoc\\\\Desktop\\\\files\\\\dev\\\\YokohamaLandscape\\\\server\\\\YokohamaLandscape\\\\src\\\\components\\\\DescriptionBox.js */");
styles.__hash = "3614976462";
/* harmony default export */ __webpack_exports__["default"] = (DescriptionBox);

/***/ })

})
//# sourceMappingURL=detail.js.aae684dde16d6345d1cd.hot-update.js.map