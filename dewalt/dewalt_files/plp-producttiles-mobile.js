(function ($) {
    Drupal.behaviors.plpMobileView = {
      attach: function (context, settings) {
        function plpHorizontal() {
            if ($('#product-list').length > 0) {
              // Select each product tile within the specified context
              $('.coh-style-filtered-product-grid .product-grid-wrapper .coh-row .coh-row-inner .coh-column').each(function () {
                if ($(this).parent().hasClass('views-col')) {
                  $(this).parent().css("width", "");
                }
                var $productTile = $(this).find('.gsap-carousel-item .coh-container .coh-style-product-tile');

                // Check window width to determine if it's less than 391px
                if ($(window).width() < 768) {
                  $productTile.addClass('product-tile-horizontal');

                  if($productTile.find('.product-grid-horizontal-img').length == 0) {
                    $productTile.find('.product-image-container').wrapAll('<div class="product-grid-horizontal-img"></div>');
                  }
                  if($productTile.find('.product-grid-horizontal-desc').length == 0) {
                    $productTile.find('.product-status, .product-sku, .product-title, .duplo-review-rating, .variant-text-container').wrapAll('<div class="product-grid-horizontal-desc"></div>');
                  }
                } else {
                  if ($(this).parent().hasClass('views-col')) {
                    $(this).parent().css("width", "33.333333333333%");
                  }
                  $productTile.removeClass('product-tile-horizontal');
                  // Only unwrap if the element is already wrapped
                  if ($productTile.find('.product-image-container').parent().hasClass('product-grid-horizontal-img')) {
                    $productTile.find('.product-image-container').unwrap();
                  }
                  if ($productTile.find('.product-status').parent().hasClass('product-grid-horizontal-desc')) {
                    $productTile.find('.product-status, .product-sku, .product-title, .duplo-review-rating, .variant-text-container').unwrap();
                  }
                }
              });
            }
          }

          // Initial call
          plpHorizontal();

          // Re-call on window resize
          $(window).on('resize', function() {
            plpHorizontal();
          });
      }
    };
  })(jQuery);
