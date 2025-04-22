/**
 * @file
 * Attaches pricespider buy now button functionality.
 */

 (function ($) {

  'use strict';

  Drupal.behaviors.sbd_price_spider = {
    attach: function (context, settings) {
      var locationServiceProvider = drupalSettings.location_services;
      var buynow_pricespider = drupalSettings.buynow_pricespider;
      var locationServiceUrl = drupalSettings.location_service_url;
      var searchCategoryPage = drupalSettings.search_category_page;

      if (locationServiceProvider == '') {
        if (buynow_pricespider == '1') {
          locationServiceProvider = 'pricespider';
        }
        if (buynow_pricespider== '2') {
          locationServiceProvider = 'customlocations';
        }
      }

      $(document).once().on('click', '.ps-wheretobuy-button', function(e) {
        window.open(locationServiceUrl, '_blank');
      });

      // Open PS modal on PDP and search, category pages.
      $(document).on('click', '.ps-buy-button', function (e) {
        var skuId = $(this).attr('data-sku');
        let psModalDiv = $(".ps-container-pdp");
        if (searchCategoryPage == 1) {
          psModalDiv = $(".ps-search-category-modal");
        }
        // Check for PDP, search and category pages.
        if ($(psModalDiv)[0]) {
          $(psModalDiv).children(".ps-widget-container-area").addClass('ps-widget');
          $(psModalDiv).children(".ps-widget").removeAttr("ps-sku");
          $(psModalDiv).children(".ps-widget").attr('ps-sku', skuId);
        }
        var attr = $(psModalDiv).children(".ps-widget").attr('ps-sku');
        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        if (typeof attr !== 'undefined' && attr !== false) {
          PriceSpider.rebind();
        }
        // Add body class to prevent scrolling
        // $('body').addClass('buy-now-modal-open');
        $(this).blur();
        var $modal;
        // $modal = $button.siblings('.ps-container');
        if ($(psModalDiv)[0]) {
          $modal = $(psModalDiv);
        }
        if (locationServiceProvider == 'customlocations') {
          window.location.href = locationServiceUrl;
        }
        else {
          // For PDP, search and category.
          if ($(psModalDiv)[0]) {
            if ($(".ps-container").css('display') == 'none') {
              $(".ps-container").css("display", "block");
            }
          }
          var originalContent;
          var wWidth = $(window).width();
          var dWidth = wWidth * 0.8;
          $modal.dialog({
            width: dWidth,
            modal: true,
            bgiframe: true,
            resizable: false,
            height: 'auto',
            fluid: true,
            closeOnEscape: true,
            position: { my: "center", at: "center", of: window },
            open: function (event, ui) {
              originalContent = $modal.html();
              $('.ui-widget-overlay').on('click', function () {
                $('.ui-dialog-content').dialog('close');
                $('body').removeClass('buy-now-modal-open');
              });
            },
            close: function (event, ui) {
              $modal.html(originalContent);
            },
          });
        }
      });

      // Remove body class to allow scrolling
      $(document).on('click', 'button.ui-dialog-titlebar-close', function() {
        $('body').removeClass('buy-now-modal-open');
      });

      $(document).keyup(function(e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
          $('body').removeClass('buy-now-modal-open');
       }
      });

      // Remove body class to allow scrolling
      $(document).on('click', 'ui-widget-overlay', function() {
        $('body').removeClass('buy-now-modal-open');
      });

      // on window resize run function
      $(window).resize(function () {
        fluidDialog();
      });

      // catch dialog if opened within a viewport smaller than the dialog width
      $(document).on("dialogopen", ".ui-dialog", function (event, ui) {
        fluidDialog();
      });

      function fluidDialog() {
        var $visible = $(".ui-dialog:visible");
        // each open dialog
        $visible.each(function () {
            var $this = $(this);
            var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
            // if fluid option == true
            if (dialog.options.fluid) {
                var wWidth = $(window).width();
                // check window width against dialog width
                if (wWidth < (parseInt(dialog.options.maxWidth) + 50))  {
                    // keep dialog from filling entire screen
                    $this.css("max-width", "90%");
                } else {
                    // fix maxWidth bug
                    $this.css("max-width", dialog.options.maxWidth + "px");
                }
                //reposition dialog
                dialog.option("position", dialog.options.position);
            }
        });
      }
    }
  };

})(jQuery);
