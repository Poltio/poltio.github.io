function appStyleCollection()
{
    if (window.apo_js_loaded.style_collection) return;
    window.apo_js_loaded.style_collection = true;
let shopIdApoData = window.ap_front_settings.shop_id;
const isShopHoverOptionShowImage = ["70301778171", "91993964870"].includes(shopIdApoData);
const findImageHoverClass = ".grid-product__secondary-image img, .ecom-collection__product-media img";
const isShopInterval = ["87942856985", "89355354449", "64764674204", "63324782790"].includes(shopIdApoData);
let shopShowPrice = ["356155445", "19352793","86459449671", "64764674204", "59202666684"].includes(shopIdApoData);
const key_collection_price = [".price__regular .price-item--regular span.money", ".grid-product__price > span", ".productitem__price .price__current span[data-price]", ".card-information .price__sale .price-item--sale.price-item--last", ".grid-product__meta .grid-product__price span"];
const key_collection_compare = [".productitem__price .price__compare-at span[data-price-compare]", ".card-information .price__sale .price-item.price-item--regular"];
    function handlePriceTheme(inputRadioSelector){
        if (!shopShowPrice) return;
        let itemCollection = inputRadioSelector.closest(".avis-swatch-collection-item");
        if (["356155445"].includes(shopIdApoData)) itemCollection = inputRadioSelector.closest(".collection-grid-card");
        let variantId = inputRadioSelector.getAttribute("data-variantid");
        if (!itemCollection || !variantId) return;

        let getPriceAvisSelector = itemCollection.querySelector(`.avis-swatch-option-select option[value='${variantId}']`);
        if (!getPriceAvisSelector) return;
        let getPriceAvis = getPriceAvisSelector.getAttribute("data-price");
        if (!getPriceAvis) return;

        let getPriceTheme = itemCollection.querySelectorAll(key_collection_price.join(','));
        getPriceTheme.forEach((e) => {
            e.innerHTML = getPriceAvis;
        });

        let getPriceCompareAvis = getPriceAvisSelector.getAttribute("data-compare-price");
        if (!getPriceCompareAvis) return;

        let getPriceCompareTheme = itemCollection.querySelectorAll(key_collection_compare.join(','));
        getPriceCompareTheme.forEach((e) => {
            e.innerHTML = getPriceCompareAvis;
        });

    }
let apoFunction = {};
apoFunction.queryProductInfo = async function(locales, ids){
if (!ids?.length) return "";
locales = window.apoOptionLocales?.convertLocales(locales);
let idsArr = [];
for(let id of ids)
{
    idsArr.push(`gid://shopify/Product/${id}`);
}
let idsString = idsArr.join('","');
let query = `\n        query productDetails @inContext(country: ${window.Shopify.country.toUpperCase() ?? "EN"}, language: ${locales.toUpperCase()}) {\n            nodes(ids: ["${idsString}"]) {\n                ... on Product {\n                    id\n                    handle\n                    title\n                    availableForSale\n                    options{\n                        name\n                        optionValues{\n                            name\n                        }\n                    }\n                }\n            }\n        }\n    `;
return query;
}
apoFunction.fetchStoreFront = async function(queryData){
    if (!window.apoOptionLocales?.config?.storefront_connect) return null;
    let root = window.Shopify && window.Shopify.routes && (window.Shopify.routes.root || window.Shopify.routes.root_url) || "/";
    let url = `${root}api/${window.apoOptionLocales?.version}/graphql.json`;
    let data =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": window.apoOptionLocales?.config?.storefront_connect
        },
        body: JSON.stringify({
            query: queryData
        })
    };
    const response = await fetch(url, data);
    if (response.ok)
    {
    const json = await response.json();
    return json;
    }

    return null;
}
var AvisCollections = function (e) {
    function n(n) {
        for (var t, r, a = n[0], i = n[1], c = 0, l = []; c < a.length; c++)
            r = a[c],
                Object.prototype.hasOwnProperty.call(o, r) && o[r] && l.push(o[r][0]),
                o[r] = 0;
        for (t in i)
            Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
        for (u && u(n); l.length;)
            l.shift()()
    }
    var t = {}
        , o = {
            3: 0
        };
    function styleOptions(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, styleOptions),
            o.l = !0,
            o.exports
    }
    styleOptions.e = async function (e) {
    }
        ,
        styleOptions.d = function (e, n, t) {
            styleOptions.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: t
            })
        }
        ,
        styleOptions.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        styleOptions.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }
        ,
        styleOptions.rootExtension = "",
        styleOptions.oe = function (e) {
            throw console.log(e),
            e
        }
        ;
    var a = window.AvisSwatchVariantsItem = window.AvisSwatchVariantsItem || []
        , i = a.push.bind(a);
    a.push = n,
        a = a.slice();
    for (var c = 0; c < a.length; c++)
        n(a[c]);
    var u = i;

    styleOptions.getListKeyStyle = function (o) {
        for (var t = {}, n = 0; n < o.length; n++) {
            let diplayStyle = o[n].display_style;
            t[o[n].option_name] = diplayStyle ? diplayStyle : "button";
        }

        return t
    }
    styleOptions.getListKeyStyleSwatch = function (o) {
        for (var t = {}, n = 0; n < o.length; n++) {
            let data = o[n].display_style_swatch;
            t[o[n].option_name] = data ? data : "variant"
        }

        return t
    }
    styleOptions.getListKeyStyleCollectionSwatch = function (o) {
        for (var t = {}, n = 0; n < o.length; n++) {
            let data = o[n].display_style_collection_swatch;
            t[o[n].option_name] = data ? data : "variant"
        }

        return t
    }
    styleOptions.getListColors = function (o) {
        for (var t = [], n = 0; n < o.length; n++)
            for (var e = 0; e < o[n].option_values.length; e++)
                void 0 !== o[n].option_values[e]?.color_1?.color && (t[o[n].option_name + "-" + o[n].option_values[e].value] = o[n].option_values[e]?.color_1?.color);
        return Object.assign({}, t)
    }
    styleOptions.getListColors2 = function (o) {
        for (var t = [], n = 0; n < o.length; n++)
            for (var e = 0; e < o[n].option_values.length; e++)
                void 0 !== o[n].option_values[e]?.color_2?.color && (t[o[n].option_name + "-" + o[n].option_values[e].value] = o[n].option_values[e]?.color_2?.color);
        return Object.assign({}, t)
    }
    styleOptions.getListColorImage = function (o) {
        for (var t = [], n = 0; n < o.length; n++)
            for (var e = 0; e < o[n].option_values.length; e++)
                void 0 !== o[n].option_values[e]?.image_file && (t[o[n].option_name + "-" + o[n].option_values[e].value] = o[n].option_values[e]?.image_file);
        return Object.assign({}, t)
    }
    styleOptions.getListColorImageUrl = function (o) {
        for (var t = [], n = 0; n < o.length; n++)
            for (var e = 0; e < o[n].option_values.length; e++)
                void 0 !== o[n].option_values[e]?.image_url && (t[o[n].option_name + "-" + o[n].option_values[e].value] = o[n].option_values[e]?.image_url);
        return Object.assign({}, t)
    }

    styleOptions.getListOrderOptions = function (o) {
        for (var t = [], n = 0; n < o.length; n++)
            t[o[n].name] = o[n].order;
        return Object.assign({}, t)
    }
    styleOptions.getListKeyEnableCollection = function (option) {
        for (var result = {}, n = 0; n < option.length; n++) {
            let data = option[n].enable_collection ?? false;
            result[option[n].option_name] = data;
        }

        return result
    }

    styleOptions.getListKeySwatchCollection = function (option) {
        for (var result = {}, n = 0; n < option.length; n++) {
            let data = option[n].display_style_collection;
            result[option[n].option_name] = data ? data : "button";
        }

        return result
    }

    styleOptions.getListDesignId = function (option) {
        for (var result = {}, n = 0; n < option.length; n++) {
            let data = option[n].product_design_id;
            result[option[n].option_name] = data ? data : "button";
        }

        return result
    }

    styleOptions.getListCollectionDesignId = function (option) {
        for (var result = {}, n = 0; n < option.length; n++) {
            let data = option[n].collection_design_id;
            result[option[n].option_name] = data ? data : "collection_button";
        }

        return result
    }

    styleOptions.getEnableCollection = function (option) {
        for (var result = {}, n = 0; n < option.length; n++) {
            let data = option[n].enable_collection;
            result[option[n].option_name] = data === false ? false : (data ? data : true);
        }

        return result
    }

    styleOptions.getListPriority = function (o, fieldName) {
        for (var t = [], n = 0; n < o.length; n++)
            for (var e = 0; e < o[n].option_values.length; e++)
                void 0 !== o[n].option_values[e][fieldName] && (t[o[n].option_name + "-" + o[n].option_values[e].value] = o[n].option_values[e][fieldName]);
        return Object.assign({}, t)
    }

    styleOptions.imageUrl = function (url, r, t) {
        t = t || !1;
        var a = url.split(".").pop()
            , o = url.lastIndexOf(a) - 1;
        return url.slice(0, o) + "_" + r + url.slice(o)
    }

    styleOptions.toggle = function (elem) {
        elem.style.display = "block" != getComputedStyle(elem).display ? "block" : "none"
    }

    styleOptions.removeSpecialCharacter = function (o) {
        for (var t = o.split(""), n = 0; n < t.length; n++)
            switch (t[n]) {
                case "'":
                    t[n] = t[n].replace("'", "\\'");
                    break;
                case '"':
                    t[n] = t[n].replace('"', '\\"');
                    break;
                case "#":
                    t[n] = t[n].replace("#", "#");
                    break;
                case "$":
                    t[n] = t[n].replace("$", "$");
                    break;
                case "%":
                    t[n] = t[n].replace("%", "%");
                    break;
                case "&":
                    t[n] = t[n].replace("&", "&");
                    break;
                case "(":
                    t[n] = t[n].replace("(", "(");
                    break;
                case ")":
                    t[n] = t[n].replace(")", ")");
                    break;
                case "*":
                    t[n] = t[n].replace("*", "*");
                    break;
                case "+":
                    t[n] = t[n].replace("+", "+");
                    break;
                case "/":
                    t[n] = t[n].replace("/", "/");
                    break;
                case ":":
                    t[n] = t[n].replace(":", ":");
                    break;
                case ";":
                    t[n] = t[n].replace(";", ";");
                    break;
                case "<":
                    t[n] = t[n].replace("<", "<");
                    break;
                case ">":
                    t[n] = t[n].replace(">", ">");
                    break;
                case "=":
                    t[n] = t[n].replace("=", "=");
                    break;
                case "?":
                    t[n] = t[n].replace("?", "?");
                    break;
                case "@":
                    t[n] = t[n].replace("@", "@");
                    break;
                case "[":
                    t[n] = t[n].replace("[", "[");
                    break;
                case "]":
                    t[n] = t[n].replace("]", "]");
                    break;
                case "^":
                    t[n] = t[n].replace("^", "^");
                    break;
                case "`":
                    t[n] = t[n].replace("`", "`");
                    break;
                case "{":
                    t[n] = t[n].replace("{", "{");
                    break;
                case "|":
                    t[n] = t[n].replace("|", "|");
                    break;
                case "}":
                    t[n] = t[n].replace("}", "}");
                    break;
                case "~":
                    t[n] = t[n].replace("~", "~");
                    break;
                default:
                    t[n] = t[n]
            }
        return t.join("")
    }

    styleOptions.formatMoney = function (e, t = true, a = true) {
        var r = AvisStyleOptions.moneyFormat;
        function o(e, r) {
            return void 0 === e ? r : e
        }
        function n(e, r, t, a, n) {
            if (r = o(r, 2),
                t = o(t, ","),
                a = o(a, "."),
                isNaN(e) || null == e)
                return 0;
            var i = (e = (e / 100).toFixed(r)).split(".");
            return i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + t) + (i[1] && (n || parseInt(i[1]) > 0) ? a + i[1] : "")
        }
        "string" == typeof e && (e = e.replace(".", ""));
        var i = ""
            , s = /\{\{\s*(\w+)\s*\}\}/
            , c = r;
        switch (c.match(s)[1]) {
            case "amount":
                i = n(e, 2, ",", ".", a);
                break;
            case "amount_no_decimals":
                i = n(e, 0, ",", ".", a);
                break;
            case "amount_with_comma_separator":
                i = n(e, 2, ".", ",", a);
                break;
            case "amount_with_space_separator":
                i = n(e, 2, " ", ",", a);
                break;
            case "amount_with_period_and_space_separator":
                i = n(e, 2, " ", ".", a);
                break;
            case "amount_no_decimals_with_comma_separator":
                i = n(e, 0, ".", ",", a);
                break;
            case "amount_no_decimals_with_space_separator":
                i = n(e, 0, " ", "", a);
                break;
            case "amount_with_space_separator":
                i = n(e, 2, " ", ",", a);
                break;
            case "amount_with_apostrophe_separator":
                i = n(e, 2, "'", ".", a)
        }
        return t ? c.replace(s, i) : i;
    }
    
    styleOptions.configAppPage = function () {
        let config = window.ap_front_settings?.config['config_app'];
        if (config && config.shopify_option) {
            config.shopify_option["app_v"] = window.ap_front_settings?.config['app_v'] ?? "v1";
            config.shopify_option["sort_option"] = false;

            return config.shopify_option;
        }
        return {
            app_v: window.ap_front_settings?.config['app_v'] ?? "v1",
            sort_option: false,
            setting: {
                s_show_product_page: false,
                s_show_collection_page: false,
                s_show_button_addcart: false,
                s_is_addcart_ajax: false,
                s_show_option_name_product: true,
                s_show_option_name_collection: true,
                s_show_limit_number_swatch: false,
                s_limit_number_swatch: 5,
                s_show_tooltip_collection: true,
                s_show_tooltip_product: true
            },
            localization: {
                add_to_cart: "Add to cart",
                added_to_cart: "Added to cart",
                sold_out: "Sold out"
            }
        };
    }

    return styleOptions(styleOptions.s = 0)
}([function (e, objectData, styleOptionsPlugin) {
    const queryStringUrl = window.location.search;
    // "product" != AvisStyleOptions.page && 
    styleOptionsPlugin.rootExtension = AvisStyleOptions.rootExtension,
        "index" != AvisStyleOptions.page && "collection" != AvisStyleOptions.page  && "search" != AvisStyleOptions.page
        || (renderOptionForCollectionPage(styleOptionsPlugin), renderOptionByFilterForCollection(styleOptionsPlugin, queryStringUrl));

        if ((shopIdApoData === "89355354449" && ["page","list-collections"].includes(AvisStyleOptions.page)) || ["63324782790"].includes(shopIdApoData))
        {
            renderOptionForCollectionPage(styleOptionsPlugin);
            renderOptionByFilterForCollection(styleOptionsPlugin, queryStringUrl);
        }

}
]);

function renderOptionByFilterForCollection(styleOptions, queryStringUrl) {
    if (AvisStyleOptions.plan === "FREE" || AvisStyleOptions.plan === "BASIC") return;

    if (AvisOptionsData?.not_show_collection_page) return;

    let optionsSwatchConfig = AvisStyleOptions;
    optionsSwatchConfig.appConfig = styleOptions.configAppPage();

    if (!optionsSwatchConfig.appConfig.setting.s_show_collection_page || (!optionsSwatchConfig.appConfig.app_v || optionsSwatchConfig.appConfig.app_v.indexOf("v2") === -1)) {
        return;
    }

    if (!optionsSwatchConfig?.product_ids_option?.length && !optionsSwatchConfig?.style_options?.length && AvisStyleOptions.plan !== "OLD") return;

    const observer = new MutationObserver(function (mutations) {
        if (window.location.search !== queryStringUrl || shopIdApoData === "56580669515" || shopIdApoData === "73932832802") {
            queryStringUrl = window.location.search;
            let checkExistGenCollection = document.querySelector(".avis-swatch-collection-item");
            if (!checkExistGenCollection) {
                renderOptionForCollectionPage(styleOptions);
            }
            else {
                if (shopIdApoData === "73932832802")
                {
                    setTimeout(function(){
                        renderOptionForCollectionPage(styleOptions);
                    }, 200);
                }
                else
                {
                    let intervalCollect = setInterval(function () {
                        let checkExistGenCollection = document.querySelector(".avis-swatch-collection-item");
                        if (!checkExistGenCollection) {
                            clearInterval(intervalCollect);
                            renderOptionForCollectionPage(styleOptions);
                        }
                    }, 200);
                }
            }
        }
    });


    const config = { subtree: true, childList: true };
    // start listening to changes
    if (shopIdApoData === "73932832802")
    {
        let dataSelector = document.querySelector("#ProductGridContainer");
        observer.observe(dataSelector ? dataSelector : document, config);
    }
    else
    {
        observer.observe(document, config);
    }

    if (Shopify?.theme && Shopify?.theme?.name && AvisStyleOptions.themeSetintervalCollection.find(x => Shopify?.theme?.name.indexOf(x) > -1))
    {
        let intervalCollectionPage = setInterval(function(){
            let checkExistGenCollection = document.querySelector(".avis-swatch-collection-item");
            if (!checkExistGenCollection && document.querySelectorAll(AvisStyleOptions.selectors.productCollectionHref).length > 0) {
                clearInterval(intervalCollectionPage);
                renderOptionForCollectionPage(styleOptions);
            }
        }, 300);
    }

    // Set interval for app filter or check option show chậm collection page
    if (shopIdApoData === "86499098904" )
    {
        setInterval(function(){
            let checkExistGenCollection = document.querySelector(".avis-swatch-collection-item");
            if (!checkExistGenCollection && document.querySelectorAll(AvisStyleOptions.selectors.productCollectionHref).length > 0) {
                renderOptionForCollectionPage(styleOptions);
            }
        }, 500);
    }

    // Set interval for app filter
    if (isShopInterval)
    {
        setInterval(function(){
            let newHref = AvisStyleOptions.selectors.productCollectionHref.split(",").join(":not(.avis-used),") + ":not(.avis-used)";
            let productItemElement = document.querySelectorAll(newHref);
            if (productItemElement.length > 0) {
                renderOptionForCollectionPage(styleOptions);
            }
        }, 500);
    }
}

function renderOptionForCollectionPage(styleOptions) {
    if (AvisStyleOptions.plan === "FREE" || AvisStyleOptions.plan === "BASIC") return;
    if (AvisOptionsData?.not_show_collection_page) return;

    var linkHttp = window.Shopify && window.Shopify.routes && window.Shopify.routes.root ? window.Shopify.routes.root : "/";
    var classSwatchCollectionsContainer = "avis-swatch-collections";
    let optionsSwatchConfig = AvisStyleOptions;
    optionsSwatchConfig.appConfig = styleOptions.configAppPage();

    if (!optionsSwatchConfig.appConfig.setting.s_show_collection_page || (!optionsSwatchConfig.appConfig.app_v || optionsSwatchConfig.appConfig.app_v.indexOf("v2") === -1)) {
        return;
    }
    if (shopIdApoData === "61391962248")
    {
        if (window.loadedAvisCollection) return;
        window.loadedAvisCollection = true;
    }
    renderOptionsForCollections(optionsSwatchConfig)
    function getType(data) {
        return (getType = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof data
        }
            : function (data) {
                return data && "function" == typeof Symbol && data.constructor === Symbol && data !== Symbol.prototype ? "symbol" : typeof data
            }
        )(data)
    }
    function i(t, e, o) {
        return (e = function (t) {
            var e = function (t, e) {
                if ("object" !== getType(t) || null === t)
                    return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var r = o.call(t, e || "default");
                    if ("object" !== getType(r))
                        return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" === getType(e) ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = o,
            t
    }
    function renderOptionsForCollections(dataOptionApp) {
        var addAttrProductSelector = function () {
            document.querySelectorAll(".avis-swatch-product-info").forEach((function (t) {
                return t.parentElement.parentElement.setAttribute("product-selector", t.getAttribute("avis-swatch-product-id"))
            }
            ))
        };
        var bindEventButtonAddCart = function () {
            var o = dataOptionApp.appConfig.localization.added_to_cart;
            document.querySelectorAll(".btn-avis-addtocart").forEach((function (elem) {
                elem.addEventListener("click", (function (event) {
                    event.preventDefault();
                    elem.classList.add("avis-loading");
                    var variantId = elem.closest(".avis-swatch-product-info").querySelector(".avis-swatch-option-select").value;
                    fetch(linkHttp + "cart/add.js", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            quantity: 1,
                            id: variantId
                        })
                    }).then((function (r) {
                        200 == r.status && (elem.innerHTML = o,
                            dataOptionApp.appConfig.setting.s_is_addcart_ajax ? function (t) {
                                fetch(linkHttp + "cart.js").then((function (t) {
                                    return t.json()
                                }
                                )).then((function (e) {
                                    window.dispatchEvent(new CustomEvent("AvisSwatchAddCart", {
                                        detail: {
                                            cart: e,
                                            ids: t
                                        }
                                    }));
                                    elem.classList.remove("avis-loading");
                                    if (shopIdApoData === "87942856985" || shopIdApoData === "89355354449")
                                    {
                                        let cartIcon = document.querySelector("#cart-icon-bubble");
                                        if (cartIcon) cartIcon.click();
                                    }
                                }
                                )).catch((function (t) {
                                    elem.classList.remove("avis-loading");
                                    console.log("Error:", t)
                                }
                                ))
                            }(i) : (elem.innerHTML = dataOptionApp.appConfig.localization.add_to_cart, window.location.href = linkHttp + "cart"))
                    }
                    )).then((function (t) {
                        console.log(t);
                        elem.classList.remove("avis-loading");
                    }
                    )).catch((function (t) {
                        console.log("Error:", t);
                        elem.classList.remove("avis-loading");
                    }
                    ))
                }
                ))
            }
            ))
        }
        binEventDropdownlistOption = function () {
            document.addEventListener("click", function () {
                document.querySelectorAll(`.${classSwatchCollectionsContainer} ul.avis-dropdown-option`).forEach(function (t) {
                    if ("block" == getComputedStyle(t).display) {
                        Object(styleOptions.toggle)(t);
                    }
                })
            });
            document.querySelectorAll(`.${classSwatchCollectionsContainer} ul.avis-dropdown-option`).length
                && (
                    document.querySelectorAll(`.${classSwatchCollectionsContainer} .avis-swatch-drop-down`).forEach((function (t) {
                        t.addEventListener("click", (function (e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                Object(styleOptions.toggle)(t.nextElementSibling);
                        }
                        ))
                    }
                    )),
                    document.querySelectorAll(`.${classSwatchCollectionsContainer} ul.avis-dropdown-option li.avis-style-value-dropdownlist`).forEach((function (t) {
                        t.addEventListener("click", (function (e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                Object(styleOptions.toggle)(t.closest("ul.avis-dropdown-option")),
                                t.querySelector('input[type="radio"]').checked = true,
                                t.querySelector('input[type="radio"]').dispatchEvent(new CustomEvent("change"))
                        }
                        ))
                    }
                    )))
        }
            , binEventOptionValue = function () {
                document.querySelectorAll(".avis-text-more").forEach((function (t) {
                    t.addEventListener("click", (function () {
                        window.location.href = t.closest(".avis-swatch-product-info").getAttribute("avis-swatch-product-url")
                    }
                    ))
                }
                )),
                    document.querySelectorAll(".avis-variants-image li.avis-option-value-item").forEach((function (e) {
                        if (isShopHoverOptionShowImage && e.dataset?.productImage)
                        {
                            let itemProductSelector = e.closest(".avis-swatch-collection-item");
                            e.addEventListener("mouseover", function(){
                                if (!itemProductSelector) return;
                                let imageSelector = itemProductSelector.querySelector(findImageHoverClass);
                                if (!imageSelector) return;
                                if (!imageSelector?.dataset?.src) imageSelector.setAttribute("data-src", imageSelector?.getAttribute("src"));
                                if (!imageSelector?.dataset?.srcset)imageSelector.setAttribute("data-srcset", imageSelector?.getAttribute("srcset"));
                                imageSelector.setAttribute("src", e.dataset?.productImage);
                                imageSelector.setAttribute("srcset", e.dataset?.productImage);

                            });
                            e.addEventListener("mouseout", function(){
                                if (!itemProductSelector) return;
                                let imageSelector = itemProductSelector.querySelector(".grid-product__secondary-image img");
                                if (imageSelector?.dataset?.src) imageSelector.setAttribute("src", imageSelector?.dataset?.src);
                                if (imageSelector?.dataset?.srcset) imageSelector.setAttribute("srcset", imageSelector?.dataset?.srcset);
                            });
                        }
                        
                        e.addEventListener("click", (function (o) {
                            var image, r, l, c, i, n, s, a, u, d, p, g, m, h, f, b, _, y, v, S, w, A, q, E, k, O, j, C, x, I, L, T, P, G = e.getAttribute("data-product-id"), H = e.getAttribute("data-product-image");
                            let optionValueChecked = e.getAttribute("data-value");
                            try {
                                let itemProductCard = e.closest(".avis-swatch-collection-item");
                                itemProductCard && optionValueChecked && null != itemProductCard.querySelector('fieldset input[type="radio"][value="'+optionValueChecked+'"]') && itemProductCard.querySelector('fieldset input[type="radio"][value="'+optionValueChecked+'"]').click();
                            } catch (t) {
                                console.log(t)
                            }
                            H && (null != (null === (r = e.closest(dataOptionApp.selectors.parentSelectorSwatchCollection)) || void 0 === r ? void 0 : r.querySelector(dataOptionApp.selectors.imageSelectorCollection)) && (e.closest(dataOptionApp.selectors.parentSelectorSwatchCollection).querySelector(dataOptionApp.selectors.imageSelectorCollection).setAttribute("src", H),
                                e.closest(dataOptionApp.selectors.parentSelectorSwatchCollection).querySelector(dataOptionApp.selectors.imageSelectorCollection).setAttribute("srcset", H)),
                                null != (null === (l = e.closest('[product-selector="' + G + '"]')) || void 0 === l ? void 0 : l.querySelector("img:not(.icon-add-to-cart)")) && (e.closest('[product-selector="' + G + '"]')?.querySelector("img:not(.icon-add-to-cart)")?.setAttribute("src", H),
                                    e.closest('[product-selector="' + G + '"]')?.querySelector("img:not(.icon-add-to-cart)")?.setAttribute("srcset", H)),
                                null !== (c = e.closest("article.collection-product")) && void 0 !== c && c.querySelectorAll(".product-card-image img").length && (e.closest("article.collection-product").querySelector(".product-card-image img").setAttribute("src", H),
                                    e.closest("article.collection-product").querySelector(".product-card-image img").setAttribute("srcset", H)),
                                null !== (i = e.closest("article.product-card.tw-relative")) && void 0 !== i && i.querySelectorAll("img").length && (e.closest("article.product-card.tw-relative").querySelector("img").setAttribute("src", H),
                                    e.closest("article.product-card.tw-relative").querySelector("img").setAttribute("srcset", H)),
                                null !== (n = e.closest(".product-item")) && void 0 !== n && n.querySelectorAll(".product-item__thumbnail img").length && e.closest(".product-item").querySelectorAll(".product-item__thumbnail img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (s = e.closest(".product-item")) && void 0 !== s && s.querySelectorAll(".product-item__images img").length && e.closest(".product-item").querySelectorAll(".product-item__images img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (a = e.closest("article.productgrid--item")) && void 0 !== a && a.querySelectorAll("img").length && e.closest("article.productgrid--item").querySelectorAll("img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (u = e.closest(".product-item-v1")) && void 0 !== u && u.querySelectorAll(".img-product img.img-responsive").length && (e.closest(".product-item-v1").querySelector(".img-product img.img-responsive").setAttribute("src", H),
                                    e.closest(".product-item-v1").querySelector(".img-product img.img-responsive").setAttribute("srcset", H)),
                                null !== (d = e.closest(".product-item-v1")) && void 0 !== d && d.querySelectorAll(".img-product img.img-responsive.img-product-hover").length && (e.closest(".product-item-v1").querySelector(".img-product img.img-responsive.img-product-hover").setAttribute("src", H),
                                    e.closest(".product-item-v1").querySelector(".img-product img.img-responsive.img-product-hover").setAttribute("srcset", H)),
                                null !== (p = e.closest(".grid__item")) && void 0 !== p && p.querySelectorAll("img.product__image").length && e.closest(".grid__item").querySelectorAll("img.product__image").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (g = e.closest(".grid__item")) && void 0 !== g && g.querySelectorAll(".card__inner .card__media .media img").length && e.closest(".grid__item").querySelectorAll(".card__inner .card__media .media img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (m = e.closest(".grid__item")) && void 0 !== m && m.querySelectorAll("img.product__img").length && e.closest(".grid__item").querySelectorAll("img.product__img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (h = e.closest(".grid__item")) && void 0 !== h && h.querySelectorAll("img.grid-view-item__image").length && e.closest(".grid__item").querySelectorAll("img.grid-view-item__image").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (f = e.closest(".grid__item")) && void 0 !== f && f.querySelectorAll("img.product--image").length && e.closest(".grid__item").querySelectorAll("img.product--image").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (b = e.closest(".grid__item")) && void 0 !== b && b.querySelectorAll(".product-card__image img").length && e.closest(".grid__item").querySelectorAll(".product-card__image img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (g = e.closest(".popular-products__item")) && void 0 !== g && g.querySelectorAll(".card.card--product img").length && e.closest(".popular-products__item").querySelectorAll(".card.card--product img").forEach((function (t) {
                                  t.setAttribute("src", H),
                                      t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (_ = e.closest(".product-block")) && void 0 !== _ && _.querySelectorAll(".primary-image img").length && e.closest(".product-block").querySelectorAll(".primary-image img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (y = e.closest(".Grid__Cell")) && void 0 !== y && y.querySelectorAll(".ProductItem__Image").length && e.closest(".Grid__Cell").querySelectorAll(".ProductItem__Image").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (v = e.closest(".product-item")) && void 0 !== v && v.querySelectorAll(".product-item__image").length && e.closest(".product-item").querySelectorAll(".product-item__image").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (S = e.closest(".site-box")) && void 0 !== S && S.querySelectorAll(".box--product-image.primary img").length && e.closest(".site-box").querySelectorAll(".box--product-image.primary img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (w = e.closest(".product-index")) && void 0 !== w && w.querySelectorAll(".prod-image img").length && e.closest(".product-index").querySelectorAll(".prod-image img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (A = e.closest(".Carousel__Cell")) && void 0 !== A && A.querySelectorAll(".img.ProductItem__Image").length && e.closest(".Carousel__Cell").querySelectorAll(".img.ProductItem__Image").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (A = e.closest(".avis-swatch-collection-item")) && void 0 !== A && e.closest(".avis-swatch-collection-item")?.querySelectorAll("img.object-cover:not(.js-image)")?.forEach((function (t) {
                                    t.setAttribute("src", H)
                                }
                                )),
                                null !== (q = e.closest(".tt-col-item")) && void 0 !== q && q.querySelectorAll(".tt-image-box img").length && e.closest(".tt-col-item").querySelectorAll(".tt-image-box img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null != (null === (E = e.closest(".product-grid-item")) || void 0 === E ? void 0 : E.querySelector("a.product__media")) && (e.closest(".product-grid-item").querySelector("a.product__media").style.backgroundImage = "url('" + H + "')"),
                                null != (null === (k = e.closest(".product-grid-item")) || void 0 === k ? void 0 : k.querySelector("a.product__media-hover .product__media-hover-img")) && (e.closest(".product-grid-item").querySelector("a.product__media-hover .product__media-hover-img").style.backgroundImage = "url('" + H + "')"),
                                null != (null === (O = e.closest(".product-block__inner")) || void 0 === O ? void 0 : O.querySelector(".product-block__image")) && (e.closest(".product-block__inner").querySelector(".product-block__image").style.backgroundImage = "url('" + H + "')",
                                    e.closest(".product-block__inner").querySelector(".product-block__image").setAttribute("data-bgset", H)),
                                null != (null === (j = e.closest(".product-grid-item")) || void 0 === j ? void 0 : j.querySelector(".image__fill .background-size-cover")) && (e.closest(".product-grid-item").querySelector(".image__fill .background-size-cover").style.backgroundImage = "url('" + H + "')",
                                    e.closest(".product-grid-item").querySelector(".image__fill .background-size-cover").setAttribute("data-bgset", H)),
                                null !== (C = e.closest(".product-grid-item")) && void 0 !== C && C.querySelectorAll(".collection__image__top").length && (e.closest(".product-grid-item").querySelectorAll(".collection__image__top").style.backgroundImage = "url('" + H + "')"),
                                null !== (x = e.closest(".tt-col-item")) && void 0 !== x && x.querySelectorAll(".collection__image__bottom").length && e.closest(".tt-col-item").querySelectorAll(".collection__image__bottom").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )),
                                null !== (I = e.closest(".grid__item")) && void 0 !== I && I.querySelectorAll(".grid-product__image-mask .grid__image-ratio").length && setTimeout((function () {
                                    e.closest(".grid__item").querySelectorAll(".grid-product__image-mask .grid__image-ratio").forEach((function (t) {
                                        t.style.backgroundImage = "url('" + H + "')"
                                    }
                                    ))
                                }
                                ), 500),
                                null !== (L = e.closest(".grid__item")) && void 0 !== L && L.querySelectorAll(".grid-product__image-mask .image-wrap img").length && e.closest(".grid__item").querySelector(".grid-product__image-mask .image-wrap img").setAttribute("src", H),
                                null !== (T = e.closest(".grid__item")) && void 0 !== T && T.querySelectorAll(".grid-product__image-mask .grid-product__secondary-image img").length && e.closest(".grid__item").querySelector(".grid-product__image-mask .grid-product__secondary-image img").setAttribute("src", H),
                                null !== (image = e.closest(".card-wrapper")) && void 0 !== image && image.querySelectorAll(".card__inner .media img:not(.heading-logo-small)").length && e.closest(".card-wrapper").querySelectorAll(".card__inner .media img:not(.heading-logo-small)").forEach((function (t) {
                                    t.setAttribute("src", H),
                                    t.setAttribute("srcset", H)
                                })),
                                null !== (P = e.closest(".grid__item")) && void 0 !== P && P.querySelectorAll(".card--product .media img").length && e.closest(".grid__item").querySelectorAll(".card--product .media img").forEach((function (t) {
                                    t.setAttribute("src", H),
                                        t.setAttribute("srcset", H)
                                }
                                )))
                        }
                        ))
                    }
                    ))
            }
            , binEventRadioOptionValue = function (e) {
                var o = dataOptionApp.appConfig.localization.add_to_cart
                    , l = dataOptionApp.appConfig.localization.sold_out;
                document.querySelectorAll('.avis-swatch-product-info .avis-swatch-option .avis-option-values input[type="radio"]').forEach((function (elemOptionValue) {
                    elemOptionValue.addEventListener("change", (function (i) {
                        var n = elemOptionValue.closest(".avis-swatch-product-info").querySelectorAll(".avis-swatch-option")
                            , s = []
                            , value = elemOptionValue.value;
                        handlePriceTheme(elemOptionValue);
                        
                        dataOptionApp.appConfig.setting.s_show_option_name_collection && (elemOptionValue.closest(".avis-swatch-option").querySelector(".avis-option-value").innerHTML = ": " + value),
                            n.forEach((function (t, e) {
                                var o, r = t.getAttribute("data-option-index");
                                s[r] = null === (o = t.querySelector('input[type="radio"]:checked')) || void 0 === o ? void 0 : o.value
                            }
                            ));
                        for (var u = "", d = 0; d < s.length; d++)
                            void 0 !== s[d] && (u += "[data-option" + parseInt(d + 1) + '="' + Object(styleOptions.removeSpecialCharacter)(s[d]) + '"]');
                        try {
                            var p, g, m = null === (p = elemOptionValue.closest(".avis-swatch-product-info").querySelector('select[name="avis-swatch-option-select"] option' + u)) || void 0 === p ? void 0 : p.value, h = null === (g = elemOptionValue.closest(".avis-swatch-product-info").querySelector('select[name="avis-swatch-option-select"] option' + u)) || void 0 === g ? void 0 : g.getAttribute("data-available")
                        } catch (t) {
                            console.log(t)
                        }
                        elemOptionValue.closest(".avis-swatch-product-info").querySelector('select[name="avis-swatch-option-select"]').value = m,
                            dataOptionApp.appConfig.setting.s_show_button_addcart && ("true" == h ? (elemOptionValue.closest(".avis-swatch-product-info").querySelector(".btn-avis-addtocart").innerHTML = o,
                                elemOptionValue.closest(".avis-swatch-product-info").querySelector(".btn-avis-addtocart").removeAttribute("disabled")) : (elemOptionValue.closest(".avis-swatch-product-info").querySelector(".btn-avis-addtocart").innerHTML = l,
                                    elemOptionValue.closest(".avis-swatch-product-info").querySelector(".btn-avis-addtocart").setAttribute("disabled", "disabled")));
                        var f = elemOptionValue.closest(".avis-swatch-product-info").querySelector('select[name="avis-swatch-option-select"]').value;
                        elemOptionValue.closest(".avis-option-values").previousElementSibling && elemOptionValue.closest(".avis-option-values").previousElementSibling.querySelector(".avis-dropdown-view-value") && (elemOptionValue.closest(".avis-option-values").previousElementSibling.querySelector(".avis-dropdown-view-value").innerHTML = value);
                        if (document.querySelectorAll(".avis-variants-price li").forEach((function (t) {
                            if (t.getAttribute("data-value") === f) {
                                var e = document.querySelector('.avis-variants-price li[data-value="' + f + '"] .avis-variant-price').innerHTML
                                    , o = "";
                                null != document.querySelector('.avis-variants-price li[data-value="' + f + '"] .avis-variant-price-compareprice') && (o = document.querySelector('.avis-variants-price li[data-value="' + f + '"] .avis-variant-price-compareprice').innerHTML),
                                    t.closest(".avis-swatch-product-info").querySelector(".avis-collection-cur-price").innerHTML = e,
                                    t.closest(".avis-swatch-product-info").querySelector(".avis-collection-old-price").innerHTML = void 0 !== o ? o : ""
                            }
                        }
                        )),
                            0 == dataOptionApp.appConfig.sort_option) {
                            var b = []
                                , _ = ""
                                , y = elemOptionValue.closest(".avis-swatch-product-info").querySelectorAll(".avis-swatch-option")
                                , v = elemOptionValue.closest(".avis-swatch-product-info").getAttribute("avis-swatch-product-id");
                            e.map((function (t) {
                                if (void 0 !== t && t.product.id == v)
                                    return _ = t.product
                            }
                            ));
                            var S = _.options;
                            let elemOptionIndex = {};
                            y.forEach((function (t) {
                                var e, o = t.getAttribute("data-option-index");
                                elemOptionIndex[o] = t;
                                b[o] = null === (e = t.querySelector('input[type="radio"]:checked')) || void 0 === e ? void 0 : e.value
                            }
                            ));
                            var toggleOutOfStock = function (t, e, o) {
                                t.querySelectorAll("ul.avis-option-values li.avis-option-value-more").length && null != t.querySelector("ul.avis-option-values li.avis-option-value-more") || null != t.querySelector("ul.avis-option-values li.avis-option-value-item:nth-child(".concat(e + 1, ")")) && t.querySelector("ul.avis-option-values li.avis-option-value-item:nth-child(".concat(e + 1, ")")).classList.toggle("avis-out-of-stock", !o)
                            };
                            elemOptionIndex && elemOptionIndex[0] && S && S[0].values.forEach((function (t, e) {
                                toggleOutOfStock(elemOptionIndex[0], e, _.variants.some((function (e) {
                                    return e.option1 === t && e.available
                                }
                                ))),
                                    elemOptionIndex[1] && S[1].values.forEach((function (t, e) {
                                        toggleOutOfStock(elemOptionIndex[1], e, _.variants.some((function (e) {
                                            return e.option2 === t && e.option1 === b[0] && e.available
                                        }
                                        ))),
                                            elemOptionIndex[2] && S[2].values.forEach((function (t, e) {
                                                toggleOutOfStock(elemOptionIndex[2], e, _.variants.some((function (e) {
                                                    return e.option3 === t && e.option1 === b[0] && e.option2 === b[1] && e.available
                                                }
                                                )))
                                            }
                                            ))
                                    }
                                    ))
                            }
                            ))
                        } else {
                            _ = "",
                                v = elemOptionValue.closest(".avis-swatch-product-info").getAttribute("avis-swatch-product-id");
                            var A = elemOptionValue.closest(".avis-swatch-product-info")
                                , q = "avis-out-of-stock"
                                , E = A.querySelectorAll(".avis-swatch-variants .avis-swatch-option");
                            E.length > 1 && E.forEach((function (t) {
                                t.querySelectorAll('.avis-swatch-option input[type="radio"]').forEach((function (t) {
                                    t.parentElement.classList.remove(q)
                                }
                                ))
                            }
                            )),
                                e.map((function (t) {
                                    if (void 0 !== t && t.product.id == v)
                                        return _ = t.product
                                }
                                )),
                                E.forEach((function (t, e) {
                                    e = t.getAttribute("data-option-index");
                                    var o, r = null === (o = t.querySelector('input[type="radio"]:checked')) || void 0 === o ? void 0 : o.value;
                                    E.forEach((function (t, o) {
                                        o = t.getAttribute("data-option-index");
                                        e !== o && t.querySelectorAll('input[type="radio"]').forEach((function (t, l) {
                                            for (var c = !1, i = 0, n = _.variants.length; i < n; i++) {
                                                var s = _.variants[i];
                                                !1 !== s.available && s.options[e] == r && s.options[o] == t.value && (c = !0)
                                            }
                                            !1 === c ? t.parentElement.classList.contains("select-option--dropdown") || t.parentElement.classList.add(q) : t.parentElement.classList.remove(q)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ))
                        }
                    }
                    ))
                }
                ))
            }
            , sortOptions = function (productId) {
                dataOptionApp.appConfig.sort_option && document.querySelectorAll('.avis-swatch-product-info[avis-swatch-product-id="' + productId + '"]').forEach((function (t) {
                    var e = t.querySelectorAll(".avis-swatch-variants .avis-swatch-option");
                    if (e.length > 1) {
                        var o = [];
                        for (var r in e)
                            1 == e[r].nodeType && o.push(e[r]);
                        for (o.sort((function (t, e) {
                            return t.getAttribute("data-order") - e.getAttribute("data-order")
                        }
                        )),
                            r = 0; r < o.length; ++r)
                            t.querySelector(".avis-swatch-variants").appendChild(o[r])
                    }
                }
                ))
            };
        !function () {
            if (shopIdApoData !== "73932832802" && !isShopInterval)
            {
                // Remove all html collection gen
                document.querySelectorAll(`.${classSwatchCollectionsContainer}`).forEach((function (t) {
                    return t.remove()
                }
                )),
                document.querySelectorAll(".avis-swatch-collection-item").forEach((function (t) {
                    return t.classList.remove("avis-swatch-collection-item")
                }
                ));
            }

            // Get all product in collection by href (has products url)
            if (shopIdApoData === "17590719")
            {
                AvisStyleOptions.selectors.productCollectionHref += ',.globo-sw-collection-item a[href*="/collections/"]';
            }
            var productElementListItem = [];
            if (shopIdApoData === "73932832802")
            {
                productElementListItem = Array.from(document.querySelectorAll(dataOptionApp.selectors.productCollectionHref)).filter((function (item) {
                    return !item.closest(".avis-swatch-collection-item") && item.href.substring(item.href.lastIndexOf("/")).replace("/", "").split("?")[0].indexOf(".") === -1;
                }));
            }
            else if (isShopInterval)
            {
                let newHref = AvisStyleOptions.selectors.productCollectionHref.split(",").join(":not(.avis-used),") + ":not(.avis-used)";
                productElementListItem = Array.from(document.querySelectorAll(newHref)).filter((function (item) {
                    item.classList.add('avis-used');
                    return !item.closest(".avis-swatch-collection-item") && item.href.substring(item.href.lastIndexOf("/")).replace("/", "").split("?")[0].indexOf(".") === -1;
                }));
            }
            else
            {

                productElementListItem = Array.from(document.querySelectorAll(dataOptionApp.selectors.productCollectionHref)).filter((function (item) {
                    return item.href.substring(item.href.lastIndexOf("/")).replace("/", "").split("?")[0].indexOf(".") === -1;
                }))
            }
            if (productElementListItem.length === 0)
            {
                return;
            }
            var productElementList = productElementListItem.map((function (item) {
            var productHandle = item.href.substring(item.href.lastIndexOf("/")).replace("/", "").split("?")[0];
            return fetch(`${linkHttp}products/${productHandle}.js`).then((function (product) {
                return product.json()
            }
                )).then((function (product) {
                    return {
                        element: item,
                        product: product
                    }
                }
                )).catch((function (error) {
                    console.log("Error:", error)
                }
                ))
            }
            ));
            Promise.all(productElementList).then((async function (productElements) {
                var optionsApp = dataOptionApp.style_options;
                var h = styleOptions.getListColors(optionsApp)
                    , f = Object(styleOptions.getListColors2)(optionsApp)
                    , b = Object(styleOptions.getListColorImage)(optionsApp)
                    , _ = Object(styleOptions.getListColorImageUrl)(optionsApp)
                    , v = Object(styleOptions.getListOrderOptions)(optionsApp)
                    , visibleCollections = Object(styleOptions.getListKeyEnableCollection)(optionsApp)
                    , displayStylesCollection = Object(styleOptions.getListKeySwatchCollection)(optionsApp)
                    , getListKeyStyleCollectionSwatch = Object(styleOptions.getListKeyStyleCollectionSwatch)(optionsApp)
                    , getListPriorityColor = Object(styleOptions.getListPriority)(optionsApp, "is_priority_color")
                    , getListPriorityImageFile = Object(styleOptions.getListPriority)(optionsApp, "is_priority_image_file")
                    , getListPriorityImageUrl = Object(styleOptions.getListPriority)(optionsApp, "is_priority_image_url")
                    , getListCollectionDesignId = Object(styleOptions.getListCollectionDesignId)(optionsApp)
                    , getEnableCollection = Object(styleOptions.getEnableCollection)(optionsApp);

                const renderOptionProducts = async function () {
                    let productIdsApply = false;
                    let productIdsString = JSON.stringify(AvisStyleOptions.product_ids_option);
                    let productIds = JSON.parse(productIdsString);
                    if (AvisStyleOptions.plan === "ADVANCED")
                    {
                        productIdsApply = false;
                    }
                    else if (AvisOptionsData?.limit_product)
                    {
                        let limitProduct = AvisOptionsData.limit_product.split(":");
                        if (limitProduct.length > 1)
                        {
                            productIdsApply = productIds.splice(0, parseInt(limitProduct[1]));
                        }
                    } else if (AvisStyleOptions.plan === "FREE") {
                        productIdsApply = productIds.splice(0, 10);
                    } else if (AvisStyleOptions.plan === "BASIC") {
                        productIdsApply = productIds.splice(0, 50);
                    } else if (AvisStyleOptions.plan === "ADVANCED") {
                        //productIdsApply = productIds.splice(0, 3000);
                    }
                    let productIdsInPage = [];
                    productElements.filter(item=> item).map((productElement) => {
                        let isOptionTitleDefault = productElement.product.options && productElement.product.options.length === 1 && productElement.product.options[0].name === "Title" && productElement.product.options[0].values && productElement.product.options[0].values.length === 1  && productElement.product.options[0].values[0] === "Default Title";
                        if ((!productIdsApply || productIdsApply.includes(String(productElement.product.id))) && !isOptionTitleDefault) {
                            productIdsInPage.push(productElement.product.id);
                        }
                        return null;
                    });
                    let currentLocale = AvisStyleOptions?.locale;
                    if (!currentLocale) currentLocale = Shopify.locale ?? "en";
                    if (window.apoOptionLocales?.config?.storefront_connect && currentLocale !== window.apoOptionLocales?.config?.primary_locale && productIdsInPage.length > 0){
                        let queryLocale = await apoFunction.queryProductInfo(currentLocale, productIdsInPage);
                        let query = await apoFunction.queryProductInfo(window.apoOptionLocales?.config?.primary_locale ?? "EN", productIdsInPage);
                        let configLocale = await Promise.all([apoFunction.fetchStoreFront(query), apoFunction.fetchStoreFront(queryLocale)]).then((result) => {
                          console.log(result);
                          return result
                        })
                        .catch((error) => {
                          console.log(`Error in promises ${error}`); 
                          return null; 
                        });
                        if (configLocale?.length > 1)
                        {
                          let productOrgs = configLocale[0]?.data?.nodes;
                          let productLocales = configLocale[1]?.data?.nodes;
                          if (productOrgs?.length && productLocales?.length)
                          {
                            dataOptionApp["product_orgs"] = productOrgs;
                            dataOptionApp["product_locales"] = productLocales;
                            dataOptionApp["primary_locale"] = window.apoOptionLocales?.config?.primary_locale;
                            dataOptionApp["locale"] = currentLocale;
                            dataOptionApp["is_locale"] = true;
                          }
                        }
                    }

                    await Promise.all(productElements.map((async function (productElement) {
                        if (productElement) {
                            let isOptionTitleDefault = productElement.product.options && productElement.product.options.length === 1 && productElement.product.options[0].name === "Title" && productElement.product.options[0].values && productElement.product.options[0].values.length === 1  && productElement.product.options[0].values[0] === "Default Title";
                            if ((!productIdsApply || productIdsApply.includes(String(productElement.product.id))) && !isOptionTitleDefault) {
                                async function renderSelectOption(product) {
                                    let html = "";
                                    let optionHtml = "";
                                    for (let variant of product.variants) {
                                        optionHtml += `<option value="${variant.id}" ${variant.option1 ? "data-option1='" + variant.option1 + "'" : ""} 
                                                    ${variant.option2 ? "data-option2='" + variant.option2 + "'" : ""}  ${variant.option3 ? "data-option3='" + variant.option3 + "'" : ""} 
                                                    data-available="${variant.available}" data-price="${styleOptions.formatMoney(variant.price)}" 
                                                    ${variant.compare_at_price > variant.price ? "data-compare-price='" + styleOptions.formatMoney(variant.compare_at_price) + "'" : ""}>${variant.title} - ${styleOptions.formatMoney(variant.price)}</option>`;
                                    }

                                    html += `<select name="avis-swatch-option-select" class="avis-swatch-option-select" style="display: none !important;">
                                            ${optionHtml}
                                        </select>`
                                    return html;
                                }
                                async function renderListPrice(product) {
                                    let html = "";
                                    for (let variant of product.variants)
                                        html += `<li data-value="${variant.id}"><span class="avis-variant-price">${styleOptions.formatMoney(variant.price, true, true)}</span> ${(variant.compare_at_price > variant.price) ? ("<span class='avis-variant-price-compareprice'>" + styleOptions.formatMoney(variant.compare_at_price, true, true) + "</span>") : ""}</li>`;
                                    return html;
                                }

                                async function renderOptionValue(option, displayStyle, class_stylesoldout, product, option_index_name, option_index, displayStyleSwatch, configs, optionName, product_org, product_locale, optionsConfig) {
                                    let html = "";
                                    if (!displayStyle) displayStyle = "button";
                                    let index = 1;

                                    let isSwatchLimit = configs?.s_show_limit_number_swatch ?? false;
                                    let limit = configs?.s_limit_number_swatch ?? 5;
                                    if (window.ap_front_settings.shop_id === "63324782790" && 768 < window.innerWidth < 822) {
                                        limit = 4;
                                    }
                                    if (window.ap_front_settings.shop_id === "63324782790" &&  window.innerWidth <= 768) {
                                        limit = 2;
                                    }
                                    if (isSwatchLimit) {
                                        isSwatchLimit = option.values.length > limit;
                                    }

                                    if (displayStyle == "dropdownlist") isSwatchLimit = false;

                                    for (let value of option.values) {
                                        let available = false;
                                        let variant_for_value = false;
                                        for (let variant of product.variants) {
                                            if (variant[option_index_name] == value) {
                                                variant_for_value = variant;
                                                if (variant.available) available = true;

                                                break;
                                            }
                                        }

                                        let labelHtml = "";
                                        let enableTooltip = configs.enableTooltip && displayStyle === "swatch";
                                        let valueId = `avis-option-value-item-${variant_for_value.id}-${option.position}-${option_index}`;
                                        if (displayStyle == "swatch") {
                                            let image_size = "150x";
                                            let background_size_image = "cover";
                                            if (displayStyleSwatch == "variant") {
                                                let cur_image_swatch = false;
                                                if (variant_for_value && variant_for_value.featured_image && variant_for_value.featured_image.src) {
                                                    cur_image_swatch = variant_for_value.featured_image.src;
                                                }

                                                labelHtml = `<label for="avis-option-value-item-${variant_for_value.id}-${option.position}-${option_index}" style="${cur_image_swatch ? ("display: block; background-size: " + background_size_image + "; background-position: center; background-repeat: no-repeat; background-image: url('" + styleOptions.imageUrl(cur_image_swatch, image_size) + "')") : ""}">
                                       ${enableTooltip ? ('<span class="avis-option-value-tooltip">' + value + '</span>') : ""}
                                    </label>`;
                                            }
                                            else {
                                                let option_value = `${optionName}-${value}`;
                                                if (optionsConfig?.is_locale)
                                                {
                                                    let findIndex = product_locale?.options?.findIndex(x => x.name === option.name);
                                                    if (findIndex > -1)
                                                    {
                                                    let optionOrg = product_org?.options[findIndex];
                                                    let findIndexValue = product_locale.options[findIndex].optionValues.findIndex(x => x.name === value);
                                                    if (findIndexValue > -1)
                                                    {
                                                        let valueTemp = optionOrg.optionValues[findIndexValue].name;
                                                        option_value = `${optionName}-${valueTemp}`;
                                                    }
                                                    }
                                                }
                                                // if (optionLocales && optionLocales?.values?.length)
                                                // {
                                                //     let findValueLocales = optionLocales.values.find(x => x.value && x.value.includes(value));
                                                //     if (findValueLocales)
                                                //     {
                                                //     option_value = `${optionName}-${findValueLocales.value[0] ? findValueLocales.value[0] : value}`;
                                                //     }
                                                // }
                                                let bgImage = false;
                                                let color = false;
                                                let color2 = false;
                                                let isImageUrl = false;
                                                if (configs.getListPriorityImageUrl[option_value] && configs.displayColorsImageUrl[option_value]) {
                                                    bgImage = configs.displayColorsImageUrl[option_value];
                                                    isImageUrl = true;
                                                }
                                                if (bgImage == false && configs.getListPriorityImageFile[option_value] && configs.displayColorsImage[option_value]) {
                                                    bgImage = configs.displayColorsImage[option_value];
                                                }
                                                if (bgImage == false && configs.displayColorsImageUrl[option_value]) {
                                                    bgImage = configs.displayColorsImageUrl[option_value];
                                                    isImageUrl = true;
                                                }
                                                if (bgImage == false && configs.displayColorsImage[option_value]) {
                                                    bgImage = configs.displayColorsImage[option_value];
                                                }

                                                if (color == false && configs.displayColors[option_value]) {
                                                    color = configs.displayColors[option_value];
                                                }
                                                if (color2 == false && configs.displayColors2[option_value]) {
                                                    color2 = configs.displayColors2[option_value];
                                                }

                                                if (color || color2) {
                                                    if (configs.getListPriorityColor[option_value]) {
                                                        if (bgImage) {
                                                            if ((!isImageUrl && configs.getListPriorityImageFile[option_value]) || (isImageUrl && configs.getListPriorityImageUrl[option_value])) {

                                                            } else bgImage = false
                                                        }
                                                    }
                                                }

                                                labelHtml = `<label for="${valueId}"
                                        style="${color ? ("background-color:" + color + ";" + (color2 ? "background: linear-gradient( -45deg, " + color2 + " 50%, " + color + " 50% );" : "")) : (color2 ? ("background: linear-gradient( -45deg, " + color2 + " 50%, transparent  50% );") : "")}
                                        ${bgImage ? "background-image: url('" + bgImage + "'); background-position: center; background-repeat: no-repeat;background-size: cover;" : ""}">
                                    ${enableTooltip ? ('<span class="avis-option-value-tooltip">' + value + '</span>') : ""}
                                    </label>`;
                                            }


                                        }
                                        else if (displayStyle == "dropdownlist") {
                                            labelHtml = `<label for="${valueId}" class="avis-swatch-view-value">
                                    ${value}
                                </label>`;
                                        }
                                        else {
                                            labelHtml = `<label for="${valueId}" class="avis-swatch-view-value">
                                   ${enableTooltip ? ('<span class="avis-option-value-tooltip">' + value + '</span>') : ""}
                                    ${value}
                                </label>`;
                                        }

                                        let nameRadio = `option-avis-${option.position}-${option_index}-${product.id}`;
                                        let hideClass = isSwatchLimit && index > limit ? "limit-hide" : "";
                                        html += `<li data-product-id="${product.id}" 
                                                ${variant_for_value?.featured_image?.src ? "data-product-image='" + variant_for_value.featured_image.src + "'" : ""}
                                                class="avis-option-value-item avis-style-value-${displayStyle} ${hideClass} ${class_stylesoldout} ${available ? "avis-available" : "avis-out-of-stock"}" data-value='${value}'>
                                                <input id='${valueId}' data-variantId="${variant_for_value.id}" type="radio" name="${nameRadio}" value='${value?.replaceAll('"', '&quot;')}' ${index == 1 ? "checked" : ""} required />
                                                ${labelHtml}
                                            </li>`;

                                        index = index + 1;
                                    }

                                    if (isSwatchLimit) {
                                        html += `<li class="avis-option-value-more avis-style-value-${displayStyle}" >
                                                <label class="avis-text-more">
                                                    +${option.values.length - limit}
                                                </label>
                                            </li>`;
                                    }
                                    return html;
                                }

                                async function renderOptions(configs, product, optionsConfig) {
                                    if (product.variants.length == 1 && product.variants[0].title == 'Default Title') {
                                        return "";
                                    }

                                    let html = "";
                                    let index = 0;
                                    let product_org = optionsConfig?.product_orgs?.find(x => x.id.indexOf(String(product.id)) > -1);
                                    let product_locale = optionsConfig?.product_locales?.find(x => x.id.indexOf(String(product.id)) > -1);
                                    for (let option of product.options) {
                                        let option_index = index;
                                        let option_index_name = `option${option_index + 1}`;
                                        let displayStyle = configs.displayStyles[option.name];
                                        let optionName = option.name;
                                        if (optionsConfig.is_locale)
                                        {
                                            if (product_org && product_locale)
                                            {
                                            let findIndex = product_locale.options.findIndex(x => x.name === optionName);
                                            if (findIndex > -1)
                                            {
                                                optionName = product_org?.options[findIndex].name;
                                            }
                                            }
                                        }

                                        // let optionLocales = null;
                                        // if (window.apoOptionLocales?.options)
                                        // {
                                        //     optionLocales = window.apoOptionLocales.options?.trans.find(x => x.names && x.names.includes(optionName));
                                        //     if (optionLocales)
                                        //     {
                                        //         if (!displayStyle)
                                        //         {
                                        //             for(let checkName of optionLocales.names)
                                        //             {
                                        //             if (Object.hasOwn(configs.displayStyles,checkName))
                                        //             {
                                        //                 optionName = checkName;
                                        //             }
                                        //             }
                                                    
                                        //         }
                                        //     }
                                        //     if (!Object.hasOwn(configs.displayStyles,optionName))
                                        //     {
                                        //         let newOptionLocales = window.apoOptionLocales.options?.trans.filter(x => x.names && x.names.find(y => y && y.indexOf(optionName) > -1));
                                        //         let isFindName = false;
                                        //         for(let checkOptionLocales of newOptionLocales)
                                        //         {
                                        //             for(let checkNames of checkOptionLocales.names)
                                        //             {
                                        //                 let checkNameArr = checkNames.split(",");
                                        //                 for(let checkName of checkNameArr)
                                        //                 {
                                        //                     if (Object.hasOwn(configs.displayStyles,checkName))
                                        //                     {
                                        //                     optionName = checkName;
                                        //                     isFindName = true;
                                        //                     optionLocales = checkOptionLocales;
                                        //                     break;
                                        //                     }
                                        //                 }
                                        //                 if (isFindName) break;
                                        //             }
                                        //             if (isFindName) break;
                                        //         }
                                        //     }
                                        // }
                                        if (!displayStyle && window.ap_front_settings && window.ap_front_settings.shop_id && window.ap_front_settings && window.ap_front_settings.shop_id === "82208129315") {
                                            for (let itemOption of AvisOptionsConfig.list_language) {
                                                let optionByLang = itemOption.filter(x => x === option.name);
                                                if (optionByLang.length > 0) {
                                                    for (let itemLang of itemOption) {
                                                        if (configs.displayStyles[itemLang]) optionName = itemLang;
                                                    }
                                                }
                                            }
                                        }
                                        if (!displayStyle) displayStyle = configs.displayStyles[optionName];
                                        let designId = configs.designIds[optionName];
                                        if (!designId) designId = "collection_button";
                                        let displayStyleSwatch = configs.displayStyleSwatchs[optionName];
                                        let sortOption = configs.listOrderOptions[optionName];
                                        let class_stylesoldout = "";
                                        let enableCollection = configs.enableCollection[optionName];
                                        if (!displayStyle) displayStyle = "button";
                                        if (enableCollection == false) {

                                        }
                                        else {
                                            let contentOptionHtml = "";
                                            if (displayStyle == "dropdownlist") {
                                                contentOptionHtml = `<div class="avis-dropdown-selector">
                                            <div class="avis-dropdown-inner">
                                                <div class="avis-swatch-drop-down">
                                                    <span class="avis-dropdown-view-value">${option.values ? option.values[0] : ""} </span>
                                                    <span class="avis-arrow-select"></span>
                                                </div>
                                                <ul class="avis-option-values avis-variants-image avis-dropdown-option" style="display:none">
                                                 ${await renderOptionValue(option, displayStyle, class_stylesoldout, product, option_index_name, option_index, displayStyleSwatch, configs, optionName, product_org, product_locale, optionsConfig)}
                                                </ul>
                                            </div>
                                        </div>`;
                                            }
                                            else {
                                                contentOptionHtml = `<ul class="avis-option-values avis-variants-image">
                                            ${await renderOptionValue(option, displayStyle, class_stylesoldout, product, option_index_name, option_index, displayStyleSwatch, configs, optionName, product_org, product_locale, optionsConfig)}
                                        </ul>`;
                                            }

                                            let isShowOptionName = configs.isOptionname;
                                            html += `<div class="avis-swatch-option avis-style-type-${displayStyle} ${designId ? ("avis-design-" + designId) : ""}" data-option-index="${option_index}" ${configs.sortOption ? ("data-order='" + sortOption + "'") : ""}> 
                                            <legend ${isShowOptionName ? "" : "style='display:none !important'"} class="avis-option-name" data-name="${option.name}">
                                                <label class="avis-option-label">
                                                    ${option.name}<span class="avis-option-value">${option.values ? (": " + option.values[0]) : ""}</span>
                                                </label>
                                            </legend>
                                            ${contentOptionHtml}
                                        </div>`;
                                        }
                                        index = index + 1;
                                    }

                                    return html;
                                }

                                var renderOptionHtml = async function (optionsConfig) {
                                    let product = optionsConfig.product;
                                    let configs = optionsConfig.configs;
                                    let alignContent = configs.align_content;
                                    let class_alignContent = alignContent ? `avis-align-content-${alignContent}` : "";
                                    let first_available_variant = false;
                                    for (let variant of product.variants) {
                                        if (first_available_variant == true && variant.available) {
                                            first_available_variant = variant;
                                        }
                                    }
                                    if (!first_available_variant) first_available_variant = product.variants[0];
                                    let addCartHtml = "";
                                    if (optionsConfig.configs.showAddtocart) {
                                        if (product.available) {
                                            addCartHtml += `<button type="button" class="btn btn-avis-addtocart">${configs.txtAddtocart}</button>`
                                        }
                                        else {
                                            addCartHtml += `<button type="button" class="btn btn-avis-addtocart" disabled="disabled">${configs.txtSoldout}</button>`;
                                        }
                                    }

                                    let optionsHtml = await renderOptions(configs, product, optionsConfig);
                                    let html = `<div class="${class_alignContent}">
                                                <div class="avis-collection-price-wrapper" style="display:none">
                                                    <span class="avis-product_price-container">
                                                        <span class="avis-collection-cur-price">${first_available_variant ? styleOptions.formatMoney(first_available_variant.price) : ""}</span>
                                                        <span class="avis-collection-old-price">${(first_available_variant.compare_at_price > first_available_variant.price) ? styleOptions.formatMoney(first_available_variant.compare_at_price) : ""}</span>
                                                    </span>
                                                </div>
                                                <div class="avis-swatch-variants">
                                                        ${optionsHtml}
                                                </div>
                                                <ul class="avis-variants-price" style="display: none;">
                                                    ${await renderListPrice(product)}
                                                </ul>
                                                ${await renderSelectOption(product)}
                                                ${addCartHtml}
                                            </div> `;
                                    return html;
                                }
                                var renderOptionWrapperHtml = async function (dataOptionApp) {
                                    let configOptions = {
                                        product_orgs: dataOptionApp["product_orgs"],
                                        product_locales: dataOptionApp["product_locales"],
                                        primary_locale: dataOptionApp["primary_locale"],
                                        locale: dataOptionApp["locale"],
                                        is_locale: dataOptionApp["is_locale"],
                                        product: productElement.product,
                                        configs: {
                                            designIds: getListCollectionDesignId,
                                            visibleCollections: visibleCollections,
                                            displayStyles: displayStylesCollection,
                                            displayStyleSwatchs: getListKeyStyleCollectionSwatch,
                                            displayColors: h,
                                            displayColors2: f,
                                            displayColorsImage: b,
                                            displayColorsImageUrl: _,
                                            getListPriorityColor: getListPriorityColor,
                                            getListPriorityImageFile: getListPriorityImageFile,
                                            getListPriorityImageUrl: getListPriorityImageUrl,
                                            style_collection_page_swatch: dataOptionApp.style_collection_page_swatch,
                                            style_collection_page_button: dataOptionApp.style_collection_page_button,
                                            align_content: dataOptionApp.align_content,
                                            showAddtocart: dataOptionApp.appConfig.setting.s_show_button_addcart,
                                            enableTooltip: dataOptionApp.appConfig.setting.s_show_tooltip_collection,
                                            image_width: dataOptionApp.image_width,
                                            image_height: dataOptionApp.image_height,
                                            background_size: dataOptionApp.background_size,
                                            cur_locale: dataOptionApp.cur_locale,
                                            locale: dataOptionApp.locale,
                                            isAjaxcart: dataOptionApp.appConfig.setting.s_is_addcart_ajax,
                                            isOptionname: dataOptionApp.appConfig.setting.s_show_option_name_collection,
                                            styleSoldout: dataOptionApp.out_of_stock,
                                            txtAddtocart: dataOptionApp.appConfig.localization.add_to_cart,
                                            txtAddedtocart: dataOptionApp.appConfig.localization.added_to_cart,
                                            txtSoldout: dataOptionApp.appConfig.localization.sold_out,
                                            txtSelectAnOption: dataOptionApp.select_an_option,
                                            sortOption: dataOptionApp.appConfig.sort_option,
                                            listOrderOptions: v,
                                            show_one_variant: dataOptionApp.show_one_variant_collection,
                                            s_show_limit_number_swatch: dataOptionApp.appConfig.setting.s_show_limit_number_swatch,
                                            s_limit_number_swatch: dataOptionApp.appConfig.setting.s_limit_number_swatch,
                                            enableCollection: getEnableCollection
                                        }
                                    };

                                    return await renderOptionHtml(configOptions);
                                }

                                if (dataOptionApp.cur_locale == dataOptionApp.locale) {
                                    var productCollectionHtml = await renderOptionWrapperHtml(dataOptionApp);
                                    let collectionItem = productElement.element.closest(dataOptionApp.selectors.productCollectionItem);
                                    if (null != collectionItem
                                        && null == collectionItem.querySelector(`.${classSwatchCollectionsContainer}`)
                                        && 0 == collectionItem.querySelectorAll(".avis-swatch-collection-item").length
                                        && null == collectionItem.closest(".avis-swatch-collection-item")) {
                                        collectionItem.classList.add("avis-swatch-collection-item");
                                        var elemCollectionContainer = document.createElement("div");
                                        elemCollectionContainer.classList.add(classSwatchCollectionsContainer),
                                            elemCollectionContainer.setAttribute("avisplus-swatch-product-id", productElement.product.id);
                                        var elemProductInfo = document.createElement("div");
                                        elemProductInfo.classList.add("avis-swatch-product-info"),
                                            elemProductInfo.setAttribute("avis-swatch-product-id", productElement.product.id),
                                            elemProductInfo.setAttribute("avis-swatch-product-url", productElement.product.url),
                                            elemProductInfo.innerHTML = productCollectionHtml,
                                            elemCollectionContainer.append(elemProductInfo),
                                            collectionItem.append(elemCollectionContainer);
                                        let buttonAddCartOfTheme = collectionItem.querySelector(dataOptionApp.selectors.productCollectionHideButtonAddCart);
                                        if (buttonAddCartOfTheme) buttonAddCartOfTheme.style.display = "none";
                                        // Hide options of theme
                                        let optionsOfTheme = collectionItem.querySelector(dataOptionApp.selectors.collectionHiddenOption);
                                        if (optionsOfTheme) optionsOfTheme.style.display = "none"; 

                                        let inputRadio = collectionItem.querySelector(".avis-option-values .avis-option-value-item input:checked");
                                        if (inputRadio) handlePriceTheme(inputRadio);

                                    }
                                    sortOptions(productElement.product.id);
                                    var productVariant = productElement.product.variants.find((function (variant) {
                                        return variant.available
                                    }
                                    ));
                                    return productVariant && document.querySelectorAll('[avis-swatch-product-id="' + productElement.product.id + '"] .avis-swatch-option-select').length
                                        && document.querySelectorAll('[avis-swatch-product-id="' + productElement.product.id + '"]').forEach((function (elemProductInfo) {
                                            if (elemProductInfo.querySelector(".avis-swatch-option-select").value = productVariant.id,
                                                productVariant.options.forEach((function (option, index) {
                                                    null != elemProductInfo.querySelector('.avis-swatch-option[data-option-index="' + index + '"] input[value="' + Object(styleOptions.removeSpecialCharacter)(option) + '"]')
                                                        && elemProductInfo.querySelector('.avis-swatch-option[data-option-index="' + index + '"] input[value="' + Object(styleOptions.removeSpecialCharacter)(option) + '"]').click()
                                                }
                                                )),
                                                0 == dataOptionApp.appConfig.sort_option) {
                                                var optionInput = []
                                                    , product = productElement.product
                                                    , productOptions = productElement.product.options
                                                    , elemOption = elemProductInfo.querySelectorAll(".avis-swatch-option");
                                                let elemOptionIndex = {};
                                                elemOption.forEach((function (elemOptionItem) {
                                                    var elemChecked, optionIndex = elemOptionItem.getAttribute("data-option-index");
                                                    elemOptionIndex[optionIndex] = elemOptionItem;
                                                    optionInput[optionIndex] = null === (elemChecked = elemOptionItem.querySelector('input[type="radio"]:checked')) || ((elemChecked && elemChecked != null) ? elemChecked.value : false)
                                                }
                                                ));
                                                var toggleOutOfStock = function (elemOptionItem, optionIndex, isAvailable) {
                                                    elemOptionItem.querySelectorAll("ul.avis-option-values li.avis-option-value-more").length
                                                        && null != elemOptionItem.querySelector("ul.avis-option-values li.avis-option-value-more")
                                                        || null != elemOptionItem.querySelector("ul.avis-option-values li.avis-option-value-item:nth-child(".concat(optionIndex + 1, ")"))
                                                        && elemOptionItem.querySelector("ul.avis-option-values li.avis-option-value-item:nth-child(".concat(optionIndex + 1, ")")).classList.toggle("avis-out-of-stock", !isAvailable)
                                                };
                                                elemOptionIndex && elemOptionIndex[0] && productOptions[0].values.forEach((function (optionValue, optionIndex) {
                                                    toggleOutOfStock(elemOptionIndex[0], optionIndex, product.variants.some((function (variant) {
                                                        return variant.option1 === optionValue && variant.available
                                                    }
                                                    ))),
                                                        elemOptionIndex[1] && productOptions[1].values.forEach((function (optionValue, optionIndex) {
                                                            toggleOutOfStock(elemOptionIndex[1], optionIndex, product.variants.some((function (variant) {
                                                                return variant.option2 === optionValue && variant.option1 === optionInput[0] && variant.available
                                                            }
                                                            ))),
                                                                elemOptionIndex[2] && productOptions[2].values.forEach((function (optionValue, optionIndex) {
                                                                    toggleOutOfStock(elemOptionIndex[2], optionIndex, product.variants.some((function (variant) {
                                                                        return variant.option3 === optionValue && variant.option1 === optionInput[0] && variant.option2 === optionInput[1] && variant.available
                                                                    }
                                                                    )))
                                                                }
                                                                ))
                                                        }
                                                        ))
                                                }
                                                ))
                                            }
                                        }
                                        )),
                                        productElement.product
                                }
                            }
                            else if (shopIdApoData === "73932832802")
                            {
                                if (null != productElement.element.closest(dataOptionApp.selectors.productCollectionItem)
                                    && null == productElement.element.closest(dataOptionApp.selectors.productCollectionItem).querySelector(`.${classSwatchCollectionsContainer}`)
                                    && 0 == productElement.element.closest(dataOptionApp.selectors.productCollectionItem).querySelectorAll(".avis-swatch-collection-item").length
                                    && null == productElement.element.closest(dataOptionApp.selectors.productCollectionItem).closest(".avis-swatch-collection-item")) {
                                        productElement.element.closest(dataOptionApp.selectors.productCollectionItem).classList.add("avis-swatch-collection-item");
                                    }
                            }
                        }
                    }
                    )));
                }

                if (dataOptionApp.cur_locale == dataOptionApp.locale) {
                    await renderOptionProducts();
                    setTimeout((function () {
                        var t = new Event("Avis.swatch.collection.loaded");
                        window.dispatchEvent(t)
                    }
                    ), 300);
                    addAttrProductSelector();
                    bindEventButtonAddCart();
                    binEventDropdownlistOption();
                    binEventOptionValue()
                    binEventRadioOptionValue(productElements);
                }
            }
            ))
        }()
    }
}
}
if (window.ap_front_settings?.shop_id)
{
    appStyleCollection();
}
else
{
    let index = 0;
    let interCollection = setInterval(function(){
    index++;
    if (window.ap_front_settings?.shop_id)
    {
        clearInterval(interCollection);
        appStyleCollection();
    }
    if (index > 1000)
    {
        clearInterval(interCollection);
    }
    }, 200);
}