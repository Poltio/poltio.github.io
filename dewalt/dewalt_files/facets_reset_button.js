(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.facets_reset_button = {
    attach: function (context) {

      var checked = $("input[checked='checked']");
      var block = $('.facets-reset-button a.facets-reset-link');
      var ourterDiv = $(".facets-reset-link-outer-div");

      if (checked.length != 0) {
        if (ourterDiv.length) {
          ourterDiv.removeClass('hidden');
        }
        else {
          block.show();
        }
      }
      else {
        if (ourterDiv.length) {
          ourterDiv.addClass('hidden');
        }
        else {
          block.show();
        }
      }
    },
  };

})(jQuery, Drupal);
