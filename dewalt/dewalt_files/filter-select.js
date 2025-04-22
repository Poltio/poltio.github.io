(function($) {
  Drupal.behaviors.filterSelect = {
    attach: function (context, settings) {
      $('.coh-style-article-filter-select select').select2({
        minimumResultsForSearch: -1,
        templateResult: function (data, container) {
          if (data.element) {
            $(container).addClass($(data.element).attr("class"));
          }
          return data.text;
        }
      });
    }
  };
})(jQuery);
