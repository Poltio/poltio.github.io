SharafMixpanelATC = {
    addToCart: function () {
        $(document).on('sdg_added_to_cart', function (e, button,data,addons) {
            var $this = button
            var DataElemt = $this;
            var pagetype = 'product';
            var module_name = 'BuyBox'
            if ($this.parents('.product-wrapper').find('.product-link').length > 0) {
                DataElemt = $this.parents('.product-wrapper').find('.product-link');
                module_name = 'product slider';
                if($this.parents('.product-wrapper').hasClass('synerise-slide')){
                    DataElemt = $this.closest(".slide");
                }
            }
            if ($this.parents('.pdp-moffer').length > 0) {
                var DataElemt = $this;
            }
            if ($this.parents('.slick-slider').length > 0) {
                DataElemt = $this.closest(".slide")
            }

            if ($this.parents('.algolia-slider-v2').length > 0) {
                DataElemt = $this.closest(".slide")
            }

            if (pagetype == 'others') {
                var item_other = {
                    'item_name': DataElemt.attr('title'),
                    'item_brand': DataElemt.attr('data-brand'),
                    'currency': sdgCurrency,
                    'price': DataElemt.attr('data-originalPrice') ? parseFloat(DataElemt.attr('data-originalPrice').replaceAll(",","")):'',
                    'quantity': 1,
                    'seller_name': DataElemt.attr('data-seller-name'),
                    'seller_code': DataElemt.attr('data-seller-code'),
                    'product_promo': DataElemt.attr('data-product-promo'),
                    'express_delivery': DataElemt.attr('data-express-delivery'),
                };

                SDGMixpanel.call("track","Product Added", item_other)
            } else {
                SDGMixpanel.call("track","Product Added", sdg_current_product)
            }
        });        
    }
};

(function ($) {
    jQuery(document).ready(function () {
        SharafMixpanelATC.addToCart();
    });
})(jQuery);