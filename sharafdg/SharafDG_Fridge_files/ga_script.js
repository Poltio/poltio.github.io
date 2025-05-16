SharafDGGA4 = {
  IntervalTimer: '',
  init: function () {
    this.handleCTAClick();
    this.handleNewsletter();
    this.navigationTopHeaderMyAccountEvent();
    if(DEVICE == 'Desktop'){
      this.navigationHeaderClickEvent();
      this.navigationFooterClickEvent();
    } else {
      this.mobileNavigationHeaderClickEvent()
    }
    this.handleGlobalError();
    this.handleSignUpClick();
    this.handleForgotPasswordClick();
    this.handleResetPasswordClick();
    this.handleAccordion();
    this.productSpecificationClick();
    this.handelCartIconClick();
    this.handleMyAccountNavigation();
    this.triggerGridBannerImpression();
    this.triggerBannerImpression();
    this.reviewsClick();
    this.triggerGridBannerClick();
    this.storeAvailability();
    this.moreOfferClick();
    this.triggerBannerClick();
    this.handleBlogClick();
    var filters = this.buildAlgoliaFilters(this.getParsedQueryparams(window.location.search))
    $(document).data("filters", filters);
    //this.handleChatOpened();
    //this.checkScroll()
    this.sliderClick()
   // this.categorySliderClick();
    this.handleSearchSuggest();
    this.mktpInvoiceDownloadEvent();
    this.sdgInvoiceDownloadEvent();
    $(document).on('pjax:end', function() {
      SharafDGGA4.reviewsClick();
      SharafDGGA4.storeAvailability();
      SharafDGGA4.moreOfferClick();
      SharafDGGA4.handleCTAClick();
      SharafDGGA4.productSpecificationClick();
      // pjax
    })
  },
  handleCTAClick: function(){
    $('.sdg_trade_desc').on('click','a', function(){
      dataLayer.push({
        event: 'cta_click',
        client_platform:  SharafDGGA4.getClientPlatform(),
        click_text: 'trade_in',
        eventCallback: function(){
          dataLayer.push({client_platform: undefined, click_text: undefined})
        }
      });
    });
    $('.sdg_trade_title').on('click','svg', function(){
      dataLayer.push({
        event: 'cta_click',
        client_platform:  SharafDGGA4.getClientPlatform(),
        click_text: 'trade_in_info_icon',
        eventCallback: function(){
          dataLayer.push({client_platform: undefined, click_text: undefined})
        }
      });
    });
    $('.trade-logo').on('click', function(){
      dataLayer.push({
        event: 'cta_click',
        client_platform:  SharafDGGA4.getClientPlatform(),
        click_text: 'trade_in_logo',
        eventCallback: function(){
          dataLayer.push({client_platform: undefined, click_text: undefined})
        }
      });
    });
    $('.locator-icons').on('click', function(){
      dataLayer.push({
        event: 'cta_click',
        client_platform:  SharafDGGA4.getClientPlatform(),
        click_text: 'stores_availability',
        product_sku: sdg_current_product.item_id,
        eventCallback: function(){
          dataLayer.push({client_platform: undefined, click_text: undefined,product_sku: undefined})
        }
      });
    });
    
  },


  handleNewsletter: function(){
    $('.synerise-newsletter').on('submit', function(){
      dataLayer.push({
        event: 'newsletter_subscribe', 
        client_platform: SharafDGGA4.getClientPlatform(),
           eventCallback: function () {
              dataLayer.push({
              client_platform: undefined
               });
             },  
        });

    });
  },
  
  getClientPlatform: function () {
    if (typeof (appType) !== 'undefined' && appType) {
      return appType;
    }
    return 'desktop';
  },
  set_category_object: function (item, category, split_by ="|", type) {
    if(!category) return;
    var categories = category.split(split_by)
    if(type == 'reverse'){
      categories = categories.reverse()
    }
    
    categories.map(function (v, i) {
        if (i == 0) {
            item.item_category = SharafDGGA4.encodeValue(v.trim())
        } else if(i < 5){
            item['item_category' + (i+1)] = SharafDGGA4.encodeValue(v.trim())
        }
    });
    return item;
},
  setPageLevelMeta: function () {
    var dataLayer = window.dataLayer || [];
    var page_category = [];
    var pageLevelMeta = {
      'language': typeof (icl_lang) !== 'undefined' && icl_lang == 'ar' ? 'AR' : 'EN',
      'Country': typeof (baseCountry) !== 'undefined' && baseCountry ? baseCountry : '',
      'login_status': typeof (isUserLoggedIn) !== 'undefined' && isUserLoggedIn ? "Logged In" : "Not Logged In",
      'page_type': this.getPageType(),
      'client_platform': SharafDGGA4.getClientPlatform(),
    }
    if (typeof (sdgCurrentUser) !== 'undefined' && typeof (sdgCurrentUser.id) !== 'undefined' && sdgCurrentUser.id) {
      pageLevelMeta.user_ID = sdgCurrentUser.id;
      if (typeof (dgMemberUser) !== 'undefined') {
        pageLevelMeta.dg_member = dgMemberUser ? 'yes' : 'no';
      }
    }
    if (typeof (catName) !== 'undefined' && catName) {
      page_category = catName.split(' > ').reverse();
      if (typeof (page_category[0]) !== 'undefined' && page_category[0]) {
        pageLevelMeta.page_category = page_category[0].trim();
        pageLevelMeta.page_category_leaf = page_category[0].trim();
      }
      if (typeof (page_category[1]) !== 'undefined' && page_category[1]) {
        pageLevelMeta.page_category2 = page_category[1].trim();
      }
      if (typeof (page_category[2]) !== 'undefined' && page_category[2]) {
        pageLevelMeta.page_category3 = page_category[2].trim();
      }
      if (typeof (page_category[3]) !== 'undefined' && page_category[3]) {
        pageLevelMeta.page_category4 = page_category[3].trim();
      }
      if (typeof (page_category[4]) !== 'undefined' && page_category[4]) {
        pageLevelMeta.page_category5 = page_category[4].trim();
      }
    }
    dataLayer.push(pageLevelMeta);
    if(SharafDGPageMeta.getClientPlatform() !== 'mobile' && SharafDGPageMeta.getClientPlatform() !== 'desktop'){
      pageLevelMeta.event = 'screen_view';
      SharafDGGA4.sendToNative(pageLevelMeta);
    }
    
  },
  getPageType: function () {
    var currentPath = location.pathname;
    if (currentPath.indexOf("/c/") >= 0) {
      return "Category page";
    } else if (currentPath.indexOf("/brand/") >= 0 || currentPath.indexOf("/brands/") >= 0) {
      return "Brand Page";
    } else if (currentPath.indexOf("/t/") >= 0) {
      return "Tag Page";
    } else if (currentPath.indexOf("/product/") >= 0) {
      return "Product Page";
    } else if ((currentPath === "/" || currentPath === "/ar/") && location.search.indexOf("?q=") >= 0) {
      return "Search Page";
    } else if ((currentPath === "/" || currentPath === "/ar/") && location.search.indexOf("post_type=product") >= 0) {
      return "Search Page";
    } else if ((currentPath === "/" || currentPath === "/ar/") && location.search.indexOf("?q=") < 0) {
      return "Home Page";
    } else if (typeof searchQuery !== "undefined") {
      return "Custom Search Page";
    } else if (currentPath.indexOf("/cart/") >= 0) {
      return "Cart Page";
    } else if (currentPath.indexOf("/checkout/") >= 0) {
      return "Checkout Page";
    } else if (currentPath.indexOf("/lost-password/") >= 0) {
      return "Forgot Password Page";
    } else if (currentPath.indexOf("show-reset-form=true") >= 0) {
      return "Reset Password Page";
    } else if (currentPath.indexOf("/recharge/") >= 0) {
      return "Recharge Page";
    } else if (currentPath.indexOf("/daily-deals/") >= 0) {
      return "Daily deals Page";
    } else if (currentPath.indexOf("/store/") >= 0) {
      return "Seller Page";
    }  else if (currentPath.indexOf("/variant/") >= 0) {
      return "Variant Page";
    } else if ($('body').hasClass("page-template-template-static")) {
      return "Static Page";
    } else if (currentPath.indexOf("?action=register") >= 0 && typeof (isUserLoggedIn) === 'undefined') {
      return "Register Page";
    } else if (currentPath.indexOf("/my-account/") >= 0 && typeof (isUserLoggedIn) === 'undefined') {
      return "Login Page";
    } else if (currentPath.indexOf("/blog/") >= 0 && typeof(post_type) !== 'undefined' && post_type == 'blog') {
      return "Blog Detail Page";
    } else if (currentPath.indexOf("/blog/") >= 0) {
      return "Blog Listing Page";
    } else if (currentPath.indexOf("/my-account/") >= 0) {
      return "Account Page";
    } else {
      return "Landing Page";
    }
    
  },
  enhanced_ecommerce_clean_sku: function (sku) {
    if (!sku) return "";
    var dashIndex = sku.indexOf("--")
    if (dashIndex != -1) {
      return sku.substr(0, dashIndex);
    }
    return sku;
  },
  enhanced_ecommerce_combine_list: function (list, char) {
    let str = "";
    if (!list) return "";
    list.map(i => (str += SharafDGGA4.encodeValue(i) + char));
    return str.substr(0, str.length - 1);
  },
  get_item_quantity: function(item){
    var qty = 0
    if(typeof cart_products != 'undefined'){
        Object.keys(cart_products).map(function(key) {
            var i = cart_products[key]
            if(i.item_id == item.item_id && i.product_promo == item.product_promo){
                qty+=i.product_quantity;
            }
        })
    }
    return qty;
 },
  get_brand:function (product) {
    let brand_text = "";
    
        brand_text = this.enhanced_ecommerce_combine_list(
            product.taxonomies ? product.taxonomies.product_brand : [],
            "|"
        );
   
    return brand_text;
  },
  get_cat:function (product) {
    let cat_text = "";
        if (product.taxonomies && product.taxonomies.taxonomies_hierarchical) {
            cat_text = enhanced_ecommerce_combine_category(
                product.taxonomies.taxonomies_hierarchical.product_cat,
                "|"
            );
        }
    return cat_text;
  },
  categorySliderClick: function(){
    $(".entry-content").on("click.ga4",".category-icons-slider .slide a", function(){
      var text  = $(this).text()
      var dataLayerObj = {
        event: "category_slider_click",
        click_text: text,
        eventCallback: function () {
          dataLayer.push({
            click_text: undefined,
          });
        }
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj)
    })
  },
  navigationTopHeaderMyAccountEvent: function () {
    $('.login-wrp').on('click', 'a', function () {
      if ($(this).hasClass('my-account-link')) {
        var dataLayerObj = {
          event: "navigation_top_header_my_account_click",
          click_text: "User Name",
          client_platform: SharafDGGA4.getClientPlatform(),
          eventCallback: function () {
            dataLayer.push({
              click_text: undefined,
              client_platform: undefined
            });
          }
        }
        dataLayer.push(dataLayerObj);
        SharafDGGA4.sendToNative(dataLayerObj)
      } else {
        var url = $(this).attr('href');
        var parts = url.split("/");
        var newParts=[];
        for(var i = 0; i < parts.length; i++){
          parts[i] && newParts.push(parts[i]);
        }
        var last_part = newParts[newParts.length - 1];
        if(last_part == 'customer-logout'){
          var dataLayerObj = {
              event: 'logout',
              client_platform: SharafDGGA4.getClientPlatform(),
              eventCallback: function () {
                dataLayer.push({
                client_platform: undefined
                });
              },
          };
          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj);
        } else{
          var dataLayerObj = {
            event: "navigation_top_header_my_account_click",
            client_platform: SharafDGGA4.getClientPlatform(),
            click_text: last_part.charAt(0).toUpperCase() + last_part.slice(1),
            eventCallback: function () {
              dataLayer.push({
                click_text: undefined,
                client_platform: undefined
              });
            }
          }
          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj)
        }
       
      }
    })
  },
  reviewsClick: function () {
    if(DEVICE == 'Desktop'){
      $('.review-wrapper').off('click.ga4reviews').on('click.ga4reviews', '.review-sort .nav-item',function(e){
        var tab_name = $(this).find('a').text()
        var dataLayerObj = {
          event: 'reviews_click',
          client_platform: SharafDGGA4.getClientPlatform(),
              tab_name: tab_name,
               eventCallback: function () {
                  dataLayer.push({
                  client_platform: undefined,
                  tab_name: undefined
                 });
               },
      }
      dataLayer.push(dataLayerObj);
      })
    } else {
      $('.accordion_wrp').off('click.ga4reviews').on('click.ga4reviews', '.review-wrapper li',function(e){
        if($(this).find('.collapsible-header').is(".active")){
          var tab_name = $(this).find('.collapsible-header').text()
          var dataLayerObj = {
            event: 'reviews_click',
            client_platform: SharafDGGA4.getClientPlatform(),
                tab_name: tab_name,
                 eventCallback: function () {
                    dataLayer.push({
                    client_platform: undefined,
                    tab_name: undefined
                   });
                 },
        }
        dataLayer.push(dataLayerObj);
        SharafDGGA4.sendToNative(dataLayerObj)
        }
      })
    }
  },
  moreOfferClick: function(){
    $(".more-offer-icons.pdp-icon").off("click.ga4moreoffer").on("click.ga4moreoffer", function(e){
      var dataLayerObj = {
        event: 'more_offers_click',
        client_platform: SharafDGGA4.getClientPlatform(),
        product_name: sdg_current_product.item_name,
        product_sku: sdg_current_product.item_id,
             eventCallback: function () {
                dataLayer.push({
                client_platform: undefined,
                    product_name: undefined,
                    product_sku: undefined
              
               });
             },
        }
        dataLayer.push(dataLayerObj);
        SharafDGGA4.sendToNative(dataLayerObj)
      })
    },
  storeAvailability: function(){
    $(".store_location.list").off("click.ga4storeAvailability").on("click.ga4storeAvailability", "li:not(.select_address)",function(){
      var store_name = $("#"+$(this).attr("data-markerid")).find(".store_photo h4").text()
      var dataLayerObj = {
        event: 'store_availability_click',
        client_platform: SharafDGGA4.getClientPlatform(),
           store_name: store_name,
           product_name: sdg_current_product.item_name,
           product_sku: sdg_current_product.item_id,
             eventCallback: function () {
                dataLayer.push({
                client_platform: undefined,
                store_name: undefined,
                    product_name: undefined,
                    product_sku: undefined
               });
             },
            }
            dataLayer.push(dataLayerObj);
            SharafDGGA4.sendToNative(dataLayerObj)
    })
  },
  mobileNavigationHeaderClickEvent: function () {
    $("#mobile-left-menu").on("click", "a.menu-link", function(e){
      var a = $(this)
      var hierarchy = []
      hierarchy.push(SharafDGGA4.encodePipe(a.text().trim()))
      a  = a.closest("ul.menu")
      while(a.length > 0){
        hierarchy.push(SharafDGGA4.encodePipe(a.prev().text().trim()))
        a  = a.parent().closest("ul.menu")
      }
      var dataLayerObj = {
        event: "navigation_header_click",
        client_platform: SharafDGGA4.getClientPlatform(),
        click_text: hierarchy.shift(),
        eventCallback: function () {
          dataLayer.push({
            click_text: undefined,
            client_platform: undefined,
            nav_tree: undefined,
          });
        }
      }
      if(hierarchy.length > 0){
        hierarchy = hierarchy.reverse().join("|")
        dataLayerObj.nav_tree = hierarchy
      }
      dataLayer.push(dataLayerObj)
      SharafDGGA4.sendToNative(dataLayerObj)
      
    })
  },
  navigationHeaderClickEvent: function () {
    $(".main-header").on("click", ".navbar .navigation-menu > li", function (e) {
      let li;
      let level;
      let selectedItem = "";
      let navTree = "";
      var target = e.target;

      if ($(e.target).parents(".additional_menu").length > 0) {
        SharafDGGA4.navigationBannerClickEvent(e);
        return
      }

      if (e.target.nodeName != "li") {
        li = $(e.target).closest("li");
      } else {
        li = $(e.target);
      }

      if ($(e.target).closest(".card-body").length) {
        level = 2;
        if (e.target.nodeName != "A") {
          var a = $(e.target).closest("a");
        } else {
          var a = $(e.target);
        }
        navTree = $(">a", a.closest("li")).text().trim();
        selectedItem = a.text().trim()
      } else if (li.parent().closest("ul").is(".navigation-menu.list-inline")) {
        level = 1;
        selectedItem = $(">a", li).text().trim();
      } else if ($(">a", li).is(".navigation-section__title")) {
        level = 2;
        navTree = $(">a", li.parent().closest("li")).text().trim();
        selectedItem = $(">a", li).text().trim()
        var next_li = li.parent().closest("li").parent().closest("li")
        if (next_li.is(".navigation-menu__item")) {
          navTree = $(".navigation-menu__item-title", next_li).text() + "|" + navTree
          level = 3
        }

      } else if (li.parent().closest("li").is("[data-id='shop_products']")) {
        level = 2
        navTree = $(".navigation-menu__item-title", li.parent().closest("li")).text().trim();
        selectedItem = $(">a", li).text().trim()
      } else if (li.is(".list_link")) {
        level = 3;
        navTree = $(">a", li.parent().closest("li").parent().closest("li")).text().trim() + "|" + $(">a", li.parent().closest("li")).text().trim();
        selectedItem = $(">a", li).text().trim()
        var next_li = li.parent().closest("li").parent().closest("li").parent().closest("li")
        if (next_li.is(".navigation-menu__item")) {

          navTree = $(".navigation-menu__item-title", next_li).text() + "|" + navTree
          level = 4;

        }
      }
      dataLayer.push({
        event: "navigation_header_click",
        click_text: selectedItem,
        nav_tree: navTree,
        client_platform: SharafDGGA4.getClientPlatform(),
        eventCallback: function () {
          dataLayer.push({
            client_platform: undefined,
            click_text: undefined,
            nav_tree: undefined,
          });
        }
      })
    });
  },
  navigationBannerClickEvent: function (e) {
    var li = $(e.target).closest("li");
    let category = $(">a", li).text().trim();

    let banner_name = $(e.target).parents(".aim-banner").text();
    let banner_img = $(e.target).parents('.aim-banner').find('img').attr("src");
    if ($(e.target).find('.card').length > 0) {
      banner_name = $(e.target).parents('.card').find("a").text();
      banner_img = $(e.target).parents('.card').find("img").attr("src");
    }
    var dataLayerObj = {
      event: "navigation_banner_click",
      banner_name: banner_name,
      banner_img: banner_img,
      nav_category: category,
      client_platform: SharafDGGA4.getClientPlatform(),
      eventCallback: function () {
        dataLayer.push({
          banner_name: undefined,
          client_platform: undefined,
          nav_category: undefined,
          banner_img: undefined
        });
      }
    }
    dataLayer.push(dataLayerObj)
    SharafDGGA4.sendToNative(dataLayerObj)
  },
  navigationFooterClickEvent: function () {
    $(".footer .menu-item").click(function (e) {
      let li;
      if (e.target.nodeName != "li") {
        li = $(e.target).closest("li");
      } else {
        li = $(e.target);
      }
      var category = $("> .widget-title", li.closest(".widget")).text().trim();
      var selectedItem = $(">a", li).text().trim();
      var dataLayerObj = {
        event: "navigation_footer_click",
        click_text: selectedItem,
        nav_tree: category,
        client_platform: SharafDGGA4.getClientPlatform(),
        eventCallback: function () {
          dataLayer.push({
            click_text: undefined,
            client_platform: undefined,
            nav_tree: undefined,
          });
        },
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj)
    });
  },
  
  handleSignUpClick: function () {
    $(".create-account a").click(function (e) {
      var dataLayerObj = {
        event: 'sign_up_start',
        client_platform: SharafDGGA4.getClientPlatform(),
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj)
    });
  },
  handleGlobalError: function(){
    if(typeof(enable_ga4) !== 'undefined' && enable_ga4 && $('.woocommerce-error').length >0 && $('.woocommerce-error').text().length > 0){
      var dataLayerObj = {
        event: "error_captured",
        error_message: $('.woocommerce-error').text(),
        client_platform: SharafDGGA4.getClientPlatform(),
        section_name: "global",
        eventCallback: function () {
          dataLayer.push({ error_message: undefined, section_name: undefined,client_platform: undefined});
        },
      }
      dataLayer.push(dataLayerObj);   
      SharafDGGA4.sendToNative(dataLayerObj)
    }
  },
  errorCaptured: function(error_message,section_name){
    var dataLayerObj = {
      event: "error_captured",
      error_message: error_message,
      client_platform: SharafDGGA4.getClientPlatform(),
      section_name: section_name,
      eventCallback: function () {
          dataLayer.push({ error_message: undefined, section_name: undefined});
      },
      }
    dataLayer.push(dataLayerObj);
    SharafDGGA4.sendToNative(dataLayerObj)
  },
  noSearchResults: function (search_term) {
    var dataLayerObj = {
      event: "search_results_not_found",
      client_platform: SharafDGGA4.getClientPlatform(),
      
      eventCallback: function () { //For dataLayer flushing
        dataLayer.push({
          search_term: undefined,
          client_platform: undefined
        });
      }
    }
    if(search_term && search_term.length > 0){
      dataLayerObj['search_term'] = search_term;
    }
    dataLayer.push(dataLayerObj);
    SharafDGGA4.sendToNative(dataLayerObj)
  },
  handleForgotPasswordClick: function () {
    $(".forgot-link").click(function (e) {
      var dataLayerObj = {
        event: 'password_forgot',
        client_platform: SharafDGGA4.getClientPlatform(),
        eventCallback: function () { //For dataLayer flushing
          dataLayer.push({
            client_platform: undefined
          });
        }
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj)
    });
  },
  handleResetPasswordClick: function () {
    $(".woocommerce-ResetPassword").on("submit", function (event) {
      var dataLayerObj = {
        event: 'password_forgot_submit',
        client_platform: SharafDGGA4.getClientPlatform(),
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj)
    });
  },
  productSpecificationClick: function () {
    $(".section-product-specs").click(function () {
      var dataLayerObj={
        event: 'product_specifications_click',
            client_platform: SharafDGGA4.getClientPlatform(),
            product_name: sdg_current_product.item_name,
            product_sku: sdg_current_product.item_id,
             eventCallback: function () {
                dataLayer.push({
                client_platform: undefined,
                product_name: undefined,
                product_sku: undefined,
               });
             },
            }
            dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj)
    })
  },
  handleAccordion: function () {
    window.timeOutObj;
    $('.vc_toggle').on('click', function () {
      clearTimeout(window.timeOutObj)
      var pageTitle = $(document).attr('title');
      var $that = $(this)
      window.timeOutObj = setTimeout(function () {
        if ($that.hasClass('vc_toggle_active')) {
          var dataLayerObj = {
            event: "accordion_expand",
            section_name: pageTitle,
            click_text: $that.find('.vc_toggle_title').text(),
            client_platform: SharafDGGA4.getClientPlatform(),
            eventCallback: function () {
              dataLayer.push({
                click_text: undefined,
                section_name: undefined,
                client_platform: undefined
              });
            },
          }
          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj)
        } else {
          var dataLayerObj = {
            event: "accordion_collapse",
            section_name: pageTitle,
            click_text: $that.find('.vc_toggle_title').text(),
            client_platform: SharafDGGA4.getClientPlatform(),
            eventCallback: function () {
              dataLayer.push({
                click_text: undefined,
                section_name: undefined,
                client_platform: undefined,
              });
            },
          }
          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj)
        }
      }, 301);
    });
  },
  handleMyAccountNavigation: function () {
    $('.account-navigation').on('click', '.woocommerce-MyAccount-navigation-link a', function () {
      var url = $(this).attr('href');
      var parts = url.split("/");
      var newParts=[];
      for(var i = 0; i < parts.length; i++){
        parts[i] && newParts.push(parts[i]);
      }
      var last_part = newParts[newParts.length - 1];
      if(last_part == 'customer-logout'){
          var dataLayerObj = {
              event: 'logout',
              client_platform: SharafDGGA4.getClientPlatform(),
              eventCallback: function () {
                dataLayer.push({
                client_platform: undefined
                });
              },
          };
          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj);
        } else {
          var dataLayerObj = {
            event: "my_account_menu_click",
            click_text: last_part,
            client_platform: SharafDGGA4.getClientPlatform(),
            eventCallback: function () {
              dataLayer.push({
                click_text: undefined,
                client_platform: undefined
              });
            },
          }
          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj);
        }
    });
  
  },
  handleBlogClick: function () {
    $('.sharaf-blog article').on('click', 'a', function () {
      var dataLayerObj = {
        event: "blog_click",
        blog_title: $(this).parents('article').find('.entry-title').text(),
        client_platform: SharafDGGA4.getClientPlatform(),
        eventCallback: function () {
          dataLayer.push({
            blog_title: undefined,
            client_platform: undefined
          });
        },
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj)

    })
  },
  handelCartIconClick: function () {
    $('.cartview').on('click', function () {
      var dataLayerObj = {
        event: "navigation_top_header_click",
        client_platform: SharafDGGA4.getClientPlatform(),
        click_text: "Add To Cart",
        eventCallback: function () {
          dataLayer.push({
            click_text: undefined,
            client_platform: undefined
          });
        }
      }
      dataLayer.push(dataLayerObj)
      SharafDGGA4.sendToNative(dataLayerObj)
    });
  },
  getParsedQueryparams: function (queryString) {
    // logic to make proper url format, to temporarily remove '=' inside square brackets
    //ex: &nR[rating_reviews.rating][%3C=][0]=5
    //becomes
    // nR[rating_reviews.rating][<=][0] = 5
    var rand = Math.floor(Math.random() * 1000000000);
    let re = /(.*)\[([^\]]*)=([^\[]*)\](.*)/;
    var completed = false;
    while (!completed) {
      let replaced = queryString.replace(re, "$1[$2" + rand + "$3]$4");
      if (queryString.length == replaced.length) {
        completed = true;
      }
      queryString = replaced;
    }

    var vars = {};
    if (typeof cat_name !== "undefined" && cat_name) {
      var cat_name_split = cat_name.split(":")
      vars[cat_name_split[0]] = cat_name_split[1].replaceAll('"', '')
    }
    if (typeof brand_name !== "undefined" && brand_name) {
      var brand_name_split = brand_name.split(":")
      vars["dFR[taxonomies.attr.Brand][0]"] = brand_name_split[1].replaceAll('"', '')
    }
    if (typeof tag_name !== "undefined" && tag_name) {
      var tag_name_split = tag_name.split(":")
      vars["dFR[tags.title]"] = tag_name_split[1].replaceAll('"', '')
    }
    if (typeof sellerCode !== "undefined" && sellerCode) {
      vars["seller_code"] = sellerCode
    }

    var parts = queryString.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[decodeURIComponent(key.replace(rand, "="))] = decodeURIComponent(
          value
        );
      }
    );
    return vars;
  },
  buildAlgoliaFilters: function (filtersArray) {
    var filters = [];
    var foundAttrs = {};
    var categories = {};
    var brand = {};
    var tag = {};

    Object.keys(filtersArray).map(function (key) {
      if (key.indexOf("[taxonomies.product_cat]") !== -1) {
        categories[SharafDGGA4.encodeValue(filtersArray[key]).replaceAll('&amp;', '&')] = true;
      } else if (key.indexOf("taxonomies.taxonomies_hierarchical") !== -1) {
        var cats = filtersArray[key].split(">");
        cats.map(function (cat) {
          categories[SharafDGGA4.encodeValue(cat.trim()).replaceAll('&amp;', '&')] = true;
        });
      } else if (key.indexOf("[taxonomies.attr.") !== -1) {
        var taxonomyAttr = key.match(/\[taxonomies\.attr\.([^\]]+)\]/);
        if (taxonomyAttr[1]) {
          if (foundAttrs[taxonomyAttr[1]]) {
            foundAttrs[taxonomyAttr[1]] = foundAttrs[taxonomyAttr[1]] + "/" + SharafDGGA4.encodeValue(filtersArray[key])
          } else {
            foundAttrs[taxonomyAttr[1]] = SharafDGGA4.encodeValue(filtersArray[key])
          }
        }
      } else if (key.indexOf("[taxonomies_ar.attr.") !== -1) {
        var taxonomyAttr = key.match(/\[taxonomies_ar\.attr\.([^\]]+)\]/);
        if (taxonomyAttr[1]) {
          var val = filtersArray[key];
          try {
            val = JSON.parse(val);
            val = Object.keys(val)[0];
            if (foundAttrs[taxonomyAttr[1]]) {
              if(SharafDGGA4.tryParseJSON(filtersArray[key])){
                filtersArray[key] = JSON.parse(filtersArray[key]);
                filtersArray[key] = Object.keys(filtersArray[key]);
                filtersArray[key] = filtersArray[key][0];
              }
              foundAttrs[taxonomyAttr[1]] = foundAttrs[taxonomyAttr[1]] + "/" + SharafDGGA4.encodeValue(filtersArray[key])
            } else {
              if(SharafDGGA4.tryParseJSON(filtersArray[key])){
                filtersArray[key] = JSON.parse(filtersArray[key]);
                filtersArray[key] = Object.keys(filtersArray[key]);
                filtersArray[key] = filtersArray[key][0];
              }
              foundAttrs[taxonomyAttr[1]] = SharafDGGA4.encodeValue(filtersArray[key])
            }
          } catch (e) {

          }

        }
      } else if (key.indexOf("[tags.title]") !== -1) {
        if (foundAttrs.Tag) {
          foundAttrs.Tag = foundAttrs.Tag + "/" + SharafDGGA4.encodeValue(filtersArray[key])
        } else {
          foundAttrs.Tag = SharafDGGA4.encodeValue(filtersArray[key])
        }
      } else if (key.indexOf("[price]") !== -1) {
        if (foundAttrs.price) {
          if (key.indexOf("[price][<=]") != -1) {
            foundAttrs.price.lessThan = filtersArray[key];
          } else {
            foundAttrs.price.greaterThan = filtersArray[key];
          }
        } else {
          if (key.indexOf("[price][<=]") != -1) {
            foundAttrs.price = { lessThan: filtersArray[key] };
          } else {
            foundAttrs.price = { greaterThan: filtersArray[key] };
          }
        }
      } else if (key.indexOf("[rating_reviews.rating]") !== -1) {
        if (foundAttrs.rating) {
          if (key.indexOf("[rating_reviews.rating][<=]") != -1) {
            foundAttrs.rating.lessThan = filtersArray[key];
          } else {
            foundAttrs.rating.greaterThan = filtersArray[key];
          }
        } else {
          if (key.indexOf("[rating_reviews.rating][<=]") != -1) {
            foundAttrs.rating = { lessThan: filtersArray[key] };
          } else {
            foundAttrs.rating = { greaterThan: filtersArray[key] };
          }
        }
      }
      else if (key.indexOf("seller_code") !== -1) {
        //foundAttrs.seller_code = "seller:'" + filtersArray[key] + "'";
      }
      else {
        // send error log
      }
    });
    if (foundAttrs.price) {
      if (foundAttrs.price.lessThan && foundAttrs.price.greaterThan) {
        foundAttrs.Price =
          parseInt(foundAttrs.price.greaterThan) +
          "/" +
          parseInt(foundAttrs.price.lessThan);
        delete foundAttrs.price;
      } else {
        delete foundAttrs.price;
      }
    }

    if (foundAttrs.rating) {
      if (foundAttrs.rating.lessThan && foundAttrs.rating.greaterThan) {
        foundAttrs.Rating =
          parseInt(foundAttrs.rating.greaterThan) +
          "/" +
          parseInt(foundAttrs.rating.lessThan);
        delete foundAttrs.rating;
      } else {
        delete foundAttrs.rating;
      }
    }

    if (Object.keys(categories).length > 0) {
      var catString = "";
      Object.keys(categories).map(function (cat) {
        catString += cat + "/";
      });
      catString = catString.substr(0, catString.length - 1);
      filters.Category = catString
    }

    Object.keys(foundAttrs).map(function (attr) {
      if(SharafDGGA4.tryParseJSON(foundAttrs[attr])){
        foundAttrs[attr] = JSON.parse(foundAttrs[attr]);
        foundAttrs[attr] = Object.keys(foundAttrs[attr]);
        foundAttrs[attr] = foundAttrs[attr][0];
      }
      filters[attr] = foundAttrs[attr]
    });
    return filters;
  },
  handleChatOpened: function () {
    if(typeof(window.fcWidget) !== 'undefined'){
      clearInterval(SharafDGGA4.IntervalTimer);
      //window.fcWidget.on("widget:loaded", function (resp) {
        window.fcWidget.on("widget:opened", function (resp) {
          var dataLayerObj = {
            event: 'customer_support_chat_start',
            client_platform: SharafDGGA4.getClientPlatform(),
            eventCallback: function () {
              dataLayer.push({
                click_text: undefined,
                client_platform: undefined
              });
            }
          }
          dataLayer.push(dataLayerObj);
        });
      //});
    }
  },
  tryParseJSON:function (jsonString){
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object",
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
  },
  encodeValue: function (value) {
    return value.replaceAll("/", "%2F").replaceAll(/\|/g, "%7C").replaceAll(",", "%2C")
  },
  encodePipe: function (value) {
    return value.replaceAll(/\|/g, "%7C")
  },
  get_search_params: function () {
    var currentFilters = $(document).data("filters");
    var sort_by = 'Most Relevant';
    if($(".sort-wrp select").length > 0){
      sort_by = DEVICE == 'Desktop' ? $(".sort-wrp select").find(":selected")[0].label : $(".sort-wrp input:checked").next().text();
    }
    return {
      products_category: currentFilters['Category'],
      sort_by: sort_by,
      sharaf_dg_products_only: $("#sharafDGOnly").is(":checked")?"yes":"no",
      express_delivery: $("#expressDelivery").is(":checked")?"yes":"no",
    }
  },
  products_filter_event: function (changeType, current_filter_by, current_filter_value, updated_filters) {

    const currentFilters = $(document).data("filters");

    currentFilters[current_filter_by] = updated_filters;

    $(document).data("filters", currentFilters);
    var filters = "";

    Object.keys(currentFilters).map((key) => {
      if (currentFilters[key]) {
        filters += `${key}|${currentFilters[key]},`;
      }
    });
    filters = filters.substr(0, filters.length - 1);

    var search_params = this.get_search_params()

    var dataLayerObj = {
      event: "products_filter",
      filter_by: current_filter_by,
      filter_grouped_by: filters,
      client_platform: SharafDGGA4.getClientPlatform(),
      express_delivery: search_params.express_delivery,
   
      sharaf_dg_products_only: search_params.sharaf_dg_products_only,
      eventCallback: function () {
        dataLayer.push({
          filter_by: undefined,
          filter_value: undefined,
          express_delivery: undefined,
          sharaf_dg_products_only: undefined,
          products_category: undefined,
          client_platform: undefined,
        });
      },
    }

    if (changeType === "off") {
      dataLayerObj.filter_value = current_filter_value
    } else {
      dataLayerObj.filter_value = current_filter_value
    }

    if(search_params.products_category){
      dataLayerObj.products_category=search_params.products_category
    }

    console.log(dataLayerObj)
    dataLayer.push(dataLayerObj);
    SharafDGGA4.sendToNative(dataLayerObj)
  },
  products_sort_event: function (value) {

    var search_params = this.get_search_params()

    var dataLayerObj = {
      event: "products_sort",
      sort_by: value,
      express_delivery: search_params.express_delivery,
      sharaf_dg_products_only: search_params.sharaf_dg_products_only,
      client_platform: SharafDGGA4.getClientPlatform(),
      eventCallback: function () {
        dataLayer.push({
          sort_by: undefined,
          express_delivery: undefined,
          sharaf_dg_products_only: undefined,
          products_category: undefined,
          client_platform: undefined,
        });
      },
    }
    if(search_params.products_category){
      dataLayerObj.products_category =search_params.products_category
    }
    dataLayer.push(dataLayerObj);
    SharafDGGA4.sendToNative(dataLayerObj)
    console.log(dataLayerObj)
  },
  home_js: function() {
    return DEVICE == "Desktop" ? sharaf : mobileSharafHome
},
getSliderTitleAndId: function(i){
  var el = i.closest(".product-scroller")
  var slider_id = el.find("[data-id*='product_slider_array_']").data("id");
  if(el.parents('search-results').length >0){
    slider_id = "search";
  }
  if(DEVICE == "Desktop"){
      var slider_title = el.find(".slider-header h3").text()
  } else {
    var slider_title = el.find(".slider-header").text()
  }
  return {slider_id:slider_id,slider_title:slider_title}
},
sliderClick: function () {
  $(".product-scroller").each(function (i, e) {
      var el = $(e)
      var slider_title_id = SharafDGGA4.getSliderTitleAndId(el)
      el.on("click", ".slide",function (e) {
        var slide = $(this)
        if(DEVICE == "Desktop"){
          var index = slide.data("original-index")
        } else {
          var index = $(".slide",el).index(slide) + 1
        }
        var product = {
          'item_name': slide.attr("title"),
          'item_id': slide.data("original-sku") ? slide.data("original-sku") : slide.data("sku"),
          'item_brand': slide.data("brand"),
          'currency': GACurrency,
          'discount': slide.data("discount"),
          'index': index,
          'item_list_id': slider_title_id.slider_id,
          'item_list_name': slider_title_id.slider_title,
          'price': slide.data("price") ? slide.data("price") : slide.data("originalprice"),
          //'item_variant': '<variant>',
          'quantity': 1,
          'seller_name': slide.data("seller-name"),
          'product_promo': slide.data("product-promo"),
          'product_source': appType,
          'express_delivery': slide.data("express-delivery"),
      }
      if(slide.data("seller-name") != 'Sharaf DG'){
        product.listing_id = slide.data("listing-id")
      }
      var module_name = 'BuyBox';
      var cat_split = "|";
      var cat_type = "reverse";
      if (slide.find('.product-link').length > 0) {
          module_name = 'product slider';
          
          
          if(slide.hasClass('synerise-slide')){
            module_name = 'recommendation';
            cat_split = ">";
            cat_type = '';
          }
          if (slide.parents('.search-results').length > 0) {      
              module_name = 'search';    
          }
          
      }
      if (slide.parents('.pdp-moffer').length > 0) {
          module_name = 'others offer';
      }
      product = SharafDGGA4.set_category_object(product,slide.data("category"),cat_split,cat_type )
      SharafDGGA4Click.product_click(product, index,slider_title_id.slider_title,module_name)
      })
  })
},
checkInViewPort: function () {
  $(".product-scroller").each(function (i, e) {
      var el = $(e)
      var module_name = 'product slider';
      var slider_title_id = SharafDGGA4.getSliderTitleAndId(el)
      if (!el.data("impression")) {
          if (SharafDGGA4.home_js().sdg_inViewport(e)) {
              el.data("impression", "1")
              
              var impressions = []
              var cat_split = "|";
              var cat_type = "reverse";
              if(el.closest(".synerise-recommendation").length){
                module_name = 'recommendation';
                cat_split = ">";
                cat_type = '';
              }
              if(DEVICE == "Desktop"){
                var slides = el.find(".slick-slide").not(".slick-cloned").find(".slide")
              } else {
                var slides = el.find(".slide")
              }
              slides.each(function(si,s){
                var slide = $(s)
                var impression = {
                  'item_name':slide.attr("title"),
                  'item_id': slide.data("original-sku") ? slide.data("original-sku") : slide.data("sku"),
                  'price':slide.data("price") ? slide.data("price") : slide.data("originalprice"),
                  'item_brand':slide.data("brand"),
                  'index':slide.data("original-index"),
                  'currency':GACurrency,
                  'item_list_name':slider_title_id.slider_title,
                  'seller_name':slide.data("seller-name"),
                  'product_promo':slide.data("product-promo"),
                  'express_delivery':slide.data("express-delivery"),
                }
                if(slide.data("seller-name") != 'Sharaf DG'){
                  impression.listing_id = slide.data("listing-id")
                }
         
                impression = SharafDGGA4.set_category_object(impression,slide.data("category"),cat_split,cat_type )
                impressions.push(impression)
              })
              SharafDGGA4Impressions.track_impressions(impressions,slider_title_id.slider_title,slider_title_id.slider_id,module_name);
          }
      }
  })
},
triggerGridBannerImpression: function() {
  
  //Normal MENU Banner
  var checkLazyReady = function(){
    $(".banner-events img").each(function (i, e) {
      var el = $(e).closest(".menu_template1_banner");
      if(el.length === 0 ){
        var el = $(e);
      }
      setTimeout(function(){
      if (!el.data("GAimpression") && el.is(":visible") && SharafDGGA4.home_js().sdg_inViewport(e)) {
        var bannerData = SharafDGGA4.getGridBannerDetail(e);
        var banner_id,banner_name;
        if (!el.data("uclid")) {
          // non OS banner
          if(bannerData){
            banner_id = bannerData.banner_id;
            banner_name = bannerData.banner_name;
          }
        } else {
          // OS banner
          if(bannerData){
            banner_id = bannerData.banner_id;
            banner_name = bannerData.banner_name;
          }
        }
        if(banner_id && banner_name){
          var dataLayerObj = {
            event: 'banner_impression',
            client_platform: SharafDGGA4.getClientPlatform(),
            banner_name: banner_name, 
            banner_id: banner_id,
            eventCallback: function () {
                dataLayer.push({
                  banner_name: undefined,
                  banner_id: undefined,
                });
              },
          }

          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj);
          if(bannerData.promotion_name && bannerData.promotion_id && bannerData.slot){
            SharafDGGA4.triggerPromotion('view_promotion', banner_name,bannerData.slot,bannerData.promotion_name,bannerData.promotion_id);
          }
    
        }
        el.data("GAimpression",1); 
      }
    },1)
    });
  }
    if(typeof DGP_Utils != 'undefined'){
      var sdg_checkInViewPort_banner = DGP_Utils.throttle(checkLazyReady, 200)
      $(document).off("scroll.sdg_checkInViewPort_banner").on("scroll.sdg_checkInViewPort_banner", sdg_checkInViewPort_banner)
      checkLazyReady();
    }
  
},
triggerGridBannerClick: function() {
  $('#content').on('click.ga4',".banner-events img", function (i, e) {
    var el = $(this);
    var bannerData = SharafDGGA4.getGridBannerDetail(el);
    var banner_id,banner_name;
    if(bannerData){
      banner_id = bannerData.banner_id;
      banner_name = bannerData.banner_name;
    }
    if(banner_id && banner_name){
      var dataLayerObj = {
        event: 'banner_click',
        client_platform: SharafDGGA4.getClientPlatform(),
        banner_name: banner_name, 
        banner_id: banner_id,
        eventCallback: function () {
            dataLayer.push({
              banner_name: undefined,
              banner_id: undefined,
              client_platform: undefined,
            });
          },
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj); 
      if(bannerData.promotion_name && bannerData.promotion_id && bannerData.slot){
        SharafDGGA4.triggerPromotion('select_promotion',banner_name,bannerData.slot,bannerData.promotion_name,bannerData.promotion_id);
      }  
    }
  });
},
triggerPromotion: function(type, bannerName,creative_slot,promotion_name,promotion_id){
  
  dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    var promotionObj = {
      event: type,
      client_platform: SharafDGGA4.getClientPlatform(),
      ecommerce: {
        creative_name: bannerName,
        creative_slot: creative_slot,
        promotion_id: promotion_id,
        promotion_name: promotion_name, 
        
        }
    };
    dataLayer.push(promotionObj);
    SharafDGGA4.sendToNative(promotionObj);
},
getGridBannerDetail: function(e){
  //TODO: Update to get the OnlineSale Params
  var link = $(e).parents('a');
  var banner_name = '';
  var banner_id = '';
  if(link){
    banner_id = link.attr("id");
    banner_name = link.attr('title');
  } 
  if(banner_id === banner_name){
    banner_name = $(e).attr('alt');
  }
  if(!banner_name){
    banner_name = $(e).attr('alt');
  }
  if(!banner_name){
    banner_name = $(e).attr('src').split("/").pop();
  }
  if(!banner_id){
    banner_id = $(e).attr('src').split("/").pop();
  }
  if( banner_name  && banner_id){
    return {
      banner_id:banner_id,
      banner_name:banner_name,
      slot: link.attr('data-creative_slot') || link.attr('data-slot'),
      promotion_id: link.attr('data-promo_id'),
      promotion_name: link.attr('data-promo_name')
    };
  }
},
triggerBannerImpression: function(){
  $(document).on("banner-slider-change",function(e,data){
    
    if($(data.sliderEl).hasClass("in-viewport")){
      setTimeout(function(){
     
      var slide = DEVICE == "Mobile" ? $(data.activeSlide) : $(".items",data.activeSlide);

      if(slide.length == 0){
        slide = DEVICE == "Mobile" ? $(data.activeSlide) : $(".v-items",data.activeSlide);

      }

       //ONLINESALES
      if(slide.is(".os-banner-ad")){

        if(!slide.attr("data-GAimpression")){
          console.log('OS banner-slider-change');
          console.log($(data.sliderEl));
          var bannerName = slide.find("a").attr('ga-promo-name') || 'Online Sales Banner';
          var bannerId = slide.find("a").attr("ga-promo-id") || 'Online Sales Banner';
          var dataLayerObj = {
            event: 'banner_impression',
            client_platform: SharafDGGA4.getClientPlatform(),
            banner_name: bannerName, 
            banner_id: bannerId,
            eventCallback: function () {
                dataLayer.push({
                  banner_name: undefined,
                  banner_id: undefined,
                  client_platform: undefined
                });
              },
          }

          var promotion_name = slide.find("a").attr('creative-name') || 'Online Sales Banner';
          var creative_slot = slide.find("a").attr('creative-slot');
          if(promotion_name && creative_slot){
            SharafDGGA4.triggerPromotion('view_promotion', bannerName,creative_slot,promotion_name,bannerId);
          }
           dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj);
          slide.attr("data-GAimpression",1); 
        }
       
      } else {
        //Normal Banner
        
        //Horizontal
      
        var bannerImageLink =slide.find('.banner-image');
        var bannerName = bannerImageLink.attr('ga-promo-creative');
        var bannerId = bannerImageLink.attr('ga-promo-id');
        var promotionBanner = bannerImageLink.attr('ga-promotion_banner');
        if(bannerImageLink && !slide.attr("data-GAimpression") && bannerName && bannerId){
  
          var dataLayerObj = {
            event: 'banner_impression',
            client_platform: SharafDGGA4.getClientPlatform(),
            banner_name: bannerName, 
            banner_id: bannerId,
            eventCallback: function () {
                dataLayer.push({
                  banner_name: undefined,
                  banner_id: undefined,
                  client_platform: undefined
                });
              },
          }
          if(promotionBanner){
            var promotion_name = bannerImageLink.attr('ga-promo-name');
            var creative_slot = bannerImageLink.attr('ga-promo-position');

            SharafDGGA4.triggerPromotion('view_promotion',bannerName,creative_slot,promotion_name,bannerId)
          }
          dataLayer.push(dataLayerObj);
          SharafDGGA4.sendToNative(dataLayerObj);
          console.log('sdg banner-slider-change');
          slide.attr("data-GAimpression",1); 
         
        }
      }
    })
    }
  });
},
triggerBannerClick: function() {
  $('.banner-slider').on('click.ga4', ".banner-image",function (i, e) {
    var el = $(this);
    //TODO: Update to get the OnlineSale Params
    var banner_name = el.attr('ga-promo-name');
    var banner_id = el.attr('ga-promo-id');
    if((el.find('img').attr('src') || !el.attr("data-bgimg")) && banner_name && banner_id){
      var dataLayerObj = {
        event: 'banner_click',
        client_platform: SharafDGGA4.getClientPlatform(),
        banner_name: banner_name, 
        banner_id: banner_id,
        eventCallback: function () {
            dataLayer.push({
              banner_name: undefined,
              banner_id: undefined,
              client_platform: undefined
            });
          },
      }
      dataLayer.push(dataLayerObj);
      SharafDGGA4.sendToNative(dataLayerObj);
      var promotion_name = el.attr('creative-name') || 'Online Sales Banner';
      var creative_slot = el.attr('ga-promo-position');
      if(promotion_name && creative_slot){
            SharafDGGA4.triggerPromotion('select_promotion', banner_name,creative_slot,promotion_name,banner_id);
      } 
    }
  });
},
get_algolia_deafult_promo:function (item,seller){
  var promos = item.promotion_offer_json
  if(promos.length==0){
    return item
  }
  if(seller){
    promos = promos.filter(function(promo){promo.seller_code == seller})
  }
  var default_promo = promos[0];
  for (var i=0;i<promos.length;i++) {
    var promo = promos[i];
      if(promo.is_default == 1) {
          default_promo = promo;
          break;
      }
  }
  return default_promo;
},

checkScroll: function() {
  var sdg_checkInViewPort = DGP_Utils.throttle(this.checkInViewPort, 200)
  $(document).off("scroll.sdg_checkInViewPort").on("scroll.sdg_checkInViewPort", sdg_checkInViewPort);
  var sdg_checkInViewPort_banner = DGP_Utils.throttle(this.triggerGridBannerImpression, 200)
  $(document).off("scroll.sdg_checkInViewPort_banner").on("scroll.sdg_checkInViewPort_banner", sdg_checkInViewPort_banner)
},
categoryData: function(category,item){ 
  if(category){
    var categories = category.split("|").reverse();
    categories.map(function (v, i) {
        if (i == 0) {
            item['item_category'] = v
        } else {
            item['item_category' + (i + 1)] = v
        }
    })
  }
},
ItemDataLayer: function(product, quantity){
  var ga_item = {
      item_name: product.item_name,
      item_id: SharafDGGA4.enhanced_ecommerce_clean_sku(product.item_id),
      price: product.product_price,
      currency: GACurrency,
      quantity: quantity,
      product_source:appType,
      seller_name: product.seller_name,      
      seller_code: product.seller_code                     
  };
  if(product.express_delivery){ 
    ga_item.express_delivery =product.express_delivery;
  }
  if(product.item_brand){ 
    ga_item.item_brand =product.item_brand;
  } 
  if(product.product_promo){ 
    ga_item.product_promo =product.product_promo;
  } 
  if(product.listing_id){ 
      ga_item.listing_id =product.listing_id;
  } 
  if(product.parent_sku){ 
    ga_item.parent_sku =product.parent_sku;
} 
  if(typeof(product.product_categories) !== 'undefined' && product.product_categories){
      //var product_categories = product.product_categories.split('|');  
      SharafDGGA4.categoryData(product.product_categories,ga_item);
  }
              
  return ga_item; 
},
removeEmptyValues: function(items){
  items.map(function(item){
    Object.keys(item).map(function(key){
      if(!item[key] && item[key]!==0){
        delete item[key];
      } else {
        if(key == "price" || key == "discount"){
          item[key] = parseFloat(item[key].toString().replaceAll(",",""))
        } else if(key == "seller_code"){
         // item[key] = item[key].replace("mktp-","")
        }
      }
    })
  })
  return items;
},
pushDataLayer: function(event_type,ga_item,module_name,total){
  dataLayer.push({ ecommerce: null });
  
  var cart_data = {
      event: event_type,
      client_platform:SharafDGGA4.getClientPlatform(),
      module_name: module_name,
      ecommerce: {
          'currency': GACurrency,
          'items':SharafDGGA4.removeEmptyValues(ga_item),
          'value': parseFloat(total),
      }
  }
  dataLayer.push(cart_data);
  SharafDGGA4.sendToNative(cart_data)
},
handleSearchSuggest: function(){
  $(document).off("ga4Search")
    $(document).on("ga4Search",function(e,data){
      var eventObj = {
        event: "search",
        client_platform:SharafDGGA4.getClientPlatform(),
        eventCallback: function () { //For dataLayer flushing
          dataLayer.push({
            search_term: undefined,
            selected_search_term: undefined,
            selected_search_sku: undefined,
            search_action: undefined,
            search_category: undefined,
            search_results_number: undefined,
            search_popular_results_number: undefined,
            client_platform: undefined
          });
        }    
      }
      var dataObj = Object.assign(eventObj, data);
      SharafDGGA4.sendToNative(dataObj);
      dataLayer.push(dataObj);
    });
   
   
},
sendToNative: function(obj){
  if(!obj || !obj.event) return;
  var app_obj = {
    event: obj.event,
    params: $.extend({}, obj)
  }
  if(app_obj.params.event)
    delete app_obj.params.event;
  if(app_obj.params.client_platform)
  delete app_obj.params.client_platform;
  if(app_obj.params['gtm.uniqueEventId'])
  delete app_obj.params['gtm.uniqueEventId'];
  window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.logAnalyticsEvent && window.webkit.messageHandlers.logAnalyticsEvent.postMessage(JSON.stringify(app_obj))
  typeof android != "undefined" && android.logAnalyticsEvent && android.logAnalyticsEvent(JSON.stringify(app_obj))
},
mktpInvoiceDownloadEvent: function() {
  $('button.in-dl').on('click', function(e) {
    const button = $(this);
    if (button.data('eventSent')) return; // Check if the event has already been sent for this button
    button.data('eventSent', true);
    const dataInValue = button.attr('data-in');
    const invoice_object = {
      'event': 'download_invoice',
      'client_platform': SharafDGGA4.getClientPlatform(),
      'click_text': dataInValue,
      eventCallback: function () {
        dataLayer.push({
          'client_platform': undefined,
          'click_text': undefined
        });
      }
    }
    dataLayer.push(invoice_object);
    if (typeof SharafDGGA4 != "undefined"){
      SharafDGGA4.sendToNative(invoice_object);
    }
  });
},
sdgInvoiceDownloadEvent: function() {
  $('.in-dl-sdg').on('click', function(e) {
    const button = $(this);
    if (button.data('eventSent')) return; // Check if the event has already been sent for this button
    button.data('eventSent', true);
    const dataInValue = button.attr('data-in');
    const invoice_object = {
      'event': 'download_invoice',
      'client_platform': SharafDGGA4.getClientPlatform(),
      'click_text': dataInValue,
      eventCallback: function () {
        dataLayer.push({
          'client_platform': undefined,
          'click_text': undefined
        });
      }
    }
    dataLayer.push(invoice_object);
    if (typeof SharafDGGA4 != "undefined"){
      SharafDGGA4.sendToNative(invoice_object);
    }
  });
}
};

SharafDGGA4.IntervalTimer = setInterval(() => {
  SharafDGGA4.handleChatOpened();
}, 1000);

(function ($) {
  jQuery(document).ready(function () {
    SharafDGGA4.init();
  })

  jQuery(document).on('pjax:complete', function () {
    SharafDGGA4.triggerGridBannerClick();
    SharafDGGA4.triggerBannerClick();
    SharafDGGA4.sliderClick();
  });
})(jQuery);