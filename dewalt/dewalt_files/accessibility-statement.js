/**
 * @file
 * Handles display of accessibility statement link
 */

(function ($) {
    Drupal.behaviors.accessibilityStatement = {
      attach: function (context, settings) {
        // Function to handle resizing and showing/hiding the accessibility statement link
      function handleAccessibilityStatement() {
        // Check if the dataLayer variable is defined and if drupalCountry is available
        if (typeof dataLayer !== 'undefined' && dataLayer[0].drupalCountry) {
          var country = dataLayer[0].drupalCountry;
          var language = dataLayer[0].drupalLanguage;
          var browserWidth = window.innerWidth;

          // Replace text for FR translation
          if((country === 'US' || country === 'CA') && language == 'fr') {
            $('.accessibility-statement-link').text('Déclaration d\'accessibilité').attr('title', 'Déclaration d\'accessibilité');
          }

          // Show accessibility statement link for US and CA only
          // We're checking browser width as the mobile version is a different section
          if ((country === 'US' || country === 'CA') && browserWidth >= 1024) {
            $('.accessibility-statement-link.desktop').show();
            $('.accessibility-statement-link.mobile').hide();
          } else if((country === 'US' || country === 'CA') && browserWidth < 1024) {
            $('.accessibility-statement-link.mobile').css('display', 'block');
            $('.accessibility-statement-link.desktop').hide();
          } else {
            $('.accessibility-statement-link').hide();
          }
        }
      }
      // Call handleAccessibilityStatement on page load
      $(document).ready(function() {
        handleAccessibilityStatement();
      });

      // Add event listener for resize event to call handleAccessibilityStatement on browser resize
      $(window).resize(function() {
        handleAccessibilityStatement();
      });
      }
    };
  })(jQuery);