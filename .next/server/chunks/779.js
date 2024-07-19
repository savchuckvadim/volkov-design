"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_team1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6699);

/* eslint-disable @next/next/no-img-element */ 

const Team2 = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "team bord section-padding",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "main-header text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Creative Team."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "tex-bg",
                            children: "Team"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: _data_team1_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 4).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `img ${index && !(index & index - 1) ? "right" : "left"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: item.image,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                children: item.username
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: item.usertitle
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, item.id)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team2);


/***/ }),

/***/ 6699:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"/assets/img/team/1.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Hasib sharif","usertitle":"General Manager"},{"id":2,"image":"/assets/img/team/2.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Jonson Leo","usertitle":"Founder"},{"id":3,"image":"/assets/img/team/3.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Leio Man","usertitle":"Founder"},{"id":4,"image":"/assets/img/team/4.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Robert Front","usertitle":"CEO Founder"},{"id":5,"image":"/assets/img/team/5.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Matt Huk","usertitle":"3D Visualization"}]');

/***/ })

};
;