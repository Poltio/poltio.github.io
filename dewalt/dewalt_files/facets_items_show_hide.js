/**
 * @file
 * Expands the behaviour search facets.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.facetShowHide = {
    attach: function (context) {
      // Show/hide for individual facets.
      var open = function($container) {
        $container.addClass('open');
        $container.find('button.show-hide').addClass('open').attr('aria-expanded', 'true');
        $container.find('.facet-items').slideDown(300);
      };

      var close = function($container) {
        $container.removeClass('open');
        $container.find('button.show-hide').removeClass('open').attr('aria-expanded', 'false');
        $container.find('.facet-items').slideUp(300);
      };

      // Function to open the last clicked filter
      var openLastClickedFilter = function() {
        var lastClickedFilterID = localStorage.getItem('lastClickedFilterID');
        if (lastClickedFilterID) {
          open($('#' + lastClickedFilterID));
          localStorage.removeItem('lastClickedFilterID');
        } else {
          open($('.facet-widget', context).not('.categories').first());
        }
      };

      // Scrolls down page to filters if the 'clear all' link has been clicked
      var clearAllFilterReload = function () {
        var lastClickedFilterID = localStorage.getItem('facetsResetLinkClicked');
        if (lastClickedFilterID === 'true') {
          $('html, body').animate({
            scrollTop: $("#product-filters").offset().top - 50
          }, 600);
          localStorage.removeItem('facetsResetLinkClicked');
        }
      }

      openLastClickedFilter();
      clearAllFilterReload();

      $('.facet-widget', context).once('facet-show-hide').each(function() {
        var $container = $(this);

        $container.find('button.show-hide').click(function(e) {
          if ($container.hasClass('open')) {
            close($container);
          }
          else {
            // Don't close categories on desktop.
            var openWidgets = $('.facet-widget.open', context);
            if (window.matchMedia('(min-width: 768px)')) {
              openWidgets = openWidgets.not('.categories');
            }
            close(openWidgets);
            open($container);
          }

          localStorage.setItem('lastClickedFilterID', $container.find('.facet-items').parent('.facet-widget').attr('id'));

          e.preventDefault();

        });
      });

      // Show/hide for full facets on mobile.
      $('.mobile-filters-toggle', context).once('facet-show-hide').click(function () {
        var $button = $(this), $filters = $('.filters', context);

        if ($button.hasClass('open')) {
          $button.removeClass('open').attr('aria-expanded', 'false');
          $filters.removeClass('open').slideUp(300);
        } else {
          $button.addClass('open').attr('aria-expanded', 'true');
          $filters.addClass('open').slideDown(300);
        }
      });

      $('.close-filters', context).once('facet-show-hide').click(function() {
        var $button = $('.mobile-filters-toggle', context), $filters = $('.filters', context);

        if ($button.hasClass('open')) {
          $button.removeClass('open').attr('aria-expanded', 'false');
          $filters.removeClass('open').slideUp(300);
        }
      });

      // Search filters show and hide feature.
      var showLessFilters = Drupal.t("View less filters");
      var showAllFilters = Drupal.t("View all filters");
      if ($('.additional-filters')[0]) {
        var additionalFilters = $('.additional-filters');
        additionalFilters.hide();
      }
      $('.view-all-filters-btn', context).click(function() {
        var $button = $(this);
        var $filterWrapper = '';
        if ( $(".search-filter").hasClass("facet-multipleproductspecfilters") ) {
          var $filterWrapper = $(".facet-multipleproductspecfilters");
        }
        else {
          var $filterWrapper = $(".facet-multipleproductspecfiltersforcategory");
        }
        var $slideToggle = $(".additional-filters");
        if ($button.hasClass('filters-open')) {
          $button.removeClass('filters-open').attr('area-expanded', 'false');
          $filterWrapper.removeClass("filters-open").attr("area-expanded", "false");
          // Change button lable.
          $button.html(showAllFilters);
          $slideToggle.slideUp(1000);
        }
        else {
          $button.addClass('filters-open').attr('area-expanded', 'true');
          $filterWrapper.addClass("filters-open").attr("area-expanded", "true");
          // Change button lable.
          $button.html(showLessFilters);
          $slideToggle.slideDown(1000);
        }
      });

      // Setting value of reset link
      $('a.facets-reset-link').click(function(e) {
        localStorage.setItem('facetsResetLinkClicked', 'true');
      });

      $(".collapsible-button").once('.collapsible-button').each(function (index, value) {
        $(this).parent().find('.js-facet-deactivate').remove()
        if (index > 0) {
          if ($(this).parent().find('ul').css('display') == 'none') {
            $(this).text('(-) ');
            if (drupalSettings.isCoreMds2024) {
              $(this).addClass('expanded');
            }
          } else {
            $(this).text('(+) ');
            if (drupalSettings.isCoreMds2024) {
              $(this).removeClass('expanded');
            }
          }
          $(this).parent().find('ul').slideToggle();
          $(this).parent().find('li').css("margin-left", "8px");
        }
        else {
          $(this).text('(-) ');
          if (drupalSettings.isCoreMds2024) {
            $(this).addClass('expanded');
          }
        }
      });
      $('.collapsible-button', context).once().click(function () {
        if ($(this).parent().find('ul').css('display') == 'none') {
          $(this).text('(-) ');
          if (drupalSettings.isCoreMds2024) {
            $(this).addClass('expanded');
          }
        } else {
          $(this).text('(+) ');
          if (drupalSettings.isCoreMds2024) {
            $(this).removeClass('expanded');
          }
        }
        $(this).parent().find('ul').slideToggle();
      });
    }
  };
  // Adjusts focus in search results so when the user selects a filter
  // the page will scroll down to the results
  $(document).ready(function () {
    var checkedItems = $(".facet-item .is-active");
    if (checkedItems.length > 0) {
      $('html, body').animate({
        scrollTop: $("#product-filters").offset().top - 50
      }, 600);
    }
  });
})(jQuery, Drupal, drupalSettings);
