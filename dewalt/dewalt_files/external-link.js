/**
 * @file
 * Styling handling for form fields.
 */
(function ($, Drupal) {

  Drupal.behaviors.sbdexternallink = {
    attach: function (context, settings) {
      var links = $('.header-nav-primary .coh-menu-list-item a');
      $(links).each(function() {
        var href = $(this).attr('href');
        if (href && href.indexOf('http') === 0 && href.indexOf(window.location.hostname) === -1) {
          $(this).attr('target', '_blank');
          $(this).addClass('ext-link');
        }
      });

      // To remove unwanted empty href link in image text tile.
      // To remove unwanted empty href link in Content tile.
      $('.image-text-tile a, .coh-style-category-tile a').once().each(function() {
        var cleanLinksHref = $(this).attr('href');
        if (cleanLinksHref == '') {
          $(this).removeAttr('href');
        }
      });
    }
  };

})(jQuery, Drupal);
