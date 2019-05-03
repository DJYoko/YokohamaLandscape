webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./pages/detail/index.js":
/*!*******************************!*\
  !*** ./pages/detail/index.js ***!
  \*******************************/
/*! exports provided: detail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detail", function() { return detail; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_data_Areas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/data/Areas */ "./src/data/Areas.js");
/* harmony import */ var _src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/CommonHead */ "./src/components/CommonHead.js");
/* harmony import */ var _src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/BackLink */ "./src/components/BackLink.js");
/* harmony import */ var _src_components_DescriptionBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/components/DescriptionBox */ "./src/components/DescriptionBox.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../next.config */ "./next.config.js");
/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "C:\\xampp\\htdocs\\github\\YokohamaLandscape\\pages\\detail\\index.js";







var ROOT = _next_config__WEBPACK_IMPORTED_MODULE_11___default.a.assetPrefix === '' ? '/' : _next_config__WEBPACK_IMPORTED_MODULE_11___default.a.assetPrefix;
var detail =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(detail, _React$Component);

  function detail(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, detail);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(detail).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(detail, [{
    key: "render",
    value: function render() {
      if (this.state.path) {
        return this.renderDefault();
      } else {
        return this.renderError();
      }
    }
  }, {
    key: "getAreaData",
    value: function getAreaData(path) {
      var filteredAreas = _src_data_Areas__WEBPACK_IMPORTED_MODULE_7__["default"].filter(function (area) {
        return area.path === path;
      });
      return filteredAreas.length > 0 ? filteredAreas[0] : null;
    }
  }, {
    key: "setAreaData",
    value: function setAreaData(areaData) {
      this.setState(areaData);
      return this.state;
    }
  }, {
    key: "renderDefault",
    value: function renderDefault() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-447407215 " + "jsx-".concat(styles.__hash) + " " + "pageRoot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: this.state.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-447407215 " + "jsx-".concat(styles.__hash) + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-447407215 " + "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_DescriptionBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.state.title,
        description: this.state.description,
        authText: this.state.authText,
        authImg: this.state.authImg,
        annotation: this.state.annotation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "447407215",
        __self: this
      }, "body{background-image:url( ".concat(this.getBackgroundImagePath(), " );background-size:cover;background-position:center;background-attachment:fixed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxnaXRodWJcXFlva29oYW1hTGFuZHNjYXBlXFxwYWdlc1xcZGV0YWlsXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDJCLEFBR21FLHFEQUM5QixzQkFDSywyQkFDQyw0QkFDOUIiLCJmaWxlIjoiQzpcXHhhbXBwXFxodGRvY3NcXGdpdGh1YlxcWW9rb2hhbWFMYW5kc2NhcGVcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IF9KU1hTdHlsZSBmcm9tICdzdHlsZWQtanN4L3N0eWxlJztcclxuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcbmltcG9ydCBBcmVhcyBmcm9tICcuLi8uLi9zcmMvZGF0YS9BcmVhcyc7XHJcbmltcG9ydCBDb21tb25IZWFkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbW1vbkhlYWQnO1xyXG5pbXBvcnQgQmFja0xpbmsgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFja0xpbmsnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25Cb3ggZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25Cb3gnO1xyXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL25leHQuY29uZmlnJztcclxuY29uc3QgUk9PVCA9IChDT05GSUcuYXNzZXRQcmVmaXggPT09ICcnKSA/ICcvJyA6IENPTkZJRy5hc3NldFByZWZpeDtcclxuXHJcbmV4cG9ydCBjbGFzcyBkZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICByZXR1cm4geyBxdWVyeSB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wYXRoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVycm9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEFyZWFEYXRhKHBhdGgpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJlYXMgPSBBcmVhcy5maWx0ZXIoKGFyZWEpID0+IHtcclxuICAgICAgcmV0dXJuIChhcmVhLnBhdGggPT09IHBhdGgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCkgPyBmaWx0ZXJlZEFyZWFzWzBdIDogbnVsbDtcclxuICB9XHJcbiAgc2V0QXJlYURhdGEoYXJlYURhdGEpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoYXJlYURhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG4gIHJlbmRlckRlZmF1bHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VSb290XCI+XHJcbiAgICAgICAgPENvbW1vbkhlYWQgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9PjwvQ29tbW9uSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLWxpbmstd3JhcFwiPlxyXG4gICAgICAgICAgICA8QmFja0xpbms+PC9CYWNrTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uQm94XHJcbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgYXV0aFRleHQ9e3RoaXMuc3RhdGUuYXV0aFRleHR9XHJcbiAgICAgICAgICAgIGF1dGhJbWc9e3RoaXMuc3RhdGUuYXV0aEltZ31cclxuICAgICAgICAgICAgYW5ub3RhdGlvbj17dGhpcy5zdGF0ZS5hbm5vdGF0aW9ufT5cclxuICAgICAgICAgIDwvRGVzY3JpcHRpb25Cb3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57c3R5bGVzfTwvc3R5bGU+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoICR7dGhpcy5nZXRCYWNrZ3JvdW5kSW1hZ2VQYXRoKCl9ICk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgcmVuZGVyRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDb21tb25IZWFkPjwvQ29tbW9uSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLWxpbmstd3JhcFwiPlxyXG4gICAgICAgICAgICA8QmFja0xpbms+PC9CYWNrTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHA+U29ycnkgcGFnZSBkYXRhIGlzIG5vdCBmb3VuZC48L3A+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIGdldEJhY2tncm91bmRJbWFnZVBhdGgoKSB7XHJcbiAgICByZXR1cm4gUk9PVCArICdzdGF0aWMvaW1nL2JhY2tncm91bmQvJyArIHRoaXMuc3RhdGUuaW1nO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGFyZWFOYW1lID0gKHRoaXMucHJvcHMucXVlcnkubmFtZSkgPyB0aGlzLnByb3BzLnF1ZXJ5Lm5hbWUgOiBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnP25hbWU9JywgJycpO1xyXG4gICAgY29uc3QgYXJlYURhdGEgPSB0aGlzLmdldEFyZWFEYXRhKGFyZWFOYW1lKTtcclxuICAgIGlmIChhcmVhRGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNldEFyZWFEYXRhKGFyZWFEYXRhKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbn1cclxuLmJhY2stbGluay13cmFwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWw7Il19 */\n/*@ sourceURL=C:\\xampp\\htdocs\\github\\YokohamaLandscape\\pages\\detail\\index.js */")));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Sorry page data is not found."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles)));
    }
  }, {
    key: "getBackgroundImagePath",
    value: function getBackgroundImagePath() {
      return ROOT + 'static/img/background/' + this.state.img;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var areaName = this.props.query.name ? this.props.query.name : location.search.replace('?name=', '');
      var areaData = this.getAreaData(areaName);

      if (areaData !== null) {
        this.setAreaData(areaData);
      }
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        query: query
      };
    }
  }]);

  return detail;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);
var styles = new String(".container.jsx-1119831714{padding-top:24px;padding-bottom:24px;}.back-link-wrap.jsx-1119831714{margin-bottom:12px;}");
styles.__hash = "1119831714";
/* harmony default export */ __webpack_exports__["default"] = (detail);

/***/ })

})
//# sourceMappingURL=detail.js.0f7a1519c4193ce08123.hot-update.js.map