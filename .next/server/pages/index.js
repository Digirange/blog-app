"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@chakra-ui/layout"
const layout_namespaceObject = require("@chakra-ui/layout");
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/navbar.tsx
var navbar = __webpack_require__(8374);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "glob"
var external_glob_ = __webpack_require__(4230);
var external_glob_default = /*#__PURE__*/__webpack_require__.n(external_glob_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./components/IndexPost.tsx + 1 modules
var IndexPost = __webpack_require__(409);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./pages/index.tsx












const Home = ({ posts  })=>{
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const greenColor = (0,react_.useColorModeValue)("green.700", "green.400");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Box, {
        minHeight: "100vh",
        position: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                padding: "50px",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Grid, {
                    templateColumns: "repeat(5, 1fr)",
                    gap: 4,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.GridItem, {
                            colStart: 3,
                            colEnd: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                    align: "center",
                                    fontSize: "5xl",
                                    fontWeight: "bold",
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.GridItem, {
                            rowStart: 2,
                            colStart: 3,
                            colEnd: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Box, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                        align: "center",
                                        fontSize: "3xl",
                                        fontWeight: "bold",
                                        children: "Marques Stewart"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                            align: "center",
                                            fontSize: "large",
                                            children: "Hello and welcome to my website! This is a great place to learn all about me. From development projects I have worked on, to blog posts about generally anything of my interest. Want to learn more about me? Go ahead and click the AboutMe button below! Need to get in contact with me? Go ahead and click the contact button!"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Box, {
                                        padding: "30px",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ButtonGroup, {
                                                spacing: 20,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                        as: "a",
                                                        href: "/aboutme",
                                                        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.LinkIcon, {}),
                                                        color: "gray.550",
                                                        bg: greenColor,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                                            color: "gray.550",
                                                            children: "Learn More About Me"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                        onClick: onOpen,
                                                        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.EmailIcon, {}),
                                                        bg: greenColor,
                                                        color: "gray.550",
                                                        children: "Contact Me"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
                                                        isOpen: isOpen,
                                                        onClose: onClose,
                                                        isCentered: true,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalContent, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalHeader, {
                                                                        children: "Need to get in contact with me?"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalCloseButton, {}),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalBody, {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                                                paddingTop: "20px",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                                                                    fontWeight: "bold",
                                                                                    children: "Email - MStewWebDev@Gmail.com"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Box, {
                                                                                display: "flex",
                                                                                paddingTop: "60px",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                                                        _hover: {
                                                                                            cursor: "pointer"
                                                                                        },
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                                                            paddingTop: "5px",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Link, {
                                                                                                href: "https://github.com/digirange",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                                                                                    fontWeight: "bold",
                                                                                                    children: "GitHub -"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                                                        paddingLeft: "8px",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                                                                            color: greenColor,
                                                                                            as: "a",
                                                                                            href: "https://github.com/Digirange",
                                                                                            "aria-label": "GitHub",
                                                                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                                                                                fontSize: "1.25rem"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.Box, {
                                                                                display: "flex",
                                                                                paddingTop: "60px",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                                                        _hover: {
                                                                                            cursor: "pointer"
                                                                                        },
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                                                            paddingTop: "8px",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Link, {
                                                                                                href: "https://www.linkedin.com/in/marques-stewart-160485192/",
                                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                                                                                    fontWeight: "bold",
                                                                                                    children: "Linkedin -"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                                                        paddingLeft: "8px",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                                                                            as: "a",
                                                                                            color: greenColor,
                                                                                            href: "https://www.linkedin.com/in/marques-stewart-160485192/",
                                                                                            "aria-label": "LinkedIn",
                                                                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaLinkedin, {
                                                                                                fontSize: "1.25rem"
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalFooter, {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                                            colorScheme: "blue",
                                                                            mr: 3,
                                                                            onClick: onClose,
                                                                            children: "Close"
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Box, {
                                                width: "8%",
                                                ml: "auto",
                                                mr: "auto",
                                                display: "flex",
                                                paddingTop: "15px",
                                                height: "5px",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ButtonGroup, {
                                                    variant: "ghost",
                                                    spacing: "6",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                                            color: greenColor,
                                                            as: "a",
                                                            href: "https://www.linkedin.com/in/marques-stewart-160485192/",
                                                            "aria-label": "LinkedIn",
                                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaLinkedin, {
                                                                fontSize: "2rem"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                                                            color: greenColor,
                                                            as: "a",
                                                            href: "https://github.com/Digirange",
                                                            "aria-label": "GitHub",
                                                            icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                                                                fontSize: "2rem"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.GridItem, {
                            rowStart: 2,
                            colStart: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                alt: "selfplaceholder",
                                src: "selfie1.png",
                                boxSize: "250px",
                                borderRadius: "full",
                                objectFit: "fill"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.GridItem, {
                            rowStart: 5,
                            colStart: 2,
                            colEnd: 5,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                                border: "1px",
                                borderColor: "black"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_namespaceObject.GridItem, {
                            rowStart: 6,
                            colStart: 3,
                            colEnd: 4,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(layout_namespaceObject.Text, {
                                    align: "center",
                                    fontWeight: "bold",
                                    fontSize: "3xl",
                                    children: "Recent Blogs"
                                }),
                                posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(IndexPost/* default */.Z, {
                                        data: post
                                    }, post.link)
                                )
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
function getStaticProps() {
    const postPaths = external_path_default().join(process.cwd(), "posts");
    const globPosts = external_glob_default().sync("**/*.mdx", {
        cwd: postPaths
    });
    const posts = external_lodash_default().chain(globPosts).map((paths)=>external_fs_default().readFileSync(external_path_default().join(postPaths, paths), "utf-8")
    ).map((x)=>external_gray_matter_default()(x).data
    ).sortBy((x)=>new Date(x.date)
    ).reverse().slice(0, 3).value();
    return {
        props: {
            posts
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 4230:
/***/ ((module) => {

module.exports = require("glob");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,374,409], () => (__webpack_exec__(4291)));
module.exports = __webpack_exports__;

})();