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
        className: "jsx-1263036362 " + "jsx-".concat(styles.__hash) + " " + "pageRoot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-1263036362 " + "jsx-".concat(styles.__hash) + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-1263036362 " + "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
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
        id: "1263036362",
        __self: this
      }, "body{background-image:url( ".concat(this.getBackgroundImagePath(), " );background-size:cover;background-position:center;background-attachment:fixed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxnaXRodWJcXFlva29oYW1hTGFuZHNjYXBlXFxwYWdlc1xcZGV0YWlsXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDJCLEFBR21FLHFEQUM5QixzQkFDUCwyQkFDQyw0QkFDbEIiLCJmaWxlIjoiQzpcXHhhbXBwXFxodGRvY3NcXGdpdGh1YlxcWW9rb2hhbWFMYW5kc2NhcGVcXHBhZ2VzXFxkZXRhaWxcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IF9KU1hTdHlsZSBmcm9tICdzdHlsZWQtanN4L3N0eWxlJztcclxuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XHJcbmltcG9ydCBBcmVhcyBmcm9tICcuLi8uLi9zcmMvZGF0YS9BcmVhcyc7XHJcbmltcG9ydCBDb21tb25IZWFkIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbW1vbkhlYWQnO1xyXG5pbXBvcnQgQmFja0xpbmsgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFja0xpbmsnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25Cb3ggZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25Cb3gnO1xyXG5pbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL25leHQuY29uZmlnJztcclxuY29uc3QgUk9PVCA9IChDT05GSUcuYXNzZXRQcmVmaXggPT09ICcnKSA/ICcvJyA6IENPTkZJRy5hc3NldFByZWZpeDtcclxuXHJcbmV4cG9ydCBjbGFzcyBkZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICByZXR1cm4geyBxdWVyeSB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5wYXRoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckRlZmF1bHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVycm9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEFyZWFEYXRhKHBhdGgpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkQXJlYXMgPSBBcmVhcy5maWx0ZXIoKGFyZWEpID0+IHtcclxuICAgICAgcmV0dXJuIChhcmVhLnBhdGggPT09IHBhdGgpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCkgPyBmaWx0ZXJlZEFyZWFzWzBdIDogbnVsbDtcclxuICB9XHJcbiAgc2V0QXJlYURhdGEoYXJlYURhdGEpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoYXJlYURhdGEpO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgfVxyXG4gIHJlbmRlckRlZmF1bHQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VSb290XCI+XHJcbiAgICAgICAgPENvbW1vbkhlYWQ+PC9Db21tb25IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stbGluay13cmFwXCI+XHJcbiAgICAgICAgICAgIDxCYWNrTGluaz48L0JhY2tMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8RGVzY3JpcHRpb25Cb3hcclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBhdXRoVGV4dD17dGhpcy5zdGF0ZS5hdXRoVGV4dH1cclxuICAgICAgICAgICAgYXV0aEltZz17dGhpcy5zdGF0ZS5hdXRoSW1nfVxyXG4gICAgICAgICAgICBhbm5vdGF0aW9uPXt0aGlzLnN0YXRlLmFubm90YXRpb259PlxyXG4gICAgICAgICAgPC9EZXNjcmlwdGlvbkJveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntzdHlsZXN9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCggJHt0aGlzLmdldEJhY2tncm91bmRJbWFnZVBhdGgoKX0gKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICByZW5kZXJFcnJvcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvbW1vbkhlYWQ+PC9Db21tb25IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stbGluay13cmFwXCI+XHJcbiAgICAgICAgICAgIDxCYWNrTGluaz48L0JhY2tMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5Tb3JyeSBwYWdlIGRhdGEgaXMgbm90IGZvdW5kLjwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlUGF0aCgpIHtcclxuICAgIHJldHVybiBST09UICsgJ3N0YXRpYy9pbWcvYmFja2dyb3VuZC8nICsgdGhpcy5zdGF0ZS5pbWc7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgYXJlYU5hbWUgPSAodGhpcy5wcm9wcy5xdWVyeS5uYW1lKSA/IHRoaXMucHJvcHMucXVlcnkubmFtZSA6IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/bmFtZT0nLCAnJyk7XHJcbiAgICBjb25zdCBhcmVhRGF0YSA9IHRoaXMuZ2V0QXJlYURhdGEoYXJlYU5hbWUpO1xyXG4gICAgaWYgKGFyZWFEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0QXJlYURhdGEoYXJlYURhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4ucGFnZVJvb3Qge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjRweCAwO1xyXG59XHJcbi5iYWNrLWxpbmstd3JhcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsOyJdfQ== */\n/*@ sourceURL=C:\\xampp\\htdocs\\github\\YokohamaLandscape\\pages\\detail\\index.js */")));
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
var styles = new String(".pageRoot.jsx-1282505641{background-size:cover;background-position:center;background-attachment:fixed;}.container.jsx-1282505641{padding:24px 0;}.back-link-wrap.jsx-1282505641{margin-bottom:12px;}");
styles.__hash = "1282505641";
/* harmony default export */ __webpack_exports__["default"] = (detail);

/***/ })

})
//# sourceMappingURL=detail.js.0b3e817b2a94ef7d6c75.hot-update.js.map