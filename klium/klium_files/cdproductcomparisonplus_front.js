/**
 * NOTICE OF LICENSE
 *
 * ---------------------------------------------------
 *
 *  @author    : CD Presta <cdpresta@gmail.com>
 *  @copyright : 2016-2022
 *  @license   : Commercial License
 *  @version   : 2.5.1
 * ---------------------------------------------------
 */
(function () {
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }

    var Scrollbar = /*#__PURE__*/function () {
        function Scrollbar() {
            _classCallCheck(this, Scrollbar);

            this._scrollbarWidth = this.getWidth();
            this._fixedRightEls = [];
        }

        _createClass(Scrollbar, [{
            key: "width",
            get: function get() {
                return this._scrollbarWidth;
            }
        }, {
            key: "getWidth",
            value: function getWidth() {
                var docEl = document.documentElement;
                var windowWidth = window.innerWidth || docEl.clientWidth || document.body.clientWidth;
                var docWidth = Math.max(docEl.clientWidth, docEl.offsetWidth, docEl.scrollWidth);
                return Math.abs(windowWidth - docWidth);
            }
        }, {
            key: "hide",
            value: function hide() {
                var _this = this;

                var actualPadding = document.body.style.paddingRight;
                var calculatedPadding = parseFloat($(document.body).css("paddingRight"));
                $(document.body).data({
                    overflow: document.body.style.overflow,
                    paddingRight: actualPadding
                });
                document.body.style.paddingRight = "".concat(calculatedPadding + this._scrollbarWidth, "px");
                document.body.style.overflow = "hidden";

                this._fixedRightEls.forEach(function (el) {
                    if (el) {
                        var actualMargin = el.style.marginRight;
                        var calculatedMargin = parseFloat($(el).css("marginRight"));
                        $(el).data("marginRight", actualMargin);
                        el.style.marginRight = "".concat(calculatedMargin + _this._scrollbarWidth, "px");
                    }
                });
            }
        }, {
            key: "show",
            value: function show() {
                var actualPadding = $(document.body).data("paddingRight");
                document.body.style.paddingRight = actualPadding ? actualPadding : "";
                document.body.style.overflow = $(document.body).data("overflow");
                $(document.body).removeData(["overflow", "paddingRight"]);

                this._fixedRightEls.forEach(function (el) {
                    if (el) {
                        var actualMargin = $(el).data("marginRight");
                        el.style.marginRight = actualMargin ? actualMargin : "";
                        $(el).removeData("marginRight");
                    }
                });
            }
        }, {
            key: "addFixedRightEl",
            value: function addFixedRightEl(el) {
                this._fixedRightEls.push(el);
            }
        }]);

        return Scrollbar;
    }();
    var Scrollbar$1 = new Scrollbar();

    function removeElements(els) {
        if (!els) {
            return false;
        }

        els = els instanceof HTMLElement ? [els] : [].slice.call(els);
        els.forEach(function (el) {
            return el.parentNode.removeChild(el);
        });
    }

    function supportsLocalStorage() {
        try {
            window.localStorage.setItem("supportCheck", "supportCheck");
            window.localStorage.removeItem("supportCheck");
            return true;
        } catch (e) {
            return false;
        }
    }

    var supportsLocalStorage$1 = supportsLocalStorage();

    /**
     * NOTICE OF LICENSE
     *
     * ---------------------------------------------------
     *
     *  @author    : CD Presta <cdpresta@gmail.com>
     *  @copyright : 2016-2022
     *  @license   : Commercial License
     *  @version   : 2.5.1
     * ---------------------------------------------------
     */
    $(document).ready(function () {
        var doc = document;
        var tableDiffType = parseInt(window.cdpcpConfig.highlightType) || false; // Curves taken from Google's Material design language

        var animationEasings = {
            _default: [0.4, 0.0, 0.2, 1],
            _enterScreen: [0.0, 0.0, 0.2, 1],
            _exitScreen: [0.4, 0.0, 0.6, 1]
        }; // Some devices will wait extremely long amounts of time before
        // triggering an AJAX error (i.e. if disconnected from network)
        // Set a timeout for calls

        var ajaxTimeout = 15000; // Need updated dependent on config values

        var isStickyFooterVisible;
        var cdpcpEl;
        var $cdpcp;
        window.cdpcpButton = window.cdpcpButton.trim();
        /*============================================================================
        POLYFILLS
        ============================================================================*/
        // element.matches( selectorString )

        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        } // element.closest( selectors )


        if (!Element.prototype.closest) {
            Element.prototype.closest = function (s) {
                var el = this;

                do {
                    if (el.matches(s)) {
                        return el;
                    }

                    el = el.parentElement || el.parentNode;
                } while (el !== null && el.nodeType === 1);

                return null;
            };
        }
        /*============================================================================
        INITIALIZATION
        ============================================================================*/


        window.cdpcpInit = function () {
            if (window.cdpcpConfig.stickyFooterEnabled) {
                cdpcpEl = doc.getElementById("cdproductcomparisonplus");
                $cdpcp = $(cdpcpEl);
                var numStickyFooterItems = cdpcpEl ? cdpcpEl.getElementsByClassName("cdpcp__item").length : 0;
                isStickyFooterVisible = Boolean(numStickyFooterItems);

                if (isStickyFooterVisible) {
                    $(doc.body).addClass("cdpcp-show-sticky-footer");
                }

                if (supportsLocalStorage$1 && window.localStorage.getItem("cdpcpTrayCollapsed")) {
                    $cdpcp.addClass("cdpcp--collapsed");
                }

                if (isStickyFooterVisible) {
                    showStickyFooter();
                }

                Scrollbar$1.addFixedRightEl(cdpcpEl);
                bindStickyFooterHandlers();
            }

            bindComparisonTableHandlers();
            assignComparisonTableClasses();
            observeProductListButtons();
            observeProductPageButton();
            addProductListButtonsToEl(doc);
            updateProductPageButton();
            syncFakeMiniatures();
        };

        window.cdpcpInit();
        /*============================================================================
        EVENT HANDLERS AND BINDING FUNCTIONS
        ============================================================================*/

        prestashop.on("updateCart", function () {
            var cartModalEls = doc.getElementsByClassName("cdpcp-cart-modal");

            if (cartModalEls.length) {
                $(cartModalEls).modal("hide");
            }
        }).on("cdpcpCartClick", function (idProduct) {
            var data = {
                action: "cdpcpCart",
                id_product: idProduct
            };
            $.post(prestashop.urls.pages.product, data, null, "json").then(function (resp) {
                $("body").append(resp.html);
                var cdpcpCartModal = $(doc.getElementById("cdpcp-cart-modal-".concat(resp.product.id)));
                cdpcpCartModal.modal("show").on("hidden.bs.modal", function () {
                    cdpcpCartModal.remove();
                }).find("#quantity_wanted").TouchSpin({
                    verticalbuttons: true,
                    verticalupclass: "material-icons touchspin-up",
                    verticaldownclass: "material-icons touchspin-down",
                    buttondown_class: "btn btn-touchspin js-touchspin",
                    buttonup_class: "btn btn-touchspin js-touchspin",
                    min: 1,
                    max: 1000000
                });
            }).fail(function (resp) {
                return prestashop.emit("handleError", {
                    eventType: "cdpcpCartClick",
                    resp: resp
                });
            });
        });
        $(doc) // Taken from http://stackoverflow.com/a/24914782
            // Fixes appearance when opening a popup compare and a quickview on top of it
            .on("show.bs.modal", ".modal", function (e) {
                var zIndex = 9999 + 10 * $(doc.getElementsByClassName("modal")).filter(":visible").length;
                e.currentTarget.style.zIndex = zIndex;
                setTimeout(function () {
                    $(doc.getElementsByClassName("modal-backdrop")).not(".modal-stack").css("z-index", zIndex - 1).addClass("modal-stack");
                }, 0);

                if ((" " + e.currentTarget.className + " ").indexOf(" quickview ") !== -1) {
                    updateQuickviewButton();
                }
            }) // Fixes the scenario when a stacked modal is closed and the remaining modal
            // doesn't recieve scrolling focus
            .on("hidden.bs.modal", ".modal", function () {
                if ($(doc.getElementsByClassName("modal")).filter(":visible").length) {
                    $(doc.body).addClass("modal-open");
                }
            }).on("click", ".cdpcp-compare-btn", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }).on("click", ".cdpcp-compare-btn--remove", function (e) {
            removeProduct(getButtonIdProduct(e.currentTarget));
        }).on("click", ".cdpcp-compare-btn--add", function (e) {
            addProduct(getButtonIdProduct(e.currentTarget));
        }).on("click", ".cdpcp-table__quickview", function (e) {
            var clickedEl = e.currentTarget;
            var idProduct = clickedEl.getAttribute("data-id-product");
            e.preventDefault();
            prestashop.emit('clickQuickView', {
                dataset: {
                    action: "quickview",
                    idProduct: idProduct,
                    idProductAttribute: clickedEl.getAttribute("data-id-product-attribute")
                },
                miniature: $(doc.getElementById("cdpcp-fake-miniature-".concat(idProduct)))
            });
        }).on("click", ".cdpcp-table__add-cart", function (e) {
            e.preventDefault();
            prestashop.emit("cdpcpCartClick", e.currentTarget.getAttribute("data-id-product"));
        }).on("click", ".cdpcp-table__delete", function (e) {
            var idProduct = e.currentTarget.getAttribute("data-id-product");
            var productCellEls = doc.getElementsByClassName("cdpcp-table__product-" + idProduct);
            var innerCellEls = $(productCellEls).children(".cdpcp-table__cell-inner").get();
            var animateFromWidth = productCellEls[0].offsetWidth;
            removeProduct(idProduct);

            if (doc.getElementsByClassName("cdpcp-table__header-cell--product").length === 1) {
                var emptyTableMsgEl = doc.getElementById("cdpcp-empty-table-msg");

                if (emptyTableMsgEl) {
                    $.Velocity(emptyTableMsgEl, "slideDown", {
                        duration: 400,
                        easing: animationEasings._default
                    });
                }

                $.Velocity(doc.getElementById("cdpcp-table-wrapper"), "slideUp", {
                    duration: 400,
                    easing: animationEasings._default,
                    complete: function complete() {
                        return removeProductFromUrl(idProduct);
                    }
                });
            } else {
                $.Velocity(innerCellEls, {
                    opacity: [0, 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [0.625, 1],
                    scaleY: [0.625, 1],
                    translateZ: 0
                }, {
                    duration: 400,
                    easing: animationEasings._default,
                    complete: function complete() {
                        var animatedEls = [];

                        for (var i = innerCellEls.length - 1; i >= 0; i--) {
                            animatedEls.push(innerCellEls[i]);
                        }

                        for (var _i = productCellEls.length - 1; _i >= 0; _i--) {
                            animatedEls.push(productCellEls[_i]);
                        }

                        $.Velocity(animatedEls, {
                            padding: 0,
                            width: [0, animateFromWidth],
                            translateZ: 0
                        }, {
                            display: "none",
                            duration: 400,
                            easing: animationEasings._default,
                            complete: function complete() {
                                removeElements(productCellEls);
                                removeProductFromUrl(idProduct);
                            }
                        });
                    }
                });
            }
        }).on("click", ".cdpcp-compare-now", function (e) {
            var compareUrl = e.currentTarget.href ? e.currentTarget.href : e.currentTarget.getAttribute("data-src");

            if (window.cdpcpConfig.popupCompareEnabled) {
                e.preventDefault();
                openComparePopup(compareUrl);
                closeSlideout();
            } else {
                window.location = compareUrl;
            }
        });

        function bindStickyFooterHandlers() {
            window.addEventListener("scroll", function () {
                if (cdpcpEl) {
                    $.Velocity(cdpcpEl, {
                        translateY: getStickyFooterOffset(),
                        translateZ: 0
                    }, 5);
                }
            });
            $(doc).on("click", "#cdpcp-menu-button", function () {
                openSlideout(doc.getElementById("cdpcp-menu-slideout"));
            }).on("click", "#cdpcp-toggle-tray", function () {
                closeSlideout(toggleStickyFooter);
            }).on("click", ".cdpcp-item__image", function (e) {
                var slideoutEl = $(e.currentTarget).closest(".cdpcp__item")[0].getElementsByClassName("cdpcp__slideout")[0];
                openSlideout(slideoutEl);
            }).on("click", "#cdpcp-backdrop, .cdpcp-slideout__close", function () {
                closeSlideout();
            }).on("click", ".cdpcp-slideout__remove", function (e) {
                var clickedEl = e.currentTarget;
                closeSlideout(function () {
                    return removeProduct(clickedEl.getAttribute("data-id-product"));
                });
            }).on("click", ".cdpcp-slideout__quick-view", function (e) {
                var clickedEl = e.currentTarget;
                var idProduct = clickedEl.getAttribute("data-id-product");
                e.preventDefault();
                prestashop.emit('clickQuickView', {
                    dataset: {
                        action: "quickview",
                        idProduct: idProduct,
                        idProductAttribute: clickedEl.getAttribute("data-id-product-attribute")
                    },
                    miniature: $(doc.getElementById("cdpcp-fake-miniature-".concat(idProduct)))
                });
                closeSlideout();
            }).on("click", ".cdpcp-remove-all", function () {
                closeSlideout(ajaxRemoveAllProducts);
            });
        }

        function addObserver(targetNode, fn) {
            if (window.MutationObserver && targetNode && typeof fn === "function") {
                var observer = new window.MutationObserver(fn);
                observer.observe(targetNode, {
                    childList: true,
                    subtree: true
                });
            }
        }

        function observeProductPageButton() {
            // Mutation observer allows for more dynamic observation of element content changing
            if (window.MutationObserver) {
                addObserver(doc.getElementById("add-to-cart-or-refresh"), updateProductPageButton);
            } else {
                $(doc).ajaxComplete(function (event, xhr, settings) {
                    if (settings && settings.data && settings.data.indexOf("action=refresh") !== -1) {
                        updateProductPageButton();
                    }
                });
            }
        }

        function observeProductListButtons() {
            // Mutation observer allows for more dynamic observation of element content changing
            if (window.MutationObserver) {
                addObserver(doc, addProductListButtonsFromObserver);
            } else {
                prestashop.on("updateProductList", function () {
                    return addProductListButtonsToEl(doc);
                });
            }
        }

        function updateProductPageButton() {
            if (prestashop.page.page_name !== "product") {
                return;
            }

            var idProductEl = doc.getElementById("product_page_product_id");

            if (!idProductEl) {
                return;
            }

            var $button = $(".product-additional-info .cdpcp-compare-btn--no-js, .product-actions .cdpcp-compare-btn--no-js");

            if ($button.length) {
                updateButton($button, idProductEl.value);
            } else {
                $button = $("#product #main .cdpcp-compare-btn--no-js"); // Not a list button

                if (!$button.closest(window.cdpcpConfig.listsButtonSelector).length) {
                    updateButton($button, idProductEl.value);
                }
            }
        }

        function updateQuickviewButton() {
            var idProductEl = doc.querySelector(".modal #product_page_product_id");

            if (idProductEl) {
                updateButton($(".modal .cdpcp-compare-btn--no-js"), idProductEl.value);
            }
        }

        function addProductListButtonsFromObserver(mutations) {
            (mutations || []).forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeType === 1 && node.children.length && node.tagName !== "BUTTON") {
                        addProductListButtonsToEl(node);
                    }
                });
            });
        }

        function addProductListButtonsToEl(el) {
            if (!window.cdpcpConfig.listsButtonSelector) {
                return;
            }

            var elMatchesSelector = typeof el.matches === "function" && el.matches(window.cdpcpConfig.listsButtonSelector);
            var productEls = elMatchesSelector ? [el] : el.querySelectorAll(window.cdpcpConfig.listsButtonSelector);

            for (var i = productEls.length; i--;) {
                var productEl = productEls[i];

                if (productEl.getElementsByClassName("cdpcp-compare-btn--js").length) {
                    continue;
                }

                var $button = $(window.cdpcpButton);

                if (window.cdpcpConfig.listsButtonPosition === "below") {
                    $button.appendTo(productEl).addClass("cdpcp-compare-btn--below-list");
                } else {
                    $button.prependTo(productEl).addClass("cdpcp-compare-btn--above-list");
                }

                updateButton($button, getIdProductFromDom($button));
            }
        }

        function getIdProductFromDom($el) {
            var attr = "data-id-product";
            var $parentIdProductEl = $el.closest("[".concat(attr, "]"));

            if ($parentIdProductEl.length) {
                return $parentIdProductEl.attr(attr);
            }

            var $siblingIdProductEl = $el.siblings("[".concat(attr, "]"));

            if ($siblingIdProductEl.length) {
                return $siblingIdProductEl.attr(attr);
            }

            return null;
        }

        function updateButton($button, idProduct) {
            if (!$button.length || !idProduct) {
                return;
            }

            idProduct = parseInt(idProduct);
            var isBlacklisted = window.cdpcpBlacklistProductIds && window.cdpcpBlacklistProductIds.indexOf(idProduct) !== -1;
            var inComparison = window.cdpcpProductIds && window.cdpcpProductIds.indexOf(idProduct) !== -1;
            var actionClass = inComparison ? "cdpcp-compare-btn--remove" : "cdpcp-compare-btn--add";
            $button.attr("data-id-product", idProduct).removeClass("cdpcp-compare-btn--no-js").addClass("cdpcp-compare-btn--js cdpcp-compare-btn--".concat(idProduct, " ").concat(actionClass)).addClass(isBlacklisted ? "cdpcp-compare-btn--blacklisted" : "");
        }

        function getButtonIdProduct(btnEl) {
            var btnAttr = btnEl.getAttribute("data-id-product");

            if (btnAttr) {
                return btnAttr;
            }

            var parentAttr = btnEl.parentNode.getAttribute("data-id-product");
            return parentAttr;
        }

        function bindComparisonTableHandlers() {
            if (!doc.getElementById("cdpcp-table")) {
                return;
            }

            var highlightBtnEl = doc.getElementById("cdpcp-highlight-btn");
            var printEl = doc.getElementById("cdpcp-print");

            if (highlightBtnEl) {
                highlightBtnEl.addEventListener("click", function () {
                    // Un-focus the element so it looks proper
                    highlightBtnEl.blur(); // Easy hasClass check

                    if ((" " + highlightBtnEl.className + " ").indexOf(" active ") !== -1) {
                        $(highlightBtnEl).removeClass("active");

                        if (tableDiffType === 1 || tableDiffType === 2) {
                            removeTableHighlighting();
                        } else if (tableDiffType === 3 || tableDiffType === 4) {
                            toggleTableRowVis("show");
                        }
                    } else {
                        $(highlightBtnEl).addClass("active");

                        if (tableDiffType === 1 || tableDiffType === 2) {
                            addTableHighlighting();
                        } else if (tableDiffType === 3 || tableDiffType === 4) {
                            toggleTableRowVis("hide");
                        }
                    }
                });
            }

            if (printEl) {
                printEl.addEventListener("click", function () {
                    var withinModal = $(doc.getElementsByClassName("cdpcp-compare-modal__dialog")).has(printEl).length;
                    var titleEl = doc.querySelector(withinModal ? ".modal-title" : ".page-header h1");
                    var logoEl = document.createElement("img");
                    logoEl.className = "cdpcp-print-logo";
                    logoEl.alt = window.prestashop.shop.name;
                    logoEl.src = window.prestashop.shop.logo;
                    var printHeader = "".concat(logoEl ? logoEl.outerHTML : "", "<br><br>").concat(titleEl ? titleEl.outerHTML : ""); // Un-focus the element so it looks proper

                    printEl.blur();
                    printEl.disabled = true;
                    $(doc.getElementById("cdpcp-table-wrapper")).print({
                        deferred: $.Deferred().done(function () {
                            return printEl.disabled = false;
                        }),
                        mediaPrint: true,
                        prepend: printHeader,
                        timeout: 1000,
                        title: titleEl ? titleEl.textContent : null
                    });
                });
            }
        }

        function assignComparisonTableClasses() {
            if (!doc.getElementById("cdpcp-table")) {
                return;
            } // Assign classes to td elements based off of similar values within rows


            getRowsByDifferences()._rowsValMaps.forEach(function (rowValMaps) {
                rowValMaps.forEach(function (valMap, i) {
                    $(valMap._els).addClass("cdpcp-table__set-".concat(i + 1));
                });
            });
        }
        /*============================================================================
        ADD AND REMOVE PRODUCT CONVENIENCE FUNCTIONS
        ============================================================================*/


        function addProduct(idProduct) {
            idProduct = parseInt(idProduct);
            var $compareBtns = $(doc.getElementsByClassName("cdpcp-compare-btn--" + idProduct)); // This product is already in the comparison list, fix display and exit early

            if (window.cdpcpProductIds.indexOf(idProduct) !== -1) {
                $compareBtns.removeClass("cdpcp-compare-btn--add").addClass("cdpcp-compare-btn--remove");
                return;
            }

            $compareBtns.prop("disabled", true).addClass("cdpcp-compare-btn--loading");
            ajaxAddProduct(idProduct, true).done(function (data) {
                if (data && data.status === "Success") {
                    $compareBtns.removeClass("cdpcp-compare-btn--add").addClass("cdpcp-compare-btn--remove");
                }
            }).always(function () {
                $compareBtns.prop("disabled", false).removeClass("cdpcp-compare-btn--loading");
            });
        }

        function removeProduct(idProduct) {
            idProduct = parseInt(idProduct);
            var $compareBtns = $(doc.getElementsByClassName("cdpcp-compare-btn--" + idProduct)); // This product is not in the comparison list, fix display and exit early

            if (window.cdpcpProductIds.indexOf(idProduct) === -1) {
                hideStickyFooterProduct(idProduct, function () {
                    return removeStickyFooterProduct(idProduct);
                });
                $compareBtns.removeClass("cdpcp-compare-btn--remove").addClass("cdpcp-compare-btn--add");
                return;
            }

            $compareBtns.prop("disabled", true).addClass("cdpcp-compare-btn--loading"); // Remove via ajax if using cookie

            if (window.cdpcpUsingCookie !== false) {
                ajaxRemoveProduct(idProduct, true).done(function (data) {
                    if (data && data.status === "Success") {
                        $compareBtns.removeClass("cdpcp-compare-btn--remove").addClass("cdpcp-compare-btn--add");
                        syncFakeMiniatures();
                    }
                }).fail(function () {
                    hideStickyFooterProduct(idProduct, function () {
                        return removeStickyFooterProduct(idProduct);
                    });
                }).always(function () {
                    $compareBtns.prop("disabled", false).removeClass("cdpcp-compare-btn--loading");
                });
            }
        }
        /*============================================================================
        FAKE MINIATURE FUNCTIONS
        ============================================================================*/


        function syncFakeMiniatures() {
            var fakeContainerEl = doc.getElementById("cdpcp-fake-miniatures");
            var miniaturesDomString = window.cdpcpProductIds.map(function (id) {
                return "<article class=\"js-product-miniature\" id=\"cdpcp-fake-miniature-".concat(id, "\" data-id-product=\"").concat(id, "\" data-id-product-attribute=\"0\"></article>");
            }).join("");

            if (fakeContainerEl.children.length) {
                removeElements(fakeContainerEl.children);
            }

            fakeContainerEl.insertAdjacentHTML("beforeend", miniaturesDomString);
        }
        /*============================================================================
        STICKY FOOTER FUNCTIONS
        ============================================================================*/


        function getStickyFooterOffset() {
            if (isStickyFooterVisible) {
                var overflowHeight = doc.body.scrollHeight - doc.body.offsetHeight;
                var cdpcpHeight = cdpcpEl.offsetHeight;

                if (overflowHeight > cdpcpHeight) {
                    var distanceFromBottom = doc.body.scrollHeight - window.innerHeight - window.pageYOffset; // Stay between el height and 0

                    return Math.min(cdpcpHeight, Math.max(0, cdpcpHeight - distanceFromBottom));
                } else {
                    return 0;
                }
            }

            return 0;
        }

        function toggleStickyFooter() {
            var animateEl = doc.getElementById("cdpcp-items-wrapper");
            var isCollapsed = $cdpcp.hasClass("cdpcp--collapsed");
            $.Velocity(animateEl, {
                // Go over 100% in case scrollbars flicker (i.e. fancybox)
                // and in cases like IE where scrollbars are partially transparent
                translateX: isCollapsed ? [0, "140%"] : ["140%", 0],
                translateZ: 0
            }, {
                duration: 300,
                easing: animationEasings[isCollapsed ? "enterScreen" : "exitScreen"],
                visibility: "visible",
                begin: function begin() {
                    if (isCollapsed) {
                        animateEl.style.visibility = "hidden";
                        $cdpcp.removeClass("cdpcp--collapsed");
                    }
                },
                complete: function complete() {
                    if (!isCollapsed) {
                        $cdpcp.addClass("cdpcp--collapsed");
                    } // Remove inline styles set by velocity - prevents slideouts from
                    // messing up


                    animateEl.removeAttribute("style");
                }
            });

            if (supportsLocalStorage$1) {
                if (isCollapsed) {
                    // No longer collapsed
                    window.localStorage.removeItem("cdpcpTrayCollapsed");
                } else {
                    // Now collapsed
                    window.localStorage.setItem("cdpcpTrayCollapsed", 1);
                }
            }
        }

        function showStickyFooter(cb) {
            isStickyFooterVisible = true;
            $(doc.body).addClass("cdpcp-show-sticky-footer");
            $.Velocity(cdpcpEl, "stop");
            $.Velocity(cdpcpEl, {
                translateY: [getStickyFooterOffset(), "140%"],
                translateZ: 0
            }, {
                display: "block",
                duration: 300,
                easing: animationEasings._enterScreen,
                complete: function complete() {
                    cdpcpEl.style.transform = "";

                    if (typeof cb === "function") {
                        cb();
                    }
                }
            });
        }

        function hideStickyFooter() {
            isStickyFooterVisible = false;
            $.Velocity(cdpcpEl, "stop");
            $.Velocity(cdpcpEl, {
                translateY: ["140%", getStickyFooterOffset()],
                translateZ: 0
            }, {
                display: "none",
                duration: 300,
                easing: animationEasings._exitScreen,
                complete: function complete() {
                    cdpcpEl.style.transform = "";
                    $(doc.body).removeClass("cdpcp-show-sticky-footer");
                }
            });
        }

        function hideStickyFooterProduct(idProduct, cb) {
            var compareProductEl = doc.getElementById("cdpcp-item-" + idProduct);
            var animateFromWidth;

            if (!compareProductEl) {
                if (typeof cb === "function") {
                    cb();
                }

                return false;
            }

            animateFromWidth = compareProductEl.offsetWidth;
            $.Velocity(compareProductEl, "stop");
            $.Velocity(compareProductEl, {
                opacity: [0, 1],
                transformOriginX: ["50%", "50%"],
                transformOriginY: ["50%", "50%"],
                scaleX: [0.625, 1],
                scaleY: [0.625, 1],
                translateZ: 0
            }, {
                duration: 200,
                easing: animationEasings._default
            });
            $.Velocity(compareProductEl, {
                width: [0, animateFromWidth],
                translateZ: 0
            }, {
                display: "none",
                duration: 200,
                easing: animationEasings._default,
                complete: function complete() {
                    if (typeof cb === "function") {
                        cb();
                    }
                }
            });

            if (isStickyFooterVisible && !window.cdpcpNumCompareProducts) {
                hideStickyFooter();
            }
        }

        function removeStickyFooterProduct(idProduct) {
            removeElements(doc.getElementById("cdpcp-item-" + idProduct));
        }

        function removeAllStickyFooterProducts() {
            if (cdpcpEl) {
                removeElements(cdpcpEl.getElementsByClassName("cdpcp__item"));
            }
        }

        function showStickyFooterProduct(idProduct) {
            var compareProductEl = doc.getElementById("cdpcp-item-" + idProduct);
            var animateToWidth;

            if (!compareProductEl) {
                return false;
            } // Can't easily get width without jQuery because the element
            // isn't visible yet


            animateToWidth = $(compareProductEl).width();
            $.Velocity(compareProductEl, "stop");
            $.Velocity(compareProductEl, {
                width: [animateToWidth, 0],
                translateZ: 0
            }, {
                display: "inline-block",
                duration: 200,
                easing: animationEasings._default
            });
            $.Velocity(compareProductEl, {
                opacity: [1, 0],
                transformOriginX: ["50%", "50%"],
                transformOriginY: ["50%", "50%"],
                scaleX: [1, 0.625],
                scaleY: [1, 0.625],
                translateZ: 0
            }, {
                duration: 200,
                easing: animationEasings._default,
                complete: function complete() {
                    // Remove inline styles set by velocity - prevents slideouts
                    // from messing up
                    compareProductEl.removeAttribute("style");
                }
            });

            if (!isStickyFooterVisible) {
                showStickyFooter();
            }
        }
        /*============================================================================
        SLIDEOUT FUNCTIONS
        ============================================================================*/


        function openSlideout(slideoutEl) {
            var slideoutCloneEl = slideoutEl.cloneNode(true);
            doc.body.appendChild(slideoutCloneEl);
            $.Velocity(slideoutCloneEl, "slideDown", {
                display: "block",
                duration: 350,
                easing: animationEasings._enterScreen,
                begin: function begin() {
                    var backdropEl = doc.getElementById("cdpcp-backdrop");

                    if (backdropEl) {
                        $.Velocity(backdropEl, "fadeIn", 350);
                    }

                    Scrollbar$1.hide();
                },
                complete: function complete() {
                    $(slideoutCloneEl).addClass("cdpcp__slideout--open");
                }
            });
        }

        function closeSlideout(cb) {
            var slideoutEl = doc.getElementsByClassName("cdpcp__slideout--open")[0] || null;
            var backdropEl = doc.getElementById("cdpcp-backdrop");

            if (backdropEl) {
                $.Velocity(backdropEl, "fadeOut", 350);
            }

            if (slideoutEl) {
                $.Velocity(slideoutEl, "slideUp", {
                    duration: 350,
                    easing: animationEasings._exitScreen,
                    complete: function complete() {
                        Scrollbar$1.show();
                        removeElements(slideoutEl);

                        if (typeof cb === "function") {
                            cb();
                        }
                    }
                });
            } else {
                if (typeof cb === "function") {
                    cb();
                }
            }
        }
        /*============================================================================
        TABLE HIGHLIGHTING FUNCTIONS
        ============================================================================*/


        function getRowsByDifferences() {
            var featureTrEls = doc.getElementById("cdpcp-table").getElementsByClassName("cdpcp-table__feature-row");
            var rowsWithDifferences = [];
            var rowsWithoutDifferences = [];
            var rowsValMaps = [];

            for (var i = featureTrEls.length; i--;) {
                var trEl = featureTrEls[i];
                var tdEls = trEl.getElementsByTagName("td");
                var rowValMap = [];

                var _loop = function _loop(j, len) {
                    var tdEl = tdEls[j];
                    var tdText = (tdEl.textContent || tdEl.innerText).trim().replace(/[\s]+/g, " ");
                    var valGroupIndex = rowValMap.findIndex(function (map) {
                        return map._content === tdText;
                    });

                    if (valGroupIndex === -1) {
                        rowValMap.push({
                            _content: tdText,
                            _els: [tdEl]
                        });
                    } else {
                        rowValMap[valGroupIndex]._els.push(tdEl);
                    }
                };

                for (var j = 0, len = tdEls.length; j < len; j++) {
                    _loop(j, len);
                }

                var rowHasDifferences = rowValMap.length > 1;
                rowsValMaps.push(rowValMap);

                if (rowHasDifferences) {
                    rowsWithDifferences.push(trEl);
                } else {
                    rowsWithoutDifferences.push(trEl);
                }
            }

            return {
                _rowsWithDifferences: rowsWithDifferences,
                _rowsValMaps: rowsValMaps,
                _rowsWithoutDifferences: rowsWithoutDifferences
            };
        }

        function addTableHighlighting() {
            var rowsByDifferences = getRowsByDifferences();
            var highlightEls;

            if (tableDiffType === 1) {
                highlightEls = rowsByDifferences._rowsWithoutDifferences;
            } else if (tableDiffType === 2) {
                highlightEls = rowsByDifferences._rowsWithDifferences;
            }

            if (highlightEls) {
                $(highlightEls).addClass("cdpcp-highlight");
            }
        }

        function removeTableHighlighting() {
            $(doc.getElementById("cdpcp-table").getElementsByClassName("cdpcp-highlight")).removeClass("cdpcp-highlight");
        }

        function toggleTableRowVis(showOrHide) {
            var showRows = showOrHide === "show";
            var rowsByDifferences = getRowsByDifferences();
            var highlightBtnEl = doc.getElementById("cdpcp-highlight-btn");
            var rowsToHideEls;
            var cellEls;
            var innerCellEls;
            var animatedEls = []; // Combination of cellEls and innerCellEls

            if (tableDiffType === 3) {
                rowsToHideEls = rowsByDifferences._rowsWithoutDifferences;
            } else if (tableDiffType === 4) {
                rowsToHideEls = rowsByDifferences._rowsWithDifferences;
            }

            cellEls = $(rowsToHideEls).children(".cdpcp-table__feature-cell").get();
            innerCellEls = $(rowsToHideEls).find(".cdpcp-table__cell-inner").get();
            animatedEls = cellEls.concat(innerCellEls);
            highlightBtnEl.disabled = true;

            if (showRows) {
                $.Velocity(animatedEls, "reverse", {
                    display: "",
                    duration: 300,
                    easing: animationEasings._default,
                    complete: function complete() {
                        $.Velocity(innerCellEls, {
                            opacity: [1, 0],
                            transformOriginX: ["50%", "50%"],
                            transformOriginY: ["50%", "50%"],
                            scaleX: [1, 0.625],
                            scaleY: [1, 0.625],
                            translateZ: 0
                        }, {
                            duration: 300,
                            easing: animationEasings._default,
                            complete: function complete() {
                                highlightBtnEl.disabled = null;
                            }
                        });
                    }
                });
            } else {
                $.Velocity(innerCellEls, {
                    opacity: [0, 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [0.625, 1],
                    scaleY: [0.625, 1],
                    translateZ: 0
                }, {
                    duration: 300,
                    easing: animationEasings._default,
                    complete: function complete() {
                        $.Velocity(animatedEls, {
                            borderWidth: 0,
                            padding: 0,
                            height: 0,
                            translateZ: 0
                        }, {
                            display: "none",
                            duration: 300,
                            easing: animationEasings._default,
                            complete: function complete() {
                                highlightBtnEl.disabled = null;
                            }
                        });
                    }
                });
            }
        }
        /*============================================================================
        AJAX FUNCTIONS
        ============================================================================*/


        function ajaxAddProduct(idProduct, addVisually) {
            return $.ajax({
                cache: false,
                // Ensures we don't get a cached response
                url: prestashop.urls.pages.index,
                data: {
                    action: "add",
                    ajax: true,
                    controller: "compare",
                    fc: "module",
                    id_product: idProduct,
                    module: "cdproductcomparisonplus",
                    token: window.cdpcpToken
                },
                dataType: "json",
                type: "GET",
                timeout: ajaxTimeout
            }).done(function (data) {
                if (data && data.status === "Success") {
                    var productItemsEl = doc.getElementById("cdpcp-items");
                    window.cdpcpProductIds.push(idProduct);
                    syncFakeMiniatures();

                    if (productItemsEl) {
                        var temp = doc.createElement("div");
                        var productEl;
                        temp.innerHTML = data.response;

                        productEl = function getFirstElChild(el) {
                            var firstChild = el.firstChild; // Skip non-element node types

                            while (firstChild !== null && firstChild.nodeType !== 1) {
                                firstChild = firstChild.nextSibling;
                            }

                            return firstChild;
                        }(temp);

                        productItemsEl.insertBefore(productEl, productItemsEl.firstChild);
                        productEl.style.display = "none";
                        productEl.style.opacity = 0;

                        if (addVisually) {
                            showStickyFooterProduct(idProduct);
                        }
                    }

                    updateAllCounts(window.cdpcpNumCompareProducts + 1);
                } else {
                    displayErrorMessage(data.status === "Error" ? data.response : window.cdpcpAjaxErrorMsg);
                }
            }).fail(function (data) {
                displayErrorMessage(data.responseJSON && data.responseJSON.status === "Error" ? data.responseJSON.response : window.cdpcpAjaxErrorMsg);
            });
        }

        function ajaxRemoveProduct(idProduct, removeVisually) {
            updateAllCounts(window.cdpcpNumCompareProducts - 1);

            if (removeVisually) {
                hideStickyFooterProduct(idProduct, function () {
                    return removeStickyFooterProduct(idProduct);
                });
            }

            return $.ajax({
                cache: false,
                // Ensures we don't get a cached response
                url: prestashop.urls.pages.index,
                data: {
                    action: "remove",
                    ajax: true,
                    controller: "compare",
                    fc: "module",
                    id_product: idProduct,
                    module: "cdproductcomparisonplus",
                    token: window.cdpcpToken
                },
                dataType: "json",
                type: "GET",
                timeout: ajaxTimeout
            }).done(function (data) {
                if (data && data.status === "Success") {
                    window.cdpcpProductIds.splice(window.cdpcpProductIds.indexOf(idProduct), 1);
                    syncFakeMiniatures(); // Display error message and revert pre-emptive changes we fired
                } else {
                    displayErrorMessage(data.status === "Error" ? data.response : window.cdpcpAjaxErrorMsg);
                    updateAllCounts(window.cdpcpNumCompareProducts + 1); // Something went wrong - reshow the product

                    if (removeVisually) {
                        addProduct(idProduct);
                    }
                }
            }).fail(function (data) {
                displayErrorMessage(data.responseJSON && data.responseJSON.status === "Error" ? data.responseJSON.response : window.cdpcpAjaxErrorMsg);
                updateAllCounts(window.cdpcpNumCompareProducts + 1); // Something went wrong - reshow the product

                if (removeVisually) {
                    addProduct(idProduct);
                }
            });
        }

        function ajaxRemoveAllProducts() {
            hideStickyFooter();
            return $.ajax({
                cache: false,
                // Ensures we don't get a cached response
                url: prestashop.urls.pages.index,
                data: {
                    action: "removeall",
                    ajax: true,
                    controller: "compare",
                    fc: "module",
                    module: "cdproductcomparisonplus",
                    token: window.cdpcpToken
                },
                dataType: "json",
                type: "GET",
                timeout: ajaxTimeout
            }).done(function (data) {
                if (data && data.status === "Success") {
                    window.cdpcpProductIds = [];
                    syncFakeMiniatures();
                    removeAllStickyFooterProducts();
                    $(doc.getElementsByClassName("cdpcp-compare-btn--remove")).removeClass("cdpcp-compare-btn--remove").addClass("cdpcp-compare-btn--add");
                    updateAllCounts(0);
                } else {
                    displayErrorMessage(data.status === "Error" ? data.response : window.cdpcpAjaxErrorMsg);
                    showStickyFooter();
                }
            }).fail(function (data) {
                displayErrorMessage(data.responseJSON && data.responseJSON.status === "Error" ? data.responseJSON.response : window.cdpcpAjaxErrorMsg);
                showStickyFooter();
            });
        }
        /*============================================================================
        UTILITY FUNCTIONS
        ============================================================================*/


        function getObjFromParamStr(paramStr) {
            var paramsObj = {};
            var splitStrSeg;
            paramStr = paramStr.replace(/^\?/, "").split("&");

            for (var i = paramStr.length - 1; i >= 0; i--) {
                if (paramStr[i]) {
                    splitStrSeg = paramStr[i].split("=");
                    paramsObj[splitStrSeg[0]] = splitStrSeg[1];
                }
            }

            return paramsObj;
        }

        function getParamStrFromObj(paramObj) {
            var paramPairs = [];

            for (var param in paramObj) {
                if (paramObj.hasOwnProperty(param)) {
                    paramPairs.push("".concat(param, "=").concat(paramObj[param]));
                }
            }

            return "?".concat(paramPairs.join("&"));
        }

        function removeProductFromUrl(idProduct) {
            var urlParams = getObjFromParamStr(window.location.search);
            var productsParam = urlParams.products;

            if (!productsParam) {
                return false;
            }

            var productsArr = productsParam.split("-");
            var idProductIndex = productsArr.indexOf(idProduct);
            var newParamsStr = "";

            if (idProductIndex !== -1) {
                productsArr.splice(idProductIndex, 1);

                if (productsArr.length) {
                    urlParams.products = productsArr.join("-");
                } else {
                    // Manually set to 0 (i.e. ?products=0) so we don't switch
                    // to a saved comparison if they deleted the last from a
                    // url-based comparison. Avoids confusion.
                    urlParams.products = "0";
                }

                if (Object.keys(urlParams).length) {
                    newParamsStr = getParamStrFromObj(urlParams);
                }

                window.location = window.location.href.split("?")[0] + newParamsStr;
            }
        }

        function updateAllCounts(numCompareProducts) {
            _updateCompareButtonCount(numCompareProducts);

            _updateStickyFooterCount(numCompareProducts);

            window.cdpcpNumCompareProducts = numCompareProducts;
        }

        function displayErrorMessage(msg) {
            var msgDuration = 15000;

            if (typeof $.growl === "function") {
                $.growl.error({
                    title: window.cdpcpErrorTitle,
                    message: msg,
                    duration: msgDuration
                });
            } else {
                window.alert(msg);
            }
        }

        function openComparePopup(fallbackUrl) {
            $.ajax({
                cache: false,
                // Ensures we don't get a cached response
                url: prestashop.urls.pages.index,
                data: {
                    action: "getcomparetable",
                    ajax: true,
                    controller: "compare",
                    fc: "module",
                    module: "cdproductcomparisonplus"
                },
                dataType: "json",
                type: "GET"
            }).done(function (data) {
                if (data && data.response) {
                    $(doc.body).append(data.response);

                    if (cdpcpConfig.sharingOptions.length) {
                        window.Sharer.init();
                    }

                    var compareModal = $(doc.getElementById("cdpcp-compare-modal"));
                    compareModal.modal("show").on("shown.bs.modal", function () {
                        bindComparisonTableHandlers();
                        assignComparisonTableClasses();
                    }).on("hidden.bs.modal", function () {
                        $(doc.getElementById("cdpcp-share-modal")).remove();
                        compareModal.remove();
                    });
                } else {
                    window.location = fallbackUrl;
                }
            }).fail(function () {
                window.location = fallbackUrl;
            });
        }
        /*============================================================================
        INTERNAL FUNCTIONS
        ============================================================================*/


        function _updateCompareButtonCount(numCompareProducts) {
            var compareCountEl = doc.getElementById("cdpcp-compare-now-count");
            var mainCompareNowEl = doc.getElementById("cdpcp-compare-now-main");

            if (compareCountEl) {
                compareCountEl.innerHTML = numCompareProducts;
            }

            if (mainCompareNowEl) {
                mainCompareNowEl.disabled = !numCompareProducts;
            }
        }

        function _updateStickyFooterCount(numCompareProducts) {
            var menuNumberEl = doc.getElementById("cdpcp-menu-number");

            if (menuNumberEl) {
                menuNumberEl.innerHTML = numCompareProducts;
            }
        }
    });


    // custom , for Klium:
    $('body').on('click', '#cdproductcomparisonplus .title span', function(e){
        e.preventDefault();
        $('#cdproductcomparisonplus').toggleClass('fadeOutBottom');
    })


})();
