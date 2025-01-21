SharafGAATC = {
    addAddons: function(addons,dataLayerObj){
        if(addons){
            product_addons =[];
            addons.map(function(addon){
                var addon_name = ''
                var addon_sku = ''
                var details = addon.value.split('|')
                if(details.length > 1){
                    addon_name = details[1]
                    addon_sku = details[0]
                } else {
                    addon_name = details[0]
                }
                if(typeof(sdg_current_product) !== 'undefined' && sdg_current_product && sdg_current_product.price){
                    dataLayerObj.ecommerce.value = parseFloat(addon.price) + parseFloat(sdg_current_product.price);
                }    
                product_addons.push(addon_name.trim());
                dataLayerObj.ecommerce.items.push({
                    'item_name': addon_name.trim(),
                    'item_id': addon_sku,
                    'price': parseFloat(addon.price),
                    'item_category':addon.name,
                    'item_brand': 'Sharaf DG Addons',
                    'parent_sku': sdg_current_product.item_id,
                    'seller_name': 'Sharaf DG',
                    'seller_code': 'sdg',
                    'express_delivery': sdg_current_product.express_delivery,
                    'product_promo':'sdg_addons',
                    'listing_id':'sdg_addons'
                })
            })
            dataLayerObj.product_addons = product_addons.join("|");
        }
    },
    addToCartGA: function () {
        $(document).on('sdg_added_to_cart', function (e, button,data,addons) {
            var $this = button
            var DataElemt = $this;
            var pagetype = 'product';
            var module_name = 'BuyBox'
            if ($this.parents('.product-wrapper').find('.product-link').length > 0) {
                DataElemt = $this.parents('.product-wrapper').find('.product-link');
                module_name = 'product slider';
                if($this.parents('.product-wrapper').hasClass('synerise-slide')){
                    module_name = 'Recommendation';
                    DataElemt = $this.closest(".slide");
                }
               
                if (DataElemt.parents('.search-results').length > 0) {      
                    module_name = 'search';    
                }
                pagetype = 'others';
                
            }
            if ($this.parents('.pdp-moffer').length > 0) {
                var DataElemt = $this;
                module_name = 'others offer';
                pagetype = 'others';
            }
            if ($this.parents('.slick-slider').length > 0) {
                DataElemt = $this.closest(".slide")
            }

            if ($this.parents('.algolia-slider-v2').length > 0) {
                DataElemt = $this.closest(".slide")
            }

            if (pagetype == 'others') {
                var ga_item_other = {
                    'item_name': DataElemt.attr('title'),
                    'item_id': SharafDGGA4.enhanced_ecommerce_clean_sku(DataElemt.attr('data-sku-promo')),
                    'item_brand': DataElemt.attr('data-brand'),
                    'currency': sdgCurrency,
                    'price': DataElemt.attr('data-originalPrice') ? parseFloat(DataElemt.attr('data-originalPrice').replaceAll(",","")):'',
                    'quantity': 1,
                    'seller_name': DataElemt.attr('data-seller-name'),
                    'seller_code': DataElemt.attr('data-seller-code'),
                    'product_promo': DataElemt.attr('data-product-promo'),
                    'express_delivery': DataElemt.attr('data-express-delivery'),
                };
                if(DataElemt.attr('data-seller-name') != 'Sharaf DG'){
                    ga_item_other.listing_id = DataElemt.attr('data-listing-id')
                }
                var gaItemOtherCat = DataElemt.attr('data-category');
                
                if (typeof (gaItemOtherCat) !== 'undefined' && gaItemOtherCat) {
                    var separator = "|";
                    if(module_name == 'Recommendation'){
                        separator = ">";
                        ga_item_other = SharafDGGA4.set_category_object(ga_item_other, gaItemOtherCat, separator,'');
                    } else {
                        ga_item_other = SharafDGGA4.set_category_object(ga_item_other, gaItemOtherCat, separator,'reverse');
                    }
                    
                }                

                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                var dataLayerObj = {
                    event: 'add_to_cart',
                    client_platform: SharafDGGA4.getClientPlatform(),
                    seller_name: ga_item_other.seller_name,
                    //product_addons: 'GET M365 SUBSCRIPTION WITH 3 EXTRA MONTHS', // add all addons using delmiter 
                    module_name: module_name,
                    ecommerce: {
                        currency: sdgCurrency,
                        value: ga_item_other.price * SharafDGGA4.get_item_quantity(ga_item_other),
                        items: SharafDGGA4.removeEmptyValues([
                            ga_item_other
                        ])
                    }
                }
                dataLayer.push(dataLayerObj);
                SharafDGGA4.sendToNative(dataLayerObj)

            } else {
                if(typeof sdg_current_product_category != 'undefined'){
                    var current_product_category = JSON.parse(sdg_current_product_category)
                    Object.keys(current_product_category).map(function(key){
                        sdg_current_product[key] = current_product_category[key]
                    })
                }
                var dataLayerObj = {
                    event: 'add_to_cart',
                    client_platform: SharafDGGA4.getClientPlatform(),
                    seller_name: sdg_current_product.seller_name,
                    module_name:'BuyBox',
                    ecommerce: {
                        currency: GACurrency,
                        value: parseFloat(sdg_current_product.price) * SharafDGGA4.get_item_quantity(sdg_current_product),
                        items: SharafDGGA4.removeEmptyValues([
                            sdg_current_product
                        ])
                    }
                }
                SharafGAATC.addAddons(addons,dataLayerObj)
                dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
                dataLayer.push(dataLayerObj);
                SharafDGGA4.sendToNative(dataLayerObj)
            }
        });        
    }
};

(function ($) {
    jQuery(document).ready(function () {
        SharafGAATC.addToCartGA();
    });
})(jQuery);