function avisCustomOption()
{
  AvisOptionsConfig.featured_product = [
    ".featured-product",
    ".ecom-product-form.ecom-product-form--single",
    ".t4s-featured-product",
    ".home-featured-product",
    ".sf-featured-product",
    ".product-section[data-section-type='product-template']",
    ".shopify-section.mount-featured-product",
    ".shopify-section.index-section--featured-product",
    "div[id*='__featured_product'].shopify-section.index-section .product-section",
    "div[id*='featured_product'].shopify-section .section-featured-product",
    "div[id*='featured_product'].shopify-section .ctnr",
    "div[data-category='Featured Product']",
    ".shopify-section.shopify-section--featured-product",
    ".featured-product-section",
    "div[id*='featured_product'].shopify-section",
    ".shopify-section--featured-product",
    "section[id*='featured_product']",
    ".group-block .group-block__media-wrapper + .group-block-content:has(product-price)",
  ];

  AvisOptionsConfig.quick_view = {
    themeQuickview: ["Refresh"],
    themeSetintervalCollection: ["Refresh"],
    quickViewButtonSubmit: [
      "div[x-data='xVideoShopping'] div.product-info-container > div:last-child:not(.apo-quickview)",
      "a.t4s-pr-item-btn.t4s-pr-quickview.t4s-tooltip-actived:not(.apo-quickview)",
      "button.quick-add__submit:not(.apo-quickview)",
      "a.t4s-pr-item-btn.t4s-pr-addtocart.t4s-tooltip-actived:not(.apo-quickview)",
      ".quick-add button.quick-add__submit:not(.apo-quickview)",
      ".ecom-collection__product--quickview-wrapper .ecom-product-quickview:not(.apo-quickview)",
      '.product-card__btn[data-quick-view-id="Quick-view"]:not(.apo-quickview)',
      ".grid__item a.quick-view:not(.apo-quickview)",
      "button.product-card__quick-add-button:not(.apo-quickview)",
      ".button-cart-bottom:not(.apo-quickview)",
      ".btn.btn--tertiary.show-product-quickview:not(.apo-quickview)",
      ".quick-view a.engoj_btn_quickview:not(.apo-quickview)",
      ".card-quickview.card-quickviewIcon .quickview-icon:not(.apo-quickview)",
      "button.btn-quick-view:not(.apo-quickview)",
      ".product__quickbuy button:not(.apo-quickview)",
      ".product-image .quick-view:not(.apo-quickview)",
      ".quick_shop.js-quick-shop-link:not(.apo-quickview)",
      'a[data-fancybox*="quick-view"]:not(.apo-quickview)',
      ".btn.open-quick-view--btn:not(.apo-quickview)",
      "quick-add-button:not(.apo-quickview)",
      "button-quickview.button-quickview:not(.apo-quickview)",
      ".quickView.mobile-hide:not(.apo-quickview)",
      ".list-unstyled.yv-product-options:not(.apo-quickview)",
      "button.primary-button.quick-view-button:not(.apo-quickview)",
      ".product-item__quick-form .button--outline:not(.apo-quickview)",
      ".card-information__button quick-view-button:not(.apo-quickview)",
      "modal-opener-quick-view .button:not(.apo-quickview)",
      "div[class*=buy-with-quick-template]:not(.apo-quickview)",
      ".product-item__quick-view-button.btn:not(.apo-quickview)",
      ".card__quick-add button:not(.apo-quickview)",
      ".product-loop__item .js-quickview-trigger:not(.apo-quickview)",
      ".cross-sells__item-button button.cross-sells__item-add[data-quick-view-trigger]:not(.apo-quickview)",
      "button-quickview:not(.apo-quickview)",
      ".content-box-img q-button:not(.apo-quickview)",
      "p.quickshop a[data-quickshop].quickshop-initialized:not(.apo-quickview)",
      "product-block .block-inner-inner .quickbuy-toggle:not(.apo-quickview)",
      ".card-product__wrapper .card-quickview button.quickview-icon:not(.apo-quickview)",
      ".quickview-button[data-open-quick-view-popup]:not(.apo-quickview)",
      "a.button-ATC[data-quickshop-popup]:not(.apo-quickview)",
      "div.quick-add button[type='button']",
      "button[type='button'].quick-view__button:not(.apo-quickview)",
      "a.button--simple.quick-view:not(.apo-quickview)",
      ".quickshop-button .productitem--action-trigger:not(.apo-quickview)",
      ".product-item__action button-quickview:not(.apo-quickview)",
      "quick-view.product-card-quickview:not(.apo-quickview)",
      "button[data-quick-shop-trigger='quick-view']:not(.apo-quickview)",
      ".quick-add-to-cart > a.button:not(.apo-quickview)",
      ".product-grid-item__quick-buy .btn-quick-buy:not(.apo-quickview)",
      ".product-card__actions button[aria-controls^='QuickView']:not(.apo-quickview)",
      "product-card figure a.product-card--featured-image-link:not(.apo-quickview)",
      ".product-grid-container .quick-add button[id^='quick-add-template']:not(.apo-quickview)",
      ".quick-add modal-opener button.quick-add__submit:not(.apo-quickview)",
      "a.quickbuy-toggle:not(.apo-quickview)",
      "modal-opener button[type='submit'][name='add']:not(.apo-quickview)",
      ".product-button div .product-thumb-full-quick-view.quick-view-btn:not(.apo-quickview)",
      ".quick-product__btn:not(.apo-quickview)",
      ".quick-add__button.quick-add__button--choose:not(.apo-quickview)",
      "button.quick-add-btn:not(.apo-quickview)",
      "button.quick-add__button:not(.apo-quickview)",
      "div.product__quickbuy button[aria-label='Quick shop']:not(.apo-quickview)",
      "div.product-item .product-item__inner .product-item__action select-option:not(.apo-quickview)",
      ".snize-action-button.snize-quick-view-button:not(.apo-quickview)",
      ".horizontal-product__quantity button[aria-controls*='Quickview-sections']:not(.apo-quickview)",
      ".product-item__cta-wrapper button.product-item__cta:not(.apo-quickview)",
      "button.m-product-quickview-button:not(.apo-quickview)",
      "button.button--quickview:not(.apo-quickview)",
      "button.quick-shop__trigger:not(.apo-quickview)",
      ".btn.btn--secondary.quickbuy-toggle:not(.apo-quickview)",
      ".product-card__quick-buy button.button:not(.apo-quickview)",
      ".boost-sd__product-item button.boost-sd__button--quick-view:not(.apo-quickview)",
      ".boost-sd__product-item button.boost-sd__button--select-option:not(.apo-quickview)",
      ".product-item a.quickview-button:not(.apo-quickview)",
      ".card__extras quick-view-button .button:not(.apo-quickview)",
      ".apo-quickview quick-add-toggle.cursor-pointer:not(.apo-quickview)",
      ".quick-view-container button.button--quickview:not(button[x-customer-event-data]):not(.apo-quickview)",
      "button.js-product-card-quick-view-button:not(.apo-quickview)",
    ],
    quickViewModal: [
      "div.js-product-container div.choose-options-content",
      ".open.popup-wrapper__quick-view",
      ".t4s-modal--is-active",
      ".quick-add-modal[open]",
      ".ecom-quickview__wrapper.ecom-open",
      ".quick-view.is-opened",
      "div.fancybox-opened .ncfe-pre-primary-bundle",
      "quick-buy-modal[open]",
      ".mfp-wrap.mfp-close-btn-in",
      ".quick-product--wrap.active",
      ".quickview-product.tshopify-popup.active",
      "body.quick-view-show #halo-quick-view-popup",
      "body.quickshop-popup-show .halo-quickshop-popup",
      // "#halo-quick-view-popup",
      "sht-dialog-quickshop",
      "#quickViewModal.show",
      ".remodal-wrapper.remodal-is-opened",
      ".fancybox-container.quickview-popup.fancybox-is-open",
      "#modal-quick-view",
      "quick-add-modal#quick-add-modal",
      "quickbuy-canvas.active",
      ".yv_side_drawer_wrapper.yv_quickView_product",
      "#quickViewDrawer.is-open",
      "quick-view.quick-view .quick-view__content.hide-cover",
      "quick-add-modal.quick-add-modal[open]",
      "div[id*=buy-with-modal].active",
      "div.quick-product-modal.active",
      ".fancybox-slide.fancybox-slide--complete",
      "quick-add-drawer[open]",
      ".quickview.slideout--active",
      ".quick-product--wrap[data-quick-view-modal]",
      "quickbuy-canvas",
      ".hidden-view-quick-view",
      "div#quickshop",
      "product-block.product-block.expanded",
      "quick-view.quick-view + quick-view.quick-view",
      "body > quick-view[id*=main-collection].quick-view",
      ".fancybox-overlay.fancybox-overlay-fixed #quick-view",
      ".modal.modal--quickshop-full.allow-scroll-while-locked",
      ".quickview .tingle-modal-box",
      "#Product-Drawer.active",
      "modal-box.modal--product.active",
      ".popup-quick-view__inner",
      "quick-view-modal.quick-view[open]",
      "div#Product-Drawer.side-panel.product-drawer.active",
      "quick-add-modal[open] div.quick-add-modal__content-info",
      "div.product-block.expanded > div.quickbuy-container",
      "quick-add-modal.quick-add-modal[open]",
      ".mfp-container",
      ".modal.modal--quick-shop.modal--is-active",
      "quick-add-dialog#quick-add-dialog dialog[open]",
      ".fancybox-opened #quick-view",
      "tool-tip.quick-add-modal[data-tool-tip-open='true']",
      "sht-dialog-quickshop div.dialog",
      "dialog.drawer.product-quick-add[open='true']",
      ".quick-shop-modal[data-tool-tip-open='true']",
      "quick-view[open]",
      "#snize-modal-product-quick-view",
      "quick-buy-drawer[open]",
      "quick-buy-popover[open]",
      ".m-modal--wrapper.m-open-modal",
      "#QuickView",
      ".product-block.expanded .quickbuy-container",
      "quick-shop.modal.is-inside-modal",
      "#boost-sd__modal-quickview",
      ".boost-sd__popup-select-option",
      ".ajax-success-modal.halo-modal.ajax-quickview",
      // "quick-view.quick-view div.quick-view__content product-info.product__info",
      "#quick-add-popup.show",
      ".card-product div[id*=choose-options-template][x-show='showOptions']:not([style='display: none;'])",
      ".js-quick-view.is-active",
    ],
  };
  AvisOptionsConfig.productVariantPriceWrapperSelector = [
    //".product-block.product-block--price" // Impulse
    ".product-details  product-price",
    ".thb-product-detail .product-price-container" // Habitat version 1.6.2
    , ".product__info-container div[id*='price-template']" // theme shopify
    , ".product__info-container div[id*='price-quickadd-template']" // theme shopify quickview
    , ".al_center.price-review" // theme Kalles 2.7.1
    , ".product-form__info-item" // theme Warehouse v2.8.2, v1.16.4
    , ".tt-price" // theme Wokiee version 2.2.2 shopify 2.0
    , ".t4s-product__price-review" // theme Kalles version 4.0.4
    , ".ecom-product-single.ecom-product-single__price--prices" // key ECom
    , ".product-info__price .rating-with-text" // theme Impact version 4.3.0
    //, ".price.product__price .price__current" // theme Empire
    , ".f-price__regular" // theme Minimog - OS 2.0 version 3.4.0
    //,".product-form.theme-init" // Symmetry version 5.6.0
    , ".f8pr .f8pr-price.price" // Xtra version 4.0.0 available
    , ".product-single__primary-blocks .price" // Venue version 10.0.5 available
    , ".price__pricing-group" // Testament version 12.2.0 available
    //, ".product-info .product-info__block-item[data-block-type='price']" // Prestige version 8.2.0
    //, ".product-info__sticky .product-info__price" // Enterprise version 1.4.2
    , ".product-info__price .price" // Enterprise version 1.4.0
    //,"span[data-product-price].product__price" // Motion version 10.4.0
    , "div.price-container div.variant-visibility-area div.price-area" // Symmetry version 6.0.3
    , ".product-price-container .price" // Reformation version 1.6.2
    , ".price-area" // Athens version 2.0.0
    , ".product--page .product-price__cost" // Aurora version 3.0.2
    , ".main-product__block-price" //MINIMOG v5.0.2 - Pan store
    , "form.shopify-product-form .items-end.justify-between"
    //, ".product-block--title + .product-block--price .product-single__prices" //Streamline 4.4.1 80845308239
    //, ".product-single__prices" //Minimal 12.0.2
    , ".wrap-product-info .priceSingle"
    , ".product-block--price .modal_price" //Turbo 9.2.0
    , ".product-block.product-block--price .product-pricing:not([data-product-pricing])" //Superstore 5.1.0
    , ".content-item-container .price__container" //Area 1.3.3
    , ".productView-details .productView-price" //Ella 6.5.4
    , ".product__app-block + div .product__price .price__container" //Sahara 1.1.10
    //,".product__content div[id*='Product-Price-template']"
    //, "div[data-product-blocks] .product-block.product-block--price" //Impulse 7.4.1
    , ".yv-pricebox-outer div.yv-prizebox[data-price-wrapper]" //Yuva 12.1.0
    , ".product__title + div[id*='Product-Price-template--'] .price__regular" //Sahara 1.1.10 86728704276
    , ".product-actions .product-price" //Local 2.3.2 64170688683
    , ".Product__InfoWrapper .Product__Info .ProductMeta__PriceList" // Prestige version 4.1.0 61112254697
    , ".product-details-wrapper #ProductPrice" // Flow version 33.0.0 59927363743
    , ".content-page-detail .product-price" // Janier version 1.0.0 82220450067
    , ".main-content div[data-pf-type='ProductPrice2']" // PageFly 59252080811
    // , ".product__info-wrapper product-info .price__container" // Dawn 87373545759
    , ".product__block__price .product__price__wrap" // Pipeline 7.2.1 79302132006
    , ".product-single__meta div[data-product-blocks] .product-block.product-block--price"  // Motion 10.4.1 71974158653 and Streamline 4.4.1 80845308239
    , ".product-block.product-block--price .product-pricing[data-product-pricing]"  // Empire 9.1.1 52262240425 and 11.0.0 63207538849
    , ".product__info.product__block-price div[id*='productPrice-template']" // Shine 1.1.0 Page Fly
    , ".product__prices div[id*='productPrice-template'] .price.price--large" // Electro 1.4.0 Page Fly
    , ".product-single__form-price" // Expanse 1.0.5 59286225080
    , ".product-single__meta .price-main" // Velatheme 2.0.0 71189233952
    , ".product_details_info .price-block" // Spront 1.0.0 70102352088
    , ".price-container.text-money" // Debutify 3.0.4 57964363930
    , "#ProductSection .product-single .product-single__prices" // Minimal 11.7.11 37274026115
    , ".product-block--price .price-container[data-price-container] .price-container__price .price-container__price" // Retina 7.3.0 10944892
    , ".modal_price .price__container span .current_price" // 54942433488
    , ".product-info__block-item[data-block-type='price'] .price-list.price-list--product" // Prestige 10.0.0 68329144558
    , "#productPrice-product-template" // Supply 8.5.0 25331662957
    , "div[id*=price-template] .main-product-price.price" // Eurus 64108757169
    , ".product-detail__price.product-price[data-price-wrapper]" // Boost 27289256036
    , ".product__price.product__block.product__block--small" // Spark 57017368679
    , ".sp-product-information-item.sp-price-wrapper" // Ride 75944689930
    , ".product__main .price-wrapper[id*=price-template]" //Digital 73932832802
    , ".product-single__price .product_price" //Barberry 2.1.2
    , "div[data-js-product-price-compact] .product-price" // Combine 2.4.2.1
    , ".grid.product-single .product-single__meta .price-container" // Brooklyn 17.6.0  57355763871
    , "div[data-variant-dynamic='variant-price'].price" // Aisle 1.0.0
    , "span.product-price__price" // Debut 1.0.0
    , ".shopify-block .infiniteoptions-price" // Dawn 9.0.0
    , ".product-content-wrapper .product-price[data-price]" //Starlite 3.3.0
    , ".product-single__meta .product-single__price-container" //Passo Bosco 4.0.0
    , ".product-single span.product-price__price.product-price__price-product-template" // Debut 1.0.0
    , "div[data-pf-type='Block'] div[data-pf-type='ProductPrice2']" // Spark 2.5.1
    , "#product-content p.product-price" // Ecomify-lite 1.0.0
    , ".page-content .product_shop .product-price" // 55969448111
  ];

  AvisOptionsConfig.productPriceSelector = [
    ".product-details  product-price .price",
    ".price-area .current-price" // Showcase 54416834757
    , ".product__main .price-wrapper[id*=price-template] .price.price--product .price__sale .price-item.price-item--sale" //Digital 73932832802
    , ".price__sale span.price-item.price-item--sale"
    , ".ProductMeta__Price.Price.Price--highlight"
    , ".product-block--price span[data-product-price]"
    , ".product-block-group--price .m-price-item.m-price-item--sale"
    , ".product-info__price .price .price__current"
    , ".wrap-product-info .priceSingle span.pr_price"
    , ".product-block--price .modal_price .price span.money"
    // , ".product-info .v-stack sale-price"
    , ".productView-details .productView-price .price__regular .price-item--regular" //Ella 6.5.4
    , ".productView-details .productView-price .price__sale .price-item--sale" //Ella 6.5.4
    , ".product-info__price .rating-with-text price-list sale-price"// Impact version 4.3.0
    , ".product-price-container ins .amount"
    , ".product__app-block + div .product__price .price__container ins.price_product" //Sahara 1.1.10
    , ".product__content div[id*='Product-Price-template'] ins.price_product"
    , ".product__info-container div.no-js-hidden[id*='price-template'] .price--on-sale .price__sale .price-item--sale"
    , "span[data-product-price].product__price.on-sale span" //Impulse 7.4.1
    , "span[data-product-price].product__price span" //Impulse 7.4.1
    , "span[data-product-price].product__price" //Impulse 7.4.1
    , ".yv-pricebox-outer .yv-product-price" //Yuva 12.1.0
    , ".product__title + div[id*='Product-Price-template--'] .price__regular .visually-hidden + span" //Sahara 1.1.10
    , ".product__info-container div.no-js-hidden[id*='price-template'] .price-item--regular bdi"
    , ".product-actions .product-price .product-price--original" //Local 2.3.2 64170688683
    , ".Product__InfoWrapper .Product__Info .ProductMeta__PriceList .ProductMeta__Price.Price" // Prestige version 4.1.0 61112254697
    , ".product-details-wrapper #ProductPrice span.money" // Flow version 33.0.0 59927363743
    , ".enj-product-price.engoj_price_main" // Janier version 1.0.0 82220450067
    , ".main-content div[data-product-type='price'] span.money" // PageFly 59252080811
    // , ".product__info-container .price__container > .price__regular .price-item.price-item--regular" // Dawn 87373545759
    , ".product-price .product-price__prices #ProductPrice" //unknow theme 86002729246
    , ".product__block__price .product__price__wrap span[data-product-price]"
    , ".product-block--title + .product-block--price .product-single__prices .product__price[data-product-price]" //Streamline 4.4.1 80845308239
    , ".price.product__price .price__current span.money[data-price]" // theme Empire 11.0.0 63207538849
    , ".product-block.product-block--price .product__price"  // Motion 10.4.1 71974158653
    , ".product-block.product-block--price .product-pricing[data-product-pricing] .price.product__price"  // Empire 9.1.1 52262240425
    , ".price.price--large  .price-item.price-item--last" // Shine 1.1.0 Page Fly
    , ".t4s-product__price-review .t4s-product-price ins" // theme Kalles version 4.0.4 64665092279
    , ".t4s-product__price-review .t4s-product-price span.money" // theme Kalles version 4.2.3 27888222286
    , ".product-info__price .price .price__default .price__current" // Enterprise version 1.4.0
    , ".price.price--large  .price-item.price-item--last" // Electro 1.4.0 Page Fly
    , ".product-single__form-price .product__price" // Expanse 1.0.5 59286225080
    , ".product-single__meta .price-main .product-single__price" // Velatheme 2.0.0 71189233952
    , ".product-final-total .total-price" // Velatheme 2.0.0 71189233952
    , ".product_details_info .price-block #ProductPrice span" // Spront 1.0.0 70102352088
    , ".price-container.text-money #ProductPrice span" // Debutify 3.0.4 57964363930
    , "#ProductSection .product-single .product-single__prices #ProductPrice" // Minimal 11.7.11 37274026115
    , ".product-block--price .price-container[data-price-container] .price-container__price .price-container__price span.money" // Retina 7.3.0 10944892
    , ".modal_price .price__container span .current_price .money" // 54942433488
    , ".product-info__block-item[data-block-type='price'] .price-list.price-list--product sale-price" // Prestige 10.0.0 68329144558
    , ".product-block-group--price .m-price__regular .m-price-item.m-price-item--regular" // Minimog - OS 2.0 70798901505
    , "#productPrice-product-template span[aria-hidden]" // Supply 8.5.0 25331662957
    , "div[id*=price-template] .main-product-price.price .price-sale" // Eurus 64108757169
    , ".price .price__text[id*=price-template] .price__number" //Venue 27289256036
    , ".product-detail__price span[data-product-price][data-product-detail-price] span" // Boost 27289256036
    , "#product-price .price__pricing-group .price__regular .price-item.price-item--regular"  //Forge 4.0.0 57510330564
    , ".product__price.product__block span[data-price]" // Spark 57017368679
    , ".product__price .price__pricing-group .price__regular span.price-item.price-item--regular" //Pursuit 1.1
    , ".sp-price-wrapper .sp-product-card-price .price-item.price-item--sale" // Ride 75944689930
    , ".product__main .price-wrapper[id*=price-template] .price.price--product .price__regular" //Digital 73932832802
    , ".product_price .price .money" //Barberry 2.1.2
    , ".product-price span.product-price--original" // Combine 2.4.2.1
    , ".price-container #ProductPrice"  // Brooklyn 17.6.0  57355763871
    , "div[data-variant-dynamic='variant-price'].price > div > div > :nth-child(2)" // Aisle 1.0.0
    , "span.product-price__price #ProductPrice-product-template .bold_option_price_display" // Debut  1.0.0
    , ".infiniteoptions-price .price__regular .price-item--regular" // Dawn 9.0.0
    , ".price-item.actual-price" //Starlite 3.3.0
    , ".product-single__price:not(.product-single__price--compare)" //Passo Bosco 4.0.0
    , "#ProductPrice-product-template .bold_option_price_display" // Debut 1.0.0
    , "div[data-product-type='price']" // Spark 2.5.1
    , "span.product-price-final" // Ecomify-lite 1.0.0
    , ".product_shop .product-price .price-item.price-item--regular" // 55969448111
  ];
  AvisOptionsConfig.productPriceHasSaleSelector = [
    ".product-details  product-price .compare-at-price",
    ".price__sale s.price-item.price-item--regular"
    , ".ProductMeta__Price.Price.Price--compareAt"
    , ".product-block--price span[data-compare-price]"
    , ".product-block-group--price s.m-price-item.m-price-item--regular"
    , ".product-info__price .price s.price__was"
    , ".wrap-product-info .priceSingle s.pr_price"
    , ".product-block--price .modal_price .compare-at-price span.money"
    , ".product-info .v-stack compare-at-price"
    , ".productView-details .productView-price .price__sale .price__compare s" //Ella 6.5.4
    , ".product-price-container del .amount"
    , ".product__app-block + div .product__price .price__container del.price_compared" //Sahara 1.1.10
    , ".product__content div[id*='Product-Price-template'] del.price_compared"
    , ".product__info-container div.no-js-hidden[id*='price-template'] .price--on-sale .price__regular .price-item--regular"
    , ".product__info-container div.no-js-hidden[id*='price-template'] .price--on-sale .price__sale .price-item--regular"
    //, "span[data-compare-price].product__price.product__price--compare span" //Impulse 7.4.1
    , ".main-content div[data-product-type='compare_at_price'] span.money" // PageFly 59252080811
    , ".pdp-layout--hybrid div[data-product-blocks] .product-single__prices .product__price.product__price--compare" //Streamline 4.4.1 80845308239
    , ".price.product__price .price__current span.money[data-price-compare]" // theme Empire 11.0.0 63207538849
    , ".price.price--large .price-item.price-item--regular" // Shine 1.1.0 Page Fly
    , ".t4s-product__price-review .t4s-product-price del" // theme Kalles version 4.0.4 64665092279
    , ".product-info__price .price .price__default .price__was.price__was--supercents" // Enterprise version 1.4.0
    , ".price__sale .price-item.price-item--regular" // Electro 1.4.0 Page Fly
    , ".product_details_info .price-block #ComparePrice span" // Spront 1.0.0 70102352088
    , ".price-container.text-money #ComparePrice span" // Debutify 3.0.4 57964363930
    , ".product-info__block-item[data-block-type='price'] .price-list.price-list--product compare-at-price" // Prestige 10.0.0 68329144558
    , "div[id*=price-template] .main-product-price.price small s" // Eurus 64108757169
    , ".product__price.product__block s[data-compare-price]" // Spark 57017368679
    , ".product__price .price__pricing-group .price__sale span.price-item.price-item--sale" //Pursuit 1.1
    , ".product__main .price-wrapper[id*=price-template] .price.price--product .price__sale .price-item.price-item--regular" //Digital 73932832802
    , ".product-price del.product-price--compare" // Combine 2.4.2.1
    , ".price-container .product-single__price--wrapper #ComparePrice"  // Brooklyn 17.6.0  57355763871
    , "span.product-price__price .product-price__sale-label" //Debut 1.0.0
    , ".price-item.compare-price" //Starlite 3.3.0
    , ".product-single__price.product-single__price--compare" //Passo Bosco 4.0.0
    , "#ComparePrice-product-template" // Debut 1.0.0
    , "div[data-product-type='compare_at_price']" // Spark 2.5.1
    , "span.product-price-compare s" // Ecomify-lite 1.0.0
  ];
  AvisOptionsConfig.productVariantPriceSelector = [
    ".product-details  product-price .compare-at-price",
    ".product__info-container .price__container > .price__regular .price-item.price-item--regular" // theme shopify
    , ".al_center.price-review #price_ppr .current_price del" // theme Kalles 2.7.1
    , ".al_center.price-review #price_ppr .current_price" // theme Kalles 2.7.1
    , ".al_center.price-review #price_ppr del" // theme Kalles 2.7.1
    , ".al_center.price-review #price_ppr" // theme Kalles 2.7.1
    , ".product-form__info-item .price-list .price" // theme Warehouse v2.8.2, v1.16.4
    , ".tt-price .new-price" // theme Wokiee version 2.2.2 shopify 2.0
    , ".ecom-product-single__price--sale" // key ECom
    , ".ecom-product-single__price--regular" // key ECom
    , ".product-info__price .rating-with-text price-list compare-at-price span.money" // theme Impact version 4.3.0
    , ".f-price__regular .f-price-item.f-price-item--regular" // theme Minimog - OS 2.0 version 3.4.0
    , ".product-form.theme-init .price-container .current-price.theme-money" // Symmetry version 5.6.0
    , ".f8pr .f8pr-price.price span.money" // Xtra version 4.0.0 available
    , ".product-single__primary-blocks .price__number .notranslate.ht-money" // Venue version 10.0.5 available
    , ".price__pricing-group .price__regular .price-item.price-item--regular" // Testament version 12.2.0 available
    // , ".product-info .v-stack sale-price" // Prestige version 8.2.0
    //,"span[data-product-price].product__price" // Motion version 10.4.0
    , "div.price-container div.variant-visibility-area div.price-area .price span" // Symmetry version 6.0.3
    , ".product-price-container .etrans-money" // Reformation version 1.6.2
    , ".price .current-price" // Athens version 2.0.0
    , ".product--page .product-price__current-price" // Aurora version 3.0.2
    , ".main-product__block-price .m-price__regular .m-price-item--regular"
    , "form.shopify-product-form .items-end.justify-between span[x-show='defaultVariantPrice > 0']"
    , ".product-single__price" //Minimal 12.0.2
    , ".product--price .price--main span.money"  //Superstore 5.1.0
    , ".price__container .price__item" //Area 1.3.3
    , ".price.price--medium .price__last .price-item.price-item--regular" //Ella 6.5.5
    , ".halo-productView-right .price__regular .price-item.price-item--regular" //Ella 6.5.4
  ];
  AvisOptionsConfig.productVariantPriceSaleSelector = [
    ".product-details  product-price .price",
    ".product__info-container .price__container .price-item--sale" // theme shopify
    , ".al_center.price-review #price_ppr .current_price ins" // theme Kalles 2.7.1
    , ".al_center.price-review #price_ppr .current_price" // theme Kalles 2.7.1
    , ".al_center.price-review #price_ppr ins" // theme Kalles 2.7.1
    , ".product-form__info-item .price-list .price.price--highlight" // theme Warehouse v2.8.2, v1.16.4
    , ".tt-price .sale-price" // theme Wokiee version 2.2.2 shopify 2.0
    , ".ecom-product-single__price--sale" // key ECom
    , ".product-info__price .rating-with-text price-list sale-price span.money" // theme Impact version 4.3.0
    , ".product-form.theme-init .price-container .was-price.theme-money" // Symmetry version 5.6.0
    , ".price__pricing-group .price__sale .price-item.price-item--regular" // Testament version 12.2.0 available
    //,".product-info__price .price .price__default .price__current" // Enterprise version 1.4.1
    , ".main-product__block-price .m-price__sale .m-price-item--regular"
    , "form.shopify-product-form .items-end.justify-between s[x-show='defaultVariantComparePrice > 0']"
    , ".product-info .v-stack compare-at-price" // Prestige version 8.2.0
  ];
  AvisOptionsConfig.productVariantShowPriceSaleSelector = [
    {
      key: ".product__info-container .price--show-badge", // theme shopify
      sale: "price--on-sale",
      soldOut: "price--sold-out"
    }
  ];
  AvisOptionsConfig.productPriceHasTaxSelector = [
    ".product-price .priceVat",
  ];
  let shopIntervalForAppendPrice = ["90748060028", "65695154220", "76911673691", "68326162671"];
  function checkThemeName() {
    let themeName = window.apoThemeConfigs?.theme_name;
    let isThemeOk = false;
    if (themeName) isThemeOk = themeName?.indexOf("Custom") > -1;
    if (window?.BOOMR?.themeName && themeName && !isThemeOk) {
      let find = themeName.split(",").find(x => window?.BOOMR?.themeName.toLowerCase()?.indexOf(x.toLowerCase()) > -1);
      if (find) isThemeOk = true;
    }
    else isThemeOk = true;

    return window.apoThemeConfigs?.product_price?.wrapper_price && isThemeOk;
  }
  function apoHideMainPrice(filterProductPrice) {
    let clsWarpper = filterProductPrice?.id ? `#${filterProductPrice?.id}` : "";
    if (!clsWarpper) {
      if (filterProductPrice?.className) clsWarpper = `.${filterProductPrice?.className.split(" ").join(".")}`;
    }
    if (!clsWarpper) clsWarpper = filterProductPrice.localName ?? "";
    if (clsWarpper) clsWarpper = `${clsWarpper} `;
    let configProductPrice = window.apoThemeConfigs?.product_price;
    let styleCss = document.createElement("style");
    let isCheckTheme = checkThemeName();
    let listWrapper = "";
    if (configProductPrice && configProductPrice?.wrapper_price) {
      listWrapper = configProductPrice?.wrapper_price?.trim();
    }

    if (!isCheckTheme) {
      listWrapper = AvisOptionsConfig.productVariantPriceWrapperSelector.join(",");
    }
    let cssHideUpdatePrice = "";
    if (listWrapper) {
      listWrapper = (`${clsWarpper}`) + listWrapper.split(",").join(`:not(.apo-variant-price),${clsWarpper}`) + ":not(.apo-variant-price)";
      cssHideUpdatePrice = `${listWrapper}{ display:none !important;}`;
    }
    if (cssHideUpdatePrice) {
      styleCss.innerHTML = cssHideUpdatePrice;
      document.head.insertBefore(styleCss, document.head.firstChild);
    }
  }

  function apoInitOptions() {
    AvisOptionsData = AvisOptionsData || {};
    AvisOptionsData.createModalPopup = function (option) {
      function removeModal() {
        let modalPopups = document.querySelectorAll(".apo-modal");
        if (modalPopups.length > 0) {
          for (let modalItem of modalPopups) {
            modalItem.remove();
          }
        }
      }
      removeModal();
      let divModal = document.createElement("div");
      divModal.classList.add("apo-modal");

      let divContainer = document.createElement("div");
      divContainer.classList.add("apo-modal__container");
      if (option?.size_modal)
        divContainer.setAttribute("style", `width: ${option?.size_modal}px`);

      let divWrapper = document.createElement("div");
      divWrapper.classList.add("apo-modal__wrapper");
      divWrapper.innerHTML = `
        ${option?.title_modal
          ? `<div class="apo-modal__heading">${option?.title_modal}</div>`
          : ""
        }
        <div class="apo-modal__content">
        ${(option?.editor_type === 'code_editor' ? (option?.rich_code_value_modal ?? "") : (option?.rich_text_value_modal) ?? "")}
        </div>`;

      let spanClose = document.createElement("span");
      spanClose.classList.add("apo-close__modal");
      spanClose.innerHTML = "&times;";

      spanClose.addEventListener("click", function () {
        removeModal();
      });
      divContainer.append(spanClose);
      divContainer.append(divWrapper);
      divModal.append(divContainer);

      return divModal;
    };
  }
  apoInitOptions();

  function apoInitOptionsSizeChart() {
    AvisOptionsData = AvisOptionsData || {};
    AvisOptionsData.createModalSizeChart = function (option) {
      function removeModal() {
        let modalPopups = document.querySelectorAll(".apo-modal");
        if (modalPopups.length > 0) {
          for (let modalItem of modalPopups) {
            modalItem.remove();
          }
        }
      }
      removeModal();
      let divModal = document.createElement("div");
      divModal.classList.add("apo-modal");

      let divContainer = document.createElement("div");
      divContainer.classList.add("apo-modal__container");
      if (option?.size_modal_size_chart)
        divContainer.setAttribute(
          "style",
          `width: ${option?.size_modal_size_chart}px`
        );

      let divWrapper = document.createElement("div");
      divWrapper.classList.add("apo-modal__wrapper");
      divWrapper.innerHTML = `
          ${option?.chart_header
          ? `<div class="apo-modal__heading">${option?.chart_header}</div>`
          : ""
        }
          <div class="apo-modal__content content-size__chart">
              ${option?.rich_text_value_size_chart ?? ""}
          </div>`;

      let spanClose = document.createElement("span");
      spanClose.classList.add("apo-close__modal");
      spanClose.innerHTML = "&times;";

      spanClose.addEventListener("click", function () {
        removeModal();
      });
      divContainer.append(spanClose);
      divContainer.append(divWrapper);
      divModal.append(divContainer);

      return divModal;
    };
  }
  apoInitOptionsSizeChart();
  var AvisOptionsConfigApp = window.ap_front_settings;
  var onAppendPriceToVariant =
    AvisOptionsConfigApp?.config?.config_app?.product_page?.add_price_to_variant &&
    window.ap_front_settings.config.config_app.appPlan !== "BASIC COLOR SWATCH";
  var isProcessingApendPrice = false;
  var foundComparePrice = false;
  function apoAppendPriceToVariant(areaGenAvisOptionSelector, productInfo) {
    var isHidePrice = false;
    let shop_id = window.ap_front_settings.shop_id;
    if (!areaGenAvisOptionSelector && shop_id === "81542480178") {
      areaGenAvisOptionSelector = document.querySelector(".section-main-product");
      AvisOptionsConfig.productPriceSelector = [".price__regular .price-item--regular"];
    }

    if (!areaGenAvisOptionSelector) areaGenAvisOptionSelector = document;
    let formSelectors = areaGenAvisOptionSelector.querySelectorAll(
      "form[action$='/cart/add']"
    );

    if (shop_id === "6938099770") {
      let newFormSelector = areaGenAvisOptionSelector.querySelectorAll("product-form form[action$='/cart/add']");
      if (newFormSelector.length > 0) {
        formSelectors = newFormSelector;
      }
    }

    if (shop_id === "90748060028") {
      let newFormSelector = areaGenAvisOptionSelector.querySelectorAll("form.f8pr-product-form-installment[action$='/cart/add']");
      if (newFormSelector.length > 0) {
        formSelectors = newFormSelector;
      }
    }

    if (!productInfo) {
      productInfo = AvisOptionsConfigApp?.product_info?.product;
    }

    if (!formSelectors || formSelectors.length === 0) {
      isProcessingApendPrice = false;
      return;
    }

    const appendPriceToVariant = (
      formVariantSelector,
      formTotalAddChargeSelector,
      quantitySelector = null
    ) => {
      if (!isHidePrice) {
        apoHideMainPrice(areaGenAvisOptionSelector);
        isHidePrice = true;
      }
      if (shop_id === "56735400133") {
        AvisOptionsConfig.productVariantPriceWrapperSelector = [".price__pricing-group"];
        AvisOptionsConfig.productPriceSelector = [".price__pricing-group span.price-item"];
        AvisOptionsConfig.productPriceHasSaleSelector = [".price__pricing-group s.price-item--regular"];
      }
      if (shop_id === "16600003") {
        AvisOptionsConfig.productVariantPriceWrapperSelector = [".product-single span.product-price__price.product-price__price-product-template"];
        AvisOptionsConfig.productPriceSelector = ["#ProductPrice-product-template .bold_option_price_display"];
        AvisOptionsConfig.productPriceHasSaleSelector = ["#ComparePrice-product-template"];
      }

      if (window.apoThemeConfigs?.product_price) {
        let isCheckTheme = checkThemeName();
        let configProductPrice = window.apoThemeConfigs?.product_price;
        if (configProductPrice?.wrapper_price) {
          if (isCheckTheme) {
            AvisOptionsConfig.productVariantPriceWrapperSelector = configProductPrice?.wrapper_price.split(",");
          }
          else {
            AvisOptionsConfig.productVariantPriceWrapperSelector = AvisOptionsConfig.productVariantPriceWrapperSelector.concat(configProductPrice?.wrapper_price.split(","));
          }
        }
        if (configProductPrice?.price_sale && isCheckTheme) {
          if (isCheckTheme) {
            AvisOptionsConfig.productPriceSelector = configProductPrice?.price_sale.split(",");
          }
          else {
            AvisOptionsConfig.productPriceSelector = AvisOptionsConfig.productPriceSelector.concat(configProductPrice?.price_sale.split(","));
          }
        }
        if (configProductPrice?.price_compare && isCheckTheme) {
          if (isCheckTheme) {
            AvisOptionsConfig.productPriceHasSaleSelector = configProductPrice?.price_compare.split(",");
          }
          else {
            AvisOptionsConfig.productPriceHasSaleSelector = AvisOptionsConfig.productPriceSelector.concat(configProductPrice?.price_sale.split(","));
          }
        }
      }
      if (shop_id === "4432724035") {
        let inputVariantIdSelector = document.querySelector("form [name='id']");
        if (inputVariantIdSelector) formVariantSelector = inputVariantIdSelector;
      }

      if (shop_id === "79486681403") {
        let inputVariantIdSelector = document.querySelector("form[id^='product-form-template--'] [name='id']");
        if (inputVariantIdSelector) formVariantSelector = inputVariantIdSelector;
      }

      variantIdSelected = formVariantSelector.value;
      let product = productInfo
        ? productInfo
        : window.ap_front_settings.product_info.product;
      if (product) {
        if (formVariantSelector) {
          let variant = product.variants.find(
            (e) => String(e.id) === String(formVariantSelector.value)
          );
          if (!variant) variant = product.variants[0];
          if (variant) {
            let variantPrice = variant.price;
            let variantComparePrice = variant.price;
            let isBundle = false;
            let productId = "default";
            for (const labelCart in window.avisAddChargeActive[productId]?.activeVariants) {
              let optionAddOn = window.avisAddChargeActive[productId].activeVariants[labelCart];
              let priceAdd = AvisOptionsConfig?.priceMod?.formatMoneyToNumber(optionAddOn.price) ?? "0";
              let totalPriceBundle = 0;
              if (optionAddOn.isShow && optionAddOn.isBundle && priceAdd != "0")
              {
                totalPriceBundle += parseFloat(priceAdd);
                isBundle = true;
              }
            }
            if (isBundle) variantPrice = 0; // Use product bundle when set price 0

            let isSale = false;
            let isSoldOut = !variant.available;
            let taxPrice = 0;
            if (shop_id === "90902954277") {
              taxPrice = variant.price + (variant.price * 0.2);
            }
            if (shop_id === "72843493665") {
              if (variant.compare_at_price !== variant.price) {
                isSale = true;
                variantComparePrice = variant.compare_at_price;
              }
            }
            else {
              if (variant.compare_at_price > variant.price) {
                isSale = true;
                variantComparePrice = variant.compare_at_price;
              }
            }
            // Use product bundle when set price 0
            if (isBundle) {
              isSale = false;
              variantComparePrice = 0;
            }

            if (["67540582708"].includes(shop_id) && window?.avisblsConfigs?.currentOfferPriceDiscount?.totalPriceSale) {
              variantPrice = window?.avisblsConfigs?.currentOfferPriceDiscount?.totalPriceSale;
              variantComparePrice = window?.avisblsConfigs?.currentOfferPriceDiscount?.totalPriceSale;
            }

            let totalPriceAddCharge = parseFloat(
              formTotalAddChargeSelector?.value ?? 0
            );

            let isCalPrice = false;
            if ((shop_id === "69043421407" || shop_id === "62176198734" || shop_id === "82808766749" || shop_id === "80857530642")  && quantitySelector) {
              try {
                let totalPriceAdd = 0;
                let productId = "default";
                let activeAc = window.avisAddChargeActive[productId]?.activeVariants;
                if (activeAc) {
                  for (const item in activeAc) {
                    let typePriceQuantity = activeAc[item].$input.data("quantity-price-type");
                    let priceAdd = AvisOptionsConfig?.priceMod?.formatMoneyToNumber(
                      activeAc[item].price
                    );
                    if (
                      activeAc[item].isShow &&
                      priceAdd != "0"
                    ) {
                      let itemPrice = 0;
                      if (typePriceQuantity && typePriceQuantity === "any") {
                        itemPrice = parseFloat(priceAdd);
                      } else {
                        itemPrice =
                          parseFloat(priceAdd) *
                          parseInt(
                            activeAc[item].quantity ?? 1
                          );
                      }

                      if (activeAc[item].isOneTime) {
                        totalPriceAdd += parseFloat(itemPrice);
                      }
                      else {
                        totalPriceAdd += parseFloat(itemPrice) * parseInt(quantitySelector.value);
                      }
                    }
                  }
                }
                if (totalPriceAdd > 0) {
                  totalPriceAdd = totalPriceAdd * 100;
                }
                isCalPrice = true;
                variantPrice = variantPrice * parseInt(quantitySelector.value) + totalPriceAdd;
                variantComparePrice = variantComparePrice * parseInt(quantitySelector.value) + totalPriceAdd;
                if (taxPrice) taxPrice = taxPrice * parseInt(quantitySelector.value) + totalPriceAdd + totalPriceAdd * 0.2;
              } catch (e) { console.log(e); }
            }
            if (totalPriceAddCharge > 0 && !isCalPrice) {
              variantPrice += totalPriceAddCharge;
              variantComparePrice += totalPriceAddCharge;
              if (taxPrice) taxPrice += (totalPriceAddCharge + totalPriceAddCharge * 0.2);
            }

            let filterProductPrice = areaGenAvisOptionSelector;
            let isAppendPrice = false;
            let isFindPrice = false;
            {
              switch (shop_id) {
                case "63207538849":
                  isFindPrice = false;
                  if (
                    filterProductPrice.querySelectorAll(".apo-variant-price").length === 0
                  ) {
                    for (let itemKey of AvisOptionsConfig.productVariantPriceWrapperSelector) {
                      let elem = filterProductPrice.querySelector(itemKey + ":not(.apo-variant-price)");
                      if (elem) {
                        const clone = elem.cloneNode(true);
                        clone.classList.add("apo-variant-price");
                        elem.parentNode.insertBefore(clone, elem.nextSibling);
                        isFindPrice = true;
                        break;
                      }
                    }
                    if (!isFindPrice) {
                      console.log("APO not found append product price");
                      return;
                    }
                  }
                  break;

                case "1991066":
                  isFindPrice = false;
                  if (
                    filterProductPrice.querySelectorAll(".apo-variant-price").length === 0
                  ) {
                    for (let itemKey of AvisOptionsConfig.productVariantPriceWrapperSelector) {
                      let elem = filterProductPrice.querySelector(itemKey + ":not(.apo-variant-price)");
                      if (elem) {
                        elem.classList.add("apo-variant-price");
                        isFindPrice = true;
                        break;
                      }
                    }
                    if (!isFindPrice) {
                      console.log("APO not found append product price");
                      return;
                    }
                  }
                  break;


                default:
                  let htmlNotVariant = AvisOptionsConfig.productVariantPriceWrapperSelector.join(
                    ":not(.apo-variant-price),"
                  ) + ":not(.apo-variant-price)";
                  let productPriceWrapperSelector =
                    filterProductPrice.querySelectorAll(htmlNotVariant);
                  if (productPriceWrapperSelector.length === 0) {
                    console.log("APO not found append product price");
                    return;
                  }

                  if ((["8502476855", "93958734130"].includes(shop_id) && !foundComparePrice)) {
                  } else {
                    if (
                      filterProductPrice.querySelectorAll(".apo-variant-price")
                        .length === 0 &&
                      productPriceWrapperSelector &&
                      productPriceWrapperSelector.length > 0) {
                      productPriceWrapperSelector.forEach(function (elem, e) {
                        const clone = elem.cloneNode(true);
                        clone.classList.add("apo-variant-price");
                        elem.parentNode.insertBefore(clone, elem.nextSibling);
                      });
                    }
                  }
                  break;
              }
            }
            // Append price V2
            {
              // Append price
              switch (shop_id) {
                case "63207538849":
                  for (let itemSelector of AvisOptionsConfig.productPriceSelector) {
                    let currentPriceSelector = filterProductPrice.querySelector(itemSelector);
                    if (currentPriceSelector) {
                      isAppendPrice = true;
                      let formatPrice =
                        AvisOptionsConfig?.priceMod?.formatMoney(variantPrice);
                      if ((window.AvisOptionsData?.notCheckPPagePriceEmpty || currentPriceSelector?.innerHTML?.trim()) && currentPriceSelector.innerHTML != formatPrice) {
                        currentPriceSelector.innerHTML = formatPrice;
                      }
                    }
                  }
                  break;
                default:
                  let currentPriceSelector = filterProductPrice.querySelectorAll(
                    AvisOptionsConfig.productPriceSelector.join(",")
                  );
                  if (currentPriceSelector.length > 0) {
                    isAppendPrice = true;
                    currentPriceSelector.forEach(function (elem, e) {
                      let formatPrice =
                        AvisOptionsConfig?.priceMod?.formatMoney(variantPrice);
                      if (shop_id === "90902954277") formatPrice += '<span class="vat-suffix">exc. VAT</span>';
                      if ((window.AvisOptionsData?.notCheckPPagePriceEmpty || elem?.innerHTML?.trim()) && elem.innerHTML != formatPrice) {
                        elem.innerHTML = formatPrice;
                      }
                    });
                  }
                  break;
              }


              // Append price has sale
              for (let itemSelector of AvisOptionsConfig.productPriceHasSaleSelector) {
                let currentPriceSelectors = filterProductPrice.querySelectorAll(itemSelector);
                if (!currentPriceSelectors.length && ["8502476855", "93958734130"].includes(shop_id)  && Shopify.theme.schema_name === "Fluid Framework") {
                  foundComparePrice = false;
                } else {
                  foundComparePrice = true;
                }
                for (let currentPriceSelector of currentPriceSelectors) {
                  let formatPrice =
                    AvisOptionsConfig?.priceMod?.formatMoney(variantComparePrice);
                  if ((window.AvisOptionsData?.notCheckPPagePriceEmpty || currentPriceSelector?.innerHTML?.trim() || shop_id === "57510330564") && currentPriceSelector.innerHTML != formatPrice) {
                    currentPriceSelector.innerHTML = formatPrice;
                  }
                }
              }

              //Append price has tax
              if (taxPrice) {
                for (let itemSelector of AvisOptionsConfig.productPriceHasTaxSelector) {
                  let currentPriceSelectors = filterProductPrice.querySelectorAll(itemSelector);
                  for (let currentPriceSelector of currentPriceSelectors) {
                    let formatPrice =
                      AvisOptionsConfig?.priceMod?.formatMoney(taxPrice);
                    if (shop_id === "90902954277") formatPrice += '<span class="vat-suffix">&nbsp;inc. VAT</span>';
                    if ((window.AvisOptionsData?.notCheckPPagePriceEmpty || currentPriceSelector?.innerHTML?.trim()) && currentPriceSelector.innerHTML != formatPrice) {
                      currentPriceSelector.innerHTML = formatPrice;
                    }
                  }
                }
              }
            }
            isProcessingApendPrice = false;
            if (isAppendPrice) return;
            // Append price V1
            {
              // Show/Hide Sale or sold out
              AvisOptionsConfig.productVariantShowPriceSaleSelector.forEach(
                (e, index) => {
                  let showSaleSelector = filterProductPrice.querySelectorAll(
                    e.key
                  );
                  if (showSaleSelector && showSaleSelector.length > 0) {
                    if (e.sale) {
                      showSaleSelector.forEach((elem, indexElem) => {
                        if (isSale) elem.classList.add(e.sale);
                        else elem.classList.remove(e.sale);
                      });
                    }
                    if (e.soldOut) {
                      showSaleSelector.forEach((elem, indexElem) => {
                        if (isSoldOut) elem.classList.add(e.soldOut);
                        else elem.classList.remove(e.soldOut);
                      });
                    }
                  }
                }
              );

              // Append price normal
              if (shop_id === "79438512462") {
                let productPriceSelector = filterProductPrice.querySelectorAll(
                  ".product-info__price .price .price__default .price__was"
                );
                if (productPriceSelector && productPriceSelector.length > 0) {
                  productPriceSelector.forEach(function (elem, e) {
                    let formatPrice =
                      AvisOptionsConfig?.priceMod?.formatMoney(
                        variantComparePrice
                      );
                    if (elem.innerHTML && elem.innerHTML != formatPrice) {
                      elem.innerHTML = formatPrice;
                    }
                  });
                }
              } else {
                if (shop_id === "28248932457") {
                  let formatPrice =
                    AvisOptionsConfig?.priceMod?.formatMoney(variantPrice);
                  for (let keySelector of AvisOptionsConfig.productVariantPriceSelector) {
                    let productPriceSelector =
                      filterProductPrice.querySelectorAll(keySelector);
                    if (productPriceSelector && productPriceSelector.length > 0) {
                      productPriceSelector.forEach(function (elem, e) {
                        if (
                          elem?.innerHTML?.trim() &&
                          elem.innerHTML != formatPrice
                        ) {
                          elem.innerHTML = formatPrice;
                        }
                      });
                      break;
                    }

                    let buttonAddCartPrice = document.querySelector(
                      "form.shopify-product-form .btn__content span[x-show='calculatedPrice > 0']"
                    );
                    if (buttonAddCartPrice) {
                      if (
                        buttonAddCartPrice?.innerHTML?.trim() &&
                        buttonAddCartPrice.innerHTML != formatPrice
                      ) {
                        buttonAddCartPrice.innerHTML = formatPrice;
                      }
                    }
                  }

                  if (isSale) {
                    let productPriceSelector =
                      filterProductPrice.querySelectorAll(
                        AvisOptionsConfig.productVariantPriceSaleSelector.join(
                          ","
                        )
                      );
                    if (productPriceSelector && productPriceSelector.length > 0) {
                      productPriceSelector.forEach(function (elem, e) {
                        let formatPrice =
                          AvisOptionsConfig?.priceMod?.formatMoney(
                            variantComparePrice
                          );
                        if (
                          elem?.innerHTML?.trim() &&
                          elem.innerHTML != formatPrice
                        ) {
                          elem.innerHTML = formatPrice;
                        }
                      });
                    } else {
                      console.log("Not found price selector of product variant");
                    }
                  }
                  return;
                } else
                  for (let keySelector of AvisOptionsConfig.productVariantPriceSelector) {
                    let productPriceSelector =
                      filterProductPrice.querySelectorAll(keySelector);
                    if (productPriceSelector && productPriceSelector.length > 0) {
                      productPriceSelector.forEach(function (elem, e) {
                        let formatPrice =
                          AvisOptionsConfig?.priceMod?.formatMoney(
                            variantComparePrice
                          );
                        if (
                          elem?.innerHTML?.trim() &&
                          elem.innerHTML != formatPrice
                        ) {
                          elem.innerHTML = formatPrice;
                        }
                      });
                      break;
                    }
                  }
              }

              // Append price sale
              if (isSale || shop_id === "79438512462") {
                let productPriceSelector = filterProductPrice.querySelectorAll(
                  AvisOptionsConfig.productVariantPriceSaleSelector.join(",")
                );
                if (productPriceSelector && productPriceSelector.length > 0) {
                  productPriceSelector.forEach(function (elem, e) {
                    let formatPrice =
                      AvisOptionsConfig?.priceMod?.formatMoney(variantPrice);
                    if (
                      elem?.innerHTML?.trim() &&
                      elem.innerHTML != formatPrice
                    ) {
                      elem.innerHTML = formatPrice;
                    }
                  });
                } else {
                  console.log("Not found price selector of product variant");
                }
              }
            }
          }
        } else console.log("Not found variant id");
      }
    };
    function findVariantAddChargeForAppendPrice() {
      let formSelectorHasAddToCart = null;
      let formVariantSelector = null;
      let formTotalAddChargeSelector = null;
      let variantIdSelected = false;
      let intervalVariantId = setInterval(() => {
        if (!AvisOptionsConfig?.priceMod?.formatMoney) {
          isProcessingApendPrice = false;
          return;
        }
        let indexForm = 0;
        for (let elm of formSelectors) {
          indexForm++;
          let buttonAddCart = elm.querySelector(
            AvisOptionsData.listKeyButtonAddCart.join(",")
          );
          let isSelect = false;
          if (buttonAddCart || shop_id === "77048054095" || indexForm === formSelectors.length) {
            formSelectorHasAddToCart = elm;
            formVariantSelector =
              formSelectorHasAddToCart.querySelector("input[name='id']");
            if (!formVariantSelector) {
              formVariantSelector =
                formSelectorHasAddToCart.querySelector("select[name='id']");
              if (formVariantSelector) isSelect = true;
            }

            if (!formVariantSelector && formSelectorHasAddToCart?.id?.className) {
              formVariantSelector = document.querySelector(
                `input[name='id'].${formSelectorHasAddToCart?.id?.className}`
              );
            }

            if (!formVariantSelector) {
              const parentForm = formSelectorHasAddToCart.closest(".product__meta")
              formVariantSelector = parentForm && parentForm.querySelector("input[name='id']");
              if (formVariantSelector) isSelect = true;
            }

            if (!formVariantSelector && formSelectorHasAddToCart?.id) {
              formVariantSelector = formSelectorHasAddToCart.id;
            }

            if (formVariantSelector) {
              variantIdSelected = formVariantSelector.value;
              let intervalTotalAddCharge = setInterval(() => {
                formTotalAddChargeSelector =
                  areaGenAvisOptionSelector.querySelector(
                    "input.apo-total-addcharge"
                  );
                let quantitySelector = formSelectorHasAddToCart.querySelector("input[name='quantity']");
                if (!quantitySelector) {
                  quantitySelector = document.querySelector("input[name='quantity']");
                }
                if (formTotalAddChargeSelector) {
                  appendPriceToVariant(
                    formVariantSelector,
                    formTotalAddChargeSelector,
                    quantitySelector
                  );
                  new MutationObserver(() => {
                    appendPriceToVariant(
                      formVariantSelector,
                      formTotalAddChargeSelector,
                      quantitySelector
                    );
                  }).observe(formVariantSelector, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                  });
                  new MutationObserver(() => {
                    appendPriceToVariant(
                      formVariantSelector,
                      formTotalAddChargeSelector,
                      quantitySelector
                    );
                  }).observe(formTotalAddChargeSelector, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                  });
                  if (isSelect) {
                    setInterval(function () {
                      if (variantIdSelected != formVariantSelector.value) {
                        variantIdSelected = formVariantSelector.value;
                        appendPriceToVariant(
                          formVariantSelector,
                          formTotalAddChargeSelector,
                          quantitySelector
                        );
                      }
                    }, 100);
                  }
                  if ((shop_id === "69043421407" || shop_id === "62176198734" || shop_id === "82808766749") && quantitySelector) {
                    let quantityOld = 0;
                    setInterval(function () {
                      if (quantitySelector?.value !== quantityOld) {
                        quantityOld = quantitySelector.value;
                        appendPriceToVariant(
                          formVariantSelector,
                          formTotalAddChargeSelector,
                          quantitySelector
                        );
                      }
                    }, 200);
                  }
                  clearInterval(intervalTotalAddCharge);
                }
                else if (shop_id === "63207538849" ) {
                  appendPriceToVariant(
                    formVariantSelector,
                    formTotalAddChargeSelector,
                    quantitySelector
                  );
                  new MutationObserver(() => {
                    appendPriceToVariant(
                      formVariantSelector,
                      formTotalAddChargeSelector,
                      quantitySelector
                    );
                  }).observe(formVariantSelector, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                  });
                  clearInterval(intervalTotalAddCharge);
                }
              }, 300);
            } else {
              console.log("APO not found input id for append price to variant");
            }
            clearInterval(intervalVariantId);
            break;
          }
        }
      }, 300);
    }

    if (shopIntervalForAppendPrice.includes(shop_id)) {
      let currentVariantId = null;
      let priceAC = 0;
      setInterval(() => {
        let formVariantSelector = document.querySelector("form.f8pr-product-form-installment input[name='id']");
        if (!formVariantSelector) {
          formVariantSelector = document.querySelector("select[name='id[]'].product-form__item");
        }
        if (!formVariantSelector) {
          formVariantSelector = document.querySelector(".shopify-product-form input[name=id]");
        }
        let formTotalAddChargeSelector = document.querySelector("input.apo-total-addcharge");
        if (formVariantSelector && formTotalAddChargeSelector && (formVariantSelector?.value !== currentVariantId || priceAC !== formTotalAddChargeSelector?.value)) {
          currentVariantId = formVariantSelector?.value;
          priceAC = formTotalAddChargeSelector?.value ?? 0;
          if (formTotalAddChargeSelector) appendPriceToVariant(formVariantSelector, formTotalAddChargeSelector);
        }
      }, 200);
    }
    else
    {
      findVariantAddChargeForAppendPrice();
    }
  }

  if (onAppendPriceToVariant && AvisOptionsConfigApp?.page_type === "product") {
    let shop_id = window.ap_front_settings.shop_id;
    let isAppendPriceInteval = ["94736318771", "88145756426", "79486681403", "8502476855", "93958734130"].includes(shop_id);
    if (isAppendPriceInteval)
    {
      setInterval(function(){
        let isClonePrice = document.querySelector(".apo-variant-price");
        if (!isClonePrice &&
          !isProcessingApendPrice ||
          (["8502476855", "93958734130"].includes(shop_id) && !foundComparePrice)
        )
        {
          isProcessingApendPrice = true;
          apoAppendPriceToVariant();
        }
      }, 100);
    }
    else
    {
      apoAppendPriceToVariant();
    }
  }

  if (["67540582708"].includes(ap_front_settings.shop_id)) {
    const intervalAppendPriceBundle = setInterval(() => {
      let bundleOffers = document.querySelectorAll(".avisbls-offer");
      if (!bundleOffers?.length) return;
      clearInterval(intervalAppendPriceBundle);
      bundleOffers?.forEach(offer => {
        offer.addEventListener("click", function (e) {
          apoAppendPriceToVariant();
        })
      })
    }, 200)
    setTimeout(() => clearInterval(intervalAppendPriceBundle), 6000);
  }

  function apoAppendQuickview() {
    async function appendOptionToQuickview(buttonQuickviewSelector) {
      if (typeof window.disabledBtnAddCart === 'function') {
        setTimeout(window.disabledBtnAddCart, 100);
      }
      let formQuickview = document.querySelector(
        AvisOptionsConfig.quick_view.quickViewModal
      );
      if (window?.ap_front_settings?.shop_id === "90920976770" && window.innerWidth <= 768) {
        formQuickview = document.querySelector(".popup-choose-options-mobile:not([style='display: none;'])");
      }
      if (window?.ap_front_settings?.shop_id === "90920976770" && buttonQuickviewSelector.closest("div[x-data='xVideoShopping']")) {
        formQuickview = buttonQuickviewSelector.closest("div[x-data='xVideoShopping']").querySelector("div.choose-options-content[id*=choose-options-content]")
      }
      if (window?.ap_front_settings?.shop_id === "63261704421") {
        formQuickview = document.querySelector(".collection-slider-row:has(.product-block.expanded) .quickbuy-container, .product-block.expanded .quickbuy-container");
      }
      AvisOptionsData.formProductQuickview = formQuickview;

      if (!formQuickview) return;

      let hrefProduct = buttonQuickviewSelector.getAttribute("data-product-url");
      if (!hrefProduct) {
        let productCardItem = buttonQuickviewSelector.closest("product-card");
        if (productCardItem) {
          hrefProduct = productCardItem.getAttribute("data-url");
        }
      }
      if (!hrefProduct) {
        hrefProduct = buttonQuickviewSelector.getAttribute("href");
      }
      if (!hrefProduct) {
        hrefProduct = buttonQuickviewSelector.getAttribute("data-product");
      }
      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".product-card__figure") &&
          buttonQuickviewSelector
            .closest(".product-card__figure")
            .querySelector('a[href*="/products/"]')
            ?.getAttribute("href");
      }
      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".yv-product-card") &&
          buttonQuickviewSelector
            .closest(".yv-product-card")
            .querySelector('a[href*="/products/"]')
            ?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".product") &&
          buttonQuickviewSelector
            .closest(".product")
            .querySelector('a[href*="/products/"]')
            ?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".grid__item.product-item") &&
          buttonQuickviewSelector
            .closest(".grid__item.product-item")
            .querySelector('a[href*="/products/"]')
            ?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".collection-product-card") &&
          buttonQuickviewSelector
            .closest(".collection-product-card")
            .querySelector('a[href*="/products/"]')
            ?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".productgrid--items .productgrid--item") &&
          buttonQuickviewSelector
            .closest(".productgrid--items .productgrid--item")
            .querySelector('.productitem--title a')?.getAttribute("href");
      }

      if (!hrefProduct || hrefProduct === "javascript:void(0);") {
        hrefProduct =
          buttonQuickviewSelector.closest(".st-col-item") &&
          buttonQuickviewSelector
            .closest(".st-col-item")
            .querySelector('a[href*="/products/"]')
            ?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".resource-list__item product-card") &&
          buttonQuickviewSelector
            .closest(".resource-list__item product-card")
            .querySelector('a')?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest("li.snize-product") &&
          buttonQuickviewSelector
            .closest("li.snize-product")
            .querySelector('a')?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector?.getAttribute("data-url");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector?.getAttribute("data-product-url");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest("product-item") &&
          buttonQuickviewSelector.closest("product-item").querySelector('a[href*="/products/"]')?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest("quick-view.quick-view") &&
          buttonQuickviewSelector
            .closest("quick-view.quick-view")
            ?.getAttribute("data-product-url");
      }
      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".card.product-card") &&
          buttonQuickviewSelector
            .closest(".card.product-card").querySelector('a[href*="/products/"]')?.getAttribute("href");
      }
      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest("product-card") &&
          buttonQuickviewSelector
            .closest("product-card").querySelector('a[href*="/products/"]')?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".product-card") &&
          buttonQuickviewSelector
            .closest(".product-card").querySelector('a[href*="/products/"]')?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest("product-card") &&
          buttonQuickviewSelector
            .closest("product-card").querySelector('a[product-card-link]')?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.querySelector('a[href*="/products/"]')?.getAttribute("href");
      }

       if (!hrefProduct) {
         hrefProduct =
           buttonQuickviewSelector.closest(".product-card__media") &&
           buttonQuickviewSelector.closest(".product-card__media").querySelector("a.media--contain")?.getAttribute("href");
       }

       if (!hrefProduct) {
         hrefProduct =
           buttonQuickviewSelector.closest(".grid-item.product-item") &&
           buttonQuickviewSelector.closest(".grid-item.product-item").querySelector("a.product-link")?.getAttribute("href");
       }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".grid__item-image-wrapper") &&
          buttonQuickviewSelector.closest(".grid__item-image-wrapper").querySelector("a.grid-product__link")?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".product-item__cta-wrapper") &&
          buttonQuickviewSelector.closest(".product-item__cta-wrapper").querySelector("quick-buy-popover")?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".horizontal-product") &&
          buttonQuickviewSelector.closest(".horizontal-product").querySelector("a.horizontal-product__media")?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".card-product") &&
          buttonQuickviewSelector.closest(".card-product").querySelector("a[x-data]")?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".productitem") &&
          buttonQuickviewSelector.closest(".productitem").querySelector(".productitem--title a")?.getAttribute("href");
      }

      if (!hrefProduct) {
        hrefProduct =
          buttonQuickviewSelector.closest(".card-product") &&
          buttonQuickviewSelector.closest(".card-product").querySelector("a")?.getAttribute("href");
      }

       if (!hrefProduct) {
        hrefProduct = buttonQuickviewSelector?.closest('.product-card__image-wrapper')?.querySelector("a")?.getAttribute('href');
      }

      if (!hrefProduct) {
        hrefProduct = buttonQuickviewSelector?.closest('.grid-product__link')?.getAttribute('href');
      }

      if (!hrefProduct) {
        hrefProduct = buttonQuickviewSelector?.closest('.grid-item__content')?.querySelector(".grid-item__link")?.getAttribute('href');
      }

      if(!hrefProduct) {
        hrefProduct = buttonQuickviewSelector?.closest("quick-view-button")?.getAttribute("data-product-url")
      }
      if(!hrefProduct) {
        hrefProduct = buttonQuickviewSelector?.closest("m-product-card__media")?.querySelector(".m-product-card__link")?.getAttribute("href");
      }
      if(!hrefProduct) {
        hrefProduct = buttonQuickviewSelector?.closest("div[x-data='xVideoShopping']")?.querySelector(".choose-option-footer a")?.getAttribute("href");
      }

      if (hrefProduct?.indexOf("/") === -1) {
        hrefProduct = null;
      }

      let handleProduct = hrefProduct
        ? hrefProduct
          .substring(hrefProduct.lastIndexOf("/"))
          .replace("/", "")
          .split("?")[0]
        : null;
      if (!handleProduct) {
        handleProduct = buttonQuickviewSelector
          .closest("[data-handle]")
          ?.getAttribute("data-handle");
      }
      if (!handleProduct) {
        handleProduct = buttonQuickviewSelector?.getAttribute("data-handle");
      }
      if (!handleProduct) {
        handleProduct = buttonQuickviewSelector?.getAttribute("data-product-handle");
      }
      if (!handleProduct) {
        handleProduct = buttonQuickviewSelector?.getAttribute("data-id");
      }
      if (!handleProduct) {
        handleProduct = buttonQuickviewSelector?.getAttribute("handle");
      }

      if (!handleProduct) {
        handleProduct =
          buttonQuickviewSelector?.getAttribute("data-quick-add-modal-handle");
      }

      if (!handleProduct) {
        handleProduct =
          buttonQuickviewSelector?.getAttribute("id");
      }

      if (handleProduct) {
        let productInfo = await AvisOptionsData.pluginAction.getProduct(
          handleProduct
        );
        if (productInfo) {
          let genAvisOptionInterval = setInterval(function () {
            let findForm = formQuickview.querySelector(window.AP_POptions.listKeyAppendOptionPG);
            if (window?.ap_front_settings?.shop_id === "90920976770" && window.innerWidth <= 768) {
              findForm = formQuickview.querySelector("form[action*='/cart/add'][data-type='add-to-cart-form']:not(.installment)");
            }
            if (findForm) {
              if (typeof window.disabledBtnAddCart === 'function') {
                setTimeout(window.disabledBtnAddCart, 100);
              }
              AvisOptionsData.mainCheckAllRules(
                productInfo,
                productInfo.id + "_quickview",
                false,
                formQuickview
              );
              if (onAppendPriceToVariant)
                apoAppendPriceToVariant(formQuickview, productInfo);
              clearInterval(genAvisOptionInterval);
            }
          }, 200);
        }
      }
    }
    let quickViewSubmit =
      AvisOptionsConfig.quick_view.quickViewButtonSubmit.join(",");
    let intervalCheckQuickview = setInterval(function () {
      if (document.querySelectorAll(quickViewSubmit).length > 0) {
        //clearInterval(intervalCheckQuickview);

        document.querySelectorAll(quickViewSubmit).forEach(function (elem) {
          elem.classList.add("apo-quickview");
          elem.addEventListener("click", function (event) {
            let isOpen = false;
            let interval = setInterval(() => {

              if (
                !isOpen &&
                document.querySelectorAll(
                  AvisOptionsConfig.quick_view.quickViewModal
                ).length > 0
              ) {
                isOpen = true;
                appendOptionToQuickview(elem);
                clearInterval(interval);
              }
            }, 300);
          });
        });
      }
    }, 300);
  }
  if ((AvisOptionsData?.show_quickview &&
    window.ap_front_settings.shop_id !== "60792766626" &&
    (AvisOptionsConfigApp?.page_type !== "product" ||
      window.ap_front_settings.shop_id === "77823672629" ||
      window.ap_front_settings.shop_id === "95140774234" ||
      window.ap_front_settings.shop_id === "87470178593" ||
      window.ap_front_settings.shop_id === "57510330564" ||
      window.ap_front_settings.shop_id === "9209018" ||
      window.ap_front_settings.shop_id === "89526763809" ||
      window.ap_front_settings.shop_id === "78872117567" ||
      window.ap_front_settings.shop_id === "69433721060" ||
      window.ap_front_settings.shop_id === "90197885222" ||
      window.ap_front_settings.shop_id === "69190910255" ||
      window.ap_front_settings.shop_id === "91628339545" ||
      window.ap_front_settings.shop_id === "57985335363"
    )) || window.ap_front_settings.shop_id === "64764674204") {
    apoAppendQuickview();
  }
  if (AvisOptionsData?.show_quickview && window.ap_front_settings.shop_id === "60792766626") { // quickview render slowly
    setTimeout(apoAppendQuickview, 1000);
  }

  function apoAppendFeaturedProduct() {
    let listProductId = [];
    let sectionFeatured = AvisOptionsConfig.featured_product.join(",");
    let sectionFeaturedSelectors = document.querySelectorAll(sectionFeatured);
    if (sectionFeaturedSelectors && sectionFeaturedSelectors.length > 0) {
      let intervalFeatured = setInterval(function () {
        let isOpen = false;
        if (!isOpen && AvisOptionsData.mainCheckAllRules) {
          isOpen = true;
          clearInterval(intervalFeatured);
          sectionFeaturedSelectors.forEach(async function (
            sectionFeaturedSelector
          ) {
            let productInfo = null;
            let shop_id = window.ap_front_settings.shop_id;
            if (shop_id === "64130056412") {
              let productInfoSelector =
                sectionFeaturedSelector.closest(".shopify-section");
              if (productInfoSelector) {
                let productSelector = productInfoSelector.querySelector(
                  "[data-section-type='featured-product']"
                );
                if (productSelector) {
                  let strProduct = productSelector.innerText;
                  if (strProduct) {
                    try {
                      let allData = JSON.parse(strProduct);
                      productInfo = allData?.product;
                    } catch (e) {
                      return;
                    }
                  }
                }
              }
            } else if (shop_id === "34557722763") {
              let productSelector =
                sectionFeaturedSelector.querySelector("script");
              if (productSelector) {
                let strProduct = productSelector.innerText;
                if (strProduct) {
                  try {
                    let allData = JSON.parse(strProduct);
                    let hrefProduct = allData?.url;
                    let handleProduct = hrefProduct
                      .substring(hrefProduct.lastIndexOf("/"))
                      .replace("/", "")
                      .split("?")[0];
                    if (!handleProduct) return;
                    productInfo = await AvisOptionsData.pluginAction.getProduct(
                      handleProduct
                    );
                  } catch (e) {
                    return;
                  }
                }
              }
            } else if (shop_id === "61334093913") {
              let productSelector = sectionFeaturedSelector.querySelector("form.product-form[action='/cart/add']");
              if (productSelector) {
                let strProduct = productSelector?.getAttribute("data-product-handle");
                if (strProduct) {
                  try {
                    productInfo = await AvisOptionsData.pluginAction.getProduct(strProduct);
                  } catch (e) {
                    return;
                  }
                }
              }
            } else {
              let productSelector = sectionFeaturedSelector.querySelector(
                "script[id*='product-json']"
              );
              if (productSelector) {
                let strProduct = productSelector.innerText;
                if (strProduct) {
                  try {
                    productInfo = JSON.parse(strProduct);
                  } catch (e) {
                    return;
                  }
                }
              } else {
                let productInfoSelector = sectionFeaturedSelector.querySelector(
                  "product-info,variant-radios,product-variants"
                );
                // if (!productInfoSelector) return;

                let hrefProduct = productInfoSelector?.getAttribute("data-url");
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector("meta[itemprop='url']")?.getAttribute("content");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector?.getAttribute("data-product-url");
                }
                if (!hrefProduct) {
                  hrefProduct = productInfoSelector?.getAttribute("data-product-url");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector(".pe-no-link")?.getAttribute("href");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector(".product-info__title.h2 a")?.getAttribute("href");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.closest("product-info") &&
                    sectionFeaturedSelector
                      .closest("product-info")?.getAttribute("data-url");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector("meta[itemprop='url']")?.getAttribute("content");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector(".link.product__view-details")?.getAttribute("href");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector("media-gallery")?.getAttribute("data-product-url");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector(".product-info__block-item .product-title a")?.getAttribute("href");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector(".ecom-product-single__title-container .ecom-product__heading")?.getAttribute("href");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector(".product-info__title a")?.getAttribute("href");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector("variant-selects")?.getAttribute("data-url");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector("variant-picker")?.getAttribute("data-url");
                }
                if (!hrefProduct) {
                  hrefProduct = sectionFeaturedSelector.querySelector("variant-picker")?.getAttribute("data-product-url");
                }
                let handleProduct = hrefProduct
                  ?.substring(hrefProduct?.lastIndexOf("/"))
                  .replace("/", "")
                  .split("?")[0];
                if (!handleProduct) return;
                productInfo = await AvisOptionsData.pluginAction.getProduct(
                  handleProduct
                );
              }
            }

            if (productInfo && !listProductId.includes(productInfo.id)) {
              listProductId.push(productInfo.id);
              AvisOptionsData.mainCheckAllRules(
                productInfo,
                productInfo.id + "_featured",
                false,
                sectionFeaturedSelector
              );
              if (onAppendPriceToVariant)
                apoAppendPriceToVariant(sectionFeaturedSelector, productInfo);
            }
          });
        }
      }, 200);
    }
  }
  if (AvisOptionsData?.show_featured && AvisOptionsConfigApp?.page_type !== "product") {
    apoAppendFeaturedProduct();
  }
  if (AvisOptionsData?.show_featured && AvisOptionsConfigApp?.page_type === "product" && window.ap_front_settings.shop_id === "84003520822") {
    apoAppendFeaturedProduct();
  }

  function apoOptionsCustomAccordion() {
    var shopDomain = window.Shopify.shop;
    if (
      shopDomain === "hoang-test-so.myshopify.com" ||
      shopDomain === "prodesksim.myshopify.com" ||
      shopDomain === "hoang-apo-v3.myshopify.com" ||
      shopDomain === "388139-7.myshopify.com" ||
      shopDomain === "545404-0b.myshopify.com"
    ) {
      function addJQuery() {
        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.type = "text/javascript";
        script.onload = function () {
          $("#example-element").text("Hello, jQuery!");
        };
        document.head.appendChild(script);
      }
      addJQuery();

      setInterval(function () {
        let apElements = document.querySelector("#avpoptions-container__v2");
        if (apElements) {
          let avpoAccordionMultipleItems = document.querySelectorAll(
            ".avpo-accordion-multiple-items .ap-label-tooltip"
          );
          let avpoAccordionOptionItems = document.querySelectorAll(
            ".avpo-accordion-multiple-items > span"
          );

          for (let i = 0; i < avpoAccordionMultipleItems.length; i++) {
            let checkExist = avpoAccordionOptionItems[i].parentNode.querySelector(
              ".avpo-accordion-item"
            );
            $(avpoAccordionMultipleItems[i]).click(function () {
              if (!checkExist) {
                avpoAccordionOptionItems[i].classList.add("avpo-accordion-item");
              }
              if (checkExist) {
                avpoAccordionOptionItems[i].removeAttribute("class");
              }
            });
          }
        }
      }, 100);
    }
  }

  apoOptionsCustomAccordion();

  function apoOptionsCustomRadioWImage() {
    var shopDomain = window.Shopify.shop;
    if (
      (shopDomain === "hoang-apo-test-v3.myshopify.com" ||
        shopDomain === "samadhi-tea.myshopify.com" ||
        shopDomain === "hoang-apo-v3.myshopify.com" ||
        shopDomain === "5266e4-60.myshopify.com") &&
      (window.ap_front_settings.config.config_app.appPlan === "ADVANCED" ||
        window.ap_front_settings.config.config_app.appPlan === "PREMIUM")
    ) {
      function addJQuery() {
        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.type = "text/javascript";
        script.onload = function () {
          $("#example-element").text("Hello, jQuery!");
        };
        document.head.appendChild(script);
      }
      addJQuery();
      setInterval(function () {
        let apElements = document.querySelector("#avpoptions-container__v2");
        if (apElements) {
          if (
            document.querySelector(".apo-customize__radio--witch_single-swtach")
          ) {
            for (let keys of $(
              ".apo-customize__radio--witch_single-swtach span.money"
            )) {
              $(keys).html($(keys).html().replace("(", " ").replace(")", " "));
            }
            for (
              let i = 0;
              i <
              $(".apo-customize__radio--witch_single-swtach input[type='radio']")
                .length;
              i++
            ) {
              if (
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach input[type='radio']"
                  )[i]
                ).is(":checked") == true
              ) {
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach input[type='radio']"
                  )[i]
                ).attr("checked", "checked");
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("background", "#f5fffc");
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("border-color", "#008060");
              }
              if (
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach input[type='radio']"
                  )[i]
                ).is(":checked") == false
              ) {
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach input[type='radio']"
                  )[i]
                ).removeAttr("checked");
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("background", "transparent");
                $(
                  $(
                    ".apo-customize__radio--witch_single-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("border-color", "#cccccc");
              }
            }
          }
          // Add background color checkbox
          if (
            document.querySelector(".apo-customize__radio--witch_multiple-swtach")
          ) {
            for (let keys of $(
              ".apo-customize__radio--witch_multiple-swtach span.money"
            )) {
              $(keys).html($(keys).html().replace("(", " ").replace(")", " "));
            }
            for (
              let i = 0;
              i <
              $(
                ".apo-customize__radio--witch_multiple-swtach label input[type='checkbox']"
              ).length;
              i++
            ) {
              if (
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach input[type='checkbox']"
                  )[i]
                ).is(":checked") == true
              ) {
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach input[type='checkbox']"
                  )[i]
                ).attr("checked", "checked");
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("background", "#f5fffc");
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("border-color", "#008060");
              }
              if (
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach input[type='checkbox']"
                  )[i]
                ).is(":checked") == false
              ) {
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach input[type='checkbox']"
                  )[i]
                ).removeAttr("checked");
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("background", "transparent");
                $(
                  $(
                    ".apo-customize__radio--witch_multiple-swtach label.avp-productoptionswatchwrapper"
                  )[i]
                ).css("border-color", "#cccccc");
              }
            }
          }
        }
      }, 100);
    } else {
      setInterval(function () {
        let apElements = document.querySelector("#avpoptions-container__v2");
        if (apElements) {
          document.querySelectorAll('.avp-option.ap-options__swatch-container').forEach(element => {
            element.classList.remove("apo-customize__radio--witch_single-swtach");
          });
        }
      }, 100);
    }
  }

  apoOptionsCustomRadioWImage();

  function apoHideDropDownPrice() {
    let shopDomain = window.Shopify.shop;
    if (
      shopDomain === "50d919-5.myshopify.com" ||
      shopDomain === "jesse-strong-foundation.myshopify.com" ||
      shopDomain === "imparfait.myshopify.com" ||
      shopDomain === "atelier-imparfait.myshopify.com" ||
      shopDomain === "dipyourcar-com.myshopify.com" ||
      shopDomain === "8bd9e6-0a.myshopify.com" ||
      shopDomain === "62ca88-0c.myshopify.com" ||
      shopDomain === "skill-state.myshopify.com" ||
      shopDomain === "7782c8-8f.myshopify.com" ||
      shopDomain === "42914c-d3.myshopify.com" ||
      shopDomain === "arianaindia.myshopify.com"
    ) {
      let interval = setInterval(function () {
        let apElements = document.querySelector("#avpoptions-container__v2");
        if (apElements) {
          let optionMonneys = document.querySelectorAll(
            "#avpoptions-container__v2 .avp-option.ap-options__select-container span.money"
          );

          for (let key of optionMonneys) {
            key.innerHTML = "";
          }
          clearInterval(interval);
        }
      }, 100);
    }
  }

  apoHideDropDownPrice();

  function apoOptionsCustomSwatchQuantity() {
    setInterval(function () {
      let apElements = document.querySelector(".avpoptions-container__v2");
      if (
        apElements &&
        document.querySelectorAll(".customize-swtach__quantity").length > 0 &&
        document.querySelectorAll(".apo-temp__pickandmix .avp-value-grid").length > 0
      ) {
        let inputItems = document.querySelectorAll(
          ".customize-swtach__quantity input.avp-productoptiontextcolor"
        );
        for (let inputItem of inputItems) {
          if (inputItem.checked) {
            inputItem.parentElement.parentElement.parentElement.classList.add(
              "apo-checked"
            );
            inputItem.parentElement.parentElement.nextElementSibling.style.display =
              "block";
          } else {
            inputItem.parentElement.parentElement.parentElement.classList.remove(
              "apo-checked"
            );
            inputItem.parentElement.parentElement.nextElementSibling.style.display =
              "none";
          }
        }
      }
    }, 100);
  }

  apoOptionsCustomSwatchQuantity();

  // function apoOptionsResponsiveTooltip() {
  //   if (window.ap_front_settings?.shop_id === "64764674204") return;
  //   setInterval(function () {
  //     let labelTooltips = document.querySelectorAll(
  //       "#avpoptions-container__v2 .ap-label-tooltip"
  //     );
  //     if (labelTooltips) {
  //       for (let labelTooltip of labelTooltips) {
  //         let typeIconHoverTooltip = labelTooltip.lastChild.tagName;
  //         if (typeIconHoverTooltip === "DIV") {
  //           let lengthLabelTooltip = labelTooltip.offsetWidth;
  //           let lengthIconHoverTooltip = labelTooltip.lastChild.offsetLeft;
  //           let elementTooltip = labelTooltip.lastChild.lastChild;

  //           if (lengthIconHoverTooltip >= lengthLabelTooltip / 2) {
  //             elementTooltip.style.transform = "translateX(-85%)";
  //             elementTooltip.style.left = "45px";
  //           } else {
  //             elementTooltip.style.transform = "unset";
  //             elementTooltip.style.left = "unset";
  //           }
  //         }
  //       }
  //     }
  //   }, 100);
  // }
  // apoOptionsResponsiveTooltip();

  function apoCustomizeChangeBGRadio() {
    var shopDomain = window.Shopify.shop;
    if (shopDomain === "swissactiva.myshopify.com") {
      setInterval(function () {
        let apElements = document.querySelector("#avpoptions-container__v2");
        if (apElements) {
          // Add background color Radio button
          for (let i = 0; i < $(".ap-options__radio input").length; i++) {
            if ($($(".ap-options__radio input")[i]).is(":checked") == true) {
              $(
                $(".ap-options__radio .avp-productoptioncheckwrapper")[i]
              ).addClass("apo-selected");
            }
            if ($($(".ap-options__radio input")[i]).is(":checked") == false) {
              $(
                $(".ap-options__radio .avp-productoptioncheckwrapper")[i]
              ).removeClass("apo-selected");
            }
          }
        }
      }, 500);
    }
  }
  apoCustomizeChangeBGRadio();

  function apoCustomAccordion() {
    setInterval(function () {
      let apElements = document.querySelector("#avpoptions-container__v2");
      if (apElements) {
        let avpoAccordionMultipleItems = document.querySelectorAll(
          ".apo-customize__accordion .ap-label-tooltip"
        );
        let avpoAccordionOptionItems = document.querySelectorAll(
          ".apo-customize__accordion > span"
        );

        for (let i = 0; i < avpoAccordionMultipleItems.length; i++) {
          let checkExist = avpoAccordionOptionItems[i].parentNode.querySelector(
            ".apo-accordion__item"
          );

          avpoAccordionMultipleItems[i].addEventListener("click", function () {
            if (!checkExist) {
              avpoAccordionOptionItems[i].classList.add("apo-accordion__item");
            }
            if (checkExist) {
              avpoAccordionOptionItems[i].removeAttribute("class");
            }
          });
        }
      }
    }, 100);
  }

  apoCustomAccordion();

  function apoWidgetPositionShopiyVariant() {
    var shopDomain = window.Shopify.shop;
    let intervalApoWidgetPositionShopiyVariant = setInterval(function () {
      let apElements = document.querySelector('.avis-swatch-product-container');
      if (apElements) {
        switch (shopDomain) {
          case shopDomain === "877b65.myshopify.com":
            document.querySelector('.product-price-container').before(document.querySelector('.avis-swatch-product-container'));
            break;
        }
      }
    }, 100);
    function forceQuitInterval() {
      clearInterval(intervalApoWidgetPositionShopiyVariant);
    }
    setTimeout(forceQuitInterval, 10000);
  }
  apoWidgetPositionShopiyVariant();

  function apoCustomizeSwatchWithPrice() {
    var shopDomain = window.Shopify.shop;
    if (
      (shopDomain === "hoang-apo-test-app-v2.myshopify.com" ||
        shopDomain === "3f80fc.myshopify.com") &&
      (window.ap_front_settings.config.config_app.appPlan === "ADVANCED" ||
        window.ap_front_settings.config.config_app.appPlan === "PREMIUM")
    ) {
      setInterval(function () {
        let apElements = document.querySelector('#avpoptions-container__v2');
        if (apElements) {
          let swatchWithPrice = document.querySelectorAll('.swatch-with_price .avp-productoptionswatchwrapper > input');
          for (let item of swatchWithPrice) {
            if (item.checked) {
              item.parentElement.classList.add("apo-checked");
            } else {
              item.parentElement.classList.remove("apo-checked");
            }
          }
        }
      }, 100);
    } else {
      setInterval(function () {
        let apElements = document.querySelector("#avpoptions-container__v2");
        if (apElements) {
          document.querySelectorAll('.avp-option.ap-options__swatch-container').forEach(element => {
            element.classList.remove("swatch-with_price");
          });
        }
      }, 100);
    }
  }
  apoCustomizeSwatchWithPrice();

  function apoInitValidateModal() {
    AvisOptionsData = AvisOptionsData || {};
    AvisOptionsData.createValidateModal = function (message = "") {
      function removeModal() {
        let modalPopups = document.querySelectorAll(".apo-modal");
        if (modalPopups.length > 0) {
          for (let modalItem of modalPopups) {
            modalItem.remove();
          }
        }
      }
      removeModal();
      let divModal = document.createElement("div");
      divModal.classList.add("apo-modal");

      let divContainer = document.createElement("div");
      divContainer.classList.add("apo-modal__container");

      let divWrapper = document.createElement("div");
      divWrapper.classList.add("apo-modal__wrapper");
      divWrapper.innerHTML = `
        ${message
          ? `<div class="apo-modal-validate__content">${message}</div>`
          : ""
        }
        <div class="apo-modal-validate__button-wrapper">
          <p class="apo-modal-validate__button">OK</p>
        </div>`;

      const button = divWrapper.querySelector(".apo-modal-validate__button");
      button.addEventListener("click", removeModal);
      divContainer.append(divWrapper);
      divModal.append(divContainer);

      return divModal;
    };
  }
  apoInitValidateModal();


  const getCartJs = async () => fetch("/cart.js?avis", { method: "GET" }).then((t) => t.json()).then((t) => t);
  async function logCart() {
    var cart = await getCartJs();
    if (cart?.items?.length) {
      let productItems = null;
      if (window.ap_front_settings?.shop_id === "76328501580")
        productItems = cart?.items?.filter(x => x.product_id === 8635125334348 && (!x?.properties["Prénoms ou titre"] || !x?.properties["Année de la série"] || !x?.properties["Description "]));
      if (window.ap_front_settings?.shop_id === "59625603264")
        productItems = cart?.items?.filter(x => (x.product_id === 7424621215936 && (!x?.properties["BC Embroidery Option"] || !x?.properties["Border Collie Color"] || !x?.properties["Border Collie #1"] || !x?.properties["Border Collie #2"] || !x?.properties["Border Collie #3"])) ||
          (x.product_id === 7504480600256 && !x?.properties["Border Collie Colour"]) ||
          (x.product_id === 7622404178112 && (!x?.properties["Golden Embroidery Option"] || !x?.properties["Golden Retriever Option"] || !x?.properties["1st Golden Retriever"] || !x?.properties["2nd Golden Retriever"]))
        );

      if (productItems.length > 0) {
        let data = {
          shop_domain: Shopify?.shop,
          content: {
            browser: navigator.userAgent,
            cartItems: productItems
          }
        };
        fetch("https://apo-api.avisplus.io/api/sf/tracking-cart", {
          method: "POST", headers: {
            "Content-Type": "application/json",
            "access-token": "avis@123"
          }, body: JSON.stringify(data)
        }).then((t) => t.json()).then((t) => t);
      }
    }
  }

  if ((window.ap_front_settings?.shop_id === "76328501580" && window.ap_front_settings.page_type === "cart") ||
    window.ap_front_settings?.shop_id === "59625603264"
  ) {
    try {
      logCart();
    } catch (ex) { }
  }
  if (window.ap_front_settings?.shop_id === "76328501580" && window.ap_front_settings.page_type === "product") {
    console.log("avis load page");
    setTimeout(function () {
      let optionsSelectors = document.querySelectorAll(".avis-input-hiddens input");
      for (let optionSelector of optionsSelectors) {
        let fieldName = optionSelector.getAttribute("name");
        if (fieldName) {
          fieldName = fieldName.replace('properties[', '');
          fieldName = fieldName.substring(0, fieldName.length - 1);
        }
        let viewSelector = document.querySelector(`[name='${fieldName}']`);
        if (viewSelector.value && !viewSelector.getAttribute("disabled")) {
          optionSelector.value = viewSelector.value;
          optionSelector.removeAttribute("disabled");
        }
      }
    }, 500);
  }

  // Handle cart drawer
  window.AvisOptionProductIds = [];
  let intervalAvisOption = setInterval(async () => {
    if (window.CartDrawerAppUpsellInfo?.length && window?.checkAvisOption) {
      clearInterval(intervalAvisOption);
      for (let item of window.CartDrawerAppUpsellInfo) {
        let productInfo = item;
        productInfo.id = productInfo.id.split('/').pop();
        let data = await window?.checkAvisOption(productInfo);
        if (data) {
          window.AvisOptionProductIds.push(productInfo.id);
        }
      }
    }
  }, 200);

  let intervalUpsell = setInterval(async () => {
    let containerUpsellSelector = document.querySelector(".drawer-cd-up-app-Ksl.open");
    if (containerUpsellSelector && AvisOptionsData.mainCheckAllRules && window.CartDrawerAppUpsellInfo?.length) {
      for (let item of window.CartDrawerAppUpsellInfo) {
        let upsellDetail = containerUpsellSelector.querySelector(`#cd-div-append-${item.id}`);
        if (upsellDetail && !upsellDetail.getAttribute("avis-options")) {
          upsellDetail.setAttribute("avis-options", true);
          AvisOptionsData.mainCheckAllRules(
            item,
            item.id + "_cartdrawer",
            false,
            containerUpsellSelector
          );
        }
      }
    }
  }, 300);

  if (window.ap_front_settings?.shop_id === "55969448111" && window.ap_front_settings.page_type === "product") {
    setInterval(function () {
      let apElements = document.querySelector('#avpoptions-container__v2');
      if (apElements) {
        let swatchWithPrice = document.querySelectorAll('.apo-customize-swatch .avp-productoptionswatchwrapper > input');
        for (let item of swatchWithPrice) {
          if (item.checked) {
            item.parentElement.style.border = "1px solid #606060 ";
            item.parentElement.style.background = "#e5e5e5";
          } else {
            item.parentElement.style.border = "1px solid #d8d8d8";
            item.parentElement.style.background = "#ffffff";
          }
        }
      }
    }, 300);
  }

  if (window.ap_front_settings?.shop_id === "87849468199" && window.ap_front_settings.page_type !== "cart") {
    document.querySelectorAll('button.qty-input__btn.btn--minus, button.qty-input__btn.btn--plus, a.cart-item__remove').forEach(item => {
      item.addEventListener("click", () => {
        setTimeout(() => {
          location.reload();
        }, 2500);
      });
    });
  }


  if (window.ap_front_settings?.shop_id === "84930232653" && window.ap_front_settings.page_type === "product") {
    let interval = setInterval(function () {
      let apElements = document.querySelector('.avis-swatch-product-container');
      if (apElements) {
        $($('form .select')[0]).before($('.avis-swatch-product-container'));
        clearInterval(interval);
      }
    }, 100);
  }

  if (window.ap_front_settings?.shop_id === "85492203808" && window.ap_front_settings.page_type === "product") {
    setInterval(function () {
      let apElements = document.querySelector('#avpoptions-container__v2');
      if (apElements) {
        let swatchWithPrice = document.querySelectorAll('.apo-btn-customize .avp-pilloptioncheckwrapper > input');
        for (let item of swatchWithPrice) {
          if (item.checked) {
            item.parentElement.classList.add("apo-checked");
          } else {
            item.parentElement.classList.remove("apo-checked");
          }
        }
      }
    }, 100);
  }


  if (
    window.ap_front_settings?.shop_id === "25972252" &&
    window.ap_front_settings.page_type === "cart" &&
    window.ap_front_settings.config.config_app.appPlan === "ADVANCED"
  ) {
    function sortVariantInCartPage() {
      const playerContainer = document.querySelector("span[data-hulkapps-line-properties]");
      const playerOptions = Array.from(playerContainer.querySelectorAll(".product-option"));

      const sortedOptions = playerOptions.sort((a, b) => {
        const dtA = a.querySelector("dt");
        const dtB = b.querySelector("dt");

        if (dtA && dtB) {
          const playerNumberA = parseInt(dtA.textContent.match(/PLAYER (\d+)/i)?.[1] || 0, 10);
          const playerNumberB = parseInt(dtB.textContent.match(/PLAYER (\d+)/i)?.[1] || 0, 10);
          return playerNumberA - playerNumberB;
        }

        return 0;
      });
      playerContainer.innerHTML = "";
      playerOptions.forEach((option) => playerContainer.appendChild(option));
    }
    sortVariantInCartPage();
  }

  if (window.ap_front_settings?.shop_id === "17207277") {
    let interval = setInterval(function () {
      let apElements = document.querySelector('.avpoptions-container__v2');
      if (apElements) {
        var inputs = document.querySelectorAll('.ap-options__text-container input[type=text]');
        if (inputs) {
          inputs.forEach(function (inputField) {
            var value = inputField.value;
            var emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
            var filteredValue = value.replace(emojiRegex, '');

            if (value !== filteredValue) {
              inputField.value = filteredValue;
              alert("Emojis are not allowed!");
            }
          });
        }
      }
    }, 1000);
  }

  function createBodyTooltip(){
    if (!["87503831334", "62129143868", "8038940723", "72460534015"].includes(window.ap_front_settings?.shop_id)) return;

    let bodyTooltip = document.querySelector(".avis-body-tooltip");
    if (bodyTooltip) return;

    let tooltipBody = document.createElement("div");
    tooltipBody.classList.add("avis-body-tooltip");
    document.body.appendChild(tooltipBody);
  }
  createBodyTooltip();

  function createThumbnailBar() {
    let thumbnailWrapper = AvisStyleOptions.selectors.thumbnailWrapper;
    let thumbnailSliderItem = AvisStyleOptions.selectors.thumbnailSliderItem;
    let listMedia = window.AvisStyleOptions.product.media
    if (!listMedia && listMedia?.length < 1) return;
    let thumbnailBarItem = listMedia?.map((item) => {
      let createItem = document.createElement("img");
      createItem.classList.add("avis-thumbanil-item");
      createItem.setAttribute("src", item?.src);
      createItem.setAttribute("alt", item?.alt);
      createItem.setAttribute("width", "auto");
      createItem.setAttribute("height", "100px");

      createItem.addEventListener("click", function () {
        // action change img
        if (["43133796508"].includes(window.ap_front_settings?.shop_id)) {
          let queryMediaProduct = document.querySelectorAll(thumbnailSliderItem);
          if (queryMediaProduct && queryMediaProduct.length > 0) {
            for (let media of queryMediaProduct) {
              let imgMedia = media.querySelector("img");
              let imgMediaAlt = imgMedia.getAttribute("alt");
              if (imgMediaAlt && imgMediaAlt == this.getAttribute("alt")) {
                media.style.opacity = "1";
              } else {
                media.style.opacity = "0";
              }
            }
          }
        }
      });

      return createItem;
    })
    let thumbnailBar = document.createElement("div");
    thumbnailBar.classList.add("avis-thumbnail-bar");
    thumbnailBar.classList.add("avis-thumbnail-bar--hidden");

    if (document.querySelector(".avis-thumbnail-bar")) return;
    thumbnailBar.append(...thumbnailBarItem);

    document.querySelector(thumbnailWrapper).append(thumbnailBar);
  }
  if (["43133796508"].includes(window.ap_front_settings?.shop_id) &&
    window.ap_front_settings.page_type === "product"
  ) {
    createThumbnailBar();
  }
}
if (window.ap_front_settings?.shop_id)
  {
    avisCustomOption();
  }
  else
  {
      let index = 0;
      let interavisCustomOption = setInterval(function(){
      index++;
      if (window.ap_front_settings?.shop_id)
      {
          clearInterval(interavisCustomOption);
          avisCustomOption();
      }
      if (index > 1000)
      {
          clearInterval(interavisCustomOption);
      }
      }, 200);
  }
