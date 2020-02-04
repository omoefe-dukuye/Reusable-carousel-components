(this["webpackJsonpcarousel"] = this["webpackJsonpcarousel"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Styles/index.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/Styles/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".carousel-wrapper {\n  position: relative;\n  height: -moz-fit-content;\n  height: fit-content; }\n  .carousel-wrapper img {\n    height: 100%;\n    width: 100%; }\n\n.arrows {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 9; }\n  .arrows .button {\n    border: none;\n    background: none;\n    padding: 10px;\n    height: 50px;\n    width: 50px; }\n    .arrows .button:hover {\n      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\n      background-color: #ffffff;\n      transition: all 0.4s ease; }\n    .arrows .button:focus {\n      outline: none; }\n  .arrows .arrow {\n    height: 30px;\n    width: 30px; }\n\n.carousel-1-wrapper {\n  width: 150vw;\n  position: relative;\n  left: -25vw; }\n  .carousel-1-wrapper img {\n    height: 100%;\n    width: 100%; }\n  .carousel-1-wrapper .slide--not-last img {\n    padding-right: 50px; }\n  .carousel-1-wrapper .arrows {\n    position: absolute;\n    display: flex;\n    justify-content: space-between;\n    width: 40vw;\n    height: -moz-fit-content;\n    height: fit-content;\n    z-index: 9;\n    left: 50vw;\n    top: 50%;\n    transform: translate(8%, -100%); }\n    .carousel-1-wrapper .arrows .button {\n      border: none;\n      background: none;\n      padding: 10px;\n      height: 50px;\n      width: 50px; }\n      .carousel-1-wrapper .arrows .button:hover {\n        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);\n        background-color: #ffffff;\n        transition: all 0.4s ease; }\n      .carousel-1-wrapper .arrows .button:focus {\n        outline: none; }\n    .carousel-1-wrapper .arrows .arrow {\n      height: 30px;\n      width: 30px; }\n\n@media (max-width: 1080px) {\n  .carousel-1-wrapper {\n    width: 100vw;\n    left: 0vw; }\n    .carousel-1-wrapper .slide--not-last img {\n      padding-right: 0; }\n    .carousel-1-wrapper .arrows {\n      width: 90%;\n      left: 0%; } }\n\n.carousel-2-wrapper {\n  width: 100%; }\n  .carousel-2-wrapper img {\n    max-width: 100%;\n    max-height: 100%; }\n  .carousel-2-wrapper .slide--not-last img {\n    padding-right: 10px; }\n  .carousel-2-wrapper .arrows {\n    width: 60%;\n    top: 50%;\n    transform: translate(8%, -60%); }\n\n.slideshow {\n  height: 100px; }\n  .slideshow .carousel-3-wrapper {\n    max-height: 80%; }\n    .slideshow .carousel-3-wrapper img {\n      max-height: 100%; }\n    .slideshow .carousel-3-wrapper .arrows {\n      position: absolute;\n      display: flex;\n      justify-content: space-between;\n      width: 90%;\n      height: -moz-fit-content;\n      height: fit-content;\n      z-index: 9;\n      left: 5%;\n      top: 50%;\n      transform: translateY(-100%); }\n      .slideshow .carousel-3-wrapper .arrows .button:hover {\n        background-color: #f68772;\n        transition: all 0.8s ease; }\n        .slideshow .carousel-3-wrapper .arrows .button:hover .arrow polyline {\n          stroke: #fff; }\n    .slideshow .carousel-3-wrapper:hover button {\n      box-shadow: none;\n      background-color: rgba(255, 255, 255, 0.5);\n      transition: all 0.4s ease;\n      border-radius: 10%; }\n  .slideshow .slides {\n    height: 20%; }\n    .slideshow .slides img {\n      display: flex;\n      max-width: 25%;\n      max-height: 100%; }\n\n.grid {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px; }\n  .grid-image {\n    width: 100%; }\n\n@media (max-width: 519px) {\n  .grid {\n    grid-template-columns: 1fr; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.App {\n  text-align: center;\n  /* width: 100%;\n  height: 100%; */\n}\n\n/* #root {\n  width: 100vw;\n  height: 100vh;\n} */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Carousel1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Carousel1 */ "./src/Components/Carousel1.jsx");
/* harmony import */ var _Components_Carousel2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Carousel2 */ "./src/Components/Carousel2.jsx");
/* harmony import */ var _Components_Carousel3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Carousel3 */ "./src/Components/Carousel3.jsx");
/* harmony import */ var _Components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Grid */ "./src/Components/Grid.jsx");
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/App.jsx";







function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/1",
    component: _Components_Carousel1__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/2",
    component: _Components_Carousel2__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/3",
    component: _Components_Carousel3__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/4",
    component: _Components_Grid__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Carousel1.jsx":
/*!**************************************!*\
  !*** ./src/Components/Carousel1.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleSlideCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleSlideCarousel */ "./src/Components/SingleSlideCarousel.jsx");
/* harmony import */ var _Images_Carousel1Images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/Carousel1Images */ "./src/Images/Carousel1Images/index.js");
/* harmony import */ var _Hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hooks/useWindowSize */ "./src/Hooks/useWindowSize.jsx");
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/Components/Carousel1.jsx";





const Carousel1 = () => {
  const {
    width
  } = Object(_Hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const visibleSlides = width < 1080 ? 1 : 3;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-1-wrapper carousel-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleSlideCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    totalSlides: _Images_Carousel1Images__WEBPACK_IMPORTED_MODULE_2__["default"],
    visibleSlides: visibleSlides,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel1);

/***/ }),

/***/ "./src/Components/Carousel2.jsx":
/*!**************************************!*\
  !*** ./src/Components/Carousel2.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleSlideCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleSlideCarousel */ "./src/Components/SingleSlideCarousel.jsx");
/* harmony import */ var _Images_Carousel2Images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/Carousel2Images */ "./src/Images/Carousel2Images/index.js");
/* harmony import */ var _Hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hooks/useWindowSize */ "./src/Hooks/useWindowSize.jsx");
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/Components/Carousel2.jsx";





const Carousel2 = () => {
  const {
    width
  } = Object(_Hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const visibleSlides = width < 1080 && width > 700 ? 2 : width < 700 ? 1 : 2.6;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-wrapper carousel-2-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleSlideCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    totalSlides: _Images_Carousel2Images__WEBPACK_IMPORTED_MODULE_2__["default"],
    visibleSlides: visibleSlides,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel2);

/***/ }),

/***/ "./src/Components/Carousel3.jsx":
/*!**************************************!*\
  !*** ./src/Components/Carousel3.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleSlideCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleSlideCarousel */ "./src/Components/SingleSlideCarousel.jsx");
/* harmony import */ var _Images_Carousel3Images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/Carousel3Images */ "./src/Images/Carousel3Images/index.js");
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/Components/Carousel3.jsx";




const Carousel3 = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slideshow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-wrapper carousel-3-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleSlideCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    totalSlides: _Images_Carousel3Images__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Images_Carousel3Images__WEBPACK_IMPORTED_MODULE_2__["default"][0],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Images_Carousel3Images__WEBPACK_IMPORTED_MODULE_2__["default"][1],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Images_Carousel3Images__WEBPACK_IMPORTED_MODULE_2__["default"][2],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Images_Carousel3Images__WEBPACK_IMPORTED_MODULE_2__["default"][3],
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel3);

/***/ }),

/***/ "./src/Components/Grid.jsx":
/*!*********************************!*\
  !*** ./src/Components/Grid.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Images_GridImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/GridImages */ "./src/Images/GridImages/index.js");
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/Components/Grid.jsx";



const Grid = () => {
  const [pic1, pic2, pic3, pic4] = _Images_GridImages__WEBPACK_IMPORTED_MODULE_1__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "grid-image",
    src: pic1,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "grid-image",
    src: pic2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "grid-image",
    src: pic3,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "grid-image",
    src: pic4,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/Components/SingleSlideCarousel.jsx":
/*!************************************************!*\
  !*** ./src/Components/SingleSlideCarousel.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pure-react-carousel */ "./node_modules/pure-react-carousel/dist/index.es.js");
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ "./node_modules/pure-react-carousel/dist/react-carousel.es.css");
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Images_Svgs_Arrowheads_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/Svgs/Arrowheads/left */ "./src/Images/Svgs/Arrowheads/left.jsx");
/* harmony import */ var _Images_Svgs_Arrowheads_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Images/Svgs/Arrowheads/right */ "./src/Images/Svgs/Arrowheads/right.jsx");
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/Components/SingleSlideCarousel.jsx";







const Carousel = ({
  totalSlides,
  visibleSlides
}) => {
  // const slides = useMemo(() => {
  // }, [JSON.stringify(totalSlides)])
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselProvider"], {
    naturalSlideWidth: 100,
    naturalSlideHeight: 125,
    totalSlides: totalSlides.length,
    visibleSlides: visibleSlides || 1,
    infinite: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, totalSlides.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Slide"], {
    key: index,
    index: index,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('slide', {
      'slide--not-last': index !== totalSlides.length - 1
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: item,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["ButtonBack"], {
    className: "button left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Images_Svgs_Arrowheads_left__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "arrow-left arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__["ButtonNext"], {
    className: "button right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Images_Svgs_Arrowheads_right__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "arrow-right arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/Hooks/useWindowSize.jsx":
/*!*************************************!*\
  !*** ./src/Hooks/useWindowSize.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./src/Images/Carousel1Images/1 copy.jpg":
/*!***********************************************!*\
  !*** ./src/Images/Carousel1Images/1 copy.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1 copy.196c84fb.jpg";

/***/ }),

/***/ "./src/Images/Carousel1Images/1.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel1Images/1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.196c84fb.jpg";

/***/ }),

/***/ "./src/Images/Carousel1Images/2 copy.jpg":
/*!***********************************************!*\
  !*** ./src/Images/Carousel1Images/2 copy.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2 copy.a10258df.jpg";

/***/ }),

/***/ "./src/Images/Carousel1Images/2.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel1Images/2.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.a10258df.jpg";

/***/ }),

/***/ "./src/Images/Carousel1Images/3 copy.jpg":
/*!***********************************************!*\
  !*** ./src/Images/Carousel1Images/3 copy.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3 copy.15ab7f1a.jpg";

/***/ }),

/***/ "./src/Images/Carousel1Images/3.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel1Images/3.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.15ab7f1a.jpg";

/***/ }),

/***/ "./src/Images/Carousel1Images/index.js":
/*!*********************************************!*\
  !*** ./src/Images/Carousel1Images/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ "./src/Images/Carousel1Images/1.jpg");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.jpg */ "./src/Images/Carousel1Images/2.jpg");
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.jpg */ "./src/Images/Carousel1Images/3.jpg");
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _1_copy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1 copy.jpg */ "./src/Images/Carousel1Images/1 copy.jpg");
/* harmony import */ var _1_copy_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_1_copy_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _2_copy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./2 copy.jpg */ "./src/Images/Carousel1Images/2 copy.jpg");
/* harmony import */ var _2_copy_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_2_copy_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _3_copy_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./3 copy.jpg */ "./src/Images/Carousel1Images/3 copy.jpg");
/* harmony import */ var _3_copy_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_3_copy_jpg__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = ([_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _1_copy_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _2_copy_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _3_copy_jpg__WEBPACK_IMPORTED_MODULE_5___default.a]);

/***/ }),

/***/ "./src/Images/Carousel2Images/1 copy.jpg":
/*!***********************************************!*\
  !*** ./src/Images/Carousel2Images/1 copy.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1 copy.40a3f98a.jpg";

/***/ }),

/***/ "./src/Images/Carousel2Images/1.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel2Images/1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.40a3f98a.jpg";

/***/ }),

/***/ "./src/Images/Carousel2Images/2 copy.jpg":
/*!***********************************************!*\
  !*** ./src/Images/Carousel2Images/2 copy.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2 copy.1b91974b.jpg";

/***/ }),

/***/ "./src/Images/Carousel2Images/2.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel2Images/2.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.1b91974b.jpg";

/***/ }),

/***/ "./src/Images/Carousel2Images/3.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel2Images/3.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.d92b6426.jpg";

/***/ }),

/***/ "./src/Images/Carousel2Images/index.js":
/*!*********************************************!*\
  !*** ./src/Images/Carousel2Images/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ "./src/Images/Carousel2Images/1.jpg");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.jpg */ "./src/Images/Carousel2Images/2.jpg");
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.jpg */ "./src/Images/Carousel2Images/3.jpg");
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _1_copy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1 copy.jpg */ "./src/Images/Carousel2Images/1 copy.jpg");
/* harmony import */ var _1_copy_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_1_copy_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _2_copy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./2 copy.jpg */ "./src/Images/Carousel2Images/2 copy.jpg");
/* harmony import */ var _2_copy_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_2_copy_jpg__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = ([_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _1_copy_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _2_copy_jpg__WEBPACK_IMPORTED_MODULE_4___default.a]);

/***/ }),

/***/ "./src/Images/Carousel3Images/1.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel3Images/1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.196c84fb.jpg";

/***/ }),

/***/ "./src/Images/Carousel3Images/2.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel3Images/2.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.a10258df.jpg";

/***/ }),

/***/ "./src/Images/Carousel3Images/3.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel3Images/3.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.15ab7f1a.jpg";

/***/ }),

/***/ "./src/Images/Carousel3Images/4.jpg":
/*!******************************************!*\
  !*** ./src/Images/Carousel3Images/4.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/4.15ab7f1a.jpg";

/***/ }),

/***/ "./src/Images/Carousel3Images/index.js":
/*!*********************************************!*\
  !*** ./src/Images/Carousel3Images/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ "./src/Images/Carousel3Images/1.jpg");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.jpg */ "./src/Images/Carousel3Images/2.jpg");
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.jpg */ "./src/Images/Carousel3Images/3.jpg");
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4.jpg */ "./src/Images/Carousel3Images/4.jpg");
/* harmony import */ var _4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_4_jpg__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ([_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _4_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]);

/***/ }),

/***/ "./src/Images/GridImages/1.jpg":
/*!*************************************!*\
  !*** ./src/Images/GridImages/1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/1.41f0a027.jpg";

/***/ }),

/***/ "./src/Images/GridImages/2.jpg":
/*!*************************************!*\
  !*** ./src/Images/GridImages/2.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/2.4152a0a6.jpg";

/***/ }),

/***/ "./src/Images/GridImages/3.jpg":
/*!*************************************!*\
  !*** ./src/Images/GridImages/3.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.54241ba3.jpg";

/***/ }),

/***/ "./src/Images/GridImages/4.jpg":
/*!*************************************!*\
  !*** ./src/Images/GridImages/4.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/4.3590b3d5.jpg";

/***/ }),

/***/ "./src/Images/GridImages/index.js":
/*!****************************************!*\
  !*** ./src/Images/GridImages/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.jpg */ "./src/Images/GridImages/1.jpg");
/* harmony import */ var _1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.jpg */ "./src/Images/GridImages/2.jpg");
/* harmony import */ var _2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3.jpg */ "./src/Images/GridImages/3.jpg");
/* harmony import */ var _3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./4.jpg */ "./src/Images/GridImages/4.jpg");
/* harmony import */ var _4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_4_jpg__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ([_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a, _2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, _3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _4_jpg__WEBPACK_IMPORTED_MODULE_3___default.a]);

/***/ }),

/***/ "./src/Images/Svgs/Arrowheads/left.jsx":
/*!*********************************************!*\
  !*** ./src/Images/Svgs/Arrowheads/left.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/Images/Svgs/Arrowheads/left.jsx";

/* harmony default export */ __webpack_exports__["default"] = (({
  color
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  width: "60px",
  height: "80px",
  viewBox: "0 0 50 80",
  className: "arrow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
  fill: "none",
  stroke: color || '#222',
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  points: " 45.63,75.8 0.375,38.087 45.63,0.375 ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}))); // xml:space="preserve"

/***/ }),

/***/ "./src/Images/Svgs/Arrowheads/right.jsx":
/*!**********************************************!*\
  !*** ./src/Images/Svgs/Arrowheads/right.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/Images/Svgs/Arrowheads/right.jsx";

/* harmony default export */ __webpack_exports__["default"] = (({
  color
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "60px",
  height: "80px",
  viewBox: "0 0 50 80",
  className: "arrow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
  fill: "none",
  stroke: color || '#222',
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  points: " 0.375,0.375 45.63,38.087 0.375,75.8 ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}))); // xmlns:xlink="http://www.w3.org/1999/xlink"
// xml:space="preserve"

/***/ }),

/***/ "./src/Styles/index.scss":
/*!*******************************!*\
  !*** ./src/Styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Styles/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Styles/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/Styles/index.scss");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles/index.scss */ "./src/Styles/index.scss");
/* harmony import */ var _Styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/andela/Desktop/Reusable-carousel-components/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/andela/Desktop/Reusable-carousel-components/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/andela/Desktop/Reusable-carousel-components/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/andela/Desktop/Reusable-carousel-components/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map