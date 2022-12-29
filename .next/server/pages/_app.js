"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./theme.ts

const colors = {
    gray: {
        "50": "#F1F2F4",
        "100": "#D7DAE0",
        "200": "#BDC3CC",
        "300": "#A3ABB8",
        "400": "#8994A4",
        "500": "#707C8F",
        "550": "#23272d",
        "600": "#596373",
        "700": "#434B56",
        "800": "#2D3239",
        "900": "#16191D"
    },
    green: {
        "50": "#E5FFF0",
        "100": "#B8FFD6",
        "200": "#8AFFBC",
        "300": "#5CFFA1",
        "400": "#2EFF87",
        "500": "#00FF6D",
        "550": "#33ff8a",
        "600": "#00CC57",
        "700": "#009941",
        "800": "#00662B",
        "900": "#003316"
    }
};
const fonts = {
    body: `'Roboto', sans-serif`,
    heading: `'Roboto', sans-serif`
};
const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};
const theme = (0,react_.extendTheme)({
    colors,
    config,
    fonts
});
/* harmony default export */ const theme_0 = (theme);

;// CONCATENATED MODULE: ./pages/_app.tsx



const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme_0,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(822));
module.exports = __webpack_exports__;

})();