(function($) {
  Drupal.behaviors.contentTables = {
    attach: function(context, settings) {
      // Adds data attribute on cells so the table headers display properly on mobile layout
      $('.sbd-table-component').once().each(function() {
        var thisElem = $(this);
        $(thisElem).find('th div').each(function(i, elem) {
          var num = i + 1;
          var thisCell = thisElem.find('td:nth-child(' + num + ')');
          $(thisCell).attr('data-title', $(elem).text().trim());
        });
      });
    }
  };
})(jQuery);
