var apoProductDefault = "default";
(ap_loadScript = function (t, i) {
  var e = document.createElement("script");
  (e.type = "text/javascript"),
    e.readyState
      ? (e.onreadystatechange = function () {
        ("loaded" != e.readyState && "complete" != e.readyState) ||
          ((e.onreadystatechange = null), i());
      })
      : (e.onload = function () {
        i();
      }),
    (e.src = t),
    document.getElementsByTagName("head")[0].appendChild(e);
}),
  (ap_addOptions = async function ($, customizeryConfig) {
    // Append POD
    const productMediaListClass = window.AvisOptionsData?.podWrapper ? window.AvisOptionsData?.podWrapper : [".hdt-product-media-wrapp",".main-product__media--slider-wrapper .main-product__media--slider swiper-product-gallery", ".Product__Slideshow .flickity-viewport .flickity-slider", ".product__photos .product-grid__photos", ".product__media__wrapper .product__grid", ".product__media-wrapper .product__media-list", ".product-gallery__media-list", ".media-gallery .media-gallery__inner", ".media-gallery__viewer .media-viewer", ".product-gallery .product-gallery--viewer", ".product__photos .product__main-photos", ".preview-card-container", ".product-information__media", "product-gallery .swiper-slide-active .swiper-slide__inner > div"]
          , productMediaActiveClass = window.AvisOptionsData?.podMediaActive ? window.AvisOptionsData?.podMediaActive : [".hdt-product__media-item.is-selected.is-in-view",".hdt-product__media-item",".swiper-wrapper .swiper-slide[data-selected]", ".Product__SlideItem.is-selected" ,".product-grid__photos .product-grid__item.product-grid__item--1", ".product__media__wrapper .product__grid .product__media", ".product__media-wrapper .product__media-list .product__media-item.is-active", ".product__photos .product__main-photos .product-main-slide.is-selected", ".product-gallery__media-list .product-gallery__media.is-selected", '.product-gallery .product-gallery--viewer .product-gallery--image[data-gallery-selected="true"]', '.media-gallery--carousel slideshow-container .product-media-container--image[aria-hidden="false"]', ".media-gallery__grid .product-media-container--image", ".media-gallery__viewer .media-viewer .media-viewer__item.is-current-variant", ".media-gallery .media-gallery__inner .slider__item.is-active .product-media--image", ".product__media-wrapper .product__media-list .splide__slide.is-active.is-visible", "product-gallery .swiper-slide-active .swiper-slide__inner > div"]
          , productMediaThumbsClass = window.AvisOptionsData?.podThumbList ? window.AvisOptionsData?.podThumbList : [".hdt-product__media-item",".main-product__media--slider-wrapper .main-product__media--slider .swiper .swiper-wrapper .swiper-slide","div.product-grid__container div.product-slideshow div.product-grid__item",".product__thumbs .product__thumb-item", ".product__media-wrapper .product__media-list .product__media-item:not(.tpo_ignore)", ".media-gallery__grid .product-media-container--image", ".media-gallery--carousel slideshow-container .product-media-container--image", ".thumbnail-list .thumbnail-list__item .thumbnail", ".product__thumb-item .product__thumb:not(.tpo_ignore)", ".product-gallery--media-thumbnail", ".media-thumbs__item .media-thumbs__btn", ".thumbnails .slider__grid .slider__item", ".thumbnail-list .item.splide__thumbnail.is-active.is-visible", ".slideshow-controls__thumbnails-container .slideshow-controls__thumbnails .slideshow-control","[id^='swiper-wrapper'] .swiper-slide"]
          , productMediaItemListClass = window.AvisOptionsData?.podMediaList ? window.AvisOptionsData?.podMediaList : [".hdt-product-media__thumb .hdt-slider__container", ".Product__SlideItem", ".product__media-wrapper .product__media-list .product__media-item", ".product-gallery__media-list .product-gallery__media", ".media-gallery__grid .product-media-container--image", ".product-gallery .product-gallery--viewer .product-gallery--image", ".productView-image-wrapper .productView-nav .productView-image", ".rio-media-gallery .pwzrswiper-wrapper .pwzrswiper-slide", ".product-gallery-container .product-gallery-mobile-container.active .gallery-slide", ".product-gallery-container .product-gallery-desktop.active .gallery-image-container","product-gallery .swiper-slide .swiper-slide__inner > div"];

    if (customizeryConfig.optionSets.length === 0 || window.apo_js_loaded.options) {
      if (typeof window.removeDisabledBtnAddCart === 'function') {
        setTimeout(window.removeDisabledBtnAddCart, 200);
      }
    }
    var shop_id = window.ap_front_settings?.shop_id;
    let isShopNotProductPage = ["5244321856"].includes(shop_id);
    if (["72583053543"].includes(shop_id)) {
      let avisPosition = document.querySelector(".avis-position");
      if (!avisPosition) return;
      let isExistOption = avisPosition.querySelector(".avpoptions-container__v2");
      if (!isExistOption) {
        window.apo_js_loaded.options = false;
      }
    }
    if (window?.ap_front_settings?.page_type === "product" && isShopNotProductPage && window.apo_js_loaded.options) return;
    if (!isShopNotProductPage && window.apo_js_loaded.options) return;
    window.avisOpions = window.avisOpions || {};
    window.apo_js_loaded.options = true;
    window.mapConditionalLogicValue = [];
    let isDesignV2 = customizeryConfig?.is_design_v2 ?? false;
    window.ap_front_settings.config.is_clone_bt_addcart = true;
    var money_format =
      window.ap_front_settings && window.ap_front_settings.money_format
        ? ['62206672977', '69406490814', '73060385049', '55602872595', '69627019432'].includes(window.ap_front_settings?.shop_id) ? window.ap_front_settings.money_with_currency_format : window.ap_front_settings.money_format
        : "${{amount}}";
    if (["85222555996"].includes(window.ap_front_settings?.shop_id)) {
      money_format = "{{amount_with_comma_separator}}€";
    }
    if (["68326162671"].includes(window.ap_front_settings?.shop_id) && Shopify.theme.id == "152239931631") {
      money_format = "${{amount_no_decimals}}";
    }
    if (Object.keys(window.apoOptionLocales.avisSettings).length > 0) {
      for (let settingItem in window.apoOptionLocales.avisSettings) {
        if (window.apoOptionLocales.avisSettings[settingItem])
          customizeryConfig[settingItem] = window.apoOptionLocales.avisSettings[settingItem];
      }
    }
    let isCssV3 = false;
    const OPTION_URL = {
      group: "group_product",
      only: "only_url",
      allowed: "allowed_open_url",
    };
    const OPTION_URL_DISPLAY = {
      value: "click_value",
      view: "click_view",
    };

    const AVIS_CLASS = {
      soldOutOption: "avis-option-soldout",
    };
    let AVIS_SOLD_OUT = "Sold out";
    if (["88420122940"].includes(window.ap_front_settings?.shop_id)) {
      AVIS_SOLD_OUT = "Out of Stock";
    }
    var listOptions = [];
    var useAddchargeApoOption =
      customizeryConfig?.is_addcharge_apo_option ?? false;
    if (
      !useAddchargeApoOption &&
      customizeryConfig?.cart_page?.display_addon_cart
    )
      useAddchargeApoOption = true;

    // Add setting: show watermark
    var isShowWatermarkOnProductPage =
      customizeryConfig.show_watermark_on_product_page;

    var totalPriceAdd = 0;
    var container_AP_POptions = "avpoptions-container__v2";
    let isCustom149 =
      window.ap_front_settings?.product_info?.product_id === "8121233309931" &&
      (shop_id === "61530898667" || shop_id === "67691053329");

    let isShopUploadCdnSpf = ["65746239548", "61691986178"].includes(shop_id); //"65088847929",

    let isThemeProperty = shop_id === "84988035369";
    let isNotUseAvisHidden = false; // shop_id === "77859357001";
    let convertTooltipBody = ["56301813831", "77756367123"].includes(shop_id);

    var joinAddCharge = window.ap_front_settings.joinAddCharge;
    if (shop_id === "59437023322") {
      joinAddCharge = "||";
    }
    if (shop_id === "48439328922" && customizeryConfig?.widget) {
      let keyElement =
        !customizeryConfig?.widget || !customizeryConfig?.widget?.position || customizeryConfig?.widget?.position == "default"
          ? "default"
          : customizeryConfig?.widget?.position.split("_")[1];
      if (keyElement === "selector" && customizeryConfig?.widget?.selector) {
        if (!document.querySelector(customizeryConfig?.widget?.selector)) return;
      }
    }

    let showPriceACCart =
      shop_id === "70719799540" || shop_id === "54416834757" || shop_id === "86711959862" || shop_id === "54416834757"; //a9b06b-ca.myshopify.com
    let KEY_FORMAT_PRICE = "addon_price";
    let KEY_JOIN_PRICE = "(+";
    let avisFormatPrice = `${KEY_JOIN_PRICE}${KEY_FORMAT_PRICE})`;

    if (shop_id === '10278593') {
      avisFormatPrice = `(${KEY_FORMAT_PRICE})`;
    }

    if (shop_id === '10278593') {
      avisFormatPrice = `(${KEY_FORMAT_PRICE})`;
    }

    let isShopUploadShopfiy = ["60173221974", "62129143868"].includes(shop_id);

    let isNewValidateShop = ["59661713513", "66985525527", "81382703435", "90115932451", "87503831334", "87616127313"].includes(shop_id);
    if (!isNewValidateShop) {
      isNewValidateShop = customizeryConfig?.validate_settings === "inline";
    }
    let isQtyDefaultZero = ["95302287692", "75631984989", "58362396724", "81519247698", "77601243472", "83432636743", "63594234085", "66916745498", "73531588924", "60284698735", "59661713513", "79486681403", "50712903860", "58727497788", "85588181272"].includes(shop_id);
    if (!isQtyDefaultZero) {
      isQtyDefaultZero = customizeryConfig?.is_quantity_start_zero ?? false;
    }
    let isNotSyncQtyProductAc = ["55533404247", "60947365957"].includes(shop_id);
    let useSoldOutOption =
      customizeryConfig?.product_page?.out_of_stock_display === "hide_option";
    (window.AP_POptions = window.AP_POptions || {}), (AP_POptions.$ = $);
    function getEventData(e, t) {
      return e._data
        ? e._data(t, "events")
        : e.data
          ? e.data(t, "events")
          : null;
    }
    let apoBodyTooltip = document.querySelector("#apo-body-tooltip");
    let hideTimeout = null;
    function hideTooltipWithDelay() {
      hideTimeout = setTimeout(() => {
        apoBodyTooltip.classList.remove("tooltip-show");
        setTimeout(() => {
          apoBodyTooltip.classList.add("tooltip-hide");
        }, 200);
      }, 300);
    }

    function cancelHideTooltip() {
      clearTimeout(hideTimeout);
    }
    function createBodyTooltip(apoBodyTooltip) {
      if (!apoBodyTooltip) {
        apoBodyTooltip = document.getElementById("apo-body-tooltip");
        if (!apoBodyTooltip) {
          apoBodyTooltip = document.createElement("div");
          apoBodyTooltip.id = "apo-body-tooltip";
          apoBodyTooltip.className = "apo-body-tooltip";
          document.body.appendChild(apoBodyTooltip);
        }
        console.log("create apoBodyTooltip");
      }
      apoBodyTooltip.addEventListener("mouseenter", cancelHideTooltip);

      apoBodyTooltip.addEventListener("touchstart", () => {
        isTouch = true;
        cancelHideTooltip();
      });

      return apoBodyTooltip;
    }
    createBodyTooltip(apoBodyTooltip);
    var pluginAction = {
      getProduct: (t) =>
        new Promise((o, n) => {
          let rootUrl = "/";
          // if (shop_id === "72799093070") {
          //   rootUrl = "/pt/";
          // }
          if (["70071189821", "85460451654", "93700129092"].includes(shop_id)) {
            rootUrl = Shopify.routes.root;
          }
          o(
            fetch(rootUrl + `products/${t}.js`, { method: "GET" })
              .then((t) => {
                if (t.status == "200") return t.json();
                else null;
              })
              .then((t) => t)
          );
        }),
      getColecByPrId: async function (productId) {
        const fetchOptions = {
          method: "GET",
          headers: {
            "shop-id": shop_id,
          },
        };
        return new Promise((n, o) => {
          n(
            fetch(
              `${priceMod.avisUrl}product/collections?id=${productId}`,
              fetchOptions
            )
              .then((t) => {
                return t.json();
              })
              .then((t) => t)
          );
        });
      },
      queryProductInfo: async function (locales, ids, isCountry = true) {
        let country = "";
        if (isCountry) {
          country = `country: "${window.Shopify.country.toUpperCase() ?? "EN"}", `;
        }

        if (!ids?.length) return "";
        locales = window.apoOptionLocales?.convertLocales(locales);
        let idsArr = [];
        for (let id of ids) {
          idsArr.push(`gid://shopify/Product/${id}`);
        }
        let idsString = idsArr.join('","');
        let query = `\n        query productDetails @inContext(${country} language: ${locales.toUpperCase()}) {\n            nodes(ids: ["${idsString}"]) {\n                ... on Product {\n                    id\n                    handle\n                    title\n                    priceRange{\n                            minVariantPrice{\n                    amount          }\n                    }\n                    availableForSale\n                    variants(first:250){\n                        nodes{\n                            id\n                            availableForSale\n                            quantityAvailable\n                            compareAtPrice{\n                                currencyCode\n                                amount\n                            }\n                            currentlyNotInStock\n                            price{\n                                currencyCode\n                                amount\n                            }\n                            title\n                            sku\n                        }\n                    }\n                }\n            }\n        }\n    `;
        return query;
      },
      queryVariants: async function (locales, ids) {
        if (!ids?.length) return "";
        locales = window.apoOptionLocales?.convertLocales(locales);
        let idsArr = [];
        for (let id of ids) {
          idsArr.push(`gid://shopify/ProductVariant/${id}`);
        }
        let idsString = idsArr.join('","');
        let query = `\n        query productDetails @inContext(country: ${window.Shopify.country.toUpperCase() ?? "EN"}, language: ${locales.toUpperCase()}) {\n            nodes(ids: ["${idsString}"]) {\n                ... on ProductVariant {\n                    id\n                            availableForSale\n                            quantityAvailable\n                            compareAtPrice{\n                                currencyCode\n                                amount\n                            }\n                            currentlyNotInStock\n                            price{\n                                currencyCode\n                                amount\n                            }\n                            title\n                            sku\n                        }\n            }\n        }\n    `;
        return query;
      },
      fetchStoreFront: async function (queryData) {
        if (!window.apoOptionLocales?.config?.storefront_connect) return null;
        let root = window.Shopify && window.Shopify.routes && (window.Shopify.routes.root || window.Shopify.routes.root_url) || "/";
        let url = `${root}api/${window.apoOptionLocales?.version}/graphql.json`;
        let data = {
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
        if (response.ok) {
          const json = await response.json();
          return json;
        }

        return null;
      }
    };
    var themeId = Shopify?.theme?.id.toString();
    var isMainTheme = Shopify?.theme?.role === "main";
    var isStoreLazyImg = ["131904798791", "131714842695"].includes(themeId) && !isMainTheme && shop_id === "57908756551";
    var key_variant_conditional = "avis_shopify_option";
    var formProductGenOptionJs = {};
    var selectedVariantIdAll = {};
    window.pubFormProductGenOptionJs = formProductGenOptionJs;
    var conditionalLogicInstances = { default: "" };
    window.apoConditionalLogic = conditionalLogicInstances;

    function checkCustomerApplyOptionSet(optionSet) {
      const customer = window?.ap_front_settings?.customer;
      const customerType = optionSet?.customer_type;
      const optionSetCustomers = optionSet?.customers;
      const conditionCustomers = optionSet?.apply_customer;
      if (!customerType || customerType === "all") {
        return true;
      }
      if (customer && customerType === "manual" && optionSetCustomers?.length > 0) {
        return optionSetCustomers?.includes(customer.id);
      }
      if (customerType === "automated" && conditionCustomers?.type && conditionCustomers?.conditions?.length > 0) {
        return checkAutomatedCustomer(conditionCustomers.type, conditionCustomers.conditions);
      }
      return false;
    }
    const checkAutomatedCustomer = (type, conditions) => {
      if (type === "all") {
        for (let condition of conditions) {
          if (!checkConditionCustomer(condition)) {
            return false;
          }
        }
        return true;
      }
      if (type === "any") {
        for (let condition of conditions) {
          if (checkConditionCustomer(condition)) {
            return true;
          }
        }
        return false;
      }
      return false;
    };
    const checkConditionCustomer = (condition) => {
      const customer = window?.ap_front_settings?.customer;
      switch (condition.type) {
        case "tags":
          return checkKeyOfCondition(condition.keywordCompareType, condition.selector, "tags");
        case "name":
          return checkKeyOfCondition(condition.keywordCompareType, condition.selector, "name");
        case "email":
          return checkKeyOfCondition(condition.keywordCompareType, condition.selector, "email");
        case "logged-in":
          return !!customer;
        case "guest":
          return !customer;
      }
    };
    const checkKeyOfCondition = (keywordCompareType, selector, field) => {
      const {  tags = [], email = "", name = "" } = window.ap_front_settings.customer || {};
      const convertSelector = selector.toLowerCase().trim();
      const convertTags = tags.map((tag) => tag.toLowerCase().trim());
      const convertEmail = email.toLowerCase().trim();
      const convertName = name ? name.toLowerCase().trim() : email.toLowerCase().trim();
      switch (keywordCompareType) {
        case "is_equal_to":
          if (field === "tags") return convertTags?.includes(convertSelector);
          if (field === "email") return convertEmail === convertSelector;
          if (field === "name") return convertName === convertSelector;
        case "is_not_equal_to":
          if (field === "tags") return !convertTags?.includes(convertSelector);
          if (field === "email") return convertEmail !== convertSelector;
          if (field === "name") return convertName !== convertSelector;
        case "starts_with":
          if (field === "tags") return convertTags.some((tag) => tag.startsWith(convertSelector));
          if (field === "email") return convertEmail.startsWith(convertSelector);
          if (field === "name") return convertName.startsWith(convertSelector);
        case "ends_with":
          if (field === "tags") return convertTags.some((tag) => tag.endsWith(convertSelector));
          if (field === "email") return email.endsWith(convertSelector);
          if (field === "name") return convertName.endsWith(convertSelector);
        case "contains":
          if (field === "tags") return convertTags.some((tag) => tag.includes(convertSelector));
          if (field === "email") return convertEmail.includes(convertSelector);
          if (field === "name") return convertName.includes(convertSelector);
        case "does_not_contain":
          if (field === "tags") return !convertTags.find((tag) => tag.includes(convertSelector));
          if (field === "email") return !convertEmail.includes(convertSelector);
          if (field === "name") return !convertName.includes(convertSelector);
      }
    };
    const checkCountryApplyOptionSet = (optionSet) => {
      const country = window?.ap_front_settings?.curCountryCode;
      const optionSetMarket = optionSet?.markets;
      if (!optionSetMarket?.type || optionSetMarket.type === "all") {
        return true;
      }
      if (country) {
        if (optionSetMarket?.type === "include") {
          return optionSetMarket?.include?.includes(country);
        }
        if (optionSetMarket?.type === "exclude") {
          return !optionSetMarket?.exclude?.includes(country);
        }
      }
      return false;
    };
    function intervalHandleShopifyVariant(
      elemOptionAvisContainer,
      productId,
      productInfo
    ) {
      setInterval(function () {
        let watchingVariant =
          conditionalLogicInstances[productId].watching[
          key_variant_conditional
          ];
        if (!watchingVariant) return;

        let variants = productInfo.variants;
        let variantId = variants[0].id.toString();
        let formData = new FormData(formProductGenOptionJs[productId]);
        if (formData && formData.get("id")) variantId = formData.get("id");
        else {
          const searchParams = new URLSearchParams(window.location.search);
          if (searchParams?.get("variant")) {
            variantId = searchParams?.get("variant");
          }
        }

        let oldVariantId = selectedVariantIdAll[productId];
        if (oldVariantId !== variantId) {
          conditionalLogicInstances[productId]?.s_check_input_variant(
            elemOptionAvisContainer,
            productId,
            productInfo
          );
        }
      }, 300);
    }
    let variantIdTemp = "";
    function handleChangeShopifyVariant(
      elemOptionAvisContainer,
      productId,
      productInfo
    ) {
      const observer = new MutationObserver(function () {
        // Handle change variant reload view clear avis option
        // || shop_id === "83272958226"
        if (shop_id === "60370419756" || shop_id === "72903328090" || shop_id === "90746126677" || shop_id === "92915532087") {
          if (
            window?.ap_front_settings?.page_type === "product" &&
            !document.querySelector(".avpoptions-container__v2")
          ) {
            if (shop_id === "72903328090" || shop_id === "90746126677") {
              let variantId = "";
              const searchParams = new URLSearchParams(window.location.search);
              if (searchParams?.get("variant")) {
                variantId = searchParams?.get("variant");
              }

              if (variantIdTemp !== variantId) {
                variantIdTemp = variantId;
                mainCheckAllRules();
              }
            }
            else mainCheckAllRules();
          }
        }
        setTimeout(function () {
          // handle when slow change shopify option
          if (shop_id === "29666866") {
            intervalHandleShopifyVariant(
              elemOptionAvisContainer,
              productId,
              productInfo
            );
          } else {
            conditionalLogicInstances[productId]?.s_check_input_variant(
              elemOptionAvisContainer,
              productId,
              productInfo
            );
          }
        }, 200);
      });
      const config = { subtree: true, childList: true };
      observer.observe(document, config);

      if (shop_id === "14252734" || shop_id === "57017368679" || shop_id === "70435307786" || shop_id === "92915532087") {
        intervalHandleShopifyVariant(
          elemOptionAvisContainer,
          productId,
          productInfo
        );
      }
    }

    // 1. Check rules options
    var customizeryRules = new (function () {
      var e = this;
      return (
        (e.getHandleFromUrl = function (e) {
          var t = e.replace(/\/$/, "").split("/");
          return (
            ("products" == t[t.length - 2] || "products_preview" === t.pop()) &&
            t[t.length - 1].replace(/(.*)?\?.*$/, "$1")
          );
        }),
        (e.getProduct = function (t, n) {
          if (t instanceof Object) return n(t);
          var i = e.getProductFromWindow();
          i ? n(i) : t ? e.pullProduct(t, n) : n(!1);
        }),
        (e.getProductFromWindow = function () {
          return window.ap_front_settings &&
            window.ap_front_settings.product_info.product instanceof Object
            ? window.ap_front_settings.product_info.product
            : undefined;
        }),
        (e.pullProduct = function (e, t) {
          return window.IS_AP_POptions
            ? void $.getJSON(
              "//" +
              window.shopConfiguration.uuid +
              ".myshopify.com/products/" +
              e +
              ".json",
              function (e) {
                t(e.product);
              }
            )
            : void $.ajax({
              dataType: "json",
              cache: !1,
              url: "/products/" + e + ".json",
              success: function (e) {
                t(e.product);
              },
              error: function (e) {
                throw "AvisPlus Options product lookup error";
              },
            });
        }),
        (e.checkRuleForProduct = function (ruleSetItem, product) {
          let t = ruleSetItem;
          let n = product;
          switch (
          ((t.selector = String(t.selector).toLowerCase().trim()), t.type)
          ) {
            case "all":
              return !0;
            case "product_handle":
              return n.handle.toLowerCase().trim() === t.selector;
            case "product_url":
              var i = t.selector;
              return n.handle.toLowerCase().trim() === e.getHandleFromUrl(i);
            case "tag":
              return "string" == typeof n.tags
                ? ((n.tags = n.tags.toLowerCase()),
                  n.tags.indexOf(", ") >= 0
                    ? n.tags.split(", ").indexOf(t.selector) >= 0
                    : n.tags === t.selector)
                : ((n.tags = n.tags.join(",").toLowerCase().split(",")),
                  n.tags.indexOf(t.selector) >= 0);
            case "vendor":
              return n.vendor.toLowerCase().trim() === t.selector;
            case "type":
              if (n.type) return n.type.toLowerCase().trim() === t.selector;
              if (n.product_type)
                return n.product_type.toLowerCase().trim() === t.selector;
          }
        }),
        (e.checkConditionsForProduct = function (type, conditions, product) {
          switch (type) {
            case "all":
              let index = 0;
              for (let condition of conditions) {
                if (!e.checkConditionItemForProduct(condition, product)) break;
                index = index + 1;
              }

              return index == conditions.length;

            case "any":
              for (let condition of conditions) {
                if (e.checkConditionItemForProduct(condition, product))
                  return true;
              }
              return false;

            default:
              return false;
          }
        }),
        (e.checkConditionItemForProduct = function (condition, product) {
          if (!condition["type"] || !condition["selector"]) return false;

          let filter = String(condition.selector).toLowerCase().trim();
          let keywordCompareType = condition["keywordCompareType"];
          let data = null;

          switch (condition.type) {
            case "title":
              return e.compareKeyConditionItemForProduct(
                keywordCompareType,
                filter,
                product.title
              );

            case "type":
              if (product["type"]) data = product.type;
              else if (product["product_type"]) data = product.product_type;

              return e.compareKeyConditionItemForProduct(
                keywordCompareType,
                filter,
                data
              );

            case "vendor":
              return e.compareKeyConditionItemForProduct(
                keywordCompareType,
                filter,
                product["vendor"]
              );
            case "tag":
              return e.compareKeyConditionItemForProductTag(
                keywordCompareType,
                filter,
                product.tags
              );

            // console.log("product.tags 2", product.tags);
            case "price":
              return e.compareKeyConditionItemForProduct(
                keywordCompareType,
                parseFloat(filter) * 100,
                product["price"]
              );

            case "collection":
              let collectionsOfProduct = product.collections;
              if (!collectionsOfProduct) return false;

              let findCollection = collectionsOfProduct?.find(x => x.title && String(x.title).toLowerCase().trim() === filter);
              if (keywordCompareType == "is_equal_to") {
                return findCollection ? true : false;
              }

              if (keywordCompareType == "is_not_equal_to") {

                return findCollection ? false : true;
              }

              return false;
          }

          return false;
        }),
        (e.compareKeyConditionItemForProductTag = function (
          keywordCompareType,
          filter,
          data
        ) {
          if (!keywordCompareType) return false;
          switch (keywordCompareType) {
            case "is_equal_to":
              return "string" == typeof data
                ? ((data = data.toLowerCase()),
                  data.indexOf(", ") >= 0
                    ? data.split(", ").indexOf(filter) >= 0
                    : data === filter)
                : ((data = data.join(",").toLowerCase().split(",")),
                  data.indexOf(filter) >= 0);

            case "is_not_equal_to":
              return "string" == typeof data
                ? ((data = data.toLowerCase()),
                  data.indexOf(", ") >= 0
                    ? data.split(", ").indexOf(filter) == -1
                    : data === filter)
                : ((data = data.join(",").toLowerCase().split(",")),
                  data.indexOf(filter) == -1);
            case "contains":
              if ("string" == typeof data) data = data.toLowerCase();
              else data = data.join(", ").toLowerCase();

              return data.split(", ").find((x) => x.indexOf(filter) > -1);
            case "does_not_contain":
              if ("string" == typeof data) data = data.toLowerCase();
              else data = data.join(", ").toLowerCase();

              return (
                data.split(", ").find((x) => x.indexOf(filter) > -1) ===
                undefined
              );
            case "starts_with":
              return "string" == typeof data
                ? ((data = data.toLowerCase()),
                  data.indexOf(", ") >= 0
                    ? data.split(", ").some((item) => item.startsWith(filter))
                    : data === filter)
                : ((data = data.join(",").toLowerCase().split(",")),
                  data.some((item) => item.startsWith(filter)));
            case "ends_with":
              return "string" == typeof data
                ? ((data = data.toLowerCase()),
                  data.indexOf(", ") >= 0
                    ? data.split(", ").some((item) => item.endsWith(filter))
                    : data === filter)
                : ((data = data.join(",").toLowerCase().split(",")),
                  data.some((item) => item.endsWith(filter)));
            default:
              return false;
          }
        }),
        (e.compareKeyConditionItemForProduct = function (
          keywordCompareType,
          filter,
          data
        ) {
          if (!keywordCompareType) return false;

          if (data && "string" == typeof data) data = data.toLowerCase().trim();

          switch (keywordCompareType) {
            case "is_equal_to":
              return filter == data;

            case "is_not_equal_to":
              return filter != data;

            case "starts_with":
              return data.startsWith(filter);

            case "ends_with":
              return data.endsWith(filter);

            case "does_not_contain":
              return data && data.indexOf(filter) == -1;

            case "contains":
              return data && data.indexOf(filter) >= 0;

            case "is_greater_than":
              return parseFloat(filter) < parseFloat(data);

            case "is_less_than":
              return parseFloat(filter) > parseFloat(data);

            default:
              return false;
          }
        }),
        (e.checkRuleSetForProduct = function (t, n) {
          var i = !1;
          return (
            $.each(t, function (t, o) {
              if (o && o.selector && o.type && e.checkRuleForProduct(o, n))
                return (i = !0), !1;
            }),
            i
          );
        }),
        (e.checkAllRules = function (
          optionSetsConfig,
          optionSets,
          productInfo,
          productId,
          renderOptions
        ) {
          // t: customizeryConfig, n: optionSets, o: function add options
          return optionSets && optionSets.length
            ? (productInfo ||
              (productInfo = e.getHandleFromUrl(location.pathname)), // If dont't product, get handle product by url
              void e.getProduct(productInfo, async function (productInfo) {
                if (productInfo && AvisStyleOptions.currency !== window?.Shopify?.currency?.active && window.apoOptionLocales?.config?.primary_locale) {
                  let queryProduct = await pluginAction.queryProductInfo(Shopify.locale ?? "en", [productInfo.id], false);
                  let productLocale = await pluginAction.fetchStoreFront(queryProduct);
                  if (productLocale?.data?.nodes?.length) {
                    productInfo.price = productLocale.data.nodes[0]?.priceRange?.minVariantPrice?.amount;
                  }
                }
                let checkExistCollection = optionSets?.find(
                  (x) =>
                    x.type === "automated" &&
                    x?.conditional_applying_product?.conditions &&
                    x.conditional_applying_product.conditions.find(
                      (y) => y.type === "collection" && y.selector
                    )
                );
                // Get collections
                if (productInfo?.id && checkExistCollection) {
                  if (productId === apoProductDefault) {
                    productInfo["collections"] =
                      window?.ap_front_settings?.product_info?.collections;
                  } else {
                    let collections = await pluginAction.getColecByPrId(
                      productInfo?.id
                    );
                    productInfo["collections"] = collections?.data;
                  }
                }

                return productInfo
                  ? renderOptions(
                    optionSets.filter(function (
                      optionSet
                    ) {
                      if (
                        (window.ap_front_settings.config &&
                          window.ap_front_settings.config.app_v &&
                          window.ap_front_settings.config.app_v.indexOf(
                            "v2"
                          ) > -1) ||
                        (optionSetsConfig["app_v"] &&
                          optionSetsConfig["app_v"].indexOf("v2") > -1)
                      ) {
                        if (!optionSet.type) return false;
                        const isCheckCustomer = checkCustomerApplyOptionSet(optionSet);
                        const isCheckCountry = checkCountryApplyOptionSet(optionSet);
                        if (!isCheckCustomer) return false;
                        if (!isCheckCountry) return false;
                        switch (optionSet.type) {
                          case "all":
                            return true;

                          case "manual":
                            if (
                              !optionSet["products"] ||
                              optionSet.products.length == 0
                            ) {
                              return false;
                            } else {
                              return optionSet.products.includes(
                                String(productInfo.id)
                              );
                            }

                          case "automated":
                            if (
                              !optionSet["conditional_applying_product"] ||
                              !optionSet.conditional_applying_product[
                              "type"
                              ] ||
                              !optionSet.conditional_applying_product[
                              "conditions"
                              ]
                            )
                              return false;

                            return e.checkConditionsForProduct(
                              optionSet.conditional_applying_product.type,
                              optionSet.conditional_applying_product
                                .conditions,
                              productInfo
                            );

                          default:
                            return false;
                        }
                      } else {
                        if (
                          !optionSet.rule_sets ||
                          !optionSet.rule_sets.length
                        )
                          return false;
                        if (optionSet.all_products) return true;
                        var ruleSets = optionSet.rule_sets.filter(function (
                          ruleSet
                        ) {
                          return e.checkRuleSetForProduct(
                            ruleSet,
                            productInfo
                          );
                        });
                        return ruleSets.length === optionSet.rule_sets.length;
                      }
                    }),
                    productInfo
                  )
                  : renderOptions(null);
              }))
            : renderOptions(null);
        }),
        e
      );
    })();
    // 2. Init option for product page
    var priceModAll = {};
    window.avisAddChargeActive = priceModAll;
    function getAllProperties(productId) {
      let avisAddCartFormActive = formProductGenOptionJs[productId];

      if (
        avisAddCartFormActive?.className?.indexOf("avisAddCartFormActive") > -1
      )
        return;

      let properties = [];
      if (avisAddCartFormActive.localName === "form") {
        let formData = new FormData(avisAddCartFormActive);
        if (typeof formData?.forEach === "function") {
          formData.forEach((value, key) => {
            if (key.indexOf("properties") > -1) {
              let property = key.replace("properties[", "").replace("]", "");
              properties.push({ key: property, value: value });
            }
          });
        }
        else {
          formData?.fd?.forEach((value, key) => {
            if (key.indexOf("properties") > -1) {
              let property = key.replace("properties[", "").replace("]", "");
              properties.push({ key: property, value: value });
            }
          });
        }
      }

      priceModAll[productId]["properties"] = properties;

      if (shop_id === "69043421407" || shop_id === "82808766749") {
        let listOptionSelector = document.querySelector(".list-avis-options");
        if (!listOptionSelector) {
          let totalAddCharge = document.querySelector(".apo-total-addcharge");
          if (totalAddCharge) {
            listOptionSelector = document.createElement("div");
            listOptionSelector.classList.add("list-avis-options");
            listOptionSelector.setAttribute("style", "display:none !important");
            totalAddCharge.parentNode.insertBefore(
              listOptionSelector,
              totalAddCharge
            );
          }
        }
        if (listOptionSelector) {
          let itemOptionSelectors = listOptionSelector.querySelectorAll(
            ".avis-option-properties"
          );
          let prevOption = null;
          let isHasPro = false;
          for (let itemProperty of properties) {
            isHasPro = true;
            let propertySelector = listOptionSelector.querySelector(
              `.avis-option-properties[data-key='${itemProperty.key}']`
            );
            if (propertySelector) {
              if (
                propertySelector.getAttribute("data-value") !==
                itemProperty.value
              ) {
                propertySelector.innerHTML = `<span class="option-key">${itemProperty.key}:</span><span class="option-value">${itemProperty.value}</span>`;
                propertySelector.setAttribute("data-value", itemProperty.value);
              }
            } else {
              propertySelector = document.createElement("div");
              propertySelector.classList.add("avis-option-properties");
              propertySelector.setAttribute("data-key", itemProperty.key);
              propertySelector.setAttribute("data-value", itemProperty.value);
              propertySelector.innerHTML = `<span class="option-key">${itemProperty.key}:</span><span class="option-value">${itemProperty.value}</span>`;

              if (prevOption) {
                prevOption.parentNode.insertBefore(
                  propertySelector,
                  prevOption.nextSibling
                );
              } else {
                listOptionSelector.prepend(propertySelector);
              }
            }
            prevOption = propertySelector;
          }
          if (isHasPro) {
            listOptionSelector.removeAttribute("style");
          } else
            listOptionSelector.setAttribute("style", "display:none !important");
          for (var tempItem of itemOptionSelectors) {
            if (
              !properties.find(
                (x) => x.key === tempItem.getAttribute("data-key")
              )
            )
              tempItem.remove();
          }
        }
      }
    }
    const removeEmojis = (text) =>
        text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u2011-\u26FF|\uD83E[\uDD00-\uDDFF])/g, "");
    function parseToBool(str) {
      return str && str.toLowerCase() === 'true';
    }
    var priceMod = {
      isEditOptionCart: false,
      cartCurrent: window.ap_front_settings.cart,
      cartItemLineEdit: -1,
      cartItemEdit: null,
      cartData: null,
      isCloneButtonAddCart:
        window.ap_front_settings.config.is_clone_bt_addcart ?? false,
      avisAddCartForm: $('form[action$="/cart/add"]'),
      avisAddCartFormActive: $('form[action$="/cart/add"]'),
      avisAddCartFormActiveJS: document.querySelector(
        'form[action$="/cart/add"]'
      ),
      avisUrl: "https://apo-api.avisplus.io/shopify/api/",
      options: { appendPrice: !1, skipPriceModIfVisible: "" },
      variantSubmissionAlters: [],
      orderId: new Date().getTime(),
      variantOrdering: [],
      activeVariants: {},
      radioInput: {},
      productVariantAC: [],
      productVariantBundles: [],
      buttonAddCart: null,
      toggleSelector: function (elem) {
        elem.style.display =
          "block" != getComputedStyle(elem).display ? "block" : "none";
      },
      isHiddenSwatchTitle: function (option) {
        if (typeof option?.hidden_variant_title === "boolean") return option?.hidden_variant_title;
        let swatchConfig = customizeryConfig?.customize_options?.swatch;
        if (isDesignV2) {
          switch (option?.type) {
            case "swatch_single_color":
            case "swatch_single_image":
            case "swatch_multi_color":
            case "swatch_multi_image":
              return swatchConfig?.other?.hide_option_value_title ?? false;

            default: return false;
          }
        }
        return swatchConfig?.hidden_variant_title ?? false;
      },
      classHiddenSwatchTitle: function (isHiddenSwatchTitle) {
        return isHiddenSwatchTitle ? "avp-hiddenvarianttitleswatch" : "";
      },
      addLoadingAddCart: function (button) {
        button.setAttribute("disabled", "disabled"),
          button.classList.add("apo-loading");
      },
      removeLoadingAddCart: function (button) {
        button.removeAttribute("disabled", "disabled"),
          button.classList.remove("apo-loading");
      },
      getAllProductVariantBundles: async function (productHandles) {
        if (productHandles && productHandles.length > 0) {
          let products = await Promise.all(
            productHandles.map(async (handle) => {
              let productInfo = await pluginAction.getProduct(handle);
              if (productInfo) return productInfo;
              return null;
            })
          );
          priceMod.productVariantBundles =
            priceMod.productVariantBundles.concat(products);
          priceMod.productVariantBundles =
            priceMod.productVariantBundles.filter((x) => x);
        }
      },
      getValueSelected: function (optionSelector) {
        let titleValueSelector = optionSelector.querySelector(
          ".avp-option-title .apo-title-value"
        );
        if (!titleValueSelector) return;

        let listValues = optionSelector.querySelectorAll(
          "input[type='checkbox'],input[type='radio']"
        );
        let result = "";
        for (let value of listValues) {
          if (value.checked) {
            if (["66784985269"].includes(shop_id)) {
              result += `<span class='apo-value-item'> : ${value.value}</span>`;
            } else if (["1814626373"].includes(shop_id)) {
              result += `<span class='apo-value-item'>: ${value.value}</span>`;
            } else if (window.ap_front_settings.shop_id === "90703069571") {
              result += `<span class='apo-value-item'> ${value.value}</span>`;
            } else {
              result += `<span class='apo-value-item'> | ${value.value}</span>`;
            }
            if (["93397451054", "67417112744", "59963539519"].includes(window.ap_front_settings.shop_id) && value.getAttribute("des_value")) {
              result += `<span class="apo-value-help-text">${value.getAttribute("des_value")}</span>`;
            }
          }
        }

        if (titleValueSelector) titleValueSelector.innerHTML = result;
      },
      isLegacyValue: function (e) {
        return !e || "string" == typeof e || e instanceof String;
      },
      hasVariant: function (optionValue) {
        let result =
          !priceMod.isLegacyValue(optionValue) &&
          optionValue.type &&
          (optionValue.type === "useexistingvariant" ||
            optionValue.type === "chargeorbundle") &&
          optionValue.productId &&
          optionValue.is_exist &&
          optionValue.productVariationId;
        return result;
      },
      formatWithDelimiters(number, precision, thousands, decimal) {
        thousands = thousands || ",";
        decimal = decimal || ".";

        if (isNaN(number) || number === null) {
          return 0;
        }

        number = (number / 100.0).toFixed(precision);

        var parts = number.split(".");
        var dollarsAmount = parts[0].replace(
          /(\d)(?=(\d\d\d)+(?!\d))/g,
          "$1" + thousands
        );
        var centsAmount = parts[1] ? decimal + parts[1] : "";

        return dollarsAmount + centsAmount;
      },
      formatWithDelimitersToNumber(number, precision, thousands, decimal) {
        thousands = thousands || ",";
        decimal = decimal || ".";

        if (isNaN(number) || number === null) {
          return 0;
        }

        number = (number / 100.0).toFixed(precision);
        return number;
      },
      convertMoney: function (cents) {
        var value = "";
        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
        var formatString = money_format;

        switch (formatString.match(placeholderRegex)[1]) {
          case "amount":
            value = priceMod.formatWithDelimiters(cents, 2);
            break;
          case "amount_no_decimals":
            value = priceMod.formatWithDelimiters(cents, 0);
            break;
          case "amount_with_comma_separator":
            value = priceMod.formatWithDelimiters(cents, 2, ".", ",");
            break;
          case "amount_no_decimals_with_comma_separator":
            value = priceMod.formatWithDelimiters(cents, 0, ".", ",");
            break;
          case "amount_no_decimals_with_space_separator":
            value = priceMod.formatWithDelimiters(cents, 0, " ");
            break;
          case "amount_with_apostrophe_separator":
            value = priceMod.formatWithDelimiters(cents, 2, "'");
            break;
        }

        if (shop_id === "69043421407" || shop_id === "82808766749" || shop_id === "59286225080") {
          value = value.replace(",", ".").replace(",", ".");
        }
        return value;
      },
      isNumeric: function (str) {
        return !isNaN(str) && !isNaN(parseFloat(str));
      },
      formatMoney: function (cents, isZeroToEmpty = false) {
        if (typeof cents === "string") {
          cents = cents.replace(".", "");
        }
        var value = priceMod.convertMoney(cents);

        if (isZeroToEmpty && value == "0") return null;

        var formatString = money_format;
        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
        return formatString.replace(placeholderRegex, value);
      },
      formatMoneyByConfig: function (price) {
        return avisFormatPrice.replace(
          KEY_FORMAT_PRICE,
          priceMod.formatMoney(price, true)
        );
      },
      formatMoneyOnlyPrice: function (cents) {
        if (typeof cents === "string") {
          cents = cents.replace(".", "");
        }
        return priceMod.convertMoney(cents);
      },
      formatMoneyToNumber: function (cents) {
        if (typeof cents === "string") {
          cents = cents.replace(".", "");
        }

        var value = 0;
        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
        var formatString = money_format;

        switch (formatString.match(placeholderRegex)[1]) {
          case "amount":
            value = priceMod.formatWithDelimitersToNumber(cents, 2);
            break;
          case "amount_no_decimals":
            value = priceMod.formatWithDelimitersToNumber(cents, 0);
            break;
          case "amount_with_comma_separator":
            value = priceMod.formatWithDelimitersToNumber(cents, 2, ".", ",");
            break;
          case "amount_no_decimals_with_comma_separator":
            value = priceMod.formatWithDelimitersToNumber(cents, 0, ".", ",");
            break;
          case "amount_no_decimals_with_space_separator":
            value = priceMod.formatWithDelimitersToNumber(cents, 0, " ");
            break;
          case "amount_with_apostrophe_separator":
            value = priceMod.formatWithDelimitersToNumber(cents, 2, "'");
            break;
        }

        return value;
      },
      formatNewMoney: function (cents) {
        if (typeof cents === "string") {
          cents = cents.replace(".", "");
        }

        var formatString = money_format;
        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
        return formatString.replace(placeholderRegex, cents);
      },
      priceMarkup: function (e, compareAtPrice, optionType, t) {
        let formatPrice = priceMod.formatMoney(parseFloat(e), true);
        let AcAndMainPrice = e;
        if ((window?.ap_front_settings?.product_info?.product?.price_min || window?.apo_data_productInfo?.price_min) && shop_id === "26392690759") {
          const priceProduct = window?.ap_front_settings?.product_info?.product?.price_min ? window?.ap_front_settings?.product_info?.product?.price_min : window?.apo_data_productInfo?.price_min
          AcAndMainPrice = e + priceProduct;
          formatPrice = priceMod.formatMoney(parseFloat(AcAndMainPrice), true);
        }
        let formatPriceCompare = priceMod.formatMoney(parseFloat(compareAtPrice ? compareAtPrice : 0), true);
        let savePrice = 0;
        if (e && compareAtPrice) {
          savePrice = ((parseFloat(compareAtPrice) - parseFloat(AcAndMainPrice)) / parseFloat(compareAtPrice)) * 100;
        }

        if (formatPrice) {
          if (shop_id === '10278593' || shop_id === "62102929455" || shop_id === "64297107623" || shop_id === "91152777552") {
            return `<span avis-price='${e}' avis-price-compare='${compareAtPrice}' class="money apo-money">(${formatPrice}${compareAtPrice !== 0 && optionType !== "select" && customizeryConfig?.product_page?.show_compare_at_price && formatPriceCompare ? `<span class="apo-compare-price"> - <span class="money apo-money">${formatPriceCompare}</span></span>` : ""})</span>`;
          }
          if (["74059055369", "93834084657", "66630516901", "73739894841"].includes(shop_id)) {
            return `<span avis-price='${e}' avis-price-compare='${compareAtPrice}' class="money apo-money">(${formatPrice}${compareAtPrice !== 0 && optionType !== "select" && customizeryConfig?.product_page?.show_compare_at_price && formatPriceCompare ? `<span class="apo-compare-price"> <span class="money apo-money">${formatPriceCompare}</span></span>` : ""})</span>`;
          }
          if (["92032106845", "64154533976"].includes(shop_id)) {
            return `<span avis-price='${e}' avis-price-compare='${compareAtPrice}' class="money apo-money">+${formatPrice}${compareAtPrice !== 0 && optionType !== "select" && customizeryConfig?.product_page?.show_compare_at_price && formatPriceCompare ? `<span class="apo-compare-price"> <span class="money apo-money">${formatPriceCompare}</span></span>` : ""}</span>`;
          }

          if (shop_id === "26392690759") {
            return `<span avis-price='${e}' avis-price-compare='${compareAtPrice}' class="money apo-money">${compareAtPrice !== 0 && optionType !== "select" && customizeryConfig?.product_page?.show_compare_at_price && formatPriceCompare ? `<span class="apo-compare-price">${formatPriceCompare}</span>` : ""}<span class="apo-price money apo-money">${formatPrice}${savePrice !== 0 ? `<span class="apo-save-price"> (Save ${savePrice.toFixed(2).replace("-", "")}%)</span>` : ""}</span></span>`;
          }

          return `<span avis-price='${e}' avis-price-compare='${compareAtPrice}' class="money apo-money">(+${formatPrice}${shop_id === "75316429039" ? "رس" : ""}${compareAtPrice !== 0 && optionType !== "select" && customizeryConfig?.product_page?.show_compare_at_price && formatPriceCompare ? `<span class="apo-compare-price"> - <span class="money apo-money">${formatPriceCompare}</span></span>` : ""})</span>`;
        }

        return "";
      },
      getValueText: function (e, option) {
        if (priceMod.isLegacyValue(e)) return { value: e, display: e };
        if (!e) {
          return { value: !1, display: !1 };
        }
        let isSwatch =
          option.type === "swatch" ||
          option.type === "swatch_single_color" ||
          option.type === "swatch_single_image" ||
          option.type === "swatch_multi_color" ||
          option.type === "swatch_multi_image";
        let valueClass = isSwatch
          ? "swatch-variant-title"
          : "choice-list-variatnt-title";
        let isHasPrice = true;
        if (
          !e.type ||
          e.type == "adjustprice" ||
          e.price === "" ||
          ((e.type == "useexistingvariant" || e.type == "chargeorbundle") &&
            !e.is_exist) ||
          ((e.price == "0" || !e.price) && e.type == "createcharge")
        )
          isHasPrice = false;

        if (
          option?.type === "select" &&
          window.ap_front_settings.shop_id === "63321833641"
        )
          isHasPrice = false;

        let nameValue = e.value;
        let borderRadius = "";
        let buttonConfig = customizeryConfig?.customize_options?.button;
        if (!isDesignV2 && (option?.type === "button_single" || option?.type === "button_multi") && !convertTooltipBody) {
          borderRadius = `border-radius: ${buttonConfig?.border_radius ?? 4}px;
                padding: ${buttonConfig?.padding_top_bottom ?? 12}px ${buttonConfig?.padding_left_right ?? 12}px;`;
        }
        if (!nameValue?.trim() && option?.option_url === OPTION_URL.group)
          nameValue = e.url_name;

        let valueDisplay = nameValue;
        if (
          !option?.hide_price &&
          isHasPrice &&
          option.option_show_price !== "only_label"
        ) {
          valueDisplay = `${nameValue} ${priceMod.priceMarkup(e.price, e?.compare_at_price, option.type)}`;
        }

        if (shop_id === "87616127313" &&
          !option?.hide_price &&
          isHasPrice &&
          option.option_show_price !== "only_label") {
          valueDisplay = `<p class="apo-value-item">${nameValue}</p> ${priceMod.priceMarkup(e.price, e?.compare_at_price, option.type)}`;
        } else if (shop_id === "87616127313") {
          valueDisplay = `<p class="apo-value-item">${nameValue}</p>`;
        }

        let newValueDisplay = valueDisplay;
        let isShowDes = false;
        if (e.des_value && option.tooltip_display !== "desc") {
          newValueDisplay = `<span class='apo-value-title'>${newValueDisplay}</span>`;
          newValueDisplay += `<span class='apo-value-help-text'>${e.des_value}</span>`;
          isShowDes = true;
        } else if (
          shop_id === "84354957654" &&
          (option?.type === "radio" || option?.type === "checkbox") &&
          option.new_help_text
        ) {
          newValueDisplay += `<div class='apo-value-help-text'>${option.new_help_text}</div>`;
        }

        let qtyAvailable = priceMod.productVariantAC?.find(obj => obj?.id === e?.productVariationId)?.quantityAvailable;
        let stockText = "";
        if (["90415464790"].includes(shop_id) &&
          qtyAvailable != null
        ) {
          stockText = `<span class="avis-stock-text">(${qtyAvailable} in stock)</span>`;
        }

        if (["radio", "checkbox"].includes(option.type) && !option.tooltip_display && e?.swatch?.file_image_url) {
          valueDisplay = `<span class='option-value-container'>
                            <img alt='${valueDisplay.replace(/'/g, '"')}' data-src="${e.swatch.file_image_url}" ${isStoreLazyImg ? "loading='lazy' class='avis-img-lazy'" : `src="${e.swatch.file_image_url}"`}  />
                            <span class="${valueClass} ${isShowDes ? "option-value-des" : ""}" style="${borderRadius}">${newValueDisplay}</span>
                          </span>`;
        }
        else {
          if (option.type !== "select") {
            if (isShowDes) {
              valueDisplay = `<span class="${valueClass} option-value-des" style="${borderRadius}">${newValueDisplay}</span>`;
            } else
              valueDisplay = `<span class="${valueClass}" style="${borderRadius}">${valueDisplay} ${stockText}</span>`;
          }
        }

        let rootUrl = "";
        if (["90167836990"].includes(shop_id)) {
          rootUrl = Shopify?.routes?.root?.replace(/^\/|\/$/g, "") || "";
        }

        let sanitizedUrl = typeof e?.url === "string" ? e.url.trim() : "";
        let valueUrl = rootUrl ? `/${rootUrl}${sanitizedUrl}` : sanitizedUrl;
        if (
          option?.type !== "select" &&
          option?.type !== "swatch_select_color" &&
          option?.type !== "swatch_select_image"
        ) {
          if (option?.option_url === OPTION_URL.allowed && valueUrl) {
            if (option?.url_display === OPTION_URL_DISPLAY.view) {
              valueDisplay = `<span class="apo-swatch-url-view" style="${borderRadius}">
                                ${valueDisplay}<a class="apo-swatch-url" href="${e.url
                }" target="_blank">${option?.url_label ?? "View"}</a>
                              </span>`;
            } else {
              valueDisplay = `<span style="${borderRadius}"><a  class="apo-swatch-url" href="${valueUrl}" target="_blank">${valueDisplay}</a></span>`;
            }
          } else if (
            option?.option_url === OPTION_URL.group ||
            (option?.option_url === OPTION_URL.only && valueUrl)
          ) {
            valueDisplay = `<span style="${borderRadius}"><a  class="apo-swatch-url" href="${valueUrl}">${valueDisplay}</a></span>`;
          }
        }

        let formatPrice = priceMod.formatMoney(parseFloat(e.price), true);
        let valueData = nameValue;
        if (
          isHasPrice &&
          formatPrice &&
          e.type != "useexistingvariant" &&
          e.type != "chargeorbundle"
        ) {
          valueData = `${valueData} [ ${formatPrice} ]`;
        }

        return {
          value: valueData,
          display: valueDisplay,
        };
      },
      getVariantString: function (e, t, n, productId) {
        return (
          e + "-" + t + "-" + priceModAll[productId].variantOrdering.length
        );
      },
      findInputQuantityByInputValue: function (elemValue) {
        if (elemValue && elemValue.closest(".avp-value-grid")) {
          return elemValue.closest(".avp-value-grid").querySelector("input.avp-qty-input");
        }

        return null;
      },
      variantDataV2: function (labelCart, inputElement, price = -1) {
        return {
          name: labelCart,
          productId: inputElement.dataset?.variantProduct,
          handle: inputElement.dataset?.productHandle,
          variantId: ["90748060028", "46525644963"].includes(shop_id) ? inputElement.dataset?.variantOptionId : inputElement.dataset?.variantId,
          price: price === -1 ? inputElement.dataset?.variantPrice : price,
          isBundle: price !== -1,
          compare_at_price: inputElement.dataset?.variantComparePrice,
          quantity: 1,
          isOneTime: inputElement.dataset?.variantOnetime,
          value: inputElement.dataset?.optionValue,
          type: inputElement.dataset?.optionType,
          is_char: inputElement.dataset?.dataChar ?? false,
          $input: $(inputElement),
          isShow: true,
          isSumQtyAc: inputElement.dataset?.sumQtyAc,
          groupParent: inputElement.dataset?.groupParent ?? "",
          stepParent: inputElement.dataset?.stepParent ?? "",
        };
      },
      variantData: function (e, t) {
        return {
          name: e,
          productId: t.data("variant-product"),
          handle: t.data("product-handle"),
          variantId: t.data("variant-id"),
          price: t.data("variant-price"),
          compare_at_price: t.data("variant-compare-price"),
          quantity: 1,
          isOneTime: t.data("variant-onetime"),
          value: t.data("option-value"),
          type: t.data("option-type"),
          is_char: t.data("data-char") ?? false,
          $input: t,
          isShow: true,
          isSumQtyAc: t.data("sum-qty-ac"),
          groupParent: t.data("group-parent") ?? "",
          stepParent: t.data("step-parent") ?? "",
        };
      },
      addVariant: function (labelCart, variantString, element, productId) {
        (priceModAll[productId].activeVariants[variantString] = priceMod.variantDataV2(labelCart, element)),
          priceModAll[productId].activeVariants[variantString].variantId &&
          priceModAll[productId].activeVariants[variantString].variantId != "" &&
          eventApi.productBundleAdd({
            name: labelCart,
            element: $(element),
            productBundle: priceModAll[productId].activeVariants[variantString],
            orderId: priceMod.orderId,
          });
      },
      removeVariant: function (labelCart, variantString, element, productId) {
        var i = priceModAll[productId].activeVariants[variantString];
          delete priceModAll[productId].activeVariants[variantString],
          i.variantId &&
          i.variantId != "" &&
          eventApi.productBundleRemove({
            name: labelCart,
            element: $(element),
            productBundle: i,
          });
      },
      variantChangeSingle: async function (labelCart, elementInput, productId) {
        let optionType = elementInput.dataset.optionType;
        let isChoiseList = !checkOptionAddCharge(optionType);

        var variantString= elementInput.dataset.variantString;
        if (!priceModAll[productId].activeVariants[variantString] && ((isChoiseList && $(elementInput).is(":checked"))
        || (!isChoiseList && (elementInput.querySelector("[field-name]")?.value || elementInput.value || elementInput.querySelector(".apo_value")?.value))))
        {
          priceMod.addVariant(labelCart, variantString, elementInput, productId);
        }
        else
        {
          if (priceModAll[productId].activeVariants[variantString] && ((isChoiseList && !$(elementInput).is(":checked")) ||
            (!isChoiseList && !elementInput.querySelector("[field-name]")?.value && !elementInput.value && !elementInput.querySelector(".apo_value")?.value)))
          {
            priceMod.removeVariant(labelCart, variantString, elementInput, productId)
          }
        }

        if (isChoiseList && priceModAll[productId].activeVariants[variantString]) {
          let inputQuantity = priceMod.findInputQuantityByInputValue(elementInput);
          if (inputQuantity) {
            priceModAll[productId].activeVariants[variantString]["quantity"] = parseInt(inputQuantity.value);
          }
        } else if (elementInput.dataset.optionType === "text" && elementInput.dataset.dataChar) {
          let inputText = elementInput?.querySelector("input[type='text']");
          if (inputText) {
            let value = inputText.value ?? "";
            if (value) {
              value = value.replace(/\s/g, "");
              let quantity = value.match(/[\p{L}\p{N}\p{P}\p{Z}\p{Emoji}]/gu)?.length ?? 1;
              priceModAll[productId].activeVariants[variantString]["quantity"] = quantity;
            }
          }
        }

        // Quantity option addcharge
        if (["quantity", "slider"].includes(optionType)) {
          let inputQuantity = elementInput.querySelector(".avp-quantity-input, .apo-slider-thumb");
          if (inputQuantity) {
            let customQuantityElem = elementInput.querySelector('[class*="-avis-custom-price-quantity"]');
            if (["4202505"].includes(shop_id) && customQuantityElem) {
              const matchedClass = Array.from(customQuantityElem.classList).find(cls => cls.includes('-avis-custom-price-quantity'));
              const numCheck = parseInt(matchedClass);
              if (inputQuantity.value >= numCheck) {
                if (elementInput.dataset.quantityPriceType !== "any") {
                  priceModAll[productId].activeVariants[variantString]["quantity"] = parseInt(
                    inputQuantity.value > 1 ? inputQuantity.value - numCheck + 1 : 0
                  );
                } else {
                  priceModAll[productId].activeVariants[variantString]["quantity"] = parseInt(
                    inputQuantity.value > 1 ? 1 : 0
                  );
                }
              } else {
                priceMod.removeVariant(labelCart, variantString, elementInput, productId);
              }
            } else {
              if (elementInput.dataset.quantityPriceType !== "any") {
                priceModAll[productId].activeVariants[variantString]["quantity"] = parseInt(
                  inputQuantity.value
                );
              } else {
                priceModAll[productId].activeVariants[variantString]["quantity"] = parseInt(
                  inputQuantity.value > 0 ? 1 : 0
                );
              }
            }
          } else {
            priceModAll[productId].activeVariants[variantString] &&
              priceMod.removeVariant(labelCart, variantString, elementInput, productId);
          }
        }
        if (["62129143868", "89147965763"].includes(shop_id) && optionType === "switch") {
          if (elementInput.closest("[field-name]")?.checked && elementInput.closest(".avis-custom-value-switch")) {
            !priceModAll[productId].activeVariants[variantString] &&
              priceMod.addVariant(labelCart, variantString, elementInput, productId);
          } else {
            priceModAll[productId].activeVariants[variantString] &&
              priceMod.removeVariant(labelCart, variantString, elementInput, productId);
          }
        }
      },
      variantChange: async function (labelCart, listElementInput, productId, elemOptionAvisContainer) {
        if (listElementInput?.length === 0)
        {
          if (elemOptionAvisContainer) createTotalAdd(elemOptionAvisContainer, productId);
          return;
        }
        const itemElement = listElementInput[0];
        if (itemElement?.dataset?.optionType === "dimension")
        {
          let totalPrice = 0;
          if (!listElementInput.find(x => !x.value?.trim()))
          {
            totalPrice = await e._calcDimension(listElementInput)
          }

          var variantString = itemElement.dataset.variantString;
          priceModAll[productId].activeVariants[variantString] = priceMod.variantDataV2(labelCart, itemElement, totalPrice)

          if (elemOptionAvisContainer) createTotalAdd(elemOptionAvisContainer, productId);
          return;
        }
        try {
          const promises = [];
          listElementInput = (Array.isArray(listElementInput) ? listElementInput : Array.from(listElementInput));
          listElementInput.forEach(function(elementInput) {
            if (!(elementInput instanceof Element)) elementInput = elementInput[0];
            var variantPrice = elementInput.dataset.variantPrice;

            if (variantPrice === "0" || variantPrice) {
              promises.push(priceMod.variantChangeSingle(labelCart, elementInput, productId));
            }
          });

          await Promise.all(promises);
        } catch (ex) {
          console.log("apo variantChange all", ex);
        }
        if (listElementInput.length) {
          let inputjQuery = listElementInput[0];
          let optionSelector = (
            inputjQuery?.length ? inputjQuery[0] : inputjQuery
          )?.closest(".avp-option");
          if (optionSelector) {
            let addChargeSelector = optionSelector.querySelector(
              ".apo-title-addcharge"
            );
            if (
              addChargeSelector &&
              addChargeSelector.getAttribute("use-addcharge")
            ) {
              let hasAddCharge = false;
              let priceAddCharge = 0;
              let priceAddChargeCompare = 0;
              for (let item of listElementInput) {
                let optionName = $(item).data("variant-string");
                if (optionName) {
                  let dataAddCharge =
                    priceModAll[productId].activeVariants[optionName];
                  if (dataAddCharge && +dataAddCharge?.price > 0) {
                    hasAddCharge = true;
                    priceAddCharge += dataAddCharge.price * dataAddCharge.quantity;
                    if (window.ap_front_settings.shop_id === "91759345928") {
                      priceAddChargeCompare += dataAddCharge.compare_at_price * dataAddCharge.quantity;
                    }
                  }
                }
              }

              // Custom show compare at price ở label product
              if (window.ap_front_settings.shop_id === "91759345928") {
                addChargeSelector.innerHTML = hasAddCharge
                  ? `<p class="apo-compare-price-title">${priceMod.formatMoney(parseFloat(priceAddChargeCompare), true)}</p> ${priceMod.formatMoney(parseFloat(priceAddCharge), true)}`
                  : "";
              } else {
                addChargeSelector.innerHTML = hasAddCharge
                  ? priceMod.formatMoneyByConfig(priceAddCharge)
                  : "";
              }
            }

            priceMod.getValueSelected(optionSelector);
          }
        }
        if (elemOptionAvisContainer)
          createTotalAdd(elemOptionAvisContainer, productId);
      },
      attachData: function (elementInput, labelCart, optionValue, i, option, productId) {
        if (!(elementInput instanceof Element)) {
          elementInput = elementInput[0];
        }
        let isOneTime = option.is_onetime ?? false;
        if (((option.type === "quantity" ||
          option.type === "slider") &&
          option.add_price_quantity_type !== "any") ||
          (option.type === "text" &&
            option?.addcharge_per_character
          )
        ) {
          isOneTime = false;
        }

        if (option.type === "quantity" && option?.class_name?.includes("avis-option-qty-isonetime")) {
          isOneTime = true;
        }

        if (priceMod.hasVariant(optionValue)) {
          var variantString = priceMod.getVariantString(
              labelCart,
              optionValue.productVariationId,
              i,
              productId
            );
          elementInput.dataset["variantString"] = variantString;
          elementInput.dataset["variantPrice"] = optionValue.price ?? 0;
          elementInput.dataset["variantId"] = optionValue.productVariationId;
          elementInput.dataset["variantProduct"] = optionValue.productId;
          elementInput.dataset["variantOnetime"] = isOneTime;
          elementInput.dataset["optionValue"] = optionValue.value;
          elementInput.dataset["optionType"] = option.type;
          elementInput.dataset["variantComparePrice"] = optionValue?.compare_at_price ?? 0;
          if (["90748060028", "46525644963"].includes(shop_id)) {
            elementInput.dataset["variantOptionId"] = optionValue.productVariationId;
          }
          if (option?.group_parent) {
            elementInput.dataset["groupParent"] = option.group_parent;
          }
          if (option?.step_parent) {
            elementInput.dataset["stepParent"] = option.step_parent;
          }
          if (option?.class_name === "apo-sum-qty") {
            elementInput.dataset["sumQtyAc"] = true;
          }
          if (option.addcharge_per_character) elementInput.dataset["dataChar"] = true;
          priceModAll[productId].variantOrdering.push(variantString);
        }
        else
        {
          elementInput.dataset["variantPrice"] = optionValue.price ?? 0;
          elementInput.dataset["variantString"] = optionValue.value ? `${labelCart}_${optionValue.value}` : labelCart;
          elementInput.dataset["optionType"] = option.type;
          elementInput.dataset["optionFormula"] = option.dimension_price_total;
        }
        return elementInput;
      },
      postingQueue: [],
      postVariant: function (e, t) {
        var n = eventApi.beforeVariantPost({
          variant: e,
          callback: t,
          properties: {
            _apo_parent_order: priceMod.orderId,
            // _apo_field_name: e.name,
          },
        });
        return (
          !n &&
          void window.AP_POptions.$.post(
            "/cart/add.js",
            {
              quantity: e.quantity,
              id: e.variantId,
              properties: Object.assign(
                e.properties
                  ? e.properties
                  : {
                    _apo_parent_order: priceMod.orderId,
                    //  _apo_field_name: e.name,
                  }
              ),
            },
            function (e) {
              return (
                spLog(e, "variant post complete", !0),
                e && e.variant_id
                  ? void t()
                  : t(new Error("Was not added to cart"))
              );
            },
            "json"
          ).fail(function (e, n, i) {
            return (
              spLog({ xhr: e, status: n, error: i }, "variant post fail", !0),
              e &&
                e.responseJSON &&
                e.responseJSON.status &&
                422 === e.responseJSON.status
                ? t(e.responseJSON, !0)
                : void t(i)
            );
          })
        );
      },
      postVariants: function (e, t) {
        if (priceMod.postingQueue.length) {
          var n = priceMod.postingQueue.shift();
          priceMod.postVariant(n, function (n, i) {
            if (n) {
              if (i && n.description)
                return (
                  spLog(n, "customer facing error", !0),
                  alert(n.description),
                  void t(n)
                );
              spLog(n, "removing variant from current", !0);
            }
            priceMod.postVariants(e, t);
          });
        } else t();
      },
      postCartVariant: function (item) {
        fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        })
          .then((e) => e.json())
          .then((e) => {
            if (
              e &&
              (e.status == "bad_request" ||
                e.status == 404 ||
                e.status == 422 ||
                e.status == "too_many_requests")
            ) {
              console.log("Error Avis: Add cart ", e);
              return {
                res: e,
              };
            } else {
              console.log("Add change OK");
              return null;
            }
          })
          .catch((e) => {
            console.log("Error Avis: Add cart ", e);
            return null;
          });
      },
      postCartMain: async function (formData) {
        return new Promise((n, o) => {
          n(
            fetch("/cart/add?avis=true", {
              method: "POST",
              headers: {
                "Accept": "application/javascript",
                "X-Requested-With": "XMLHttpRequest",
              },
              body: formData,
            })
              .then((response) => response.json())
              .then((response) => {
                return response;
              })
              .catch((e) => {
                console.log("Error Avis: Add main product to cart ", e);
                return null;
              })
          );
        });
      },
      postCartVariants: function (items, t, formDataMain) {
        let cartData = "add.js";
        if (shop_id === "58912800936") {
          cartData = "add";
        }
        fetch("/cart/" + cartData, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(items),
        })
          .then((e) => {
            if (shop_id === "58912800936" && e.status === 200) {
              location.href = "/cart";
            }
            // ecomify-lite theme
            if (
              shop_id === "62635311441" ||
              shop_id === "87122149713" ||
              shop_id === "87195451729" ||
              shop_id === "86549627228" ||
              shop_id === "90301563205" ||
              shop_id === "70476136621" ||
              shop_id === "76697239788" ||
              shop_id === "93834084657"
            ) {
              window.refreshCartContents(e);
            }
            return e.json();
          })
          .then((e) => {
            if (
              e &&
              (e.status == "bad_request" ||
                e.status == 404 ||
                e.status == 422 ||
                e.status == "too_many_requests")
            ) {
              console.log("Error Avis: Add cart ", e);
              t(e, formDataMain);
            } else {
              console.log("Add change OK", e);
              t(e, formDataMain);
            }
          })
          .catch((e) => {
            console.log("Error Avis: Add cart ", e);
            t(e);
          });
      },
      getVariantSubmissions: function (productId) {
        if (
          priceMod.options.skipPriceModIfVisible &&
          $(priceMod.options.skipPriceModIfVisible).is(":visible")
        )
          return null;
        var e = [];
        if (window.AP_POptions && window.AP_POptions.pos)
          for (var t in priceModAll[productId].activeVariants)
            e.push(priceModAll[productId].activeVariants[t]);
        else
          $.each(
            priceModAll[productId].variantOrdering.reverse(),
            function (t, n) {
              priceModAll[productId].activeVariants[n] &&
                priceModAll[productId].activeVariants[n].isShow &&
                e.push(priceModAll[productId].activeVariants[n]);
            }
          );
        return priceMod.alterVariantValues(e, productId);
      },
      alterVariantValues: function (e, productId) {
        return (
          e &&
          e.length &&
          priceModAll[productId].variantSubmissionAlters.length &&
          $.each(
            priceModAll[productId].variantSubmissionAlters,
            function (t, n) {
              window.AP_POptions &&
                window.AP_POptions.pos &&
                e.forEach(function (t, n) {
                  (t.containerId = t.$input.closest(
                    "[data-product-options-container-id]"
                  ).length
                    ? t.$input
                      .closest("[data-product-options-container-id]")
                      .attr("data-product-options-container-id")
                    : ""),
                    (e[n] = t);
                }),
                (e = n(e)),
                e ||
                spLog(
                  n,
                  "priceMod: variantSubmissionAlter did not return any values",
                  !0
                );
            }
          ),
          e
        );
      },
      listInputAddBundle: [],
      cartSection:
        document.querySelector("cart-notification") ||
        document.querySelector("cart-drawer") ||
        document.querySelector("product-form"),
      addToCart: async function (productId, e, t, n) {
        if (typeof AvisOptionsData?.beforeAddToCart === "function") {
          await AvisOptionsData.beforeAddToCart(productId, e, t, n);
        }
        if (shop_id === "72770978131" || shop_id === "76880183633") {
          let miniCart = document.querySelector("mini-cart");
          if (miniCart) priceMod.cartSection = miniCart;
        }
        if (shop_id === "78803271973") {
          priceMod.cartSection = document.querySelector("m-cart-drawer.m-cart-drawer");
          // Khách gửi code nhờ add vào đoạn xử lý add to cart
          document.addEventListener("DOMContentLoaded", function () {
            // Function to translate date format
            const translateDate = (startDate, endDate, lang) => {
              const months = {
                en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                de: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                tr: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
              };
              const days = {
                en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                fr: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                tr: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
              };
              const startDay = days[lang]?.[startDate.getDay()] || days["en"][startDate.getDay()];
              const startMonth = months[lang]?.[startDate.getMonth()] || months["en"][startDate.getMonth()];
              const endDay = days[lang]?.[endDate.getDay()] || days["en"][endDate.getDay()];
              const endMonth = months[lang]?.[endDate.getMonth()] || months["en"][endDate.getMonth()];
              return `${startDay} ${startDate.getDate()} ${startMonth} - ${endDay} ${endDate.getDate()} ${endMonth}`;
            };
            // Function to calculate the estimated delivery date range
            const calculateDeliveryDate = (startDate, businessDays) => {
              let date = new Date(startDate);
              // Adjust start date if it falls on a weekend
              if (date.getDay() === 6) {
                date.setDate(date.getDate() + 2); // Move to Monday
              } else if (date.getDay() === 0) {
                date.setDate(date.getDate() + 1); // Move to Monday
              }
              let endDate = new Date(date);
              let remainingDays = businessDays;
              // Loop until we have calculated the business days
              while (remainingDays > 0) {
                date.setDate(date.getDate() + 1);
                const day = date.getDay();
                // Skip weekends (0 = Sunday, 6 = Saturday)
                if (day !== 0 && day !== 6) {
                  remainingDays--;
                }
              }
              // Set the end date after business days calculation
              endDate = new Date(date);
              endDate.setDate(endDate.getDate() + 1); // Adjust to the next day for the range
              // If the end date falls on a weekend, adjust it to Monday
              if (endDate.getDay() === 0) {
                endDate.setDate(endDate.getDate() + 1); // Skip Sunday
              } else if (endDate.getDay() === 6) {
                endDate.setDate(endDate.getDate() + 2); // Skip Saturday
              }
              return { startDate: date, endDate: endDate };
            };
            // Set language and shipping time using Liquid
            let businessDays = 5; // Default business days
            if (currentCountryCode === 'fr') {
              businessDays = 2; // France (2-3 days estimated delivery)
            } else if (currentCountryCode === 'de') {
              businessDays = 1; // Germany (1-2 days estimated delivery)
            } else if (currentCountryCode === 'tr') {
              businessDays = 4; // Turkey (4-5 days estimated delivery)
            }
            // Add 2-3 extra days for personalized products
            if (personalizedProductItem === true) {
              businessDays += 2; // Add 2 extra business days for personalized products
            }
            console.log("Country Code:", "{{ request.locale.iso_code }}");
            console.log("Business Days:", businessDays);
            // Calculate the delivery date range
            const today = new Date(); // Use current date
            const { startDate, endDate } = calculateDeliveryDate(today, businessDays);
            // Translate the date range to the selected language
            const translatedDate = translateDate(startDate, endDate, "{{ request.locale.iso_code }}");
            // Update the DOM element
            const deliveryDateElement = document.querySelector(".estimated_delivery--date .date");
            if (deliveryDateElement) {
              deliveryDateElement.innerText = translatedDate;
            } else {
              console.error("Element '.estimated_delivery--date .date' not found.");
            }
          });
        }
        n = n
          ? priceMod.alterVariantValues(n, productId)
          : priceMod.getVariantSubmissions(productId);
        if (priceMod.isCloneButtonAddCart) {
          e.preventDefault();
          e.stopImmediatePropagation();
          let listPrice = {};
          let listVariantBundle = [];
          let listVariantBundleApo = [];
          let avisAddCartFormActive = formProductGenOptionJs[productId];
          let orderId = new Date().getTime();
          let formButton = e.target.closest("form");
          if (formButton) avisAddCartFormActive = formButton;
          let variantIdsSellingPlan = [];
          for (var option of n) {
            let value = option.value;
            let optionData = `${option.name}: ${value} - ${option.variantId}`;
            let product = priceMod.productVariantBundles.find((x) =>
              x.variants.find(
                (y) => String(y.id) === String(option.variantId ?? "")
              )
            );
            let productVariant = null;
            if (product) {
              productVariant = product.variants.find(
                (y) => String(y.id) === String(option.variantId ?? "")
              );
            }
            else productVariant = priceMod.productVariantAC.find(x => String(x.id) === String(option.variantId ?? ""));
            if (productVariant) {
              listPrice[`${option.name}_${value}`] =
                (parseToBool(option.isOneTime) ? 1 : option.quantity) *
                productVariant.price;
              
              if (option?.$input?.[0]?.closest(".avis-option-qty-isonetime")) 
                listPrice[`${option.name}_${value}`] = option.quantity * productVariant.price;

              if (productVariant?.selling_plan_allocations?.length > 0) {
                variantIdsSellingPlan.push(productVariant.id);
              }
              // Save for OPUS compare price
              if (productVariant?.compare_at_price && typeof window?.OpusSetCompareAtPrice === "function") {
                window?.OpusSetCompareAtPrice(productVariant.id, {
                  rate: window.Shopify?.currency?.rate,
                  compareAtPrice: productVariant.compare_at_price,
                });
              }
            }

            listVariantBundle.push(
              parseToBool(option.isOneTime)
                ? optionData
                : `${optionData} * ${option.quantity}`
            );

            listVariantBundleApo.push(`${option.name}:${option.variantId}${parseToBool(option.isOneTime) ? "" : ("*" + option.quantity)}`);
          }
          if (!useAddchargeApoOption && listVariantBundle.length > 0) {
            if (!$('[name="properties[_apo_variants]"]').length) {
              var variant = $("<input />")
                .attr("type", "hidden")
                .attr("name", `properties[_apo_variants]`)
                .val(listVariantBundle.join(joinAddCharge));
              $(e.target).before(variant);
            } else {
              $('[name="properties[_apo_variants]"]').val(
                listVariantBundle.join(joinAddCharge)
              );
            }
          }

          let mainItemCart = {
            id: !1,
            quantity: 1,
            properties: {},
          };

          if (["90430210377", "67441852613", "69085364490"].includes(shop_id)) {
            mainItemCart.properties["_apo_addon"] = listVariantBundleApo.join(joinAddCharge);
          }
          let propertiesForAc = [];
          let listOptionForAc = ["Numara", "İsim"];
          let productIdCurrent = false;

          let itemsForm = {};
          let formDataInput = null;
          if (avisAddCartFormActive?.localName === "form") {
            let formData = new FormData(avisAddCartFormActive);
            formDataInput = new FormData(avisAddCartFormActive);

            let newFormData = formData;
            if (typeof formData?.forEach !== "function" && newFormData?.fd) {
              newFormData = newFormData.fd;
            }
            newFormData?.forEach((e, t) => {
              if (t?.includes("items[")) {
                let temp = t.replace("items[", "");
                let indexCart = temp.split("]")[0];
                if (!itemsForm[indexCart]) {
                  itemsForm[indexCart] = {
                    id: false,
                    quantity: 1,
                  };
                }
                if (temp.includes("id")) {
                  itemsForm[indexCart].id = parseInt(e);
                }
                if (temp.includes("quantity")) {
                  itemsForm[indexCart].quantity = parseInt(e);
                }
              }
              if (
                ("id" == t && (mainItemCart.id = parseInt(e)),
                  "id[]" == t &&
                  !mainItemCart.id &&
                  (mainItemCart.id = parseInt(e)),
                  "selling_plan" == t && shop_id !== "86949036357" &&
                  (mainItemCart["selling_plan"] = parseInt(e)),
                  "selling_plan_radio" == t &&
                  (mainItemCart["selling_plan_radio"] = parseInt(e)),
                  "product_size" == t && (productIdCurrent = parseInt(e)),
                  "quantity" == t && (mainItemCart.quantity = parseInt(e)),
                  t.indexOf("properties") > -1)
              ) {
                let property = t.replace("properties[", "").replace("]", "");
                if (property === AvisOptionsConfig?.key_cart_order) {
                  orderId = `${orderId},${e}`;
                }
                if (isShopUploadCdnSpf) {
                  if (property && e) {
                    formDataInput.delete(t);
                    let findinputFile = document.querySelector(".avpoptions-container__v2 input[type='file'][name='" + property + "']");
                    if (findinputFile && formData.get(property)) {
                      formDataInput.append(t, formData.get(property));
                    }
                    else formDataInput.append(t, e);
                  }
                }

                let keyAC = `${property}_${e}`;
                if (showPriceACCart) {
                  if (listPrice[keyAC] || listPrice[keyAC] === 0) {
                    let formatPrice = priceMod.formatMoneyOnlyPrice(
                      parseFloat(listPrice[keyAC]),
                      true
                    );
                    mainItemCart.properties[
                      property
                    ] = `${e} ${avisFormatPrice.replace(
                      KEY_FORMAT_PRICE,
                      formatPrice
                    )}`;
                  } else if (e.indexOf(",") > -1) {
                    let listKey = [];
                    for (let itemData of e.split(",")) {
                      itemData = itemData.trim();
                      keyAC = `${property}_${itemData}`;
                      if (listPrice[keyAC]) {
                        let formatPrice = priceMod.formatMoneyOnlyPrice(
                          parseFloat(listPrice[keyAC]),
                          true
                        );
                        listKey.push(
                          `${itemData} ${avisFormatPrice.replace(
                            KEY_FORMAT_PRICE,
                            formatPrice
                          )}`
                        );
                      } else listKey.push(itemData);
                    }
                    mainItemCart.properties[property] = listKey.join(", ");
                  } else mainItemCart.properties[property] = e;
                } else {
                  if (shop_id === "78803271973" && listOptionForAc.includes(property)) {
                    propertiesForAc.push({ key: property, value: e });
                  }
                  else mainItemCart.properties[property] = e;
                }
              }
            });

            if (isShopUploadCdnSpf && useAddchargeApoOption && n?.length) {
              formDataInput.append(`properties[${AvisOptionsConfig?.key_cart_order}]`, orderId);
            }
          }
          if (useAddchargeApoOption && n?.length) {
            mainItemCart.properties[AvisOptionsConfig?.key_cart_order] = orderId;
          }

          if (productIdCurrent && !mainItemCart.id) {
            mainItemCart.id = productIdCurrent;
          }
          if (!mainItemCart.id) {
            let idSelector = avisAddCartFormActive.querySelector(
              ".product-variant-id"
            );
            if (idSelector && idSelector.value)
              mainItemCart.id = idSelector.value;
          }
          if (!mainItemCart.id) {
            let idSelector = avisAddCartFormActive.querySelector("[name=id]");
            if (idSelector && idSelector.value) {
              mainItemCart.id = idSelector.value;
            }
          }

          let areaStickyAc = e?.target?.closest(".sticky-add-to-cart");
          if (areaStickyAc) {
            let formStickyAc = areaStickyAc.querySelector("form[action*='/cart/add']");
            if (formStickyAc) {
              let formDataStickyAc = new FormData(formStickyAc);
              formDataStickyAc.forEach((e, t) => {
                if (t === "id") mainItemCart.id = parseInt(e);
                if (t === "quantity") mainItemCart.quantity = parseInt(e);
              });
            }
          }

          if ($('[name="properties[_apo_variants]"]').length > 0) {
            $('[name="properties[_apo_variants]"]').remove();
          }

          const validShopIds = [
            "72434319636", "63532892418", "79438512462", "78469497151",
            "60419801166", "87849468199", "17207277", "89876267357",
            "87489773902", "56908120127", "56047599658", "58900512837",
            "89688375625", "89080103205", "68326162671", "67304423672",
            "84495433784", "62308778093", "63393857777", "73055502667", "68446945453"
          ];

          let isSection = validShopIds.includes(window.ap_front_settings.shop_id);
          let sections =
            priceMod.cartSection?.getSectionsToRender &&
              typeof priceMod.cartSection?.getSectionsToRender === "function"
              ? priceMod.cartSection
                .getSectionsToRender()
                .map((section) => (isSection ? section.section : section.id))
              : [];

          if (sections.length === 0 && shop_id === "83553517888") {
            let sectionsToBundle = ["variant-added"];
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:prepare-bundled-sections", {
                bubbles: !0,
                detail: {
                  sections: sectionsToBundle,
                },
              })
            );

            sections = sectionsToBundle;
          }

          if (sections.length === 0 && shop_id === "87487840561") {
            let sectionsToBundle = ["ajax-cart-drawer"];
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:prepare-bundled-sections", {
                bubbles: !0,
                detail: {
                  sections: sectionsToBundle,
                },
              })
            );

            sections = sectionsToBundle;
          }

          if (sections.length === 0 && shop_id === "25604915279") {
            document.documentElement.dispatchEvent(
              new CustomEvent("theme:loading:start", { bubbles: true })
            );
            let sectionsToBundle = [];
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:prepare-bundled-sections", {
                bubbles: !0,
                detail: {
                  sections: sectionsToBundle,
                },
              })
            );

            sections = sectionsToBundle;
          }

          if (sections.length === 0 && shop_id === "92881944960") {
            let sectionsToBundle = [];
            document.documentElement.dispatchEvent(
              new CustomEvent(
                'cart:bundled-sections',
                { bubbles: true, detail: { sections: sectionsToBundle } }
              )
            );
            sections = sectionsToBundle;
          }

          if (shop_id === "63324618960") {
            sections = "cart-icon-bubble";
            let productFormData = avisAddCartFormActive.closest("product-form");
            if (productFormData?.cartDrawer) {
              sections += `,${productFormData.cartDrawer
                .closest(".shopify-section")
                .id.replace("shopify-section-", "")}`;
            }
          }

          if (shop_id === "6037953") {
            sections = [];
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:prepare-bundled-sections", {
                bubbles: true,
                detail: { sections: sections },
              })
            );
          }

          // if (shop_id === "25514049590" && window.BOOMR?.themeName === "Focal") sections = ['mini-cart'];
          if (!sections?.length && window.BOOMR?.themeName === "Focal") {
            sections = ["mini-cart"];
          }
          if (shop_id === "79936815414") {
            sections = ["mini-cart", "cart-icon-bubble", "mobile-cart-icon-bubble"];
          }
          if (shop_id === "68666097951") {
            sections = ["cart-inventory-organizer", "cart-items"];
          }

          if (window.AvisOptionsData?.cartSectionInput) sections = window.AvisOptionsData?.cartSectionInput;
          let sections_url = window.location.pathname;
          let paramCartInput = {
            items: [],
            sections: sections,
            sections_url: sections_url,
          };

          if (Object.keys(itemsForm).length > 0) {
            for (let keyItem in itemsForm) {
              paramCartInput.items.push(itemsForm[keyItem]);
            }
          }
          var uidGen = Math.floor(Math.random() * Math.floor(1e3));
          uidGen += "_1";
          let totalQtyAcForMainProduct = 0;
          $.each(n, function (e, t) {
            // support for 90748060028
            if (t.isSumQtyAc) {
              totalQtyAcForMainProduct += t.quantity ?? 1;
            }
            let optionData = `${t.name}: ${t.value} - ${t.variantId}`;
            let propertiesData = {
              _apo_added_by: parseToBool(t.isOneTime)
                ? optionData
                : `${optionData} * ${t.quantity ?? 1}`,
            };
            if (useAddchargeApoOption) {
              optionData = `Added by: ${orderId}`;
              propertiesData = {};
              propertiesData[AvisOptionsConfig?.key_cart_option] = `${t.name}: ${t.value ?? ""}`;
              propertiesData[AvisOptionsConfig?.key_cart_order] = parseToBool(t.isOneTime)
                ? optionData
                : `${optionData} * ${t.quantity ?? 1}`;
              
              if (t?.$input?.[0]?.closest(".avis-option-qty-isonetime")) {
                propertiesData[AvisOptionsConfig?.key_cart_order] = `${optionData} * ${t.quantity ?? 1} * 1`;
              }

              propertiesForAc?.length > 0 && propertiesForAc.forEach((x) => {
                propertiesData[x.key] = x.value;
              });
            }

            if (shop_id === "8502476855" || shop_id === "93958734130") {
              propertiesData["uid"] = uidGen;
              if (mainItemCart.properties) mainItemCart.properties["uid"] = uidGen;
            }
            let item = {
              id: parseInt(t.variantId),
              quantity: parseToBool(t.isOneTime)
                ? 1
                : mainItemCart.quantity * (t.quantity ?? 1),
              properties: propertiesData,
            };
            if (isNotSyncQtyProductAc && !parseToBool(t.isOneTime)) {
              item.quantity = t.quantity ?? 1;
            }
            if (t?.$input?.[0]?.closest(".avis-option-qty-isonetime")) {
              item.quantity = t.quantity;
            }
            if (!["89688375625"].includes(shop_id)) {
              if (variantIdsSellingPlan.includes(item.id)) {
                if (mainItemCart["selling_plan"])
                  item["selling_plan"] = mainItemCart.selling_plan;
                if (mainItemCart["selling_plan_radio"])
                  item["selling_plan_radio"] = mainItemCart.selling_plan_radio;
              }
            }
            if (totalQtyAcForMainProduct > 0) {
              item.properties["_apo_qty_by_ac"] = true;
            }
            paramCartInput.items.push(item);
          });

          if (shop_id === "86235251024" || shop_id === "89148653914" || shop_id === "57037127747" || shop_id === "67441852613" || shop_id === "48947986582") {
            for (let option of listOptions) {
              if (
                option.required &&
                (!mainItemCart?.properties[option.label_cart])
              ) {
                let findOption = document.querySelector(
                  `[field-name='${option.label_cart}']`
                );
                if (findOption) {
                  if (!findOption.getAttribute("disabled")) {
                    if (findOption.value) {
                      if (findOption.type === "radio") {
                        findOption = document.querySelector(
                          `[field-name='${option.label_cart}']:checked`
                        );
                        if (!mainItemCart.properties[option.label_cart]) mainItemCart.properties[option.label_cart] =
                          findOption.value;
                      } else {
                        if (option.type !== "file") mainItemCart.properties[option.label_cart] =
                          findOption.value;
                      }
                    } else {
                      alert(
                        `Please fill out "${option.label_product}" before adding this item to cart`
                      );
                      if (e.currentTarget) {
                        priceMod.removeLoadingAddCart(e.currentTarget);
                      }
                      return null;
                    }
                  }
                }
              }
            }
          }

          if (totalQtyAcForMainProduct > 0) {
            mainItemCart["quantity"] = totalQtyAcForMainProduct;
            mainItemCart.properties["_apo_qty_by_ac"] = true;
          }
          if (formDataInput && (shop_id === "56635359401" || isShopUploadCdnSpf)) {
            if (sections?.length > 0) formDataInput.append("sections", sections.join(","));
            if (sections_url) formDataInput.append("sections_url", sections_url);
          }
          else {
            if ((window.AvisStyleOptions?.product?.price === 0 || window.AvisStyleOptions?.product?.price === 1) && ["8669954148"].includes(shop_id)) {
            } else {
              paramCartInput.items.push(mainItemCart);
            }
          }

          if (paramCartInput?.items?.length === 0 && formDataInput && isShopUploadCdnSpf) {
            let resAddMainProduct = await priceMod.postCartMain(formDataInput);
            if (!resAddMainProduct?.description) {
              resAddMainProduct["items"] = [resAddMainProduct];
            }
            return t(resAddMainProduct, formDataInput, true);
          }

          var r = eventApi.beforeVariantsPost({
            variantValues: n,
            orderId: priceMod.orderId,
            callback: t,
          });
          return !r && priceMod.postCartVariants(paramCartInput, t, formDataInput);
        }
      },
      resetState: function () {
        (priceMod.orderId = new Date().getTime()),
          (priceMod.options = { appendPrice: !1, skipPriceModIfVisible: "" }),
          (priceMod.variantOrdering = []),
          (priceMod.variantSubmissionAlters = []),
          (priceMod.activeVariants = {});
      },
      buyItNow: function () {
        let textCustomizationCostFor = "Customization Cost for";
        try {
          textCustomizationCostFor =
            customizeryConfig && customizeryConfig.text_customization_cost_for
              ? customizeryConfig.text_customization_cost_for
              : "Customization Cost for";
        } catch (e) {
          textCustomizationCostFor = "Customization Cost for";
        }
        let options = [];
        if (
          customizeryConfig &&
          customizeryConfig.optionSets &&
          customizeryConfig.optionSets.length
        ) {
          customizeryConfig.optionSets.forEach((optionSetItem) => {
            if (optionSetItem.options)
              options = options.concat(optionSetItem.options);
          });
        }
      },
      init: function (e) {
        priceMod.resetState(), $.extend(priceMod.options, e);
      },
    };

    // 3. priceModCart
    AvisOptionsConfig.priceMod = priceMod;
    var priceModCart = {
      form: null,
      cartItems: [],
      options: {
        appendPrice: !1,
      },
      getCart: function (e) {
        window.AP_POptions.$.getJSON("/cart.js", function (t) {
          e(t);
        }).fail(function (e, t, n) { });
      },
      listCartUpdate: {},
      getCartV2: async () =>
        fetch("/cart.json?avis=1", { method: "GET" })
          .then((t) => t.json())
          .then((t) => t),
      updateCart: (t, e) => {
        if (typeof window.cartShippingCalculatorProApp === 'object') {
          window.cartShippingCalculatorProApp.cartChangeTrackingBlocked = true;
        }
        fetch("/cart/update.js?avis=true", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(t),
        })
          .then((t) => t.json())
          .then((t) => {
            t && e(t);
          })
          .catch((t) => {
            console.log("Error:", t);
          });
      },
      changeCart: async (t) => {
        let data = await fetch("/cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(t),
        })
          .then((t) => {
            return t.json();
          })
          .then((t) => {
            return t;
          })
          .catch((t) => {
            console.log("Error:", t);
            return false;
          });
        return data;
      },
      changesCart: async (t, callback) => {
        let isAdd = false;
        for (let e = 0; e < t.length; e++) {
          const o = t[e];
          let changeCartData = await priceModCart.changeCart(o);
          if (changeCartData) isAdd = true;
          if (e === t.length - 1 && isAdd) {
            callback();
          }
        }
      },
      postUpdateCart: async function (data) {
        return new Promise((n, o) => {
          n(
            fetch("/cart/update.js?avis=true", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ updates: data }),
            })
              .then((e) => e.json())
              .then((e) => {
                return {
                  res: e,
                };
              })
              .catch((e) => {
                console.log("Error Avis: Update cart ", e);
                return null;
              })
          );
        });
      },
      postChangeCart: async function (data) {
        return new Promise((n, o) => {
          n(
            fetch("/cart/change.js", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((e) => e.json())
              .then((e) => {
                console.log("res change cart:", e);
                return {
                  res: e,
                };
              })
              .catch((e) => {
                console.log("Error Avis: Update cart ", e);
                return null;
              })
          );
        });
      },
      postAddsCart: async function (data) {
        return new Promise((n, o) => {
          n(
            fetch("/cart/add.js", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((e) => e.json())
              .then((e) => {
                return {
                  res: e,
                  key: data.key,
                };
              })
              .catch((e) => {
                console.log("Error Avis: Add cart ", e);
                return null;
              })
          );
        });
      },
      postAddCart: async function (data) {
        return new Promise((n, o) => {
          n(
            fetch("/cart/add.js?avis=apo1", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ items: [data.item] }),
            })
              .then((e) => e.json())
              .then((e) => {
                return {
                  res: e,
                  key: data.key,
                };
              })
              .catch((e) => {
                console.log("Error Avis: Add cart ", e);
                return null;
              })
          );
        });
      },
      init: function (e) {
        priceModCart.options.appendPrice = true;
        // Add collections of product to cart collections (Add product in cart slider (None load page cart))
        if (window.ap_front_settings.product_info.collections.length > 0) {
          for (var clectItem of window.ap_front_settings.product_info
            .collections) {
            window.ap_front_settings.cart_collections.push({
              product_id: window.ap_front_settings.product_info.product_id,
              collection_id: clectItem,
            });
          }
        }
      },
    };
    let inputDisableClass = 'input:not([type="checkbox"]:not([avp-data="switch"]))[disabled],select[disabled],textarea[disabled],fieldset[disabled],span[apo-required][disabled],div[apo-required][disabled]';
    let inputEnableClass = 'input:not([type="checkbox"]:not([avp-data="switch"])):not([disabled]),select:not([disabled]),textarea:not([disabled]),fieldset:not([disabled]),span[apo-required]:not([disabled]),div[apo-required]:not([disabled])';
    function conditionalLogicFactory(event) {
      var t = this;
      (t.active = !1),
        (t.isPreview = !1),
        (t.watching = {}),
        (t.reactions = {}),
        (t.timers = { running: { Change: 0, React: 0 } }),
        (t.intervals = []);
      function logCondition(e, n, i) {
        spLog(e, n, i || !0),
          t.isPreview && ((n = "AvisPlus Options preview: " + n), alert(n));
      }
      function hideOptionByCondition(elemOptionAvisContainer, productId, optionCondition) {
        optionCondition.hidden = true;
        eventApi.fieldHide({ reaction: optionCondition }, elemOptionAvisContainer, productId);
        if (t.watching[optionCondition.name]) t.watching[optionCondition.name].hidden = true;
        let optionWrapper = optionCondition.$input[0];
        if (!optionWrapper) return;
        optionWrapper.setAttribute("disabled", "disabled");
        optionWrapper.style.setProperty("display", "none", "important");
        if (!optionWrapper.className?.includes("ap-options__optiongroup-container")) {
          optionWrapper.querySelectorAll(inputEnableClass).forEach((item) => {
            item.setAttribute("disabled", "disabled");
            let fieldName = item.getAttribute("field-name");
            if (fieldName) {
              fieldName = fieldName.replaceAll('"', "&quot;");
              let inputFormSelector = document.querySelector(`.avis-input-hiddens[data-productid="${productId}"] input[temp-name="${fieldName}"]`);
              if (inputFormSelector) {
                inputFormSelector.setAttribute("disabled", "disabled");
                inputFormSelector.removeAttribute("name");
              }
            }
          });
        }
        if (t.watching[optionCondition.name]) {
          l_change(elemOptionAvisContainer, productId, t.watching[optionCondition.name], 0);
        }
        e.showHidePODConditionalLogic(optionCondition?.option, true);
      }
      function showOptionByCondition(elemOptionAvisContainer, productId, optionCondition) {
        optionCondition.hidden = false;
        eventApi.fieldShow({ reaction: optionCondition }, elemOptionAvisContainer, productId);
        if (t.watching[optionCondition.name]) t.watching[optionCondition.name].hidden = false;
        let optionWrapper = optionCondition.$input[0];
        if (!optionWrapper) return;
        optionWrapper.removeAttribute("disabled");
        optionWrapper.removeAttribute("style");
        if (!optionWrapper.className?.includes("ap-options__optiongroup-container")) {
          let isSetOnchange = false;
          optionWrapper.querySelectorAll(inputDisableClass).forEach((item) => {
            item.removeAttribute("disabled");
            let fieldName = item.getAttribute("field-name");
            if (fieldName) {
              fieldName = fieldName.replaceAll('"', "&quot;");
              let inputFormSelector = document.querySelector(`.avis-input-hiddens[data-productid="${productId}"] input[temp-name="${fieldName}"]`);
              if (inputFormSelector) {
                inputFormSelector.removeAttribute("disabled");
                inputFormSelector.setAttribute("name", `properties[${fieldName}]`);
              }
            }

            if (!isSetOnchange && optionWrapper?.getAttribute("data-change-image")) {
              let newItem = item;
              let elmFieldset = item.closest("fieldset");
              if (elmFieldset && elmFieldset.closest(".avp-option")) {
                newItem = elmFieldset.querySelector("input[type='checkbox'][field-name]:checked");
              }
              if (newItem && newItem.checked && newItem.value) {
                isSetOnchange = true;
                window?.apoGenOption?.optionChangeImageProduct(newItem?.value);
              }
            }
          });
        }
        if (t.watching[optionCondition.name]) {
          l_change(elemOptionAvisContainer, productId, t.watching[optionCondition.name], 0);
        }
        e.showHidePODConditionalLogic(optionCondition?.option, false);
      }
      // OLD(#DesignV2) hideOptionByCondition
      function i_fieldHide(n, elemOptionAvisContainer, productId) {
        e.showHidePODConditionalLogic(n?.option, true);
        let avisAddCartFormActive = formProductGenOptionJs[productId]
          ? $(formProductGenOptionJs[productId])
          : null;

        function hideControl() {
          if (!avisAddCartFormActive) return;

          let clss =
            'input:not([type="checkbox"]:not([avp-data="switch"])):not([disabled]),select:not([disabled]),textarea:not([disabled]),fieldset:not([disabled]),span[apo-required]:not([disabled]),div[apo-required]:not([disabled])';
          n.$input[0].querySelectorAll(clss).forEach((x) => {
            let fieldName = x.getAttribute("field-name");
            if (!fieldName) fieldName = x.getAttribute("name");
            let newFieldName = fieldName?.replaceAll('"', "&quot;");
            let inputSelector = avisAddCartFormActive[0].querySelector(
              `input[temp-name="${newFieldName}"]`
            );
            if (isThemeProperty) {
              if (inputSelector) {
                inputSelector.setAttribute("disabled", "disabled");
                inputSelector.setAttribute(
                  "name",
                  `properties[${newFieldName}]`
                );
              }
            } else {
              if (inputSelector) {
                inputSelector.setAttribute("disabled", "disabled");
                inputSelector.removeAttribute("name");
              }

              x.setAttribute("disabled", "disabled");
              x.removeAttribute("name");

              if (["81669292225"].includes(window.ap_front_settings.shop_id)) {
                let input = x.querySelectorAll("label input");
                if (input && input?.length > 0) {
                  input.forEach((i) => {
                    i.checked = false;
                    i.dispatchEvent(new Event('change'));
                  });
                }
              }
            }
          }),
            !["58900512837", "81669292225", "92548727171"].includes(window.ap_front_settings.shop_id) && n.$input[0].style.setProperty("display", "none", "important");

          (n.hidden = !0),
            eventApi.fieldHide(
              { reaction: n },
              elemOptionAvisContainer,
              productId
            ),
            t.watching[n.name] &&
            ((t.watching[n.name].hidden = !0),
              l_change(
                elemOptionAvisContainer,
                productId,
                t.watching[n.name],
                0
              ));
        }

        spLog(n, "conditional logic: hiding", !0),
          n.$input.attr({ disabled: "disabled" }).fadeTo
            ? n.$input
              .attr({ disabled: "disabled" })
              .fadeTo(100, 0, function () {
                hideControl();
              })
            : (n.$input.attr({ disabled: "disabled" })[0].animate(
              {
                opacity: 0,
              },
              {
                duration: 100,
                easing: "linear",
                iterations: 1,
                fill: "both",
              }
            ).onfinish = function () {
              hideControl();
            });
      }
      // OLD(#DesignV2) showOptionByCondition
      function o_fieldShow(n, elemOptionAvisContainer, productId) {
        e.showHidePODConditionalLogic(n?.option, false);
        let avisAddCartFormActive = formProductGenOptionJs[productId]
          ? $(formProductGenOptionJs[productId])
          : null;

        function showControl() {
          if (!avisAddCartFormActive) return;
          let clss =
            'input:not([type="checkbox"]:not([avp-data="switch"]))[disabled],select[disabled],textarea[disabled],fieldset[disabled],span[apo-required][disabled],div[apo-required][disabled]';
          n.$input[0].querySelectorAll(clss).forEach((x) => {
            let fieldName = x.getAttribute("field-name");
            if (!fieldName) fieldName = x.getAttribute("name");
            let newFieldName = fieldName?.replaceAll('"', "&quot;");
            let inputSelector = avisAddCartFormActive[0].querySelector(
              `input[temp-name="${newFieldName}"]`
            );
            if (isThemeProperty) {
              if (inputSelector) {
                inputSelector.removeAttribute("disabled");
              }
            } else {
              if (inputSelector) {
                inputSelector.setAttribute(
                  "name",
                  `properties[${newFieldName}]`
                );
                if (inputSelector.value && !inputSelector.getAttribute("data-soldout")) {
                  inputSelector.removeAttribute("disabled");
                }
              }
              if (!x.querySelector("[data-soldout]")) {
                x.removeAttribute("disabled");
                x.setAttribute("name", newFieldName);
              }
            }
          });
          n.$input.show(),
            (n.hidden = !1),
            eventApi.fieldShow(
              { reaction: n },
              elemOptionAvisContainer,
              productId
            ),
            t.watching[n.name] &&
            ((t.watching[n.name].hidden = !1),
              l_change(
                elemOptionAvisContainer,
                productId,
                t.watching[n.name],
                0
              ));
        }

        spLog(n, "conditional logic: showing field", !0),
          n.$input.removeAttr("disabled").fadeTo
            ? n.$input.removeAttr("disabled").fadeTo(100, 1, function () {
              showControl();
            })
            : (n.$input.removeAttr("disabled")[0].animate(
              {
                opacity: 1,
              },
              {
                duration: 100,
                easing: "linear",
                iterations: 1,
                fill: "both",
              }
            ).onfinish = function () {
              showControl();
            });
      }
      function compareCondition(e, t, n) {
        if (t && e != "greater" && e != "less") t = t.split(" [ ")[0];
        switch (e) {
          case "contains":
            return !!t && t.indexOf(n) !== -1;
          case "not_contain":
            return t && t.indexOf(n) === -1;
          case "starts_with":
            return t && t.startsWith(n);
          case "ends_width":
            return t && t.endsWith(n);
          case "is":
            return t == n;
          case "isnot":
            return t != n;
          case "greater":
            return parseFloat(t) > parseFloat(n);
          case "less":
            return parseFloat(t) < parseFloat(n);
          default:
            return (
              spLog(e, "conditional logic: unknown type for rule compare", !0),
              !1
            );
        }
      }
      function checkCondition(e, t, n) {
        if ("greater" == e || "less" == e) {
          try {
            var i = parseFloat(t),
              o = parseFloat(n);
            if (!isNaN(i) && !isNaN(o)) return compareCondition(e, i, o);
          } catch (a) {
            spLog(a, "conditional logic: greater / less error", !0);
          }
          return !1;
        }
        return (
          (t = t ? t.toLowerCase() : ""),
          (n = n ? n.toLowerCase() : ""),
          compareCondition(e, t, n)
        );
      }
      t.s_check_input_variant = function (
        elemOptionAvisContainer,
        productId,
        productInfo
      ) {
        let watchingVariant = t.watching[key_variant_conditional];
        if (!watchingVariant?.reactions || watchingVariant?.reactions?.length === 0) return;

        let variants = productInfo.variants;
        let variantId = "";
        let checkUrl = shop_id === "1991066";
        if (formProductGenOptionJs[productId]?.localName === "form") {
          let formData = new FormData(formProductGenOptionJs[productId]);
          if (!checkUrl && formData && formData.get("id"))
            variantId = formData.get("id");
          else {
            const searchParams = new URLSearchParams(window.location.search);
            if (searchParams?.get("variant")) {
              variantId = searchParams?.get("variant");
            }
          }
        }
        if (!variantId)
          variantId =
            formProductGenOptionJs[productId]?.querySelector(
              "[name='id']"
            )?.value;
        if (!variantId) {
          variantId = new FormData(formProductGenOptionJs[productId])?.get("id[]");
        }
        if (!variantId) {
          variantId = elemOptionAvisContainer.querySelector("[name='id']")?.value;
        }
        if (!variantId) variantId = variants[0].id.toString();
        let oldVariantId = selectedVariantIdAll[productId];
        if (oldVariantId !== variantId || window?.ap_front_settings?.page_type === "cart") {
          console.log("variant change: ", variantId);
          selectedVariantIdAll[productId] = variantId;
          const findVariant = variants.find(
            (variant) => variant.id.toString() === variantId
          );
          if (findVariant && findVariant?.public_title) {
            let value = findVariant?.public_title?.toLowerCase();
            watchingVariant.value = value;

            event.each(watchingVariant.reactions, function (o, r) {
              t.reactions[r].rules[watchingVariant.name] &&
                t.reactions[r].rules[watchingVariant.name].length
                ? event.each(
                  t.reactions[r].rules[watchingVariant.name],
                  function (e, t) {
                    t.doesMatch = void 0;
                  }
                )
                : n(
                  { watch: watchingVariant, field: r },
                  "conditional logic: missing reaction, name: " +
                  watchingVariant.name +
                  ", field: " +
                  r
                ),
                d_react(elemOptionAvisContainer, productId, t.reactions[r]);
            });
          }
        }
      };
      function s_check_input(elemOptionAvisContainer, productId, i) {
        if (!i.$input)
          return void logCondition(
            i,
            "conditional logic: page missing input, name: " + i.name
          );
        var o;
        if (i.$input.not("[disabled]").length)
          switch (i.input.type) {
            case "radio":
            case "button_single":
              o = event("input:checked", i.$input).val();
              break;
            case "swatch":
            case "swatch_single_color":
            case "swatch_single_image":
            case "swatch_multi_color":
            case "swatch_multi_image":
            case "swatch_select_image":
            case "swatch_select_color":
              o = event("input:checked", i.$input)
                .map(function () {
                  return event(this).val();
                })
                .toArray();
              break;
            case "checkbox":
            case "combo_box":
            case "combo_select":
            case "combo_color":
            case "combo_image":
            case "button_multi":
              o = event("input:checked", i.$input)
                .map(function () {
                  return event(this).val();
                })
                .toArray();
              break;
            default:
              o = event("input:not(.iti__search-input),select,textarea", i.$input)
                .not('[type="hidden"]')
                .first()
                .val();
          }
        o != i.value &&
          ((i.value = o),
            event.each(i.reactions, function (o, r) {
              t.reactions[r].rules[i.name] && t.reactions[r].rules[i.name].length
                ? event.each(t.reactions[r].rules[i.name], function (e, t) {
                  t.doesMatch = void 0;
                })
                : logCondition(
                  { watch: i, field: r },
                  "conditional logic: missing reaction, name: " +
                  i.name +
                  ", field: " +
                  r
                ),
                d_react(elemOptionAvisContainer, productId, t.reactions[r]);
            }));
      }
      function p_rule_logic(elemOptionAvisContainer, productId, r) {
        if (!r.$input && !r[key_variant_conditional])
          return void logCondition(
            r,
            "conditional logic: page missing input, name: " + r.name
          );
        var isAllLogic = "all" === r.logic;
        event.each(r.rules, function (n, i) {
          event.each(i, function (i, o) {
            if (void 0 === o.doesMatch) {
              var p = t.watching[n];
              if (p.hidden) {
                o.doesMatch = false;
              } else {
                Array.isArray(p.value)
                  ? p.value.length
                    ? ((o.doesMatch = !1),
                      event.each(p.value, function (e, t) {
                        o.doesMatch =
                          checkCondition(o.type, t, o.value) || o.doesMatch;
                      }))
                    : (o.doesMatch = checkCondition(o.type, "", o.value))
                  : (o.doesMatch = checkCondition(o.type, p.value, o.value));
              }
            }
            isAllLogic = "all" === r.logic ? o.doesMatch && isAllLogic : o.doesMatch || isAllLogic;
          });
        });
        if (["70029803708", "59833778328", "56289263793", "8669954148"].includes(shop_id) || isDesignV2) {
          if ("hide" === r.type) {
            if (isAllLogic && !r.hidden) hideOptionByCondition(elemOptionAvisContainer, productId, r);
            else if (!isAllLogic && r.hidden) showOptionByCondition(elemOptionAvisContainer, productId, r);
          }
          else {
            if (isAllLogic && r.hidden) showOptionByCondition(elemOptionAvisContainer, productId, r);
            else if (!isAllLogic && !r.hidden) hideOptionByCondition(elemOptionAvisContainer, productId, r);
          }
        }
        else {
          if ("hide" === r.type) {
            isAllLogic ? !r.hidden && i_fieldHide(r, elemOptionAvisContainer, productId) : r.hidden && o_fieldShow(r, elemOptionAvisContainer, productId);
          }
          else {
            isAllLogic ? r.hidden && o_fieldShow(r, elemOptionAvisContainer, productId) : !r.hidden && i_fieldHide(r, elemOptionAvisContainer, productId);
          }
        }

        createTotalAdd(elemOptionAvisContainer, productId);
      }
      t.runAfterTimeouts = function (e) {
        e();
      };
      function changeReact(elemOptionAvisContainer, productId, e, n, i, o) {
        o(elemOptionAvisContainer, productId, e);
      }
      function l_change(elemOptionAvisContainer, productId, e, t) {
        changeReact(elemOptionAvisContainer, productId, e, "Change", t, s_check_input);
      }
      function d_react(elemOptionAvisContainer, productId, e, t) {
        changeReact(elemOptionAvisContainer, productId, e, "React", t, p_rule_logic);
      }
      t.register = function (elemOptionAvisContainer, productId, i, o, r) {
        if (t.active) {
          if (t.reactions[i.label_cart]) {
            var a = t.reactions[i.label_cart];
            (a.$input = o), d_react(elemOptionAvisContainer, productId, a, 50);
          }
          if (t.watching[i.label_cart]) {
            var p = t.watching[i.label_cart];
            (p.input = i),
              (p.$input = o),
              event.each(r, function (t, n) {
                var i = event(n);
                i.not("fieldset,input,select,textarea").length &&
                  (i = event(
                    "fieldset,input:not(.iti__search-input),select,textarea",
                    i
                  )
                    .not('[type="hidden"]')
                    .first()),
                  i.is("[type=text],[type=number],[type=range],textarea") &&
                  i.on("input", function (e) {
                    l_change(elemOptionAvisContainer, productId, p);
                  }),
                  i.on("change", function (e) {
                    l_change(elemOptionAvisContainer, productId, p);
                  }),
                  i.is("[type=radio]") &&
                  i.on("click", function (e) {
                    l_change(elemOptionAvisContainer, productId, p);
                  });
              }),
              s_check_input(elemOptionAvisContainer, productId, p);
          }
        }
      };
      function mapConditionalLogic(option, conditionalLogic) {
        t.active = true;
        var i = {
          name: option.label_cart,
          logic: conditionalLogic.logic,
          type: conditionalLogic.type,
          group_id: option.group_id,
          group_parent: option.group_parent,
          step_parent: option.step_parent,
          hidden: !1,
          $input: null,
          rules: {},
          option: option,
        };
        return (
          event.each(conditionalLogic.condition_items, function (e, o) {
            t.watching[o.field] ||
              (t.watching[o.field] = {
                name: o.field,
                value: void 0,
                reactions: [],
              }),
              t.watching[o.field].reactions.indexOf(option.label_cart) === -1 &&
              // t.watching[o.field].reactions.includes(n.label_cart) &&
              t.watching[o.field].reactions.push(option.label_cart),
              i.rules[o.field] || (i.rules[o.field] = []),
              i.rules[o.field].push({
                doesMatch: void 0,
                type: o.type,
                value: o.value,
              });
          }),
          (t.reactions[option.label_cart] = i),
          i
        );
      }
      function mapConditionalLogicValue(option, conditionalLogic) {
        t.active = true;
        t.reactions_value = t.reactions_value || {};
        t.watching_value = t.watching_value || {};

        var i = {
          name: option.label_cart,
          logic: conditionalLogic.logic,
          type: conditionalLogic.type,
          group_id: option.group_id,
          group_parent: option.group_parent,
          hidden: false,
          $input: null,
          rules: {},
          option: option,
        };
        event.each(conditionalLogic.condition_items, function (e, o) {
          if (!t.watching_value[o.field]) {
            t.watching_value[o.field] = {
              name: o.field,
              value: undefined,
              reactions_value: [],
            };
          }

          if (
            t.watching_value[o.field].reactions_value.indexOf(option.label_cart) === -1
          ) {
            t.watching_value[o.field].reactions_value.push(option.label_cart);
          }

          if (!i.rules[o.field]) {
            i.rules[o.field] = [];
          }

          i.rules[o.field].push({
            doesMatch: undefined,
            type: o.type,
            value: o.value,
          });
        });
        t.reactions_value[option.label_cart] = i;

        return i;
      }
      function setConditionalLogicOption(n) {
        if (n?.conditional_logic_value?.condition_items?.length) {
          try {
            window.mapConditionalLogicValue.push(mapConditionalLogicValue(n, n.conditional_logic_value));
          } catch (e) {
            console.log("ERROR => ", e);
          }
        }
        if (n?.conditional_logic?.condition_items?.length) {
          return mapConditionalLogic(n, n.conditional_logic);
        }
        if (n?.conditional_logic_parent?.condition_items?.length) {
          return mapConditionalLogic(n, n.conditional_logic_parent);
        }
      }
      function f(n) {
        var i = [];
        return (
          event.each(n, function (e, n) {
            return window.AP_POptions && window.AP_POptions.pos
              ? void (n.$input.parent(":disabled").length || i.push(n))
              : void (
                (t.reactions[n.name] && t.reactions[n.name].hidden) ||
                i.push(n)
              );
          }),
          i
        );
      }
      function initData() {
        Object.keys(t.timers)
          .filter(function (e) {
            return "running" !== e;
          })
          .forEach(function (e) {
            clearTimeout(t.timers[e]);
          }),
          t.intervals.forEach(function (e) {
            clearInterval(e);
          }),
          (t.active = !1),
          (t.isPreview = !1),
          (t.watching = {}),
          (t.reactions = {}),
          (t.intervals = []),
          (t.timers.running = { Change: 0, React: 0 });
      }
      return (
        (t.init = function (n, i) {
          i && initData(),
            event.each(n, function (e, t) {
              setConditionalLogicOption(t);
            }),
            t.active && priceMod.variantSubmissionAlters.push(f);
        }),
        t
      );
    }

    function EventApi(e) {
      var t = this;
      return (
        (t.subscribe = function (e, t) {
          "function" == typeof t &&
            document.addEventListener("productoptions." + e, function (e) {
              t(e);
            });
        }),
        (t.trigger = function (e, t, n) {
          n = !!n && n;
          var i = new CustomEvent(e, { detail: t, cancelable: n });
          return document.dispatchEvent(i), i;
        }),
        (t.getValue = function (t, n) {
          var i = n.find('[name*="properties"]'),
            o = "";
          return (
            i.is(
              "textarea, input[type=text], input[type=number], input[type=range], input[type=radio]:checked, input[type=hidden]"
            )
              ? (o = i.val())
              : i.is("select") &&
              (o = e.isArray(i.val()) ? i.val().join(",") : i.val()),
            o
          );
        }),
        (t.appLoad = function (e) {
          t.trigger("productoptions.appLoad", e);
        }),
        (t.fieldLoad = function (e, productId) {
          e.hasBundledProducts = !1;
          for (var n in priceModAll[productId].activeVariants)
            priceModAll[productId].activeVariants[n].label_cart &&
              priceModAll[productId].activeVariants[n].label_cart ===
              e.fieldConfig.label_cart &&
              (e.hasBundledProducts = !0);
          (e.value = t.getValue(e.fieldConfig.label_cart, e.element)),
            t.trigger("productoptions.fieldLoad", e);
        }),
        (t.fieldChange = function (e) {
          t.trigger("productoptions.fieldChange", e);
        }),
        (t.productBundleAdd = function (e) {
          (e.element = e.element.closest("div")),
            t.trigger("productoptions.productBundleAdd", e);
        }),
        (t.productBundleRemove = function (e) {
          (e.element = e.element.closest("div")),
            t.trigger("productoptions.productBundleRemove", e);
        }),
        (t.fieldShow = function (e, elemOptionAvisContainer, productId) {
          var n = {
            name: e.reaction.name,
            value: t.getValue(e.reaction.name, e.reaction.$input),
            element: e.reaction.$input,
          };
          t.trigger("productoptions.fieldShow", n),
            eventApi.fieldChange({
              name: e.reaction.name,
              value: t.getValue(e.reaction.name, e.reaction.$input),
              element: e.reaction.$input,
            }),
            Object.keys(priceModAll[productId].activeVariants)
              .filter(function (t) {
                return (
                  priceModAll[productId].activeVariants[t].name === e.reaction.name
                );
              })
              .forEach(function (t) {
                priceModAll[productId].activeVariants[t].isShow = true;
                if (
                  priceModAll[productId].activeVariants[t].variantId &&
                  priceModAll[productId].activeVariants[t].variantId != ""
                )
                  eventApi.productBundleAdd({
                    name: e.reaction.name,
                    element: e.reaction.$input,
                    productBundle: priceModAll[productId].activeVariants[t],
                  });
              });
          findButtonAddCart(elemOptionAvisContainer, productId);
          createTotalAdd(elemOptionAvisContainer, productId);
        }),
        (t.fieldHide = function (e, elemOptionAvisContainer, productId) {
          var n = {
            name: e.reaction.name,
            value: t.getValue(e.reaction.name, e.reaction.$input),
            element: e.reaction.$input,
          };
          t.trigger("productoptions.fieldHide", n),
            eventApi.fieldChange({
              name: e.reaction.name,
              value: "",
              element: e.reaction.$input,
            }),
            Object.keys(priceModAll[productId].activeVariants)
              .filter(function (t) {
                return (
                  priceModAll[productId].activeVariants[t].name ===
                  e.reaction.name
                );
              })
              .forEach(function (t) {
                if (
                  priceModAll[productId].activeVariants[t].variantId &&
                  priceModAll[productId].activeVariants[t].variantId != ""
                )
                  eventApi.productBundleRemove({
                    name: e.reaction.name,
                    element: e.reaction.$input,
                    productBundle: priceModAll[productId].activeVariants[t],
                  });

                priceModAll[productId].activeVariants[t].isShow = false;
              });
          findButtonAddCart(elemOptionAvisContainer, productId);
          createTotalAdd(elemOptionAvisContainer, productId);
        }),
        (t.validationFail = function (e) {
          var n = t.trigger("productoptions.validationFail", e, !0);
          return n.defaultPrevented;
        }),
        (t.validationSuccess = function (e) {
          t.trigger("productoptions.validationSuccess", e);
        }),
        (t.productBundleCartSubmit = function (e) {
          var n = t.trigger("productoptions.productBundleCartSubmit", e, !0);
          return n.defaultPrevented;
        }),
        (t.beforeVariantPost = function (e) {
          var n = t.trigger("productoptions.beforeVariantPost", e, !0);
          return n.defaultPrevented;
        }),
        (t.beforeVariantsPost = function (e) {
          var n = t.trigger("productoptions.beforeVariantsPost", e, !0);
          return n.defaultPrevented;
        }),
        t
      );
    }
    var eventApi = new EventApi(window.AP_POptions.$);
    function spLog(e, t, n) {
      var i = "IO",
        o = "DodgerBlue";
      "function" == typeof window.spLogCallback &&
        window.spLogCallback(i, e, t, n === !0 ? o : n);
      try {
        "on" === localStorage.getItem("spLog") && console.log([i, t, e]);
      } catch (r) { }
    }
    function createTotalAdd(elemOptionAvisContainer, productId) {
      totalPriceAdd = 0;

      let priceAddElem = elemOptionAvisContainer.querySelector(
        ".avp-productoption-total-add"
      );
      let inputTotalAddCharge = elemOptionAvisContainer.querySelector(
        ".apo-total-addcharge"
      );
      if (priceModAll[productId].activeVariants) {
        for (const item in priceModAll[productId].activeVariants) {
          let typePriceQuantity = priceModAll[productId].activeVariants[item].$input.data("quantity-price-type");
          let priceAdd = priceMod.formatMoneyToNumber(
            priceModAll[productId].activeVariants[item].price
          );
          if (
            priceModAll[productId].activeVariants[item].isShow &&
            priceAdd != "0"
          ) {
            if (typePriceQuantity && typePriceQuantity === "any") {
              if (priceModAll[productId].activeVariants[item].quantity) totalPriceAdd += parseFloat(priceAdd);
            } else {
              if (shop_id === "87662559515" && parseToBool(priceModAll[productId].activeVariants[item].isOneTime)) {
                continue;
              }
              totalPriceAdd +=
                parseFloat(priceAdd) *
                parseInt(
                  priceModAll[productId].activeVariants[item].quantity ?? 1
                );
            }
          }
        }

        if (priceAddElem) {
          if (totalPriceAdd > 0) {
            priceAddElem.classList.remove("apo-total-addcharge-hide");
            let formatPrice = priceMod.formatMoney(totalPriceAdd * 100);
            let priceAdd = priceAddElem.querySelector(
              ".avp-productoption-totalpriceadd"
            );
            if (priceAdd) priceAdd.innerHTML = formatPrice;
            if (inputTotalAddCharge)
              inputTotalAddCharge.value = totalPriceAdd * 100;
          } else {
            priceAddElem.classList.add("apo-total-addcharge-hide");
            if (inputTotalAddCharge) inputTotalAddCharge.value = 0;

            let formatPrice = priceMod.formatMoney(totalPriceAdd * 100);
            let priceAdd = priceAddElem.querySelector(
              ".avp-productoption-totalpriceadd"
            );
            if (priceAdd) priceAdd.innerHTML = formatPrice;
          }
        }
      }

      if (totalPriceAdd === 0 && priceAddElem) {
        priceAddElem.classList.add("apo-total-addcharge-hide");
      }
      if (inputTotalAddCharge) inputTotalAddCharge.value = totalPriceAdd * 100;
    }

    const showPopupImageSwatch = (event) => {
      let apoSwatchPopupClass = "apo-swatch-popup";
      let apoSwatchBackdropClass = "apo-swatch-backdrop";

      const remove = () => {
        let t = document.querySelector(`.${apoSwatchPopupClass}`),
          e = document.querySelector(`.${apoSwatchBackdropClass}`);
        t && t.remove(), e && e.remove();
      };
      remove();
      const createPopup = () => {
        let n = document.createElement("div");
        return (
          n.classList.add(apoSwatchPopupClass),
          n.setAttribute("style", "display:none!important"),
          (n.innerHTML = `<div class="apo-swatch-popup-box">\n         <span class="apo-swatch-popup-close">&times;</span>\n <div class="apo-popup-image">  </div>    </div>`),
          n
        );
      },
        backDrop = () => {
          let t = document.createElement("div");
          return (
            t.classList.add(apoSwatchBackdropClass),
            t.setAttribute("style", "display:none!important"),
            t.addEventListener("click", remove.bind(this)),
            t
          );
        };

      let e = createPopup(),
        r = backDrop();
      document.body.appendChild(e),
        document.body.appendChild(r),
        e
          .querySelectorAll(".apo-swatch-popup-close")
          .forEach((t) => t.addEventListener("click", remove.bind(this)));

      let mainImg = event.currentTarget.querySelector(".apo-main-image");
      if (mainImg && mainImg.getAttribute("src")) {
        let imgSrc = mainImg.getAttribute("src");
        let fileName = imgSrc.split("/").pop();
        let newImgSrc = imgSrc.replace(fileName, "full_" + fileName);
        if (document.querySelector(".apo-popup-image"))
          document.querySelector(
            ".apo-popup-image"
          ).innerHTML = `<img style="width: 100%; height: 100%; object-fit: contain;" src="${newImgSrc}" />`;
        e.setAttribute("style", "display:flex!important");
        r.setAttribute("style", "display:block!important");
      }
    };

    const checkOptionAddCharge = (optionType) => {
      return (
        optionType === "slider" ||
        optionType === "quantity" ||
        optionType === "text" ||
        optionType === "textarea" ||
        optionType === "number" ||
        optionType === "date" ||
        optionType === "color" ||
        optionType === "switch" ||
        optionType === "file" ||
        optionType === "phone" ||
        optionType === "font" ||
        optionType === "email"
      );
    };

    function handleChangeValueByQuantity(valueElm, isValue) {
      if (isValue !== null) valueElm.checked = isValue;
      if (valueElm.type === "checkbox") {
        if (valueElm.closest(".combo_modal")) {
          valueElm.dispatchEvent(new Event("change"));
          valueElm.closest("fieldset").dispatchEvent(new Event("change"));
        }
        else {
          let fieldSetCheckbox = valueElm.closest("fieldset");
          if (fieldSetCheckbox)
            fieldSetCheckbox.dispatchEvent(new Event("change"));
        }
      } else {
        valueElm.dispatchEvent(new Event("change"));
      }
    }

    function debounce(callback, delay) {
          let timeoutId = null;

          return function (...args) {
              clearTimeout(timeoutId);

              timeoutId = setTimeout(() => {
                  callback.apply(null, args);
              }, delay);
          };
      };
    function isNumberRegex(value) {
      return /^-?\d+(\.\d+)?$/.test(value);
    }

    var e = {
      _calcDimension: function (listElementInput) {
        let formula = listElementInput?.[0]?.dataset.optionFormula;
        let price = listElementInput?.[0]?.dataset.variantPrice;
        if (!formula) return 0;
        const allowedVars = ["x", "y", "z", "price"];
        formula = formula.replace(/{{\s*price\s*}}/g, "price");
        const validChars = /^[0-9a-zA-Z+\-*/()\s.{}]+$/;
        if (!validChars.test(formula)) {
          return 0;
        }

        let variables = {price: isNumberRegex(price) ? parseFloat(price)/100.0 : 0.0};
        listElementInput?.forEach((input, index) => {
          const value = isNumberRegex(input.value) ? parseFloat(input.value) : 0.0;
          variables[`${allowedVars[index]}`] = value;
        });


        const tokens = formula.match(/[a-zA-Z]+/g) || [];
        for (const token of tokens) {
          if (!allowedVars.includes(token)) {
            return 0;
          }
        }

        const keys = Object.keys(variables);
        const values = Object.values(variables);
        const fn = new Function(...keys, `return ${formula.trim()};`);
        const result = fn(...values);
        return isNumberRegex(result) ? result * 100.0 : 0;
      },
      _createTotalAdd: function (elemOptionAvisContainer, productId) {
        createTotalAdd(elemOptionAvisContainer, productId);
      },
      _handleChangeQuantity: async function (
        event,
        elemOptionAvisContainer,
        productId
      ) {
        let elm = event.target;
        let parents = $(elm).parents(".avp-value-grid");
        if (isQtyDefaultZero) {
          if (parents.length > 0) {
            let buttonAdd = parents.find(".avp-qty-add");
            let buttonCut = parents.find(".avp-qty-cut");
            let inputValue = parents.find("[field-name]");
            let min = 0;
            if (elm.min) min = parseInt(elm.min);
            if (elm.getAttribute("data-min"))
              min = parseInt(elm.getAttribute("data-min"));
            let max = 0;
            if (elm.max) max = parseInt(elm.max);
            let maxTotalQuantitySetup = 0;
            let totalQuantity = 0;
            if (inputValue.length > 0) {
              let quantity = $(elm).val();
              if (quantity) {
                quantity = parseInt(quantity);
                if (elm.max > 0 && parseInt(quantity) >= elm.max) {
                  quantity = elm.max;
                  $(elm).val(quantity);
                  if (buttonAdd) buttonAdd.attr({ disabled: "disabled" });
                }
                if (quantity <= 0 || (min && quantity < min)) buttonCut.attr({ disabled: "disabled" });
                else buttonCut.removeAttr("disabled");
                if (max && quantity >= max) {
                  quantity = max;
                  buttonAdd.attr({ disabled: "disabled" });
                } else {
                  buttonAdd.removeAttr("disabled");
                }
              } else {
                if (buttonCut) {
                  buttonCut.attr({ disabled: "disabled" });
                }
              }
              if (inputValue[0].type === "checkbox") {
                let fieldSetCheckbox = inputValue[0].closest("fieldset");
                if (
                  fieldSetCheckbox &&
                  $(fieldSetCheckbox).data("max_total_qty")
                ) {
                  maxTotalQuantitySetup = parseInt(
                    $(fieldSetCheckbox).data("max_total_qty")
                  );
                  $(fieldSetCheckbox)
                    .find(":checked")
                    .map(function () {
                      let quantityInput = $(this)
                        .parents(".avp-value-grid")
                        .find("input.avp-qty-input");
                      if (quantityInput && quantityInput.length > 0) {
                        let quantity = quantityInput.val();
                        if (!quantity) quantity = 0;
                        else quantity = parseInt(quantity);
                        totalQuantity += quantity;
                      }
                    });

                  if (
                    totalQuantity + quantity < maxTotalQuantitySetup &&
                    (!elm.max || quantity < parseInt(elm.max))
                  ) {
                    buttonAdd.removeAttr("disabled");
                  } else buttonAdd.attr("disabled", "disabled");
                }
              }

              if (inputValue[0].checked) {
                if (
                  !quantity ||
                  quantity < min ||
                  (maxTotalQuantitySetup &&
                    totalQuantity > maxTotalQuantitySetup)
                ) {
                  handleChangeValueByQuantity(inputValue[0], false);
                } else {
                  await createAvisContainerHidden(
                    elemOptionAvisContainer,
                    productId,
                    inputValue.attr("field-name"),
                    quantity,
                    inputValue,
                    ""
                  );
                }
              } else {
                if (
                  quantity &&
                  quantity >= min &&
                  (!max || quantity <= max) &&
                  (!maxTotalQuantitySetup ||
                    totalQuantity + quantity <= maxTotalQuantitySetup)
                ) {
                  handleChangeValueByQuantity(inputValue[0], true);
                }
              }
            }

            e._createTotalAdd(elemOptionAvisContainer, productId);
          }
        } else {
          let inputValue = parents.find("[field-name]");
          if (inputValue.length > 0) {
            let quantity = $(elm).val();
            if (quantity) {
              if (elm.max > 0 && parseInt(quantity) > elm.max) {
                quantity = elm.max;
              }

              if (elm.min > 0 && parseInt(quantity) < elm.min) {
                quantity = elm.min;
              }

              $(elm).val(quantity);
            } else {
              quantity = elm.min > 0 ? elm.min : 1;
            }
            await createAvisContainerHidden(
              elemOptionAvisContainer,
              productId,
              inputValue.attr("field-name"),
              quantity,
              inputValue,
              "",
              true,
              elm
            );
          }

          e._createTotalAdd(elemOptionAvisContainer, productId);
        }
      },

      _createQuantity: function (
        elemOptionAvisContainer,
        productId,
        valueElement,
        min,
        max,
        quantityDefault = -1,
        updateCheckboxState,
        desc,
      ) {
        if (!quantityDefault) quantityDefault = -1;
        let elemInput = document.createElement("INPUT");
        min = min ? min : 1;
        elemInput.setAttribute("type", "number");
        if (!isQtyDefaultZero) elemInput.setAttribute("disabled", "disabled");
        elemInput.classList.add("avp-qty-input");
        let value = isQtyDefaultZero && quantityDefault > -1 ? Math.max(quantityDefault, min) : shop_id === "73932832802" ? min : 0;

        if (shop_id === "43133796508") {
          value = min;
        }

        if (!isQtyDefaultZero) {
          value = isQtyDefaultZero ? 0 : quantityDefault > min ? quantityDefault : min;
        }
        if (min) {
          min = parseInt(min);
          if (isQtyDefaultZero) {
            elemInput.setAttribute("data-min", min);
          } else elemInput.setAttribute("min", min);
        }
        if (max) {
          max = parseInt(max);
          elemInput.setAttribute("max", max);
          if (!isQtyDefaultZero && quantityDefault > max) quantityDefault = max;
        }
        elemInput.setAttribute("value", value);

        function checkMinMaxQuantity(min, max, inputElem) {
          let valueInput = parseInt(inputElem.value);
          if (min && valueInput < min) {
            inputElem.value = min;
            inputElem.dispatchEvent(new Event('input'));
          }
          if (max && valueInput > max) {
            inputElem.value = max;
            inputElem.dispatchEvent(new Event('input'));
          }
        }
        elemInput.addEventListener("keydown", function (event) {
          if (event.key === "-" || event.keyCode === 189) {
            event.preventDefault();
          }
        });

        elemInput.addEventListener('blur', () => checkMinMaxQuantity(min, max, elemInput));

        elemInput.removeEventListener("input", (event) => {
          e._handleChangeQuantity(event, elemOptionAvisContainer, productId);
        });
        elemInput.addEventListener("input", (event) => {
          e._handleChangeQuantity(event, elemOptionAvisContainer, productId);
        });

        let elemInputJq = window.AP_POptions.$(elemInput);
        elemInputJq.on("keypress", function (e) {
          var t = String.fromCharCode(e.which);
          return Boolean(t.match(/[0-9]/));
        });

        let buttonCut = window.AP_POptions.$("<button></button>")
          .addClass("avp-qty-button")
          .addClass("avp-qty-cut")
          .attr({ disabled: "disabled" })
          .html(`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-minus" fill="none" viewBox="0 0 10 2">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
</path></svg>`);
        buttonCut.on("click", async function (event) {
          event.preventDefault();
          let parents = $(this).parents(".avp-value-grid");
          if (parents.length > 0) {
            let inputValue = parents.find("[field-name]");
            if (inputValue.length > 0) {
              let inputQuantity = parents.find(".avp-qty-input");
              if (inputQuantity.length > 0) {
                let quantity = inputQuantity.val();
                if (!quantity) quantity = 1;
                quantity = parseInt(quantity) - 1;
                if (isQtyDefaultZero) {
                  let isNotSelect =
                    inputValue[0].getAttribute("data-type") !== "select" &&
                    inputValue[0].getAttribute("data-type") !==
                    "swatch_select_color" &&
                    inputValue[0].getAttribute("data-type") !==
                    "swatch_select_image";
                  // Button cut DISABLE when quantity <=0 or (<=1 is select)
                  if (quantity <= 0 || (quantity <= 1 && !isNotSelect)) {
                    $(this).attr({ disabled: "disabled" });
                  } else {
                    $(this).removeAttr("disabled");
                  }

                  // if (min && quantity < min) {
                  //   quantity = 0;
                  //   $(this).attr({ disabled: "disabled" });
                  // }

                  if (shop_id === "43133796508") {
                    if (quantity <= 0) {
                      quantity = 0;
                      $(this).attr({ disabled: "disabled" });
                    } else {
                      $(this).removeAttr("disabled");
                    }
                  } else if (min && quantity < min) {
                    quantity = 0;
                    $(this).attr({ disabled: "disabled" });
                  }

                  inputQuantity.val(quantity);
                  if (!max || quantity < max) {
                    parents.find(".avp-qty-add").removeAttr("disabled");
                  }
                  if (inputValue[0].checked) {
                    if (isNotSelect &&
                      (
                        (shop_id !== "43133796508" && quantity < parseInt(min)) ||
                        (shop_id === "43133796508" && quantity === 0)
                      )
                    ) {
                      handleChangeValueByQuantity(inputValue[0], false);
                    } else {
                      await createAvisContainerHidden(
                        elemOptionAvisContainer,
                        productId,
                        inputValue.attr("field-name"),
                        quantity,
                        inputValue,
                        "",
                        true
                      );
                    }
                  } else {
                    if (quantity >= parseInt(min) && isNotSelect) {
                      // inputValue[0].checked = true;
                      handleChangeValueByQuantity(inputValue[0], true);
                    } else {
                      await createAvisContainerHidden(
                        elemOptionAvisContainer,
                        productId,
                        inputValue.attr("field-name"),
                        quantity,
                        inputValue,
                        "",
                        true
                      );
                    }
                  }
                } else {
                  if (quantity <= parseInt(min)) {
                    quantity = min;
                    $(this).attr({ disabled: "disabled" });
                  }
                  inputQuantity.val(quantity);
                  await createAvisContainerHidden(
                    elemOptionAvisContainer,
                    productId,
                    inputValue.attr("field-name"),
                    quantity,
                    inputValue,
                    "",
                    true
                  );
                }
              }
            }

            e._createTotalAdd(elemOptionAvisContainer, productId);
          }
        });
        let buttonAdd = window.AP_POptions.$("<button></button>")
          .addClass("avp-qty-button")
          .addClass("avp-qty-add")
          .html(`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-plus" fill="none" viewBox="0 0 10 10">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
</path></svg>`);

        if (!isQtyDefaultZero) buttonAdd.attr({ disabled: "disabled" });

        buttonAdd.on("click", async function (event) {
          event.preventDefault();
          let parents = $(this).parents(".avp-value-grid");
          if (parents.length > 0) {
            let inputValue = parents.find("[field-name]");
            if (inputValue.length > 0) {
              let inputQuantity = parents.find(".avp-qty-input");
              if (inputQuantity.length > 0) {
                let quantity = inputQuantity.val();
                if (isQtyDefaultZero) {
                  let isNotSelect =
                    inputValue[0].getAttribute("data-type") !== "select" &&
                    inputValue[0].getAttribute("data-type") !==
                    "swatch_select_color" &&
                    inputValue[0].getAttribute("data-type") !==
                    "swatch_select_image";
                  if (!quantity) quantity = 0;
                  quantity = parseInt(quantity) + 1;
                  if (quantity === 1 && updateCheckboxState) {
                    updateCheckboxState(valueElement, true);
                  }
                  if (max && quantity >= parseInt(max)) {
                    quantity = max;
                    $(this).attr({ disabled: "disabled" });
                  }
                  inputQuantity.val(quantity);
                  if (quantity >= 0) {
                    let btnCut = parents.find(".avp-qty-cut");
                    if (btnCut?.length) {
                      if (quantity < min) { }
                      else btnCut.removeAttr("disabled");
                    }
                  }
                  if (
                    min &&
                    quantity >= parseInt(min) &&
                    !inputValue[0].checked &&
                    isNotSelect
                  ) {
                    // inputValue[0].checked = true;
                    handleChangeValueByQuantity(inputValue[0], true);
                  } else {
                    let isNotChangeHidden =
                      (!inputValue[0].checked && quantity < min) ||
                      (max && quantity > max);
                    if (!isNotChangeHidden) {
                      await createAvisContainerHidden(
                        elemOptionAvisContainer,
                        productId,
                        inputValue.attr("field-name"),
                        quantity,
                        inputValue,
                        "",
                        true
                      );
                    } else {
                      if (inputValue[0].type === "checkbox") {
                        let fieldSetCheckbox =
                          inputValue[0].closest("fieldset");
                        if (
                          fieldSetCheckbox &&
                          $(fieldSetCheckbox).data("max_total_qty")
                        ) {
                          let maxQuantity = parseInt(
                            $(fieldSetCheckbox).data("max_total_qty")
                          );
                          let totalQuantity = 0;
                          $(fieldSetCheckbox)
                            .find(":checked")
                            .map(function () {
                              let quantityInput = $(this)
                                .parents(".avp-value-grid")
                                .find("input.avp-qty-input");
                              if (quantityInput && quantityInput.length > 0) {
                                let quantity = quantityInput.val();
                                if (!quantity) quantity = 0;
                                else quantity = parseInt(quantity);
                                totalQuantity += quantity;
                              }
                            });

                          if (
                            totalQuantity + quantity < maxQuantity &&
                            (!max || quantity < parseInt(max))
                          ) {
                            buttonAdd.removeAttr("disabled");
                          } else buttonAdd.attr("disabled", "disabled");
                        }
                      }
                    }
                  }
                } else {
                  if (!quantity) quantity = 1;
                  quantity = parseInt(quantity) + 1;
                  if (max && quantity >= parseInt(max)) {
                    quantity = max;
                    $(this).attr({ disabled: "disabled" });
                  }
                  inputQuantity.val(quantity);
                  await createAvisContainerHidden(
                    elemOptionAvisContainer,
                    productId,
                    inputValue.attr("field-name"),
                    quantity,
                    inputValue,
                    "",
                    true
                  );
                }
              }
            }

            e._createTotalAdd(elemOptionAvisContainer, productId);
          }
        });

        let qtyWrapper = window.AP_POptions.$("<div></div>")
          .addClass("avp-qty-wrapper")
          .append(buttonCut)
          .append(elemInputJq)
          .append(buttonAdd);
        let result = window.AP_POptions.$("<div></div>")
          .addClass("avp-value-grid")
          .append(
            window.AP_POptions.$("<div></div>")
              .addClass("avp-value-grid-item")
              .append(valueElement)
          )
          .append(
            window.AP_POptions.$("<div></div>")
              .addClass("avp-value-grid-item")
              .append(qtyWrapper)
          );
        if (desc) {
          result.append(
            window.AP_POptions.$("<span></span>")
              .addClass("apo-value-help-text")
              .text(desc)
          );
        }
        return result;
      },
      _createNewSwatchImageItem: function (option, optionValue, swatchItemHtml) {
        let optionValueText = swatchItemHtml;
        let imageUrl = optionValue?.swatch?.file_image_url;
        let borderRadius = "";
        if (option.swatch_shape === "circle") {
          borderRadius = "border-radius: 50% !important;";
        }
        swatchItemHtml = `<span class="avp-productoptionswatch ${isStoreLazyImg ? "avis-lazy-bg" : ""}" style="${isStoreLazyImg ? "" : `background-image: url('${imageUrl}');`}${borderRadius}" data-src="${imageUrl}"><span class='apo-color-image'>&nbsp;</span></span>`;
        let textTooltipSwatch = "";
        let isShowTooltip = false;
        let showHoverImage = !customizeryConfig?.hide_hover_img_swatches;
        if (option.tooltip_display === "value") {
          textTooltipSwatch = optionValue.value;
          isShowTooltip = true;
        } else if (option.tooltip_display === "desc") {
          textTooltipSwatch = optionValue.des_value;
          isShowTooltip = true;
        }
        if (!isShowTooltip &&
          (option?.tooltip_display !== "hide" || showHoverImage) &&
          imageUrl) {
          isShowTooltip = true;
        }

        let tooltipSwatch = "";
        let tooltipPrice = "";
        if (optionValue?.price > 0) {
          tooltipPrice = priceMod.formatMoney(parseFloat(optionValue?.price), true);
        }

        if (!isDesignV2 && !convertTooltipBody) {
          if (isShowTooltip) {
            if (imageUrl)
              tooltipSwatch = `<span class='apo-tooltip-img ${isStoreLazyImg ? "avis-lazy-bg" : ""}' ${isStoreLazyImg ? `data-src="${imageUrl}"` : `style="background-image: url('${imageUrl}');"`}>&nbsp;</span>`;
            if (textTooltipSwatch) {
              let customTextTooltipSwatch = textTooltipSwatch;
              if (shop_id === '65999732917' && tooltipPrice) {
                customTextTooltipSwatch += ` <span class="money apo-tooltip-money">(+${tooltipPrice})</span>`;
              }
              if (shop_id === '10278593' && tooltipPrice) {
                customTextTooltipSwatch += ` <span class="money apo-tooltip-money">(${tooltipPrice})</span>`;
              }
              tooltipSwatch += `<span class='apo-tooltip-title'>${customTextTooltipSwatch}</span>`;
            }
            if (tooltipSwatch) {
              tooltipSwatch = `<div class='apo-swatch-tooltip apo-swatch-tooltip-top'>${tooltipSwatch}</div>`;
              tooltipSwatch +=
                "<span class='apo-swatch-arrow apo-swatch-arrow-top'></span>";
            }
          }
        }
        let hiddenHoverImg = customizeryConfig?.hide_hover_img_swatches
          ? " hover-img-hidden-mobile"
          : "";
        let html = tooltipSwatch
          ? `<div class="${isShowTooltip
            ? "apo-swatch-wrapper-tooltip"
            : "apo-swatch-only-img"
          } avp-productoptionswatch-box${hiddenHoverImg}">${swatchItemHtml}${tooltipSwatch}</div>`
          : swatchItemHtml;
        let p = window.AP_POptions.$(`<div class='option-value-container apo-swatch-wrapper'>${html}<span class='apo-option-value'>${optionValueText}</span></div>`);
        if (isShowTooltip) {
          e.hoverTooltip(p[0].querySelector(".avp-productoptionswatch-box"));
        }
        return p;
      },
      _createRadioButton: function (
        elemOptionAvisContainer,
        productId,
        option,
        t,
        n,
        i,
        quantityDefault,
        isOnlyUrl
      ) {
        let valueDetail = t;
        var o = priceMod.getValueText(t, option),
          indexValue = option?.option_values?.findIndex(opt => opt.value == o.value) ?? 0,
          r = window.AP_POptions.$("<input/>")
            .attr("type", "radio")
            .attr("field-name", option.label_cart)
            .attr(
              "name",
              isNotUseAvisHidden
                ? `properties[${option?.label_cart}]`
                : option?.label_cart
            )
            .attr("value", o.value)
            .attr("data-index", indexValue)
            .attr("des_value", t?.des_value)
            .attr("autocomplete", "off")
            .addClass("avp-productoptiontextcolor")
            .addClass("avp-productoptionbackground")
            .on("click", async function (t, n) {
              if (option?.is_change_image_thumbnail) {
                e.optionChangeImageProduct(valueDetail?.value ?? "");
              }

              if (isOnlyUrl) {
                t.target
                  ?.closest("label")
                  ?.querySelector(".apo-swatch-url")
                  ?.click();
                return;
              }
              if (
                priceModAll[productId].radioInput &&
                priceModAll[productId].radioInput[option.label_cart] &&
                priceModAll[productId].radioInput[option.label_cart].value ===
                t.target.value
              ) {
                let isNotUncheck = (["72549466396", "87350903133", "70874595579"].includes(shop_id)) && option.required;
                if (
                  (window.ap_front_settings.shop_id === "67366289656" &&
                    window.ap_front_settings.shop_id === "88343970095" &&
                    (option?.type === "radio" || option?.type === "button_single")) ||
                  isNotUncheck
                ) {
                } else $(this).prop("checked", false);

                await createAvisContainerHidden(
                  elemOptionAvisContainer,
                  productId,
                  option.label_cart,
                  "",
                  $(this)
                );
                priceModAll[productId].radioInput[option.label_cart].value = "";
                eventApi.fieldChange({
                  name: option.label_cart,
                  value: "",
                  element: $(this).closest("div"),
                });
                i(t);

                let spanRequired = $(this).closest(
                  "span[apo-required='true']"
                );
                if (spanRequired && spanRequired.length) {
                  window.AP_POptions.apps.productoptions.toggleInputError(
                    spanRequired,
                    !0
                  );
                }

                e._createTotalAdd(elemOptionAvisContainer, productId);
              }

              if (option.type?.includes("color"))
              {
                e.eventListenerPersonalizer(option.key, "color", t.target.checked ? valueDetail?.swatch?.color : "", "name");
              }

              e.eventListnerSwatchPersonalizer(option.key, option, valueDetail.value_id, -1, t.target.checked);

              findButtonAddCart(elemOptionAvisContainer, productId);
            })
            .on("change", async function (t, n) {
              if (isOnlyUrl) return;
              n ||
                eventApi.fieldChange({
                  name: option.label_cart,
                  value: t.target.value,
                  element: $(this).closest("div"),
                }),
                i(t);

              if ($(this).prop("checked")) {
                if (
                  t.currentTarget.closest(".avp-productoptionswatchwrapper") &&
                  t.currentTarget.closest(".apo-custom-wrapper")
                ) {
                  let imgSelector = t.currentTarget
                    .closest(".avp-productoptionswatchwrapper")
                    .querySelector(".avp-productoptionswatch");
                  if (imgSelector && imgSelector.getAttribute("data-src")) {
                    let src = imgSelector.getAttribute("data-src");
                    let mainImageSelector = t.currentTarget
                      .closest(".apo-custom-wrapper")
                      .querySelector(".apo-main-image");
                    mainImageSelector.setAttribute("src", src);
                  }
                }
                priceModAll[productId].radioInput[option.label_cart] = {
                  value: t.target.value,
                };
                await createAvisContainerHidden(
                  elemOptionAvisContainer,
                  productId,
                  option.label_cart,
                  t.target.value,
                  $(this)
                );

                if (!option?.value_check_quantity?.includes(valueDetail?.value_id)) {
                  $(this).closest(".avp-option").find(".avp-qty-wrapper").each(function () {
                    let inputElem = $(this).find(".avp-qty-input");
                    let minusButton = $(this).find(".avp-qty-cut");

                    if (minusButton.length) {
                      minusButton.attr("disabled", "disabled");
                    }
                    if (inputElem.length) {
                      inputElem.val(option?.min_value_qty ?? 0).trigger("input");
                    }
                  });
                }
              } else {
                priceModAll[productId].radioInput[option.label_cart] = {
                  value: "",
                };
                await createAvisContainerHidden(
                  elemOptionAvisContainer,
                  productId,
                  option.label_cart,
                  "",
                  $(this)
                );
              }

              let spanRequired = $(this).closest("span[apo-required='true']");
              if (spanRequired && spanRequired.length) {
                window.AP_POptions.apps.productoptions.toggleInputError(
                  spanRequired,
                  !0
                );
              }

              e._createTotalAdd(elemOptionAvisContainer, productId);
              findButtonAddCart(elemOptionAvisContainer, productId);
            });

          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.attributeName === "disabled" || mutation.attributeName === "style") {
                if (!r.prop("disabled") && r.is(":checked")) {
                  e.eventListnerSwatchPersonalizer(option.key, option, valueDetail.value_id, -1, true);
                }
              }
            });
          });

          observer.observe(r[0], { attributes: true });

        if (t?.soldout) {
          r.attr("disabled", "disabled");
          r.attr("data-soldout", true);
        }

        if (isNotUseAvisHidden && option.required)
          r.attr("required", "required");

        let swatchItem = o.display;
        let spanValue = ["radio", "checkbox"].includes(option.type) && option.tooltip_display && t?.swatch?.file_image_url ? e._createNewSwatchImageItem(option, t, swatchItem) : swatchItem;
        let valueWrapper = null;
        if (n) {
          let valueElement = window.AP_POptions.$("<label></label>")
            .addClass("avp-productoptioncheckwrapper")
            .addClass(
              `avp-productoptioncheckwrapper${customizeryConfig?.customize_options?.radio_btn?.shape ===
                "pill" || option.type === "button_single"
                ? " avp-pilloptioncheckwrapper"
                : ""
              }`
            )
            .append(
              priceMod.attachData(
                r,
                option.label_cart,
                t,
                o.display,
                option,
                productId
              )
            )
            .append(spanValue);

          const currentlyNotInStock = priceMod.productVariantAC?.find(obj => obj?.id === t?.productVariationId)?.currentlyNotInStock;
          let qtyAvailable = priceMod.productVariantAC?.find(obj => obj?.id === t?.productVariationId)?.quantityAvailable;
          if (Number(qtyAvailable) <= 0) quantityAvailable = 0;
          if (['80678322490'].includes(window.ap_front_settings.shop_id) &&
            qtyAvailable >= 0 &&
            !currentlyNotInStock
          ) {
            let stockText = window.AP_POptions.$(`<p class="avis-stock-text">尚餘 ${qtyAvailable} 名額</p>`);
            valueElement.append(stockText);
          }

          if (t?.soldout) {
            valueElement.addClass(AVIS_CLASS.soldOutOption);
            valueElement.attr("title", AVIS_SOLD_OUT);
          }

          let desc;
          if (option?.class_name?.includes("avis-custom-desc") && t?.des_value) {
            desc = t?.des_value;
          }

          if ((option?.value_check_quantity?.includes(t?.value_id) && option.show_option_value_qty) || (option.show_option_value_qty && !option["value_check_quantity"])) {
            valueWrapper = e._createQuantity(
              elemOptionAvisContainer,
              productId,
              valueElement,
              option.min_value_qty,
              option.max_value_qty,
              quantityDefault,
              null,
              desc,
            );
          } else valueWrapper = valueElement;
        }
        (customizeryConfig?.customize_options?.radio_btn?.shape === "pill" ||
          option.type === "button_single") &&
          r.css({ display: "none" });
        return n ? valueWrapper : r;
      },
      _createComboButton: function (
        elemOptionAvisContainer,
        productId,
        option,
        t,
        n,
        valueDefault,
        quantityDefault
      ) {
        function getValueText(option) {
          return priceMod.getValueText(t, option);
        }

        function createCheckbox(value, labelCart, isChecked, isDisabled) {
          let indexValue = option?.option_values?.findIndex(opt => opt.value == value) ?? 0;
          return window.AP_POptions.$("<input/>")
            .attr("type", "checkbox")
            .attr("value", value)
            .attr("data-index", indexValue)
            .attr("value-id", option?.option_values?.[indexValue]?.value_id ?? "")
            .attr("field-name", labelCart)
            .attr("autocomplete", "off")
            .attr(
              "name",
              isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
            )
            .addClass("avp-productoptiontextcolor avp-productoptionbackground")
            .prop("checked", isDisabled ? false : isChecked)
            .prop("disabled", isDisabled)
            .on("click", async function () {
              if (option?.is_change_image_thumbnail) {
                e.optionChangeImageProduct(t?.value ?? "");
              }
            });
        }

        function createColorBox(color) {
          return window.AP_POptions.$("<div></div>")
            .addClass("option-avis-combo_color-box")
            .attr("style", `background-color: ${color} !important`);
        }

        function createImgBox(src) {
          if (src) {
            const img = window.AP_POptions.$("<img/>")
              .addClass("option-avis-combo_image-box")
              .attr("data-src", src);
            if (isStoreLazyImg) {
              img.attr("loading", "avis-img-lazy");
              img.addClass("lazy");
            } else {
              img.attr("src", src);
            }
            return img;
          } else {
            return window.AP_POptions.$("<div></div>").addClass(
              "option-avis-combo_image-box"
            );
          }
        }

        function updateCheckboxState(valueElement, isChecked) {
          let iconTick = null;
          if (
            ["combo_color", "combo_image", "combo_select"].includes(option.type)
          ) {
            iconTick = window.AP_POptions.$("<span></span>").addClass(
              "option-avis-checkmark"
            );
          }

          if (isChecked) {
            if (option.show_option_value_qty) {
              if (valueElement.closest(".avp-value-grid")?.length) valueElement.closest(".avp-value-grid").addClass("option-avis-checked");
              else valueElement.addClass("option-avis-checked");
            } else {
              valueElement.addClass("option-avis-checked");
            }

            if (
              !valueElement.find(".option-avis-checkmark").length &&
              iconTick
            ) {
              valueElement.append(iconTick.clone());
            }
          } else {
            if (option.show_option_value_qty) {
              if (valueElement.closest(".avp-value-grid")?.length) valueElement.closest(".avp-value-grid").removeClass("option-avis-checked");
              else valueElement.removeClass("option-avis-checked");
            } else {
              valueElement.removeClass("option-avis-checked");
            }
            valueElement.find(".option-avis-checkmark")?.remove();
          }
        }

        function handleCheckboxChange(o, valueElement) {
          o.on("change", function () {
            updateCheckboxState(valueElement, this.checked);
          });
        }

        const valueText = getValueText(option);
        const checkbox = createCheckbox(
          valueText.value,
          option.label_cart,
          valueDefault,
          t?.soldout
        );

        if (
          [
            "combo_color",
            "combo_image",
            "combo_select",
          ].includes(option.type)
        ) {
          checkbox.css({ display: "none" });
        }

        let valueWrapper = null;
        if (n) {
          const colorBox = createColorBox(
            option?.option_values?.find((opt) => opt.value === valueText?.value)
              ?.swatch?.color || "transparent"
          );

          const imgBox = createImgBox(
            option?.option_values?.find((opt) => opt.value === valueText?.value)
              ?.swatch?.file_image_url || ""
          );

          const valueElement = window.AP_POptions.$("<label></label>")
            .addClass("avp-productoptioncheckwrapper")
            .addClass(
              option.type !== "combo_box"
                ? " avp-pilloptioncheckwrapper"
                : ""
            )
            .append(
              priceMod.attachData(
                checkbox,
                option.label_cart,
                t,
                valueText.display,
                option,
                productId
              )
            )
            .append(
              option.type === "combo_image" ? imgBox : "",
              option.type === "combo_color" ? colorBox : "",
              valueText.display
            );

          if (
            [
              "combo_select",
              "combo_image",
              "combo_color",
              "combo_box",
            ].includes(option.type)
          ) {
            valueElement.css("cursor", "pointer");

            updateCheckboxState(valueElement, checkbox.is(":checked"));

            handleCheckboxChange(checkbox, valueElement);
          }

          valueWrapper = (option?.value_check_quantity?.includes(t?.value_id) && option.show_option_value_qty) || (option.show_option_value_qty && !option["value_check_quantity"])
            ? e._createQuantity(
              elemOptionAvisContainer,
              productId,
              valueElement,
              option.min_value_qty,
              option.max_value_qty,
              quantityDefault,
              updateCheckboxState
            )
            : valueElement;

          let gridValue = valueElement.closest(".avp-value-grid");

          if (gridValue) {
            gridValue.on("click", function () {
              handleCheckboxChange(checkbox, valueElement);
            });
          }

          gridValue.find(".avp-qty-wrapper").on("click", function (event) {
            event.stopPropagation();
          });
        }

        return n ? valueWrapper : checkbox;
      },

      _createCheckboxButton: function (
        elemOptionAvisContainer,
        productId,
        option,
        t,
        n,
        valueDefault,
        quantityDefault
      ) {
        var i = priceMod.getValueText(t, option),
          indexValue = option?.option_values?.findIndex(opt => opt.value == i.value) ?? 0,
          o = window.AP_POptions.$("<input/>")
            .attr("type", "checkbox")
            .attr("value", i.value)
            .attr("data-index", indexValue)
            .attr("field-name", option.label_cart)
            .attr("autocomplete", "off")
            .attr("des_value", t?.des_value)
            .attr(
              "name",
              isNotUseAvisHidden
                ? `properties[${option?.label_cart}]`
                : option?.label_cart
            )
            .addClass("avp-productoptiontextcolor")
            .addClass("avp-productoptionbackground")
            .on("click", async function (event) {
              if (option?.is_change_image_thumbnail) {
                e.optionChangeImageProduct(i.value ?? "");
              }

              if (option.type?.includes("color"))
              {
                e.eventListenerPersonalizer(option.key, "color", event.target.checked ? t?.swatch?.color : "", "name");
              }

              e.eventListnerSwatchPersonalizer(t.value_id, option, t.value_id, -1, event.target.checked);
            });

        if (t?.soldout) {
          o.attr("disabled", "disabled");
        } else if (valueDefault) o.attr("checked", "checked");

        (customizeryConfig?.customize_options?.checkbox?.shape === "pill" ||
          option.type === "button_multi") &&
          o.css({ display: "none" });

        let swatchItem = i.display;
        let spanValue = ["radio", "checkbox"].includes(option.type) && option.tooltip_display && t?.swatch?.file_image_url ? e._createNewSwatchImageItem(option, t, swatchItem) : swatchItem;
        let valueWrapper = null;
        if (n) {
          let valueElement = window.AP_POptions.$("<label></label>")
            .addClass("avp-productoptioncheckwrapper")
            .addClass(
              `avp-productoptioncheckwrapper${customizeryConfig?.customize_options?.checkbox?.shape ===
                "pill" || option.type === "button_multi"
                ? " avp-pilloptioncheckwrapper"
                : ""
              }`
            )
            .append(
              priceMod.attachData(
                o,
                option.label_cart,
                t,
                i.display,
                option,
                productId
              )
            )
            .append(spanValue);

          if (t?.soldout) {
            valueElement.addClass(AVIS_CLASS.soldOutOption);
            valueElement.attr("title", AVIS_SOLD_OUT);
          }

          let desc;
          if (option?.class_name?.includes("avis-custom-desc") && t?.des_value) {
            desc = t?.des_value;
          }

          if ((option?.value_check_quantity?.includes(t?.value_id) && option.show_option_value_qty) || (option.show_option_value_qty && !option["value_check_quantity"])) {
            valueWrapper = e._createQuantity(
              elemOptionAvisContainer,
              productId,
              valueElement,
              option.min_value_qty,
              option.max_value_qty,
              quantityDefault,
              null,
              desc,
            );
          } else valueWrapper = valueElement;
        }

        return n ? valueWrapper : o;
      },
      _createSelectMenu: function (
        elemOptionAvisContainer,
        productId,
        t,
        n,
        i,
        o,
        r,
        optionDefaultValues,
        option
      ) {
        var a = window.AP_POptions.$('<div class="avp-select"></div>'),
          result = null,
          s = window.AP_POptions.$(
            '<select class="avp-productdescfont avp-productoptiontextcolor avp-productoptionbackground"></select>'
          )
            .attr("id", r)
            .attr("name", isNotUseAvisHidden ? `properties[${t}]` : t)
            .attr("autocomplete", "off")
            .attr("field-name", t)
            .attr("data-type", option?.type);
        let isOnlyUrl =
          option.option_url === OPTION_URL.group ||
          option.option_url === OPTION_URL.only;
        if ((o && s.attr("required", "required"), void 0 !== i && "" !== i)) {
          if (
            navigator.userAgent.toLowerCase().indexOf("firefox") > -1 &&
            !e.ffCssFix
          ) {
            var p = ".avp-select select:invalid { box-shadow: none; }",
              c = document.head || document.getElementsByTagName("head")[0],
              l = document.createElement("style");
            (l.type = "text/css"),
              l.styleSheet
                ? (l.styleSheet.cssText = p)
                : l.appendChild(document.createTextNode(p)),
              c.appendChild(l),
              (e.ffCssFix = !0);
          }

          s.append(
            window.AP_POptions.$("<option>")
              .text(i)
              .attr("value", "")
              .attr("disabled", "true")
              .attr("selected", optionDefaultValues ? false : !0)
          );
        }

        let optionDefaultSelected = null;
        let isOptionUrlSelected = false;
        return (
          n &&
          n.length &&
          (window.AP_POptions.$.each(n, function (index, n) {
            if (n?.soldout && useSoldOutOption) {
            } else {
              let valueDefault = false;
              if (
                optionDefaultValues &&
                optionDefaultValues.indexOf(n["value_id"]) > -1
              ) {
                valueDefault = true;
              }

              let valueUrl = n?.url?.trim();
              var i = priceMod.getValueText(n, option),
                o = window.AP_POptions.$("<option></option>")
                  .attr("value", i.value)
                  .attr("apo-url", valueUrl && isOnlyUrl ? valueUrl : "")
                  .attr("value-id", n?.value_id ?? "")
                  .html(i.display);

              if (n?.soldout) {
                o.attr("disabled", "true");
                o.addClass("avis-option-soldout");
              } else if (valueDefault || (index === 0 && shop_id === "70029803708")) {
                optionDefaultSelected = o,
                s.attr("value", i.value);
               }

              let handle = valueUrl?.split("/")?.pop();
              if (
                isOnlyUrl &&
                handle ===
                window.ap_front_settings?.product_info?.product?.handle
              ) {
                o.attr("selected", true);
                isOptionUrlSelected = true;
              }
              s.append(
                priceMod.attachData(o, t, n, i.display, option, productId)
              );
            }
          }),
            !isOptionUrlSelected && optionDefaultSelected
              ? optionDefaultSelected.attr("selected", true)
              :"",
            // s.prop("field-name", t),
            // s.prop("name", t),
            s.on("change", async function (event, n) {
              if (option?.is_change_image_thumbnail) {
                e.optionChangeImageProduct(event.target.value ?? "");
              }
              if (isOnlyUrl) {
                let urlHref =
                  event?.target?.selectedOptions[0]?.getAttribute("apo-url");
                if (urlHref) {
                  let handle = urlHref?.split("/")?.pop();
                  if (
                    handle !==
                    window.ap_front_settings?.product_info?.product?.handle
                  ) {
                    location.href = urlHref;
                  }
                }

                return;
              }
              window.AP_POptions.apps.productoptions.toggleInputError(s, !0),
                n ||
                eventApi.fieldChange({
                  name: t,
                  value: event.target.value,
                  element: $(this).closest("div:not(.avp-select)"),
                });
              var i = $("option", s);
              priceMod.variantChange(t, i, productId);
              e.eventListnerSwatchPersonalizer(option.key, option, event?.target?.selectedOptions[0]?.getAttribute("value-id"), -1 , true);
              await createAvisContainerHidden(
                elemOptionAvisContainer,
                productId,
                t,
                event.target.value,
                s
              );
              e._createTotalAdd(elemOptionAvisContainer, productId);
              findButtonAddCart(elemOptionAvisContainer, productId);
            })),
          a.append(s),
          (result = option.show_option_value_qty
            ? e._createQuantity(
              elemOptionAvisContainer,
              productId,
              a,
              option.min_value_qty,
              option.max_value_qty
            )
            : a),
          s.trigger("change", ["onLoad"]),
          result
        );
      },
      _createSelectSwatch: function (
        elemOptionAvisContainer,
        productId,
        option
      ) {
        let fieldName = option?.label_cart;
        let quantityDefault = 1;
        let isOnlyUrl =
          option.option_url === OPTION_URL.group ||
          option.option_url === OPTION_URL.only;
        function genValuesHtml() {
          let valuesHtml = "";
          if (option?.option_values && option?.option_values.length > 0) {
            let index = 0;
            let existDefault = false;
            let isFirstValueDefault = false;
            let firstValuesHtml = "";
            for (let optionValue of option?.option_values) {
              let isColor = option.type === "swatch_select_color";
              let colorSwatch = "";
              let imgSwatch = "";
              if (isColor) colorSwatch = optionValue?.swatch?.color;
              else imgSwatch = optionValue?.swatch?.file_image_url;

              let styleBox = isColor
                ? `background:${optionValue.swatch.color};`
                : isStoreLazyImg ? "" : "background-image: url('" +
                  (optionValue.swatch.file_image_url
                    ? optionValue.swatch.file_image_url
                    : optionValue.url_image) +
                  "');";
              let classHiddenSwatchTitle = priceMod.classHiddenSwatchTitle(
                priceMod.isHiddenSwatchTitle(option)
              );

              var valueText = priceMod.getValueText(optionValue, option);
              let isDefault = false;
              if (option?.is_option_default_value) {
                let optionDefaultValue = option?.option_default_value;
                if (optionDefaultValue?.indexOf(optionValue.value_id) > -1) {
                  isDefault = true;
                  existDefault = true;

                  if (index === 0) isFirstValueDefault = true;
                } else if (optionDefaultValue) {
                  let arrValue = optionDefaultValue.split(" * ");
                  let newValue = arrValue[0].trim();
                  if (optionValue.value.trim() === newValue) {
                    isDefault = true;
                    existDefault = true;
                    if (index === 0) isFirstValueDefault = true;
                    if (arrValue.length > 1)
                      quantityDefault = parseInt(arrValue[1]);
                  }
                }
              }

              if (isOnlyUrl && optionValue.url) {
                let currentUrl = decodeURIComponent(window.location.pathname)?.split('/')?.pop();
                let newUrl = decodeURIComponent(optionValue.url)?.split('/')?.pop();
                if (newUrl && newUrl?.split("?")[0].toLowerCase() === currentUrl.toLowerCase()) {
                  existDefault = true;
                  isDefault = true;
                  if (index === 0) isFirstValueDefault = true;
                }
              }

              if (optionValue?.soldout) {
                if (isDefault) {
                  existDefault = false;
                  isFirstValueDefault = false;
                }
                isDefault = false;
              }

              let swatchValueItem = `<div class="option-avis-swatch-value-box ${isStoreLazyImg ? "avis-lazy-bg" : ""}" data-color="${colorSwatch}" data-src="${imgSwatch}" data-style="${styleBox}" style="${styleBox}">&nbsp;</div>
                                        <div class="option-avis-swatch-value-title ${classHiddenSwatchTitle}">${typeof valueText?.display === "string"
                  ? valueText?.display
                  : valueText?.display[0]?.innerHTML
                }</div>`;
              let valueUrl = "";
              if (isOnlyUrl) {
                valueUrl = optionValue?.url?.trim();
                if (valueUrl && isOnlyUrl) {
                  swatchValueItem = `<a class="apo-swatch-url" href="${valueUrl}">${swatchValueItem}</a>`;
                }
              }
              if (index === 0) {
                firstValuesHtml = `<li ${optionValue?.soldout ? "title='" + AVIS_SOLD_OUT + "'" : ""
                  } class="option-avis-value ${optionValue?.soldout ? AVIS_CLASS.soldOutOption : ""
                  }">
                                <input value-id="${optionValue?.value_id}" data-type="${option.type
                  }" id="avis-value-${index}" ${optionValue?.soldout ? "disabled='disabled'" : ""
                  } type="radio" data-index="${index}" data-apo-url='${valueUrl}' name='${fieldName}' field-name="${fieldName}" ${isDefault ? "checked" : ""} @@checked@@ value="${valueText?.value?.replace(/'/g, "&apos;")}" /><label class="option-avis-swatch-value-label" for="avis-value-${index}">
                ${swatchValueItem}
                </label>
                              </li>`;
              } else {
                valuesHtml += `<li ${optionValue?.soldout ? "title='" + AVIS_SOLD_OUT + "'" : ""
                  } class="option-avis-value ${optionValue?.soldout ? AVIS_CLASS.soldOutOption : ""
                  }">
                                <input value-id="${optionValue?.value_id}" data-type="${option.type
                  }" id="avis-value-${index}" type="radio" ${optionValue?.soldout ? "disabled='disabled'" : ""
                  } data-index="${index}" data-apo-url='${valueUrl}' name='${fieldName}' field-name="${fieldName}" ${isDefault ? "checked" : ""
                  } value='${valueText?.value}'>
                <label class="option-avis-swatch-value-label" for="avis-value-${index}">
                ${swatchValueItem}
                </label>
                              </li>`;
              }

              if (index === option.option_values.length - 1) {
                if (option?.placeholder) {
                  firstValuesHtml = firstValuesHtml.replace("@@checked@@", existDefault && isFirstValueDefault ? "checked" : "");
                  valuesHtml = `<li ${optionValue?.soldout ? "title='" + AVIS_SOLD_OUT + "'" : ""
                    } class="option-avis-value ${optionValue?.soldout ? AVIS_CLASS.soldOutOption : ""
                    }">
                                    <input value-id="${optionValue?.value_id}" data-type="${option.type
                    }" id="avis-value--1" ${optionValue?.soldout ? "disabled='disabled'" : ""
                    } type="radio" data-index="-1" name='${fieldName}' ${existDefault ? "" : "checked"
                    } field-name="${fieldName}" value="">
                                    <label class="option-avis-swatch-value-label" for="avis-value--1">
                                      <div class="option-avis-swatch-value-box" data-style="display:none" style="display:none">&nbsp;</div>
                                      <div class="option-avis-swatch-value-title avis-drop-value-placeholder">${option?.placeholder
                    }</div>
                                    </label>
                                  </li>
                                  ${firstValuesHtml}
                                  ${valuesHtml}`;
                } else {
                  firstValuesHtml = firstValuesHtml.replace(
                    "@@checked@@",
                    existDefault && !isFirstValueDefault
                      ? ""
                      : optionValue?.soldout
                        ? ""
                        : "checked"
                  );
                  valuesHtml = `${firstValuesHtml}
                                ${valuesHtml}`;
                }
              }
              index++;
            }
          }
          return valuesHtml;
        }
        let wrapperSelector = document.createElement("div");
        wrapperSelector.classList.add("option-avis-dropdown-inner");
        let html = `<div class="option-avis-swatch-drop-down">
                        <span class="option-avis-dropdown-view-value ">
                          <div class="option-avis-swatch-value-box" style="${option?.placeholder
            ? "display:none;"
            : "background-color:transparent;"
          }" ></div>
                          <div class="option-avis-swatch-value-title">${option?.placeholder ? option?.placeholder : ""
          }</div>
                        </span>
                        <span class="option-avis-arrow-select"></span>
                    </div>
                    <ul class="option-avis-dropdown-values ${isOnlyUrl ? "apo-only-url" : ""}"  style="display: none;">
                      ${genValuesHtml()}
                    </ul>`;

        if (option?.enabled_search) {
          html = `
            <div class="option-avis-swatch-drop-down option-avis-swatch-drop-down-search">
              <span class="option-avis-dropdown-view-value option-avis-dropdown-view-value-search">
                <div class="option-avis-swatch-value-box" style="background-color:transparent;"></div>
                <input class="avis-select-swatch-search" placeholder="${option?.placeholder || ""}" />
              </span>
              <span class="option-avis-arrow-select"></span>
            </div>
            <ul class="option-avis-dropdown-values" style="display: none;">
              ${genValuesHtml()}
            </ul>
          `;
        }

        wrapperSelector.innerHTML = html;

        let listOptions = wrapperSelector.querySelectorAll(".option-avis-dropdown-values li");
        let searchElem = wrapperSelector.querySelector(".avis-select-swatch-search");
        setTimeout(() => {
          if (searchElem) {
            searchElem.addEventListener("input", function (e) {
              let searchText = e.target.value.toLowerCase();

              listOptions.forEach(item => {
                let text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchText) ? "block" : "none";
              });

              wrapperSelector.querySelector(".option-avis-dropdown-values").style.display = "block";
            });
          }
        }, 0);

        let selectedSelector = wrapperSelector.querySelector(
          ".option-avis-swatch-drop-down"
        );
        let ulSelector = wrapperSelector.querySelector(
          "ul.option-avis-dropdown-values"
        );
        document.addEventListener("click", function () {
          if ("block" == getComputedStyle(ulSelector).display) {
            Object(priceMod.toggleSelector)(ulSelector);
          }
          listOptions.forEach(item => {
            item.style.display = "block";
          });

          if (searchElem) searchElem.value = wrapperSelector.querySelector(":checked").value;
        });
        selectedSelector.addEventListener("click", function (e) {
          e.preventDefault(),
            e.stopPropagation();
          if ("block" != getComputedStyle(selectedSelector.nextElementSibling).display) {
            document.querySelectorAll(".avpoptions-container__v2 ul.option-avis-dropdown-values").forEach((item) => {
              item.style.display = "none";
            });
          }
          Object(priceMod.toggleSelector)(
            selectedSelector.nextElementSibling
          );
        });

        if (isOnlyUrl) {
          let currentSelected = ulSelector.querySelector("li.option-avis-value input[type='radio']:checked");
          if (currentSelected) {
            currentSelected.addEventListener("change", async function (event) {
              event.preventDefault();
              event.stopPropagation();

              if (searchElem) searchElem.value = this.value;

              let spanRequired = $(this).closest("div[apo-required='true']");
              if (spanRequired && spanRequired.length) {
                window.AP_POptions.apps.productoptions.toggleInputError(
                  spanRequired,
                  !0
                );
              }

              let listInput = [];
              ulSelector
                .querySelectorAll("li.option-avis-value input")
                .forEach((item) => {
                  listInput.push($(item));
                });
              let selectedText = wrapperSelector.querySelector(
                ".option-avis-dropdown-view-value .option-avis-swatch-value-title"
              );
              let selectedBox = wrapperSelector.querySelector(
                ".option-avis-dropdown-view-value .option-avis-swatch-value-box"
              );

              let liSelector = event.target.closest(".option-avis-value");
              if (liSelector) {
                if (selectedText) {
                  selectedText.innerHTML = liSelector.querySelector(
                    ".option-avis-swatch-value-title"
                  )?.innerHTML;
                }

                if (selectedBox) {
                  selectedBox.setAttribute(
                    "style",
                    liSelector.querySelector(".option-avis-swatch-value-box")
                      ?.dataset?.style
                  );
                }
              }
            });
            currentSelected.dispatchEvent(new CustomEvent("change"));
          }
        }

        !isOnlyUrl &&
          ulSelector
            .querySelectorAll("li.option-avis-value")
            .forEach(function (t) {
              t.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                Object(priceMod.toggleSelector)(ulSelector);
                if (
                  t
                    .querySelector('input[type="radio"]')
                    .getAttribute("disabled")
                )
                  return;
                t.querySelector('input[type="radio"]').checked = true;
                t.querySelector('input[type="radio"]').dispatchEvent(
                  new CustomEvent("change")
                );
                if (searchElem) searchElem.value = t.querySelector('input[type="radio"]').value;
              });

              let inputSelector = t.querySelector("input");
              inputSelector.addEventListener("change", async function (event) {

                if (option?.is_change_image_thumbnail) {
                  e.optionChangeImageProduct(this?.value ?? "");
                }

                event.preventDefault();
                event.stopPropagation();

                let spanRequired = $(this).closest("div[apo-required='true']");
                if (spanRequired && spanRequired.length) {
                  window.AP_POptions.apps.productoptions.toggleInputError(
                    spanRequired,
                    !0
                  );
                }

                let listInput = [];
                ulSelector
                  .querySelectorAll("li.option-avis-value input")
                  .forEach((item) => {
                    listInput.push($(item));
                  });
                let selectedText = wrapperSelector.querySelector(
                  ".option-avis-dropdown-view-value .option-avis-swatch-value-title"
                );
                let selectedBox = wrapperSelector.querySelector(
                  ".option-avis-dropdown-view-value .option-avis-swatch-value-box"
                );

                let liSelector = event.target.closest(".option-avis-value");
                if (liSelector) {
                  if (selectedText) {
                    selectedText.innerHTML = liSelector.querySelector(
                      ".option-avis-swatch-value-title"
                    )?.innerHTML;
                  }

                  if (selectedBox) {
                    selectedBox.setAttribute(
                      "style",
                      liSelector.querySelector(".option-avis-swatch-value-box")
                        ?.dataset?.style
                    );
                  }
                }

                if (isOnlyUrl) {
                  return;
                }
                e.eventListnerSwatchPersonalizer(option.key, option, inputSelector.getAttribute("value-id") ?? "", -1, true);
                priceMod.variantChange(fieldName, listInput, productId);
                await createAvisContainerHidden(
                  elemOptionAvisContainer,
                  productId,
                  fieldName,
                  event.target.value,
                  $(this)
                );
                e._createTotalAdd(elemOptionAvisContainer, productId);
              });

              if (
                inputSelector.dataset.index > -1 &&
                inputSelector.dataset.index < option.option_values.length
              ) {
                let textSelector = t.querySelector(
                  ".option-avis-swatch-value-title"
                );
                priceMod.attachData(
                  inputSelector,
                  fieldName,
                  option.option_values[inputSelector.dataset.index],
                  textSelector.innerHTML,
                  option,
                  productId
                );
              }
            });

        let result = $(wrapperSelector);
        if (option.show_option_value_qty) {
          result = e._createQuantity(
            elemOptionAvisContainer,
            productId,
            $(wrapperSelector),
            option.min_value_qty,
            option.max_value_qty,
            quantityDefault
          );
        }

        if (isOnlyUrl) {
          for (let inputSelector of ulSelector.querySelectorAll(
            "li.option-avis-value input[data-apo-url]"
          )) {
            let urlHref = inputSelector?.getAttribute("data-apo-url");
            if (urlHref) {
              let handle = urlHref?.split("/")?.pop();
              if (
                handle ===
                window.ap_front_settings?.product_info?.product?.handle
              ) {
                let selectedText = wrapperSelector.querySelector(
                  ".option-avis-dropdown-view-value .option-avis-swatch-value-title"
                );
                let selectedBox = wrapperSelector.querySelector(
                  ".option-avis-dropdown-view-value .option-avis-swatch-value-box"
                );

                let liSelector = inputSelector.closest(".option-avis-value");
                if (liSelector) {
                  if (selectedText) {
                    selectedText.innerHTML = liSelector.querySelector(
                      ".option-avis-swatch-value-title"
                    )?.innerHTML;
                  }

                  if (selectedBox) {
                    selectedBox.setAttribute(
                      "style",
                      liSelector.querySelector(".option-avis-swatch-value-box")
                        ?.dataset?.style
                    );
                  }
                }

                inputSelector.checked = true;
                break;
              }
            }
          }
        } else {
          let inputChecked = wrapperSelector.querySelector(":checked");
          if (inputChecked) {
            inputChecked.dispatchEvent(new CustomEvent("change"));
            if (searchElem) searchElem.value = inputChecked?.value;
          }
        }
        e.addEventTooltipBody(ulSelector, option);

        return result;
      },
      _createHiddenInput: function (
        elemOptionAvisContainer,
        productId,
        e,
        isProperty = false
      ) {
        let newFieldName = e?.replaceAll('"', "&quot;");
        var t = window.AP_POptions.$("<input />")
          .attr("type", "hidden")
          .attr("name", isProperty ? "properties[" + e + "]" : e);
        if (!isProperty) {
          t.attr("field-name", e);
        } else t.attr("temp-name", newFieldName);

        if (!isProperty) {
          createAvisContainerHidden(elemOptionAvisContainer, productId, e, "");
        }

        return t;
      },
      isTouch: false,
      contentTooltipBody: function (item, option) {
        const imgDiv = item;// item.querySelector('.option-avis-swatch-value-box');
        const img = imgDiv && option.class_name !== "avis-hide-tooltip-value" ? imgDiv.getAttribute('data-src') : '';
        let indexValue = item.closest("li.option-avis-value,label.avp-productoptionswatchwrapper,label.avp-productoptioncheckwrapper")?.querySelector("input[type='radio']")?.getAttribute("data-index") ?? 0;
        if (!indexValue) {
          indexValue = item.closest("label.avp-productoptioncheckwrapper,label.avp-productoptionswatchwrapper")?.querySelector("input[type='checkbox']")?.getAttribute("data-index") ?? 0;
        }
        let text = "";
        if (option.tooltip_display === "value") {
          if (["90156597576", "96532496709"].includes(shop_id) && option?.type === "swatch_single_image" && option?.option_values?.[indexValue]?.price > 0) {
            let price = priceMod.formatMoney(parseFloat(option?.option_values?.[indexValue]?.price), true);
            text = `${option?.option_values?.[indexValue]?.value || ''} ${["96532496709"].includes(shop_id) ? "+" : ""}${price || ''}`;
          } else text = option?.option_values?.[indexValue]?.value || '';
        }
        if (option.tooltip_display === "desc" && option?.show_description) {
          text = option?.option_values?.[indexValue]?.des_value || '';
        }
        let innerTooltip;
        if (img) {
          innerTooltip =
            `<div class="apo-btooltip-wrapper">
              <span class="apo-btooltip-image ${isStoreLazyImg ? "avis-lazy-bg" : ""}" style="${isStoreLazyImg ? `data-src=${img}` : `background-image: url('${img}');`}">&nbsp;</span>
              <span class="apo-btooltip-text">${text}</span>
            </div>`;
        } else {
          innerTooltip =
            `<div class="apo-btooltip-wrapper">
              <span class="apo-btooltip-text">${text}</span>
            </div>`;
        }
        if (!img && !text) return null;
        return innerTooltip;
      },
      showTooltipBody: function (content, item) {
        if (!apoBodyTooltip) return;
        if (!content) return;
        const tooltip = apoBodyTooltip;
        tooltip.innerHTML = content;
        tooltip.classList.add("tooltip-show");
        tooltip.classList.remove("tooltip-hide");

        const itemRect = item.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        const offset = 8;

        // Tooltip below the default item
        let top = itemRect.bottom + offset + scrollY;
        let left = itemRect.left + itemRect.width / 2 - tooltipWidth / 2 + scrollX;

        // If there is enough space above, display the tooltip above
        if (itemRect.top >= tooltipHeight + offset) {
          top = itemRect.top - tooltipHeight - offset + scrollY;
          tooltip.classList.add('arrow-bottom');
        } else {
          tooltip.classList.remove('arrow-bottom');
        }

        left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;

        const imgCenterX = itemRect.left + itemRect.width / 2;
        const arrowLeft = imgCenterX - left; // Offset in pixels from the tooltip's left edge
        tooltip.style.setProperty('--arrow-left', `${arrowLeft}px`);
      },
      listSwatchAllOptions: [],
      addEventTooltipBody: function (wrapperListSelector, option) {
        if (!wrapperListSelector) return;
        const settingShowImageSwatch = isDesignV2 ? !customizeryConfig?.customize_options?.swatch?.other?.show_image_when_hover : !customizeryConfig?.customize_options?.swatch?.hover_image;
        const settingShowImageSelect = !customizeryConfig?.customize_options?.select?.other?.show_image_when_hover;
        const settingShowImageRadio = !customizeryConfig?.customize_options?.radio_btn?.other?.show_image_when_hover;
        const settingShowImageCheckbox = !customizeryConfig?.customize_options?.checkbox?.other?.show_image_when_hover;

        if (["swatch_single_color", "swatch_multi_color", "swatch_single_image", 'swatch_multi_image'].includes(option?.type)
          && !["value", "desc"].includes(option?.tooltip_display) && settingShowImageSwatch) return;

        if (["swatch_select_image", "swatch_select_color", "combo_color", "combo_image"].includes(option?.type)
          && !["value", "desc"].includes(option?.tooltip_display) && settingShowImageSelect) return;

        if ("checkbox" === option?.type && !["value", "desc"].includes(option?.tooltip_display) && settingShowImageCheckbox) return;

        if ("radio" === option?.type && !["value", "desc"].includes(option?.tooltip_display) && settingShowImageRadio) return;
        let listSwatch = wrapperListSelector.querySelectorAll(".option-avis-swatch-value-box, .option-avis-combo_image-box, .option-avis-combo_color-box, .avp-productoptionswatch");
        if (!listSwatch?.length) return;
        if (!apoBodyTooltip) apoBodyTooltip = createBodyTooltip();
        if (!apoBodyTooltip) return;
        listSwatch.forEach(item => {
          item.addEventListener("mouseenter", () => {
            if (e.isTouch) return;
            cancelHideTooltip();
            const content = e.contentTooltipBody(item, option);
            e.showTooltipBody(content, item);
          });

          item.addEventListener("mouseleave", () => {
            if (e.isTouch) return;
            hideTimeout = setTimeout(() => {
              apoBodyTooltip.classList.remove("tooltip-show");
              setTimeout(() => {
                apoBodyTooltip.classList.add("tooltip-hide");
              }, 200);
            }, 300);
          });
        });

        e.listSwatchAllOptions.push(...listSwatch);

        document.addEventListener("touchstart", (e) => {
          if (!apoBodyTooltip.contains(e.target) && !Array.from(this.listSwatchAllOptions).some(i => i.contains(e.target))) {
            hideTooltipWithDelay();
          }
        });
      },
      hoverTooltip: function (optionValueSelector) {
        if (!optionValueSelector) return;
        optionValueSelector.addEventListener("mouseover", function (event) {
          let bodyTooltip = document.querySelector(".avis-body-tooltip");
          if (bodyTooltip) {
            let findTooltip = optionValueSelector.querySelector(".apo-swatch-tooltip");
            let findArrowTooltip = optionValueSelector.querySelector(".apo-swatch-arrow");
            let swatchPositionData = optionValueSelector.getBoundingClientRect();
            let arrowAppend = true;
            if (findTooltip) {
              if (!bodyTooltip.querySelector(".apo-swatch-tooltip")) {
                let cloneFindTooltip = findTooltip.cloneNode(true);
                bodyTooltip.appendChild(cloneFindTooltip);
                let findTooltipPosition = cloneFindTooltip.getBoundingClientRect();
                let top = swatchPositionData.top + window.scrollY - findTooltipPosition.height - 8;
                let left = swatchPositionData.left + window.scrollX + (swatchPositionData.width / 2) - (findTooltipPosition.width / 2);
                let maxRight = window.innerWidth;
                if (left < window.scrollX) left = window.scrollX;
                if (left + findTooltipPosition.width > maxRight) {
                  left = maxRight - findTooltipPosition.width - 10;
                }
                if (top - window.scrollY < 0) {
                  top = swatchPositionData.top + window.scrollY + swatchPositionData.height;
                  arrowAppend = false;
                }

                bodyTooltip.setAttribute("style", `top: ${top}px; left:${left}px;`);
                document.body.classList.add("avis-add-tooltip");
              }
              if (findArrowTooltip) {
                if (!bodyTooltip.querySelector(".apo-swatch-arrow")) {
                  let clonefindArrowTooltip = findArrowTooltip.cloneNode(true);
                  if (arrowAppend) {
                    clonefindArrowTooltip.classList.add("apo-swatch-arrow-top");
                    clonefindArrowTooltip.classList.remove("apo-swatch-arrow-bottom");
                    bodyTooltip.appendChild(clonefindArrowTooltip);
                  }
                  else {
                    clonefindArrowTooltip.classList.remove("apo-swatch-arrow-top");
                    clonefindArrowTooltip.classList.add("apo-swatch-arrow-bottom");
                    bodyTooltip.prepend(clonefindArrowTooltip);
                  }
                }
              }
            }


          }
          let avisContainerSelector = optionValueSelector.closest(
            `.${container_AP_POptions}`
          ),
            avisPosition = avisContainerSelector.getBoundingClientRect(); // t
          let swatchPosition = optionValueSelector.getBoundingClientRect();
          let tooltipSelector = optionValueSelector.querySelector(
            ".apo-swatch-tooltip"
          );
          let tooltipArrowSelector =
            optionValueSelector.querySelector(".apo-swatch-arrow");
          let arrowHeight =
            tooltipArrowSelector?.getBoundingClientRect()?.height || 0;
          if (tooltipSelector) {
            let tooltipPosition = tooltipSelector.getBoundingClientRect();
            if (swatchPosition.left < avisPosition.left) {
              tooltipSelector.setAttribute("style", "left: 50%");
              return;
            }

            let positionRight = window.innerWidth - avisPosition.right;
            let swatchRight = window.innerWidth - swatchPosition.right;
            let swatchHaft = swatchPosition.width / 2;
            let tooltipHaft = tooltipPosition.width / 2;
            let calPositionLeft =
              swatchPosition.left - avisPosition.left + swatchHaft;
            if (shop_id === "70071189821" && window.innerWidth > 700) {
              tooltipSelector.setAttribute("style", "left: 50% !important");
            }
            else {
              if (calPositionLeft < tooltipHaft) {
                tooltipSelector.setAttribute("style", `left: calc(50% + ${tooltipHaft -
                  (swatchPosition.left - avisPosition.left + swatchHaft)
                  }px) !important;`);
              } else {
                calPositionLeft = swatchRight - positionRight + swatchHaft;
                if (calPositionLeft < tooltipHaft) {
                  tooltipSelector.setAttribute("style", `left: calc(50% - ${tooltipHaft - (swatchRight - positionRight + swatchHaft)
                    }px) !important;`);
                } else tooltipSelector.setAttribute("style", "left: 50%");
              }
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
        optionValueSelector.addEventListener("mouseout", function (event) {
          let bodyTooltip = document.querySelector(".avis-body-tooltip");
          if (bodyTooltip) {
            bodyTooltip.innerHTML = "";
            document.body.classList.remove("avis-add-tooltip");
          }
        });
      },

      optionChangeImageProduct: function (optionValue) {
        let avisThumbnailSelector = document.querySelector(".avis-thumbnail-bar");
        if (avisThumbnailSelector) {
          let queryThumbnailItem = Array.from(avisThumbnailSelector.querySelectorAll(".avis-thumbanil-item"));
          if (!queryThumbnailItem.length) {
            console.log("Thumbnail item not found");
            return;
          }
          let altThumbnailItem = queryThumbnailItem.map((item) => {
            return item.getAttribute("alt");
          });

          if (!altThumbnailItem.length) return;

          let nextValue = altThumbnailItem.findIndex((alt) => alt?.toLowerCase() === optionValue?.toLowerCase());
          if (nextValue !== -1) {
            let nextValueElem = queryThumbnailItem[nextValue];
            if (nextValueElem) {
              let changeImage = new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0,
                detail: nextValueElem
              });
              nextValueElem.dispatchEvent(changeImage);
            }
          } else {
            console.log("Alt not found");
            let nextValueElem = queryThumbnailItem[0];
            if (nextValueElem) {
              let changeImage = new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0,
                detail: nextValueElem
              });
              nextValueElem.dispatchEvent(changeImage);
            }
          }
        } else {
          let thumbnailItemElem = AvisStyleOptions.selectors.thumbnailItemElem;
          let thumbnailListElem = AvisStyleOptions.selectors.thumbnailListElem;

          let queryThumbnail = document.querySelector(thumbnailListElem);
          if (!queryThumbnail) {
            console.log("Thumbnail list not found");
            return;
          }

          let queryThumbnailItem = Array.from(queryThumbnail.querySelectorAll(thumbnailItemElem));
          if (!queryThumbnailItem.length) {
            console.log("Thumbnail item not found");
            return;
          }
          let altThumbnailItem = queryThumbnailItem.map((item) => {
            let img = item.querySelector("img");
            if (img) {
              return img.getAttribute("alt");
            }
          });

          if (!altThumbnailItem.length) return;

          let nextValue = altThumbnailItem.findIndex((alt) => alt?.toLowerCase() === optionValue?.toLowerCase());
          if (["25203867704"].includes(shop_id)) {
            nextValue = altThumbnailItem.findIndex((alt) => alt?.toLowerCase()?.split(', ')?.pop()?.trim() === optionValue?.toLowerCase());
          }
          if (nextValue === -1) nextValue = 0;
          let nextValueElem = queryThumbnailItem[nextValue];
          if (shop_id === "93789290826") {
            queryThumbnailItem.forEach(item => item.classList.remove("swiper-slide-thumb-active"));
            nextValueElem.classList.add("swiper-slide-thumb-active");

            let sliderWrapper = document.querySelector(".product__media-list .swiper-wrapper");
            let sliderItems = sliderWrapper.querySelectorAll(".product__media-item");
            sliderItems.forEach(item => {
              item.classList.remove("swiper-slide-prev");
              item.classList.remove("swiper-slide-active");
              item.classList.remove("swiper-slide-next");
            });
            let sliderItem = sliderItems[nextValue];
            sliderItem?.classList?.add("swiper-slide-active");
            sliderItem?.nextElementSibling?.classList?.add("swiper-slide-next");
            sliderItem?.previousElementSibling?.classList?.add("swiper-slide-prev");
            sliderWrapper.style.transform = `translate3d(-${nextValue * Number(sliderItem?.style?.width?.replace("px", "")) + 4}px, 0px, 0px)`;
            sliderWrapper.style.transitionDuration = "300ms";
            return;
          }
          if (shop_id === "3713204273") {
            nextValueElem?.querySelector("a.productView-thumbnail-link")?.click();
            return;
          }
          let nextValueImg = nextValueElem.querySelector("img");
          if (nextValueImg) {
            if (Shopify.theme.schema_name == 'Venue') {
              const mediaGallery = document.querySelector("media-gallery");
              const slideNumber = Number(nextValueImg.closest("button.thumbnail")?.dataset.slideNumber);
              mediaGallery.carousel.slideTo(slideNumber, 200);
            } else {
              let changeImage = new MouseEvent("click", {
                bubbles: !0,
                cancelable: !0,
                detail: nextValueElem
              });
              nextValueImg.dispatchEvent(changeImage);
              nextValueImg.click();
            }
            if (['Zest', 'Sahara'].includes(Shopify.theme.schema_name)) {
              const mediaGallery = document.querySelector("media-gallery, product-media");
              const targetMediaId = nextValueImg.closest("[data-media-id]")?.dataset.mediaId;

              if (mediaGallery && targetMediaId) {
                mediaGallery.setActiveMedia(Number(targetMediaId));
              }
            }
          }
          else {
            console.log("Avis thumbnail Image not found");
          }
        }
      },

      handleChangeElement: function (
        elemOptionAvisContainer,
        productId,
        option,
        event,
        maxLength,
        minLength,
        textTransform
      ) {
        event.preventDefault();
        var elm = event.target;
        var config = window.AP_POptions.apps.productoptions;
        var allowValue = elm.getAttribute("data-allow-value");
        var labelCart = elm.getAttribute("field-name");
        var value = elm.value;
        let lengthInput = value.match(/[\p{L}\p{N}\p{P}\p{Z}\p{Emoji}]/gu)?.length ?? 0;
        let step = 0;
        if (elm.closest(".avp-option.apo-exclude-space")) {
          let newLengthInput = (value.match(/[\p{L}\p{N}\p{P}\p{Emoji}]/gu) || []).filter(ch => ch !== ' ')?.length ?? 0;
          if (lengthInput > newLengthInput) {
            step = lengthInput - newLengthInput;
          }
          lengthInput = newLengthInput;
        }
        maxLength &&
          lengthInput > maxLength &&
          ((value = value.substr(0, maxLength + step)), (elm.value = value), lengthInput = maxLength);
        // minLength &&
        //   lengthInput < minLength &&
        //   ((value = value.substr(0, minLength + step)), (elm.value = value));

        if (allowValue && value) {
          if (
            allowValue == "only_letters" &&
            config.allowedValueLetterRegex.test(value)
          ) {
          } else if (
            allowValue == "only_letters_and_numbers" &&
            config.allowedValueLetterNumberRegex.test(value)
          ) {
          } else config.toggleInputError($(elm), !0);
        } else config.toggleInputError($(elm), !0);
        if (allowValue)
        {
          value = removeEmojis(value);
          elm.value = value;
        }

        if (value && textTransform && textTransform === "Uppercase") {
          value = value.toLocaleUpperCase();
          elm.value = value;
        }
        if (value && textTransform && textTransform === "Lowercase") {
          value = value.toLocaleLowerCase();
          elm.value = value;
        }
        if (value && textTransform && textTransform === "Capitalize") {
          let words = value.split(" ");
          for (let index in words) {
            words[index] =
              words[index][0].toUpperCase() + words[index].substr(1);
          }
          value = words.join(" ");
          elm.value = value;
        }
        e.eventListenerPersonalizer(option.key, "text", elm.value);
        var parent = elm.closest(".apo-text-field");
        if (parent) {
          let counterLetter = parent.querySelector(".apo-counter-input");
          if (counterLetter) {
            counterLetter.innerText = lengthInput;
          }

          priceMod.variantChange(
            labelCart,
            [$(parent)],
            productId,
            elemOptionAvisContainer
          );
        } else {
          priceMod.variantChange(
            labelCart,
            [$(elm)],
            productId,
            elemOptionAvisContainer
          );
        }
        createAvisContainerHidden(
          elemOptionAvisContainer,
          productId,
          labelCart,
          value
        );

        findButtonAddCart(elemOptionAvisContainer, productId);
      },

      handleChangeQuantity: function (
        elemOptionAvisContainer,
        productId,
        event,
      ) {
        event.preventDefault();
        var elm = event.target;
        var labelCart = elm.getAttribute("field-name");
        var value = elm.value;

        var parent = elm.closest(".apo-text-field");
        if (parent) {
          priceMod.variantChange(
            labelCart,
            [$(parent)],
            productId,
            elemOptionAvisContainer
          );
        } else {
          priceMod.variantChange(
            labelCart,
            [$(elm)],
            productId,
            elemOptionAvisContainer
          );
        }
        createAvisContainerHidden(
          elemOptionAvisContainer,
          productId,
          labelCart,
          value
        );

        findButtonAddCart(elemOptionAvisContainer, productId);
      },

      handleChangeElementPhone: function (
        elemOptionAvisContainer,
        productId,
        event
      ) {
        const elm = event.target;
        const labelCart = elm.getAttribute("field-name");
        const input = document.getElementById(elm.id);
        const phoneInput = window.apoPhoneInputGlobals
          .getInstance(input)
          .getNumber();

        var parent = elm.closest(".apo-text-field");

        if (parent) {
          priceMod.variantChange(
            labelCart,
            [$(parent)],
            productId,
            elemOptionAvisContainer
          );
        } else {
          priceMod.variantChange(
            labelCart,
            [$(elm)],
            productId,
            elemOptionAvisContainer
          );
        }

        createAvisContainerHidden(
          elemOptionAvisContainer,
          productId,
          elm.getAttribute("field-name"),
          phoneInput
        );
        findButtonAddCart(elemOptionAvisContainer, productId);
      },

      _createFontSizePersonalizer: function (id, defaultValue) {
        let inputFontSize = document.createElement("input");
        inputFontSize.setAttribute("type", "number");
        inputFontSize.setAttribute("min", "0");
        inputFontSize.setAttribute("id", `font-size_persionalizer${id}`);
        inputFontSize.setAttribute("value", defaultValue || "45");

        inputFontSize.classList.add("avis-font-size-personalizer");

        let fontSizeUnit = document.createElement("span");
        fontSizeUnit.classList.add("avis-font-size-personalizer-unit");
        fontSizeUnit.innerText = "px";

        let fontSizerContainer = document.createElement("div");
        fontSizerContainer.classList.add("avis-font-size-personalizer-wrapper");

        fontSizerContainer.append(fontSizeUnit, inputFontSize);

        inputFontSize.addEventListener("input", function () {
          let valueFont = this.value;
          if (valueFont && valueFont > 0) {
            e.eventListenerPersonalizer(id, "font_size", valueFont);
          }
        })


        return fontSizerContainer;
      },

      _createTextInput: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        valueDefault,
        placeholder,
        maxLength,
        minLength,
        required,
        id,
        option
      ) {
        let textTransform = option["text_transform"];
        let allowValue = option["allow_value"];
        maxLength =
          maxLength && parseInt(maxLength, 10) > 0
            ? parseInt(maxLength, 10)
            : 0;
        minLength =
          minLength && parseInt(minLength, 10) > 0
            ? parseInt(minLength, 10)
            : 0;
        var elemInput = document.createElement("INPUT");
        elemInput.setAttribute("type", "text");
        elemInput.setAttribute("field-name", labelCart);
        elemInput.setAttribute(
          "name",
          isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
        );
        elemInput.setAttribute("id", id);
        elemInput.setAttribute("autocomplete", "off");

        if (option?.option_values?.[0]?.soldout) {
          elemInput.setAttribute("disabled", "");
          elemInput.classList.add(AVIS_CLASS.soldOutOption);
        }

        elemInput.classList.add("avp-productdescfont");
        elemInput.classList.add("avp-productoptiontextcolor");
        elemInput.classList.add("avp-productoptionbackground");

        if (textTransform && textTransform === "Uppercase")
          elemInput.classList.add("avp-text-transform-uppercase");
        if (textTransform && textTransform === "Lowercase")
          elemInput.classList.add("avp-text-transform-lowercase");
        if (textTransform && textTransform === "Capitalize")
          elemInput.classList.add("avp-text-transform-capitalize");

        elemInput.removeEventListener("input", (event) =>
          e.handleChangeElement(
            elemOptionAvisContainer,
            productId,
            option,
            event,
            maxLength,
            minLength,
            textTransform
          )
        );
        elemInput.addEventListener("input", (event) => {
          if (option?.class_name?.includes("apo-no-space")) {
            elemInput.value = elemInput.value.replace(/\s/g, "");
          }
          e.handleChangeElement(
            elemOptionAvisContainer,
            productId,
            option,
            event,
            maxLength,
            minLength,
            textTransform
          );
        });

        if (option?.class_name?.includes("apo-no-space")) {
          elemInput.addEventListener("keydown", function (event) {
            if (event.key === " " || event.code === "Space") {
              event.preventDefault();
            }
          });

        }

        if (shop_id === "77859357001") {
          elemInput.addEventListener("change", (event) => {
            e.handleChangeElement(
              elemOptionAvisContainer,
              productId,
              option,
              event,
              maxLength,
              minLength,
              textTransform
            );
          });
        }

        var textField = document.createElement("span");
        textField.classList.add("apo-text-field");
        textField.appendChild(elemInput);
        if (maxLength && maxLength > 0) {
          const counterLetter = document.createElement("span");
          counterLetter.classList.add("apo-counter-letter");
          var countText = valueDefault
            ? valueDefault.length
            : elemInput.value.length;
          counterLetter.innerHTML = `<span class="apo-counter-input">${countText}</span>/${maxLength}`;
          textField.appendChild(counterLetter);
          elemInput.style.paddingRight = "60px";
        }

        if (minLength && minLength > 0) {
          const minLetter = document.createElement("span");
          minLetter.classList.add("apo-min-letter");

          minLetter.innerHTML =
            customizeryConfig?.text_customization_notification_min_characters
              ? customizeryConfig?.text_customization_notification_min_characters.replace(
                "{min_length}",
                minLength
              )
              : `Type at least ${minLength} characters`;
          textField.appendChild(minLetter);
        }

        if (maxLength) {
          elemInput.setAttribute(option?.class_name?.includes('apo-exclude-space') ? "max_length" : "maxlength", maxLength);
        }
        if (minLength) {
          elemInput.setAttribute(option?.class_name?.includes('apo-exclude-space') ? "min_length" : "minLength", minLength);
        }

        let elemInputJq = window.AP_POptions.$(elemInput);

        return (
          void 0 !== placeholder &&
          "" !== placeholder &&
          elemInputJq.prop("placeholder", placeholder),
          // maxLength &&
          // elemInputJq.prop({ maxlength: maxLength, size: maxLength }),
          // minLength && elemInputJq.prop({ minLength: minLength }),
          required && elemInputJq.attr("required", "required"),
          allowValue &&
          allowValue != "default" &&
          elemInputJq.attr("data-allow-value", allowValue),
          void 0 !== valueDefault &&
          "" !== valueDefault &&
          elemInputJq.val(valueDefault),
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            valueDefault
          ),
          $(textField)
        );
      },

      _createQuantityInput: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        valueDefault,
        placeholder,
        id,
        quantity_label,
        min_value_qty,
        max_value_qty,
        add_price_quantity_type,
        hide_price,
        option_show_price,
        price,
        compare_at_price,
        required,
        step,
        is_control_qty,
        product_variation_id,
        option,
      ) {
        if (!min_value_qty) {
          min_value_qty = 0;
        }
        let isSoldOut = false;
        let qtyAvailable = 0;
        if (product_variation_id) {
          let findAc = priceMod.productVariantAC?.find(obj => obj.id === product_variation_id);
          if (findAc) {
            isSoldOut = findAc?.availableForSale;
            qtyAvailable = findAc.quantityAvailable;
          }
          else isSoldOut = true;
        }
        if (shop_id === "56289263793" && product_variation_id) {
          if (valueDefault > qtyAvailable) {
            valueDefault = qtyAvailable >= 0 ? qtyAvailable : 0;
          }
          if (qtyAvailable || qtyAvailable === 0) {
            max_value_qty = qtyAvailable;
          }
        }
        var elemInput = document.createElement("input");
        elemInput.setAttribute("type", "number");
        elemInput.setAttribute("min", min_value_qty);
        elemInput.setAttribute("max", max_value_qty);
        elemInput.setAttribute("field-name", labelCart);
        elemInput.setAttribute(
          "name",
          isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
        );
        elemInput.setAttribute("id", id);
        elemInput.setAttribute("autocomplete", "off");

        if (option?.option_values?.[0]?.soldout) {
          if (!required) elemInput.setAttribute("disabled", "");
          elemInput.classList.add(AVIS_CLASS.soldOutOption);
        }

        elemInput.classList.add("avp-productdescfont");
        elemInput.classList.add("avp-productoptiontextcolor");
        elemInput.classList.add("avp-productoptionbackground");
        elemInput.classList.add("avp-quantity-input");

        if (["4202505"].includes(shop_id) && option?.class_name?.includes("avis-custom-price-quantity")) elemInput.classList.add(option.class_name);

        if (step && step > 1 && is_control_qty) {
          elemInput.setAttribute("step", step);
          elemInput.style.pointerEvents = "none";
        }

        elemInput.addEventListener("keydown", function (event) {
          if (event.key === "-" || event.keyCode === 189) {
            event.preventDefault();
          }
        });

        elemInput.removeEventListener("input", (event) =>
          e.handleChangeQuantity(
            elemOptionAvisContainer,
            productId,
            event,
          )
        );
        elemInput.addEventListener("input", (event) => {
          e.handleChangeQuantity(
            elemOptionAvisContainer,
            productId,
            event,
          );
        });

        function checkMinMaxQuantity(min, max, inputElem) {
          let valueInput = parseInt(inputElem.value);
          if (min && valueInput < min) {
            inputElem.value = min;
            inputElem.dispatchEvent(new Event('input'));
          }
          if (max && valueInput > max) {
            inputElem.value = max;
            inputElem.dispatchEvent(new Event('input'));
          }
        }

        elemInput.addEventListener('blur', () => checkMinMaxQuantity(min_value_qty, max_value_qty, elemInput));

        let titleSpan = document.createElement("span");
        titleSpan.classList.add("avp-quantity-title");

        if (!hide_price && option_show_price !== "only_label" && parseFloat(price)) {
          titleSpan.innerHTML = `${quantity_label ?? ""} ${priceMod.priceMarkup(parseFloat(price), parseFloat(compare_at_price))}`;
        } else {
          titleSpan.innerHTML = quantity_label ?? "";
        }

        let quantityContainer = document.createElement("div");
        quantityContainer.classList.add("apo-text-field");
        add_price_quantity_type && quantityContainer.setAttribute("data-quantity-price-type", add_price_quantity_type);

        let controlQtyWrapper = document.createElement("div");
        controlQtyWrapper.classList.add("avp-quantity-control-wrapper");

        if (is_control_qty) {
          let inputStep = parseInt(step) || 1;
          elemInput.value = valueDefault || 0;
          let minusButton = document.createElement("div");
          minusButton.classList.add("avp-quantity-control");
          minusButton.classList.add("avp-quantity-control-minus");
          minusButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="icon icon-minus" viewBox="0 0 10 2"><path fill="currentColor" fill-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 1 1 0 1H1A.5.5 0 0 1 .5 1" clip-rule="evenodd"></path></svg>
          `;
          minusButton.addEventListener("click", () => {
            let value = parseInt(elemInput.value) || 0;
            if (min_value_qty && value <= min_value_qty) {
              elemInput.value = min_value_qty;
              elemInput.dispatchEvent(new Event('input'));
              // elemInput.dispatchEvent(new Event('change'));
            } else {
              if (value >= inputStep) {
                elemInput.value = value - inputStep;
                elemInput.dispatchEvent(new Event('input'));
                // elemInput.dispatchEvent(new Event('change'));
              } else elemInput.value = value;
            }
          });

          let plusButton = document.createElement("div");
          plusButton.classList.add("avp-quantity-control");
          plusButton.classList.add("avp-quantity-control-plus");
          plusButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="icon icon-plus" viewBox="0 0 10 10"><path fill="currentColor" fill-rule="evenodd" d="M1 4.51a.5.5 0 0 0 0 1h3.5l.01 3.5a.5.5 0 0 0 1-.01V5.5l3.5-.01a.5.5 0 0 0-.01-1H5.5L5.49.99a.5.5 0 0 0-1 .01v3.5l-3.5.01z" clip-rule="evenodd"></path></svg>
          `;
          plusButton.addEventListener("click", () => {
            let value = parseInt(elemInput.value) || 0;
            if (max_value_qty && value >= max_value_qty) {
              elemInput.value = max_value_qty;
              elemInput.dispatchEvent(new Event('input'));
              // elemInput.dispatchEvent(new Event('change'));
            } else {
              elemInput.value = value + inputStep;
              elemInput.dispatchEvent(new Event('input'));
              // elemInput.dispatchEvent(new Event('change'));
            }
          });

          elemInput.addEventListener('input', function () {
            if (this.value == 0) {
              createAvisContainerHidden(
                elemOptionAvisContainer,
                productId,
                labelCart,
                ''
              );
            }
          });

          controlQtyWrapper.append(minusButton, elemInput, plusButton);
          quantityContainer.append(titleSpan, controlQtyWrapper);
        } else {
          quantityContainer.append(titleSpan, elemInput);
        }

        let elemInputJq = window.AP_POptions.$(elemInput);

        priceMod.variantChange(
          labelCart,
          [elemInputJq],
          productId,
          elemOptionAvisContainer
        );

        return (
          void 0 !== placeholder &&
          "" !== placeholder &&
          elemInputJq.prop("placeholder", placeholder),
          void 0 !== valueDefault &&
          "" !== valueDefault &&
          elemInputJq.val(valueDefault),
          required && elemInputJq.prop("required", required),
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            Number(valueDefault) ?? min_value_qty ?? 0
          ),
          $(quantityContainer)
        );
      },

      _createPhoneInput: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        valueDefault,
        placeholder,
        isRequired,
        valueCountry,
        id,
        option,
      ) {
        var elemInput = document.createElement("INPUT");
        elemInput.setAttribute("type", "text");
        elemInput.setAttribute("field-name", labelCart);
        elemInput.setAttribute(
          "name",
          isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
        );
        elemInput.setAttribute("id", id);
        elemInput.setAttribute("autocomplete", "off");

        elemInput.classList.add("avp-productdescfont");
        elemInput.classList.add("avp-productoptiontextcolor");
        elemInput.classList.add("avp-productoptionbackground");

        if (isRequired) elemInput.setAttribute("required", isRequired);
        if(option?.default_value) elemInput.setAttribute("value", option?.default_value);

        elemInput.removeEventListener("input", (event) =>
          e.handleChangeElementPhone(elemOptionAvisContainer, productId, event)
        );
        elemInput.addEventListener("input", (event) => {
          e.handleChangeElementPhone(elemOptionAvisContainer, productId, event);
        });

        var textField = document.createElement("span");
        textField.classList.add("apo-text-field");
        textField.appendChild(elemInput);

        if (option?.option_values?.[0]?.soldout) {
          elemInput.setAttribute("disabled", "");
          elemInput.classList.add(AVIS_CLASS.soldOutOption);
          textField.setAttribute("disabled", "");
          textField.classList.add(AVIS_CLASS.soldOutOption);
        }

        let phoneInput = window.apoPhoneInput(elemInput, {
          initialCountry: valueCountry
            ? valueCountry.toLocaleLowerCase().trim()
            : "us",
          utilsScript:
            "https://cdn.jsdelivr.net/npm/intl-tel-input@21.0.8/build/js/utils.js",
          showSelectedDialCode: true,
          customPlaceholder: function (selectedCountryPlaceholder) {
            return placeholder ? placeholder : selectedCountryPlaceholder;
          },
        });

        elemInput.addEventListener("keyup", () => {
          let isValid = phoneInput.isValidNumberPrecise();
          if (isValid) {
            elemInput.classList.remove("invalid-phone-number");
          } else {
            elemInput.classList.add("invalid-phone-number");
          }
        });

        elemInput.addEventListener("keydown", function (event) {
          // Allow backspace, delete, tab, escape, enter, and arrow keys
          const allowedKeys = [
            "Backspace",
            "Delete",
            "Tab",
            "Escape",
            "Enter",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Decimal",
          ];
          if (
            allowedKeys.includes(event.key) ||
            // Allow shortcuts: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Command+A/C/V/X
            ((event.key === "a" ||
              event.key === "c" ||
              event.key === "v" ||
              event.key === "x") &&
              (event.ctrlKey || event.metaKey))
          ) {
            // Let it happen, don't do anything
            return;
          }
          // Ensure that it is a number and stop the keypress
          if (!event.key.match(/^\d$/)) {
            event.preventDefault();
          }
        });

        return (
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            valueDefault
          ),
          $(textField)
        );
      },

      _createTextArea: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        t,
        n,
        maxLength,
        o,
        r,
        allowValue,
        textTransform,
        minLength,
        option
      ) {
        maxLength =
          maxLength && parseInt(maxLength, 10) > 0
            ? parseInt(maxLength, 10)
            : 0;
        minLength =
          minLength && parseInt(minLength, 10) > 0
            ? parseInt(minLength, 10)
            : 0;

        var a = window.AP_POptions.$("<textarea>")
          .attr("field-name", labelCart)
          .attr(
            "name",
            isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
          )
          .attr("id", r)
          .attr("autocomplete", "off")
          .addClass("avp-productdescfont")
          .addClass("avp-productoptiontextcolor")
          .addClass("avp-productoptionbackground");

        if (maxLength) {
          a.attr("maxlength", maxLength);
        }

        if (option?.option_values?.[0]?.soldout) {
          a.attr("disabled", "");
          a.addClass(AVIS_CLASS.soldOutOption);
        }

        if (textTransform && textTransform === "Uppercase")
          a.addClass("avp-text-transform-uppercase");
        if (textTransform && textTransform === "Lowercase")
          a.addClass("avp-text-transform-lowercase");
        if (textTransform && textTransform === "Capitalize")
          a.addClass("avp-text-transform-capitalize");
        minLength && a.prop({ minLength: minLength });
        allowValue && a.attr("data-allow-value", allowValue);
        var textField = window.AP_POptions.$("<span>")
          .addClass("apo-text-field")
          .append(a);
        if (maxLength && maxLength > 0) {
          const counterLetter = document.createElement("span");
          counterLetter.classList.add("apo-counter-letter");
          counterLetter.classList.add("avp-counter-letters-textarea");
          var countText = t ? t.length : 0;
          counterLetter.innerHTML = `<span class="apo-counter-input">${countText}</span>/${maxLength}`;
          textField[0].appendChild(counterLetter);
        }

        if (minLength && minLength > 0) {
          const minLetter = document.createElement("span");
          minLetter.classList.add("apo-min-letter");
          minLetter.innerHTML =
            customizeryConfig?.text_customization_notification_min_characters
              ? customizeryConfig?.text_customization_notification_min_characters.replace(
                "{min_length}",
                minLength
              )
              : `Type at least ${minLength} characters`;
          textField[0].appendChild(minLetter);
        }
        if (option?.class_name?.includes("apo-no-space")) {
          a[0].addEventListener("keydown", function (event) {
            if (event.key === " " || event.code === "Space") {
              event.preventDefault();
            }
          });
        }

        a[0].removeEventListener("input", (event) =>
          e.handleChangeElement(
            elemOptionAvisContainer,
            productId,
            option,
            event,
            maxLength,
            minLength,
            textTransform
          )
        );
        a[0].addEventListener("input", (event) => {
          if (option?.class_name?.includes("apo-no-space")) {
            event.target.value = event.target.value.replace(/\s/g, "");
          }
          e.handleChangeElement(
            elemOptionAvisContainer,
            productId,
            option,
            event,
            maxLength,
            minLength,
            textTransform
          );
        });

        return (
          void 0 !== t && "" !== t && a.val(t),
          void 0 !== n && "" !== n && a.prop("placeholder", n.replace(/\\n/g, '\n')),
          maxLength && maxLength > 0 && a.prop("max_length", maxLength),
          o && a.attr("required", "required"),
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            a.val()
          ),
          textField
        );
      },
      _createNumberInput: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        t,
        n,
        i,
        o,
        r,
        a,
        option
      ) {
        var s = window.AP_POptions.$("<input/>")
          .attr("type", "number")
          .attr("step", "any")
          .attr("field-name", labelCart)
          .attr("name", isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart)
          .attr("id", a)
          .attr("autocomplete", "off")
          .attr("max", o)
          .addClass("avp-productdescfont")
          .addClass("avp-productoptiontextcolor")
          .addClass("avp-productoptionbackground");

        if (option?.option_values?.[0]?.soldout) {
          s.attr("disabled", "");
          s.addClass(AVIS_CLASS.soldOutOption);
        }

        let apoTextField = document.createElement("span");
        apoTextField.classList.add("apo-text-field");

        var textField = s;
        if (
          shop_id === "78803271973" &&
          o &&
          parseInt(o) > 0 &&
          option.class_name === "avis-required-1"
        ) {
          var textFieldTemp = document.createElement("span");
          textFieldTemp.classList.add("apo-text-field");
          textFieldTemp.appendChild(s[0]);
          const counterLetter = document.createElement("span");
          counterLetter.classList.add("apo-counter-letter");
          var countText = t ? t.length : s.val().length;
          counterLetter.innerHTML = `<span class="apo-counter-input">${countText}</span>/${o.length}`;
          textFieldTemp.appendChild(counterLetter);
          textField = $(textFieldTemp);
        } else {
          apoTextField.appendChild(s[0]);
          textField = $(apoTextField);
        }

        if (void 0 !== t && "" !== t) s.val(t);
        if (void 0 !== n && "" !== n) s.prop("placeholder", n);
        if (r) s.prop("required", r);

        s.on("keypress", function (e) {
          var t = String.fromCharCode(e.which);
          return Boolean(t.match(/[0-9\.-]/));
        });
        var p = function (e) {
          i = parseFloat(i);
          o = parseFloat(o);
          input = parseFloat(s.val());
          if (void 0 !== i && i !== "" && input < i && e.type !== "keyup") {
            s.val(i);
          }
          if (void 0 !== o && o !== "" && input > o) {
            s.val(o);
          }
          let numberContainer = s.closest(".apo-text-field");
          priceMod.variantChange(
            labelCart,
            [numberContainer ?? s],
            productId,
            elemOptionAvisContainer
          );
        };
        if (ap_front_settings.shop_id === '66825126042') {
          s.on('keydown', function (e) {
            const val = Number(s.val());
            if (e.key === '-' || e.code === 'Minus') {
              e.preventDefault();
            }
            if (e.key === 'ArrowDown' && val <= 0) {
              e.preventDefault();
            }
          });
          s.on('input', function () {
            const val = Number(s.val());
            if (val < 0) {
              s.val(0);
            }
          });
        }
        s.on("keyup", function (x) {
          p(x);
          let counter = x.target
            ?.closest(".avp-option")
            ?.querySelector(".apo-counter-input");
          if (counter) counter.innerHTML = s.val()?.length ?? 0;
          createAvisContainerHidden(elemOptionAvisContainer, productId, labelCart, s.val());
          findButtonAddCart(elemOptionAvisContainer, productId);
          e.eventListenerPersonalizer(option.key, "text", s.val());
        });
        s.on("blur", function (x) {
          p(x);
          let counter = x.target
            ?.closest(".avp-option")
            ?.querySelector(".apo-counter-input");
          if (counter) counter.innerHTML = s.val()?.length ?? 0;
          createAvisContainerHidden(elemOptionAvisContainer, productId, labelCart, s.val());
          window.AP_POptions.apps.productoptions.toggleInputError(s, !0);
          findButtonAddCart(elemOptionAvisContainer, productId);
        });
        createAvisContainerHidden(elemOptionAvisContainer, productId, labelCart, s.val());
        return textField;
      },
      _createDimensionInput: function (
        elemOptionAvisContainer,
        productId,
        option
      ) {
        let labelCart = option.label_cart;
        let dimensionValues = option["dimension_values"];
        let dimensionContainer = document.createElement("div");
        dimensionContainer.classList.add("avp-dimension-container");

        let listElementInput = [];
        let isCalcPriceDefault = true;
        dimensionValues && Object.entries(dimensionValues)?.forEach(([field, value]) => {
          let labelCartItem = `${labelCart} ${value?.label ?? field}`;
          let min = value?.min || "";
          let max = value?.max || "";
          let label = value?.label || "";
          let unit = value?.unit || "";
          let defaultValue = value?.default || "";
          if (label || unit || defaultValue || min || max)
          {
            let textInput = document.createElement("input");
            textInput.setAttribute("type", "number");
            textInput.setAttribute("field-name", labelCartItem);
            textInput.setAttribute("name", isNotUseAvisHidden ? `properties[${labelCartItem}]` : labelCartItem);
            textInput.setAttribute("autocomplete", "off");
            textInput.setAttribute("group-name", labelCart);
            textInput.setAttribute("option-type", option?.type || "");
            if (max) textInput.setAttribute("max", max);
            if (min) textInput.setAttribute("min", min);
            textInput.classList.add("avp-productdescfont");
            textInput.classList.add("avp-productoptiontextcolor");
            textInput.classList.add("avp-productoptionbackground");

            if (defaultValue) textInput.setAttribute("value", defaultValue);
            if (option.required) textInput.setAttribute("required", option.required);

            textInput.addEventListener("keydown", function (event) {
              const allowedKeys = ["0","1","2","3","4","5","6","7","8","9","."];
              const controlKeys = [
                "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"
              ];
              if (!allowedKeys.includes(event.key) && !controlKeys.includes(event.key)) {
                event.preventDefault();
              }
            });
            textInput.addEventListener("blur", function (event) {
              let value = event.target.value;
              if (min && !isNaN(Number(value)) && parseFloat(value) < parseFloat(min)) {
                value = min;
              }
              if (max && !isNaN(Number(value)) && parseFloat(value) > parseFloat(max)) {
                value = max;
              }
              event.target.value = value;
              createAvisContainerHidden(elemOptionAvisContainer, productId, labelCartItem, value);
              // Handle dimension price
              if (option?.dimension_price && option?.option_values?.[0])
              {
                priceMod.variantChange(
                  labelCart,
                  listElementInput,
                  productId,
                  elemOptionAvisContainer
                );
              }

              window.AP_POptions.apps.productoptions.toggleInputError($(textInput), true);
              findButtonAddCart(elemOptionAvisContainer, productId);
            });

            let dimensionItem = document.createElement("div");
            dimensionItem.classList.add("avp-dimension-item");

            let dimensionItemTitle = document.createElement("span");
            dimensionItemTitle.classList.add("avp-dimension-item-title");
            dimensionItemTitle.innerHTML = label || "";

            let dimensionInputContainer = document.createElement("div");
            dimensionInputContainer.classList.add("avp-dimension-input-container");
            dimensionInputContainer.append(textInput);
            listElementInput.push(textInput);

            if (unit) {
              let hrElem = document.createElement("span");
              hrElem.classList.add("avp-dimension-hr");
              let unitSpan = document.createElement("span");
              unitSpan.classList.add("avp-dimension-unit");
              unitSpan.innerHTML = unit || "";
              dimensionInputContainer.append(hrElem, unitSpan);
            }

            if (label) dimensionItem.append(dimensionItemTitle);
            dimensionItem.append(dimensionInputContainer);
            dimensionContainer.append(dimensionItem);
            if (!defaultValue) isCalcPriceDefault = false;

            createAvisContainerHidden(elemOptionAvisContainer, productId, labelCartItem, defaultValue ?? "");

            // Handle dimension price
            if (option?.dimension_price && option?.option_values?.[0]) {
              priceMod.attachData(
                textInput,
                labelCart,
                option.option_values[0],
                "has-value",
                option,
                productId
              );
            }
          }
        });

        if (isCalcPriceDefault)
        {
          priceMod.variantChange(
            labelCart,
            listElementInput,
            productId,
            elemOptionAvisContainer
          );
        }

        createAvisContainerHidden(elemOptionAvisContainer, productId, labelCart, "");
        return $(dimensionContainer);
      },
      _createSliderInput: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        defaultValue,
        add_price_quantity_type,
        unit,
        start_value,
        end_value,
        step,
        show_dots,
        required,
        show_selected_value,
        a,
        option
      ) {
        let elemInput = $("<input/>", {
          type: "range",
          step: step ?? 1,
          min: start_value ?? 0,
          max: end_value ?? 100,
          "field-name": labelCart,
          name: isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart,
          id: a,
          autocomplete: "off",
          class: "apo-slider-thumb avp-productdescfont avp-productoptiontextcolor avp-productoptionbackground",
          value: defaultValue !== undefined && defaultValue !== "" ? defaultValue : start_value ?? 0,
          required: required ? "required" : undefined,
        });
        // if (ap_front_settings.shop_id === '89147965763') {
        //   // === CUSTOM SLIDER UI ===

        //   // Tạo wrapper chứa controls + range
        //   let sliderWrapper = $("<div>", { class: "apo-slider-custom-wrapper" });

        //   // Nút -, hiển thị giá trị, nút +
        //   let controls = $("<div>", { class: "apo-slider-controls" });
        //   let minusButton = $("<button>", { class: "apo-slider-minus", text: "-" });
        //   let valueDisplay = $("<div>", { class: "apo-slider-display", text: elemInput.val() + (unit ? unit : "") });
        //   let plusButton = $("<button>", { class: "apo-slider-plus", text: "+" });
        //   controls.append(minusButton, valueDisplay, plusButton);

        //   // Ẩn mặc định cái thumb
        //   elemInput.addClass("apo-slider-hidden-thumb");

        //   // Append cấu trúc
        //   sliderWrapper.append(controls, elemInput);
        //   sliderValueContainer.append(sliderWrapper);

        //   // CSS cho thumb ẩn/hiện
        //   $("<style>").text(`
        //     .apo-slider-hidden-thumb::-webkit-slider-thumb,
        //     .apo-slider-hidden-thumb::-moz-range-thumb {
        //       opacity: 0;
        //       transition: opacity .15s ease;
        //     }
        //     .apo-slider-controls.hidden + input[type=range]::-webkit-slider-thumb,
        //     .apo-slider-controls.hidden + input[type=range]::-moz-range-thumb {
        //       opacity: 1;
        //     }
        //   `).appendTo("head");

        //   // Event update hiển thị
        //   function updateValue() {
        //     valueDisplay.text(elemInput.val() + (unit ? unit : ""));
        //     updateRangeBackground();
        //     createHiddenInput(elemInput.val());
        //   }
        //   elemInput.on("input", updateValue);

        //   // Nút -
        //   minusButton.on("click", function() {
        //     elemInput.val(Math.max(elemInput.attr("min"), parseInt(elemInput.val()) - 1));
        //     updateValue();
        //   });
        //   // Nút +
        //   plusButton.on("click", function() {
        //     elemInput.val(Math.min(elemInput.attr("max"), parseInt(elemInput.val()) + 1));
        //     updateValue();
        //   });

        //   // Khi giữ vào valueDisplay thì ẩn controls, hiện dot để kéo
        //   let isDragging = false;
        //   valueDisplay.on("mousedown", function() {
        //     controls.addClass("hidden");
        //     isDragging = true;
        //   });
        //   $(document).on("mouseup", function() {
        //     if (isDragging) {
        //       controls.removeClass("hidden");
        //       isDragging = false;
        //     }
        //   });

        //   // Khởi tạo background + value
        //   updateValue();

        //   return sliderValueContainer;
        // }

        let sliderValueContainer = $("<div>", {
          class: "apo-slider-container apo-text-field",
          "data-quantity-price-type": add_price_quantity_type ?? ""
        });

        if (option?.option_values?.[0]?.soldout) {
          elemInput.attr("disabled", "");
          elemInput.addClass(AVIS_CLASS.soldOutOption);
          sliderValueContainer.attr("disabled", "");
          sliderValueContainer.addClass(AVIS_CLASS.soldOutOption);
        }

        let sliderValueWrap = $("<div>", { class: "apo-slider-value-container" });
        let leftSpan = $("<div>", { class: "apo-thumb-left" }).html(`<span>${start_value ?? 0}</span><span>${unit ? unit : ''}</span>`);
        let valueSpan = $("<div>", { class: "apo-thumb-value" }).html(`<span>${elemInput.val()}</span><span>${unit ? unit : ''}</span>`);
        let rightSpan = $("<div>", { class: "apo-thumb-right" }).html(`<span>${end_value ?? 100}</span><span>${unit ? unit : ''}</span>`);

        if (!(elemInput.val() > 0 && !show_selected_value)) {
          valueSpan.addClass("apo-thumb-value-hidden");
        }

        if (show_selected_value) {
          valueSpan.css("display", "none");
        }

        sliderValueWrap.append(leftSpan, valueSpan, rightSpan);
        sliderValueContainer.append(sliderValueWrap);

        priceMod.attachData(
          sliderValueContainer[0],
          option.label_cart,
          option.option_values[0],
          "has-value",
          option,
          productId
        );

        let dotsElm = $("<div>", { class: "apo-slider-dots" });
        const min = Number(start_value ?? 0);
        const max = Number(end_value ?? 100);
        const convertStep = Number(step);
        if (step && show_dots) {
          let steps = (max - min) / convertStep;
          for (let i = 0; i <= steps; i++) {
            dotsElm.append("<span></span>");
          }
        }

        function updateRangeBackground() {
          const value = elemInput.val();
          const percentage = ((value - min) / (max - min)) * 100;
          let thumbBg = "";
          let thumbDots = "";
          let sliderConfig = customizeryConfig?.customize_options?.slider;
          if (isDesignV2) {
            thumbBg = "#ddd";
            thumbDots = "#ad0000";
            if (sliderConfig?.color?.slider !== "default") thumbBg = sliderConfig?.color?.slider ?? thumbBg;
            if (sliderConfig?.color?.thumb !== "default") thumbDots = sliderConfig?.color?.thumb ?? thumbDots;
          }
          else {
            thumbBg = sliderConfig?.slider_thumb_color?.color === "default" || !sliderConfig?.slider_thumb_color?.color ? "#ddd" : sliderConfig?.slider_thumb_color?.color;
            thumbDots = sliderConfig?.slider_dots_color?.color === "default" || !sliderConfig?.slider_dots_color?.color ? "#ad0000" : sliderConfig?.slider_dots_color?.color;
          }
          elemInput.closest(".apo-slider-input-container").css("background", `linear-gradient(to right, ${thumbDots} 0%,${thumbDots} ${percentage}%, ${thumbBg} ${percentage}%, ${thumbBg} 100%)`);
        }

        let inputSliderContainer = $("<div>", { class: "apo-slider-input-container" });
        inputSliderContainer.append(elemInput, dotsElm);
        sliderValueContainer.append(inputSliderContainer);

        if (option?.option_values?.[0]?.soldout) {
          inputSliderContainer.attr("disabled", "");
          inputSliderContainer.addClass(AVIS_CLASS.soldOutOption);
        }

        function createHiddenInput(value) {
          let newValue = ap_front_settings.shop_id === '90090832200' ? value + "€" : value;
          priceMod.variantChange(labelCart, [sliderValueContainer], productId, elemOptionAvisContainer);
          window.AP_POptions.apps.productoptions.toggleInputError(sliderValueContainer, true);
          findButtonAddCart(elemOptionAvisContainer, productId);
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            newValue
          );
        }

        const handleChangeElementValue = function () {
          let value = elemInput.val();
          if (!(value > 0 && !show_selected_value)) {
            valueSpan.addClass("apo-thumb-value-hidden");
          } else {
            valueSpan.removeClass("apo-thumb-value-hidden");
          }
          valueSpan.html(`<span>${value}</span><span>${unit ? unit : ''}</span>`);
          createHiddenInput($(this).val());
          updateRangeBackground();
        };
        updateRangeBackground();

        createHiddenInput(elemInput.val());

        elemInput.off("input blur change").on("input blur change", handleChangeElementValue);

        return (
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            elemInput.val()
          ),
          sliderValueContainer
        );
      },
      _createDateInput: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        defaultValue,
        placeholder,
        isRequired,
        idInput,
        option,
      ) {
        var inputDate = window.AP_POptions.$("<input/>")
          .attr("type", "text")
          .attr("avp-data", "date")
          .attr("step", "any")
          .attr("field-name", labelCart)
          .attr(
            "name",
            isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
          )
          .attr("id", idInput)
          .attr("autocomplete", "off")
          .attr("placeholder", `${placeholder ? placeholder : ""}`)
          .addClass("avp-productdescfont")
          .addClass("avp-productoptiontextcolor")
          .addClass("avp-productoptionbackground");

        // if (isDesignV2) {
        //   const scriptsToLoad = [
        //     { name: "flatpickr", url: "https://cdn.jsdelivr.net/npm/flatpickr" },
        //     { name: "monthSelectPlugin", url: "https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/index.js" }
        //   ];
        //   e.loadFlatpickrScriptIfNeeded(scriptsToLoad, function () {
        //     e.initializeFlatpickr(idInput, option);
        //   });
        // }

        if (option?.option_values?.[0]?.soldout) {
          inputDate.attr("disabled", "");
          inputDate.addClass(AVIS_CLASS.soldOutOption);
        }

        inputDate.prop("readonly", true);
        defaultValue && inputDate.val(defaultValue),
          isRequired && inputDate.prop("required", isRequired),
          inputDate.on("keypress", function (e) {
            var t = String.fromCharCode(e.which);
            return Boolean(t.match(/[0-9\.-]/));
          });
        var eventInput = function (e) { };
        return (
          inputDate.on("change", function (e) {
            eventInput(e);
            priceMod.variantChange(
              labelCart,
              [inputDate],
              productId,
              elemOptionAvisContainer
            );
            createAvisContainerHidden(
              elemOptionAvisContainer,
              productId,
              labelCart,
              $(this).val()
            );
          }),
          // inputDate.on("keyup", function (e) {
          //   eventInput(e);
          //   createAvisContainerHidden(elemOptionAvisContainer, productId, labelCart, $(this).val());
          //   findButtonAddCart(elemOptionAvisContainer, productId);
          // }),
          // inputDate.on("blur", function (e) {
          //   eventInput(e),
          //     window.AP_POptions.apps.productoptions.toggleInputError(
          //       inputDate,
          //       !0
          //     );
          //   createAvisContainerHidden(elemOptionAvisContainer, productId, labelCart, $(this).val());
          //   findButtonAddCart(elemOptionAvisContainer, productId);
          // }),
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            inputDate.val()
          ),
          inputDate
        );
      },
      _createColorInput: function (
        elemOptionAvisContainer,
        productId,
        o,
        option,
      ) {

        let labelCart = option.label_cart;
        let t = option["default_value"];
        let i = option.required;
        let inputColor = $("<input/>")
          .attr("type", "color")
          .attr("avp-data", "color")
          .attr("field-name", labelCart)
          .attr("autocomplete", "off")
          .attr("name", isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart)
          .attr("id", o)
          .addClass("avp-colorpicker");

        var a = window.AP_POptions.$(
          `<div class="apo-maincolorpicker">
              <label class="apo-colorlabel" for="${o}">
                <svg class="apo-icon__color" style="fill: ${t}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  <path d="M7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                  <path d="M8 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  <path d="M13 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                  <path fill-rule="evenodd" d="M10 3a7 7 0 0 0 0 14 1.75 1.75 0 0 0 1.75-1.75v-1.5a2 2 0 0 1 2-2h1.5a1.75 1.75 0 0 0 1.75-1.75 7 7 0 0 0-7-7Zm3.75 7.25h1.5a.25.25 0 0 0 .25-.25 5.5 5.5 0 1 0-5.5 5.5.25.25 0 0 0 .25-.25v-1.5a3.5 3.5 0 0 1 3.5-3.5Z" />
                </svg>
                <span class="apo-textvalue">${t ? t : ["56358994090"].includes(shop_id) ? "" : "#000000"}</span>
              </label>
            </div>`
        ).append(inputColor);

        if (option?.option_values?.[0]?.soldout) {
          inputColor.attr("disabled", "");
          inputColor.addClass(AVIS_CLASS.soldOutOption);
          a.attr("disabled", "");
          a.addClass(AVIS_CLASS.soldOutOption);
        }
        a[0].addEventListener('input', function (event) {
            const color = event?.target?.value;
            e.eventListenerPersonalizer(option.key, "color", color, "name");
        });
        return (
          a.on("change", function () {
            priceMod.variantChange(labelCart, [a], productId, elemOptionAvisContainer);
            createAvisContainerHidden(
              elemOptionAvisContainer,
              productId,
              labelCart,
              inputColor.val()
            );
          }),
          void 0 !== t && "" !== t && inputColor.val(t),
          i && a.prop("required", i),
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            ["56358994090"].includes(shop_id) ? "" : inputColor.val()
          ),
          a
        );
      },

      _createFontInput: function (
        elemOptionAvisContainer,
        productId,
        name,
        fontSelected,
        isRequired,
        className,
        placeholder,
        id,
        defaultValue,
        option
      ) {
        if (defaultValue) defaultValue = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
        let required = isRequired ? true : false;
        let initPlaceholder = placeholder ? placeholder : "-- Select a font --";
        id = `${id}-font`;
        let textSearchFont = customizeryConfig.search_font ? `${customizeryConfig.search_font}...` : "Search font...";
        let textReset = customizeryConfig.reset_to_default ? customizeryConfig.reset_to_default : "Reset to Default";
        if (shop_id === "71494762794") {
          textSearchFont = "Zoek lettertype...";
          textReset = "Reset";
        }
        let a = window.AP_POptions.$(
          `<div class="avp-font-dropdown">
            <input value="${defaultValue?.[0] ?? ''}" style="font-family: ${defaultValue?.[0] ? defaultValue?.[0] : 'inherit'}" type="text" field-name="${name}" name="${isNotUseAvisHidden ? `properties[${name}]` : name
          }" id="${id}" class="${className ? className : ''}" readonly placeholder="${initPlaceholder}" ${required ? "required" : ""}>
            <div id="${id}-dropdown-content" class="avp-dropdown-content">
              <input type="text" placeholder="${textSearchFont}" id="${id}-search-input">
              <div id="${id}-sticky" class="sticky">${textReset}</div>
            </div>
          </div>`
        );

        if (option?.option_values?.[0]?.soldout) {
          a.attr("disabled", "");
          a.addClass(AVIS_CLASS.soldOutOption);
        }

        let elemInput = a[0].querySelector("input[field-name]");
        if (elemInput)
        {
          elemInput.addEventListener("change", function (event) {
            const font = event?.target?.value;
            e.eventListenerPersonalizer(option.key, "font", font, "name");
          });
        }

        return (
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            name,
            defaultValue?.[0] ?? ''
          ),
          a
        );
      },

      _createFileInput: function (
        elemOptionAvisContainer,
        productId,
        e,
        isRequired,
        isMultiFiles,
        optionFileType,
        optionFileTypeCustom,
        o,
        option,
      ) {
        newFileTypeCusotm = "";
        if (optionFileTypeCustom?.length > 0) {
          newFileTypeCusotm = optionFileTypeCustom
            .map((ext) => `.${ext}`)
            .join(", ");
        }

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.userAgent.includes("Macintosh") && 'ontouchend' in document);

        let inputFile = $("<input/>")
          .attr("type", "file")
          .attr("name", (isNotUseAvisHidden || (!isMultiFiles && isShopUploadShopfiy)) ? `properties[${e}]` : e)
          .attr("id", o)
          .addClass("avp-file__input");

        let inputValue = $("<input/>")
          .attr("type", "hidden")
          .attr("field-name", e)
          .addClass("apo_value");


        const shopMinFileUpload = ap_front_settings.shop_id.includes("67989143599", "63396741298")
        const minFiles = shopMinFileUpload ? option?.min_file_upload : 0;
        if (minFiles > 0 && shopMinFileUpload) {
          inputFile.attr("data-min-files", minFiles);
        }

        if (ap_front_settings.shop_id !== '94815093048' && !isIOS) {
          inputFile.attr(
            "accept",
            optionFileType === "image"
              ? ".jpeg, .jpg, .png, .gif, .webp, .tif, .tiff, .svg, .heic, .ico, .dng, .stl"
              : optionFileType === "document"
                ? ".csv, .docx, .doc, .pdf, .xls, .xlsm, .xlsx, .txt, .ai, .eps, .psd"
                : optionFileType === "all"
                  ? "*/*"
                  : optionFileType === "custom"
                    ? newFileTypeCusotm
                    : "*/*"
          );
        } else {
          inputFile.attr("accept", "*/*");
        }

        if (option?.option_values?.[0]?.soldout) {
          inputFile.attr("disabled", "");
          inputFile.addClass(AVIS_CLASS.soldOutOption);
          inputValue.attr("disabled", "");
          inputValue.addClass(AVIS_CLASS.soldOutOption);
        }

        if (isMultiFiles) inputFile.prop("multiple", isMultiFiles);
        if (isRequired) inputValue.prop("required", isRequired);
        var a = window.AP_POptions.$(
          `<div class="apo-file">
              <label class="apo-file__lable" for="${o}">
                ${window.ap_front_settings.shop_id === "60063187116"
            ? `<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M10.625 32.5q-3.333 0-5.729-2.375T2.5 24.375q0-3.083 2.042-5.417 2.041-2.333 5.041-2.666.709-3.834 3.646-6.313Q16.167 7.5 20.042 7.5q4.458 0 7.5 3.167 3.041 3.166 3.041 7.625v1.333h.5q2.709 0 4.563 1.854 1.854 1.854 1.854 4.563 0 2.666-1.875 4.562Q33.75 32.5 31.083 32.5h-9.541q-1.042 0-1.813-.771-.771-.771-.771-1.854V19.708L15.5 23.167 14 21.708l6-6.041 6 6.041-1.5 1.459-3.458-3.459v10.167q0 .208.166.375.167.167.334.167h9.5q1.833 0 3.104-1.271 1.271-1.271 1.271-3.104 0-1.792-1.271-3.063-1.271-1.271-3.104-1.271H28.5v-3.416q0-3.584-2.479-6.125-2.479-2.542-6.063-2.542-3.583 0-6.062 2.542-2.479 2.541-2.479 6.125h-.875q-2.417 0-4.188 1.75t-1.771 4.333q0 2.458 1.771 4.25 1.771 1.792 4.271 1.792h5V32.5ZM20 21.042Z"></path></svg>`
            : window.ap_front_settings.shop_id === "50797150372"
              ? `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"/>
                      </svg>`
              : ""
          }

                <span class="apo-file__action">${customizeryConfig.text_file_upload_button
            ? customizeryConfig.text_file_upload_button
            : "Choose File"
          }</span>
              </label>
            </div>`
        );

        if (option?.option_values?.[0]?.soldout) {
          a.attr("disabled", "");
          a.addClass(AVIS_CLASS.soldOutOption);
        }

        inputFile.on("change", function (e) {
          window.AP_POptions.apps.productoptions.toggleInputError(a, !0);
        });
        a.append(inputFile);
        a.append(inputValue);
        return (
          (!isShopUploadShopfiy || isMultiFiles) && createAvisContainerHidden(elemOptionAvisContainer, productId, e, ""),
          a
        );
      },
      _createParagraph: function (e) {
        var p = window.AP_POptions.$("<div>" + e + "</div>").addClass(
          "avp-paragraph"
        );
        return p;
      },
      _createHTML: function (e) {
        var p = window.AP_POptions.$("<div>" + e + "</div>").addClass(
          "avp-HTML"
        );
        return p;
      },
      _createSpace: function (height) {
        var p = window.AP_POptions.$(`
          <div class="avp-space" style="height: ${height}px"></div>
        `);
        return p;
      },
      _createSwitch: function (elemOptionAvisContainer, productId, option, id) {
        let elemInput = document.createElement("input");
        elemInput.setAttribute("type", "checkbox");
        elemInput.setAttribute("avp-data", "switch");
        elemInput.setAttribute("field-name", option?.label_cart);
        elemInput.setAttribute(
          "name",
          isNotUseAvisHidden
            ? `properties[${option?.label_cart}]`
            : option?.label_cart
        );
        elemInput.setAttribute("id", id);
        elemInput.setAttribute("autocomplete", "off");

        if (option?.option_values?.[0]?.soldout) {
          elemInput.setAttribute("disabled", "");
          elemInput.classList.add(AVIS_CLASS.soldOutOption);
        }

        elemInput.classList.add("avp-switch");

        let div = document.createElement("div");
        div.classList.add("apo-main__switch");

        if (option?.option_values?.[0]?.soldout) {
          div.setAttribute("disabled", "");
          div.classList.add(AVIS_CLASS.soldOutOption);
        }

        let label = document.createElement("label");
        label.classList.add("apo-switch");
        label.setAttribute("for", id);

        let span = document.createElement("span");
        span.classList.add("apo-textvalue");
        let valueText = option?.switch_label;
        if (
          (shop_id === "72549466396" ||
            shop_id === "89147965763" ||
            shop_id === "70874595579" ||
            shop_id === "87350903133" ||
            shop_id === "87616127313") &&
          option?.option_values?.length &&
          option?.option_values[0]?.is_exist
        ) {
          if (
            option?.option_values[0]?.type == "useexistingvariant" ||
            option?.option_values[0]?.type == "chargeorbundle"
          ) {
            let formatPrice = priceMod.formatMoney(
              parseFloat(option?.option_values[0]?.price ?? 0),
              true
            );
            valueText += `<span class='apo-value-price'>${["87616127313", "89147965763"].includes(shop_id) ? `(+${formatPrice})` : formatPrice.replace(
              ".00",
              ""
            )}</span>`;
          }
        }
        span.innerHTML = valueText;

        div.append(elemInput);
        div.append(label);
        div.append(span);

        if (option?.default_status === "true") elemInput.checked = true;
        if (option?.required)
          elemInput.setAttribute("required", option?.required);
        createAvisContainerHidden(
          elemOptionAvisContainer,
          productId,
          option?.label_cart,
          ""
        );
        const handleChangeElement = function (event) {
          if (elemInput.checked) {
            elemInput.value = option?.switch_label;
            if (option?.required)
              window.AP_POptions.apps.productoptions.toggleInputError(
                $(div),
                !0
              );
          } else {
            if (["62129143868", "89147965763"].includes(shop_id)) elemInput.value = "No Thanks";
            else elemInput.value = "";
          }
          e.eventListnerSwatchPersonalizer(option.key, option, "", -1, elemInput.checked);
          priceMod.variantChange(
            option?.label_cart,
            [$(div)],
            productId,
            elemOptionAvisContainer
          );
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            option?.label_cart,
            $(elemInput).val()
          );
          findButtonAddCart(elemOptionAvisContainer, productId);
        };

        elemInput.removeEventListener("change", (event) =>
          handleChangeElement(event)
        );
        elemInput.addEventListener("change", handleChangeElement.bind());
        option?.default_status === "true" &&
          elemInput.dispatchEvent(new Event("change"));
        return $(div);
      },
      _createOptionGroup: function (option) {
        let boxGroup = document.createElement("div");
        boxGroup.classList.add("apo-group-child");
        boxGroup.classList.add(`apo-group-child-${option?.group_id}`);

        return $(boxGroup);
      },
      _createStepOption: function (option) {
        const stepItems = option?.step?.items || [];
        const stepLayout = option?.step?.layout
        const totalSteps = stepItems.length;
        const stepRequired = option?.button?.step_required
        const buttonPosition = ap_front_settings?.config?.config_app
          ?.customize_options?.step?.button_step?.button_position
          ? ap_front_settings?.config?.config_app?.customize_options?.step
              ?.button_step?.button_position
          : "bottom";

        let currentStep = 0;

        const createElement = (tag, classNames = [], attrs = {}) => {
          const el = document.createElement(tag);
          classNames.forEach((cls) => el.classList.add(cls));
          Object.entries(attrs).forEach(([key, value]) =>
            el.setAttribute(key, value)
          );
          return el;
        };

        const boxStepWrapper = createElement("div", ["apo-step-wrapper"]);

        const boxStepHeader = createElement("div", ["apo-step-header"]);
        boxStepHeader.style.cssText = `
          display: grid;
          grid-template-columns: repeat(${totalSteps}, 1fr);
          grid-gap: 12px;
        `;

        boxStepHeader.classList.add(`apo-${stepLayout ? stepLayout : "step-dots"}`)

        const stepHeaderEls = stepItems.map((item, index) => {
          const stepItemEl = createElement("div", ["apo-step-item"]);

          if (index === 0) stepItemEl.classList.add("apo-step-active");
          stepItemEl.classList.add(
            `apo-step-${item.step_id}`
          );

          const line = createElement("div", ["apo-step-line"]);
          const circles = createElement("div", ["apo-step-circles"]);
          const content = createElement("div", ["apo-step-content"]);

          const icon = createElement("img", ["apo-step-icon"], {
            src: item.icon,
            alt: item.name,
            width: 30,
            height: 30,
          });

          const name = createElement("p", ["apo-step-name"]);
          name.textContent = item.name ? item.name : "";

          const desc = createElement("p", ["apo-step-desc"]);
          desc.textContent = item?.desc ? item?.desc : "";

          if (item.icon) content.appendChild(icon);
          content.appendChild(name);
          if (stepLayout === "arrow-progress") {
            name.appendChild(desc);
          } else {
            content.appendChild(desc);
          }
          if (stepLayout === "progress-circles") {
            const circlesWrapper = createElement("div", ["apo-step-circles-wrapper"]);
            stepItemEl.appendChild(circlesWrapper)
            circlesWrapper.appendChild(circles);
            circlesWrapper.appendChild(line);
          }

          if (stepLayout !== "progress-circles") {
            stepItemEl.appendChild(line);
          }
          stepItemEl.appendChild(content);
          boxStepHeader.appendChild(stepItemEl);

          if (option?.button?.button_type === "none") {
            stepItemEl.addEventListener("click", () => {
              if (index !== currentStep) {
                if (option?.button?.step_required) {
                  const currentStepEl =
                    stepContentEls[currentStep].classList[1];
                  const isValid = newValidateOptions(currentStepEl);
                  if (!isValid) return;
                }
                updateActiveStep(index);
              }
            });
          }

          return stepItemEl;
        });

        requestAnimationFrame(() => {
          const headerWidth = boxStepHeader.offsetWidth;
          const gap = stepLayout !== "grid-steps" ? 12 : 1;
          const itemWidth = (headerWidth - (gap * (totalSteps - 1))) / totalSteps;

          stepHeaderEls.forEach((el) => {
            el.style.width = `${itemWidth}px`;
          });
        });

        const boxStepItems = createElement("div", ["apo-step-items"]);
        const stepContentEls = stepItems.map((item, index) => {
          const child = createElement("div", [
            "apo-step-child",
            `apo-step-child-${item.step_id}`,
          ]);
          if (index === 0) child.classList.add("apo-step-child-active");
          boxStepItems.appendChild(child);
          return child;
        });

        const boxStepAction = createElement("div", ["apo-step-action"]);
        const btnPrev = createElement("button", ["apo-prev-step"], {
          type: "button",
        });
        btnPrev.innerHTML = `
          <p>${window?.ap_front_settings?.config?.config_app?.step_turn_back ? window?.ap_front_settings?.config?.config_app?.step_turn_back : "Turn back"}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 6.00043C14.5 6.46067 14.1269 6.83377 13.6667 6.83377L2.90087 6.83377L5.923 9.85559C6.24845 10.181 6.24848 10.7087 5.92306 11.0341C5.59764 11.3596 5.07 11.3596 4.74455 11.0342L0.299659 6.58972C0.14336 6.43344 0.0555513 6.22146 0.0555513 6.00043C0.0555513 5.7794 0.14336 5.56743 0.299659 5.41115L4.74455 0.966704C5.07 0.641283 5.59764 0.64131 5.92306 0.966763C6.24848 1.29222 6.24845 1.81985 5.923 2.14527L2.90087 5.1671L13.6667 5.1671C14.1269 5.1671 14.5 5.5402 14.5 6.00043Z" fill="#4A4A4A"/>
          </svg>`;
        btnPrev.disabled = true;

        const btnNext = createElement("button", ["apo-next-step"], {
          type: "button",
        });
        btnNext.innerHTML = `
          <p>${window?.ap_front_settings?.config?.config_app?.step_nex_step ? window?.ap_front_settings?.config?.config_app?.step_nex_step : "Next step"}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.773437 5.99957C0.773437 5.53933 1.14653 5.16623 1.60677 5.16623L12.373 5.16623L9.35088 2.14441C9.02543 1.81899 9.0254 1.29135 9.35082 0.965897C9.67624 0.640443 10.2039 0.640416 10.5293 0.965837L14.9742 5.41028C15.1305 5.56656 15.2183 5.77854 15.2183 5.99957C15.2183 6.22059 15.1305 6.43257 14.9742 6.58885L10.5293 11.0333C10.2039 11.3587 9.67624 11.3587 9.35082 11.0332C9.0254 10.7078 9.02543 10.1801 9.35088 9.85473L12.373 6.8329L1.60677 6.8329C1.14653 6.8329 0.773437 6.4598 0.773437 5.99957Z" fill="white"/>
          </svg>`;

        boxStepAction.classList.add(option?.button?.button_type ? `apo-button-${option?.button?.button_type}`: "apo-button-combine");

        if (option?.button?.button_type !== "none") {
          boxStepAction.appendChild(btnPrev);
          boxStepAction.appendChild(btnNext);
        }

        const updateActiveStep = (index) => {
          // stepHeaderEls.forEach((el, i) =>
          //   el.classList.toggle("apo-step-active", i === index)
          // );
          stepHeaderEls.forEach((el, i) => {
            el.classList.toggle("apo-step-active", i === index)
            if (i < index) {
              el.classList.add("apo-step-done");
            } else {
              el.classList.remove("apo-step-done");
            }
          });
          stepContentEls.forEach((el, i) =>
            el.classList.toggle("apo-step-child-active", i === index)
          );

          btnPrev.disabled = index === 0;
          btnNext.disabled = index === totalSteps - 1;
          currentStep = index;

          const btnNextText = btnNext.querySelector("p");
          btnNext.classList.remove("apo-step-atc");
          btnNextText.classList.remove("avis-custom-last-step");

          if (["62650318936"].includes(shop_id) && index === totalSteps - 1) {
            btnNextText.textContent = "🎉 All done! Just hit Add to Cart below";
            btnNextText.classList.add("avis-custom-last-step");
          } else if (["66101346453", "93700129092"].includes(shop_id) && index === totalSteps - 1) {
            btnNext.disabled = false;
            btnNextText.textContent = "Enregistrer";
            btnNext.classList.add("apo-step-atc");
          } else {
            btnNext.disabled = index === totalSteps - 1;
            btnNextText.textContent =
              window?.ap_front_settings?.config?.config_app?.step_nex_step
                ? window?.ap_front_settings?.config?.config_app?.step_nex_step
                : "Next step";
          }

          const container = boxStepWrapper.closest(".ap-options__step-container");
          if (container && ["62650318936"].includes(shop_id)) {
            container.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        };

        btnPrev.addEventListener("click", () => {
          if (stepRequired) {
            const currentStepEl = stepContentEls[currentStep].classList[1];
            const isValid = newValidateOptions(currentStepEl);
            if (!isValid) return;
          }

          if (currentStep > 0) updateActiveStep(currentStep - 1);
        });

        btnNext.addEventListener("click", () => {
          if (stepRequired) {
            const currentStepEl = stepContentEls[currentStep].classList[1];
            const isValid = newValidateOptions(currentStepEl);
            if (!isValid) return;
          }

          if (currentStep < totalSteps - 1) updateActiveStep(currentStep + 1);
        });

        if (stepRequired) {
          setInterval(() => {
            const currentStepEl = stepContentEls[currentStep].classList[1];
            let isExistOptionHasDataInputInvalid =
              window.AvisOptionsConfig.eventValidateOptions;
            let isValidOptionInStepParent = isExistOptionHasDataInputInvalid(
              document,
              currentStepEl
            );
            if (currentStep === totalSteps - 1) {
              btnNext.disabled = true;
            } else {
              btnNext.disabled = !!isValidOptionInStepParent;
            }
          }, 100);
        }

        boxStepWrapper.appendChild(boxStepHeader);
        if (buttonPosition === "top") {
          boxStepWrapper.appendChild(boxStepItems);
          const tryAppendToLabel = setInterval(() => {
            const elemLabelOption = document.querySelector(
              ".ap-options__step-container .ap-label-tooltip"
            );
            if (elemLabelOption) {
              elemLabelOption.appendChild(boxStepAction);
              clearInterval(tryAppendToLabel);
            }
          }, 100);
        } else {
          if (buttonPosition === "middle") {
            boxStepWrapper.appendChild(boxStepAction);
            boxStepWrapper.appendChild(boxStepItems);
          } else {
            boxStepWrapper.appendChild(boxStepItems);
            boxStepWrapper.appendChild(boxStepAction);
          }
        }

        return $(boxStepWrapper);
      },
      _createHiddenField: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        defaultValue,
        id
      ) {
        var elemEmailInput = document.createElement("input");
        elemEmailInput.setAttribute("type", "text");
        elemEmailInput.setAttribute("field-name", labelCart);
        elemEmailInput.setAttribute(
          "name",
          isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
        );
        elemEmailInput.setAttribute("id", id);
        elemEmailInput.classList.add("avp-productdescfont");
        elemEmailInput.classList.add("avp-productoptiontextcolor");
        elemEmailInput.classList.add("avp-productoptionbackground");

        elemEmailInput.removeEventListener("input", (event) =>
          e.handleChangeElement(elemOptionAvisContainer, productId, option, event)
        );
        elemEmailInput.addEventListener("input", (event) => {
          e.handleChangeElement(elemOptionAvisContainer, productId, option, event);
        });

        var textField = document.createElement("span");
        textField.classList.add("apo-text-field");
        textField.appendChild(elemEmailInput);

        let elemInputJq = window.AP_POptions.$(elemEmailInput);
        return (
          defaultValue && elemInputJq.val(defaultValue),
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            defaultValue
          ),
          textField ? window.AP_POptions.$(textField) : elemInputJq
        );
      },
      _createHeading: function (content, styles, color) {
        var h = window.AP_POptions.$(
          `<${styles} style="color: ${color};">` + content + `</${styles}>`
        ).addClass("avp-heading");
        return h;
      },
      _createDivider: function (borderStyles, dividerColor) {
        var thicknessDivider = borderStyles === "double" ? "3px" : "1px";
        var d = window.AP_POptions.$(
          `<div style="border-bottom: ${thicknessDivider} ${borderStyles} ${dividerColor ? dividerColor : "#000000"
          };"></div>`
        ).addClass("avp-divider");
        return d;
      },
      _createModal: function (option) {
        let divButtonOnModal = document.createElement("div");
        divButtonOnModal.classList.add("avp-modal");
        divButtonOnModal.innerHTML = `
          <div class='apo-modal__title-container'>
            ${option?.popup_image
            ? `<div class='popup-title-image-container' style="border-radius: 2px;">
              <img alt="" data-src="${option?.popup_image}" ${isStoreLazyImg ? "loading='lazy' class='avis-img-lazy'" : `src="${option?.popup_image}"`} height="${option?.image_popup_size || 20
            }" width="${option?.image_popup_size || 20}" />
            </div>`
            : ""
          }
            <span class="apo-modal__title">${option?.title_on_product ?? ""}</span>
          </div>
        `;

        divButtonOnModal.addEventListener("click", function () {
          let modalPopup = AvisOptionsData.createModalPopup(option);
          let body = document.querySelector("body");
          body.append(modalPopup);
        });

        return $(divButtonOnModal);
      },

      _createSizeChart: function (option) {
        let divButtonOnSizeChart = document.createElement("div");
        divButtonOnSizeChart.classList.add("avp-modal");
        divButtonOnSizeChart.classList.add("apo-size__chart");

        divButtonOnSizeChart.innerHTML = `<span class='apo-modal__title apo-title__size-chart'>
        <span class="apo-chart__icon">
          ${option?.chart_icons === true
            ? option?.chart_icon_styles === "light_icon_1" ||
              option?.chart_icon_styles === "dark_icon_1"
              ? `<svg fill="${option?.chart_icon_styles.includes("light")
                ? "#000000"
                : "#ffffff"
              }" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" width="100px" height="100px" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264022"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M427.761,0L0.001,427.76l84.241,84.241L512,84.241L427.761,0z M78.377,484.074l354.899-354.899l-11.032-11.031 L67.347,473.044L22.063,427.76l17.126-17.126l33.905,33.905l11.031-11.032L50.22,399.603l11.495-11.495l11.378,11.378 l11.031-11.032l-11.378-11.378l11.495-11.495l17.01,17.01l11.032-11.031l-17.01-17.01l11.495-11.495l11.378,11.378l11.031-11.032 l-11.378-11.378l11.495-11.495l33.905,33.905l11.031-11.032l-33.904-33.905l11.495-11.495l11.378,11.378l11.031-11.031 l-11.378-11.378l11.495-11.495l17.01,17.01l11.031-11.031l-17.01-17.01l11.495-11.495l11.378,11.378l11.031-11.031l-11.378-11.378 l11.495-11.495L253.3,264.33l11.032-11.031l-33.905-33.905l11.495-11.495l11.378,11.378l11.032-11.031l-11.378-11.378 l11.495-11.495l17.01,17.01l11.032-11.032l-17.01-17.01l11.494-11.494l11.378,11.378l11.032-11.031l-11.378-11.378l11.494-11.494 l33.904,33.904l11.032-11.031l-33.904-33.905l11.494-11.494l11.378,11.378l11.032-11.031l-11.378-11.378l11.494-11.494 l17.009,17.009l11.032-11.031l-17.01-17.01l11.495-11.495l11.379,11.378l11.032-11.032L388.11,61.715l11.495-11.495l33.905,33.904 l11.032-11.031l-33.905-33.905l17.126-17.126l45.283,45.283l-17.01,17.01l11.032,11.031l17.01-17.009l5.863,5.863L84.241,489.937 L78.377,484.074z"></path> </g> </g> <g> <g> <rect x="436.585" y="98.848" transform="matrix(0.6926 -0.7213 0.7213 0.6926 59.7226 353.441)" width="15.93" height="15.601"></rect> </g> </g> </g></svg>`
              : option?.chart_icon_styles === "light_icon_2" ||
                option?.chart_icon_styles === "dark_icon_2"
                ? `<svg fill="${option?.chart_icon_styles.includes("light")
                  ? "#000000"
                  : "#ffffff"
                }" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="100px" height="100px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M95.909,108.194c-13.161,0-23.869,10.707-23.869,23.869s10.708,23.869,23.869,23.869 c13.161,0,23.869-10.707,23.869-23.869C119.779,118.901,109.07,108.194,95.909,108.194z M95.91,140.21 c-4.493,0-8.148-3.656-8.148-8.148c-0.001-4.492,3.655-8.148,8.148-8.148c4.493,0,8.148,3.656,8.148,8.148 C104.058,136.556,100.404,140.21,95.91,140.21z"></path> </g> </g> <g> <g> <path d="M48.027,132.071h15.721c0-17.818,14.335-32.169,32.152-32.169V84.18C69.698,84.18,48.027,105.868,48.027,132.071z"></path> </g> </g> <g> <g> <path d="M152.085,132.071c0,31.443-24.741,56.168-56.184,56.168v15.721c39.828,0,71.906-32.061,71.906-71.889H152.085z"></path> </g> </g> <g> <g> <path d="M416.09,212.252H190.823c0,0,0.997-79.62,0.997-80.189c0-52.885-43.025-95.91-95.91-95.91 C43.024,36.153,0,79.179,0,132.063v104.058c0,52.885,43.025,95.91,95.91,95.91H416.09c22.614,0,43.056,9.423,57.648,24.533 c-7.515,4.639-16.329,7.135-25.629,7.135H270.933v112.146h177.175c35.128,0,63.719-28.137,63.885-63.627H512V308.162 C512,255.277,468.975,212.252,416.09,212.252z M95.91,51.875c44.217,0,80.189,35.973,80.189,80.189s-35.972,80.189-80.189,80.189 s-80.189-35.973-80.189-80.189S51.693,51.875,95.91,51.875z M175.434,185.628l-0.332,26.625h-26.637 C159.116,205.248,168.299,196.186,175.434,185.628z M320.194,460.125h-8.385v-7.337h-15.721v7.337h-9.433v-80.703h9.433v9.433 h15.721v-9.433h8.385V460.125z M472.168,453.57v-17.55h-15.721v23.356c-2.71,0.483-5.494,0.75-8.339,0.75h-8.431V419.25h-15.721 v40.876h-15.721v-24.106h-15.721v24.106h-16.77v-63.934h-15.721v63.934h-24.106v-80.703h112.193 c12.901,0,25.138-3.662,35.447-10.462c8.012,12.45,12.689,27.239,12.72,43.106C496.218,429.564,486.524,445.164,472.168,453.57z M496.279,359.655c-4.969-7.555-10.982-14.362-17.822-20.23v-62.716h-15.721v51.735c-4.666-2.609-9.571-4.835-14.673-6.644v-29.37 H432.34v25.268c-5.285-0.906-10.712-1.388-16.251-1.388h-0.519v-39.601h-15.721v39.602h-16.77V292.43h-15.721v23.881h-15.721 v-64.757h-15.721v64.757h-14.673V292.43h-15.721v23.881h-18.866v-39.602h-15.721v39.602H256.26V292.43h-15.721v23.881h-17.818 v-64.757h-15.721v64.757h-14.673V292.43h-15.721v23.881h-15.721v-39.602h-15.721v39.602h-18.866V292.43h-15.721v23.881H95.91 c-0.003,0-0.006,0-0.009,0v-64.757H80.18v63.198c-5.46-1.09-10.72-2.733-15.721-4.875v-25.832H48.737v16.865 c-2.956-2.158-5.754-4.515-8.385-7.047v-42.309H24.63v21.231c-5.68-10.997-8.909-23.456-8.909-36.664v-51.505 c17.158,26.092,46.693,43.357,80.189,43.357H416.09c44.217,0,80.189,35.973,80.189,80.189V359.655z"></path> </g> </g> <g> <g> <rect x="296.088" y="403.528" width="15.721" height="32.491"></rect> </g> </g> <g> <g> <path d="M24.013,132.072h15.721c0-31.444,24.724-56.183,56.167-56.183V60.167C56.073,60.167,24.013,92.244,24.013,132.072z"></path> </g> </g> <g> <g> <path d="M128.071,132.071c0,17.818-14.353,32.155-32.17,32.155v15.721c26.202,0,47.892-21.674,47.892-47.876H128.071z"></path> </g> </g> </g></svg>`
                : option?.chart_icon_styles === "light_icon_3" ||
                  option?.chart_icon_styles === "dark_icon_3"
                  ? `<svg fill="${option?.chart_icon_styles.includes("light")
                    ? "#000000"
                    : "#ffffff"
                  }" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M488.185,474.254l-330.001-470c-2.506-3.57-7.038-5.103-11.197-3.789S140,5.637,140,10v470c0,5.523,4.477,10,10,10h330 c3.731,0,7.152-2.078,8.873-5.388C490.594,481.301,490.328,477.307,488.185,474.254z M160,470v-30h30v-20h-30v-50h30v-20h-30v-50 h30v-20h-30v-50h30v-20h-30v-50h30v-20h-30V41.645L460.76,470H160z"></path> <path d="M225,400h105c3.788,0,7.25-2.14,8.944-5.528c1.694-3.388,1.328-7.442-0.944-10.472L233,244 c-2.583-3.444-7.078-4.849-11.162-3.487C217.755,241.874,215,245.696,215,250v140C215,395.523,219.477,400,225,400z M235,280 l75,100h-75V280z"></path> <path d="M110,0H10C4.477,0,0,4.477,0,10v470c0,5.523,4.477,10,10,10h100c5.523,0,10-4.477,10-10V10C120,4.477,115.523,0,110,0z M100,470H20v-45h40v-20H20v-60h40v-20H20v-70h40v-20H20v-70h40v-20H20V85h40V65H20V20h80V470z"></path> </g> </g> </g> </g></svg>`
                  : option?.chart_icon_styles === "light_icon_4" ||
                    option?.chart_icon_styles === "dark_icon_4"
                    ? `<svg fill="${option?.chart_icon_styles.includes("light")
                      ? "#000000"
                      : "#ffffff"
                    }" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 446.545 446.545" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M133.639,213.912c1.953,1.953,4.512,2.929,7.071,2.929s5.119-0.976,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143 l-18.611-18.611l26.662-26.662c3.905-3.905,3.905-10.237,0-14.142s-10.237-3.905-14.142,0l-26.661,26.662l-23.419-23.419 l26.662-26.662c3.905-3.905,3.905-10.237,0-14.143c-3.905-3.905-10.237-3.905-14.143,0l-26.662,26.662l-53.3-53.299L76.444,24.23 l123.438,123.438c3.905,3.905,10.237,3.905,14.143,0c3.905-3.905,3.905-10.237,0-14.142L83.54,3.041 C79.644-0.854,73.33-0.865,69.421,3.017L2.953,69.035C1.067,70.909,0.004,73.455,0,76.113s1.049,5.208,2.929,7.088L133.639,213.912 z"></path> <path d="M443.617,363.118L313.019,232.52c-3.905-3.905-10.237-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l123.527,123.526 l-52.101,52.101l-53.323-53.324l26.662-26.662c3.905-3.905,3.905-10.237,0-14.142s-10.237-3.905-14.142,0l-26.661,26.662 l-23.419-23.419l26.662-26.662c3.905-3.905,3.905-10.237,0-14.143s-10.237-3.905-14.143,0l-26.662,26.662l-18.499-18.499 c-3.905-3.904-10.237-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l130.598,130.598c1.953,1.953,4.512,2.929,7.071,2.929 s5.119-0.976,7.071-2.929l66.243-66.243C447.521,373.355,447.521,367.023,443.617,363.118z"></path> <path d="M63.324,61.988c-3.778,3.777-5.858,8.8-5.858,14.143c0,5.342,2.081,10.365,5.858,14.142 c3.777,3.778,8.8,5.858,14.142,5.858s10.365-2.081,14.143-5.858c7.797-7.798,7.797-20.486,0-28.284 c-3.778-3.777-8.8-5.857-14.143-5.857S67.101,58.21,63.324,61.988z"></path> <path d="M384.445,383.109c3.777-3.778,5.858-8.8,5.858-14.142c0-5.342-2.081-10.365-5.858-14.143 c-3.778-3.777-8.8-5.857-14.143-5.857c-5.342,0-10.364,2.08-14.142,5.857c-3.778,3.778-5.858,8.8-5.858,14.143 c0,5.342,2.08,10.364,5.857,14.142c3.778,3.778,8.8,5.858,14.142,5.858C375.645,388.967,380.667,386.887,384.445,383.109z"></path> <path d="M402.429,114.827c0.002-0.002,0.003-0.003,0.005-0.005s0.003-0.003,0.005-0.005l28.645-28.645 c19.495-19.495,19.495-51.216,0-70.711c-9.432-9.431-21.988-14.625-35.355-14.625c-13.368,0-25.924,5.194-35.356,14.626 l-28.64,28.64c-0.003,0.003-0.007,0.006-0.01,0.009s-0.006,0.007-0.009,0.01l-35.342,35.342c-0.001,0.001-0.003,0.002-0.004,0.004 s-0.002,0.003-0.004,0.004L67.16,308.674c-0.019,0.019-0.034,0.042-0.053,0.061c-0.306,0.312-0.59,0.643-0.853,0.991 c-0.057,0.075-0.108,0.153-0.163,0.23c-0.229,0.323-0.441,0.657-0.631,1.004c-0.021,0.039-0.05,0.073-0.071,0.112l-37.247,70.484 c-0.019,0.035-0.038,0.07-0.056,0.106L1.996,431.036c-2.05,3.879-1.332,8.641,1.77,11.744c1.923,1.922,4.482,2.929,7.074,2.929 c1.591,0,3.194-0.379,4.669-1.159l49.379-26.094c0.032-0.016,0.063-0.033,0.095-0.05l70.489-37.25 c0.019-0.01,0.036-0.024,0.055-0.034c0.384-0.207,0.753-0.441,1.107-0.695c0.062-0.045,0.124-0.089,0.185-0.135 c0.347-0.262,0.677-0.545,0.989-0.851c0.02-0.02,0.044-0.035,0.064-0.055L402.429,114.827z M62.137,397.288l-12.88-12.88 l21.055-39.842l4.323,19.719c0.011,0.051,0.032,0.098,0.044,0.149c0.087,0.372,0.196,0.738,0.326,1.1 c0.025,0.069,0.046,0.138,0.072,0.206c0.154,0.401,0.334,0.793,0.542,1.176c0.032,0.059,0.069,0.114,0.102,0.172 c0.178,0.313,0.376,0.617,0.591,0.913c0.062,0.085,0.122,0.17,0.186,0.253c0.257,0.332,0.53,0.656,0.834,0.961 c0.305,0.305,0.629,0.578,0.962,0.835c0.082,0.063,0.166,0.123,0.25,0.184c0.298,0.216,0.604,0.415,0.919,0.595 c0.056,0.032,0.109,0.067,0.166,0.098c0.384,0.209,0.778,0.389,1.18,0.544c0.066,0.025,0.133,0.046,0.199,0.07 c0.364,0.131,0.734,0.241,1.109,0.329c0.049,0.012,0.095,0.032,0.145,0.043l19.718,4.322L62.137,397.288z M104.399,356.288 l36.76-36.761c3.905-3.905,3.905-10.237,0-14.142s-10.237-3.905-14.142,0l-36.76,36.76l-5.086-23.198l218.268-218.267 l14.142,14.142L151.135,281.267c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.953,4.512,2.929,7.071,2.929 c2.559,0,5.119-0.977,7.071-2.929l166.445-166.445l14.142,14.142L127.597,361.374L104.399,356.288z M338.794,65.326l42.426,42.426 l-21.213,21.213l-42.426-42.426L338.794,65.326z M374.515,29.605c5.654-5.655,13.188-8.769,21.213-8.769 c8.025,0,15.559,3.114,21.212,8.768c11.697,11.697,11.697,30.729,0,42.426l-21.578,21.578l-42.426-42.426L374.515,29.605z M39.478,402.914l4.154,4.154l-8.809,4.655L39.478,402.914z"></path> </g> </g></svg>`
                    : `<svg fill="${option?.chart_icon_styles.includes("light")
                      ? "#000000"
                      : "#ffffff"
                    }" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 373 373" xml:space="preserve" transform="rotate(180)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M369,70.664H4c-2.209,0-4,1.791-4,4v69c0,2.209,1.791,4,4,4h292v150.672c0,2.209,1.791,4,4,4h69c2.209,0,4-1.791,4-4 V74.664C373,72.455,371.209,70.664,369,70.664z M292,139.664v-8h-8v8h-7.706v-13.062h-8v13.062h-7.706v-8h-8v8h-7.706v-8h-8v8 h-7.706v-8h-8v8h-7.705v-13.062h-8v13.062h-7.706v-8h-8v8h-7.706v-8h-8v8h-7.706v-8h-8v8h-7.706v-13.062h-8v13.062h-7.706v-8h-8v8 h-7.705v-8h-8v8h-7.706v-8h-8v8h-7.706v-13.062h-8v13.062h-7.706v-8h-8v8h-7.706v-8h-8v8h-7.705v-8h-8v8H25v-13.062h-8v13.062H8 v-61h9v12.063h8V78.664h7.706v7h8v-7h7.705v7h8v-7h7.706v7h8v-7h7.706v12.063h8V78.664h7.706v7h8v-7h7.706v7h8v-7h7.705v7h8v-7 h7.706v12.063h8V78.664h7.706v7h8v-7h7.706v7h8v-7h7.706v7h8v-7h7.706v12.063h8V78.664h7.705v7h8v-7h7.706v7h8v-7h7.706v7h8v-7 h7.706v12.063h8V78.664H284v7h8v-7h7.882v7h8v-7h7.706v7h8v-7h7.706v12.063h8V78.664h20.05l-61,61H292z M304,294.336V145.32l61-61 v210.016H304z"></path> <path d="M30.5,96.164c-6.893,0-12.5,5.607-12.5,12.5c0,6.893,5.607,12.5,12.5,12.5c6.893,0,12.5-5.607,12.5-12.5 C43,101.771,37.393,96.164,30.5,96.164z M30.5,113.164c-2.482,0-4.5-2.019-4.5-4.5c0-2.481,2.018-4.5,4.5-4.5 c2.481,0,4.5,2.019,4.5,4.5C35,111.146,32.981,113.164,30.5,113.164z"></path> <path d="M349.5,110.664c-6.893,0-12.5,5.607-12.5,12.5c0,6.892,5.607,12.5,12.5,12.5c6.892,0,12.5-5.607,12.5-12.5 C362,116.271,356.392,110.664,349.5,110.664z M349.5,127.664c-2.482,0-4.5-2.019-4.5-4.5c0-2.481,2.018-4.5,4.5-4.5 c2.481,0,4.5,2.019,4.5,4.5C354,125.646,351.981,127.664,349.5,127.664z"></path> <path d="M356.227,148.352h-43.453c-2.209,0-4,1.791-4,4v134.313c0,2.209,1.791,4,4,4h43.453c2.209,0,4-1.791,4-4V152.352 C360.227,150.143,358.435,148.352,356.227,148.352z M337.75,156.352v126.313h-6.5V156.352H337.75z M316.773,156.352h6.477v126.313 h-6.477V156.352z M352.227,282.664h-6.477V156.352h6.477V282.664z"></path> </g> </g></svg>`
            : ""
          }
        </span>
        ${option?.chart_title ?? ""}</span>`;

        divButtonOnSizeChart.addEventListener("click", function () {
          let modalSizeChart = AvisOptionsData.createModalSizeChart(option);
          let body = document.querySelector("body");
          body.append(modalSizeChart);
        });

        return $(divButtonOnSizeChart);
      },

      _createEmailInput: function (
        elemOptionAvisContainer,
        productId,
        labelCart,
        placeholder,
        required,
        defaultValue,
        id,
        option,
      ) {
        var elemEmailInput = document.createElement("input");
        elemEmailInput.setAttribute("type", "text");
        elemEmailInput.setAttribute("field-name", labelCart);
        elemEmailInput.setAttribute(
          "name",
          isNotUseAvisHidden ? `properties[${labelCart}]` : labelCart
        );
        elemEmailInput.setAttribute("id", id);
        elemEmailInput.setAttribute("value-email-input", "");
        elemEmailInput.setAttribute("autocomplete", "off");

        if (option?.option_values?.[0]?.soldout) {
          elemEmailInput.setAttribute("disabled", "");
          elemEmailInput.classList.add(AVIS_CLASS.soldOutOption);
        }

        elemEmailInput.classList.add("avp-productdescfont");
        elemEmailInput.classList.add("avp-productoptiontextcolor");
        elemEmailInput.classList.add("avp-productoptionbackground");

        elemEmailInput.removeEventListener("input", (event) =>
          e.handleChangeElement(elemOptionAvisContainer, productId, option, event)
        );
        elemEmailInput.addEventListener("input", (event) => {
          e.handleChangeElement(elemOptionAvisContainer, productId, option, event);
        });

        var textField = document.createElement("span");
        textField.classList.add("apo-text-field");
        textField.appendChild(elemEmailInput);

        let elemInputJq = window.AP_POptions.$(elemEmailInput);
        return (
          void 0 !== placeholder &&
          "" !== placeholder &&
          elemInputJq.prop("placeholder", placeholder),
          required && elemInputJq.prop("required", required),
          defaultValue && elemInputJq.val(defaultValue),
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            labelCart,
            defaultValue
          ),
          textField ? window.AP_POptions.$(textField) : elemInputJq
        );
      },
      _createSwatch: function (
        elemOptionAvisContainer,
        productId,
        t,
        n,
        i,
        o,
        quantityDefault
      ) {
        let isColor = typeof t.is_color === 'boolean' ? t.is_color : n.swatch.is_color;
        if (["swatch_single_image", "swatch_multi_image"].includes(t.type)) {
          isColor = false;
        } else if (["swatch_single_color", "swatch_multi_color"].includes(t.type)) {
          isColor = true;
        }
        let imageUrl = n.swatch.file_image_url;
        if (isColor) imageUrl = "";
        if (t.option_url === OPTION_URL.group && !imageUrl)
          imageUrl = n.url_image;
        var r = priceMod.getValueText(n, t),
          a = !isColor
            ? isStoreLazyImg ? "" : "background-image: url('" + (imageUrl ?? "") + "');"
            : `background:${n.swatch.color};`,
          swatchShape =
            t?.swatch_shape === "circle"
              ? "border-radius: 50% !important;"
              : "",
          s = window.AP_POptions.$(
            `<label class="avp-productoptionswatchwrapper apo-swatch-wrapper ${t.type.indexOf("swatch") > -1 &&
              priceMod.isHiddenSwatchTitle(t)
              ? " avp-hiddenvarianttitleswatch" : ""}"></label>`
          ),
          addImg = "",
          hiddenHoverImg = customizeryConfig?.hide_hover_img_swatches
            ? " hover-img-hidden-mobile"
            : "";

        let isHoverImageOld = !isColor && imageUrl && (t.allow_hover_img === "true" || customizeryConfig?.customize_options?.swatch?.hover_image);
        if (isHoverImageOld) {
          addImg = `<img data-src="${imageUrl ?? ""}" ${isStoreLazyImg ? "loading='lazy' class='avis-img-lazy'" : `src="${imageUrl ?? ""}"`} />`;
        }
        if (n?.soldout) {
          s.addClass(AVIS_CLASS.soldOutOption);
          s.attr("title", AVIS_SOLD_OUT);
        }

        let swatchItem = `<span class="avp-productoptionswatch ${isStoreLazyImg ? "avis-lazy-bg" : ""}" data_src_hidden="${n.swatch?.file_image_url_hidden}" data-src="${isColor ? "" : imageUrl ?? ""
          }" style="${a}${swatchShape}"><span class='apo-color-image'>&nbsp;</span></span>`;

        let rootUrl = "";
        if (["90167836990"].includes(shop_id)) {
          rootUrl = Shopify?.routes?.root?.replace(/^\/|\/$/g, "") || "";
        }

        let sanitizedUrl = typeof n?.url === "string" ? n?.url?.trim() : "";
        let valueUrl = rootUrl ? `/${rootUrl}${sanitizedUrl}` : sanitizedUrl;
        let isOnlyUrl =
          t.option_url === OPTION_URL.group || t.option_url === OPTION_URL.only;
        if (valueUrl && isOnlyUrl) {
          swatchItem = `<a class="apo-swatch-a" href="${valueUrl}">${swatchItem}</a>`;
        }
        let textTooltipSwatch = "";
        let isShowTooltip = false;
        if (t.tooltip_display === "value") {
          textTooltipSwatch = n.value;
          isShowTooltip = true;
        } else if (t.tooltip_display === "desc") {
          textTooltipSwatch = n.des_value;
          isShowTooltip = true;
        }
        if (isDesignV2) {
          if (customizeryConfig?.customize_options?.swatch?.other?.show_image_when_hover) {
            if (!isColor) isShowTooltip = true;
          }
          else imageUrl = "";
        }

        let tooltipSwatch = "";
        let tooltipPrice = "";
        if (n?.price > 0) {
          tooltipPrice = priceMod.formatMoney(parseFloat(n?.price), true);
        }
        if (!t?.slider?.status && !isDesignV2 && !convertTooltipBody) {
          if (isShowTooltip) {
            if (imageUrl)
              tooltipSwatch = `<span class='apo-tooltip-img ${isStoreLazyImg ? "avis-lazy-bg" : ""}' ${isStoreLazyImg ? `data-src="${imageUrl}"` : `style="background-image: url('${imageUrl}');"`}>&nbsp;</span>`;
            if (textTooltipSwatch) {
              let customTextTooltipSwatch = textTooltipSwatch;
              if (shop_id === '65999732917' && tooltipPrice) {
                customTextTooltipSwatch += ` <span class="money apo-tooltip-money">(+${tooltipPrice})</span>`;
              }
              if (shop_id === '10278593' && tooltipPrice) {
                customTextTooltipSwatch += ` <span class="money apo-tooltip-money">(${tooltipPrice})</span>`;
              }
              tooltipSwatch += `<span class='apo-tooltip-title'>${customTextTooltipSwatch}</span>`;
            }
            tooltipSwatch = `<div class='apo-swatch-tooltip apo-swatch-tooltip-top'>${tooltipSwatch}</div>`;
            tooltipSwatch +=
              "<span class='apo-swatch-arrow apo-swatch-arrow-top'></span>";
          } else if (addImg) {
            // old
            tooltipSwatch = addImg;
          }
        }
        let p = window.AP_POptions.$(
          tooltipSwatch
            ? `<div class="${isShowTooltip
              ? "apo-swatch-wrapper-tooltip"
              : "apo-swatch-only-img"
            } avp-productoptionswatch-box${hiddenHoverImg}">${swatchItem}${tooltipSwatch}</div>`
            : swatchItem
        );
        if (isShowTooltip) {
          e.hoverTooltip(p[0]);
        }
        var c =
          t.allow_multiple == "true"
            ? e._createCheckboxButton(
              elemOptionAvisContainer,
              productId,
              t,
              n,
              !1,
              o,
              quantityDefault
            )
            : e._createRadioButton(
              elemOptionAvisContainer,
              productId,
              t,
              n,
              !1,
              o,
              quantityDefault,
              isOnlyUrl
            );

        let valueWrapper = null;
        if (i) {
          let valueElement = s
            .append(
              priceMod.attachData(c, t.label_cart, n, r.display, t, productId)
            )
            .append(p)
            .append(
              t.type.indexOf("swatch") > -1 && priceMod.isHiddenSwatchTitle(t)
                ? window.AP_POptions.$(r.display).css({ display: "none" }).prop("outerHTML")
                : r.display
            );
          if ((t?.value_check_quantity?.includes(n?.value_id) && t.show_option_value_qty) || (t.show_option_value_qty && !t["value_check_quantity"])) {
            let currentlyNotInStock = priceMod.productVariantAC?.find(obj => obj?.id === n?.productVariationId)?.currentlyNotInStock;
            let qtyAvailable = priceMod.productVariantAC?.find(obj => obj?.id === n?.productVariationId)?.quantityAvailable;
            let stockMax;
            if (["78778761563"].includes(shop_id) && !currentlyNotInStock && Number(qtyAvailable)) {
              stockMax = qtyAvailable;
            }
            valueWrapper = e._createQuantity(
              elemOptionAvisContainer,
              productId,
              valueElement,
              t.min_value_qty,
              t.max_value_qty ?? stockMax,
              quantityDefault
            );
          } else valueWrapper = valueElement;
        }
        const currentlyNotInStock = priceMod.productVariantAC?.find(obj => obj?.id === n?.productVariationId)?.currentlyNotInStock;
        let qtyAvailable = priceMod.productVariantAC?.find(obj => obj?.id === n?.productVariationId)?.quantityAvailable;
        if (['72331198714', '60173221974', '85588181272', '62129143868'].includes(window.ap_front_settings.shop_id) &&
          qtyAvailable
        ) {
          if (window.ap_front_settings.shop_id === "72331198714" && !currentlyNotInStock) {
            let stockText = window.AP_POptions.$(`<span class="avis-stock-text">${qtyAvailable} in stock</span>`);
            s.append(stockText);
          }
        }

        return i ? valueWrapper : c;
      },
      createRadioList: function (
        elemOptionAvisContainer,
        productId,
        e,
        t,
        n,
        optionDefaultValues,
        createRadioButton
      ) {
        t.attr("id", n).removeAttr("for");
        var o = [];
        let indexValue = -1;
        let indexSetDefault = 0;
        let isSetDefault = false;
        let quantityDefault = -1;
        let isOnlyUrl =
          e.option_url === OPTION_URL.group || e.option_url === OPTION_URL.only;
        return (
          e.option_values &&
          window.AP_POptions.$.each(e.option_values, function () {
            let optionValue = this;
            indexValue += 1;
            if (isOnlyUrl) {
              let handle = optionValue?.url?.split("/").pop();
              if (
                optionValue.url_id === productId ||
                (optionValue?.url_id && String(optionValue?.url_id) ===
                  String(window.ap_front_settings?.product_info?.product?.id ?? "")) ||
                handle ===
                window.ap_front_settings?.product_info?.product?.handle
              ) {
                indexSetDefault = indexValue;
                isSetDefault = true;
              }
            } else {
              if (
                optionDefaultValues &&
                optionDefaultValues.indexOf(optionValue["value_id"]) > -1
              ) {
                indexSetDefault = indexValue;
                isSetDefault = true;
              } else if (optionDefaultValues) {
                let arrValueDefault = optionDefaultValues.split(",");
                for (let value of arrValueDefault) {
                  let arrValue = value.split(" * ");
                  let newValue = arrValue[0].trim();
                  if (optionValue.value.trim() === newValue) {
                    indexSetDefault = indexValue;
                    isSetDefault = true;
                    if (arrValue.length > 1)
                      quantityDefault = parseInt(arrValue[1]);
                  }
                }
              }
            }

            o.push(
              createRadioButton(
                elemOptionAvisContainer,
                productId,
                e,
                this,
                !0,
                function (t) {
                  priceMod.variantChange(
                    e.label_cart,
                    $(o).map(function () {
                      return $(this).find("input").first();
                    }),
                    productId
                  );
                },
                quantityDefault,
                isOnlyUrl
              )
            );
          }),
          o.length &&
          o[indexSetDefault].find("input:not(:disabled)").each(function () {
            if (isSetDefault) $(this).prop("checked", "checked");
            if (
              priceModAll[productId].radioInput &&
              priceModAll[productId].radioInput[e.label_cart]
            ) {
              priceModAll[productId].radioInput[e.label_cart].value = "";
            }
            $(this).trigger("change", ["onLoad"]);
          }),
          o
        );
      },
      createCheckboxList: function (
        elemOptionAvisContainer,
        productId,
        t,
        n,
        optionDefaultValues,
        i
      ) {
        var o = window.AP_POptions.$("<fieldset></fieldset>");

        if (
          t?.type !== "combo_box" ||
          t?.type !== "combo_image" ||
          t?.type !== "combo_color" ||
          t?.type !== "combo_select"
        ) {
          o.append(
            window.AP_POptions.$("<legend></legend>")
              .attr(
                "style",
                "position: absolute !important;top: 0;clip: rect(1px, 1px, 1px, 1px) !important;overflow: hidden !important;height: 1px !important;width: 1px !important;padding: 0 !important;border: 0 !important;"
              )
              .text(t.label_product || "")
          );
        }

        n.removeAttr("for"), t.required && o.attr("apo-required", "true");
        var r = e._createHiddenInput(
          elemOptionAvisContainer,
          productId,
          t.label_cart
        );
        let isHasDefaultValue = false;
        let minTotalQuantity = 0;
        let maxTotalQuantity = 0;
        var desMinMax = null;
        if (t.show_option_value_qty && t.check_total_qty) {
          minTotalQuantity = parseInt(t.min_total_qty, 10);
          maxTotalQuantity = parseInt(t.max_total_qty, 10);

          if (maxTotalQuantity) o.attr("max_total_qty", maxTotalQuantity);

          if (minTotalQuantity > 0 || maxTotalQuantity > 0) {
            desMinMax = window.AP_POptions.$(
              "<p class='avp-productdescfont avp-productdesctextcolor avp-min-max-total'></p>"
            );
          }
        }
        return (
          o.append(r),
          t.option_values &&
          window.AP_POptions.$.each(t.option_values, function () {
            let valueDefault = false;
            let quantityDefault = -1;
            let optionValue = this;

            if (
              optionDefaultValues &&
              optionDefaultValues.indexOf(optionValue["value_id"]) > -1
            ) {
              valueDefault = true;
              isHasDefaultValue = true;
            } else if (optionDefaultValues) {
              let arrValueDefault = optionDefaultValues.split(",");
              for (let value of arrValueDefault) {
                let arrValue = value.split(" * ");
                let newValue = arrValue[0].trim();
                if (optionValue.value.trim() === newValue) {
                  valueDefault = true;
                  isHasDefaultValue = true;
                  if (arrValue.length > 1)
                    quantityDefault = parseInt(arrValue[1]);
                }
              }
            }
            let checkBoxItem = i(
              elemOptionAvisContainer,
              productId,
              t,
              this,
              !0,
              valueDefault,
              quantityDefault
            );

            if (optionValue.soldout) {
              checkBoxItem.addClass(AVIS_CLASS.soldOutOption);
              checkBoxItem.attr("title", AVIS_SOLD_OUT);
            }
            o.append(checkBoxItem);
          }),
          t.max_selections &&
          parseInt(t.max_selections, 10) > 0 &&
          o.data("max_selections", t.max_selections),
          t.min_selections &&
          parseInt(t.min_selections, 10) > 0 &&
          o.data("min_selections", t.min_selections),
          t.max_selections &&
          parseInt(t.max_selections, 10) > 0 &&
          o.data("max_selections", t.max_selections),
          t.show_option_value_qty && minTotalQuantity > 0 && o.data("min_total_qty", minTotalQuantity),
          t.show_option_value_qty && maxTotalQuantity > 0 && o.data("max_total_qty", maxTotalQuantity),
          desMinMax && (o = o.append(desMinMax)),
          o.on("change", async function () {
            let elemOnChange = this;
            if (elemOnChange.localName != "fieldset") return;
            var n = window.AP_POptions.$(this).find('input[type="checkbox"]');

            let divRequired = $(this).closest("div[apo-required='true']");

            if (divRequired) {
              window.AP_POptions.apps.productoptions.toggleInputError(
                divRequired,
                !0
              );
            }

            p_disabled(t, o, n),
              priceMod.variantChange(t.label_cart, n, productId),
              window.AP_POptions.apps.productoptions.toggleInputError(o, !0);

            var i = n
              .filter(":checked")
              .map(function () {
                return this.value;
              })
              .get()
              .join(",");

            r.val(i),
              await createAvisContainerHidden(
                elemOptionAvisContainer,
                productId,
                t.label_cart,
                i,
                $(elemOnChange),
                "fieldset"
              ),
              eventApi.fieldChange({
                name: t.label_cart,
                value: i,
                element: $(this).closest("div"),
              });

            e._createTotalAdd(elemOptionAvisContainer, productId);
            findButtonAddCart(elemOptionAvisContainer, productId);
          }),
          isHasDefaultValue && o.trigger("change"),
          o
        );
      },

      createComboBox: function (
        elemOptionAvisContainer,
        productId,
        t,
        n,
        optionDefaultValues,
        i
      ) {
        function createLegend(text) {
          return window.AP_POptions.$("<legend></legend>")
            .attr(
              "style",
              "position: absolute !important; top: 0; clip: rect(1px, 1px, 1px, 1px) !important; overflow: hidden !important; height: 1px !important; width: 1px !important; padding: 0 !important; border: 0 !important;"
            )
            .text(text || "");
        }

        function createCheckboxList() {
          return e.createCheckboxList(
            elemOptionAvisContainer,
            productId,
            t,
            n,
            optionDefaultValues,
            i
          );
        }

        function updateSpanElements() {
          const checkedElements = window.AP_POptions.$(
            `.combo_${classType}-modal-${t.label_cart?.replace(
              /[^\p{L}\p{N}]/gu,
              ""
            )}`
          ).find('input[type="checkbox"]:checked');

          const spanElements = checkedElements
            .map((_, item) => {
              const variantString = item?.value || "";
              const closeSvg = window.AP_POptions.$(
                "<div class='option-avis-close-btn'></div>"
              )
                .html(
                  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#727580" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`
                )
                .click(function () {
                  let resultItem = $(this).parent(".combo_option-result-item");
                  if (!resultItem?.length) return;

                  let valueItem = resultItem?.attr("data-value");
                  let optionSelector = $(this).parents(".avp-option");
                  if (!optionSelector?.length) return;

                  for (let item of optionSelector[0].querySelectorAll(
                    'input[type="checkbox"]:checked'
                  )) {
                    if (item.value === valueItem) {
                      item.checked = false;
                      $(item).trigger("change");
                    }
                  }
                  resultItem.remove();
                });

              let result = document.createElement("div");
              result.classList.add("combo_option-result-item");
              result.classList.add(t.type + "-result-item");
              result.setAttribute("data-value", variantString);

              let labelCheckbox = item.closest(
                "label.avp-productoptioncheckwrapper"
              );
              if (labelCheckbox) {
                let valueDisplay = labelCheckbox.querySelector(
                  `.option-avis-combo_${classType}-box`
                );
                if (valueDisplay) {
                  let clone = valueDisplay.cloneNode(true);
                  result.appendChild(clone);
                }

                let swatchDisplay = labelCheckbox.querySelector(
                  ".choice-list-variatnt-title"
                );
                if (swatchDisplay) {
                  let clone = swatchDisplay.cloneNode(true);
                  if (t.show_option_value_qty) {
                    let itemQty =
                      item
                        .closest(".avp-value-grid")
                        ?.querySelector(".avp-qty-input")?.value ?? 1;
                    clone.innerHTML =
                      clone.innerHTML +
                      ` * <span class="avp-qty-result">${itemQty}</span>`;
                  }
                  result.appendChild(clone);
                }
              }
              return $(result).append(closeSvg);
            })
            .get();

          newDiv.empty();
          spanElements.forEach((div) => newDiv.append(div));
        }

        const classTypeMap = {
          combo_box: "box",
          combo_select: "select",
          combo_color: "color",
          combo_image: "image",
        };
        const classType = classTypeMap[t.type] || "";

        const o = window.AP_POptions.$("<div></div>").append(
          createLegend(t.label_product || "")
        );

        const checkboxList = createCheckboxList();
        n.removeAttr("for");

        if (t.required) {
          o.attr("apo-required", "true");
        }

        const newDiv = window.AP_POptions.$(
          `<div class='combo_option-results ${t.type}-results'></div>`
        );

        $(document).ready(updateSpanElements);
        const comboBoxSelect = window.AP_POptions.$(
          `<div class='combo_input-container ${t.type}-container'></div>`
        )
          .append((t?.enabled_search) ?
            window.AP_POptions.$("<input class='combo_input-search' />")
              .attr("placeholder", t.placeholder || "")
              .on("input click", function (event) {
                event.stopPropagation();
                $(
                  `.combo_${classType}-modal-${t.label_cart?.replace(
                    /[^\p{L}\p{N}]/gu,
                    ""
                  )}`
                ).show();
                const value = event.target.value.toLowerCase();
                const labels = checkboxList.find("label.avp-productoptioncheckwrapper");
                labels.each(function (_, item) {
                  if (!item) return;
                  const text = item.querySelector(".choice-list-variatnt-title").textContent.toLowerCase();
                  if (value === '' || text.includes(value)) {
                    if (t?.type === "combo_box") {
                      item.style.display = "grid";
                      item.closest(".avp-value-grid") && (item.closest(".avp-value-grid").style.display = "flex");
                    } else {
                      item.style.display = "flex";
                      item.closest(".avp-value-grid") && (item.closest(".avp-value-grid").style.display = "flex");
                    }
                  } else {
                    item.style.cssText = "display: none !important;";
                    item.closest(".avp-value-grid") && (item.closest(".avp-value-grid").style.cssText = "display: none !important;");
                  }
                });
              })
            :
            window.AP_POptions.$(`<span class='${t.type}-placeholder'>${t.placeholder ? t.placeholder : "&nbsp;"}</span>`)
          )
          .append(
            window.AP_POptions.$(
              "<span class='option-avis-arrow-select'></span>"
            )
              .css("position", "relative")
              .css("right", "0")
              .css("top", "0")
          )
          .click(function (event) {
            event.stopPropagation();

            $(".combo_modal")
              .not(
                `.combo_${classType}-modal-${t.label_cart?.replace(
                  /[^\p{L}\p{N}]/gu,
                  ""
                )}`
              )
              .hide();
            $(
              `.combo_${classType}-modal-${t.label_cart?.replace(
                /[^\p{L}\p{N}]/gu,
                ""
              )}`
            ).toggle();
          });

        o.append(comboBoxSelect);

        const comboBoxModal = window.AP_POptions.$("<div></div>")
          .css("position", "relative")
          .append(
            window.AP_POptions.$(
              `<div class='combo_modal combo_select-option combo_${classType}-modal combo_${classType}-modal-${t.label_cart?.replace(
                /[^\p{L}\p{N}]/gu,
                ""
              )}'></div>`
            )
              .append(checkboxList)
              .click(function (event) {
                event.stopPropagation();
              })
              .hide()
          );

        o.append(comboBoxModal, newDiv);

        o.find("label.avp-productoptioncheckwrapper input[type=checkbox]").on("change", async function (event) {
          updateSpanElements();
          e.eventListnerSwatchPersonalizer(event.target?.getAttribute("value-id"), t, event.target?.getAttribute("value-id"), -1, event?.target?.checked ?? false);
          priceMod.variantChange(t.label_cart, $(this), productId);
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            t.label_cart,
            event.target.value,
            $(this)
          );
        });

        $(document).click(function () {
          $(".combo_modal").hide();
        });

        if (["combo_color", "combo_image"].includes(t?.type)) {
          let ulSelector = o.find("fieldset");
          e.addEventTooltipBody(ulSelector[0], t);
        }

        return o;
      },

      showAddChargeTitle: function (option) {
        let isType = checkOptionAddCharge(option.type);

        return (
          isType &&
          option.option_values &&
          option.option_values.find(x => x.is_exist)
        );
      },
      genOptionTitleHtml: function (option) {
        if (!option.label_product) return "";
        let required = "";
        if (option.required) {
          required = '<div class="avp-required">*</div>';
        }
        let priceHtml = "";
        if (!option.hide_price) {
          if (
            (e.showAddChargeTitle(option) && option.type !== "quantity") ||
            (option.type === "quantity" && option.option_show_price !== "only_value")) {
            let priceAddCharge = parseFloat(option?.option_values?.[0]?.price);
            let comparePriceAddCharge = parseFloat(option?.option_values?.[0]?.compare_at_price);
            let formatPrice = priceMod.formatMoney(parseFloat(priceAddCharge), true);
            let formatComparePrice = priceMod.formatMoney(parseFloat(comparePriceAddCharge), true);

            priceHtml = `<span avis-price='${priceAddCharge}' avis-price-compare='${comparePriceAddCharge}' class="apo-title-addcharge">(+${formatPrice} ${comparePriceAddCharge !== 0 && customizeryConfig?.product_page?.show_compare_at_price && formatComparePrice ? `<span class="apo-compare-price"> - <span class="apo-title-addcharge">${formatComparePrice}</span></span>` : ""})</span>`;
          }
          else if (option.option_show_price === "only_label" || option.option_show_price === "all" || option.type === "slider" || ["75520278748"].includes(shop_id)) {
            // if (!priceMod.isHiddenSwatchTitle(option) || (priceMod.isHiddenSwatchTitle(option) && option.option_show_price === "only_label")) {
            priceHtml = `<span class='apo-title-addcharge' use-addcharge='true'></span>`;
            // }
          }
          if (
            option.type === "quantity" &&
            option.option_show_price !== "only_value"
          ) {
            if (!priceMod.isHiddenSwatchTitle(option) || (priceMod.isHiddenSwatchTitle(option) && option.option_show_price === "only_label")) {
              priceHtml = `<span class='apo-title-addcharge' use-addcharge='true'></span>`;
            }
          }
        }

        let valueHtml = "";
        if (priceMod.isHiddenSwatchTitle(option) ||
          option?.show_selected_on_label ||
          (shop_id === "76422709501" && option?.type?.includes("swatch")) ||
          (shop_id === "86070198599" && option?.type?.includes("button"))
        ) {
          valueHtml = `<span class='apo-title-value'></span>`;
        }

        let titleHtml = `<span class='apo-title'>${option.label_product}</span>${required}${window.ap_front_settings?.shop_id === "70071189821" ? priceHtml + valueHtml : valueHtml + priceHtml}`;

        return titleHtml;
      },
      getArrowIconSlider: function (option) {
        const keyConfig = ["button_single", "button_multi"].includes(option?.type) ? "button" : "swatch";
        const customizeOptions = window?.ap_front_settings?.config?.config_app?.customize_options ?? {};
        const arrowIconKey = customizeOptions[keyConfig]?.arrow_icon?.style_icon;
        switch (arrowIconKey) {
          case "style-1":
            return {
              left: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9781 4.96673C12.3035 5.29217 12.3035 5.81981 11.9781 6.14525L8.1229 10.0004L11.9781 13.8556C12.3035 14.1811 12.3035 14.7087 11.9781 15.0341C11.6527 15.3596 11.125 15.3596 10.7996 15.0341L6.35513 10.5897C6.0297 10.2643 6.0297 9.73662 6.35513 9.41118L10.7996 4.96673C11.125 4.6413 11.6527 4.6413 11.9781 4.96673Z" fill="currentColor"/>
                      </svg>`,
              right: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46625 15.0333C7.14081 14.7078 7.14081 14.1802 7.46625 13.8548L11.3214 9.99957L7.46625 6.14438C7.14081 5.81894 7.14081 5.2913 7.46625 4.96587C7.79168 4.64043 8.31932 4.64043 8.64476 4.96587L13.0892 9.41031C13.4146 9.73575 13.4146 10.2634 13.0892 10.5888L8.64476 15.0333C8.31932 15.3587 7.79168 15.3587 7.46625 15.0333Z" fill="currentColor"/>
                    </svg>`
            };
          case "style-2":
            return {
              left: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 10.0004C17.5 10.4607 17.1269 10.8338 16.6667 10.8338L5.90087 10.8338L8.923 13.8556C9.24845 14.181 9.24848 14.7087 8.92306 15.0341C8.59764 15.3596 8.07 15.3596 7.74455 15.0342L3.29966 10.5897C3.14336 10.4334 3.05555 10.2215 3.05555 10.0004C3.05555 9.7794 3.14336 9.56743 3.29966 9.41115L7.74455 4.9667C8.07 4.64128 8.59764 4.64131 8.92306 4.96676C9.24848 5.29222 9.24845 5.81985 8.923 6.14527L5.90087 9.1671L16.6667 9.1671C17.1269 9.1671 17.5 9.5402 17.5 10.0004Z" fill="currentColor"/>
                    </svg>`,
              right: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.77734 9.99957C2.77734 9.53933 3.15044 9.16623 3.61068 9.16623L14.3769 9.16623L11.3548 6.14441C11.0293 5.81899 11.0293 5.29135 11.3547 4.9659C11.6801 4.64044 12.2078 4.64042 12.5332 4.96584L16.9781 9.41028C17.1344 9.56656 17.2222 9.77854 17.2222 9.99957C17.2222 10.2206 17.1344 10.4326 16.9781 10.5889L12.5332 15.0333C12.2078 15.3587 11.6801 15.3587 11.3547 15.0332C11.0293 14.7078 11.0293 14.1801 11.3548 13.8547L14.3769 10.8329L3.61068 10.8329C3.15044 10.8329 2.77734 10.4598 2.77734 9.99957Z" fill="currentColor"/>
                    </svg>`
            };
          case "style-3":
            return {
              left: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5713 17.5035L5.37124 10.727C4.87625 10.2611 4.87625 9.4745 5.37124 9.00864L12.5713 2.23208C13.1123 1.72295 14 2.10646 14 2.84936L14 16.8861C14 17.6291 13.1123 18.0126 12.5713 17.5035Z" fill="currentColor"/>
                    </svg>`,
              right: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.42872 2.49652L14.6288 9.27303C15.1237 9.73888 15.1237 10.5255 14.6288 10.9914L7.42872 17.7679C6.88771 18.2771 6 17.8935 6 17.1506L6 3.11386C6 2.3709 6.88771 1.98739 7.42872 2.49652Z" fill="currentColor"/>
                    </svg>`
            };
          case "style-4":
            return {
              left: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 18C14.2992 18 18 14.2992 18 9.75C18 5.2008 14.2992 1.5 9.75 1.5C5.2008 1.5 1.5 5.2008 1.5 9.75C1.5 14.2992 5.2008 18 9.75 18ZM7.20143 9.26393L10.6389 5.82645C10.773 5.69239 10.949 5.625 11.125 5.625C11.301 5.625 11.477 5.69239 11.6111 5.82645C11.8799 6.09525 11.8799 6.52976 11.6111 6.79856L8.65961 9.75L11.6111 12.7014C11.8799 12.9702 11.8799 13.4047 11.6111 13.6736C11.3422 13.9424 10.9077 13.9424 10.6389 13.6736L7.20143 10.236C6.93262 9.96724 6.93262 9.53276 7.20143 9.26393Z" fill="currentColor"/>
                    </svg>`,
              right: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.25 2C5.7008 2 2 5.7008 2 10.25C2 14.7992 5.7008 18.5 10.25 18.5C14.7992 18.5 18.5 14.7992 18.5 10.25C18.5 5.7008 14.7992 2 10.25 2ZM12.7986 10.7361L9.36106 14.1736C9.227 14.3076 9.05101 14.375 8.87499 14.375C8.699 14.375 8.52298 14.3076 8.38892 14.1736C8.12011 13.9047 8.12011 13.4702 8.38892 13.2014L11.3404 10.25L8.38895 7.29856C8.12015 7.02976 8.12015 6.59525 8.38895 6.32645C8.65775 6.05765 9.09226 6.05765 9.36106 6.32645L12.7986 9.76396C13.0674 10.0328 13.0674 10.4672 12.7986 10.7361Z" fill="currentColor"/>
                      </svg>`
            };
          case "style-5":
            return {
              left: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.12088 9.64865L9.67402 2.30637C9.82054 2.11496 10.0726 2.00067 10.351 2.00067C10.351 2.00067 15.2008 2.00067 15.2008 2.0007C15.7683 1.9772 16.2349 2.55249 15.8718 3.01488L10.4301 9.99148C10.4301 9.99148 15.7077 16.9909 15.7077 16.9909C16.064 17.46 15.5939 18.0206 15.0308 17.9994H10.351C10.0726 17.9994 9.82054 17.8851 9.67402 17.6937L4.12088 10.3515C3.95971 10.1372 3.95971 9.86292 4.12088 9.64865Z" fill="currentColor"/>
                    </svg>`,
              right: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8791 10.3514L10.326 17.6936C10.1795 17.885 9.92744 17.9993 9.64905 17.9993C9.64905 17.9993 4.79921 17.9993 4.79922 17.9993C4.23167 18.0228 3.76513 17.4475 4.12815 16.9851L9.56994 10.0085C9.56994 10.0085 4.29225 3.00907 4.29227 3.00909C3.93599 2.54003 4.40609 1.97935 4.96918 2.00059H9.64905C9.92744 2.00059 10.1795 2.11485 10.326 2.30628L15.8791 9.64854C16.0403 9.86281 16.0403 10.1371 15.8791 10.3514Z" fill="currentColor"/>
                    </svg>`
            };
          default:
            return {
              left: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9781 4.96673C12.3035 5.29217 12.3035 5.81981 11.9781 6.14525L8.1229 10.0004L11.9781 13.8556C12.3035 14.1811 12.3035 14.7087 11.9781 15.0341C11.6527 15.3596 11.125 15.3596 10.7996 15.0341L6.35513 10.5897C6.0297 10.2643 6.0297 9.73662 6.35513 9.41118L10.7996 4.96673C11.125 4.6413 11.6527 4.6413 11.9781 4.96673Z" fill="currentColor"/>
                      </svg>`,
              right: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46625 15.0333C7.14081 14.7078 7.14081 14.1802 7.46625 13.8548L11.3214 9.99957L7.46625 6.14438C7.14081 5.81894 7.14081 5.2913 7.46625 4.96587C7.79168 4.64043 8.31932 4.64043 8.64476 4.96587L13.0892 9.41031C13.4146 9.73575 13.4146 10.2634 13.0892 10.5888L8.64476 15.0333C8.31932 15.3587 7.79168 15.3587 7.46625 15.0333Z" fill="currentColor"/>
                    </svg>`
            };
        }
      },
      configSwatchSlider: function (elementOptions, elementOptionsWrapper, option) {
        const { left: iconPrev, right: iconNext } = this.getArrowIconSlider(option);
        const keyConfig = ["button_single", "button_multi"].includes(option?.type) ? "button" : "swatch";
        const customizeOptions = window?.ap_front_settings?.config?.config_app?.customize_options ?? {};
        const arrowIcon = customizeOptions[keyConfig]?.arrow_icon;
        const indicators = customizeOptions[keyConfig]?.indicators_style;
        const inactiveIcon = arrowIcon?.inactive_icon ?? "#ccc";
        const activeIcon = arrowIcon?.active_icon ?? "#ccc";
        const inactiveBackground = arrowIcon?.inactive_background ?? "transparent";
        const activeBackground = arrowIcon?.active_background ?? "transparent";
        const inactiveBorder = `${arrowIcon?.border_thickness ?? 0}px solid ${arrowIcon?.inactive_border ?? "transparent"}`;
        const activeBorder = `${arrowIcon?.border_thickness ?? 0}px solid ${arrowIcon?.active_border ?? "transparent"}`;
        const arrowIconPositionType = arrowIcon?.position_type ?? "slides";
        const arrowIconPositionAlign = arrowIcon?.position_align ?? "center";
        const indicatorsStyle = indicators?.style ?? "dot";
        const indicatorsPositionAlign = indicators?.position_align ?? "center";
        const sliderConfig = option?.slider;
        const per_row = sliderConfig?.per_row ?? 1;
        const rows = sliderConfig?.rows ?? 1;
        // create div swiper wrapper
        const divSlider = document.createElement("div");
        divSlider.classList.add("avis-swiper");
        divSlider.appendChild(elementOptions);

        elementOptions.classList.add("avis-swiper-wrapper");

        const swiperButtonControll = document.createElement("div");
        swiperButtonControll.classList.add("avis-swiper-button");
        swiperButtonControll.classList.add("avis-swiper-btn-position-" + arrowIconPositionType);
        if (arrowIconPositionType !== "slides") {
          swiperButtonControll.classList.add("avis-swiper-btn-algin-" + arrowIconPositionAlign);
        }
        // create div swiper navigation left
        const buttonLeft = document.createElement("div");
        buttonLeft.className = "avis-swiper-button-left";
        buttonLeft.innerHTML = iconPrev;
        buttonLeft.style.color = inactiveIcon;
        buttonLeft.style.background = inactiveBackground;
        buttonLeft.style.border = inactiveBorder;
        buttonLeft.style.borderRadius = arrowIcon?.border_shape === "square" ? "0px" : `${arrowIcon?.border_radius ?? 0}px`;
        swiperButtonControll.appendChild(buttonLeft);

        // create div swiper navigation right
        const buttonRight = document.createElement("div");
        buttonRight.className = "avis-swiper-button-right";
        buttonRight.innerHTML = iconNext;
        buttonRight.style.color = activeIcon;
        buttonRight.style.background = activeBackground;
        buttonRight.style.border = activeBorder;
        buttonRight.style.borderRadius = arrowIcon?.border_shape === "square" ? "0px" : `${arrowIcon?.border_radius ?? 0}px`;
        buttonRight.style.cursor = "pointer";

        swiperButtonControll.appendChild(buttonRight);

        const divPanigation = document.createElement("div");
        divPanigation.classList.add("avis-swiper-pagination");

        const labels = elementOptions.querySelectorAll('label.avp-productoptionswatchwrapper,label.avp-productoptioncheckwrapper');

        const totalItemInRow = Math.ceil(labels.length / rows);
        const totalPage = Math.ceil(totalItemInRow / Math.floor(per_row));

        if (indicatorsStyle !== "scroll-line") {
          for (let i = 0; i < totalPage; i++) {
            const spanPagingItem = document.createElement("span");
            spanPagingItem.classList.add("avis-swiper-pagination-" + indicatorsStyle);
            if (i === 0) {
              spanPagingItem.classList.add(`avis-swiper-pagination-${indicatorsStyle}-active`);
            }
            spanPagingItem.setAttribute("data-index", i);
            if (indicatorsStyle === "number") {
              spanPagingItem.innerHTML = i + 1;
            }
            divPanigation.appendChild(spanPagingItem);
          }
        }

        // add button controll
        if (sliderConfig?.show_icon && totalPage > 1) {
          divSlider.appendChild(swiperButtonControll);
          divSlider.style.margin = "0px auto";
        }
        if (sliderConfig?.show_dot && totalPage > 1 && indicatorsStyle !== "scroll-line") {
          if (arrowIconPositionType === "under" && indicatorsPositionAlign === arrowIconPositionAlign) {
            divPanigation.style.position = "static";
            divPanigation.style.margin = "0px";
            divPanigation.style.width = "fit-content";
            divPanigation.style.padding = "0px";
            swiperButtonControll.insertBefore(divPanigation, buttonRight);
          } else {
            if (arrowIconPositionType === "under") {
              divPanigation.style.paddingBottom = "10px";
            }
            divPanigation.classList.add(`avis-swiper-pagination-${indicatorsPositionAlign}`);
            divSlider.appendChild(divPanigation);
          }
        }

        // create div swiper container
        const divSliderContainer = document.createElement("div");
        divSliderContainer.classList.add("avis-swiper-container");
        divSliderContainer.appendChild(divSlider);
        elementOptionsWrapper[0].appendChild(divSliderContainer);

        const heplText = elementOptions.querySelector(".avp-productdescfont.avp-productdesctextcolor.ap-helptext");
        if (heplText) {
          elementOptionsWrapper[0].appendChild(heplText);
          heplText.style.paddingTop = arrowIconPositionType === "under" ? "34px" : "8px";
        }

        const runSliderSetup = () => {
          const spanPagingItems = divPanigation.querySelectorAll(`.avis-swiper-pagination-${indicatorsStyle}`);
          if (!labels.length) return; // không có label nào

          let currentIndex = 0;
          const gap = Math.ceil(per_row) * 12;

          const parentGroupOption = divSlider.closest(".avp-option.ap-options__optiongroup-container");

          // option group get parent => get width (-24 padding parent, 0.85 width wrapper(85%))
          const percentWidth = arrowIconPositionType === "slides" ? 0.85 : 1;
          const widthWrapper = parentGroupOption ? (parentGroupOption.offsetWidth - 24) * percentWidth : divSlider.offsetWidth;

          labels.forEach((label) => {
            const parantLabel = label.closest(".avp-value-grid");
            if (parantLabel) {
              parantLabel.style.minWidth = `${(widthWrapper - gap) / per_row}px`;
              parantLabel.style.maxWidth = `${(widthWrapper - gap) / per_row}px`;
            } else {
              label.style.minWidth = `${(widthWrapper - gap) / per_row}px`;
              label.style.maxWidth = `${(widthWrapper - gap) / per_row}px`;
              label.style.textAlign = "center";
            }
          });

          const fieldset = elementOptions.querySelector('fieldset');
          if (rows > 1) {
            const withWrapper = totalItemInRow > 1 ? `${widthWrapper * (totalItemInRow / per_row)}px` : "100%";
            if (fieldset) {
              fieldset.style.width = `${withWrapper}`;
              fieldset.style.flexWrap = "wrap";
            } else {
              elementOptions.style.flexWrap = "wrap";
              elementOptions.style.width = `${withWrapper}`;
            }
          }
          if (sliderConfig?.show_dot && totalPage > 1 && !heplText) {
            elementOptionsWrapper[0].style.marginBottom = "28px";
          } else {
            elementOptionsWrapper[0].style.marginBottom = "14px";
          }

          if (arrowIconPositionType === "above") {
            divSliderContainer.style.marginTop = "35px";
          } else {
            divSliderContainer.style.marginTop = "0px";
          }

          if (arrowIconPositionType === "under" && indicatorsPositionAlign === arrowIconPositionAlign) {
            const widthLabel = labels[0].offsetWidth;
            const children = Array.from(labels[0].children);
            const totalWidthChildren = children.reduce((sum, child) => sum + child.offsetWidth, 0);
            const difference = (+widthLabel + 12) - +totalWidthChildren ;
            if (difference > 2) {
              swiperButtonControll.style.width = `${widthWrapper - difference}px`;
            }
           }

          function updatePosition() {
            let widthItem = 0;
            const parentLabel = labels[0].closest(".avp-value-grid");
            if (parentLabel) {
              widthItem = parentLabel.offsetWidth;
            } else {
              widthItem = labels[0].offsetWidth;
            }
            widthItem += 12;
            const withSrcoll = currentIndex * widthItem * Math.floor(per_row);
            const offset = totalPage - 1 === currentIndex ? widthItem * -Math.ceil(((labels.length / rows) - per_row)) : -withSrcoll;
            if (indicatorsStyle !== "scroll-line") {
              elementOptions.style.transition = "transform 0.3s ease-out";
              elementOptions.style.transform = `translate3d(${offset}px, 0px, 0px)`;
              spanPagingItems.forEach((el) => {
                el.classList.remove(`avis-swiper-pagination-${indicatorsStyle}-active`);
              });
              spanPagingItems[currentIndex].classList.add(`avis-swiper-pagination-${indicatorsStyle}-active`);
            } else {
              elementOptions.scrollTo({
                left: withSrcoll,
                behavior: 'smooth',
              });
            }
          }

          function cssColorIcon() {
            buttonLeft.style.color = currentIndex === 0 ? inactiveIcon : activeIcon;
            buttonLeft.style.background = currentIndex === 0 ? inactiveBackground : activeBackground;
            buttonLeft.style.border = currentIndex === 0 ? inactiveBorder : activeBorder;
            buttonLeft.style.cursor = currentIndex === 0 ? "inherit" : "pointer";
            buttonRight.style.color = currentIndex === totalPage - 1 ? inactiveIcon : activeIcon;
            buttonRight.style.background = currentIndex === totalPage - 1 ? inactiveBackground : activeBackground;
            buttonRight.style.border = currentIndex === totalPage - 1 ? inactiveBorder : activeBorder;
            buttonRight.style.cursor = currentIndex === totalPage - 1 ? "inherit" : "pointer";
          }
          function nextSlide() {
            if (currentIndex < (totalPage - 1)) {
              currentIndex++;
              updatePosition();
            }
            cssColorIcon();
          }
          function prevSlide() {
            if (currentIndex > 0) {
              currentIndex--;
              updatePosition();
            }
            cssColorIcon();
          }

          spanPagingItems.forEach((item) => {
            item.addEventListener('click', () => {
              currentIndex = Number(item.getAttribute('data-index'));
              updatePosition();
              cssColorIcon();
            });
          });

          buttonRight.addEventListener('click', nextSlide);
          buttonLeft.addEventListener('click', prevSlide);

          let touchStartX = 0;
          let touchEndX = 0;

          function handleSwipeGesture() {
            const swipeDistance = touchEndX - touchStartX;
            const swipeThreshold = 50;

            if (swipeDistance > swipeThreshold) {
              prevSlide();
            } else if (swipeDistance < -swipeThreshold) {
              nextSlide();
            }
          }

          elementOptions.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
          });

          elementOptions.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
          });

          if (indicatorsStyle === "scroll-line") {
            elementOptions.style.overflowX = "auto";
            elementOptions.style.scrollBehavior = "smooth";
            elementOptions.style.paddingBottom = "10px";
            elementOptions.addEventListener("scroll", () => {
              const pageWidth = elementOptions.clientWidth;
              const scrollLeft = elementOptions.scrollLeft;
              const newIndex = Math.ceil(scrollLeft / pageWidth);
              if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                cssColorIcon();
              }
            });
          }
        }

        requestAnimationFrame(() => {
          runSliderSetup();
          const divParentStep = divSlider.closest(".apo-step-child")
          const container = document.querySelector('.avpoptions-container__v2');

          if (container) {
            const directChildren = Array.from(container.children);
            const observer = new MutationObserver((mutationsList) => {
              for (const mutation of mutationsList) {
                if (mutation.type === "attributes" && mutation.attributeName === "style") {
                  requestAnimationFrame(() => runSliderSetup());
                }
              }
            });
            directChildren.forEach((child) => {
              if (child.nodeName === "DIV") {
                observer.observe(child, {
                  attributes: true,
                  attributeFilter: ["style"],
                });
              }
            });
          }
          if(divParentStep){
            const observer = new MutationObserver(() => {
                if (divParentStep.classList.contains("apo-step-child-active")) {
                  requestAnimationFrame(() => runSliderSetup());
                  observer.disconnect();
                }
            });
            observer.observe(divParentStep, {
                attributes: true,
                attributeFilter: ["class"],
            });
          }
        });
      },
      loadWebFontScriptIfNeeded: function(callback, fontType, fontName) {
        let urlFont = `${window.ap_front_settings?.root_api}api/v1/fonts/css2?family=${fontName.replace(/\s+/g, "+")}&type=${fontType}&shop_id=${shop_id}`;
        if (typeof window.WebFont === "undefined") {
          const script = document.createElement("script");
          script.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
          script.onload = () => {
            if (typeof callback === "function") callback(urlFont);
          };
          document.head.appendChild(script);
        } else {
          if (typeof callback === "function") callback(urlFont);
        }
      },
      convertDateFormat: function(dateString) {
        return dateString
          .replace(/YYYY/g, 'yyyy')
          .replace(/MM/g, 'MM')
          .replace(/DD/g, 'dd')
          .replace(/hh/g, 'hh')
          .replace(/ss/g, 'ss')
          .replace(/-([a-z])/g, (match, p1) => '-' + p1.toLowerCase());
      },
      getAllDatesFromRanges: function(calendarData) {
        if (!Array.isArray(calendarData) || calendarData.length === 0) {
            return [];
        }

        const allDates = [];

        calendarData.forEach(item => {
            if (!item?.selectedDates) return;

            const { start, end } = item.selectedDates;
            if (!start || !end) return;
            const startDate = new Date(start);
            const endDate = new Date(end);

            // Normalize to midnight
            const currentDate = new Date(startDate);
            currentDate.setHours(0, 0, 0, 0);
            endDate.setHours(0, 0, 0, 0);

            if (currentDate > endDate) {
                console.warn(`Invalid range: ${start} > ${end}`);
                return;
            }

            while (currentDate <= endDate) {
                // Format as YYYY-MM-DD directly
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                const day = String(currentDate.getDate()).padStart(2, '0');

                allDates.push(`${year}-${month}-${day}`);
                currentDate.setDate(currentDate.getDate() + 1);
            }
        });

        return allDates;
      },
      disableDaysOfTheWeek: function(option, date) {
        const VALID_DAYS = {
          sunday: 0,
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5,
          saturday: 6
        };

        const disabledDaysSet = new Set(
          option?.disable_days_of_the_week_value?.map(day => {
            const normalizedDay = day.toLowerCase();
            return VALID_DAYS[normalizedDay];
          }).filter(day => day !== undefined)
        );

        return disabledDaysSet.has(date.getDay());
      },
      initializeFlatpickr: function(idInput, option) {
        const optionDateFormat = option?.date_format;
        const enableSpecificDateArray = [];
        const disableSpecificDateArray = [];
        const allDatesInRanges = [];
        var defaultHour = new Date().getHours();
        var defaultMinute = new Date().getMinutes();
        var defaultSecond = new Date().getSeconds();

        // Enable specific date
        if (option?.enable_specific_date) {
            const enableSpecificDateValue = option?.enable_specific_date_value;
            if (typeof enableSpecificDateValue === 'string') {
                enableSpecificDateArray.push(...enableSpecificDateValue.split(',').map(date => date.trim()));
            }
        }

        // Disable specific date
        if (option?.disable_specific_date) {
            const disableSpecificDateValue = option?.disable_specific_date_value;
            if (typeof disableSpecificDateValue === 'string') {
                disableSpecificDateArray.push(...disableSpecificDateValue.split(',').map(date => date.trim()));
            }
        }

        // Enable specific date ranges
        if (option?.enable_specific_date_ranges && Array.isArray(option.enable_specific_date_ranges_value)) {
          allDatesInRanges.push(...e.getAllDatesFromRanges(option.enable_specific_date_ranges_value));
        }

        // Mix date ranges and specific dates
        if (allDatesInRanges.length > 0) {
            enableSpecificDateArray.push(...allDatesInRanges);
        }

        var options = {}

        if (optionDateFormat === 'YYYY-MM-DD hh:mm:ss') {
          options = {
            mode: 'single',
            formatDate: (date) => formatDate(
              date,
              optionDateFormat ? e.convertDateFormat(optionDateFormat.toString()) : 'YYYY-MM-DD hh:mm:ss',
            ),
            enableSeconds: true,
            enableTime: true,
            time_24hr: true,
            allowInput: true,
            defaultHour: defaultHour,
            defaultMinute: defaultMinute,
            defaultSeconds: defaultSecond,
            hourIncrement: 1,
            minuteIncrement: 1,
            enable: enableSpecificDateArray,
            clickOpens: true,
            disable: [
                ...disableSpecificDateArray,
                function(date) {
                    return option?.disable_days_of_the_week ? e.disableDaysOfTheWeek(option, date) : false;
                },
            ],
          }
          // - Should remove enable key from options object
          if (enableSpecificDateArray.length == 0) {
            delete options.enable
          }
        } else if (optionDateFormat === 'hh:mm:ss') {
          options = {
            mode: 'time',
            enableTime: true,
            enableSeconds: true,
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
            closeOnSelect: false,
            allowInput: true,
            defaultHour: defaultHour,
            defaultMinute: defaultMinute,
            defaultSeconds: defaultSecond,
            hourIncrement: 1,
            minuteIncrement: 1,
          }
        } else if (optionDateFormat === 'YYYY-MM') {
          options = {
            formatDate: (date) => formatDate(
              date,
              optionDateFormat ? e.convertDateFormat(optionDateFormat.toString()) : 'YYYY-mm',
            ),
            plugins: [
              new monthSelectPlugin({
                shorthand: true,
                dateFormat: "F Y",
                altFormat: "F Y",
                theme: "light",
              })
            ],
            defaultDate: [new Date()],
            enableTime: false,
          }
        } else {
          options = {
            mode: 'single',
            formatDate: (date) => formatDate(
              date,
              optionDateFormat ? e.convertDateFormat(optionDateFormat.toString()) : 'yyyy-MM-dd',
            ),
            defaultDate: [new Date()],
            enableTime: false,
            enable: enableSpecificDateArray,
            disable: [
              ...disableSpecificDateArray,
              function(date) {
                return option?.disable_days_of_the_week ? e.disableDaysOfTheWeek(option, date) : false;
              },
            ],
          }
          // - Should remove enable key from options object
          if (enableSpecificDateArray.length === 0) {
            delete options.enable;
          }
        }

        // Initialize Flatpickr
        flatpickr(`#${idInput}`, {
          ...options,
          onChange: function(selectedDates, dateStr, instance) {
            console.log("Selected date: " + dateStr);
          }
        });
      },
      loadFlatpickrScriptIfNeeded: function(scripts, callback) {
        let loadedScripts = 0;
        function loadScript(src) {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                loadedScripts++;
                if (loadedScripts === scripts.length) {
                    if (typeof callback === "function") callback();
                }
            };
            document.head.appendChild(script);
        }
        scripts.forEach(script => {
            if (typeof window[script.name] === "undefined") {
                loadScript(script.url);
            } else {
                loadedScripts++;
                if (loadedScripts === scripts.length) {
                    if (typeof callback === "function") callback();
                }
            }
        });
      },
      imageKonvaPreviewDebounce: debounce(() => {
          let avisHidden = document.querySelector(".avis-input-hiddens[data-productid='default']");
          if (avisHidden) {
              e.imageKonvaPreview(avisHidden);
          }
      }, 400),
      hasVisibleNodePod: function(nodes) {
            if (!nodes) return false;
            const filteredNodes = nodes.filter(node => node.id() !== "avis_transformer");

            return filteredNodes.some(node => {
                const type = node.getType().toLowerCase();

                if (type === "group") {
                    if (node.getAttr("livePreviewType") === "text") {
                        return node.getAttr("visible") && node.getChildren().length > 0;
                    }
                    return node.getChildren().some(child => {
                        const { visible } = child.getAttrs();
                        return visible;
                    });
                } else {
                    const { livePreviewType, visible, text } = node.getAttrs();
                    if (livePreviewType === "image" && visible) return true;
                    if (livePreviewType === "text" && text && visible) return true;
                    return false;
                }
            });
      },
      imageKonvaPreviewDebounce: debounce(() => {
          let avisHidden = document.querySelector(".avis-input-hiddens[data-productid='default']");
          if (avisHidden) {
              e.imageKonvaPreview(avisHidden);
          }
      }, 400),
      imageKonvaPreview: function(containerElement){
        const stage = window?.Konva?.stages?.[0];
        if (!stage) return;
        stage.show();
        // Get transformer and layer preview
        const transformer = stage.findOne("#avis_transformer");
        const livePreviewLayer = stage.findOne("#avis_preview_layer");
        transformer?.visible(false);
        const dataUrl = stage.toDataURL();
        transformer?.visible(true);

        let hasChildren = e.hasVisibleNodePod(livePreviewLayer.getChildren());
        if (!dataUrl) hasChildren = false;
        try {
          // Convert base64 to a File object
          function dataUrlToFile(dataUrl) {
              const [header, base64] = dataUrl.split(",");
              const mimeType = header.match(/:(.*?);/)[1];
              const binary = atob(base64);
              const length = binary.length;
              const uint8Array = new Uint8Array(length);

              for (let i = 0; i < length; i++) {
                  uint8Array[i] = binary.charCodeAt(i);
              }

              return new File([uint8Array], "avis-live-preview.png", { type: mimeType });
          }

          let namePreview = `properties[live_preview]`;
          // Find the file input by name
          let fileInput = containerElement.querySelector(`input[name="${namePreview}"]`);
          // If there are no children, remove the input and exit
          if (!hasChildren) {
              if (fileInput) fileInput.remove();
              return;
          }

          const imageFile = dataUrlToFile(dataUrl);

          // Use DataTransfer to set the file for the input element
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(imageFile);

          // If not found, create a new one
          if (!fileInput) {
              fileInput = document.createElement("input");
              fileInput.type = "file";
              fileInput.hidden = true;
              fileInput.name = namePreview;
          }

          // Set the file for the input and append it to the container
          fileInput.files = dataTransfer.files;
          containerElement.appendChild(fileInput);

        } catch (err) {
            console.log("avis-live-preview-error", err);
        }
      },
      loadKonvaIfNeeded: function (callback) {
        if (window.Konva) return callback();

        const script = document.createElement('script');
        script.src = 'https://cdn.shopify.com/s/files/1/0855/8818/1272/files/konva.min.js?v=1754971060';
        script.onload = callback;
        document.head.appendChild(script);
      },
      getImageUrlByImage: function (image) {
          if (!image) return null;
          let urlImage = image.getAttribute("src")?.split("&")[0];
          if (["56358994090", "56737038517"].includes(shop_id)) {
            const srcset = image.getAttribute("srcset");
            const urls = srcset.split(",").map(s => s.trim().split(" ")[0]);
            urlImage = urls[urls.length - 1];
            urlImage = urlImage.split("?")[0];
            urlImage = urlImage.replace(/_\d+x(?=\.\w+$)/, "");
          }
          urlImage = urlImage && (urlImage?.startsWith("/") || urlImage?.startsWith("http") ? urlImage : `https://${urlImage}`);
          return urlImage;
      },
      isActiveElement: function (e) {
          if (!e) return false;

        if (e.classList.contains("swiper-slide")) {
            return e.classList.contains("swiper-slide-active");
          }

          return (
            e.getAttribute("aria-current") === "true" ||
            e.classList.contains("is-selected") ||
            e.classList.contains("is-nav-selected") ||
            e.classList.contains("active-slide") ||
            e.classList.contains("swiper-slide-active") ||
            e.classList.contains("is-active") ||
            e.getAttribute("data-outline") === "active" ||
            e.classList.contains("active") ||
            e.classList.contains("active-thumb") ||
            e.classList.contains("tpo-isactive-image") ||
            e.classList.contains("is-current-variant") ||
            e.classList.contains("animation--product-media") ||
            e.classList.contains("pwzrswiper-slide-active") ||
            e.classList.contains("product-grid__item--1") ||
            e.getAttribute("data-active") === "true" ||
            e.getAttribute("aria-hidden") === "false" ||
            e.getAttribute("aria-selected") === "true" ||
            e.getAttribute("data-gallery-selected") === "true"
          );
      },
      calWidthTextTransformer: function (konvaText, context, valueText, fontSize, fontFamily, align = "left", widthText) {
        if (!konvaText.getAttr("defaultWidth")) konvaText.setAttr("width", undefined);
        context.save();
        context.font = `${fontSize}px "${fontFamily}"`;
        const width = Number(widthText) ? Number(widthText) : context.measureText(`${valueText}`).width || 0;
        const offsetX = {
          center: width / 2,
          right: width,
        };
        konvaText.offsetX(offsetX[align] || 0);
        if (!konvaText.getAttr("defaultWidth")) konvaText.setAttr("width", +width);
        context.restore();
      },
      eventListnerSwatchPersonalizer: function(id, option, valueId, imgUrl, isChecked = true){
        if (imgUrl === -1 && valueId)
        {
          imgUrl = option?.live_preview?.position_multiple?.find(item => item.optionValueId === valueId)?.url || option?.option_values?.find(item => item.value_id === valueId)?.swatch?.file_image_url || "";
        }

        if (!window.Konva && !window.Konva?.stages?.[0])
          return;
        let itemStage = window.Konva.stages[0]?.find(`#${id}`);
        if (!itemStage || 0 === itemStage.length)
          return;

        if ((!imgUrl || imgUrl === -1) && itemStage[0].getAttr("imagePreview")) {
          imgUrl = itemStage[0].getAttr("imagePreview");
        }
        const previewLayer = window.Konva.stages[0]?.findOne("#avis_preview_layer")
        const backgroundLayer = window.Konva.stages[0]?.findOne("#avis_background_image")
        const transformerLayer = window.Konva.stages[0]?.findOne("#avis_transformer");
        transformerLayer && transformerLayer?.nodes([]);
        if (imgUrl && imgUrl === itemStage[0].getAttr("imgUrl"))
        {
          itemStage[0].setAttr("isSelected", isChecked ?? false);
          itemStage[0].visible(isChecked ?? false);
          const {showOverlay, visible} = backgroundLayer?.getAttrs() || {};
          if (showOverlay){
            if (!visible && e.hasVisibleNodePod(previewLayer.getChildren()))  backgroundLayer.show();
            if (visible && !e.hasVisibleNodePod(previewLayer.getChildren()))  backgroundLayer.hide();
          }
          e.imageKonvaPreviewDebounce();
          return;
        }
        itemStage[0].setAttr("imgUrl", imgUrl);

        function onFinish(layer, img) {
          layer.image(img);
          layer.visible(isChecked ?? false);
          layer.to({
            opacity: 1,
            duration: 0.15,
            easing: Konva.Easings.EaseIn
          });
          layer.setAttr("isSelected", isChecked ?? false);
          layer.zIndex(layer.getAttr("nodeIndex"));
          const {showOverlay, visible} = backgroundLayer?.getAttrs() || {};
          if (showOverlay){
            if (!visible && e.hasVisibleNodePod(previewLayer.getChildren()))  backgroundLayer.show();
            if (visible && !e.hasVisibleNodePod(previewLayer.getChildren()))  backgroundLayer.hide();
          }
          e.imageKonvaPreviewDebounce();
        };
        itemStage.forEach((layer) => {
          if (!imgUrl){
            layer.setAttr("isSelected", false);
            layer.visible(false);
          }else {
            const img = new Image;
            img.src = imgUrl;
            img.crossOrigin = "Anonymous";
            img.onload = () => {
              layer.to({
                  opacity: 0,
                  duration: .1,
                  easing: Konva.Easings.EaseOut,
                  onFinish: () => {
                      onFinish(layer, img);
                  }
                });
            }
          }
        });
      },
      eventListenerPersonalizer: function (optionKey, layerType, valueInput, findType = "id") {
        const konvaOption = findType === "id" ? window?.Konva?.stages[0]?.find(`#${optionKey}`) : window?.Konva?.stages[0]?.find(`.${optionKey}`);
        if (!konvaOption || !konvaOption.length) return;
        const previewLayer = window.Konva.stages[0]?.findOne("#avis_preview_layer"),
              backgroundLayer = window.Konva.stages[0]?.findOne("#avis_background_image"),
              transformerLayer = window.Konva.stages[0]?.findOne("#avis_transformer");
        transformerLayer && transformerLayer?.nodes([]);

        konvaOption.forEach((optionValueLayer) => {
          const context = optionValueLayer.getLayer().getContext();
          const attrs = optionValueLayer.getAttrs();

          switch (layerType) {
            case "text":
              const value = valueInput || attrs.defaultValue || "";
              e.calWidthTextTransformer(optionValueLayer, context, value, attrs.fontSize, attrs.fontFamily, attrs.align, attrs.width);
              optionValueLayer.setAttrs({
                text: value,
              });
              break;

            case "color":
              optionValueLayer.setAttr("fill", valueInput || attrs.defaultColor || "#000000");
              break;

            case "font":
              let fontFamily = valueInput || attrs.defaultFont || "Roboto";
              optionValueLayer.setAttr("fontFamily", fontFamily);
              e.calWidthTextTransformer(optionValueLayer, context, attrs.text, attrs.fontSize, fontFamily, attrs.align, attrs.width);
              break;

            case "font_size":
              optionValueLayer.setAttrs({
                fontSize: valueInput,
              });
              break;
          }
        });
        const {showOverlay, visible} = backgroundLayer?.getAttrs() || {};
        if (showOverlay)
        {
          if (!visible && e.hasVisibleNodePod(previewLayer.getChildren()))  backgroundLayer.show();
          if (visible && !e.hasVisibleNodePod(previewLayer.getChildren()))  backgroundLayer.hide();
        }
        e.imageKonvaPreviewDebounce();
      },
      showHidePODConditionalLogic: function (option, isHidden) {
        const konvaOption = window?.Konva?.stages[0]?.find(`#${option.key}`)
        if (!konvaOption || !konvaOption.length) return;
        konvaOption.forEach((optionValueLayer) => {
          const imageUrl = optionValueLayer.getAttr("imgUrl") || optionValueLayer.getAttr("imagePreview");
          if (imageUrl && imageUrl !== e.imageDefault && option.type === "file") {
            const img = new Image;
            img.src = imageUrl;
            img.crossOrigin = "Anonymous";
            img.onload = () => {
              optionValueLayer.setAttrs({ image: img });
              optionValueLayer.setAttrs({ visible: !isHidden });
            }
          } else if (["text", "number", "textarea"].includes(option.type)) {
            optionValueLayer.setAttrs({ visible: !isHidden });
          } else {
             optionValueLayer.setAttrs({ visible: !isHidden ? optionValueLayer.getAttr("visible") : false});
          }
        });
        e.imageKonvaPreviewDebounce();
      },
       imageDefault: "https://cdn.shopify.com/s/files/1/0855/8818/1272/files/default_image.webp?v=1755507319",
      getImageDimensionFromUrl: function (url) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;

          img.onload = () => {
            resolve({
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          };

          img.onerror = reject;
        });
      },
      handleProductPersonalizer: function (productInfo, optionSetApply, productId) {
        const livePreviewBg = optionSetApply?.live_preview_bg;
        const listOptionApply = optionSetApply.options.filter(i => i.live_preview?.status);
        const productMediaList = document.querySelectorAll(productMediaListClass);
        const productImageActive = document.querySelectorAll(productMediaActiveClass);
        if (!productMediaList?.length || !productImageActive?.length) {
          console.log("❌ Product personalizer: Not found product media list");
          return;
        }
        e.loadKonvaIfNeeded(function(){
          const createPersonalizeContainer = () => {
            const personalizeContainer = document.createElement("div");
            personalizeContainer.classList.add("avis_personalize_stage");
            personalizeContainer.style.display = "flex";
            personalizeContainer.style.justifyContent = "center";
            return personalizeContainer;
          };
          const scaleImage = (konvaStage, firstImage = true, index = 1) => {
              const personalizeContainer = document.querySelector(".avis_personalize_stage");
              let targetImageElement;

              // Determine which image element to use for alignment
              if (firstImage) {
                // Default to the first image selector
                targetImageElement = document.querySelector(productMediaActiveClass);
              } else {
                const allImages = Array.from(document.querySelectorAll(productMediaItemListClass));

                // Select the appropriate image based on mode
                targetImageElement =
                  index === 1
                    ? allImages.reverse()[0]
                    : allImages[+index - 1]; // index is 1-based

                // Adjust canvas wrapper position based on selected image (for desktop only)
                if (window.matchMedia("(max-width: 750px)").matches) {
                  // Remove positioning on small screens
                  personalizeContainer.style.removeProperty("top");
                  personalizeContainer.style.removeProperty("left");
                  personalizeContainer.style.removeProperty("right");
                } else {
                  // Align canvas wrapper with image position
                  personalizeContainer.style.top = `${targetImageElement.offsetTop}px`;
                  personalizeContainer.style.left = `${targetImageElement.offsetLeft}px`;

                  // If not the first image, remove right alignment
                  if (+index !== 1) {
                    personalizeContainer.style.right = "unset";
                  }
                }
              }

              // Scale and adjust the Konva canvas to fit the dimensions of the HTML image
              scaleStageToMatchElement(targetImageElement, konvaStage);
          };
          // Helper function to scale and resize Konva stage to match an HTML element
          const scaleStageToMatchElement = (element, stage) => {
            if (!element || !stage) return;

            const { orgImageWidth, orgImageHeight } = stage.getAttrs();

            // Calculate scale ratios for width and height
            const widthRatio = element.offsetWidth / orgImageWidth;
            const heightRatio = element.offsetHeight / orgImageHeight;

            // Use the smaller ratio to maintain aspect ratio
            const scale = Math.min(widthRatio, heightRatio);

           if (shop_id === "71409041597") {
              // Resize and scale stage
              stage.width(orgImageWidth * widthRatio + 1);
              stage.height(orgImageHeight * heightRatio + 1);
              stage.scale({
                x: widthRatio,
                y: heightRatio
              });
            } else {
              // Resize and scale stage
              stage.width(orgImageWidth * scale + 1);
              stage.height(orgImageHeight * scale + 1);
              stage.scale({
                x: scale,
                y: scale
              });
            }
          }
          const loadedImage =  (imageElement, isFirstImage = true, scale = 1) => {
            const naturalWidth = imageElement.naturalWidth;
            const naturalHeight = imageElement.naturalHeight;

            // Set initial width and height on the first Konva stage (if it exists)
            const stage = window.Konva.stages?.[0];
            if (stage) {
              stage.setAttrs({
                orgImageWidth: naturalWidth,
                orgImageHeight: naturalHeight
              });
            }

            // Find the custom background image shape by ID
            const backgroundImageShape = stage?.findOne("#avis_background_image");
            if (backgroundImageShape) {
              backgroundImageShape.setAttrs({
                image: imageElement,   // Assign the new image
                width: naturalWidth,   // Set width to image's natural width
                height: naturalHeight  // Set height to image's natural height
              });
            }

            // Call a helper function (likely for further setup or scaling)
            scaleImage(stage, isFirstImage, scale);
          }

          const transformerGroupItemText = (konvaGroup, valueText, fontSize, fontFamily, color, curved) => {
            if (!valueText) return;
            function measureCharWidths(text = "", fontSize, fontFamily) {
              const context = document.createElement("canvas").getContext("2d");
              context.font = `${fontSize}px ${fontFamily}`;
              return [...text].map(char => context.measureText(char).width);
            }

            const charWidths = measureCharWidths(valueText, fontSize, fontFamily);
            const totalTextWidth = charWidths.reduce((sum, width) => sum + width, 0);
            const direction = curved >= 0 ? 1 : -1;
            curved = Math.abs(curved);
            const arcPercent = (100 * totalTextWidth) / (2 * Math.PI * curved);
            const rotationStep = direction * (arcPercent - arcPercent / totalTextWidth);
            // Calculate the starting offset to center the text along the arc
            let currentAngle = -totalTextWidth / (2 * arcPercent);

            valueText.split("").forEach((char, index) => {
              const charWidth = charWidths[index];
              const angle = currentAngle + curved / (2 * arcPercent);
              const posX = arcPercent * Math.sin(angle);
              const posY = rotationStep - direction * arcPercent * Math.cos(angle);
              currentAngle += charWidth / arcPercent;
              const textChar = new Konva.Text({
                    x: posX,
                    y: posY,
                    fill: color,
                    defaultColor: color,
                    fontFamily: fontFamily,
                    defaultFont: fontFamily,
                    defaultValue: konvaGroup.getAttr("defaultValue"),
                    text: char,
                    isChildren: true,
                    fontStyle: konvaGroup.getAttr("fontStyle") || "normal",
                    textDecoration: konvaGroup.getAttr("textDecoration") || "none",
                    offsetX: +charWidth / 2,
                    offsetY: +fontSize / 2,
                    rotation: direction * (180 * angle) / Math.PI,
                    fontSize: +fontSize,
                    customerScale: konvaGroup.getAttr("customerScale") || false,
                    align: "center",
                    opacity: konvaGroup.getAttr("textOpacity")
                });
                konvaGroup.add(textChar);
            });
          }

          const transformerGroupText =(option, konvaPreviewLayer, findConditionalLogic, indexOption = 0) => {
            const livePreview = option?.live_preview;
            const livePreviewDefault = option?.live_preview?.default || {};
            const valueText = option?.default_value || livePreviewDefault?.value || "";
            const fontSize = +livePreviewDefault?.size || 15;
            const fontFamily = livePreviewDefault?.font || "Roboto";
            const color = livePreviewDefault?.color || "#000";
            const styleConfig = livePreviewDefault?.style ?? [];
            const textDecoration = styleConfig?.includes("underline") ? "underline" : "none";
            let style = null;
            if (styleConfig.includes("bold") && styleConfig.includes("italic")) {
              style = "bold italic";
            }
            else if (styleConfig.includes("bold"))
            {
              style = "bold";
            }
            else if (styleConfig.includes("italic"))
            {
              style = "italic";
            }

            const konvaGroup = new Konva.Group({
                id: option.key,
                name: "avis-transformer-group-text",
                x: +livePreview?.position?.x || 0,
                y: +livePreview?.position?.y || 0,
                visible: +livePreview?.visible || 1,
                nodeType: "text",
                nodeIndex: indexOption,
                livePreviewType: "text",
                rotation: +livePreview?.position?.r || 0,
                fontSize: fontSize,
                textOpacity: +livePreviewDefault?.opacity / 100,
                textSize: +fontSize,
                textValue: valueText,
                fontFamily: fontFamily,
                defaultValue: valueText,
                defaultColor: color,
                fontStyle: style || "normal",
                textDecoration: textDecoration,
                customerScale: livePreview?.customer?.type_size === "live_preview" || false,
                draggable: livePreview?.customer?.position ?? false,
            });
            transformerGroupItemText(konvaGroup, valueText, fontSize, fontFamily, color, +livePreview?.default?.curved || 0);
            konvaPreviewLayer.add(konvaGroup);
          }

          const transformerText = async (option, konvaPreviewLayer, findConditionalLogic, indexOption = 0) => {
            const backgroundImage = window.Konva.stages[0]?.findOne("#avis_background_image");
            const productMediaItems = document.querySelector(productMediaActiveClass)
            const elementImageActive = productMediaItems?.querySelector("img");
            const urlBackgrournd = e.getImageUrlByImage(elementImageActive)
            const isCustom = livePreviewBg.type === "custom";
            const urlCustom = livePreviewBg.file || "";
            const { width, height } = await e.getImageDimensionFromUrl(isCustom ? urlCustom : urlBackgrournd);
            const widthBackground = backgroundImage?.getAttr("width") || width;
            const heightBackground = backgroundImage?.getAttr("height") || height;
            const livePreview = option?.live_preview;

            let linkedArr = [];
            for (const key in livePreview?.linked) {
              if (livePreview?.linked[key]) {
                linkedArr.push(livePreview?.linked[key]);
              }
            }

            const livePreviewDefault = option?.live_preview?.default || {};
            const valueText = option?.default_value || livePreviewDefault?.value || "";
            const isHideByCL = findConditionalLogic ? findConditionalLogic?.hidden : false;
            const fontType = livePreviewDefault?.font_type ?? "google";
            const font = livePreviewDefault?.font || "Roboto";
            const fontSize = +livePreviewDefault?.size || 15;
            const align = livePreviewDefault?.align || "left";
            const styleConfig = livePreviewDefault?.style ?? [];
            const type = livePreviewDefault?.type
            const textDecoration = styleConfig?.includes("underline") ? "underline" : "none";
            let style = null;
            if (styleConfig.includes("bold") && styleConfig.includes("italic")) {
              style = "bold italic";
            }
            else if (styleConfig.includes("bold"))
            {
              style = "bold";
            }
            else if (styleConfig.includes("italic"))
            {
              style = "italic";
            }
            const {showOverlay, visible} = backgroundImage?.getAttrs() || {};
            if (showOverlay && !visible && valueText)
            {
              backgroundImage.show();
            }

            const konvaText = new Konva.Text({
              id: option.key,
              name: linkedArr.length ? `${linkedArr.join(" ")}` : "avis-transformer-text",
              x: type ? (+livePreview?.position?.x / 100) * widthBackground : +livePreview?.position?.x,
              y: type ? (+livePreview?.position?.y / 100) * heightBackground : +livePreview?.position?.y,
              rotation:
                type ? (+livePreview?.position?.r > 180 ? +livePreview?.position?.r - 360 : +livePreview?.position?.r) * 3.6 : +livePreview?.position?.r,
              width: +livePreview?.default?.width ? +livePreview?.default?.width : undefined,
              defaultWidth: +livePreview?.default?.width ? +livePreview?.default?.width : undefined,
              visible: !isHideByCL,
              fontSize: fontSize,
              fontFamily: font,
              fontStyle: style || "normal",
              textDecoration: textDecoration,
              fill: livePreviewDefault?.color || "#000",
              draggable: livePreview?.customer?.position ?? false,
              opacity: +livePreviewDefault?.opacity / 100,
              align: align,
              defaultColor: livePreviewDefault?.color || "#000",
              defaultValue: livePreviewDefault?.value,
              customerScale:livePreview?.customer?.size && (["live_preview", "allow_both"].includes(livePreview?.customer?.type_size) || false),
              nodeIndex: indexOption,
              nodeType: "text",
              livePreviewType: "text",
            });
            function drawText() {
              const ctx = konvaPreviewLayer.getContext()._context;
              e.calWidthTextTransformer(konvaText, ctx, valueText, fontSize, font, align, livePreview?.default?.width);
              konvaText.setAttrs({
                text: valueText,
              });
              konvaPreviewLayer.add(konvaText);
              konvaText.zIndex(indexOption);
              konvaPreviewLayer.draw();
              e.imageKonvaPreviewDebounce();
            }
            if (font){
              e.loadWebFontScriptIfNeeded((urlFont) => {
                WebFont.load({
                  [fontType]: {
                    families: [font],
                    urls: [urlFont]
                  },
                  active: () => {
                    drawText();
                  }
                });
              }, fontType, font);
            }else {
              drawText();
            }
            konvaText.on("dragend", ( () => {
              e.imageKonvaPreviewDebounce();
            }));
          };

          const transformerImageShape = async (positionItem, option, imageShape, outline, konvaGroupImage, isHideByCL, itemIndex = 0) => {
            const backgroundImage = window.Konva.stages[0]?.findOne("#avis_background_image");
            const productMediaItems = document.querySelector(productMediaActiveClass)
            const elementImageActive = productMediaItems?.querySelector("img");
            const urlBackgrournd = e.getImageUrlByImage(elementImageActive)
            const isCustom = livePreviewBg.type === "custom";
            const urlCustom = livePreviewBg.file || "";
            const { width, height } = await e.getImageDimensionFromUrl(isCustom ? urlCustom : urlBackgrournd);
            const widthBackground = backgroundImage?.getAttr("width") || width;
            const heightBackground = backgroundImage?.getAttr("height") || height;
            if (!positionItem.url) return null;

            const {showOverlay, visible} = backgroundImage?.getAttrs() || {};
            if (showOverlay && !visible && positionItem.visible)
            {
              backgroundImage.show();
            }
            const livePreview = option?.live_preview;
            const type = livePreview?.default?.type

            Konva.Image.fromURL(positionItem.url, function (imageNode) {
              imageNode.setAttrs({
                  id: positionItem.id,
                  name: option.key,
                  x: type ? (+positionItem.x / 100) * widthBackground : +positionItem.x,
                  y: type ? (+positionItem.y / 100) * heightBackground : +positionItem.y,
                  offsetX:type ? +positionItem.width / 2 : undefined,
                  offsetY:type ?  +positionItem.height / 2 : undefined,
                  width: +positionItem.width || 0,
                  height: +positionItem.height || 0,
                  visible: !isHideByCL ? positionItem.visible ?? false : false,
                  isSelected: positionItem.visible ?? false,
                  opacity: typeof positionItem?.opacity !== "undefined" ? +positionItem?.opacity / 100 : 1,
                  rotation:  type ? (+positionItem.r > 180 ? +positionItem.r - 360 : +positionItem.r) * 3.6 : +positionItem.r,
                  nodeType: "image",
                  nodeIndex: itemIndex,
                  optionType: "image",
                  lock: true,
                  fill: "transparent",
                  draggable: livePreview?.customer?.position ?? false,
                  hasRotation: livePreview?.customer?.image_rotate ?? false,
                  customerScale: livePreview?.customer?.size && (livePreview?.customer?.type_size === "live_preview" || false),
                  crossOrigin: "Anonymous",
                  imgUrl: positionItem.url || positionItem.imageDefault,
                  imagePreview: positionItem.imagePreview ?? "",
                  livePreviewType: "image",
              });

              function calcCoverPosition(image, frame, position = "center-middle") {
                const frameWidth = frame.width;
                const frameHeight = frame.height;
                const frameRatio = frameWidth / frameHeight;

                let drawWidth, drawHeight;

                // Determine the drawing size so that the image completely fills the frame
                if (frameRatio >= image.width / image.height) {
                  drawWidth = image.width;
                  drawHeight = image.width / frameRatio;
                } else {
                  drawWidth = image.height * frameRatio;
                  drawHeight = image.height;
                }

                let offsetX = 0;
                let offsetY = 0;

                // Determine the position based on the 'position' value
                switch (position) {
                  case "left-top":
                    offsetX = 0;
                    offsetY = 0;
                    break;
                  case "left-middle":
                    offsetX = 0;
                    offsetY = (image.height - drawHeight) / 2;
                    break;
                  case "left-bottom":
                    offsetX = 0;
                    offsetY = image.height - drawHeight;
                    break;
                  case "center-top":
                    offsetX = (image.width - drawWidth) / 2;
                    offsetY = 0;
                    break;
                  case "center-middle":
                    offsetX = (image.width - drawWidth) / 2;
                    offsetY = (image.height - drawHeight) / 2;
                    break;
                  case "center-bottom":
                    offsetX = (image.width - drawWidth) / 2;
                    offsetY = image.height - drawHeight;
                    break;
                  case "right-top":
                    offsetX = image.width - drawWidth;
                    offsetY = 0;
                    break;
                  case "right-middle":
                    offsetX = image.width - drawWidth;
                    offsetY = (image.height - drawHeight) / 2;
                    break;
                  case "right-bottom":
                    offsetX = image.width - drawWidth;
                    offsetY = image.height - drawHeight;
                    break;
                  case "scale":
                    offsetX = 0;
                    offsetY = 0;
                    drawWidth = frameWidth;
                    drawHeight = frameHeight;
                    break;
                  default:
                    console.log("Error fit image position: "  + position);
                }

                return {
                  x: offsetX,
                  y: offsetY,
                  width: drawWidth,
                  height: drawHeight
                };
              }

              function fitWidth(imageSize, containerSize) {
                  const imageWidth = imageSize.width;
                  const scaledHeight = imageSize.height * (containerSize.width / imageWidth);
                  const targetWidth = containerSize.width;

                  const offsetX = 0;
                  const offsetY = (containerSize.height - scaledHeight) / 2;

                  return [offsetX, offsetY, targetWidth, scaledHeight];
              }
              function fitHeight(imageSize, containerSize) {
                  const imageWidth = imageSize.width;
                  const imageHeight = imageSize.height;
                  const scale = containerSize.height / imageHeight;

                  const targetHeight = containerSize.height;
                  const targetWidth = imageWidth * scale;

                  const offsetX = (containerSize.width - targetWidth) / 2;
                  const offsetY = 0;

                  return [offsetX, offsetY, targetWidth, targetHeight];
              }
              function fitImage(imageSize, containerSize)
              {
                switch(livePreview?.default?.image_scaling)
                {
                  case "fill":
                    const pos = calcCoverPosition(
                      {
                        width: imageSize?.width || 0,
                        height: imageSize?.height || 0
                      },
                      {
                        width: containerSize?.width || 0,
                        height: containerSize?.height || 0
                      }
                    );
                   return [pos.x, pos.y, pos.width, pos.height, 0, 0, containerSize?.width, containerSize?.height];

                  case "scale_width":
                    return fitWidth(imageSize, containerSize);

                  case "scale_height":
                    return fitHeight(imageSize, containerSize);

                  case "stretch":
                     return [0, 0, containerSize.width, containerSize.height];

                  default:
                    const containerRatio = containerSize.width / containerSize.height;
                    const imageRatio = imageSize.width / imageSize.height;
                    if (containerRatio >= imageRatio) {
                        return fitHeight(imageSize, containerSize);
                    }
                    else {
                        return fitWidth(imageSize, containerSize);
                    }
                }
              }

              // Redraw with a clip if the image is in list
              imageNode.sceneFunc((context, shape) => {
                const img = shape.image();
                if (img && imageShape) {
                    const actualWidth = shape.width() * shape.scaleX();
                    const actualHeight = shape.height() * shape.scaleY();

                    const scaleX = imageShape.width / actualWidth;
                    const scaleY = imageShape.height / actualHeight;

                    const processedImages = fitImage(img, {
                        width: actualWidth,
                        height: actualHeight
                    });

                    const drawImages = [img].concat(processedImages);
                    context.beginPath();
                    for (const [index, point] of outline?.entries() || []) {
                        const px = point?.x / scaleX;
                        const py = point?.y / scaleY;
                        if (index === 0) {
                            context.moveTo(px, py);
                        } else {
                            context.lineTo(px, py);
                        }
                    }
                    context.clip();

                    context.fillStrokeShape(shape);
                    if (img) {
                        context.drawImage.apply(context, drawImages);
                    }
                }
              });

              imageNode.on("dragend", ( () => {
                e.imageKonvaPreviewDebounce();
              }));
              konvaGroupImage.add(imageNode);
              imageNode.zIndex(itemIndex || 0);
              konvaGroupImage.draw();
              e.imageKonvaPreviewDebounce();
            });

          }

          const transformerImage = async (option, konvaPreviewLayer, findConditionalLogic, indexOption) => {
            const livePreview = option?.live_preview;
            const positionMultiple = livePreview?.position_multiple;
            const defaultSetting = livePreview?.default;
            const isHideByCL = findConditionalLogic ? findConditionalLogic?.hidden : false;
            let urlCustomShape = "";
            switch(defaultSetting?.shape)
            {
              case "heart":
                urlCustomShape = "https://cdn.shopify.com/s/files/1/0855/8818/1272/files/avis_heart.webp?v=1754922147";
                break;
              case "rectangular":
                urlCustomShape = "https://cdn.shopify.com/s/files/1/0855/8818/1272/files/avis_square.webp?v=1754922759";
                break;

              case "rectangular_radius":
                urlCustomShape = "https://cdn.shopify.com/s/files/1/0855/8818/1272/files/avis_radius.webp?v=1754922147";
                break;

              case "circle":
                urlCustomShape = "https://cdn.shopify.com/s/files/1/0855/8818/1272/files/avis_circle.png?v=1754922148";
                break;

              case "star":
                urlCustomShape = "https://cdn.shopify.com/s/files/1/0855/8818/1272/files/avis_star.webp?v=1754922147";
                break;

              default:
                urlCustomShape = defaultSetting?.custom_shape?.find(item => item.key === defaultSetting?.shape)?.link ?? "https://cdn.shopify.com/s/files/1/0855/8818/1272/files/avis_square.webp?v=1754922759";
                break;
            }
            let listPosition = [];
            let position = {};
            let optionDefaultSelected = option?.option_default_value;
            switch(option.type)
            {
              case "swatch_single_color":
              case "swatch_single_image":
              case "swatch_select_color":
              case "swatch_select_image":
              case "select":
              case "radio":
              case "button_single":
                const urlOptionValue = option?.option_values?.find(item => item?.swatch?.file_image_url)?.swatch?.file_image_url
                const urlImage = positionMultiple.find(item => item?.url)?.url || urlOptionValue || e.imageDefault;
                position = {
                    id: option.key,
                    x: +livePreview?.position?.x || 0,
                    y: +livePreview?.position?.y || 0,
                    r: +livePreview?.position?.r || 0,
                    width: +livePreview?.default?.width || 0,
                    height: +livePreview?.default?.height || 0,
                    opacity: +livePreview?.default?.opacity,
                    url: urlImage
                  };
                if (option.type.includes("select") && !optionDefaultSelected && !option.placeholder && option?.option_values?.length > 0)
                {
                  optionDefaultSelected = option?.option_values[0]?.value_id;
                }
                if (optionDefaultSelected)
                {
                  let findPosition = positionMultiple?.find(item => item.optionValueId === optionDefaultSelected);
                  if (findPosition && findPosition.url) {
                    position.url = findPosition.url;
                    position.visible = true;
                  }
                }
                listPosition = [position];
                break;
              case "swatch_multi_color":
              case "swatch_multi_image":
              case "combo_select":
              case "combo_color":
              case "combo_image":
              case "combo_box":
              case "button_multi":
              case "checkbox":
                option?.option_values?.forEach((valueItem, index) => {
                  position = positionMultiple?.find(item => item.optionValueId === valueItem.value_id);
                  position.id = valueItem.value_id;
                  position.url = position?.url || valueItem?.swatch?.file_image_url || e.imageDefault;
                  if (optionDefaultSelected?.includes(valueItem.value_id))
                  {
                    position.visible = true;
                  }
                  if (position) listPosition.push(position);
                });
                break;

              case "file":
              case "switch":
                let visible = livePreview?.default?.image_preview ? true : false;
                if (option.type === "switch")
                {
                  visible = livePreview?.default?.image_preview && String(option.default_status??"")?.toLocaleLowerCase() === "true";
                }
                position = {
                    id: option.key,
                    x: +livePreview?.position?.x || 0,
                    y: +livePreview?.position?.y || 0,
                    r: +livePreview?.position?.r || 0,
                    width: +livePreview?.default?.width || 0,
                    height: +livePreview?.default?.height || 0,
                    url: livePreview?.default?.image_preview || e.imageDefault,
                    imageDefault: e.imageDefault,
                    imagePreview: livePreview?.default?.image_preview,
                    opacity: livePreview?.default?.opacity,
                    visible: visible
                  };
                listPosition = [position];
                break;
            }
            if (listPosition.length === 0) return;
            if (listPosition.length > 1) {
              const konvaGroupImage = new Konva.Group;
              konvaGroupImage.zIndex(indexOption);
              listPosition.forEach(( (positionItem, index) => {
                  const imageShape = new Image;

                  imageShape.onload = async () => {
                      const outline = await getImageOutline(imageShape) || [];
                      transformerImageShape(positionItem, option, imageShape, outline, konvaGroupImage, isHideByCL, index)
                  },
                  imageShape.crossOrigin = "anonymous",
                  imageShape.src = urlCustomShape
              }
              )),
              konvaPreviewLayer.add(konvaGroupImage);
            }
            else
            {
              const imageShape = new Image();
              imageShape.crossOrigin = "anonymous";
              imageShape.src = urlCustomShape;
              imageShape.onload = async () => {
                  const outline = await getImageOutline(imageShape) || [];
                  transformerImageShape(listPosition[0], option, imageShape, outline, konvaPreviewLayer, isHideByCL, indexOption);
              }

            }
          }

          const handleAllOption = (options, konvaPreviewLayer) => {
            const arrCL = Object.values(conditionalLogicInstances[productId]?.reactions)
            for (const [index, option] of options.entries()) {
              const { live_preview: livePreview } = option;
              const findConditionalLogic = arrCL.find(item => item?.option?.key === option?.key);
              switch (option.type) {
                case "text":
                case "number":
                case "textarea":
                  (+livePreview?.default?.curved || 0) === 0 ? transformerText(option, konvaPreviewLayer, findConditionalLogic, index) : transformerGroupText(option, konvaPreviewLayer, findConditionalLogic, index);
                  break;

                default:
                  transformerImage(option, konvaPreviewLayer, findConditionalLogic, index);
                  break;
              }

            }
          };

          const handleBackgroundImage = () => {
            const obServerMediaList = new MutationObserver((function(mutations) {
              let imageUrlPreview = "";
              let indexImage = 0;
              let isFirstImage = true;
              let isCustom = livePreviewBg.type === "custom";
              let urlCustom = livePreviewBg.file || "";
              switch (livePreviewBg.preview_on) {
                case "variant":
                  const urlImageVariants = productInfo.variants.map((e => e?.featured_image?.src));
                  // Get the active image URL
                  const productMediaActive = document.querySelector(productMediaActiveClass);
                  if (productMediaActive)
                  {
                    let imgActive = productMediaActive.querySelector("img");
                    let imageUrl = e.getImageUrlByImage(imgActive);
                    if (urlImageVariants.some((e => e?.includes(imageUrl))))
                    {
                      imageUrlPreview = isCustom && urlCustom ? urlCustom :  imageUrl;
                    }
                  }
                  break;

                default:
                  // List thumbs
                  const productMediaItems = Array.from(document.querySelectorAll(productMediaThumbsClass));
                  if (!productMediaItems?.length) return null;

                  if (livePreviewBg.preview_on === "last") {
                    indexImage = productMediaItems.length-1;
                    isFirstImage = false;
                  }
                  else if (livePreviewBg.preview_on === "specific") {
                    indexImage = Number(livePreviewBg?.image_index ?? 1) > productMediaItems.length ? productMediaItems.length : Number(livePreviewBg?.image_index ?? 1);
                    indexImage = indexImage - 1; // Convert to 0-based index
                    isFirstImage = false;
                  } else if (livePreviewBg.preview_on === "all") {
                    indexImage = productMediaItems.findIndex((item) => e.isActiveElement(item));
                  }

                  let imgActive = productMediaItems[indexImage]?.querySelector("img");
                  imageUrlPreview = isCustom && urlCustom ? urlCustom : e.getImageUrlByImage(imgActive);
                  break;
              }

              if (!imageUrlPreview)  return null;

            const createImage = new Image;
              createImage.src = imageUrlPreview,
              createImage.crossOrigin = "Anonymous",
              createImage.onload = () => {
                  loadedImage(createImage, isFirstImage, indexImage + 1)
              }
            }));

            obServerMediaList.observe(document.querySelector(productMediaListClass), {
                              subtree: true,
                              childList: true,
                              attributes: true
                          })
          };

          const handleTransformPreview = (konvaStage) => {
            const konvaTransformerLayer = new Konva.Layer({id: "avis_transformer_layer"});
            const konvaTransformer = new Konva.Transformer({
              id: "avis_transformer",
              anchorStyleFunc: (anchor, context) => {
                // If the anchor is at the top-center or bottom-center
                if (anchor.hasName("top-center") || anchor.hasName("bottom-center")) {
                  anchor.height(6);       // Set anchor height to 6 pixels
                  anchor.offsetY(3);      // Center it vertically by offsetting Y by 3
                  anchor.width(20);       // Set anchor width to 20 pixels (horizontal handle)
                  anchor.offsetX(10);     // Center it horizontally by offsetting X by 10
                }

                // If the anchor is at the middle-left or middle-right
                if (anchor.hasName("middle-left") || anchor.hasName("middle-right")) {
                  anchor.height(20);      // Set anchor height to 20 pixels (vertical handle)
                  anchor.offsetY(10);     // Center it vertically by offsetting Y by 10
                  anchor.width(6);        // Set anchor width to 6 pixels
                  anchor.offsetX(3);      // Center it horizontally by offsetting X by 3
                }
              },
              anchorCornerRadius: 12,
              anchorSize: 8,
              padding: 0,
              flipEnabled: false,
              boundBoxFunc: (oldBox, newBox) => {
                // Prevent resizing if the new width or height is less than 5 pixels
                // This avoids shapes becoming too small or disappearing
                if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
                  return oldBox; // Keep the previous size
                }

                // Allow resizing - accept the new size
                return newBox;
              }
            });
            konvaTransformerLayer.add(konvaTransformer);
            konvaStage.add(konvaTransformerLayer);
            return konvaTransformer;
          };
          const personalizeContainer = createPersonalizeContainer();
          productMediaList.forEach((list) => {list.appendChild(personalizeContainer); list.classList.add("avis-personalize-wrapper")});

          let imageUrlDefault = productInfo?.variants[0]?.featured_image?.src || productInfo?.featured_image;
          if (livePreviewBg?.type === "custom") imageUrlDefault = livePreviewBg?.file;

          const konvaStage = new Konva.Stage({container: ".avis_personalize_stage"});
          const konvaPreviewLayer = new Konva.Layer({ id: "avis_preview_layer" });
          const konvaDefaultLayer = new Konva.Layer({ listening: false });
          const bgImageOverlayData = livePreviewBg?.overlay === "selected";
          if (imageUrlDefault)
          {
            Konva.Image.fromURL(imageUrlDefault, (function(imageNode) {
              // Get the original HTMLImageElement inside the Konva.Image
              const htmlImage = imageNode.image();
              // Get the image's natural size and add 1px buffer
              const imageWidth = htmlImage.naturalWidth + 1;
              const imageHeight = htmlImage.naturalHeight + 1;
              // Update the canvas
              konvaStage.setAttrs({
                width: imageWidth,
                height: imageHeight,
                orgImageWidth: imageWidth,
                orgImageHeight: imageHeight
              });

              // Apply additional layout/render logic
              scaleImage(konvaStage);
              // Set attributes for the image node
              imageNode.setAttrs({
                id: "avis_background_image",  // Set a unique ID
                x: 0,
                y: 0,
                // overlayMode: undefined,                    // Custom overlay mode
                // preview_options: p,                // Options for preview rendering
                // preview_index: u,                  // Index in preview list
                showOverlay: bgImageOverlayData,
                visible: !bgImageOverlayData,
                width: imageWidth,
                height: imageHeight,
                crossOrigin: "Anonymous",          // Allow cross-origin image loading
                listening: false                   // Disable event listeners (non-interactive)
              });

              // Add the image to the layer `s` and redraw it
              konvaDefaultLayer.add(imageNode);
              konvaDefaultLayer.draw();

            }));
          }
          konvaStage.add(konvaDefaultLayer);
          handleAllOption(listOptionApply, konvaPreviewLayer);
          konvaStage.add(konvaPreviewLayer);
          handleBackgroundImage();
          const transformer = handleTransformPreview(konvaStage);
          window.addEventListener("resize", ( () => {scaleImage(konvaStage); }));
          konvaStage.on("click tap", function (e) {
            // Deselect all elements when clicking on the stage
            if (e.target === konvaStage) {
              transformer.nodes([]);
            }

            const isMultiSelectKey = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
            const isAlreadySelected = transformer.nodes().includes(e.target);
            const isChild = e.target.getAttr("isChild")
            const node = isChild ? e.target.parent : e.target;
            if (node.getAttr("customerScale") || node.getAttr("hasRotation"))
            {
              if (isMultiSelectKey || isAlreadySelected)
              {

              }
              else
              {
                const {nodeType} = node.getAttrs();
                switch (nodeType) {
                  case "text":
                    transformer.enabledAnchors(node.getAttr("customerScale") ? ["top-left", "top-right", "bottom-left", "bottom-right"] : []);
                    transformer.nodes([node]);
                    let id = node.getAttr("id");
                    let idFontInput = `font-size_persionalizer${id}`;
                    let fontInputElem = document.querySelector(`#${idFontInput}`);
                    let newFontSize;
                    if (fontInputElem) {
                      node.on("transform", () => {
                        const scaleX = node.scaleX();
                        newFontSize = node.fontSize() * scaleX;
                        fontInputElem.value = Math.round(newFontSize);
                      });

                      node.on("transformend", () => {
                        const oldBox = node.getClientRect({ relativeTo: node.getLayer() });
                        const oldCenter = {
                          x: oldBox.x + oldBox.width / 2,
                          y: oldBox.y + oldBox.height / 2
                        };

                        node.fontSize(newFontSize);
                        node.scaleX(1);
                        node.scaleY(1);

                        const newBox = node.getClientRect({ relativeTo: node.getLayer() });
                        const newCenter = {
                          x: newBox.x + newBox.width / 2,
                          y: newBox.y + newBox.height / 2
                        };

                        node.x(node.x() + (oldCenter.x - newCenter.x));
                        node.y(node.y() + (oldCenter.y - newCenter.y));

                        node.getLayer().batchDraw();
                      });
                    }
                    break;
                  case "image":
                  case "swatch":
                    const extraAnchors = node.getAttr("lock")
                                          ? []
                                          : ["middle-left", "middle-right", "top-center", "bottom-center"];
                    transformer.enabledAnchors(node.getAttr("customerScale") ? ["top-left", "top-right", "bottom-left", "bottom-right", ...extraAnchors] : []);
                    transformer.rotateEnabled(node.getAttr("hasRotation"));
                    transformer.nodes([node]);
                    e.target.on("transform", () => {
                      const scaleX = e.target?.scaleX();
                      const scaleY = e.target?.scaleY();

                      const newWidth  = Math.round(Math.max(5, e.target.width()  * scaleX));
                      const newHeight = Math.round(Math.max(5, e.target.height() * scaleY));
                      const newRotation = e.target.rotation();

                      e.target.setAttrs({
                        width:  newWidth,
                        height: newHeight,
                        rotation: newRotation,
                        scaleX: 1,
                        scaleY: 1
                      });
                    });
                    break;
                }
              }

            }
          });
        })
      },
      add: function (
        n,
        optionSetInfo,
        r,
        productInfo,
        productId,
        elemOptionAvisContainer
      ) {
        let option = n;
        var p = [],
          c = "avp" + (n.option_id ?? n.label_cart) + "-" + r;
        apoProductDefault !== productId && (c = c + "-" + productId),
          ($formContainer = createAvisOptionContainer(
            productInfo,
            productId,
            elemOptionAvisContainer,
            optionSetInfo?.templ_class + "-wrapper"
          ));
        if (!n.help_text_select) n.help_text_select = "tooltip";
        let classHidePrice = "";
        if (
          priceMod.isHiddenSwatchTitle(option) &&
          option.option_show_price === "only_value"
        ) {
          classHidePrice = "apo-hide-price";
        }
        var l = window.AP_POptions.$("<label><label>")
          // .attr("for", c)
          .addClass("avp-option-title")
          .addClass(
            `${n?.title_style?.length
              ? n.title_style
                .map(
                  (style) => `avp-text${style !== "normal" ? style : ""}`
                )
                .join(" ")
              : ""
            }`
          )
          .html(e.genOptionTitleHtml(option));
        if (classHidePrice) l.addClass(classHidePrice);

        let helpTextSelect = n.help_text_select;
        let helpText = n.help_text;
        let helpTextSelector = null;
        let newHelpTextSelector = null;
        let newTooltipTextSelector = null;
        if (helpText && "below" === helpTextSelect)
          helpTextSelector = window.AP_POptions.$("<div></div>")
            .addClass("avp-productdescfont")
            .addClass("avp-productdesctextcolor")
            .addClass("ap-helptext")
            .html(helpText);
        else if (helpText && "tooltip" === helpTextSelect) {
          helpTextSelector = window.AP_POptions.$("<div></div>")
            .addClass("avp-productdescfont")
            .addClass("avp-productdesctextcolor")
            .addClass("ap-tooltip")
            .append(
              `<div class="apo-icons"><img data-src="${window.ap_front_settings.icon_tooltip}" ${isStoreLazyImg ? "loading='lazy' class='avis-img-lazy'" : `src="${window.ap_front_settings.icon_tooltip}"`} style="width:15px" /></div><div class="apo-swatch-tooltip apo-swatch-tooltip-top ap-tooltip-inner"><span class="apo-tooltip-title">${helpText}</span></div><span class="apo-swatch-arrow apo-swatch-arrow-top"></span>`
            );
          e.hoverTooltip(helpTextSelector[0]);
        }
        else {
          helpTextSelect = "";
          if (n?.new_help_text) {
            newHelpTextSelector = document.createElement("div");
            newHelpTextSelector.classList.add("avp-productdescfont");
            newHelpTextSelector.classList.add("avp-productdesctextcolor");
            newHelpTextSelector.classList.add("ap-helptext");
            newHelpTextSelector.innerHTML = n?.new_help_text;
          }
          if (n?.tooltip_text) {
            newTooltipTextSelector = document.createElement("div");
            newTooltipTextSelector.classList.add("avp-productdescfont");
            newTooltipTextSelector.classList.add("avp-productdesctextcolor");
            newTooltipTextSelector.classList.add("ap-tooltip");
            newTooltipTextSelector.innerHTML = `<div>
            <img data-src="${window.ap_front_settings.icon_tooltip}" ${isStoreLazyImg ? "loading='lazy' class='avis-img-lazy'" : `src="${window.ap_front_settings.icon_tooltip}"`} style="width:15px; height:15px;" width="15" height="15" /></div><div class="apo-swatch-tooltip apo-swatch-tooltip-top ap-tooltip-inner"><span class="apo-tooltip-title">${n?.tooltip_text}</span></div><span class="apo-swatch-arrow apo-swatch-arrow-top"></span>`;
            e.hoverTooltip(newTooltipTextSelector);
          }
        }

        let optionDefaultValues = n["option_default_value"];
        n.is_multi_files = n.is_multi_files ? n.is_multi_files : false;

        if (!n["is_option_default_value"]) optionDefaultValues = null;
        switch (n.type) {
          case "quantity":
            p.push(
              e._createQuantityInput(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n["default_value"],
                n.placeholder,
                c,
                n["quantity_label"],
                n["min_value_qty"],
                n["max_value_qty"],
                n["add_price_quantity_type"],
                n["hide_price"],
                n["option_show_price"],
                n?.option_values?.[0]?.price,
                n?.option_values?.[0]?.compare_at_price,
                n["required"],
                n["step"],
                n["is_control_qty"],
                n?.option_values?.[0]?.productVariationId,
                n,
              )
            );
            break;
          case "text":
            p.push(
              e._createTextInput(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n["default_value"],
                n.placeholder,
                n.max_length,
                n.min_length,
                n.required,
                c,
                n
              )
            );
            break;
          case "space":
            p.push(e._createSpace(n.spacer));
            break;
          case "phone":
            p.push(
              e._createPhoneInput(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n["default_value"],
                n.placeholder,
                n.required,
                n?.value_country,
                c,
                n,
              )
            );
            break;
          case "number":
            p.push(
              e._createNumberInput(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n["default_value"],
                n.placeholder,
                n.min,
                n.max,
                n.required,
                c,
                n
              )
            );
            break;
          case "dimension":
            p.push(
              e._createDimensionInput(
                elemOptionAvisContainer,
                productId,
                n
              )
            );
            break;
          case "slider":
            p.push(
              e._createSliderInput(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n["default_value"],
                n["add_price_quantity_type"],
                n.unit,
                n.start_value,
                n.end_value,
                n?.step_slider ?? n?.step,
                n.show_dots,
                n.required,
                n.show_selected_value,
                c,
                n
              )
            );
            break;
          case "date":
            var dateHtml = e._createDateInput(
              elemOptionAvisContainer,
              productId,
              n.label_cart,
              n["default_value"],
              n.placeholder,
              n.required,
              c,
              n,
            );
            n.element_id = c;
            p.push(dateHtml);
            break;
          case "textarea":
            p.push(
              e._createTextArea(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n["default_value"],
                n.placeholder,
                n.max_length,
                n.required,
                c,
                n["allow_value"],
                n.text_transform,
                n.min_length,
                n
              )
            );
            break;
          case "color":
            var colorHtml = e._createColorInput(
              elemOptionAvisContainer,
              productId,
              c,
              n,
            );
            n.element_id = c;
            p.push(colorHtml);
            break;
          case "file":
            var file = e._createFileInput(
              elemOptionAvisContainer,
              productId,
              n.label_cart,
              n.required,
              n.is_multi_files,
              n.option_file_type,
              n.option_file_type_custom,
              c,
              n,
            );
            n.element_id = c;
            p.push(file);
            break;
          case "font":
            var colorHtml = e._createFontInput(
              elemOptionAvisContainer,
              productId,
              n.label_cart,
              n.font_selected,
              n.required,
              n.class_name,
              n.placeholder,
              c,
              n.default_value,
              n,
            );
            n.element_id = c;
            p.push(colorHtml);
            break;
          case "paragraph":
            var paragraphHtml = e._createParagraph(n.rich_text_value);
            p.push(paragraphHtml);
            break;
          case "html":
            var elementHTML = e._createHTML(n.html_code);
            if (elementHTML) {
              elementHTML.find("*").css("margin", "0");
            }
            p.push(elementHTML);
            break;
          case "switch":
            var switchHtml = e._createSwitch(
              elemOptionAvisContainer,
              productId,
              n,
              c
            );
            n.element_id = c;
            p.push(switchHtml);
            break;
          case "hidden_field":
            p.push(
              e._createHiddenField(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n["default_value"],
                c
              )
            );
            break;
          case "heading":
            var headingHtml = e._createHeading(
              n.content_heading,
              n.styles_heading,
              n.heading_color
            );
            p.push(headingHtml);
            break;
          case "divider":
            var dividerHtml = e._createDivider(
              n.border_styles,
              n.divider_color
            );
            p.push(dividerHtml);
            break;
          case "modal":
            var modalhHtml = e._createModal(n);
            if (n.choose_label_option) {
              modalhHtml.css("margin-left", "auto");

              const findLabel = () => {
                const labelElem = document.querySelector(`[key="${n.choose_label_option.value}"] .ap-label-tooltip`);
                if (labelElem) {
                  labelElem.style.display = "flex";
                  labelElem.append(modalhHtml[0]);
                  clearInterval(interval);
                }
              };
              const interval = setInterval(findLabel, 100);
            } else {
              p.push(modalhHtml);
            }
            break;
          case "size_chart":
            var sizeChartlhHtml = e._createSizeChart(n);
            if (n.choose_label_option) {
              sizeChartlhHtml.css("margin-left", "auto");

              const findLabel = () => {
                const labelElem = document.querySelector(`[key="${n.choose_label_option.value}"] .ap-label-tooltip`);
                if (labelElem) {
                  labelElem.style.display = "flex";
                  labelElem.append(sizeChartlhHtml[0]);
                  clearInterval(interval);
                }
              };
              const interval = setInterval(findLabel, 100);
            } else {
              p.push(sizeChartlhHtml);
            }
            break;
          case "email":
            p.push(
              e._createEmailInput(
                elemOptionAvisContainer,
                productId,
                n.label_cart,
                n.placeholder,
                n.required,
                n["default_value"],
                c,
                n
              )
            );
            break;
          case "radio":
          case "button_single":
            var h = e.createRadioList(
              elemOptionAvisContainer,
              productId,
              n,
              l,
              c,
              optionDefaultValues,
              e._createRadioButton
            );
            window.AP_POptions.$.merge(p, h);
            break;
          case "swatch":
          case "swatch_single_color":
          case "swatch_single_image":
          case "swatch_multi_color":
          case "swatch_multi_image":
            if (n.allow_multiple == "true") {
              var v = e.createCheckboxList(
                elemOptionAvisContainer,
                productId,
                n,
                l,
                optionDefaultValues,
                e._createSwatch
              );
              p.push(v);
            } else {
              var h = e.createRadioList(
                elemOptionAvisContainer,
                productId,
                n,
                l,
                c,
                optionDefaultValues,
                e._createSwatch
              );
              window.AP_POptions.$.merge(p, h);
            }
            break;
          case "checkbox":
          case "button_multi":
            var v = e.createCheckboxList(
              elemOptionAvisContainer,
              productId,
              n,
              l,
              optionDefaultValues,
              e._createCheckboxButton
            );
            p.push(v);
            break;
          case "combo_box":
          case "combo_select":
          case "combo_color":
          case "combo_image":
            var v = e.createComboBox(
              elemOptionAvisContainer,
              productId,
              n,
              l,
              optionDefaultValues,
              e._createComboButton
            );
            p.push(v);
            break;
          case "select":
            var g = e._createSelectMenu(
              elemOptionAvisContainer,
              productId,
              n.label_cart,
              n.option_values,
              n.placeholder,
              n.required,
              c,
              optionDefaultValues,
              n
            );
            p.push(g);
            break;

          case "swatch_select_color":
          case "swatch_select_image":
            var g = e._createSelectSwatch(
              elemOptionAvisContainer,
              productId,
              n,
              c
            );
            p.push(g);
            break;

          case "option_group":
            var g = e._createOptionGroup(n);
            p.push(g);
            break;
          case "step":
            var g = e._createStepOption(n);
            p.push(g);
            break;
        }
        if (p.length) {
          let inputSelector = p[0];
          if (e.showAddChargeTitle(option) && option.type !== "slider") {
            priceMod.attachData(
              inputSelector,
              option.label_cart,
              option.option_values[0],
              "has-value",
              option,
              productId
            );
            if (
              option.default_value ||
              option.type === "color" ||
              (option.type === "switch" && option?.default_status === "true")
            ) {
              priceMod.variantChange(
                option.label_cart,
                [inputSelector],
                productId,
                elemOptionAvisContainer
              );
            }
          }
          var y = n["class_name"] || "",
            w = window.AP_POptions.$("<div></div>").addClass(y);
          var classOptions = "";
          var classOptionsSwatch = "";
          var classOptionsButton = "";
          var hideValueTitle = priceMod.isHiddenSwatchTitle(n);
          switch (n.type) {
            case "quantity":
              classOptions = "ap-options__quantity";
              break;
            case "text":
              classOptions = "ap-options__text";
              break;
            case "phone":
              classOptions = "ap-options__phone";
              break;
            case "number":
              classOptions = "ap-options__number";
              break;
            case "dimension":
              classOptions = "ap-options__dimension";
              break;
            case "slider":
              classOptions = "ap-options__slider";
              break;
            case "email":
              classOptions = "ap-options__email";
              break;
            case "date":
              classOptions = "ap-options__date";
              break;
            case "color":
              classOptions = "ap-options__color";
              break;
            case "file":
              classOptions = "ap-options__file";
              break;
            case "textarea":
              classOptions = "ap-options__textarea";
              break;
            case "radio":
              classOptions = "ap-options__radio";
              break;
            case "swatch":
              classOptions = "ap-options__swatch";
              break;
            case "swatch_single_color":
            case "swatch_multi_color":
              classOptions = "ap-options__swatch ap-options__swatch-color";
              classOptionsSwatch = n.type === "swatch_single_color" ? "ap-swatch__single" : "ap-swatch__multi";
              if (hideValueTitle) {
                classOptions += " apo-hidden-title";
              }
              break;
            case "swatch_single_image":
            case "swatch_multi_image":
              classOptions = "ap-options__swatch ap-options__swatch-image";
              classOptionsSwatch = n.type === "swatch_single_image" ? "ap-swatch__single" : "ap-swatch__multi";
              if (hideValueTitle) {
                classOptions += " apo-hidden-title";
              }
              break;
            case "button_single":
              classOptions = "ap-options__button";
              classOptionsButton = "ap-button__single";
              break;
            case "button_multi":
              classOptions = "ap-options__button";
              classOptionsButton = "ap-button__multi";
              break;
            case "combo_box":
              classOptions = "ap-options__combo_box";
              break;
            case "combo_select":
              classOptions = "ap-options__combo_select";
              break;
            case "combo_image":
              classOptions = "ap-options__combo_image";
              break;
            case "combo_color":
              classOptions = "ap-options__combo_color";
              break;
            case "checkbox":
              classOptions = "ap-options__checkbox";
              break;
            case "space":
              classOptions = "ap-options__space";
              break;
            case "html":
              classOptions = "ap-options__HTML";
              break;
            case "switch":
              classOptions = "ap-options__switch";
              break;
            case "hidden_field":
              classOptions = "ap-options__hidden-field";
              break;
            case "heading":
              classOptions = "ap-options__heading";
              break;
            case "divider":
              classOptions = "ap-options__divider";
              break;
            case "modal":
              classOptions = "ap-options__modal";
              break;
            case "paragraph":
              classOptions = "ap-options__paragraph";
              break;
            case "font":
            case "select":
              classOptions = "ap-options__select";
              break;
            case "swatch_select_color":
              classOptions = "ap-options__select ap-options__swatch-color";
              break;
            case "swatch_select_image":
              classOptions = "ap-options__select ap-options__swatch-image";
              break;
            case "option_group":
              classOptions = "ap-options__optiongroup";
              break;
            case "step":
              classOptions = "ap-options__step";
              break;
          }
          let titleOptionElm = null;
          if (n.label_product && !n?.hidden_label && !["space", "paragraph", "modal", "html", "heading", "divider", "size_chart"].includes(n.type)) {
            if (
              n.type !== "option_group" &&
              "tooltip" !== helpTextSelect &&
              !n?.tooltip_text
            ) {
              titleOptionElm = window.AP_POptions.$("<div></div>");
              titleOptionElm.addClass("ap-label-tooltip");
              titleOptionElm.append(l);
            } else {
              titleOptionElm = window.AP_POptions.$("<div></div>");
              if ("tooltip" === helpTextSelect || newTooltipTextSelector) {
                titleOptionElm.addClass("ap-label-tooltip");
                titleOptionElm.append(l);
                if (helpTextSelector?.length)
                  titleOptionElm.append(helpTextSelector);
                if (newTooltipTextSelector)
                  titleOptionElm.append($(newTooltipTextSelector));
              } else titleOptionElm.append(l);
              if (n.type === "option_group") {
                titleOptionElm.addClass("apo-option-group");
                if (n.display_type === "accordion") {
                  let iconSvg = document.createElement("span");
                  iconSvg.classList.add("svg-accordion");
                  if (shop_id === "47483682982") {
                    iconSvg.innerHTML = IMAGE_SVG.icon_plus;
                  } else {
                    iconSvg.innerHTML = IMAGE_SVG.icon_option_group;
                  }
                  titleOptionElm.append($(iconSvg));
                }
              }
            }
          }
          if (n.type === "option_group") {
            w.addClass(`apo-group-id-${n.group_id}`);
            w.addClass(`apo-group-${n.display_type ?? "accordion"}`);
            if (n.default_status) {
              w.addClass("apo-show");
            }

            if (titleOptionElm) {
              if (shop_id === "53736374447") {
                titleOptionElm[0].querySelector('.svg-accordion svg').addEventListener("click", function (event) {
                  let wrapper = event?.target?.closest(".avp-option");
                  if (wrapper.className?.indexOf("apo-show") === -1) {
                    wrapper.classList.add("apo-show");
                  } else wrapper.classList.remove("apo-show");
                });
              } else {
                titleOptionElm[0].addEventListener("click", function (event) {
                  let wrapper = event?.target?.closest(".avp-option");
                  if (wrapper.className?.indexOf("apo-show") === -1) {
                    wrapper.classList.add("apo-show");
                  } else wrapper.classList.remove("apo-show");
                });
              }

            }
          }
          if (titleOptionElm) w.append(titleOptionElm);
          if (classOptions) {
            w.addClass(
              `avp-option ${`${classOptions?.split(" ")[0]}-container`} ${isCustom149 ? "custom-149" : ""
              }`
            );

            // setTimeout(() => {
            //   toggleAvpOptionDisabled();
            // }, 0);

            if (n?.is_change_image_thumbnail)
            {
              w.attr("data-change-image", "true");
            }
          }


          w.attr("key", n?.key ?? "");

          if (n.type === "space") {
            w.css("margin", "0");
            w.css("height", `${n.spacer}px`);
          }
          if (
            isCssV3 ||
            n?.option_url === OPTION_URL.allowed ||
            n?.option_url === OPTION_URL.group ||
            n?.option_url === OPTION_URL.only
          )
            w.addClass("apo-option-v3");
          if (optionSetInfo?.templ_class) w.addClass(optionSetInfo.templ_class);
          n?.column_width && w.addClass(`avp-columnwidth-${n.column_width}`),
            ("radio" == n.type ||
              "button_single" == n.type ||
              (n.type.indexOf("swatch") > -1 &&
                n.allow_multiple === "false" &&
                n.type !== "swatch_select_color" &&
                n.type !== "swatch_select_image")) &&
            w.attr("role", "group").attr("aria-labelledby", c);
          let spanSelector = document.createElement("span");
          if (classOptions) {
            classOptions = classOptions.split(" ");
            for (let item of classOptions) {
              spanSelector.classList.add(item);
            }
          }
          if (classOptionsSwatch)
            spanSelector.classList.add(classOptionsSwatch);
          if (classOptionsButton)
            spanSelector.classList.add(classOptionsButton);

          if (
            n?.column_width_variant &&
            n?.column_width_variant !== "default"
          ) {
            spanSelector.classList.add(
              `ap-col__${n?.column_width_variant !== "default" && n?.column_width_variant
              }`
            );
            spanSelector.classList.remove(
              "ap-col__22",
              "ap-col__30",
              "ap-col__46",
              "ap-col__100"
            );
          } else if (n?.column_width_variant === "default") {
            spanSelector.classList.remove(
              `ap-col__${n?.column_width_variant !== "default" && n?.column_width_variant
              }`
            );
            spanSelector.classList.remove(
              "ap-col__22",
              "ap-col__30",
              "ap-col__46",
              "ap-col__100"
            );
          }

          if (
            n.required &&
            ("radio" == n.type ||
              "button_single" == n.type ||
              (n.type.indexOf("swatch") > -1 &&
                ["false", "FALSE"].includes(n.allow_multiple) &&
                n.type !== "swatch_select_color" &&
                n.type !== "swatch_select_image"))
          ) {
            spanSelector.setAttribute("apo-required", "true");
          }
          if ("below" === helpTextSelect || n?.new_help_text) {
            for (let item of p) {
              spanSelector.appendChild(item[0]);
            }
            if (helpTextSelector) spanSelector.appendChild(helpTextSelector[0]);
            if (newHelpTextSelector)
              spanSelector.appendChild(newHelpTextSelector);
          } else {
            for (let item of p) {
              spanSelector.appendChild(item[0]);
            }
          }

          if (
            n.type === "swatch_select_color" ||
            n.type === "swatch_select_image"
          ) {
            w.addClass("ap-options__select_swatch");
            let selectSelector = spanSelector.querySelector(
              ".option-avis-dropdown-inner"
            );
            if (selectSelector) {
              selectSelector.setAttribute("role", "group");
              selectSelector.setAttribute("aria-labelledby", c);
              if (n.required) {
                selectSelector.setAttribute("apo-required", "true");
              }
            }

            p = selectSelector.querySelectorAll("li.option-avis-value");
          }

          if (
            (n.type === "combo_image" || n.type === "combo_color") &&
            ["51851788455"].includes(window.ap_front_settings.shop_id)
          ) {
            let selectSelector = spanSelector.querySelector(
              ".combo_modal fieldset"
            );

            p = selectSelector.querySelectorAll("label.avp-productoptioncheckwrapper");
          }

          if (n?.type === "dimension") {
            p = spanSelector.querySelectorAll("input.avp-dimension-input-hidden");
          }

          if (["swatch_single_color", "swatch_multi_color", "swatch_single_image", 'swatch_multi_image', "button_single", "button_multi"].includes(n?.type) && n?.slider && n?.slider?.status) {
            this.configSwatchSlider(spanSelector, w, n);
            e.addEventTooltipBody(spanSelector, n);
          } else {
            w[0].appendChild(spanSelector);
            if (isDesignV2 || convertTooltipBody) {
              e.addEventTooltipBody(spanSelector, n);
            }
          }
          if (["text", "textarea", "number"].includes(n?.type)) {
            if (["font_size", "allow_both"].includes(n?.live_preview?.customer?.type_size)) {
              let fontSizePersonalizer = e._createFontSizePersonalizer(n.key, n?.live_preview?.default?.size);
              spanSelector.append(fontSizePersonalizer);
            }
          }
          conditionalLogicInstances[productId].register(
            elemOptionAvisContainer,
            productId,
            n,
            w,
            p
          ),
            appendOption(
              n,
              w,
              productInfo,
              productId,
              $formContainer,
              elemOptionAvisContainer
            );
        }
      },
    };

    window.apoGenOption = e;

    function getFormHasAddToCart(sectionPageSelector) {
      let size_media = window.innerWidth;
      if (!sectionPageSelector) {
        sectionPageSelector = document;
      }

      let formAddCartsSelector = sectionPageSelector.querySelectorAll(
        window.AP_POptions.apps.productoptions.formAddOptionClassProductPage
      );
      if (window.ap_front_settings.shop_id === "57985335363") {
        if (size_media > 1024) {
          formAddCartsSelector = sectionPageSelector.querySelectorAll(
            "form[action$='/cart/add'].ec-hide-on-tablet"
          );
        } else {
          formAddCartsSelector = sectionPageSelector.querySelectorAll(
            "form[action$='/cart/add'].ec-hide-on-desktop"
          );
        }
      }
      if (formAddCartsSelector && formAddCartsSelector.length > 0) {
        for (let elm of formAddCartsSelector) {
          let buttonAddCart = elm.querySelector(
            window.AP_POptions.addToCartButton
          );
          if (buttonAddCart) {
            return elm;
          }
        }

        return formAddCartsSelector[0];
      }
      return null;
    }

    function getDeviceTypeV1() {
      const ua = navigator.userAgent;

      if (/Tablet|iPad/i.test(ua) || (window.innerWidth >= 768 && 'ontouchstart' in window)) {
        return 'tablet';
      }

      if (/Mobi|Android|iPhone|iPod/i.test(ua)) {
        return 'mobile';
      }

      return 'pc';
    }
    function getDeviceTypeV2() {
      const ua = navigator.userAgent;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      if (window.matchMedia("(max-width: 768px)").matches && isTouch) {
        return 'mobile';
      }

      if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches && isTouch) {
        return 'tablet';
      }

      return 'pc';
    }

    function appendOptionByWidget(
      customizeryConfig,
      elmContainerQ,
      containerOptionAvis,
      productInfo,
      isMultiPage,
      productId
    ) {
      let elementProductPageSelector = formProductGenOptionJs[productId]
        ? $(formProductGenOptionJs[productId])
        : elmContainerQ;

      if (window.ap_front_settings.page_type === "product") {
        if (getDeviceTypeV1() === "mobile" || getDeviceTypeV2() === "mobile") {
          let getMobile = document.querySelector("section.hide-on-desktop");
          if (getMobile) elementProductPageSelector = $(getMobile);
        }
      }
      let widget = customizeryConfig.widget;
      let position =
        !widget || !widget.position || widget.position == "default"
          ? "prepend"
          : widget.position.split("_")[0];
      let keyElement =
        !widget || !widget.position || widget.position == "default"
          ? "default"
          : widget.position.split("_")[1];
      let elementProductPage = null;
      switch (keyElement) {
        case "variant":
          let selectorAll = elementProductPageSelector?.find(
            window.AP_POptions.variantWrapper
          );

          if (!selectorAll || selectorAll.length === 0) {
            selectorAll = elmContainerQ.find(window.AP_POptions.variantWrapper);
          }
          index = "before" == position ? 0 : selectorAll.length - 1;
          if (selectorAll?.length > 0) {
            elementProductPage = $(selectorAll[index]);
            if (
              index > 0 &&
              selectorAll[index].closest(".product-form__option.no-js")
            ) {
              elementProductPage = $(selectorAll[index - 1]);
            }
          } else {
            let findQuantity = elementProductPageSelector?.find(
              ".product-form__info-item--quantity"
            );
            if (findQuantity) elementProductPage = findQuantity;
          }
          break;
        case "atc":
          elementProductPage = elementProductPageSelector?.find(
            window.AP_POptions.addToCartButton
          );
          if (!elementProductPage || elementProductPage.length === 0) {
            elementProductPage = elmContainerQ.find(
              window.AP_POptions.addToCartButton
            );
          }
          break;
        case "selector":
          if (widget && widget.selector) {
            elementProductPage = elementProductPageSelector?.find(
              widget.selector
            );
            if (elementProductPage?.length === 0) {
              elementProductPage = elmContainerQ.find(widget.selector);
            }
            if (elementProductPage?.length === 0) {
              elementProductPage = elementProductPageSelector?.find(
                window.AP_POptions.addToCartButton
              );
            }
          }
          break;

        case "default":
          if (
            elmContainerQ.find("div.ecom__avis-plus--product-options").length
          ) {
            elementProductPage = elmContainerQ
              .find("div.ecom__avis-plus--product-options")
              .first();
          } else if (elmContainerQ.find("[id^='cd-div-append-']")?.length) {
            elementProductPage = elmContainerQ
              .find("[id^='cd-div-append-']")
              .first();
          } else {
            elmContainerQ = elmContainerQ.find("div").first();
            if (elmContainerQ.find("form").first()) {
              elmContainerQ = elmContainerQ.find("form").first();
            }

            elementProductPage =
              elementProductPageSelector &&
                (elementProductPageSelector.length === undefined ||
                  elementProductPageSelector.length > 0)
                ? $(elementProductPageSelector)
                : elmContainerQ;
          }
      }

      switch (position) {
        case "before":
          elementProductPage &&
            (elementProductPage.length === undefined ||
              elementProductPage?.length > 0)
            ? elementProductPage.length
              ? containerOptionAvis.insertBefore(elementProductPage[0])
              : containerOptionAvis.insertBefore(elementProductPage)
            : elementProductPageSelector?.prepend(containerOptionAvis);
          break;
        case "after":
          elementProductPage &&
            (elementProductPage.length === undefined ||
              elementProductPage?.length > 0)
            ? elementProductPage.length
              ? containerOptionAvis.insertAfter(elementProductPage[0])
              : containerOptionAvis.insertAfter(elementProductPage)
            : elementProductPageSelector?.prepend(containerOptionAvis);
          break;
        case "prepend":
          elementProductPage &&
            (elementProductPage.length === undefined ||
              elementProductPage?.length > 0)
            ? elementProductPage.prepend(containerOptionAvis)
            : elementProductPageSelector?.prepend(containerOptionAvis);
          break;
        case "append":
          elementProductPage &&
            (elementProductPage.length === undefined ||
              elementProductPage?.length > 0)
            ? elementProductPage.append(containerOptionAvis)
            : elementProductPageSelector?.prepend(containerOptionAvis);
          break;
        default:
          elementProductPageSelector?.prepend(containerOptionAvis);
      }

      if (window.ap_front_settings.shop_id === "57985335363") {
        let elementRender = elementProductPageSelector
          .find(".core__blocks--body > .ecom-block:has(.ecom-product-single__add-to-cart)")
          .first();
        elementRender.length
          ? containerOptionAvis.insertBefore(elementRender[0])
          : containerOptionAvis.insertBefore(elementRender);
      }

      if (typeof window.removeDisabledBtnAddCart === 'function') {
        setTimeout(window.removeDisabledBtnAddCart, 200);
      }
    }

    function createAvisOptionContainer(
      productInfo,
      productId,
      elemOptionAvisContainer,
      templ_class
    ) {
      // Not product page
      if (productId != apoProductDefault) {
        let container = elemOptionAvisContainer.querySelector(
          `.${container_AP_POptions}`
        );
        if (container) {
          return $(container);
        }

        let containerOptionAvis = $(
          "<div class=" +
          container_AP_POptions +
          (templ_class ? ` ${templ_class} ` : "") +
          "></div>"
        );

        // Find form productPage
        findFormGenOoption(elemOptionAvisContainer, productId, false);
        appendOptionByWidget(
          customizeryConfig,
          $(elemOptionAvisContainer),
          containerOptionAvis,
          productInfo,
          true,
          productId
        );

        return containerOptionAvis;
      }

      let editOptionPopup = document.querySelector(
        "[data-avis-cart-popup-form] .avis-popupBody"
      );
      if (editOptionPopup) {
        let containerPopup = editOptionPopup.querySelector(
          "#" + container_AP_POptions
        );
        if (containerPopup) return $(containerPopup);
      } else {
        let exitAvis = document.querySelector(`.${container_AP_POptions}[data-product='${productId}']`);
        if (exitAvis){
          if (!formProductGenOptionJs[productId]){
            // Find form productPage
            findFormGenOoption(elemOptionAvisContainer, productId, editOptionPopup);
          }
          return $(exitAvis);
        }
      }

      let exitContainerAvisTheme = document.querySelector(`.${container_AP_POptions}:not([data-product])`);
      let containerOptionAvis = null;
      let isContainerAvisTheme = false;
      if (exitContainerAvisTheme) {
        isContainerAvisTheme = true;
        containerOptionAvis = $(exitContainerAvisTheme);
      }
      else {
        containerOptionAvis = $(
          "<div class=" +
          container_AP_POptions +
          " id=" +
          container_AP_POptions +
          "></div>"
        );
      }
      console.log("create container_AP_POptions");
      containerOptionAvis[0].setAttribute("data-product", productId);
      if (
        templ_class &&
        containerOptionAvis?.className?.indexOf(templ_class) > -1
      )
        containerOptionAvis.classList.add(templ_class);

      // Find form productPage
      findFormGenOoption(elemOptionAvisContainer, productId, editOptionPopup);

      if (editOptionPopup) {
        $(editOptionPopup).prepend(containerOptionAvis);
      } else {
        if (!isContainerAvisTheme) {
          appendOptionByWidget(
            customizeryConfig,
            $(document),
            containerOptionAvis,
            productInfo,
            false,
            productId
          );
        }
      }
      return containerOptionAvis;
    }

    function findFormGenOoption(
      elemOptionAvisContainer,
      productId,
      editOptionPopup
    ) {
      let size_media = window.innerWidth;
      let isFormOk = false;
      formProductGenOptionJs[productId] =
        productId !== apoProductDefault ? elemOptionAvisContainer : null;


      if (shop_id === "69450924331") {
        window.AP_POptions.listKeyAppendOptionPG = [".main-product form[action='/cart/add'][data-type='add-to-cart-form']:not(.installment)"].concat(window.AP_POptions.listKeyAppendOptionPG);
      }
      function handleFixEcomWidget() {
        if (shop_id === "57985335363") {
          if (size_media > 1024) {
            window.AP_POptions.listKeyAppendOptionPG = ["form[action$='/cart/add'].ec-hide-on-tablet"].concat(window.AP_POptions.listKeyAppendOptionPG);
          } else {
            window.AP_POptions.listKeyAppendOptionPG = ["form[action$='/cart/add'].ec-hide-on-desktop"].concat(window.AP_POptions.listKeyAppendOptionPG);
          }
        }
      }
      handleFixEcomWidget();

      if (window.AvisOptionsData?.formAddCart?.length > 0) {
        window.AP_POptions.listKeyAppendOptionPG = window.AvisOptionsData?.formAddCart.concat(window.AP_POptions.listKeyAppendOptionPG);
      }

      window.addEventListener("resize", handleFixEcomWidget);

      for (let key of window.AP_POptions.listKeyAppendOptionPG) {
        let element = elemOptionAvisContainer.querySelectorAll(key);
        if (element?.length > 0) {
          for (let elm of element) {
            let buttonAddCart = elm.querySelector(
              window.AP_POptions.addToCartButton
            );
            if (buttonAddCart) {
              if (window.ap_front_settings.page_type === "product") {
                if (getDeviceTypeV1() === "mobile" || getDeviceTypeV2() === "mobile") {
                  if (elm.className.includes("ec-hide-on-mobile")) continue;
                }
              }
              formProductGenOptionJs[productId] = elm;
              isFormOk = true;
              break;
            } else {
              formProductGenOptionJs[productId] = elm;
              if (editOptionPopup) {
                isFormOk = true;
              }
            }
          }
        }
        if (isFormOk) break;
      }
      if (shop_id === "87009263949" || shop_id === "87316758793") {
        formProductGenOptionJs[productId] = elemOptionAvisContainer.querySelector("form[id='AddToCartForm']");
      }
    }

    async function genInputOptions(productId = apoProductDefault) {
      let inputHiddensContainer = document.querySelector(`.avis-input-hiddens[data-productid='${productId}']`);
      if (!inputHiddensContainer) return;
      let totalPriceBundle = 0;
      let hasBundle = false;
      for (const labelCart in priceModAll[productId].activeVariants) {
        let optionAddOn = priceModAll[productId].activeVariants[labelCart];
        let typePriceQuantity = optionAddOn.$input.data("quantity-price-type");
        let priceAdd = priceMod.formatMoneyToNumber(optionAddOn.price);
        if (optionAddOn.isShow && optionAddOn.isBundle && priceAdd != "0")
        {
          hasBundle = true;
          if (typePriceQuantity && typePriceQuantity === "any")
          {
            if (optionAddOn.quantity) totalPriceBundle += parseFloat(priceAdd);
          }
          else
          {
            if (shop_id === "87662559515" && parseToBool(optionAddOn.isOneTime))  continue;
            totalPriceBundle += parseFloat(priceAdd) * parseInt(optionAddOn.quantity ?? 1);
          }
        }
      }

      let inputHiddenOptions = inputHiddensContainer.querySelector("input.apo-options_hidden");
      if (!hasBundle)
      {
        if (inputHiddenOptions) inputHiddenOptions.remove();
        return;
      }
      let inputHiddens = inputHiddensContainer.querySelectorAll("input[type='hidden']:not([disabled])");
      if (inputHiddens.length > 0)
      {
        let apoOptions = {};
        inputHiddens.forEach((input) => {
          const match = input.getAttribute("name")?.match(/\[(.*?)\]/);
          if (match)
          {
            let name = match[1];
            let value = input.value;
            if (name !== "_apo_options")
            {
              apoOptions[name] = value;
            }
            else inputHiddenOptions = input;
          }
        });
        if (!inputHiddenOptions)
        {
          inputHiddenOptions = document.createElement("input");
          inputHiddenOptions.setAttribute("type", "hidden");
          inputHiddenOptions.setAttribute("name", "properties[_apo_options]");
          inputHiddenOptions.classList.add("apo-options_hidden");
          inputHiddensContainer.appendChild(inputHiddenOptions);
        }
        apoOptions["_apo_addon_options"] = String(parseFloat(totalPriceBundle));
        inputHiddenOptions.value = JSON.stringify(apoOptions);
      }
    }

    async function createAvisContainerHidden(
      elemOptionAvisContainer,
      productId,
      fieldName,
      value,
      elem,
      elementName,
      isQuantity = false,
      elmQuantity
    ) {
      if (isNotUseAvisHidden) return;
      let avisAddCartFormActive = formProductGenOptionJs[productId]
        ? $(formProductGenOptionJs[productId])
        : null;
      let avisAddCartFormActiveJS = formProductGenOptionJs[productId];

      if (!avisAddCartFormActive || avisAddCartFormActive.length == 0) {
        console.log("Not Found Form Product");
        return;
      }

      let containerOptionHiddenAvis = avisAddCartFormActiveJS.querySelector(
        `.${window.AP_POptions.classContainerHidden}`
      );
      if (containerOptionHiddenAvis)
        containerOptionHiddenAvis = $(containerOptionHiddenAvis);

      if (containerOptionHiddenAvis && containerOptionHiddenAvis.length > 0) {
      } else {
        containerOptionHiddenAvis = $(
          `<div data-productid='${productId}' class='${window.AP_POptions.classContainerHidden}'></div>`
        );
        avisAddCartFormActive.append(containerOptionHiddenAvis);
      }

      let newFieldName = fieldName?.replaceAll('"', "&quot;");
      let findInput = containerOptionHiddenAvis.find(
        `input[temp-name="${newFieldName}"]`
      );

      if (elem) {
        let elementBoxOption = null;
        // When checked option value for checkbox
        if (elementName == "fieldset") {
          elementBoxOption = elem;
        } else {
          let parents = elem.parents(".avp-value-grid");
          if (parents.length > 0) {
            elementBoxOption =
              parents.parent().length > 0 ? parents.parent() : parents;
          }
        }
        if (!elementBoxOption) elementBoxOption = elem;

        if (!isQtyDefaultZero && !isQuantity) {
          elementBoxOption.find("input.avp-qty-input").each(function () {
            $(this).attr("disabled", "disabled");
          });

          elementBoxOption.find("button.avp-qty-button").each(function () {
            $(this).attr("disabled", "disabled");
          });
        }
        let totalQuantity = 0;
        elementBoxOption.find(":checked").map(function () {
          let quantityInput = $(this)
            .parents(".avp-value-grid")
            .find("input.avp-qty-input");
          if (quantityInput && quantityInput.length > 0) {
            let quantity = quantityInput.val();
            let inputChecked = this;
            if ($(this).val()) {
              if (isQtyDefaultZero) {
                if (!quantity) quantity = 0;
                else quantity = parseInt(quantity);
                let min = quantityInput.attr("min");
                if (min) min = parseInt(min);
                else {
                  let dataMin = quantityInput.attr("data-min");
                  if (dataMin) min = parseInt(dataMin);
                }
                let max = quantityInput.attr("max");
                if (max) max = parseInt(max);
                if (quantity < min) quantity = min;
                if (quantity > max) quantity = max;
                if (!isQuantity) quantityInput.val(quantity);

                let quantityButtonCut = $(this)
                  .parents(".avp-value-grid")
                  .find("button.avp-qty-cut");
                quantityButtonCut.each(function () {
                  if (
                    quantity === 0 ||
                    ((inputChecked.getAttribute("data-type") ===
                      "swatch_select_color" ||
                      inputChecked.getAttribute("data-type") ===
                      "swatch_select_image" ||
                      inputChecked
                        .closest("select")
                        ?.getAttribute("data-type") === "select") &&
                      quantity === min)
                  ) {
                    if (
                      inputChecked
                        .closest("select")
                        ?.getAttribute("data-type") === "select"
                    ) {
                      if (
                        inputChecked.closest("select")?.querySelector("option")
                          ?.value
                      ) {
                        $(this).attr({ disabled: "disabled" });
                      }
                    } else if (quantity === 0 || quantity < min) {
                      $(this).attr({ disabled: "disabled" });
                    } else if (
                      inputChecked.closest("ul")?.querySelector("[field-name]")
                        ?.value
                    ) {
                      $(this).attr({ disabled: "disabled" });
                    }
                  } else if (min && quantity < min) { }
                  else $(this).removeAttr("disabled");
                });
                let quantityButtonAdd = $(this)
                  .parents(".avp-value-grid")
                  .find("button.avp-qty-add");
                quantityButtonAdd.each(function () {
                  if (!max || (max && parseInt(quantity) < parseInt(max))) {
                    $(this).removeAttr("disabled");
                  } else {
                    $(this).attr({ disabled: "disabled" });
                  }
                });
                totalQuantity += parseInt(quantity);
                return `${$(this).val()} * ${parseInt(quantity)}`;
              } else {
                if (!isQuantity) {
                  quantityInput.removeAttr("disabled");
                }

                let min = quantityInput.attr("min");
                let max = quantityInput.attr("max");
                if (!quantity) quantity = min > 0 ? min : 1;

                let quantityButtonCut = $(this)
                  .parents(".avp-value-grid")
                  .find("button.avp-qty-cut");
                quantityButtonCut.each(function () {
                  if (isQtyDefaultZero) {
                    if (quantity === 0 || (min && parseInt(quantity) < parseInt(min))) {
                      $(this).attr({ disabled: "disabled" });
                    } else $(this).removeAttr("disabled");
                  } else {
                    if (min && parseInt(quantity) > parseInt(min)) {
                      $(this).removeAttr("disabled");
                    } else {
                      $(this).attr({ disabled: "disabled" });
                    }
                  }
                });

                let quantityButtonAdd = $(this)
                  .parents(".avp-value-grid")
                  .find("button.avp-qty-add");
                quantityButtonAdd.each(function () {
                  if (!max || (max && parseInt(quantity) < parseInt(max))) {
                    $(this).removeAttr("disabled");
                  } else {
                    $(this).attr({ disabled: "disabled" });
                  }
                });

                totalQuantity += parseInt(quantity);
                return `${$(this).val()} * ${parseInt(quantity)}`;
              }
            } else if (isQtyDefaultZero) {
              let quantityButtonAdd = $(this)
                .parents(".avp-value-grid")
                .find("button.avp-qty-add");
              quantityButtonAdd.each(function () {
                if (
                  inputChecked.getAttribute("data-type") ===
                  "swatch_select_color" ||
                  inputChecked.getAttribute("data-type") ===
                  "swatch_select_image" ||
                  inputChecked.closest("select")?.getAttribute("data-type") ===
                  "select"
                ) {
                  $(this).attr({ disabled: "disabled" });
                }
              });
              quantityInput.val(0);
            }
          }
          totalQuantity += 1;
          return this.value;
        });

        // Reset input quantity to min when unchecked
        if (isQtyDefaultZero) {
          elementBoxOption.find("label input:not(:checked)").each(function () {
            let inputQuantityElm = $(this)
              .closest(".avp-value-grid")
              .find("input.avp-qty-input");
            let quantityInput = inputQuantityElm
              ? inputQuantityElm[0]?.value ?? 0
              : 0;
            let min = inputQuantityElm.attr("min");
            if (min) min = parseInt(min);
            else {
              let dataMin = inputQuantityElm.attr("data-min");
              if (dataMin) min = parseInt(dataMin);
            }
            let max = inputQuantityElm.attr("max");
            if (max) max = parseInt(max);
            if (
              inputQuantityElm &&
              (!min || parseInt(quantityInput) >= min) &&
              (!max || parseInt(quantityInput) <= max)
            ) {
              inputQuantityElm.val(0);
              let buttonCut = $(this)
                .closest(".avp-value-grid")
                .find(".avp-qty-cut");
              if (buttonCut) buttonCut.attr({ disabled: "disabled" });
              let buttonAdd = $(this)
                .closest(".avp-value-grid")
                .find(".avp-qty-add");
              if (buttonAdd) buttonAdd.removeAttr("disabled");
            }
          });
        } else {
          elementBoxOption
            .find("input[type=checkbox]:not(:checked)")
            .each(function () {
              let inputQuantityElm = $(this)
                .closest(".avp-value-grid")
                .find("input.avp-qty-input");
              if (inputQuantityElm)
                inputQuantityElm.val(inputQuantityElm.attr("min"));
            });
        }

        if (elementBoxOption && elementBoxOption.data("max_total_qty")) {
          // Toggle input error display
          window.AP_POptions.apps.productoptions.toggleInputError(
            elementBoxOption,
            true
          );

          // Calculate quantities and limits
          let maxTotalQty = elementBoxOption.data("max_total_qty");
          let maxSelections = elementBoxOption.data("max_selections");
          const selectedCount = elementBoxOption.find(
            "input[type=checkbox]:checked"
          ).length;

          // Handle when total quantity exceeds max total quantity
          if (totalQuantity >= maxTotalQty) {
            // Reset input quantity
            if (elmQuantity) {
              let tempQuantity = totalQuantity - maxTotalQty;
              let newQuantity =
                parseInt($(elmQuantity).val(), 10) - tempQuantity;
              $(elmQuantity).val(newQuantity);
            }

            // Disable quantity increase buttons
            elementBoxOption.find(":checked").each(function () {
              let quantityButtonAdd = $(this)
                .closest(".avp-value-grid")
                .find("button.avp-qty-add");
              quantityButtonAdd.each(function () {
                $(this).attr({ disabled: "disabled" });
              });
            });
          }

          // Disable unchecked checkboxes when total quantity plus minimum quantity exceeds max total quantity
          elementBoxOption
            .find("input[type=checkbox]:not(:checked)")
            .each(function () {
              let quantityWrapper = $(this).closest(".avp-value-grid");
              let inputQuantityElm = quantityWrapper.find(
                "input.avp-qty-input"
              );
              if (inputQuantityElm) {
                let minQty = 0;
                if (inputQuantityElm.attr("min"))
                  minQty = parseInt(inputQuantityElm.attr("min"), 10);
                else if (inputQuantityElm.attr("data-min"))
                  minQty = parseInt(inputQuantityElm.attr("data-min"), 10);
                let maxQty = 0;
                if (inputQuantityElm.attr("max"))
                  maxQty = parseInt(inputQuantityElm.attr("max"), 10);
                let quantityInput = inputQuantityElm?.[0]?.value;
                if (!quantityInput) quantityInput = 0;
                quantityInput = parseInt(quantityInput);
                if (totalQuantity + minQty <= maxTotalQty) {
                  this.removeAttribute("disabled");
                } else {
                  this.disabled = "disabled";
                }
                if (isQtyDefaultZero) {
                  let buttonAdd = quantityWrapper.find(".avp-qty-add");
                  if (buttonAdd) {
                    if (
                      totalQuantity + quantityInput < maxTotalQty &&
                      (!maxQty || quantityInput < maxQty)
                    ) {
                      buttonAdd.removeAttr("disabled");
                    } else buttonAdd.attr("disabled", "disabled");
                  }
                }
              }
            });

          // Disable unchecked checkboxes if max selections reached
          if (maxSelections && selectedCount >= maxSelections) {
            elementBoxOption
              .find("input[type=checkbox]:not(:checked)")
              .each(function () {
                this.disabled = "disabled";
              });
          }

          // Update notification for total quantity max
          if (elementBoxOption.data("max_total_qty")) {
            let notify =
              window.AP_POptions.apps.productoptions.strings.totalQuantityMax;
            if (
              customizeryConfig.text_customization_notification_max_quantity
            ) {
              notify =
                customizeryConfig.text_customization_notification_max_quantity;
            }
            elementBoxOption
              .find(".avp-min-max-total")
              .html(
                notify
                  .replace("{selected_quantity}", totalQuantity)
                  .replace("{max_total_quantity}", maxTotalQty)
              );
          }
        }

        let tempValueArr = elementBoxOption.find(":checked").map(function () {
          let quantityInput = $(this)
            .parents(".avp-value-grid")
            .find("input.avp-qty-input");
          if (quantityInput && quantityInput.length > 0) {
            let quantity = quantityInput.val();
            let min = quantityInput.attr("min");
            if (!quantity) quantity = min > 0 ? min : 1;
            let valuedata = $(this).val();
            if (valuedata) {
              var variantString = $(this).data("variant-string");
              if (priceModAll[productId].activeVariants[variantString]) {
                priceModAll[productId].activeVariants[variantString][
                  "quantity"
                ] = parseInt(quantity);
              }

              // Update quantity in result item of combo
              let optionSelector = quantityInput.closest(".avp-option[class*=ap-options__combo]");
              if (optionSelector?.length) {
                let qtyResult = optionSelector[0].querySelector(
                  `.combo_option-result-item[data-value='${valuedata}'] .avp-qty-result`
                );
                if (qtyResult && qtyResult.innerText !== String(quantity)) {
                  qtyResult.innerText = quantity;
                }
              }

              return `${valuedata} * ${parseInt(quantity)}`;
            }
          }
          return this.value;
        });
        let tempValue = tempValueArr.get().join(", ");
        if (tempValue) value = tempValue;

        if (
          !tempValue &&
          elementBoxOption.parent("span").find(".avp-min-max-total")
        ) {
          elementBoxOption.parent("span").find(".avp-min-max-total").html("");
        }
      }

      if (findInput && findInput.length > 0) {
        if (value) {
          if (findInput.attr("disabled")) findInput.removeAttr("disabled");
        } else findInput.attr("disabled", "disabled");
        findInput.val(value);
      } else {
        let inputHidden = e._createHiddenInput(
          elemOptionAvisContainer,
          productId,
          fieldName,
          true
        );

        if (value) {
          inputHidden.val(value);
          if (inputHidden.attr("disabled")) inputHidden.removeAttr("disabled");
        } else inputHidden.attr("disabled", "disabled");

        containerOptionHiddenAvis.append(inputHidden);
      }

      setTimeout(function () {
        genInputOptions(productId);
        if (shop_id === "25171918900") {
          window.dispatchEvent(new CustomEvent("apo-UpdateAjaxButtons", {}));
        }
      }, 200);
      setTimeout(function () {
        getAllProperties(productId);
      }, 300);

      if (!customizeryConfig?.cart_page?.edit_options) return;

      if (
        !avisAddCartFormActiveJS.querySelector(
          "input[name='properties[_has_apo]']"
        )
      ) {
        let inputHidden = e._createHiddenInput(
          elemOptionAvisContainer,
          productId,
          "_has_apo",
          true
        );
        inputHidden.val(true);
        containerOptionHiddenAvis.append(inputHidden);
      }
    }

    function hideConditionLogic(
      e,
      productInfo,
      productId,
      elemOptionAvisContainer
    ) {
      var o = conditionalLogicInstances[productId];
      if (
        ((e =
          e ||
          createAvisOptionContainer(
            productInfo,
            productId,
            elemOptionAvisContainer
          )),
          o.active && !e.hasClass("io-inputs-loading"))
      ) {
      }
    }
    function i_lasted(productInfo, productId, elemOptionAvisContainer) {
      var i = conditionalLogicInstances[productId];
      i.active && i.runAfterTimeouts(function () { });

      createTotalAdd(elemOptionAvisContainer, productId);
      let btnsAddToCartDisabled =
        window.ap_front_settings.btn_add_to_cart_disabled;
      if (btnsAddToCartDisabled && btnsAddToCartDisabled.length) {
        for (let btnAddTocart of btnsAddToCartDisabled) {
          btnAddTocart.disabled = false;
        }
      }
    }
    function appendOption(
      optionInfo,
      boxOption,
      productInfo,
      productId,
      formContainer,
      elemOptionAvisContainer
    ) {
      var formContainer = formContainer,
        conditionlogic = conditionalLogicInstances[productId];
      if (formContainer) {
        hideConditionLogic(
          formContainer,
          productInfo,
          productId,
          elemOptionAvisContainer
        );
        if (optionInfo.group_parent) {
          let findChidlGroup = formContainer[0].querySelector(
            `.apo-group-child-${optionInfo.group_parent}`
          );
          if (findChidlGroup) {
            findChidlGroup.append(boxOption[0]);
          }
        } else if (optionInfo.step_parent) {
          let findChidlStep = formContainer[0].querySelector(
            `.apo-step-child-${optionInfo.step_parent}`
          );
          if (findChidlStep) {
            findChidlStep.append(boxOption[0]);
          }
        } else formContainer.append(boxOption);

        eventApi.fieldLoad(
          {
            name: optionInfo.label_cart,
            element: boxOption,
            fieldConfig: optionInfo,
            hasConditionalLogic:
              !!conditionlogic.reactions[optionInfo.label_cart],
          },
          productId
        );
      }

      if (optionInfo.type == "color") {
        let inputColor = $("input[field-name='" + optionInfo.label_cart + "']");
        if (inputColor) {
          createAvisContainerHidden(
            elemOptionAvisContainer,
            productId,
            optionInfo.label_cart,
            inputColor.val()
          );
        }
      }

      if (optionInfo.type === "date") {
        let weeks = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
        let yes = "Confirm";
        let timeTxt = ["Time", "Start Time", "End Time"];
        let clear = "Clear";
        if (shop_id === "90590839124") {
          weeks = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
          timeTxt = ["Fecha", "Start Time", "End Time"];
          yes = "Confirmar";
          clear = "Borrar";
        }
        if (shop_id === "1597014052") {
          weeks = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"];
          // timeTxt = ["Fecha", "Start Time", "End Time"];
          yes = "CONFIRMAR";
          clear = "BORRAR";
        }
        var options = {
          theme: {
            bgcolor: "#275efe",
            color: "#ffffff",
            pnColor: "#53c0d9",
          },
          isToday: false,
          onClose: false,
          trigger: "click",
          language: {
            name: "en",
            month: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
            ],
            weeks: weeks,
            times: ["Hour", "Minute", "Second"],
            timetxt: timeTxt,
            backtxt: "Back",
            clear: clear,
            today: "Now",
            yes: yes,
            close: "Close",
          },
          format: optionInfo.date_format,
          donefun: function (t) {
            $(`#${optionInfo.element_id}`).change();
          },
        };

        // Set mindate
        switch (optionInfo.min_date_type) {
          case "today":
            options.minDate = formatDate(new Date(), "yyyy-MM-dd") + " ";
            break;

          case "designated":
            if (optionInfo.min_date_value) {
              options.minDate = optionInfo.min_date_value;
            }

          case "fix_number_days":
            if (optionInfo?.date_fixed_min_days) {
              let newDateMin = new Date();
              newDateMin.setDate(
                newDateMin.getDate() + parseInt(optionInfo?.date_fixed_min_days)
              );
              options.minDate = formatDate(newDateMin, "yyyy-MM-dd") + " ";
            }
        }
        // Set maxdate
        switch (optionInfo.max_date_type) {
          case "today":
            options.maxDate = formatDate(new Date(), "yyyy-MM-dd") + " ";
            break;

          case "designated":
            if (optionInfo.max_date_value) {
              options.maxDate = optionInfo.max_date_value;
            }

          case "fix_number_days":
            if (optionInfo?.date_fixed_max_days) {
              let newDateMax = new Date();
              newDateMax.setDate(
                newDateMax.getDate() + parseInt(optionInfo?.date_fixed_max_days)
              );
              options.maxDate = formatDate(newDateMax, "yyyy-MM-dd") + " ";
            }
        }
        if (shop_id === "41697706139") {
          let dateSelector = document.querySelector(`#${optionInfo.element_id}`);
          if (dateSelector && optionInfo.date_format) {
            dateSelector.value = formatDate(new Date(), optionInfo.date_format.replace("YYYY", "yyyy").replace("YY", "yy").replace("DD", "dd"));
            $(`#${optionInfo.element_id}`).change();
          }
        }
        window.ap_front_settings.jeDate(`#${optionInfo.element_id}`, options);
      }

      if (optionInfo.type === "color") {
        window.ap_front_settings.jeColor(`#${optionInfo.element_id}`, options);
      }
      if (optionInfo.type === "file") {
        const fileFlag = {
          is_multi_files: optionInfo.is_multi_files ?? false,
          is_cropper: optionInfo.is_cropper ?? false,
          max_file_size: optionInfo.max_file_size ?? "1",
          min_file_size: optionInfo.min_file_size ?? "0",
          max_file_upload: optionInfo.max_file_upload ?? "5",
          option_file_type: optionInfo.option_file_type ?? "all",
          option_file_type_custom: optionInfo.option_file_type_custom ?? [],
        };
        if (window?.ap_front_settings?.file &&
        typeof window.ap_front_settings.file === "function") {
          window.ap_front_settings.file(
          elemOptionAvisContainer,
          productId,
          null,
          `#${optionInfo.element_id}`,
          optionInfo,
          $,
          createAvisContainerHidden,
          priceMod.variantChange,
          optionInfo.default_value,
          fileFlag,
          isNewValidateShop,
          isShopUploadShopfiy,
          e.eventListnerSwatchPersonalizer
        );
        }
      }

      if (optionInfo.type === "font") {
        window.ap_front_settings.font(
          elemOptionAvisContainer,
          productId,
          `#${optionInfo.element_id}-font`,
          $,
          createAvisContainerHidden,
          priceMod.variantChange,
          optionInfo.default_value,
          shop_id,
          optionInfo.font_selector,
          optionInfo.font_selected,
          optionInfo.custom_font_selected,
          optionInfo.applied_for,
          optionInfo.all_custom_font,
          optionInfo?.number_of_fonts,
          optionInfo?.default_value,
        );
      }
    }

    function formatDate(date, format) {
      var t = format;
      var i = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds(),
      };
      for (var e in (/(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        )),
        i))
        new RegExp("(" + e + ")").test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ("00" + i[e]).substr(("" + i[e]).length)
          ));
      return t;
    }
    function createLinkCss(href) {
      if (!href) return;

      let mainCssSelector = document.createElement("link");
      mainCssSelector.setAttribute("href", href);
      mainCssSelector.setAttribute("rel", "stylesheet");
      mainCssSelector.setAttribute("type", "text/css");
      document.head.appendChild(mainCssSelector);
    }

    async function mainRenderOptions(
      optionSets,
      productInfo,
      productId,
      elemOptionAvisContainer
    ) {
      if (window.ap_front_settings.shop_id === "64896630969") {
        var divAvis = elemOptionAvisContainer.querySelector(
          `.${container_AP_POptions}`
        );
        if (divAvis) {
          $(divAvis).empty();
        }
      }

      if(window.ap_front_settings.shop_id === "26392690759" && productInfo) {
        window.apo_data_productInfo = productInfo;
      }

      let productHandles = [];
      let variantIdsAC = [];
      let productIdsData = [];
      window.avisOpions[productInfo.id] = [];
      optionSets.forEach((optionSet) => {
        if (optionSet.options && optionSet.options.length > 0) {
          let avisLocalesByOs = window.apoOptionLocales.avisOptions[`avis_locale_${window.apoOptionLocales.locale}_${optionSet.id}`];
          let listLabelCartLocale = {};
          optionSet.options.forEach((option) => {
            if (avisLocalesByOs && option?.key) {
              let optionLocales = avisLocalesByOs[`${optionSet.id}_${option.key}`];
              if (optionLocales) {
                for (let key in optionLocales) {
                  if (key !== "option_values") {
                    if (optionLocales[key] && key !== "conditional_logic" && optionLocales[key] !== '<p><br></p>') {
                      if (key === "label_cart") {
                        listLabelCartLocale[option[key]] = optionLocales[key];
                      }
                      option[key] = optionLocales[key];
                    }
                  }
                  else if (option.option_values?.length) {
                    option.option_values.forEach((optionValue) => {
                      let optionValueLocales = optionLocales["option_values"][optionValue.value_id];
                      if (optionValueLocales) {
                        for (let keyValue in optionValueLocales) {
                          if (optionValueLocales[keyValue]) optionValue[keyValue] = optionValueLocales[keyValue];
                        }
                      }
                    });
                  }
                }
              }
            }
            if (option?.option_values) {
              option.option_values.filter(
                (x) =>
                  x.handle &&
                  (x.type == "useexistingvariant" || x.type == "chargeorbundle")
              ).forEach((optionValue) => {
                if (optionValue?.productVariationId && !variantIdsAC.includes(optionValue?.productVariationId)) {
                  variantIdsAC.push(optionValue?.productVariationId);
                }
                if (!productHandles.includes(optionValue.handle))
                  productHandles.push(optionValue.handle);

                if (shop_id === "90277118266" && !productIdsData.includes(optionValue.productId)) {
                  productIdsData.push(optionValue.productId);
                }
              });
              if (option?.option_url === OPTION_URL.group) {
                option.option_values.forEach((optionValue) => {
                  let handle = optionValue?.url?.split("/").pop();
                  if (handle) {
                    productHandles.push(handle);
                  }
                });
              }
              option.option_values?.filter(x => x?.swatch?.file_image_url?.includes("https://undefined")).forEach((optionValue) => {
                optionValue.swatch.file_image_url = optionValue.swatch.file_image_url.replace("https://undefined", "https://product-options-img.avisplus.io");
              });
            }
            let newOption = { label_product: option.label_product, label_cart: option.label_cart };
            if (option?.option_values) {
              newOption.option_values = option.option_values.map((optionValue) => {
                return {
                  value: optionValue.value ?? ""
                };
              });
            }
            window.avisOpions[productInfo.id].push(newOption);
          });
          if (avisLocalesByOs) {
            let optionHasCondition = optionSet.options.filter(x => x?.conditional_logic?.condition_items?.length > 0);
            optionHasCondition.forEach((e) => {
              let optionLocales = avisLocalesByOs[`${optionSet.id}_${e.key}`];
              e.conditional_logic.condition_items.forEach((x, index) => {
                if (optionLocales) {
                  let condiLocales = optionLocales?.conditional_logic?.condition_items;
                  if (condiLocales && condiLocales.length >= index && condiLocales[index]?.field === x.field) {
                    x.value = condiLocales[index]?.value;
                  }
                }
                if (listLabelCartLocale[x.field]) x.field = listLabelCartLocale[x.field];
              });
            });
          }
          // Get conditional logic from parent
          optionSet.options.forEach((option) => {
            if (option.group_parent) {
              let findGroupParent = optionSet.options.find((opt) => opt.group_id === option.group_parent);
              if (findGroupParent && findGroupParent?.conditional_logic?.condition_items?.length > 0) {
                option.conditional_logic_parent = findGroupParent.conditional_logic;
              }
            }
          });
        }
      });

      // r.length > 1 && spLog(!0, "multiple containers", !0), r.empty();
      if ((["60373073962", "78778761563", "94538563898", "80678322490", "73848324374", "14252734", "79397683467", "56289263793", "72331198714", "62129143868", "85588181272", "90415464790", "65926037670","90748060028","70457458935", "46525644963", "57908756551"].includes(shop_id) ||
        (isDesignV2 &&  !["41468657828", "90920976770"].includes(shop_id))) && variantIdsAC.length > 0 && Shopify.locale) {
        function chunkArray(array, chunkSize) {
          const result = [];
          for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
          }
          return result;
        }
        let chunkedVariantIds = chunkArray(variantIdsAC, 250);
        await Promise.all(chunkedVariantIds.map(async (variantIds) => {
          let queryVariant = await pluginAction.queryVariants(Shopify.locale, variantIds);
          let variantsRes = await pluginAction.fetchStoreFront(queryVariant);
          if (variantsRes?.data?.nodes?.length) {
            for (let variantGra of variantsRes?.data?.nodes) {
              priceMod.productVariantAC.push({
                id: variantGra?.id?.split('/')?.pop(),
                price: variantGra?.price.amount,
                available: variantGra?.availableForSale,
                quantityAvailable: variantGra?.quantityAvailable,
                title: variantGra?.title,
                currentlyNotInStock: variantGra?.currentlyNotInStock,
                compare_at_price: variantGra?.compareAtPrice?.amount ?? 0
              });
            }
          }
        }));

      }
      else if (productHandles.length > 0)
        await priceMod.getAllProductVariantBundles(productHandles);

      if (productIdsData.length > 0 && Shopify.locale) {
        let queryProduct = await pluginAction.queryProductInfo(Shopify.locale ?? "en", productIdsData);
        let productsGra = await pluginAction.fetchStoreFront(queryProduct);
        if (productsGra?.data?.nodes?.length) {
          for (let productGra of productsGra?.data?.nodes) {
            let product = {
              id: productGra?.id?.split('/').pop(),
              variants: []
            };
            for (let variantGra of productGra?.variants?.nodes) {
              product.variants.push({
                id: variantGra?.id?.split('/')?.pop(),
                price: variantGra?.price.amount,
                available: variantGra?.availableForSale,
                compare_at_price: variantGra?.compareAtPrice?.amount ?? 0
              });
            }

            priceMod.productVariantBundles.push(product);
          }
        }
      }

      //priceMod.productVariantBundles

      //createLinkCss(isCssV2 ? window.ap_front_settings?.url_css_main_v2 : window.ap_front_settings?.url_css_main_v1);
      if (
        window.ap_front_settings?.url_css_date &&
        optionSets &&
        optionSets.filter(
          (x) => x.options.filter((y) => y?.type === "date").length > 0
        ).length > 0
      ) {
        // if (isDesignV2) {
        //   createLinkCss("https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css");
        //   createLinkCss("https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/light.css");
        //   createLinkCss("https://cdn.jsdelivr.net/npm/flatpickr/dist/plugins/monthSelect/style.css");
        // } else {
          createLinkCss(window.ap_front_settings?.url_css_date);
        // }
      }
      if (!optionSets || optionSets.length === 0) return;

      let checkConditionVariant = optionSets.filter((x) =>
        x.options?.filter((y) =>
          y?.conditional_logic?.condition_items?.filter(
            (z) => z?.field === "avis_shopify_option"
          )
        )
      );
      var p = "",
        listTemplOptionSet = [],
        l = conditionalLogicInstances[productId],
        optionsetsInvalid = optionSets
          .filter(function (e, t) {
            return (
              !(!e.options || !e.options.length) && (l.init(e.options, !t), !0)
            );
          });
      checkConditionVariant && l?.s_check_input_variant(
        elemOptionAvisContainer,
        productId,
        productInfo
      );
      var d = optionsetsInvalid.map(function (optionSet, i) {
        let indexOptionSet = i;
        if (
          optionSet?.template_info?.class_name &&
          optionSet?.template_info?.css &&
          !listTemplOptionSet.includes(optionSet?.template_info?.class_name)
        ) {
          p += " " + optionSet?.template_info?.css;
        }
        let newListOption = JSON.parse(JSON.stringify(optionSet.options));
        let listOptionsSort = [];
        newListOption.filter((x) => x && !x.step_parent && !x.group_parent).forEach((option) => {
          listOptionsSort.push(option);
          switch (option.type) {
            case "option_group":
              let optionInGroup = newListOption.filter((y) => y.group_parent === option.group_id);
              if (optionInGroup.length > 0) {
                  listOptionsSort = listOptionsSort.concat(optionInGroup);
                }
              break;
            case "step":
              option?.step?.items?.forEach((stepItem) => {
                let optionInStep = newListOption.filter((y) => y.step_parent === stepItem.step_id);
                if (optionInStep.length > 0) {
                  optionInStep.forEach((optionStep) => {
                    listOptionsSort.push(optionStep);
                    if (optionStep.type === "option_group") {
                      let optionInGroup = newListOption.filter((y) => y.group_parent === optionStep.group_id);
                      if (optionInGroup.length > 0) {
                        listOptionsSort = listOptionsSort.concat(optionInGroup);
                      }
                    }
                  });
                }
              });
              break;
          }
        });

        return (
          $.each(listOptionsSort, function (t, r) {
            listOptions = listOptions.concat(r);
            if (priceMod.cartItemEdit && priceMod.cartItemEdit.properties) {
              const hasMatchingLabel = Object.keys(priceMod.cartItemEdit.properties).some(key =>
                key.startsWith(r.label_cart)
              );
              if (
                priceMod.cartItemEdit.properties.hasOwnProperty(r.label_cart) ||
                (["file", "dimension"].includes(r.type) && hasMatchingLabel)
              ) {
                if (r.is_multi_files) {
                  console.log(
                    "priceMod.cartItemEdit",
                    priceMod.cartItemEdit
                  );
                  priceMod.cartItemEdit.properties[r.label_cart] = "";
                  priceMod.cartItemEdit.properties[r.label_cart] =
                    groupValueForMultiUpload(
                      priceMod.cartItemEdit.properties
                    )[r.label_cart] ?? "";
                }
                let valueOptionInCart =
                  priceMod.cartItemEdit.properties[r.label_cart];

                if (
                  showPriceACCart &&
                  priceMod.cartItemEdit.properties["_apo_variants"] &&
                  priceMod.cartItemEdit.properties[
                    "_apo_variants"
                  ]?.indexOf(`${r.label_cart}: `) > -1
                ) {
                  let addchargeItems = priceMod.cartItemEdit.properties[
                    "_apo_variants"
                  ]
                    .split("|")
                    .filter((x) => x.indexOf(`${r.label_cart}: `) > -1);
                  for (let addchargeItem of addchargeItems) {
                    let product = priceMod.productVariantBundles.find((x) =>
                      x.variants.find(
                        (y) => addchargeItem.indexOf(String(y.id)) > -1
                      )
                    );
                    let productVariant = null;
                    if (product) {
                      productVariant = product.variants.find(
                        (y) => addchargeItem.indexOf(String(y.id)) > -1
                      );
                    }
                    else {
                      productVariant = priceMod.productVariantAC.find((x) => addchargeItem.indexOf(String(x.id)) > -1);
                    }
                    if (productVariant) {
                      let quantity = 1;
                      let quantityArr = addchargeItem.split("*");
                      if (quantityArr.length > 1) {
                        quantity = parseInt(
                          quantityArr[quantityArr.length - 1]
                        );
                      }
                      let price = productVariant.price * quantity;
                      let formatPrice =
                        priceMod.formatMoneyOnlyPrice(price);
                      let newPrice = avisFormatPrice.replace(
                        KEY_FORMAT_PRICE,
                        formatPrice
                      );
                      valueOptionInCart = valueOptionInCart.replace(
                        ` ${newPrice}`,
                        ""
                      );
                    }
                  }
                }
                if (
                  showPriceACCart &&
                  priceMod.cartItemEdit &&
                  priceMod.cartData &&
                  priceMod.cartItemEdit.properties[AvisOptionsConfig?.key_cart_order] &&
                  priceMod.cartItemEdit.properties[r.label_cart]
                ) {
                  let optionData = `Added by: ${priceMod.cartItemEdit.properties[AvisOptionsConfig?.key_cart_order]}`;
                  let keyJoin = ` ${KEY_JOIN_PRICE}`;
                  let arrValue = valueOptionInCart.split(keyJoin);
                  if (arrValue.length > 1) {
                    arrValue.pop();
                    valueOptionInCart = arrValue.join(keyJoin);
                  }
                  let addchargeItem = priceMod.cartData.find(
                    (x) =>
                      x?.properties && x?.properties[AvisOptionsConfig?.key_cart_option]?.indexOf(
                        `${r.label_cart}: ${valueOptionInCart}`
                      ) > -1 &&
                      x?.properties && x?.properties[AvisOptionsConfig?.key_cart_order]?.indexOf(optionData) > -1
                  );
                  if (addchargeItem) {
                    valueOptionInCart = valueOptionInCart;
                  }
                }
                r.default_value = valueOptionInCart;
                r.default_status = valueOptionInCart ? "true" : "false";

                if (valueOptionInCart && r.option_values) {
                  r.is_option_default_value = true;
                  r.option_default_value = valueOptionInCart;
                  let findValueId = r.option_values?.find(
                    (x) => x.value === valueOptionInCart
                  );
                  if (findValueId)
                    r.option_default_value = findValueId["value_id"];
                }
              }
            }

            if (r.option_values && r.option_url === OPTION_URL.group) {
              for (let optionValueUrl of r.option_values.filter((x) =>
                x?.url?.trim()
              )) {
                let handle = optionValueUrl?.url?.split("/")?.pop()?.trim();
                let productByHandle = priceMod.productVariantBundles.filter(
                  (x) => x.handle == handle
                );

                if (productByHandle.length > 0) {
                  optionValueUrl["url_name"] = productByHandle[0]?.title;
                  optionValueUrl["url_image"] =
                    productByHandle[0]?.featured_image;
                }
              }
            }

            if (
              r.option_values &&
              r.option_values.filter(
                (x) =>
                  x.type == "useexistingvariant" ||
                  x.type == "chargeorbundle"
              ).length > 0
            ) {
              let listOptionValueAddOns = r.option_values.filter(
                (x) =>
                  x.type == "useexistingvariant" ||
                  x.type == "chargeorbundle"
              );
              listOptionValueAddOns.forEach((optionValue) => {
                if (
                  optionValue.productVariationId &&
                  optionValue.productId
                ) {
                  let productBundle = priceMod.productVariantBundles.filter(
                    (x) => x.id == optionValue.productId
                  );
                  if (
                    productBundle.length > 0 &&
                    productBundle[0].variants &&
                    productBundle[0].variants.length > 0
                  ) {
                    let productVariantBundle =
                      productBundle[0].variants.filter(
                        (x) => x.id == optionValue.productVariationId
                      );
                    if (productVariantBundle.length > 0) {
                      optionValue["is_exist"] = true;
                      optionValue.price =
                        productVariantBundle[0].price ?? 0;
                      optionValue["soldout"] =
                        !productVariantBundle[0].available ?? true;
                      optionValue.compare_at_price = productVariantBundle[0].compare_at_price ?? 0;
                      if (['72460534015', '59232223416'].includes(window.ap_front_settings.shop_id) && (productBundle[0].media[0].src || productVariantBundle[0]?.featured_image?.src) && ['ADVANCED', 'PREMIUM'].includes(window.ap_front_settings.config.config_app.appPlan)) {
                        optionValue.swatch.file_image_url = productVariantBundle[0]?.featured_image?.src ? productVariantBundle[0]?.featured_image?.src : productBundle[0].media[0].src;
                      }
                    } else {
                      optionValue["is_exist"] = false;
                      optionValue.price = 0;
                      optionValue["soldout"] = true;
                      optionValue.compare_at_price = 0;
                    }
                  } else {
                    let productVariantBundle = priceMod.productVariantAC.find(x => String(x.id) === optionValue.productVariationId);
                    if (productVariantBundle) {
                      optionValue["is_exist"] = true;
                      if(!["66684256543"].includes(shop_id)) optionValue.price = parseFloat(productVariantBundle.price) * 100.0;
                      optionValue["soldout"] = !productVariantBundle.available ?? true;
                      optionValue.compare_at_price = parseFloat(productVariantBundle?.compare_at_price ?? 0) * 100.0;
                      optionValue.price = parseFloat(priceMod.formatMoneyToNumber(parseFloat(productVariantBundle?.price ?? 0) * 10000.0));
                    }
                    else {
                      optionValue["is_exist"] = false;
                      optionValue.price = 0;
                      optionValue["soldout"] = true;
                      optionValue.compare_at_price = 0;
                    }
                  }
                }

                if (optionValue.type == "chargeorbundle") {
                  optionValue.type = "useexistingvariant";
                }
              });
            }

            e.add(
              this,
              {
                uuid: shop_id,
                templ_class: r?.temp_class ? r?.temp_class : optionSet?.template_info?.class_name,
              },
              i + "-" + t,
              productInfo,
              productId,
              elemOptionAvisContainer
            );
          }),
          optionSet.options
        );
      });
      const optionSetPersonalizer = optionsetsInvalid.find(item => item?.live_preview_bg);
      if (optionSetPersonalizer) {
        e.handleProductPersonalizer(productInfo, optionSetPersonalizer, productId);
      }
      subfixLabelCart(),
        (window.AP_POptions.apps.productoptions._fieldsReady = !0),
        i_lasted(productInfo, productId, elemOptionAvisContainer);
      if (!checkConditionVariant && shop_id === "60370419756") {
        setTimeout(function () {
          handleChangeShopifyVariant(
            elemOptionAvisContainer,
            productId,
            productInfo
          );
        }, 200);
      }
      if (d?.length > 0) {
        setTimeout(function () {
          const event = new CustomEvent("avisOptionsLoaded");
          document.dispatchEvent(event);
        }, 200);
      }
      if (checkConditionVariant)
        setTimeout(function () {
          handleChangeShopifyVariant(
            elemOptionAvisContainer,
            productId,
            productInfo
          );
        }, 200),
          x(),
          "function" == typeof window.AP_POptions.apps.productoptions.ready &&
          (window.AP_POptions.apps.productoptions.ready.call(
            $(`#${container_AP_POptions}`),
            Array.prototype.concat.apply([], d)
          ),
            datePicker.hasDatePicker(d) && datePicker.fixLegacyHandlers()),
          "function" ==
          typeof window.AP_POptions.apps.productoptions.uploaderyReady &&
          window.AP_POptions.apps.productoptions.uploaderyReady.call(
            $(`#${container_AP_POptions}`),
            Array.prototype.concat.apply([], d)
          ),
          addStyleCss(p),
          eventApi.appLoad({
            fields: d,
            hasConditionalLogic: l.active,
            hasBundledProducts: !!priceModAll[productId].activeVariants.length,
          });
    }

    function groupValueForMultiUpload(obj) {
      const grouped = {};

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          // Extract the prefix (part before the hyphen) or the entire key if no hyphen
          const prefix = key.includes("-") ? key.split("-")[0] : key;

          // Initialize an array for each prefix, if it doesn't already exist
          if (!grouped[prefix]) {
            grouped[prefix] = [];
          }

          // Push the value to the corresponding array, if the value is not empty
          if (obj[key]) {
            grouped[prefix].push(obj[key]);
          }
        }
      }

      // Join the values in each group with a comma
      for (const key in grouped) {
        grouped[key] = grouped[key].join(",");
      }

      return grouped;
    }

    function addStyleCss(e) {
      if (useSoldOutOption) {
        e +=
          " div.avpoptions-container__v2 div.avp-option ." +
          AVIS_CLASS.soldOutOption +
          "{display:none !important;} ";
      }
      $("head").append(
        "<style>" + (customizeryConfig.css ?? "") + ` ${e} </style>`
      ),
        $("head").append(
          '<style>.avp-productoptionswatchwrapper { vertical-align: middle; } .avp-productoptionswatchwrapper input[type="radio"] {\tposition: fixed; opacity: 0; display:none !important; } .avp-productoptionswatchwrapper input[type="radio"]:checked + .avp-productoptionswatch { border: 1px solid #fff; box-shadow: 0px 0px 0px 1px #ad0000; } .avp-productoptionswatchwrapper input[type="checkbox"] { position: fixed; opacity: 0; } .avp-productoptionswatchwrapper input[type="checkbox"]:checked + .avp-productoptionswatch { border: 1px solid #fff; box-shadow: 0px 0px 0px 1px #ad0000; }</style>'
        );
    }
    function subfixLabelCart() {
      var e = $(`.${container_AP_POptions}`);
      e.length > 0 &&
        $.each(e, function (e, t) {
          var n = $(t).closest("form"),
            i = [],
            o = [];
          $(n)
            .find(":input")
            .each(function (e, t) {
              t.name &&
                t.name.indexOf("properties[") > -1 &&
                !$(t).parents(`.${container_AP_POptions}`).length > 0 &&
                t.name &&
                (o[t.name] = [t.name]);
            });
          var r = "",
            a = !1,
            s = !0;
          $(t)
            .find(":input")
            .each(function (e, t) {
              if (t.name.indexOf("properties[") > -1) {
                var n = t.name,
                  p = !1;
                if ("checkbox" !== t.type || "button_multi" !== t.type) {
                  if ("radio" === t.type || "button_single" === t.type) {
                    var c = $(t)
                      .closest('[role="group"]')
                      .attr("aria-labelledby");
                    (p = c === r), p || (a = !1), (r = c);
                  } else (a = !1), (r = "");
                  if ((p && a) || !p)
                    if (
                      (o[n]
                        ? ((s = !1), (a = !0))
                        : i[n] && ((s = !0), (a = !0)),
                        a)
                    ) {
                      if (i[n]) var l = i[n];
                      else var l = { existing_entries: [], is_io_duplicate: s };
                      p || l.existing_entries.push(n);
                      var d = s ? "_io_duplicate" : "_third_party_duplicate",
                        u = s
                          ? l.existing_entries.length
                          : l.existing_entries.length + 1,
                        f =
                          "properties[" +
                          n
                            .replace("properties[", "")
                            .replace("]", "")
                            .replace("properties[", "")
                            .replace("]", "") +
                          "-" +
                          u +
                          "" +
                          //d +
                          "]";
                        (i[n] = l),
                        (t.name = f);
                    } else i[n] = { existing_entries: [n], is_io_duplicate: s };
                }
              }
            });

          let formatPrice = priceMod.formatNewMoney(totalPriceAdd);
          let priceString = formatPrice;
          let defaultTextSelection =
            customizeryConfig && customizeryConfig.text_price_add
              ? customizeryConfig.text_price_add
              : "Selection will add {price_add} to the price";
          let priceOvewrite = `<span ${t.id === "avpoptions-container__v2"
            ? "id='avp-productoption-totalpriceadd'"
            : ""
            } class='avp-productoption-totalpriceadd'>${priceString}</span>${window.ap_front_settings.config.config_app.shop_id === '89025413435' ? `<span class='new-avp-productoption-totalpriceadd avp-productoption-totalpriceadd'></span>` : ""}`;
          defaultTextSelection = defaultTextSelection?.replaceAll(
            "{price_add}",
            priceOvewrite
          );
          if ((window.ap_front_settings.config.config_app.appPlan !== "FREE" && (
            // !customizeryConfig.product_page ||
            customizeryConfig?.product_page?.show_extra_charge)
          ) ||
            window.ap_front_settings.shop_id === "77934919961"
          ) {
            if (t.querySelector(".avp-productoption-total-add")) {
            } else {
              $(t).append(
                `<div ${t.id === "avpoptions-container__v2"
                  ? "id='avp-productoption-total-add'"
                  : ""
                } class='avp-productoption-total-add apo-total-addcharge-hide'>${defaultTextSelection}</div>`
              );
            }
          }
          if (t.querySelector(".apo-total-addcharge")) {
          } else {
            $(t).append(
              `<input type="hidden" value="0" class="apo-total-addcharge" />`
            );
          }

          if (isShowWatermarkOnProductPage === true && !priceMod.cartItemEdit) {
            if (t.querySelector(".avp-watermark-footer")) {
            } else {
              $(t).append(
                `<div ${t.id === "avpoptions-container__v2"
                  ? "id='avp-watermark-footer'"
                  : ""
                } class='avp-watermark-footer'>
                  <p class="avp-watermark-footer-title">Powered by AvisPlus</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" class="avp-watermark-footer-icon">
                    <defs>
                      <style>
                        .cls-1 {
                          fill: #7f7f7f;
                        }
                      </style>
                    </defs>
                    <path id="Icon" class="cls-1" d="M7,14a7,7,0,1,1,7-7A7.008,7.008,0,0,1,7,14ZM6.125,9.625v1.75H7.874V9.625ZM7,4.375a.876.876,0,0,1,.875.875c0,.357-.476.673-.875.875a1.64,1.64,0,0,0-.875,1.621v.129H7.874c0-.287.263-.478.6-.72a2.2,2.2,0,0,0,1.156-1.9,2.59,2.59,0,0,0-.769-1.97A2.678,2.678,0,0,0,7,2.625,2.628,2.628,0,0,0,4.375,5.25h1.75A.876.876,0,0,1,7,4.375Z"/>
                  </svg>
                  <p style='padding: 2px 12px !important;' class="avp-watermark-footer-text">Contact support to hide this watermark.</p>
                </div>`
              );
            }
          }
        });
    }
    function p_disabled(e, t, n) {
      if (n && n.length) {
        const maxSelections = e.max_selections;
        const maxTotalQty = e.max_total_qty;
        const selectedCount = n.filter(":checked").length;

        let disableItems = false;

        // Kiểm tra maxSelections
        if (
          parseInt(maxSelections, 10) > 0 &&
          selectedCount >= parseInt(maxSelections, 10)
        ) {
          disableItems = true;
        }

        // Kiểm tra maxTotalQty
        if (
          parseInt(maxTotalQty, 10) > 0 &&
          selectedCount >= parseInt(maxTotalQty, 10) &&
          e?.show_option_value_qty
        ) {
          disableItems = true;
        }

        // Vô hiệu hóa hoặc kích hoạt lại các phần tử
        if (disableItems) {
          n.filter(":not(:checked)").each(function () {
            this.disabled = "disabled";
          });
        } else {
          n.filter(":disabled").each(function () {
            this.disabled = false;
          });
        }
      }
    }

    function toggleStyleErrorForInput(e, t) {
      // if (window.AP_POptions.apps.productoptions.checkExistInputInvalid) return;

      let groupBox = e[0]?.closest(".ap-options__optiongroup-container");
      if (t) {
        e.removeClass("apo-required-error");
        if (groupBox && !groupBox.querySelector("apo-required-error")) {
          groupBox.classList.remove("apo-option-error");
        }
      } else {
        e.addClass("apo-required-error");
        if (groupBox) {
          groupBox.classList.add("apo-option-error");
        }
      }
    }
    function validateDataInput(e, t, showToggleError = true) {
      var n,
        i = e.tagName.toLowerCase();
      n =
        "input" === i
          ? e.type + ":" + t
          : "fieldset" === i
            ? "checkboxes:" + t
            : "span" === i || "div" === i
              ? "radiobuttons:" + t
              : i + ":" + t;
      var o = window.AP_POptions.apps.productoptions,
        r = $(e);
      const parentElement = r[0]?.closest(".avp-option");
      if (parentElement) {
        const style = parentElement.getAttribute('style');
        if (style && style.includes('opacity: 0') && style.includes('display: none')) {
          return "";
        }
      }
      let message = "";
      switch (n) {
        case "textarea:required":
        case "text:required":
        case "range:required":
        case "number:required":
          if (shop_id === "78803271973" && r[0]?.closest(".avis-required-1")) {
            message =
              Shopify?.locale === "de"
                ? `Durch Drücken des Buttons „Nummer und Name“ gibst du an, dass du dein Trikot personalisieren möchtest. \n\n  • Möchtest du dein Trikot personalisieren? - Bitte gib den gewünschten Namen und die Nummer ein, bevor du es deinem Warenkorb hinzufügst. \n\n  • Ist das versehentlich passiert? - Kann passieren! Wenn du dein Trikot nicht personalisieren möchtest, kannst du erneut auf den Button „Nummer und Name“ klicken, um deine Auswahl zu widerrufen und das Trikot ohne Personalisierung in seiner Standardform deinem Warenkorb hinzuzufügen.`
                : Shopify?.locale === "fr"
                  ? `En cliquant sur le bouton "Numéro et Nom", vous indiquez que vous souhaitez personnaliser votre tenue. \n\n  • Souhaitez-vous personnaliser votre tenue ? - Veuillez remplir le nom et le numéro souhaités avant de l'ajouter à votre panier. \n\n  • Cela s'est-il produit par accident ? - Cela peut arriver ! Si vous ne souhaitez pas personnaliser votre tenue, vous pouvez cliquer à nouveau sur le bouton "Numéro et Nom" pour annuler votre choix et ajouter la tenue sans personnalisation dans sa forme standard à votre panier.`
                  : Shopify?.locale === "nl"
                    ? `Door op de "Nummer en Naam" knop te drukken, geef je aan dat je je tenue wilt personaliseren. \n\n  • Wil je je tenue personaliseren? - Vul alsjeblieft de gewenste naam en het nummer in voordat je het aan je winkelwagentje toevoegt. \n\n  • Ging dit per ongeluk? - Kan gebeuren! Als je je tenue niet wilt personaliseren, kun je opnieuw op de "Nummer en Naam" knop klikken om je keuze te annuleren en het tenue zonder personalisatie in de standaardvorm aan je winkelwagentje toe te voegen.`
                    : "Özelleştirme seçtiniz. Özelleştirme istiyorsanız, lütfen dilediğiniz isimi ve numarayı belirtin. İstemiyorsanız, 'İsim ve numara' butonuna tekrar basıp seçiminizi kaldırabilirsiniz";
            let optionsSelector = r[0]
              ?.closest(".avpoptions-container__v2")
              ?.querySelectorAll(".avis-required-1");
            for (let optionSelector of optionsSelector) {
              let inputSelector = optionSelector.querySelector("input");
              if (inputSelector?.value?.trim()) {
                message = "";
              }
            }
          } else if (e.type === "number") {
            let requiredElem = r;
            if (r.closest(".avp-dimension-input-container")) {
              requiredElem = r.closest(".avp-dimension-input-container");
            }
            message =
              ("" === r.val()?.trim() || 0 == r.val()?.trim())
                ? (showToggleError && o.toggleInputError(requiredElem, !1),
                  "number" === e.type
                    ? customizeryConfig.text_alert_number_input
                      ? customizeryConfig.text_alert_number_input
                      : o.strings.errorMessages.forNumberInputs
                    : customizeryConfig.text_alert_text_input
                      ? customizeryConfig.text_alert_text_input
                      : o.strings.errorMessages.forTextInputs)
                : "";
          } else if (e.type === "range") {
            message =
              ("" === r.val()?.trim() || 0 == r.val()?.trim())
                ? (showToggleError && o.toggleInputError(r, !1),
                  "range" === e.type
                    ? customizeryConfig.text_alert_number_input
                      ? customizeryConfig.text_alert_number_input
                      : o.strings.errorMessages.forNumberInputs
                    : customizeryConfig.text_alert_text_input
                      ? customizeryConfig.text_alert_text_input
                      : o.strings.errorMessages.forTextInputs)
                : "";
          } else {
            message =
              "" === r.val()?.trim()
                ? (showToggleError && o.toggleInputError(r, !1),
                  "number" === e.type
                    ? customizeryConfig.text_alert_number_input
                      ? customizeryConfig.text_alert_number_input
                      : o.strings.errorMessages.forNumberInputs
                    : customizeryConfig.text_alert_text_input
                      ? customizeryConfig.text_alert_text_input
                      : o.strings.errorMessages.forTextInputs)
                : "";
          }
          break;
        case "hidden:required":
          let apoFile = r.parent();

          message =
            "" === r.val()?.trim()
              ? (showToggleError &&
                o.toggleInputError(apoFile ? apoFile : r, !1),
                customizeryConfig.text_alert_file_upload
                  ? customizeryConfig.text_alert_file_upload
                  : o.strings.errorMessages.forFileInputs)
              : "";
          break;
        case "select:required":
          message = $("option:selected:disabled", r).length
            ? (showToggleError && o.toggleInputError(r, !1),
              customizeryConfig.text_alert_text_select
                ? customizeryConfig.text_alert_text_select
                : o.strings.errorMessages.forDropdowns)
            : "";
          break;
        case "radiobuttons:required":
          let inputRadio = $('input[type="radio"]:checked', r);
          message =
            0 === $("input[type=radio]", r).length
              ? ""
              : 0 === inputRadio.length || !inputRadio[0]?.value
                ? (showToggleError && o.toggleInputError(r, !1),
                  customizeryConfig.text_alert_checkbox_radio_swatches_input
                    ? customizeryConfig.text_alert_checkbox_radio_swatches_input
                    : o.strings.errorMessages.forCheckboxes)
                : "";
          break;
        case "checkbox:required":
          message =
            r.length > 0 && !r[0].checked
              ? (showToggleError && o.toggleInputError(r.parent(), !1),
                customizeryConfig.text_alert_switch ? customizeryConfig.text_alert_switch : o.strings.errorMessages.forSwitch)
              : "";
          break;
        case "checkboxes:required":
          message =
            0 === $("input[type=checkbox]", r).length
              ? ""
              : 0 === $('input[type="checkbox"]:checked', r).length
                ? (showToggleError &&
                  (r.parent().attr("class")?.includes("combo_")
                    ? o.toggleInputError(r.parent().parent().parent(), !1)
                    : o.toggleInputError(r, !1)),
                  customizeryConfig.text_alert_checkbox_radio_swatches_input
                    ? customizeryConfig.text_alert_checkbox_radio_swatches_input
                    : o.strings.errorMessages.forCheckboxes)
                : "";
          break;
        case "checkboxes:minvalue":
          if (0 === $("input[type=checkbox]", r).length) message = "";
          var a =
            r.data("min_selections") && parseInt(r.data("min_selections"), 10);
          if (!a) message = !1;
          var s = $('input[type="checkbox"]:checked', r).length;
          message =
            s > 0 && s < a
              ? customizeryConfig.customize_alert_required_min_selections
                ? (showToggleError && o.toggleInputError(r, !1),
                  customizeryConfig.customize_alert_required_min_selections.replace(
                    "{min_selections}",
                    a
                  ))
                : (showToggleError && o.toggleInputError(r, !1),
                  o.strings.errorMessages.forMinimumValues.replace(
                    "{min_selections}",
                    a
                  ))
              : "";
          break;
        case "checkboxes:minquantity":
          var a =
            r.data("min_total_qty") && parseInt(r.data("min_total_qty"), 10);
          if (!a) message = !1;
          let totalQuantity = 0;
          $('input[type="checkbox"]:checked', r).map(function () {
            let quantityInput = $(this)
              .parents(".avp-value-grid")
              .find("input.avp-qty-input");
            if (quantityInput && quantityInput.length > 0) {
              let quantity = quantityInput.val();
              if (!quantity) quantity = 1;
              totalQuantity += parseInt(quantity);
            }
            return true;
          });

          message =
            totalQuantity > 0 && totalQuantity < a
              ? customizeryConfig.customize_alert_required_min_quantity
                ? (showToggleError && o.toggleInputError(r, !1),
                  customizeryConfig.customize_alert_required_min_quantity.replace(
                    "{min_quantity}",
                    a
                  ))
                : (showToggleError && o.toggleInputError(r, !1),
                  o.strings.errorMessages.forMinQuantity.replace(
                    "{min_quantity}",
                    a
                  ))
              : "";
          break;

        case "textarea:data-allow-value":
        case "text:data-allow-value":
          let allowValue = r.attr("data-allow-value");
          if (allowValue) {
            if (
              allowValue == "only_letters" &&
              o.allowedValueLetterRegex.test(r.val())
            ) {
              showToggleError && o.toggleInputError(r, !1);
              return customizeryConfig.text_alert_validate_only_letters
                ? customizeryConfig.text_alert_validate_only_letters
                : o.strings.errorMessages.forTextLettersValid;
            } else if (
              allowValue == "only_letters_and_numbers" &&
              o.allowedValueLetterNumberRegex.test(r.val())
            ) {
              showToggleError && o.toggleInputError(r, !1);
              return customizeryConfig.text_alert_validate_only_letters_number
                ? customizeryConfig.text_alert_validate_only_letters_number
                : o.strings.errorMessages.forTextLettersAndNumbersValid;
            }
          }
          break;

        case "textarea:minlength":
        case "text:minlength":
          let minLength = r.attr("minlength");
          let value = r.val()?.trim();
          let length = value ? value.length : 0;
          if (r[0]?.closest(".avp-option.apo-exclude-space")) {
            minLength = r.attr("min_length");
            length = (value.match(/[\p{L}\p{N}\p{P}\p{Emoji}]/gu) || []).filter(ch => ch !== ' ')?.length ?? 0;
          }

          if (minLength && value && length < parseInt(minLength, 10)) {
            showToggleError && o.toggleInputError(r, !1);
            return customizeryConfig.customize_alert_required_min_characters
              ? customizeryConfig.customize_alert_required_min_characters.replace(
                "{min_length}",
                minLength
              )
              : o.strings.errorMessages.forTextMinLength.replace(
                "{min_length}",
                minLength
              );
          }
          break;

        case "text:value-phone-input":
          let input = document.querySelector(`#${e.id}`);
          let phoneValue = r.val();
          if (phoneValue.length) {
            let validPhoneNumber = window.apoPhoneInputGlobals
              .getInstance(input)
              .isValidNumberPrecise();

            if (!validPhoneNumber) {
              showToggleError && o.toggleInputError(r, !1);
              return customizeryConfig.text_alert_validate_phone ? customizeryConfig.text_alert_validate_phone : o.strings.errorMessages.forTextPhone;
            }
          }
          break;

        case "text:value-email-input":
          let emailValue = r.attr("value-email-input");
          if (emailValue === "") {
            if (r.val().trim() === "") {
              return true;
            }
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})*$/;
            if (!emailRegex.test(r.val())) {
              showToggleError && o.toggleInputError(r, !1);
              return customizeryConfig.text_alert_validate_email ? customizeryConfig.text_alert_validate_email : o.strings.errorMessages.forTextEmail;
            }
          }
          break;
        case "file:data-min-files":
          if(ap_front_settings.shop_id.includes("67989143599", "63396741298")) {
            let minFile = r.attr("data-min-files");
            let lengthFile = r.attr("length-files");
            if (!minFile || minFile === 0) {
              return true;
            }
            if (lengthFile < minFile) {
              showToggleError && o.toggleInputError(r, !1);
              return `Please upload at least ${minFile} file(s) before adding this item to cart`;
            }
          } else {
            return;
          }
        break;
      }
      if (message) return message;

      return "";
    }

    function submitEditOption(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      p_check_validate(
        e,
        document,
        e?.currentTarget?.getAttribute("product-id") ?? apoProductDefault
      );
    }

    function resetValidate(elem, messageContainer) {
      $(elem).closest('.avis-validate-error-wrapper').removeClass('avis-input-error-wrapper');
      $(elem).removeClass('apo-required-error');
      $(elem).closest('.avp-option').find('.apo-required-error')?.removeClass('apo-required-error');
      messageContainer.empty();
    }

    function createMessageAlert(elem, message) {
      let parentElement = $(elem).closest(".avp-option");
      if (parentElement?.length) {
        const computedStyle = window.getComputedStyle(parentElement[0]);
        const isHidden = computedStyle.opacity === "0" && computedStyle.display === "none";
        if (isHidden) {
          return;
        }
      }
      if (parentElement?.length) {
        if (parentElement[0]?.className?.indexOf('avis-is-validate') > -1) {
          parentElement[0].classList.remove('avis-is-validate');
          setTimeout(function () {
            parentElement[0].classList.add('avis-is-validate');
          }, 100);
        }
        else {
          parentElement[0].classList.add('avis-is-validate');
        }
      }

      if (elem.tagName.toLowerCase() === "span") {
        parentElement = $(elem).closest(".avp-option");
      }

      let messageContainer = parentElement.find('.avis-message-container');

      if (messageContainer.length === 0) {
        messageContainer = $('<div class="avis-message-container"></div>');
        parentElement.append(messageContainer);
      }

      messageContainer.append(`<p class="avis-scroll-target avis-message-validate">${message}</p>`);

      const wrapperElem = $(elem).closest('.avis-validate-error-wrapper');
      if (!wrapperElem.length) {
        $(elem).wrap('<div class="avis-validate-error-wrapper avis-input-error-wrapper"></div>');
      } else {
        wrapperElem.addClass('avis-input-error-wrapper');
      }

      // reset validate
      if (elem.tagName.toLowerCase() === "div") {
        $(elem).find("input[type=number], input[type=file]").on("input", () => {
          resetValidate(elem, messageContainer);
        });
        $(elem).find("input[type=checkbox], input[type=radio]").on("change", () => {
          resetValidate(elem, messageContainer);
        });
      } else if (elem.tagName.toLowerCase() === "input" || elem.tagName.toLowerCase() === "textarea") {
        if (elem.closest(".avp-font-dropdown") || elem.closest(".ap-options__date")) {
          $(elem).on("change", () => {
            resetValidate(elem, messageContainer);
          });
        } else {
          $(elem).on("input", () => {
            resetValidate(elem, messageContainer);
          });
        }
      } else if (elem.tagName.toLowerCase() === "select") {
        $(elem).on("change", () => {
          resetValidate(elem, messageContainer);
        });
      } else {
        $(elem).find("input[type=radio], input[type=checkbox]").on("change", () => {
          resetValidate(elem, messageContainer);
        });
      }
    }

    // function toggleAvpOptionDisabled() {
    //   document.querySelectorAll(".apo-step-child").forEach((stepEl) => {
    //     const isActive = stepEl.classList.contains("apo-step-child-active");
    //     const options = stepEl.querySelectorAll(".avp-option:not([disabled=disabled])");
    //     options.forEach((opt) => {
    //       if (!isActive) {
    //         opt.setAttribute("disabled", "disabled");
    //       } else {
    //         opt.removeAttribute("disabled");
    //       }
    //     });
    //   });
    // }

    function newValidateOptions(
      containerElement,
      showToggleError = false
    ) {
      let avisContainerElement = $(`.${containerElement ? containerElement : container_AP_POptions}`)
      var o = window.AP_POptions.apps.productoptions;
      let hasStepError = true;

      if (avisContainerElement.length > 0) {
        // Reset message
        avisContainerElement.find('.avis-message-container').html('');
        avisContainerElement.find('.avis-input-error-wrapper').removeClass('avis-input-error-wrapper');
      }

      // check required
      $(
        "input[type=range][required], input[type=text][required], textarea[required], input[type=number][required], input[type=hidden][required], fieldset[apo-required], select[required], span[apo-required], div[apo-required], input[type=checkbox][avp-data=switch][required]",
        avisContainerElement
      )
        .not("[disabled]")
        .each(function (index, elem) {
          let tagElem = elem.tagName.toLowerCase();
          let r = $(elem);
          let message = "";
          const inputType = r.attr("type");
          if (tagElem === "span" || tagElem === "div") {
            let inputRadio = $('input[type="radio"]:checked', r);
            message =
              0 === $("input[type=radio]", r).length
                ? ""
                : 0 === inputRadio.length || !inputRadio[0]?.value
                  ? (showToggleError && elem.tagName.toLowerCase() === "div" && o.toggleInputError(r, !1),
                    customizeryConfig.text_alert_checkbox_radio_swatches_input
                      ? customizeryConfig.text_alert_checkbox_radio_swatches_input
                      : o.strings.errorMessages.forButton)
                  : "";
          } else if (tagElem === "fieldset") {
            message =
              0 === $("input[type=checkbox]", r).length
                ? ""
                : 0 === $('input[type="checkbox"]:checked', r).length
                  ? (showToggleError && r.closest("[class*=ap-options__combo]") && o.toggleInputError(r.closest("[class*=ap-options__combo]").find(".combo_input-container"), !1),
                    customizeryConfig.text_alert_checkbox_radio_swatches_input
                      ? customizeryConfig.text_alert_checkbox_radio_swatches_input
                      : o.strings.errorMessages.forCheckboxes)
                  : "";
          } else if (tagElem === "input" || tagElem === "textarea") {
            if (elem.type === "text" || tagElem === "textarea") {
              message =
                "" === r.val()?.trim()
                  ? (showToggleError && o.toggleInputError(r, !1),
                    inputType === "number"
                      ? customizeryConfig.text_alert_number_input ||
                      o.strings.errorMessages.forNumberInputs
                      : customizeryConfig.text_alert_text_input ||
                      o.strings.errorMessages.forTextInputs)
                  : "";
            } else if (elem.type === "range" || elem.type === "number") {
              let requiredElem = r;
              if (r.closest(".avp-dimension-input-container")) {
                requiredElem = r.closest(".avp-dimension-input-container");
              } else if (r.closest(".apo-slider-input-container")) {
                requiredElem = r.closest(".apo-slider-input-container");
              }
              message =
                ("" === r.val()?.trim() || 0 == r.val()?.trim())
                  ? (showToggleError && o.toggleInputError(requiredElem, !1),
                    inputType === "range"
                      ? customizeryConfig.text_alert_number_input ||
                      o.strings.errorMessages.forNumberInputs
                      : customizeryConfig.text_alert_text_input ||
                      o.strings.errorMessages.forTextInputs)
                  : "";
            } else if (elem.type === "hidden") {
              let apoFile = r.parent();
              message =
                "" === r.val()?.trim()
                  ? (showToggleError &&
                    o.toggleInputError(apoFile ? apoFile : r, !1),
                    customizeryConfig.text_alert_file_upload
                      ? customizeryConfig.text_alert_file_upload
                      : o.strings.errorMessages.forFileInputs)
                  : "";

              elem = elem.closest(".apo-file");
            } else if (elem.type === "checkbox") {
              message =
                r.length > 0 && !r[0].checked
                  ? (showToggleError,
                    customizeryConfig.text_alert_switch ? customizeryConfig.text_alert_switch : o.strings.errorMessages.forSwitch)
                  : "";

              elem = elem.closest(".apo-main__switch");
            }
            if (elem.type === "number" && elem.closest(".apo-text-field")) {
              elem = elem.closest(".apo-text-field");
            }
          } else if (tagElem === "select") {
            message = $("option:selected:disabled", r).length
              ? (showToggleError && o.toggleInputError(r, !1),
                customizeryConfig.text_alert_text_select
                  ? customizeryConfig.text_alert_text_select
                  : o.strings.errorMessages.forDropdowns)
              : "";
          }

          let messageElem = elem.closest(".avp-option")?.querySelectorAll(".avis-message-container .avis-message-validate");
          let checkMessage = messageElem?.length && [...messageElem]?.find(mes => mes.innerText === message);
          if (checkMessage) return;

          if (message) {
            createMessageAlert(elem, message);
          }
        });

      // validate text
      $("input[type=text][data-allow-value], textarea[data-allow-value]", avisContainerElement)
        .not("[disabled]")
        .each(function (index, elem) {
          let r = $(elem);
          let message = "";
          let allowValue = r.attr("data-allow-value");
          if (allowValue) {
            if (
              allowValue == "only_letters" &&
              o.allowedValueLetterRegex.test(r.val())
            ) {
              showToggleError && o.toggleInputError(r, !1);
              message = customizeryConfig.text_alert_validate_only_letters
                ? customizeryConfig.text_alert_validate_only_letters
                : o.strings.errorMessages.forTextLettersValid;
            } else if (
              allowValue == "only_letters_and_numbers" &&
              o.allowedValueLetterNumberRegex.test(r.val())
            ) {
              showToggleError && o.toggleInputError(r, !1);
              message = customizeryConfig.text_alert_validate_only_letters_number
                ? customizeryConfig.text_alert_validate_only_letters_number
                : o.strings.errorMessages.forTextLettersAndNumbersValid;
            }
          }
          if (message) {
            createMessageAlert(elem, message);
          }
        });

      $("input[type=text][minlength], textarea[minlength]", avisContainerElement)
        .not("[disabled]")
        .each(function (index, elem) {
          let r = $(elem);
          let message = "";
          let minLength = r.attr("minlength");
          let value = r.val()?.trim();

          if (minLength && value && value.length < parseInt(minLength, 10)) {
            showToggleError && o.toggleInputError(r, !1);
            message = customizeryConfig.customize_alert_required_min_characters
              ? customizeryConfig.customize_alert_required_min_characters.replace("{min_length}", minLength)
              : o.strings.errorMessages.forTextMinLength.replace("{min_length}", minLength);
          }

          if (message) {
            createMessageAlert(elem, message);
          }
        });

      $("input[type=text].iti__tel-input", avisContainerElement)
        .not("[disabled]")
        .each(function (index, elem) {
          let r = $(elem);
          let message = "";
          let input = document.querySelector(`#${elem.id}`);
          let phoneValue = r.val();
          if (phoneValue.length) {
            let validPhoneNumber = window.apoPhoneInputGlobals
              .getInstance(input)
              .isValidNumberPrecise();

            if (!validPhoneNumber) {
              showToggleError && o.toggleInputError(r, !1);
              message = customizeryConfig.text_alert_validate_phone ? customizeryConfig.text_alert_validate_phone : o.strings.errorMessages.forTextPhone;
            }
          }

          if (message) {
            createMessageAlert(elem, message);
          }
        });

      $("input[type=text][value-email-input]", avisContainerElement)
        .not("[disabled]")
        .each(function (index, elem) {
          let r = $(elem);
          let message = "";
          let emailValue = r.attr("value-email-input");
          if (emailValue === "") {
            if (r.val().trim() === "") {
              message = "";
            } else {
              let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})*$/;
              if (!emailRegex.test(r.val())) {
                showToggleError && o.toggleInputError(r, !1);
                message = customizeryConfig.text_alert_validate_email ? customizeryConfig.text_alert_validate_email : o.strings.errorMessages.forTextEmail;
              }
            }
          }

          if (message) {
            createMessageAlert(elem, message);
          }
        });

      $("fieldset", avisContainerElement)
        .not("[disabled]")
        .each(function (index, elem) {
          let r = $(elem);
          let message = "";
          if (0 === $("input[type=checkbox]", r).length) message = "";
          var a = r.data("min_selections") && parseInt(r.data("min_selections"), 10);
          if (!a) message = !1;
          var s = $('input[type="checkbox"]:checked', r).length;
          message =
            s > 0 && s < a
              ? customizeryConfig.customize_alert_required_min_selections
                ? (showToggleError && elem.tagName.toLowerCase() === "div" && o.toggleInputError(r, !1),
                  customizeryConfig.customize_alert_required_min_selections.replace(
                    "{min_selections}",
                    a
                  ))
                : (showToggleError && elem.tagName.toLowerCase() === "div" && o.toggleInputError(r, !1),
                  o.strings.errorMessages.forMinimumValues.replace(
                    "{min_selections}",
                    a
                  ))
              : "";

          if (message) {
            createMessageAlert(elem, message);
          }
        });

      $("fieldset", avisContainerElement)
        .not("[disabled]")
        .each(function (index, elem) {
          let r = $(elem);
          let message = "";
          if (0 === $("input[type=checkbox]", r).length) message = "";
          var a = r.data("min_total_qty") && parseInt(r.data("min_total_qty"), 10);
          if (!a) message = !1;
          let totalQuantity = 0;
          $('input[type="checkbox"]:checked', r).map(function () {
            let quantityInput = $(this)
              .parents(".avp-value-grid")
              .find("input.avp-qty-input");
            if (quantityInput && quantityInput.length > 0) {
              let quantity = quantityInput.val();
              if (!quantity) quantity = 1;
              totalQuantity += parseInt(quantity);
            }
            message = "";
          });

          message =
            totalQuantity > 0 && totalQuantity < a
              ? customizeryConfig.customize_alert_required_min_quantity
                ? (showToggleError && elem.tagName.toLowerCase() === "div" && o.toggleInputError(r, !1),
                  customizeryConfig.customize_alert_required_min_quantity.replace(
                    "{min_quantity}",
                    a
                  ))
                : (showToggleError && elem.tagName.toLowerCase() === "div" && o.toggleInputError(r, !1),
                  o.strings.errorMessages.forMinQuantity.replace(
                    "{min_quantity}",
                    a
                  ))
              : "";

          if (message) {
            createMessageAlert(elem, message);
          }
        });

      if (ap_front_settings.shop_id.includes("67989143599", "63396741298")) {
        $("input[type=file][data-min-files]", avisContainerElement).not("[disabled]").each(function(index, elem) {
          let fileInput = $(elem);
          let minFile = parseInt(fileInput?.attr("data-min-files")) || 0;
          let lengthFile = parseInt(fileInput?.attr("length-files"));
          if (minFile <= 0) return;
          if (lengthFile < minFile) {
            showToggleError && o.toggleInputError(fileInput, !1);
            var msg = `Please upload at least ${minFile} file(s) before adding this item to cart`;
            createMessageAlert(elem, msg);
          }
        });   
      }
      
      if (avisContainerElement?.find(".avis-scroll-target").length) {
        hasStepError = true;
      } else {
        hasStepError = false;
      }

      avisContainerElement?.find(".avis-scroll-target")
        .get(0)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      return !hasStepError;
    }
    function p_check_validate(
      e,
      elemOptionAvisContainer,
      productId,
      isRedirectCheckout = false,
      cloneButtonAddCart
    ) {
      if (
        window.ap_front_settings.check_on.add_to_cart &&
        window.ap_front_settings.custom_error_message
      ) {
        return (
          alert(window.ap_front_settings.custom_error_message),
          e.stopImmediatePropagation(),
          !1
        );
      }

      if (priceMod.isCloneButtonAddCart)
        priceMod.addLoadingAddCart(
          cloneButtonAddCart ? cloneButtonAddCart : e.target
        );

      if ("function" == typeof window.AP_POptions.apps.productoptions.validate)
        return (
          spLog(
            !0,
            "theme has custom validation, conditional logic may not work as expected",
            !0
          ),
          window.AP_POptions.apps.productoptions.validate(e)
        );
      var n = "";
      const i = function (e) {
        var t = "";
        return (
          $(
            "input[type=range][required], input[type=text][required], textarea[required], input[type=number][required], input[type=hidden][required], fieldset[apo-required], select[required], span[apo-required],div[apo-required],input[type=checkbox][avp-data=switch][required]",
            e
          )
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "required"
                ));
            }),
          !t &&
          $("input[type=text][data-allow-value]", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "data-allow-value"
                ));
            }),
          !t &&
          $("textarea[data-allow-value]", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "data-allow-value"
                ));
            }),
          !t &&
          $("input[type=text][minlength]", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "minlength"
                ));
            }),
          !t &&
          $("textarea[minlength]", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "minlength"
                ));
            }),
          !t &&
          $("input[type=file][data-min-files]", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "data-min-files"
                ));
            }),
          !t &&
          $("fieldset", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "minvalue"
                )) ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "minquantity"
                ));
            }),
          $("input[type=text].iti__tel-input", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "value-phone-input"
                ));
            }),
          !t &&
          $("input[type=text][value-email-input]", e)
            .not("[disabled]")
            .each(function (e, n) {
              t ||
                (t = window.AP_POptions.apps.productoptions.validateInput(
                  n,
                  "value-email-input"
                ));
            }),
          t
        );
      };
      if (isNewValidateShop) {
        window.AP_POptions.apps.productoptions.newValidateOptions();
        const errorElem = $(elemOptionAvisContainer).find('.avis-message-validate');
        if (errorElem?.length > 0) {
          priceMod.removeLoadingAddCart(
            cloneButtonAddCart ? cloneButtonAddCart : e.target
          );
          e.preventDefault();
          e.stopImmediatePropagation();
          return !1;
        }
      } else if (
        (($io = $(`#${container_AP_POptions}`)),
          (n = i(
            elemOptionAvisContainer &&
              elemOptionAvisContainer.querySelector(`.${container_AP_POptions}`)
              ? $(
                elemOptionAvisContainer.querySelector(
                  `.${container_AP_POptions}`
                )
              )
              : $io
          )),
          n && n.length)
      ) {
        var o = eventApi.validationFail({ error: n });
        priceMod.removeLoadingAddCart(
          cloneButtonAddCart ? cloneButtonAddCart : e.target
        );
        return (
          o || alert(n), e.preventDefault(), e.stopImmediatePropagation(), !1
        );
      }

      if (
        shop_id === "78803271973" &&
        elemOptionAvisContainer?.querySelector(
          ".avis-required-1:not([disabled])"
        )
      ) {
        e.stopImmediatePropagation();
        e.preventDefault();
        let dataInput = [];
        let dataInputSelector = elemOptionAvisContainer.querySelectorAll(
          ".avis-required-1 input[field-name]"
        );
        for (let item of dataInputSelector) {
          if (item.value) dataInput.push(item.value);
        }
        let modalHTML = `
        <div class="apo-modal__container" style="width: 620px">
          <div class="apo-modal__wrapper" style="border-top: 3px solid #000000; text-align: center;">
            <div class="apo-modal__content">
              <h1 class="ql-align-center">!</h1>
              <p class="ql-align-center">@@content@@</p>
              <div>
                <button class='apo-btn-yes'>@@yes@@</button>
                <button class='apo-btn-no'>@@no@@</button>
              </div>
            </div>
          </div>
        </div>
          `;
        let contentModal = `Formanızın özelleştirmesi ’${dataInput.join(
          " "
        )}’ şeklinde olacaktır. Özelleştirilmiş formalarda 3 iş günü ek teslimat süresi bulunmaktadır, onaylıyor musunuz?`;
        let contentYes = "Evet";
        let contentNo = "Hayır";
        if (Shopify?.locale === "de") {
          contentModal = `Die Personalisierung deines Trikots wird ${dataInput[0]
            } ${dataInput.length > 1 ? dataInput[1] : ""
            } sein. Für personalisierte Trikots gilt eine zusätzliche Lieferzeit von 3 Werktagen. Einverstanden?`;
          contentYes = "Ja";
          contentNo = "Nein";
        }
        if (Shopify?.locale === "fr") {
          contentModal = `La personnalisation de votre maillot sera ${dataInput[0]
            } ${dataInput.length > 1 ? dataInput[1] : ""
            }. Pour les maillots personnalisés, il y a un temps de livraison supplémentaire de 2 jours ouvrables. D'accord ?`;
          contentYes = "Oui";
          contentNo = "Non";
        }
        if (Shopify?.locale === "nl") {
          contentModal = `De personalisatie van je tenue zal ${dataInput[0]} ${dataInput.length > 1 ? dataInput[1] : ""
            }. Voor gepersonaliseerde tenues geldt een extra levertijd van 3 werkdagen. Akkoord?`;
          contentYes = "Ja";
          contentNo = "Nee";
        }
        modalHTML = modalHTML.replace("@@content@@", contentModal);
        modalHTML = modalHTML.replace("@@yes@@", contentYes);
        modalHTML = modalHTML.replace("@@no@@", contentNo);
        if (!priceMod.isEditOptionCart) {
          let modalCustom = document.createElement("div");
          modalCustom.classList.add("apo-modal-custom");
          modalCustom.innerHTML = modalHTML;

          document.body.appendChild(modalCustom);

          modalCustom.querySelector(".apo-btn-yes").onclick = function (event) {
            eventApi.validationSuccess();
            priceMod.isEditOptionCart
              ? editOptionsToCart(event, productId)
              : addProductBundleToCart(event, productId, isRedirectCheckout);
            modalCustom.remove();
          };
          modalCustom.querySelector(".apo-btn-no").onclick = function () {
            modalCustom.remove();
          };

          priceMod.removeLoadingAddCart(
            cloneButtonAddCart ? cloneButtonAddCart : e.target
          );

          return false;
        }
      }
      return (
        eventApi.validationSuccess(),
        priceMod.isEditOptionCart
          ? editOptionsToCart(e, productId)
          : addProductBundleToCart(e, productId, isRedirectCheckout)
      );
    }
    window.AvisOptionsData.addToCartEvent = p_check_validate;
    function r(e, t) {
      if (t && shop_id !== "86097166639" && shop_id !== "87077945665")
        if (isNewValidateShop) {
          console.log("Avis dynamic checkout: button clicked + price mods selected, preventing submission", e);
          e.stopImmediatePropagation();
          let message = customizeryConfig.dynamic_checkout_notification
            ? customizeryConfig.dynamic_checkout_notification
            : window.AP_POptions.apps.productoptions.strings.errorMessages.forDynamicCheckout;
          let modalPopup = AvisOptionsData.createValidateModal(message);
          let body = document.querySelector("body");
          body.append(modalPopup);

          return !1;
        } else return (
          console.log("Avis dynamic checkout: button clicked + price mods selected, preventing submission"),
          window.alert(
            customizeryConfig.dynamic_checkout_notification
              ? customizeryConfig.dynamic_checkout_notification
              : window.AP_POptions.apps.productoptions.strings.errorMessages.forDynamicCheckout
          ),
          e.stopImmediatePropagation(),
          !1
        );
      var n = $(
        ".sp-dynamic-checkout-button-" + e.data["io-dynamic-checkout-type"]
      );
      return n.data("uploadery-dynamic-bound")
        ? (spLog(
          !0,
          "dynamic checkout: form fields are valid and uploadery is present, allowing uploadery to run it's validation",
          !0
        ),
          !0)
        : (a(e), !0);
    }
    function a(e) {
      if ("secondary" === e.data["io-dynamic-checkout-type"])
        return (
          spLog(
            !0,
            'dynamic checkout: clicking "more payment options" button.',
            !0
          ),
          $(".shopify-payment-button__more-options").click(),
          !0
        );
      if ("primary" === e.data["io-dynamic-checkout-type"]) {
        var t = $(".shopify-payment-button__button"),
          n = {
            paypal: '[role="button"]',
            amazon: "form > button",
            google: "iframe",
            shopify: "",
          };
        $.each(n, function (e, n) {
          if (!n)
            return (
              spLog(
                !0,
                "dynamic checkout: clicking native shopify button.",
                !0
              ),
              priceMod.buyItNow(),
              // t.click(), // Continue buy it now
              !0
            );
          if ("google" === e) {
            spLog(!0, "dynamic checkout: clicking google pay button.", !0);
            var i = $(t.find(n).contents());
            return i.find("button").click(), !0;
          }
          return t.find(n).length
            ? (spLog(!0, "dynamic checkout: clicking " + e + " button.", !0),
              t.find(n).click(),
              !0)
            : void 0;
        });
      }
    }

    function addProductBundleToCart(e, productId, isRedirectCheckout = false) {
      if (
        (e.data && e.data["io-dynamic-checkout-type"]) ||
        String(e?.target?.className ?? "").indexOf("avis-checkout") > -1
      ) {
        priceMod.options.skipPriceModIfVisible = "";
        var i = r(e, priceMod.getVariantSubmissions(productId).length);
        priceMod.removeLoadingAddCart(e.target);
        return (
          i &&
          window.AP_POptions.apps.productoptions.themeAppExtensionId &&
          ($($io)
            .css("display", "none")
            .prependTo(
              "form#" +
              window.AP_POptions.apps.productoptions.themeAppExtensionId
            ),
            console.log(
              "Avis Buy now button clicked in Shopify Theme 2.0.  Moving IO div to be within the Add to Cart form."
            )),
          !0
        );
      }

      if (priceMod.isCloneButtonAddCart) {
        priceMod.orderId = new Date().getTime();
        priceMod.listInputAddBundle.forEach((e) => {
          if ($(`[name="${e}"]`).length > 0) $(`[name="${e}"]`).remove();
        });

        async function responseAddToCart(i, formDataInput, isAddMain) {
          // if (shop_id === "55969448111") {
          //   priceMod.removeLoadingAddCart(e.target);
          //   return;
          // }
          let productForm = e.target.closest("product-form");

          let productFormAdd = e.target.closest('form[action="/cart/add"]');
          if (shop_id === "14252734") {
            productFormAdd = e.target.closest('form[action*="/cart/add"]');
          }
          if (
            shop_id === "62635311441" ||
            shop_id === "87122149713" ||
            shop_id === "87195451729" ||
            shop_id === "86549627228" ||
            shop_id === "90301563205" ||
            shop_id === "70476136621" ||
            shop_id === "76697239788" ||
            shop_id === "93834084657"
          ) {
            if (document.querySelector("#offcanvas-cart")) {
              bootstrap.Offcanvas.getOrCreateInstance(
                "#offcanvas-cart"
              ).show();
            }
            priceMod.removeLoadingAddCart(e.target);
            return;
          }

          if (i && i.status) {
            console.log(
              "Avis: price variants: add variant to cart error ",
              i.description
            );
            priceMod.removeLoadingAddCart(e.target);
            if (productForm) {
              productForm.error = true;
              if (typeof productForm.handleErrorMessage === "function") {
                productForm.handleErrorMessage(i.description);
              } else alert(i.description);
            } else if (i.description) alert(i.description);
            else alert("Error!");

            if (shop_id === "68284711161" && productFormAdd) {
              var errors = productFormAdd.querySelector(".errors");
              if (errors) {
                errors.remove();
              }

              var errorDiv = document.createElement("div");
              errorDiv.classList.add("errors", "text-center");

              if (typeof i.description === "object") {
                errorDiv.textContent = i.message;
              } else {
                errorDiv.textContent = i.description;
              }

              productFormAdd.append(errorDiv);

              productFormAdd.dispatchEvent(
                new CustomEvent("ajaxProduct:error", {
                  detail: {
                    errorMessage: i.description,
                  },
                  bubbles: true,
                })
              );
            }
            if (shop_id === "57995493567" && productFormAdd) {
              productFormAdd.dispatchEvent(new CustomEvent('ajaxProduct:error', {
                detail: {
                  errorMessage: i.description
                },
                bubbles: true
              }));
            }
            return;
          }

          if (i?.items?.length > 0) {
            if (formDataInput && (shop_id === "56635359401" || (isShopUploadCdnSpf && !isAddMain))) {
              let resAddMainProduct = await priceMod.postCartMain(formDataInput);
              if (!resAddMainProduct || resAddMainProduct?.description) {
                priceMod.removeLoadingAddCart(e.target);
                if (resAddMainProduct?.description) alert(resAddMainProduct?.description);
                // Delete product ac
                let updateAc = {};
                i?.items.forEach((item) => {
                  updateAc[item.key] = 0;
                });
                await priceModCart.postUpdateCart(updateAc);
                return;
              }
              else {
                if (resAddMainProduct.sections) {
                  i["sections"] = resAddMainProduct.sections;
                }
              }
            }
            if (isRedirectCheckout) {
              location.href = "/checkout";
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            let appCartDrawer = document.querySelector(".cd-opus-container, #opus-shadow-container");
            if (appCartDrawer) {
              window?.opusOpen(); // Open cart drawer
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (shop_id === "79936815414" && productForm) {
              if (!productForm?.error)
                publish(PUB_SUB_EVENTS.cartUpdate, { source: 'product-form', productVariantId: i.items[0]?.id });
              productForm.error = false;

              if (productForm.miniCart) {
                productForm.miniCart.renderContents(i);
                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }

            let appCartDrawerUpsell = document.querySelector(
              `#opus-close-upsell-${i.items[0]?.product_id}`
            );
            if (appCartDrawerUpsell) {
              appCartDrawerUpsell.click();
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            i.key = i.items[0].key;
            let findMainItem = i.items.find(x => x.properties && x.properties[AvisOptionsConfig?.key_cart_order] && String(x.properties[AvisOptionsConfig?.key_cart_order] ?? "").indexOf("Added by") === -1);
            if (findMainItem) i.key = findMainItem.key;
            let mainProductCart = i.items.find(
              (x) =>
                Object.keys(x.properties).length > 0 &&
                x.properties.hasOwnProperty("_apo_variants")
            );
            if (mainProductCart) i.key = mainProductCart.key;

            let checkInCodeJs = AvisOptionsData?.afterAddToCart ? await AvisOptionsData?.afterAddToCart(i, productFormAdd) : false;
            if (checkInCodeJs) {
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (AvisOptionsData?.afterAddToCart && shop_id === "56047599658") {
              setTimeout(function () { priceMod.removeLoadingAddCart(e.target); }, 650);
              return;
            }

            if (shop_id === "82147410269") {
              if (document.querySelector(".ajax-cart-disabled"))
                window.location = "/cart";
              if (productForm)
                productForm?.cartNotification?.renderContents(i);
              try {
                openCartDrawer();
              } catch (ex) { }
              priceMod.removeLoadingAddCart(e.target);
              return;
            }
          }
          if (productForm) {
            productForm.error = false;
          }

          if (shop_id === "68284711161" && productFormAdd) {
            if (theme?.settings?.cartType === "page") {
              window.location = theme?.routes?.cartPage;
            }
            var errors = productFormAdd.querySelector(".errors");
            if (errors) {
              errors.remove();
            }
            productFormAdd.dispatchEvent(
              new CustomEvent("ajaxProduct:added", {
                detail: {
                  product: i?.items[0],
                },
                bubbles: true,
              })
            );
            priceMod.removeLoadingAddCart(e.target);
            return;
          }
          if (shop_id === "57995493567" && productFormAdd) {
            productFormAdd.dispatchEvent(
              new CustomEvent("ajaxProduct:added", {
                detail: {
                  product: i?.items[0],
                },
                bubbles: true,
              })
            );
            productFormAdd.dispatchEvent(new CustomEvent('ajaxProduct:added', {
              detail: {
                product: i?.items[0]
              },
              bubbles: true
            }));
            priceMod.removeLoadingAddCart(e.target);
            return;
          }

          if (shop_id === "55194878152") {
            T4SThemeSP.Cart.getToFetch();
            let findCartIcon = document.querySelector(
              "a[href='/cart'][data-drawer-options]"
            );
            if (findCartIcon) findCartIcon.click();
            priceMod.removeLoadingAddCart(e.target);
            return;
          }

          if (shop_id === "64170688683") {
            let dataRes = await fetch("?section_id=helper-cart");
            let text = await dataRes.text();
            const sectionInnerHTML = new DOMParser().parseFromString(
              text,
              "text/html"
            );
            const cartFormInnerHTML =
              sectionInnerHTML.getElementById("AjaxCartForm").innerHTML;
            const cartSubtotalInnerHTML =
              sectionInnerHTML.getElementById("AjaxCartSubtotal").innerHTML;

            const cartItems = document.getElementById("AjaxCartForm");
            cartItems.innerHTML = cartFormInnerHTML;
            cartItems.ajaxifyCartItems();

            document.getElementById("AjaxCartSubtotal").innerHTML =
              cartSubtotalInnerHTML;

            document
              .querySelectorAll("[data-header-cart-count]")
              .forEach((elm) => {
                elm.textContent = document.querySelector(
                  "#AjaxCartForm [data-cart-count]"
                ).textContent;
              });
            document
              .querySelectorAll("[data-header-cart-total")
              .forEach((elm) => {
                elm.textContent = document.querySelector(
                  "#AjaxCartForm [data-cart-total]"
                ).textContent;
              });
            productForm.dispatchEvent(productForm.ADD_TO_CART);

            // a11y
            if (document.getElementById("screen-reader-info")) {
              document.getElementById(
                "screen-reader-info"
              ).innerText = `${KROWN.settings.locales.cart_announcement}`;
              setTimeout(() => {
                document.getElementById("screen-reader-info").innerText = "";
              }, 1000);
            }

            priceMod.removeLoadingAddCart(e.target);
            return;
          }

          if (window.ap_front_settings.shop_id === "76484182349") {
            if (priceMod.cartSection) {
              let cartItems =
                priceMod.cartSection.querySelector("cart-items");
              if (cartItems?.cart) {
                cartItems?.getCart();
                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }
          }
          // atc mở cart drawer theme ella
          if (shop_id === "46507557018" || shop_id === "72600387869") {
            var halo = window.AvisCartDrawerConfig.halo,
              $body = window.AvisCartDrawerConfig.$body;

            if (window.quick_cart.show && halo && $body) {
              Shopify.getCart((cart) => {
                $body.addClass("cart-sidebar-show");
                halo.updateSidebarCart(cart);
              });

              priceMod.removeLoadingAddCart(e.target);
              return;
            }
          }

          if (shop_id === "71933788448") {
            var spro = window.AvisCartDrawerConfig.spro,
              $body = window.AvisCartDrawerConfig.$body;

            if (window.quick_cart.show && spro && $body) {
              Shopify.getCart((cart) => {
                $body.addClass("cart-sidebar-show");
                spro.updateSidebarCart(cart);
              });

              priceMod.removeLoadingAddCart(e.target);
              return;
            }
          }
          if (shop_id === "35051536443") {
            let selectForm = document.querySelector(
              'form[action="/cart/add"]'
            );
            let product = window.theme.utils.serialize(selectForm);
            if (window.theme.settings.cartType === "page") {
              window.location = window.theme.routes.cartPage;
            }

            selectForm.dispatchEvent(
              new CustomEvent("ajaxProduct:added", {
                detail: {
                  product: product,
                  addToCartBtn: this.addToCart,
                },
                bubbles: true,
              })
            );
            return;
          }
          if (shop_id === "14252734" && productFormAdd) {
            productFormAdd.dispatchEvent(
              new CustomEvent("ajaxProduct:added", {
                detail: {
                  product: i.items[0],
                  addToCartBtn: productFormAdd.addToCart,
                },
                bubbles: true,
              })
            );
            //document.dispatchEvent(new CustomEvent('ajaxProduct:added:' + productFormAdd.args.scopedEventId, {
            //  detail: {
            //    product: i.items[0],
            //    addToCartBtn: productFormAdd.addToCart
            //  }
            //}));

            priceMod.removeLoadingAddCart(e.target);
            return;
          }
          try {
            if (priceMod.cartSection) {
              function finalAddCart() {
                if (priceMod.cartSection.classList.contains("is-empty"))
                  priceMod.cartSection.classList.remove("is-empty");
              }
              const quickAddModal = e.target.closest("quick-add-modal");
              if (quickAddModal) {
                document.body.addEventListener(
                  "modalClosed",
                  () => {
                    setTimeout(() => {
                      if (
                        priceMod.cartSection?.renderContents &&
                        typeof priceMod.cartSection?.renderContents ===
                        "function"
                      )
                        priceMod.cartSection.renderContents(i);
                    });
                  },
                  { once: true }
                );
                quickAddModal.hide(true);
                priceMod.removeLoadingAddCart(e.target);
                finalAddCart();
                return;
              } else {
                if (
                  priceMod.cartSection?.renderContents &&
                  typeof priceMod.cartSection?.renderContents === "function"
                ) {
                  priceMod.removeLoadingAddCart(e.target);
                  priceMod.cartSection.renderContents(i);
                  finalAddCart();
                  if (shop_id === "76880183633") {
                    if (window.themeSettings.redirectToCart) {
                      location.href = "/cart";
                    } else {
                      let submitButton =
                        productForm?.querySelector('[type="submit"]');
                      if (submitButton)
                        priceMod.cartSection.open(submitButton);
                    }
                    document.dispatchEvent(
                      new CustomEvent("cart:item-add", {
                        detail: {
                          items: [i],
                        },
                      })
                    );

                    publish(PUB_SUB_EVENTS.cartItemAdd, {
                      items: [i],
                    });
                  }
                  return;
                } else {
                  let miniCartSelector =
                    priceMod.cartSection?.querySelector("mini-cart");
                  if (
                    miniCartSelector?.renderContents &&
                    typeof miniCartSelector?.renderContents === "function"
                  ) {
                    priceMod.removeLoadingAddCart(e.target);
                    miniCartSelector.renderContents(i);
                    if (miniCartSelector.classList.contains("is-empty"))
                      miniCartSelector.classList.remove("is-empty");
                    return;
                  }
                }
              }
            }
          } catch (ex) {
            console.log("Render cart error: ", ex);
          }
          if (shop_id === "25514049590") {
            let cartContent = await priceModCart.getCartV2();
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:updated", {
                bubbles: true,
                detail: {
                  cart: cartContent,
                },
              })
            );
            cartContent["sections"] = i["sections"];
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:refresh", {
                bubbles: true,
                detail: {
                  cart: cartContent,
                  openMiniCart:
                    window.themeVariables?.settings?.cartType === "drawer" &&
                    e?.target?.closest(".drawer") === null,
                },
              })
            );

            priceMod.removeLoadingAddCart(e.target);
            return;
          }
          if (shop_id === "6037953") {
            const cartContent = await priceModCart.getCartV2();
            cartContent["sections"] = i["sections"];
            this.dispatchEvent(
              new CustomEvent("variant:add", {
                bubbles: true,
                detail: {
                  items: i.hasOwnProperty("items") ? i["items"] : [i],
                  cart: cartContent,
                  onSuccessDo: null,
                },
              })
            );
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:change", {
                bubbles: true,
                detail: {
                  baseEvent: "variant:add",
                  onSuccessDo: null,
                  cart: cartContent,
                },
              })
            );

            priceMod.removeLoadingAddCart(e.target);
            return;
          }
          if (shop_id === "79302132006") {
            let cart = await priceModCart.getCartV2();
            if (cart) {
              document.dispatchEvent(
                new CustomEvent("theme:cart:change", {
                  detail: {
                    cart: cart,
                  },
                  bubbles: !0,
                })
              );

              if (
                window.theme.state.cartOpen ||
                Boolean(
                  document.body.querySelector('[data-section-type="cart"]')
                )
              ) {
                document.dispatchEvent(
                  new CustomEvent("theme:cart:reload", {
                    bubbles: !0,
                  })
                );
              } else {
                let popdown = document.querySelector(
                  "[data-product-add-popdown-wrapper]"
                );
                if (popdown) {
                  popdown.dispatchEvent(
                    new CustomEvent("theme:cart:popdown", {
                      detail: {
                        variant: e,
                      },
                      bubbles: !0,
                    })
                  );
                }
              }
            }
            priceMod.removeLoadingAddCart(e.target);
            return;
          }

          if (
            shop_id === "52058915007" &&
            productFormAdd &&
            i?.items?.length > 0
          ) {
            productFormAdd.dispatchEvent(
              new CustomEvent("ajaxProduct:added", {
                detail: {
                  product: i.items[0],
                },
                bubbles: true,
              })
            );

            priceMod.removeLoadingAddCart(e.target);
            window.monster_refresh && window.monster_refresh();
            return;
          }
          // window.BOOMR.themeName = "Impact"
          if (
            window.ap_front_settings.shop_id === "83553517888" ||
            window.ap_front_settings.shop_id === "25604915279"
          ) {
            productForm = e.target.closest("form[is='product-form']");
            const cartContent = await (
              await fetch(`${Shopify.routes.root}cart.js`)
            ).json();
            (cartContent.sections = i.sections),
              productForm?.dispatchEvent(
                new CustomEvent("variant:add", {
                  bubbles: !0,
                  detail: {
                    items: i.hasOwnProperty("items") ? i.items : [i],
                    cart: cartContent,
                  },
                })
              ),
              document.documentElement.dispatchEvent(
                new CustomEvent("cart:change", {
                  bubbles: !0,
                  detail: {
                    baseEvent: "variant:add",
                    cart: cartContent,
                  },
                })
              );
            priceMod.removeLoadingAddCart(e.target);
            return;
          }
          // Check cart drawer theme Expanse
          if (window.ap_front_settings.shop_id === "80605217053") {
            productForm = e.target.closest("form[is='product-form']");
            const elementCart = document.querySelector(
              ".block-buy-buttons.product-block"
            );
            document.dispatchEvent(
              new CustomEvent("ajaxProduct:added", {
                detail: {
                  product: i.items[0],
                  addToCartBtn: elementCart.querySelector(
                    `#ProductSubmitButton-${elementCart.dataset.sectionId}`
                  ),
                },
              })
            );
            priceMod.removeLoadingAddCart(e.target);
            return;
          }

          if (shop_id === "57510330564") {
            let config = document.getElementById("cart-config");
            if (!config) return false;
            config = JSON.parse(config.innerHTML || "{}");
            WAU.ThemeCart.getCart()
              .then((Cart) => {
                if (
                  config.cart_action == "drawer" &&
                  config.cart_added_event == "go_to_active_cart"
                ) {
                  WAU.AjaxCart.showDrawer(config);
                } else if (
                  config.cart_action == "modal_cart" &&
                  config.cart_added_event == "go_to_active_cart"
                ) {
                  WAU.AjaxCart.showModal(config);
                } else if (
                  config.cart_action == "page_only" &&
                  config.cart_added_event == "go_to_active_cart"
                ) {
                  window.location.href = config.cart_url;
                } else if (config.cart_added_event == "product_page") {
                  WAU.Helpers.fadeIn(context.querySelector(".js-added-msg"));
                  setTimeout(function () {
                    WAU.Helpers.fadeOut(
                      context.querySelector(".js-added-msg")
                    );
                  }, 4000);
                } else {
                  window.location.href = config.cart_url;
                }

                WAU.AjaxCart.updateView(config, Cart);
                priceMod.removeLoadingAddCart(e.target);
              })
              .catch((error) => {
                console.log("Avis AddCart error", error);
                priceMod.removeLoadingAddCart(e.target);
              });
            return;
          }

          if (shop_id === "18227167316") {
            let cartIcon = document.querySelector(
              '.Header-iconsContainer a[data-drawer-name="cart"]'
            );
            if (cartIcon) {
              cartIcon.click();
              priceMod.removeLoadingAddCart(e.target);
              return;
            }
          }
          if (window.BOOMR?.themeName === "Warehouse") {
            let sectionProduct = document.querySelector(
              '[data-section-type="product"]'
            );
            if (sectionProduct) {
              sectionProduct.dispatchEvent(
                new CustomEvent("product:added", {
                  bubbles: !0,
                  detail: {
                    // variant: this.currentVariant,
                    // button: target,
                    // quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
                  },
                })
              );

              priceMod.removeLoadingAddCart(e.target);
              return;
            }
          }

          if (shop_id === "22344067") {
            let cartIcon = document.querySelector("#HeaderCartTrigger");
            if (cartIcon) {
              cartIcon.click();
              priceMod.removeLoadingAddCart(e.target);
              return;
            }
          }

          if (window.BOOMR?.themeName?.indexOf("Focal") > -1) {
            productForm?.dispatchEvent(
              new CustomEvent("variant:added", {
                bubbles: true,
                detail: {
                  variant: i.hasOwnProperty("items") ? i["items"][0] : i,
                },
              })
            );

            let cartContent = await priceModCart.getCartV2();
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:updated", {
                bubbles: true,
                detail: {
                  cart: cartContent,
                },
              })
            );
            cartContent["sections"] = i["sections"];
            document.documentElement.dispatchEvent(
              new CustomEvent("cart:refresh", {
                bubbles: true,
                detail: {
                  cart: cartContent,
                  openMiniCart:
                    window.themeVariables?.settings?.cartType === "drawer" &&
                    productFormAdd?.closest(".drawer") === null,
                },
              })
            );

            priceMod.removeLoadingAddCart(e.target);
            return;
          }

          if (
            window?.routes?.cart_url &&
            window?.routes?.cart_url?.indexOf(".js") === -1
          )
            window.location = window.routes.cart_url;
          else window.ap_front_settings.shop_id === '91619721600' ? window.location.href = `/${window.Shopify.locale}/cart` : window.location.href = "/cart";  // window.ap_front_settings.shop_id === '91619721600' ? `${window.Shopify.locale}/cart` :
          priceMod.removeLoadingAddCart(e.target);
        }

        let variantSelection = document.querySelector("variant-selection");
        if (shop_id === "64722796780" && variantSelection) {
          variantSelection.getVariant().then((variant) => {
            if (!variant) {
              priceMod.removeLoadingAddCart(e.target);
              return;
            } else {
              return priceMod.addToCart(productId, e, async function (i) {
                let productForm = e.target.closest("product-form");

                if (i && i.status) {
                  console.log(
                    "Avis: price variants: add variant to cart error ",
                    i.description
                  );
                  priceMod.removeLoadingAddCart(e.target);
                  if (productForm) {
                    productForm.error = true;
                    if (typeof productForm.handleErrorMessage === "function") {
                      productForm.handleErrorMessage(i.description);
                    }
                  } else if (i.description) alert(i.description);
                  else alert("Error!");
                  return;
                }

                if (i?.items?.length > 0) {
                  i.key = i.items[0].key;
                  let mainProductCart = i.items.find(
                    (x) =>
                      Object.keys(x.properties).length > 0 &&
                      x.properties.hasOwnProperty("_apo_variants")
                  );
                  if (mainProductCart) i.key = mainProductCart.key;
                }
                if (productForm) {
                  productForm.error = false;
                }

                try {
                  if (priceMod.cartSection) {
                    function finalAddCart() {
                      if (priceMod.cartSection.classList.contains("is-empty"))
                        priceMod.cartSection.classList.remove("is-empty");
                    }
                    const quickAddModal = e.target.closest("quick-add-modal");
                    if (quickAddModal) {
                      document.body.addEventListener(
                        "modalClosed",
                        () => {
                          setTimeout(() => {
                            if (
                              priceMod.cartSection?.renderContents &&
                              typeof priceMod.cartSection?.renderContents ===
                              "function"
                            )
                              priceMod.cartSection.renderContents(i);
                          });
                        },
                        { once: true }
                      );
                      quickAddModal.hide(true);
                      priceMod.removeLoadingAddCart(e.target);
                      finalAddCart();
                      return;
                    } else {
                      if (
                        priceMod.cartSection?.renderContents &&
                        typeof priceMod.cartSection?.renderContents ===
                        "function"
                      ) {
                        priceMod.removeLoadingAddCart(e.target);
                        priceMod.cartSection.renderContents(i);
                        finalAddCart();
                        if (shop_id === "76880183633") {
                          if (window.themeSettings.redirectToCart) {
                            location.href = "/cart";
                          } else {
                            let submitButton =
                              productForm?.querySelector('[type="submit"]');
                            if (submitButton)
                              priceMod.cartSection.open(submitButton);
                          }
                          document.dispatchEvent(
                            new CustomEvent("cart:item-add", {
                              detail: {
                                items: [i],
                              },
                            })
                          );

                          publish(PUB_SUB_EVENTS.cartItemAdd, {
                            items: [i],
                          });
                        }
                        return;
                      } else {
                        let miniCartSelector =
                          priceMod.cartSection?.querySelector("mini-cart");
                        if (
                          miniCartSelector?.renderContents &&
                          typeof miniCartSelector?.renderContents === "function"
                        ) {
                          priceMod.removeLoadingAddCart(e.target);
                          miniCartSelector.renderContents(i);
                          if (miniCartSelector.classList.contains("is-empty"))
                            miniCartSelector.classList.remove("is-empty");
                          return;
                        }
                      }
                    }
                  }
                } catch (ex) {
                  console.log("Render cart error: ", ex);
                }

                if (window.BOOMR?.themeName === "Warehouse") {
                  let sectionProduct = document.querySelector(
                    '[data-section-type="product"]'
                  );
                  if (sectionProduct) {
                    sectionProduct.dispatchEvent(
                      new CustomEvent("product:added", {
                        bubbles: !0,
                        detail: {
                          // variant: this.currentVariant,
                          // button: target,
                          // quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
                        },
                      })
                    );

                    priceMod.removeLoadingAddCart(e.target);
                    return;
                  }
                }

                if (window?.routes?.cart_url)
                  window.location = window.routes.cart_url;
                else window.location.href = "/cart";
                priceMod.removeLoadingAddCart(e.target);
              });
            }
          });
        } else {
          if (shop_id === "63269404732" && window.ap_front_settings?.product_info?.product?.tags?.includes('custom-putter')) {
            doogma.saveDesign({
              success: async function (response) {
                await window?.doogma?.saveDesign({});
                console.log("Design saved successfully:", response);
                priceMod.addToCart(productId, e, responseAddToCart);
              },
              error: function (response) {
                console.log("Error saving design:", response);
              }
            });
            return;
          }

          return priceMod.addToCart(productId, e, async function (i, formDataInput, isAddMain) {
            // if (shop_id === "55969448111") {
            //   priceMod.removeLoadingAddCart(e.target);
            //   return;
            // }
            let productForm = e.target.closest("product-form");

            let productFormAdd = e.target.closest('form[action="/cart/add"]');
            if (shop_id === "14252734") {
              productFormAdd = e.target.closest('form[action*="/cart/add"]');
            }
            if (
              shop_id === "62635311441" ||
              shop_id === "87122149713" ||
              shop_id === "87195451729" ||
              shop_id === "86549627228" ||
              shop_id === "90301563205" ||
              shop_id === "70476136621" ||
              shop_id === "76697239788" ||
              shop_id === "93834084657"
            ) {
              if (document.querySelector("#offcanvas-cart")) {
                bootstrap.Offcanvas.getOrCreateInstance(
                  "#offcanvas-cart"
                ).show();
              }
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (i && i.status) {
              console.log(
                "Avis: price variants: add variant to cart error ",
                i.description
              );
              priceMod.removeLoadingAddCart(e.target);
              if (productForm) {
                productForm.error = true;
                if (typeof productForm.handleErrorMessage === "function") {
                  productForm.handleErrorMessage(i.description);
                } else alert(i.description);
              } else if (i.description) alert(i.description);
              else alert("Error!");

              if (shop_id === "68284711161" && productFormAdd) {
                var errors = productFormAdd.querySelector(".errors");
                if (errors) {
                  errors.remove();
                }

                var errorDiv = document.createElement("div");
                errorDiv.classList.add("errors", "text-center");

                if (typeof i.description === "object") {
                  errorDiv.textContent = i.message;
                } else {
                  errorDiv.textContent = i.description;
                }

                productFormAdd.append(errorDiv);

                productFormAdd.dispatchEvent(
                  new CustomEvent("ajaxProduct:error", {
                    detail: {
                      errorMessage: i.description,
                    },
                    bubbles: true,
                  })
                );
              }
              if (shop_id === "57995493567" && productFormAdd) {
                productFormAdd.dispatchEvent(new CustomEvent('ajaxProduct:error', {
                  detail: {
                    errorMessage: i.description
                  },
                  bubbles: true
                }));
              }
              return;
            }

            if (i?.items?.length > 0) {
              if (formDataInput && (shop_id === "56635359401" || (isShopUploadCdnSpf && !isAddMain))) {
                let resAddMainProduct = await priceMod.postCartMain(formDataInput);
                if (!resAddMainProduct || resAddMainProduct?.description) {
                  priceMod.removeLoadingAddCart(e.target);
                  if (resAddMainProduct?.description) alert(resAddMainProduct?.description);
                  // Delete product ac
                  let updateAc = {};
                  i?.items.forEach((item) => {
                    updateAc[item.key] = 0;
                  });
                  await priceModCart.postUpdateCart(updateAc);
                  return;
                }
                else {
                  if (resAddMainProduct.sections) {
                    i["sections"] = resAddMainProduct.sections;
                  }
                }
              }
              if (isRedirectCheckout) {
                location.href = "/checkout";
                priceMod.removeLoadingAddCart(e.target);
                return;
              }

              let appCartDrawer = document.querySelector(".cd-opus-container, #opus-shadow-container");
              if (appCartDrawer) {
                window?.opusOpen(); // Open cart drawer
                priceMod.removeLoadingAddCart(e.target);
                return;
              }

              if (shop_id === "79936815414" && productForm) {
                if (!productForm?.error)
                  publish(PUB_SUB_EVENTS.cartUpdate, { source: 'product-form', productVariantId: i.items[0]?.id });
                productForm.error = false;

                if (productForm.miniCart) {
                  productForm.miniCart.renderContents(i);
                  priceMod.removeLoadingAddCart(e.target);
                  return;
                }
              }

              let appCartDrawerUpsell = document.querySelector(
                `#opus-close-upsell-${i.items[0]?.product_id}`
              );
              if (appCartDrawerUpsell) {
                appCartDrawerUpsell.click();
                priceMod.removeLoadingAddCart(e.target);
                return;
              }

              i.key = i.items[0].key;
              let findMainItem = i.items.find(x => x.properties && x.properties[AvisOptionsConfig?.key_cart_order] && String(x.properties[AvisOptionsConfig?.key_cart_order] ?? "").indexOf("Added by") === -1);
              if (findMainItem) i.key = findMainItem.key;
              let mainProductCart = i.items.find(
                (x) =>
                  Object.keys(x.properties).length > 0 &&
                  x.properties.hasOwnProperty("_apo_variants")
              );
              if (mainProductCart) i.key = mainProductCart.key;

              let checkInCodeJs = AvisOptionsData?.afterAddToCart ? await AvisOptionsData?.afterAddToCart(i, productFormAdd) : false;
              if (checkInCodeJs) {
                priceMod.removeLoadingAddCart(e.target);
                return;
              }

              if (AvisOptionsData?.afterAddToCart && shop_id === "56047599658") {
                setTimeout(function () { priceMod.removeLoadingAddCart(e.target); }, 650);
                return;
              }

              if (shop_id === "82147410269") {
                if (document.querySelector(".ajax-cart-disabled"))
                  window.location = "/cart";
                if (productForm)
                  productForm?.cartNotification?.renderContents(i);
                try {
                  openCartDrawer();
                } catch (ex) { }
                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }
            if (productForm) {
              productForm.error = false;
            }

            if (shop_id === "68284711161" && productFormAdd) {
              if (theme?.settings?.cartType === "page") {
                window.location = theme?.routes?.cartPage;
              }
              var errors = productFormAdd.querySelector(".errors");
              if (errors) {
                errors.remove();
              }
              productFormAdd.dispatchEvent(
                new CustomEvent("ajaxProduct:added", {
                  detail: {
                    product: i?.items[0],
                  },
                  bubbles: true,
                })
              );
              priceMod.removeLoadingAddCart(e.target);
              return;
            }
            if (shop_id === "57995493567" && productFormAdd) {
              productFormAdd.dispatchEvent(
                new CustomEvent("ajaxProduct:added", {
                  detail: {
                    product: i?.items[0],
                  },
                  bubbles: true,
                })
              );
              productFormAdd.dispatchEvent(new CustomEvent('ajaxProduct:added', {
                detail: {
                  product: i?.items[0]
                },
                bubbles: true
              }));
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (shop_id === "55194878152") {
              T4SThemeSP.Cart.getToFetch();
              let findCartIcon = document.querySelector(
                "a[href='/cart'][data-drawer-options]"
              );
              if (findCartIcon) findCartIcon.click();
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (shop_id === "64170688683") {
              let dataRes = await fetch("?section_id=helper-cart");
              let text = await dataRes.text();
              const sectionInnerHTML = new DOMParser().parseFromString(
                text,
                "text/html"
              );
              const cartFormInnerHTML =
                sectionInnerHTML.getElementById("AjaxCartForm").innerHTML;
              const cartSubtotalInnerHTML =
                sectionInnerHTML.getElementById("AjaxCartSubtotal").innerHTML;

              const cartItems = document.getElementById("AjaxCartForm");
              cartItems.innerHTML = cartFormInnerHTML;
              cartItems.ajaxifyCartItems();

              document.getElementById("AjaxCartSubtotal").innerHTML =
                cartSubtotalInnerHTML;

              document
                .querySelectorAll("[data-header-cart-count]")
                .forEach((elm) => {
                  elm.textContent = document.querySelector(
                    "#AjaxCartForm [data-cart-count]"
                  ).textContent;
                });
              document
                .querySelectorAll("[data-header-cart-total")
                .forEach((elm) => {
                  elm.textContent = document.querySelector(
                    "#AjaxCartForm [data-cart-total]"
                  ).textContent;
                });
              productForm.dispatchEvent(productForm.ADD_TO_CART);

              // a11y
              if (document.getElementById("screen-reader-info")) {
                document.getElementById(
                  "screen-reader-info"
                ).innerText = `${KROWN.settings.locales.cart_announcement}`;
                setTimeout(() => {
                  document.getElementById("screen-reader-info").innerText = "";
                }, 1000);
              }

              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (window.ap_front_settings.shop_id === "76484182349") {
              if (priceMod.cartSection) {
                let cartItems =
                  priceMod.cartSection.querySelector("cart-items");
                if (cartItems?.cart) {
                  cartItems?.getCart();
                  priceMod.removeLoadingAddCart(e.target);
                  return;
                }
              }
            }
            // atc mở cart drawer theme ella
            if (shop_id === "46507557018" || shop_id === "72600387869") {
              var halo = window.AvisCartDrawerConfig.halo,
                $body = window.AvisCartDrawerConfig.$body;

              if (window.quick_cart.show && halo && $body) {
                Shopify.getCart((cart) => {
                  $body.addClass("cart-sidebar-show");
                  halo.updateSidebarCart(cart);
                });

                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }

            if (shop_id === "71933788448") {
              var spro = window.AvisCartDrawerConfig.spro,
                $body = window.AvisCartDrawerConfig.$body;

              if (window.quick_cart.show && spro && $body) {
                Shopify.getCart((cart) => {
                  $body.addClass("cart-sidebar-show");
                  spro.updateSidebarCart(cart);
                });

                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }
            if (shop_id === "35051536443") {
              let selectForm = document.querySelector(
                'form[action="/cart/add"]'
              );
              let product = window.theme.utils.serialize(selectForm);
              if (window.theme.settings.cartType === "page") {
                window.location = window.theme.routes.cartPage;
              }

              selectForm.dispatchEvent(
                new CustomEvent("ajaxProduct:added", {
                  detail: {
                    product: product,
                    addToCartBtn: this.addToCart,
                  },
                  bubbles: true,
                })
              );
              return;
            }
            if (shop_id === "14252734" && productFormAdd) {
              productFormAdd.dispatchEvent(
                new CustomEvent("ajaxProduct:added", {
                  detail: {
                    product: i.items[0],
                    addToCartBtn: productFormAdd.addToCart,
                  },
                  bubbles: true,
                })
              );
              //document.dispatchEvent(new CustomEvent('ajaxProduct:added:' + productFormAdd.args.scopedEventId, {
              //  detail: {
              //    product: i.items[0],
              //    addToCartBtn: productFormAdd.addToCart
              //  }
              //}));

              priceMod.removeLoadingAddCart(e.target);
              return;
            }
            try {
              if (priceMod.cartSection) {
                function finalAddCart() {
                  if (priceMod.cartSection.classList.contains("is-empty"))
                    priceMod.cartSection.classList.remove("is-empty");
                }
                const quickAddModal = e.target.closest("quick-add-modal");
                if (quickAddModal) {
                  document.body.addEventListener(
                    "modalClosed",
                    () => {
                      setTimeout(() => {
                        if (
                          priceMod.cartSection?.renderContents &&
                          typeof priceMod.cartSection?.renderContents ===
                          "function"
                        )
                          priceMod.cartSection.renderContents(i);
                      });
                    },
                    { once: true }
                  );
                  quickAddModal.hide(true);
                  priceMod.removeLoadingAddCart(e.target);
                  finalAddCart();
                  return;
                } else {
                  if (
                    priceMod.cartSection?.renderContents &&
                    typeof priceMod.cartSection?.renderContents === "function"
                  ) {
                    priceMod.removeLoadingAddCart(e.target);
                    priceMod.cartSection.renderContents(i);

                    if (["89704104246"].includes(shop_id)) {
                      let stickyCart = document.querySelector(".sticky-atc-bar__form .f-product-form__submit");
                      if (stickyCart) {
                        stickyCart.classList.remove("apo-loading");
                        stickyCart.removeAttribute("disabled");
                      }
                      let countNotAc = i?.items?.filter(item => !item.properties._apo_option)?.length
                      let countItems = document.querySelector("span[data-cart-count-number][data-type='drawer']");
                      let count = (parseInt(countItems?.textContent?.replace("(", "")) ?? 0) + (countNotAc ?? 0);
                      if (countItems) countItems.textContent = count;

                      let cartHeader = document.querySelector(".cart-link__count");
                      if (cartHeader) {
                        cartHeader.classList.toggle("is-cart-empty", countNotAc === 0);
                        let cartHeaderCount = cartHeader.querySelector("span[data-cart-count-number]");
                        if (cartHeaderCount) cartHeaderCount.textContent = parseInt(cartHeaderCount.textContent) + parseInt(countNotAc);
                      }
                    }

                    finalAddCart();
                    if (shop_id === "76880183633") {
                      if (window.themeSettings.redirectToCart) {
                        location.href = "/cart";
                      } else {
                        let submitButton =
                          productForm?.querySelector('[type="submit"]');
                        if (submitButton)
                          priceMod.cartSection.open(submitButton);
                      }
                      document.dispatchEvent(
                        new CustomEvent("cart:item-add", {
                          detail: {
                            items: [i],
                          },
                        })
                      );

                      publish(PUB_SUB_EVENTS.cartItemAdd, {
                        items: [i],
                      });
                    }
                    return;
                  } else {
                    let miniCartSelector =
                      priceMod.cartSection?.querySelector("mini-cart");
                    if (
                      miniCartSelector?.renderContents &&
                      typeof miniCartSelector?.renderContents === "function"
                    ) {
                      priceMod.removeLoadingAddCart(e.target);
                      miniCartSelector.renderContents(i);
                      if (miniCartSelector.classList.contains("is-empty"))
                        miniCartSelector.classList.remove("is-empty");
                      return;
                    }
                  }
                }
              }
            } catch (ex) {
              console.log("Render cart error: ", ex);
            }
            if (shop_id === "25514049590") {
              let cartContent = await priceModCart.getCartV2();
              document.documentElement.dispatchEvent(
                new CustomEvent("cart:updated", {
                  bubbles: true,
                  detail: {
                    cart: cartContent,
                  },
                })
              );
              cartContent["sections"] = i["sections"];
              document.documentElement.dispatchEvent(
                new CustomEvent("cart:refresh", {
                  bubbles: true,
                  detail: {
                    cart: cartContent,
                    openMiniCart:
                      window.themeVariables?.settings?.cartType === "drawer" &&
                      e?.target?.closest(".drawer") === null,
                  },
                })
              );

              priceMod.removeLoadingAddCart(e.target);
              return;
            }
            if (shop_id === "6037953") {
              const cartContent = await priceModCart.getCartV2();
              cartContent["sections"] = i["sections"];
              this.dispatchEvent(
                new CustomEvent("variant:add", {
                  bubbles: true,
                  detail: {
                    items: i.hasOwnProperty("items") ? i["items"] : [i],
                    cart: cartContent,
                    onSuccessDo: null,
                  },
                })
              );
              document.documentElement.dispatchEvent(
                new CustomEvent("cart:change", {
                  bubbles: true,
                  detail: {
                    baseEvent: "variant:add",
                    onSuccessDo: null,
                    cart: cartContent,
                  },
                })
              );

              priceMod.removeLoadingAddCart(e.target);
              return;
            }
            if (shop_id === "79302132006") {
              let cart = await priceModCart.getCartV2();
              if (cart) {
                document.dispatchEvent(
                  new CustomEvent("theme:cart:change", {
                    detail: {
                      cart: cart,
                    },
                    bubbles: !0,
                  })
                );

                if (
                  window.theme.state.cartOpen ||
                  Boolean(
                    document.body.querySelector('[data-section-type="cart"]')
                  )
                ) {
                  document.dispatchEvent(
                    new CustomEvent("theme:cart:reload", {
                      bubbles: !0,
                    })
                  );
                } else {
                  let popdown = document.querySelector(
                    "[data-product-add-popdown-wrapper]"
                  );
                  if (popdown) {
                    popdown.dispatchEvent(
                      new CustomEvent("theme:cart:popdown", {
                        detail: {
                          variant: e,
                        },
                        bubbles: !0,
                      })
                    );
                  }
                }
              }
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (
              shop_id === "52058915007" &&
              productFormAdd &&
              i?.items?.length > 0
            ) {
              productFormAdd.dispatchEvent(
                new CustomEvent("ajaxProduct:added", {
                  detail: {
                    product: i.items[0],
                  },
                  bubbles: true,
                })
              );

              priceMod.removeLoadingAddCart(e.target);
              window.monster_refresh && window.monster_refresh();
              return;
            }
            // window.BOOMR.themeName = "Impact"
            if (
              window.ap_front_settings.shop_id === "83553517888" ||
              window.ap_front_settings.shop_id === "25604915279"
            ) {
              productForm = e.target.closest("form[is='product-form']");
              const cartContent = await (
                await fetch(`${Shopify.routes.root}cart.js`)
              ).json();
              (cartContent.sections = i.sections),
                productForm?.dispatchEvent(
                  new CustomEvent("variant:add", {
                    bubbles: !0,
                    detail: {
                      items: i.hasOwnProperty("items") ? i.items : [i],
                      cart: cartContent,
                    },
                  })
                ),
                document.documentElement.dispatchEvent(
                  new CustomEvent("cart:change", {
                    bubbles: !0,
                    detail: {
                      baseEvent: "variant:add",
                      cart: cartContent,
                    },
                  })
                );
              priceMod.removeLoadingAddCart(e.target);
              return;
            }
            // Check cart drawer theme Expanse
            if (window.ap_front_settings.shop_id === "80605217053") {
              productForm = e.target.closest("form[is='product-form']");
              const elementCart = document.querySelector(
                ".block-buy-buttons.product-block"
              );
              document.dispatchEvent(
                new CustomEvent("ajaxProduct:added", {
                  detail: {
                    product: i.items[0],
                    addToCartBtn: elementCart.querySelector(
                      `#ProductSubmitButton-${elementCart.dataset.sectionId}`
                    ),
                  },
                })
              );
              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (shop_id === "57510330564") {
              let config = document.getElementById("cart-config");
              if (!config) return false;
              config = JSON.parse(config.innerHTML || "{}");
              WAU.ThemeCart.getCart()
                .then((Cart) => {
                  if (
                    config.cart_action == "drawer" &&
                    config.cart_added_event == "go_to_active_cart"
                  ) {
                    WAU.AjaxCart.showDrawer(config);
                  } else if (
                    config.cart_action == "modal_cart" &&
                    config.cart_added_event == "go_to_active_cart"
                  ) {
                    WAU.AjaxCart.showModal(config);
                  } else if (
                    config.cart_action == "page_only" &&
                    config.cart_added_event == "go_to_active_cart"
                  ) {
                    window.location.href = config.cart_url;
                  } else if (config.cart_added_event == "product_page") {
                    WAU.Helpers.fadeIn(context.querySelector(".js-added-msg"));
                    setTimeout(function () {
                      WAU.Helpers.fadeOut(
                        context.querySelector(".js-added-msg")
                      );
                    }, 4000);
                  } else {
                    window.location.href = config.cart_url;
                  }

                  WAU.AjaxCart.updateView(config, Cart);
                  priceMod.removeLoadingAddCart(e.target);
                })
                .catch((error) => {
                  console.log("Avis AddCart error", error);
                  priceMod.removeLoadingAddCart(e.target);
                });
              return;
            }

            if (shop_id === "18227167316") {
              let cartIcon = document.querySelector(
                '.Header-iconsContainer a[data-drawer-name="cart"]'
              );
              if (cartIcon) {
                cartIcon.click();
                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }
            if (window.BOOMR?.themeName === "Warehouse") {
              let sectionProduct = document.querySelector(
                '[data-section-type="product"]'
              );
              if (sectionProduct) {
                sectionProduct.dispatchEvent(
                  new CustomEvent("product:added", {
                    bubbles: !0,
                    detail: {
                      // variant: this.currentVariant,
                      // button: target,
                      // quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
                    },
                  })
                );

                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }

            if (shop_id === "22344067") {
              let cartIcon = document.querySelector("#HeaderCartTrigger");
              if (cartIcon) {
                cartIcon.click();
                priceMod.removeLoadingAddCart(e.target);
                return;
              }
            }

            if (window.BOOMR?.themeName?.indexOf("Focal") > -1) {
              productForm?.dispatchEvent(
                new CustomEvent("variant:added", {
                  bubbles: true,
                  detail: {
                    variant: i.hasOwnProperty("items") ? i["items"][0] : i,
                  },
                })
              );

              let cartContent = await priceModCart.getCartV2();
              document.documentElement.dispatchEvent(
                new CustomEvent("cart:updated", {
                  bubbles: true,
                  detail: {
                    cart: cartContent,
                  },
                })
              );
              cartContent["sections"] = i["sections"];
              document.documentElement.dispatchEvent(
                new CustomEvent("cart:refresh", {
                  bubbles: true,
                  detail: {
                    cart: cartContent,
                    openMiniCart:
                      window.themeVariables?.settings?.cartType === "drawer" &&
                      productFormAdd?.closest(".drawer") === null,
                  },
                })
              );

              priceMod.removeLoadingAddCart(e.target);
              return;
            }

            if (
              window?.routes?.cart_url &&
              window?.routes?.cart_url?.indexOf(".js") === -1
            )
              window.location = window.routes.cart_url;
            else window.ap_front_settings.shop_id === '91619721600' ? window.location.href = `/${window.Shopify.locale}/cart` : window.location.href = "/cart";  // window.ap_front_settings.shop_id === '91619721600' ? `${window.Shopify.locale}/cart` :
            priceMod.removeLoadingAddCart(e.target);
          });
        }
      }
    }

    async function editOptionsToCart(e, productId) {
      priceMod.orderId = new Date().getTime();
      var uidGen = Math.floor(Math.random() * Math.floor(1e3));
      uidGen += "_1";
      let keyLineItemEdit = priceMod.cartItemEdit.key;
      let postDataCart = [];
      let newItemCart = {
        id: !1,
        quantity: priceMod.cartItemEdit.quantity,
        properties: {},
      };
      let addItemsCart = {
        items: [],
      };

      let variants = priceMod.getVariantSubmissions(productId);
      let listPrice = {};
      let listVariantBundle = [];
      let orderId = new Date().getTime();
      if (variants?.length > 0) {
        for (var optionIndex in variants) {
          let optionData = `${variants[optionIndex].name}: ${variants[optionIndex].value} - ${variants[optionIndex].variantId}`;
          let product = priceMod.productVariantBundles.find((x) =>
            x.variants.find(
              (y) =>
                String(y.id) === String(variants[optionIndex].variantId ?? "")
            )
          );
          let productVariant = null;
          if (product) {
            productVariant = product.variants.find(
              (y) =>
                String(y.id) === String(variants[optionIndex].variantId ?? "")
            );
          }
          else productVariant = priceMod.productVariantAC.find(x => String(x.id) === variants[optionIndex].variantId);
          if (productVariant) {
            listPrice[
              `${variants[optionIndex].name}_${variants[optionIndex].value}`
            ] =
              (parseToBool(variants[optionIndex].isOneTime)
                ? 1
                : variants[optionIndex].quantity) * productVariant.price;
          }
          listVariantBundle.push(
            parseToBool(variants[optionIndex].isOneTime)
              ? optionData
              : `${optionData} * ${variants[optionIndex].quantity}`
          );
        }
      }

      if (!useAddchargeApoOption && listVariantBundle.length > 0) {
        if (!$('[name="properties[_apo_variants]"]').length) {
          var variant = $("<input />")
            .attr("type", "hidden")
            .attr("name", `properties[_apo_variants]`)
            .val(listVariantBundle.join(joinAddCharge));
          $(e.target).before(variant);
        } else {
          $('[name="properties[_apo_variants]"]').val(
            listVariantBundle.join(joinAddCharge)
          );
        }
      }

      if (useAddchargeApoOption && listVariantBundle.length > 0) {
        newItemCart.properties[AvisOptionsConfig?.key_cart_order] = `${orderId}`;
      }

      let elemFormPopup = document.querySelector(".avis-cart-popup-form");
      let formData = new FormData(elemFormPopup);
      formData.forEach((e, t) => {
        if (
          ("id" == t && (newItemCart.id = parseInt(e)),
            t.indexOf("properties") > -1)
        ) {
          let property = t.replace("properties[", "").replace("]", "");
          let keyAC = `${property}_${e}`;
          if (showPriceACCart) {
            if (listPrice[keyAC] || listPrice[keyAC] === 0) {
              let formatPrice = priceMod.formatMoneyOnlyPrice(
                parseFloat(listPrice[keyAC]),
                true
              );
              newItemCart.properties[
                property
              ] = `${e} ${avisFormatPrice.replace(
                KEY_FORMAT_PRICE,
                formatPrice
              )}`;
            } else if (e.indexOf(",") > -1) {
              let listKey = [];
              for (let itemData of e.split(",")) {
                itemData = itemData.trim();
                keyAC = `${property}_${itemData}`;
                if (listPrice[keyAC]) {
                  let formatPrice = priceMod.formatMoneyOnlyPrice(
                    parseFloat(listPrice[keyAC]),
                    true
                  );
                  listKey.push(
                    `${itemData} ${avisFormatPrice.replace(
                      KEY_FORMAT_PRICE,
                      formatPrice
                    )}`
                  );
                } else listKey.push(itemData);
              }
              newItemCart.properties[property] = listKey.join(", ");
            } else newItemCart.properties[property] = e;
          } else newItemCart.properties[property] = e;
          // newItemCart.properties[property] = e;
        }
      });

      if (shop_id === "8502476855" || shop_id === "93958734130") {
              if (newItemCart.properties) newItemCart.properties["uid"] = uidGen;
      }

      $.each(variants, function (e, t) {
        let optionData = `${t.name}: ${t.value} - ${t.variantId}`;
        let propertiesData = {
          _apo_added_by: parseToBool(t.isOneTime)
            ? optionData
            : `${optionData} * ${t.quantity ?? 1}`,
        };

        if (useAddchargeApoOption) {
          optionData = `Added by: ${orderId}`;
          propertiesData = {};
          propertiesData[AvisOptionsConfig?.key_cart_order] = parseToBool(t.isOneTime) ? optionData : `${optionData} * ${t.quantity ?? 1}`;
          if (t?.$input?.[0]?.closest(".avis-option-qty-isonetime")) {
            propertiesData[AvisOptionsConfig?.key_cart_order] = `${optionData} * ${t.quantity ?? 1} * 1`;
          }
          propertiesData[AvisOptionsConfig?.key_cart_option] = `${t.name}: ${newItemCart?.properties[t.name] ?? ""}`;
        }

         if (shop_id === "8502476855" || shop_id === "93958734130") {
            propertiesData["uid"] = uidGen;
        }

        let item = {
          id: parseInt(t.variantId),
          quantity: parseToBool(t.isOneTime) ? 1 : newItemCart.quantity * (t.quantity ?? 1),
          properties: propertiesData,
        };
        if (t?.$input?.[0]?.closest(".avis-option-qty-isonetime")) {
          item.quantity = newItemCart.quantity * (t.quantity ?? 1);
        }
        addItemsCart.items.push(item);
      });

      if (addItemsCart.items.length > 0) {
        addItemsCart.items.push(newItemCart);
      }

      let postDelOrAddCart = [];
      let cartItemRemoveInput = {};
      if (addItemsCart.items.length > 0) {
        cartItemRemoveInput[keyLineItemEdit] = 0;
      }

      if (
        priceMod.cartItemEdit.properties &&
        priceMod.cartItemEdit.properties.hasOwnProperty("_apo_variants")
      ) {
        let oldVariantAddChargeStr =
          priceMod.cartItemEdit.properties._apo_variants;
        if (oldVariantAddChargeStr) {
          let oldVariantCharges = oldVariantAddChargeStr.split(joinAddCharge);
          let cartItemRemoves = priceMod.cartCurrent.items.filter(
            (x) =>
              x.properties &&
              x.properties.hasOwnProperty("_apo_added_by") &&
              oldVariantCharges.find(
                (y) => y.indexOf(x.properties._apo_added_by) > -1
              )
          );
          if (cartItemRemoves.length > 0) {
            for (let cartItem of cartItemRemoves) {
              cartItemRemoveInput[cartItem.key] = 0;
            }
          }
        }
      }

      // Main product
      if (
        priceMod.cartItemEdit.properties &&
        priceMod.cartItemEdit.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
        !priceMod.cartItemEdit.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option)
      ) {
        let oldVariantAddChargeStr =
          priceMod.cartItemEdit.properties[AvisOptionsConfig?.key_cart_order];
        if (oldVariantAddChargeStr) {
          let cartItemRemoves = priceMod.cartCurrent.items.filter(
            (x) =>
              x.properties &&
              x.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
              x.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option) &&
              x.properties[AvisOptionsConfig?.key_cart_order].indexOf(String(oldVariantAddChargeStr)) >
              -1
          );
          if (cartItemRemoves.length > 0) {
            for (let cartItem of cartItemRemoves) {
              cartItemRemoveInput[cartItem.key] = 0;
            }
          }
        }
      }

      if (
        addItemsCart.items.length === 0 &&
        Object.keys(cartItemRemoveInput).length > 0
      ) {
        cartItemRemoveInput[keyLineItemEdit] = 0;
        addItemsCart.items.push(newItemCart);
      }

      if (Object.keys(cartItemRemoveInput).length > 0) {
        postDelOrAddCart.push(priceModCart.postUpdateCart(cartItemRemoveInput));
      }

      async function updateMainProduct() {
        let sections =
          priceMod.cartSection?.getSectionsToRender &&
            typeof priceMod.cartSection?.getSectionsToRender === "function"
            ? priceMod.cartSection
              .getSectionsToRender()
              .map((section) => (section.id))
            : [];

        let sections_url = window.location.pathname;

        let cartItemChange = {
          id: keyLineItemEdit,
          properties: newItemCart.properties,
          sections: sections,
          sections_url: sections_url,
        };

        if (shop_id === "8502476855" || shop_id === "93958734130") {
          if (cartItemChange.properties) cartItemChange.properties["uid"] = uidGen;
        }

        await Promise.all([priceModCart.postChangeCart(cartItemChange)]).then(
          (values) => {
            if (
              values.filter(
                (x) =>
                  x.res &&
                  (!x.res.status ||
                    (x.res.status != "bad_request" &&
                      x.res.status != "too_many_requests" &&
                      x.res.status != 404 &&
                      x.res.status != 422))
              ).length > 0
            ) {
              let cartOpus = document.querySelector("#cart-drawer-container .drawer-cd-up-app-Ksl.open");
                if (cartOpus && typeof window?.opusRefreshCart === "function")
                {
                  window?.opusRefreshCart?.();
                  document.querySelector(".avis-cartOptionsPopup")?.remove();
                  document.querySelector(".avis-cartOptionsBackdrop")?.remove();
                  return;
                }
              if (
                priceMod.cartSection?.renderContents &&
                typeof priceMod.cartSection?.renderContents === "function" && window?.ap_front_settings?.page_type !== "cart"
              ) {
                let avisCartOptionPopupClass = "avis-cartOptionsPopup";
                let avisCartOptionBackdropClass = "avis-cartOptionsBackdrop";
                priceMod.cartSection.renderContents(values[0]?.res);
                let optionPopup = document.querySelector(`.${avisCartOptionPopupClass}`),
                  optionDrop = document.querySelector(`.${avisCartOptionBackdropClass}`);
                optionPopup && optionPopup.remove(), optionDrop && optionDrop.remove();
                return;
              }
              else {
                location.reload();
              }
            } else {
              console.log(
                "Error: Edit options to cart for change main line item",
                values
              );
            }
          }
        );
      }

      // Line item (old, new) has product bundle
      if (postDelOrAddCart.length > 0) {
        await Promise.all(postDelOrAddCart).then(async (values) => {
          if (
            values.filter(
              (x) =>
                x.res &&
                (!x.res.status ||
                  (x.res.status != "bad_request" &&
                    x.res.status != "too_many_requests" &&
                    x.res.status != 404 &&
                    x.res.status != 422))
            ).length > 0
          ) {
            console.log("Res Del or Add Bundle when edit option", values);
            let newCart = await priceModCart.getCartV2();
            priceMod.cartCurrent = newCart;
            if (addItemsCart.items.length > 0) {
              postDataCart.push(priceModCart.postAddsCart(addItemsCart));
              await Promise.all(postDataCart).then(async (resData) => {
                console.log("Res Del or Add Bundle when edit option", resData);
                let cartOpus = document.querySelector("#cart-drawer-container .drawer-cd-up-app-Ksl.open");
                if (cartOpus && typeof window?.opusRefreshCart === "function")
                {
                  window?.opusRefreshCart?.();
                  document.querySelector(".avis-cartOptionsPopup")?.remove();
                  document.querySelector(".avis-cartOptionsBackdrop")?.remove();
                }
                else
                {
                  location.reload();
                }
              });
            } else {
              let cartOpus = document.querySelector("#cart-drawer-container .drawer-cd-up-app-Ksl.open");
              if (cartOpus && typeof window?.opusRefreshCart === "function")
              {
                window?.opusRefreshCart?.();
                document.querySelector(".avis-cartOptionsPopup")?.remove();
                  document.querySelector(".avis-cartOptionsBackdrop")?.remove();
              }
              else
              {
                location.reload();
              }
            }
          } else {
            priceMod.removeLoadingAddCart(e.target);
            console.log("Error: Edit options to cart", values);
          }
        });
      }

      if (addItemsCart.items.length === 0) {
        await updateMainProduct();
      }
    }
    window.avisCloneButtonATCForAC = function (buttonAddCart, elemOptionAvisContainer, isCheckRequiredOrAc = true) {
      setInterval(function () {
        if (!elemOptionAvisContainer) elemOptionAvisContainer = document;

        let isHandleButtonATC = true;
        if (isCheckRequiredOrAc) {
          let isCloneButtonAddCart = isExistOptionHasDataInputInvalid(
            elemOptionAvisContainer
          );
          let hasProductBundle = false;
          for (let item in priceModAll[productId].activeVariants) {
            if (
              priceModAll[productId].activeVariants[item].isShow &&
              (priceModAll[productId].activeVariants[item].productId ||
                priceModAll[productId].activeVariants[item].variantId)
            ) {
              hasProductBundle = true;
              break;
            }
          }
          isCheckRequiredOrAc = isCloneButtonAddCart || hasProductBundle;
        }

        let newClassNameAvisButtonAddCart =
          window.AP_POptions.apps.productoptions.avisNewAddCartButtonClass;
        let oldClassNameAvisButtonAddCart =
          window.AP_POptions.apps.productoptions.avisOrgAddCartButtonClass;

        let formATC = buttonAddCart.closest("form");
        if (isHandleButtonATC) {
          if (formATC?.querySelector(`.${newClassNameAvisButtonAddCart}`)?.className?.includes(newClassNameAvisButtonAddCart)) return;

          let cloneButtonAddCart = buttonAddCart ? buttonAddCart.cloneNode(true) : false;
          buttonAddCart.classList.add(oldClassNameAvisButtonAddCart);
          cloneButtonAddCart.classList.add(newClassNameAvisButtonAddCart);
          cloneButtonAddCart.addEventListener(
            "click",
            (event) => {
              p_check_validate(
                event,
                elemOptionAvisContainer,
                productId
              );
            },
            false
          );
        }
        else {
          if (buttonAddCart?.className?.includes(oldClassNameAvisButtonAddCart)) buttonAddCart.classList.remove(oldClassNameAvisButtonAddCart);
          if (formATC?.querySelector(`.${newClassNameAvisButtonAddCart}`)) formATC?.querySelector(`.${newClassNameAvisButtonAddCart}`).remove();
        }
      }, 300);
    };
    function findButtonAddCart(elemOptionAvisContainer, productId) {
      var e = window.AP_POptions.apps.productoptions.jQueryKey || "jQuery",
        t =
          window[e] && window[e].fn && (window[e]._data || window[e].data)
            ? window[e]
            : $;

      let listButtonAddCart = [];
      let listButtonAddCartClone = [];
      if (priceMod.isCloneButtonAddCart) {
        let buttonAddCart = null;
        let avisAddCartFormActiveJS = formProductGenOptionJs[productId];
        if (
          !elemOptionAvisContainer ||
          (productId === "default" && avisAddCartFormActiveJS)
        ) {
          if (
            shop_id === "83089457466" ||
            shop_id === "55969448111" ||
            shop_id === "60794175655" ||
            shop_id === "27998224519" || document.querySelector(window.AP_POptions.addToCartButton.split(',')[0])
          ) {
            for (let itemAddCart of window.AP_POptions.addToCartButton.split(
              ","
            )) {
              buttonAddCart =
                avisAddCartFormActiveJS?.querySelector(itemAddCart);
              listButtonAddCart = avisAddCartFormActiveJS?.querySelectorAll(itemAddCart);
              if (buttonAddCart) {
                break;
              }
            }
          } else if (shop_id === "21147393") {
            buttonAddCart = avisAddCartFormActiveJS?.querySelector("input[data-btn-addtocart][type='submit'][name='add']");

            if (!buttonAddCart) return;
          } else if (shop_id === "75236638988") {
            buttonAddCart = avisAddCartFormActiveJS?.querySelector(
              'button[id*="rfq-btn"]'
            );

            if (!buttonAddCart) return;
          } else if (shop_id === "67417112744") {
            buttonAddCart = avisAddCartFormActiveJS?.querySelector(
              'button.add-to-cart'
            );

            if (!buttonAddCart) return;
          } else {
            for (let itemAddCart of window.AP_POptions.addToCartButton.split(
              ","
            )) {
              buttonAddCart =
                avisAddCartFormActiveJS?.querySelector(itemAddCart);
              listButtonAddCart = avisAddCartFormActiveJS?.querySelectorAll(itemAddCart);
              if (buttonAddCart) {
                break;
              }
            }
          }
          // buttonAddCart = avisAddCartFormActiveJS?.querySelector(
          //   window.AP_POptions.addToCartButton
          // );
        }
        if (elemOptionAvisContainer && !buttonAddCart) {
          let findFormProduct = getFormHasAddToCart(elemOptionAvisContainer);
          if (findFormProduct) {
            avisAddCartFormActiveJS = findFormProduct;

            buttonAddCart = avisAddCartFormActiveJS?.querySelector(
              window.AP_POptions.addToCartButton
            );
          }
        }

        if (!buttonAddCart && shop_id === "33012973707") {
          buttonAddCart = elemOptionAvisContainer.querySelector(
            "button[data-action='add-to-cart']"
          );
        }

        if (!buttonAddCart) {
          buttonAddCart = avisAddCartFormActiveJS?.querySelector(
            window.AP_POptions.addToCartButton
          );
        }

        if (!buttonAddCart || (shop_id === "62259429589" && buttonAddCart.className.includes("disabled"))) {
          return;
        }

        let isCloneButtonAddCart = isExistOptionHasDataInputInvalid(
          elemOptionAvisContainer
        );
        let hasProductBundle = false;
        for (let item in priceModAll[productId].activeVariants) {
          if (
            priceModAll[productId].activeVariants[item].isShow &&
            (priceModAll[productId].activeVariants[item].productId ||
              priceModAll[productId].activeVariants[item].variantId)
          ) {
            hasProductBundle = true;
            break;
          }
        }
        if (
          (shop_id === "78803271973") &&
          elemOptionAvisContainer?.querySelector(".avis-required-1")
        )
          isCloneButtonAddCart = true;

        if (shop_id === "62666965181") {
          let checkShowAvis = elemOptionAvisContainer.querySelector(".avpoptions-container__v2");
          if (checkShowAvis && checkShowAvis.querySelector('[type="file"]')) {
            isCloneButtonAddCart = true;
          }
        }
        if (
          isCloneButtonAddCart ||
          hasProductBundle ||
          shop_id === "64625508442" ||
          shop_id === "86235251024" ||
          shop_id === "89148653914" ||
          shop_id === "57037127747" ||
          shop_id === "48947986582" ||
          shop_id === "72020525305" ||
          shop_id === "67441852613" ||
          shop_id === "89532825943" ||
          shop_id === "63698927669" ||
          shop_id === "68446945453" ||
          shop_id === "92464578854" ||
          isShopUploadCdnSpf
        ) {
          let newClassNameAvisButtonAddCart =
            window.AP_POptions.apps.productoptions.avisNewAddCartButtonClass;
          let oldClassNameAvisButtonAddCart =
            window.AP_POptions.apps.productoptions.avisOrgAddCartButtonClass;

          if (
            buttonAddCart.className &&
            (buttonAddCart.className.indexOf(newClassNameAvisButtonAddCart) >
              -1 ||
              buttonAddCart.className.indexOf(oldClassNameAvisButtonAddCart) >
              -1)
          )
            return;

          let cloneButtonAddCart = buttonAddCart ? buttonAddCart.cloneNode(true) : false;
          if (listButtonAddCart.length > 1) {
            let indexItem = 0;
            listButtonAddCart.forEach((item) => {
              if (indexItem > 0) {
                let buttonClone = item.cloneNode(true);
                item.parentNode.insertBefore(
                  buttonClone,
                  item
                );
                item.classList.add(oldClassNameAvisButtonAddCart);
                listButtonAddCartClone.push(buttonClone);
              }
              indexItem++;
            });
          }
          else {
            if (buttonAddCart) {
              cloneButtonAddCart = buttonAddCart.cloneNode(true);
            }
          }
          if (shop_id === "61391962248") {
            cloneButtonAddCart = document.createElement("div");
            let getHtml = buttonAddCart.querySelector("span");
            cloneButtonAddCart.innerHTML = getHtml?.innerHTML
              ? getHtml?.innerHTML
              : "Add to cart";
            cloneButtonAddCart.classList.add("button");
            cloneButtonAddCart.classList.add("button--full-width");
            cloneButtonAddCart.classList.add("product-form__submit");
          }

          if (shop_id === "69043421407" || shop_id === "82808766749") {
            let isCheckoutAvis = avisAddCartFormActiveJS?.querySelector(
              ".checkout-avis-options"
            );
            if (!isCheckoutAvis) {
              let buttonCheckout = avisAddCartFormActiveJS?.querySelector(
                "button.ecom-product-single__buy_it_now_btn--checkout"
              );
              if (buttonCheckout) {
                let cloneButtonCheckout = buttonCheckout.cloneNode(true);
                buttonCheckout.setAttribute("style", "display:none !important");
                cloneButtonCheckout.classList.add("checkout-avis-options");
                cloneButtonCheckout.addEventListener("click", (event) => {
                  p_check_validate(
                    event,
                    elemOptionAvisContainer,
                    productId,
                    true
                  ); //isRedirectCheckout = true
                });

                buttonCheckout.parentNode.insertBefore(
                  cloneButtonCheckout,
                  buttonCheckout
                );
              }
            }
          }

          if (!cloneButtonAddCart) return;
          for (let itemAddCart_2 of window.AP_POptions.addToCartButton_v2) {
            let buttonAC_2 = elemOptionAvisContainer.querySelector(itemAddCart_2);

            if (["49451860121","89704104246", "63940559001","57985335363","63261704421", "91649147258", "89896026439", "95302287692", "55969448111", "58594525339", "90430210377", "61950132271", "92674326899", "70110675109", "91172077952"].includes(shop_id)
              && buttonAC_2 && buttonAC_2.className
              && buttonAC_2.className.indexOf(newClassNameAvisButtonAddCart) === -1
              && buttonAC_2.className.indexOf(oldClassNameAvisButtonAddCart) === -1) {
              let cloneButtonAddCart_2 = buttonAC_2.cloneNode(true);
              buttonAC_2.classList.add(oldClassNameAvisButtonAddCart);
              cloneButtonAddCart_2.classList.add(newClassNameAvisButtonAddCart);
              cloneButtonAddCart_2.addEventListener(
                "click",
                (event) => {
                  p_check_validate(
                    event,
                    elemOptionAvisContainer,
                    productId,
                    false,
                    cloneButtonAddCart_2
                  );
                },
                false
              );
              buttonAC_2.parentNode.insertBefore(
                cloneButtonAddCart_2,
                buttonAC_2
              );
              if (["89704104246", "57985335363","61950132271", "63261704421"].includes(shop_id)) {
                const intervalId = setInterval(() => {
                  const form = buttonAddCart?.closest('form');
                  const form2 = buttonAC_2?.closest('form');
                  const inputHidden = form?.querySelector(".avis-input-hiddens");

                  if (inputHidden && buttonAC_2) {
                    const existingClone = form2.querySelector(".avis-input-hiddens-clone");
                    if (existingClone) existingClone.remove();

                    const cloneInputHidden = inputHidden.cloneNode(true);
                    cloneInputHidden.classList.add("avis-input-hiddens-clone");

                    buttonAC_2.parentNode.insertBefore(cloneInputHidden, buttonAC_2);
                  }
                }, 300);
              }
            }
          }
          listButtonAddCartClone.forEach((itemClone) => {
            itemClone.classList.add(newClassNameAvisButtonAddCart);
            itemClone.addEventListener(
              "click",
              (event) => {
                p_check_validate(
                  event,
                  elemOptionAvisContainer,
                  productId,
                  false,
                  shop_id === "78803271973" ? cloneButtonAddCart : null
                );
              },
              false
            );
          });
          switch (
          (cloneButtonAddCart.classList.add(newClassNameAvisButtonAddCart),
            cloneButtonAddCart.tagName)
          ) {
            case "BUTTON":
            case "INPUT":
            case "A":
              if (shop_id === "58594525339") {
                cloneButtonAddCart.removeAttribute("type");
                cloneButtonAddCart.removeAttribute("name");
                cloneButtonAddCart.classList.remove("add-to-cart");
              }
              if (shop_id === "26831880303") {
                cloneButtonAddCart.classList.remove("product-form__cart-submit");
              }
              if (shop_id === "64595165367" || shop_id === "4272062513") {
                cloneButtonAddCart.removeAttribute("qbk-popup-listener");
              }
              cloneButtonAddCart.addEventListener(
                "click",
                (event) => {
                  p_check_validate(
                    event,
                    elemOptionAvisContainer,
                    productId,
                    false,
                    shop_id === "78803271973" ? cloneButtonAddCart : null
                  );
                },
                false
              );
              break;
            case "DIV":
            case "SPAN":
              if (shop_id === "61391962248") {
                cloneButtonAddCart.addEventListener(
                  "click",
                  (event) => {
                    p_check_validate(
                      event,
                      elemOptionAvisContainer,
                      productId
                    );
                  },
                  false
                );
              } else {
                cloneButtonAddCart.querySelectorAll("button").forEach((e) =>
                  cloneButtonAddCart.addEventListener(
                    "click",
                    (event) => {
                      p_check_validate(
                        event,
                        elemOptionAvisContainer,
                        productId
                      );
                    },
                    false
                  )
                );
              }
              break;
          }

          buttonAddCart.classList.add(oldClassNameAvisButtonAddCart);
          buttonAddCart.parentNode.insertBefore(
            cloneButtonAddCart,
            buttonAddCart
          );
          var eventButtonAddCart = getEventData(t, buttonAddCart);
          eventButtonAddCart &&
            eventButtonAddCart.click &&
            eventButtonAddCart.click.length > 1 && (isCloneButtonAddCart || hasProductBundle)
              (console.log("Avis add to cart has other bound events"),
                eventButtonAddCart.click.unshift(eventButtonAddCart.click.pop())),
            g((e) => {
              p_check_validate(e, elemOptionAvisContainer, productId);
            }, (isCloneButtonAddCart || hasProductBundle)); // Check validate options of avisplus
        } else {
          if (avisAddCartFormActiveJS)
            RemoveCloneButtonAddCart($(avisAddCartFormActiveJS));
        }
      }

      function RemoveCloneButtonAddCart(avisAddCartFormActive) {
        avisAddCartFormActive
          .find(
            `.${window.AP_POptions.apps.productoptions.avisNewAddCartButtonClass}:not(.rfq-btn)`
          )
          .each(function () {
            $(this).remove();
          });
        avisAddCartFormActive
          .find(
            `.${window.AP_POptions.apps.productoptions.avisOrgAddCartButtonClass}`
          )
          .each(function () {
            $(this).removeClass(
              window.AP_POptions.apps.productoptions.avisOrgAddCartButtonClass
            );
          });
      }
      window.AvisOptionsConfig.eventValidateOptions = isExistOptionHasDataInputInvalid;
      function isExistOptionHasDataInputInvalid(
        elemOptionAvisContainer,
        currentStepElClass
      ) {
        window.AP_POptions.apps.productoptions.checkExistInputInvalid = true;
        var messageError = "";
        const checkValidateDataInput = function (e) {
          var t = "";
          return (
            $(
              "input[type=range][required], input[type=text][required], textarea[required], input[type=number][required], input[type=hidden][required], fieldset[apo-required], select[required], span[apo-required],div[apo-required],input[type=checkbox][avp-data=switch][required],input[type=file][data-min-files]",
              e
            )
              .not("[disabled]")
              .each(function (e, n) {
                t ||
                  (t = window.AP_POptions.apps.productoptions.validateInput(
                    n,
                    "required",
                    false
                  ));
              }),
            !t &&
              $("input[type=text][data-allow-value]", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "data-allow-value",
                      false
                    ));
                }),
            !t &&
              $("textarea[data-allow-value]", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "data-allow-value",
                      false
                    ));
                }),
            !t &&
              $("input[type=text][minlength]", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "minlength",
                      false
                    ));
                }),
            !t &&
              $("input[type=file][data-min-files]", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "data-min-files",
                      false
                    ));
                }),
            !t &&
              $("textarea[minlength]", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "minlength",
                      false
                    ));
                }),
            !t &&
              $("fieldset", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "minvalue",
                      false
                    )) ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "minquantity",
                      false
                    ));
                }),
            !t &&
              $("input[type=text].iti__tel-input", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "value-phone-input",
                      false
                    ));
                }),
            !t &&
              $("input[type=text][value-email-input]", e)
                .not("[disabled]")
                .each(function (e, n) {
                  t ||
                    (t = window.AP_POptions.apps.productoptions.validateInput(
                      n,
                      "value-email-input",
                      false
                    ));
                }),
            t
          );
        };
        if (
          (($io = $(
            `#${
              currentStepElClass ? currentStepElClass : container_AP_POptions
            }`
          )),
          (messageError = checkValidateDataInput(
            elemOptionAvisContainer &&
              elemOptionAvisContainer.querySelector(
                `.${
                  currentStepElClass
                    ? currentStepElClass
                    : container_AP_POptions
                }`
              )
              ? $(
                  elemOptionAvisContainer.querySelector(
                    `.${
                      currentStepElClass
                        ? currentStepElClass
                        : container_AP_POptions
                    }`
                  )
                )
              : $io
          )),
          messageError && messageError.length)
        ) {
          window.AP_POptions.apps.productoptions.checkExistInputInvalid = false;
          return true;
        }
        window.AP_POptions.apps.productoptions.checkExistInputInvalid = false;
        return false;
      }
      window.avisCloneButtonATCForAddCharge = function (buttonAddCart, elemOptionAvisContainer, isCheckRequiredOrAc = true) {
        let newClassNameAvisButtonAddCart =
          window.AP_POptions.apps.productoptions.avisNewAddCartButtonClass;
        let oldClassNameAvisButtonAddCart =
          window.AP_POptions.apps.productoptions.avisOrgAddCartButtonClass;
        setInterval(function () {
          if (!isCheckRequiredOrAc) isCheckRequiredOrAc = true;
          if (!elemOptionAvisContainer) elemOptionAvisContainer = document;

          let isHandleButtonATC = true;
          if (isCheckRequiredOrAc) {
            let isCloneButtonAddCart = isExistOptionHasDataInputInvalid(
              elemOptionAvisContainer
            );
            let hasProductBundle = false;
            for (let item in priceModAll[productId].activeVariants) {
              if (
                priceModAll[productId].activeVariants[item].isShow &&
                (priceModAll[productId].activeVariants[item].productId ||
                  priceModAll[productId].activeVariants[item].variantId)
              ) {
                hasProductBundle = true;
                break;
              }
            }
            isCheckRequiredOrAc = isCloneButtonAddCart || hasProductBundle;
          }

          let newButtonAtc = document.querySelector(`.${newClassNameAvisButtonAddCart}`);
          let oldButtonAtc = document.querySelector(`.${oldClassNameAvisButtonAddCart}`);
          if (newButtonAtc || oldButtonAtc || !isCheckRequiredOrAc) return;

          let formATC = buttonAddCart.closest("form");
          if (isHandleButtonATC) {
            // if (formATC?.querySelector(`.${newClassNameAvisButtonAddCart}`)?.className?.includes(newClassNameAvisButtonAddCart)) return;

            let cloneButtonAddCart = buttonAddCart ? buttonAddCart.cloneNode(true) : false;
            buttonAddCart.classList.add(oldClassNameAvisButtonAddCart);
            cloneButtonAddCart.classList.add(newClassNameAvisButtonAddCart);
            cloneButtonAddCart.addEventListener(
              "click",
              (event) => {
                p_check_validate(
                  event,
                  elemOptionAvisContainer,
                  productId
                );
              },
              false
            );

            buttonAddCart.parentNode.insertBefore(
              cloneButtonAddCart,
              buttonAddCart
            );
          }
          else {
            if (buttonAddCart?.className?.includes(oldClassNameAvisButtonAddCart)) buttonAddCart.classList.remove(oldClassNameAvisButtonAddCart);
            if (formATC?.querySelector(`.${newClassNameAvisButtonAddCart}`)) formATC?.querySelector(`.${newClassNameAvisButtonAddCart}`).remove();
          }
        }, 300);
      };
    }

    function h(e, t) {
      return "undefined" != typeof e.shopifyPriceSynced
        ? t(e)
        : void $.ajax({
          url: "/products.json?id=" + e.productId,
          success: function (n) {
            if (n && n.products && n.products[0])
              for (var i = n.products[0].variants, o = 0; o < i.length; o++)
                i[o].id == e.variantId &&
                  ((e.price = i[o].price),
                    spLog(
                      e,
                      "Successfully fetched latest price from Shopify product",
                      !0
                    ));
            return t(e);
          },
          error: function (n) {
            return t(e);
          },
        });
    }

    function g(e, isCheckValidateOrAddOn) {
      var t = 0;
      if (window.AP_POptions.apps.productoptions.hideDynamicCheckout && isCheckValidateOrAddOn) {
        console.log("Avis hideDynamicCheckout");
        // $(".shopify-payment-button").hide();
        let paymentButton = document.querySelector(".shopify-payment-button");
        if (
          paymentButton &&
          paymentButton.className?.indexOf("avis-checkout") === -1
        ) {
          paymentButton.classList.add("avis-checkout");
          paymentButton.addEventListener("click", function (x) {
            if (
              document.querySelector(
                `.${window.AP_POptions.apps.productoptions.avisNewAddCartButtonClass}`
              )
            ) {
              e(x);
            }
          });
          return;
        }
      }
      function n(n) {
        var r, a;
        switch (n) {
          case "primary":
            (r = ".shopify-payment-button__button"), (a = i);
            break;
          case "secondary":
            (r = ".shopify-payment-button__more-options"), (a = o);
        }
        if ($(r).length) {
          spLog(
            !0,
            "dynamic checkout: " +
            n +
            " button found, preventing submission until our options pass validation.",
            !0
          ),
            clearInterval(a),
            m(e, n, r);
          var s = new MutationObserver(function (t) {
            (t[0].addedNodes.length ||
              (t[0].removedNodes.length && !$(r).length)) &&
              m(e, n, r);
          });
          s.observe($(".shopify-payment-button")[0], {
            childList: !0,
            subtree: !0,
          });
        }
        t >= 9 &&
          (spLog(
            !1,
            "dynamic checkout: unable to locate " +
            n +
            " dynamic checkout button after polling for 5 seconds.",
            !0
          ),
            clearInterval(a)),
          t++;
      }
      var i = setInterval(function () {
        n("primary");
      }, 500),
        o = setInterval(function () {
          n("secondary");
        }, 500);
    }
    function m(e, t, n) {
      var i, o;
      if ($(".sp-dynamic-checkout-button-" + t).length) {
        if (
          ((o = $(".sp-dynamic-checkout-button-" + t)),
            (overlayEvents = getEventData($, o[0])),
            overlayEvents && overlayEvents.click)
        )
          for (var r = 0; r < overlayEvents.click.length; r++)
            if (overlayEvents.click[r].data["io-AP_POptions-validate"])
              return !0;
      } else
        (o = genDivVForButtonAddCart("sp-dynamic-checkout-button-" + t, !0)),
          (i = !0);
      onBindEvent(
        $,
        o,
        window.AP_POptions.apps.productoptions.validationEventName,
        { "io-AP_POptions-validate": !0, "io-dynamic-checkout-type": t },
        e
      ),
        i && $(n).css({ position: "relative" }).append(o),
        o.data("io-dynamic-bound", !0);
      var a = getEventData($, o[0]);
      a && a.click && a.click.length > 1 && a.click.unshift(a.click.pop());
    }
    // y
    function genDivVForButtonAddCart(className, status) {
      if ((($overlay = $('<div class="' + className + '"></div>')), status)) {
        var n = {
          all: {
            position: "absolute",
            display: "block",
            "z-index": "100",
            cursor: "pointer",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          },
        };
        $.each(n, function (e, t) {
          $overlay.css(t);
        });
      }
      return $overlay;
    }
    // w
    function onBindEvent(e, t, n, i, o) {
      e.fn.on ? t.on(n, i, o) : t.bind(n, i, o);
    }

    function x() {
      $(`#${container_AP_POptions} select[required="required"]`)
        .find('option[disabled="disabled"][selected="selected"]')
        .prop("selected", "selected");
    }

    window.AP_POptions &&
      window.AP_POptions.apps &&
      window.AP_POptions.apps.customizery &&
      ((window.AP_POptions.apps.productoptions =
        window.AP_POptions.apps.customizery),
        delete window.AP_POptions.apps.customizery);

    // Check all option set by condition product
    // elemOptionAvisContainer : container quickview, featured product, product page
    function mainCheckAllRules(
      productInfo,
      productId,
      isPopup = false,
      elemOptionAvisContainer = null,
      optionSetsFilter = null
    ) {
      if (!productId) productId = apoProductDefault;
      selectedVariantIdAll[productId] = "";
      priceModAll[productId] = {
        variantSubmissionAlters: [],
        variantOrdering: [],
        activeVariants: {},
        productVariantBundles: [],
        radioInput: {},
        priceAddChargeValue: {}, //Key: label on cart + value
      };
      if (elemOptionAvisContainer) {
        let containerAvisOption = elemOptionAvisContainer.querySelector(
          `.${container_AP_POptions}`
        );
        if (containerAvisOption) containerAvisOption.remove();
      } else elemOptionAvisContainer = document;
      let optionSetsConfig = customizeryConfig.optionSets;
      if (optionSetsFilter && optionSetsFilter.length > 0) optionSetsConfig = optionSetsFilter;
      optionSetsConfig.filter(x => x.type === "automated").forEach((optionSet) => {
        let avisLocalesByOs = window.apoOptionLocales.avisOptions[`avis_locale_${window.apoOptionLocales.locale}_${optionSet.id}`];
        if (avisLocalesByOs) {
          let automatedLocales = avisLocalesByOs[`${optionSet.id}_automated`];
          if (optionSet?.conditional_applying_product?.conditions?.length > 0) {
            optionSet?.conditional_applying_product?.conditions?.forEach((condition, index) => {
              let conditionLocales = automatedLocales?.items?.find((x) => x?.key === condition?.key);
              if (conditionLocales && conditionLocales?.selector) condition.selector = conditionLocales?.selector;
            });
          }
        }
      });
      return customizeryRules.checkAllRules(
        customizeryConfig,
        optionSetsConfig,
        productInfo,
        productId,
        async function (optionSets, productInfo) {
          if (optionSets && optionSets.length > 0) {
            if (shop_id === "10354185") {
              if (!optionSets.find((x) => x?.sort >= 0)) {
                optionSets.sort(function (a, b) {
                  if (a.sort === b.sort) {
                    return new Date(a.created_at) - new Date(b.created_at);
                  }
                  else {
                    return parseInt(a.sort) - parseInt(b.sort);
                  }
                });
              }
            }
            else {
              if (!optionSets.find((x) => x.sort && x.sort > 0)) {
                optionSets.sort(function (a, b) {
                  return new Date(a.created_at) - new Date(b.created_at);
                });
              }
            }

            let checkExistLabelCart = {};
            for (let optionSet of optionSets) {
              if (optionSet.options && optionSet.options.length > 0) {
                for (let option of optionSet.options) {
                  if (checkExistLabelCart.hasOwnProperty(option.label_cart)) {
                    checkExistLabelCart[option.label_cart] += 1;

                    let oldLabelCart = option.label_cart;
                    let newLabelCart = `${option.label_cart}-${checkExistLabelCart[option.label_cart]
                      }`;
                    option.label_cart = newLabelCart;

                    for (let optionForConditionLogic of optionSet.options.filter(
                      (e) =>
                        e["conditional_logic"] &&
                        e["conditional_logic"]["condition_items"] &&
                        e["conditional_logic"]["condition_items"].length > 0
                    )) {
                      for (let conditionLogicItem of optionForConditionLogic[
                        "conditional_logic"
                      ]["condition_items"]) {
                        if (conditionLogicItem["field"] == oldLabelCart) {
                          conditionLogicItem["field"] = newLabelCart;
                        }
                      }
                    }
                  } else checkExistLabelCart[option.label_cart] = 0;

                  if (
                    option["option_values"] &&
                    option["option_values"].length > 0
                  ) {
                    for (let optionValue of option["option_values"]) {
                      if (optionValue["type"] == "percentagecharge") {
                        optionValue["type"] = "createcharge";
                        let priceProduct = productInfo["price"] ?? 0;
                        let priceCharge =
                          (parseFloat(priceProduct) *
                            parseFloat(optionValue["percentageCharge"] ?? 0)) /
                          100;
                        optionValue["price"] = priceCharge;
                      } else if (optionValue["price"]) {
                        optionValue["price"] = optionValue["price"] * 100;
                      }
                    }
                  }
                }
              }
            }

            priceMod.init({
              skipPriceModIfVisible:
                window.AP_POptions.apps.productoptions.skipPriceModIfVisible,
            }),
              (conditionalLogicInstances[productId] =
                new conditionalLogicFactory(window.AP_POptions.$)),
              await mainRenderOptions(
                optionSets,
                productInfo,
                productId,
                elemOptionAvisContainer
              );
            if (priceMod.isCloneButtonAddCart && elemOptionAvisContainer) {
              setInterval(function () {
                findButtonAddCart(elemOptionAvisContainer, productId);
              }, 100);
            }
          }
          else {
            if (typeof window.removeDisabledBtnAddCart === 'function') {
              setTimeout(window.removeDisabledBtnAddCart, 200);
            }
          }
          if (!isPopup)
            priceModCart.init(function () {
              return true;
            });
        }
      );
    }

    async function getOptionSetByProduct(
      productInfo,
      optionSetsConfig,
      optionSetsKey
    ) {
      return optionSetsConfig[optionSetsKey].filter(function (optionSet) {
        if (
          (window.ap_front_settings.config &&
            window.ap_front_settings.config.app_v &&
            window.ap_front_settings.config.app_v.indexOf("v2") > -1) ||
          (optionSetsConfig["app_v"] &&
            optionSetsConfig["app_v"].indexOf("v2") > -1)
        ) {
          if (!optionSet.type) return false;
          switch (optionSet.type) {
            case "all":
              return true;

            case "manual":
              if (!optionSet["products"] || optionSet.products.length == 0) {
                return false;
              } else {
                return optionSet.products.includes(String(productInfo.id));
              }

            case "automated":
              if (
                !optionSet["conditional_applying_product"] ||
                !optionSet.conditional_applying_product["type"] ||
                !optionSet.conditional_applying_product["conditions"]
              )
                return false;

              return customizeryRules.checkConditionsForProduct(
                optionSet.conditional_applying_product.type,
                optionSet.conditional_applying_product.conditions,
                productInfo
              );

            default:
              return false;
          }
        } else {
          if (!optionSet.rule_sets || !optionSet.rule_sets.length) return false;
          if (optionSet.all_products) return true;
          var ruleSets = optionSet.rule_sets.filter(function (ruleSet) {
            return customizeryRules.checkRuleSetForProduct(ruleSet, productInfo);
          });
          return ruleSets.length === optionSet.rule_sets.length;
        }
      });
    }
    async function checkAvisOption(productInfo) {
      let optionSetsValid = await getOptionSetByProduct(
        productInfo,
        customizeryConfig,
        "optionSets"
      );
      return optionSetsValid?.length && optionSetsValid?.length > 0;
    }
    window.checkAvisOption = checkAvisOption;

    window.AP_POptions = $.extend(
      !0,
      {
        listKeyAppendOptionPG: [
          "div.product_form form.shopify-product-form:not(.installment)",
          ".apo-form-cart",
          ".form-ops-upsells-with-avis",
          ".main-product-form form.form",
          ".buy-buttons-row form[action*='/cart/add'].product-purchase-form",
          ".product__container .apo-form-cart:not(.installment)",
          "[data-avis-cart-popup-form] .avis-popupBody",
          ".product-converter__add-to-cart .apo-form-cart:not(.installment)",
          "#mainWrap form[action*='/cart/add'].apo-form-cart:not(.installment)",
          ".product-container form[action*='/cart/add'].product-form:not(.installment)",
          ".container.main .clearfix.product_form:not(.installment)",
          ".product__info-wrapper form[action='/cart/add'][data-type='add-to-cart-form']:not(.installment)",
          "form[action*='/cart/add'].apo-form-cart:not(.installment)",
          ".home-product form[action*='/cart/add']:not(.installment)",
          ".shop-product form[action*='/cart/add']:not(.installment)",
          "#shopify-section-featured-product form[action*='/cart/add']:not(.installment)",
          "[data-block-type=\"buy-buttons\"] form[action*='cart/add']:not(.installment)",
          ".product-form__buy-buttons form[action*='cart/add']:not(.installment)",
          "product-form form[action*='cart/add']:not(.installment)",
          ".product-form form[action*='cart/add']:not(.installment)",
          ".product-page form[action*='cart/add']:not(.installment)",
          ".product-add form[action*='cart/add']:not(.installment)",
          "[id*='ProductSection--'] form[action*='cart/add']:not(.installment)",
          "form#add-to-cart-form:not(.installment)",
          "form.sf-cart__form:not(.installment)",
          "form.productForm:not(.installment)",
          "form.product-form:not(.installment)",
          "form.product-single__form:not(.installment)",
          "form.product__form:not(.installment)",
          "form.shopify-product-form[data-product-form]:not(.installment)",
          "form.atc-form:not(.installment)",
          "form.atc-form-mobile:not(.installment)",
          "form[action*='/cart/add']:not([hidden]):not(.installment)",
          "form[action*='/cart/add']:not(.installment)",
          "form.product__form:not(.installment)",
          "form.js-product-form[action='/cart/add']:not(.installment)",
          ".product-form-wrapper form.product-form[data-type='add-to-cart-form']:not(.installment)",
          "product-form.product-form form[action='/cart/add']:not(.installment)",
        ],
        variantWrapper:
          '.avis-swatch-product-container, .avis-variant-wrapper, [id*="MainProduct-"] variant-selects, [id*="MainProduct-"] variant-radios, .sp-swatches-container, .t4s-swatch, .inline-field-wrapper.js-required, select[id*="product-select-"], variant-radios, variant-selects, .variant-wrapper.variant-wrapper--button.js, .variations, gp-product-variants, .product-form__variants, .product__details .js-enabled .select-wrapper, #ProductSelect, .product-collection__options, div[data-dynamic-variants-enabled], variant-picker, .product-options, .quick-view-form__options',
        addToCartButton: AvisOptionsData?.listKeyButtonAddCart?.join(","),
        addToCartButton_v2: AvisOptionsData?.listKeyButtonAddCart_2,
        classContainerHidden: "avis-input-hiddens",
        apps: {
          productoptions: {
            _initialized: !0,
            _fieldsReady: !1,
            validate: null,
            validateType: null,
            jQueryKey: "jQuery",
            formAddOptionClassProductPage: "form[action$='/cart/add']",
            formAddOptionProductPage: null,
            avisOrgAddCartButtonClass: "avis-org-addcart-button",
            avisNewAddCartButtonClass: "avis-new-addcart-button",
            addToCartButton: "form[action$='/cart/add'] [type=submit]",
            addToCartButtonAPO:
              "form[action$='/cart/add'].apo-form-cart [type=submit]",
            validationEventName: "click",
            insertContainerAfter: null,
            themeAppExtensionActive: !1,
            themeAppExtensionId: null,
            activeProductId: null,
            checkExistInputInvalid: false,
            toggleInputError: toggleStyleErrorForInput,
            allowedValueLetterRegex:
              /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]+/,
            allowedValueLetterNumberRegex:
              /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
            validateInput: validateDataInput,
            newValidateOptions,
            createMessageAlert,
            getLatestVariantPrice: h,
            submitPriceModCartAnyways:
              window.ap_front_settings?.shop_id == "9291762",
            hideDynamicCheckout: true,
            skipPriceModIfVisible:
              'form[action$="/cart/add"] [type=submit] .secondary-text',
            errorClass: "apo-required-error",
            errorStyles: {
              "background-color": "#fef6f5",
              color: "#666",
              "border-color": "#ff5d5d",
            },
            strings: {
              charactersRemaining: "Characters remaining",
              totalQuantityMin:
                "Selected {selected_quantity} item(s). Please select at least {min_total_quantity} item(s)",
              totalQuantityMax:
                "Selected {selected_quantity} out of {max_total_quantity} item(s)",
              errorMessages: {
                forTextInputs:
                  "Please fill out this field before adding this item to cart",
                forNumberInputs:
                  "Please fill out this field before adding this item to cart",
                forCheckboxes:
                  "Please select your options before adding this item to cart",
                forButton:
                  "Please select your option before adding this item to cart",
                forMinimumValues:
                  "Please select at least {min_selections} option(s) before adding this item to cart",
                forDropdowns:
                  "Please select an option before adding this item to cart",
                forDynamicCheckout:
                  "This product cannot be purchased using this checkout method. Please add the item to cart, then proceed to checkout from the cart.",
                forColorInputs:
                  "Please add your personalized color before adding this item to cart",
                forSwitch:
                  "Please confirm your options status before adding this item to cart",
                forFileInputs:
                  "Please upload file before adding this item to cart",
                forTextLettersValid:
                  "Please enter only letters before adding this item to cart",
                forTextLettersAndNumbersValid:
                  "Please enter only letters and numbers before adding this item to cart",
                forTextValidateFileExtensions:
                  "Please upload file having extensions {file_extensions} only.",
                forMinQuantity:
                  "Please select at least {min_quantity} item(s) before adding this item to cart",
                forTextMinLength:
                  "Please enter at least {min_length} letters before adding this item to cart",
                forTextPhone: "Invalid phone number.",
                forTextEmail: "Invalid email format.",
                forMinQuanityValue: "Input at least {min_quantity}",
              },
            },
            debug:
              window.AP_POptions &&
              window.AP_POptions.Cookies &&
              "undefined" !=
              typeof window.AP_POptions.Cookies("avisplus_options_debug"),
          },
        },
      },
      window.AP_POptions
    );
    AvisOptionsData = AvisOptionsData || {};
    AvisOptionsData.mainCheckAllRules = mainCheckAllRules;
    AvisOptionsData.pluginAction = pluginAction;
    AvisOptionsData.formProductQuickview = "";
    window.AP_POptions.apps.productoptions.priceMod = priceMod;
    AvisOptionsData.priceMod = priceMod;
    AvisOptionsData.priceModCart = priceModCart;
    AvisOptionsData.submitEditOption = submitEditOption;
    window.AP_POptions.apps.productoptions.init = mainCheckAllRules;
    const IMAGE_SVG = {
      icon_option_group:
        '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute" stroke-width="0" stroke="#ff0000"></path></svg>',
      icon_plus: '<svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false" role="presentation" class="icon"><path class="h-line" d="M4 12h16"></path><path class="v-line" d="M12 4v16"></path></svg>'
    };

    if (window?.ap_front_settings?.page_type === "product" || isShopNotProductPage) {
      mainCheckAllRules();
    }
    return;
  }),
  (doesFileExist = function (urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", urlToFile, false);
    xhr.send();

    return xhr.status !== 404;
  }),
  (ap_loadConfig = function ($) {
    var shop_id = window.ap_front_settings.shop_id;
    if (shop_id && shop_id != "") {
      if (
        window.ap_front_settings.config &&
        window.ap_front_settings.config.hasOwnProperty("config_app") &&
        window.ap_front_settings.config.hasOwnProperty("optionset")
      ) {
        var optionsConfigData =
          window.ap_front_settings.config.config_app ?? {};
        optionsConfigData.css =
          window.ap_front_settings.config["config_css"] ?? "";
        optionsConfigData.optionSets =
          window.ap_front_settings.config.optionset;
        if (typeof optionsConfigData.enabled == "string") {
          optionsConfigData.enabled = optionsConfigData.enabled == "true";
        }

        if (optionsConfigData && optionsConfigData.enabled) {
          if (shop_id === "59142209629") {
            var urlConfig = `https://product-options-js.avisplus.io/${shop_id}.js`;
            doesFileExist(urlConfig) &&
              ap_loadScript(urlConfig, function () {
                if (window?.optionsConfig && window?.optionsConfig?.enabled) {
                  optionsConfigData.optionSets = optionsConfig.optionSets;
                  ap_addOptions($, optionsConfigData);
                }
              });
          } else ap_addOptions($, optionsConfigData);
        }
      } else {
        var urlConfig = `https://product-options-js.avisplus.io/${shop_id}.js`;
        doesFileExist(urlConfig) &&
          ap_loadScript(urlConfig, function () {
            if (optionsConfig && optionsConfig.enabled) {
              ap_addOptions($, optionsConfig);
            }
          });
      }
    }
  });
"undefined" == typeof window ? this : window,
  (window.ApOptions = window.ApOptions || {});

function loadAvisOption() {
  "undefined" == typeof jQuery ||
    window.ap_front_settings?.shop_id == "9291762" ||
    (3 == parseInt(jQuery.fn.jquery) &&
      parseFloat(jQuery.fn.jquery.replace(/^1\./, "")) < 2.1)
    ? ap_loadScript(window.ap_front_settings.url_jquery, function () {
      (ap_jQuery = jQuery.noConflict(!0)), ap_loadConfig(ap_jQuery);
    })
    : ((ap_jQuery = jQuery), ap_loadConfig(ap_jQuery));
}

window.initAvis = loadAvisOption;

if (window.ap_front_settings?.shop_id) {
  loadAvisOption();
}
else {
  let index = 0;
  let interAvisOption = setInterval(function () {
    index++;
    if (window.ap_front_settings?.shop_id) {
      clearInterval(interAvisOption);
      loadAvisOption();
    }
    if (index > 1000) {
      clearInterval(interAvisOption);
    }
  }, 200);
}
