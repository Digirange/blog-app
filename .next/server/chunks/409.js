"use strict";
exports.id = 409;
exports.ids = [409];
exports.modules = {

/***/ 409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_IndexPost)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./components/HeadPost.tsx


const HeadPost = ({ data  })=>{
    const greenColor = (0,react_.useColorModeValue)("green.700", "green.400");
    if (data.tagTwo) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontWeight: "bold",
                        children: data.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: data.description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: data.date
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                    color: greenColor,
                                    children: [
                                        "#",
                                        data.tag
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                    color: greenColor,
                                    children: [
                                        "#",
                                        data.tagTwo
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontWeight: "bold",
                            children: data.readTime + " min read"
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontWeight: "bold",
                        children: data.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: data.description
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: data.date
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                    color: greenColor,
                                    children: [
                                        "#",
                                        data.tag
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontWeight: "bold",
                            children: data.readTime + " min read"
                        })
                    ]
                })
            ]
        });
    }
};
/* harmony default export */ const components_HeadPost = (HeadPost);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/IndexPost.tsx




const IndexPost = ({ data  })=>{
    const greenColor = (0,react_.useColorModeValue)("green.700", "green.400");
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        paddingBottom: "20px",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_HeadPost, {
                    data: data
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blogs" + data.root + data.url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: greenColor,
                        _hover: {
                            color: "black",
                            cursor: "pointer"
                        },
                        children: "Read More ..."
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_IndexPost = (IndexPost);


/***/ })

};
;