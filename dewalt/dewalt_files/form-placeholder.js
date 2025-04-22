/**
 * @file
 * Styling handling for form fields.
 */
(function ($, Drupal) {

  Drupal.behaviors.sbdformplaceholder = {
    attach: function (context, settings) {
      $('input[type="text"],input[type="email"],textarea', context)
        .each(function() {
          if (!$(this).attr('placeholder')) {
            // If field doesn't have placeholder attribute, set invisible character.
            $(this).attr('placeholder','‎');
          }
      });

      $("input[type='date']").each(function() {
        $(this).on('input', function() {
          if ($(this).val()) {
            // If dates are selected, add class 'date-added'
            $(this).addClass('date-added');
          } else {
            // If no dates are selected, remove class 'date-added'
            $(this).removeClass('date-added');
          }
        });
      });
    }
  };

})(jQuery, Drupal);
