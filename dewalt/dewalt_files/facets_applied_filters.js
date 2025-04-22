/**
 * @file
 * Expands the behaviour search facets.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.facets_applied_filters = {
    attach: function (context) {
      var checkedItems = $(".search-filter .facet-item .is-active");
      var block = $('.facets-applied-filters-block');
      var showResult = $('.show-results-label-block');
      var headerWrapper = $('.product-grid-wrapper-header .header-facet');
      var updateButton = $('.mobile-filters-toggle');
      if (checkedItems.length != 0) {
        block.show();
        headerWrapper.replaceWith(showResult);
        
        // Iterate over each checked item and append a count for each item
        $.each(checkedItems, function(index, item) {
          $('.mobile-filters-toggle-count').remove();
          updateButton.append(`<span class='mobile-filters-toggle-count'>${index + 1}</span>`);
        });
      }
      else {
        block.hide();
        showResult.hide();
      }

      if ($('.facet-categories_category .facet-item').children().length === 0 && $('.search-filter').children().hasClass('facet-empty')) {
        $('.mobile-filters-header').hide();
      }

      $(checkedItems).once('checked-inputs').each(function() {
        var facet_label = $(this).children('.facet-item__value').text();
        var facet_id = $(this).attr('data-drupal-facet-item-id');
        var resetFacetItem = $(`<span data-facet-id=${facet_id} class="applied-filter-facet">${facet_label}</span>`);
        $('.facets-applied-filters-block').append(resetFacetItem);

        resetFacetItem.once('trigger-reset').on('click', function() {
          var facet_identity = $(this).attr("data-facet-id");
          var facetItem = $('.facet-item').find(`#${facet_identity}`);
          facetItem.trigger('click');
        });
      });
    },
  };
})(jQuery, Drupal);
