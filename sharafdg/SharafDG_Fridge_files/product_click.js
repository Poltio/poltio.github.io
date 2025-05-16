
SharafDGGA4Click = {
    product_click: function (product, index,item_list_name,module_name) {

        var dataLayerObj = {
            event: 'select_item',
            client_platform: SharafDGGA4.getClientPlatform(),
            module_name: module_name,
            ecommerce: {
                item_list_name: item_list_name,
               // item_list_id: '<item_list_id>',
                items: SharafDGGA4.removeEmptyValues([product])
            }
        }
        dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        dataLayer.push(dataLayerObj);
        SharafDGGA4.sendToNative(dataLayerObj)

        console.log(product)
        console.log(index)

        sessionStorage.setItem('clicked_product_index', index);
        sessionStorage.setItem('clicked_product_list', SharafDGGA4.getPageType() || 'Home Page');

        setTimeout(function () {
            if (window.is_pjax_enabled === undefined) {
                window.location = link
            }
        }, 0)
    },
    init: function () {

        $(document).on('populateResult', function (e, content) {
            $("#hits.product-items").on('click', '.slide a', function (e) {

                if ($(e.target).closest(".addtocart_wrap").length) {
                    e.preventDefault()
                    $(".add_to_cart_button", $(e.target).closest(".addtocart_wrap")).click()
                    return false;
                }

                if (window.is_pjax_enabled === undefined) {
                    e.preventDefault()
                }

                var slide = $(this).closest('.slide')
                var link = $("a.product-link", slide)

                var urlParams = new URLSearchParams(window.location.search);
                var pageQuery = urlParams.get('page_number');

                var local_index = $(".product-items .slide").index(slide) + 1

                if (pageQuery) {
                    var index = local_index + content.hitsPerPage * (pageQuery - 1)
                } else {
                    var index = local_index
                }
                if(typeof(window.search_product_list !== 'undefined') && window.search_product_list){
                    var product_data = window.search_product_list[local_index - 1]

                    if(product_data.is_paid){
                        var product_data = {
                            post_title: '',
                            price: '',
                            discount_val: '',
                            main_sku: '',
                            taxonomies: {
                                product_brand: ''
                            }
                        }
                        var default_promo = {

                        }
                    } else {
                        var default_promo = SharafDGGA4.get_algolia_deafult_promo(product_data)
                    }

                    var product = {
                        'item_name': product_data.post_title,
                        'item_id': product_data.main_sku,
                        'item_brand': SharafDGGA4.get_brand(product_data),
                        'currency': GACurrency,
                        'discount': product_data.discount_val,
                        'index': index,
                    // 'item_list_id': '<list id>',
                        'item_list_name': "search",
                        'price': product_data.price,
                        'quantity': 1,
                        'seller_name': default_promo.seller_name,
                        'product_promo': default_promo.id,
                        'product_source': product_data.is_paid ? 'onlinesales' : appType,
                        'express_delivery': default_promo.fulfillment_center_code == "fbo" ? "yes" : "no"
                    }
                    if(default_promo.seller_name != 'Sharaf DG'){
                        product.listing_id = product_data.external_id;
                    }
                    var cat_split = "|";
                    var cat_type = "reverse";
                    product = SharafDGGA4.set_category_object(product,link.data("category"),cat_split,cat_type )
                    SharafDGGA4Click.product_click(product, index, "search", "search"); 
                }
            })
        })

    }
};

(function ($) {
    $(document).on("ready", function (e) {
        SharafDGGA4Click.init()
    });
})(jQuery)

