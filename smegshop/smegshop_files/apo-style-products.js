function apoStyleProduct() {
  if (window.apo_js_loaded.style_product) return;
  AvisOptionsConfig.featured_product_variant = [
    "variant-selects[id*=variant-selects-template]",
  ];
  AvisOptionsConfig.featured_product_url_block = [
    ".featured-product section[id^='ProductInfo-template--']",
    "section.section-featured-product product-info",
  ];
  let AvisStyleOptions = window.AvisStyleOptions || {};
  window.apo_js_loaded.style_product = true;
  var avisKeyShopifyOption = [
    {
      event: "click",
      elem: "variant-selects .bls__product-color-swatches[data-value='{0}']",
    },
    {
      event: "click",
      elem: ".product-options .product-options__section[data-property='{1}'] .product-options__value[data-escape='{0}']",
    },
  ];
  let apoFunction = {};
  apoFunction.queryProductInfo = async function(locales, ids, isCountryPrimary){
    if (!ids?.length) return "";
    locales = window.apoOptionLocales?.convertLocales(locales);
    let idsArr = [];
    for(let id of ids)
    {
        idsArr.push(`gid://shopify/Product/${id}`);
    }
    let idsString = idsArr.join('","');//country: ${window.Shopify.country.toUpperCase() ?? "EN"},
    let country = ''
    if (window?.ap_front_settings?.shop_id === "94008115548" && isCountryPrimary) {
      country = `,country: VN`;
    }
    let query = `\n        query productDetails @inContext(language: ${locales.toUpperCase()} ${country}) {\n            nodes(ids: ["${idsString}"]) {\n                ... on Product {\n                    id\n                    handle\n                    title\n                    availableForSale\n                    options{\n                        name\n                        optionValues{\n                            name\n                        }\n                    }\n                }\n            }\n        }\n    `;
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

 var avisProducts = (function (e) {
    function n(n) {
      for (var t, r, a = n[0], i = n[1], c = 0, l = []; c < a.length; c++)
        (r = a[c]),
          Object.prototype.hasOwnProperty.call(o, r) && o[r] && l.push(o[r][0]),
          (o[r] = 0);
      for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
      for (u && u(n); l.length; ) l.shift()();
    }
    var t = {},
      o = {
        3: 0,
      };
    function styleOptions(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = {
        i: n,
        l: !1,
        exports: {},
      });
      return (
        e[n].call(o.exports, o, o.exports, styleOptions), (o.l = !0), o.exports
      );
    }
    (styleOptions.e = async function (e) {}),
      (styleOptions.d = function (e, n, t) {
        styleOptions.o(e, n) ||
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t,
          });
      }),
      (styleOptions.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
      }),
      (styleOptions.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (styleOptions.rootExtension = ""),
      (styleOptions.oe = function (e) {
        throw (console.error(e), e);
      });
    var a = (window.AvisSwatchVariantsItem =
        window.AvisSwatchVariantsItem || []),
      i = a.push.bind(a);
    (a.push = n), (a = a.slice());
    for (var c = 0; c < a.length; c++) n(a[c]);
    var u = i;

    styleOptions.getListKeyStyle = function (o) {
      for (var t = {}, n = 0; n < o.length; n++) {
        let diplayStyle = o[n].display_style;
        t[o[n].option_name] = diplayStyle ? diplayStyle : "button";
      }

      return t;
    };
    styleOptions.getListKeyStyleSwatch = function (o) {
      for (var t = {}, n = 0; n < o.length; n++) {
        let data = o[n].display_style_swatch;
        t[o[n].option_name] = data ? data : "variant";
      }

      return t;
    };
    styleOptions.getListKeyStyleCollectionSwatch = function (o) {
      for (var t = {}, n = 0; n < o.length; n++) {
        let data = o[n].display_style_collection_swatch;
        t[o[n].option_name] = data ? data : "variant";
      }

      return t;
    };
    styleOptions.getListColors = function (o) {
      for (var t = [], n = 0; n < o.length; n++)
        for (var e = 0; e < o[n].option_values.length; e++)
          void 0 !== o[n].option_values[e]?.color_1?.color &&
            (t[o[n].option_name + "-" + o[n].option_values[e].value] =
              o[n].option_values[e]?.color_1?.color);
      return Object.assign({}, t);
    };
    styleOptions.getListColors2 = function (o) {
      for (var t = [], n = 0; n < o.length; n++)
        for (var e = 0; e < o[n].option_values.length; e++)
          void 0 !== o[n].option_values[e]?.color_2?.color &&
            (t[o[n].option_name + "-" + o[n].option_values[e].value] =
              o[n].option_values[e]?.color_2?.color);
      return Object.assign({}, t);
    };
    styleOptions.getListColorImage = function (o) {
      for (var t = [], n = 0; n < o.length; n++)
        for (var e = 0; e < o[n].option_values.length; e++)
          void 0 !== o[n].option_values[e]?.image_file &&
            (t[o[n].option_name + "-" + o[n].option_values[e].value] =
              o[n].option_values[e]?.image_file);
      return Object.assign({}, t);
    };
    styleOptions.getListColorImageUrl = function (o) {
      for (var t = [], n = 0; n < o.length; n++)
        for (var e = 0; e < o[n].option_values.length; e++)
          void 0 !== o[n].option_values[e]?.image_url &&
            (t[o[n].option_name + "-" + o[n].option_values[e].value] =
              o[n].option_values[e]?.image_url);
      return Object.assign({}, t);
    };

    styleOptions.getListOrderOptions = function (o) {
      for (var t = [], n = 0; n < o.length; n++) t[o[n].name] = o[n].order;
      return Object.assign({}, t);
    };
    styleOptions.getListKeyEnableCollection = function (option) {
      for (var result = {}, n = 0; n < option.length; n++) {
        let data = option[n].enable_collection ?? false;
        result[option[n].option_name] = data;
      }

      return result;
    };

    styleOptions.getListKeySwatchCollection = function (option) {
      for (var result = {}, n = 0; n < option.length; n++) {
        let data = option[n].display_style_collection;
        result[option[n].option_name] = data ? data : "button";
      }

      return result;
    };

    styleOptions.getListDesignId = function (option) {
      for (var result = {}, n = 0; n < option.length; n++) {
        let data = option[n].product_design_id;
        result[option[n].option_name] = data ? data : "button";
      }

      return result;
    };

    styleOptions.getListCollectionDesignId = function (option) {
      for (var result = {}, n = 0; n < option.length; n++) {
        let data = option[n].collection_design_id;
        result[option[n].option_name] = data ? data : "collection_button";
      }

      return result;
    };

    styleOptions.getEnableCollection = function (option) {
      for (var result = {}, n = 0; n < option.length; n++) {
        let data = option[n].enable_collection;
        result[option[n].option_name] =
          data === false ? false : data ? data : true;
      }

      return result;
    };

    styleOptions.getListPriority = function (o, fieldName) {
      for (var t = [], n = 0; n < o.length; n++)
        for (var e = 0; e < o[n].option_values.length; e++)
          void 0 !== o[n].option_values[e][fieldName] &&
            (t[o[n].option_name + "-" + o[n].option_values[e].value] =
              o[n].option_values[e][fieldName]);
      return Object.assign({}, t);
    };

    styleOptions.imageUrl = function (url, r, t) {
      t = t || !1;
      var a = url.split(".").pop(),
        o = url.lastIndexOf(a) - 1;
      return url.slice(0, o) + "_" + r + url.slice(o);
    };

    styleOptions.toggle = function (elem) {
      elem.style.display =
        "block" != getComputedStyle(elem).display ? "block" : "none";
    };

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
            t[n] = t[n];
        }
      return t.join("");
    };

    styleOptions.formatMoney = function (e, t = true, a = true) {
      var r = AvisStyleOptions.moneyFormat;
      function o(e, r) {
        return void 0 === e ? r : e;
      }
      function n(e, r, t, a, n) {
        if (
          ((r = o(r, 2)),
          (t = o(t, ",")),
          (a = o(a, ".")),
          isNaN(e) || null == e)
        )
          return 0;
        var i = (e = (e / 100).toFixed(r)).split(".");
        return (
          i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + t) +
          (i[1] && (n || parseInt(i[1]) > 0) ? a + i[1] : "")
        );
      }
      "string" == typeof e && (e = e.replace(".", ""));
      var i = "",
        s = /\{\{\s*(\w+)\s*\}\}/,
        c = r;
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
          i = n(e, 2, "'", ".", a);
      }
      return t ? c.replace(s, i) : i;
    };

    styleOptions.configAppPage = function () {
      let config = window.ap_front_settings?.config["config_app"];
      if (config && config.shopify_option) {
        config.shopify_option["app_v"] =
          window.ap_front_settings?.config["app_v"] ?? "v1";
        config.shopify_option["sort_option"] = false;

        return config.shopify_option;
      }
      return {
        app_v: window.ap_front_settings?.config["app_v"] ?? "v1",
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
          s_show_tooltip_product: true,
          s_show_quickview: false,
          s_show_featured_product: false,
          tooltip_product_image: true
        },
        localization: {
          add_to_cart: "Add to cart",
          added_to_cart: "Added to cart",
          sold_out: "Sold out",
        },
      };
    };

    return styleOptions((styleOptions.s = 0));
  })([
    function (e, objectData, styleOptionsPlugin) {
      (styleOptionsPlugin.rootExtension = AvisStyleOptions.rootExtension),
        ("product" != AvisStyleOptions.page &&
          "index" != AvisStyleOptions.page &&
          "collection" != AvisStyleOptions.page &&
          "search" != AvisStyleOptions.page) ||
          renderOptionForProductPage(styleOptionsPlugin);
    },
  ]);

  function renderOptionForProductPage(styleOptions) {
    function hoverTooltip (optionValueSelector) {
      optionValueSelector.addEventListener("mouseover", function (event) {
        let avisContainerSelector = optionValueSelector.closest(
            `.avis-swatch-product-container`
          ),
          avisPosition = avisContainerSelector.getBoundingClientRect(); // t
        let swatchPosition = optionValueSelector.getBoundingClientRect();
        let tooltipSelector = optionValueSelector.querySelector(
          ".apo-swatch-tooltip"
        );
        if (tooltipSelector) 
        {
          document.querySelectorAll(".apo-swatch-tooltip").forEach((item) => {
            item.classList.remove("avis-varians-hover");
          });
          tooltipSelector.classList.add("avis-varians-hover");
        }
        let tooltipArrowSelector =
          optionValueSelector.querySelector(".apo-swatch-arrow");
        let arrowHeight =
          tooltipArrowSelector?.getBoundingClientRect()?.height || 0;
        if (tooltipSelector) {
          let tooltipPosition = tooltipSelector.getBoundingClientRect();
          if (swatchPosition.left < avisPosition.left) {
            tooltipSelector.setAttribute("style","left: 50%");
            return;
          }

          let positionRight = window.innerWidth - avisPosition.right;
          let swatchRight = window.innerWidth - swatchPosition.right;
          let swatchHaft = swatchPosition.width / 2;
          let tooltipHaft = tooltipPosition.width / 2;
          let calPositionLeft =
            swatchPosition.left - avisPosition.left + swatchHaft;
            if (calPositionLeft < tooltipHaft) {
              tooltipSelector.setAttribute("style", `left: calc(50% + ${
                tooltipHaft -
                (swatchPosition.left - avisPosition.left + swatchHaft)
              }px) !important;`);
            } else {
              calPositionLeft = swatchRight - positionRight + swatchHaft;
              if (calPositionLeft < tooltipHaft) {
                tooltipSelector.setAttribute("style", `left: calc(50% - ${
                  tooltipHaft - (swatchRight - positionRight + swatchHaft)
                }px) !important;`);
              } else tooltipSelector.setAttribute("style","left: 50%");
            }

          let tooltipHeight = tooltipPosition.height;
          let calTop = swatchPosition.top - arrowHeight;
          if (tooltipHeight > calTop) {
            tooltipSelector.classList.remove("apo-swatch-tooltip-top");
            tooltipSelector.classList.add("apo-swatch-tooltip-bottom");
            tooltipArrowSelector.classList.remove("apo-swatch-arrow-top");
            tooltipArrowSelector.classList.add("apo-swatch-arrow-bottom");
          } else {
            tooltipSelector.classList.remove("apo-swatch-tooltip-bottom");
            tooltipSelector.classList.add("apo-swatch-tooltip-top");
            tooltipArrowSelector.classList.remove("apo-swatch-arrow-bottom");
            tooltipArrowSelector.classList.add("apo-swatch-arrow-top");
          }
        }
      });
    }

    function applyTooltipImage(showTooltip, showTooltipImage, imgUrl, title)
    {
      if (!showTooltip) return "";
      let html = "";
      html += `<div class='apo-swatch-tooltip avis-option-value-tooltip apo-swatch-tooltip-top'>`
      if (showTooltipImage && imgUrl) html+= `  <span class='apo-tooltip-img' style="background-image: url('${imgUrl}')">&nbsp;</span>`;
      html+= `  <span class='apo-tooltip-title'>${title}</span>`;
      html += `</div>`;
      html += `<span class='apo-swatch-arrow apo-swatch-arrow-top'></span>`

      return html;
    } 

    var apoChangeSelect = null;
    let formProductPage = document.querySelector("form[id^='product_form_']");
    if (formProductPage && window.apoChangeVariation) {
      apoChangeSelect = new window.apoChangeVariation(formProductPage);
    }
    var linkHttp =
      window.Shopify && window.Shopify.routes && window.Shopify.routes.root
        ? window.Shopify.routes.root
        : "/";
    var classSwatchProductPageContainer = "avis-swatch-product-container";
    let optionsSwatchConfig = AvisStyleOptions;
    optionsSwatchConfig.appConfig = styleOptions.configAppPage();
    if (
      !optionsSwatchConfig.appConfig.setting.s_show_product_page ||
      !optionsSwatchConfig.appConfig.app_v ||
      optionsSwatchConfig.appConfig.app_v.indexOf("v2") === -1
    ) {
      return;
    }
    if (!optionsSwatchConfig?.product_ids_option?.length && !optionsSwatchConfig?.style_options?.length && AvisStyleOptions.plan !== "OLD") return;
    if (optionsSwatchConfig.page == "product" && optionsSwatchConfig?.product_ids_option.length > 0 && !optionsSwatchConfig?.product_ids_option.includes(`${optionsSwatchConfig?.product?.id}`)) return;

    renderOptionVariantsProductPage(optionsSwatchConfig);
    let currentVariantId = null;
    function renderOptionVariantsProductPage(dataOptionApp) {
    let setIntervalVariantId =  setInterval(function(){
        let formAddToCart = document.querySelector(AvisStyleOptions.formAddToCart.join(','));
        if (formAddToCart)
        {
          let variantIdSelector = formAddToCart.querySelector('[name="id"]');
          if (variantIdSelector)
          {
            clearInterval(setIntervalVariantId);
            function changePriceByVariant(){
              let variantIdLastest = formAddToCart.querySelector('[name="id"]');
              if (variantIdLastest && variantIdLastest.value !== currentVariantId)
              {
                currentVariantId = variantIdLastest.value;
                let productVariant = dataOptionApp?.product?.variants?.find((item) => item.id == currentVariantId);
                if (productVariant)
                {
                  let listOptionPriceSelector = document.querySelectorAll('.avis-design-swatch_price .avis-option-value-item');
                  listOptionPriceSelector.forEach((item) => {
                    let indexOption = item.closest(".avis-design-swatch_price")?.getAttribute("data-option-index") ?? 0;
                    let optionValue = item.getAttribute('data-value');
                    let optionData = {
                      option1: productVariant.option1,
                      option2: productVariant.option2,
                      option3: productVariant.option3
                    };
                    optionData[`option${parseInt(indexOption)+1}`] = optionValue;
                    let findVariantPrice = dataOptionApp.product.variants.find((item) => item.option1 == optionData.option1 && item.option2 == optionData.option2 && item.option3 == optionData.option3);
                    if (findVariantPrice)
                    {
                      let inputSelector = item.querySelector("input[id^='avis-option-value-item']");
                      if (inputSelector)
                      {
                        inputSelector.setAttribute("data-price", findVariantPrice.price);
                        inputSelector.setAttribute("data-variantid", findVariantPrice.id);
                      }
                      let priceSelector = item.querySelector(".avis-swatch-value-price");
                      if (priceSelector)
                      {
                        priceSelector.innerHTML =  styleOptions.formatMoney(findVariantPrice.price);
                      }
                    }
                  });
                }
              }
            }
            new MutationObserver(() => {
              changePriceByVariant();
              }).observe(variantIdSelector, {
              attributes: true,
              childList: true,
              subtree: true,
            });

            setTimeout(() => {
              changePriceByVariant();
            }, 500);
          }
        }
      }, 200);
      var binEventDropDownList = async function (classContainer) {
          if (!classContainer) {
            classContainer = classSwatchProductPageContainer;
          }
          document.addEventListener("click", function () {
            document
              .querySelectorAll(`.${classContainer} ul.avis-dropdown-option`)
              .forEach(function (t) {
                if ("block" == getComputedStyle(t).display) {
                  Object(styleOptions.toggle)(t);
                }
              });
          });
          document.querySelectorAll(
            `.${classContainer} ul.avis-dropdown-option`
          ).length &&
            (document
              .querySelectorAll(`.${classContainer} .avis-swatch-drop-down`)
              .forEach(function (t) {
                t.addEventListener("click", function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    Object(styleOptions.toggle)(t.nextElementSibling);
                });
              }),
            document
              .querySelectorAll(
                `.${classContainer} ul.avis-dropdown-option li.avis-style-value-dropdownlist`
              )
              .forEach(function (t) {
                t.addEventListener("click", function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    Object(styleOptions.toggle)(
                      t.closest("ul.avis-dropdown-option")
                    ),
                    (t.querySelector('input[type="radio"]').checked = true),
                    t
                      .querySelector('input[type="radio"]')
                      .dispatchEvent(new CustomEvent("change"));
                });
              }));
        },
        createVariantContainer = function () {
          if (
            0 ==
            document.querySelectorAll(`.${classSwatchProductPageContainer}`)
              .length
          ) {
            var swatchVariantContainer = document.createElement("div");
            swatchVariantContainer.classList.add(
              classSwatchProductPageContainer
            );
            let selectorVariant = document.querySelector(
              dataOptionApp.selectors.selectOptionDetail
            );
            if (selectorVariant && !selectorVariant.closest('.avisbls-container')) {
              selectorVariant.parentNode.insertBefore(
                swatchVariantContainer,
                selectorVariant
              );
            }
          }
        },
        hideShopifyVariants = async function () {
          document
            .querySelectorAll(
              dataOptionApp.selectors.selectOptionDetail +
                "," +
                dataOptionApp.selectors.selectOptionDetailExtensionHide
            )
            .forEach(function (t) {
              if (t.closest('.avisbls-container')) return;
              return t.setAttribute("style", "display:none !important"); //t.style.display = "none !important"
            }),
            document.querySelector(".product__sticky dl.price") &&
              (document.querySelector(
                ".product__sticky dl.price"
              ).style.display = "none"),
            document.querySelector(
              ".product__sticky .avis-product-swatch-price"
            ) &&
              (document.querySelector(
                ".product__sticky .avis-product-swatch-price"
              ).style.display = "block"),
            setTimeout(function () {
              document.querySelectorAll(".selector-wrapper select").length &&
                document
                  .querySelectorAll(
                    ".selector-wrapper:not(.product-qty) select"
                  )
                  .forEach(function (t) {
                    return t.setAttribute("style", "display:none !important");
                  });
            }, 300);
        },
        showStock = async function (e) {
          if (
            ("enable" == dataOptionApp.stock || 1 == dataOptionApp.stock) &&
            0 == dataOptionApp.enable_mandatory &&
            "shopify" == e.inventory_management
          ) {
            var o = null == e ? void 0 : e.inventory_quantity;
            void 0 !== o &&
              (document.querySelector(".avis-number-stock-variant").innerText =
                dataOptionApp.stock_message.replace("{number}", o));
          }
        },
        binEventOptionVariants = async function (variants, classContainer) {
          if (!classContainer) classContainer = classSwatchProductPageContainer;
          if (variants.length > 0) {
            var toggleOutOfStocks = function (e) {
              var elemOptions = document.querySelectorAll(
                  `.${classContainer} .avis-swatch-option`
                ),
                optionWidthValues = dataOptionApp.options_with_values,
                toggleOutOfStock = function (elemOption, e, o) {
                  null !=
                    elemOption.querySelector(
                      "ul.avis-option-values li.avis-option-value-item:nth-child(".concat(
                        e + 1,
                        ")"
                      )
                    ) &&
                    elemOption
                      .querySelector(
                        "ul.avis-option-values li.avis-option-value-item:nth-child(".concat(
                          e + 1,
                          ")"
                        )
                      )
                      .classList.toggle("avis-out-of-stock", !o);
                };
              elemOptions &&
                elemOptions[0] &&
                optionWidthValues[0].values.forEach(function (n, u) {
                  toggleOutOfStock(
                    elemOptions[0],
                    u,
                    dataOptionApp.product.variants.some(function (t) {
                      return t.option1 === n && t.available;
                    })
                  ),
                    void 0 !== e[0] &&
                      elemOptions[1] &&
                      optionWidthValues[1].values.forEach(function (n, u) {
                        toggleOutOfStock(
                          elemOptions[1],
                          u,
                          dataOptionApp.product.variants.some(function (t) {
                            return (
                              t.option2 === n &&
                              t.option1 === e[0] &&
                              t.available
                            );
                          })
                        ),
                          void 0 !== e[1] &&
                            elemOptions[2] &&
                            optionWidthValues[2].values.forEach(function (
                              r,
                              n
                            ) {
                              toggleOutOfStock(
                                elemOptions[2],
                                n,
                                dataOptionApp.product.variants.some(function (
                                  t
                                ) {
                                  return (
                                    t.option3 === r &&
                                    t.option1 === e[0] &&
                                    t.option2 === e[1] &&
                                    t.available
                                  );
                                })
                              );
                            });
                      });
                });
            };
            setTimeout(function () {
              dataOptionApp.group_image &&
                dataOptionApp.cur_locale == dataOptionApp.locale &&
                (function () {
                  if (
                    document.querySelectorAll(".avis-variant-color-detail")
                      .length &&
                    dataOptionApp.product.variants.length > 1
                  ) {
                    for (
                      var e = "", o = 0;
                      o < dataOptionApp.product.options.length;
                      o++
                    ) {
                      var c = dataOptionApp.optionsApp.find(function (e) {
                        return e.name == dataOptionApp.product.options[o];
                      });
                      (1 != c.display_style && 2 != c.display_style) ||
                        (e = "option" + (o + 1));
                    }
                    for (
                      var n = dataOptionApp.curVariant[e], u = 0;
                      u <
                      dataOptionApp.selectors.productThumbnailsImageSelector
                        .length;
                      u++
                    )
                      document
                        .querySelectorAll(
                          dataOptionApp.selectors
                            .productThumbnailsImageSelector[u]
                        )
                        .forEach(function (t) {
                          return t.classList.add("avis-sw-media--hide");
                        });
                    for (
                      var l = [],
                        a = [],
                        d = ((u = 0), dataOptionApp.product.variants.length);
                      u < d;
                      u++
                    ) {
                      var i = t.product.variants[u];
                      -1 == l.indexOf(i[e]) &&
                        (l.push(i[e]),
                        i.featured_media &&
                          (a[i.featured_media.position] = i[e]));
                    }
                    if (
                      (a.forEach(function (e, o) {
                        if (void 0 !== e)
                          for (
                            var r = o - 1,
                              c = dataOptionApp.product.media.length;
                            r < c;
                            r++
                          )
                            for (
                              var n = 0;
                              n <
                              dataOptionApp.selectors
                                .productThumbnailsImageSelector.length;
                              n++
                            ) {
                              var u;
                              null ===
                                (u = document.querySelectorAll(
                                  t.selectors.productThumbnailsImageSelector[n]
                                )[r]) ||
                                void 0 === u ||
                                u.setAttribute("data-color", e);
                            }
                      }),
                      -1 != l.indexOf(n))
                    )
                      for (
                        u = 0;
                        u <
                        dataOptionApp.selectors.productThumbnailsImageSelector
                          .length;
                        u++
                      )
                        document
                          .querySelectorAll(
                            dataOptionApp.selectors
                              .productThumbnailsImageSelector[u] +
                              '[data-color="' +
                              Object(styleOptions.removeSpecialCharacter)(n) +
                              '"]'
                          )
                          .forEach(function (t) {
                            return t.classList.remove("avis-sw-media--hide");
                          });
                    for (
                      u = 0;
                      u <
                      dataOptionApp.selectors.productThumbnailsImageSelector
                        .length;
                      u++
                    )
                      document
                        .querySelectorAll(
                          dataOptionApp.selectors
                            .productThumbnailsImageSelector[u]
                        )
                        .forEach(function (t, e) {
                          void 0 === t.getAttribute("data-color") &&
                            (t.classList.remove("avis-sw-media--hide"),
                            t.setAttribute("data-color", "AllColors"));
                        });
                  }
                })();
            }, 300),
              (function () {
                var l = [];
                if (0 == dataOptionApp.appConfig.sort_option) {
                  var o = "",
                    n = "",
                    u = "";
                  l = [];
                  dataOptionApp.product.variants.forEach(function (e) {
                    dataOptionApp.curVariant &&
                      dataOptionApp.curVariant.id &&
                      e.id === dataOptionApp.curVariant.id &&
                      (e, (o = e.option1), (n = e.option2), (u = e.option3));
                  }),
                    toggleOutOfStocks((l = [o, n, u]));
                }
                document
                  .querySelectorAll(
                    `.${classContainer} .avis-option-values .avis-option-value-item input[type="radio"]`
                  )
                  .forEach(function (elemOptionValue) {
                    elemOptionValue.addEventListener("change", function (d) {
                      for (
                        var productForm,
                          elemOption = document.querySelectorAll(
                            `.${classContainer} .avis-swatch-option`
                          ),
                          existOption = true,
                          elemOptionIndex = 0;
                        elemOptionIndex < elemOption.length;
                        elemOptionIndex++
                      )
                        0 ==
                          elemOption[elemOptionIndex].querySelectorAll(
                            'input[type="radio"]:checked'
                          ).length && (existOption = false);
                      var k = elemOptionValue
                          .closest(`.${classContainer} .avis-swatch-option`)
                          .querySelector(".avis-option-name")
                          .getAttribute("data-name"),
                        optionIndex = elemOptionValue
                          .closest(`.${classContainer} .avis-swatch-option`)
                          .getAttribute("data-option-index"),
                        x = elemOptionValue.getAttribute("data-variantid"),
                        mediaId = elemOptionValue.getAttribute("data-mediaid"),
                        O = Object(styleOptions.removeSpecialCharacter)(
                          elemOptionValue.value
                        ),
                        optionValueChecked = elemOptionValue.value,
                        optionIndex1 = parseInt(optionIndex) + 1,
                        optionIndex2 = optionIndex1 + 1;

                      if (
                        window.ap_front_settings?.shop_id === "80577003848" ||
                        window.ap_front_settings?.shop_id === "26860880045"
                      ) {
                        k = k?.toLocaleLowerCase();
                      }

                      let apoOptionShopify = null;
                      apoOptionShopify = document.querySelector(
                        `.product-form__option label.block-swatch__item[title='${O}']`
                      );
                      if (apoOptionShopify) {
                        apoOptionShopify.click();
                        apoOptionShopify.dispatchEvent(
                          new CustomEvent("click")
                        );
                        if (
                          window.ap_front_settings?.shop_id === "6122176594"
                        ) {
                          return;
                        }
                      }

                      function triggerThemeOptions(){
                        void 0 !==
                        (null ===
                          (productForm = elemOptionValue.closest(
                            'form[action*="/cart/add"]'
                          )) || void 0 === productForm
                          ? void 0
                          : productForm.querySelectorAll(
                              dataOptionApp.selectors.singleOptionSelector
                            )[optionIndex]) &&
                        ((elemOptionValue
                          .closest('form[action*="/cart/add"]')
                          .querySelectorAll(
                            dataOptionApp.selectors.singleOptionSelector
                          )[optionIndex].value = optionValueChecked),
                        setTimeout(function () {
                          elemOptionValue
                            .closest('form[action*="/cart/add"]')
                            .querySelectorAll(
                              dataOptionApp.selectors.singleOptionSelector
                            )
                            [optionIndex].dispatchEvent(
                              new Event("change", {
                                bubbles: !0,
                              })
                            );
                        }, 300)),
                        // Trigger checked option value of shopify variant (With multi template theme)
                        setTimeout(function () {
                          null !=
                            document.getElementById("SingleOptionSelector-0") &&
                            document
                              .getElementById("SingleOptionSelector-0")
                              .dispatchEvent(new CustomEvent("change")),
                            null !=
                              document.getElementById(
                                "SingleOptionSelector-1"
                              ) &&
                              document
                                .getElementById("SingleOptionSelector-1")
                                .dispatchEvent(new CustomEvent("change")),
                            null !=
                              document.getElementById(
                                "SingleOptionSelector-2"
                              ) &&
                              document
                                .getElementById("SingleOptionSelector-2")
                                .dispatchEvent(new CustomEvent("change")),
                            null !=
                              document.getElementById(
                                "SingleOptionSelector-0"
                              ) &&
                              document
                                .getElementById("SingleOptionSelector-0")
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ),
                            null !=
                              document.getElementById(
                                "SingleOptionSelector-1"
                              ) &&
                              document
                                .getElementById("SingleOptionSelector-1")
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ),
                            null !=
                              document.getElementById(
                                "SingleOptionSelector-2"
                              ) &&
                              document
                                .getElementById("SingleOptionSelector-2")
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ),
                            null !=
                              document.getElementById(
                                "ProductSelect-product-template-option-0"
                              ) &&
                              document
                                .getElementById(
                                  "ProductSelect-product-template-option-0"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ),
                            null !=
                              document.getElementById(
                                "ProductSelect-product-template-option-1"
                              ) &&
                              document
                                .getElementById(
                                  "ProductSelect-product-template-option-1"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ),
                            null !=
                              document.getElementById(
                                "ProductSelect-product-template-option-2"
                              ) &&
                              document
                                .getElementById(
                                  "ProductSelect-product-template-option-2"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                );
                          let variantOptionSelector = null;

                          try {
                            let variantShopifyOption = document.querySelector(
                              `.product_variant_options .product-selector-option ul .variant-option input.product-option[value='${O}']`
                            );
                            variantShopifyOption && (variantShopifyOption.click(), variantShopifyOption.dispatchEvent(new Event("change")));
                          } catch (t) {
                            console.log(t);
                          }

                          try {
                            let variantShopifyOption = document.querySelector(
                              `div[data-product-options] .swatch-items-wrapper input[data-product-variant][value='${O}']`
                            );
                            variantShopifyOption && (variantShopifyOption.click(), variantShopifyOption.dispatchEvent(new Event("change")));
                          } catch (t) {
                            console.log(t);
                          }

                           try {
                             let variantColorInput = document.querySelector(
                               `.single-option-selector__wrap-option input[name="${k.toLowerCase()}"][value="${O}"]`
                             );
                             variantColorInput && (variantColorInput.click(), variantColorInput.dispatchEvent(new Event("change")));
                           } catch (t) {
                             console.log(t);
                           }

                           try {
                            variantOptionSelector = document.querySelector(
                              `.option-group__container[data-group-index='${optionIndex}'] .variant-option button[aria-label='${O}']`
                            );
                            if (variantOptionSelector)
                            {
                              let inputOption = variantOptionSelector.closest("label.variant-option")?.querySelector("input[type='radio']");
                              if (inputOption)
                              {
                                inputOption.checked = true;
                                inputOption.dispatchEvent(new Event("change"));
                              }
                            }

                            variantOptionSelector = document.querySelector(
                              `div[data-product-option='option${optionIndex1}'] button[data-option-value='${O}']`
                            );
                            if (variantOptionSelector)
                            {
                              variantOptionSelector.click();
                              return;
                            }
                          } catch (t) {
                            console.log(t);
                          }

                          try {
                            for (let keyItem of avisKeyShopifyOption) {
                              let selectorOption = document.querySelector(
                                keyItem.elem.replace("{0}", O).replace("{1}", k)
                              );
                              if (selectorOption) {
                                if (keyItem.event === "click") {
                                  selectorOption.click();
                                }
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            let variantSelector = document.querySelector(
                              'button.popover-listbox__option[value="' +
                                O +
                                '"]'
                            );
                            variantSelector &&
                              (variantSelector.click(),
                              variantSelector.dispatchEvent(
                                new Event("change")
                              ));
                          } catch (t) {
                            console.log(t);
                          }

                          let optionSelectData = document.querySelector(
                            '.select-popout__option[data-value="' + O + '"]'
                          );
                          try {
                            if (null != optionSelectData) {
                              if (
                                window.ap_front_settings?.shop_id ===
                                "75064181053"
                              ) {
                                optionSelectData.click();
                                return;
                              } else {
                                optionSelectData.parentElement.click();
                                optionSelectData.dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                );
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            optionSelectData = document.querySelector(
                              `[data-node-type='add-to-cart-option-list'] select[name='option${optionIndex1}']`
                            );
                            if (optionSelectData) {
                              let optionsSelect =
                                optionSelectData.querySelectorAll("option");
                              let valueChecked = optionValueChecked;
                              for (let item of optionsSelect) {
                                if (item.innerText === optionValueChecked) {
                                  valueChecked = item.value;
                                }
                              }
                              optionSelectData.value = valueChecked; //optionValueChecked ? optionValueChecked?.toLocaleLowerCase()?.split(" ").join("-") : "";
                              if (
                                window.ap_front_settings?.shop_id ===
                                  "87942856985" &&
                                apoChangeSelect
                              ) {
                                apoChangeSelect?.changeVariation();
                              }
                            }
                            optionSelectData = document.querySelector(
                              `.product_variant_options .product-selector-option select.option-${optionIndex1}`
                            );
                            if (optionSelectData) {
                              optionSelectData.value = optionValueChecked;
                              optionSelectData.dispatchEvent(
                                new CustomEvent("change")
                              );
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'variant-selects select.product-meta-option[name="options[' +
                                  k +
                                  ']"]'
                              ) &&
                              ((document.querySelector(
                                'variant-selects select.product-meta-option[name="options[' +
                                  k +
                                  ']"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  'variant-selects select.product-meta-option[name="options[' +
                                    k +
                                    ']"]'
                                )
                                .dispatchEvent(new CustomEvent("change")));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.single-option-selector[name="options[' +
                                  k +
                                  ']"]'
                              ) &&
                              ((document.querySelector(
                                '.single-option-selector[name="options[' +
                                  k +
                                  ']"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.single-option-selector[name="options[' +
                                    k +
                                    ']"]'
                                )
                                .dispatchEvent(new CustomEvent("change")));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            let variantElem = document.querySelector(
                              '.product-form__input .product-meta-option.select__select[data-name="options[' +
                              k.charAt(0).toUpperCase() + k.slice(1) +
                              ']"]');
                            null != variantElem &&
                              (variantElem.value = optionValueChecked,
                              variantElem.dispatchEvent(new Event("change", { bubbles: true })));

                              if (["50785288399", "84853260614", "65634566189", "65285226672"].includes(window.ap_front_settings.shop_id)) {
                                const variantOptionSelector = document.querySelector('.product-form__input .select__select[name="options[' + k.charAt(0).toUpperCase() + k.slice(1) + ']"]');
  
                                if (variantOptionSelector) {
                                  variantOptionSelector.value = optionValueChecked;
                                  variantOptionSelector.dispatchEvent(new Event('change', { bubbles: true }));
  
                                  const enforceValue = () => {
                                    if (variantOptionSelector.value !== optionValueChecked) {
                                      variantOptionSelector.value = optionValueChecked;
                                      variantOptionSelector.dispatchEvent(new Event('change', { bubbles: true }));
                                    }
                                  };
  
                                  variantOptionSelector.addEventListener('change', enforceValue);
                                  variantOptionSelector.addEventListener('input', enforceValue);
  
                                  const observer = new MutationObserver(() => {
                                    enforceValue();
                                  });
  
                                  observer.observe(variantOptionSelector, { attributes: true, childList: false, subtree: false });
  
                                  setTimeout(() => {
                                    observer.disconnect();
                                    variantOptionSelector.removeEventListener('change', enforceValue);
                                    variantOptionSelector.removeEventListener('input', enforceValue);
                                  }, 5000); 
                                }
                              }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(".single-option-selector input.bcpo-front-button-option") &&
                              (document.querySelector('.single-option-selector input.bcpo-front-button-option[value="' + O +'"]').click(),
                              document.querySelector('.single-option-selector input.bcpo-front-button-option[value="' + O +'"]').dispatchEvent(new Event("change")));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(".single-option-selector input.bcpo-front-image-option") &&
                              (document.querySelector('.single-option-selector input.bcpo-front-image-option[value="' + O +'"]').click(),
                              document.querySelector('.single-option-selector input.bcpo-front-image-option[value="' + O +'"]').dispatchEvent(new Event("change")));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                "fieldset.product-variant-picker-block .variant-input input.custom-input"
                              ) &&
                              (document
                                .querySelector(
                                  'fieldset.product-variant-picker-block .variant-input input.custom-input[name="options[' +
                                    k +
                                    ']"][value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  'fieldset.product-variant-picker-block .variant-input input.custom-input[name="options[' +
                                    k +
                                    ']"][value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(new Event("change")));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.js-single-option-selector[data-index="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.js-single-option-selector[data-index="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.js-single-option-selector[data-index="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(new Event("change")));
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.variant-picker-block .selector-wrapper.product-form__item select[data-index="option' +
                                optionIndex1 +
                                '"]'
                            ) &&
                            ((document.querySelector(
                              '.variant-picker-block .selector-wrapper.product-form__item select[data-index="option' +
                                optionIndex1 +
                                '"]'
                            ).value = optionValueChecked),
                            document
                              .querySelector(
                                '.variant-picker-block .selector-wrapper.product-form__item select[data-index="option' +
                                  optionIndex1 +
                                  '"]'
                              )
                              .dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              )),
                            null !=
                              document.getElementById(
                                "Option-product-" + optionIndex
                              ) &&
                              ((document.getElementById(
                                "Option-product-" + optionIndex
                              ).value = j),
                              document
                                .getElementById("Option-product-" + optionIndex)
                                .dispatchEvent(new CustomEvent("change")));

                          try {
                            null !=
                              document.querySelector(
                                '.product-form__option[data-selector-type="select"] select'
                              ) &&
                              ((document.querySelector(
                                '.product-form__option[data-selector-type="select"] select'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.product-form__option[data-selector-type="select"] select'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }

                          try {
                            null !=
                              document.querySelector(
                                '#nt_variations .swatches-select[data-option-index="' +
                                  optionIndex +
                                  '"] a[data-val="' +
                                  O.toLowerCase().replaceAll(" ", "-") +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '#nt_variations .swatches-select[data-option-index="' +
                                    optionIndex +
                                    '"] a[data-val="' +
                                    O.toLowerCase().replaceAll(" ", "-") +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '#nt_variations .swatches-select[data-option-index="' +
                                    optionIndex +
                                    '"] a[data-val="' +
                                    O.toLowerCase().replaceAll(" ", "-") +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.block-swatch__radio[name="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.block-swatch__radio[name="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product-options__section[data-property="' +
                                  k.toLowerCase() +
                                  '"] .product-options__value[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.product-options__section[data-property="' +
                                    k.toLowerCase() +
                                    '"] .product-options__value[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product-options[data-section-name="' +
                                  k +
                                  '"] .js-option[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.product-options[data-section-name="' +
                                    k +
                                    '"] .js-option[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.product-options[data-section-name="' +
                                    k +
                                    '"] .js-option[data-value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.option-selectors .option-selector[data-option-index="' +
                                  optionIndex +
                                  '"] .cc-select'
                              ) &&
                              document
                                .querySelector(
                                  '.option-selectors .option-selector[data-option-index="' +
                                    optionIndex +
                                    '"] .cc-select'
                                )
                                .click(),
                              setTimeout(function () {
                                null !=
                                  document.querySelector(
                                    '.option-selectors .option-selector[data-option-index="' +
                                      optionIndex +
                                      '"] .cc-select__listbox .cc-select__option.js-option[data-value="' +
                                      O +
                                      '"][role=option]'
                                  ) &&
                                  (document
                                    .querySelector(
                                      '.option-selectors .option-selector[data-option-index="' +
                                        optionIndex +
                                        '"] .cc-select__listbox .cc-select__option.js-option[data-value="' +
                                        O +
                                        '"][role="option"]'
                                    )
                                    .click(),
                                  document
                                    .querySelector(
                                      '.option-selectors .option-selector[data-option-index="' +
                                        optionIndex +
                                        '"] .cc-select__listbox .cc-select__option.js-option[data-value="' +
                                        O +
                                        '"][role=option]'
                                    )
                                    .dispatchEvent(
                                      new Event("click", {
                                        bubbles: !0,
                                      })
                                    ));
                              }, 300);
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            // Theme Boost
                            let variantsWrapper = document.querySelector(
                              '.product-detail__options .option-selector[data-index="option' +
                                optionIndex1 +
                                '"] > .cc-select'
                            );
                            if (variantsWrapper != null) {
                              let currentSelected =
                                variantsWrapper.querySelector(
                                  ".cc-select__listbox .cc-select__option[aria-selected='true']"
                                );
                              let newOptionSelected =
                                variantsWrapper.querySelector(
                                  '.cc-select__listbox .cc-select__option[data-value="' +
                                    O +
                                    '"]'
                                );
                              if (
                                newOptionSelected &&
                                currentSelected &&
                                newOptionSelected !== currentSelected
                              ) {
                                const detail = {
                                  selectedValue: optionValueChecked,
                                };
                                newOptionSelected.setAttribute(
                                  "aria-selected",
                                  "true"
                                );
                                currentSelected.setAttribute(
                                  "aria-selected",
                                  "false"
                                );
                                variantsWrapper.dispatchEvent(
                                  new CustomEvent("change", {
                                    bubbles: true,
                                    detail,
                                  })
                                );
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            // Theme Boost
                            let variantsWrapper = document.querySelector('.option-selectors .option-selector .cc-select');
                            if (variantsWrapper != null) {
                              let currentSelected =
                                variantsWrapper.querySelector(
                                  ".cc-select__listbox .cc-select__option[aria-selected='true']"
                                );
                              let newOptionSelected =
                                variantsWrapper.querySelector(
                                  '.cc-select__listbox .cc-select__option[data-value="' +
                                    O +
                                    '"]'
                                );
                              if (
                                newOptionSelected &&
                                currentSelected &&
                                newOptionSelected !== currentSelected
                              ) {
                                const detail = {
                                  selectedValue: optionValueChecked,
                                };
                                newOptionSelected.setAttribute(
                                  "aria-selected",
                                  "true"
                                );
                                currentSelected.setAttribute(
                                  "aria-selected",
                                  "false"
                                );
                                variantsWrapper.dispatchEvent(
                                  new CustomEvent("change", {
                                    bubbles: true,
                                    detail,
                                  })
                                );
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.pt-options-swatch a[data-value="' + O + '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.pt-options-swatch a[data-value="' + O + '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.selector-wrapper[data-select-position="' +
                                  optionIndex1 +
                                  '"] input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.selector-wrapper[data-select-position="' +
                                    T +
                                    '"] input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.option-selector[data-option-index="' +
                                  optionIndex +
                                  '"] .option-selector__btns input.opt-btn[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.option-selector[data-option-index="' +
                                    optionIndex +
                                    '"] .option-selector__btns input.opt-btn[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            let findOptionSelector = document.querySelector(`variant-picker .option-selector:nth-child(${optionIndex1}):not([data-option-index]) .option-selector__btns input.opt-btn[value="${O}"]`);
                            if (findOptionSelector)
                            {
                              findOptionSelector.click();
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.option-selector[data-index="option' +
                                  optionIndex1 +
                                  '"] .option-selector__btns input.opt-btn[value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.option-selector[data-index="option' +
                                    optionIndex1 +
                                    '"] .option-selector__btns input.opt-btn[value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.option-selector[data-index="option' +
                                    optionIndex1 +
                                    '"] .option-selector__btns input.opt-btn[value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                ".product-options .product-option.form-group[data-product-option-" +
                                  optionIndex +
                                  '] .form-check input.form-check-input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  ".product-options .product-option.form-group[data-product-option-" +
                                    optionIndex +
                                    '] .form-check input.form-check-input[value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  ".product-options .product-option.form-group[data-product-option-" +
                                    optionIndex +
                                    '] .form-check input.form-check-input[value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          // Click variant with dawn theme
                          try {
                            null !=
                              document.querySelector(
                                'input[value="' + O + '"][name="' + k + '"]'
                              ) &&
                              (document
                                .querySelector(
                                  'input[value="' + O + '"][name="' + k + '"]'
                                )
                                .click(),
                              (document.querySelector(
                                'input[value="' + O + '"][name="' + k + '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  'input[value="' + O + '"][name="' + k + '"]'
                                )
                                .dispatchEvent(
                                  new Event("change", { bubbles: true })
                                ),
                              document
                                .querySelector(
                                  'input[value="' + O + '"][name="' + k + '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ),
                              setTimeout(function () {
                                var e,
                                  o,
                                  c =
                                    null ===
                                      (e = elemOptionValue.closest(
                                        'form[action*="/cart/add"]'
                                      )) ||
                                    void 0 === e ||
                                    null ===
                                      (o = e.querySelector('[name="id"]')) ||
                                    void 0 === o
                                      ? void 0
                                      : o.value;
                                dataOptionApp.curVariant =
                                  dataOptionApp.product.variants.find(function (
                                    t
                                  ) {
                                    return t.id == c;
                                  });
                                if (dataOptionApp.curVariant) {
                                  mediaId =
                                    dataOptionApp.curVariant?.featured_media
                                      ?.id;
                                  if (!mediaId) mediaId = null;
                                  else {
                                    mediaId &&
                                      document.querySelector(
                                        ".thumbItem.slick-slide[data-media-id*='main-" +
                                          mediaId +
                                          "']"
                                      ) &&
                                      document
                                        .querySelector(
                                          ".thumbItem.slick-slide[data-media-id*='main-" +
                                            mediaId +
                                            "']"
                                        )
                                        .click();
                                  }
                                }
                              }, 300),
                              mediaId &&
                                document.querySelector(
                                  ".thumbItem.slick-slide[data-media-id*='main-" +
                                    mediaId +
                                    "']"
                                ) &&
                                document
                                  .querySelector(
                                    ".thumbItem.slick-slide[data-media-id*='main-" +
                                      mediaId +
                                      "']"
                                  )
                                  .click()); // theme:Petmate-index-3
                          } catch (t) {
                            console.log(t);
                          }

                          // theme Dawn 15.2.0
                          try {
                            null !=
                              document.querySelector(
                                `section:has(.${classContainer}) ` + 'input[value="' + O + '"][name*="' + k + '"]'
                              ) &&
                              (document
                                .querySelector(
                                  `section:has(.${classContainer}) ` + 'input[value="' + O + '"][name*="' + k + '"]'
                                )
                                .click(),
                                (document.querySelector(
                                  `section:has(.${classContainer}) ` + 'input[value="' + O + '"][name*="' + k + '"]'
                                ).value = optionValueChecked),
                                document
                                  .querySelector(
                                    `section:has(.${classContainer}) ` + 'input[value="' + O + '"][name*="' + k + '"]'
                                  )
                                  .dispatchEvent(
                                    new Event("change", { bubbles: true })
                                  ),
                                document
                                  .querySelector(
                                    `section:has(.${classContainer}) ` + 'input[value="' + O + '"][name*="' + k + '"]'
                                  )
                                  .dispatchEvent(
                                    new Event("click", {
                                      bubbles: !0,
                                    })
                                  ));
                          } catch (t) {
                            console.log(t);
                          }
                          
                          try {
                            null !=
                              document.querySelector(
                                '.swatches-wrapper .swatch[data-option-index="' +
                                  optionIndex +
                                  '"] input.wetheme-custom-radio[value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.swatches-wrapper .swatch[data-option-index="' +
                                    optionIndex +
                                    '"] input.wetheme-custom-radio[value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.swatches-wrapper .swatch[data-option-index="' +
                                    optionIndex +
                                    '"] input.wetheme-custom-radio[value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product__variants-swatches .swatch[data-option-index="' +
                                  optionIndex1 +
                                  '"] .swatch-element input.swatches__form--input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.product__variants-swatches .swatch[data-option-index="' +
                                    optionIndex1 +
                                    '"] .swatch-element input.swatches__form--input[value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.product__variants-swatches .swatch[data-option-index="' +
                                    optionIndex1 +
                                    '"] .swatch-element input.swatches__form--input[value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                ".product-options fieldset.option-selector:nth-child(" +
                                  optionIndex1 +
                                  ') .option-selector__btns input.opt-btn[value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  ".product-options fieldset.option-selector:nth-child(" +
                                    optionIndex1 +
                                    ') .option-selector__btns input.opt-btn[value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  ".product-options fieldset.option-selector:nth-child(" +
                                    optionIndex1 +
                                    ') .option-selector__btns input.opt-btn[value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product-form__option button[data-button="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.product-form__option button[data-button="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.option-value-input[value="' + O + '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.option-value-input[value="' + O + '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null != document.querySelector('variant-radios fieldset span.variants-parent[tooltip="' + O + '"] label') &&
                              (document.querySelector('variant-radios fieldset span.variants-parent[tooltip="' + O + '"] label').click(),
                              document.querySelector('variant-radios fieldset span.variants-parent[tooltip="' + O + '"] label').dispatchEvent(
                                new Event("click", {
                                  bubbles: !0,
                                })
                              ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null != document.querySelector('ul.product-options .product-option-wrapper ul li input[value="' + O + '"]') &&
                              (document.querySelector('ul.product-options .product-option-wrapper ul li input[value="' + O + '"]').click(),
                              document.querySelector('ul.product-options .product-option-wrapper ul li input[value="' + O + '"]').dispatchEvent(
                                new Event("click", {
                                  bubbles: !0,
                                })
                              ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product__swatches span[data-swatch-option="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.product__swatches span[data-swatch-option="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.pf-option-swatches  .pf-vs-radio[data-option-name="' +
                                  k +
                                  '"] input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.pf-option-swatches  .pf-vs-radio[data-option-name="' +
                                    k +
                                    '"] input[value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.pf-option-swatches  .pf-vs-radio[data-option-name="' +
                                    k +
                                    '"] input[value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.option-values input.option-value-input[value="' +
                                  O +
                                  '"][data-product-option="option' +
                                  optionIndex1 +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.option-values input.option-value-input[value="' +
                                    O +
                                    '"][data-product-option="option' +
                                    T +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.tt-options-swatch a[data-value="' + O + '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.tt-options-swatch a[data-value="' + O + '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.tt-options-swatch a[data-value="' + O + '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product-options__option[data-product-option="' +
                                  k +
                                  '"] .product-option-item[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.product-options__option[data-product-option="' +
                                    k +
                                    '"] .product-option-item[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.product-options__option[data-product-option="' +
                                    k +
                                    '"] .product-option-item[data-value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.pg__option[data-index="' +
                                  optionIndex +
                                  '"] a[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.pg__option[data-index="' +
                                    C +
                                    '"] a[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.pg__option[data-index="' +
                                    optionIndex +
                                    '"] a[data-value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            if (
                              window.ap_front_settings?.shop_id ===
                              "88267751709"
                            ) {
                              let nameOption = `${k}-${optionIndex1}`;
                              null !=
                                document.querySelector(
                                  '.product-form__input input[name*="' +
                                    nameOption +
                                    '"][value="' +
                                    O +
                                    '"]'
                                ) &&
                                document
                                  .querySelector(
                                    '.product-form__input input[name*="' +
                                      nameOption +
                                      '"][value="' +
                                      O +
                                      '"]'
                                  )
                                  .click();
                            } else {
                              variantOptionSelector = document.querySelector('.product-form__input input[name*="' + k + '"][value="' + O + '"]');
                              if (variantOptionSelector) {
                                variantOptionSelector.click();
                                if (["50785288399", "84853260614"].includes(window.ap_front_settings.shop_id)) {
                                  const interval = setInterval(() => {
                                    const variantOptionSelector = document.querySelector('.product-form__input input[name*="' + k + '"][value="' + O + '"]');
                                
                                    if (variantOptionSelector) {
                                      variantOptionSelector.checked = true;
                                
                                      requestAnimationFrame(() => {
                                        if (typeof variantOptionSelector.dispatchEvent === 'function') {
                                          variantOptionSelector.dispatchEvent(new Event('input', { bubbles: true }));
                                          variantOptionSelector.dispatchEvent(new Event('change', { bubbles: true }));
                                        }
                                      });
                                
                                      clearInterval(interval);
                                    }
                                  }, 200);
                                }
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'input.form-radio[value="' + O + '"]'
                              ) &&
                              document
                                .querySelector(
                                  'input.form-radio[value="' + O + '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.product-details__option-wrapper select[data-product-option="' +
                                optionIndex +
                                '"]'
                            ) &&
                            ((document.querySelector(
                              '.product-details__option-wrapper select[data-product-option="' +
                                optionIndex +
                                '"]'
                            ).value = optionValueChecked),
                            document
                              .querySelector(
                                '.product-details__option-wrapper select[data-product-option="' +
                                  optionIndex +
                                  '"]'
                              )
                              .dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              ));
                          try {
                            null !=
                              document.querySelector(
                                '.product-options__option[data-product-option="' +
                                  k +
                                  '"] select.sf-product-variant-option-dropdown'
                              ) &&
                              ((document.querySelector(
                                '.product-options__option[data-product-option="' +
                                  k +
                                  '"] select.sf-product-variant-option-dropdown'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.product-options__option[data-product-option="' +
                                    k +
                                    '"] select.sf-product-variant-option-dropdown'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                ".product-block--variant_picker .variant-picker .options-selector .option-dropdown:nth-child(" +
                                  optionIndex2 +
                                  ") select.input-select__select"
                              ) &&
                              ((document.querySelector(
                                ".product-block--variant_picker .variant-picker .options-selector .option-dropdown:nth-child(" +
                                  optionIndex2 +
                                  ") select.input-select__select"
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  ".product-block--variant_picker .variant-picker .options-selector .option-dropdown:nth-child(" +
                                    optionIndex2 +
                                    ") select.input-select__select"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                "form.f8pr.cart-initialized .no-zindex p.no-js-hidden.has-select.done:nth-child(" +
                                  optionIndex2 +
                                  ") .select-wrapper select"
                              ) &&
                              ((document.querySelector(
                                "form.f8pr.cart-initialized .no-zindex p.no-js-hidden.has-select.done:nth-child(" +
                                  optionIndex2 +
                                  ") .select-wrapper select"
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  "form.f8pr.cart-initialized .no-zindex p.no-js-hidden.has-select.done:nth-child(" +
                                    optionIndex2 +
                                    ") .select-wrapper select"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.getElementById(
                                "option-" + k.toLowerCase()
                              ) &&
                              ((document.getElementById(
                                "option-" + k.toLowerCase()
                              ).value = j),
                              document
                                .getElementById("option-" + k.toLowerCase())
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.getElementById(
                              "data-variant-option-" + optionIndex
                            ) &&
                            ((document.getElementById(
                              "data-variant-option-" + optionIndex
                            ).value = optionValueChecked),
                            setTimeout(function () {
                              document
                                .getElementById(
                                  "data-variant-option-" + optionIndex
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                );
                            }, 300));
                          try {
                            null !=
                              document.querySelector(
                                'input.product-variant__input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'input.product-variant__input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.radios--container .radios--input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.radios--container .radios--input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.selector-wrapper li a[data-value="' + O + '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.selector-wrapper li a[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.selector-wrapper li a[data-value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            const variantRadio = document.querySelector('.variant-swatch__radio[data-option-position="' + optionIndex1 + '"][aria-label="' + O + '"]');
                            const blockRadio = document.querySelector('.block-swatch__radio[data-option-position="' + optionIndex2 + '"][aria-label="' + O + '"]');
                            if (variantRadio !== null) {
                                variantRadio.click();
                            }
                            if (blockRadio !== null) {
                                blockRadio.click();
                            }
                          } catch (t) {
                              console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.swatch-items-wrapper .swatch-element input[name="option-' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.swatch-items-wrapper .swatch-element input[name="option-' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.swatch-items-wrapper .swatch-element input[name="option-' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.single-option-selector[data-index="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.single-option-selector[data-index="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.single-option-selector[data-variant-option-index="' +
                                optionIndex +
                                '"]'
                            ) &&
                            ((document.querySelector(
                              '.single-option-selector[data-variant-option-index="' +
                                optionIndex +
                                '"]'
                            ).value = optionValueChecked),
                            document
                              .querySelector(
                                '.single-option-selector[data-variant-option-index="' +
                                  optionIndex +
                                  '"]'
                              )
                              .dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              )),
                            null !=
                              document.querySelector(
                                '.options-selection__select-wrapper select.options-selection__input-select[data-variant-option-index="' +
                                  optionIndex +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.options-selection__select-wrapper select.options-selection__input-select[data-variant-option-index="' +
                                  optionIndex +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.options-selection__select-wrapper select.options-selection__input-select[data-variant-option-index="' +
                                    optionIndex +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                )),
                            null !=
                              document.querySelector(
                                '.single-option-selector[data-option="option' +
                                  optionIndex1 +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.single-option-selector[data-option="option' +
                                  optionIndex1 +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.single-option-selector[data-option="option' +
                                    optionIndex1 +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          try {
                            null !=
                              document.querySelector(
                                '.pf-variant-radio input[value="' + O + '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.pf-variant-radio input[value="' + O + '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.disclosure--option-link[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.disclosure--option-link[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'variant-radios fieldset input[name="' +
                                  k +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'variant-radios fieldset input[name="' +
                                    k +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.popout-list__option[data-value="' + O + '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.popout-list__option[data-value="' + O + '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.color-swatch__radio[data-option-position="' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.color-swatch__radio[data-option-position="' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.option-selector[data-option-number="' +
                                optionIndex1 +
                                '"]'
                            ) &&
                            ((document.querySelector(
                              '.option-selector[data-option-number="' +
                                optionIndex1 +
                                '"]'
                            ).value = optionValueChecked),
                            document
                              .querySelector(
                                '.option-selector[data-option-number="' +
                                  optionIndex1 +
                                  '"]'
                              )
                              .dispatchEvent(new CustomEvent("change"))),
                            null !=
                              document.querySelector(
                                '.product-form__single-selector[data-option-position="' +
                                  optionIndex1 +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.product-form__single-selector[data-option-position="' +
                                  optionIndex1 +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.product-form__single-selector[data-option-position="' +
                                    optionIndex1 +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          try {
                            null !=
                              document.querySelector(
                                '.swatches__container[data-option-index="' +
                                  optionIndex1 +
                                  '"] input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.swatches__container[data-option-index="' +
                                    optionIndex1 +
                                    '"] input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              'select.single-option-selector__radio[data-index="option' +
                                optionIndex1 +
                                '"]'
                            ) &&
                            ((document.querySelector(
                              'select.single-option-selector__radio[data-index="option' +
                                optionIndex1 +
                                '"]'
                            ).value = optionValueChecked),
                            document
                              .querySelector(
                                'select.single-option-selector__radio[data-index="option' +
                                  optionIndex1 +
                                  '"]'
                              )
                              .dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              ));
                          try {
                            null !=
                              document.getElementById(
                                "product-" +
                                  k.toLowerCase() +
                                  ".product__variant"
                              ) &&
                              ((document.getElementById(
                                "product-" +
                                  k.toLowerCase() +
                                  ".product__variant"
                              ).value = optionValueChecked),
                              document
                                .getElementById(
                                  "product-" +
                                    k.toLowerCase() +
                                    ".product__variant"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {}
                          try {
                            variantOptionSelector = document.querySelector(
                              '.product-form__input .select select.select__select[name="options[' +
                                k +
                                ']"]'
                            );
                            if (variantOptionSelector) {
                              variantOptionSelector.value = optionValueChecked;
                              variantOptionSelector.dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              );
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            variantOptionSelector = document.querySelector(
                              '.dbtfy-variant-picker select.select[data-product-option-selector]');
                            if (variantOptionSelector) {
                              variantOptionSelector.value = optionValueChecked;
                              variantOptionSelector.dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              );
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            !variantOptionSelector &&
                              null !=
                                document.querySelector(
                                  'select[name="options[' + k + ']"]'
                                ) &&
                              ((document.querySelector(
                                'select[name="options[' + k + ']"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  'select[name="options[' + k + ']"]'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.selector-wrapper[data-option-position="' +
                                  optionIndex1 +
                                  '"] input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.selector-wrapper[data-option-position="' +
                                    optionIndex1 +
                                    '"] input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.pf-variant-select[data-key="' + k + '"]'
                              ) &&
                              ((document.querySelector(
                                '.pf-variant-select[data-key="' + k + '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.pf-variant-select[data-key="' + k + '"]'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.pf-variant-select[data-option-name="' +
                                  k +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.pf-variant-select[data-option-name="' +
                                  k +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.pf-variant-select[data-option-name="' +
                                    k +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                "#" + k + ".single-option-selector"
                              ) &&
                              ((document.querySelector(
                                "#" + k + ".single-option-selector"
                              ).value = j),
                              document
                                .querySelector(
                                  "#" + k + ".single-option-selector"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {}
                          try {
                            null !=
                              document.querySelector(
                                'input[data-single-option-selector][data-index="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'input[data-single-option-selector][data-index="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '[data-block-type="variant-picker"] .variant-picker__option-values input[name="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '[data-block-type="variant-picker"] .variant-picker__option-values input[name="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          // try {
                          //   let variantPickerSpans = document.querySelectorAll(
                          //     '[data-block-type="variant-picker"] .variant-picker__option-values input + label span'
                          //   );
                          //   for (let item of variantPickerSpans) {
                          //     if (
                          //       Object(styleOptions.removeSpecialCharacter)(
                          //         item.innerText
                          //       ) === O
                          //     ) {
                          //       item.click();
                          //       const style = document.createElement("style");
                          //       style.innerHTML = `
                          //                                       div[data-block-type="variant-picker"]{display:none !important;}
                          //                                       `;
                          //       document.head.appendChild(style);
                          //       break;
                          //     }
                          //   }
                          // } catch (t) {
                          //   console.log(t);
                          // }
                          try {
                            let variantPickerSpans = document.querySelectorAll(
                              "variant-picker.variant-picker .popover__value-list label span"
                            );
                            for (let item of variantPickerSpans) {
                              if (
                                Object(styleOptions.removeSpecialCharacter)(
                                  item.innerText
                                ) === O
                              ) {
                                item.click();
                                const style = document.createElement("style");
                                style.innerHTML = `
                                  div[data-block-type="variant-picker"]{display:none !important;}
                                `;
                                document.head.appendChild(style);
                                break;
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            let variantPickerSpans = document.querySelectorAll(
                              ".product-page-info__options .product-options .product-options__section .product-options__value"
                            );
                            for (let item of variantPickerSpans) {
                              if (
                                Object(styleOptions.removeSpecialCharacter)(
                                  item.innerText
                                ) === O
                              ) {
                                item.click();
                                const style = document.createElement("style");
                                style.innerHTML = `
                                  div[data-block-type="variant-picker"]{display:none !important;}
                                `;
                                document.head.appendChild(style);
                                break;
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            let variantPickerSpans = document.querySelectorAll(
                              "variant-picker .product-form__option-selector .block-swatch label, variant-picker .product-form__option-selector .color-swatch label"
                            );
                            for (let item of variantPickerSpans) {
                              if (
                                Object(styleOptions.removeSpecialCharacter)(
                                  item.innerText?.trim()
                                ) === O
                              ) {
                                item.click();
                                const style = document.createElement("style");
                                style.innerHTML = `
                                  div[data-block-type="variant-picker"]{display:none !important;}
                                `;
                                document.head.appendChild(style);
                                break;
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'variant-selects .selector-type-radio[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'variant-selects .selector-type-radio[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product-info__variant-picker .variant-picker__option-values input[name="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.product-info__variant-picker .variant-picker__option-values input[name="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.swatch-element input[value="' + x + '"]'
                            ) &&
                            document
                              .querySelector(
                                '.swatch-element input[value="' + x + '"]'
                              )
                              .click(),
                            null !=
                              document.querySelector(
                                '.product-variants[data-product-option="' +
                                  optionIndex1 +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.product-variants[data-product-option="' +
                                  optionIndex1 +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.product-variants[data-product-option="' +
                                    optionIndex1 +
                                    '"]'
                                )
                                .dispatchEvent(new CustomEvent("change")));
                          try {
                            null !=
                              document.querySelector(
                                '.product-option-selector input[name="option-' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.product-option-selector input[name="option-' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            variantOptionSelector = document.querySelector(
                              `.product-option-selector select.productOption[name='option-${optionIndex1}']`
                            );
                            if (variantOptionSelector) {
                              variantOptionSelector.value = optionValueChecked;
                              variantOptionSelector.dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              );
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            variantOptionSelector = document.querySelectorAll(
                              `div[data-option-selector] label.popover-listbox__option`
                            );
                            if (variantOptionSelector?.length) {
                              for (let itemElm of variantOptionSelector) {
                                if (itemElm?.innerText?.trim() === O) {
                                  itemElm.click();
                                  const style = document.createElement("style");
                                  style.innerHTML = `
                                                                    div[data-block-type="variant-picker"]{display:none !important;}
                                                                    `;
                                  document.head.appendChild(style);
                                  break;
                                }
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                ".nt_select_pr_" +
                                  optionIndex +
                                  ' li[data-value="' +
                                  O.toLowerCase()
                                    .replaceAll(" ", "-")
                                    .replaceAll("/", "-") +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  ".nt_select_pr_" +
                                    optionIndex +
                                    ' li[data-value="' +
                                    O.toLowerCase()
                                      .replaceAll(" ", "-")
                                      .replaceAll("/", "-") +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.getElementById("Option" + optionIndex1) &&
                            ((document.getElementById(
                              "Option" + optionIndex1
                            ).value = j),
                            document
                              .getElementById("Option" + optionIndex1)
                              .dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              ));
                          try {
                            null !=
                              document.querySelector(
                                'li[data-escape="' +
                                  O +
                                  '"] span.swatch__value_pr'
                              ) &&
                              document
                                .querySelector(
                                  'li[data-escape="' +
                                    O +
                                    '"] span.swatch__value_pr'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            let listButton = document.querySelectorAll(
                              ".g--option-theme button.btn"
                            );
                            if (listButton.length > 0) {
                              for (let buttonItem of listButton) {
                                let buttonText = Object(
                                  styleOptions.removeSpecialCharacter
                                )(buttonItem?.innerText?.trim()?.toLowerCase());
                                if (buttonText === O?.toLowerCase()) {
                                  buttonItem.click();
                                }
                              }
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.product-form__chip-input[value="' + O + '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.product-form__chip-input[value="' + O + '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'input[data-index="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'input[data-index="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.single-option-radio[data-option="option' +
                                  optionIndex1 +
                                  '"] input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.single-option-radio[data-option="option' +
                                    optionIndex1 +
                                    '"] input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.single-option-selector[data-option-index="' +
                                optionIndex +
                                '"]'
                            ) &&
                            ((document.querySelector(
                              '.single-option-selector[data-option-index="' +
                                optionIndex +
                                '"]'
                            ).value = optionValueChecked),
                            document
                              .querySelector(
                                '.single-option-selector[data-option-index="' +
                                  optionIndex +
                                  '"]'
                              )
                              .dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              ));
                          try {
                            null !=
                              document.querySelector(
                                ".option-selectors .selector-wrapper:nth-child(" +
                                  optionIndex1 +
                                  ") select"
                              ) &&
                              ((document.querySelector(
                                ".option-selectors .selector-wrapper:nth-child(" +
                                  optionIndex1 +
                                  ") select"
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  ".option-selectors .selector-wrapper:nth-child(" +
                                    optionIndex1 +
                                    ") select"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                ".ecom-product-single__variant-picker--main .ecom-product-single__picker-option-colours select"
                              ) &&
                              ((document.querySelector(
                                ".ecom-product-single__variant-picker--main .ecom-product-single__picker-option-colours select"
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  ".ecom-product-single__variant-picker--main .ecom-product-single__picker-option-colours select"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                ".ecom-product-single__variant-picker--main .ecom-product-single__picker-option-wood-color select"
                              ) &&
                              ((document.querySelector(
                                ".ecom-product-single__variant-picker--main .ecom-product-single__picker-option-wood-color select"
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  ".ecom-product-single__variant-picker--main .ecom-product-single__picker-option-wood-color select"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            let currentOption = document.querySelector(`variant-picker .option-selector:nth-child(${optionIndex1}) custom-select button.custom-select__btn > span`);
                            if (currentOption)
                            {
                              currentOption.textContent = optionValueChecked;
                              currentOption.dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              );

                              return;
                            }
                            // null !=
                            //   document.querySelector(
                            //     "variant-picker custom-select button.custom-select__btn > span"
                            //   ) &&
                            //   ((document.querySelector(
                            //     "variant-picker custom-select button.custom-select__btn > span"
                            //   ).textContent = optionValueChecked),
                            //   document
                            //     .querySelector(
                            //       "variant-picker custom-select button.custom-select__btn > span"
                            //     )
                            //     .dispatchEvent(
                            //       new Event("change", {
                            //         bubbles: !0,
                            //       })
                            //     ));
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.single-option-selector__radio[data-index="option' +
                                optionIndex1 +
                                '"][value="' +
                                O +
                                '"]'
                            ) &&
                            document
                              .querySelector(
                                '.single-option-selector__radio[data-index="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              )
                              .click();
                          try {
                            null !=
                              document.querySelector(
                                '[name="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '[name="option' +
                                    optionIndex +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                "ProductSelect-option-" +
                                  optionIndex +
                                  ' input[type="radio"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  "ProductSelect-option-" +
                                    optionIndex +
                                    ' input[type="radio"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.option-values .option-value-input[data-product-option="option' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.option-values .option-value-input[data-product-option="option' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            if (
                              window.ap_front_settings?.shop_id ===
                                "57613123674" ||
                              window.ap_front_settings?.shop_id ===
                                "81703764315" ||
                              window.ap_front_settings?.shop_id ===
                                "88112464167"
                            ) {
                              null !=
                                document.querySelector(
                                  '.product-form__input input[value="' +
                                    O +
                                    '"]'
                                ) &&
                                document
                                  .querySelector(
                                    '.product-form__input input[value="' +
                                      O +
                                      '"]'
                                  )
                                  .click();
                            }
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                '.variant-picker__option input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.variant-picker__option input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'variant-picker .variant-radios input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'variant-picker .variant-radios input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'options-selection .options-selection__option-values input[value="' +
                                  O +
                                  '"][data-variant-option-value-index="' +
                                  optionIndex +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'options-selection .options-selection__option-values input[value="' +
                                    O +
                                    '"][data-variant-option-value-index="' +
                                    optionIndex +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'variant-picker .variant-picker__option-values input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'variant-picker .variant-picker__option-values input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.variant-wrapper.variant-wrapper--dropdown .variant-input-wrap select[data-index="option' +
                                optionIndex1 +
                                '"]'
                            ) &&
                            ((document.querySelector(
                              '.variant-wrapper.variant-wrapper--dropdown .variant-input-wrap select[data-index="option' +
                                optionIndex1 +
                                '"]'
                            ).value = optionValueChecked),
                            document
                              .querySelector(
                                '.variant-wrapper.variant-wrapper--dropdown .variant-input-wrap select[data-index="option' +
                                  optionIndex1 +
                                  '"]'
                              )
                              .dispatchEvent(
                                new Event("change", {
                                  bubbles: !0,
                                })
                              )),
                            null !=
                              document.getElementById(
                                "SingleOptionSelector-" +
                                  dataOptionApp.product.id +
                                  "-option-" +
                                  optionIndex
                              ) &&
                              ((document.getElementById(
                                "SingleOptionSelector-" +
                                  dataOptionApp.product.id +
                                  "-option-" +
                                  optionIndex
                              ).value = optionValueChecked),
                              document
                                .getElementById(
                                  "SingleOptionSelector-" +
                                    dataOptionApp.product.id +
                                    "-option-" +
                                    optionIndex
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          try {
                            null !=
                              document.querySelector(
                                ".product-variants .product-variant:nth-child(" +
                                  optionIndex1 +
                                  ") select.product-variant-container"
                              ) &&
                              ((document.querySelector(
                                ".product-variants .product-variant:nth-child(" +
                                  optionIndex1 +
                                  ") select.product-variant-container"
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  ".product-variants .product-variant:nth-child(" +
                                    optionIndex1 +
                                    ") select.product-variant-container"
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                           try {
                            null !=
                              document.querySelector(
                                `variant-selects .product-form__input--dropdown select[name='options[${k.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')}]'].select__select`
                              ) &&
                              ((document.querySelector(
                                `variant-selects .product-form__input--dropdown select[name='options[${k.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')}]'].select__select`
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  `variant-selects .product-form__input--dropdown select[name='options[${k.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')}]'].select__select`
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              "#product-content #add-to-cart #selector-" +
                                optionIndex +
                                " select"
                            ) &&
                            ((document.querySelector(
                              "#product-content #add-to-cart #selector-" +
                                optionIndex +
                                " select"
                            ).value = j),
                            document
                              .querySelector(
                                "#product-content #add-to-cart #selector-" +
                                  optionIndex +
                                  " select"
                              )
                              .dispatchEvent(new Event("change"))),
                            null !=
                              document.querySelector(
                                '.variant-group-multiple select.product-single__variants[data-opnum="' +
                                  optionIndex +
                                  '"]'
                              ) &&
                              (document.querySelector(
                                '.variant-group-multiple select.product-single__variants[data-opnum="' +
                                  optionIndex +
                                  '"]'
                              ).value = optionValueChecked),
                            null !=
                              document.querySelector(
                                "form.shopify-product-form .select select#productSelect-option-" +
                                  optionIndex
                              ) &&
                              ((document.querySelector(
                                "form.shopify-product-form .select select#productSelect-option-" +
                                  optionIndex
                              ).value = optionValueChecked),
                              null !=
                                document.querySelector(
                                  "select#productSelect-option-0"
                                ) &&
                                document
                                  .querySelector(
                                    "select#productSelect-option-0"
                                  )
                                  .dispatchEvent(new Event("change")),
                              null !=
                                document.querySelector(
                                  "select#productSelect-option-1"
                                ) &&
                                document
                                  .querySelector(
                                    "select#productSelect-option-1"
                                  )
                                  .dispatchEvent(new Event("change")),
                              null !=
                                document.querySelector(
                                  "select#productSelect-option-2"
                                ) &&
                                document
                                  .querySelector(
                                    "select#productSelect-option-2"
                                  )
                                  .dispatchEvent(new Event("change"))),
                            null !=
                              document.querySelector(
                                '.form-field-select-wrapper .form-field-select[data-product-option="' +
                                  optionIndex +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.form-field-select-wrapper .form-field-select[data-product-option="' +
                                  optionIndex +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.form-field-select-wrapper .form-field-select[data-product-option="' +
                                    optionIndex +
                                    '"]'
                                )
                                .dispatchEvent(new Event("change"))),
                            null !=
                              document.querySelector(
                                '.form-field-select-wrapper .form-field-select[data-variant-option-index="' +
                                  optionIndex +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.form-field-select-wrapper .form-field-select[data-variant-option-index="' +
                                  optionIndex +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.form-field-select-wrapper .form-field-select[data-variant-option-index="' +
                                    optionIndex +
                                    '"]'
                                )
                                .dispatchEvent(new Event("change"))),
                            null !=
                              document.querySelector(
                                '.product-options .select-wrapper .single-option-selector[data-option-index="' +
                                  optionIndex +
                                  '"]'
                              ) &&
                              (document.querySelector(
                                '.product-options .select-wrapper .single-option-selector[data-option-index="' +
                                  optionIndex +
                                  '"]'
                              ).value = optionValueChecked),
                            null !=
                              document.querySelector(
                                '.ProductForm__Variants .ProductForm__Option input[data-option-position="' +
                                  optionIndex1 +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  '.ProductForm__Variants .ProductForm__Option input[data-option-position="' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  '.ProductForm__Variants .ProductForm__Option input[data-option-position="' +
                                    optionIndex1 +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          try {
                            null !=
                              document.querySelector(
                                '.Popover__ValueList .Popover__Value[data-option-position="' +
                                  optionIndex1 +
                                  '"][data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.Popover__ValueList .Popover__Value[data-option-position="' +
                                    optionIndex1 +
                                    '"][data-value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                ".gf_swatches .gf_swatches-selector.gf_swatches-option" +
                                  optionIndex1 +
                                  ' span.gf_swatch[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              (document
                                .querySelector(
                                  ".gf_swatches .gf_swatches-selector.gf_swatches-option" +
                                    optionIndex1 +
                                    ' span.gf_swatch[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              document
                                .querySelector(
                                  ".gf_swatches .gf_swatches-selector.gf_swatches-option" +
                                    optionIndex1 +
                                    ' span.gf_swatch[data-value="' +
                                    O +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("click", {
                                    bubbles: !0,
                                  })
                                ));
                          } catch (t) {
                            console.log(t);
                          }
                          // Theme: Kalles v4.2.0 official
                          try {
                            null !=
                              document.querySelector(
                                '.t4s-swatch .t4s-swatch__option[data-id="' +
                                  optionIndex +
                                  '"] .t4s-swatch__item[data-value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.t4s-swatch .t4s-swatch__option[data-id="' +
                                    optionIndex +
                                    '"] .t4s-swatch__item[data-value="' +
                                    O +
                                    '"]'
                                )
                                .click(),
                              null !=
                                document.querySelector(
                                  '.t4s-swatch .t4s-swatch__option[data-id="' +
                                    optionIndex1 +
                                    '"] .t4s-swatch__item[data-value="' +
                                    O +
                                    '"]'
                                ) &&
                                document
                                  .querySelector(
                                    '.t4s-swatch .t4s-swatch__option[data-id="' +
                                      optionIndex1 +
                                      '"] .t4s-swatch__item[data-value="' +
                                      O +
                                      '"]'
                                  )
                                  .click(),
                              null !=
                                document.querySelector(
                                  '.t4s-swatch .t4s-swatch__option[data-id="' +
                                    optionIndex2 +
                                    '"] .t4s-swatch__item[data-value="' +
                                    O +
                                    '"]'
                                ) &&
                                document
                                  .querySelector(
                                    '.t4s-swatch .t4s-swatch__option[data-id="' +
                                      optionIndex2 +
                                      '"] .t4s-swatch__item[data-value="' +
                                      O +
                                      '"]'
                                  )
                                  .click();
                          } catch (t) {
                            console.log(t);
                          }
                          dataOptionApp.enable_mandatory &&
                            null !== document.getElementById("AddToCart") &&
                            null !=
                              document.querySelector(
                                ".ProductForm .ProductForm__AddToCart"
                              ) &&
                            document
                              .querySelector(
                                ".ProductForm .ProductForm__AddToCart"
                              )
                              .setAttribute("style", "display: none"),
                            null !=
                              document.querySelector(
                                '.form-element-select select.form-element[data-product-option="option' +
                                  optionIndex1 +
                                  '"]'
                              ) &&
                              ((document.querySelector(
                                '.form-element-select select.form-element[data-product-option="option' +
                                  optionIndex1 +
                                  '"]'
                              ).value = optionValueChecked),
                              document
                                .querySelector(
                                  '.form-element-select select.form-element[data-product-option="option' +
                                    optionIndex1 +
                                    '"]'
                                )
                                .dispatchEvent(new Event("change")));
                          try {
                            null !=
                              document.querySelector(
                                '.product__variants .form__control .single-option-selector[name="single-option-selector-' +
                                  optionIndex +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.product__variants .form__control .single-option-selector[name="single-option-selector-' +
                                    optionIndex +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              "select#single-option-selector-" + optionIndex
                            ) &&
                            (document.querySelector(
                              "select#single-option-selector-" + optionIndex
                            ).value = optionValueChecked);
                          try {
                            null !=
                              document.querySelector(
                                '.option label.option-label .option-input[name="option-' +
                                  optionIndex +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  '.option label.option-label .option-input[name="option-' +
                                    optionIndex +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'variant-picker .popover__value-list label input[value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'variant-picker .popover__value-list label input[value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          try {
                            null !=
                              document.querySelector(
                                'variant-picker .product-form__option-selector .block-swatch input[name="option' +
                                  optionIndex +
                                  '"][value="' +
                                  O +
                                  '"]'
                              ) &&
                              document
                                .querySelector(
                                  'variant-picker .product-form__option-selector .block-swatch input[name="option' +
                                    optionIndex +
                                    '"][value="' +
                                    O +
                                    '"]'
                                )
                                .click();
                          } catch (t) {
                            console.log(t);
                          }
                          null !=
                            document.querySelector(
                              '.variant-input input[value="' +
                                O +
                                '"][data-index="option' +
                                optionIndex1 +
                                '"]'
                            ) &&
                            (document
                              .querySelector(
                                '.variant-input input[value="' +
                                  O +
                                  '"][data-index="option' +
                                  optionIndex1 +
                                  '"]'
                              )
                              .click(),
                            setTimeout(function () {
                              document
                                .querySelector(
                                  '.variant-input input[value="' +
                                    O +
                                    '"][data-index="option' +
                                    optionIndex1 +
                                    '"]'
                                )
                                .dispatchEvent(
                                  new Event("change", {
                                    bubbles: !0,
                                  })
                                );
                            }, 300));
                        }, 300);
                      }
                      try {
                            if (typeof window?.AvisOptionsData?.triggerThemeShopifyOptionPG === "function") {
                              // optionName,optionValue, optionIndex, optionIndex1, optionIndex2
                              window?.AvisOptionsData?.triggerThemeShopifyOptionPG(styleOptions, k, O, optionIndex, optionIndex1, optionIndex2);
                            }
                            else
                            {
                               triggerThemeOptions();
                            }
                          } catch (t) {
                            console.log(t);
                          }
                     
                        null !=
                          document.querySelector(
                            '.avis--option-selector[data-option-number="' +
                              optionIndex1 +
                              '"]'
                          ) &&
                          (document.querySelector(
                            '.globo--option-selector[data-option-number="' +
                              optionIndex1 +
                              '"]'
                          ).value = optionValueChecked),
                        (elemOptionValue
                          .closest(".avis-swatch-option")
                          .querySelector(".avis-option-value").innerHTML =
                          ": " + optionValueChecked);

                      let elemLi = elemOptionValue.closest(
                        ".avis-option-value-item"
                      );
                      let valueSelected = optionValueChecked;
                      if (elemLi) {
                        let elemSwatchDropdow = elemLi.querySelector(
                          ".avis-swatch-value-label"
                        );
                        if (elemSwatchDropdow)
                          valueSelected = elemSwatchDropdow.innerHTML;
                        else if (
                          elemLi.querySelector(".avis-swatch-view-value-group")
                        ) {
                          valueSelected = elemLi.querySelector(
                            ".avis-swatch-view-value-group"
                          ).innerHTML;
                          elemOptionValue
                            .closest(".avis-swatch-option")
                            .querySelector(".avis-option-value").innerHTML =
                            ": " + valueSelected;
                        }
                      }

                      // Set value view for dropdownlist
                      elemOptionValue.closest(".avis-option-values")
                        .previousElementSibling &&
                        elemOptionValue
                          .closest(".avis-option-values")
                          .previousElementSibling.querySelector(
                            ".avis-dropdown-view-value"
                          ) &&
                        (elemOptionValue
                          .closest(".avis-option-values")
                          .previousElementSibling.querySelector(
                            ".avis-dropdown-view-value"
                          ).innerHTML = valueSelected);

                      var elemOptions = elemOptionValue
                          .closest(`.${classContainer}`)
                          .querySelectorAll(".avis-swatch-option"),
                        optionValuesChecked = [];
                      if (
                        (elemOptions.forEach(function (elem, e) {
                          var radioValue,
                            optionIndex =
                              elem.getAttribute("data-option-index");
                          optionValuesChecked[optionIndex] =
                            null ===
                              (radioValue = elem.querySelector(
                                'input[type="radio"]:checked'
                              )) || void 0 === radioValue
                              ? void 0
                              : radioValue.value;
                        }),
                        dataOptionApp.appConfig.sort_option)
                      )
                        !(function (t) {
                          var o = "avis-out-of-stock",
                            r = document.querySelectorAll(
                              `.${classContainer} .avis-swatch-option`
                            );
                          r.length > 1 &&
                            document
                              .querySelectorAll(
                                `.${classContainer} .avis-swatch-option:not([data-option-index="` +
                                  t +
                                  '"]) input[type="radio"]'
                              )
                              .forEach(function (t) {
                                t.parentElement.classList.add(o);
                              }),
                            r.forEach(function (t, c) {
                              c = t.getAttribute("data-option-index");
                              var n,
                                u =
                                  null ===
                                    (n = t.querySelector(
                                      'input[type="radio"]:checked'
                                    )) || void 0 === n
                                    ? void 0
                                    : n.value;
                              void 0 !== u &&
                                r.forEach(function (t, r) {
                                  r = t.getAttribute("data-option-index");
                                  c !== r &&
                                    t
                                      .querySelectorAll('input[type="radio"]')
                                      .forEach(function (t, n) {
                                        for (
                                          var l = !1, a = 0, d = e.length;
                                          a < d;
                                          a++
                                        ) {
                                          var i = e[a];
                                          !1 !== i.available &&
                                            i.options[c] == u &&
                                            i.options[r] == t.value &&
                                            (l = !0);
                                        }
                                        !1 === l
                                          ? t.parentElement.classList.contains(
                                              "select-option--dropdown"
                                            ) ||
                                            t.parentElement.classList.add(o)
                                          : t.parentElement.classList.remove(o);
                                      });
                                });
                            });
                        })(optionIndex);
                      else {
                        elemOptionValue
                          .closest(`.${classContainer}`)
                          .querySelectorAll(".avis-swatch-option")
                          .forEach(function (t) {
                            var e,
                              o = t.getAttribute("data-option-index");
                            l[o] =
                              null ===
                                (e = t.querySelector(
                                  'input[type="radio"]:checked'
                                )) || void 0 === e
                                ? void 0
                                : e.value;
                          });
                        try {
                          3 == l.length
                            ? ((o = l[0]), (n = l[1]), (u = l[2]))
                            : 2 == I.length
                            ? ((o = l[0]), (n = l[1]), (u = null))
                            : 1 == l.length &&
                              ((o = l[0]), (n = null), (u = null));
                        } catch (t) {
                          console.log(t);
                        }
                        dataOptionApp.product.variants.forEach(function (t) {
                          t.option1 === o &&
                            t.option2 === n &&
                            t.option3 === u &&
                            t;
                        }),
                          toggleOutOfStocks(l);
                      }
                      setTimeout(function () {
                        var e,
                          o,
                          c =
                            null ===
                              (e = elemOptionValue.closest(
                                'form[action*="/cart/add"]'
                              )) ||
                            void 0 === e ||
                            null === (o = e.querySelector('[name="id"]')) ||
                            void 0 === o
                              ? void 0
                              : o.value;
                        if (!c)
                        {
                          e = document.querySelector(AvisStyleOptions.formAddToCart.join(','));
                          if (e) o = e.querySelector('[name="id"]');
                          if (o) c = o.value;
                        }
                        (dataOptionApp.curVariant =
                          dataOptionApp.product.variants.find(function (t) {
                            return t.id == c;
                          })),
                          document
                            .querySelectorAll(
                              ".avis-swatch-detail-lists-price li"
                            )
                            .forEach(function (t) {
                              if (t.getAttribute("data-value") === c) {
                                var e,
                                  o = document.querySelector(
                                    '.avis-swatch-detail-lists-price li[data-value="' +
                                      Object(
                                        styleOptions.removeSpecialCharacter
                                      )(c) +
                                      '"] .avis-li-price'
                                  ).innerHTML,
                                  n =
                                    null ===
                                      (e = document.querySelector(
                                        '.avis-swatch-detail-lists-price li[data-value="' +
                                          Object(
                                            styleOptions.removeSpecialCharacter
                                          )(c) +
                                          '"] .avis-li-compareprice'
                                      )) || void 0 === e
                                      ? void 0
                                      : e.innerHTML;
                                (document.querySelector(
                                  `.${classContainer} .avis-cs-product_price`
                                ).innerHTML = o),
                                  (document.querySelector(
                                    `.${classContainer} .avis-cs-product_oldprice`
                                  ).innerHTML = void 0 !== n ? n : "");
                              }
                            });
                      }, 600);
                      var B = dataOptionApp.stock;
                      (("enable" == B && "product" == dataOptionApp.page) ||
                        (1 == B && "product" == dataOptionApp.page)) &&
                        setTimeout(function () {
                          var e,
                            o,
                            r =
                              null ===
                                (e = a.closest('form[action*="/cart/add"]')) ||
                              void 0 === e ||
                              null === (o = e.querySelector('[name="id"]')) ||
                              void 0 === o
                                ? void 0
                                : o.value;
                          void 0 !== r &&
                            void 0 !==
                              dataOptionApp.product.variants.find(function (t) {
                                return t.id == r;
                              }) &&
                            null !==
                              document.querySelector(
                                ".avis-number-stock-variant"
                              ) &&
                            1 == s &&
                            (document.querySelector(
                              ".avis-number-stock-variant"
                            ).innerHTML = dataOptionApp.stock_message.replace(
                              "{number}",
                              dataOptionApp.product.variants.find(function (t) {
                                return t.id == r;
                              }).inventory_quantity
                            ));
                        }, 600),
                        document.querySelectorAll(".pf-variant-select")
                          .length &&
                          document
                            .querySelector(".pf-variant-select")
                            .dispatchEvent(new Event("change")),
                        (function () {
                          ("undefined" != typeof DoublyGlobalCurrency &&
                            document.querySelectorAll(
                              "select.currency-switcher"
                            ).length &&
                            DoublyGlobalCurrency.convertAll(
                              document.querySelector("select.currency-switcher")
                                .value
                            ),
                          "undefined" !=
                            typeof conversionBearAutoCurrencyConverter &&
                            "function" ==
                              typeof conversionBearAutoCurrencyConverter.convertPricesOnPage &&
                            conversionBearAutoCurrencyConverter.convertPricesOnPage(),
                          document.querySelectorAll('[name="currencies"]')
                            .length &&
                            "undefined" != typeof Currency &&
                            void 0 !== Currency.convertAll &&
                            Currency.convertAll(
                              window.shopCurrency,
                              document.querySelector("[name=currencies]").value
                            ),
                          document.querySelectorAll(".CurrencySelector__Select")
                            .length &&
                            "this.form.submit()" !=
                              document
                                .querySelector(".CurrencySelector__Select")
                                .getAttribute("onchange")) &&
                            document
                              .querySelectorAll(".CurrencySelector__Select")
                              .forEach(function (e) {
                                // dataOptionApp.dispatchCustomEvent(e, "change")
                              });
                          (("undefined" != typeof Currency &&
                            void 0 !== Currency.moneyFormats) ||
                            ("undefined" != typeof ACSCurrency &&
                              void 0 !== ACSCurrency.moneyFormats)) &&
                            "undefined" != typeof mlvedaload &&
                            mlvedaload(),
                            "undefined" != typeof BOLD &&
                              void 0 !== BOLD.common &&
                              void 0 !== BOLD.common.eventEmitter &&
                              BOLD.common.eventEmitter.emit(
                                "BOLD_CURRENCY_double_check"
                              );
                        })(),
                        (d = document.createEvent("Event")).initEvent(
                          "avis_change_variant_product_detail",
                          !0,
                          !0
                        ),
                        document.dispatchEvent(d);
                    });
                  });
              })(),
              dataOptionApp.group_image &&
                dataOptionApp.cur_locale == dataOptionApp.locale &&
                document
                  .querySelectorAll(
                    `.${classContainer} .avis-variant-color-detail input[type="radio"]`
                  )
                  .forEach(function (e) {
                    e.addEventListener("change", function (o) {
                      for (
                        var r = e.value, c = 0;
                        c <
                        dataOptionApp.selectors.productThumbnailsImageSelector
                          .length;
                        c++
                      )
                        document
                          .querySelectorAll(
                            dataOptionApp.selectors
                              .productThumbnailsImageSelector[c]
                          )
                          .forEach(function (t) {
                            var e = t.getAttribute("data-color");
                            r == e
                              ? t.classList.remove("avis-sw-media--hide")
                              : t.classList.add("avis-sw-media--hide"),
                              "AllColors" == t.getAttribute("data-color") &&
                                t.classList.remove("avis-sw-media--hide");
                          });
                      document.querySelectorAll(
                        ".product-single__thumbnails.slick-initialized"
                      ).length &&
                        window.dispatchEvent(
                          new CustomEvent("colorChange", {
                            detail: {
                              color: r,
                            },
                          })
                        ),
                        document.querySelectorAll(
                          "#product-thumbnails-product-template .thumbnails.slick-initialized"
                        ).length &&
                          window.dispatchEvent(
                            new CustomEvent("colorChangeFaster", {
                              detail: {
                                color: r,
                              },
                            })
                          );
                    });
                  });
          }
        };

      async function renderListPrice(product) {
        let html = "";
        for (let variant of product.variants)
          html += `<li data-value="${
            variant.id
          }"><span class="avis-li-price">${styleOptions.formatMoney(
            variant.price,
            true,
            true
          )}</span> ${
            variant.compare_at_price > variant.price
              ? "<span class='avis-li-compareprice'>" +
                styleOptions.formatMoney(variant.compare_at_price, true, true) +
                "</span>"
              : ""
          }</li>`;
        return html;
      }

      async function renderOptionValue(
        option,
        displayStyle,
        class_stylesoldout,
        product,
        option_index_name,
        option_index,
        curVariant,
        displayStyleSwatch,
        configs,
        designId,
        isShowPrice = false,
        optionName,
        optionsConfig
      ) {
        var resultHtml = "";
        if (["356155445"].includes(window?.ap_front_settings?.shop_id) && option?.name == "Ring Size") {
          option = {...option, values: option.values.sort((a, b) => parseFloat(a) - parseFloat(b))}
        }
        option.values.forEach((value) => {
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
          let enableTooltip =
            configs.enableTooltip && displayStyle === "swatch";
          let valueId = `${
            configs.isQuickview ? "quick-view-" : configs.isFeatured ? "featured-product-" : ""
          }avis-option-value-item-${variant_for_value.id}-${
            option.position
          }-${option_index}`;
          let htmlPrice = "";
          if (isShowPrice) {
            htmlPrice = `<span class="avis-value-price">${
              variant_for_value
                ? " (" +
                  styleOptions.formatMoney(
                    variant_for_value.price,
                    true,
                    true
                  ) +
                  ")"
                : ""
            }</span>`;
          }
          let addCartHtml = "";
          if (["75692179743"].includes(window.ap_front_settings.shop_id)) {
              if (available) {
                  addCartHtml += `<button type="button" class="btn btn-avis-addtocart avis--atc-variant-pp">${dataOptionApp.appConfig.localization.add_to_cart}</button>`
              }
              else {
                  addCartHtml += `<button type="button" class="btn btn-avis-addtocart avis--atc-variant-pp" disabled="disabled">${dataOptionApp.appConfig.localization.sold_out}</button>`;
              }
          }
          if (displayStyle == "swatch") {
            let image_size = "150x";
            let background_size_image = "cover";
            if (displayStyleSwatch == "variant") {
              let cur_image_swatch = false;
              if (
                variant_for_value &&
                variant_for_value.featured_image &&
                variant_for_value.featured_image.src
              ) {
                cur_image_swatch = variant_for_value.featured_image.src;
              }



              if (designId && designId.indexOf("swatch_button") > -1) {
                labelHtml = `<label class="avis-swatch-value-label" for="${valueId}">
                                            <div class="avis-swatch-value-box" style="${
                                              cur_image_swatch
                                                ? "background-size: " +
                                                  background_size_image +
                                                  "; background-position: center; background-repeat: no-repeat; background-image: url('" +
                                                  styleOptions.imageUrl(
                                                    cur_image_swatch,
                                                    image_size
                                                  ) +
                                                  "')"
                                                : ""
                                            }">&nbsp;</div>
                                            <div class="avis-swatch-value-title">${value}</div>
                                    </label>`;
              } else if (designId && designId.indexOf("swatch_dropdown") > -1) {
                labelHtml = `<label class="avis-swatch-value-label" for="${valueId}">
                                            <div class="avis-swatch-value-box" style="${
                                              cur_image_swatch
                                                ? "background-size: " +
                                                  background_size_image +
                                                  "; background-position: center; background-repeat: no-repeat; background-image: url('" +
                                                  styleOptions.imageUrl(
                                                    cur_image_swatch,
                                                    image_size
                                                  ) +
                                                  "')"
                                                : ""
                                            }">&nbsp;</div>
                                            <div class="avis-swatch-value-title">${value}</div>
                                    </label>`;
              } else if (designId && designId.indexOf("swatch_price") > -1) {
                labelHtml = `<label class="avis-swatch-value-label avis-label-with-price" for="${valueId}">
                                            <div class="avis-swatch-value-box-image" style="${
                                              cur_image_swatch
                                                ? "background-size: " +
                                                  background_size_image +
                                                  "; background-position: center; background-repeat: no-repeat; background-image: url('" +
                                                  styleOptions.imageUrl(
                                                    cur_image_swatch,
                                                    image_size
                                                  ) +
                                                  "')"
                                                : ""
                                            }">&nbsp;</div>
                                            <div class="avis-swatch-value-info">   
                                                <div class="avis-swatch-value-title"><span>${value}</span></div>
                                                <div class="avis-swatch-value-price"><span>${
                                                  variant_for_value
                                                    ? styleOptions.formatMoney(
                                                        variant_for_value.price,
                                                        true,
                                                        true
                                                      )
                                                    : ""
                                                }</span></div>
                                                ${addCartHtml}
                                            </div>
                                        </label>`;
              } else {
                labelHtml = `<label class="avis-shopify-option ${["56658427984"].includes(window.ap_front_settings.shop_id) ? "variant-image" : ""}" data-variant-id='${variant_for_value.id}' for="${valueId}" style="${
                  cur_image_swatch
                    ? "display: block; background-size: " +
                      background_size_image +
                      "; background-position: center; background-repeat: no-repeat; background-image: url('" +
                      styleOptions.imageUrl(cur_image_swatch, image_size) +
                      "')"
                    : ""
                }">
                                       ${applyTooltipImage(enableTooltip, configs.enableTooltipImage, cur_image_swatch, value)}
                                    </label>`;
              }
            } else {
              let option_value = `${optionName}-${value}`;
              if (optionsConfig.is_locale)
              {
                let findIndex = optionsConfig.product_locale.options.findIndex(x => x.name === option.name);
                if (findIndex > -1)
                {
                  let optionOrg = optionsConfig.product_org?.options[findIndex];
                  let findIndexValue = optionsConfig.product_locale.options[findIndex].optionValues.findIndex(x => x.name === value);
                  if (findIndexValue > -1)
                  {
                    let valueTemp = optionOrg.optionValues[findIndexValue].name;
                    option_value = `${optionName}-${valueTemp}`;
                  }
                }
              }

              if (
                window.ap_front_settings?.shop_id === "74257891645" &&
                optionName === "Inlay"
              ) {
                let valueByLangList =
                  AvisOptionsConfig.list_language_values.filter((x) =>
                    x.includes(value)
                  );
                if (
                  valueByLangList.length > 0 &&
                  valueByLangList[0]?.length > 0
                ) {
                  option_value = `${optionName}-${valueByLangList[0][0]}`;
                }
              }
              let bgImage = false;
              let color = false;
              let color2 = false;
              let isImageUrl = false;
              if (
                configs.getListPriorityImageUrl[option_value] &&
                configs.displayColorsImageUrl[option_value]
              ) {
                bgImage = configs.displayColorsImageUrl[option_value];
                isImageUrl = true;
              }
              if (
                bgImage == false &&
                configs.getListPriorityImageFile[option_value] &&
                configs.displayColorsImage[option_value]
              ) {
                bgImage = configs.displayColorsImage[option_value];
              }
              if (
                bgImage == false &&
                configs.displayColorsImageUrl[option_value]
              ) {
                bgImage = configs.displayColorsImageUrl[option_value];
                isImageUrl = true;
              }
              if (
                bgImage == false &&
                configs.displayColorsImage[option_value]
              ) {
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
                    if (
                      (!isImageUrl &&
                        configs.getListPriorityImageFile[option_value]) ||
                      (isImageUrl &&
                        configs.getListPriorityImageUrl[option_value])
                    ) {
                    } else bgImage = false;
                  }
                }
              }

              if (designId && designId.indexOf("swatch_button") > -1) {
                labelHtml = `<label class="avis-swatch-value-label" for="${valueId}">
                                            <div class="avis-swatch-value-box" style="${
                                              color
                                                ? "background-color:" +
                                                  color +
                                                  ";" +
                                                  (color2
                                                    ? "background: linear-gradient( -45deg, " +
                                                      color2 +
                                                      " 50%, " +
                                                      color +
                                                      " 50% );"
                                                    : "")
                                                : color2
                                                ? "background: linear-gradient( -45deg, " +
                                                  color2 +
                                                  " 50%, transparent  50% );"
                                                : ""
                                            }
                                        ${
                                          bgImage
                                            ? "background-image: url('" +
                                              bgImage +
                                              "'); background-position: center; background-repeat: no-repeat;background-size: cover;"
                                            : ""
                                        }">&nbsp;</div>
                                            <div class="avis-swatch-value-title">${value}</div>
                                    </label>`;
              } else if (designId && designId.indexOf("swatch_dropdown") > -1) {
                labelHtml = `<label class="avis-swatch-value-label" for="${valueId}">
                                            <div class="avis-swatch-value-box" style="${
                                              color
                                                ? "background-color:" +
                                                  color +
                                                  ";" +
                                                  (color2
                                                    ? "background: linear-gradient( -45deg, " +
                                                      color2 +
                                                      " 50%, " +
                                                      color +
                                                      " 50% );"
                                                    : "")
                                                : color2
                                                ? "background: linear-gradient( -45deg, " +
                                                  color2 +
                                                  " 50%, transparent  50% );"
                                                : ""
                                            }
                                        ${
                                          bgImage
                                            ? "background-image: url('" +
                                              bgImage +
                                              "'); background-position: center; background-repeat: no-repeat;background-size: cover;"
                                            : ""
                                        }">&nbsp;</div>
                                            <div class="avis-swatch-value-title">${value}</div>
                                    </label>`;
              } else if (designId && designId.indexOf("swatch_price") > -1) {
                labelHtml = `<label class="avis-swatch-value-label avis-label-with-price" for="${valueId}">
                                            <div class="avis-swatch-value-box-image" style="${
                                              color
                                                ? "background-color:" +
                                                  color +
                                                  ";" +
                                                  (color2
                                                    ? "background: linear-gradient( -45deg, " +
                                                      color2 +
                                                      " 50%, " +
                                                      color +
                                                      " 50% );"
                                                    : "")
                                                : color2
                                                ? "background: linear-gradient( -45deg, " +
                                                  color2 +
                                                  " 50%, transparent  50% );"
                                                : ""
                                            }
                                        ${
                                          bgImage
                                            ? "background-image: url('" +
                                              bgImage +
                                              "'); background-position: center; background-repeat: no-repeat;background-size: cover;"
                                            : ""
                                        }">&nbsp;</div>
                                        <div class="avis-swatch-value-info">    
                                        <div class="avis-swatch-value-title"><span>${value}</span></div>
                                            <div class="avis-swatch-value-price"><span>${
                                              variant_for_value
                                                ? styleOptions.formatMoney(
                                                    variant_for_value.price,
                                                    true,
                                                    true
                                                  )
                                                : ""
                                            }</span></div>
                                            ${addCartHtml}
                                        </div>
                                        </label>`;
              } else {
                labelHtml = `<label class="avis-shopify-option" for="${valueId}"
                                        style="${
                                          color
                                            ? "background-color:" +
                                              color +
                                              ";" +
                                              (color2
                                                ? "background: linear-gradient( -45deg, " +
                                                  color2 +
                                                  " 50%, " +
                                                  color +
                                                  " 50% );"
                                                : "")
                                            : color2
                                            ? "background: linear-gradient( -45deg, " +
                                              color2 +
                                              " 50%, transparent  50% );"
                                            : ""
                                        }
                                        ${
                                          bgImage
                                            ? "background-image: url('" +
                                              bgImage +
                                              "'); background-position: center; background-repeat: no-repeat;background-size: cover;"
                                            : ""
                                        }">
                                    ${ (window.ap_front_settings.shop_id === '73287991611' || window.ap_front_settings.shop_id ===  '73584836838' || window.ap_front_settings.shop_id ===  '68326162671') ? `<span class="avis-value-title">${value}</span>` : ""}
                                    ${applyTooltipImage(enableTooltip, configs.enableTooltipImage, bgImage, value)}
                                    </label>`;
              }
            }
          } else if (displayStyle == "dropdownlist") {
            labelHtml = `<label for="${valueId}" class="avis-swatch-view-value avis-swatch-view-value-group">
                                    <span class="avis-value-title">${value}</span>
                                    ${htmlPrice}
                                </label>`;
          } else {
            labelHtml = `<label for="${valueId}" class="avis-swatch-view-value avis-swatch-view-value-group avis-shopify-option">
                                   ${applyTooltipImage(enableTooltip, configs.enableTooltipImage, "", value)}
                                   <span class="avis-value-title">${value}</span>
                                   ${htmlPrice}
                                </label>`;
          }

          if (["95816581488"].includes(window.ap_front_settings.shop_id)) {
            labelHtml += `<span class="avis-custom-swatch-title" style="display: none;">${value}</span>`
          }

          let mediaId = variant_for_value?.featured_media?.id;
          if (!mediaId) mediaId = "";
          resultHtml += `<li class="avis-option-value-item avis-style-value-${displayStyle} ${class_stylesoldout} ${
            available ? "avis-available" : "avis-out-of-stock"
          }" data-value='${value}' data-variant-id='${variant_for_value.id}'>
                            <input id='${valueId}' data-mediaid="${mediaId}" data-price="${
            variant_for_value.price
          }"  data-variantId="${variant_for_value.id}" data-variant-id='${variant_for_value.id}' type="radio" name="${
            configs.isQuickview ? "quick-view-" : configs.isFeatured ? "featured-product-" : ""
          }option-avis-${option_index}" value="${value?.replaceAll(
            '"',
            "&quot;"
          )}" ${
            curVariant[option_index_name] == value ? "checked" : ""
          } required />
                            ${labelHtml}
                        </li>`;
          let inputData = document.createElement("input");
          inputData.value = value;
        });
        return resultHtml;
      }

      async function renderOptions(
        options_with_values,
        configs,
        curVariant,
        product,
        optionsConfig
      ) {
        let html = "";
        let index = 0;
        for (let option of options_with_values) {
          let option_index = index;
          let option_index_name = `option${option_index + 1}`;
          let designId = configs.designIds[option.name];
          let displayStyle = configs.displayStyles[option.name];
          let displayStyleSwatch = configs.displayStyleSwatchs[option.name];
          let sortOption = configs.listOrderOptions[option.name];
          let class_stylesoldout = "";

          let optionName = option.name;
          if (optionsConfig.is_locale)
          {
            if (optionsConfig.product_org && optionsConfig.product_locale)
            {
              let findIndex = optionsConfig.product_locale.options.findIndex(x => x.name === optionName);
              if (findIndex > -1)
              {
                optionName = optionsConfig.product_org?.options[findIndex].name;
              }
            }
          }

          if (
            !displayStyle &&
            window.ap_front_settings?.shop_id === "74257891645"
          ) {
            let optionByLangList = AvisOptionsConfig.list_language.filter((x) =>
              x.includes(optionName)
            );
            if (optionByLangList.length > 0) {
              for (let itemLang of optionByLangList[0]) {
                if (configs.displayStyles[itemLang]) {
                  optionName = itemLang;
                  break;
                }
              }
            }
          }

          if (configs.displayStyles[optionName]) displayStyle = configs.displayStyles[optionName]; else displayStyle = "button";
          if (!displayStyle) displayStyle = "button";
          if (configs.displayStyleSwatchs[optionName]) displayStyleSwatch = configs.displayStyleSwatchs[optionName];
          if (configs.designIds[optionName]) designId = configs.designIds[optionName]; else designId = "button";
          if (!designId) designId = "button";

          let available = curVariant.available;
          let variant_for_value = curVariant;
          let value = curVariant[option_index_name]
            ? curVariant[option_index_name]
            : "";
          let htmlDropdownValueDefault = value;
          let isShowPrice = window.ap_front_settings.shop_id === "79101133105";

          let htmlPriceCurrent = "";
          if (isShowPrice) {
            htmlPriceCurrent = `<span class="avis-value-price">${
              curVariant
                ? " (" +
                  styleOptions.formatMoney(curVariant.price, true, true) +
                  ")"
                : ""
            }</span>`;
          }
          let contentOptionHtml = "";
          if (
            displayStyle == "dropdownlist" ||
            (displayStyle === "swatch" &&
              designId &&
              designId.indexOf("swatch_dropdown") > -1)
          ) {
            let htmlPrice = "";
            if (isShowPrice) {
              htmlPrice = `<span class="avis-value-price">${
                variant_for_value
                  ? " (" +
                    styleOptions.formatMoney(
                      variant_for_value.price,
                      true,
                      true
                    ) +
                    ")"
                  : ""
              }</span>`;
            }

            if (
              displayStyle === "swatch" &&
              designId &&
              designId.indexOf("swatch_dropdown") > -1
            ) {
              let image_size = "150x";
              let background_size_image = "cover";
              if (displayStyleSwatch == "variant") {
                let cur_image_swatch = false;
                if (
                  variant_for_value &&
                  variant_for_value.featured_image &&
                  variant_for_value.featured_image.src
                ) {
                  cur_image_swatch = variant_for_value.featured_image.src;
                }

                htmlDropdownValueDefault = `
                                <div class="avis-swatch-value-box" style="${
                                  cur_image_swatch
                                    ? "background-size: " +
                                      background_size_image +
                                      "; background-position: center; background-repeat: no-repeat; background-image: url('" +
                                      styleOptions.imageUrl(
                                        cur_image_swatch,
                                        image_size
                                      ) +
                                      "')"
                                    : ""
                                }">&nbsp;</div>
                                <div class="avis-swatch-value-title">
                                    <span class="avis-value-title">${value}</span>
                                    ${htmlPrice}
                                </div>
                            `;
              } else {
                let option_value = `${optionName}-${value}`;
                if (optionsConfig.is_locale)
                {
                  let findIndex = optionsConfig.product_locale.options.findIndex(x => x.name === option.name);
                  if (findIndex > -1)
                  {
                    let optionOrg = optionsConfig.product_org?.options[findIndex];
                    let findIndexValue = optionsConfig.product_locale.options[findIndex].optionValues.findIndex(x => x.name === value);
                    if (findIndexValue > -1)
                    {
                      let valueTemp = optionOrg.optionValues[findIndexValue].name;
                      option_value = `${optionName}-${valueTemp}`;
                    }
                  }
                }
                // if (optionLocales && optionLocales?.values?.length) {
                //   let findValueLocales = optionLocales.values.find(
                //     (x) => x.value && x.value.includes(value)
                //   );
                //   if (findValueLocales) {
                //     option_value = `${optionName}-${
                //       findValueLocales.value[0]
                //         ? findValueLocales.value[0]
                //         : value
                //     }`;
                //   }
                // }

                if (
                  window.ap_front_settings?.shop_id === "74257891645" &&
                  optionName === "Inlay"
                ) {
                  let valueByLangList =
                    AvisOptionsConfig.list_language_values.filter((x) =>
                      x.includes(value)
                    );
                  if (
                    valueByLangList.length > 0 &&
                    valueByLangList[0]?.length > 0
                  ) {
                    option_value = `${optionName}-${valueByLangList[0][0]}`;
                  }
                }

                let bgImage = false;
                let color = false;
                let color2 = false;
                let isImageUrl = false;
                if (
                  configs.getListPriorityImageUrl[option_value] &&
                  configs.displayColorsImageUrl[option_value]
                ) {
                  bgImage = configs.displayColorsImageUrl[option_value];
                  isImageUrl = true;
                }
                if (
                  bgImage == false &&
                  configs.getListPriorityImageFile[option_value] &&
                  configs.displayColorsImage[option_value]
                ) {
                  bgImage = configs.displayColorsImage[option_value];
                }
                if (
                  bgImage == false &&
                  configs.displayColorsImageUrl[option_value]
                ) {
                  bgImage = configs.displayColorsImageUrl[option_value];
                  isImageUrl = true;
                }
                if (
                  bgImage == false &&
                  configs.displayColorsImage[option_value]
                ) {
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
                      if (
                        (!isImageUrl &&
                          configs.getListPriorityImageFile[option_value]) ||
                        (isImageUrl &&
                          configs.getListPriorityImageUrl[option_value])
                      ) {
                      } else bgImage = false;
                    }
                  }
                }

                htmlDropdownValueDefault = `
                            <div class="avis-swatch-value-box" style="${
                              color
                                ? "background-color:" +
                                  color +
                                  ";" +
                                  (color2
                                    ? "background: linear-gradient( -45deg, " +
                                      color2 +
                                      " 50%, " +
                                      color +
                                      " 50% );"
                                    : "")
                                : color2
                                ? "background: linear-gradient( -45deg, " +
                                  color2 +
                                  " 50%, transparent  50% );"
                                : ""
                            }
                                        ${
                                          bgImage
                                            ? "background-image: url('" +
                                              bgImage +
                                              "'); background-position: center; background-repeat: no-repeat;background-size: cover;"
                                            : ""
                                        }"></div>
                            <div class="avis-swatch-value-title">
                                <span class="avis-value-title">${value}</span>
                                ${htmlPrice}
                            </div>
                        `;
              }
            } else {
              htmlDropdownValueDefault = `
                                <div class="avis-swatch-value-title">
                                    <span class="avis-value-title">${value}</span>
                                    ${htmlPrice}
                                </div>
                            `;
            }

            contentOptionHtml = `<div class="avis-dropdown-selector">
                                            <div class="avis-dropdown-inner">
                                                <div class="avis-swatch-drop-down">
                                                    <span class="avis-dropdown-view-value ${
                                                      available
                                                        ? ""
                                                        : " sold-out"
                                                    }">${htmlDropdownValueDefault}</span>
                                                    <span class="avis-arrow-select"></span>
                                                </div>
                                                <ul class="avis-option-values avis-dropdown-option" style="display:none">
                                                                                                  ${await renderOptionValue(
                                                                                                    option,
                                                                                                    displayStyle,
                                                                                                    class_stylesoldout,
                                                                                                    product,
                                                                                                    option_index_name,
                                                                                                    option_index,
                                                                                                    curVariant,
                                                                                                    displayStyleSwatch,
                                                                                                    configs,
                                                                                                    designId,
                                                                                                    isShowPrice,
                                                                                                    optionName,
                                                                                                    optionsConfig
                                                                                                  )}
                                                </ul>
                                            </div>
                                        </div>`;
          } else {
            contentOptionHtml = `<ul class="avis-option-values">
                ${await renderOptionValue(
                  option,
                  displayStyle,
                  class_stylesoldout,
                  product,
                  option_index_name,
                  option_index,
                  curVariant,
                  displayStyleSwatch,
                  configs,
                  designId,
                  isShowPrice,
                  optionName,
                  optionsConfig
                )}
              </ul>`;
            if (window.ap_front_settings.shop_id === '72460534015' || window.ap_front_settings.shop_id === '73584836838') {
                  contentOptionHtml = `<div class="avis-option-value-container"><ul class="avis-option-values">
                  ${await renderOptionValue(
                    option,
                    displayStyle,
                    class_stylesoldout,
                    product,
                    option_index_name,
                    option_index,
                    curVariant,
                    displayStyleSwatch,
                    configs,
                    designId,
                    isShowPrice,
                    optionName,
                    optionsConfig
                  )}
                </ul></div>`;
            }
          }

          let isShowOptionName = configs.isOptionname;

          let currentTitle = `
                                <span class="avis-value-title">${curVariant[option_index_name]}</span>
                                ${htmlPriceCurrent}
                            `;
          html += `<div class="avis-swatch-option avis-style-type-${displayStyle} ${
            designId ? "avis-design-" + designId : ""
          }" data-option-index="${option_index}" ${
            configs.sortOption ? "data-order='" + sortOption + "'" : ""
          }> 
                            <legend ${
                              isShowOptionName
                                ? ""
                                : "style='display:none !important'"
                            } class="avis-option-name" data-name="${
            option.name
          }">
                                <label class="avis-option-label">
                                    ${
                                      option.name
                                    }<span class="avis-option-value">${
            curVariant[option_index_name] ? ": " + currentTitle : ""
          }</span>
                                </label>
                            </legend>
                            ${contentOptionHtml}
                        </div>
                `;
          index = index + 1;
        }

        return html;
      }

      var renderOptionHtml = async function (optionsConfig) {
        let product = optionsConfig.product;
        let alignContent = optionsConfig.configs.align_content;
        let class_alignContent = alignContent
          ? `avis-align-content-${alignContent}`
          : "";

        let html = `<div class="${class_alignContent}">
                            <div class="avis-product-swatch-price" style="display: none;">
                                <span class="avis-product_price-container">
                                <span class="avis-cs-product_price">1₫</span>
                                <span class="avis-cs-product_oldprice"></span>
                                </span>
                            </div>
                            <ul class="avis-swatch-detail-lists-price" style="display: none;">
                                ${await renderListPrice(product)}
                            </ul>
                            <div class="avis-swatch-variants">
                                    ${await renderOptions(
                                      optionsConfig.options_with_values,
                                      optionsConfig.configs,
                                      optionsConfig.curVariant,
                                      product,
                                      optionsConfig
                                    )}
                            </div>
                            
                        </div> `;
        return html;
      };

      function addBtnSlider() {
        const elementWrapper = document.querySelectorAll(".avis-swatch-option");

        // Style the buttons
        const btnStyle = `
                div.avis-swatch-option .prevBtn,
                div.avis-swatch-option .nextBtn {
                    display: inline-flex;
                    padding: 6px 8px;
                    border: 1px solid #333;
                    cursor: pointer;
                    border-radius: 50%;
                    vertical-align: middle;            
                }
                .avis-swatch-option ul.avis-option-values {
                    list-style: none;
                    display: inline-flex;
                    flex-wrap: nowrap;
                    width: calc(100% - 100px);
                    overflow-x: auto;
                    white-space: nowrap;   
                    scrollbar-width: none;
                    vertical-align: middle;            
                }    
                .avis-swatch-option ul.avis-option-values  li {
                  margin-bottom: 0px !important;               
                } 
                     
                .avis-swatch-option ul.avis-option-values::-webkit-scrollbar {
                  display: none; /* Chrome, Safari, Opera */
                }
                `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = btnStyle;
        document.head.appendChild(styleSheet);

        elementWrapper.forEach((container) => {
          const ulElement = container.querySelector(".avis-option-values");
          const liElements = ulElement.querySelectorAll("li");

          liElements.forEach((li) => {
            li.style.minWidth = "35px";
          });
          // Sets the variable for the current scroll position
          let currentScroll = 0;

          // Get the width of the ul
          const ulWidth = ulElement.offsetWidth;

          //Calculate the total width of all li elements
          let totalLiWidth = 0;
          liElements.forEach((li) => {
            totalLiWidth += li.offsetWidth + 10;
          });

          // Set the scroll interval for each button press
          const scrollAmount = ulWidth / 2;

          if (totalLiWidth >= ulWidth) {
            // Assign style for slider-container
            container.style.width = "100%";

            // Create btn Previous
            const prevBtn = document.createElement("button");
            prevBtn.innerHTML =
              "<svg width='10px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/></svg>";
            prevBtn.classList.add("prevBtn");

            prevBtn.style.marginRight = "10px"; // Khoảng cách giữa nút và ul
            prevBtn.style.opacity = currentScroll > 0 ? "1" : "0.3";

            // Create btn Next
            const nextBtn = document.createElement("button");
            nextBtn.innerHTML =
              "<svg width='10px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'/></svg>";
            nextBtn.classList.add("nextBtn");

            nextBtn.style.marginLeft = "10px"; // Khoảng cách giữa ul và nút
            nextBtn.style.opacity =
              currentScroll + ulWidth < totalLiWidth ? "1" : "0.3";

            // append btn in container
            container.insertBefore(prevBtn, ulElement);
            container.appendChild(nextBtn);

            // Conditional logic for btn "Next"
            nextBtn.addEventListener("click", () => {
              if (currentScroll + ulWidth < totalLiWidth) {
                currentScroll += scrollAmount;
                ulElement.scrollTo({
                  left: currentScroll,
                  behavior: "smooth",
                });
              }
              prevBtn.style.opacity = currentScroll > 0 ? "1" : "0.3";
              nextBtn.style.opacity =
                currentScroll + ulWidth < totalLiWidth ? "1" : "0.3";
            });

            // Conditional logic for btn "Previous"
            prevBtn.addEventListener("click", () => {
              if (currentScroll > 0) {
                currentScroll -= scrollAmount;
                ulElement.scrollTo({
                  left: currentScroll,
                  behavior: "smooth",
                });
              }
              prevBtn.style.opacity = currentScroll > 0 ? "1" : "0.3";
              nextBtn.style.opacity =
                currentScroll + ulWidth < totalLiWidth ? "1" : "0.3";
            });
          }
        });
      }

      var renderOptionWrapperHtml = async function (configOptions) {
        let currentLocale = AvisStyleOptions?.locale;
        if (!currentLocale) currentLocale = Shopify.locale ?? "en";
        if (window.apoOptionLocales?.config?.storefront_connect && currentLocale !== window.apoOptionLocales?.config?.primary_locale)
        {
          let queryLocale = await apoFunction.queryProductInfo(currentLocale, [configOptions.product.id]);
          let query = await apoFunction.queryProductInfo(window.apoOptionLocales?.config?.primary_locale ?? "EN", [configOptions.product.id], true);
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
            let productOrg = configLocale[0]?.data?.nodes?.length ? configLocale[0]?.data?.nodes[0] : null;
            let productLocale = configLocale[1]?.data?.nodes?.length ? configLocale[1]?.data?.nodes[0] : null;
            if (productOrg && productLocale)
            {
              configOptions["product_org"] = productOrg;
              configOptions["product_locale"] = productLocale;
              configOptions["primary_locale"] = window.apoOptionLocales?.config?.primary_locale;
              configOptions["locale"] = currentLocale;
              configOptions["is_locale"] = true;
            }
          }
        }
        var htmlVariants = await renderOptionHtml(configOptions);
        if (
          null != document.querySelector(`.${classSwatchProductPageContainer} `)
        ) {
          let avisContainer = document.querySelectorAll(
            `.${classSwatchProductPageContainer} `
          );
          avisContainer.forEach(function (t) {
            t.innerHTML = htmlVariants;
            let labelAvisShopifyOptions = t?.querySelectorAll("label.avis-shopify-option");
            if (labelAvisShopifyOptions?.length > 0)
            {
              labelAvisShopifyOptions.forEach((itemLabel) => {
                hoverTooltip(itemLabel);
              });
            }
          });

          if (window.ap_front_settings?.shop_id === "59881980002") {
            addBtnSlider();
          }

          // document.querySelector(`.${classSwatchProductPageContainer} `).innerHTML = htmlVariants,
          document.querySelector("body").classList.add("avis-swatch-app");
          var eventLoaded = new Event("Avis.swatch.loaded");
          window.dispatchEvent(eventLoaded);

          var o = dataOptionApp.appConfig.localization.added_to_cart;
          let listAtcCustom = document.querySelectorAll(".btn-avis-addtocart.avis--atc-variant-pp");
          if (listAtcCustom?.length > 0) {
            document.querySelectorAll(".btn-avis-addtocart.avis--atc-variant-pp").forEach((function (elem) {
              elem.addEventListener("click", (function (event) {
                event.preventDefault();
                elem.classList.add("avis-loading");
                var variantId = elem.closest("li.avis-style-value-swatch.avis-available").querySelector("input[id*='avis-option-value-item'").getAttribute("data-variantid");
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
                          function (t) {
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
                                if (["75692179743"].includes(window.ap_front_settings.shop_id))
                                {
                                    let cartIcon = document.querySelector(".site-header-cart--button");
                                    if (cartIcon) setTimeout(() => cartIcon.click(), 1000);
                                }
                            }
                            )).catch((function (t) {
                                elem.classList.remove("avis-loading");
                                console.log("Error:", t)
                            }
                            ))
                        }())
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
              }))
            }))
          }
        }
      };
      let productIdsApply = false;
      let productIdsString = JSON.stringify(
        AvisStyleOptions.product_ids_option
      );
      let productIds = JSON.parse(productIdsString);
      if (AvisStyleOptions.plan === "ADVANCED") {
        if (window.ap_front_settings?.shop_id === "60063187116") {
          productIdsApply = productIds.splice(0, 3000);
        } else productIdsApply = false;
      } else if (AvisOptionsData?.limit_product) {
        let limitProduct = AvisOptionsData.limit_product.split(":");
        if (limitProduct.length > 1) {
          productIdsApply = productIds.splice(0, parseInt(limitProduct[1]));
          if (window.ap_front_settings?.shop_id === "50877137076") {
            productIdsApply.push("9213954064713");
          }
        }
      } else if (AvisStyleOptions.plan === "FREE") {
        productIdsApply = productIds.splice(0, 10);
      } else if (AvisStyleOptions.plan === "BASIC") {
        productIdsApply = productIds.splice(0, 50);
      } else if (AvisStyleOptions.plan === "ADVANCED") {
        //productIdsApply = productIds.splice(0, 3000);
      }

      if (
        "product" === dataOptionApp.page &&
        (!productIdsApply ||
          productIdsApply.includes(String(dataOptionApp.product.id)))
      ) {
        var optionsApp = dataOptionApp.style_options;
        var getListKeyStyle = styleOptions.getListKeyStyle(optionsApp),
          getListKeyStyleSwatch =
            styleOptions.getListKeyStyleSwatch(optionsApp),
          getListColors = styleOptions.getListColors(optionsApp),
          getListColors2 = styleOptions.getListColors2(optionsApp),
          getListColorImage = styleOptions.getListColorImage(optionsApp),
          getListColorImageUrl = styleOptions.getListColorImageUrl(optionsApp),
          getListPriorityColor = styleOptions.getListPriority(
            optionsApp,
            "is_priority_color"
          ),
          getListPriorityImageFile = styleOptions.getListPriority(
            optionsApp,
            "is_priority_image_file"
          ),
          getListPriorityImageUrl = styleOptions.getListPriority(
            optionsApp,
            "is_priority_image_url"
          ),
          getListOrderOptions = styleOptions.getListOrderOptions(optionsApp),
          getListDesignId = styleOptions.getListDesignId(optionsApp);
        "index" === dataOptionApp.page &&
          void 0 !== window.curVariant &&
          void 0 !== window.featuredProduct &&
          "undefined" != window.options_with_values &&
          "undefined" != window.has_only_default_variant &&
          ((dataOptionApp.curVariant = window.curVariant),
          (dataOptionApp.product = window.featuredProduct),
          (dataOptionApp.options_with_values = window.options_with_values),
          (dataOptionApp.has_only_default_variant =
            window.has_only_default_variant));

        if (dataOptionApp.has_only_default_variant) return;
        if (!dataOptionApp.curVariant)
        {
          dataOptionApp.curVariant = dataOptionApp.product?.variants[0];
        }
        let configOptions = {
          product: dataOptionApp.product,
          curVariant: dataOptionApp.curVariant,
          options_with_values: dataOptionApp.options_with_values,
          has_only_default_variant: dataOptionApp.has_only_default_variant,
          configs: {
            designIds: getListDesignId,
            displayStyles: getListKeyStyle,
            displayStyleSwatchs: getListKeyStyleSwatch,
            displayColors: getListColors,
            displayColors2: getListColors2,
            displayColorsImage: getListColorImage,
            displayColorsImageUrl: getListColorImageUrl,
            getListPriorityColor: getListPriorityColor,
            getListPriorityImageFile: getListPriorityImageFile,
            getListPriorityImageUrl: getListPriorityImageUrl,
            // displaySelectType: getListSelectType,
            style_product_page_swatch: dataOptionApp.style_product_page_swatch,
            style_product_page_button: dataOptionApp.style_product_page_button,
            align_content: dataOptionApp.align_content_detail,
            showNumberStock: dataOptionApp.stock,
            styleSoldout: dataOptionApp.out_of_stock,
            enableMandatory: dataOptionApp.enable_mandatory,
            enableTooltip:
              dataOptionApp.appConfig.setting.s_show_tooltip_product,
            enableTooltipImage: dataOptionApp.appConfig.setting.tooltip_product_image,
            isOptionname:
              dataOptionApp.appConfig.setting.s_show_option_name_product,
            image_width: dataOptionApp.image_width,
            image_height: dataOptionApp.image_height,
            background_size: dataOptionApp.background_size,
            cur_locale: dataOptionApp.cur_locale,
            locale: dataOptionApp.locale,
            txtSelectAnOption: dataOptionApp.select_an_option,
            sortOption: dataOptionApp.appConfig.sort_option ?? false,
            current_variant: dataOptionApp.curVariant,
            listOrderOptions: getListOrderOptions,
            show_one_variant: dataOptionApp.show_one_variant_product,
            stock_message: dataOptionApp.stock_message,
          },
        };
        setTimeout(async function () {
          createVariantContainer(),
            await renderOptionWrapperHtml(configOptions),
            await hideShopifyVariants(),
            setTimeout(async function () {
              await binEventDropDownList();
            }, 300),
            //a(),
            await showStock(dataOptionApp.curVariant),
            (dataOptionApp.product.variants.length > 1 ||
              (1 == dataOptionApp.product.variants.length &&
                "Default Title" != dataOptionApp.product.variants[0].title)) &&
              (await binEventOptionVariants(dataOptionApp.product.variants));
        }, 300);
      }

      // Show on quickview collection page [avis_quickview]
      function renderOptionForQuickView() {
        var classSwatchProductPageQuckviewContainer =
          "avis-swatch-product-quickview-container";

        // Get all product in collection by href (has products url)
        var productElementList = Array.from(
          document.querySelectorAll(
            dataOptionApp.selectors.quickViewCollectionHref
          )
        )
          .filter(function (item) {
            return (
              item.href
                .substring(item.href.lastIndexOf("/"))
                .replace("/", "")
                .split("?")[0]
                .indexOf(".") === -1
            );
          })
          .map(function (item) {
            var productHandle = item.href
              .substring(item.href.lastIndexOf("/"))
              .replace("/", "")
              .split("?")[0];
            return fetch(`${linkHttp}products/${productHandle}.js`)
              .then(function (product) {
                return product.json();
              })
              .then(function (product) {
                return {
                  element: item,
                  product: product,
                };
              })
              .catch(function (error) {
                console.log("Error:", error);
              });
          });

        Promise.all(productElementList).then(async function (productElements) {
          var optionsApp = dataOptionApp.style_options;
          var getListKeyStyle = styleOptions.getListKeyStyle(optionsApp),
            getListKeyStyleSwatch =
              styleOptions.getListKeyStyleSwatch(optionsApp),
            getListColors = styleOptions.getListColors(optionsApp),
            getListColors2 = styleOptions.getListColors2(optionsApp),
            getListColorImage = styleOptions.getListColorImage(optionsApp),
            getListColorImageUrl =
              styleOptions.getListColorImageUrl(optionsApp),
            getListPriorityColor = styleOptions.getListPriority(
              optionsApp,
              "is_priority_color"
            ),
            getListPriorityImageFile = styleOptions.getListPriority(
              optionsApp,
              "is_priority_image_file"
            ),
            getListPriorityImageUrl = styleOptions.getListPriority(
              optionsApp,
              "is_priority_image_url"
            ),
            getListOrderOptions = styleOptions.getListOrderOptions(optionsApp),
            getListDesignId = styleOptions.getListDesignId(optionsApp);

          if (dataOptionApp.cur_locale != dataOptionApp.locale) {
            return;
          }

          const renderOptionProducts = async function () {
            await Promise.all(
              productElements.map(async function (productElement) {
                if (productElement) {
                  if (
                    !productIdsApply ||
                    productIdsApply.includes(String(productElement.product.id))
                  ) {
                    dataOptionApp.product = productElement.product;
                    dataOptionApp.curVariant =
                      productElement.product.variants.length > 0
                        ? productElement.product.variants[0]
                        : null;
                    dataOptionApp.options_with_values =
                      productElement.product.options;
                    let configOptions = {
                      product: productElement.product,
                      curVariant:
                        productElement.product.variants.length > 0
                          ? productElement.product.variants[0]
                          : null,
                      options_with_values: productElement.product.options,
                      has_only_default_variant:
                        dataOptionApp.has_only_default_variant,
                      configs: {
                        designIds: getListDesignId,
                        displayStyles: getListKeyStyle,
                        displayStyleSwatchs: getListKeyStyleSwatch,
                        displayColors: getListColors,
                        displayColors2: getListColors2,
                        displayColorsImage: getListColorImage,
                        displayColorsImageUrl: getListColorImageUrl,
                        getListPriorityColor: getListPriorityColor,
                        getListPriorityImageFile: getListPriorityImageFile,
                        getListPriorityImageUrl: getListPriorityImageUrl,
                        style_product_page_swatch:
                          dataOptionApp.style_product_page_swatch,
                        style_product_page_button:
                          dataOptionApp.style_product_page_button,
                        align_content: dataOptionApp.align_content_detail,
                        showNumberStock: dataOptionApp.stock,
                        styleSoldout: dataOptionApp.out_of_stock,
                        enableMandatory: dataOptionApp.enable_mandatory,
                        enableTooltip:
                          dataOptionApp.appConfig.setting
                            .s_show_tooltip_product,
                        isOptionname:
                          dataOptionApp.appConfig.setting
                            .s_show_option_name_product,
                        image_width: dataOptionApp.image_width,
                        image_height: dataOptionApp.image_height,
                        background_size: dataOptionApp.background_size,
                        cur_locale: dataOptionApp.cur_locale,
                        locale: dataOptionApp.locale,
                        sortOption:
                          dataOptionApp.appConfig.sort_option ?? false,
                        current_variant: dataOptionApp.curVariant,
                        listOrderOptions: getListOrderOptions,
                        show_one_variant:
                          dataOptionApp.show_one_variant_product,
                        stock_message: dataOptionApp.stock_message,
                        isQuickview: true,
                        isFeatured: false,
                      },
                    };
                    var htmlVariants = await renderOptionHtml(configOptions);

                    if (
                      null !=
                        productElement.element.closest(
                          dataOptionApp.selectors.quickViewproductCollectionItem
                        ) &&
                      null ==
                        productElement.element
                          .closest(
                            dataOptionApp.selectors
                              .quickViewproductCollectionItem
                          )
                          .querySelector(
                            `.${classSwatchProductPageQuckviewContainer}`
                          )
                    ) {
                      let classSwatchProductPageContainerQuickview = `${classSwatchProductPageQuckviewContainer}-${productElement.product.id}`;
                      // Remove all html collection gen
                      document
                        .querySelectorAll(
                          `.${classSwatchProductPageContainerQuickview}`
                        )
                        .forEach(function (t) {
                          return t.remove();
                        });
                      var elemQuickviewContainer =
                        document.createElement("div");
                      elemQuickviewContainer.classList.add(
                        classSwatchProductPageContainer
                      );
                      elemQuickviewContainer.classList.add(
                        classSwatchProductPageContainerQuickview
                      );

                      elemQuickviewContainer.innerHTML = htmlVariants;
                      let productInfoElem = productElement.element.closest(
                        dataOptionApp.selectors.quickViewproductCollectionItem
                      );
                      let selectorVariants = productInfoElem?.querySelectorAll(
                        dataOptionApp.selectors.quickViewproductSelectOption
                      );
                      if (productInfoElem && selectorVariants?.length > 0) {
                        selectorVariants.forEach(function (t) {
                          const clone = elemQuickviewContainer.cloneNode(true);
                          t.parentNode.insertBefore(clone, t);
                          t.style.display = "none";
                        });

                        setTimeout(async function () {
                          await binEventDropDownList(
                            classSwatchProductPageContainerQuickview
                          );
                        }, 300);
                        await showStock(configOptions.curVariant);
                        (dataOptionApp.product.variants.length > 1 ||
                          (1 == dataOptionApp.product.variants.length &&
                            "Default Title" !=
                              dataOptionApp.product.variants[0].title)) &&
                          (await binEventOptionVariants(
                            dataOptionApp.product.variants,
                            classSwatchProductPageContainerQuickview
                          ));
                      } else {
                        console.log("Not found quickview key!")
                      }
                    }
                  }
                }
              })
            );
          };
          await renderOptionProducts();
        });
      }

      // Show on feature page [avis_featured]
      function renderShopifyOptionForFeatured() {
        var classSwatchProductPageFeaturedContainer =
          "avis-swatch-product-featured-container";
        let featureProductUrlBlock = AvisOptionsConfig?.featured_product_url_block;
        let featureProductBlock = AvisOptionsConfig?.featured_product;
        let featureProductVariantsBlock = AvisOptionsConfig?.featured_product_variant;

        var productElementFeatureList = Array.from(
          document.querySelectorAll(
            featureProductUrlBlock.join(",")
          )
        )
        .filter(item => item?.getAttribute("data-url"))
        .map(function (item) {
          var productHandle = item.getAttribute("data-url")
            .substring(item.getAttribute("data-url").lastIndexOf("/"))
            .replace("/", "")
            .split("?")[0];
          return fetch(`${linkHttp}products/${productHandle}.js`)
            .then(function (product) {
              return product.json();
            })
            .then(function (product) {
              return {
                element: item,
                product: product,
              };
            })
            .catch(function (error) {
              console.log("Error:", error);
            });
        });

        Promise.all(productElementFeatureList).then(async function (productElements) {
          var optionsApp = dataOptionApp.style_options;
          var getListKeyStyle = styleOptions.getListKeyStyle(optionsApp),
            getListKeyStyleSwatch =
              styleOptions.getListKeyStyleSwatch(optionsApp),
            getListColors = styleOptions.getListColors(optionsApp),
            getListColors2 = styleOptions.getListColors2(optionsApp),
            getListColorImage = styleOptions.getListColorImage(optionsApp),
            getListColorImageUrl =
              styleOptions.getListColorImageUrl(optionsApp),
            getListPriorityColor = styleOptions.getListPriority(
              optionsApp,
              "is_priority_color"
            ),
            getListPriorityImageFile = styleOptions.getListPriority(
              optionsApp,
              "is_priority_image_file"
            ),
            getListPriorityImageUrl = styleOptions.getListPriority(
              optionsApp,
              "is_priority_image_url"
            ),
            getListOrderOptions = styleOptions.getListOrderOptions(optionsApp),
            getListDesignId = styleOptions.getListDesignId(optionsApp);

          if (dataOptionApp.cur_locale != dataOptionApp.locale) {
            return;
          }

          const renderOptionProducts = async function () {
            await Promise.all(
              productElements.map(async function (productElement) {
                if (productElement) {
                  if (
                    !productIdsApply ||
                    productIdsApply.includes(String(productElement.product.id))
                  ) {
                    dataOptionApp.product = productElement.product;
                    dataOptionApp.curVariant =
                      productElement.product.variants.length > 0
                        ? productElement.product.variants[0]
                        : null;
                    dataOptionApp.options_with_values =
                      productElement.product.options;
                    let configOptions = {
                      product: productElement.product,
                      curVariant:
                        productElement.product.variants.length > 0
                          ? productElement.product.variants[0]
                          : null,
                      options_with_values: productElement.product.options,
                      has_only_default_variant:
                        dataOptionApp.has_only_default_variant,
                      configs: {
                        designIds: getListDesignId,
                        displayStyles: getListKeyStyle,
                        displayStyleSwatchs: getListKeyStyleSwatch,
                        displayColors: getListColors,
                        displayColors2: getListColors2,
                        displayColorsImage: getListColorImage,
                        displayColorsImageUrl: getListColorImageUrl,
                        getListPriorityColor: getListPriorityColor,
                        getListPriorityImageFile: getListPriorityImageFile,
                        getListPriorityImageUrl: getListPriorityImageUrl,
                        style_product_page_swatch:
                          dataOptionApp.style_product_page_swatch,
                        style_product_page_button:
                          dataOptionApp.style_product_page_button,
                        align_content: dataOptionApp.align_content_detail,
                        showNumberStock: dataOptionApp.stock,
                        styleSoldout: dataOptionApp.out_of_stock,
                        enableMandatory: dataOptionApp.enable_mandatory,
                        enableTooltip:
                          dataOptionApp.appConfig.setting
                            .s_show_tooltip_product,
                        isOptionname:
                          dataOptionApp.appConfig.setting
                            .s_show_option_name_product,
                        image_width: dataOptionApp.image_width,
                        image_height: dataOptionApp.image_height,
                        background_size: dataOptionApp.background_size,
                        cur_locale: dataOptionApp.cur_locale,
                        locale: dataOptionApp.locale,
                        sortOption:
                          dataOptionApp.appConfig.sort_option ?? false,
                        current_variant: dataOptionApp.curVariant,
                        listOrderOptions: getListOrderOptions,
                        show_one_variant:
                          dataOptionApp.show_one_variant_product,
                        stock_message: dataOptionApp.stock_message,
                        isQuickview: false,
                        isFeatured: true,
                      },
                    };
                    var htmlVariants = await renderOptionHtml(configOptions);

                    let featureBlock = productElement.element.closest(featureProductBlock.join(","));
                    if (featureBlock && !featureBlock.querySelector(`.${classSwatchProductPageFeaturedContainer}`))
                    {
                      let classSwatchProductPageFeatured = `${classSwatchProductPageFeaturedContainer}-${productElement.product.id}`;
                      // Remove all html collection gen
                      featureBlock.querySelectorAll(
                          `.${classSwatchProductPageFeatured}`
                        )
                        .forEach(function (t) {
                          return t.remove();
                        });

                      var elemFeatureContainer = document.createElement("div");
                      elemFeatureContainer.classList.add(classSwatchProductPageContainer);
                      elemFeatureContainer.classList.add(classSwatchProductPageFeatured);

                      elemFeatureContainer.innerHTML = htmlVariants;
                      let selectorVariants = featureBlock.querySelectorAll(
                        featureProductVariantsBlock.join(",")
                      );
                      selectorVariants.forEach(function (t) {
                        const clone = elemFeatureContainer.cloneNode(true);
                        t.parentNode.insertBefore(clone, t);
                        t.style.display = "none";
                      });

                      setTimeout(async function () {
                        await binEventDropDownList(
                          classSwatchProductPageFeatured
                        );
                      }, 300);
                      await showStock(configOptions.curVariant);
                      (dataOptionApp.product.variants.length > 1 ||
                        (1 == dataOptionApp.product.variants.length &&
                          "Default Title" !=
                            dataOptionApp.product.variants[0].title)) &&
                        (await binEventOptionVariants(
                          dataOptionApp.product.variants,
                          classSwatchProductPageFeatured
                        ));
                    } else {
                      console.log("Not found featured product key!")
                    }
                  }
                }
              })
            );
          };
          await renderOptionProducts();
        });
      }

      if (optionsSwatchConfig?.appConfig?.setting?.s_show_featured_product &&
        AvisStyleOptions.plan !== "OLD" &&
        AvisStyleOptions.plan !== "FREE"
      ) {
        renderShopifyOptionForFeatured();
      }

      if (optionsSwatchConfig?.appConfig?.setting?.s_show_quickview &&
        AvisStyleOptions.plan !== "OLD" &&
        AvisStyleOptions.plan !== "FREE"
      ) {
        let intervalCheckQuickview = setInterval(function () {
          if (
            document.querySelectorAll(
              dataOptionApp.selectors.quickViewButtonSubmit
            ).length > 0
          ) {
            clearInterval(intervalCheckQuickview);
            document
              .querySelectorAll(dataOptionApp.selectors.quickViewButtonSubmit)
              .forEach(function (elem) {
                elem.addEventListener("click", function (event) {
                  let interval = setInterval(() => {
                    if (
                      document.querySelectorAll(
                        dataOptionApp.selectors.quickViewModal
                      ).length > 0
                    ) {
                      clearInterval(interval);
                      renderOptionForQuickView();
                    } else {
                      console.log("Not found quickview button key!");
                    }
                  }, 300);
                });
              });
          }
        }, 300);

        if (window.ap_front_settings?.shop_id === "86459449671")
        {
          setInterval(function(){
            let linkQuickview = document.querySelector(".hotspot__modal variant-selection:not(.quickview-avis)");
            if (linkQuickview)
            {
              linkQuickview.classList.add("quickview-avis");
              renderOptionForQuickView();
            }
          }, 200);
        }
      }
    }
  }
}

if (window.ap_front_settings?.shop_id)
  {
    apoStyleProduct();
  }
  else
  {
      let index = 0;
      let interAvisProduct = setInterval(function(){
      index++;
      if (window.ap_front_settings?.shop_id)
      {
          clearInterval(interAvisProduct);
          apoStyleProduct();
      }
      if (index > 1000)
      {
          clearInterval(interAvisProduct);
      }
      }, 200);
  }
