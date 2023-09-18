(() => {
var exports = {};
exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 69152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'Checkout',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91351)), "C:\\Users\\DeaDm\\OneDrive\\Desktop\\UM BootCamp\\Project3\\CRM\\CRM-Ticket-System-for-IT-Support\\client\\src\\app\\Checkout\\page.jsx"],
          
        }]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82911)), "C:\\Users\\DeaDm\\OneDrive\\Desktop\\UM BootCamp\\Project3\\CRM\\CRM-Ticket-System-for-IT-Support\\client\\src\\app\\layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 95493, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["C:\\Users\\DeaDm\\OneDrive\\Desktop\\UM BootCamp\\Project3\\CRM\\CRM-Ticket-System-for-IT-Support\\client\\src\\app\\Checkout\\page.jsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/Checkout/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/Checkout/page",
        pathname: "/Checkout",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 54309:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88545))

/***/ }),

/***/ 88545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Checkout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(98331);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(79536);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(43872);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(39966);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(74147);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(52694);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stepper/index.js
var Stepper = __webpack_require__(17292);
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Step/index.js
var Step = __webpack_require__(53751);
var Step_default = /*#__PURE__*/__webpack_require__.n(Step);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/StepLabel/index.js
var StepLabel = __webpack_require__(8507);
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(16614);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(56995);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(33987);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Grid/index.js
var Grid = __webpack_require__(21971);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TextField/index.js
var TextField = __webpack_require__(92870);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(26017);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Checkbox/index.js
var Checkbox = __webpack_require__(16061);
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);
;// CONCATENATED MODULE: ./src/component/AddressForm.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function AddressForm() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                gutterBottom: true,
                children: "Shipping address"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            required: true,
                            id: "firstName",
                            name: "firstName",
                            label: "First name",
                            fullWidth: true,
                            autoComplete: "given-name",
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            required: true,
                            id: "lastName",
                            name: "lastName",
                            label: "Last name",
                            fullWidth: true,
                            autoComplete: "family-name",
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            required: true,
                            id: "address1",
                            name: "address1",
                            label: "Address line 1",
                            fullWidth: true,
                            autoComplete: "shipping address-line1",
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            id: "address2",
                            name: "address2",
                            label: "Address line 2",
                            fullWidth: true,
                            autoComplete: "shipping address-line2",
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            required: true,
                            id: "city",
                            name: "city",
                            label: "City",
                            fullWidth: true,
                            autoComplete: "shipping address-level2",
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            id: "state",
                            name: "state",
                            label: "State/Province/Region",
                            fullWidth: true,
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            required: true,
                            id: "zip",
                            name: "zip",
                            label: "Zip / Postal code",
                            fullWidth: true,
                            autoComplete: "shipping postal-code",
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                            required: true,
                            id: "country",
                            name: "country",
                            label: "Country",
                            fullWidth: true,
                            autoComplete: "shipping country",
                            variant: "standard"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                            control: /*#__PURE__*/ jsx_runtime_.jsx((Checkbox_default()), {
                                color: "secondary",
                                name: "saveAddress",
                                value: "yes"
                            }),
                            label: "Use this address for payment details"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/component/PaymentForm.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function PaymentForm() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                gutterBottom: true,
                children: "Describe service issue"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                container: true,
                spacing: 3,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    item: true,
                    xs: 12,
                    md: 6,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        required: true,
                        id: "Describe issue",
                        label: "Type here",
                        fullWidth: true,
                        autoComplete: "cc-number",
                        variant: "standard"
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(6176);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItem/index.js
var ListItem = __webpack_require__(43610);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(93429);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
;// CONCATENATED MODULE: ./src/component/Review.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const products = [
    {
        name: "Product 1",
        desc: "A nice thing",
        price: "$9.99"
    },
    {
        name: "Product 2",
        desc: "Another thing",
        price: "$3.45"
    },
    {
        name: "Product 3",
        desc: "Something else",
        price: "$6.51"
    },
    {
        name: "Product 4",
        desc: "Best thing of all",
        price: "$14.11"
    },
    {
        name: "Shipping",
        desc: "",
        price: "Free"
    }
];
const addresses = [
    "1 MUI Drive",
    "Reactville",
    "Anytown",
    "99999",
    "USA"
];
const payments = [
    {
        name: "Card type",
        detail: "Visa"
    },
    {
        name: "Card holder",
        detail: "Mr John Smith"
    },
    {
        name: "Card number",
        detail: "xxxx-xxxx-xxxx-1234"
    },
    {
        name: "Expiry date",
        detail: "04/2024"
    }
];
function Review() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                gutterBottom: true,
                children: "Order summary"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                disablePadding: true,
                children: [
                    products.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                            sx: {
                                py: 1,
                                px: 0
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    primary: product.name,
                                    secondary: product.desc
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "body2",
                                    children: product.price
                                })
                            ]
                        }, product.name)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                        sx: {
                            py: 1,
                            px: 0
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: "Total"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle1",
                                sx: {
                                    fontWeight: 700
                                },
                                children: "$34.06"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        sm: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                gutterBottom: true,
                                sx: {
                                    mt: 2
                                },
                                children: "Shipping"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                gutterBottom: true,
                                children: "John Smith"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                gutterBottom: true,
                                children: addresses.join(", ")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        container: true,
                        direction: "column",
                        xs: 12,
                        sm: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                gutterBottom: true,
                                sx: {
                                    mt: 2
                                },
                                children: "Payment details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                container: true,
                                children: payments.map((payment)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    gutterBottom: true,
                                                    children: payment.name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 6,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    gutterBottom: true,
                                                    children: payment.detail
                                                })
                                            })
                                        ]
                                    }, payment.name))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Checkout/page.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
















function Copyright() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
        variant: "body2",
        color: "text.secondary",
        align: "center",
        children: [
            "Copyright \xa9 ",
            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                color: "inherit",
                href: "https://mui.com/",
                children: "Your Website"
            }),
            " ",
            new Date().getFullYear(),
            "."
        ]
    });
}
const steps = [
    "Shipping address",
    "Payment details",
    "Review your order"
];
function getStepContent(step) {
    switch(step){
        case 0:
            return /*#__PURE__*/ jsx_runtime_.jsx(AddressForm, {});
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(PaymentForm, {});
        case 2:
            return /*#__PURE__*/ jsx_runtime_.jsx(Review, {});
        default:
            throw new Error("Unknown step");
    }
}
function Checkout() {
    const [activeStep, setActiveStep] = react_.useState(0);
    const handleNext = ()=>{
        setActiveStep(activeStep + 1);
    };
    const handleBack = ()=>{
        setActiveStep(activeStep - 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "absolute",
                color: "default",
                elevation: 0,
                sx: {
                    position: "relative",
                    borderBottom: (t)=>`1px solid ${t.palette.divider}`
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        color: "inherit",
                        noWrap: true,
                        children: "Company name"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                component: "main",
                maxWidth: "sm",
                sx: {
                    mb: 4
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Paper_default()), {
                        variant: "outlined",
                        sx: {
                            my: {
                                xs: 3,
                                md: 6
                            },
                            p: {
                                xs: 2,
                                md: 3
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "h1",
                                variant: "h4",
                                align: "center",
                                children: "Checkout"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Stepper_default()), {
                                activeStep: activeStep,
                                sx: {
                                    pt: 3,
                                    pb: 5
                                },
                                children: steps.map((label)=>/*#__PURE__*/ jsx_runtime_.jsx((Step_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((StepLabel_default()), {
                                            children: label
                                        })
                                    }, label))
                            }),
                            activeStep === steps.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h5",
                                        gutterBottom: true,
                                        children: "Thank you for your order."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "subtitle1",
                                        children: "Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
                                children: [
                                    getStepContent(activeStep),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                                        sx: {
                                            display: "flex",
                                            justifyContent: "flex-end"
                                        },
                                        children: [
                                            activeStep !== 0 && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                onClick: handleBack,
                                                sx: {
                                                    mt: 3,
                                                    ml: 1
                                                },
                                                children: "Back"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                variant: "contained",
                                                onClick: handleNext,
                                                sx: {
                                                    mt: 3,
                                                    ml: 1
                                                },
                                                children: activeStep === steps.length - 1 ? "Place order" : "Next"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 91351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\DeaDm\OneDrive\Desktop\UM BootCamp\Project3\CRM\CRM-Ticket-System-for-IT-Support\client\src\app\Checkout\page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,309,286,368,617,413,68], () => (__webpack_exec__(69152)));
module.exports = __webpack_exports__;

})();