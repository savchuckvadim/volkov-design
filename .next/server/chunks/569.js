"use strict";
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 2569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);




const Video = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        console.clear();
    }, []);
    const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "video bg-img parallaxie",
        style: {
            backgroundImage: "url(/assets/img/bg-vid.jpg)"
        },
        children: [
             false && /*#__PURE__*/ 0,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "vid valign",
                onClick: (e)=>{
                    e.preventDefault();
                    setOpen(true);
                },
                href: "https://vimeo.com/127203262",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "vid-butn",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "icon",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "pe-7s-play"
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);


/***/ })

};
;