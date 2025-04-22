(function($) {
    Drupal.behaviors.productQuickView = {
      attach: function(context, settings) {
        $('.coh-style-product-tile', context).once().each(function() {
            // Removes content interaction classes if quick view is enabled
            if($(this).find('.quick-view-btn-container').length !== 0) {
                $(this).find('.product-image-container').removeClass('product-image-zoom').removeClass('product-image-shot');
            }
        });
      }
    };
  })(jQuery);
  