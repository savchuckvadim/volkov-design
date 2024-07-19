"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/common/loadingPace.js
const loadingPace = ()=>{
    let preloader = document.querySelector("#preloader"), loadingText = document.querySelector(".loading-text");
    const addDoneClass = ()=>{
        preloader.classList.add("isdone");
        loadingText.classList.add("isdone");
    };
    Pace.on("start", function() {
        preloader.classList.remove("isdone");
        loadingText.classList.remove("isdone");
    });
    Pace.on("done", function() {
        addDoneClass();
    });
    if (document.querySelector("body").classList.contains("pace-done")) {
        addDoneClass();
    }
    document.addEventListener("load", ()=>{
        addDoneClass();
    });
};
/* harmony default export */ const common_loadingPace = (loadingPace);

// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/Loading-Screen/loading-screen.jsx





const LoadingScreen = ()=>{
    external_react_default().useEffect(()=>{
        let bodyEl = document.querySelector("body");
        if (app/* showLoading */.QP) {
            common_loadingPace();
            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${app/* showLoading */.QP === true ? "showX" : "hideX"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "preloader",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "loading-text",
                        children: "Loading"
                    })
                })
            }),
            app/* showLoading */.QP ? /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "pace",
                strategy: "beforeInteractive",
                src: "/assets/js/pace.min.js"
            }) : ""
        ]
    }));
};
/* harmony default export */ const loading_screen = (LoadingScreen);

;// CONCATENATED MODULE: ./src/common/mouseEffect.js
const mouseEffect = ()=>{
    function mousecursor() {
        const cursorInner = document.querySelector(".cursor-inner"), cursorOuter = document.querySelector(".cursor-outer");
        let n, i = 0, o = !1;
        window.onmousemove = function(s) {
            o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
        };
        if (document.querySelector(".cursor-pointer")) {
            document.querySelector(".cursor-pointer").addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
            document.querySelector(".cursor-pointer").addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
        }
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseenter", function() {
                cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
            });
        });
        document.querySelectorAll("a").forEach(function(item) {
            item.addEventListener("mouseleave", function() {
                cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
            });
        }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
    }
    mousecursor();
};
/* harmony default export */ const common_mouseEffect = (mouseEffect);

;// CONCATENATED MODULE: ./src/components/Cursor/index.jsx



const Cursor = ()=>{
    external_react_default().useEffect(()=>{
        common_mouseEffect();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-outer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mouse-cursor cursor-inner"
            })
        ]
    }));
};
/* harmony default export */ const components_Cursor = (Cursor);

;// CONCATENATED MODULE: ./src/common/scrollToTop.js
const scrollToTop = ()=>{
    let offset = 150;
    let progressWrap = document.querySelector(".progress-wrap");
    let progressPath = document.querySelector(".progress-wrap path");
    let pathLength = progressPath.getTotalLength();
    const updateProgress = ()=>{
        let scroll = window.pageYOffset;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        let progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
    };
    if (progressWrap) {
        progressPath.style.transition = progressPath.style.WebkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        updateProgress();
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("scroll", function() {
            if (window.pageYOffset > offset) {
                progressWrap.classList.add("active-progress");
            } else {
                document.querySelector(".progress-wrap").classList.remove("active-progress");
            }
        });
        progressWrap.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return false;
        });
    }
};
/* harmony default export */ const common_scrollToTop = (scrollToTop);

;// CONCATENATED MODULE: ./src/components/scrollToTop/index.jsx



const ScrollToTop = ()=>{
    external_react_default().useEffect(()=>{
        common_scrollToTop();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "progress-wrap cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: "progress-circle svg-content",
            width: "100%",
            height: "100%",
            viewBox: "-1 -1 102 102",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            })
        })
    }));
};
/* harmony default export */ const components_scrollToTop = (ScrollToTop);

;// CONCATENATED MODULE: ./src/pages/_app.js








function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        // import {  getFirestore,  } from "firebase/firestore";
                        // import { getFunctions, } from 'firebase/functions';
                        // import { secretFirebase } from "src/secret/secret";
                        // import testImg from '../../../public/assets/img/works/curs/1.jpg';
                        // // TODO: Add SDKs for Firebase products that you want to use
                        // // https://firebase.google.com/docs/web/setup#available-libraries
                        // // Your web app's Firebase configuration
                        // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
                        // //todo
                        // //сделать enum с названиями коллекций
                        // //TS must be here
                        // import { getStorage, ref, uploadBytes } from "firebase/storage";
                        // import { initializeApp } from "firebase/app";
                        // console.log(testImg)
                        // // Initialize Firebase
                        // export const app = initializeApp(secretFirebase);
                        // // const analytics = getAnalytics(app);
                        // export const db = getFirestore(app);
                        // const functions = getFunctions(app);
                        // // export const auth = firebase.auth()
                        // export const firestore = getFirestore(app);
                        // // export const myFirebase = 
                        // export const uploadImage = async () => {
                        //   const storage = getStorage();
                        //   const portfolioRef = ref(storage, 'images/pages/portfolio/01.jpg');
                        //   const publicUrl = uploadBytes(portfolioRef, testImg).then((snapshot) => {
                        //     console.log('Uploaded a blob or file!');
                        //   });
                        //   return publicUrl;
                        // };
                        // // export const uploadImage = async () => {
                        // //   const filePath = '../public/assets/img/works/curs/1.jpg'
                        // //   const fileName = path.basename(filePath);
                        // //   const file = bucket.file('images/' + fileName);
                        // //   await bucket.upload(filePath, {
                        // //     destination: 'images/' + fileName,
                        // //   });
                        // //   const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(file.name)}?alt=media`;
                        // //   return publicUrl;
                        // // };
                        // // const assetsFolder = './assets';
                        // // fs.readdir(assetsFolder, (err, files) => {
                        // //   if (err) {
                        // //     console.error('Could not list the directory.', err);
                        // //     process.exit(1);
                        // //   }
                        // //   files.forEach(file => {
                        // //     const filePath = path.join(assetsFolder, file);
                        // //     uploadImage(filePath).then(url => {
                        // //       console.log('Uploaded to:', url);
                        // //       // Создание объекта в Firestore
                        // //       const newPost = db.collection('posts').add({
                        // //         imageName: file,
                        // //         imageUrl: url,
                        // //         createdAt: admin.firestore.Timestamp.fromDate(new Date())
                        // //       });
                        // //       console.log('Firestore document created');
                        // //     }).catch(err => {
                        // //       console.error('Error uploading image:', err);
                        // //     });
                        // //   });
                        // // });
                        children: "Volkov Design"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Cursor, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(loading_screen, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_scrollToTop, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "wow",
                src: "/assets/js/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "splitting",
                strategy: "beforeInteractive",
                src: "/assets/js/splitting.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "simpleParallax",
                src: "/assets/js/simpleParallax.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "isotope",
                src: "/assets/js/isotope.pkgd.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "/assets/js/main.js",
                id: "init",
                strategy: "lazyOnload"
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = JSON.parse('{"E8":"/assets/img/logo-light.png","Q1":"/assets/img/logo-dark.png","xU":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.291092670593!2d4.89233277652446!3d52.365141572020946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60939b9283aa7%3A0xff5aa70e6ec25af8!2zSGVyZW5ncmFjaHQgNTQ1LCAxMDE3IEJXIEFtc3RlcmRhbSwg0J3QuNC00LXRgNC70LDQvdC00Ys!5e0!3m2!1sru!2ses!4v1710676373843!5m2!1sru!2ses","QP":true}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2595));
module.exports = __webpack_exports__;

})();