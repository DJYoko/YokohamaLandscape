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
        className: "jsx-4253506971 " + "jsx-".concat(styles.__hash) + " " + "pageRoot",
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
        className: "jsx-4253506971 " + "jsx-".concat(styles.__hash) + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-4253506971 " + "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
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
        id: "4253506971",
        __self: this
      }, "body{background-image:url( ".concat(this.getBackgroundImagePath(), " );}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxnaXRodWJcXFlva29oYW1hTGFuZHNjYXBlXFxwYWdlc1xcZGV0YWlsXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDJCLEFBR21FLHFEQUN0RCIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcZ2l0aHViXFxZb2tvaGFtYUxhbmRzY2FwZVxccGFnZXNcXGRldGFpbFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgX0pTWFN0eWxlIGZyb20gJ3N0eWxlZC1qc3gvc3R5bGUnO1xyXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcclxuaW1wb3J0IEFyZWFzIGZyb20gJy4uLy4uL3NyYy9kYXRhL0FyZWFzJztcclxuaW1wb3J0IENvbW1vbkhlYWQgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tbW9uSGVhZCc7XHJcbmltcG9ydCBCYWNrTGluayBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9CYWNrTGluayc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkJveCBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9EZXNjcmlwdGlvbkJveCc7XHJcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vbmV4dC5jb25maWcnO1xyXG5jb25zdCBST09UID0gKENPTkZJRy5hc3NldFByZWZpeCA9PT0gJycpID8gJy8nIDogQ09ORklHLmFzc2V0UHJlZml4O1xyXG5cclxuZXhwb3J0IGNsYXNzIGRldGFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIHJldHVybiB7IHF1ZXJ5IH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnBhdGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRXJyb3IoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QXJlYURhdGEocGF0aCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcmVhcyA9IEFyZWFzLmZpbHRlcigoYXJlYSkgPT4ge1xyXG4gICAgICByZXR1cm4gKGFyZWEucGF0aCA9PT0gcGF0aCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwKSA/IGZpbHRlcmVkQXJlYXNbMF0gOiBudWxsO1xyXG4gIH1cclxuICBzZXRBcmVhRGF0YShhcmVhRGF0YSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShhcmVhRGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICB9XHJcbiAgcmVuZGVyRGVmYXVsdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVJvb3RcIj5cclxuICAgICAgICA8Q29tbW9uSGVhZD48L0NvbW1vbkhlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1saW5rLXdyYXBcIj5cclxuICAgICAgICAgICAgPEJhY2tMaW5rPjwvQmFja0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkJveFxyXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGF1dGhUZXh0PXt0aGlzLnN0YXRlLmF1dGhUZXh0fVxyXG4gICAgICAgICAgICBhdXRoSW1nPXt0aGlzLnN0YXRlLmF1dGhJbWd9XHJcbiAgICAgICAgICAgIGFubm90YXRpb249e3RoaXMuc3RhdGUuYW5ub3RhdGlvbn0+XHJcbiAgICAgICAgICA8L0Rlc2NyaXB0aW9uQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCAke3RoaXMuZ2V0QmFja2dyb3VuZEltYWdlUGF0aCgpfSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICByZW5kZXJFcnJvcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvbW1vbkhlYWQ+PC9Db21tb25IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stbGluay13cmFwXCI+XHJcbiAgICAgICAgICAgIDxCYWNrTGluaz48L0JhY2tMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5Tb3JyeSBwYWdlIGRhdGEgaXMgbm90IGZvdW5kLjwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlUGF0aCgpIHtcclxuICAgIHJldHVybiBST09UICsgJ3N0YXRpYy9pbWcvYmFja2dyb3VuZC8nICsgdGhpcy5zdGF0ZS5pbWc7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgYXJlYU5hbWUgPSAodGhpcy5wcm9wcy5xdWVyeS5uYW1lKSA/IHRoaXMucHJvcHMucXVlcnkubmFtZSA6IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/bmFtZT0nLCAnJyk7XHJcbiAgICBjb25zdCBhcmVhRGF0YSA9IHRoaXMuZ2V0QXJlYURhdGEoYXJlYU5hbWUpO1xyXG4gICAgaWYgKGFyZWFEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0QXJlYURhdGEoYXJlYURhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4ucGFnZVJvb3Qge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjRweCAwO1xyXG59XHJcbi5iYWNrLWxpbmstd3JhcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV0YWlsOyJdfQ== */\n/*@ sourceURL=C:\\xampp\\htdocs\\github\\YokohamaLandscape\\pages\\detail\\index.js */")));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
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
//# sourceMappingURL=detail.js.b42ef68845ca77fe62d2.hot-update.js.map