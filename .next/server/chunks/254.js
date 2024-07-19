"use strict";
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 5254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Portfolio2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(1311);
;// CONCATENATED MODULE: ./src/common/worksCardEffect.js

const worksCardEffect = ()=>{
    let workColumns = document.querySelectorAll(".full-bg .cluom"), glryTabsImages = document.querySelectorAll(".glry-img .tab-img");
    if (workColumns) {
        workColumns.forEach((cluom)=>{
            cluom.addEventListener("mouseenter", (e)=>{
                var tab_id = e.target.getAttribute("data-tab");
                cluom.classList.remove("current");
                e.target.classList.add("current");
                glryTabsImages.forEach((tabImg)=>{
                    tabImg.classList.remove("current");
                });
                document.getElementById(tab_id).classList.add("current");
            });
            cluom.addEventListener("mouseleave", (e)=>{
                if (e.target.classList.contains("current")) {
                    (0,getSiblings/* default */.Z)(e.target).forEach((item)=>item.classList.remove("current")
                    );
                    return false;
                }
            });
        });
    }
};
/* harmony default export */ const common_worksCardEffect = (worksCardEffect);

;// CONCATENATED MODULE: ./src/components/Portfolio2/index.jsx




const Portfolio2 = ()=>{
    external_react_default().useEffect(()=>{
        common_worksCardEffect();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "portfolio full-bg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container-fluid",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom current",
                            "data-tab": "tab-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Interior"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Exterior Designs"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/project-details",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                "View Project ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom",
                            "data-tab": "tab-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Interior"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Maroon Beach Hotel"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/project-details",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                "View Project ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom",
                            "data-tab": "tab-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Interior"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Apartment Renovation"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/project-details",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                "View Project ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 cluom",
                            "data-tab": "tab-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Interior"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Modern Minimalist House"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "more",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/project-details",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            children: [
                                                "View Project ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-chevron-right"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "glry-img",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-1",
                        className: "bg-img tab-img current",
                        style: {
                            backgroundImage: `url(/assets/img/portfolio/full/01.jpg)`
                        },
                        "data-overlay-dark": "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-2",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/portfolio/full/02.jpg)`
                        },
                        "data-overlay-dark": "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-3",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/portfolio/full/03.jpg)`
                        },
                        "data-overlay-dark": "2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "tab-4",
                        className: "bg-img tab-img",
                        style: {
                            backgroundImage: `url(/assets/img/portfolio/full/04.jpg)`
                        },
                        "data-overlay-dark": "2"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Portfolio2 = (Portfolio2);


/***/ })

};
;