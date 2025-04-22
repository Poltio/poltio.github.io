/**
 * @file
 * Styling handling for form fields.
 */
(function ($, Drupal) {

  Drupal.behaviors.sbdcomponentcustomization = {
    attach: function (context, settings) {
      var imageTextTileComponents = $('.image-text-tile', context);
      $(imageTextTileComponents).each(function() {
        var headingContainerSelector = $(this).find('.heading-container');
        var headingSelector = $(this).find('.heading');
        var ctaSelector = $(this).find('.cta-container');
        if ((headingSelector[0].innerHTML == "" && ctaSelector[0].innerHTML == "") ||
        (headingSelector[0].innerText == "" && ctaSelector[0].innerText == "")
        ) {
          $(headingContainerSelector).css("display", "none")
        }
        // Check if there are 2 cta's rendering.
        else {
          if (ctaSelector.length > 1) {
            $(headingContainerSelector).css("display", "flex");
          }
        }
      });
    }
  };
  // Add margin-bottom on wysiwig when cta is present (need to add this code as it ensures to execute when DOM is fully loaded).
  $(document).ready(function() {
    $('.image-text-tile').each(function() {
        var ctaSelector = $(this).find('.cta-container');
        var wysiwigSelector = $(this).find('.coh-wysiwyg');

        if (wysiwigSelector.length && ctaSelector.length && ctaSelector[0].innerHTML.trim() !== "") {
            wysiwigSelector.css("margin-bottom", "32px");
        }
    });
});
})(jQuery, Drupal);
