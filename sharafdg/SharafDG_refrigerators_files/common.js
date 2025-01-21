

SDGMixpanel = {
    toPush: [],
    call: function (func, event, params) {
        if (typeof mixpanel !== 'undefined' && mixpanel[func]) {
            params.wp_user_id = typeof sdg_user_id !== 'undefined' ? sdg_user_id : '';
            Object.keys(params).map(function(key){
                if(!params[key] && params[key]!==0){
                  delete params[key];
                }
            })
            mixpanel[func](event, params);
        } else if(!SDGMixpanel.loaded) {
            SDGMixpanel.toPush.push({ func: func, event: event, params: params })
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
    removePrecedingZeros:function(inputString) {
        return inputString.replace(/^0+/, '');
    },
    categoryData: function (category, item) {
        if (category) {
            var categories = category.split("|").reverse();
            item['item_category'] = categories.join(">")
        }
    },
    set_category_object: function (item, category, split_by = "|", type) {
        if (!category) return;
        var categories = category.split(split_by)
        if (type == 'reverse') {
            categories = categories.reverse()
        }

        item['item_category'] = categories.join(">")
        return item;
    },
    encodeValue: function (value) {
        return value.replaceAll("/", "%2F").replaceAll(/\|/g, "%7C").replaceAll(",", "%2C")
    },
    removeEmptyValues: function (items) {
        items.map(function (item) {
            Object.keys(item).map(function (key) {
                if (!item[key] && item[key] !== 0) {
                    delete item[key];
                } else {
                    if (key == "price" || key == "discount") {
                        item[key] = parseFloat(item[key].toString().replaceAll(",", ""))
                    } else if (key == "seller_code") {
                        // item[key] = item[key].replace("mktp-","")
                    }
                }
            })
        })
        return items;
    },
    ItemDataLayer: function (product, quantity) {
        var item = {
            item_name: product.item_name,
            item_id: SDGMixpanel.enhanced_ecommerce_clean_sku(product.item_id),
            short_sku: SDGMixpanel.removePrecedingZeros(SDGMixpanel.enhanced_ecommerce_clean_sku(product.item_id)),
            price: product.product_price,
            currency: sdgCurrency,
            quantity: quantity,
            seller_name: product.seller_name,
            seller_code: product.seller_code,
            offer_sku: product.offer_sku
        };
        if(product.delivery_option){
            item.delivery_option = product.delivery_option;
        }
        if (product.express_delivery) {
            item.express_delivery = product.express_delivery;
        }
        if (product.item_brand) {
            item.item_brand = product.item_brand;
        }
        if (product.product_promo) {
            item.product_promo = product.product_promo;
        }
        if (typeof (product.product_categories) !== 'undefined' && product.product_categories) {
            //var product_categories = product.product_categories.split('|');  
            SDGMixpanel.categoryData(product.product_categories, item);
        }

        return item;
    },
}