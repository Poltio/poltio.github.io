$.fn.isInViewport = function () {
  if ($(this).length !== 0) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }
  return false;
};

SharafPR = {
  IntervalTimer: '',
  fireCampaigns: [],
  hasFired: false,
  fetchSynerise: function(url,recommendationParams){
    return new Promise(function(resolve,reject){
      if (typeof SyneriseTC !== 'undefined' && typeof SyneriseTC.uuid !== 'undefined') {
        $.ajax({
          type: 'GET',
          url: url,
          data: recommendationParams,
          headers: {
            'x-api-key': SyneriseTC.trackerUID,
          },
          success: function (response) {
            resolve(response)
          },
          error: function (request, status, error) {
            console.log(request);
            console.log(status);
            console.log(error);
            reject()
          },
        });
      }
    })
  },
  fetchOS: function(os_page,os_page_name,os_categories,os_skus,os_count){

    if(!os_page){
      return []
    }

    if(typeof os_adserver == 'undefined' || typeof os_client_id == 'undefined'){
      return []
    }
    
    var url = os_adserver + "/sda?page_type=" + os_page + "&client_id=" + os_client_id + "&cli_ubid=" + (typeof os_unique_user_id !=="undefined" ? os_unique_user_id:'') + "&pcnt=" + os_count
   
     if(typeof icl_lang !== "undefined" && icl_lang === "ar"){
      url += "&language=AR"
     } else {
      url += "&language=EN"
     }

     if(typeof current_country === 'undefined'){
      url += "&currency=AED"
     } else {
       if(current_country === 'BHR'){
        url += "&currency=BHD"
      }
      else if(current_country === 'EGY'){
        url += "&currency=EGP"
      }
      else if(current_country === 'OM'){
        url += "&currency=OMR"
      }else{
        url += "&currency=AED"
      }
     }

     if(os_categories){
      os_categories.split(">").map(function(c){
        url += "&categories[]=" + encodeURIComponent(c.trim())
      })
     }

     if(os_skus){
        url += "&sku_ids[]=" + os_skus
     }

     if(os_page_name){
      url += "&page_name=" + os_page_name
     }

     return new Promise(function(resolve,reject){
     $.ajax({
            type: "GET",
            url: url,
            timeout: 3000,
            success: function (results) {

               var processed = results.products.map(function(ad){
                  
                  return {
                   title: typeof icl_lang !== "undefined" && icl_lang === "ar" && ad.custom_label_0 && ad.custom_label_0 != "NULL" ? ad.custom_label_0 : ad.name,
                   is_paid:true,
                   link: typeof icl_lang !== "undefined" && icl_lang === "ar" && ad.custom_label_1 && ad.custom_label_1 != "NULL" ? ad.custom_label_1 : ad.productUrl,
                   imageLink: ad.imageUrl.replace("prodonlinesalesai.blob.core.windows.net","assets.sdgcdn.com"),
                   sale_price: parseFloat(ad.salePrice).toLocaleString(undefined, {
                    minimumFractionDigits: algolia.decimal,
                    maximumFractionDigits: algolia.decimal,
                  }),
                  itemId: ad.skuId,
                  sku: ad.skuId ? ad.skuId.split("_")[0] : "",
                   in_stock: true,
                   promoID: ad.custom_label_2 && ad.custom_label_2 != "NULL" ? ad.custom_label_2 : undefined,
                   post_id: ad.custom_label_3 && ad.custom_label_3 != "NULL" ? ad.custom_label_3 : undefined,
                   uclid: ad.uclid,
                   ad_provider: "os",
                   currency: sdgCurrency,
                  
                  }
                })

                resolve(processed)
               
            },
            error: function(){
              reject()
            }
        }
        )
      })
  },
  getCookie: function(c_name) {
    var i,
      x,
      y,
      ARRcookies = document.cookie.split(';');
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf('='));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, '');
      if (x == c_name) {
        return unescape(y);
      }
    }
  },
  syneriseRecommendation: function () {
    if (typeof SyneriseTC !== 'undefined' && typeof SyneriseTC.uuid !== 'undefined') {
      if(SharafPR.getCookie('_snrs_id')){
        os_unique_user_id = SharafPR.getCookie('_snrs_id');
      }
      SharafPR.DynamicContent();
      $('.product-recommend').each(function(){
        var campaignID = $(this).attr('id');
        if(campaignIDS.indexOf(campaignID) === -1){
          campaignIDS.push(campaignID);
        }   
      });
     
      if (SyneriseTC.uuid) {
        clearInterval(SharafPR.IntervalTimer);
        if (typeof campaignIDS !== 'undefined' && campaignIDS.length > 0) {
          var recommendationParams = {
            clientUUID: SyneriseTC.uuid,
            additionalFilters: ""
          };

          if (typeof sdgsku !== 'undefined' && sdgsku) {
            var recommendationParams = {
              clientUUID: SyneriseTC.uuid,
              itemId: sdgsku,
              additionalFilters: ""
            };
          }

          if(typeof(sharafSearch) !== 'undefined' && typeof(sharafSearch.getParameterByName) !== 'undefined'){
            var sdg_only = sharafSearch.getParameterByName("sdg") || "";
            if(sdg_only){
              recommendationParams.additionalFilters='attributes.seller_name=="Sharaf DG"'
              
              recommendationParams.filtersJoiner='AND'
            }
          }
          
          if (typeof brandName !== 'undefined' && brandName) {
            recommendationParams.additionalFilters = 'brand=="'+brandName+'"'
            recommendationParams.filtersJoiner='AND'
          }
          if (typeof catName !== 'undefined' && catName) {
            recommendationParams.additionalFilters = 'category == CATEGORY("' + catName + '",0)'
            recommendationParams.filtersJoiner='AND'
          }

          for (var prop in campaignIDS) {
            if (campaignIDS.hasOwnProperty(prop)) {
              (function (campaignID) {        

                var os_page = $("#"+campaignID).attr("data-os-page")
                var os_page_name = $("#"+campaignID).attr("data-os-page-name")
                var os_category = $("#"+campaignID).attr("data-os-categories")
                var os_skus = $("#"+campaignID).attr("data-os-skus")
                var os_count = $("#"+campaignID).attr("data-os-count")

                SharafPR.recommendationAPI(recommendationParams,campaignID,os_page,os_page_name,os_category,os_skus,os_count);        
              })(campaignIDS[prop]);
            }
          }
        }
      }
    }
  },
  recommendationAPI: function(recommendationParams,campaignID,os_page,os_page_name,os_category,os_skus,os_count){
    var url ='https://ai-api.synerise.com/recommendations/v2/recommend/campaigns/' + campaignID;
   
    Promise.allSettled([SharafPR.fetchOS(os_page,os_page_name,os_category,os_skus,os_count), SharafPR.fetchSynerise(url,recommendationParams) ]).then((results) => {
     
      if(results[0].status == "rejected" && results[1].status == "rejected"){
        $('#' + campaignID).remove();
      } else {
        var response = results[1].status == 'fulfilled' && results[1].value ? results[1].value : null
        
          var hitsTemplate = Hogan.compile($('#product_recommendation-template').text());
          var hits = []
          var productIDs = [];
          var urlParse = document.createElement('a');
          if (response) {
            if (DEVICE === 'Mobile' && !$('#product_slider_array_' + campaignID).hasClass("product-grid")) {
              if(typeof(THEMEVERSION) == 'undefined'){
                response.data = response.data.slice(0, 4);
              }
              
            }
            window['product_slider_array_' + campaignID] = [];
            for (var i in response.data) {
              hits = response.data;
              productIDs.push(hits[i].itemId);

              hits[i].discountText = null;
              if (hits[i].salePrice && hits[i].salePrice.value && hits[i].price && hits[i].price.value) {
                if (parseFloat(hits[i].price.value) > parseFloat(hits[i].salePrice.value)) {
                  if (hits[i].attributes.discount) {
                    hits[i].discount = hits[i].attributes.discount;
                    hits[i].discount_val = hits[i].attributes.discount_val;
                    var sharaf_obj = DEVICE == 'Mobile' ? mobileSharafHome : sharaf
                    if (sharaf_obj.discountPercentageShowable(hits[i].attributes.discount)) {
                      hits[i].discountText = hits[i].attributes.discount + '%';
                    } else if (sharaf_obj.discountValueShowable(hits[i].attributes.discount_val)) {
                      hits[i].discountText =
                        sdgCurrency +
                        ' ' +
                        parseInt(hits[i].attributes.discount_val, 10).toLocaleString();
                    }
                  }
                }
              }

              hits[i].currency = sdgCurrency;
              hits[i].regular_price = null;
              if (hits[i].price && hits[i].price.value) {
                if (hits[i].price.value > hits[i].salePrice.value) {
                  var regularPrice = parseFloat(hits[i].price.value);
                  hits[i].regular_price = regularPrice.toLocaleString(undefined, {
                    minimumFractionDigits: algolia.decimal,
                    maximumFractionDigits: algolia.decimal,
                  });
                } else {
                  hits[i].regular_price = null;
                }
              }
  
              hits[i].sale_price = null;
              if (hits[i].salePrice && hits[i].salePrice.value) {
                var finalPrice = parseFloat(hits[i].salePrice.value);
                // alert(typeof(finalPrice));
                hits[i].sale_price = finalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: algolia.decimal,
                  maximumFractionDigits: algolia.decimal,
                });
              }
              if (response.data[i].attributes) {
                var tags = [];
                var promoImg = [];
                for (var j = 0; j < 2; j++) {
                  var tagCount = j + 1;
                  if (
                    typeof response.data[i].attributes['promoImg' + tagCount] !==
                      'undefined' &&
                    response.data[i].attributes['promoImg' + tagCount]
                  ) {
                    promoImg[j] = {
                      image: response.data[i].attributes['promoImg' + tagCount],
                      last: false,
                    };
                  }
                  if (
                    typeof response.data[i].attributes['label' + tagCount] !==
                      'undefined' &&
                    response.data[i].attributes['label' + tagCount]
                  ) {
                    tags[j] = {
                      tagscolor: '',
                      tagstitle: '',
                      'tagsbg-color': '',
                      className: '',
                    };
                    if (
                      typeof response.data[i].attributes[
                        'label' + tagCount + '-color'
                      ] !== 'undefined' &&
                      response.data[i].attributes['label' + tagCount + '-color']
                    ) {
                      // hits[i].tags[j].color = response.data[i].attributes['label-color' + tagCount];

                      tags[j].tagscolor =
                        response.data[i].attributes['label' + tagCount + '-color'];
                    }
                    if (
                      typeof response.data[i].attributes[
                        'label' + tagCount + '-bg-color'
                      ] !== 'undefined' &&
                      response.data[i].attributes['label' + tagCount + '-bg-color']
                    ) {
                      tags[j]['tagsbg-color'] =
                        response.data[i].attributes['label' + tagCount + '-bg-color'];
                    }

                    tags[j].tagstitle = response.data[i].attributes['label' + tagCount];
                    tags[j].className = 'badge-item' + j;
                  }
                }

                if (tags.length !== 0) {
                  hits[i].tags = tags;
                  tags = [];
                }

                if (promoImg.length !== 0) {
                  hits[i].showBundle = false;
                  if (showBundle) {
                    hits[i].showBundle = true;
                  }
                  hits[i].hasPromotionImg = true;
                  hits[i].hasSinglePromo = false;
                  promoImg[promoImg.length - 1].last = true;
                  hits[i].promoImg = promoImg;
                  if (promoImg.length === 1) {
                    hits[i].hasSinglePromo = true;
                  }
                  promoImg = [];
                }
                if (typeof rtl !== 'undefined' && rtl) {
                  hits[i].rtl = true;
                  if (response.data[i].attributes.ar_link) {
                    urlParse.href = response.data[i].link;
                    response.data[i].link = response.data[i].attributes.ar_link + urlParse.search
                  }
                  if (response.data[i].attributes.ar_title) {
                    response.data[i].title = response.data[i].attributes.ar_title
                  }
                } else {
                  hits[i].rtl = false;
                }
                if (response.data[i].attributes.post_id) {
                  hits[i].post_id = response.data[i].attributes.post_id
                }

                if (response.data[i].attributes.seller_name) {
                  hits[i].seller_name = response.data[i].attributes.seller_name
                }
                hits[i].express_delivery = response.data[i].attributes.express_delivery === "1" ? "yes" : "no"
                if (response.data[i].attributes.listingID) {
                  hits[i].external_id = response.data[i].attributes.listingID
                }
                if(hits[i].salePrice && hits[i].salePrice.value && hits[i].price && hits[i].price.value){
                  if(hits[i].salePrice.value < hits[i].price.value){
                    hits[i].discount_value = parseFloat(hits[i].price.value - hits[i].salePrice.value).toFixed(algolia.decimal);
                  }
                }

                if(typeof(sharafSearch) !== 'undefined' && typeof(sharafSearch.getParameterByName) !== 'undefined'){
                  var sdg_only = sharafSearch.getParameterByName("sdg") || "";
                  if(sdg_only){
                   hits[i].link = hits[i].link+'&sdg=true';
                  }
                }
                
                if (response.data[i].attributes.promoID) {
                  if(Array.isArray(response.data[i].attributes.promoID)){
                    hits[i].promoID = response.data[i].attributes.promoID[0]
                  } else {
                    hits[i].promoID = response.data[i].attributes.promoID
                  }
                }
                function roundHalf(num) {
                  return Math.round(num*2)/2;
                }
                if (response.data[i].attributes.product_rating) {
                  hits[i].widthrating =  roundHalf(response.data[i].attributes.product_rating);       
                  hits[i].rating = response.data[i].attributes.product_rating;
                }
                if (response.data[i].attributes.memberPrice) {
                  var tierPrice = parseFloat(
                    response.data[i].attributes.memberPrice
                      .replace(sdgCurrency, '')
                      .trim(),
                    10,
                  );
                  hits[i].tierPrice = tierPrice.toLocaleString(undefined, {
                    minimumFractionDigits: algolia.decimal,
                    maximumFractionDigits: algolia.decimal,
                  });
                }
                if (typeof(response.data[i].attributes.isGift) !== 'undefined' && response.data[i].attributes.isGift) {
                  hits[i].isGift = response.data[i].attributes.isGift;
                }
               
              }
              hits[i].position = parseInt(i, 10) + 1;
  
              window['product_slider_array_' + campaignID].push({
                name: hits[i].title,
                id: hits[i].itemId,
                price: hits[i].sale_price,
                brand: hits[i].brand,
                category: hits[i].category.split(' > ').reverse().join('|'),
                position: parseInt(i, 10) + 1,
                list: typeof getPageType !== 'undefined' ? getPageType() : '',
                dimension4: typeof getPageType !== 'undefined' ? getPageType() : '',
              });
            }
            SharafPR.RecommendationViewScrollEvent(
              response.extras.correlationId,
              campaignID,
              productIDs,
            );
            /*if(typeof(enable_ga4) === 'undefined'){
              dataLayer.push({
                event: 'ls_productImpression',
                ecommerce: {
                  currencyCode: sdgCurrency,
                  impressions: window['product_slider_array_' + campaignID],
                },
              });
            }*/
            

          }

         

          hits = (results[0].status == 'fulfilled' && results[0].value ? results[0].value : []).concat(hits)

          if(hits.length > 0){
            
            var hitHTML = hitsTemplate.render({ hits: hits });
            
            $('.syn-r h3.slider-header').removeClass('hide');

            if(results[0].value){
              $('#product_slider_array_' + campaignID).attr("data-os-products",results[0].value.length)
            }

            $('#product_slider_array_' + campaignID)
              .html(hitHTML)                        
              $('#' + campaignID + ' .product-carousel').removeClass('slick-initialized'); 
              $('#product_slider_array_' + campaignID).not(".product-grid")
              .addClass('product-carousel');
            if (DEVICE !== 'Mobile') {
              sharaf.bindProductSlider('#' + campaignID + ' .product-carousel');
              if($('#' + campaignID + '.ajax-slider .product-grid')){
                //setTimeout(function(){
                  $('#' + campaignID + '.ajax-slider .product-grid').removeClass('slick-initialized'); 
                  sharaf.bindProductSlider('#' + campaignID + '.ajax-slider .product-grid');
                //},500)
                
              }
            } else {
              var mobile_slider = $('#' + campaignID + ' .product-carousel').length ? $('#' + campaignID + ' .product-carousel'): $('#' + campaignID + ' .scroll')
              mobileSharafHome.init_product_slider(mobile_slider )
            }
            SharafPR.dataLayerClick(campaignID);
          } else {
             $('#' + campaignID).remove();
          }
      }
    })
     
    
  },
  dataLayerClick: function (campaignID) {
    $('[data-id="product_slider_array_' + campaignID).on('click', '.slide', function (e) {
      var triggerDataLayer = true
      if($(e.target).closest(".product-addcart").length){
        triggerDataLayer = false
    }
   if(triggerDataLayer) {
      // dataLayer.push({
      //   event: "SDG_RecommendationClick",
      //   eventCategory: "RecommendationClick",
      //   eventAction: $('#'+campaignID+' h3').text(), //there will be 3 types of menuClick
      //   eventLabel: campaignID, //selected menu option i.e. 'MOBILES|SMARTPHONES|iPhone 11 & 11 Pro'
      // });
      var slide = $(this).closest('.slide');
      var carousel_data = $(this).closest('[data-id*="product_slider_array_"]').attr('data-id');

      var index = parseInt(slide.attr('data-original-index'));
      sessionStorage.setItem('clicked_product_index', index);
      sessionStorage.setItem(
        'clicked_product_list',
        $('h3 a', $(this).closest('.product-scroller')).first().text(),
      );

      var product_data = window[carousel_data][index - 1];
      if (product_data && typeof product_data !== 'undefined') {
        // var product = {
        //   name: product_data.name,
        //   id: product_data.id,
        //   price: product_data.price,
        //   category: product_data.category,
        //   brand: product_data.brand,
        //   position: parseInt(index, 10),
        //   dimension4: typeof getPageType !== 'undefined' ? getPageType() : '',
        // };
       /* dataLayer.push({
          event: 'ls_productClick',
          ecommerce: {
            click: {
              actionField: {
                list: typeof getPageType !== 'undefined' ? getPageType() : '',
              },
              products: [product],
            },
          },
        });*/
        //sessionStorage.setItem('clicked_product_index', index);
        // sessionStorage.setItem(
        //   'clicked_product_list',
        //   typeof getPageType !== 'undefined' ? getPageType() : '' || 'Home Page',
        // );
      }
    }
    });
  },
  enhanced_ecommerce_clean_sku: function(sku){
    if(!sku) return "";
    var dashIndex = sku.indexOf("--")
    if(dashIndex != -1){
        return sku.substr(0,dashIndex);
    }
    return sku;
  },
  syneriseCartStatus: function (SDGCart) {
    if (typeof SDGCart !== 'undefined') {
      var cartItems = [];
      if(typeof cart_products_plain !== 'undefined' && Object.keys(cart_products_plain).length > 0){
        for (var i in cart_products_plain) {
          cartItems.push({
            sku: this.enhanced_ecommerce_clean_sku(cart_products_plain[i].product_sku),
            quantity: cart_products_plain[i].product_quantity,
            brand: cart_products_plain[i].product_brand,
            category: cart_products_plain[i].product_categories,
          });
        }
      }
      else if (typeof cart_products !== 'undefined' && Object.keys(cart_products).length > 0) {
        for (var i in cart_products) {
          cartItems.push({
            sku: this.enhanced_ecommerce_clean_sku(cart_products[i].item_id),
            quantity: cart_products[i].product_quantity,
            brand: cart_products[i].item_brand,
            category: cart_products[i].product_categories,
          });
        }
      } 
      if(typeof(SR) !== 'undefined'){
        SR.event.trackCustomEvent(
          'cart.status',
          {
            products: cartItems,
            totalAmount: SDGCart.total,
            totalQuantity: SDGCart.count,
          },
          'CartStatus',
        );
      }
    }
  },
  RecommendationViewScrollEvent: function (correlationId, campaignID, productIDs) {
    if ($('#' + campaignID).length !== 0) {
      var hT = parseInt($('#' + campaignID).offset().top, 10),
        wH = $(window).height();

      if (wH > hT) {
        SharafPR.fireCampaigns.push(campaignID);
        SharafPR.RecommendationViewEvent(correlationId, campaignID, productIDs);
      }

      $(window).scroll(function () {
        if ($('#' + campaignID).isInViewport() && !SharafPR.fireCampaigns.includes(campaignID)) {
          SharafPR.fireCampaigns.push(campaignID);
          SharafPR.RecommendationViewEvent(correlationId, campaignID, productIDs);
        }
      });
    }
  },
  DynamicContent: function () {
    var sdg_only = false;
    if(typeof(sharafSearch) !== 'undefined' && typeof(sharafSearch.getParameterByName) !== 'undefined'){
      sdg_only = sharafSearch.getParameterByName("sdg") || false;
    }
    if(!sdg_only){
      if (
        typeof SyneriseTC !== 'undefined' &&
        typeof SyneriseTC.uuid !== 'undefined' &&
        !SharafPR.hasFired
      ) {
        SyneriseTC.pageVisit();
        SR.dynamicContent.get();
        SharafPR.hasFired = true;
        console.log('Synerise event fired');
      }
    }
  },
  RecommendationViewEvent: function (correlationId, campaignID, productIDs) {
    var url = 'https://ai-api.synerise.com/events/v1/single/recommendation.view';
    var recommendationParams = JSON.stringify({
      eventTimestamp: new Date().toISOString(),
      correlationId: correlationId,
      clientUUID: SyneriseTC.uuid,
      campaignId: campaignID,
      productIds: productIDs,
    });

    $.ajax({
      type: 'POST',
      url: url,
      data: recommendationParams,
      headers: {
        'content-type': 'application/json',
        'x-api-key': SyneriseTC.trackerUID,
      },
      success: function (response) {     
        dataLayer.push({
          event: "SDG_RecommendationSeen",
          eventCategory: "RecommendationSeen",
          eventAction: $('#'+campaignID+' h3').text(), //there will be 3 types of menuClick
          eventLabel: campaignID, //selected menu option i.e. 'MOBILES|SMARTPHONES|iPhone 11 & 11 Pro'
        });
      },
    });
  },
};
jQuery(function ($) {
  $(document).ready(function () {
    SharafPR.IntervalTimer = setInterval(() => {
      SharafPR.syneriseRecommendation();
    }, 1000);
    $(document).on('urlChanges', function () {
      SharafPR.hasFired = false;
      SharafPR.DynamicContent();
    });
  });

  jQuery(document).on('pjax:start', function () {
    if (typeof campaignIDS !== 'undefined') {
      for (var i in campaignIDS) {
        $('[data-id="product_slider_array_' + campaignIDS[i]).off('click');
      }
      campaignIDS = [];
      SharafPR.fireCampaigns = [];
      SharafPR.hasFired = false;
      // SharafPR.syneriseRecommendation();
    }
  });

  jQuery(document).on('pjax:complete', function () {
    SharafPR.syneriseRecommendation();
    SharafPR.DynamicContent();
  });
});
