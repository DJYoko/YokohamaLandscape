webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/AreaLinks/AreaLink.js":
/*!**********************************************!*\
  !*** ./src/components/AreaLinks/AreaLink.js ***!
  \**********************************************/
/*! exports provided: AreaLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaLink", function() { return AreaLink; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\yokoc\\Desktop\\files\\dev\\YokohamaLandscape\\server\\YokohamaLandscape\\src\\components\\AreaLinks\\AreaLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var AreaLink = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AreaLink, _React$Component);

  var _super = _createSuper(AreaLink);

  function AreaLink(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AreaLink);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AreaLink, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: {
          pathname: './detail/',
          query: {
            name: this.props.path
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "jsx-".concat(styles.__hash) + " " + "area-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }
      }, this.props.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles));
    }
  }]);

  return AreaLink;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
AreaLink.propTypes = {
  path: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};
var styles = new String(".area-link.jsx-2370215602{color:#d9d9d9;background:rgba(0,0,0,0.75);display:block;padding:16px;text-align:center;margin-bottom:24px;}.area-link.jsx-2370215602:hover{color:#262626;background:rgba(255,255,255,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9rb2NcXERlc2t0b3BcXGZpbGVzXFxkZXZcXFlva29oYW1hTGFuZHNjYXBlXFxzZXJ2ZXJcXFlva29oYW1hTGFuZHNjYXBlXFxzcmNcXGNvbXBvbmVudHNcXEFyZWFMaW5rc1xcQXJlYUxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NrQixBQUdpQixBQVNBLGNBUmlCLEFBU00sNEJBUnZCLE1BU2hCLFFBUmUsYUFDSyxrQkFDQyxtQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFx5b2tvY1xcRGVza3RvcFxcZmlsZXNcXGRldlxcWW9rb2hhbWFMYW5kc2NhcGVcXHNlcnZlclxcWW9rb2hhbWFMYW5kc2NhcGVcXHNyY1xcY29tcG9uZW50c1xcQXJlYUxpbmtzXFxBcmVhTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSAnc3R5bGVkLWpzeC9zdHlsZSc7XHJcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFyZWFMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcuL2RldGFpbC8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IG5hbWU6IHRoaXMucHJvcHMucGF0aCB9XHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhcmVhLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFyZWFMaW5rLnByb3BUeXBlcyA9IHtcclxuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuLmFyZWEtbGluayB7XHJcbiAgY29sb3I6ICNkOWQ5ZDk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uYXJlYS1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogIzI2MjYyNjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmVhTGluazsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\yokoc\\\\Desktop\\\\files\\\\dev\\\\YokohamaLandscape\\\\server\\\\YokohamaLandscape\\\\src\\\\components\\\\AreaLinks\\\\AreaLink.js */");
styles.__hash = "2370215602";
/* harmony default export */ __webpack_exports__["default"] = (AreaLink);

/***/ })

})
//# sourceMappingURL=index.js.d8d2af3dbdf03f844380.hot-update.js.map