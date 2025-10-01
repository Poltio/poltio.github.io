var isLoadedCartPage = false;
function apo_MiniCart() {
AvisOptionsConfig.cartitem_price=[{total_price:".product-item-price .product-item-price-final",total_compare:"",price:""},{total_price:".cart-item__totals span.price.price--end",total_compare:".cart-item__totals s.cart-item__old-price",price:".cart-item__details .product-option.cart-item__final-price,.cart-item__details > div.product-option",price_compare:".cart-item__details .product-option.cart-item__old-price"},{total_price:".cart-items__price text-component",total_compare:"",price:".cart-items__details .cart-items__variants + div .visually-hidden + span",price_compare:""},{total_price:".product-item-price-final",total_compare:"",price:"",price_compare:""},{total_price:".ajaxcart-item__price > span",total_compare:"",price:"",price_compare:""},{total_price:".cart-collateral span.price",total_compare:"",price:"",price_compare:""},{total_price:".quick-cart__item-price-wrapper span.quick-cart__item-price",total_compare:"",price:"",price_compare:""},{total_price:".previewCartItem-content .previewCartItem-price span.abc",total_compare:"",price:".previewCartItem-content .previewCartItem-price span[data-item-final-price-display]",price_compare:""},{total_price:".quick-cart__item-price-wrapper span.quick-cart__item-price",total_compare:"",price:"",price_compare:""},{total_price:".cart-item__price strong",total_compare:"",price:"",price_compare:""},{total_price:".product-cart__price .product-cart__price-value span.price > span",total_compare:"",price:"",price_compare:""},{total_price:".tt-price.totalPriceOfItemElementTPO",total_compare:"",price:"",price_compare:""},{total_price:"",total_compare:"",price:".hdt-mini-cart__price hdt-price span.hdt-money",price_compare:""},{total_price:".minicart__item-prices .text-color-original-price",total_compare:"",price:"",price_compare:""},{total_price:".cart__item .cart__price",total_compare:"",price:"",price_compare:""},{total_price:".product-cart-item .product-cart-item-price",total_compare:"",price:"",price_compare:""},{total_price:"div.cart_subtotal_drawer p",total_compare:"",price:".cart-drawer .product-price .price-item--sale",price_compare:""},{total_price:"div[data-cart-item-price] dl[data-cart-item-price-list] div[data-cart-item-regular-price-group] dd[data-cart-item-regular-price]",total_compare:"",price:"",price_compare:""},{total_price:"line-item.line-item .line-item-info price-list.price-list sale-price.text-subdued",total_compare:"",price:"",price_compare:""},{total_price:".cart-item-price-unit div.yv-prizebox span.yv-product-price",total_compare:"",price:"",price_compare:""},{total_price:"td.cart-item-totals .cart-item-total-price b.price.price--end",total_compare:"",price:"td.cart-item-details .cart-item-price .original-price small",price_compare:""},{total_price:"div.t4s-cart_meta_price div.t4s-cart_price",total_compare:"",price:"",price_compare:""},{total_price:"div.prod-holder div.price-holder span.price",total_compare:"",price:"",price_compare:""},{total_price:".cart-item__total.price .price__current",total_compare:"",price:".cart-drawer__content .cart-item__details .price__current",price_compare:""},{total_price:"span[x-html='formatMoney(item.final_line_price)']",total_compare:"",price:"",price_compare:""},{total_price:"",total_compare:"",price:"div.previewCartItem-price span.price span[data-price-from-compare] span.discounted-price span",price_compare:"div.previewCartItem-price span.price span[data-price-from-compare] s.before-discount-price span"},],AvisOptionsConfig.cartitem_price_cartpage=[{total_price:".cart-item__totals dd.price.price--end, .cart-item__totals span.price.price--end",total_compare:".cart-item__totals s.cart-item__old-price",price:".cart-item__details .product-option.cart-item__final-price,.cart-item__details > div.product-option",price_compare:".cart-item__details .product-option.cart-item__old-price"},{total_price:".cart-items__price text-component",total_compare:"",price:".cart-items__details .cart-items__variants + div .visually-hidden + span",price_compare:""},{total_price:".ecom-cart__product-item__totals .ecom-cart__product-price--end",total_compare:"",price:".ecom-cart__product-prices .ecom-cart__product-price--end,.ecom-cart__product-prices span.ecom-cart__product-price--end",price_compare:".ecom-cart__product-prices s.ecom-cart__product-item-price--end"},{total_price:".cart-item__column.cart-item__total span.cart-item__selling-total",total_compare:"",price:".cart-item__column.cart-item__price span.cart-item__selling-price",price_compare:""},{total_price:"td.cart-total-label[data-label='Total'] span",total_compare:"",price:"td[data-label='Prix'] span",price_compare:""},{total_price:".cart--price .price-box > span",total_compare:"",price:"",price_compare:""},{total_price:"td.product-subtotal span.price span.amount",total_compare:"",price:"",price_compare:""},{total_price:".cart__form-item-price-wrapper .cart__form-item-price",total_compare:"",price:"",price_compare:""},{total_price:".cart-item-total .cart-item-value",total_compare:"",price:".cart-item-price .price--end",price_compare:""},{total_price:".m-cart-item__price .m-cart-item__price--regular",total_compare:"",price:".m-cart-item__price--regular span[data-cart-item-original-price]",price_compare:""},{total_price:".cart__form-item-price-wrapper span.cart__form-item-price",total_compare:"",price:"",price_compare:""},{total_price:".cart-item__total strong",total_compare:"",price:".cart-item__price > div > :not(.visually-hidden)",price_compare:""},{total_price:".apo-final-price .price",total_compare:"",price:".apo-line-price .price",price_compare:""},{total_price:".cart__items__price .line__price",total_compare:"",price:".cart__items__total",price_compare:""},{total_price:".tt-price .ymq_item_price",total_compare:"",price:".tt-price .ymq_item_line_price",price_compare:""},{total_price:".hdt-cart-item__total hdt-price",total_compare:"",price:".hdt-cart-item__price hdt-price",price_compare:""},{total_price:".cart-item__price-wrapper .product-option",total_compare:"",price:".cart-item__price-wrapper .price.price--end",price_compare:""},{total_price:".cart__item .cart__price",total_compare:"",price:"",price_compare:""},{total_price:".product-subtotal",total_compare:"",price:"",price_compare:""},{total_price:".cart-content_inner .product-line-price .price",total_compare:"",price:".cart-content_inner .product-price-cart .price-cart",price_compare:""},{total_price:".medium-up--two-fifths .cart__row--table-large span.cart__price .original_price",total_compare:"",price:".medium-up--two-fifths .cart__row--table-large span.cart__price .original_price",price_compare:""},{total_price:"div[data-cart-item-regular-price-group] span[data-cart-item-regular-price]",total_compare:"",price:"div[data-cart-item-price] dl[data-cart-item-price-list] div[data-cart-item-regular-price-group] dd[data-cart-item-regular-price]",price_compare:""},{total_price:".order-summary__body tr td.text-end",total_compare:"",price:"line-item.line-item .line-item-info price-list.price-list sale-price.text-subdued",price_compare:""},{total_price:".cart__item .cart__item__content p.cart__price",total_compare:"",price:".cart__item .cart__item__content p.cart__price",price_compare:""},{total_price:"td.cart-price div.yv-product-information .yv-prizebox span.yv-product-price",total_compare:"",price:"",price_compare:""},{total_price:"td.cart-item-totals .cart-item-total-price b.price.price--end",total_compare:"",price:"td.cart-item-details .cart-item-price .original-price small",price_compare:""},{total_price:"div.t4s-text-start span.t4s-cart-item-price",total_compare:"",price:"div.t4s-cart_meta_prices_wrap div.t4s-cart_meta_prices div.t4s-cart_price",price_compare:""},{total_price:"div.main-cart_col strong.mcil_price span.mcil_final-price",total_compare:"",price:"div.mcil_description strong.mcil_price span.mcil_final-price",price_compare:""},{total_price:".cart-item__total.price .price__current",total_compare:"",price:".cart-drawer__content .cart-item__details .price__current",price_compare:""},{total_price:"td[data-total]>div>span",total_compare:"",price:"td[data-price]",price_compare:""},{total_price:"div.cart-col5 span[data-hulkapps-line-price].price-money",total_compare:"",price:"div.cart-col3 span[data-hulkapps-ci-price].price-money",price_compare:""},{total_price:".CartItem__LinePriceList .CartItem__Price",total_compare:"",price:".CartItem > .CartItem__PriceList .CartItem__Price",price_compare:""},],AvisOptionsConfig.mini_carts=[{cart_item:{key:'form[action*="/cart"].mini-cart cart-items ul li',details:".product-description > dl",quantity:{wrapper:"quantity-input.quantity",input:"quantity-input .quantity__input",decrease:'.quantity__button[name="minus"]',increase:'.quantity__button[name="plus"]'},removeButton:"a.delete-product"}},{theme:"Dawn",cart_item:{key:'cart-drawer form[action*="/cart"] .cart-items .cart-item',details:".cart-item__details",quantity:{wrapper:"quantity-input.quantity",input:"quantity-input .quantity__input",decrease:'.quantity__button[name="minus"]',increase:'.quantity__button[name="plus"]'},removeButton:"cart-remove-button"}},{theme:"",cart_item:{key:"form.cart-form tbody .cart-items__table-row",details:".cart-items__details",quantity:{wrapper:"quantity-selector-component",input:"input",decrease:".button.quantity-minus",increase:".button.quantity-plus"},removeButton:"button.cart-items__remove"}},{cart_item:{key:'form[action*="/cart"] .ajax-cart__cart-items > ul',details:"li.ajax-cart__item-details",quantity:{wrapper:"li.ajax-cart__item-qty .ajax-cart__item-quantity",input:".ajax-cart__qty-input",decrease:".ajax-cart__qty-control--down",increase:".ajax-cart__qty-control--up"},removeButton:"li.ajax-cart__item-remove"}},{cart_item:{key:'form[action*="/cart"] .cart-items .cart-item',details:"",quantity:{wrapper:"",input:"",decrease:"",increase:""},removeButton:"cart-remove-button"}},{cart_item:{key:'form[action*="/cart"]#mini-cart .mini-cart__line-item',details:".mini-cart__product-info",quantity:{wrapper:".mini-cart__quantity .quantity-selector",input:"input.quantity-selector__value",decrease:'.quantity-selector__button[data-action="decrease-quantity"]',increase:'.quantity-selector__button[data-action="increase-quantity"]'},removeButton:"a.mini-cart__quantity-remove"}},{theme:"Spark v2.6.2",cart_item:{key:".quick-cart .quick-cart__items .quick-cart__item",details:".quick-cart__item-middle",quantity:{wrapper:".quick-cart__control .quick-cart__control-top",input:"",decrease:"button.quick-cart__button",increase:""},removeButton:""}},{theme:"",cart_item:{key:'form[action*="/cart"]#cart-drawer-form .cart-item',details:".cart-item__details",quantity:{wrapper:".qty-input.qty-input--combined",input:".qty-input__input.input",decrease:".qty-input__btn.btn.btn--minus",increase:".qty-input__btn.btn.btn--plus"},removeButton:"a.cart-item__remove"}},{theme:"",cart_item:{key:".cart-drawer__items line-item.line-item",details:".line-item-info",quantity:{wrapper:"quantity-selector.quantity-selector",input:"input.quantity-selector__input",decrease:".quantity-selector__button",increase:".quantity-selector__button"},removeButton:"line-item-quantity a.link"}},{theme_name:"Stiletto 2.1.0",cart_item:{key:'form[action*="/cart"].quick-cart__form .quick-cart__item',details:".quick-cart__item-top",quantity:{wrapper:".quantity-input",input:"input.quantity-input__input",decrease:"button.product__quantity-subtract-item",increase:"button.product__quantity-add-item"},removeButton:"button.quick-cart__item-remove"}},{theme_name:"Bullet 2.4.6",cart_item:{key:"c.entry grid.productsInCart",details:"c.name",quantity:{wrapper:"flex.controllers",input:"",decrease:"button.is-blank.plus",increase:"button.is-blank.minus"},removeButton:"button[rv-data-cart-remove]"}},{theme:"Pipeline 7.1.3",cart_item:{key:"[data-section-type='cart-drawer'] .cart__items .cart__items__row",details:".cart__items__title",quantity:{wrapper:".quantity__wrapper",input:"input.quantity__input",decrease:".quantity__button--plus",increase:".quantity__button--minus"},removeButton:".cart__items__remove a"}},{theme:"Ella 6.5.4",cart_item:{key:".previewCart-wrapper .previewCartItem",details:".card-properties.cart-item-properties",quantity:{wrapper:"cart-update-quantity.previewCartItem-qty",input:"input.form-input.quantity",decrease:"a.minus.btn-quantity",increase:"a.plus.btn-quantity"},removeButton:"button.previewCartItem-remove"}},{theme_name:"Abode 2.0.2",cart_item:{key:'form[action*="/cart"].cart__contents cart-notification-item',details:".cart-notification-item__details",quantity:{wrapper:".quantity-input",input:"input.quantity__input",decrease:'button.quantity__button[name="minus"]',increase:'button.quantity__button[name="plus"]'},removeButton:"cart-remove-button a.link"}},{theme_name:"Local 2.0.0",cart_item:{key:'form[action*="/cart"]#cart .cart-item',details:".cart-item__content",quantity:{wrapper:"cart-product-quantity",input:"input.quantity__input",decrease:"button.qty-button.qty-minus",increase:"button.qty-button.qty-plus"},removeButton:"a.remove"}},{theme_name:"Local 2.0.0",cart_item:{key:".slidecarthq .items .item",details:"",quantity:{wrapper:".quantity-selector",input:'input[type="text"]',decrease:'.quantity-selector button[aria-label*="decrease"]',increase:'.quantity-selector button[aria-label*="increase"]'},removeButton:"button.remove"}},{theme_name:"Broadcast 5.5.0",cart_item:{key:"cart-items .cart__item",details:".cart__item__content-inner",quantity:{wrapper:"quantity-counter.cart__quantity-counter",input:"input.cart__quantity-field",decrease:"button.cart__quantity-minus",increase:"button.cart__quantity-plus"},removeButton:"a.cart__item__remove"}},{theme_name:"Impulse 7.4.1",cart_item:{key:"#monster-cart-wrapper .mu-cart-item",details:".mu-item-properties",quantity:{wrapper:".mu-item-quantity",input:"",decrease:"button.mu-rounded-l",increase:"button.mu-rounded-r"},removeButton:"button.mu-rounded-l"}},{theme_name:"Impact 4.3.3",cart_item:{key:"cart-drawer#cart-drawer .cart-drawer__line-items .cart-itembox line-item.cart-itembox-item",details:".cart-itembox-item-details",quantity:{wrapper:"line-item-quantity .ajaxcart__qty",input:"input.quantity-input",decrease:"button.ajaxcart__qty-adjust.ajaxcart__qty--minus",increase:"button.ajaxcart__qty-adjust.ajaxcart__qty--plus"},removeButton:"a.delete-qty.ajaxcart__qty-remove"}},{theme_name:"Palo Alto 5.4.1",cart_item:{key:"#cart-drawer .cart__item",details:".cart__item__info",quantity:{wrapper:".cart__item__quantity",input:"input.cart__item__quantity-field",decrease:"button.cart__item__quantity-minus",increase:"button.cart__item__quantity-plus"},removeButton:"a.cart__item__remove"}},{theme_name:"Focal 11.1.0",cart_item:{key:'form[action*="/cart"]#mini-cart-form line-item',details:".product-item-meta__property-list",quantity:{wrapper:"line-item-quantity.line-item__quantity",input:"input.quantity-selector__input",decrease:'.quantity-selector__button[aria-label="Decrease quantity"]',increase:'.quantity-selector__button[aria-label="Increase quantity"]'},removeButton:"a.line-item__remove-button"}},{theme_name:"Expanse 4.3.4",cart_item:{key:".rebuy-cart__flyout li.rebuy-cart__flyout-item",details:".rebuy-cart__flyout-item-properties",quantity:{wrapper:".rebuy-cart__flyout-item-quantity-widget",input:"",decrease:"button",increase:"button"},removeButton:"button.rebuy-cart__flyout-item-remove"}},{theme_name:"Athens 2.2.0",cart_item:{key:'form[action*="/cart"].mini-cart-inner .mini-cart-item',details:".mini-cart-item-info",quantity:{wrapper:".quantity-input.quantity-input",input:"input.quantity-input-field",decrease:"button.quantity-input-button.quantity-input-minus",increase:"button.quantity-input-button.quantity-input-plus"},removeButton:"cart-remove-button a"}},{theme_name:"Ella 6.4.1",cart_item:{key:".halo-sidebar-wrapper .previewCartItem",details:".card-properties",quantity:{wrapper:"cart-update-quantity.previewCartItem-qty",input:"input.form-input.quantity",decrease:"a.minus.btn-quantity",increase:"a.plus.btn-quantity"},removeButton:"a.previewCartItem-remove"}},{theme_name:"People Village",cart_item:{key:"#spro-cart-sidebar .spro-sidebar-wrapper .previewCart .previewCartList .previewCartItem",details:".previewCartItem-content",quantity:{wrapper:".previewCartItem-qty",input:"input.form-input.quantity",decrease:"a.minus.btn-quantity",increase:"a.plus.btn-quantity"},removeButton:"a.previewCartItem-remove"}},{theme_name:"Electro",cart_item:{key:'form[action*="/cart"].cart-drawer__form .cart-drawer__product',details:".cart-drawer__product-info",quantity:{wrapper:"sht-cart-drwr-qty-inp",input:"input.js-cart-drawer-quantity-input",decrease:"button.js-cart-drawer-quantity-btn-minus",increase:"button.js-cart-drawer-quantity-btn-plus"},removeButton:"button.js-cart-drawer-delete-btn"}},{theme_name:"Shine",cart_item:{key:'form[action*="/cart"].cart-drawer__form .cart-drawer__product',details:".cart-drawer__product-info",quantity:{wrapper:"sht-cart-drwr-qty-inp",input:"input.js-cart-drawer-quantity-input",decrease:"button.js-cart-drawer-quantity-btn-minus",increase:"button.js-cart-drawer-quantity-btn-plus"},removeButton:"button.js-cart-drawer-delete-btn"}},{theme_name:"Debutify",cart_item:{key:'form[action*="/cart"]#ajaxCartForm .ajaxcart_row.cart-item',details:".grid__item.eight-twelfths .spacer-auto-xs",quantity:{wrapper:".qty-container",input:"input.qty-input.cart__product-qty",decrease:"button.qty-minus",increase:"button.qty-plus"},removeButton:"button.cart__product-remove"}},{theme_name:"Honey",cart_item:{key:'form[action*="/cart"]#CartDrawer-Form .cart__item',details:".cart__product-details",quantity:{wrapper:"quantity-input",input:"input.quantity__input",decrease:"button.qtyminus",increase:"button.qtyplus"},removeButton:"cart-remove-button a"}},{theme_name:"Local",cart_item:{key:'form[action*="/cart"].cart__form .cart-item',details:".cart-item__content",quantity:{wrapper:"product-quantity",input:"input.product__quantity",decrease:"button.qty-button.qty-minus",increase:"button.qty-button.qty-plus"},removeButton:"a.remove"}},{theme_name:"Pipeline",cart_item:{key:".drawer__content .cart__items .cart__items__row",details:".cart__items__title",quantity:{wrapper:".quantity__wrapper",input:"input.quantity__input",decrease:"button.quantity__button--minus",increase:"button.quantity__button--plus"},removeButton:"a.cart__items__remove"}},{theme_name:"Kalles",cart_item:{key:'form[action*="/cart"].t4s-drawer__wrap .t4s-mini_cart__item',details:".t4s-mini_cart__info",quantity:{wrapper:".t4s-quantity-wrapper",input:"input.t4s-quantity-input",decrease:"button.t4s-quantity-selector.is--minus",increase:"button.t4s-quantity-selector.is--plus"},removeButton:"a.t4s-mini_cart__remove"}},{theme_name:"Zest",cart_item:{key:'form[action*="/cart"]#CartDrawer .f-cart-item',details:".f-cart-drawer__product-info",quantity:{wrapper:".f-quantity__wrapper",input:"input.f-quantity__input",decrease:'button.f-quantity__button[name="minus"]',increase:'button.f-quantity__button[name="plus"]'},removeButton:"button.f-cart-drawer__remove"}},{store_id:"",cart_item:{key:"cart-modal .cart-modal-item",details:"div.items-start",quantity:{wrapper:"qty-selector",input:"qty-selector input.hide-input-arrows",decrease:"button[data-dec]",increase:"button[data-inc]"},removeButton:"a[data-button-remove]"},theme_name:"Essence"},{theme_name:"Minimog - OS 2.0 v4.1.0",cart_item:{key:"#cart-drawer-form .m-cart-drawer__items .m-cart-item.m-cart-drawer-item .m-cart-item--drawer__wrapper",details:".m-cart-item__info.m-cart-drawer-item__info",quantity:{wrapper:"m-quantity-input.m-quantity",input:"input.m-quantity__input",decrease:'button.m-quantity__button[name="minus"]',increase:'button.m-quantity__button[name="plus"]'},removeButton:"m-cart-remove-button .m-cart-item__remove"}},{theme_name:"Shella 6.3.0",cart_item:{key:".popup-cart.min-cart div.popup-cart__items div.product-cart",details:"div.product-cart__content",quantity:{wrapper:"div.input-quantity",input:"input.product-cart__input-quantity",decrease:'div[data-control="-"]',increase:'div[data-control="+"]'},removeButton:"a.product-cart__remove.js-product-button-remove-from-cart"}},{theme_name:"ecomify-lite 1.0.0",cart_item:{key:"ul.product-list li.product-item",details:"ul.list-unstyled",quantity:{wrapper:"div.quantity-wrapper",input:'input[name="updates[]"]',decrease:'button[data-mode="minus"]',increase:'button[data-mode="plus"].btn-plus'},removeButton:"button[data-remove-line-item]"}},{theme_name:"Impact",cart_item:{key:".cart-drawer__line-items line-item.line-item",details:".line-item__info",quantity:{wrapper:"line-item-quantity",input:"input.quantity-input",decrease:"",increase:""},removeButton:".text-xs.text-center a"}},{theme_name:"Passo Bosco 4.0.0",cart_item:{key:".js-mini-cart-content .mini-cart-item",details:".mini-cart-meta",quantity:{wrapper:"",input:"",decrease:"",increase:""},removeButton:".js-remove-mini-cart"}},{theme_name:"Starlite 3.3.0",cart_item:{key:".cart-drawer-content-item .cart-item",details:".cart-item-details",quantity:{wrapper:".cart-item-quantity-wrapper",input:"input.quantity-input",decrease:"button.quantity-down",increase:"button.quantity-up"},removeButton:"a.btn-remove"}},{theme_name:"Label 3.6.1",cart_item:{key:"#CartContainer div[data-cart-item-index]",details:'div[x-show="flatProperties(item.properties).length"]',quantity:{wrapper:'div:has(input[name="updates[]"])',input:'input[name="updates[]"]',decrease:'button[data-qty-adjust="minus"]',increase:'button[data-qty-adjust="plus"]'},removeButton:'button[data-qty-adjust="remove"]'}},{theme_name:"Dawn 2.5.0",cart_item:{key:"#cart-notification .cart-notification-product",details:"div.cart-notification-product__option",quantity:{wrapper:"quantity-input.quantity",input:"input.quantity__input",decrease:'button[name="minus"]',increase:'button[name="plus"]'},removeButton:"span.cart-remove-js"}},{theme_name:"Spark",cart_item:{key:"#supercart-lines .supercart-line",details:".super-properties",quantity:{wrapper:".supercart-qty-field",input:"input",decrease:"button.super_qty",increase:"button.super_qty"},removeButton:"a.supercart-line-remove"}},{theme_name:"Expanse",cart_item:{key:'form[action*="/cart"].cart__drawer-form .cart__item',details:".cart__item-title",quantity:{wrapper:"quantity-selector",input:"input.js-qty__num",decrease:"button.js-qty__adjust--minus",increase:"button.js-qty__adjust--plus"},removeButton:""}},{theme_name:"Symmetry 7.3.0",cart_item:{key:"cart-form.cart-drawer .cart-drawer__content .cart-item-list .cart-item-list__body div[data-merge-list-item]",details:".cart-item .cart-item__column.cart-item__description",quantity:{wrapper:"div.quantity",input:"input.cart-item__quantity-input",decrease:"a.quantity-down",increase:"a.quantity-up"},removeButton:"a.cart-item__remove"}},{theme_name:"Flow 39.2.0",cart_item:{key:'form[action*="/cart"].cart .ajaxcart__inner .ajaxcart__product',details:".ajaxcart__row .grid__item + .grid__item",quantity:{wrapper:".ajaxcart__qty",input:"input.ajaxcart__qty-num",decrease:"button.ajaxcart__qty-adjust.ajaxcart__qty--minus",increase:"button.ajaxcart__qty-adjust.ajaxcart__qty--plus"},removeButton:"button.ajaxcart__qty-remove"}},{theme_name:"Minimog - OS 2.0",cart_item:{key:'form[action*="/cart"]#cart-drawer-form .m-cart-drawer--item',details:".scd-item__info",quantity:{wrapper:".m-quantity-input",input:"input.m-cart-quantity--input",decrease:"button.m-cart-quantity--button[name=minus]",increase:"button.m-cart-quantity--button[name=plus]"},removeButton:"m-cart-remove-button"}},{theme_name:"Ella 5.1.0",cart_item:{key:"#dropdown-cart ol.mini-products-list li.item",details:".product-details",quantity:{wrapper:".quantity",input:"input.item-quantity",decrease:"",increase:""},removeButton:"a.btn-remove"}},{theme_name:"Flow 39.4.0",cart_item:{key:'form[action*="/cart"].cart .ajaxcart__inner .ajaxcart__product',details:".ajaxcart__row .grid__item + .grid__item",quantity:{wrapper:".ajaxcart__qty",input:"input.ajaxcart__qty-num",decrease:"button.ajaxcart__qty-adjust.ajaxcart__qty--minus",increase:"button.ajaxcart__qty-adjust.ajaxcart__qty--plus"},removeButton:"button.ajaxcart__qty-remove"}},{theme_name:"Pipeline",cart_item:{key:".drawer__body div[data-line-items] .cart__items__row:not(div[docapp-data-cart-item])",details:".cart__items__title",quantity:{wrapper:".quantity__wrapper",input:"input.quantity__input",decrease:"button.quantity__button.quantity__button--minus",increase:"button.quantity__button.quantity__button--plus"},removeButton:"a.cart__items__remove"}},{theme_name:"Stiletto",cart_item:{key:'form[action*="/cart"].quick-cart__form .quick-cart__items > .quick-cart__item',details:".quick-cart__item-details .quick-cart__item-top",quantity:{wrapper:".quantity-input",input:"input.quantity-input__input",decrease:"button.quantity-input__button.product__quantity-subtract-item",increase:"button.quantity-input__button.product__quantity-add-item"},removeButton:"button.quick-cart__item-remove"}},{theme_name:"Vantage",cart_item:{key:'.ajax-cart__form-wrapper form[action*="/cart"].ajax-cart__cart-form .ajax-cart__cart-item',details:".ajax-cart__item-details",quantity:{wrapper:".ajax-cart__item-qty",input:"input.ajax-cart__qty-input",decrease:"button.ajax-cart__qty-control--down",increase:"button.ajax-cart__qty-control--up"},removeButton:"li.ajax-cart__item-remove--js"}},{theme_name:"Cornerstone",cart_item:{key:'form[action*="/cart"] .quick-cart__main-content .quick-cart__items .quick-cart__item',details:".quick-cart__item-details .quick-cart__item-top",quantity:{wrapper:".quantity-input-wrapper .quantity-input",input:"input[data-quantity-input].quantity-input__input",decrease:"button[data-subtract-quantity].quantity-input__button",increase:"button[data-add-quantity].quantity-input__button"},removeButton:"button[data-remove-item].quick-cart__item-remove"}},{theme_name:"Combine-Cooee5Sep2024-Rev2-DO NOT EDIT!!!",cart_item:{key:'form[action*="/cart"]#cart .cart__items .cart-item',details:".cart-item__content > div",quantity:{wrapper:"product-quantity cart-product-quantity",input:"input.qty.qty-selector.product__quantity",decrease:"button.qty-button.qty-minus",increase:"button.qty-button.qty-plus"},removeButton:"a.remove"}},{theme_name:"Sleek",cart_item:{key:".drawer__content .cart-drawer__body cart-items .cart-item",details:".cart-item__details",quantity:{wrapper:"cart-quantity",input:"input.quantity__input",decrease:"button.quantity__button[name=minus]",increase:"button.quantity__button[name=plus]"},removeButton:"a.cart-item__remove"}},{theme_name:"Wokiee",cart_item:{key:".tt-cart-content .tt-cart-list .tt-item",details:".tt-item-descriptions",quantity:{wrapper:"",input:"",decrease:"",increase:""},removeButton:".tt-item-close a.tt-btn-close"}},{theme_name:"Ecomus",cart_item:{key:".hdt-mini-cart__main hdt-line-item",details:".hdt-mini-cart__info",quantity:{wrapper:"hdt-quantity-wrapp",input:"input.hdt-quantity-input",decrease:"button.hdt-quantity__button.is--minus",increase:"button.hdt-quantity__button.is--plus"},removeButton:"wrapp-remove-item-oncart"}},{theme_name:"Glozin",cart_item:{key:"form[action*='/cart']#minicart .cart-item",details:".product-option-property",quantity:{wrapper:"quantity-input",input:"input.quantity-input",decrease:"button.quantity__button[name=minus]",increase:"button.quantity__button[name=plus]"},removeButton:"mini-cart-remove-button a"}},{theme_name:"Reformation",cart_item:{key:"#Cart-Drawer .side-panel-content .product-cart-item--container .product-cart-item",details:".product-cart-item-info",quantity:{wrapper:"quantity-selector",input:"input",decrease:"button.minus",increase:"button.plus"},removeButton:"a.remove"}},{theme_name:"Official site",cart_item:{key:"form[action*='/cart'].cart .cart-drawer__cart",details:"div.cart-drawer__products[data-product]",quantity:{wrapper:"div:last-child div.form-options div.quantity__main",input:"div.quantity_num input",decrease:"button[name='minus'].quantity__decrease",increase:"button[name='plus'].quantity__increase"},removeButton:"div:last-child a.removeItem"}},{theme_name:"Combine",cart_item:{key:"form[action*='/cart'].cart__form .cart-item",details:".cart-item__content",quantity:{wrapper:"cart-product-quantity",input:"input.qty-selector",decrease:"button.qty-minus",increase:"button.qty-plus"},removeButton:"a.remove"}},{theme_name:"Fashionopolism",cart_item:{key:'.ajax-cart__form-wrapper form[action*="/cart"].ajax-cart__cart-form .ajax-cart__cart-item',details:".ajax-cart__item-details",quantity:{wrapper:".ajax-cart__item-qty",input:"input.ajax-cart__qty-input",decrease:"button.ajax-cart__qty-control--down",increase:"button.ajax-cart__qty-control--up"},removeButton:""}},{theme_name:"evx-mysu-shopify",cart_item:{key:'form[action*="/cart"]#form-mini-cart .cart-item',details:".bls-minicart-product-info",quantity:{wrapper:"quantity-input",input:"input.bls-quantity-input",decrease:"button[name=minus]",increase:"button[name=plus]"},removeButton:"a.cart-remove"}},{theme_name:"Impulse",cart_item:{key:".slidecarthq div.items",details:"div.item",quantity:{wrapper:".quantity-selector",input:"input[value][type=text]",decrease:"button[aria-label=decrease quantity]",increase:"button[aria-label=increase quantity]"},removeButton:"a.remove.tpo"}},{theme_name:"Yuva",cart_item:{key:"div.yv_side_drawer_body .yv-side-drawer-container .cart-item-container .cart-items-wrapper div.media-link",details:"div.media-body",quantity:{wrapper:".cart-item-price div.cart-item-quantity.quantity",input:"input[type='number'].ajaxcart__qty-num",decrease:"button.ajaxcart__qty--minus.quantity-button",increase:"button.ajaxcart__qty--plus.quantity-button"},removeButton:"button.sd_mini_removeproduct"}},{theme_name:"Ascent",cart_item:{key:"div.yv_side_drawer_body .yv-side-drawer-container .cart-item-container .cart-items-wrapper div.media-link",details:"div.media-body",quantity:{wrapper:".cart-item-price div.cart-item-quantity.quantity",input:"input[type='number'].ajaxcart__qty-num",decrease:"button.ajaxcart__qty--minus.quantity-button",increase:"button.ajaxcart__qty--plus.quantity-button"},removeButton:"button.sd_mini_removeproduct"}},{theme_name:"Ubone",cart_item:{key:"form[action*='/cart']#ajaxcart-form .cart-item",details:".product-information",quantity:{wrapper:"qty-box.qty-box",input:"input.qty-box-input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"delpro-btn[id*=ajaxcart-remove] button"}},{theme_name:"The Party Hut Cheltenham V.4.1.0 (August)",cart_item:{key:"div.modal-component_body div.modal-component_content cart-item-row",details:"div.prod-holder",quantity:{wrapper:"div.quantity-holder quantity-input",input:"input.quantity__input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"button[type='button'].cart-item--remove"}},{theme_name:"Pesto",cart_item:{key:"form[action*='/cart']#CartDrawer-Form .cart-items .cart-item-group",details:".cart-item__info",quantity:{wrapper:".quantity-popover-container quantity-input",input:"input.quantity__input",decrease:"button.quantity__button[name='minus']",increase:"button.quantity__button[name='plus']"},removeButton:"cart-remove-button button.cart-remove-button"}},{theme_name:"Brooklyn",cart_item:{key:"form[action*='/cart'].cart.ajaxcart .ajaxcart__inner .ajaxcart__product",details:".ajaxcart__row .grid__item.three-quarters",quantity:{wrapper:".grid__item.one-half .ajaxcart__qty",input:"input.ajaxcart__qty-num",decrease:"button.ajaxcart__qty-adjust.ajaxcart__qty--minus",increase:"button.ajaxcart__qty-adjust.ajaxcart__qty--plus"},removeButton:""}},{theme_name:"Xclusive",cart_item:{key:"#cart .compact li.cover",details:"section ul",quantity:{wrapper:".semantic-input-initialized.input-amount-listening",input:"input[id*=qty]",decrease:"a.incr",increase:"a.decr"},removeButton:".remove.remove-from-cart-link"}},{theme_name:"Xclusive",cart_item:{key:"form.cart__form .cart__item",details:"div.flex-column.justify-content-center > div:not([class*=row])",quantity:{wrapper:".product-quantity",input:"input",decrease:"button",increase:"button"},removeButton:"a.js-cart-product-remove"}},];let cartForms=[{store_id:"57510330564",key:"section.cart-page.ajax-cart__page-wrapper"},{store_id:"83719422247",key:'section[id*="__main-cart"].cart-section'},{store_id:"58920206545",key:'div[id^="shopify-section-template"].section-main-cart'},{store_id:"63770525892",key:'div[id^="shopify-section-template"].hdt-section-main-cart'},{store_id:"76003541310",key:"main-cart[id^='MainCart-']"},{store_id:"73932832802",key:".cart-item-box cart-dynamic"},{store_id:"89484788027",key:".cart-form-wrapper[data-cart-form]"},{store_id:"",key:".cart-section:has(#AjaxCartForm)"},{store_id:"",key:'cart-items form[action*="/cart"]'},{store_id:"",key:"form#updateform"},{store_id:"64170688683",key:"cart-form#AjaxCartForm"},{store_id:"46560116894",key:"section.cart-template > .cart-template__container"},{store_id:"",key:"form#cartForm"},{store_id:"",key:"form.cart-form"},{store_id:"",key:'form[action*="/cart"]#cartform'},{store_id:"",key:'.page-content form[action="/cart"]'},{store_id:"",key:'[data-section-type="cart"]'},{store_id:"",key:'form[action*="/cart"]:not([action*="/cart/add"]):not([hidden])'},{store_id:"",key:".page-content.page-content--fluid"},{store_id:"",key:".cart-content-wrapper"},{store_id:"",key:'.cart-page .ajax-cart__form-wrapper form[action*="/cart"]'},{store_id:"",key:'form[action*="/cart"]'},{store_id:"",key:'.main__content-wrapper form[action*="/cart"]'},{store_id:"",key:'.wlm-content form[action*="/cart"]'},{store_id:"",key:"form#cart_form"},{store_id:"",key:"form#cartForm"},{store_id:"",key:".cart-drawer-content"},],cartLineItems=[{store_id:"",key:{key:'cart-items form[action*="/cart"] .cart-item',details:".cart-item__details",quantity:{wrapper:"quantity-input",input:"quantity-input input",decrease:'.quantity__button[name="minus"]',increase:'.quantity__button[name="plus"]'},removeButton:"cart-remove-button a"},theme_name:""},{store_id:"",key:{key:"form.cart-form tbody .cart-items__table-row",details:".cart-items__details",quantity:{wrapper:"quantity-selector-component",input:"input",decrease:".button.quantity-minus",increase:".button.quantity-plus"},removeButton:"button.cart-items__remove"},theme_name:""},{store_id:"",key:{key:'form[action*="/cart"] .cart-item',details:".cart__item-meta",quantity:{wrapper:".qty-container",input:"input.qty-input.cart__product-qty",decrease:"button.qty-minus",increase:"button.qty-plus"},removeButton:"a.cart__product-remove"},theme_name:"Debutify"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item',details:".cart-item__column.cart-item__description",quantity:{wrapper:".quantity",input:".quantity input",decrease:".notabutton.quantity-down",increase:".notabutton.quantity-up "},removeButton:"a.cart-item__remove"},theme_name:"Symmetry 6.0.3"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item',details:".cart-item__column.cart-item__description",quantity:{wrapper:".quantity",input:".quantity input",decrease:".notabutton.quantity-down",increase:".notabutton.quantity-up "},removeButton:"a.remove"},theme_name:"Symmetry"},{store_id:"",key:{key:'form[action*="/cart"] ul',details:".ajax-cart__item-details",quantity:{wrapper:".ajax-cart__item-quantity",input:".ajax-cart__item-quantity input",decrease:".ajax-cart__qty-control--down",increase:".ajax-cart__qty-control--up"},removeButton:"li.ajax-cart__item-remove--js"},theme_name:"Vantage"},{store_id:"",key:{key:'form[action*="/cart"] .CartItem',details:".CartItem__Info",quantity:{wrapper:".QuantitySelector",input:".QuantitySelector input",decrease:".QuantitySelector__Button",increase:".QuantitySelector__Button"},removeButton:".CartItem__Remove"},theme_name:"Pursuit, Prestige"},{store_id:"",key:{key:'form[action*="/cart"] .cart__item',details:".cart__info--text",quantity:{wrapper:".quantity--input",input:".quantity--input input",decrease:".quantity--input__button.quantity--input__incr",increase:".quantity--input__button.quantity--input__decr"},removeButton:".cart__trash.hide-mobile span"},theme_name:"Booster"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item',details:".cart-item-description",quantity:{wrapper:".quantity-adjuster",input:".quantity-adjuster input",decrease:'a[aria-label="Minus"]',increase:'a[aria-label="Plus"]'},removeButton:".cart-remove"},theme_name:"Expression"},{store_id:"",key:{key:'form[action*="/cart"] table tbody tr.cart__row',details:"td.text-left.cart-flex-item",quantity:{wrapper:".qtyField",input:".qtyField input",decrease:".qtyBtn.minus",increase:".qtyBtn.plus"},removeButton:".btn.remove"},theme_name:"Avone os 2.0"},{store_id:"",key:{key:'form[action*="/cart"] .t4s-page_cart__item',details:".t4s-page_cart__meta",quantity:{wrapper:".t4s-quantity-wrapper.t4s-quantity-cart-item",input:".t4s-quantity-wrapper.t4s-quantity-cart-item input",decrease:".t4s-quantity-selector.is--minus",increase:".t4s-quantity-selector.is--plus"},removeButton:".t4s-page_cart__remove"},theme_name:"Kalles"},{store_id:"",key:{key:'form[action*="/cart"] .cart_item',details:".mini_cart_body",quantity:{wrapper:".quantity",input:".quantity input",decrease:".quantity button.minus",increase:".quantity button.plus"},removeButton:".cart_ac_remove",editButton:".cart_ac_edit"},theme_name:"Kalles 2.7.1"},{store_id:"",key:{key:'form[action*="/cart"] div[data-products] .cart__item',details:".cart__item--details .cart__item--name",quantity:{wrapper:".cart__item--qty",input:".cart__item--qty input",decrease:".js-qty__adjust.js-qty__adjust--minus",increase:".js-qty__adjust.js-qty__adjust--plus"},removeButton:".js-qty__adjust.js-qty__adjust--minus"},theme_name:"Motion"},{store_id:"",key:{key:'form[action*="/cart"] table tbody tr',details:"tr td.cart-table-title",quantity:{wrapper:".quantity-controls",input:".quantity-controls input",decrease:".qty-minus",increase:".qty-plus"},removeButton:".cart-table-item-remove a"},theme_name:"Envy"},{store_id:"",key:{key:'form[action*="/cart"] .cart__item',details:".cart__item-details .cart__item-title",quantity:{wrapper:".js-qty__wrapper",input:".js-qty__wrapper input",decrease:".js-qty__adjust.js-qty__adjust--minus",increase:".js-qty__adjust.js-qty__adjust--plus"},removeButton:".cart__remove a"},theme_name:"Expanse"},{store_id:"",key:{key:'form[action*="/cart"] .cart__items .cart-item',details:".cart__items .cart-item .content",quantity:{wrapper:".actions",input:".actions input",decrease:"",increase:""},removeButton:".remove"},theme_name:"Kingdom"},{store_id:"",key:{key:".page-content.page-content--fluid table tbody tr.line-item",details:".line-item__info",quantity:{wrapper:".quantity-selector",input:".quantity-selector input",decrease:".quantity-selector__button",increase:".quantity-selector__button"},removeButton:".line-item__remove-button"},theme_name:"Focal"},{store_id:"",key:{key:".cart-content-wrapper .cart-item",details:".cart-item .cart-item-block-right",quantity:{wrapper:".cart-item-qty",input:".cart-item-qty input",decrease:".minus.btn-quantity",increase:".plus.btn-quantity"},removeButton:".cart-remove"},theme_name:"Ella"},{store_id:"",key:{key:'.cart-page .ajax-cart__form-wrapper form[action*="/cart"] .ajax-cart__cart-items ul.ajax-cart__cart-item',details:".cart-page .ajax-cart__form-wrapper .ajax-cart__cart-title__wrapper",quantity:{wrapper:".ajax-cart__item-quantity",input:".ajax-cart__item-quantity input",decrease:".ajax-cart__qty-control--down",increase:".ajax-cart__qty-control--up"},removeButton:".ajax-cart__item-remove"},theme_name:"Foodie"},{store_id:"",key:{key:'form[action*="/cart"] .m-cart--item',details:".sf-cart__item-product-info .sf-cart__item-product-details",quantity:{wrapper:"m-quantity-input",input:"m-quantity-input input",decrease:'.m-cart-quantity--button[name*="/minus"]',increase:'.m-cart-quantity--button[name*="/plus"]'},removeButton:".scd-item__remove"},theme_name:"Minimog - OS 2.0"},{store_id:"",key:{key:'form[action*="/cart"] table tbody tr',details:"table tbody tr .tt-title",quantity:{wrapper:".tt-input-counter.input-counter",input:".tt-input-counter.input-counter input",decrease:".minus-btn",increase:".plus-btn"},removeButton:"td .tt-btn-close"},theme_name:"Wokiee"},{store_id:"",key:{key:".cart-wrapper .line-item-table .line-item",details:".line-item-table .line-item .line-item__meta",quantity:{wrapper:".quantity-selector",input:".quantity-selector input",decrease:".quantity-selector__button",increase:".quantity-selector__button"},removeButton:".line-item__quantity-removes"},theme_name:"Warehouse"},{store_id:"",key:{key:'form[action*="/cart"] .cart__row:not(.cart__header-labels)',details:".cart__row .grid .grid__item.two-thirds",quantity:{wrapper:".js-qty",input:".js-qty input",decrease:".js-qty__adjust--minus",increase:".js-qty__adjust--plus"},removeButton:".cart__product-meta"},theme_name:"Brooklyn"},{store_id:"",key:{key:'form[action*="/cart"] .cart__item',details:".cart__item .cart__item-title",quantity:{wrapper:".js-qty__wrapper",input:".js-qty__wrapper input",decrease:".js-qty__adjust--minus",increase:".js-qty__adjust--plus"},removeButton:".cart__remove"},theme_name:"Impulse"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item',details:".cart-line-item-properties",quantity:{wrapper:".cart-item-quantity",input:"input.cart-item-quantity-display",decrease:".cart-item-decrease",increase:".cart-item-increase"},removeButton:"a.cart-item-remove"},theme_name:"Pacific"},{store_id:"",key:{key:'form[action*="/cart"] .sf-cart__item.scd-item',details:".sf-cart__item-product-details",quantity:{wrapper:".scd-item__qty",input:".scd-item__qty input",decrease:'.scd-item__btn[data-qty-change="dec"]',increase:'.scd-item__btn[data-qty-change="inc"]'},removeButton:".scd-item__remove"},theme_name:"Minimog - OS 2.0"},{store_id:"",key:{key:'form[action*="/cart"] ul.cart__row li',details:"ul.cart__row li section",quantity:{wrapper:".semantic-amount.last-child",input:".semantic-amount.last-child input",decrease:".incr",increase:".decr"},removeButton:".remove-from-cart-link"},theme_name:"Xtra"},{store_id:"",key:{key:'form[action*="/cart"] .apo-cart__item',details:".ecom-cart__product-infos",quantity:{wrapper:".ecom-cart__product-quantity-wrapper",input:"input.ecom-cart__product-quantity--input",decrease:".ecom-cart__product-quantity--button.ecom-quantity-minus",increase:".ecom-cart__product-quantity--button.ecom-quantity-plus"},removeButton:"a.ecom-cart__product-item-remove-button.desktop"},theme_name:""},{store_id:"",key:{key:'form[action*="/cart"] .ecom-cart__product-item',details:".ecom-cart__product-informations",quantity:{wrapper:".ecom-cart__product-quantity-wrapper",input:".ecom-cart__product-quantity-wrapper input",decrease:".ecom-cart__product-quantity--button.ecom-quantity-minus",increase:".ecom-cart__product-quantity--button.ecom-quantity-plus"},removeButton:".ecom-cart__product-item-remove-button.desktop"},theme_name:""},{store_id:"",key:{key:'form[action*="/cart"] section.cartitems--container ul li.cart-item',details:"li.cart-item .cart-item--content",quantity:{wrapper:".quantity-selector__wrapper",input:".quantity-selector__wrapper input",decrease:"div[data-button-wrapper-minus] button",increase:"div[data-button-wrapper-plus] button"},removeButton:".cart-item__remove a"},theme_name:"Empire"},{store_id:"",key:{key:'form[action*="/cart"] .cartTable .cartItemWrap .flexRow.noGutter',details:".productInfo",quantity:{wrapper:".velaQty",input:".velaQtyNum.velaQtyText ",decrease:".velaQtyAdjust.velaQtyButton.velaQtyMinus",increase:".velaQtyAdjust.velaQtyButton.velaQtyPlus"},removeButton:".cartRemove"},theme_name:"Ap Bedove"},{store_id:"",key:{key:'form[action*="/cart"] .cart__card.container.is-align-center',details:".cart__text",quantity:{wrapper:".quantity-wrapper",input:"input.quantity-input",decrease:".minus-control span.quantity-minus",increase:".plus-control span.quantity-minus"},removeButton:".cart__remove a"},theme_name:"Flex"},{store_id:"",key:{key:'form[action*="/cart"].cartForm .cartItemWrap .flexRow.noGutter',details:".productInfo",quantity:{wrapper:".velaQty",input:".velaQtyNum",decrease:".velaQtyMinus",increase:".velaQtyPlus"},removeButton:".cartRemove",editButton:".btnUpdateCart"},theme_name:"Gokwik"},{store_id:"",key:{key:'form[action*="/cart"] table tbody tr.cart__row',details:".cart__product-information .list-view-item__title",quantity:{wrapper:".cart__qty",input:".cart__qty input",decrease:"",increase:""},removeButton:".cart__remove a"},theme_name:"Debut"},{store_id:"",key:{key:'cart-items form[action*="/cart"] .cart-item',details:".cart-item__details",quantity:{wrapper:"quantity-input",input:"quantity-input .quantity__input",decrease:"",increase:""},removeButton:"cart-remove-button a"},theme_name:"Dawn 7.0.1"},{store_id:"",key:{key:'form[action*="/cart"].cart__contents .cart-items tr.cart-item',details:".cart-item__details",quantity:{wrapper:"quantity-input.quantity",input:"quantity-input .quantity__input",decrease:'.quantity__button[name="minus"]',increase:'.quantity__button[name="plus"]'},removeButton:"cart-remove-button a"},theme_name:"Be Yours"},{store_id:"",key:{key:'cart-items cart-item[class="#cart-item"]',details:'div[class="#cart-item-meta"]',quantity:{wrapper:'div[class*="#cart-item-qty-controls"]',input:'div[class*="#cart-item-qty-controls"] input',decrease:'div[class*="#cart-item-qty-controls"] button[data-dec]',increase:'div[class*="#cart-item-qty-controls"] button[data-inc]'},removeButton:'a[class*="#cart-item-remove"]'},theme_name:"Galleria"},{store_id:"",key:{key:'.cart__container.page__inner form[action*="/cart"] .cart__item',details:".cart__item-details",quantity:{wrapper:".cart__item-qty-selector",input:".cart__item-qty-selector input",decrease:".cart__item-qty-selector button.cart__item-button.cart__item-button--minus",increase:".cart__item-qty-selector button.cart__item-button.cart__item-button--plus"},removeButton:"a.cart-item__remove.btn.btn--text-link"},theme_name:"Spark 3.2.2"},{store_id:"",key:{key:'form[action*="/cart"].cart-form .cart__row',details:".o-layout > div.o-layout__item:first-child",quantity:{wrapper:".cart-item__qty .js-qty",input:"input.js-qty-input",decrease:"button.js-qty__adjust--minus",increase:"button.js-qty__adjust--plus"},removeButton:"a.cart-item__remove"},theme_name:"Venue"},{store_id:"",key:{key:'.content-wrapper form[action*="/cart"].ajax-cart__cart-form .ajax-cart__cart-item',details:".ajax-cart__item-details",quantity:{wrapper:".ajax-cart__item-quantity",input:"input.ajax-cart__qty-input",decrease:"button.ajax-cart__qty-control--down",increase:"button.ajax-cart__qty-control--up"},removeButton:"li.ajax-cart__item-remove"},theme_name:"Testament"},{store_id:"",key:{key:'form[action*="/cart"] .cartitems .cart-item',details:".cart-item--content",quantity:{wrapper:".form-field-select-wrapper",input:"select.form-field-input.form-field-select.form-field-filled",decrease:"",increase:""},removeButton:"a.cart-item--remove-link"},theme_name:"Empire"},{store_id:"",key:{key:'form[action*="/cart"]#cart .cart-form-item',details:".cart-form-item__price-title-variants",quantity:{wrapper:"product-quantity cart-product-quantity",input:".qty.qty-selector.product__quantity",decrease:".qty-button.qty-minus",increase:".qty-button.qty-plus"},removeButton:"a.remove"},theme_name:"Local"},{store_id:"",key:{key:'form[action*="/cart"] table.cart-table.responsive-table tbody tr.cart__row.responsive-table__row',details:"td.cart__table-cell--meta.text-center.large-up--text-left",quantity:{wrapper:"td.medium-up--text-right.cart__table-cell--quantity",input:"input.quantity-selector",decrease:"",increase:""},removeButton:"a.cart__remove"},theme_name:"Simple 12.5.1"},{store_id:"",key:{key:'form[action*="/cart"] table.cart-table.full.table--responsive tbody tr.cart__row.table__section',details:"td.cart__row--product-details",quantity:{wrapper:"td.text-center div.js-qty-wrapper div.js-qty",input:"input.js-qty__num",decrease:"button.js-qty__adjust--minus",increase:"button.js-qty__adjust--plus"},removeButton:"a.cart__remove"},theme_name:"Flow 35.0.1"},{store_id:"",key:{key:'form[action*="/cart"] .cart-template__item',details:".cart-template__details",quantity:{wrapper:".product-form__item.product-form__quantity",input:"input.product-form__input.product-form__input--quantity",decrease:".product-form__quantity-button.product-form__quantity-subtract-item",increase:".product-form__quantity-button.product-form__quantity-add-item"},removeButton:"a.bttn.bttn--secondary.bttn--small"},theme_name:"Lorenza"},{store_id:"",key:{key:'form[action*="/cart"].cart.form.cart--with-items .cart-item',details:".cart-item__details",quantity:{wrapper:".qty-input.qty-input--combined",input:"input.qty-input__input.input",decrease:".qty-input__btn.btn.btn--minus",increase:".qty-input__btn.btn.btn--plus"},removeButton:"a.cart-item__remove"},theme_name:"Enterprise"},{store_id:"",key:{key:"table.order-summary tbody.order-summary__body tr",details:"td line-item .line-item__info",quantity:{wrapper:"td.align-center.text-center.text-subdued line-item-quantity",input:"input.quantity-input",decrease:"",increase:""},removeButton:"td line-item-quantity .text-xs a"},theme_name:"Impact 4.7.1"},{store_id:"",key:{key:'form[action*="/cart"]#cartForm .cart-item',details:".cart-item__product .wb-break-word:not(.m-zero.subtext)",quantity:{wrapper:"sht-qty-inp.field_quantity",input:"input.js-quantity-input.input-number",decrease:".js-quantity-btn.js-quantity-btn-minus",increase:".js-quantity-btn.js-quantity-btn-plus"},removeButton:"sht-cart-rmv-btn a"},theme_name:"Electro 1.3.1"},{store_id:"",key:{key:'form[action*="/cart"].cart__form .cart__inner .cart__content .cart__items .cart__item',details:".cart__item__content .cart__item__content-inner",quantity:{wrapper:"quantity-counter .cart__quantity",input:"input.cart__quantity-field",decrease:"button.cart__quantity-minus",increase:"button.cart__quantity-plus"},removeButton:"a.cart__item__remove"},theme_name:"Broadcast 5.4.0"},{store_id:"",key:{key:'form[action*="/cart"] div[data-cart-items] div[class="#cart-item"]',details:'div[class="#cart-item-product"] div[class="#cart-item-product-info"]',quantity:{wrapper:'div[class="#cart-item-side"] div[class="#cart-item-quantity"] div[class*="#cart-item-quantity-controls"]',input:"cart-qty-input input",decrease:'cart-qty-button[class="#cart-item-quantity-controls-item"]',increase:'cart-qty-button[class="#cart-item-quantity-controls-item"]'},removeButton:'div[class="#cart-item-remove"] cart-qty-button a'},theme_name:"ShowTime 7.13.4"},{store_id:"",key:{key:'form[action*="/cart"] .cart__items .cart__item.cart__row',details:".cart__row-product .cart__row-content",quantity:{wrapper:".grid__item.medium-up--one-half .grid.grid--full.cart__row--table .grid__item.medium-up--one-third.text-center",input:"div input.cart__quantity",decrease:"",increase:""},removeButton:".grid__item.medium-up--one-third.text-center a.cart__remove"},theme_name:"Streamline 3.0.4"},{store_id:"",key:{key:'form[action*="/cart"] table.cart-items tbody tr.cart-item',details:"td.product-item .product-item-details",quantity:{wrapper:"td.quantity",input:'input[id*="updates"]',decrease:"",increase:""},removeButton:"td.product-item a.remove"},theme_name:"Grid 6.1.1"},{store_id:"",key:{key:'.main__content-wrapper form[action*="/cart"] .ajax-cart__cart-item',details:".ajax-cart__cart-variants",quantity:{wrapper:".ajax-cart__item-quantity",input:"input.ajax-cart__qty-input",decrease:".ajax-cart__qty-control--down",increase:".ajax-cart__qty-control--up"},removeButton:".ajax-cart__item-remove.js-cart-remove"},theme_name:"Mr Parker"},{store_id:"",key:{key:"interactive-cart#main-cart cart-item",details:"cart-item-details",quantity:{wrapper:"cart-item-quantity",input:"quantity-input input",decrease:"quantity-input button[minus]",increase:"quantity-input button[plus]"},removeButton:"a.cart-item__remove"},theme_name:"Venue"},{store_id:"",key:{key:'.cart__form form[action*="/cart"] .container .cart__item-list .cart__card.container',details:".cart__info .cart__description .cart__text",quantity:{wrapper:".cart__quantity .purchase-details__quantity.product-quantity-box .quantity-wrapper",input:".quantity-input-control input.quantity-input",decrease:".control.minus-control .quantity-minus.quantity-element",increase:".control.plus-control .quantity-plus.quantity-element"},removeButton:".cart__remove a.cart__remove-btn button.close"},theme_name:"Flex 2.0.3"},{store_id:"",key:{key:'form[action*="/cart"] .t4s-cartPage__items div[data-cart-item]',details:".t4s-page_cart__info",quantity:{wrapper:"",input:"",decrease:"",increase:""},removeButton:"a.t4s-page_cart__remove"},theme_name:"Fold Premium 2.1.0"},{store_id:"",key:{key:'form[action*="/cart"].cart-page table tbody tr',details:".line-item-info",quantity:{wrapper:"quantity-selector.quantity-selector",input:"input.quantity-selector__input",decrease:".quantity-selector__button",increase:".quantity-selector__button"},removeButton:"line-item-quantity a.link"},theme_name:"Prestige"},{store_id:"",key:{key:'form[action*="/cart"].cart table tbody tr',details:"td.cart__meta.cart-flex-item",quantity:{wrapper:"td.cart__update-wrapper",input:"input.cart__qty-input",decrease:"",increase:""},removeButton:".small--hide a.btn.cart__remove"},theme_name:"Debut 1.9.0"},{store_id:"",key:{key:'form[action*="/cart"] grid.item',details:"c.name",quantity:{wrapper:"c[span-s] > flex",input:"",decrease:"button.is-blank.plus",increase:"button.is-blank.minus"},removeButton:"c[span-s] > flex > c > button"},theme_name:"Bullet 2.4.6"},{store_id:"",key:{key:"c.entry grid.productsInCart",details:"c.name",quantity:{wrapper:"flex.controllers",input:"",decrease:"button.is-blank.plus",increase:"button.is-blank.minus"},removeButton:"button[rv-data-cart-remove]"},theme_name:"Bullet 2.4.6"},{store_id:"",key:{key:'form[action*="/cart"].cart__form .cart__form-item',details:".cart__form-item-info",quantity:{wrapper:".quantity-input",input:"input.quantity-input__input",decrease:"button.product__quantity-subtract-item",increase:"button.product__quantity-add-item"},removeButton:"button.cart__form-item-remove"},theme_name:"Stiletto 2.1.0"},{store_id:"",key:{key:'form[action*="/cart"] .responsive-table__row',details:"td.cart__cell--image + td",quantity:{wrapper:".js-qty",input:"input.js-qty__input",decrease:"button.js-qty__adjust.js-qty__adjust--minus",increase:"button.js-qty__adjust.js-qty__adjust--plus"},removeButton:"p a"},theme_name:"Venture 12.6.1"},{store_id:"",key:{key:'#MainContent form[action*="/cart"] .cart-item',details:".cart-item__details",quantity:{wrapper:"quantity-popover",input:"input.quantity__input",decrease:'button.quantity__button[name="minus"]',increase:'button.quantity__button[name="plus"]'},removeButton:"cart-remove-button a.button.button--tertiary"},theme_name:"Crave 11.0.0"},{store_id:"",key:{key:'form[action*="/cart"].quick-cart__form .quick-cart__item',details:".quick-cart__item-top",quantity:{wrapper:".quantity-input",input:"input.quantity-input__input",decrease:"button.product__quantity-subtract-item",increase:"button.product__quantity-add-item"},removeButton:"button.quick-cart__item-remove"},theme_name:"Stiletto 2.1.0"},{store_id:"",key:{key:'form[action*="/cart"]#mainCartForm .cart-details-item',details:".item-varient-title",quantity:{wrapper:".product-quantity-inner",input:"input.quantity-input",decrease:'button.quantity-button[title="Decrease"]',increase:'button.quantity-button[title="Increase"]'},removeButton:"a.cart-remove-link"},theme_name:"Starlite 3.1.1"},{store_id:"",key:{key:'form[action*="/cart"].cart > div > .cart__row--table-large',details:".grid__item.two-thirds",quantity:{wrapper:".grid__item.one-quarter.text-center",input:"input.cart__quantity-selector",decrease:"",increase:""},removeButton:"a.cart__remove"},theme_name:"Minimal 12.0.2"},{store_id:"",key:{key:'form[action*="/cart"] .cart__item.cart-item',details:".cart__item--name.cart-item--cell",quantity:{wrapper:".cart__item--qty",input:"input.js-qty__num",decrease:".js-qty__adjust--minus",increase:".js-qty__adjust--plus"},removeButton:".cart-item--remove"},theme_name:"Streamline 4.4.1"},{store_id:"",key:{key:'form[action*="/cart"] .cart__card',details:".cart__product-options",quantity:{wrapper:"",input:"",decrease:"",increase:""},removeButton:".cart__remove a"},theme_name:"Flex 5.1.10"},{store_id:"",key:{key:".cart-wrapper__inner-inner .line-item",details:".line-item__property-list",quantity:{wrapper:".line-item__quantity .quantity-selector",input:"input.quantity-selector__value",decrease:'button.quantity-selector__button[data-action="decrease-quantity"]',increase:'button.quantity-selector__button[data-action="increase-quantity"]'},removeButton:"a.line-item__quantity-remove"},theme_name:"Warehouse 4.2.1"},{store_id:"",key:{key:'form[action*="/cart"] .cart__row .cart__row--table-large',details:".large--three-fifths .grid__item.two-thirds",quantity:{wrapper:".grid__item.cart__pricing .grid__item.one-third",input:"input.cart__product-qty",decrease:"",increase:""},removeButton:".cart__product-meta a"},theme_name:"Brooklyn 17.7.1"},{store_id:"",key:{key:'#MainContent form[action*="/cart"] .cart__item',details:".cart__item-title",quantity:{wrapper:".cart__item-quantity",input:"input.js-qty__num",decrease:"button.js-qty__adjust.js-qty__adjust--minus",increase:"button.js-qty__adjust.js-qty__adjust--plus"},removeButton:".cart__item-remove a"},theme_name:"Expanse 5.1.0"},{store_id:"",key:{key:'form[action*="/cart"].cart-page tbody tr',details:".line-item-info",quantity:{wrapper:"quantity-selector",input:"input.quantity-selector__input",decrease:"a.quantity-selector__button",increase:"a.quantity-selector__button"},removeButton:"quantity-selector + a"},theme_name:"Prestige 9.2.1"},{store_id:"",key:{key:'form[action*="/cart"] .cart__item',details:".cart__item__info",quantity:{wrapper:".cart__item__quantity",input:"input.cart__item__quantity-field",decrease:"button.cart__item__quantity-minus",increase:"button.cart__item__quantity-plus"},removeButton:"a.cart__item__remove"},theme_name:"Palo Alto 5.4.1"},{store_id:"",key:{key:'form[action*="/cart"] .cart__row.apo-cart__item',details:".grid__item.three-quarters",quantity:{wrapper:".grid__item.one-third.text-center",input:"input.cart__product-qty",decrease:"",increase:""},removeButton:".cart__product-meta a.btn.btn--secondary"},theme_name:"Impulse 3.1.0"},{store_id:"",key:{key:'form[action*="/cart"].cart-contents .cart-item',details:".cart-item-details",quantity:{wrapper:".cart-item-quantity",input:"input.quantity-input-field",decrease:"button.quantity-input-button.quantity-input-minus",increase:"button.quantity-input-button.quantity-input-plus"},removeButton:"cart-remove-button a"},theme_name:"Athens 2.2.0"},{store_id:"",key:{key:'form[action*="/cart"] .cart__row.th_pb_cart_line',details:".grid__item.three-quarters",quantity:{wrapper:"",input:"",decrease:"",increase:""},removeButton:".grid__item.one-third.text-center a"},theme_name:"Impulse 1.3.1"},{store_id:"",key:{key:"form#cart_form .table-row",details:".column-2",quantity:{wrapper:"column-4",input:"input.t-center.num-product",decrease:"button.btn-num-product-down",increase:"button.btn-num-product-up"},removeButton:"button.remove"},theme_name:"Fashe 1.0.0"},{store_id:"",key:{key:'form[action*="/cart"] .cart__row > .cart__row--table-large',details:".grid__item.three-quarters",quantity:{wrapper:".grid__item.one-third.text-center",input:"input.cart__product-qty",decrease:"",increase:""},removeButton:".cart__product-meta a.btn.btn--secondary"},theme_name:"Impulse 3.1.0"},{store_id:"",key:{key:'form[action*="/cart"] #main-cart-items .cart-items .cart-item',details:"td.cart-item__details",quantity:{wrapper:"td.cart-item__quantity quantity-input.quantity",input:"input.quantity__input",decrease:'button.quantity__button[name="minus"]',increase:'button.quantity__button[name="plus"]'},removeButton:"cart-remove-button a.button.button--tertiary"},theme_name:"Charlotte 2022"},{store_id:"",key:{key:'form[action*="/cart"].scd__content .sf-cart__item',details:".sf-cart__item-product-info",quantity:{wrapper:".sf-cart__table-quantity",input:"input.scd-item__qty_input",decrease:'button.scd-item__btn[data-qty-change="dec"]',increase:'button.scd-item__btn[data-qty-change="inc"]'},removeButton:"button.scd-item__remove"},theme_name:"Lemon - OS 2.0"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item',details:".cart-item__details",quantity:{wrapper:".cart-item__quantity",input:"input.quantity__input",decrease:'button.quantity__button[name="minus"]',increase:'button.quantity__button[name="plus"]'},removeButton:"cart-remove-button a"},theme_name:"Velatheme"},{store_id:"",key:{key:'form[action*="/cart"] .apo-cart__item',details:".title_column",quantity:{wrapper:".purchase-details__quantity",input:"input.quantity",decrease:".product-minus",increase:".product-plus"},removeButton:".cart__itemTotalContainer a.remove"},theme_name:"Responsive"},{store_id:"",key:{key:'.cart-page form[action*="/cart"] .grid-wrapper:not(.title-list)',details:".cart-wrapper.item-info",quantity:{wrapper:".product-quantity-action",input:"input.qt",decrease:".dec.qtybutton",increase:".inc.qtybutton"},removeButton:".item-remove a"},theme_name:"Spront"},{store_id:"",key:{key:'form[action*="/cart"]#cartForm .cart-item',details:".cart-item__product > .wb-break-word",quantity:{wrapper:".cart-item__quantity",input:"input.js-quantity-input",decrease:".js-quantity-btn-minus",increase:".js-quantity-btn-plus"},removeButton:"sht-cart-rmv-btn a"},theme_name:"Shine"},{store_id:"",key:{key:'form[action*="/cart"] .cart__item',details:".cart_content_info.cart__item--content",quantity:{wrapper:".product-quantity-box",input:"input.quantity",decrease:"span.product-minus",increase:"span.product-plus"},removeButton:"a.cart__remove-btn"},theme_name:""},{store_id:"",key:{key:'form[action*="/cart"] .item.clearfix',details:".desc",quantity:{wrapper:".quantity",input:"input.select-on-focus",decrease:"a.minus",increase:"a.plus"},removeButton:"a.remove"},theme_name:"Showcase"},{store_id:"",key:{key:".cart-content-item[data-cart-content] .cart-item",details:".cart-item-properties",quantity:{wrapper:"cart-update-quantity",input:"input.cart-item-qty-input",decrease:"a.minus.btn-quantity",increase:"a.plus.btn-quantity"},removeButton:"a.cart-remove"},theme_name:"People Village"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item',details:".cart-item-properties",quantity:{wrapper:".cart-table-columns__quantity",input:"input.styled-text-field",decrease:"",increase:""},removeButton:"a.cart-item__remove"},theme_name:"Editions"},{store_id:"",key:{key:'form[action*="/cart"].cart__contents .cart__item',details:".cart__product-details",quantity:{wrapper:"quantity-input",input:"input.quantity__input",decrease:"button.qtyminus",increase:"button.qtyplus"},removeButton:"cart-remove-button a"},theme_name:"Honey"},{store_id:"",key:{key:'form[action*="/cart"].t4s-cartPage__form .t4s-page_cart__item',details:".t4s-page_cart__info",quantity:{wrapper:".t4s-quantity-wrapper.t4s-quantity-cart-item",input:"input.t4s-quantity-input",decrease:"button.t4s-quantity-selector.is--minus",increase:"button.t4s-quantity-selector.is--plus"},removeButton:"a.t4s-page_cart__remove"},theme_name:"Gecko"},{store_id:"",key:{key:'form[action*="/cart"].cart-items__form .cart-item',details:".cart-item__details",quantity:{wrapper:".cart-item__quantity",input:"input.quantity__input",decrease:'button.quantity__button[name="minus"]',increase:'button.quantity__button[name="plus"]'},removeButton:"a.js-cart-item-remove"},theme_name:"Gain"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item-container',details:"div.description",quantity:{wrapper:".quantity__change",input:"input.quantity__number",decrease:"a.quantity__minus",increase:"a.quantity__plus"},removeButton:"a.quantity__remove"},theme_name:"Boost"},{store_id:"",key:{key:'form[action*="/cart"] .template__cart__body .cart__items .cart__items__row',details:".cart__items__title",quantity:{wrapper:".cart__items__quantity .quantity__wrapper",input:"input.quantity__input",decrease:"button.quantity__button.quantity__button--minus",increase:"button.quantity__button.quantity__button--plus"},removeButton:".cart__remove.badge"},theme_name:"Pipeline 6.2.2"},{store_id:"",key:{key:".cart .cart-order .cart-order__summary > table tbody.order-summary__body tr",details:"td line-item.line-item .line-item__info",quantity:{wrapper:"line-item-quantity",input:"input.quantity-input-fake",decrease:"",increase:""},removeButton:"line-item-quantity span a.link"},theme_name:"Packqueen"},{store_id:"",key:{key:'form[action="/cart"] #main-cart-items table.f-cart-items tbody tr',details:"td.f-cart-item__details",quantity:{wrapper:"quantity-input.f-quantity",input:"input.f-quantity__input",decrease:"button[name=minus]",increase:"button[name=plus]"},removeButton:""},theme_name:"Zest"},{store_id:"",key:{key:'form[action="/cart"] .f-cart-item',details:".f-cart-drawer__product-info",quantity:{wrapper:"quantity-input.f-quantity",input:"input.f-quantity__input",decrease:"button[name=minus]",increase:"button[name=plus]"},removeButton:"button.f-cart-drawer__remove"},theme_name:"Zest1"},{store_id:"",key:{key:"form[action='/cart'] tbody tr[id^='CartItem-']",details:"div.items-start",quantity:{wrapper:"qty-selector",input:"qty-selector input.hide-input-arrows",decrease:"button[data-dec]",increase:"button[data-inc]"},removeButton:"a[data-button-remove]"},theme_name:"Essence"},{store_id:"",key:{key:'form[action*="/cart"] div.m-cart-item',details:".m-cart__column.m-cart__column--product .m-cart-item__product .m-cart-item__info",quantity:{wrapper:"m-quantity-input.m-quantity",input:"input.m-quantity__input",decrease:"button.m-quantity__button[name='minus']",increase:"button.m-quantity__button[name='plus']"},removeButton:"m-cart-remove-button .m-cart-item__remove"},theme_name:"Minimog - OS 2.0 v4.1.0"},{store_id:"",key:{key:'form[action*="/cart"] div[data-js-product]',details:"div > div:has(.js-product-button-remove-from-cart) > div > div",quantity:{wrapper:"",input:"input[name='updates[]'].js-input-quantity-cart",decrease:"",increase:""},removeButton:"a.js-product-button-remove-from-cart"},theme_name:"Shella 6.3.0"},{store_id:"",key:{key:'form[action*="/cart"] tr.cart__row',details:".apo-item-details",quantity:{wrapper:".apo-qty",input:"input.apo-qty-input",decrease:"button.sub",increase:"button.add"},removeButton:"a.cart__remove"},theme_name:"Prestige"},{store_id:"",key:{key:"interactive-cart cart-full cart-items cart-item",details:"cart-item-properties",quantity:{wrapper:"quantity-input",input:"input[form=main-cart]",decrease:"button[aria-label*=Reduce]",increase:"button[aria-label*=Increase]"},removeButton:"a.cart-item__remove"},theme_name:"Creative"},{store_id:"",key:{key:"cart-dynamic > div:has(.product-option)",details:"div > div:has(.apo-item-details)",quantity:{wrapper:"quantity-input",input:"span[data-quantity-display]",decrease:"button[aria-label='minus']",increase:"button[aria-label='plus']"},removeButton:"button[aria-label='delete']"},theme_name:"Aisle Theme"},{store_id:"",key:{key:'form[action*="/cart"].cart__form .cart-item',details:".cart-item__details",quantity:{wrapper:"cart-quantity",input:"input.quantity__input",decrease:"button[name='plus']",increase:"button[name='minus']"},removeButton:"a[is='cart-remove-button']"},theme_name:"Concept"},{store_id:"",key:{key:"form[action*=\"/cart\"] tbody[id='CartProducts'] tr.cart__row",details:"td.cart__cell--image + td",quantity:{wrapper:".cart__cell--quantity",input:"input.js-qty__input",decrease:"button.js-qty__adjust--minus",increase:"button.js-qty__adjust--plus"},removeButton:"td.cart__cell--image + td a.small"},theme_name:"Passo Bosco 4.0.0"},{store_id:"",key:{key:'form[action*="/cart"] table.cart-table tbody tr',details:"td[data-label='Product'] > div > div:last-child",quantity:{wrapper:"td[data-quantity] > div",input:"input[name='updates[]']",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"a[href^='/cart/change']"},theme_name:"Label 3.6.1"},{store_id:"",key:{key:'form[action*="/cart"] table.cart-items tbody tr.cart-item',details:"td.cart__meta.cart-flex-item",quantity:{wrapper:"td.cart__update-wrapper.product-quantity quantity-input",input:"input.quantity__input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"a[href^='/cart/change']"},theme_name:"Dawn 2.5.0"},{store_id:"",key:{key:'form[action*="/cart"] .su-cart-item',details:".su-cart-item-description",quantity:{wrapper:".su-cart-qty",input:"input.sc-cart-quantity",decrease:"a[data-action='click->lineitem#_minus']",increase:"a[data-action='click->lineitem#_plus']"},removeButton:"a.su-cart-item-action-item"},theme_name:"Spark"},{store_id:"",key:{key:'form[action*="/cart"] .m-cart--item',details:".sf-cart__item-product-details",quantity:{wrapper:"m-quantity-input",input:"input.m-cart-quantity--input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"m-cart-remove-button"},theme_name:"Minimog - OS 2.0"},{store_id:"",key:{key:'form[action*="/cart"] .cart-item-list div[data-merge-cache]',details:".cart-item__column.cart-item__description",quantity:{wrapper:".cart-item__column.cart-item__quantity .quantity.buttoned-input",input:"input.cart-item__quantity-input",decrease:"a.quantity-down",increase:"a.quantity-up"},removeButton:"a.cart-item__remove"},theme_name:"Symmetry 7.3.0"},{store_id:"",key:{key:'form[action*="/cart"] .cart-table tbody tr',details:"td.cart__row--product-details",quantity:{wrapper:".js-qty-wrapper",input:"input.js-qty__num",decrease:"button.js-qty__adjust.js-qty__adjust--minus",increase:"button.js-qty__adjust.js-qty__adjust--plus"},removeButton:"a.cart__remove"},theme_name:"Flow"},{store_id:"",key:{key:'form[action*="/cart"].cart-form.wrapper-cart-template .cart_items ul.cart-list li.cart-product-item',details:".details .cart--info",quantity:{wrapper:".qty-group",input:"input.update-cart--template",decrease:"",increase:""},removeButton:"a.remove.remove-mobile"},theme_name:"Ella 5.1.0"},{store_id:"",key:{key:'form[action*="/cart"] .cart__items .cart__items__row:not(div[docapp-data-cart-item])',details:".cart__items__title",quantity:{wrapper:".quantity__wrapper",input:"input.quantity__input",decrease:".quantity__button.quantity__button--minus",increase:".quantity__button.quantity__button--plus"},removeButton:"a.cart__items__remove"},theme_name:"Pipeline"},{store_id:"",key:{key:'form[action*="/cart"] table.cart-items tbody > tr',details:"td.product-name .product-cart-item > div:not(.product-cart-item-image)",quantity:{wrapper:"quantity-selector.quantity",input:"input.qty",decrease:"button.minus",increase:"button.plus"},removeButton:"a.remove.cart-remove-mobile"},theme_name:"Vision"},{store_id:"",key:{key:'form[action*="/cart"].cart__form .cart__form-items > .cart__form-item',details:".cart__form-item-details .cart__form-item-info-wrapper .cart__form-item-info",quantity:{wrapper:".quantity-input",input:"input.quantity-input__input",decrease:"button.quantity-input__button.product__quantity-subtract-item",increase:"button.quantity-input__button.product__quantity-add-item"},removeButton:"button.cart__form-item-remove"},theme_name:"Stiletto"},{store_id:"",key:{key:'#shopping-cart form[action*="/cart"].ajax-cart__cart-form .ajax-cart__cart-item',details:".ajax-cart__item-details",quantity:{wrapper:".ajax-cart__item-quantity",input:"input.ajax-cart__qty-input",decrease:"button[data-ajax-qty-decrease]",increase:"button[data-ajax-qty-increase]"},removeButton:".ajax-cart__item-remove--js.js-cart-remove"},theme_name:"Vantage"},{store_id:"",key:{key:'form[action*="/cart"].cart__form .cart__form-main-content .cart__form-items .cart__form-item',details:".cart__form-item-details .cart__form-item-info",quantity:{wrapper:".quantity-input-wrapper .quantity-input",input:"input[data-quantity-input].quantity-input__input",decrease:"button[data-subtract-quantity].quantity-input__button",increase:"button[data-add-quantity].quantity-input__button"},removeButton:"button[data-remove-item].cart__form-item-remove"},theme_name:"Cornerstone"},{store_id:"",key:{key:'form[action*="/cart"]#cart .cart-form__items .cart-form-item',details:".cart-form-item__price-title-variants",quantity:{wrapper:"product-quantity cart-product-quantity",input:"input.qty.qty-selector.product__quantity",decrease:"button.qty-button.qty-minus",increase:"button.qty-button.qty-plus"},removeButton:"a.remove"},theme_name:"Combine-Cooee5Sep2024-Rev2-DO NOT EDIT!!!"},{store_id:"",key:{key:'form[action*="/cart"].cart__form .cart-item',details:".cart-item__product--info",quantity:{wrapper:"cart-quantity",input:"input.quantity__input",decrease:"button.quantity__button[name=minus]",increase:"button.quantity__button[name=plus]"},removeButton:"a[is=cart-remove-item]"},theme_name:"Sleek"},{store_id:"",key:{key:"#cart .product-list .product-item",details:".row > div:nth-child(2)",quantity:{wrapper:".quantity-wrapper",input:"input.form-control",decrease:"button.btn[data-mode='minus']",increase:"button.btn[data-mode='plus']"},removeButton:"button.btn[data-remove-line-item]"},theme_name:"theme-export-carexonn-com-theme-export-carexon 1"},{store_id:"",key:{key:"form[action='/cart']#cartform ul.cart-list li.item.clearfix",details:".col-notimage .desc",quantity:{wrapper:".quantity-and-remove .quantity",input:"input.select-on-focus[aria-label='Quantity']",decrease:"a.minus[aria-label='Decrease']",increase:"a.plus[aria-label='Increase']"},removeButton:"a.remove"},theme_name:"Showcase | 06.05.2024"},{store_id:"",key:{key:"#cart .product-list .product-item",details:".row > div:nth-child(2)",quantity:{wrapper:".quantity-wrapper",input:"input.form-control",decrease:"button.btn[data-mode='minus']",increase:"button.btn[data-mode='plus']"},removeButton:"button.btn[data-remove-line-item]"},theme_name:"theme-export-carexonn-com-theme-export-carexon"},{store_id:"",key:{key:".hdt-table-page-cart tbody tr.hdt-cart-item",details:"td.hdt-cart-item__product .hdt-page-cart__info",quantity:{wrapper:"td.hdt-cart-item__quantity",input:"td.hdt-cart-item__quantity input.quantity__input",decrease:"td.hdt-cart-item__quantity button.hdt-quantity__button.is--minus",increase:"td.hdt-cart-item__quantity button.hdt-quantity__button.is--plus"},removeButton:"td.hdt-cart-item__product wrapp-remove-item-oncart"},theme_name:"Ecomus"},{store_id:"",key:{key:"form[action='/cart'] .cart-item",details:".product-option-property",quantity:{wrapper:"quantity-input",input:"input.quantity-input",decrease:"button.quantity__button[name=minus]",increase:"button.quantity__button[name=plus]"},removeButton:"cart-remove-button a"},theme_name:"Glozin"},{store_id:"",key:{key:"form[action='/cart'] .cart__items div[data-product-cart-line]",details:".cart__image  + div",quantity:{wrapper:"div div.test",input:"input[type='number']",decrease:"",increase:""},removeButton:"a.js-product-button-remove-from-cart"},theme_name:"Shopflo X Swatantra"},{store_id:"",key:{key:'cart-items form[action*="/cart"] .cart-item',details:".cart-item__details",quantity:{wrapper:".cart-item__quantity .quantity-popover-container",input:"",decrease:"",increase:""},removeButton:"cart-remove-button a"},theme_name:""},{store_id:"",key:{key:'.thb-cart-form form[action*="/cart"] .cart-items tr[id*=CartItem]',details:".product-cart-item-image + div",quantity:{wrapper:"quantity-selector",input:"input",decrease:"button.minus",increase:"button.plus"},removeButton:"a.remove"},theme_name:"Reformation"},{store_id:"",key:{key:'.page-cart form[action*="/cart"] .cart_item',details:".product-name-thumb",quantity:{wrapper:"js-qty",input:"input.js-qty__num",decrease:"button.qty_minus",increase:"button.qty_plus"},removeButton:"a.remove"},theme_name:"Soapic"},{store_id:"",key:{key:"div.shopping-cart .cart-content_inner",details:".products-cart",quantity:{wrapper:".product-quantity .quantity__main",input:"div.quantity_num input",decrease:"button[name='minus'].quantity__decrease",increase:"button[name='plus'].quantity__increase"},removeButton:"div.product-removal button.remove-product"},theme_name:"Official site"},{store_id:"",key:{key:'form[action*="/cart"].cart .cart__row ',details:"div.cart__row--table-large",quantity:{wrapper:"div.medium-up--two-fifths .cart__row--table-large",input:"input[type='number'].cart__product-qty",decrease:"",increase:""},removeButton:"div.medium-up--three-fifths .three-quarters p.cart__product-meta a.btn"},theme_name:"twistedimagetransfers-optimised"},{store_id:"",key:{key:'form[action*="/cart"] .cart-form-item',details:".cart-form-item__price-title-variants",quantity:{wrapper:".cart-product-quantity",input:"input.qty-selector",decrease:"button.qty-button.qty-minu",increase:"button.qty-button.qty-plus"},removeButton:"a.remove"},theme_name:"Combine"},{store_id:"",key:{key:'.cart-page form[action*="/cart"] .ajax-cart__cart-item',details:".ajax-cart__item-details",quantity:{wrapper:".ajax-cart__item-quantity",input:"input.ajax-cart__qty-input",decrease:"button[data-ajax-qty-decrease]",increase:"button[data-ajax-qty-increase]"},removeButton:"a[href*='/cart'][data-role='product-remove']"},theme_name:"Fashionopolism"},{store_id:"",key:{key:'#section-cart form[action*="/cart"] .cart-items .cart-item',details:".content",quantity:{wrapper:".actions",input:".actions input.qty",decrease:"",increase:""},removeButton:".actions a.remove"},theme_name:"Split"},{store_id:"",key:{key:'form[action*="/cart"].cart__contents .cart-item',details:".cart-item__details",quantity:{wrapper:"quantity-input",input:"input.quantity__input",decrease:"button.quantity__button[name=minus]",increase:"button.quantity__button[name=plus]"},removeButton:"a.cart-remove"},theme_name:"evx-mysu-shopify"},{store_id:"",key:{key:"form[data-cart-form].cart__form .cart__inner cart-items.cart__items .cart__item",details:".cart__item__content .cart__item__content-inner",quantity:{wrapper:".cart__item__content quantity-counter.cart__quantity-counter .cart__quantity",input:"input.cart__quantity-field[type='number']",decrease:"button.cart__quantity-minus[name='decrease']",increase:"button.cart__quantity-plus[name='increase']"},removeButton:"quantity-counter.cart__quantity-counter a.cart__item__remove"},theme_name:"Flourish"},{store_id:"",key:{key:"form[action*='cart'].cart table.cart-table tbody tr.cart__row",details:"td.pop span.apo-item-details",quantity:{wrapper:"td.uop div.apo-qty",input:"input.apo-qty-input[type='text']",decrease:"button.sub[type='button']",increase:"button.add[type='button']"},removeButton:""},theme_name:"7 11 Aug 2024"},{store_id:"",key:{key:"form[action*='cart'] .cart__items__row",details:".cart__items__title",quantity:{wrapper:".cart__items__quantity",input:"input.quantity__input",decrease:"button.quantity__button--minus",increase:"button.quantity__button--plus"},removeButton:"a.cart__items__remove"},theme_name:"Story"},{store_id:"",key:{key:"form[action*='/cart'] div.yv-cart-content-box table.yv-cart-table tbody[data-cart-items] tr",details:"td.cart-prd-details",quantity:{wrapper:"td.cart-quantity div.cart-item-quantity",input:"input[data-line-quantity][type='number']",decrease:"button.quantity-down[type='button']",increase:"button.quantity-up[type='button']"},removeButton:"td.cart-remove a[href*='/cart'].remove-icon"},theme_name:"Human After All | Changes"},{store_id:"",key:{key:"form[action*='/cart'].cart-form .cart-items-list table tbody tr",details:"td.cart-item-details",quantity:{wrapper:"quantity-input.cart-quantity.quantity",input:"input.quantity-input",decrease:"button.quantity-button[name='minus']",increase:"button.quantity-button[name='plus']"},removeButton:"cart-remove button.cart-remove-button"},theme_name:"Ascent"},{store_id:"",key:{key:"form[action*='/cart'] .cart-item[id*=cartpro]",details:".item-info",quantity:{wrapper:"qty-box.qty-box",input:"input.qty-box-input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"a.remove-product"},theme_name:"Ubone"},{store_id:"",key:{key:"form[action*='/cart'] .ajax-cart__cart-item",details:".item-info",quantity:{wrapper:"qty-box.qty-box",input:"input.qty-box-input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"a.remove-product"},theme_name:"Ubone"},{store_id:"",key:{key:"form[action*='/cart'][data-checkout-form] div.main-cart_items-wrap div.main-cart_items-list cart-item-row.cart-item-row",details:".main-cart_col--title div.mcil_description",quantity:{wrapper:".main-cart_col--quantity .qty-rm-wrap quantity-input.quantity",input:"input[type='number'].quantity__input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"button[type='button'].cart-item--remove"},theme_name:"The Party Hut Cheltenham V.4.1.0 (August)"},{store_id:"",key:{key:"form[action*='/cart'] .cart-item",details:".product-option-property",quantity:{wrapper:".cart-item__quantity",input:"input.quantity__input",decrease:"button.quantity__button[name='minus']",increase:"button.quantity__button[name='plus']"},removeButton:"cart-remove-button a"},theme_name:"Umino"},{store_id:"",key:{key:"form[action*='/cart'].cart .cart__row:not(.cart__header-labels)",details:".grid__item .grid__item.two-thirds",quantity:{wrapper:"div.js-qty",input:"input.js-qty__num",decrease:"button.js-qty__adjust.js-qty__adjust--minus",increase:"button.js-qty__adjust.js-qty__adjust--plus"},removeButton:""},theme_name:"Brooklyn"},{store_id:"",key:{key:"form[action*='/cart'].cart__contents table.cart-items tbody tr",details:"td.cart-item__details",quantity:{wrapper:"div.cart-item__quantity-wrapper quantity-input",input:"input.quantity__input",decrease:"button.quantity__button[name='minus']",increase:"button.quantity__button[name='plus']"},removeButton:"cart-remove-button > a"},theme_name:"SOFTSPOT"},{store_id:"",key:{key:"form[action*='/cart'].cart .cart__row:not(.cart__header-labels)",details:".grid__item .grid__item.two-thirds",quantity:{wrapper:"div.js-qty",input:"input.js-qty__num",decrease:"button.js-qty__adjust.js-qty__adjust--minus",increase:"button.js-qty__adjust.js-qty__adjust--plus"},removeButton:""},theme_name:"Brooklyn"},{store_id:"",key:{key:"form[action*='/cart'].ajax-cart__cart-form .ajax-cart__cart-items ul.ajax-cart__cart-item",details:"li.ajax-cart__item-details",quantity:{wrapper:"div.ajax-cart__item-quantity",input:"input[data-item-qty]",decrease:"button[data-ajax-qty-decrease]",increase:"button[data-ajax-qty-increase]"},removeButton:"li.ajax-cart__item-remove"},theme_name:"Forge"},{store_id:"",key:{key:"form#cart table.cart-table tbody tr",details:"td[data-label='Prodotto']",quantity:{wrapper:"td[data-quantity]",input:"input[name='updates[]']",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"a[href*='cart/change']"},theme_name:"Label"},{store_id:"",key:{key:"form#cartform ul.cart-contents li[data-hulkapps-lineitem]",details:"div.cart-col2",quantity:{wrapper:"div.cart-col4",input:"input[name='updates[]']",decrease:"",increase:""},removeButton:"div.cart-col6 a.cart-remove-line"},theme_name:"adPOP"},{store_id:"",key:{key:"form[action*='/cart'] article li.cover",details:"section .form-group",quantity:{wrapper:".semantic-input-initialized.input-amount-listening",input:"input[id*=qty]",decrease:"a.incr",increase:"a.decr"},removeButton:".remove-from-cart-link.remove"},theme_name:"Xclusive"},{store_id:"",key:{key:".t4s-main-cart .t4s-cartPage__form .t4s-cartPage__items .t4s-page_cart__item",details:".t4s-page_cart__info",quantity:{wrapper:".t4s-quantity-cart-item",input:"input.t4s-quantity-input",decrease:"button.t4s-quantity-selector.is--minus",increase:"button.t4s-quantity-selector is--plus"},removeButton:"a.t4s-page_cart__remove"},theme_name:"Gecko"},{store_id:"",key:{key:"form.Cart .CartItem",details:".CartItem__MainInfo .CartItem__Info",quantity:{wrapper:".CartItem__QuantitySelector",input:"input",decrease:".QuantitySelector__Button",increase:".QuantitySelector__Button"},removeButton:".CartItem__RemoveWrapper a"},theme_name:""},{store_id:"",key:{key:"form.cart__form .cart__item",details:"div.flex-column.justify-content-center > div:not([class*=row])",quantity:{wrapper:".product-quantity",input:"input",decrease:"button",increase:"button"},removeButton:"a.js-cart-product-remove"},theme_name:""},];window.ap_front_settings?.shop_id==="78803271973"&&(cartLineItems=[{store_id:"",key:{key:'form[action*="/cart"] .m-cart--item',details:".sf-cart__item-product-details",quantity:{wrapper:"m-quantity-input",input:"input.m-cart-quantity--input",decrease:"button[name='minus']",increase:"button[name='plus']"},removeButton:"m-cart-remove-button"},theme_name:""},],AvisOptionsConfig.mini_carts=[{theme_name:"",cart_item:{key:'form[action*="/cart"]#cart-drawer-form .m-cart-drawer--item',details:".scd-item__info",quantity:{wrapper:".m-quantity-input",input:"input.m-cart-quantity--input",decrease:"button.m-cart-quantity--button[name=minus]",increase:"button.m-cart-quantity--button[name=plus]"},removeButton:"m-cart-remove-button"}},]);

let cartFormByStoreId = cartForms.map(({ key }) => key);
  let cartLineItemByStoreId = cartLineItems;
  AvisOptionsConfig.them_key={cart:{page:{form:cartFormByStoreId,lineitem:cartLineItemByStoreId},drawer:{form:cartFormByStoreId,lineitem:cartLineItemByStoreId}}};
  
  let customizeryConfig = window.ap_front_settings?.config?.config_app ?? {};
  let editOptions = AvisOptionsConfig["show_edit_options"] ?? false;
  var apo_money_format = window.ap_front_settings?.money_format ?? "${{amount}}";
  
  const classEditOption = "avis-edit-options";
  const classEditOptionForSelected = "avis-options-selected";
  var initAvisCart = {
    handleCartEditPopup: async function (cartItem, cartInfo, previewOptions, e) {
      window.isAvisOptionsSelectedCartEvent = previewOptions;
      e.preventDefault();
  
      let avisCartOptionPopupClass = "avis-cartOptionsPopup";
      let avisCartOptionBackdropClass = "avis-cartOptionsBackdrop";
  
      const o = e.target;
      AvisOptionsData?.priceMod?.addLoadingAddCart(o);
      const i = () => {
        let t = document.querySelector(`.${avisCartOptionPopupClass}`),
          e = document.querySelector(`.${avisCartOptionBackdropClass}`);
        t && t.remove(), e && e.remove();
      };
      i();
      const a = () => {
        const e = window.ap_front_settings.config.config_app[
          "text_cancel_edit_options_cart"
        ]
          ? window.ap_front_settings.config.config_app[
          "text_cancel_edit_options_cart"
          ]
          : "Cancel",
          o = window.ap_front_settings.config.config_app[
            "text_save_changes_edit_options_cart"
          ]
            ? window.ap_front_settings.config.config_app[
            "text_save_changes_edit_options_cart"
            ]
            : "Save Changes";
        let n = document.createElement("div");
        return (
          n.classList.add(avisCartOptionPopupClass),
          n.setAttribute("style", "display:none!important"),
          (n.innerHTML = `<div class="avis-popupBox">\n        <form method="post" data-action="/cart/add" enctype="multipart/form-data" class="avis-cart-popup-form" data-avis-cart-popup-form>\n          <div class="avis-popupHeader">\n            <span class="avis-popupHeader-title">${cartItem.title}</span>\n            <span class="avis-popupHeader-close">&times;</span>\n          </div>\n          <div class="avis-popupBody">\n            <input type="hidden" name="id" value="${cartItem.id}">\n            <input type="hidden" name="cartitem-final-price" value="${cartItem.final_price}">\n            <div class="avis-product-variants"></div>\n          </div>\n          <div class="avis-popupFooter">\n            <button class="avis-popupFooter-cancel">\n              <span>${e}</span>\n            </button>\n            <button class="avis-popupFooter-submit" data-avis-product-atc>\n              <span>${o}</span>\n            </button>\n          </div>\n        </form>\n      </div>`),
          n
        );
      },
        p = () => {
          let t = document.createElement("div");
          return (
            t.classList.add(avisCartOptionBackdropClass),
            t.setAttribute("style", "display:none!important"),
            t.addEventListener("click", i.bind(this)),
            t
          );
        };
      let productInfo = await AvisOptionsData.pluginAction.getProduct(
        cartItem.handle
      );
      if (productInfo) {
        let optionSets = [ "88420122940","68940923061" ].includes(shopIdApo) ? await getOptionSetSearch(cartItem.handle) : null;
        let e = a(),
          r = p();
        document.body.appendChild(e),
          document.body.appendChild(r),
          e
            .querySelectorAll(
              ".avis-popupHeader-close, .avis-popupFooter-cancel"
            )
            .forEach((t) => t.addEventListener("click", i.bind(this)));
        AvisOptionsData.priceMod.isEditOptionCart = true;
        let buttonSubmit = e.querySelector(".avis-popupFooter-submit");
        buttonSubmit.setAttribute("product-id", `${productInfo.id}_cart`);
        buttonSubmit.addEventListener(
          "click",
          AvisOptionsData.submitEditOption
        );
        let s = getElementByKeys("[data-avis-cart-popup-form]", "quickview");
        if (s) {
          console.log("RenderOption");
          AvisOptionsData.priceMod.cartItemEdit = cartItem;
          if (cartInfo) AvisOptionsData.priceMod.cartCurrent = cartInfo;
          AvisOptionsData.mainCheckAllRules(
            productInfo,
            `${productInfo.id}_cart`,
            true,
            document.querySelector(".avis-popupBox .avis-popupBody"),
            optionSets
          );
          AvisOptionsData.priceMod.removeLoadingAddCart(o);
          e.setAttribute("style", "display:flex!important");
          r.setAttribute("style", "display:block!important");
        }
      }
    }
  };
  window.AvisOptionsConfig["handle_cart_edit"] = initAvisCart;
  var checkPosition = (t) => {
    return t.offsetWidth > 0 || t.offsetHeight > 0;
  };
  
  function getProduct(t){return new Promise((n,e)=>{n(fetch(`/products/${t}.js`,{method:"GET"}).then(t=>{if("200"==t.status)return t.json()}).then(t=>t))})}
   
  function getElementByKeys(e,t){let l=!1;if(!e)return l;if("quickview"===t){let r=document.querySelectorAll(e);if(r.length){if(r.length>1){for(let n=0;n<r.length;n++)if(checkPosition(r[n])){l=r[n];break}}else l=r[0]}return l}for(let f=0;f<e.length;f++){let i=document.querySelector(e[f]);if(i){l=i;break}}return l}
  
  const addHandleEditCart = (lineItemSelector, cartItem, indexCartItem, lineItemKey) => {
    setTimeout(function () {
      let isCustom = window.ap_front_settings.shop_id === "64185073757" && lineItemKey?.quantity?.wrapper;
      if (
        cartItem.properties &&
        cartItem.properties.hasOwnProperty("_has_apo") &&
        !lineItemSelector.querySelector(isCustom ? `.${classEditOption}_custom` : `.${classEditOption}`)
      ) {
        if (isCustom) {
          let i = document.createElement("button");
          i.classList.add(`${classEditOption}_custom`),
            (i.innerHTML = `<img style="width:15px; height:15px" src='https://cdn.shopify.com/s/files/1/0855/8818/1272/files/image.png?v=1732327664' />`),
            i &&
            i.addEventListener(
              "click",
              initAvisCart.handleCartEditPopup.bind(this, cartItem, null, false)
            );
          let a = lineItemSelector.querySelector("quantity-popover .cart-item__quantity-wrapper");
          if (a) a.appendChild(i);
        }
        else {
          let i = document.createElement("button");
          i.classList.add(classEditOption),
            (i.innerHTML = `<span>${customizeryConfig["text_edit_options_cart"] || "Edit options"}</span>`), //txtEditOptions
            i &&
            i.addEventListener(
              "click",
              initAvisCart.handleCartEditPopup.bind(this, cartItem, null, false)
            );
          let a = lineItemSelector.querySelector(lineItemKey.details);
          if (a) a.appendChild(i);
        }
      }
    }, 500);
  };

  const addHandleEditCartForPreview = (lineItemSelector, cartItem, indexCartItem, lineItemKey) => {
    setTimeout(function () {
      if (
        cartItem.properties &&
        cartItem.properties.hasOwnProperty("_has_apo") &&
        !lineItemSelector.querySelector(`.${classEditOptionForSelected}`)
      ) {
        let i = document.createElement("button");
        i.classList.add(classEditOptionForSelected),
          (i.innerHTML = `<span>Options selected</span>`), //txtEditOptions
          i &&
          i.addEventListener(
            "click",
            initAvisCart.handleCartEditPopup.bind(this, cartItem, null, true)
          );
        let a = lineItemSelector.querySelector(lineItemKey.details);
        if (a) a.appendChild(i);
      }
    }, 600);
  };
  
  function apoFormatMoney(a){function e(a,e,r,t){if(r=r||",",t=t||".",isNaN(a)||null===a)return 0;var o,n=(a=(a/100).toFixed(e)).split(".");return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+r)+(n[1]?t+n[1]:"")}"string"==typeof a&&(a=a.replace(".",""));var r=function a(r){var t="";switch(apo_money_format.match(/\{\{\s*(\w+)\s*\}\}/)[1]){case"amount":t=e(r,2);break;case"amount_no_decimals":t=e(r,0);break;case"amount_with_comma_separator":t=e(r,2,".",",");break;case"amount_no_decimals_with_comma_separator":t=e(r,0,".",",");break;case"amount_no_decimals_with_space_separator":t=e(r,0," ");break;case"amount_with_apostrophe_separator":t=e(r,2,"'")}return t}(a);return apo_money_format.replace(/\{\{\s*(\w+)\s*\}\}/,r)}
  
  const getCartV2 = async (type) =>
    fetch(`/cart.json?ap=${type}`)
      .then((t) => t.json())
      .then((t) => t);

  const getOptionSetSearch = async function (handle) {
    return new Promise((n, o) => {
      n(
        fetch("/" + "search?view=apo&q=handle:" + handle).then(
          (e) => {
            return e.text().then(function (res) {
              try {
                if (res.indexOf("<html") > -1) {
                  return [];
                } else {
                  let resJson = JSON.parse(res);
                  return resJson;
                }
              } catch (err) {
                return [];
              }
            });
          }
        )
      );
    });
  };

  window.apo_js_loaded.minicart = true;
  let isSetIntevalMiniCart = false;
  let isMonsterUpsell = false;
  let shopIdApo = window.ap_front_settings.shop_id;
  var joinAddChargeApo = window.ap_front_settings.joinAddCharge;
  let shopNotAppendCompare = ["72843493665"];
  if (shopIdApo === "59437023322") {
    joinAddChargeApo = "||";
  }

  if (window.AvisOptionsData?.mergePrice_miniCart)
  {
    AvisOptionsConfig.cartitem_price = window.AvisOptionsData.mergePrice_miniCart.concat(AvisOptionsConfig.cartitem_price);
  }
  if (window.AvisOptionsData?.mergePrice_cartPage)
  {
    if (AvisOptionsConfig?.cartitem_price_cartpage_is_not_concat)
    {
      AvisOptionsConfig.cartitem_price_cartpage = window.AvisOptionsData.mergePrice_cartPage;
    }
    else AvisOptionsConfig.cartitem_price_cartpage = window.AvisOptionsData.mergePrice_cartPage.concat(AvisOptionsConfig.cartitem_price_cartpage);
  }
  const getCartJs = async () =>
    fetch("/cart.js?avis", { method: "GET" })
      .then((t) => t.json())
      .then((t) => t);
  function apoMiniCart() {
    if (typeof window?.opusOpen === "function") return;
    var listCartUpdate = {};
    var apoMiniCartSelector = null;
    if (window.AvisOptionsData?.miniCartForm) 
    {
      apoMiniCartSelector =  document.querySelector(window.AvisOptionsData?.miniCartForm);
      if (window.AvisOptionsData?.miniCartForm_interval && !apoMiniCartSelector) return;

      isSetIntevalMiniCart = true;
    }
    if (!apoMiniCartSelector)
    {
      apoMiniCartSelector =
      document.querySelector("mini-cart") ||
      document.querySelector(".cart-drawer") ||
      document.querySelector("cart-drawer") ||
      document.querySelector("#CartDrawer") ||
      document.querySelector("#spro-cart-sidebar") ||
      document.querySelector("sht-cart-drwr") ||
      document.querySelector("sidebar-drawer#site-search-sidebar") ||
      document.querySelector(".cart__drawer") ||
      document.querySelector("#t4s-mini_cart") ||
      document.querySelector(".popup.js-popup") ||
      document.querySelector("#offcanvas-cart") ||
      document.querySelector("drawer-component#Drawer-Cart") ||
      document.querySelector(".js-mini-cart .js-mini-cart-content") ||
      document.querySelector("cart-notification") ||
      document.querySelector("#ajax-cart-drawer .side-drawer-content") ||
      document.querySelector("#supercart") ||
      document.querySelector(".right-drawer-vue") ||
      document.querySelector(".drawer--cart") ||
      document.querySelector("div[id*='quick-cart']") ||
      document.querySelector(".quick-cart[data-section-type='quick-cart']") ||
      document.querySelector(".site-header__drawers") ||
      document.querySelector(".aside#cart") ||
      document.querySelector("#dropdnMinicartPopup");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#mini-cart");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(".dropdn-modal-minicart");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(".header  .cart_content");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("ajax-cart");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#mini__cart");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("sidebar-drawer");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(".minicart");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(".bls-minicart-wrapper");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(".tt-dropdown-inner");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#minicart_wrapper");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(
        ".quick-cart[data-quick-cart]"
      ); // Theme Spark v2.6.2 - id: 10302619744
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(
        '[data-section-type="cart-drawer"]'
      );
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#slidecarthq .slidecarthq"); // Theme Symmetry - id:55949590694
      if (apoMiniCartSelector) {
        isSetIntevalMiniCart = true;
      }
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#monster-upsell-cart");
      if (apoMiniCartSelector) {
        isSetIntevalMiniCart = true;
        isMonsterUpsell = true;
      }
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#cart-drawer");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#halo-cart-sidebar");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#cart-modal");
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(
        "m-cart-drawer#MinimogCartDrawer"
      );
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector(
        "m-cart-drawer #MinimogCartDrawer"
      );
    }
    if (!apoMiniCartSelector) {
      apoMiniCartSelector = document.querySelector("#dropdown-cart");
    }
    if (shopIdApo === "64170688683" || shopIdApo === "70037405912") {
      apoMiniCartSelector = document.querySelector(
        "sidebar-drawer#site-cart-sidebar"
      );
    }
    if (shopIdApo === "82147410269") {
      apoMiniCartSelector = document.querySelector("cart-notification");
    }
    if (shopIdApo === "68666097951") {
      apoMiniCartSelector = document.querySelector("modal-component");
    }

    if (shopIdApo === "83719422247") {
      apoMiniCartSelector = document.querySelector("#mini__cart.mini_cart");
    }

    if (shopIdApo === "69450924331") {
      apoMiniCartSelector = document.querySelector("#cart.cart");
    }

    if (shopIdApo === "69790695637" || shopIdApo === "65250099374" || shopIdApo === "65303412928" || shopIdApo === "87691559199") {
      apoMiniCartSelector = document.querySelector("sidebar-drawer#site-cart-sidebar");
    }

    if (shopIdApo === "84287947061") {
      apoMiniCartSelector = document.querySelector(".mini-cart-content");
    }

    if (!apoMiniCartSelector) return;
    let isProcessingUpdateMiniCart = false;
    const updateCart = (t) => {
      if (shopIdApo === "70005391558") {
        const cartForm = document.querySelector('cart-items-component.cart-items-component');
        const cartItemsComponents = document.querySelectorAll('cart-items-component');
        const sectionsToUpdate = new Set([cartForm.sectionId]);
        cartItemsComponents.forEach((item) => {
          if (item instanceof HTMLElement && item.dataset.sectionId) {
            sectionsToUpdate.add(item.dataset.sectionId);
          }
        });
        t.sections = Array.from(sectionsToUpdate).join(',');
        t.sections_url = window.location.pathname
      }
      if (shopIdApo === "67417112744") {
        document.querySelector('cart-form.cart-drawer')?.querySelectorAll('.cart-item__quantity-input:not([disabled])')?.forEach((el) => {
          if (el.value !== el.dataset.initialValue) {
            el.closest('[data-merge-list-item]').classList.add('merge-item-refreshing');
          }
        });
      }

      if (typeof window.cartShippingCalculatorProApp === 'object')
      {
        window.cartShippingCalculatorProApp.cartChangeTrackingBlocked = true;
      }

      fetch("/cart/update.js?avismini=true", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(t),
      })
        .then((t) => {
          if (shopIdApo === "62635311441") {
            window.refreshCartContents(t);
          }
          return t.json();
        })
        .then(async (t) => {
          if (shopIdApo === "62635311441") {
            isProcessingUpdateMiniCart = false;
            return;
          }
          if (shopIdApo === "67417112744") {
            if (t?.description) {
              document.dispatchEvent(new CustomEvent('on:cart:error', {
                bubbles: true,
                detail: {
                  error: t.description
                }
              }));
              // Uncertainty... Reload page.
              window.location.reload();
            }
            else
            {
              document.dispatchEvent(
                new CustomEvent('on:cart:change', { bubbles: true, cancelable: false })
              );
              isProcessingUpdateMiniCart = false;
              return;
            }
          }
          console.log("update carts", t);
          if (!t?.status) {

            if (shopIdApo === "80571466036" && window?.theme?.settings?.afterAtc === "drawer") {
              document.querySelector("product-form")?.cartDrawer.refresh(true);
              isProcessingUpdateMiniCart = false;
              return;
            }
            
            if (shopIdApo === "84287947061" && window.theme?.miniCart)
            {
              window.theme?.miniCart?.updateElements();
              window.theme?.miniCart?.generateCart();
              setTimeout(function(){
                window.theme?.miniCart?.updateElements();
                window.theme?.miniCart?.generateCart();
               
              }, 400);
               isProcessingUpdateMiniCart = false;
              return true;
            }
            if (["16867941", "73060385049"].includes(shopIdApo)) // Ruby Cart
            {
              try
              {
                Rebuy.SmartCart.skip_open = false;
                 isProcessingUpdateMiniCart = false;
                return true;
              }catch(e){}
            }   
            if (shopIdApo === "79302132006") {
              window.location =
                window.location.href +
                (location.search && location.search.indexOf("open-cart") > -1
                  ? ""
                  : (location.search ? "&" : "?") + "open-cart");
                 isProcessingUpdateMiniCart = false;
              return;
            }

            if (shopIdApo === "56047599658") {
              if (typeof apoMiniCartSelector.refresh === "function") {
                apoMiniCartSelector.refresh();
                 isProcessingUpdateMiniCart = false;
                return;
              }
            }

            if (typeof apoMiniCartSelector.renderContents === "function") {
              if (["56248008770"].includes(shopIdApo)) {
                apoMiniCartSelector.renderContents(t, true);
                if (typeof apoMiniCartSelector?.refreshCartDrawer === "function") {
                  apoMiniCartSelector.refreshCartDrawer();
                }
                let countItems = apoMiniCartSelector.querySelector("#cart-drawer__count");
                if (countItems) countItems.textContent = `(${t.item_count})`;
              } else {
                apoMiniCartSelector.renderContents(t, false);
                apoMiniCartSelector.classList.toggle(
                  "is-empty",
                  t.item_count === 0
                );

                let itemsCount = 0;
                if (["89704104246"].includes(shopIdApo)) {
                  t.items.forEach(item => {
                    let hasApoOption = false;
                    if (item.properties) {
                      for (let key in item.properties) {
                        if (key === "_apo_option") {
                          hasApoOption = true;
                          break;
                        }
                      }
                    }
                    if (!hasApoOption) {
                      itemsCount += item.quantity;
                    }
                  });
                } else {
                  itemsCount = t.item_count;
                }
                let countItems = apoMiniCartSelector.querySelector("span[data-cart-count-number][data-type='drawer']");
                if (countItems) countItems.textContent = itemsCount;
                let cartHeader = document.querySelector(".cart-link__count");
                if (cartHeader) {
                  cartHeader.classList.toggle("is-cart-empty", t.item_count === 0);
                  cartHeader.querySelector("span[data-cart-count-number]").textContent = itemsCount;
                }
                apoMiniCartSelector.querySelector("f-cart-goal")?.classList.toggle("hidden", t.item_count === 0);
              }
              isProcessingUpdateMiniCart = false;
            } else {
              if (shopIdApo === "55969448111") {
                document.documentElement.dispatchEvent(
                  new Event("supercart:update")
                );
                document.documentElement.dispatchEvent(
                  new Event("supercart:open")
                );
                 isProcessingUpdateMiniCart = false;
                return;
              }

              // Custom reload lại page khi change sp chính ở cart drawer
              if (["69790695637", "65250099374", "65303412928", "87691559199", "89600098628", "26831880303", "90297467198", "92194046265", "89879183725","70445269049", "91922628943","92881944960"].includes(shopIdApo)) {
                window.location.reload();
                return;
              }

              isProcessingUpdateMiniCart = false;
              if (shopIdApo === "80857530642")
              {
                  let cart = await getCartV2("update");
                  document.dispatchEvent(new CustomEvent('theme:cart:change', {
                    detail: {
                        cart: cart
                    },
                    bubbles: true
                }));
                return;
              }

              if (shopIdApo === "70005391558") {
                const cartForm = document.querySelector('cart-items-component.cart-items-component');
                const newSectionHTML = new DOMParser().parseFromString(
                  t.sections[cartForm.sectionId],
                  'text/html'
                );

                // Grab the new cart item count from a hidden element
                const newCartHiddenItemCount = newSectionHTML.querySelector('[ref="cartItemCount"]')?.textContent;
                const newCartItemCount = newCartHiddenItemCount ? parseInt(newCartHiddenItemCount, 10) : 0;
                apoMiniCartSelector.dispatchEvent(
                  new CustomEvent('cart:update', {
                      bubbles: true,
                      detail: {
                          resource: {},
                          sourceId: cartForm.sectionId,
                          data: {
                              itemCount: newCartItemCount,
                              source: 'cart-items-component',
                              sections: t.sections,
                          }
                      }
                  })
              );
                return
              }

              if (shopIdApo === "22344067") {
                return
              }

              if (
                window?.routes?.cart_url &&
                window?.routes?.cart_url.indexOf(".js") === -1
              ) {                
                window.location = window.routes.cart_url;
              } else {
                window.location.href = "/cart";
              }
               
            }
          }
        })
        .catch((t) => {
          console.log("Error:", t);
          if (shopIdApo === "67417112744") {
            document.dispatchEvent(new CustomEvent('on:cart:error', {
              bubbles: true,
              detail: {
                error: t.message
              }
            }));
            // Uncertainty... Reload page.
            window.location.reload();
          }
           isProcessingUpdateMiniCart = false;
        });
    };
    const handleCartUpdate = async (lineItemKey) => {
      if (isProcessingUpdateMiniCart) return;
      isProcessingUpdateMiniCart = true;
      let cart = await getCartV2("mini");
      let cartItems = cart?.items;
      if (shopIdApo === "25682706495" || shopIdApo === "85490270502" || shopIdApo === "57995493567" || shopIdApo === "93731914067")
      {
        cartItems.reverse();
      }
      if (isMonsterUpsell && cartItems?.length > 0)
        cartItems = cartItems.filter(
          (x) => !x.product_type || x.product_type !== "Hide"
        );
      let lineItemElems = apoMiniCartSelector.querySelectorAll(lineItemKey.key);
      if (cartItems && cartItems.length > 0 && lineItemElems.length > 0) {
        if (isMonsterUpsell) newIndex = cartItems.length - 1;
        // Update price main product, show/hide quantity, remove addcharge
        function updateViewCartItem() {
          let listAddChargeUsed = {};
          let listOrderIdAC = {}; // order_id: list variant_id, key, qty, discount;
          let listACByOrderId = []; // Array ac by order_id
          // Hide/ disable addcharge
          lineItemElems.forEach(async (lineItemSelector, index) => {
            let cartItem = isMonsterUpsell
              ? cartItems[newIndex - index]
              : cartItems[index];
            (async (o, n) => {
              let orderId = "";
              let isMainProduct = false,
                a = !1,
                apoVariants = !1;
              if (n?.properties && Object.keys(n.properties).length > 0) {
                if (n.properties.hasOwnProperty("_apo_variants")) {
                  isMainProduct = true;
                  apoVariants = n.properties["_apo_variants"];
                } else if (
                  n.properties.hasOwnProperty("_apo_added_by") ||
                  n.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option)
                ) {
                  a = !0;
                  p = n.id;
                }
                if (
                  n.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
                  String(n.properties[AvisOptionsConfig?.key_cart_order]).indexOf("Added by:") === -1
                ) {
                  isMainProduct = true;
                  orderId = String(n.properties[AvisOptionsConfig?.key_cart_order]);
                }
              }
              let s = lineItemKey.quantity.wrapper
                ? o.querySelectorAll(lineItemKey.quantity.wrapper)
                : [],
                inputSelector = lineItemKey.quantity.input
                  ? o.querySelectorAll(lineItemKey.quantity.input)
                  : [],
                c = lineItemKey.quantity.decrease
                  ? o.querySelectorAll(lineItemKey.quantity.decrease)
                  : [],
                l = lineItemKey.quantity.increase
                  ? o.querySelectorAll(lineItemKey.quantity.increase)
                  : [],
                u = lineItemKey.removeButton
                  ? o.querySelectorAll(lineItemKey.removeButton)
                  : [];
              let isHideQuantityInput = shopIdApo === "79163588941";
              let isMergePrice = window?.BOOMR?.themeId === 168187789649;
              if (
                AvisOptionsConfig.is_merge_ac_cart &&
                isMainProduct &&
                orderId
              ) {
                let totalPriceAc = 0;
                let totalPriceCompareAc = 0;
                let itemPriceAc = 0;
                let itemPriceCompareAc = 0;
                let tempQtyAC = {};
                let acForMainProduct = [];
                let mainComparePrice = 0;
                let qtyMainProd = n.quantity;
                let cartItemsAC = cartItems.filter(
                  (x) =>
                    x?.properties?.hasOwnProperty(AvisOptionsConfig?.key_cart_option) &&
                    x?.properties[AvisOptionsConfig?.key_cart_order].indexOf(orderId) > -1
                );
                if (!listOrderIdAC[orderId]) {
                  let orderIdAC = {};
                  cartItemsAC.forEach((x) => {
                    let tempAC = x.properties[AvisOptionsConfig?.key_cart_order].split("*");
                    let timesAc = tempAC.length > 1 ? parseInt(tempAC[tempAC.length - 1]) : 1;
                    orderIdAC[x.key] = {
                      orderId: orderId,
                      variantId: x.id,
                      key: x.key,
                      qty: x.quantity, // Add-on quantity decreases to zero once applied
                      times: timesAc,
                      discount: x.discounts?.length > 0 ? x.discounts[0].title : "",
                      option: x.properties[AvisOptionsConfig?.key_cart_option],
                      price: x.price,
                      final_price: x.final_price
                    };
                    listACByOrderId.push(orderIdAC[x.key]);
                  });
                  listOrderIdAC[orderId] = orderIdAC;
                }
                if (shopIdApo === "68940923061" || shopIdApo === "80676552738")
                {
                  function calPriceAC(listAC)
                  {
                    if (listAC.length === 0) return;
                    listAC.forEach((acItem) => {
                        let qtyAc = acItem.times * qtyMainProd;
                        let needQtyAc = qtyAc - (addedOption[acItem.option] ?? 0);
                        if (needQtyAc > 0)
                        {
                          needQtyAc = Math.min(needQtyAc, acItem.qty);
                        }
                        if (needQtyAc > 0)
                        { 
                          addedOption[acItem.option] = (addedOption[acItem.option] ?? 0) + needQtyAc;
                          listOrderIdAC[orderId][acItem.key].qty -= needQtyAc;
                          acForMainProduct.push({
                            totalPrice: acItem.final_price * needQtyAc,
                            totalCompare: acItem.price * needQtyAc,
                            price: acItem.final_price,
                            priceCompare: acItem.price
                          });
                        }
                      });
                  }
                  let discountTitle = n.discounts?.length > 0 ? n.discounts[0].title : "";
                  if (discountTitle){
                    let findAc = listACByOrderId.filter(x => x.orderId === orderId && x.discount === discountTitle && x.qty > 0);
                    calPriceAC(findAc);
                  }
                  let findAc = listACByOrderId.filter(x => x.orderId === orderId && x.qty > 0);
                  calPriceAC(findAc);
                  totalPriceAc += acForMainProduct.reduce((acc, item) => acc + item.totalPrice, 0);
                  totalPriceCompareAc += acForMainProduct.reduce((acc, item) => acc + item.totalCompare, 0);
                  itemPriceAc += acForMainProduct.reduce((acc, item) => acc + item.price, 0);
                  itemPriceCompareAc += acForMainProduct.reduce((acc, item) => acc + item.priceCompare, 0);
                }
                else
                {
                  // Check addcharge calculated
                  cartItemsAC = cartItemsAC.filter(
                    (x) =>
                      !listAddChargeUsed[x.key] ||
                      listAddChargeUsed[x.key] < x.quantity
                  );
                  let listProduct = [];
                  let productHandles = [n.handle];
                  cartItemsAC.forEach((x) => {
                    productHandles.push(x.handle);
                  });
                  if (["16867941", "89896026439", "91922628943"].includes(shopIdApo))
                  {
                    listProduct = await Promise.all(
                      productHandles.map(async (handle) => {
                        let productInfo = await getProduct(handle);
                        if (productInfo) return productInfo;
                        return null;
                      })
                    );
                  }
                  let findMainProduct = listProduct.find(x => x?.id === n.product_id);
                  if (findMainProduct)
                  {
                    let findVariant = findMainProduct.variants.find(x => x.id === n.id);
                    if (findVariant) mainComparePrice = findVariant.compare_at_price;
                  }
                  
                  cartItemsAC.forEach((x) => {
                    let tempAC = x.properties[AvisOptionsConfig?.key_cart_order].split("*");
                    let qtyAc =
                      tempAC.length > 1 ? parseInt(tempAC[tempAC.length - 1]) : 1;

                    let findAcProduct = listProduct.find(e => e?.id === x.product_id);
                    let acComparePrice = 0;
                    if (findAcProduct)
                    {
                      let findVariant = findAcProduct.variants.find(e => e.id === x.id);
                      if (findVariant) acComparePrice = findVariant.compare_at_price;
                    }
                    if (qtyAc === 0) {
                      listAddChargeUsed[x.key] += x.quantity;
                      totalPriceAc += x.final_price * x.quantity;
                      totalPriceCompareAc += (acComparePrice ? acComparePrice : x.price) * x.quantity;
                    } else {
                      let needQtyAc = qtyMainProd * qtyAc;
                      let usedQtyAc = tempQtyAC[x.id] ?? 0;
                      let useQtyAc = needQtyAc - usedQtyAc;
                      if (useQtyAc > 0) {
                        if (x.quantity >= useQtyAc) {
                          tempQtyAC[x.id] = (tempQtyAC[x.id] ?? 0) + useQtyAc;
                          listAddChargeUsed[x.key] =
                            (listAddChargeUsed[x.key] ?? 0) + useQtyAc;
                          totalPriceAc += x.final_price * useQtyAc;
                          totalPriceCompareAc += (acComparePrice ? acComparePrice : x.price) * useQtyAc;
                        } else {
                          tempQtyAC[x.id] = (tempQtyAC[x.id] ?? 0) + x.quantity;
                          listAddChargeUsed[x.key] =
                            (listAddChargeUsed[x.key] ?? 0) + x.quantity;
                          totalPriceAc += x.final_price * x.quantity;
                          totalPriceCompareAc += (acComparePrice ? acComparePrice : x.price) * x.quantity;
                        }
                      }
                    }

                    itemPriceAc += x.final_price * (qtyAc === 0 ? 1 : qtyAc);
                    itemPriceCompareAc += (acComparePrice ? acComparePrice : x.price) * (qtyAc === 0 ? 1 : qtyAc);
                  });
                }

                let totalPrice = totalPriceAc + n.line_price;
                let totalCompare = totalPriceCompareAc + (mainComparePrice ? mainComparePrice*n.quantity : n.original_line_price);
                let itemPrice = itemPriceAc + n.final_price;
                let itemPriceCompare = itemPriceCompareAc + (mainComparePrice > 0 ? mainComparePrice :  n.price);

                let taxPrice = 0;
                if (shopIdApo === "90902954277") taxPrice = itemPrice + itemPrice * 0.2;

                for (let priceKey of AvisOptionsConfig.cartitem_price) {
                  if (priceKey.total_price) {
                    let priceSelector = o.querySelectorAll(
                      priceKey.total_price
                    );
                    priceSelector.forEach((itemKey) => {
                      let priceHtml = apoFormatMoney(totalPrice);
                      if (itemKey.innerHTML !== priceHtml)
                        if (shopIdApo === "25682706495" && itemKey.querySelector(priceKey.total_compare)) {
                          const comparePrice = itemKey.querySelector(priceKey.total_compare);
                          itemKey.innerHTML = `${comparePrice ? comparePrice.outerHTML : ''}${priceHtml}`;
                        } else {
                          itemKey.innerHTML = priceHtml;
                        }
                    });
                  }
                  if (taxPrice) {
                    for (let priceKey of [".price .vat-price"]) {
                      if (priceKey) {
                        let priceSelector = o.querySelectorAll(priceKey);
                        priceSelector.forEach((itemKey) => {
                          let priceHtml = apoFormatMoney(taxPrice);
                          if (itemKey.innerHTML !== priceHtml) itemKey.innerHTML = priceHtml;
                        });
                      }
                    }
                  }
                  if (!shopNotAppendCompare.includes(shopIdApo) && priceKey.total_compare) {
                    let priceSelector = o.querySelectorAll(
                      priceKey.total_compare
                    );
                    priceSelector.forEach((itemKey) => {
                      if (shopIdApo === "59484930095" && itemKey.getAttribute("data-price"))
                      {
                        totalCompare = totalPriceCompareAc + parseFloat(itemKey.getAttribute("data-price"));
                      }
                      if (["25427564", "25682706495"].includes(shopIdApo) && itemKey.getAttribute("data-origin-price"))
                      {
                        totalCompare = totalPriceCompareAc + parseFloat(itemKey.getAttribute("data-origin-price"));
                      }
                      let priceHtml = apoFormatMoney(totalCompare);
                      if (itemKey.innerHTML !== priceHtml)
                        itemKey.innerHTML = priceHtml;
                    });
                  }
                  if (priceKey.price) {
                    for (let priceItem of priceKey.price.split(",")) {
                      let priceSelector = o.querySelectorAll(priceItem);
                      if (priceSelector.length > 0) {
                        priceSelector.forEach((itemKey) => {
                          let priceHtml = apoFormatMoney(itemPrice);
                          if (itemKey.innerHTML !== priceHtml)
                            itemKey.innerHTML = priceHtml;
                        });
                        break;
                      }
                    }
                  }
                  if (!shopNotAppendCompare.includes(shopIdApo) && priceKey.price_compare) {
                    if (["25427564"].includes(shopIdApo) && Shopify.theme.schema_name === "Impulse") return;
                    for (let priceItem of priceKey.price_compare.split(",")) {
                      let priceSelector = o.querySelectorAll(priceItem);
                      if (priceSelector.length > 0) {
                        priceSelector.forEach((itemKey) => {
                          let priceHtml = apoFormatMoney(itemPriceCompare);
                          if (itemKey.innerHTML !== priceHtml)
                            itemKey.innerHTML = priceHtml;
                        });
                        break;
                      }
                    }
                  }
                }
              }

              if (!window.AvisOptionsData?.NotHandleCart && a) {
                (s.length &&
                  s.forEach((t) => t.classList.add("apo-opacity-05")),
                  inputSelector.length &&
                  inputSelector.forEach((t) =>
                    isHideQuantityInput
                      ? t.classList.add("apo-hidden")
                      : (t.readOnly = true)
                  ),
                  c.length && c.forEach((t) => t.classList.add("apo-hidden")),
                  l.length && l.forEach((t) => t.classList.add("apo-hidden")),
                  u.length && u.forEach((t) => t.classList.add("apo-hidden"))),
                  o.classList.add("apo-cart-item-mini"),
                  isMergePrice && o.classList.add("apo-hidden");

                if (shopIdApo === "64185073757") {

                }
              }

              if (isMainProduct && isMergePrice) {
                let totalPriceAc = 0;
                for (let keyAddcharge of apoVariants.split(joinAddChargeApo)) {
                  totalPriceAc += cartItems
                    .filter(
                      (x) => x?.properties?._apo_added_by === keyAddcharge
                    )
                    .reduce((n, { line_price }) => n + line_price, 0);
                }

                let totalPrice = totalPriceAc + cartItem.line_price;
                let totalCompare = totalPriceAc + cartItem.original_line_price;
                for (let priceKey of AvisOptionsConfig.cartitem_price) {
                  if (priceKey.total_price) {
                    let priceSelector = o.querySelectorAll(
                      priceKey.total_price
                    );
                    priceSelector.forEach((itemKey) => {
                      itemKey.innerHTML = apoFormatMoney(totalPrice);
                    });
                  }
                  if (priceKey.total_compare) {
                    let priceSelector = o.querySelectorAll(
                      priceKey.total_compare
                    );
                    priceSelector.forEach((itemKey) => {
                      itemKey.innerHTML = apoFormatMoney(totalCompare);
                    });
                  }
                }
              }
            })(lineItemSelector, cartItem);

            if (shopIdApo === "64185073757") {
              cartItem && editOptions && addHandleEditCart(lineItemSelector, cartItem, index, lineItemKey);
            }
          });
        }
        let listUseAc = [];
        // Handle change quantity addcharge by main product
        ((t) => {
          let e = t.map((t) => t.variant_id);
          if (e.length > 0) {
            
            let isSectionID = true;
            if (
              shopIdApo === "87489773902" ||
              shopIdApo === "72434319636" ||
              shopIdApo === "63532892418" ||
              shopIdApo === "79438512462"
            ) {
              isSectionID = false;
            }
            let sections =
              typeof apoMiniCartSelector.getSectionsToRender === "function"
                ? apoMiniCartSelector
                  .getSectionsToRender()
                  .map((section) =>
                    isSectionID ? section.id : section.section
                  )
                : [];
            let e = { sections: sections, updates: {} };
            let cartItemNeedUpdate = {};
            !window?.AvisOptionsData?.NotHandleCart && t.forEach((o, n) => {
              if (
                o.properties &&
                !(Object.keys(o.properties).length === 0) &&
                (o.properties.hasOwnProperty("_apo_added_by") ||
                  o.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option))
              ) {
                let isApoOption = o.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option);
                if (isApoOption) {
                  let optionData = o.properties[AvisOptionsConfig?.key_cart_order];
                  let key = `${o.id}_${optionData}_${o.properties[AvisOptionsConfig?.key_cart_option]}`;
                  if (!cartItemNeedUpdate[key]) {
                    let isOneTime = true;
                    let orderIdArr = optionData
                      .replace("Added by: ", "")
                      ?.split("*");
                    let orderId = orderIdArr[0]?.trim();
                    let quantityOfAddcharge = 0;
                    if (orderIdArr.length > 1) {
                      isOneTime = false;
                      quantityOfAddcharge = parseInt(
                        orderIdArr[1]?.trim() ?? 1
                      );
                    }
                    if (orderIdArr.length > 2) isOneTime = true;

                    let addcharges = t.filter(
                      (x) =>
                        x.id === o.id &&
                        o.properties[AvisOptionsConfig?.key_cart_option] ===
                        x.properties[AvisOptionsConfig?.key_cart_option] &&
                        o.properties[AvisOptionsConfig?.key_cart_order] ===
                        x.properties[AvisOptionsConfig?.key_cart_order]
                    );
                    let totalAddcharge = addcharges.reduce(
                      (n, { quantity }) => n + quantity,
                      0
                    );
                    let cartItemsHasOptionBundle = t.filter(
                      (t) =>
                        !(Object.keys(t.properties).length === 0) &&
                        t.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
                        String(t.properties[AvisOptionsConfig?.key_cart_order]) === orderId
                    );
                    let totalQuantityMain = cartItemsHasOptionBundle.reduce(
                      (n, { quantity }) => n + quantity,
                      0
                    );
                    let quantityAc = 0;
                    if (isOneTime) {
                      quantityAc = 1;
                      if (orderIdArr.length > 2) quantityAc = quantityOfAddcharge;
                      if (totalQuantityMain === 0) quantityAc = 0;
                    } else {
                      quantityAc = totalQuantityMain * quantityOfAddcharge;
                    }

                    if (totalAddcharge !== quantityAc && !o?.properties?.hasOwnProperty("_apo_qty_by_ac")) {
                      cartItemNeedUpdate[key] = true;
                      let index = 0;
                      for (let itemAc of addcharges) {
                        e.updates[itemAc.key] = index === 0 ? quantityAc : 0;
                        index++;
                      }
                    }
                  }
                } else {
                  let optionData = o.properties["_apo_added_by"];
                  let cartItemsHasOptionBundle = t.filter(
                    (t) =>
                      !(Object.keys(t.properties).length === 0) &&
                      t.properties.hasOwnProperty("_apo_variants") &&
                      t.properties["_apo_variants"]
                        .split(joinAddChargeApo)
                        .find((x) => x.indexOf(optionData) > -1)
                  );

                  let addcharges = t.filter(
                    (x) =>
                      x.id === o.id &&
                      o.properties["_apo_added_by"] ===
                      x.properties["_apo_added_by"]
                  );
                  let totalAddcharge = addcharges.reduce(
                    (n, { quantity }) => n + quantity,
                    0
                  );
                  let totalAddChargeInOrg = 0;
                  if (cartItemsHasOptionBundle.length > 0) {
                    for (let item of cartItemsHasOptionBundle) {
                      let apoVariant = item.properties["_apo_variants"]
                          .split(joinAddChargeApo)
                          .find((x) => x.indexOf(optionData) > -1);
                        if (apoVariant) {
                          if (apoVariant.indexOf("*") > -1) {
                            totalAddChargeInOrg +=
                              item.quantity *
                              parseInt(
                                apoVariant.split("*")[
                                apoVariant.split("*").length - 1
                                ]
                              );
                          } else {
                            totalAddChargeInOrg += 1;
                          }
                        }
                    }
                  }

                  if (shopIdApo !== "65881768133") {
                    if (cartItemsHasOptionBundle.length === 0)
                      {
                        e.updates[o.key] = 0;
                      }
                    else
                    {
                      if (totalAddcharge !== totalAddChargeInOrg)
                      {
                        let newQuantity = 0;
                        if (!listUseAc.includes(optionData))
                        {
                          newQuantity = totalAddChargeInOrg;
                          listUseAc.push(optionData);
                        }
                        else
                        {
                          newQuantity = 0;
                        }

                        if (listCartUpdate[o.key] !== newQuantity)
                        {
                          e.updates[o.key] = newQuantity;
                          listCartUpdate[o.key] = newQuantity;
                        }
                      }
                    }
                  }
                }
              }
              else if (o.properties &&
                !(Object.keys(o.properties).length === 0) && o.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order)
                && String(o.properties[AvisOptionsConfig?.key_cart_order]).indexOf("Added by:") === -1) {
                let orderId = o.properties[AvisOptionsConfig?.key_cart_order];
                let isOnlyAppBundle = typeof orderId === "string"
                  ? (orderId.includes("bundle") && !orderId.includes(","))
                  : false;
                if (!isOnlyAppBundle)
                {
                  let cartItemsAC = t.filter(
                    (t) =>
                      !(Object.keys(t.properties).length === 0) &&
                      t.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
                      String(t.properties[AvisOptionsConfig?.key_cart_order]).indexOf(`Added by: ${orderId}`) > -1
                  );
                  
                  // Remove main product if not exist AC
                  if (cartItemsAC.length === 0 && !o?.properties?.hasOwnProperty("_apo_qty_by_ac")) {
                    e.updates[o.key] = 0;
                  }
                }
              }
            });
            if (Object.keys(e.updates).length === 0) isProcessingUpdateMiniCart = false;
            Object.keys(e.updates).length === 0 || updateCart(e);
            updateViewCartItem();
          }
          else isProcessingUpdateMiniCart = false;
        })(cartItems);
      }
      else isProcessingUpdateMiniCart = false;
    };

    const handleLoadMiniCart = async () => {
      setTimeout(async function () {
        let isOk = false;
        if (window.AvisOptionsData?.updateCart_miniCart?.length > 0)
        {
          AvisOptionsConfig.mini_carts = window.AvisOptionsData.updateCart_miniCart.concat(AvisOptionsConfig.mini_carts);
        }
        for (let miniCart of AvisOptionsConfig.mini_carts) {
          let lineItemKey = miniCart.cart_item;
          let lineItemElems = apoMiniCartSelector.querySelectorAll(
            lineItemKey.key
          );
          if (lineItemElems && lineItemElems.length > 0) {
            for (let lineItem of lineItemElems) {
              let d = lineItemKey.quantity.input
                ? lineItem.querySelectorAll(lineItemKey.quantity.input)
                : [],
                c = lineItemKey.quantity.decrease
                  ? lineItem.querySelectorAll(lineItemKey.quantity.decrease)
                  : [],
                l = lineItemKey.quantity.increase
                  ? lineItem.querySelectorAll(lineItemKey.quantity.increase)
                  : [],
                g = lineItemKey.details
                  ? lineItem.querySelectorAll(lineItemKey.details)
                  : [],
                remove = lineItemKey?.removeButton
                  ? lineItem.querySelectorAll(lineItemKey.removeButton)
                  : [];

              if (
                (!lineItemKey.quantity.input || d.length > 0) &&
                (!lineItemKey.quantity.decrease || c.length > 0) &&
                (!lineItemKey.quantity.increase || l.length > 0) &&
                (!lineItemKey.details || g.length > 0) &&
                (!lineItemKey?.removeButton || remove.length > 0)
              ) {
                isOk = true;
                await handleCartUpdate(lineItemKey);
                break;
              }

              if (isOk) break;
            }
          }
          if (isOk) break;
        }
      }, 300);
    };
    if (apoMiniCartSelector) {
      if (window?.ap_front_settings?.page_type !== "cart")
        setTimeout(() => {
          handleLoadMiniCart();
        }, 300);
      else {
        let dataInterval = setInterval(() => {
          if (isLoadedCartPage) {
            handleLoadMiniCart();
            clearInterval(dataInterval);
          }
        }, 300);
      }
      new MutationObserver(handleLoadMiniCart).observe(apoMiniCartSelector, {
        childList: !0,
        subtree: !0,
      });
    }
  }
  if (window.AvisOptionsData?.miniCartForm_interval)
  {
    let intervalMiniCart = setInterval(function () {
      apoMiniCart();
      if (isSetIntevalMiniCart) clearInterval(intervalMiniCart);
    }, 400);
  }
  else
  {
    apoMiniCart();
  }

  // Handle with cart drawer not show in view
  if (["55949590694", "52058915007", "83584811274", "83719422247"].includes(shopIdApo)) {
    let intervalMiniCart = setInterval(function () {
      apoMiniCart();
      if (isSetIntevalMiniCart) clearInterval(intervalMiniCart);
    }, 400);
  }

  let currentLineItemKey = null;
  function apiHandleCart() {
    if (window.ap_front_settings?.page_type !== "cart") return;
    var listCartUpdate = {};
    let priceMod = AvisOptionsData?.priceMod;
    let priceModCart = AvisOptionsData?.priceModCart;
    // Cart page
    var cartPage = {
      numberRepeatInterval: 0,
      isApplyFormCart: false,
      isRendringMergeAC: false,
      cartData: window.ap_front_settings.cart,
      handleCartEditPopup: async function (cartItem, cartInfo, e) {
        e.preventDefault();

        let avisCartOptionPopupClass = "avis-cartOptionsPopup";
        let avisCartOptionBackdropClass = "avis-cartOptionsBackdrop";

        const o = e.target;
        priceMod.addLoadingAddCart(o);
        const i = () => {
          let t = document.querySelector(`.${avisCartOptionPopupClass}`),
            e = document.querySelector(`.${avisCartOptionBackdropClass}`);
          t && t.remove(), e && e.remove();
        };
        i();
        const a = () => {
          const e = window.ap_front_settings.config.config_app[
            "text_cancel_edit_options_cart"
          ]
            ? window.ap_front_settings.config.config_app[
            "text_cancel_edit_options_cart"
            ]
            : "Cancel",
            o = window.ap_front_settings.config.config_app[
              "text_save_changes_edit_options_cart"
            ]
              ? window.ap_front_settings.config.config_app[
              "text_save_changes_edit_options_cart"
              ]
              : "Save Changes";
          let n = document.createElement("div");
          return (
            n.classList.add(avisCartOptionPopupClass),
            n.setAttribute("style", "display:none!important"),
            (n.innerHTML = `<div class="avis-popupBox">\n        <form method="post" data-action="/cart/add" enctype="multipart/form-data" class="avis-cart-popup-form" data-avis-cart-popup-form>\n          <div class="avis-popupHeader">\n            <span class="avis-popupHeader-title">${cartItem.title}</span>\n            <span class="avis-popupHeader-close">&times;</span>\n          </div>\n          <div class="avis-popupBody">\n            <input type="hidden" name="id" value="${cartItem.id}">\n            <input type="hidden" name="cartitem-final-price" value="${cartItem.final_price}">\n            <div class="avis-product-variants"></div>\n          </div>\n          <div class="avis-popupFooter">\n            <button class="avis-popupFooter-cancel">\n              <span>${e}</span>\n            </button>\n            <button class="avis-popupFooter-submit" data-avis-product-atc>\n              <span>${o}</span>\n            </button>\n          </div>\n        </form>\n      </div>`),
            n
          );
        },
          p = () => {
            let t = document.createElement("div");
            return (
              t.classList.add(avisCartOptionBackdropClass),
              t.setAttribute("style", "display:none!important"),
              t.addEventListener("click", i.bind(this)),
              t
            );
          };
        let productInfo = await AvisOptionsData.pluginAction.getProduct(
          cartItem.handle
        );
        if (productInfo) {
          let e = a(),
            r = p();
          document.body.appendChild(e),
            document.body.appendChild(r),
            e
              .querySelectorAll(
                ".avis-popupHeader-close, .avis-popupFooter-cancel"
              )
              .forEach((t) => t.addEventListener("click", i.bind(this)));
          priceMod.isEditOptionCart = true;
          let buttonSubmit = e.querySelector(".avis-popupFooter-submit");
          buttonSubmit.setAttribute("product-id", `${productInfo.id}_cart`);
          buttonSubmit.addEventListener(
            "click",
            AvisOptionsData.submitEditOption
          );
          let s = getElementByKeys("[data-avis-cart-popup-form]", "quickview");
          if (s) {
            console.log("RenderOption");
            priceMod.cartItemEdit = cartItem;
            if (cartInfo) priceMod.cartCurrent = cartInfo;
            AvisOptionsData.mainCheckAllRules(
              productInfo,
              `${productInfo.id}_cart`,
              true,
              document.querySelector(".avis-popupBox .avis-popupBody")
            );
            priceMod.removeLoadingAddCart(o);
            e.setAttribute("style", "display:flex!important");
            r.setAttribute("style", "display:block!important");
          }
        }
      },
      handleChangeQuantity: function (t) {
        let e = t.value;
        if (isNaN(parseInt(e))) return;
        var joinAddCharge = window.ap_front_settings.joinAddCharge;
        let group = t.getAttribute("apo-product-group");
        let groupArr = group.split(joinAddCharge);
        for (let item of groupArr) {
          let quantity = 0;
          if (item.indexOf("*") > -1) {
            quantity = parseInt(item.split("*")[item.split("*").length - 1]);
          } else {
            quantity = 1;
          }

          let n = document.querySelectorAll(
            '[apo-parent-product-group="' + item + '"]'
          );
          n.length &&
            n.forEach((t) => {
              t.value = parseInt(quantity) * parseInt(e);
            });
        }
      },
      handleCartUpdate: async function (lineItemKey) {
        let cart = null;
        if (shopIdApo === "49716494499") {
          cart = await getCartJs();
        }
        else cart = await getCartV2("cart");
        this.cartData = cart;
        priceMod.cartCurrent = cart;
        const disable_quantity_and_remove = true;

        let cartItems = this.cartData && this.cartData.items;
        if (shopIdApo === "85490270502")
        {
          cartItems.reverse();
        }
        let lineItemElems = document.querySelectorAll(lineItemKey.key);
        if (cartItems.length > 0 && lineItemElems.length > 0) {
          // Update price main product, show/hide quantity, remove addcharge
          function updateViewCartItem() {
            let listAddChargeUsed = {};
            let listAddChargeVariantIdSame = {}; // variant_id: list order_id;
            let listOrderIdAC = {}; // order_id: list variant_id, key, qty, discount;
            let listACByOrderId = []; // Array ac by order_id
            priceMod.cartData = cartItems;
            if (shopIdApo === "65651245100")
            {
              cartItems.filter(x => x?.properties?.hasOwnProperty(AvisOptionsConfig?.key_cart_option)).forEach((cartItem, index) => {
                listAddChargeVariantIdSame[cartItem.id] = listAddChargeVariantIdSame[cartItem.id] ? (listAddChargeVariantIdSame[cartItem.id] + `-${cartItem.properties[AvisOptionsConfig?.key_cart_order]}`) : cartItem.properties[AvisOptionsConfig?.key_cart_order];
              });
            }
            
            lineItemElems.forEach((n, r) => {
              let p = cartItems[r];

              p &&
                (disable_quantity_and_remove &&
                  ((o, n) => {
                    let keyMainVariant = "";
                    let orderId = "";
                    let apoOption = "";
                    let isMainProduct = !1,
                      a = !1;
                    if (Object.keys(n.properties).length > 0) {
                      if (n.properties.hasOwnProperty("_apo_variants")) {
                        isMainProduct = !0;
                        keyMainVariant = n.properties["_apo_variants"];
                      } else if (
                        n.properties.hasOwnProperty("_apo_added_by") ||
                        n.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option)
                      ) {
                        a = !0;
                      }
                      if (n.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order)) {
                        apoOption = n.properties[AvisOptionsConfig?.key_cart_order];
                      }
                      if (
                        n.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
                        String(n.properties[AvisOptionsConfig?.key_cart_order]).indexOf(
                          "Added by:"
                        ) === -1
                      ) {
                        isMainProduct = true;
                        orderId = String(n.properties[AvisOptionsConfig?.key_cart_order]);
                      }
                    }
                    let s = lineItemKey.quantity.wrapper
                      ? o.querySelectorAll(lineItemKey.quantity.wrapper)
                      : [],
                      d = lineItemKey.quantity.input
                        ? o.querySelectorAll(lineItemKey.quantity.input)
                        : [],
                      c = lineItemKey.quantity.decrease
                        ? o.querySelectorAll(lineItemKey.quantity.decrease)
                        : [],
                      l = lineItemKey.quantity.increase
                        ? o.querySelectorAll(lineItemKey.quantity.increase)
                        : [],
                      u = lineItemKey.removeButton
                        ? o.querySelectorAll(lineItemKey.removeButton)
                        : [],
                      editCartSelector = lineItemKey.editButton
                        ? o.querySelectorAll(lineItemKey.editButton)
                        : false;

                    if (
                      AvisOptionsConfig.is_merge_ac_cart &&
                      isMainProduct &&
                      orderId
                    ) {
                      let qtyMainProd = n.quantity;
                      let totalPriceAc = 0;
                      let totalPriceCompareAc = 0;
                      let itemPriceAc = 0;
                      let itemPriceCompareAc = 0;
                      let tempQtyAC = {};
                      let addedOption = {};
                      let acForMainProduct = [];
                      let cartItemsAC = cartItems.filter(
                        (x) =>
                          x?.properties?.hasOwnProperty(AvisOptionsConfig?.key_cart_option) &&
                          (x?.properties[AvisOptionsConfig?.key_cart_order].indexOf(orderId) > -1 || listAddChargeVariantIdSame[x.id]?.includes(orderId))
                      );

                      if (!listOrderIdAC[orderId]) {
                        let orderIdAC = {};
                        cartItemsAC.forEach((x) => {
                          let tempAC = x.properties[AvisOptionsConfig?.key_cart_order].split("*");
                          let timesAc = tempAC.length > 1 ? parseInt(tempAC[tempAC.length - 1]) : 1;
                          orderIdAC[x.key] = {
                            orderId: orderId,
                            variantId: x.id,
                            key: x.key,
                            qty: x.quantity, // Add-on quantity decreases to zero once applied
                            times: timesAc,
                            discount: x.discounts?.length > 0 ? x.discounts[0].title : "",
                            option: x.properties[AvisOptionsConfig?.key_cart_option],
                            price: x.price,
                            final_price: x.final_price
                          };
                          listACByOrderId.push(orderIdAC[x.key]);
                        });
                        listOrderIdAC[orderId] = orderIdAC;
                      }
                      if (shopIdApo === "68940923061" || shopIdApo === "80676552738")
                      {
                        function calPriceAC(listAC)
                        {
                          if (listAC.length === 0) return;
                          listAC.forEach((acItem) => {
                              let qtyAc = acItem.times * qtyMainProd;
                              let needQtyAc = qtyAc - (addedOption[acItem.option] ?? 0);
                              if (needQtyAc > 0)
                              {
                                needQtyAc = Math.min(needQtyAc, acItem.qty);
                              }
                              if (needQtyAc > 0)
                              { 
                                addedOption[acItem.option] = (addedOption[acItem.option] ?? 0) + needQtyAc;
                                listOrderIdAC[orderId][acItem.key].qty -= needQtyAc;
                                acForMainProduct.push({
                                  totalPrice: acItem.final_price * needQtyAc,
                                  totalCompare: acItem.price * needQtyAc,
                                  price: acItem.final_price,
                                  priceCompare: acItem.price
                                });
                              }
                            });
                        }
                        let discountTitle = n.discounts?.length > 0 ? n.discounts[0].title : "";
                        if (discountTitle){
                          let findAc = listACByOrderId.filter(x => x.orderId === orderId && x.discount === discountTitle && x.qty > 0);
                          calPriceAC(findAc);
                        }
                        let findAc = listACByOrderId.filter(x => x.orderId === orderId && x.qty > 0);
                        calPriceAC(findAc);
                        totalPriceAc += acForMainProduct.reduce((acc, item) => acc + item.totalPrice, 0);
                        totalPriceCompareAc += acForMainProduct.reduce((acc, item) => acc + item.totalCompare, 0);
                        itemPriceAc += acForMainProduct.reduce((acc, item) => acc + item.price, 0);
                        itemPriceCompareAc += acForMainProduct.reduce((acc, item) => acc + item.priceCompare, 0);
                      }
                      else
                      {
                        // Check addcharge calculated
                        cartItemsAC = cartItemsAC.filter(
                          (x) =>
                            !listAddChargeUsed[x.key] ||
                            listAddChargeUsed[x.key] < x.quantity
                        );

                        if (shopIdApo === "65651245100")
                        {

                          if (n.total_discount > 0) {
                            let findItemsAc = cartItemsAC.filter((x) => x.total_discount > 0);
                            if (findItemsAc?.length > 0){
                              let temp = JSON.stringify(findItemsAc);
                              cartItemsAC = cartItemsAC.filter(x => !findItemsAc.find(y => y.key === x.key));
                              cartItemsAC = JSON.parse(temp).concat(cartItemsAC);
                            } 
                          }
                          else
                          {
                            let findItemsAc = cartItemsAC.filter((x) => x.total_discount === 0);
                            if (findItemsAc?.length > 0){
                              let temp = JSON.stringify(findItemsAc);
                              cartItemsAC = cartItemsAC.filter(x => !findItemsAc.find(y => y.key === x.key));
                              cartItemsAC = JSON.parse(temp).concat(cartItemsAC);
                            } 
                          }
                        }

                        cartItemsAC.forEach((x) => {
                          let tempAC = x.properties[AvisOptionsConfig?.key_cart_order].split("*");
                          let qtyAc =
                            tempAC.length > 1
                              ? parseInt(tempAC[tempAC.length - 1])
                              : 1;
                          if (qtyAc === 0) {
                            listAddChargeUsed[x.key] += x.quantity;
                            totalPriceAc += x.final_price * x.quantity;
                            totalPriceCompareAc += x.price * x.quantity;

                            if (!addedOption[x.properties[AvisOptionsConfig?.key_cart_option]]) {
                              itemPriceAc +=
                                x.final_price * (qtyAc === 0 ? 1 : qtyAc);
                              itemPriceCompareAc +=
                                x.price * (qtyAc === 0 ? 1 : qtyAc);
                              addedOption[x.properties[AvisOptionsConfig?.key_cart_option]] = true;
                            }
                          } else {
                            let needQtyAc = qtyMainProd * qtyAc;
                            let usedQtyAc = tempQtyAC[x.id] ?? 0;
                            let useQtyAc = needQtyAc - usedQtyAc;
                            if (useQtyAc > 0) {
                              if (x.quantity >= useQtyAc) {
                                tempQtyAC[x.id] =
                                  (tempQtyAC[x.id] ?? 0) + useQtyAc;
                                listAddChargeUsed[x.key] =
                                  (listAddChargeUsed[x.key] ?? 0) + useQtyAc;
                                totalPriceAc += x.final_price * useQtyAc;
                                totalPriceCompareAc += x.price * useQtyAc;
                              } else {
                                tempQtyAC[x.id] =
                                  (tempQtyAC[x.id] ?? 0) + x.quantity;
                                listAddChargeUsed[x.key] =
                                  (listAddChargeUsed[x.key] ?? 0) + x.quantity;
                                totalPriceAc += x.final_price * x.quantity;
                                totalPriceCompareAc += x.price * x.quantity;
                              }

                              if (!addedOption[x.properties[AvisOptionsConfig?.key_cart_option]] || !addedOption[x.title])
                              {
                                itemPriceAc +=
                                x.final_price * (qtyAc === 0 ? 1 : qtyAc);
                                itemPriceCompareAc +=
                                  x.price * (qtyAc === 0 ? 1 : qtyAc);
                                addedOption[x.properties[AvisOptionsConfig?.key_cart_option]] = true;
                                addedOption[x.title] = true;
                              }
                            }
                          }
                        });
                      }

                      let totalPrice = totalPriceAc + n.line_price;
                      let totalTaxPrice = 0;
                      if (shopIdApo === "90902954277") totalTaxPrice = totalPrice + totalPrice * 0.2;
                      if (shopIdApo === '72600387869') {
                        totalPrice = totalPriceAc + n.original_line_price;
                      }
                      let totalCompare =
                        totalPriceCompareAc + n.original_line_price;
                      let itemPrice = itemPriceAc + n.final_price;
                      let itemPriceCompare = itemPriceCompareAc + n.price;
                      for (let priceKey of AvisOptionsConfig.cartitem_price_cartpage) {
                        if (priceKey.total_price) {
                          let priceSelector = o.querySelectorAll(
                            priceKey.total_price
                          );
                          priceSelector.forEach((itemKey) => {
                            let priceHtml = apoFormatMoney(totalPrice);
                            if (
                              itemKey.getAttribute("apo-total-price") !==
                              String(totalPrice)
                            ) {
                              itemKey.setAttribute(
                                "apo-total-price",
                                totalPrice
                              );
                              itemKey.innerHTML = priceHtml;
                            }
                          });
                        }
                        if (totalTaxPrice) {
                          for (let priceKey of ["td.total .vat-price"]) {
                            if (priceKey) {
                              let priceSelector = o.querySelectorAll(priceKey);
                              priceSelector.forEach((itemKey) => {
                                let priceHtml = apoFormatMoney(totalTaxPrice);
                                if (itemKey.getAttribute("apo-tax-price") !== String(totalTaxPrice)) {
                                  itemKey.setAttribute("apo-tax-price", totalTaxPrice);
                                  itemKey.innerHTML = priceHtml;
                                }
                              });
                            }
                          }
                        }
                        if (!shopNotAppendCompare.includes(shopIdApo) && priceKey.total_compare) {
                          let priceSelector = o.querySelectorAll(
                            priceKey.total_compare
                          );
                          priceSelector.forEach((itemKey) => {
                            if (itemKey.getAttribute("product_compare_total"))
                            {
                              totalCompare = parseFloat(itemKey.getAttribute("product_compare_total")) + totalPriceCompareAc;
                            }
                            let priceHtml = apoFormatMoney(totalCompare);
                            if (
                              itemKey.getAttribute("apo-total-compare") !==
                              String(totalCompare)
                            ) {
                              itemKey.setAttribute(
                                "apo-total-compare",
                                totalCompare
                              );
                              itemKey.innerHTML = priceHtml;
                            }
                          });
                        }
                        if (priceKey.price) {
                          for (let priceItem of priceKey.price.split(",")) {
                            let priceSelector = o.querySelectorAll(priceItem);
                            if (priceSelector.length > 0) {
                              priceSelector.forEach((itemKey) => {
                                let priceHtml = apoFormatMoney(itemPrice);
                                if (
                                  !itemKey.getAttribute("apo-total-price") &&
                                  itemKey.getAttribute("apo-price") !==
                                  String(itemPrice)
                                ) {
                                  itemKey.setAttribute("apo-price", itemPrice);
                                  itemKey.innerHTML = priceHtml;
                                }
                              });
                              break;
                            }
                          }
                        }
                        if (!shopNotAppendCompare.includes(shopIdApo) && priceKey.price_compare) {
                          for (let priceItem of priceKey.price_compare.split(
                            ","
                          )) {
                            let priceSelector = o.querySelectorAll(priceItem);
                            if (priceSelector.length > 0) {
                              priceSelector.forEach((itemKey) => {
                                if (itemKey.getAttribute("product_compare"))
                                {
                                  itemPriceCompare = parseFloat(itemKey.getAttribute("product_compare")) + itemPriceCompareAc;
                                }
                                let priceHtml =
                                  apoFormatMoney(itemPriceCompare);
                                if (
                                  itemKey.getAttribute("apo-compare") !==
                                  String(itemPriceCompare)
                                ) {
                                  itemKey.setAttribute(
                                    "apo-compare",
                                    itemPriceCompare
                                  );
                                  if (itemPriceCompare <= itemPrice)
                                  {
                                    itemKey.innerHTML = "";
                                  }
                                  else itemKey.innerHTML = priceHtml;
                                }
                                
                              });
                              break;
                            }
                          }
                        }
                      }
                    }
                    let isHideQuantityInput = shopIdApo === "79163588941";
                    if (isMainProduct && keyMainVariant) {
                      d.forEach((t) => {
                        if (!t.getAttribute("apo-product-group")) {
                          t.setAttribute("apo-product-group", keyMainVariant);
                          if (shopIdApo === "58581549194")
                            t.addEventListener("input", () => {
                              setTimeout(function () {
                                cartPage.handleChangeQuantity(t);
                              }, 200);
                            });
                        }
                      });

                      c.length &&
                        c.forEach((t) => {
                          t.addEventListener("click", function () {
                            if (
                              !t.getAttribute("apo-cart-item") &&
                              shopIdApo === "58581549194"
                            ) {
                              t.setAttribute("apo-cart-item", true);
                              let qtySelector = o.querySelector(
                                lineItemKey.quantity.input
                              );
                              if (qtySelector) {
                                setTimeout(function () {
                                  cartPage.handleChangeQuantity(qtySelector);
                                }, 200);
                              }
                            }
                          });
                        });
                      l.length &&
                        l.forEach((t) => {
                          t.addEventListener("click", function () {
                            if (
                              !t.getAttribute("apo-cart-item") &&
                              shopIdApo === "58581549194"
                            ) {
                              t.setAttribute("apo-cart-item", true);
                              let qtySelector = o.querySelector(
                                lineItemKey.quantity.input
                              );
                              if (qtySelector) {
                                setTimeout(function () {
                                  cartPage.handleChangeQuantity(qtySelector);
                                }, 200);
                              }
                            }
                          });
                        });
                    }

                    // Add key apo option for quantity input of cart item
                    if (apoOption) {
                      d.forEach((t) => {
                        let apoAttr = "apo-order";
                        if (String(apoOption).indexOf("Added by:") > -1) {
                          apoAttr = "apo-order-child";
                        }

                        if (!t.getAttribute(apoAttr)) {
                          t.setAttribute(apoAttr, String(apoOption));
                        }
                      });
                    }

                    // Add class for cart item addcharge
                    if (!window.AvisOptionsData?.NotHandleCart && a) {
                      s.length &&
                        s.forEach((t) => t.classList.add("apo-opacity-05")),
                        d.length &&
                        d.forEach((t) => {
                          isHideQuantityInput
                            ? t.classList.add("apo-hidden")
                            : (t.readOnly = true);
                          t.setAttribute(
                            "apo-parent-product-group",
                            n.properties["_apo_added_by"]
                          );
                        }),
                        c.length &&
                        c.forEach((t) => t.classList.add("apo-hidden")),
                        l.length &&
                        l.forEach((t) => t.classList.add("apo-hidden")),
                        u.length &&
                        u.forEach((t) => t.classList.add("apo-hidden")),
                        editCartSelector &&
                        editCartSelector.length > 0 &&
                        editCartSelector.forEach((t) =>
                          t.classList.add("apo-hidden")
                        );
                      o.classList.add("apo-cart-item");
                    }
                  })(n, p),
                  p && r.properties && r.properties.hasOwnProperty("_has_apo"),
                  p && editOptions && addHandleEditCart(n, p, r, lineItemKey),
                  shopIdApo === "89147965763" && p && editOptions && addHandleEditCartForPreview(n, p, r, lineItemKey));
            });
          }
          let listUseAc = [];
          disable_quantity_and_remove &&
            ((t) => {
              let e = t.map((t) => t.variant_id);
              if (e.length > 0) {
                let e = { updates: {} };
                let cartItemNeedUpdate = {};
                !window?.AvisOptionsData?.NotHandleCart && t.forEach((o, n) => {
                  if (
                    !(Object.keys(o.properties).length === 0) &&
                    (o.properties.hasOwnProperty("_apo_added_by") ||
                      o.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option))
                  ) {
                    let isApoOption =
                      o.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_option);
                    if (isApoOption) {
                      let optionData = o.properties[AvisOptionsConfig?.key_cart_order];
                      let key = `${o.id}_${optionData}_${o.properties[AvisOptionsConfig?.key_cart_option]}`;
                      if (!cartItemNeedUpdate[key]) {
                        let isOneTime = true;
                        let orderIdArr = optionData
                          .replace("Added by: ", "")
                          ?.split("*");
                        let orderId = orderIdArr[0]?.trim();
                        let quantityOfAddcharge = 0;
                        if (orderIdArr.length > 1) {
                          isOneTime = false;
                          quantityOfAddcharge = parseInt(
                            orderIdArr[1]?.trim() ?? 1
                          );
                        }

                        if(orderIdArr.length > 2) isOneTime = true;

                        let addcharges = t.filter(
                          (x) =>
                            x.id === o.id &&
                            o.properties[AvisOptionsConfig?.key_cart_option] ===
                            x.properties[AvisOptionsConfig?.key_cart_option] &&
                            o.properties[AvisOptionsConfig?.key_cart_order] ===
                            x.properties[AvisOptionsConfig?.key_cart_order]
                        );
                        let totalAddcharge = addcharges.reduce(
                          (n, { quantity }) => n + quantity,
                          0
                        );
                        let cartItemsHasOptionBundle = t.filter(
                          (t) =>
                            !(Object.keys(t.properties).length === 0) &&
                            t.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
                            String(t.properties[AvisOptionsConfig?.key_cart_order]) === orderId
                        );
                        let totalQuantityMain = cartItemsHasOptionBundle.reduce(
                          (n, { quantity }) => n + quantity,
                          0
                        );
                        let quantityAc = 0;
                        if (isOneTime) {
                          quantityAc = 1;
                          if(orderIdArr.length > 2) quantityAc = parseInt(orderIdArr[1]?.trim() ?? 1);
                          if (totalQuantityMain === 0) quantityAc = 0;
                        } else {
                          quantityAc = totalQuantityMain * quantityOfAddcharge;
                        }

                        if (totalAddcharge !== quantityAc && !o?.properties?.hasOwnProperty("_apo_qty_by_ac")) {
                          cartItemNeedUpdate[key] = true;
                          let index = 0;
                          for (let itemAc of addcharges) {
                            e.updates[itemAc.key] =
                              index === 0 ? quantityAc : 0;
                            index++;
                          }
                        }
                      }
                    } else {
                      let optionData = o.properties["_apo_added_by"];
                      let quantity = 0;

                      let cartItemsHasOptionBundle = t.filter(
                        (t) =>
                          !(Object.keys(t.properties).length === 0) &&
                          t.properties.hasOwnProperty("_apo_variants") &&
                          t.properties["_apo_variants"]
                            .split(joinAddChargeApo)
                            .find((x) => x.indexOf(optionData) > -1)
                      );

                      let addcharges = t.filter(
                        (x) =>
                          x.id === o.id &&
                          o.properties["_apo_added_by"] ===
                          x.properties["_apo_added_by"]
                      );
                      let totalAddcharge = addcharges.reduce(
                        (n, { quantity }) => n + quantity,
                        0
                      );
                      let totalAddChargeInOrg = 0;
                      if (cartItemsHasOptionBundle.length > 0) {
                        for (let item of cartItemsHasOptionBundle) {
                          let apoVariant = item.properties["_apo_variants"]
                            .split(joinAddChargeApo)
                            .find((x) => x.indexOf(optionData) > -1);
                          if (apoVariant) {
                            if (apoVariant.indexOf("*") > -1) {
                              totalAddChargeInOrg +=
                                item.quantity *
                                parseInt(
                                  apoVariant.split("*")[
                                  apoVariant.split("*").length - 1
                                  ]
                                );
                            } else {
                              totalAddChargeInOrg += 1;
                            }
                          }
                        }
                      }

                      if (cartItemsHasOptionBundle.length === 0)
                      {
                        e.updates[o.key] = 0;
                      }
                      else
                      {
                        if (totalAddcharge !== totalAddChargeInOrg)
                        {
                          let newQuantity = 0;
                          if (!listUseAc.includes(optionData))
                          {
                            newQuantity = totalAddChargeInOrg;
                            listUseAc.push(optionData);
                          }
                          else
                          {
                            newQuantity = 0;
                          }
  
                          if (listCartUpdate[o.key] !== newQuantity)
                          {
                            e.updates[o.key] = newQuantity;
                            listCartUpdate[o.key] = newQuantity;
                          }
                        }
                      }
                    }
                  }
                  else if (o.properties &&
                    !(Object.keys(o.properties).length === 0) && o.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order)
                    && String(o.properties[AvisOptionsConfig?.key_cart_order]).indexOf("Added by:") === -1) {
                    let orderId = o.properties[AvisOptionsConfig?.key_cart_order];
                    let isOnlyAppBundle = typeof orderId === "string"
                      ? (orderId.includes("bundle") && !orderId.includes(","))
                      : false;
                    if (!isOnlyAppBundle)
                    {
                      let cartItemsAC = t.filter(
                        (t) =>
                          !(Object.keys(t.properties).length === 0) &&
                          t.properties.hasOwnProperty(AvisOptionsConfig?.key_cart_order) &&
                          String(t.properties[AvisOptionsConfig?.key_cart_order]).indexOf(`Added by: ${orderId}`) > -1
                      );
                      // Remove main product if not exist AC
                      if (cartItemsAC.length === 0 && !o?.properties?.hasOwnProperty("_apo_qty_by_ac")) {
                        e.updates[o.key] = 0;
                      }
                    }
                  }
                }),
                  Object.keys(e.updates).length === 0 ||
                  priceModCart.updateCart(e, (res) => {
                    if (window.ap_front_settings?.page_type === "cart") 
                    {
                      if (!res?.status) {
                        window.location.reload();
                      } else {
                        window.avisEnabledBtnCheckout();
                      }
                    }
                  }),
                  Object.keys(e.updates).length === 0 && updateViewCartItem();
                if (Object.keys(e.updates).length === 0){
                  window.ap_front_settings?.page_type === "cart" && window.avisEnabledBtnCheckout();
                  isLoadedCartPage = true;
                }
              } else {
                let e = {
                  updates: {},
                };
                !window?.AvisOptionsData?.NotHandleCart && t.forEach((o, n) => {
                  if (
                    o.properties &&
                    o.properties.hasOwnProperty("_apo_added_by")
                  ) {
                    let optionData = o.properties["_apo_added_by"];
                    let quantity = 0;

                    let cartItemsHasOptionBundle = t.filter(
                      (t) =>
                        !(Object.keys(t.properties).length === 0) &&
                        t.properties.hasOwnProperty("_apo_variants") &&
                        t.properties["_apo_variants"]
                          .split(joinAddChargeApo)
                          .find((x) => x.indexOf(optionData) > -1)
                    );

                    if (cartItemsHasOptionBundle.length > 0) {
                      for (let item of cartItemsHasOptionBundle) {
                        let isCheckUseAddchage =
                          o.discounts?.length &&
                          item?.discounts?.length &&
                          o.discounts.find((x) =>
                            item?.discounts.find((y) => y.title === x.title)
                          );
                        if (!isCheckUseAddchage)
                          isCheckUseAddchage =
                            !o.discounts?.length && !item?.discounts?.length;
                        if (isCheckUseAddchage) {
                          let apoVariant = item.properties["_apo_variants"]
                            .split(joinAddChargeApo)
                            .find((x) => x.indexOf(optionData) > -1);
                          if (apoVariant) {
                            if (apoVariant.indexOf("*") > -1) {
                              quantity +=
                                item.quantity *
                                parseInt(
                                  apoVariant.split("*")[
                                  apoVariant.split("*").length - 1
                                  ]
                                );
                            } else {
                              quantity += 1;
                            }
                          }
                        }
                      }
                    }
                    if (o.quantity != quantity) {
                      e.updates[o.key] = quantity;
                    }
                  }
                }),
                  Object.keys(e.updates).length === 0 ||
                  priceModCart.updateCart(e, () => {
                    if (["69790695637","65250099374","65303412928","87691559199","24982126654","89600098628","26831880303","89147965763","7175001","70445269049"].includes(shopIdApo)) {
                      setInterval(function () {
                        if (window.ap_front_settings.page_type === "cart") window.location.reload();
                      }, 300);
                    }
                    else {
                      window.location.reload();
                    }
                  }),
                  Object.keys(e.updates).length === 0 && updateViewCartItem();
                if (Object.keys(e.updates).length === 0){
                  window.ap_front_settings?.page_type === "cart" && window.avisEnabledBtnCheckout();
                  isLoadedCartPage = true;
                }
              }
            })(cartItems);

        }
        if (["69571051556", "69790695637", "65250099374", "65303412928", "87691559199", '24982126654', "89600098628", "26831880303", "67395748030", "89147965763", "7175001","70445269049"].includes(shopIdApo) && currentLineItemKey && window.ap_front_settings.page_type === "cart") {
          setTimeout(function () {
            let cartItemSelector = document.querySelectorAll(currentLineItemKey.key);
            if (cartItems.length !== cartItemSelector.length) {
              window.location.reload();
            }
          }, 300);
        }

      },
      onCartPageUpdated: function (lineItemKeys) {
        window.ap_front_settings?.page_type === "cart" && window.avisDisabledBtnCheckout();
        let isOk = false;
        for (let lineItemInfo of lineItemKeys) {
          let lineItemKey = lineItemInfo.key;
          if (!lineItemKey.details) lineItemKey = lineItemInfo;
          let lineItemElems = document.querySelectorAll(lineItemKey.key);
          if (lineItemElems && lineItemElems.length > 0) {
            for (let lineItem of lineItemElems) {
              let d = lineItemKey.quantity.input
                ? lineItem.querySelectorAll(lineItemKey.quantity.input)
                : [],
                c = lineItemKey.quantity.decrease
                  ? lineItem.querySelectorAll(lineItemKey.quantity.decrease)
                  : [],
                l = lineItemKey.quantity.increase
                  ? lineItem.querySelectorAll(lineItemKey.quantity.increase)
                  : [],
                g = lineItem.querySelectorAll(lineItemKey.details);

              if (
                (!lineItemKey.quantity.input || d.length > 0) &&
                (!lineItemKey.quantity.decrease || c.length > 0) &&
                (!lineItemKey.quantity.increase || l.length > 0) &&
                g.length > 0
              ) {
                isOk = true;
                currentLineItemKey = lineItemKey;
                cartPage.handleCartUpdate(lineItemKey)
                break;
              }

              if (isOk) break;
            }
            if (isOk) break;
          }
        }

        if (!isOk && cartPage.numberRepeatInterval > 19) {
          window.ap_front_settings?.page_type === "cart" && window.avisEnabledBtnCheckout();
          console.log("APO Not Found Key Item Cart List");
        }
      },
      initCartPage: function () {
        priceMod = AvisOptionsData?.priceMod;
        priceModCart = AvisOptionsData?.priceModCart;
        if (!priceMod) {
          return;
        }

        cartPage.numberRepeatInterval += 1;
        if (!AvisOptionsConfig.them_key)
          AvisOptionsConfig.them_key = {
            cart: {
              page: {
                form: false,
                lineitem: false,
              },
            },
          };

        if (window.AvisOptionsData?.updateCart_cartPage_form?.length > 0)
        {
          AvisOptionsConfig.them_key.cart.page.form = [window.AvisOptionsData.updateCart_cartPage_form].concat(AvisOptionsConfig.them_key.cart.page.form);
        }

        let cartForm = getElementByKeys(
          AvisOptionsConfig.them_key.cart.page.form
        );
        if (!cartForm) {
          if (window?.ap_front_settings?.page_type === "cart") {
            console.log(
              "APO Not Found Form Of Cart Page Repeat: ",
              cartPage.numberRepeatInterval
            );
          }
          return;
        }

        cartPage.isApplyFormCart = true;
        if ((Shopify.theme && Shopify.theme.name) || window.BOOMR?.themeName) {
          let filterData = AvisOptionsConfig.them_key.cart.page.lineitem.filter(
            (e) =>
              !e.theme_name ||
              (Shopify?.theme?.name &&
                Shopify.theme.name.indexOf(e.theme_name) > -1) ||
              (window.BOOMR?.themeName &&
                e.theme_name.indexOf(window.BOOMR?.themeName) > -1) ||
              e?.theme_name === Shopify?.theme?.schema_name
          );
          if (filterData.length > 0)
            AvisOptionsConfig.them_key.cart.page.lineitem = filterData;
        }
        if (window.AvisOptionsData?.updateCart_cartPage?.length > 0)
        {
          AvisOptionsConfig.them_key.cart.page.lineitem = window.AvisOptionsData?.updateCart_cartPage.concat(AvisOptionsConfig.them_key.cart.page.lineitem);
        }
        this.onCartPageUpdated(AvisOptionsConfig.them_key.cart.page.lineitem);
       if (!["60373073962", "37816795272"].includes(shopIdApo))
       {
        new MutationObserver(this.onCartPageUpdated.bind(
          this,
          AvisOptionsConfig.them_key.cart.page.lineitem
        )).observe(cartForm, {
          childList: !0,
          subtree: !0,
        });
       }
      },
    };

    document.addEventListener("DOMContentLoaded", function () {
      cartPage.initCartPage();
    });
    
    let intervalCheckCart = setInterval(function () {
      if (cartPage.isApplyFormCart) {
        clearInterval(intervalCheckCart);
      } else {
        if (cartPage.numberRepeatInterval > 10) {
          clearInterval(intervalCheckCart);
        } else cartPage.initCartPage();
      }
    }, 500);
  }

  apiHandleCart();

  function apoRemoveHrefAddChargeProduct() {
    let intervalRemoveHref = setInterval(function () {
      let apElementsCartPage = document.querySelector(".apo-cart-item");
      if (apElementsCartPage) {
        var links = document.querySelectorAll(".apo-cart-item a");
        links.forEach(function (link) {
          if (link.getAttribute("href")?.includes("products/")) {
            link.removeAttribute("href");
          }
        });
        clearInterval(intervalRemoveHref);
      }
      let apElementsMiniCart = document.querySelector(".apo-cart-item-mini");
      if (apElementsMiniCart) {
        var links = document.querySelectorAll(".apo-cart-item-mini a");
        links.forEach(function (link) {
          if (link.getAttribute("href")?.includes("products/")) {
            link.removeAttribute("href");
          }
        });
        clearInterval(intervalRemoveHref);
      }
    }, 100);
  }
  apoRemoveHrefAddChargeProduct();
}
if (["87487840561"].includes(window.ap_front_settings?.shop_id)) {
  window.apo_loadCart = apo_MiniCart;
}
let isShopNotHandleCart = ["73848324374", "87361585444", "74988683547", "70071189821", "55533404247", "74550903086"].includes(window.ap_front_settings?.shop_id);
if (window?.AvisOptionsData && !window?.AvisOptionsData?.NotHandleCart) window.AvisOptionsData["NotHandleCart"] = isShopNotHandleCart
if (window.ap_front_settings?.shop_id)
  {
    if (!window.apo_js_loaded.minicart) {
      apo_MiniCart();
    }
  }
  else
  {
      let index = 0;
      let interMiniCart = setInterval(function(){
      index++;
      if (window.ap_front_settings?.shop_id)
      {
          clearInterval(interMiniCart);
          if (!window.apo_js_loaded.minicart) {
            apo_MiniCart();
          }
      }
      if (index > 1000)
      {
          clearInterval(interMiniCart);
      }
      }, 200);
  }
