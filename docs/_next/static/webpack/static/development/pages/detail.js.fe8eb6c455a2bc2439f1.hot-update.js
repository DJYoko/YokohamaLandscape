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
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! http */ "./node_modules/stream-http/index.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_12__);





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
        style: {
          backgroundImage: "url( ".concat(this.getBackgroundImagePath(), " )")
        },
        className: "jsx-".concat(styles.__hash) + " " + "pageRoot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
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
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "jsx-".concat(styles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
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
var styles = new String(".pageRoot.jsx-3407894255{background-size:cover;background-position:center;background-attachment:fixed;}.container.jsx-3407894255{padding-top:24px;}.back-link-wrap.jsx-3407894255{margin-bottom:12px;}");
styles.__hash = "3407894255";
/* harmony default export */ __webpack_exports__["default"] = (detail);

/***/ })

})
//# sourceMappingURL=detail.js.fe8eb6c455a2bc2439f1.hot-update.js.map