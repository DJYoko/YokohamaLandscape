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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
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





var _jsxFileName = "C:\\Users\\yokoc\\Desktop\\files\\dev\\YokohamaLandscape\\server\\YokohamaLandscape\\pages\\detail\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var ROOT = _next_config__WEBPACK_IMPORTED_MODULE_11___default.a.assetPrefix === "" ? "/" : _next_config__WEBPACK_IMPORTED_MODULE_11___default.a.assetPrefix;
var detail = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(detail, _React$Component);

  var _super = _createSuper(detail);

  function detail(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, detail);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(detail, [{
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
      return __jsx("div", {
        className: "jsx-4065625728 " + "jsx-".concat(styles.__hash) + " " + "pageRoot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, __jsx(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: this.state.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-4065625728 " + "jsx-".concat(styles.__hash) + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-4065625728 " + "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, __jsx(_src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      })), __jsx(_src_components_DescriptionBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: this.state.title,
        description: this.state.description,
        authText: this.state.authText,
        authImg: this.state.authImg,
        annotation: this.state.annotation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "4065625728",
        __self: this
      }, "body{background-image:url(".concat(this.getBackgroundImagePath(), ");background-size:cover;background-position:center;background-attachment:fixed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9rb2NcXERlc2t0b3BcXGZpbGVzXFxkZXZcXFlva29oYW1hTGFuZHNjYXBlXFxzZXJ2ZXJcXFlva29oYW1hTGFuZHNjYXBlXFxwYWdlc1xcZGV0YWlsXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRDJCLEFBRXNELG1EQUM3QixzQkFDSywyQkFDQyw0QkFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXHlva29jXFxEZXNrdG9wXFxmaWxlc1xcZGV2XFxZb2tvaGFtYUxhbmRzY2FwZVxcc2VydmVyXFxZb2tvaGFtYUxhbmRzY2FwZVxccGFnZXNcXGRldGFpbFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSBcInN0eWxlZC1qc3gvc3R5bGVcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEFyZWFzIGZyb20gXCIuLi8uLi9zcmMvZGF0YS9BcmVhc1wiO1xyXG5pbXBvcnQgQ29tbW9uSGVhZCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tbW9uSGVhZFwiO1xyXG5pbXBvcnQgQmFja0xpbmsgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0JhY2tMaW5rXCI7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkJveCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25Cb3hcIjtcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vbmV4dC5jb25maWdcIjtcclxuY29uc3QgUk9PVCA9IENPTkZJRy5hc3NldFByZWZpeCA9PT0gXCJcIiA/IFwiL1wiIDogQ09ORklHLmFzc2V0UHJlZml4O1xyXG5cclxuZXhwb3J0IGNsYXNzIGRldGFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIHJldHVybiB7IHF1ZXJ5IH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnBhdGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRXJyb3IoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QXJlYURhdGEocGF0aCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcmVhcyA9IEFyZWFzLmZpbHRlcigoYXJlYSkgPT4ge1xyXG4gICAgICByZXR1cm4gYXJlYS5wYXRoID09PSBwYXRoO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwID8gZmlsdGVyZWRBcmVhc1swXSA6IG51bGw7XHJcbiAgfVxyXG4gIHNldEFyZWFEYXRhKGFyZWFEYXRhKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKGFyZWFEYXRhKTtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuICByZW5kZXJEZWZhdWx0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlUm9vdFwiPlxyXG4gICAgICAgIDxDb21tb25IZWFkIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfT48L0NvbW1vbkhlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1saW5rLXdyYXBcIj5cclxuICAgICAgICAgICAgPEJhY2tMaW5rPjwvQmFja0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkJveFxyXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGF1dGhUZXh0PXt0aGlzLnN0YXRlLmF1dGhUZXh0fVxyXG4gICAgICAgICAgICBhdXRoSW1nPXt0aGlzLnN0YXRlLmF1dGhJbWd9XHJcbiAgICAgICAgICAgIGFubm90YXRpb249e3RoaXMuc3RhdGUuYW5ub3RhdGlvbn1cclxuICAgICAgICAgID48L0Rlc2NyaXB0aW9uQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5nZXRCYWNrZ3JvdW5kSW1hZ2VQYXRoKCl9KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICByZW5kZXJFcnJvcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvbW1vbkhlYWQ+PC9Db21tb25IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stbGluay13cmFwXCI+XHJcbiAgICAgICAgICAgIDxCYWNrTGluaz48L0JhY2tMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5Tb3JyeSBwYWdlIGRhdGEgaXMgbm90IGZvdW5kLjwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIGdldEJhY2tncm91bmRJbWFnZVBhdGgoKSB7XHJcbiAgICByZXR1cm4gUk9PVCArIFwic3RhdGljL2ltZy9iYWNrZ3JvdW5kL1wiICsgdGhpcy5zdGF0ZS5pbWc7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgYXJlYU5hbWUgPSB0aGlzLnByb3BzLnF1ZXJ5Lm5hbWVcclxuICAgICAgPyB0aGlzLnByb3BzLnF1ZXJ5Lm5hbWVcclxuICAgICAgOiBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9uYW1lPVwiLCBcIlwiKTtcclxuICAgIGNvbnN0IGFyZWFEYXRhID0gdGhpcy5nZXRBcmVhRGF0YShhcmVhTmFtZSk7XHJcbiAgICBpZiAoYXJlYURhdGEgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZXRBcmVhRGF0YShhcmVhRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuICAuYmFjay1saW5rLXdyYXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWw7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\yokoc\\\\Desktop\\\\files\\\\dev\\\\YokohamaLandscape\\\\server\\\\YokohamaLandscape\\\\pages\\\\detail\\\\index.js */")));
    }
  }, {
    key: "renderError",
    value: function renderError() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7
        }
      }, __jsx(_src_components_CommonHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-".concat(styles.__hash) + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-".concat(styles.__hash) + " " + "back-link-wrap",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx(_src_components_BackLink__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      })), __jsx("p", {
        className: "jsx-".concat(styles.__hash),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }
      }, "Sorry page data is not found."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: styles.__hash,
        __self: this
      }, styles)));
    }
  }, {
    key: "getBackgroundImagePath",
    value: function getBackgroundImagePath() {
      return ROOT + "static/img/background/" + this.state.img;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var areaName = this.props.query.name ? this.props.query.name : location.search.replace("?name=", "");
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
var styles = new String(".container.jsx-60611181{padding-top:24px;padding-bottom:24px;}.back-link-wrap.jsx-60611181{margin-bottom:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW9rb2NcXERlc2t0b3BcXGZpbGVzXFxkZXZcXFlva29oYW1hTGFuZHNjYXBlXFxzZXJ2ZXJcXFlva29oYW1hTGFuZHNjYXBlXFxwYWdlc1xcZGV0YWlsXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRmtCLEFBRW9CLEFBSUUsaUJBSEMsRUFHQSxrQkFIQyIsImZpbGUiOiJDOlxcVXNlcnNcXHlva29jXFxEZXNrdG9wXFxmaWxlc1xcZGV2XFxZb2tvaGFtYUxhbmRzY2FwZVxcc2VydmVyXFxZb2tvaGFtYUxhbmRzY2FwZVxccGFnZXNcXGRldGFpbFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBfSlNYU3R5bGUgZnJvbSBcInN0eWxlZC1qc3gvc3R5bGVcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuaW1wb3J0IEFyZWFzIGZyb20gXCIuLi8uLi9zcmMvZGF0YS9BcmVhc1wiO1xyXG5pbXBvcnQgQ29tbW9uSGVhZCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29tbW9uSGVhZFwiO1xyXG5pbXBvcnQgQmFja0xpbmsgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0JhY2tMaW5rXCI7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkJveCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvRGVzY3JpcHRpb25Cb3hcIjtcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vbmV4dC5jb25maWdcIjtcclxuY29uc3QgUk9PVCA9IENPTkZJRy5hc3NldFByZWZpeCA9PT0gXCJcIiA/IFwiL1wiIDogQ09ORklHLmFzc2V0UHJlZml4O1xyXG5cclxuZXhwb3J0IGNsYXNzIGRldGFpbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIHJldHVybiB7IHF1ZXJ5IH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnBhdGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRXJyb3IoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QXJlYURhdGEocGF0aCkge1xyXG4gICAgY29uc3QgZmlsdGVyZWRBcmVhcyA9IEFyZWFzLmZpbHRlcigoYXJlYSkgPT4ge1xyXG4gICAgICByZXR1cm4gYXJlYS5wYXRoID09PSBwYXRoO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwID8gZmlsdGVyZWRBcmVhc1swXSA6IG51bGw7XHJcbiAgfVxyXG4gIHNldEFyZWFEYXRhKGFyZWFEYXRhKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKGFyZWFEYXRhKTtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuICByZW5kZXJEZWZhdWx0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlUm9vdFwiPlxyXG4gICAgICAgIDxDb21tb25IZWFkIHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfT48L0NvbW1vbkhlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1saW5rLXdyYXBcIj5cclxuICAgICAgICAgICAgPEJhY2tMaW5rPjwvQmFja0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkJveFxyXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGF1dGhUZXh0PXt0aGlzLnN0YXRlLmF1dGhUZXh0fVxyXG4gICAgICAgICAgICBhdXRoSW1nPXt0aGlzLnN0YXRlLmF1dGhJbWd9XHJcbiAgICAgICAgICAgIGFubm90YXRpb249e3RoaXMuc3RhdGUuYW5ub3RhdGlvbn1cclxuICAgICAgICAgID48L0Rlc2NyaXB0aW9uQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dGhpcy5nZXRCYWNrZ3JvdW5kSW1hZ2VQYXRoKCl9KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICByZW5kZXJFcnJvcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENvbW1vbkhlYWQ+PC9Db21tb25IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stbGluay13cmFwXCI+XHJcbiAgICAgICAgICAgIDxCYWNrTGluaz48L0JhY2tMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5Tb3JyeSBwYWdlIGRhdGEgaXMgbm90IGZvdW5kLjwvcD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e3N0eWxlc308L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIGdldEJhY2tncm91bmRJbWFnZVBhdGgoKSB7XHJcbiAgICByZXR1cm4gUk9PVCArIFwic3RhdGljL2ltZy9iYWNrZ3JvdW5kL1wiICsgdGhpcy5zdGF0ZS5pbWc7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgYXJlYU5hbWUgPSB0aGlzLnByb3BzLnF1ZXJ5Lm5hbWVcclxuICAgICAgPyB0aGlzLnByb3BzLnF1ZXJ5Lm5hbWVcclxuICAgICAgOiBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9uYW1lPVwiLCBcIlwiKTtcclxuICAgIGNvbnN0IGFyZWFEYXRhID0gdGhpcy5nZXRBcmVhRGF0YShhcmVhTmFtZSk7XHJcbiAgICBpZiAoYXJlYURhdGEgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZXRBcmVhRGF0YShhcmVhRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSBjc3NgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuICAuYmFjay1saW5rLXdyYXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWw7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\yokoc\\\\Desktop\\\\files\\\\dev\\\\YokohamaLandscape\\\\server\\\\YokohamaLandscape\\\\pages\\\\detail\\\\index.js */");
styles.__hash = "60611181";
/* harmony default export */ __webpack_exports__["default"] = (detail);

/***/ })

})
//# sourceMappingURL=detail.js.a04a41d713e27442de86.hot-update.js.map